(function(root){
'use strict';
function gate(key,work,locks){
 if(root.indexedDB)return new Promise((resolve,reject)=>{
  const req=root.indexedDB.open('skillup-physics-locks',1);let cancelled=false;
  req.onupgradeneeded=()=>req.result.createObjectStore('locks');
  req.onblocked=()=>{cancelled=true;reject(Error('Storage blocked'));};
  req.onerror=()=>reject(req.error);
  req.onsuccess=()=>{const db=req.result;if(cancelled){db.close();return;}const tx=db.transaction('locks','readwrite');let value,error;tx.oncomplete=()=>{db.close();resolve(value);};tx.onabort=()=>{db.close();reject(error||tx.error);};tx.objectStore('locks').get(key).onsuccess=()=>{try{value=work();}catch(e){error=e;tx.abort();}};};
 });
 if(locks?.request)return locks.request(key,work);
 return Promise.reject(Error('Atomic storage unavailable'));
}
async function record(storage,event,currentOwner,locks=root.navigator?.locks){
 if(!event||event.review)return false;
 if(!event.owner||event.owner!==currentOwner()||!event.attemptId||!Number.isSafeInteger(event.score)||event.score<0)throw Error('Invalid reward');

 const key='skillup:physics:reward:'+encodeURIComponent(JSON.stringify([event.owner,event.topic,event.attemptId]));
 return gate(key,()=>{if(currentOwner()!==event.owner)throw Error('Account changed');if(storage.getItem(key))return false;storage.setItem(key,JSON.stringify(event));return true;},locks);
}
const pendingPrefix=owner=>'skillup:physics:pending:'+encodeURIComponent(owner)+':';
async function submit(storage,event,currentOwner,locks,cloud){
 if(event.review)return false;
 if(event.owner!==currentOwner())throw Error('Account changed');
 const key=pendingPrefix(event.owner)+encodeURIComponent(JSON.stringify([event.topic,event.attemptId]));
 if(!storage.getItem(key))storage.setItem(key,JSON.stringify(event));
 const raw=storage.getItem(key),saved=JSON.parse(raw);
 const result=await record(storage,saved,currentOwner,locks);
 if(cloud){if(currentOwner()!==saved.owner)throw Error('Account changed');await cloud(saved);if(currentOwner()!==saved.owner)throw Error('Account changed');}
 if(storage.getItem(key)===raw)storage.removeItem(key);
 return result;
}
async function recover(storage,owner,currentOwner,locks,cloud){
 if(owner!==currentOwner())throw Error('Account changed');
 const prefix=pendingPrefix(owner),keys=[];
 for(let i=0;i<storage.length;i++){const k=storage.key(i);if(k?.startsWith(prefix))keys.push(k);}
 for(const key of keys){const raw=storage.getItem(key);if(!raw)continue;const event=JSON.parse(raw);if(event.owner!==owner)throw Error('Invalid pending owner');await submit(storage,event,currentOwner,locks,cloud);}
}
async function cloudRecord(db,event,currentOwner){
 if(event.review||event.subject!=='physics'||event.topic!=='physical_quantities_practice'||!event.owner||event.owner!==currentOwner()||! /^[a-zA-Z0-9-]{1,80}$/.test(event.attemptId)||!Number.isInteger(event.score)||event.score<0||event.score>30)throw Error('Invalid cloud reward');
 const ref=db.collection('skillup_progress').doc(event.owner+'_physics_'+event.topic);
 const transact=()=>db.runTransaction(async tx=>{const snap=await tx.get(ref);if(currentOwner()!==event.owner)throw Error('Account changed');const prior=snap.exists?snap.data():{},events=Array.isArray(prior.reward_events)?prior.reward_events:[];const old=events.find(e=>e.attemptId===event.attemptId);if(old){if(old.owner!==event.owner||old.score!==event.score)throw Error('Conflicting reward');return;}if(events.length>=1000)throw Error('Reward ledger capacity reached');tx.set(ref,{user_id:event.owner,reward_events:[...events,event]},{merge:true});});
 try{await transact();}catch(e){if(e.code!=='permission-denied'||currentOwner()!==event.owner)throw e;await ref.set({user_id:event.owner},{merge:true});if(currentOwner()!==event.owner)throw Error('Account changed');await transact();}
}
const api={record,submit,recover,cloudRecord};if(typeof module==='object'&&module.exports)module.exports=api;else root.PhysicsRewards=api;
})(globalThis);

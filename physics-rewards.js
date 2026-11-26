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
async function submit(storage,event,currentOwner,locks){
 if(event.review)return false;
 if(event.owner!==currentOwner())throw Error('Account changed');
 const key=pendingPrefix(event.owner)+encodeURIComponent(JSON.stringify([event.topic,event.attemptId]));
 if(!storage.getItem(key))storage.setItem(key,JSON.stringify(event));
 const raw=storage.getItem(key),saved=JSON.parse(raw);
 const result=await record(storage,saved,currentOwner,locks);
 if(storage.getItem(key)===raw)storage.removeItem(key);
 return result;
}
async function recover(storage,owner,currentOwner,locks){
 if(owner!==currentOwner())throw Error('Account changed');
 const prefix=pendingPrefix(owner),keys=[];
 for(let i=0;i<storage.length;i++){const k=storage.key(i);if(k?.startsWith(prefix))keys.push(k);}
 for(const key of keys){const raw=storage.getItem(key);if(!raw)continue;const event=JSON.parse(raw);if(event.owner!==owner)throw Error('Invalid pending owner');await submit(storage,event,currentOwner,locks);}
}
const api={record,submit,recover};if(typeof module==='object'&&module.exports)module.exports=api;else root.PhysicsRewards=api;
})(globalThis);

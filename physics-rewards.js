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
const api={record};if(typeof module==='object'&&module.exports)module.exports=api;else root.PhysicsRewards=api;
})(globalThis);

(function(root){
'use strict';
async function record(storage,event,currentOwner,locks=root.navigator?.locks){
 if(!event||event.review)return false;
 if(!event.owner||event.owner!==currentOwner()||!event.attemptId||!Number.isSafeInteger(event.score)||event.score<0)throw Error('Invalid reward');
 if(!locks?.request)throw Error('Atomic reward storage unavailable');
 const key='skillup:physics:reward:'+encodeURIComponent(JSON.stringify([event.owner,event.topic,event.attemptId]));
 return locks.request(key,()=>{if(currentOwner()!==event.owner)throw Error('Account changed');if(storage.getItem(key))return false;storage.setItem(key,JSON.stringify(event));return true;});
}
const api={record};if(typeof module==='object'&&module.exports)module.exports=api;else root.PhysicsRewards=api;
})(globalThis);

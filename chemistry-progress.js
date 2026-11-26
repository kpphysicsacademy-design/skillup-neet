/* Chemistry progress storage: no migration of unowned legacy data. */
(function(root){
'use strict';
function create(storage,uid,topic){
 const prefix='skillup:chemistry:v2:'+encodeURIComponent(uid||'guest')+':';
 const key=prefix+'attempt:'+encodeURIComponent(topic);
 const ledger=prefix+'ledger';
 const memory=new Map();
 function read(k){try{const raw=storage.getItem(k);return raw===null?(memory.get(k)||null):JSON.parse(raw);}catch(e){return memory.get(k)||null;}}
 function write(k,v){memory.set(k,v);try{storage.setItem(k,JSON.stringify(v));return true;}catch(e){return false;}}
 function restore(bank){const s=read(key);if(!s||s.bank!==bank||!Array.isArray(s.ids)||!s.ids.length||!Number.isInteger(s.index)||s.index<0||s.index>s.ids.length||!Number.isInteger(s.score)||s.score<0||s.score>s.index+(s.locked?1:0)||!Array.isArray(s.wrongAttempts)||typeof s.id!=='string')return null;return s;}
 function complete(s,date){if(!s||typeof s.id!=='string'||!s.id||!Array.isArray(s.ids)||!s.ids.length||s.index!==s.ids.length||!Number.isInteger(s.score)||s.score<0||s.score>s.ids.length)throw Error('Invalid completion');
 const data=read(ledger)||{events:{}};
 const id=JSON.stringify([topic,s.id]);
 if(!Object.prototype.hasOwnProperty.call(data.events,id)){data.events[id]={topic,date,score:s.score,total:s.ids.length,review:!!s.review};write(ledger,data);}
 return data.events[id];}
 async function completeAtomic(s,date,locks=root.navigator?.locks){
  if(!locks?.request)throw Error('Atomic reward storage unavailable');
  return locks.request(ledger,()=>complete(s,date));
 }
 function summary(){const data=read(ledger)||{events:{}};const events=Object.values(data.events).filter(e=>!e.review);return {xp:events.reduce((n,e)=>n+e.score*10,0),quizzes:events.length,days:[...new Set(events.map(e=>e.date))].sort(),events};}
 return {restore,save:s=>write(key,s),complete,completeAtomic,summary};
}
const api={create};if(typeof module==='object'&&module.exports)module.exports=api;else root.ChemistryProgress=api;
})(typeof globalThis!=='undefined'?globalThis:this);

/* Candidate adapter; requires emulator qualification before quiz integration. */
(function(root){
 'use strict';
 function create(topic,api=root.SkillUpAuth,storage=root.sessionStorage){
  if(!/^[a-z0-9-]+$/.test(topic))throw Error('Invalid Mathematics topic');
  let owner=null,epoch=0,ready=false;
  const auth=api.auth;
  const unsubscribe=auth.onAuthStateChanged(user=>{if(ready&&user?.uid!==owner)epoch++;});
  const initial=api.getSession().then(s=>{owner=s?.user?.uid||null;ready=true;return owner;});
  const key=()=> 'skillup.maths.pending.v1:'+encodeURIComponent(owner)+':'+topic;
  function valid(e){return ready&&owner&&epoch===e&&auth.currentUser?.uid===owner;}
  async function flush(){
   await initial;const e=epoch;
   if(!valid(e)||e!==0)throw Error('Account session changed');
   const raw=storage.getItem(key());if(!raw)return false;
   const row=JSON.parse(raw);
   if(row.owner!==owner||row.topic!==topic||!Number.isSafeInteger(row.finishedAt)||!Number.isInteger(row.score)||!Number.isInteger(row.total)||row.total<1||row.score<0||row.score>row.total)throw Error('Invalid pending result');
   // Owner-only merge is idempotent and does not reset existing progress fields.
   const ref=api.db.collection('skillup_progress').doc(owner+'_Mathematics_'+topic);
   await ref.set({user_id:owner},{merge:true});
   if(!valid(e))throw Error('Account session changed');
   await api.saveProgress({subject:'Mathematics',topic,completed:true,score:row.score,total_questions:row.total,percentage:Math.round(row.score/row.total*100),xp:row.score*10},{owner,finishedAt:row.finishedAt});
   if(valid(e)&&storage.getItem(key())===raw)storage.removeItem(key());
   return true;
  }
  async function complete(score,total){
   await initial;
   if(!valid(0))throw Error('Account session changed');
   if(!Number.isInteger(score)||!Number.isInteger(total)||total<1||score<0||score>total)throw Error('Invalid result');
   if(storage.getItem(key()))await flush();
   if(!valid(0))throw Error('Account session changed');
   storage.setItem(key(),JSON.stringify({owner,topic,score,total,finishedAt:Date.now()}));
   return flush();
  }
  return {complete,flush,dispose(){epoch++;unsubscribe();}};
 }
 root.SkillUpMathsProgress={create};
})(typeof window==='undefined'?globalThis:window);

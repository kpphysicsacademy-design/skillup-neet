window.bindMathsQuizProgress=function(topic){
 const api=window.SkillUpAuth;
 const adapter=api?.configured&&window.SkillUpMathsProgress?window.SkillUpMathsProgress.create(topic):null;
 const session=adapter?api.getSession():Promise.resolve(null);
 if(adapter)session.then(s=>{if(s)adapter.flush().catch(()=>{});}).catch(()=>{});
 return function(card,score,total,partial){
  const status=document.createElement('p');status.setAttribute('role','status');status.className='muted';card.append(status);
  if(partial){status.textContent='Practice only — full quiz progress unchanged.';return;}
  const retry=document.createElement('button');retry.type='button';retry.className='btn';retry.textContent='Retry progress save';retry.hidden=true;card.append(retry);
  let submitted=false;
  async function save(){
   retry.hidden=true;status.textContent='Saving progress…';
   try{
    if(!await session){status.textContent='Practice result — sign in before starting to save progress.';return;}
    if(!submitted){submitted=true;await adapter.complete(score,total);}else if(!await adapter.flush()){throw Error('No pending result');}
    status.textContent='Progress saved.';
   }catch(e){status.textContent='Progress not confirmed. Retry or reopen with the same account.';retry.hidden=false;}
  }
  retry.addEventListener('click',save);save();
 };
};

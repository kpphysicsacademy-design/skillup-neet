/* SkillUp Physics — SI Prefixes (PHY-006)
 * Dedicated 15-question bank. Loaded only for concept=SI prefixes.
 * Uses the existing Duolingo-style physics quiz shell.
 * Verified against current NIST SI prefix definitions.
 * Installer trigger V2.
 */
(function(){
  'use strict';
  var key=(new URLSearchParams(location.search).get('concept')||'').trim().toLowerCase();
  if(key!=='si prefixes') return;
  var quiz=[
    ['What is the main purpose of an SI prefix?',['To indicate a decimal multiple or submultiple of a unit','To change the physical dimension of a quantity','To replace the unit symbol completely','To define a new base quantity'],0,'SI prefixes indicate decimal multiples or submultiples of units.'],
    ['The SI prefix kilo represents:',['10²','10³','10⁶','10⁻³'],1,'Kilo has the factor 10³.'],
    ['The SI prefix centi represents:',['10⁻¹','10⁻²','10⁻³','10²'],1,'Centi has the factor 10⁻².'],
    ['The SI prefix milli represents:',['10⁻²','10⁻³','10⁻⁶','10³'],1,'Milli has the factor 10⁻³.'],
    ['The SI prefix micro represents:',['10⁻³','10⁻⁶','10⁻⁹','10⁶'],1,'Micro has the factor 10⁻⁶.'],
    ['The SI prefix nano represents:',['10⁻⁶','10⁻⁹','10⁻¹²','10⁹'],1,'Nano has the factor 10⁻⁹.'],
    ['The SI prefix mega represents:',['10³','10⁶','10⁹','10⁻⁶'],1,'Mega has the factor 10⁶.'],
    ['The SI prefix giga represents:',['10⁶','10⁹','10¹²','10⁻⁹'],1,'Giga has the factor 10⁹.'],
    ['The SI prefix deci represents:',['10⁻¹','10⁻²','10¹','10²'],0,'Deci has the factor 10⁻¹.'],
    ['The SI prefix deka represents:',['10⁻¹','10¹','10²','10³'],1,'Deka has the factor 10¹.'],
    ['Which prefix represents a factor of 10⁻⁹?',['nano','micro','pico','milli'],0,'Nano represents 10⁻⁹.'],
    ['Which prefix represents a factor of 10⁻¹²?',['nano','pico','femto','micro'],1,'Pico represents 10⁻¹².'],
    ['Using the SI prefix kilo, 1 km is equal to:',['10⁻³ m','10² m','10³ m','10⁶ m'],2,'Kilo multiplies the unit by 10³, so 1 km = 1000 m.'],
    ['Using the SI prefix milli, 1 ms is equal to:',['10⁻² s','10⁻³ s','10⁻⁶ s','10³ s'],1,'Milli multiplies the unit by 10⁻³, so 1 ms = 0.001 s.'],
    ['Which statement about SI prefixes is correct?',['They refer strictly to powers of 10','They are defined as powers of 2','A prefix can be used alone without a unit','Two SI prefixes may be combined to form one prefix'],0,'SI prefixes are decimal powers of 10; they are attached to unit symbols and compound prefixes are not permitted.']
  ];
  var q=document.getElementById('question'),o=document.getElementById('options'),check=document.getElementById('check'),next=document.getElementById('next');
  if(!q||!o||!check||!next) return;
  var feedback=document.getElementById('feedback'),hint=document.getElementById('hint'),count=document.getElementById('count'),pct=document.getElementById('pct'),badge=document.getElementById('qbadge'),mt=document.getElementById('masteryText'),fill=document.getElementById('fill'),xp=document.getElementById('xp'),mastery=document.getElementById('mastery'),topic=document.getElementById('topic'),result=document.getElementById('result'),score=document.getElementById('score'),retry=document.getElementById('retry');
  var i=0,sel=-1,done=0,points=0;
  topic.textContent='SI Prefixes';
  document.getElementById('title').textContent='SI Prefixes';
  function render(){
    var a=quiz[i]; sel=-1;
    q.textContent=a[0]; badge.textContent='Q'+(i+1); count.textContent='Question '+(i+1)+' of '+quiz.length; pct.textContent=Math.round((i+1)/quiz.length*100)+'%'; mt.textContent=done+' / '+quiz.length; fill.style.width=(done/quiz.length*100)+'%'; hint.textContent=''; feedback.className='feedback'; feedback.textContent=''; next.disabled=true; check.disabled=false; o.innerHTML='';
    a[1].forEach(function(v,j){var b=document.createElement('button');b.className='option';b.textContent=String.fromCharCode(65+j)+'. '+v;b.onclick=function(){sel=j;Array.from(o.children).forEach(function(x){x.classList.remove('selected')});b.classList.add('selected')};o.appendChild(b);});
  }
  function grade(){
    if(sel<0){feedback.className='feedback bad';feedback.textContent='Choose an answer first 👆';return;}
    var a=quiz[i]; Array.from(o.children).forEach(function(b,j){if(j===a[2])b.classList.add('correct');else if(j===sel)b.classList.add('wrong');});
    if(sel===a[2]){done++;points+=10;feedback.className='feedback good';feedback.textContent='🎯 Correct! +10 XP — '+a[3];}
    else{feedback.className='feedback bad';feedback.textContent='Not quite. Correct answer: '+a[1][a[2]]+' — '+a[3];}
    check.disabled=true;next.disabled=false;xp.textContent=points;mastery.textContent=Math.round(done/quiz.length*100)+'%';mt.textContent=done+' / '+quiz.length;if(i===quiz.length-1)next.textContent='Finish Skill →';
  }
  function advance(){
    if(next.disabled)return;
    if(i<quiz.length-1){i++;next.textContent='Next Question →';render();return;}
    q.textContent='🏆 SI Prefixes Complete!';o.innerHTML='';check.style.display='none';next.style.display='none';feedback.className='feedback good';feedback.textContent='Skill complete. '+done+' / '+quiz.length+' correct • '+points+' XP';result.style.display='block';score.textContent=done+' / '+quiz.length+' correct • '+points+' XP';
  }
  check.onclick=grade;next.onclick=advance;retry.onclick=function(){i=0;sel=-1;done=0;points=0;xp.textContent='0';mastery.textContent='0%';result.style.display='none';check.style.display='';next.style.display='';next.textContent='Next Question →';render();};
  render();
})();

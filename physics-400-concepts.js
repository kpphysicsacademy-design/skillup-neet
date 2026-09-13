/* SkillUp Physics quiz override loader. The previous override set is pinned by commit SHA; this file adds the Physical Quantities bank without removing existing concept quizzes. */
document.write('<script src="https://raw.githubusercontent.com/kpphysicsacademy-design/skillup-neet/e96e5e3d77c095e1bb9ddeddb299efdc20d1ba90/physics-400-concepts.js"><\\/script>');
(function(){
function install(key,title,quiz,hint){
  function run(){
    var current=(new URLSearchParams(location.search).get('concept')||'').trim().toLowerCase();
    if(current!==key)return;
    var q=document.getElementById('question'),o=document.getElementById('options'),c=document.getElementById('check'),n=document.getElementById('next'),f=document.getElementById('feedback'),h=document.getElementById('hint'),ct=document.getElementById('count'),pct=document.getElementById('pct'),qt=document.getElementById('qbadge'),mt=document.getElementById('masteryText'),fill=document.getElementById('fill'),xp=document.getElementById('xp'),m=document.getElementById('mastery'),topic=document.getElementById('topic'),res=document.getElementById('result'),score=document.getElementById('score'),retry=document.getElementById('retry');
    if(!q||!o||!c||!n)return;
    var i=0,sel=-1,done=0,points=0;
    function render(){
      var a=quiz[i];sel=-1;q.textContent=a[0];qt.textContent='Q'+(i+1);ct.textContent='Question '+(i+1)+' of '+quiz.length;pct.textContent=Math.round((i+1)/quiz.length*100)+'%';mt.textContent=done+' / '+quiz.length;fill.style.width=(done/quiz.length*100)+'%';topic.textContent=title;h.textContent=hint;f.className='feedback';f.innerHTML='';n.disabled=true;c.disabled=false;o.innerHTML='';
      a[1].forEach(function(v,j){var b=document.createElement('button');b.className='option';b.textContent=String.fromCharCode(65+j)+'. '+v;b.onclick=function(){if(c.disabled)return;sel=j;Array.from(o.children).forEach(function(x){x.classList.remove('selected')});b.classList.add('selected')};o.appendChild(b)});
    }
    function check(){
      if(sel<0){f.className='feedback bad';f.textContent='Choose an answer first 👆';return}
      var a=quiz[i],bs=Array.from(o.children);bs.forEach(function(b,j){b.classList.remove('correct','wrong');if(j===a[2])b.classList.add('correct');else if(j===sel)b.classList.add('wrong')});
      if(sel===a[2]){done++;points+=10;xp.textContent=points;m.textContent=Math.round(done/quiz.length*100)+'%';f.className='feedback good';f.textContent='🎯 Correct! +10 XP — '+a[3]}else{f.className='feedback bad';f.textContent='Not quite. Correct answer: '+a[1][a[2]]+' — '+a[3]}
      c.disabled=true;n.disabled=false;mt.textContent=done+' / '+quiz.length;if(i===quiz.length-1)n.textContent='Finish Skill →';
    }
    function next(){if(!c.disabled)return;if(i<quiz.length-1){i++;n.textContent='Next Question →';render()}else{q.textContent='🏆 '+title+' Complete!';o.innerHTML='';c.style.display='none';n.style.display='none';h.textContent='';f.className='feedback good';f.textContent='Skill complete. '+done+' / '+quiz.length+' correct • '+points+' XP';res.style.display='block';score.textContent=done+' / '+quiz.length+' correct • '+points+' XP';}}
    c.onclick=check;n.onclick=next;if(retry)retry.onclick=function(){i=0;done=0;points=0;xp.textContent='0';m.textContent='0%';res.style.display='none';c.style.display='';n.style.display='';render()};render();
  }
  setTimeout(run,300);
}
install('physical quantities','Physical Quantities',[
['What is a physical quantity?',['A quantity that can be measured and expressed by a number and a unit','A unit symbol alone','A physical object only','A mathematical constant only'],0,'A physical quantity is measurable and is expressed with a numerical value and an appropriate unit.'],
['Which pair is a physical quantity and its SI unit?',['Length and metre','Metre and kilogram','Second and time symbol only','Newton and metre as base unit'],0,'Length is a physical quantity and metre is its SI unit.'],
['Which statement best describes measurement of a physical quantity?',['It compares the quantity with a chosen standard unit','It removes the need for units','It always gives a dimensionless number','It depends only on the name of the quantity'],0,'Measurement is comparison of a physical quantity with a standard unit.'],
['Which of the following is an SI base quantity?',['Length','Velocity','Force','Density'],0,'Length is one of the seven SI base quantities; velocity, force and density are derived quantities.'],
['Which is a derived physical quantity?',['Mass','Time','Electric current','Speed'],3,'Speed is derived from length and time, so it is a derived physical quantity.'],
['A physical quantity written as 2.50 m contains:',['Only a number','Only a unit','A numerical value and a unit','A dimension only'],2,'The measurement contains the numerical value 2.50 and the unit metre.'],
['Which pair contains two scalar physical quantities?',['Mass and time','Displacement and velocity','Force and acceleration','Momentum and displacement'],0,'Mass and time are scalar quantities and do not require direction for their specification.'],
['How many SI base quantities are there?',['5','6','7','9'],2,'The SI system has seven base quantities.'],
['In the measurement 2.50 m, the numerical value is:',['0.025','2.50','250','2500'],1,'The numerical value is 2.50 when the quantity is expressed as 2.50 m.'],
['The statement 12 kg represents:',['A numerical value of 12 with unit kilogram','A unit without a number','A dimension without a unit','A dimensionless quantity'],0,'The measurement has numerical value 12 and unit kilogram.'],
['If a length is expressed as 2 m or 200 cm, which statement is correct?',['The physical quantity is different','The physical quantity is the same, but the numerical values differ','Both numerical values must be equal','Only centimetres can measure length'],1,'Changing units changes the numerical value but not the physical length.'],
['Which representation is a derived physical quantity?',['5 kg','10 s','20 A','15 m s⁻¹'],3,'Metre per second is a derived unit for speed or velocity magnitude.'],
['Which pair contains one scalar and one vector quantity?',['Mass and displacement','Time and temperature','Length and mass','Speed and distance'],0,'Mass is scalar, while displacement is a vector.'],
['Which statement correctly distinguishes a physical quantity from a unit?',['A physical quantity is measured; a unit is a standard used for comparison','A unit is always larger than the quantity','A physical quantity is only a symbol','They are exactly the same thing'],0,'The quantity is what is measured, while the unit provides the standard for measurement.'],
['A student writes 5 m and 500 cm for the same straight length. Which conclusion is correct?',['The lengths are unequal','The lengths are equal because 500 cm = 5 m','Only 500 cm is a physical quantity','The unit conversion changes the actual length'],1,'Since 100 cm = 1 m, 500 cm equals 5 m, so both represent the same length.']
],'Identify the measurable quantity first, then distinguish its numerical value, unit, and physical nature.');
})();
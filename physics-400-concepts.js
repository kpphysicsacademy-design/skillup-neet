/* SkillUp Physics quiz override loader. Preserves all existing concept quiz banks and adds Units of Measurement. */
document.write('<script src="https://raw.githubusercontent.com/kpphysicsacademy-design/skillup-neet/cdd49d58d2256f9c3663af6d9d8d561b4a67bc90/physics-400-concepts.js"><\\/script>');
(function(){
function install(key,title,quiz,hint){
  function run(){
    var current=(new URLSearchParams(location.search).get('concept')||'').trim().toLowerCase();
    if(current!==key)return;
    var q=document.getElementById('question'),o=document.getElementById('options'),c=document.getElementById('check'),n=document.getElementById('next'),f=document.getElementById('feedback'),h=document.getElementById('hint'),ct=document.getElementById('count'),pct=document.getElementById('pct'),qt=document.getElementById('qbadge'),mt=document.getElementById('masteryText'),fill=document.getElementById('fill'),xp=document.getElementById('xp'),m=document.getElementById('mastery'),topic=document.getElementById('topic'),res=document.getElementById('result'),score=document.getElementById('score'),retry=document.getElementById('retry');
    if(!q||!o||!c||!n)return;
    var i=0,sel=-1,done=0,points=0;
    function render(){var a=quiz[i];sel=-1;q.textContent=a[0];qt.textContent='Q'+(i+1);ct.textContent='Question '+(i+1)+' of '+quiz.length;pct.textContent=Math.round((i+1)/quiz.length*100)+'%';mt.textContent=done+' / '+quiz.length;fill.style.width=(done/quiz.length*100)+'%';topic.textContent=title;h.textContent=hint;f.className='feedback';f.innerHTML='';n.disabled=true;c.disabled=false;o.innerHTML='';a[1].forEach(function(v,j){var b=document.createElement('button');b.className='option';b.textContent=String.fromCharCode(65+j)+'. '+v;b.onclick=function(){if(c.disabled)return;sel=j;Array.from(o.children).forEach(function(x){x.classList.remove('selected')});b.classList.add('selected')};o.appendChild(b)});}
    function check(){if(sel<0){f.className='feedback bad';f.textContent='Choose an answer first 👆';return}var a=quiz[i],bs=Array.from(o.children);bs.forEach(function(b,j){b.classList.remove('correct','wrong');if(j===a[2])b.classList.add('correct');else if(j===sel)b.classList.add('wrong')});if(sel===a[2]){done++;points+=10;xp.textContent=points;m.textContent=Math.round(done/quiz.length*100)+'%';f.className='feedback good';f.textContent='🎯 Correct! +10 XP — '+a[3]}else{f.className='feedback bad';f.textContent='Not quite. Correct answer: '+a[1][a[2]]+' — '+a[3]}c.disabled=true;n.disabled=false;mt.textContent=done+' / '+quiz.length;if(i===quiz.length-1)n.textContent='Finish Skill →';}
    function next(){if(!c.disabled)return;if(i<quiz.length-1){i++;n.textContent='Next Question →';render()}else{q.textContent='🏆 '+title+' Complete!';o.innerHTML='';c.style.display='none';n.style.display='none';h.textContent='';f.className='feedback good';f.textContent='Skill complete. '+done+' / '+quiz.length+' correct • '+points+' XP';res.style.display='block';score.textContent=done+' / '+quiz.length+' correct • '+points+' XP';}}
    c.onclick=check;n.onclick=next;if(retry)retry.onclick=function(){i=0;done=0;points=0;xp.textContent='0';m.textContent='0%';res.style.display='none';c.style.display='';n.style.display='';render()};render();
  }
  setTimeout(run,300);
}
install('units of measurement','Units of Measurement',[
['What is a unit of measurement?',['A standard reference used to measure and compare a physical quantity','A random numerical value','The instrument used for every measurement','A physical object only'],0,'A unit is an internationally accepted reference standard used for measurement.'],
['What does the result of a physical measurement normally contain?',['A numerical value and a unit','A unit only','A number only with no unit','A dimension only'],0,'A measured physical quantity is expressed by a numerical value accompanied by a unit.'],
['Why are standard units necessary?',['To make measurements consistent and comparable','To make every quantity dimensionless','To avoid using numerical values','To change the physical quantity itself'],0,'Standard units allow measurements to be communicated and compared consistently.'],
['Which is the SI unit of length?',['Centimetre','Metre','Kilometre','Millimetre'],1,'The metre (m) is the SI base unit of length.'],
['Which is the SI unit of mass?',['Gram','Kilogram','Milligram','Tonne'],1,'The kilogram (kg) is the SI base unit of mass.'],
['Which is the SI unit of time?',['Minute','Hour','Second','Day'],2,'The second (s) is the SI base unit of time.'],
['Which is the SI unit of electric current?',['Volt','Coulomb','Ampere','Ohm'],2,'The ampere (A) is the SI base unit of electric current.'],
['Which is the SI unit of thermodynamic temperature?',['Degree Celsius','Fahrenheit','Kelvin','Joule'],2,'The kelvin (K) is the SI base unit of thermodynamic temperature.'],
['Which is the SI unit of amount of substance?',['Mole','Gram','Litre','Candela'],0,'The mole (mol) is the SI base unit for amount of substance.'],
['Which is the SI unit of luminous intensity?',['Lux','Lumen','Candela','Watt'],2,'The candela (cd) is the SI base unit of luminous intensity.'],
['Which statement about SI units is correct?',['The SI system provides a standardized international system of units','SI units are used only for length','SI units cannot be converted using powers of ten','SI has only three base units'],0,'SI is the internationally accepted system based on seven base units.'],
['If 1 m = 100 cm, then 2.5 m is equal to:',['25 cm','250 cm','2500 cm','0.025 cm'],1,'Multiplying by 100 gives 2.5 m = 250 cm.'],
['If 1 km = 1000 m, then 3 km is equal to:',['30 m','300 m','3000 m','30000 m'],2,'3 × 1000 m = 3000 m.'],
['A quantity is written as 5 m. What does the symbol m represent?',['The numerical value','The SI unit metre','The dimension only','The measuring instrument'],1,'m is the SI symbol for metre.'],
['Which statement is correct when changing from metres to centimetres?',['The physical length changes','The numerical value changes but the physical quantity remains the same','The unit disappears','The dimensions change'],1,'Changing units changes the numerical representation, not the physical quantity.']
],'Remember: a unit is a standard reference; the numerical value tells how many such units are present.');
})();
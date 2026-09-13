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
['What is a unit of measurement?',['A standard reference used to measure and compare a physical quantity','A random numerical value','The measuring instrument itself','A physical object only'],0,'A unit is a standardized reference used to express the magnitude of a physical quantity.'],
['A measurement of a physical quantity is normally expressed as:',['A numerical value with a unit','A unit without a number','A number without any unit','A dimension only'],0,'Measurement gives a numerical value together with the chosen unit.'],
['Why are standard units important in physics?',['They make measurements consistent and comparable','They make all quantities dimensionless','They remove the need for numerical values','They change the physical quantity'],0,'Standard units provide a common basis for communicating and comparing measurements.'],
['Which is the SI base unit of length?',['Centimetre','Metre','Kilometre','Millimetre'],1,'The SI base unit of length is metre, symbol m.'],
['Which is the SI base unit of mass?',['Gram','Kilogram','Milligram','Tonne'],1,'The SI base unit of mass is kilogram, symbol kg.'],
['Which is the SI base unit of time?',['Minute','Hour','Second','Day'],2,'The SI base unit of time is second, symbol s.'],
['Which is the SI base unit of electric current?',['Volt','Coulomb','Ampere','Ohm'],2,'The SI base unit of electric current is ampere, symbol A.'],
['Which is the SI base unit of thermodynamic temperature?',['Degree Celsius','Fahrenheit','Kelvin','Joule'],2,'The SI base unit of thermodynamic temperature is kelvin, symbol K.'],
['Which is the SI base unit of amount of substance?',['Mole','Gram','Litre','Candela'],0,'The SI base unit of amount of substance is mole, symbol mol.'],
['Which is the SI base unit of luminous intensity?',['Lux','Lumen','Candela','Watt'],2,'The SI base unit of luminous intensity is candela, symbol cd.'],
['How many SI base units are associated with the seven SI base quantities?',['3','5','7','9'],2,'There are seven SI base quantities and seven corresponding SI base units.'],
['Which statement about the SI system is correct?',['It is an internationally accepted system based on seven base units','It is used only for length','It contains only three base units','It cannot be used for derived quantities'],0,'The SI is the internationally accepted system; derived units are built from its base units.'],
['If 1 m = 100 cm, then 2.5 m equals:',['25 cm','250 cm','2500 cm','0.025 cm'],1,'2.5 × 100 = 250 cm.'],
['If 1 km = 1000 m, then 3 km equals:',['30 m','300 m','3000 m','30000 m'],2,'3 × 1000 = 3000 m.'],
['A length is written as 5 m. What does m represent?',['The numerical value','The SI unit metre','The dimension only','The measuring instrument'],1,'m is the SI symbol for metre.'],
['A length is written as 2 m and 200 cm. Which statement is correct?',['They represent different physical lengths','They represent the same physical length','Only 200 cm is a valid measurement','Changing units changes the actual length'],1,'Changing units changes the numerical value, not the physical quantity.'],
['Which pair correctly matches a physical quantity with its SI unit?',['Time — second','Mass — gram','Length — centimetre','Temperature — joule'],0,'Time is measured in the SI base unit second.'],
['Which of the following is NOT an SI base unit?',['Metre','Kilogram','Second','Newton'],3,'Newton is a derived SI unit, not a base unit.'],
['The numerical value of a measurement changes when the unit is changed because:',['The same physical quantity is represented using a different-sized standard','The physical quantity changes','The dimensions disappear','The instrument becomes a different quantity'],0,'A different unit changes how many units fit into the same physical quantity.'],
['Which statement about a unit is correct?',['It is a reference standard for expressing the magnitude of a physical quantity','It is always equal to the measured quantity','It has no symbol','It is the same as the numerical value'],0,'A unit provides the standard against which a physical quantity is measured.']
],'Remember: a unit is a standard reference; the numerical value tells how many such units are present.');
})();
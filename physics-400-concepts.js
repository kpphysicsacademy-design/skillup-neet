/* SkillUp Physics quiz compatibility layer.
 * FROZEN: do not replace this file when adding a new concept quiz.
 * New quizzes belong in physics-quiz-updates.js.
 * No document.write(), no recursive version chaining.
 */
(function(w){
var banks={
'units of measurement':{title:'Units of Measurement',hint:'Separate the physical quantity, its numerical value, and the standard unit used to express it.',quiz:[
['What is a unit of measurement?',['A standard reference used to measure and compare a physical quantity','A random numerical value','The measuring instrument itself','A physical object only'],0,'A unit is a standardized reference used to express the magnitude of a physical quantity.'],
['A measurement of a physical quantity is normally expressed as:',['A numerical value with a unit','A unit without a number','A number without any unit','A dimension only'],0,'A measurement combines a numerical value with a unit.'],
['Why are standard units important in physics?',['They make measurements consistent and comparable','They make all quantities dimensionless','They remove numerical values','They change the physical quantity'],0,'Standard units provide a common basis for comparing measurements.'],
['The SI base unit of length is:',['centimetre','metre','kilometre','millimetre'],1,'Metre (m) is the SI base unit of length.'],
['The SI base unit of mass is:',['gram','kilogram','milligram','tonne'],1,'Kilogram (kg) is the SI base unit of mass.'],
['The SI base unit of time is:',['minute','hour','second','day'],2,'Second (s) is the SI base unit of time.'],
['The SI base unit of electric current is:',['volt','coulomb','ampere','ohm'],2,'Ampere (A) is the SI base unit of electric current.'],
['The SI base unit of thermodynamic temperature is:',['degree Celsius','fahrenheit','kelvin','joule'],2,'Kelvin (K) is the SI base unit of thermodynamic temperature.'],
['The SI base unit of amount of substance is:',['mole','gram','litre','candela'],0,'Mole (mol) is the SI base unit of amount of substance.'],
['The SI base unit of luminous intensity is:',['lux','lumen','candela','watt'],2,'Candela (cd) is the SI base unit of luminous intensity.'],
['How many SI base units are there?',['5','6','7','9'],2,'The SI has seven base units.'],
['Which is NOT an SI base unit?',['metre','kilogram','newton','second'],2,'Newton is a derived SI unit.'],
['If 1 m = 100 cm, then 2.5 m equals:',['25 cm','250 cm','2500 cm','0.025 cm'],1,'2.5 × 100 = 250 cm.'],
['If 1 km = 1000 m, then 3 km equals:',['30 m','300 m','3000 m','30000 m'],2,'3 × 1000 = 3000 m.'],
['Changing the unit of a measurement normally:',['Changes the physical quantity','Changes the numerical value while preserving the physical quantity','Changes the dimensions','Makes the measurement dimensionless'],1,'A valid unit conversion changes the numerical representation, not the physical quantity.']
]},
'physical quantities':{title:'Physical Quantities',hint:'Identify whether the question is asking about the quantity itself, its numerical value, or its unit.',quiz:[
['What is a physical quantity?',['A property that can be measured and expressed by a number and unit','A unit symbol only','A measuring instrument','A mathematical constant only'],0,'A physical quantity is a measurable property expressed quantitatively.'],
['Which is a physical quantity?',['Length','Metre','Kilogram','Second'],0,'Length is a physical quantity; metre is its SI unit.'],
['Which pair contains only physical quantities?',['Length and time','Metre and second','Kilogram and ampere','Joule and watt'],0,'Length and time are physical quantities.'],
['Which is an SI base quantity?',['Mass','Velocity','Force','Density'],0,'Mass is one of the seven SI base quantities.'],
['Which is a derived physical quantity?',['Velocity','Length','Mass','Time'],0,'Velocity is derived from length and time.'],
['Which quantity is a scalar?',['Mass','Displacement','Velocity','Force'],0,'Mass has magnitude only and is a scalar quantity.'],
['Which quantity is a vector?',['Speed','Mass','Velocity','Temperature'],2,'Velocity has magnitude and direction, so it is a vector.'],
['How many SI base quantities are there?',['5','6','7','8'],2,'There are seven SI base quantities.'],
['In 2.50 m, the numerical value is:',['2.50','m','250','2'],0,'The numerical value is 2.50 and the unit is metre.'],
['In 12 kg, the unit is:',['12','kg','mass','12 kg'],1,'kg is the unit; 12 is the numerical value.'],
['The same physical quantity can be expressed using:',['Only one possible unit','Different compatible units','No units','Only base units'],1,'A physical quantity can be expressed in different compatible units.'],
['The SI unit of speed is:',['m','m s⁻¹','m s⁻²','kg'],1,'Speed is distance divided by time, giving m s⁻¹.'],
['Which pair contains one scalar and one vector?',['Mass and velocity','Speed and mass','Temperature and mass','Length and time'],0,'Mass is scalar while velocity is vector.'],
['Which statement distinguishes a quantity from its unit?',['A quantity is measured; a unit is the standard used to express it','A quantity and unit are identical','A unit is always a number','A quantity has no numerical value'],0,'The unit is the standard reference used to express a physical quantity.'],
['5 m and 500 cm represent:',['Different lengths','The same length','Different dimensions','Incompatible quantities'],1,'500 cm equals 5 m, so both represent the same length.']
]},
'si base units':{title:'SI Base Units',hint:'Recall the seven SI base quantities and match each with its exact unit name and symbol.',quiz:[
['How many SI base units are there?',['5','6','7','9'],2,'The SI has seven base units.'],
['The SI base unit of length is:',['centimetre','metre','kilometre','millimetre'],1,'Metre (m) is the SI base unit of length.'],
['The SI base unit of mass is:',['gram','kilogram','milligram','tonne'],1,'Kilogram (kg) is the SI base unit of mass.'],
['The SI base unit of time is:',['minute','hour','second','day'],2,'Second (s) is the SI base unit of time.'],
['The SI base unit of electric current is:',['volt','coulomb','ampere','ohm'],2,'Ampere (A) is the SI base unit of electric current.'],
['The SI base unit of thermodynamic temperature is:',['degree Celsius','fahrenheit','kelvin','joule'],2,'Kelvin (K) is the SI base unit of thermodynamic temperature.'],
['The SI base unit of amount of substance is:',['mole','gram','litre','candela'],0,'Mole (mol) is the SI base unit of amount of substance.'],
['The SI base unit of luminous intensity is:',['lux','lumen','candela','watt'],2,'Candela (cd) is the SI base unit of luminous intensity.'],
['Which sequence correctly lists the seven SI base unit symbols?',['m, kg, s, A, K, mol, cd','m, g, s, V, K, mol, cd','cm, kg, min, A, °C, mol, cd','m, N, s, A, J, mol, W'],0,'The seven symbols are m, kg, s, A, K, mol and cd.'],
['Which SI base unit has the symbol kg?',['Mass','Length','Time','Electric current'],0,'Kilogram (kg) is the SI base unit of mass.'],
['Which SI base unit has the symbol A?',['Energy','Electric current','Charge','Power'],1,'Ampere (A) is the SI base unit of electric current.'],
['Which SI base unit has the symbol K?',['Kinetic energy','Thermodynamic temperature','Kelvin energy','Heat'],1,'Kelvin (K) is the SI base unit of thermodynamic temperature.'],
['Which SI base unit has the symbol mol?',['Mass','Molarity','Amount of substance','Mole fraction'],2,'Mole (mol) is the SI base unit of amount of substance.'],
['Which SI base unit has the symbol cd?',['Luminous intensity','Charge density','Candela energy','Light frequency'],0,'Candela (cd) is the SI base unit of luminous intensity.'],
['Which of the following is NOT an SI base unit?',['Metre','Kilogram','Newton','Second'],2,'Newton (N) is a derived SI unit of force.']
]}
};
function render(bank){var q=document.getElementById('question'),o=document.getElementById('options'),c=document.getElementById('check'),n=document.getElementById('next');if(!q||!o||!c||!n||q.textContent.trim()||o.children.length)return;var f=document.getElementById('feedback'),h=document.getElementById('hint'),ct=document.getElementById('count'),pct=document.getElementById('pct'),qt=document.getElementById('qbadge'),mt=document.getElementById('masteryText'),fill=document.getElementById('fill'),xp=document.getElementById('xp'),m=document.getElementById('mastery'),topic=document.getElementById('topic'),res=document.getElementById('result'),score=document.getElementById('score'),retry=document.getElementById('retry'),i=0,sel=-1,done=0,points=0;function paint(){var a=bank.quiz[i];sel=-1;q.textContent=a[0];qt.textContent='Q'+(i+1);ct.textContent='Question '+(i+1)+' of '+bank.quiz.length;pct.textContent=Math.round((i+1)/bank.quiz.length*100)+'%';mt.textContent=done+' / '+bank.quiz.length;fill.style.width=(done/bank.quiz.length*100)+'%';topic.textContent=bank.title;h.textContent=bank.hint;f.className='feedback';f.textContent='';n.disabled=true;c.disabled=false;o.innerHTML='';a[1].forEach(function(v,j){var b=document.createElement('button');b.className='option';b.textContent=String.fromCharCode(65+j)+'. '+v;b.onclick=function(){if(c.disabled)return;sel=j;Array.from(o.children).forEach(function(x){x.classList.remove('selected')});b.classList.add('selected')};o.appendChild(b);});}function grade(){if(sel<0){f.className='feedback bad';f.textContent='Choose an answer first 👆';return}var a=bank.quiz[i];Array.from(o.children).forEach(function(b,j){b.classList.remove('correct','wrong');if(j===a[2])b.classList.add('correct');else if(j===sel)b.classList.add('wrong')});if(sel===a[2]){done++;points+=10;f.className='feedback good';f.textContent='🎯 Correct! +10 XP — '+a[3]}else{f.className='feedback bad';f.textContent='Not quite. Correct answer: '+a[1][a[2]]+' — '+a[3]}c.disabled=true;n.disabled=false;xp.textContent=points;m.textContent=Math.round(done/bank.quiz.length*100)+'%';mt.textContent=done+' / '+bank.quiz.length;if(i===bank.quiz.length-1)n.textContent='Finish Skill →'}function next(){if(n.disabled)return;if(i<bank.quiz.length-1){i++;n.textContent='Next Question →';paint()}else{q.textContent='🏆 '+bank.title+' Complete!';o.innerHTML='';c.style.display='none';n.style.display='none';h.textContent='';f.className='feedback good';f.textContent='Skill complete. '+done+' / '+bank.quiz.length+' correct • '+points+' XP';res.style.display='block';score.textContent=done+' / '+bank.quiz.length+' correct • '+points+' XP'}}c.onclick=grade;n.onclick=next;if(retry)retry.onclick=function(){i=0;done=0;points=0;xp.textContent='0';m.textContent='0%';res.style.display='none';c.style.display='';n.style.display='';paint()};paint()}
function start(){var key=(new URLSearchParams(location.search).get('concept')||'').trim().toLowerCase();if(banks[key])render(banks[key])}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(start,650)});else setTimeout(start,650)
})(window);

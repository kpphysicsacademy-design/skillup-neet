/* SkillUp Physics concept loader — preserves the canonical dataset and adds dedicated concept skills. */
document.write('<script src="physics-400-concepts-base.js"><\/script>');

(function(){
var quiz=[
['What is an error in measurement?',['The difference between a measured value and the true value','The unit of measurement','The instrument scale only','The numerical value of the quantity'],0,'Measurement error is the deviation of a measured value from the true or accepted value.'],
['Which statement about errors is correct?',['Every physical measurement has some uncertainty','Errors occur only with digital instruments','Errors always make the value zero','Errors can always be removed completely'],0,'Measurements have finite precision, so some uncertainty is unavoidable.'],
['What is absolute error?',['The magnitude of the difference between a measured value and the true or mean value','Error divided by the measured value','Error expressed only in percent','The least count of an instrument'],0,'Absolute error is the magnitude of the difference between a measured value and the accepted or mean value.'],
['Relative error is defined as:',['Absolute error divided by the measured value','Absolute error multiplied by 100 only','Measured value divided by error','True value divided by measured value'],0,'Relative error compares the absolute error with the measured value.'],
['Percentage error is:',['Relative error × 100','Absolute error ÷ 100','Measured value × 100','Relative error ÷ 100'],0,'Percentage error is relative error expressed as a percentage.'],
['If a length is measured as 10.0 cm with an absolute error of 0.1 cm, the relative error is:',['0.01','0.1','1','10'],0,'Relative error = 0.1/10.0 = 0.01.'],
['For the same measurement, the percentage error is:',['0.01%','0.1%','1%','10%'],2,'Percentage error = 0.01 × 100 = 1%.'],
['Random errors are generally caused by:',['Unpredictable variations in measurement conditions','A fixed zero offset only','Incorrect unit conversion only','A mathematical identity'],0,'Random errors fluctuate unpredictably between repeated measurements.'],
['Systematic error is characterized by:',['A consistent bias in one direction or according to a repeatable pattern','Completely random changes','No effect on measurements','Only human reaction time'],0,'Systematic errors tend to produce a consistent or predictable bias.'],
['Which method helps reduce random error?',['Taking repeated measurements and using their mean','Changing the unit only','Ignoring all readings','Rounding every reading to one digit'],0,'Repeated measurements and averaging can reduce the effect of random fluctuations.'],
['A zero error in an instrument is usually a type of:',['Systematic error','Random error','Percentage error','Relative uncertainty only'],0,'A persistent zero offset produces a systematic error.'],
['Parallax error can be reduced by:',['Keeping the eye perpendicular to the scale at the reading position','Changing kilograms to grams','Taking only one reading','Increasing the numerical value'],0,'Correct eye alignment with the scale reduces parallax error.'],
['If measured values are 9.8 cm, 10.0 cm and 10.2 cm, their mean is:',['9.8 cm','10.0 cm','10.2 cm','30.0 cm'],1,'Mean = (9.8 + 10.0 + 10.2)/3 = 10.0 cm.'],
['If the mean measured value is 10.0 cm and one reading is 10.2 cm, its absolute error relative to the mean is:',['0.02 cm','0.2 cm','2 cm','20 cm'],1,'Absolute error = |10.2 − 10.0| = 0.2 cm.'],
['Which statement is correct about accuracy and error?',['Smaller systematic error generally means greater accuracy','Larger error means greater accuracy','Accuracy and error are identical quantities','Random error is always zero'],0,'Reducing systematic error generally improves accuracy, while precision concerns repeatability.']
];
function run(){
var key=(new URLSearchParams(location.search).get('concept')||'').trim().toLowerCase();
if(key!=='errors in measurement')return;
var q=document.getElementById('question'),o=document.getElementById('options'),c=document.getElementById('check'),n=document.getElementById('next'),f=document.getElementById('feedback'),h=document.getElementById('hint'),ct=document.getElementById('count'),pct=document.getElementById('pct'),qt=document.getElementById('qbadge'),mt=document.getElementById('masteryText'),fill=document.getElementById('fill'),xp=document.getElementById('xp'),m=document.getElementById('mastery'),topic=document.getElementById('topic'),res=document.getElementById('result'),score=document.getElementById('score'),retry=document.getElementById('retry');
if(!q||!o||!c||!n)return;
var i=0,sel=-1,done=0,points=0;topic.textContent='Errors in Measurement';
function render(){var a=quiz[i];sel=-1;q.textContent=a[0];qt.textContent='Q'+(i+1);ct.textContent='Question '+(i+1)+' of '+quiz.length;pct.textContent=Math.round((i+1)/quiz.length*100)+'%';mt.textContent=done+' / '+quiz.length;fill.style.width=(done/quiz.length*100)+'%';h.textContent='Separate absolute, relative and percentage error carefully.';f.className='feedback';f.innerHTML='';n.disabled=true;c.disabled=false;o.innerHTML='';a[1].forEach(function(v,j){var b=document.createElement('button');b.className='option';b.textContent=v;b.onclick=function(){if(c.disabled)return;sel=j;Array.from(o.children).forEach(function(x){x.classList.remove('selected')});b.classList.add('selected')};o.appendChild(b)});}
function check(){if(sel<0)return;var a=quiz[i],bs=Array.from(o.children);bs.forEach(function(b,j){b.classList.remove('correct','wrong');if(j===a[2])b.classList.add('correct');else if(j===sel)b.classList.add('wrong')});var ok=sel===a[2];if(ok){done++;points+=10;xp.textContent=points;m.textContent=Math.round(done/quiz.length*100)+'%';f.className='feedback good';f.textContent='✓ Correct — '+a[3]}else{f.className='feedback bad';f.textContent='✗ Review — '+a[3]}c.disabled=true;n.disabled=false;mt.textContent=done+' / '+quiz.length;if(i===quiz.length-1)n.textContent='Finish Skill →';}
function next(){if(!c.disabled)return;if(i<quiz.length-1){i++;n.textContent='Next Question →';render()}else{q.textContent='🏆 Errors in Measurement Complete!';o.innerHTML='';c.style.display='none';n.style.display='none';h.textContent='';f.className='feedback good';f.textContent='Skill complete. '+points+' XP earned.';res.style.display='block';score.textContent=done+' / '+quiz.length+' correct • '+points+' XP';}}
c.onclick=check;n.onclick=next;if(retry)retry.onclick=function(){i=0;done=0;points=0;xp.textContent='0';m.textContent='0%';res.style.display='none';c.style.display='';n.style.display='';render()};render();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(run,80)});else setTimeout(run,80);
})();

/* SIGNIFICANT FIGURES, PRINCIPLE OF HOMOGENEITY AND ROUNDING OFF ARE PRESERVED BELOW. */

/* SkillUp NEET Physics — SI Units: 30 MCQs */
(function(){
const base=[
['Which is the SI base unit of length?',['metre','kilogram','second','ampere'],0,'The SI base unit of length is metre (m).'],
['Which is the SI base unit of mass?',['kilogram','gram','newton','joule'],0,'The SI base unit of mass is kilogram (kg).'],
['Which is the SI base unit of time?',['second','minute','hour','day'],0,'The SI base unit of time is second (s).'],
['Which is the SI base unit of electric current?',['ampere','coulomb','volt','ohm'],0,'The SI base unit of electric current is ampere (A).'],
['Which is the SI base unit of thermodynamic temperature?',['kelvin','degree Celsius','joule','calorie'],0,'The SI base unit of thermodynamic temperature is kelvin (K).'],
['Which is the SI base unit of amount of substance?',['mole','gram','kilogram','particle'],0,'The SI base unit of amount of substance is mole (mol).'],
['Which is the SI base unit of luminous intensity?',['candela','lumen','lux','watt'],0,'The SI base unit of luminous intensity is candela (cd).'],
['The SI unit of force is:',['newton','joule','watt','pascal'],0,'Force is measured in newton (N).'],
['The SI unit of work is:',['joule','newton','watt','pascal'],0,'Work is measured in joule (J).'],
['The SI unit of power is:',['watt','joule','newton','pascal'],0,'Power is measured in watt (W).']
];
const q=[];base.forEach((x,i)=>{for(let k=0;k<3;k++){const o=x[1].slice(),s=(i+k)%4,r=o.slice(s).concat(o.slice(0,s));q.push({q:x[0]+(k===1?' Choose the correct option.':k===2?' Select the best answer.':''),o:r,a:r.indexOf(x[1][x[2]]),e:x[3]})}});
window.SkillUpSIUnitsQuestions=q;
})();
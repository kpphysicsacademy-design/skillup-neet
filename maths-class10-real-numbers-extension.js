/* Class 10 Real Numbers: concept-specific quiz banks and interactive simulators.
   Loaded after maths-quiz-bank.js and before the concept page controller. */
(function () {
  'use strict';
  const bank = window.SKILLUP_MATHS_QUIZ_BANK = window.SKILLUP_MATHS_QUIZ_BANK || {};
  const gcd = (a,b) => { a=Math.abs(a); b=Math.abs(b); while(b){const t=b;b=a%b;a=t;} return a||1; };
  const primes = [2,3,5,7,11,13,17,19,23,29,31];
  function euclidBank() {
    const rows=[];
    for(let i=0;i<30;i++){
      const b=4+(i%10), a=97+i*17+(i%4)*3, q=Math.floor(a/b), r=a%b;
      const correct=q+' remainder '+r;
      const candidates=[(q+1)+' remainder '+r,q+' remainder '+((r+1)%b),Math.max(0,q-1)+' remainder '+r];
      const opts=[correct,...candidates], shift=(i*3)%4, ordered=opts.slice(shift).concat(opts.slice(0,shift));
      rows.push(['When '+a+' is divided by '+b+', what are the quotient and remainder?',ordered,ordered.indexOf(correct),a+' = '+b+' × '+q+' + '+r+', with 0 ≤ '+r+' < '+b+'.']);
    }
    return rows;
  }
  function factorText(exps) {
    return Object.keys(exps).filter(p=>exps[p]>0).map(p=>Number(exps[p])===1?p:p+'^'+exps[p]).join(' × ');
  }
  function factorBank() {
    const rows=[];
    for(let i=0;i<30;i++){
      const p=primes[i%7], q=primes[(i*3+2)%8], r=primes[(i*5+4)%9], exps={};
      exps[p]=(i%3)+1; exps[q]=(exps[q]||0)+((i%2)+1); exps[r]=(exps[r]||0)+1;
      const n=Object.keys(exps).reduce((v,k)=>v*Math.pow(Number(k),exps[k]),1), correct=factorText(exps), distractors=[], keys=Object.keys(exps);
      for(let j=0;j<3;j++){const alt={...exps},k=keys[(i+j)%keys.length];alt[k]=Math.max(1,alt[k]+(j===1?-1:1));const t=factorText(alt);if(t!==correct&&!distractors.includes(t))distractors.push(t);}
      let bump=2;while(distractors.length<3){const alt={...exps},k=keys[distractors.length%keys.length];alt[k]+=bump++;const t=factorText(alt);if(t!==correct&&!distractors.includes(t))distractors.push(t);}
      const opts=[correct,...distractors],shift=(i*2)%4,ordered=opts.slice(shift).concat(opts.slice(0,shift));
      rows.push(['What is the prime factorisation of '+n+'?',ordered,ordered.indexOf(correct),n+' = '+correct+'. Each factor shown is prime, and the exponents give the exact multiplicities.']);
    }
    return rows;
  }
  function irrationalityBank() {
    const rows=[], ps=[2,3,5,7,11,13];
    for(let i=0;i<30;i++){
      const p=ps[Math.floor(i/5)], t=i%5; let question,opts,explanation;
      if(t===0){question='Assume √'+p+' = a/b, where a and b are coprime positive integers. Squaring gives which equation?';opts=['a² = '+p+'b²','b² = '+p+'a²','a = '+p+'b²','a² + b² = '+p];explanation='Squaring √'+p+'=a/b gives '+p+'=a²/b², hence a²='+p+'b².';}
      else if(t===1){question='From a² = '+p+'b², with '+p+' prime, what follows about a?';opts=[p+' divides a','a divides '+p,p+'² divides a','a is not an integer'];explanation='Since '+p+' is prime and divides a², Euclid’s lemma gives '+p+' | a.';}
      else if(t===2){question='If a = '+p+'k is substituted into a² = '+p+'b², what follows?';opts=['b² = '+p+'k²','b² = k²/'+p,'a² = '+p+'²b','b = '+p+'²k'];explanation='Substitution gives '+p+'²k²='+p+'b²; dividing by '+p+' gives b²='+p+'k².';}
      else if(t===3){question='Why does the assumption √'+p+'=a/b in lowest terms lead to a contradiction?';opts=['Both a and b must be divisible by '+p,'Neither a nor b can be an integer','The fraction must equal '+p,'The denominator must be zero'];explanation='The argument shows '+p+' divides both a and b, contradicting that they are coprime.';}
      else {question='What conclusion is established by the contradiction proof for √'+p+'?';opts=['√'+p+' is irrational','√'+p+' is a natural number','√'+p+' is an integer','√'+p+' is a terminating decimal'];explanation='No fraction in lowest terms can equal √'+p+'; therefore √'+p+' is irrational.';}
      const correct=opts[0],shift=(i*3)%4,ordered=opts.slice(shift).concat(opts.slice(0,shift));
      rows.push([question,ordered,ordered.indexOf(correct),explanation]);
    }
    return rows;
  }
  function decimalBank() {
    const rows=[];
    for(let i=0;i<30;i++){
      let den=i%2===0?Math.pow(2,1+(i%3))*Math.pow(5,1+((i+1)%3)):3*(1+(i%4))*Math.pow(2,i%2);
      let num=1+(i*7)%(den-1);while(gcd(num,den)!==1)num++;if(num>=den){num=1;while(gcd(num,den)!==1)num++;}
      let d=den;while(d%2===0)d/=2;while(d%5===0)d/=5;
      const correct=d===1?'Terminating':'Non-terminating recurring';
      const opts=['Terminating','Non-terminating recurring','Non-terminating non-recurring','An integer'],shift=(i*3)%4,ordered=opts.slice(shift).concat(opts.slice(0,shift));
      const explanation=d===1?'The fraction is in lowest terms and its denominator has only prime factors 2 and 5, so its decimal expansion terminates.':'The fraction is in lowest terms and its denominator has a prime factor other than 2 or 5, so its decimal expansion recurs.';
      rows.push(['What type of decimal expansion does '+num+'/'+den+' have?',ordered,ordered.indexOf(correct),explanation]);
    }
    return rows;
  }
  if(!bank["Euclid's division lemma"])bank["Euclid's division lemma"]=euclidBank();
  if(!bank["Fundamental theorem of arithmetic"])bank["Fundamental theorem of arithmetic"]=factorBank();
  if(!bank["Irrationality proofs"])bank["Irrationality proofs"]=irrationalityBank();
  if(!bank["Decimal expansion of rational numbers"])bank["Decimal expansion of rational numbers"]=decimalBank();

  function initSimulator() {
    const params=new URLSearchParams(location.search),level=(params.get('level')||'').toLowerCase(),chapter=(params.get('chapter')||'').toLowerCase(),concept=(params.get('concept')||'').trim().toLowerCase();
    if(!level.includes('class 10')||chapter!=='real numbers')return;
    const learn=document.getElementById('learn');if(!learn||document.getElementById('realNumbersLab'))return;
    const panels={
      "euclid's division lemma":'<label>Dividend a <input id="euA" type="number" min="0" max="100000" value="127"></label><label>Divisor b <input id="euB" type="number" min="1" max="999" value="11"></label>',
      "fundamental theorem of arithmetic":'<label>Composite number <input id="ftaN" type="number" min="2" max="100000" value="360"></label>',
      "hcf and lcm":'<label>First number <input id="hcfA" type="number" min="1" max="100000" value="84"></label><label>Second number <input id="hcfB" type="number" min="1" max="100000" value="120"></label>',
      "irrationality proofs":'<label>Prime number p <select id="irrP"><option>2</option><option>3</option><option>5</option><option>7</option><option>11</option><option>13</option></select></label>',
      "decimal expansion of rational numbers":'<label>Numerator <input id="decN" type="number" min="1" max="9999" value="7"></label><label>Denominator <input id="decD" type="number" min="1" max="9999" value="40"></label>'
    };
    if(!panels[concept])return;
    learn.insertAdjacentHTML('beforeend','<section class="example" id="realNumbersLab"><h2>Interactive simulator</h2><p class="muted">Change the values to explore this Real Numbers concept. Results update instantly.</p><div id="realNumbersControls" class="lab">'+panels[concept]+'</div><div class="callout" id="realNumbersResult" aria-live="polite"></div></section>');
    const el=id=>document.getElementById(id),out=el('realNumbersResult');
    const gcd=(a,b)=>{while(b){const t=b;b=a%b;a=t;}return a;};
    const factor=n=>{const a=[];for(let p=2;p*p<=n;p++){let e=0;while(n%p===0){n/=p;e++;}if(e)a.push(p+(e>1?'^'+e:''));}if(n>1)a.push(String(n));return a.join(' × ')||'1';};
    const update=()=>{
      if(concept==="euclid's division lemma"){const a=Math.max(0,Number(el('euA').value)||0),b=Math.max(1,Number(el('euB').value)||1),q=Math.floor(a/b),r=a%b;out.innerHTML='<b>'+a+' = '+b+' × '+q+' + '+r+'</b><br>Quotient q = '+q+'; remainder r = '+r+'. Since 0 ≤ '+r+' < '+b+', the division lemma is satisfied.';}
      else if(concept==='fundamental theorem of arithmetic'){const n=Math.max(2,Math.min(100000,Math.floor(Number(el('ftaN').value)||2)));out.innerHTML='<b>'+n+' = '+factor(n)+'</b><br>Every integer greater than 1 has a unique prime factorisation, apart from the order of its factors.';}
      else if(concept==='hcf and lcm'){const a=Math.max(1,Math.floor(Number(el('hcfA').value)||1)),b=Math.max(1,Math.floor(Number(el('hcfB').value)||1)),g=gcd(a,b),l=a/g*b;out.innerHTML='<b>HCF = '+g+'; LCM = '+l+'</b><br>Verification: '+a+' × '+b+' = '+g+' × '+l+'.';}
      else if(concept==='irrationality proofs'){const p=Number(el('irrP').value);out.innerHTML='<b>Proof outline for √'+p+'</b><ol><li>Assume √'+p+' = a/b in lowest terms.</li><li>Squaring gives a² = '+p+'b², so '+p+' divides a.</li><li>Write a = '+p+'k; substitution shows '+p+' divides b as well.</li><li>This contradicts gcd(a,b)=1. Therefore √'+p+' is irrational.</li></ol>';}
      else if(concept==='decimal expansion of rational numbers'){let n=Math.max(1,Math.floor(Number(el('decN').value)||1)),d=Math.max(1,Math.floor(Number(el('decD').value)||1)),g=gcd(n,d);n/=g;d/=g;let t=d;while(t%2===0)t/=2;while(t%5===0)t/=5;const kind=t===1?'Terminating':'Non-terminating recurring';out.innerHTML='<b>'+kind+'</b><br>Reduced fraction: '+n+'/'+d+'. Remaining denominator after removing factors 2 and 5: '+t+'. '+(t===1?'Only factors 2 and 5 remain.':'A prime factor other than 2 or 5 remains, so the decimal recurs.');}
    };
    el('realNumbersControls').addEventListener('input',update);el('realNumbersControls').addEventListener('change',update);update();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initSimulator,{once:true});else initSimulator();
})();
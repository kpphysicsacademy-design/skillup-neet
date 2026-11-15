/* Class 10 Polynomials: 90 concept-specific MCQs + interactive polynomial lab. */
(function(){
'use strict';
const bank=window.SKILLUP_MATHS_QUIZ_BANK=window.SKILLUP_MATHS_QUIZ_BANK||{};
function add(rows,q,correct,distractors,explanation,i){
 const answer=String(correct),opts=[answer];
 distractors.map(String).forEach(v=>{if(!opts.includes(v)&&opts.length<4)opts.push(v);});
 ['None of these','All of these','Not enough information'].forEach(v=>{if(!opts.includes(v)&&opts.length<4)opts.push(v);});
 const shift=(i*3)%4,ordered=opts.slice(shift).concat(opts.slice(0,shift));
 rows.push([q,ordered,ordered.indexOf(answer),explanation]);
}
function zerosBank(){
 const rows=[];
 for(let i=0;i<10;i++){const a=1+i%4,m=2+i*2,root=m/a;
  add(rows,'Find the zero of p(x) = '+a+'x − '+m+'.',String(root),[String(root+1),String(root-1),String(-root)],'Set p(x)=0: '+a+'x='+m+', so x='+root+'.',i);}
 for(let i=0;i<10;i++){const r=i%5+1,s=i%4+2,other=r+s,prod=r*s;
  add(rows,'The zeros of x² − '+other+'x + '+prod+' are:',r+' and '+s,[r+' and '+(s+1),(-r)+' and '+(-s),other+' and '+prod],'Factor the polynomial as (x−'+r+')(x−'+s+').',i+10);}
 for(let i=0;i<10;i++){const a=i%3+1,x=i%5+1,b=i%4+1,c=-(a*x*x+b*x);
  add(rows,'If p(x) = '+a+'x² + '+b+'x '+(c<0?'− '+Math.abs(c):'+ '+c)+', what is p('+x+')?', '0',[String(a*x*x+b*x+c+1),String(a*x*x+b*x+c-2),String(x)],'Substitute x='+x+': '+a+'×'+x+'² + '+b+'×'+x+' '+(c<0?'− '+Math.abs(c):'+ '+c)+' = 0.',i+20);}
 return rows;
}
function relationBank(){
 const rows=[];
 for(let i=0;i<30;i++){
  const r1=(i%7)-2, r2=(Math.floor(i/3)%7)-1, sum=r1+r2, product=r1*r2;
  const a=i%3+1,b=-a*sum,c=a*product;
  if(i%3===0)add(rows,'For '+a+'x² '+(b<0?'− '+Math.abs(b):'+ '+b)+'x '+(c<0?'− '+Math.abs(c):'+ '+c)+', find the sum of zeros.',String(sum),[String(-sum),String(product),String(sum+2)],'Sum of zeros = −b/a = −('+b+')/'+a+' = '+sum+'.',i);
  else if(i%3===1)add(rows,'For '+a+'x² '+(b<0?'− '+Math.abs(b):'+ '+b)+'x '+(c<0?'− '+Math.abs(c):'+ '+c)+', find the product of zeros.',String(product),[String(-product),String(sum),String(product+2)],'Product of zeros = c/a = '+c+'/'+a+' = '+product+'.',i);
  else add(rows,'A monic quadratic has zeros '+r1+' and '+r2+'. Which polynomial is it?','x² '+( -sum<0?'− '+Math.abs(sum):'+ '+(-sum))+'x '+(product<0?'− '+Math.abs(product):'+ '+product),['x² '+(sum<0?'− '+Math.abs(sum):'+ '+sum)+'x '+(product<0?'− '+Math.abs(product):'+ '+product),'x² '+( -sum<0?'+ '+Math.abs(sum):'− '+(-sum))+'x '+(product<0?'+ '+Math.abs(product):'− '+product),'x² + '+(sum+1)+'x + '+(product+1)],'Use (x−'+r1+')(x−'+r2+') = x² − ('+sum+')x + ('+product+').',i);
 }
 return rows;
}
function divisionBank(){
 const rows=[];
 for(let i=0;i<30;i++){
  const a=i%4+1,b=(i*3)%9-4,c=(i*5)%11-5,k=(i*2)%7-3;
  const q1=b+a*k,rem=a*k*k+b*k+c;
  if(i%3===0)add(rows,'When p(x) = '+a+'x² '+(b<0?'− '+Math.abs(b):'+ '+b)+'x '+(c<0?'− '+Math.abs(c):'+ '+c)+' is divided by (x − ('+k+')), what is the remainder?',String(rem),[String(rem+a),String(rem-1),String(q1)],'By the remainder theorem, remainder = p('+k+') = '+a+'('+k+')² + ('+b+')('+k+') + ('+c+') = '+rem+'.',i);
  else if(i%3===1)add(rows,'Divide '+a+'x² '+(b<0?'− '+Math.abs(b):'+ '+b)+'x '+(c<0?'− '+Math.abs(c):'+ '+c)+' by (x − ('+k+')). What is the coefficient of x in the quotient?',String(a),[String(a+1),String(Math.max(0,a-1)),String(q1)],'The quotient is '+a+'x '+(q1<0?'− '+Math.abs(q1):'+ '+q1)+'. Its x-coefficient is '+a+'.',i);
  else add(rows,'According to the polynomial division algorithm, p(x) divided by a non-zero polynomial g(x) gives:', 'p(x)=g(x)q(x)+r(x), where degree r < degree g',['p(x)=g(x)+q(x)+r(x)','p(x)=q(x)r(x)+g(x)','p(x)=g(x)q(x)−r(x)'],'The remainder is zero or has degree strictly less than the divisor.',i);
 }
 return rows;
}
bank['Zeros of a polynomial']=zerosBank();
bank['Relation between zeros and coefficients']=relationBank();
bank['Division algorithm']=divisionBank();
function initLab(){
 if(!location.pathname.toLowerCase().endsWith('maths-polynomials-class10-quiz.html'))return;
 const params=new URLSearchParams(location.search),concept=(params.get('concept')||'Zeros of a polynomial').toLowerCase();
 const main=document.querySelector('main');if(!main||document.getElementById('polynomialLab'))return;
 const lab=document.createElement('section');lab.id='polynomialLab';lab.className='card';lab.style.cssText='min-height:0;margin:0 auto 14px;padding:16px;display:block';
 let controls='';
 if(concept.includes('division'))controls='<h2>Polynomial division simulator</h2><p>Divide ax² + bx + c by (x − k).</p><div class="poly-controls"><label>a <input id="polyA" type="number" value="2" min="-20" max="20"></label><label>b <input id="polyB" type="number" value="3" min="-100" max="100"></label><label>c <input id="polyC" type="number" value="-5" min="-100" max="100"></label><label>k <input id="polyK" type="number" value="2" min="-20" max="20"></label></div>';
 else controls='<h2>Polynomial explorer</h2><p>Change the coefficients of ax² + bx + c to explore its zeros, sum and product.</p><div class="poly-controls"><label>a <input id="polyA" type="number" value="1" min="-20" max="20" step="1"></label><label>b <input id="polyB" type="number" value="-5" min="-100" max="100"></label><label>c <input id="polyC" type="number" value="6" min="-100" max="100"></label></div>';
 lab.innerHTML=controls+'<div id="polyResult" class="poly-result" aria-live="polite"></div>';
 const style=document.createElement('style');style.textContent='#polynomialLab{color:#263746!important;background:#fff!important;border:1px solid #dce5eb!important;border-radius:16px!important}#polynomialLab h2{font-size:18px;margin:0 0 6px;color:#263746}#polynomialLab p{font-size:13px;color:#71808d;margin:0 0 12px}.poly-controls{display:flex;gap:9px;flex-wrap:wrap}.poly-controls label{display:grid;gap:4px;font-size:12px;font-weight:800;color:#52616c;min-width:80px;flex:1}.poly-controls input{width:100%;min-width:0;padding:10px;border:1px solid #cfdbe3;border-radius:9px;font:inherit;color:#263746;background:#fff}.poly-result{margin-top:12px;padding:12px;border-radius:11px;background:#f0f8ff;color:#263746;font-size:14px;line-height:1.7}';
 document.head.appendChild(style);main.insertBefore(lab,main.firstChild);
 const el=id=>document.getElementById(id),fmt=n=>Number.isInteger(n)?String(n):n.toFixed(3).replace(/0+$/,'').replace(/\.$/,'');
 function update(){const a=Number(el('polyA').value),b=Number(el('polyB').value),c=Number(el('polyC').value),out=el('polyResult');if(![a,b,c].every(Number.isFinite)||a===0){out.textContent='Enter valid coefficients with a ≠ 0.';return;}
 if(concept.includes('division')){const k=Number(el('polyK').value),q=b+a*k,r=a*k*k+b*k+c;out.innerHTML='<b>Quotient:</b> '+a+'x '+(q<0?'− '+Math.abs(q):'+ '+q)+'<br><b>Remainder:</b> '+r+'<br><b>Check:</b> p(x) = (x − ('+k+'))('+a+'x '+(q<0?'− '+Math.abs(q):'+ '+q)+') + '+r+'.';return;}
 const d=b*b-4*a*c,sum=-b/a,product=c/a;let roots=d>=0?('Real zeros: '+fmt((-b+Math.sqrt(d))/(2*a))+' and '+fmt((-b-Math.sqrt(d))/(2*a))):('Complex zeros: '+fmt(-b/(2*a))+' ± '+fmt(Math.sqrt(-d)/(2*Math.abs(a)))+'i');
 out.innerHTML='<b>Polynomial:</b> '+a+'x² '+(b<0?'− '+Math.abs(b):'+ '+b)+'x '+(c<0?'− '+Math.abs(c):'+ '+c)+'<br><b>Discriminant:</b> '+d+'<br><b>'+roots+'</b><br><b>Sum of zeros:</b> '+fmt(sum)+' &nbsp; <b>Product:</b> '+fmt(product);
 }
 lab.addEventListener('input',update);update();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initLab,{once:true});else initLab();
})();
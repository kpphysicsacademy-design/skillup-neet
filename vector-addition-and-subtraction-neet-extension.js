(() => {
  const extra = [
    {q:'Two vectors of magnitudes 5 and 12 have a resultant of 13. The angle between them is:',o:['0°','60°','90°','180°'],a:2,e:'13² = 5² + 12², so the cross term is zero and θ = 90°.'},
    {q:'Two equal vectors each of magnitude A have a resultant of magnitude A. The angle between them is:',o:['0°','60°','90°','120°'],a:3,e:'A² = A² + A² + 2A²cosθ gives cosθ = −1/2, hence θ = 120°.'},
    {q:'If |A + B| = |A − B| for two non-zero vectors, the angle between A and B is:',o:['0°','45°','90°','180°'],a:2,e:'Squaring both sides gives 4ABcosθ = 0, so cosθ = 0 and θ = 90°.'},
    {q:'A vector of magnitude 10 is resolved into two perpendicular components. If one component is 6, the other component is:',o:['4','8','10','16'],a:1,e:'For perpendicular components, 10² = 6² + C², so C = 8.'},
    {q:'If A = 3i + 4j and B = 4i − 3j, the magnitude of A + B is:',o:['√2','5','5√2','10'],a:2,e:'A + B = 7i + j, so its magnitude is √(7² + 1²) = √50 = 5√2.'},
    {q:'The magnitude of the vector 6i − 8j is:',o:['2','10','14','48'],a:1,e:'Magnitude = √(6² + 8²) = 10.'},
    {q:'If two vectors of magnitudes 8 and 6 have a resultant of 2, the angle between them must be:',o:['0°','60°','90°','180°'],a:3,e:'The minimum resultant |8−6| = 2 occurs only when the vectors are opposite.'},
    {q:'For two vectors A and B, if their resultant has magnitude √(A²+B²), the vectors are:',o:['Parallel','Antiparallel','Perpendicular','Equal'],a:2,e:'The cross term 2ABcosθ must vanish, so θ = 90° for non-zero A and B.'},
    {q:'A vector makes an angle 60° with the positive x-axis and has magnitude 20. Its x-component is:',o:['10','10√3','20','5'],a:0,e:'Ax = A cos60° = 20 × 1/2 = 10.'},
    {q:'A vector has components 12 and 5 along perpendicular axes. Its direction angle with the 12-component axis is approximately:',o:['22.6°','45°','67.4°','90°'],a:0,e:'tanθ = 5/12, giving θ ≈ 22.6°.'}
  ];
  function add(){
    const root=document.getElementById('question-container');
    if(!root || document.getElementById('vector-extra-neet')) return;
    const section=document.createElement('section'); section.id='vector-extra-neet';
    const h=document.createElement('h2'); h.textContent='Additional NEET Practice'; section.appendChild(h);
    extra.forEach((q,i)=>{const card=document.createElement('div');card.className='mcq-card';card.innerHTML=`<h3>Q${i+31}. ${q.q}</h3>`;q.o.forEach((o,j)=>{const b=document.createElement('button');b.className='option';b.textContent=`${String.fromCharCode(65+j)}) ${o}`;b.onclick=()=>{card.querySelectorAll('button').forEach(x=>x.disabled=true);const p=document.createElement('p');p.className='explanation';p.innerHTML=(j===q.a?'Correct. ':'Incorrect. Correct answer: '+String.fromCharCode(65+q.a)+') '+q.o[q.a]+'. ')+q.e;card.appendChild(p)};card.appendChild(b)});section.appendChild(card)});
    root.appendChild(section);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(add,0)); else setTimeout(add,0);
})();

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
    {q:'A vector has components 12 and 5 along perpendicular axes. Its direction angle with the 12-component axis is approximately:',o:['22.6°','45°','67.4°','90°'],a:0,e:'tanθ = 5/12, giving θ ≈ 22.6°.'},
    {q:'Two vectors have magnitudes 10 and 10 and make an angle of 60°. Their resultant magnitude is:',o:['10','10√2','10√3','20'],a:2,e:'R = √(10² + 10² + 2·10·10·cos60°) = √300 = 10√3.'},
    {q:'Two vectors of magnitudes 3 and 4 have a resultant of magnitude 5. The angle between them is:',o:['0°','60°','90°','180°'],a:2,e:'5² = 3² + 4², so 2(3)(4)cosθ = 0 and θ = 90°.'},
    {q:'The resultant of two vectors of magnitudes 7 and 3 can have any value between:',o:['0 and 10','3 and 7','4 and 10','7 and 10'],a:2,e:'The resultant ranges from |7−3| = 4 to 7+3 = 10.'},
    {q:'If A = 5i and B = −12j, the magnitude of A + B is:',o:['7','13','17','60'],a:1,e:'A + B = 5i − 12j, so magnitude = √(25 + 144) = 13.'},
    {q:'A vector of magnitude 25 has an x-component 7. If it lies in the first quadrant, its y-component is:',o:['18','24','26','32'],a:1,e:'25² = 7² + Ay², so Ay = √576 = 24.'},
    {q:'Two vectors have equal magnitudes A and their resultant is √2 A. The angle between them is:',o:['0°','60°','90°','120°'],a:2,e:'2A² + 2A²cosθ = 2A² gives cosθ = 0, hence θ = 90°.'},
    {q:'If a vector is represented by A = 8i + 6j, the unit vector in the direction of A is:',o:['(4i+3j)/5','(8i+6j)/14','(8i+6j)/10','(3i+4j)/5'],a:2,e:'|A| = 10, so the unit vector is A/|A| = (8i + 6j)/10.'},
    {q:'A vector of magnitude 10 makes an angle 30° with the x-axis. Its y-component is:',o:['5','5√3','10','10√3'],a:0,e:'Ay = A sin30° = 10 × 1/2 = 5.'},
    {q:'If two vectors are antiparallel, the magnitude of their resultant is:',o:['A + B','|A − B|','√(A²+B²)','AB'],a:1,e:'For an angle of 180°, R² = A² + B² − 2AB = (A−B)², so R = |A−B|.'},
    {q:'A vector A has components 3 and 4. A second vector B has components 4 and −3. The angle between A and B is:',o:['0°','45°','90°','180°'],a:2,e:'A·B = 3·4 + 4·(−3) = 0, so the vectors are perpendicular.'}
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

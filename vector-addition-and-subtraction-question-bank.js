/* SkillUp NEET Physics — Vector Addition and Subtraction — Level 1 (30 MCQs) */
(() => {
  const topic = 'vector addition and subtraction';
  const questions = [
    {q:'Two vectors of magnitudes 3 and 4 act in the same direction. Their resultant magnitude is:',o:['1','4','7','12'],a:2,e:'For vectors in the same direction, the resultant magnitude is the sum: 3 + 4 = 7.'},
    {q:'Two vectors of magnitudes 5 and 3 act in opposite directions. The magnitude of their resultant is:',o:['2','8','15','1'],a:0,e:'For opposite directions, the resultant magnitude is the difference: |5 − 3| = 2.'},
    {q:'Two perpendicular vectors have magnitudes 3 and 4. Their resultant magnitude is:',o:['1','5','7','12'],a:1,e:'For perpendicular vectors, R = √(3² + 4²) = 5.'},
    {q:'The resultant of two vectors is maximum when the angle between them is:',o:['0°','90°','120°','180°'],a:0,e:'R² = A² + B² + 2AB cosθ is maximum when cosθ = 1, i.e. θ = 0°.'},
    {q:'The resultant of two vectors is minimum when the angle between them is:',o:['0°','60°','90°','180°'],a:3,e:'The resultant is minimum when the vectors are opposite, θ = 180°.'},
    {q:'Two vectors of magnitudes 6 and 8 are perpendicular. Their resultant is:',o:['2','10','14','48'],a:1,e:'R = √(6² + 8²) = √100 = 10.'},
    {q:'Two vectors each have magnitude 5 and act in the same direction. Their resultant is:',o:['0','5','10','25'],a:2,e:'For parallel vectors in the same direction, R = 5 + 5 = 10.'},
    {q:'Two equal vectors each have magnitude 10 and act at 120°. Their resultant magnitude is:',o:['10','20','10√3','5'],a:0,e:'R = √(10² + 10² + 2·10·10 cos120°) = √100 = 10.'},
    {q:'For vectors A and B with angle θ between them, the magnitude of their resultant is:',o:['A + B always','|A − B| always','√(A² + B²) always','√(A² + B² + 2AB cosθ)'],a:3,e:'The parallelogram law gives R = √(A² + B² + 2AB cosθ).'},
    {q:'Two vectors have magnitudes 7 and 3. The possible magnitude of their resultant lies between:',o:['0 and 10','3 and 7','4 and 10','7 and 21'],a:2,e:'The resultant ranges from |7 − 3| = 4 to 7 + 3 = 10.'},
    {q:'If A = 5 and B = 12 are perpendicular, the resultant magnitude is:',o:['7','13','17','60'],a:1,e:'R = √(5² + 12²) = √169 = 13.'},
    {q:'If two vectors are equal in magnitude and opposite in direction, their resultant is:',o:['A','2A','0','A²'],a:2,e:'Equal opposite vectors cancel each other, giving zero resultant.'},
    {q:'Two vectors 8 and 6 act at 60°. Their resultant magnitude is:',o:['2','10','√148','14'],a:2,e:'R² = 8² + 6² + 2(8)(6)cos60° = 148, so R = √148.'},
    {q:'If the resultant of two vectors is zero, the vectors must be:',o:['Equal and perpendicular','Equal and opposite','Unequal and parallel','Equal and parallel'],a:1,e:'A zero resultant requires equal magnitudes with opposite directions.'},
    {q:'For two vectors A and B, the resultant magnitude can never exceed:',o:['|A − B|','A + B','AB','A/B'],a:1,e:'By the triangle inequality, R ≤ A + B.'},
    {q:'For two vectors A and B, the resultant magnitude can never be less than:',o:['A + B','AB','|A − B|','A/B'],a:2,e:'The minimum resultant is |A − B| when the vectors are opposite.'},
    {q:'Two vectors of magnitudes 4 and 4 act at 60°. Their resultant is:',o:['4','4√2','4√3','8'],a:2,e:'R = √(16 + 16 + 32·cos60°) = √48 = 4√3.'},
    {q:'If two vectors of magnitudes 10 and 6 have a resultant of magnitude 8, the angle between them is:',o:['0°','60°','90°','180°'],a:2,e:'8² = 10² + 6² + 2(10)(6)cosθ gives cosθ = 0, hence θ = 90°.'},
    {q:'The vector obtained by adding −A to A is:',o:['A','−A','2A','0'],a:3,e:'A + (−A) = 0, because equal opposite vectors cancel.'},
    {q:'If A and B are parallel and in the same direction, the resultant direction is:',o:['Opposite to A','Along A and B','Perpendicular to both','Undefined'],a:1,e:'The sum of same-direction parallel vectors lies along their common direction.'},
    {q:'If A and B are parallel but opposite in direction and A > B, the resultant direction is:',o:['Along A','Along B','Perpendicular to A','Zero'],a:0,e:'The larger vector determines the direction of the resultant.'},
    {q:'Two perpendicular vectors have magnitudes 5 and 12. The angle made by the resultant with the 12-unit vector is approximately:',o:['22.6°','45°','67.4°','90°'],a:0,e:'tanθ = 5/12, so θ ≈ 22.6° measured from the 12-unit vector.'},
    {q:'The head-to-tail method of vector addition requires the vectors to be placed:',o:['Tail to tail','Head to head only','Tail of one at the head of the other','Perpendicular always'],a:2,e:'In the triangle method, the tail of the next vector is placed at the head of the previous vector.'},
    {q:'The resultant vector in the triangle law is drawn from:',o:['Head of first to head of second','Tail of first to head of last','Head of last to tail of first','Tail to tail'],a:1,e:'The resultant joins the starting tail to the final head.'},
    {q:'According to the parallelogram law, the resultant is represented by the:',o:['Side of the parallelogram','Diagonal through the common tail','Perpendicular bisector','Opposite side'],a:1,e:'When two vectors share a common origin, their resultant is the diagonal of the parallelogram from that origin.'},
    {q:'If two vectors have equal magnitude A and are perpendicular, their resultant magnitude is:',o:['A','2A','A√2','A/√2'],a:2,e:'R = √(A² + A²) = A√2.'},
    {q:'Two vectors of magnitudes 10 and 10 act at 60°. Their resultant magnitude is:',o:['10','10√2','10√3','20'],a:2,e:'R = √(100 + 100 + 100) = 10√3.'},
    {q:'If the angle between two vectors changes from 0° to 180°, their resultant magnitude changes from:',o:['A − B to A + B','A + B to |A − B|','0 to A + B','A to B'],a:1,e:'At 0°, R = A + B; at 180°, R = |A − B|.'},
    {q:'Two vectors have magnitudes 9 and 12. If they are perpendicular, the resultant is:',o:['3','15','21','108'],a:1,e:'R = √(9² + 12²) = √225 = 15.'},
    {q:'If the resultant of two vectors A and B is perpendicular to A, then:',o:['A = B','A² + B² = 0','A² + AB cosθ = 0','B = 0'],a:2,e:'Since R·A = (A + B)·A = A² + AB cosθ = 0 for a perpendicular resultant.'},
    {q:'Which operation gives the vector difference A − B?',o:['A + B','A + (−B)','B + (−A)','|A| − |B| only'],a:1,e:'Vector subtraction is defined as adding the negative of the vector: A − B = A + (−B).'}
  ];

  function render(){
    const root=document.getElementById('question-container')||document.getElementById('questions-container')||document.body;
    root.innerHTML='';
    const title=document.createElement('h2'); title.textContent='Vector Addition and Subtraction — Level 1'; root.appendChild(title);
    const progress=document.createElement('div'); progress.style.margin='10px 0'; root.appendChild(progress);
    let i=0;
    function show(){
      root.querySelectorAll('.mcq-card').forEach(x=>x.remove());
      const q=questions[i], card=document.createElement('div'); card.className='mcq-card';
      const qn=document.createElement('h3'); qn.textContent=`Q${i+1}. ${q.q}`; card.appendChild(qn);
      q.o.forEach((opt,idx)=>{const b=document.createElement('button'); b.type='button'; b.textContent=`${String.fromCharCode(65+idx)}) ${opt}`; b.style.display='block'; b.style.margin='8px 0'; b.addEventListener('click',()=>{card.querySelectorAll('button').forEach(x=>x.disabled=true); const r=document.createElement('p'); r.textContent=idx===q.a?`Correct. ${q.e}`:`Incorrect. Correct answer: ${String.fromCharCode(65+q.a)}) ${q.o[q.a]}. ${q.e}`; card.appendChild(r); if(i<questions.length-1){const n=document.createElement('button'); n.textContent='Next Question'; n.addEventListener('click',()=>{i++;show()}); card.appendChild(n)}}); card.appendChild(b)});
      root.appendChild(card); progress.textContent=`Question ${i+1} of ${questions.length}`;
    }
    show();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render); else render();
})();

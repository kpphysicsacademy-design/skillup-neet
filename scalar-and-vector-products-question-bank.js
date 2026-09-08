/* SkillUp NEET Physics — Scalar and Vector Products — Level 1 (30 MCQs) */
(() => {
  const topic = 'scalar and vector products';
  const questions = [
    {q:'The scalar product of two vectors A and B is:',o:['AB sinθ','AB cosθ','A + B','A × B'],a:1,e:'The dot product is A·B = AB cosθ.'},
    {q:'The result of the dot product of two vectors is a:',o:['Vector','Scalar','Unit vector','Tensor'],a:1,e:'A dot product produces a scalar quantity.'},
    {q:'The dot product of two non-zero perpendicular vectors is:',o:['AB','−AB','1','0'],a:3,e:'For θ = 90°, cos90° = 0, so A·B = 0.'},
    {q:'The magnitude of the vector product A × B is:',o:['AB cosθ','AB sinθ','A + B','A − B'],a:1,e:'|A × B| = AB sinθ.'},
    {q:'The vector product of two parallel vectors is:',o:['Maximum','AB','Zero','A + B'],a:2,e:'For parallel vectors θ = 0° or 180°, sinθ = 0.'},
    {q:'If A·B = 0 for two non-zero vectors, the angle between them is:',o:['0°','45°','90°','180°'],a:2,e:'A·B = AB cosθ = 0, so cosθ = 0 and θ = 90°.'},
    {q:'The scalar product A·A is equal to:',o:['A','2A','A²','0'],a:2,e:'A·A = A² cos0° = A².'},
    {q:'The vector A × B is perpendicular to:',o:['A only','B only','Both A and B','Neither'],a:2,e:'The cross product is perpendicular to the plane containing A and B.'},
    {q:'The magnitude of A × B is maximum when the angle between A and B is:',o:['0°','30°','90°','180°'],a:2,e:'AB sinθ is maximum when sinθ = 1, at 90°.'},
    {q:'If |A| = 4, |B| = 5 and θ = 60°, A·B equals:',o:['5','10','20','20√3'],a:1,e:'A·B = 4 × 5 × cos60° = 10.'},
    {q:'If |A| = 3, |B| = 4 and θ = 90°, |A × B| is:',o:['1','7','12','0'],a:2,e:'|A × B| = 3 × 4 × 1 = 12.'},
    {q:'The dot product is also known as the:',o:['Vector product','Cross product','Scalar product','Mixed product'],a:2,e:'A·B is called the scalar or dot product.'},
    {q:'The cross product is also known as the:',o:['Scalar product','Vector product','Dot product','Ordinary product'],a:1,e:'A × B is called the vector or cross product.'},
    {q:'If A and B are parallel in the same direction, A·B is:',o:['0','AB','−AB','A + B'],a:1,e:'For θ = 0°, A·B = AB.'},
    {q:'If A and B are antiparallel, A·B is:',o:['AB','0','−AB','A + B'],a:2,e:'For θ = 180°, cos180° = −1, so A·B = −AB.'},
    {q:'If A and B are perpendicular, |A × B| is:',o:['0','AB','A + B','|A − B|'],a:1,e:'At 90°, sin90° = 1, so |A × B| = AB.'},
    {q:'Which operation is commutative?',o:['A × B = B × A','A·B = B·A','Both cross and dot products','Neither'],a:1,e:'The dot product is commutative: A·B = B·A.'},
    {q:'For the cross product, which relation is correct?',o:['A × B = B × A','A × B = −(B × A)','A × B = A·B','A × B = 0 always'],a:1,e:'The cross product is anti-commutative: A × B = −B × A.'},
    {q:'The unit vector perpendicular to both i and j is:',o:['i','j','k','−i'],a:2,e:'Using the right-hand rule, i × j = k.'},
    {q:'The value of i·j is:',o:['1','−1','0','k'],a:2,e:'The unit vectors i and j are perpendicular, so their dot product is zero.'},
    {q:'The value of i × j is:',o:['i','j','k','0'],a:2,e:'By the standard right-handed coordinate system, i × j = k.'},
    {q:'The value of j × i is:',o:['i','j','k','−k'],a:3,e:'Reversing the order changes the sign: j × i = −k.'},
    {q:'If A·B is positive, the angle between A and B is:',o:['Acute','Exactly 90°','Obtuse','Exactly 180°'],a:0,e:'A·B = AB cosθ is positive when cosθ > 0, which occurs for an acute angle.'},
    {q:'If A·B is negative, the angle between A and B is:',o:['Acute','90°','Obtuse','0°'],a:2,e:'A·B is negative when cosθ < 0, corresponding to an obtuse angle.'},
    {q:'The work done by a constant force F through displacement s is expressed as:',o:['F × s','F·s','F/s','F + s'],a:1,e:'Work is W = F·s = Fs cosθ, a scalar product.'},
    {q:'The torque of a force F about a point with position vector r is:',o:['r·F','r × F','r + F','r − F'],a:1,e:'Torque is defined by τ = r × F.'},
    {q:'If A × B = 0 for two non-zero vectors, they are:',o:['Perpendicular','Parallel or antiparallel','Always equal','Always perpendicular'],a:1,e:'AB sinθ = 0, so θ = 0° or 180°.'},
    {q:'If |A| = 5, |B| = 6 and θ = 30°, |A × B| is:',o:['15','30','5√3','11'],a:0,e:'|A × B| = 5 × 6 × sin30° = 15.'},
    {q:'If |A| = 8, |B| = 5 and θ = 60°, A·B is:',o:['10','20','40','20√3'],a:1,e:'A·B = 8 × 5 × cos60° = 20.'},
    {q:'The scalar triple product A·(B × C) gives a:',o:['Vector','Scalar','Unit vector','Matrix'],a:1,e:'B × C is a vector, and its dot product with A is a scalar.'},
    {q:'The magnitude of A × B represents the area of the:',o:['Triangle formed by A and B','Parallelogram formed by A and B','Circle formed by A and B','Square formed by A and B'],a:1,e:'|A × B| = AB sinθ equals the area of the parallelogram formed by the two vectors.'}
  ];

  function render(){
    const root=document.getElementById('question-container')||document.getElementById('questions-container')||document.body;
    root.innerHTML='';
    const title=document.createElement('h2'); title.textContent='Scalar and Vector Products — Level 1'; root.appendChild(title);
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

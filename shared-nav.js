(()=> {
  if (document.querySelector('.skillup-bottom-nav')) return;
  const css = `
    .skillup-bottom-nav {
      position:fixed; z-index:9999; left:0; right:0; margin-inline:auto; bottom:0;
      width:100%; max-width:1120px; min-height:calc(68px + env(safe-area-inset-bottom, 0px));
      box-sizing:border-box; display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:6px;
      padding:6px 10px calc(6px + env(safe-area-inset-bottom, 0px)); background:rgba(255,255,255,.98);
      -webkit-backdrop-filter:blur(14px); backdrop-filter:blur(14px);
      border:1px solid #e5eaf2; border-bottom:0; border-radius:18px 18px 0 0;
      box-shadow:0 -8px 28px rgba(16,24,40,.10);
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;
    }
    .skillup-bottom-nav a {
      min-width:0; min-height:52px; display:flex; flex-direction:column;
      align-items:center; justify-content:center; gap:2px; border-radius:13px;
      color:#667085; text-decoration:none; font-size:11px; line-height:1.15;
      font-weight:800; -webkit-tap-highlight-color:transparent; text-align:center;
    }
    .skillup-bottom-nav a .nav-icon {font-size:21px; line-height:24px; font-weight:700}
    .skillup-bottom-nav a .nav-description {display:none}
    .skillup-bottom-nav a.active {background:#eef3ff;color:#315efb}
    .skillup-bottom-nav a:focus-visible {outline:3px solid #315efb;outline-offset:2px}
    body {padding-bottom:calc(84px + env(safe-area-inset-bottom, 0px)) !important}
    @media(max-width:380px) {
      .skillup-bottom-nav {gap:1px;padding:5px 4px}
      .skillup-bottom-nav a {font-size:10px}
      .skillup-bottom-nav a .nav-icon {font-size:19px}
    }
    @media(min-width:800px) {
      .skillup-bottom-nav {min-height:94px;padding:8px 14px calc(8px + env(safe-area-inset-bottom, 0px));gap:10px}
      .skillup-bottom-nav a {display:grid;grid-template-columns:32px minmax(0,1fr);grid-template-rows:auto auto;column-gap:10px;row-gap:3px;justify-content:center;align-content:center;text-align:left;padding:10px 14px}
      .skillup-bottom-nav a .nav-icon {grid-column:1;grid-row:1 / span 2;align-self:center;font-size:24px}
      .skillup-bottom-nav a .nav-label {grid-column:2;grid-row:1;font-size:13px}
      .skillup-bottom-nav a {grid-template-rows:auto;grid-template-columns:32px minmax(0,1fr)}
      body {padding-bottom:112px !important}
    }
  `;
  const style=document.createElement('style'); style.id='skillup-bottom-nav-style'; style.textContent=css; document.head.appendChild(style);
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  let practiceHref='index.html';
  try {
    const last=JSON.parse(localStorage.getItem('skillup.lastPractice')||'null');
    if(last && last.subject && last.topic) {
      const subject=String(last.subject).trim().toLowerCase();
      const topic=String(last.topic).trim();
      const paths={physics:'physics-home-fast.html',chemistry:'chemistry-home.html',botany:'botany-home.html',zoology:'zoology-home.html',biology:'index.html',maths:'maths-home.html',mathematics:'maths-home.html'};
      practiceHref=(paths[subject]||'index.html')+'?resumeConcept='+encodeURIComponent(topic);
    }
  } catch(e) {}
  const items=[
    {href:'index.html',icon:'⌂',label:'Home',files:['index.html'],isActive:()=>current==='index.html' && location.hash!=='#subjects'},
    {href:'index.html#subjects',icon:'▤',label:'Learn',files:[],isActive:()=>current==='index.html' && location.hash==='#subjects'},
    {href:practiceHref,icon:'▣',label:'Practice',files:['practice.html','quiz.html','test.html','physics-home-fast.html','physics-home.html','chemistry-home.html','botany-home.html','zoology-home.html','maths-home.html'],isActive:()=>['practice.html','quiz.html','test.html','physics-home-fast.html','physics-home.html','chemistry-home.html','botany-home.html','zoology-home.html','maths-home.html'].includes(current) || (current!=='index.html' && !['progress.html','profile.html','share.html'].includes(current) && !current.includes('home'))},
    {href:'progress.html',icon:'▥',label:'Progress',files:['progress.html']},
    {href:'profile.html',icon:'♙',label:'Profile',files:['profile.html']}
  ];
  const nav=document.createElement('nav'); nav.className='skillup-bottom-nav'; nav.setAttribute('aria-label','SkillUp main navigation');
  nav.innerHTML=items.map(item=>{
    const isActive = typeof item.isActive==='function' ? item.isActive() : item.files.includes(current);
    return '<a href="'+item.href+'" title="'+item.label+'" aria-label="'+item.label+'"'+(isActive?' class="active" aria-current="page"':'')+'><span class="nav-icon" aria-hidden="true">'+item.icon+'</span><span class="nav-label">'+item.label+'</span></a>';
  }).join('');
  document.body.appendChild(nav);
})();
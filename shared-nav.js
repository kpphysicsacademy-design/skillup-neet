(()=> {
  if (document.querySelector('.skillup-bottom-nav')) return;
  const css = `
    .skillup-bottom-nav {
      position:fixed; z-index:9999; left:50%;
      bottom:calc(48px + env(safe-area-inset-bottom, 0px));
      transform:translateX(-50%); width:min(760px,100%);
      height:68px; box-sizing:border-box; display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr)); gap:4px;
      padding:6px 8px; background:rgba(255,255,255,.98);
      -webkit-backdrop-filter:blur(14px); backdrop-filter:blur(14px);
      border:1px solid #e5eaf2; border-bottom:0;
      border-radius:18px 18px 0 0; box-shadow:0 -8px 28px rgba(16,24,40,.10);
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;
    }
    .skillup-bottom-nav a {
      min-width:0; min-height:48px; display:flex; flex-direction:column;
      align-items:center; justify-content:center; gap:3px; border-radius:13px;
      color:#667085; text-decoration:none; font-size:11px; line-height:1.1;
      font-weight:800; -webkit-tap-highlight-color:transparent;
    }
    .skillup-bottom-nav a .nav-icon {font-size:21px; line-height:24px; font-weight:700}
    .skillup-bottom-nav a.active {background:#eef3ff;color:#315efb}
    .skillup-bottom-nav a:focus-visible {outline:3px solid #315efb;outline-offset:2px}
    body {padding-bottom:calc(128px + env(safe-area-inset-bottom, 0px)) !important}
    @media(max-width:380px) {
      .skillup-bottom-nav {gap:1px;padding:5px 4px}
      .skillup-bottom-nav a {font-size:10px}
      .skillup-bottom-nav a .nav-icon {font-size:19px}
    }
    @media(min-width:800px) {
      .skillup-bottom-nav {bottom:0;border-bottom:0}
      body {padding-bottom:88px !important}
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
    {href:'index.html',icon:'⌂',label:'Home',files:['index.html']},
    {href:'progress.html',icon:'▥',label:'Progress',files:['progress.html']},
    {href:'profile.html',icon:'♙',label:'Profile',files:['profile.html']},
    {href:'share.html',icon:'♧',label:'Share',files:['share.html']},
    {href:practiceHref,icon:'▣',label:'Practice',files:['practice.html','quiz.html','test.html','physics-home-fast.html','physics-home.html','chemistry-home.html','botany-home.html','zoology-home.html','maths-home.html']}
  ];
  const nav=document.createElement('nav'); nav.className='skillup-bottom-nav'; nav.setAttribute('aria-label','SkillUp main navigation');
  nav.innerHTML=items.map(item=>{
    const target=item.href.split('?')[0].split('#')[0].toLowerCase();
    const active=item.files.includes(current) || (item.label==='Practice' && current!=='index.html' && !['progress.html','profile.html','share.html'].includes(current) && !current.includes('home'));
    return '<a href="'+item.href+'"'+(active?' class="active" aria-current="page"':'')+'><span class="nav-icon" aria-hidden="true">'+item.icon+'</span><span>'+item.label+'</span></a>';
  }).join('');
  document.body.appendChild(nav);
})();
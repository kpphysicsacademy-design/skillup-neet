(()=> {

  // SkillUp PWA: make the root manifest and safe static-only service worker available app-wide.
  if (!document.querySelector('link[rel="manifest"]')) {
    const pwaManifest = document.createElement('link');
    pwaManifest.rel = 'manifest';
    pwaManifest.href = '/manifest.webmanifest';
    document.head.appendChild(pwaManifest);
  }
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).catch(error => {
      console.warn('SkillUp offline support could not be registered', error);
    });
  }

  document.querySelectorAll('.skillup-bottom-nav, .skillup-universal-nav, .neet-nav').forEach(el=>el.remove());
  const oldStyle=document.getElementById('skillup-bottom-nav-style');
  if(oldStyle) oldStyle.remove();
  const css = `
    .skillup-bottom-nav {
      position:fixed; z-index:9999; left:0; right:0; margin-inline:auto; bottom:0;
      width:100%; max-width:1120px; min-height:calc(68px + env(safe-area-inset-bottom, 0px));
      box-sizing:border-box; display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:6px;
      padding:6px 10px calc(6px + env(safe-area-inset-bottom, 0px)); background:rgba(250,249,240,.98);
      -webkit-backdrop-filter:blur(14px); backdrop-filter:blur(14px);
      border:1px solid #d3dccb; border-bottom:0; border-radius:18px 18px 0 0;
      box-shadow:0 -6px 22px rgba(57,75,53,.09);
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;
    }
    .skillup-bottom-nav a {
      min-width:0; min-height:52px; display:flex; flex-direction:column;
      align-items:center; justify-content:center; gap:2px; border-radius:13px;
      color:#647061; text-decoration:none; font-size:11px; line-height:1.15;
      font-weight:800; -webkit-tap-highlight-color:transparent; text-align:center;
    }
    .skillup-bottom-nav a .nav-icon {font-size:21px; line-height:24px; font-weight:700}
    .skillup-bottom-nav a .nav-description {display:none}
    .skillup-bottom-nav a.active {background:#e3ebdd;color:#446349}
    .skillup-bottom-nav a:focus-visible {outline:3px solid #71916a;outline-offset:2px}
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
  let practiceHref='/index.html';
  try {
    const last=JSON.parse(localStorage.getItem('skillup.lastPractice')||'null');
    if(last && last.subject && last.topic) {
      const subject=String(last.subject).trim().toLowerCase();
      const topic=String(last.topic).trim();
      const paths={physics:'physics-home-fast.html',chemistry:'chemistry-home.html',botany:'botany-home.html',zoology:'zoology-home.html',biology:'index.html',maths:'maths-home.html',mathematics:'maths-home.html'};
      practiceHref='/'+(paths[subject]||'index.html')+'?resumeConcept='+encodeURIComponent(topic);
    }
  } catch(e) {}
  const items=[
    {href:'/index.html#subjects',icon:'⌂',label:'Home',files:['index.html'],isActive:()=>current==='index.html' && (location.pathname==='/' || location.pathname==='/index.html')},
    {href:'/profile.html#progress',icon:'▥',label:'Progress',files:['progress.html'],isActive:()=>current==='progress.html'||(current==='profile.html'&&location.hash==='#progress')},
    {href:'/profile.html',icon:'♙',label:'Profile',files:['profile.html'],isActive:()=>current==='profile.html'&&location.hash!=='#progress'},
    {href:'/share.html',icon:'↗',label:'Share',files:['share.html'],isActive:()=>current==='share.html'},
    {href:practiceHref,icon:'▣',label:'Practice',files:['practice.html','quiz.html','test.html','ai-quiz.html','physics-home-fast.html','physics-home.html','chemistry-home.html','botany-home.html','zoology-home.html','maths-home.html'],isActive:()=>['practice.html','quiz.html','test.html','ai-quiz.html','physics-home-fast.html','physics-home.html','chemistry-home.html','botany-home.html','zoology-home.html','maths-home.html'].includes(current)}
  ];
  const nav=document.createElement('nav'); nav.className='skillup-bottom-nav'; nav.setAttribute('aria-label','SkillUp main navigation');
  nav.innerHTML=items.map(item=>{
    const isActive = typeof item.isActive==='function' ? item.isActive() : item.files.includes(current);
    return '<a href="'+item.href+'" title="'+item.label+'" aria-label="'+item.label+'"'+(isActive?' class="active" aria-current="page"':'')+'><span class="nav-icon" aria-hidden="true">'+item.icon+'</span><span class="nav-label">'+item.label+'</span></a>';
  }).join('');
  document.body.appendChild(nav);

  // Android WebView compatibility: same-site links opened with target="_blank"
  // should still navigate when the host app does not enable multiple windows.
  // External links retain their normal target behavior for the app's native handler.
  document.addEventListener('click', event => {
    const link = event.target && event.target.closest ? event.target.closest('a[target="_blank"]') : null;
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.hasAttribute('download')) return;
    try {
      const destination = new URL(link.href, location.href);
      if (destination.origin !== location.origin) return;
      event.preventDefault();
      location.href = destination.href;
    } catch (error) {
      // Leave malformed or unsupported URLs to the browser's default handling.
    }
  }, false);
})();
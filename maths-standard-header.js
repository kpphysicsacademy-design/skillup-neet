/* SkillUp Maths shared header — consistent navigation and sizing across Maths pages. */
(function(){
  function apply(){
    if(document.querySelector('.su-maths-standard-header'))return;
    var header=document.querySelector('header');
    if(!header){
      if(!document.body)return;
      header=document.createElement('header');
      document.body.insertBefore(header,document.body.firstChild);
    }
    header.classList.add('su-maths-standard-header');
    var style=document.createElement('style');
    style.textContent=`
      .su-maths-standard-header{box-sizing:border-box!important;min-height:64px!important;height:auto!important;padding:9px 14px!important;display:flex!important;align-items:center!important;gap:10px!important;position:sticky!important;top:0!important;z-index:1000!important;background:#fffdf2!important;color:#263b2b!important;border-bottom:1px solid #d8e1d1!important;box-shadow:0 2px 8px rgba(31,55,36,.06)!important;flex-wrap:nowrap!important}
      .su-maths-standard-header .su-maths-menu-wrap{position:relative;flex:0 0 auto;order:-2}
      .su-maths-standard-header .su-maths-menu-btn{width:38px;height:38px;border:1px solid #d7e2d1;border-radius:11px;background:#fff;color:#24452d;font-size:21px;font-weight:800;display:grid;place-items:center;cursor:pointer}
      .su-maths-standard-header .su-maths-menu{display:none;position:absolute;left:0;top:46px;width:224px;max-height:70vh;overflow:auto;padding:8px;background:#fff;border:1px solid #d7e2d1;border-radius:14px;box-shadow:0 12px 30px rgba(20,45,27,.18);z-index:1002}
      .su-maths-standard-header .su-maths-menu.open{display:block}
      .su-maths-standard-header .su-maths-menu a{display:block;padding:10px 11px;border-radius:9px;color:#24452d!important;text-decoration:none!important;font-size:13px;font-weight:750}
      .su-maths-standard-header .su-maths-menu a:hover{background:#edf7e9}
      .su-maths-standard-header .su-maths-back{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;min-width:30px;color:#3979c9!important;text-decoration:none!important;font-size:24px;font-weight:800}
      .su-maths-standard-header .brand,.su-maths-standard-header .su-maths-brand{flex:0 0 auto!important;min-width:max-content!important;margin:0!important;color:#1e315e!important;font-size:19px!important;font-weight:900!important;line-height:1.15!important;white-space:nowrap!important}
      .su-maths-standard-header .brand span,.su-maths-standard-header .su-maths-brand span{color:#3979c9!important}
      .su-maths-standard-header .progress{flex:1 1 70px!important;min-width:32px!important;max-width:none!important}
      .su-maths-standard-header .xp,.su-maths-standard-header .heart,.su-maths-standard-header #hearts,.su-maths-standard-header #xp{flex:0 0 auto!important;white-space:nowrap!important}
      .su-maths-standard-header nav[aria-label="Main navigation"]{display:none!important}
      @media(max-width:520px){.su-maths-standard-header{min-height:58px!important;padding:7px 8px!important;gap:6px!important}.su-maths-standard-header .brand,.su-maths-standard-header .su-maths-brand{font-size:16px!important}.su-maths-standard-header .su-maths-menu-btn{width:32px;height:32px}.su-maths-standard-header .progress{flex:1 1 12px!important;min-width:12px!important}.su-maths-standard-header .xp,.su-maths-standard-header .heart,.su-maths-standard-header #hearts,.su-maths-standard-header #xp{font-size:11px!important;padding:4px 6px!important}}
    `;
    document.head.appendChild(style);
    var menuWrap=document.createElement('div');
    menuWrap.className='su-maths-menu-wrap';
    var button=document.createElement('button');
    button.type='button';button.className='su-maths-menu-btn';button.textContent='☰';button.setAttribute('aria-label','Open SkillUp navigation');button.setAttribute('aria-expanded','false');
    var menu=document.createElement('div');menu.className='su-maths-menu';menu.setAttribute('aria-label','SkillUp navigation');
    menu.innerHTML='<a href="physics-home-fast.html">🚀 Physics</a><a href="chemistry-home.html">🧪 Chemistry</a><a href="botany-home.html">🌿 Botany</a><a href="zoology-home.html">🦁 Zoology</a><a href="maths-home.html">📐 Mathematics</a><a href="profile.html">👤 Profile</a><a href="/community.html">☷ Community</a><a href="tests.html">📝 My Tests</a><a href="revision.html">🔄 Revision</a><a href="achievements.html">🏆 Achievements</a><a href="help.html">❓ Help & Feedback</a>';
    menuWrap.append(button,menu);
    var back=header.querySelector('a.back');
    if(!back && !/maths-home\.html$/i.test(location.pathname)){
      back=document.createElement('a');back.href='maths-home.html';back.className='su-maths-back';back.textContent='←';back.setAttribute('aria-label','Back to Maths Path');
    }
    var brand=header.querySelector('.brand');
    if(!brand){brand=document.createElement('div');brand.className='su-maths-brand';}
    brand.innerHTML='SkillUp <span>Maths</span>';
    if(back && back.parentNode===header)header.insertBefore(menuWrap,back);
    else header.insertBefore(menuWrap,header.firstChild);
    if(back && back.parentNode!==header)header.insertBefore(back,brand);
    if(brand.parentNode!==header)header.insertBefore(brand,back?back.nextSibling:menuWrap.nextSibling);
    else if(brand.previousElementSibling!==back && back)header.insertBefore(brand,back.nextSibling);
    button.addEventListener('click',function(e){e.stopPropagation();var open=menu.classList.toggle('open');button.setAttribute('aria-expanded',open?'true':'false');});
    document.addEventListener('click',function(e){if(!menuWrap.contains(e.target)){menu.classList.remove('open');button.setAttribute('aria-expanded','false');}});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
})();
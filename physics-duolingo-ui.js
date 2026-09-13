/* SkillUp Physics — Duolingo-style SVG UI enhancement. Lightweight: no external libraries. */
(function(){
  'use strict';
  var icons={
    1:'<circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" stroke-width="3"/><path d="M8 24h32M24 8v32" stroke="currentColor" stroke-width="2.5"/><circle cx="24" cy="24" r="4" fill="currentColor"/>',
    2:'<path d="M8 35c8-12 10-22 18-27 4-3 8-2 10 1 2 4-1 8-5 9-7 2-10 7-13 14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M31 9l5-1-2 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    3:'<path d="M24 7l4 11 12 1-9 8 3 12-10-6-10 6 3-12-9-8 12-1z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
    4:'<path d="M12 8v13h10V8h5v13h7l-12 16-12-16h7V8z" fill="currentColor"/>',
    5:'<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="24" r="5" fill="currentColor"/><path d="M24 8v11M40 24H29M24 40V29M8 24h11" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    6:'<circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 10v28M10 24h28M14 14l20 20M34 14L14 34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>',
    7:'<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 8c6 5 9 10 9 16 0 8-4 13-9 16-5-3-9-8-9-16 0-6 3-11 9-16z" fill="currentColor" opacity=".35"/><path d="M10 30c7-3 21-3 28 0" fill="none" stroke="currentColor" stroke-width="3"/>',
    8:'<path d="M10 15h28v18H10z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M15 15c1-6 5-9 9-9s8 3 9 9M15 33c1 6 5 9 9 9s8-3 9-9" fill="none" stroke="currentColor" stroke-width="3"/>',
    9:'<path d="M24 6v36M12 12c8 6 16 6 24 0M12 36c8-6 16-6 24 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    10:'<path d="M10 31c6-12 22-12 28 0M14 22c5-8 15-8 20 0M19 14c3-4 7-4 10 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    11:'<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="18" cy="20" r="2.5" fill="currentColor"/><circle cx="30" cy="20" r="2.5" fill="currentColor"/><circle cx="20" cy="30" r="2.5" fill="currentColor"/><circle cx="30" cy="32" r="2.5" fill="currentColor"/>',
    12:'<path d="M8 28c6-18 12 18 18 0s12 18 18 0" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>',
    13:'<path d="M6 24c6-11 12-11 18 0s12 11 18 0" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M6 24c6 11 12 11 18 0s12-11 18 0" fill="none" stroke="currentColor" stroke-width="2.5"/>',
    14:'<path d="M24 6l4 13 13 5-13 5-4 13-4-13-13-5 13-5z" fill="currentColor"/>',
    15:'<path d="M10 13h28v22H10z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M16 13v22M32 13v22M10 24h28" stroke="currentColor" stroke-width="2.5"/>',
    16:'<path d="M7 24h10M31 24h10M24 7v10M24 31v10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="24" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="3"/>',
    17:'<path d="M24 7v34M7 24h34" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M13 13l22 22M35 13L13 35" stroke="currentColor" stroke-width="2"/>',
    18:'<path d="M7 29c6-17 12-17 18 0s12 17 18 0" fill="none" stroke="currentColor" stroke-width="3"/><path d="M7 18c6-10 12-10 18 0s12 10 18 0" fill="none" stroke="currentColor" stroke-width="2.5"/>',
    19:'<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 8v9M40 24h-9M24 40v-9M8 24h9" stroke="currentColor" stroke-width="3"/>',
    20:'<path d="M12 38V10h24v28M17 16h14M17 23h14M17 30h8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  var css=''';
  css += '.duo-icon{width:44px;height:44px;flex:0 0 44px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(145deg,#fff,#eaf4ff);border:2px solid #c9ddf2;box-shadow:0 5px 0 #aac7e3,0 9px 16px rgba(31,91,150,.12);color:#1677ff;transition:transform .15s ease,box-shadow .15s ease;position:relative;overflow:visible}.duo-icon svg{width:29px;height:29px;display:block;filter:drop-shadow(0 2px 0 rgba(18,59,112,.12))}.chapter a:hover .duo-icon{transform:translateY(-2px) rotate(-2deg);box-shadow:0 7px 0 #aac7e3,0 12px 20px rgba(31,91,150,.16)}.chapter a:active .duo-icon{transform:translateY(3px);box-shadow:0 2px 0 #aac7e3}.duo-icon:after{content:"";position:absolute;left:7px;right:7px;top:5px;height:7px;border-radius:99px;background:rgba(255,255,255,.72);pointer-events:none}.duo-unit-icon{width:48px;height:48px;flex:0 0 48px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(145deg,#fff,#dcecff);border:2px solid #b9d4ef;box-shadow:0 5px 0 #91b7dc,0 8px 16px rgba(18,59,112,.12);color:#1266cf}.duo-unit-icon svg{width:30px;height:30px}.duo-unit-icon{transition:transform .16s ease}.unit:hover .duo-unit-icon{transform:rotate(-4deg) scale(1.04)}.chapter a{position:relative;overflow:visible}.chapter a:after{content:"";position:absolute;left:14px;right:48px;top:2px;height:3px;border-radius:99px;background:rgba(255,255,255,.9);pointer-events:none}.chapter a{box-shadow:0 5px 0 #c3d7ea,0 10px 18px rgba(18,59,112,.08)}.chapter a:hover{box-shadow:0 7px 0 #b5cde4,0 13px 22px rgba(18,59,112,.13)}.chapter a:active{transform:translateY(4px)!important;box-shadow:0 2px 0 #b5cde4}.go{box-shadow:0 4px 0 #0d5bbf,0 6px 12px rgba(22,119,255,.25);font-size:22px;transition:.15s}.chapter a:hover .go{transform:translateX(2px) scale(1.06)}.tag{box-shadow:0 2px 0 rgba(82,107,134,.12)}.tag:nth-of-type(1){background:#fff3c4;color:#8a6500}.tag:nth-of-type(2){background:#e4f8e8;color:#20743a}.tag:nth-of-type(3){background:#e8f0ff;color:#285da8}.progress{box-shadow:0 4px 0 #d7e3ef}.bar{box-shadow:inset 0 2px 4px rgba(18,59,112,.08)}.bar i{border-radius:99px;box-shadow:inset 0 2px 0 rgba(255,255,255,.35);transition:width .35s ease}.mascot{box-shadow:0 4px 0 #c4d8ee,0 7px 12px rgba(18,59,112,.1)}.clear{box-shadow:0 3px 0 #c8d8e8;cursor:pointer;transition:.15s}.clear:hover{transform:translateY(-2px);box-shadow:0 5px 0 #c8d8e8}.clear:active{transform:translateY(2px);box-shadow:0 1px 0 #c8d8e8}.search{box-shadow:inset 0 2px 5px rgba(18,59,112,.05)}.search:focus{outline:0;border-color:#1677ff;box-shadow:0 0 0 4px rgba(22,119,255,.12),inset 0 2px 5px rgba(18,59,112,.05)}@media(max-width:700px){.duo-icon{width:40px;height:40px;flex-basis:40px}.duo-unit-icon{width:44px;height:44px;flex-basis:44px}}@media(prefers-reduced-motion:reduce){.duo-icon,.duo-unit-icon,.chapter a,.go,.clear{transition:none!important}}';
  function svg(n,cls){return '<span class="'+cls+'"><svg viewBox="0 0 48 48" aria-hidden="true">'+icons[n]+'</svg></span>';}
  function apply(){
    document.querySelectorAll('.chapter').forEach(function(card){
      var sub=card.querySelector('.sub'),icon=card.querySelector('.icon');
      if(!sub||!icon||icon.dataset.duo==='1')return;
      var m=sub.textContent.match(/Chapter\s+(\d+)/),n=m?Math.ceil(Number(m[1])/20):1;
      icon.outerHTML=svg(((n-1)%20)+1,'duo-icon');
    });
    document.querySelectorAll('.unit').forEach(function(u){
      if(u.querySelector('.duo-unit-icon'))return;
      var num=u.querySelector('.unum');if(!num)return;
      var n=Math.max(1,Math.min(20,Number(num.textContent.trim())||1));
      num.outerHTML=svg(n,'duo-unit-icon');
    });
  }
  function boot(){
    var s=document.createElement('style');s.id='skillup-duolingo-svg';s.textContent=css;document.head.appendChild(s);apply();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  document.addEventListener('click',function(e){var a=e.target.closest('.chapter a');if(a){a.classList.add('duo-pressed');setTimeout(function(){a.classList.remove('duo-pressed')},180);}});
})();

/* SkillUp Physics — lightweight Duolingo-style CSS + inline SVG icons. */
(function(){
  'use strict';
  var paths=[
    '<circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" stroke-width="3"/><path d="M8 24h32M24 8v32" stroke="currentColor" stroke-width="2.5"/><circle cx="24" cy="24" r="4" fill="currentColor"/>',
    '<path d="M8 35c8-12 10-22 18-27 4-3 8-2 10 1 2 4-1 8-5 9-7 2-10 7-13 14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M31 9l5-1-2 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    '<path d="M24 7l4 11 12 1-9 8 3 12-10-6-10 6 3-12-9-8 12-1z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M12 8v13h10V8h5v13h7l-12 16-12-16h7V8z" fill="currentColor"/>',
    '<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="24" r="5" fill="currentColor"/><path d="M24 8v11M40 24H29M24 40V29M8 24h11" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    '<circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 10v28M10 24h28M14 14l20 20M34 14L14 34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>',
    '<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 8c6 5 9 10 9 16 0 8-4 13-9 16-5-3-9-8-9-16 0-6 3-11 9-16z" fill="currentColor" opacity=".3"/><path d="M10 30c7-3 21-3 28 0" fill="none" stroke="currentColor" stroke-width="3"/>',
    '<path d="M10 15h28v18H10z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M15 15c1-6 5-9 9-9s8 3 9 9M15 33c1 6 5 9 9 9s8-3 9-9" fill="none" stroke="currentColor" stroke-width="3"/>',
    '<path d="M24 6v36M12 12c8 6 16 6 24 0M12 36c8-6 16-6 24 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    '<path d="M10 31c6-12 22-12 28 0M14 22c5-8 15-8 20 0M19 14c3-4 7-4 10 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    '<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="18" cy="20" r="2.5" fill="currentColor"/><circle cx="30" cy="20" r="2.5" fill="currentColor"/><circle cx="20" cy="30" r="2.5" fill="currentColor"/><circle cx="30" cy="32" r="2.5" fill="currentColor"/>',
    '<path d="M8 28c6-18 12 18 18 0s12 18 18 0" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>',
    '<path d="M6 24c6-11 12-11 18 0s12 11 18 0" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M6 24c6 11 12 11 18 0s12-11 18 0" fill="none" stroke="currentColor" stroke-width="2.5"/>',
    '<path d="M24 6l4 13 13 5-13 5-4 13-4-13-13-5 13-5z" fill="currentColor"/>',
    '<path d="M10 13h28v22H10z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M16 13v22M32 13v22M10 24h28" stroke="currentColor" stroke-width="2.5"/>',
    '<path d="M7 24h10M31 24h10M24 7v10M24 31v10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="24" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="3"/>',
    '<path d="M24 7v34M7 24h34" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M13 13l22 22M35 13L13 35" stroke="currentColor" stroke-width="2"/>',
    '<path d="M7 29c6-17 12-17 18 0s12 17 18 0M7 18c6-10 12-10 18 0s12 10 18 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    '<circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 8v9M40 24h-9M24 40v-9M8 24h9" stroke="currentColor" stroke-width="3"/>',
    '<path d="M12 38V10h24v28M17 16h14M17 23h14M17 30h8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
  ];
  var colors=['#2b80ff','#35a854','#8b5cf6','#f97316','#0ea5e9','#ef4444','#16a34a','#06b6d4','#f59e0b','#dc2626','#7c3aed','#0891b2','#2563eb','#eab308','#6366f1','#e11d48','#14b8a6','#0284c7','#9333ea','#64748b'];
  function svg(n,cls){return '<span class="'+cls+'" aria-hidden="true"><svg viewBox="0 0 48 48">'+paths[n%20]+'</svg></span>';}
  function css(){var s=document.createElement('style');s.id='skillup-duolingo-svg';s.textContent=''+
  '.hero{position:relative;overflow:hidden;box-shadow:0 7px 0 #0d4e94,0 14px 26px rgba(18,59,112,.18)}'+
  '.hero:after{content:"";position:absolute;left:-20%;top:-35%;width:70%;height:80%;background:rgba(255,255,255,.12);transform:rotate(-10deg);border-radius:50%;pointer-events:none}'+
  '.progress,.card{box-shadow:0 5px 0 #d4e1ee,0 9px 18px rgba(18,59,112,.07)}'+
  '.chapter a{box-shadow:0 5px 0 #c0d5e9,0 9px 16px rgba(18,59,112,.08);transition:transform .14s ease,box-shadow .14s ease,border-color .14s ease;position:relative}'+
  '.chapter a:hover{transform:translateY(-3px);border-color:#8ebced;box-shadow:0 8px 0 #b0cbe3,0 14px 22px rgba(18,59,112,.14)}'+
  '.chapter a:active{transform:translateY(3px)!important;box-shadow:0 2px 0 #b0cbe3}'+
  '.chapter a:before{content:"";position:absolute;left:12px;right:48px;top:2px;height:3px;border-radius:99px;background:rgba(255,255,255,.9)}'+
  '.duo-icon{width:44px;height:44px;flex:0 0 44px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(145deg,#fff,#eaf4ff);border:2px solid #c7dcef;box-shadow:0 5px 0 #a8c5e1,0 8px 14px rgba(31,91,150,.12);position:relative}'+
  '.duo-icon svg{width:29px;height:29px;display:block}'+
  '.duo-icon:after{content:"";position:absolute;left:7px;right:7px;top:5px;height:7px;border-radius:99px;background:rgba(255,255,255,.8)}'+
  '.duo-unit-icon{width:48px;height:48px;flex:0 0 48px;display:grid;place-items:center;border-radius:16px;background:linear-gradient(145deg,#fff,#dcecff);border:2px solid #b7d1ec;box-shadow:0 5px 0 #91b6da,0 9px 16px rgba(18,59,112,.12)}'+
  '.duo-unit-icon svg{width:30px;height:30px;display:block}'+
  '.unit{transition:transform .15s ease}.unit:hover{transform:translateX(2px)}'+
  '.go{box-shadow:0 4px 0 #0d5bbf,0 7px 12px rgba(22,119,255,.25);font-size:22px;transition:transform .14s ease}.chapter a:hover .go{transform:translateX(3px) scale(1.06)}'+
  '.tag{box-shadow:0 2px 0 rgba(82,107,134,.13);font-weight:950}.tag:nth-of-type(1){background:#fff1b8;color:#806000}.tag:nth-of-type(2){background:#dcf8e3;color:#176b35}.tag:nth-of-type(3){background:#e4efff;color:#245a9e}'+
  '.search:focus{outline:0;border-color:#1677ff;box-shadow:0 0 0 4px rgba(22,119,255,.12)}'+
  '.clear{cursor:pointer;box-shadow:0 3px 0 #c3d5e7;transition:transform .14s ease,box-shadow .14s ease}.clear:hover{transform:translateY(-2px);box-shadow:0 5px 0 #c3d5e7}.clear:active{transform:translateY(2px);box-shadow:0 1px 0 #c3d5e7}'+
  '@media(max-width:700px){.duo-icon{width:40px;height:40px;flex-basis:40px}.duo-unit-icon{width:44px;height:44px;flex-basis:44px}}'+
  '@media(prefers-reduced-motion:reduce){.chapter a,.duo-icon,.unit,.go,.clear{transition:none!important}}';document.head.appendChild(s);}
  function enhance(root){
    (root||document).querySelectorAll('.chapter').forEach(function(card){
      var icon=card.querySelector('.icon'),sub=card.querySelector('.sub');if(!icon||!sub)return;
      var m=sub.textContent.match(/Chapter\s+(\d+)/);var chapter=m?Number(m[1]):1;var unit=Math.max(1,Math.min(20,Math.ceil(chapter/20)));icon.outerHTML=svg(unit-1,'duo-icon');
      var newIcon=card.querySelector('.duo-icon');if(newIcon)newIcon.style.color=colors[unit-1];
    });
    (root||document).querySelectorAll('.unit').forEach(function(u){
      if(u.querySelector('.duo-unit-icon'))return;var n=u.querySelector('.unum');if(!n)return;var unit=Math.max(1,Math.min(20,Number(n.textContent.trim())||1));n.outerHTML=svg(unit-1,'duo-unit-icon');var x=u.querySelector('.duo-unit-icon');if(x)x.style.color=colors[unit-1];
    });
  }
  function boot(){css();enhance(document);var path=document.getElementById('path');if(path&&window.MutationObserver){var observer=new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1)enhance(n);});});});observer.observe(path,{childList:true,subtree:true});}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

/* SkillUp Physics — Duolingo UI loader for the 400 custom SVG icon system. */
(function(){
'use strict';
function load(){
 if(window.SKILLUP_PHYSICS_SVG_ICON){enhance();return;}
 var s=document.createElement('script');s.src='physics-400-svg-icons.js?v=1';s.onload=enhance;document.head.appendChild(s);
}
function enhance(){
 if(!window.SKILLUP_PHYSICS_SVG_ICON)return;
 function run(root){
  (root||document).querySelectorAll('.chapter').forEach(function(card){
   var old=card.querySelector('.icon'),sub=card.querySelector('.sub');
   if(!old||!sub||old.classList.contains('custom-svg-icon'))return;
   var m=sub.textContent.match(/Chapter\s+(\d+)/),ix=m?Number(m[1]):1;
   var concept=card.querySelector('.title span:last-child'),name=concept?concept.textContent:'Physics concept';
   old.outerHTML='<span class="custom-svg-icon" aria-hidden="true">'+window.SKILLUP_PHYSICS_SVG_ICON(ix,name,Math.ceil(ix/20))+'</span>';
  });
 }
 run(document);
 var p=document.getElementById('path');
 if(p&&window.MutationObserver)new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1)run(n);});});}).observe(p,{childList:true,subtree:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',load);else load();
})();

/* SkillUp Physics — resilient progressive renderer V1 */
(function(){
  'use strict';
  function start(){
    var d=window.SKILLUP_PHYSICS_400||[];
    if(!Array.isArray(d)||d.length!==20||d.some(function(u){return !u[2]||u[2].length!==20;})) return false;
    var p=document.getElementById('path'),q=document.getElementById('q'),e=document.getElementById('empty'),lt=document.getElementById('lt'),pb=document.getElementById('pb'),pt=document.getElementById('pt');
    if(!p) return false;
    var a=[]; d.forEach(function(u,i){u[2].forEach(function(c){a.push({u:i+1,n:u[1],ic:u[0],c:c,ix:a.length+1});});});
    var shown=0,filter='',B=20,I=40,icons=d.map(function(u){return u[0];});
    function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
    function unit(x){return '<div class="unit"><span class="unum">'+esc(x.u)+'</span><div><h2>'+esc(x.ic)+' '+esc(x.n)+'</h2><small>20 equal-level Physics chapters</small></div></div>';}
    function card(x){return '<article class="chapter"><span class="node"></span><a href="physics-concept.html?concept='+encodeURIComponent(x.c)+'"><div><div class="title"><span class="icon">'+esc(icons[x.u-1])+'</span><span>'+esc(x.c)+'</span></div><div class="sub">Chapter '+x.ix+' • '+esc(x.n)+'</div><span class="tag">🎯 CHAPTER '+x.ix+'</span><span class="tag">⚡ +10 XP</span><span class="tag">📘 CONCEPT</span></div><span class="go">›</span></a></article>';}
    function update(){if(pt)pt.textContent='0 / 400 CHAPTERS';if(pb)pb.style.width=(shown/400*100)+'%';if(lt)lt.textContent=filter?'Showing '+shown+' / '+(filter?shown:400)+' matches':'Showing '+shown+' / 400';if(e)e.style.display=(filter&&shown===0)?'block':'none';}
    function render(list,count){p.innerHTML='';shown=Math.min(count,list.length);var h='',last=0;for(var i=0;i<shown;i++){if(list[i].u!==last){h+=unit(list[i]);last=list[i].u;}h+=card(list[i]);}p.innerHTML=h;update();}
    function more(){if(filter||shown>=a.length)return;var start=shown,end=Math.min(shown+B,a.length),h='',last=shown?a[shown-1].u:0;for(var i=start;i<end;i++){if(a[i].u!==last){h+=unit(a[i]);last=a[i].u;}h+=card(a[i]);}p.insertAdjacentHTML('beforeend',h);shown=end;update();}
    render(a,I);
    var sentinel=document.getElementById('physics-load-sentinel');
    if(!sentinel){sentinel=document.createElement('div');sentinel.id='physics-load-sentinel';sentinel.style.cssText='height:1px;width:100%;';p.after(sentinel);}
    if(window.IntersectionObserver){var io=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting;}))more();},{rootMargin:'900px'});io.observe(sentinel);}else{window.addEventListener('scroll',function(){if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-900)more();},{passive:true});}
    if(q){q.oninput=function(){filter=q.value.trim().toLowerCase();var list=filter?a.filter(function(x){return (x.c+' '+x.n).toLowerCase().indexOf(filter)>=0;}):a;render(list,I);};}
    var clear=document.getElementById('clear');if(clear)clear.onclick=function(){if(q)q.value='';filter='';render(a,I);};
    return true;
  }
  function loadData(){
    var s=document.createElement('script');
    s.src='physics-400-concepts.js?v=2';
    s.onload=function(){start();};
    s.onerror=function(){var e=document.getElementById('empty');if(e){e.textContent='Physics chapters could not be loaded. Please refresh once.';e.style.display='block';}};
    document.head.appendChild(s);
  }
  function boot(){if(!start()) loadData();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
})();

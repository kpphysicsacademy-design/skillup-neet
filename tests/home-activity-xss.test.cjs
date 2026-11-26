const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const start=html.indexOf('const fragment=document.createDocumentFragment();');
const end=html.indexOf("box.style.display='block';",start);
assert.ok(start>=0 && end>start);
const timeStart=html.indexOf('function activityTime(value)');
const timeEnd=html.indexOf('const rows=snap.docs',timeStart);
const source=html.slice(timeStart,timeEnd)+html.slice(start,end);
function render(rows){
  function node(tag){
    return {tag,style:{},children:[],textContent:'',append(...items){this.children.push(...items);},replaceChildren(fragment){this.children=fragment.children;},set innerHTML(value){throw Error('Unsafe HTML sink');}};
  }
  const list=node('div');
  vm.runInNewContext(source,{rows,list,URLSearchParams,document:{createElement:node,createDocumentFragment:()=>node('fragment')}});
  return list.children;
}
test('stored markup remains literal text',()=>{
  const marker='<b data-test="markup">sample</b>';
  const [link]=render([{subject:marker,topic:marker,score:80}]);
  assert.equal(link.children[1].children[0].textContent,marker);
  assert.equal(link.children[1].children[1].textContent,marker+' · 80%');
  assert.equal(link.href.split('?')[0],'index.html');
  assert.equal(new URLSearchParams(link.href.split('?')[1]).get('resumeConcept'),marker);
});
test('normal route, score and query round trip',()=>{
  const [link]=render([{subject:'Physics',topic:'A & B #1',score:91.6}]);
  assert.equal(link.href.split('?')[0],'physics-home-fast.html');
  assert.equal(new URLSearchParams(link.href.split('?')[1]).get('resumeConcept'),'A & B #1');
  assert.equal(link.children[1].children[1].textContent,'Physics · 92%');
});
test('prototype names and unknown subjects use safe fallback',()=>{
  for(const subject of ['constructor','__proto__','unknown']){
    assert.equal(render([{subject}])[0].href.split('?')[0],'index.html');
  }
});

test('recent activity sorts all owner records before selecting five',async()=>{
  const start=html.indexOf("const snap=await db.collection('skillup_progress')");
  const end=html.indexOf("const list=document.getElementById('homeActivityList')",start);
  assert.ok(start>=0 && end>start);
  const docs=Array.from({length:20},(_,i)=>({id:String(i),data:()=>({topic:String(i),updated_at:new Date(Date.UTC(2026,0,i+1)).toISOString()})}));
  docs.push({id:'legacy',data:()=>({topic:'legacy',updated_at:'invalid',completed_at:'2026-02-01T00:00:00Z'})});
  docs.push({id:'timestamp',data:()=>({topic:'timestamp',updated_at:{toMillis:()=>Date.UTC(2026,2,1)}})});
  docs.push({id:'invalid',data:()=>({topic:'invalid'})});
  const db={collection(name){assert.equal(name,'skillup_progress');return {where(field,op,uid){assert.deepEqual([field,op,uid],['user_id','==','owner']);return {get:async()=>({docs})};}};}};
  const rows=await vm.runInNewContext('(async()=>{'+html.slice(start,end)+';return rows;})()',{db,uid:'owner'});
  assert.deepEqual(Array.from(rows,r=>r.topic),['timestamp','legacy','19','18','17']);
});

test('display uses same normalized timestamp as sorting',()=>{
  const ms=Date.UTC(2026,1,15,12);
  const expected=new Date(ms).toLocaleDateString(undefined,{day:'2-digit',month:'short'});
  for(const row of [{updated_at:{toMillis:()=>ms}},{updated_at:'invalid',completed_at:new Date(ms).toISOString()}]){
    assert.equal(render([{subject:'Physics',score:80,...row}])[0].children[1].children[1].textContent,'Physics · 80% · '+expected);
  }
});

test('homepage external scripts defer in dependency order and personalization waits',()=>{
 const scripts=[...html.matchAll(/<script\b([^>]*)>/gi)].map(m=>m[1]);
 const external=scripts.filter(s=>/\bsrc=/.test(s));
 assert.equal(external.length,6);
 assert.ok(external.every(s=>/\bdefer\b/.test(s)&&!/\basync\b/.test(s)));
 const order=['firebase-app-compat.js','firebase-auth-compat.js','firebase-firestore-compat.js','central-config.js','central-auth.js','shared-nav.js'];
 order.forEach((name,i)=>assert.ok(external[i].includes(name)));
 assert.ok(html.includes("document.addEventListener('DOMContentLoaded',async function(){"));
 assert.ok(html.includes("},{once:true});"));
 for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))if(m[1].trim())assert.doesNotThrow(()=>new vm.Script(m[1]));
});

test('homepage branding reflects both exams without claiming full syllabus coverage',()=>{
 assert.ok(html.includes('<title>SkillUp | NEET &amp; JEE Main Practice</title>'));
 assert.ok(html.includes('NEET UG and JEE Main daily starter tests'));
 assert.ok(html.includes('YOUR NEET &amp; JEE LEARNING JOURNEY'));
 for(const [name,desc] of [['Physics','NEET &amp; JEE'],['Chemistry','NEET &amp; JEE'],['Mathematics','JEE'],['Botany','Plant Biology • NCERT • NEET'],['Zoology','Animal Biology • NCERT • NEET']])assert.ok(html.includes('<span class="name">'+name+'</span><span class="desc">'+desc));
 const centre=fs.readFileSync(require('node:path').join(__dirname,'../take-a-test.html'),'utf8');
 assert.ok(centre.includes('not a full-length official NEET or JEE mock examination'));
 const bank=JSON.parse(fs.readFileSync(require('node:path').join(__dirname,'../data/daily-test-starter.json'),'utf8'));
 for(const s of ['Physics','Chemistry','Mathematics']){assert.ok(bank.bank[s].length>=16);assert.equal(bank.numerical[s].length,4);}
 for(const s of ['Physics','Chemistry','Botany','Zoology'])assert.ok(bank.bank[s].length>=15);
});

test('homepage navigation disclosure supports keyboard and focus exit',()=>{
 const handlers={},attrs={},links=Array.from({length:3},()=>({focus(){doc.activeElement=this;}}));
 const toggle={setAttribute(k,v){attrs[k]=v;},focus(){doc.activeElement=this;},addEventListener(k,v){handlers['toggle:'+k]=v;}};
 const panel={hidden:true,contains:e=>links.includes(e),querySelector:()=>links[0],querySelectorAll:()=>links,addEventListener(){}};
 const doc={activeElement:toggle,getElementById:id=>id==='home-menu-toggle'?toggle:panel,addEventListener(k,v){handlers[k]=v;}};
 const start=html.indexOf('(function(){\n  const toggle=document.getElementById'),end=html.indexOf('</script>',start);
 vm.runInNewContext(html.slice(start,end),{document:doc});
 const key=k=>handlers.keydown({key:k,preventDefault(){}});
 key('ArrowDown');assert.equal(panel.hidden,false);assert.equal(doc.activeElement,links[0]);
 key('End');assert.equal(doc.activeElement,links[2]);
 key('ArrowDown');assert.equal(doc.activeElement,links[0]);
 key('Escape');assert.equal(panel.hidden,true);assert.equal(doc.activeElement,toggle);
 key('ArrowUp');assert.equal(doc.activeElement,links[2]);
 handlers.focusin({target:{}});assert.equal(panel.hidden,true);assert.equal(attrs['aria-expanded'],'false');
 assert.ok(html.includes('role="navigation" aria-label="Main navigation" hidden'));
 assert.ok(!html.includes('role="menuitem"'));
});

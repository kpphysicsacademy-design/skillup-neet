const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const start=html.indexOf('const fragment=document.createDocumentFragment();');
const end=html.indexOf("box.style.display='block';",start);
assert.ok(start>=0 && end>start);
const source=html.slice(start,end);
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

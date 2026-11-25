const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const home=fs.readFileSync(path.join(__dirname,'../zoology-home.html'),'utf8');
const quiz=fs.readFileSync(path.join(__dirname,'../zoology-mcq.html'),'utf8');
const start=home.indexOf('var units='),end=home.indexOf('var p=document',start);
assert.ok(start>=0&&end>start);
const ctx={};vm.createContext(ctx);vm.runInContext(home.slice(start,end),ctx);
test('all catalog IDs unique',()=>{assert.equal(new Set(ctx.a.map(x=>x.id)).size,ctx.a.length);assert.equal(ctx.units.length,14);});
test('Biodiversity titles have distinct IDs',()=>{const rows=ctx.a.filter(x=>x.c==='Biodiversity');assert.equal(rows.length,2);assert.notEqual(rows[0].id,rows[1].id);});
test('resume uses full catalog and renders target',()=>{assert.match(home,/matches=a\.filter/);assert.match(home,/Math\.max\(I,target\.ix\)/);assert.ok(ctx.a.at(-1).ix>20);});
test('quiz loader does not fall back to unrelated global array',()=>{assert.doesNotMatch(quiz,/\|\|arrays\[0\]/);});

const loaderStart=quiz.indexOf('function slug('),loaderEnd=quiz.indexOf('function loadBank(',loaderStart);
assert.ok(loaderStart>=0&&loaderEnd>loaderStart);
const loaderSource=quiz.slice(loaderStart,loaderEnd);
function loaderContext(conceptId=''){const c={conceptId,encodeURIComponent};vm.createContext(c);vm.runInContext(loaderSource,c);return c;}
test('duplicate Biodiversity routes select the correct independent bank',()=>{
 const ecology=ctx.a.find(x=>x.c==='Biodiversity'&&x.n==='Ecology and Environment');
 assert.ok(ecology);
 assert.equal(loaderContext(ecology.id).candidates('Biodiversity')[0],'biodiversity-patterns-question-bank.js');
 assert.equal(loaderContext().candidates('Biodiversity')[0],'biodiversity-question-bank.js');
});
test('taxonomy and Darwin aliases point to real canonical files',()=>{
 assert.equal(loaderContext().candidates('Taxonomy and Systematics')[0],'taxonomy-and-systematics-question-bank.js');
 assert.equal(loaderContext().candidates("Darwin's Natural Selection")[0],'darwin-natural-selection-question-bank.js');
});
test('question-bank filenames resolve only their declared global arrays',()=>{
 const fixtures={
  'biodiversity-question-bank.js':'skillUpBiodiversityQuestions',
  'biodiversity-patterns-question-bank.js':'skillUpBiodiversityPatternsQuestions',
  'taxonomy-and-systematics-question-bank.js':'skillUpTaxonomySystematicsQuestions',
  'darwin-natural-selection-question-bank.js':'skillUpDarwinsNaturalSelectionQuestions'
 };
 for(const [file,globalName] of Object.entries(fixtures)){
  const source=fs.readFileSync(path.join(__dirname,'../question-banks',file),'utf8');
  assert.ok(source.includes('window.'+globalName),file+' must define '+globalName);
  const row={q:'Q',o:['A','B'],a:0},c=loaderContext();
  const scope={[globalName]:[row]};
  assert.equal(c.resolveBankArray(file,scope)[0],row);
 }
});
test('loader rejects an unrelated question-bank global instead of silently using it',()=>{
 const c=loaderContext(),unrelated=[{q:'wrong',o:['A','B'],a:0}];
 assert.equal(c.resolveBankArray('taxonomy-and-systematics-question-bank.js',{skillUpWrongQuestions:unrelated}),null);
});

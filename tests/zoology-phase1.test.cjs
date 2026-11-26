const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const pathModule=path;
const home=fs.readFileSync(path.join(__dirname,'../zoology-home.html'),'utf8');
const quiz=fs.readFileSync(path.join(__dirname,'../zoology-mcq.html'),'utf8');
const quickLearn=fs.readFileSync(path.join(__dirname,'../zoology-quicklearn.html'),'utf8');
const start=home.indexOf('var units='),end=home.indexOf('var p=document',start);
assert.ok(start>=0&&end>start);
const ctx={};vm.createContext(ctx);vm.runInContext(home.slice(start,end),ctx);
test('all catalog IDs unique',()=>{assert.equal(new Set(ctx.a.map(x=>x.id)).size,ctx.a.length);assert.equal(ctx.units.length,14);});
test('Biodiversity titles have distinct IDs',()=>{const rows=ctx.a.filter(x=>x.c==='Biodiversity');assert.equal(rows.length,2);assert.notEqual(rows[0].id,rows[1].id);});
test('resume uses the full catalog and resolves duplicate legacy Biodiversity records deterministically',()=>{
 assert.ok(home.includes('Math.max(I,target.ix)'));
 assert.ok(ctx.a.at(-1).ix>20);
 const start=home.indexOf('function resolveResumeTarget('),end=home.indexOf('var target=resolveResumeTarget',start);
 assert.ok(start>=0&&end>start);
 const c={};vm.createContext(c);vm.runInContext(home.slice(start,end),c);
 const rows=ctx.a.filter(x=>x.c==='Biodiversity');
 assert.equal(rows.length,2);
 const legacy=c.resolveResumeTarget(ctx.a,'','biodiversity');
 assert.equal(legacy.n,'Diversity in Living World');
 assert.equal(c.resolveResumeTarget(ctx.a,rows[1].id,'biodiversity').id,rows[1].id);
});
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
  'zoology-enzymes-question-bank.js':'skillUpZoologyEnzymesQuestions',
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

test('completed Zoology quiz saves progress through the signed-in account adapter',async()=>{
 const conceptId='zoo-Ecology%20and%20Environment--Biodiversity';
 let saved=null;
 const c={conceptId,requested:'Biodiversity',window:{SkillUpAuth:{saveProgress:async row=>{saved=row;}}}};
 vm.createContext(c);
 const start=quiz.indexOf('async function persistZoologyProgress'),end=quiz.indexOf('function startZoologyQuiz',start);
 assert.ok(start>=0&&end>start);
 vm.runInContext(quiz.slice(start,end),c);
 assert.equal(await c.persistZoologyProgress(24,30,80),true);
 assert.equal(saved.subject,'Zoology');
 assert.equal(saved.topic,conceptId,'duplicate concept titles must be stored with their unit-qualified ID');
 assert.equal(saved.concept,'Biodiversity');
 assert.equal(saved.concept_id,conceptId);
 assert.equal(saved.completed,true);
 assert.equal(saved.score,24);
 assert.equal(saved.total_questions,30);
 assert.equal(saved.percentage,80);
 assert.equal(saved.xp,240);
});
test('progress persistence does not write when the account adapter is unavailable',async()=>{
 const c={conceptId:'',requested:'Aves',window:{}};
 vm.createContext(c);
 const start=quiz.indexOf('async function persistZoologyProgress'),end=quiz.indexOf('function startZoologyQuiz',start);
 vm.runInContext(quiz.slice(start,end),c);
 assert.equal(await c.persistZoologyProgress(10,30,33),false);
});

test('all inline scripts in Zoology entry pages parse before deployment',()=>{
 for(const file of ['zoology-mcq.html','zoology-quicklearn.html','zoology-topic-cheat-sheet.html','zoology-home.html','zoology-chapter-test.html']){
  const source=fs.readFileSync(path.join(__dirname,'..',file),'utf8');
  const scripts=[...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(match=>match[1]).filter(code=>code.trim());
  for(const [index,code] of scripts.entries())assert.doesNotThrow(()=>new vm.Script(code,{filename:file+' inline script '+index}),file+' inline script '+index);
 }
});
test('What is Living quiz route resolves its dedicated 30-question bank',()=>{
 const source=fs.readFileSync(path.join(__dirname,'../question-banks/what-is-living-question-bank.js'),'utf8');
 const context={window:{}};vm.createContext(context);vm.runInContext(source,context);
 const bank=context.window.skillUpWhatIsLivingQuestions;
 assert.ok(Array.isArray(bank));
 assert.equal(bank.length,30);
 assert.ok(bank.every(row=>row&&typeof row.q==='string'&&Array.isArray(row.o)&&row.o.length>=2&&Number.isInteger(row.a)&&row.a>=0&&row.a<row.o.length));
});

test('every Zoology catalog concept resolves to an executable dedicated MCQ bank',()=>{
 const catalogContext={};vm.createContext(catalogContext);vm.runInContext(home.slice(start,end),catalogContext);
 const problems=[],bankCache=new Map();let checked=0;
 for(const unit of catalogContext.units){
  for(const concept of unit[1]){
   const conceptName=concept[0];
   const id='zoo-'+encodeURIComponent(unit[0])+'--'+encodeURIComponent(conceptName);
   const file=loaderContext(id).candidates(conceptName)[0];
   const bankPath=pathModule.join(__dirname,'../question-banks',file);
   if(!fs.existsSync(bankPath)){problems.push('Missing bank: '+unit[0]+' / '+conceptName+' -> '+file);continue;}
   if(!bankCache.has(file)){
    let result={valid:false,error:''};
    try{
     const bankContext={window:{}};vm.createContext(bankContext);
     vm.runInContext(fs.readFileSync(bankPath,'utf8'),bankContext);
     const arrays=Object.values(bankContext.window).filter(Array.isArray);
     const valid=arrays.some(rows=>rows.length>0&&rows.every(row=>
      row&&typeof row==='object'&&typeof row.q==='string'&&Array.isArray(row.o)&&row.o.length>=2&&'a'in row&&
      ((Number.isInteger(row.a)&&row.a>=0&&row.a<row.o.length)||(typeof row.a==='string'&&(row.o.includes(row.a)||(/^[A-D]$/i.test(row.a.trim())&&row.a.trim().toUpperCase().charCodeAt(0)-65<row.o.length))))
     ));
     result={valid,error:valid?'':'no valid q/o/a MCQ array exported'};
    }catch(error){result={valid:false,error:error.message};}
    bankCache.set(file,result);
   }
   const result=bankCache.get(file);
   if(!result.valid)problems.push(file+': '+result.error);
   checked++;
  }
 }
 assert.equal(checked,catalogContext.units.reduce((sum,unit)=>sum+unit[1].length,0));
 assert.deepEqual(problems,[], 'Zoology bank integrity defects:\n'+problems.join('\\n'));
});

test('answerIndex supports numeric, option-text and letter-coded answer keys',()=>{
 const start=quiz.indexOf('function answerIndex(item){');
 const end=quiz.indexOf('\n function render()',start);
 assert.ok(start>=0&&end>start);
 const context={};vm.createContext(context);
 vm.runInContext(quiz.slice(start,end)+';this.answerIndex=answerIndex;',context);
 assert.equal(context.answerIndex({o:['red','blue'],a:1}),1);
 assert.equal(context.answerIndex({o:['red','blue'],a:'blue'}),1);
 assert.equal(context.answerIndex({o:['red','blue'],a:'B'}),1);
 assert.equal(context.answerIndex({o:['red','blue'],a:'A'}),0);
 assert.equal(context.answerIndex({o:['red','blue'],a:'D'}),-1);
});

test('Quick Learn routes duplicate titles and special Zoology banks correctly',()=>{
 const start=quickLearn.indexOf('function bankFileForTopic(');
 const end=quickLearn.indexOf("document.getElementById('topicTitle')",start);
 assert.ok(start>=0&&end>start);
 const c={encodeURIComponent};vm.createContext(c);vm.runInContext(quickLearn.slice(start,end),c);
 assert.equal(c.bankFileForTopic('What is Living?',''),'what-is-living-question-bank.js');
 assert.equal(c.bankFileForTopic('Enzymes',''),'zoology-enzymes-question-bank.js');
 assert.equal(c.bankFileForTopic('Taxonomy and Systematics',''),'taxonomy-and-systematics-question-bank.js');
 assert.equal(c.bankFileForTopic("Darwin's Natural Selection",''),'darwin-natural-selection-question-bank.js');
 assert.equal(c.bankFileForTopic('Biodiversity','zoo-Ecology%20and%20Environment--Biodiversity'),'biodiversity-patterns-question-bank.js');
 assert.equal(c.bankFileForTopic('Biodiversity','zoo-Diversity%20in%20Living%20World--Biodiversity'),'biodiversity-question-bank.js');
});
test('Quick Learn resolves the exact expected bank global, including the Zoology Enzymes bank',()=>{
 const start=quickLearn.indexOf('function bankFileForTopic(');
 const end=quickLearn.indexOf("document.getElementById('topicTitle')",start);
 const c={encodeURIComponent};vm.createContext(c);vm.runInContext(quickLearn.slice(start,end),c);
 const enzymes=[{q:'Q',o:['A','B'],a:0}],biodiversity=[{q:'Q2',o:['A','B'],a:1}];
 assert.equal(c.findBank('zoology-enzymes-question-bank.js',{skillUpZoologyEnzymesQuestions:enzymes}),enzymes);
 assert.equal(c.findBank('biodiversity-question-bank.js',{skillUpBiodiversityQuestions:biodiversity}),biodiversity);
 assert.equal(c.findBank('zoology-enzymes-question-bank.js',{skillUpWrongQuestions:enzymes}),null);
});
test('Quick Learn answerIndex supports numeric, option-text and A-D answer keys',()=>{
 const start=quickLearn.indexOf('function answerIndex(item){');
 const end=quickLearn.indexOf("\ndocument.getElementById('topicTitle')",start);
 assert.ok(start>=0&&end>start);
 const c={};vm.createContext(c);vm.runInContext(quickLearn.slice(start,end)+';this.answerIndex=answerIndex;',c);
 assert.equal(c.answerIndex({o:['red','blue'],a:1}),1);
 assert.equal(c.answerIndex({o:['red','blue'],a:'blue'}),1);
 assert.equal(c.answerIndex({o:['red','blue'],a:'B'}),1);
 assert.equal(c.answerIndex({o:['red','blue'],a:'A'}),0);
 assert.equal(c.answerIndex({o:['red','blue'],a:'D'}),-1);
});
test('Quick Learn preserves unit-qualified concept IDs when linking back to the quiz and cheat sheet',()=>{
 assert.ok(quickLearn.includes("const conceptUrl=encodeURIComponent(topic)+(conceptId?'&conceptId='+encodeURIComponent(conceptId):'')"));
 assert.ok(quickLearn.includes("'zoology-mcq.html?concept='+conceptUrl"));
 assert.ok(quickLearn.includes("'zoology-topic-cheat-sheet.html?concept='+conceptUrl"));
 assert.ok(quickLearn.includes('correct=answerIndex(item)'));
});

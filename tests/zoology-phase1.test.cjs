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
test('resume uses the full catalog and rejects ambiguous legacy Biodiversity records',()=>{
 assert.ok(home.includes('Math.max(I,target.ix)'));
 assert.ok(ctx.a.at(-1).ix>20);
 const start=home.indexOf('function resolveResumeTarget('),end=home.indexOf('var target=resolveResumeTarget',start);
 assert.ok(start>=0&&end>start);
 const c={};vm.createContext(c);vm.runInContext(home.slice(start,end),c);
 const rows=ctx.a.filter(x=>x.c==='Biodiversity');
 assert.equal(rows.length,2);
 const legacy=c.resolveResumeTarget(ctx.a,'','biodiversity');
 assert.equal(legacy,null);
 assert.equal(c.resolveResumeTarget(ctx.a,'unknown-id','biodiversity'),null);
 assert.equal(c.resolveResumeTarget(ctx.a,'','aves').c,'Aves');
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
 assert.equal(loaderContext().candidates('Biodiversity').length,0);
 assert.equal(loaderContext('invalid').candidates('Biodiversity').length,0);
 assert.equal(loaderContext(ecology.id).candidates('Biodiversity').length,1);
 const diversity=ctx.a.find(x=>x.c==='Biodiversity'&&x.n==='Diversity in Living World');
 assert.equal(loaderContext(diversity.id).candidates('Biodiversity')[0],'biodiversity-question-bank.js');
 assert.equal(loaderContext(diversity.id).candidates('Biodiversity').length,1);
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
 const start=quickLearn.indexOf('const slug=s=>');
 const end=quickLearn.indexOf("document.getElementById('topicTitle')",start);
 assert.ok(start>=0&&end>start);
 const c={encodeURIComponent};vm.createContext(c);vm.runInContext(quickLearn.slice(start,end),c);
 assert.equal(c.bankFileForTopic('What is Living?',''),'what-is-living-question-bank.js');
 assert.equal(c.bankFileForTopic('Enzymes',''),'zoology-enzymes-question-bank.js');
 assert.equal(c.bankFileForTopic('Taxonomy and Systematics',''),'taxonomy-and-systematics-question-bank.js');
 assert.equal(c.bankFileForTopic("Darwin's Natural Selection",''),'darwin-natural-selection-question-bank.js');
 assert.equal(c.bankFileForTopic('Biodiversity',''),null);
 assert.equal(c.bankFileForTopic('Biodiversity','invalid'),null);
 assert.equal(c.bankFileForTopic('Biodiversity','zoo-Ecology%20and%20Environment--Biodiversity'),'biodiversity-patterns-question-bank.js');
 assert.equal(c.bankFileForTopic('Biodiversity','zoo-Diversity%20in%20Living%20World--Biodiversity'),'biodiversity-question-bank.js');
});
test('Quick Learn resolves the exact expected bank global, including the Zoology Enzymes bank',()=>{
 const start=quickLearn.indexOf('const slug=s=>');
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
test('Quick Learn keeps the focused question-and-explanation experience',()=>{
 assert.ok(quickLearn.includes("const conceptUrl=encodeURIComponent(topic)+(conceptId?'&conceptId='+encodeURIComponent(conceptId):'')"));
 assert.ok(quickLearn.includes("'zoology-mcq.html?concept='+conceptUrl"));
 assert.ok(quickLearn.includes('id="question"'));
 assert.ok(quickLearn.includes('id="reveal"'));
 assert.ok(quickLearn.includes('id="explanation"'));
 assert.ok(quickLearn.includes('id="previous"'));
 assert.ok(quickLearn.includes('id="next"'));
 assert.doesNotMatch(quickLearn,/id="(?:options|xp|streak|progress|sheetLink|startQuiz)"/);
 assert.doesNotMatch(quickLearn,/zoology-topic-cheat-sheet\.html/);
});

test('Quick Learn resolves the same dedicated question bank as the main quiz for every Zoology concept',()=>{
 const helperStart=quickLearn.indexOf('const slug=s=>');
 const helperEnd=quickLearn.indexOf("document.getElementById('topicTitle')",helperStart);
 assert.ok(helperStart>=0&&helperEnd>helperStart);
 const quickContext={encodeURIComponent};vm.createContext(quickContext);vm.runInContext(quickLearn.slice(helperStart,helperEnd),quickContext);
 const catalogContext={};vm.createContext(catalogContext);vm.runInContext(home.slice(start,end),catalogContext);
 const loaded=new Map(),problems=[];
 for(const unit of catalogContext.units){
  for(const concept of unit[1]){
   const name=concept[0],id='zoo-'+encodeURIComponent(unit[0])+'--'+encodeURIComponent(name);
   const quickFile=quickContext.bankFileForTopic(name,id);
   const quizFile=loaderContext(id).candidates(name)[0];
   if(quickFile!==quizFile)problems.push(name+' ('+unit[0]+'): Quick Learn '+quickFile+' != quiz '+quizFile);
   if(!loaded.has(quickFile)){
    const filePath=pathModule.join(__dirname,'../question-banks',quickFile);
    if(!fs.existsSync(filePath)){problems.push('Quick Learn bank missing: '+quickFile);loaded.set(quickFile,null);}
    else{
     try{
      const scope={window:{}};vm.createContext(scope);vm.runInContext(fs.readFileSync(filePath,'utf8'),scope);
      const value=quickContext.findBank(quickFile,scope.window);
      loaded.set(quickFile,Array.isArray(value)&&value.length?value:null);
      if(!loaded.get(quickFile))problems.push('Quick Learn cannot resolve bank global: '+quickFile);
     }catch(error){loaded.set(quickFile,null);problems.push(quickFile+': '+error.message);}
    }
   }
  }
 }
 assert.deepEqual(problems,[],'Quick Learn routing defects:\\n'+problems.join('\\n'));
});


test('MCQ bank loader retries a relative URL after the root-relative request fails',()=>{
 const start=quiz.indexOf('function loadBank(file){');
 const end=quiz.indexOf('async function persistZoologyProgress',start);
 assert.ok(start>=0&&end>start);
 const loader=quiz.slice(start,end);
 assert.ok(loader.includes("new URL('/question-banks/'+file,location.origin)"));
 assert.ok(loader.includes("new URL('question-banks/'+file,document.baseURI)"));
 assert.ok(loader.includes('script.onerror=()=>{lastError=new Error'));
 assert.ok(loader.includes('tryNext();'));
 assert.ok(loader.includes('20261126-zoology-bank-loader-recovery-2'));
});

test('retry uses same owner and absolute XP, rejects account switch',async()=>{
 const writes=new Map();let fail=true;
 const auth={auth:{currentUser:{uid:'owner'}},saveProgress:async row=>{
  writes.set(row.topic,row.xp);
  if(fail){fail=false;throw Error('lost acknowledgement');}
 }};
 const c={conceptId:'unique',requested:'Topic',window:{SkillUpAuth:auth}};
 vm.createContext(c);
 vm.runInContext(quiz.slice(quiz.indexOf('async function persistZoologyProgress'),quiz.indexOf('function startZoologyQuiz')),c);
 await assert.rejects(c.persistZoologyProgress(20,30,67,'owner'));
 assert.equal(await c.persistZoologyProgress(20,30,67,'owner'),true);
 assert.equal(writes.size,1);assert.equal(writes.get('unique'),200);
 auth.auth.currentUser={uid:'other'};
 await assert.rejects(c.persistZoologyProgress(20,30,67,'owner'),/Account changed/);
 assert.equal(writes.size,1);
});

test('pending result recovery is scoped to account and concept',()=>{
 const store=new Map();
 const c={conceptId:'unique',requested:'Topic',window:{},sessionStorage:{getItem:k=>store.get(k)||null}};
 vm.createContext(c);
 vm.runInContext(quiz.slice(quiz.indexOf('async function persistZoologyProgress'),quiz.indexOf('function startZoologyQuiz')),c);
 store.set(c.pendingKey('owner'),JSON.stringify({owner:'owner',score:20,total:30,pct:67}));
 assert.equal(c.readPending('owner').score,20);
 assert.equal(c.readPending('other'),null);
 store.set(c.pendingKey('owner'),JSON.stringify({owner:'other',score:20,total:30,pct:67}));
 assert.equal(c.readPending('owner'),null);
});

test('quiz ownership cannot transfer after account switch or logout and relogin',()=>{const start=quiz.indexOf('function bindQuizOwner('),end=quiz.indexOf('function startZoologyQuiz',start);const c={};vm.runInNewContext(quiz.slice(start,end),c);let notify;const auth={currentUser:{uid:'A'},onAuthStateChanged(fn){notify=fn;}};const owner=c.bindQuizOwner(auth);assert.equal(owner.owner(),'A');auth.currentUser={uid:'B'};notify(auth.currentUser);assert.equal(owner.owner(),null);auth.currentUser={uid:'A'};notify(auth.currentUser);assert.equal(owner.owner(),null);const fresh=c.bindQuizOwner(auth);auth.currentUser=null;notify(null);auth.currentUser={uid:'A'};notify(auth.currentUser);assert.equal(fresh.owner(),null);});

test('legacy pending result is retained but not written without completion time',async()=>{const start=quiz.indexOf('function showProgressSync('),end=quiz.indexOf('async function recoverProgress',start);let writes=0,removed=0;const result={owner:'A',score:2,total:3,pct:67};const raw=JSON.stringify(result);const c={window:{SkillUpAuth:{auth:{}}},pendingKey:()=> 'key',bindQuizOwner:()=>({owner:()=> 'A'}),sessionStorage:{getItem:()=>raw,removeItem:()=>removed++},document:{createElement:()=>({setAttribute(){}})},persistZoologyProgress:async()=>{writes++;return true;}};vm.runInNewContext(quiz.slice(start,end),c);let nodes; c.showProgressSync({replaceChildren(...items){nodes=items;}},result,false);await nodes[1].onclick();assert.equal(writes,0);assert.equal(removed,0);assert.match(nodes[0].textContent,/Legacy result/);});

 test('homepage activity preserves explicit Zoology IDs and does not guess legacy duplicate titles',()=>{
 const source=require('node:fs').readFileSync('index.html','utf8');
 const start=source.indexOf('function activityResumeParams('),end=source.indexOf('          link.href=',start);
 assert.ok(start>=0&&end>start);
 const c={URLSearchParams};vm.createContext(c);vm.runInContext(source.slice(start,end),c);
 for(const row of ctx.a.filter(x=>x.c==='Biodiversity')){
 const p=c.activityResumeParams('zoology',{concept_id:row.id,concept:row.c},row.c);
 assert.equal(p.get('resumeId'),row.id);
 assert.equal(p.get('resumeConcept'),row.c);
 assert.equal(c.activityResumeParams('zoology',{topic:row.id},row.id).get('resumeId'),row.id);
 }
 assert.equal(c.activityResumeParams('zoology',{topic:'Biodiversity'},'Biodiversity').has('resumeId'),false);
 assert.equal(c.activityResumeParams('zoology',{concept_id:'invalid',topic:'Biodiversity'},'Biodiversity').get('resumeId'),'invalid');
 assert.equal(c.activityResumeParams('chemistry',{concept_id:'abc'},'Matter').has('resumeId'),false);
 });

test('ZOO-006 actual central-auth client: atomic creation, conflict and session guards',async()=>{
 const source=fs.readFileSync(pathModule.join(__dirname,'../central-auth.js'),'utf8');
 let callback, requests=[],transactions=0, writes=0, mode='success';
 const user={uid:'student',getIdToken:async()=>{if(mode==='switch-token'){callback({uid:'other'});auth.currentUser={uid:'other'};}return 'synthetic-token';}};
 const auth={currentUser:user,onAuthStateChanged(fn){callback=fn;fn(user);}};
 const db={collection:()=>({doc:()=>({})}),runTransaction:async fn=>{transactions++;await fn({get:async()=>({exists:true,data:()=>({quiz_finished_at:1000})}),set:()=>{writes++;}});}};
 const window={SKILLUP_FIREBASE_CONFIG:{apiKey:'test',authDomain:'test',projectId:'demo-test'},firebase:{apps:[],initializeApp:()=>({}),auth:()=>auth,firestore:()=>db}};
 const context={window,sessionStorage:{removeItem(){}},fetch:async(url,options)=>{requests.push({url,options});if(mode==='switch-fetch'){auth.currentUser={uid:'other'};callback(auth.currentUser);}return {ok:mode==='success'||mode==='switch-fetch',json:async()=>({error:{status:mode==='conflict'?'ALREADY_EXISTS':'UNAVAILABLE'}})};}};
 vm.createContext(context);vm.runInContext(source,context);
 const save=()=>window.SkillUpAuth.saveProgress({subject:'Zoology',topic:'zoo-test',score:2,percentage:66.7},{owner:'student',finishedAt:2000});
 await save();assert.equal(transactions,0);assert.match(requests[0].url,/currentDocument\.exists=false$/);assert.equal(JSON.parse(requests[0].options.body).fields.user_id.stringValue,'student');
 mode='conflict';await save();assert.equal(transactions,1);assert.equal(writes,1);
 mode='unavailable';await assert.rejects(save(),/creation failed/);assert.equal(transactions,1);
 mode='switch-token';await assert.rejects(save(),/Account changed/);assert.equal(requests.length,3);
 auth.currentUser=user;callback(user);mode='switch-fetch';await assert.rejects(save(),/Account changed/);assert.equal(transactions,1);
});

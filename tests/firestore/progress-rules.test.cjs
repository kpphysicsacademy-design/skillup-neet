const { initializeTestEnvironment, assertSucceeds, assertFails } = require('@firebase/rules-unit-testing');
const { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where, runTransaction } = require('firebase/firestore');
const { before, after, beforeEach, test } = require('node:test');
const fs = require('node:fs');

let env;
const row = {
  user_id: 'student',
  subject: 'Zoology',
  topic: 'zoo-Ecology%20and%20Environment--Biodiversity',
  concept: 'Biodiversity',
  concept_id: 'zoo-Ecology%20and%20Environment--Biodiversity',
  completed: true,
  score: 24,
  total_questions: 30,
  percentage: 80,
  xp: 240,
  updated_at: '2026-11-25T00:00:00.000Z'
};

before(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-skillup-progress-validation',
    firestore: { rules: fs.readFileSync('firestore.rules', 'utf8') }
  });
});
after(async () => { if (env) await env.cleanup(); });
beforeEach(async () => { await env.clearFirestore(); });

const db = (uid = 'student') => env.authenticatedContext(uid).firestore();
const ref = (database = db(), id = 'student_Zoology_zoo-Ecology_20and_20Environment--Biodiversity') =>
  doc(database, 'skillup_progress', id);
const seed = async (extra = {}) => env.withSecurityRulesDisabled(async context =>
  setDoc(ref(context.firestore()), { ...row, ...extra })
);

test('owner can create and read own progress', async () => {
  await assertSucceeds(setDoc(ref(), row));
  await assertSucceeds(getDoc(ref()));
});
test('owner can update progress without changing account ownership', async () => {
  await seed();
  await assertSucceeds(updateDoc(ref(), { score: 27, percentage: 90 }));
});
test('owner can list progress only through a user_id-scoped query', async () => {
  await seed();
  const ownQuery = query(collection(db(), 'skillup_progress'), where('user_id', '==', 'student'));
  const result = await assertSucceeds(getDocs(ownQuery));
  if (result.size !== 1) throw new Error('Expected one own progress record');
  await assertFails(getDocs(collection(db(), 'skillup_progress')));
});
test('another account cannot read, list, update or delete this progress', async () => {
  await seed();
  const other = db('other');
  await assertFails(getDoc(ref(other)));
  await assertFails(getDocs(query(collection(other, 'skillup_progress'), where('user_id', '==', 'student'))));
  await assertFails(updateDoc(ref(other), { score: 0 }));
  await assertFails(deleteDoc(ref(other)));
});
test('a user cannot create progress under another account ID', async () => {
  const otherOwned = { ...row, user_id: 'other' };
  await assertFails(setDoc(ref(), otherOwned));
});
test('a user cannot transfer an existing progress record to another account', async () => {
  await seed();
  await assertFails(updateDoc(ref(), { user_id: 'other' }));
});
test('anonymous users cannot create or read progress', async () => {
  const anonymous = env.unauthenticatedContext().firestore();
  await assertFails(setDoc(ref(anonymous), row));
  await seed();
  await assertFails(getDoc(ref(anonymous)));
});

 test('owner scoped query excludes another student and preserves legacy fields', async () => {
  await seed({legacy_marker: 'preserve'});
  await env.withSecurityRulesDisabled(async ctx => setDoc(ref(ctx.firestore(), 'other_record'), {...row, user_id:'other'}));
  const own = await assertSucceeds(getDocs(query(collection(db(), 'skillup_progress'), where('user_id','==','student'))));
  if (own.size !== 1 || own.docs[0].data().legacy_marker !== 'preserve') throw new Error('Owner isolation or legacy preservation failed');
  await assertSucceeds(updateDoc(ref(), {score:25}));
  const saved = await assertSucceeds(getDoc(ref()));
  if (saved.data().legacy_marker !== 'preserve') throw new Error('Legacy field lost');
  await assertFails(getDoc(ref(db('other'))));
});

const assert = require('node:assert/strict');
async function guardedSave(database, finishedAt, score) {
  const target = ref(database);
  return runTransaction(database, async tx => {
    const snap = await tx.get(target);
    if (Number(snap.exists() ? snap.data().quiz_finished_at || 0 : 0) >= finishedAt) return;
    tx.set(target, {...row, score, xp: score * 10, quiz_finished_at: finishedAt}, {merge:true});
  });
}
test('ZOO-006 baseline: first guarded transaction is denied under current rules', async () => {
  const error = await assertFails(guardedSave(db(), 1000, 24));
  assert.equal(error.code, 'permission-denied');
  const own = await getDocs(query(collection(db(), 'skillup_progress'), where('user_id','==','student')));
  assert.equal(own.size, 0);
});
test('existing owner guarded concurrent recovery retains newest result and legacy fields', async () => {
  await seed({quiz_finished_at: 1000, legacy_marker:'preserve'});
  await Promise.all([guardedSave(db(), 3000, 27), guardedSave(db(), 2000, 25)]);
  await guardedSave(db(), 3000, 1);
  const saved = (await getDoc(ref())).data();
  assert.equal(saved.quiz_finished_at, 3000);
  assert.equal(saved.score, 27);
  assert.equal(saved.xp, 270);
  assert.equal(saved.legacy_marker, 'preserve');
  await assertFails(guardedSave(db('other'), 4000, 30));
});

test('ZOO-006 emulator-only candidate: owner first save, concurrent ordering and foreign denial', async () => {
  const baseline=fs.readFileSync('firestore.rules','utf8');
  const anchor="allow get: if ownExisting() || (signedIn() &&";
  assert.equal(baseline.split(anchor).length,2);
  const candidate=baseline.replace(anchor,"allow get: if ownExisting() || (signedIn() && docId.split('_Zoology_').size() == 2 && docId.split('_Zoology_')[0] == request.auth.uid && docId.split('_Zoology_')[1].matches('zoo-[A-Za-z0-9_-]+') && !exists(/databases/$(database)/documents/skillup_progress/$(docId))) || (signedIn() &&");
  const isolated=await initializeTestEnvironment({projectId:'demo-skillup-zoo-capa',firestore:{rules:candidate}});
  try {
    await isolated.clearFirestore();
    const owner=isolated.authenticatedContext('student').firestore();
    const other=isolated.authenticatedContext('other').firestore();
    const anonymous=isolated.unauthenticatedContext().firestore();
    await assertFails(getDoc(ref(other)));
    await assertFails(getDoc(ref(anonymous)));
    await assertSucceeds(guardedSave(owner,1000,24));
    await Promise.all([guardedSave(owner,3000,27),guardedSave(owner,2000,25)]);
    const saved=(await getDoc(ref(owner))).data();
    assert.equal(saved.quiz_finished_at,3000);
    assert.equal(saved.score,27);
    await assertFails(getDoc(ref(other)));
    await assertFails(guardedSave(other,4000,30));
    await assertFails(getDoc(ref(owner,'student_Zoology_invalid')));
  } finally {await isolated.cleanup();}
});

test('ZOO-006 unchanged rules: REST create-only precondition prevents overwriting concurrent first save', async () => {
  const host=process.env.FIRESTORE_EMULATOR_HOST;
  assert.ok(host,'emulator host required');
  assert.match(host,/^(localhost|127\.0\.0\.1|\[::1\]):\d+$/);
  const project='demo-skillup-progress-validation';
  const id=ref().id;
  const url='http://'+host+'/v1/projects/'+project+'/databases/(default)/documents/skillup_progress/'+id+'?currentDocument.exists=false';
  function token(uid){
    const enc=x=>Buffer.from(JSON.stringify(x)).toString('base64url');
    const now=Math.floor(Date.now()/1000);
    return enc({alg:'none',typ:'JWT'})+'.'+enc({sub:uid,user_id:uid,aud:project,iss:'https://securetoken.google.com/'+project,iat:now,exp:now+3600,firebase:{sign_in_provider:'custom'}})+'.';
  }
  async function create(uid,finishedAt,score){
    const fields=Object.fromEntries(Object.entries({...row,score,xp:score*10,quiz_finished_at:finishedAt}).map(([k,v])=>[k,typeof v==='number'?{integerValue:String(v)}:typeof v==='boolean'?{booleanValue:v}:{stringValue:v}]));
    return fetch(url,{method:'PATCH',headers:{Authorization:'Bearer '+token(uid),'Content-Type':'application/json'},body:JSON.stringify({fields})});
  }
  const foreign=await create('other',4000,30);
  assert.equal(foreign.status,403);
  const responses=await Promise.all([create('student',1000,24),create('student',3000,27)]);
  assert.equal(responses.filter(r=>r.ok).length,1);
  const rejected=responses.find(r=>!r.ok);
  assert.ok([400,403,409,412].includes(rejected.status),'unexpected conflict status '+rejected.status);
  await guardedSave(db(),3000,27);
  await guardedSave(db(),1000,24);
  const saved=(await getDoc(ref())).data();
  assert.equal(saved.quiz_finished_at,3000);
  assert.equal(saved.score,27);
  assert.equal(saved.user_id,'student');
  await assertFails(getDoc(ref(db('other'))));
});

test('ZOO-006 actual client with unchanged emulator rules: concurrent create, retry, legacy and session isolation',async()=>{
 const host=process.env.FIRESTORE_EMULATOR_HOST;
 assert.match(host,/^(localhost|127\.0\.0\.1|\[::1\]):\d+$/);
 const project='demo-skillup-progress-validation';
 const vm=require('node:vm');
 function fixture(uid){
  const database=db(uid);
  let listener;
  const user={uid,async getIdToken(){
   const enc=x=>Buffer.from(JSON.stringify(x)).toString('base64url');
   const now=Math.floor(Date.now()/1000);
   return enc({alg:'none',typ:'JWT'})+'.'+enc({sub:uid,user_id:uid,aud:project,iss:'https://securetoken.google.com/'+project,iat:now,exp:now+3600,firebase:{sign_in_provider:'custom'}})+'.';
  }};
  const auth={currentUser:user,onAuthStateChanged(fn){listener=fn;fn(user);}};
  const compat={collection:name=>({doc:id=>doc(database,name,id)}),runTransaction:fn=>runTransaction(database,tx=>fn({get:async target=>{const snap=await tx.get(target);return {exists:snap.exists(),data:()=>snap.data()};},set:(...args)=>tx.set(...args)}))};
  let switchAfter=false;
  const window={SKILLUP_FIREBASE_CONFIG:{apiKey:'test',authDomain:'test',projectId:project},firebase:{apps:[],initializeApp:()=>({}),auth:()=>auth,firestore:()=>compat}};
  vm.runInNewContext(fs.readFileSync('central-auth.js','utf8'),{window,sessionStorage:{removeItem(){}},fetch:async(url,options)=>{
   assert.ok(url.startsWith('https://firestore.googleapis.com/v1/projects/'+project+'/'));
   const response=await fetch(url.replace('https://firestore.googleapis.com','http://'+host),options);
   if(switchAfter){auth.currentUser=null;listener(null);}
   return response;
  }});
  return {save:(time,score)=>window.SkillUpAuth.saveProgress({...row,score,xp:score*10},{owner:uid,finishedAt:time}),switchAfter(){switchAfter=true;},restore(){switchAfter=false;auth.currentUser=user;listener(user);}};
 }
 const a=fixture('student'),b=fixture('student');
 await Promise.all([a.save(1000,24),b.save(3000,27)]);
 await updateDoc(ref(),{legacy_marker:'preserve'});
 await a.save(2000,25);
 await a.save(3000,1);
 a.switchAfter();await assert.rejects(a.save(4000,28),/Account changed/);
 a.restore();await a.save(4000,28);
 const saved=(await getDoc(ref())).data();
 assert.equal(saved.quiz_finished_at,4000);assert.equal(saved.score,28);assert.equal(saved.legacy_marker,'preserve');assert.equal(saved.user_id,'student');
 await assertFails(getDoc(ref(db('other'))));
});

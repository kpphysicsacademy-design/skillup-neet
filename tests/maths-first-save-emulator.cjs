const fs=require('node:fs');
const assert=require('node:assert/strict');
const {initializeTestEnvironment,assertFails,assertSucceeds}=require('@firebase/rules-unit-testing');
const {doc,getDoc,setDoc,runTransaction}=require('firebase/firestore');
(async()=>{
 const env=await initializeTestEnvironment({projectId:'demo-skillup-maths',firestore:{rules:fs.readFileSync('firestore.rules','utf8')}});
 try{
 const a=env.authenticatedContext('student-a').firestore();
 const b=env.authenticatedContext('student-b').firestore();
 const path='skillup_progress/student-a_Mathematics_graph-linear-equation';
 const ref=doc(a,path);
 await assertFails(runTransaction(a,async tx=>{await tx.get(ref);tx.set(ref,{user_id:'student-a'});}));
 await assertSucceeds(setDoc(ref,{user_id:'student-a',subject:'Mathematics',topic:'graph-linear-equation',xp:0},{merge:true}));
 await assertSucceeds(runTransaction(a,async tx=>{const snap=await tx.get(ref);assert.equal(snap.data().xp,0);tx.set(ref,{xp:10},{merge:true});}));
 await assertFails(getDoc(doc(b,path)));
 await assertFails(setDoc(doc(b,path),{user_id:'student-b',xp:99},{merge:true}));
 await Promise.all(Array.from({length:8},()=>setDoc(ref,{user_id:'student-a'},{merge:true})));
 assert.equal((await getDoc(ref)).data().xp,10);
 const fresh=doc(a,'skillup_progress/student-a_Mathematics_concurrent');
 await Promise.all(Array.from({length:8},()=>setDoc(fresh,{user_id:'student-a'},{merge:true})));
 await Promise.all([1,2,3].map(finishedAt=>runTransaction(a,async tx=>{
 const prior=(await tx.get(fresh)).data();
 if((prior.quiz_finished_at||0)>=finishedAt)return;
 tx.set(fresh,{quiz_finished_at:finishedAt,xp:finishedAt*10},{merge:true});
 })));
 assert.equal((await getDoc(fresh)).data().xp,30);
 console.log('PASS first-save denial reproduction and owner isolation');
 }finally{await env.cleanup();}
})().catch(e=>{console.error(e);process.exitCode=1;});

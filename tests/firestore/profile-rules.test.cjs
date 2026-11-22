const { initializeTestEnvironment, assertSucceeds, assertFails } = require('@firebase/rules-unit-testing');
const { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');
const { before, after, beforeEach, test } = require('node:test');
const fs = require('node:fs');
let env;
const row = {name:'Test Student',email:'student@example.test',class_level:'Class 12',college:'Test School',target:'NEET',id:'student',user_id:'student',updated_at:'2026-11-22T00:00:00.000Z'};
before(async()=>{env=await initializeTestEnvironment({projectId:'demo-skillup-validation',firestore:{rules:fs.readFileSync('firestore.rules','utf8')}})});
after(async()=>{if(env)await env.cleanup()});
beforeEach(async()=>{await env.clearFirestore()});
const db=()=>env.authenticatedContext('student',{email:row.email}).firestore();
const ref=(d=db(),id='student')=>doc(d,'skillup_profiles',id);
const seed=async(extra={})=>env.withSecurityRulesDisabled(async ctx=>setDoc(ref(ctx.firestore()),{...row,...extra}));
test('valid registration',()=>assertSucceeds(setDoc(ref(),row)));
test('owner read',async()=>{await seed();await assertSucceeds(getDoc(ref()))});
test('owner edit',async()=>{await seed();await assertSucceeds(updateDoc(ref(),{name:'Updated'}))});
for(const [field,value] of Object.entries({role:'admin',isAdmin:true,subscriptionStatus:'paid',id:'other',user_id:'other',email:'other@example.test',name:'',college:'',class_level:'invalid',target:'invalid',updated_at:123})){
 test('reject create '+field,()=>assertFails(setDoc(ref(),{...row,[field]:value})));
 test('reject update '+field,async()=>{await seed();await assertFails(updateDoc(ref(),{[field]:value}))});
}
test('other account cannot read or write',async()=>{await seed();const other=env.authenticatedContext('other',{email:'other@example.test'}).firestore();await assertFails(getDoc(ref(other)));await assertFails(updateDoc(ref(other),{name:'Intruder'}))});
test('anonymous cannot create',()=>assertFails(setDoc(ref(env.unauthenticatedContext().firestore()),row)));
test('list forbidden',()=>assertFails(getDocs(collection(db(),'skillup_profiles'))));
test('owner delete',async()=>{await seed();await assertSucceeds(deleteDoc(ref()))});
test('legacy extra field survives ordinary edit',async()=>{await seed({legacy:true});await assertSucceeds(updateDoc(ref(),{name:'Updated'}))});
test('legacy field cannot be modified',async()=>{await seed({legacy:true});await assertFails(updateDoc(ref(),{legacy:false}))});
test('legacy field cannot be removed',async()=>{await seed({legacy:true});await assertFails(setDoc(ref(),row))});
test('email change permits syncing to authenticated email',async()=>{await seed();const changed=env.authenticatedContext('student',{email:'new@example.test'}).firestore();await assertSucceeds(updateDoc(ref(changed),{email:'new@example.test'}))});
test('email change cannot be set to unrelated email',async()=>{await seed();const changed=env.authenticatedContext('student',{email:'new@example.test'}).firestore();await assertFails(updateDoc(ref(changed),{email:'unrelated@example.test'}))});

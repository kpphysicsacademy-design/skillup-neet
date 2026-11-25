const test=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
test('session follows current Firebase user after initialization, logout and account switch',async()=>{
 let notify;
 const auth={currentUser:null,onAuthStateChanged(fn){notify=fn;return ()=>{};},async signOut(){this.currentUser=null;}};
 const firebase={apps:[{}],app:()=>({}),auth:()=>auth,firestore:()=>({})};
 const window={firebase,SKILLUP_FIREBASE_CONFIG:{apiKey:'test',authDomain:'test',projectId:'test'}};
 vm.runInNewContext(fs.readFileSync('central-auth.js','utf8'),{window,sessionStorage:{removeItem(){}}});
 const pending=window.SkillUpAuth.getSession();
 auth.currentUser={uid:'A'};notify(auth.currentUser);
 assert.equal((await pending).user.uid,'A');
 await window.SkillUpAuth.signOut();
 assert.equal(await window.SkillUpAuth.getSession(),null);
 auth.currentUser={uid:'B'};
 assert.equal((await window.SkillUpAuth.getSession()).user.uid,'B');
});

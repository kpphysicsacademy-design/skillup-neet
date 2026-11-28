const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const paths=['maths-large-numbers-quiz.html','maths-comparing-numbers-quiz.html','maths-solutions-of-equations-class9-quiz.html','maths-graph-linear-equation-class9-quiz.html'];
(async()=>{const browser=await chromium.launch();try{
 for(const path of paths)for(const width of [320,360,390,768,1440]){
 const ctx=await browser.newContext({viewport:{width,height:900}});
 await ctx.route('**/firebasejs/10.12.2/*',async route=>{const name=route.request().url().split('/').pop();await route.fulfill({path:require('node:path').join(process.cwd(),'node_modules/firebase',name),contentType:'application/javascript'});});
 await ctx.route('**/central-config.js',route=>route.fulfill({contentType:'application/javascript',body:"window.SKILLUP_FIREBASE_CONFIG={apiKey:'demo-key',authDomain:'demo-skillup-maths.firebaseapp.com',projectId:'demo-skillup-maths'};firebase.initializeApp(window.SKILLUP_FIREBASE_CONFIG);firebase.auth().useEmulator('http://127.0.0.1:9099');firebase.firestore().useEmulator('127.0.0.1',8080);"}));
 const page=await ctx.newPage();
 await ctx.route('**/maths-auth-test-fixture.html',route=>route.fulfill({contentType:'text/html',body:'<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script><script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script><script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script><script src="central-config.js"></script><script src="central-auth.js"></script>'}));
 await page.goto('http://127.0.0.1:8765/maths-auth-test-fixture.html');
 await page.waitForFunction(()=>window.SkillUpAuth?.auth);
 // Comparing Numbers retains its existing login gate; seed auth on same origin then reload.
 await page.evaluate(async email=>{await SkillUpAuth.auth.createUserWithEmailAndPassword(email,'SyntheticPass123!');},'math-'+width+'-'+paths.indexOf(path)+'@example.test');
 await page.goto('http://127.0.0.1:8765/'+path);
 await page.locator('.option').first().waitFor();
 assert.equal(await page.locator('.option').count(),4);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path+' '+width+' overflow');
 await page.locator('.option').first().click();await page.locator('#check').click();await page.locator('#continue').click();
 if(width===390){
 for(let i=1;i<30;i++){await page.locator('.option').first().click();await page.locator('#check').click();await page.locator('#continue').click();}
 await page.getByText('Progress saved.',{exact:true}).waitFor({timeout:20000});
 const topic=path.replace(/^maths-/,'').replace(/-quiz.html$/,'');
 const read=()=>page.evaluate(async topic=>{const a=SkillUpAuth;return (await a.db.collection('skillup_progress').doc(a.auth.currentUser.uid+'_Mathematics_'+topic).get()).data();},topic);
 const prior=await read();assert.equal(prior.total_questions,30);assert.equal(prior.xp,prior.score*10);
 if(await page.locator('#retryWrong').isVisible()){
 await page.locator('#retryWrong').click();
 for(let i=0;i<30;i++){await page.locator('.option').first().click();await page.locator('#check').click();await page.locator('#continue').click();if(await page.locator('#quiz').isHidden())break;}
 await page.getByText('Practice only — full quiz progress unchanged.',{exact:true}).waitFor();
 assert.deepEqual(await read(),prior);
 }
 }
 console.log('PASS',path,width);
 await ctx.close();
 }
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

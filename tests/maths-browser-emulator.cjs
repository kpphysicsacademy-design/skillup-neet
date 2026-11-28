const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const paths=['maths-large-numbers-quiz.html','maths-comparing-numbers-quiz.html','maths-solutions-of-equations-class9-quiz.html','maths-graph-linear-equation-class9-quiz.html'];
(async()=>{const browser=await chromium.launch();try{
 for(const path of paths)for(const width of [320,360,390,768,1440]){
 const ctx=await browser.newContext({viewport:{width,height:900}});
 await ctx.route('**/firebasejs/10.12.2/*',async route=>{const name=route.request().url().split('/').pop();await route.fulfill({path:require.resolve('firebase/'+name),contentType:'application/javascript'});});
 await ctx.route('**/central-config.js',route=>route.fulfill({contentType:'application/javascript',body:"window.SKILLUP_FIREBASE_CONFIG={apiKey:'demo-key',authDomain:'demo-skillup-maths.firebaseapp.com',projectId:'demo-skillup-maths'};firebase.initializeApp(window.SKILLUP_FIREBASE_CONFIG);firebase.auth().useEmulator('http://127.0.0.1:9099');firebase.firestore().useEmulator('127.0.0.1',8080);"}));
 const page=await ctx.newPage();
 await page.goto('http://127.0.0.1:8765/'+path);
 await page.waitForFunction(()=>window.SkillUpAuth?.auth);
 // Comparing Numbers retains its existing login gate; seed auth on same origin then reload.
 await page.evaluate(async email=>{await SkillUpAuth.auth.createUserWithEmailAndPassword(email,'SyntheticPass123!');},'math-'+width+'-'+paths.indexOf(path)+'@example.test');
 await page.goto('http://127.0.0.1:8765/'+path);
 await page.locator('.option').first().waitFor();
 assert.equal(await page.locator('.option').count(),4);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path+' '+width+' overflow');
 await page.locator('.option').first().click();await page.locator('#check').click();await page.locator('#continue').click();
 console.log('PASS',path,width);
 await ctx.close();
 }
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

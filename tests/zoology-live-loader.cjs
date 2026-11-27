const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch();
 try{
 const allFailures=[];
 for(const width of [320,360,390,768,1440]){
 const page=await browser.newPage({viewport:{width,height:800}});page.setDefaultTimeout(5000);
 await page.route('**/*',async route=>{
 const url=new URL(route.request().url());
 if(url.hostname!=='skillup.test')return route.abort();
 const file=path.resolve('.','.'+url.pathname);
 if(!file.startsWith(process.cwd()+path.sep)||!fs.existsSync(file))return route.fulfill({status:404,body:''});
 if(/central-(auth|config)\.js$/.test(file))return route.fulfill({contentType:'application/javascript',body:''});
 return route.fulfill({path:file});
 });
 await page.goto('https://skillup.test/zoology-home.html');
 const links=page.locator('.concept-card-link');
 await links.first().waitFor();
 for(let i=0;i<30&&await links.count()<282;i++){
 const before=await links.count();
 await links.last().scrollIntoViewIfNeeded();
 await page.waitForFunction(n=>document.querySelectorAll('.concept-card-link').length>n,before,{timeout:5000});
 }
 const urls=await links.evaluateAll(xs=>xs.map(x=>x.href));
 assert.equal(urls.length,282);
 const ids=urls.map(x=>new URL(x).searchParams.get('conceptId'));
 assert.equal(new Set(ids).size,282);
 for(const url of urls){const u=new URL(url);assert.equal(u.pathname,'/zoology-mcq.html');assert(u.searchParams.get('concept'));assert(fs.existsSync('.'+u.pathname));}

 if(width===390){
  const failures=[];
  for(const url of urls){
   try{
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>document.querySelector('#options')?.children.length>=2,{},{timeout:5000});
    assert(await page.locator('#question').innerText());
    assert.equal(await page.locator('#notice').isVisible(),false);
    assert.equal(await page.locator('#learnModeTab').count(),0);
    assert.equal(await page.locator('#simulatorModeTab').count(),0);
    assert.equal(await page.locator('#learnModePanel').count(),0);
    assert(await page.locator('#simulatorModePanel').isVisible());
    await page.locator('#options button').first().click();
    await page.locator('#next').click();
    assert(await page.locator('#explain').isVisible());
    assert.match(await page.locator('#next').innerText(),/Continue|See results/i);
    if(await page.locator('#next').innerText()==='Continue →'){
      await page.locator('#next').click();
      assert.match(await page.locator('#counter').innerText(),/Question 2 of/);
    }
   }catch(e){failures.push(url+' '+e.message);}
  }
  console.log('Destination executions: '+(282-failures.length)+'/282');
  allFailures.push(...failures);
 }
 console.log('PASS viewport '+width+'; 282 destination URLs checked');
 await page.close();
 }
 assert.deepEqual(allFailures,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

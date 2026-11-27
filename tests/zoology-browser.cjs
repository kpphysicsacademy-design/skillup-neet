const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch();
 try{
 for(const width of [320,360,390,768,1440]){
 const page=await browser.newPage({viewport:{width,height:800}});
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
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow '+width);
 const toggle=page.locator('#home-menu-toggle');
 await toggle.focus();await page.keyboard.press('ArrowDown');
 assert.equal(await page.locator(':focus').getAttribute('role'),'menuitem');
 await page.keyboard.press('End');await page.keyboard.press('Escape');
 assert.equal(await page.locator(':focus').getAttribute('id'),'home-menu-toggle');
 await page.locator('#q').fill('Biodiversity');await page.locator('#q').press('Enter');
 assert(await links.count()>=2);
 await page.locator('#q').fill('zzzz-no-match');await page.locator('#q').press('Enter');
 assert.equal(await links.count(),0);
 await page.locator('#q').fill('');await page.locator('#q').press('Enter');
 for(let i=0;i<30&&await links.count()<282;i++){
 const more=page.locator('#loadMore');
 if(await more.isVisible())await more.click();else break;
 }
 const urls=await links.evaluateAll(xs=>xs.map(x=>x.href));
 assert.equal(urls.length,282);
 const ids=urls.map(x=>new URL(x).searchParams.get('conceptId'));
 assert.equal(new Set(ids).size,282);
 for(const url of urls){const u=new URL(url);assert.equal(u.pathname,'/zoology-mcq.html');assert(u.searchParams.get('concept'));assert(fs.existsSync('.'+u.pathname));}
 console.log('PASS viewport '+width+'; 282 destination URLs checked');
 await page.close();
 }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

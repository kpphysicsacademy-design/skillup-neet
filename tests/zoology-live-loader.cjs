const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch();
 try{
 const allFailures=[];
 const sections={"what-is-living":["livingSheet","livingDistinctions","livingRecall","livingPlan"],"taxonomy-and-systematics":["taxonomySheet","taxonomyCompare","taxonomyNames","taxonomyHierarchy","taxonomyRecall","taxonomyPlan"],"biodiversity":["biodiversitySheet","biodiversityPatterns","biodiversityRecall","biodiversityPlan"],"taxonomic-categories":["taxCatOverview","taxCatMeaning","taxCatExamples","taxCatRecall","taxCatPlan"],"binomial-nomenclature":["binomOverview","binomRules","binomExamples","binomAuthor","binomRecall","binomPlan"],"taxonomical-aids":["aidOverview","aidHerbarium","aidGarden","aidMuseum","aidZoo","aidKey","aidLiterature","aidRecall","aidPlan"],"animal-kingdom-basis-of-classification":["akOverview","akOrganisation","akSymmetry","akGerm","akCoelom","akSegmentation","akNotochord","akRecall","akPlan"],"symmetry":["symOverview","symVisual","symExamples","symRecall","symPlan"],"diploblastic-and-triploblastic-organisation":["germOverview","germLayers","germDiploblastic","germTriploblastic","germExamples","germRecall","germPlan"],"coelom-and-body-cavity":["coelomOverview","coelomDiagram","coelomAcoelomate","coelomPseudo","coelomTrue","coelomExamples","coelomRecall","coelomPlan"],"segmentation":["segOverview","segDiagram","segEarthworm","segCompare","segRecall","segPlan"],"notochord":["notoOverview","notoDiagram","notoChordates","notoNonChordates","notoCompare","notoRecall","notoPlan"],"porifera":["porOverview","porCanal","porChoano","porSkeleton","porRepro","porExamples","porRecall","porPlan"],"cnidaria":["cniOverview","cniBody","cniCnidoblast","cniDigestion","cniRepro","cniCoral","cniRecall","cniPlan"],"ctenophora":["cteOverview","cteComb","cteDigestion","cteLight","cteRepro","cteExamples","cteCompare","cteRecall","ctePlan"],"platyhelminthes":["plaOverview","plaBody","plaParasite","plaFlame","plaRepro","plaRegeneration","plaExamples","plaCompare","plaRecall","plaPlan"],"aschelminthes":["ascOverview","ascBody","ascHabitat","ascDigest","ascExcretion","ascSexes","ascExamples","ascCompare","ascRecall","ascPlan"],"annelida":["annOverview","annBody","annLocomotion","annSystems","annExcretion","annRepro","annExamples","annCompare","annRecall","annPlan"],"arthropoda":["artOverview","artBody","artAppendages","artSystems","artExcretion","artGroups","artExamples","artCompare","artRecall","artPlan"],"mollusca":["molOverview","molHabitat","molBody","molMantle","molShell","molRadula","molFunctions","molRepro","molExamples","molCompare"],"echinodermata":["echOverview","echSymmetry","echEndoskeleton","echWater","echDigest","echExcretion","echRepro","echExamples","echCompare","echRecall"],"hemichordata":["hemOverview","hemBody","hemStomochord","hemSystems","hemExcretion","hemRepro","hemExamples","hemCompare","hemRecall"],"chordata":["choOverview","choCharacters","choGeneral","choSubphyla","choVertebrate","choClasses","choFish","choRecall"],"cyclostomata":["cycOverview","cycBody","cycClassify","cycLife","cycExamples","cycCompare","cycRecall"],"chondrichthyes":["chondOverview","chondBody","chondSkeleton","chondResp","chondSystems","chondRepro","chondExamples","chondCompare","chondRecall"],"osteichthyes":["ostOverview","ostBody","ostSkeleton","ostResp","ostSystems","ostRepro","ostExamples","ostCompare","ostRecall"],"amphibia":["ampOverview","ampBody","ampSkin","ampResp","ampSystems","ampRepro","ampExamples","ampCompare","ampRecall"],"reptilia":["repOverview","repBody","repSkin","repResp","repSystems","repRepro","repExamples","repCompare","repRecall"],"aves":["avesOverview","avesBody","avesFlight","avesSystems","avesDigest","avesRepro","avesExamples","avesCompare","avesRecall"],"mammalia":["mamOverview","mamBody","mamSkin","mamSystems","mamDigest","mamRepro","mamExamples","mamCompare","mamRecall"]};
 const slug=v=>v.toLowerCase().replace(/&/g,' and ').replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
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

 const coelom=urls.find(u=>new URL(u).searchParams.get('concept')==='Coelom and Body Cavity');
 assert(coelom);
 await page.goto(coelom);
 await page.waitForFunction(()=>document.querySelector('#options')?.children.length>=2);
 assert.equal(await page.locator('#conceptHeading').innerText(),'Coelom and Body Cavity');
 const layout=await page.evaluate(()=>{
 const learn=document.querySelector('#cheatSheetLink'),quiz=document.querySelector('#simulatorModeTab'),heading=document.querySelector('#conceptHeading'),question=document.querySelector('#question'),options=[...document.querySelectorAll('#options button')];
 const a=learn.getBoundingClientRect(),b=quiz.getBoundingClientRect();
 return {overflow:document.documentElement.scrollWidth>innerWidth+1,aligned:Math.abs(a.top-b.top)<=2&&a.right<=b.left&&Math.abs(a.width-b.width)<=2,targets:a.height>=44&&b.height>=44,headingSize:parseFloat(getComputedStyle(heading).fontSize),questionSize:parseFloat(getComputedStyle(question).fontSize),optionReadable:options.every(o=>parseFloat(getComputedStyle(o).fontSize)>=14&&o.getBoundingClientRect().height>=44&&o.scrollWidth<=o.clientWidth+1),ink:getComputedStyle(question).color,sticky:getComputedStyle(document.querySelector('.top')).position};
 });
 assert.equal(layout.overflow,false,JSON.stringify(layout));
 assert(layout.aligned&&layout.targets&&layout.headingSize>=20&&layout.questionSize>=18&&layout.optionReadable,JSON.stringify(layout));
 assert.equal(layout.ink,'rgb(23, 23, 23)');
 assert.equal(layout.sticky,'sticky');
 console.log('PASS Coelom layout '+width+' '+JSON.stringify(layout));
 const coelom=urls.find(u=>new URL(u).searchParams.get('concept')==='Coelom and Body Cavity');
 assert(coelom);
 await page.goto(coelom);
 await page.waitForFunction(()=>document.querySelector('#options')?.children.length>=2);
 assert.equal(await page.locator('#conceptHeading').innerText(),'Coelom and Body Cavity');
 const layout=await page.evaluate(()=>{
 const learn=document.querySelector('#cheatSheetLink'),quiz=document.querySelector('#simulatorModeTab'),q=document.querySelector('#question'),options=[...document.querySelectorAll('#options button')];
 const a=learn.getBoundingClientRect(),b=quiz.getBoundingClientRect();
 return {overflow:document.documentElement.scrollWidth>innerWidth+1,aligned:Math.abs(a.top-b.top)<=2&&a.right<=b.left+1&&Math.abs(a.width-b.width)<=2,touch:a.height>=44&&b.height>=44&&options.every(o=>o.getBoundingClientRect().height>=44),font:parseFloat(getComputedStyle(q).fontSize),optionFonts:options.map(o=>parseFloat(getComputedStyle(o).fontSize)),contained:options.every(o=>{const r=o.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth+1&&o.scrollWidth<=o.clientWidth+1;}),ink:getComputedStyle(q).color};
 });
 assert.equal(layout.overflow,false,JSON.stringify(layout));
 assert(layout.aligned&&layout.touch&&layout.contained,JSON.stringify(layout));
 assert(layout.font>=18&&layout.optionFonts.every(n=>n>=14),JSON.stringify(layout));
 assert.equal(layout.ink,'rgb(23, 23, 23)');
 console.log('PASS Coelom layout '+width+' '+JSON.stringify(layout));
 if(width===390){
  const failures=[];
  for(const url of urls){
   try{
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>document.querySelector('#options')?.children.length>=2,{},{timeout:5000});
    assert(await page.locator('#question').innerText());
    assert.equal(await page.locator('#notice').isVisible(),false);
    assert.equal(await page.locator('#learnModeTab').isVisible(),false);
    assert.equal(await page.locator('#simulatorModeTab').innerText(),'📝 Quiz');
    const sheet=page.locator('#cheatSheetLink');
    assert.equal(await sheet.innerText(),'📘 Learn');
    const target=new URL(await sheet.getAttribute('href'),url);
    const original=new URL(url);
    assert.equal(target.searchParams.get('conceptId'),original.searchParams.get('conceptId'));
    assert.equal(target.searchParams.get('concept'),original.searchParams.get('concept'));
    assert(await page.locator('#simulatorModePanel').isVisible());
    await page.locator('#options button').first().click();
    await page.locator('#next').click();
    assert(await page.locator('#explain').isVisible());
    await sheet.click();
    await page.waitForURL('**/zoology-topic-cheat-sheet.html?**');
    assert.equal(await page.locator('#topicTitle').innerText(),original.searchParams.get('concept'));
    const back=new URL(await page.locator('#backQuiz').getAttribute('href'),page.url());
    assert.equal(back.searchParams.get('conceptId'),original.searchParams.get('conceptId'));
    const row=JSON.parse(fs.readFileSync('docs/zoology-cheat-sheet-coverage.json','utf8')).find(x=>x.id===original.searchParams.get('conceptId'));
    assert(row);
    if(row.dedicated){const expected=sections[slug(row.concept)];assert(expected);for(const id of expected){const section=page.locator('#'+id);assert(await section.isVisible(),id+' hidden');assert((await section.innerText()).trim().length>20,id+' empty');}}
    if(!row.dedicated){assert.equal(await page.locator('#livingSheet').isVisible(),false);assert(await page.getByText('Dedicated Cheat Sheet is not yet available for this concept.',{exact:false}).isVisible());}
   }catch(e){failures.push(url+' '+e.message);}
  }
  console.log('Destination executions: '+(282-failures.length)+'/282');
  allFailures.push(...failures);
 }
 for(const url of urls.filter(u=>new URL(u).searchParams.get('concept')==='Biodiversity')){
 await page.goto(url);
 const link=page.locator('#cheatSheetLink');
 await link.focus();assert(await link.evaluate(el=>el===document.activeElement));
 await page.keyboard.press('Enter');
 await page.waitForURL('**/zoology-topic-cheat-sheet.html?**');
 assert(await page.locator('#biodiversitySheet').isVisible());
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);
 }
 await page.goto('https://skillup.test/zoology-topic-cheat-sheet.html?concept=Biodiversity');
 assert.equal(await page.locator('#biodiversitySheet').isVisible(),false);
 assert(await page.getByText('Select Biodiversity from its chapter',{exact:false}).isVisible());
 if(width===390){
 const block=route=>route.abort();
 await page.route('**/question-banks/**',block);
 await page.goto(urls[0]);
 await page.locator('#notice').waitFor({state:'visible'});
 assert.equal(await page.locator('#quizLoadingProgress').isVisible(),false);
 assert(await page.locator('#retryLoad').isVisible());
 await page.unroute('**/question-banks/**',block);
 await page.locator('#retryLoad').click();
 await page.waitForFunction(()=>document.querySelector('#options')?.children.length>=2);
 assert.equal(await page.locator('#notice').isVisible(),false);
 }
 console.log('PASS viewport '+width+'; 282 destination URLs checked');
 await page.close();
 }
 assert.deepEqual(allFailures,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

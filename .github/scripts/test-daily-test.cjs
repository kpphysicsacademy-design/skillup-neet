const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');const bank=JSON.parse(fs.readFileSync('data/daily-test-starter.json'));
const requiredBanks={Physics:16,Chemistry:16,Botany:15,Zoology:15,Mathematics:16};
for(const [subject,count] of Object.entries(requiredBanks)){
 assert.ok(Array.isArray(bank.bank[subject]),'Missing question bank: '+subject);
 assert.ok(bank.bank[subject].length>=count,subject+' needs at least '+count+' MCQs');
 for(const [i,row] of bank.bank[subject].entries()){
  assert.ok(Array.isArray(row)&&row.length===5,subject+' MCQ '+(i+1)+' must contain a prompt and four options');
  assert.ok(row.every(value=>typeof value==='string'&&value.trim()),subject+' MCQ '+(i+1)+' contains empty/non-text content');
  assert.equal(new Set(row.slice(1)).size,4,subject+' MCQ '+(i+1)+' has duplicate options');
 }
}
for(const subject of ['Physics','Chemistry','Mathematics']){
 const rows=bank.numerical&&bank.numerical[subject];
 assert.ok(Array.isArray(rows), 'Missing JEE numerical bank: '+subject);
 assert.equal(rows.length,4,subject+' must supply four numerical practice questions for the current 60-question starter test');
 for(const [i,row] of rows.entries()){
  assert.ok(Array.isArray(row)&&row.length===2&&typeof row[0]==='string'&&row[0].trim()&&Number.isFinite(Number(row[1])),subject+' numerical question '+(i+1)+' is invalid');
 }
}
assert.equal(15*4,60,'NEET daily practice must contain 60 questions');
assert.equal((16+4)*3,60,'JEE daily practice must contain 60 questions');
const page=fs.readFileSync('take-a-test.html','utf8');
assert.match(page,/Daily Starter Practice/,'Test Centre must identify this as daily practice');
assert.match(page,/not a full-length official NEET or JEE mock examination/i,'Test Centre must disclose that this is not a full mock');
assert.doesNotMatch(page,/Official mode/,'Starter practice must not claim an official exam mode');const js=fs.readFileSync('assets/daily-test.js','utf8');new vm.Script(js);for(const [exam,subjects,n] of [['NEET',['Physics','Chemistry','Botany','Zoology'],15],['JEE',['Physics','Chemistry','Mathematics'],20]]){let selected=exam,fail=true,fetches=0;const els=new Map();function el(){return {style:{},children:[],append(...a){this.children.push(...a)},replaceChildren(...a){this.children=a},addEventListener(){},setAttribute(){},scrollIntoView(){}}}const get=id=>{if(!els.has(id))els.set(id,el());return els.get(id)};const radios=[{value:exam,addEventListener(){}}];const ctx={document:{getElementById:get,createElement:el,querySelector:s=>s.includes(':checked')?{value:selected}:get(s),querySelectorAll:()=>radios},fetch:async()=>{fetches++;return {ok:!fail,json:async()=>bank}},setInterval:()=>1,clearInterval(){},confirm:()=>true,Date,Math};vm.createContext(ctx);vm.runInContext(js,ctx);const button=get('subjectStarts').children.at(-1);assert.equal(button.textContent,'Start '+exam+' Test');(async()=>{button.onclick();button.onclick();await new Promise(r=>setImmediate(r));assert.equal(fetches,1);assert.equal(button.disabled,false);assert.match(get('error').textContent,/Unable to load/);fail=false;button.onclick();button.onclick();await new Promise(r=>setImmediate(r));assert.equal(fetches,2);assert.equal(get('error').textContent,'');assert.equal(get('examPanel').hidden,false);assert.match(get('position').textContent,/Question 1 of 60/);assert.equal(get('nav').children.length,subjects.length);for(const section of get('nav').children)assert.equal(section.children[1].children.length,n);assert.equal(get('clock').textContent,subjects.length*30+':00');get('submit').onclick();assert.equal(get('results').children[1].textContent,'0 / 240');assert.match(get('results').children[2].textContent,/60 skipped/);get('results').children.at(-1).onclick();get('subjectStarts').children.at(-1).onclick();await new Promise(r=>setImmediate(r));assert.equal(fetches,3);assert.equal(get('results').hidden,true);assert.match(get('position').textContent,/Question 1 of 60/);get('submit').onclick();assert.match(get('results').children[2].textContent,/60 skipped/);console.log(exam+' combined test and retry passed')})().catch(e=>{console.error(e);process.exitCode=1})}
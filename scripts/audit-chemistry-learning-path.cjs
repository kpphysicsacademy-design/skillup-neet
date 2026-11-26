'use strict';
const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=process.cwd();
const read=p=>fs.readFileSync(p,'utf8');
const home=read('chemistry-home.html'),quiz=read('chemistry-mcq.html'),quick=read('chemistry-quicklearn.html');
const sandbox={window:{}};
vm.runInNewContext(read('chemistry-1062-concepts-base.js'),sandbox,{timeout:10000});
const concepts=sandbox.window.SKILLUP_CHEMISTRY_PROGRESSIVE;
assert(Array.isArray(concepts)&&concepts.length===515,'Expected 515 Chemistry concepts');
const slug=v=>String(v).toLowerCase().trim().replace(/&/g,' and ').replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const issues=[];
for(const x of concepts){
 const id=slug(x.id||x.title||x.base);
 if(!fs.existsSync('question-banks/'+id+'-question-bank.js'))issues.push('Missing bank '+id);
}
for(const [name,html] of [['home',home],['quiz',quiz],['quicklearn',quick]]){
 for(const ref of [...html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)].map(m=>m[1])){
  if(/^(?:https?:|\/|mailto:|tel:|data:)/.test(ref)||ref.includes("'+")||ref.includes("+'"))continue;
  if(!fs.existsSync(ref))issues.push(name+' missing local resource '+ref);
 }
}
for(const file of ['chemistry-home.html','chemistry-mcq.html','chemistry-quicklearn.html']){
 const html=read(file);
 for(const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)){
  if(!m[1].trim())continue;
  try{new vm.Script(m[1],{filename:file});}catch(e){issues.push(file+' inline script syntax: '+e.message);}
 }
}
if(!home.includes("function card(x)")||!home.includes("chemistry-mcq.html?concept='+encodeURIComponent(x.c)+'&micro='+encodeURIComponent(x.id)")||!home.includes('href="'+ "'+href+'" +'"')||!home.includes('function more()')||!home.includes('loadMoreBtn'))issues.push('Home learning entry points or progressive loading missing');
if(!quiz.includes("params.get('micro')||")||!quiz.includes("const embedded=rawConcept.match("))issues.push('Quiz parameter parsing or malformed URL recovery broken');
if(!quick.includes("typeof item.answer==='number'"))issues.push('QuickLearn numeric answers unsupported');
if(!home.includes('All 515 concepts stay open'))issues.push('Open learning notice missing');
console.log(JSON.stringify({concepts:concepts.length,issues},null,2));
if(issues.length)process.exitCode=1;

#!/usr/bin/env node
// Read-only inventory: every Chemistry path concept and its quiz bank.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'chemistry-1062-concepts-base.js'),'utf8');
const sandbox={window:{}};vm.runInNewContext(source,sandbox,{timeout:3000,filename:'chemistry-1062-concepts-base.js'});
const items=sandbox.window.SKILLUP_CHEMISTRY_PROGRESSIVE;
if(!Array.isArray(items)||!items.length)throw Error('Chemistry concepts dataset missing');
const slug=v=>String(v).toLowerCase().trim().replace(/&/g,' and ').replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const rows=items.map((x,i)=>{
 const concept=x.title||x.base||'',micro=x.id||'';
 const candidates=[slug(micro),slug(concept)].filter(Boolean).map(k=>'question-banks/'+k+'-question-bank.js');
 const found=candidates.find(f=>fs.existsSync(path.join(root,f)))||'';
 return {index:i+1,unit:x.u,id:micro,concept,quiz:'chemistry-mcq.html?'+new URLSearchParams({concept,micro}).toString(),bank:found||'MISSING',candidates};
});
const missing=rows.filter(x=>x.bank==='MISSING');
const duplicateIds=rows.filter((x,i)=>rows.findIndex(y=>y.id===x.id)!==i);
const missingMetadata=rows.filter(x=>!x.id||!x.concept||!Number.isInteger(x.unit));
const summary={total:rows.length,units:new Set(rows.map(x=>x.unit)).size,bankFilesFound:rows.length-missing.length,missingBanks:missing.length,duplicateIds:duplicateIds.length,missingMetadata:missingMetadata.length};
fs.mkdirSync(path.join(root,'audit-results'),{recursive:true});
fs.writeFileSync(path.join(root,'audit-results/chemistry-concept-coverage.json'),JSON.stringify({summary,rows},null,2)+'\n');
fs.writeFileSync(path.join(root,'audit-results/chemistry-concept-coverage.md'),['# Chemistry concept / quiz bank audit','',...Object.entries(summary).map(([k,v])=>'- '+k+': '+v),'','## Missing banks','',...missing.map(x=>'- Unit '+x.unit+' · '+x.id+' · '+x.concept)].join('\n')+'\n');
console.log(JSON.stringify(summary,null,2));
if(missing.length)console.log('Missing question-bank files (first 15):',missing.slice(0,15).map(x=>x.id).join(', '));
if(duplicateIds.length||missingMetadata.length)process.exitCode=1;

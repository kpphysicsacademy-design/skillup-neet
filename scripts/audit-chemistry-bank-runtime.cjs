#!/usr/bin/env node
// Execute every Chemistry bank in isolation and verify that its answers can be rendered.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'chemistry-1062-concepts-base.js'),'utf8'),sandbox,{timeout:3000});
const concepts=sandbox.window.SKILLUP_CHEMISTRY_PROGRESSIVE;
const slug=v=>String(v).toLowerCase().trim().replace(/&/g,' and ').replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const rows=[];
for(const concept of concepts){
 const keys=[slug(concept.id),slug(concept.title||concept.base||'')];
 const file=keys.map(k=>'question-banks/'+k+'-question-bank.js').find(f=>fs.existsSync(path.join(root,f)));
 if(!file){rows.push({id:concept.id,file:null,status:'missing'});continue;}
 const w={};
 const ctx={window:w,console:{log(){},warn(){},error(){}}};
 let error='';
 try{vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),ctx,{timeout:3000,filename:file});}catch(e){error='script: '+e.message;}
 const registered=w.SKILLUP_CHEMISTRY_BANK||{};
 const named=Object.entries(w).filter(([k,v])=>/^skillup.*questions$/i.test(k)&&Array.isArray(v));
 const candidates=[...keys.map(k=>registered[k]),...named.map(([,v])=>v)].filter(v=>Array.isArray(v)&&v.length);
 const bank=candidates[0];
 if(!error&&!bank)error='no compatible registered or named bank';
 if(!error)for(let i=0;i<bank.length;i++){
  const x=bank[i]; 
  if(!x||typeof x!=='object'){error='missing or invalid entry at index '+i;break;} 
  const options=Array.isArray(x.options)?x.options:(Array.isArray(x.o)?x.o:null);
  const answer=Array.isArray(x.options)?options.findIndex(o=>(typeof o==='object'?(o.id||o.value):o)===x.answer):(typeof x.a==='number'?x.a:options?.indexOf(x.a));
  const question=x.question||x.q;
  if(!question||!options||options.length<2||!options.every(o=>o!=null&&typeof (typeof o==='object'?(o.text||o.label||o.value):o)==='string')||!Number.isInteger(answer)||answer<0||answer>=options.length){error='invalid question/answer at index '+i;break;}
 }
 rows.push({id:concept.id,file,status:error?'invalid':'valid',questions:bank?.length||0,error});
}
const summary={total:rows.length,valid:rows.filter(x=>x.status==='valid').length,invalid:rows.filter(x=>x.status==='invalid').length,missing:rows.filter(x=>x.status==='missing').length};
fs.mkdirSync(path.join(root,'audit-results'),{recursive:true});
fs.writeFileSync(path.join(root,'audit-results/chemistry-bank-runtime.json'),JSON.stringify({summary,rows},null,2)+'\n');
console.log(JSON.stringify(summary,null,2));
console.log('Issues:',rows.filter(x=>x.status!=='valid').slice(0,30));
if(summary.missing||summary.invalid)process.exitCode=1;

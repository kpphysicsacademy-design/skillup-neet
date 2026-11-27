const fs=require('node:fs'),vm=require('node:vm');
const quiz=fs.readFileSync('botany-mcq.html','utf8');
const focused=fs.readFileSync('botany-63-focused-question-banks.js','utf8');
const names=new Set([...quiz.matchAll(/window\.(skillUp\w+Questions)/g),...focused.matchAll(/window\.(skillUp\w+Questions)/g)].map(m=>m[1]));
const window={},errors=[],report=[];
for(const file of fs.readdirSync('question-banks').filter(f=>f.endsWith('.js'))){
 const source=fs.readFileSync('question-banks/'+file,'utf8');
 if(![...names].some(n=>source.includes(n)))continue;
 try{vm.runInNewContext(source,{window},{timeout:1000});}catch(e){errors.push({file,error:e.message});}
}
try{vm.runInNewContext(focused,{window},{timeout:1000});}catch(e){errors.push({file:'focused',error:e.message});}
for(const name of names){const bank=window[name];if(!Array.isArray(bank)){report.push({name,status:'unresolved in standalone audit'});continue;}
 const counts=[0,0,0,0],invalid=[],duplicates=[],stems=new Set(),repeated=[];
 bank.forEach((q,i)=>{if(!q||!Array.isArray(q.o)||q.o.length!==4||!Number.isInteger(q.a)||q.a<0||q.a>3){invalid.push(i+1);return;}counts[q.a]++;if(new Set(q.o.map(o=>String(o).normalize('NFC').trim())).size!==4)duplicates.push(i+1);const stem=String(q.q).normalize('NFC').trim();if(stems.has(stem))repeated.push(i+1);stems.add(stem);});
 report.push({name,total:bank.length,counts,invalid,duplicates,repeated,concentrated:bank.length>0&&Math.max(...counts)/bank.length>=0.8});
}
console.log(JSON.stringify({errors,report},null,2));

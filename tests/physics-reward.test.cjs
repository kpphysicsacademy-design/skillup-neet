const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');const html=fs.readFileSync(require('node:path').join(__dirname,'../physics-physical-quantities-practice.html'),'utf8');test('completed terminal index restores while incomplete terminal index is rejected',()=>{const start=html.indexOf('const validState='),end=html.indexOf('function snapshot',start);const valid=vm.runInNewContext(html.slice(start,end)+';validState',{bank:[1,2]});const row={v:2,updatedAt:1,questionIds:[1,2],index:2,score:2,streak:2,wrong:[],locked:false,completed:true};assert.equal(valid(row),true);assert.equal(valid({...row,completed:false}),false);});

test('reward writer serializes duplicates and excludes review and changed owner',async()=>{const {record}=require('../physics-rewards.js');const m=new Map(),storage={getItem:k=>m.get(k),setItem:(k,v)=>m.set(k,v)};let tail=Promise.resolve(),owner='A';const locks={request(k,fn){const p=tail.then(fn);tail=p.catch(()=>{});return p;}};const event={owner:'A',subject:'physics',topic:'physical_quantities_practice',attemptId:'x',score:2};assert.deepEqual(await Promise.all([record(storage,event,()=>owner,locks),record(storage,event,()=>owner,locks)]),[true,false]);assert.equal(await record(storage,{...event,review:true},()=>owner,locks),false);owner='B';await assert.rejects(record(storage,event,()=>owner,locks));assert.equal(m.size,1);});

test('IndexedDB fallback retries failed write and rejects switched account',async()=>{
 const source=fs.readFileSync(require('node:path').join(__dirname,'../physics-rewards.js'),'utf8');
 const context={module:{exports:{}},indexedDB:require('fake-indexeddb').indexedDB};
 vm.runInNewContext(source,context);
 const {record}=context.module.exports,m=new Map();let owner='A',fail=true;
 const storage={getItem:k=>m.get(k),setItem(k,v){if(fail)throw Error('quota');m.set(k,v);}};
 const event={owner:'A',subject:'physics',topic:'physical_quantities_practice',attemptId:'retry-1',score:3};
 await assert.rejects(record(storage,event,()=>owner,null),/quota/);assert.equal(m.size,0);
 fail=false;owner='B';await assert.rejects(record(storage,event,()=>owner,null),/Invalid reward/);
 owner='A';const results=await Promise.all([record(storage,event,()=>owner,null),record(storage,event,()=>owner,null)]);
 assert.equal(results.filter(Boolean).length,1);assert.equal(m.size,1);
 let calls=0;await assert.rejects(record(storage,{...event,attemptId:'switch'},()=>++calls===1?'A':'B',null),/Account changed/);
 assert.equal(m.size,1);
});
test('all three pages write independent completion keys without replacing historical object',async()=>{
 const m=new Map(),key='skillup-physics-physical-quantities-pages-v1:A';m.set(key,'{"learn":true}');
 const localStorage={setItem:(k,v)=>m.set(k,v)};
 await Promise.all([['learn','learn'],['simulator','sim'],['practice','practice']].map(async ([page,kind])=>{
 const src=fs.readFileSync(require('node:path').join(__dirname,'../physics-physical-quantities-'+page+'.html'),'utf8');
 const statement="localStorage.setItem(key+':"+kind+"','1')";
 assert.ok(src.includes(statement));vm.runInNewContext(statement,{localStorage,key});
 }));
 assert.equal(m.get(key),'{"learn":true}');for(const kind of ['learn','sim','practice'])assert.equal(m.get(key+':'+kind),'1');
 assert.equal(m.get('skillup-physics-physical-quantities-pages-v1:B:practice'),undefined);
});

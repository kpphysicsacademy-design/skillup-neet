const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const home=fs.readFileSync('botany-home.html','utf8');
const sheet=fs.readFileSync('botany-cell-cheat-sheet.html','utf8');
test('curriculum identifiers are unique',()=>{const units=JSON.parse(home.match(/const units\\s*=\\s*(\\[[\\s\\S]*?\\]);\\s*const slug/)[1]);const slug=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const ids=units.flatMap(u=>u[1].map(t=>slug(u[0])+'--'+slug(t[0])));assert.equal(ids.length,new Set(ids).size);});
test('unsupported sheet requests retain quiz fallback',()=>assert.ok(sheet.includes("if(index<0&&requested){location.replace('botany-mcq.html?concept='+encodeURIComponent(requested))")));
test('search and resume guards remain present',()=>{assert.ok(home.includes("params.delete('q')"));assert.ok(home.includes('matches.length===1'));assert.ok(home.includes('studyRoutes.has(title)'));});

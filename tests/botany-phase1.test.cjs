const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const home=fs.readFileSync('botany-home.html','utf8');
const sheet=fs.readFileSync('botany-cell-cheat-sheet.html','utf8');
test('curriculum identifiers are unique',()=>{const match=home.match(/const units\s*=\s*(\[[\s\S]*?\]);\s*const slug/);assert.ok(match,'Curriculum declaration missing');const units=JSON.parse(match[1]);const slug=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const ids=units.flatMap(u=>u[1].map(t=>slug(u[0])+'--'+slug(t[0])));assert.equal(ids.length,476);assert.equal(ids.length,new Set(ids).size);});
test('unsupported sheet requests retain quiz fallback',()=>assert.ok(sheet.includes("if(index<0&&requested){location.replace('botany-mcq.html?concept='+encodeURIComponent(requested))")));
test('search and resume guards remain present',()=>{assert.ok(home.includes("params.delete('q')"));assert.ok(home.includes('matches.length===1'));assert.ok(home.includes('studyRoutes.has(title)'));});

test('focused question bank script executes and tuple adapter preserves schema',()=>{const vm=require('node:vm');const window={};vm.runInNewContext(fs.readFileSync('botany-63-focused-question-banks.js','utf8'),{window});const bank=window.skillUpFocusedPhenotypicRatioQuestions;assert.ok(Array.isArray(bank)&&bank.length>0);for(const q of bank){assert.equal(typeof q.q,'string');assert.equal(q.o.length,4);assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<4);assert.equal(typeof q.e,'string');}});

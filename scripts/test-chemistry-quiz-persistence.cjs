#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync('chemistry-mcq.html','utf8');
const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
assert(scripts.length,'Missing inline quiz script');scripts.forEach(s=>new vm.Script(s));
const src=scripts.find(s=>s.includes('function saveProgress()'));
assert(src,'Persistence code missing');
const a=src.indexOf('function saveProgress()'),b=src.indexOf('function esc(v)',a);
assert(a>=0&&b>a,'Cannot isolate progress helpers');
const helpers=src.slice(a,b);
const store=new Map(),localStorage={setItem:(k,v)=>store.set(k,v),getItem:k=>store.get(k)||null};
const state=()=>({localStorage,progressKey:'chem-test',BANK_VERSION:'v1',questions:[{q:'Q1',o:['A','B']},{q:'Q2',o:['C','D']}],index:0,score:0,streak:0,chosen:null,locked:false,wrongAttempts:[],document:null,$:id=>({set textContent(v){}})});
function context(s){const ctx=vm.createContext(s);vm.runInContext(helpers,ctx);return ctx;}
let first=context(state());first.index=1;first.score=1;first.streak=1;first.chosen=0;first.locked=true;first.saveProgress();
let reload=context(state());reload.restoreProgress();assert.equal(reload.index,1);assert.equal(reload.score,1);assert.equal(reload.streak,1);assert.equal(reload.chosen,0);assert.equal(reload.locked,true);
let again=context(state());again.restoreProgress();assert.equal(again.index,1,'Repeated refresh must not skip question');assert.equal(again.score,1,'Repeated refresh must not award XP twice');
let wrongVersion=context({...state(),BANK_VERSION:'v2'});wrongVersion.restoreProgress();assert.equal(wrongVersion.index,0,'Bank changes invalidate saved attempt');
let changedBank=context({...state(),questions:[{q:'Changed',o:['A','B']},{q:'Q2',o:['C','D']}]});changedBank.restoreProgress();assert.equal(changedBank.score,0,'Question changes invalidate saved attempt');
let completed=context(state());completed.index=2;completed.score=2;completed.chosen=null;completed.locked=false;completed.saveProgress();let completedReload=context(state());completedReload.restoreProgress();assert.equal(completedReload.index,2,'Completed quiz should remain complete');
let blocked=context({...state(),localStorage:{getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}}});assert.doesNotThrow(()=>blocked.saveProgress());assert.doesNotThrow(()=>blocked.restoreProgress());
assert(html.includes('if(wasLocked){chosen=savedChosen;locked=true;showCheckedAnswer();}'),'Checked answer must be restored');
assert(html.includes('saveProgress();if(index<questions.length)'),'Continuing must persist next question');
console.log('PASS: JS syntax, reload, repeated reload, XP, streak, completed, changed bank, storage blocked, checked answer wiring');

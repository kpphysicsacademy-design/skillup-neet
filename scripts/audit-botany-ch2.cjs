#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'botany-topic-cheat-sheet.html'),'utf8');
const quiz=fs.readFileSync(path.join(root,'botany-mcq.html'),'utf8');
const aliases={'dicot-root-t-s':'dicot-root-ts','monocot-root-t-s':'monocot-root-ts','dicot-stem-t-s':'dicot-stem-ts','monocot-stem-t-s':'monocot-stem-ts'};
const home=fs.readFileSync(path.join(root,'botany-home.html'),'utf8');
const errors=[];
// Regression guard: explained extension questions must be playable and completion persisted.
if(!quiz.includes('const original=source.slice();'))errors.push('Quiz truncates extension questions');
if(!quiz.includes('saveChapter2Progress();'))errors.push('Chapter 2 completion not persisted');
if(!home.includes('botanyChapter2Progress'))errors.push('Learning path missing Chapter 2 progress indicator');
for(const [file,content] of [['botany-mcq.html',quiz],['botany-home.html',home]]){
 for(const match of content.matchAll(/<script(?:\\s[^>]*)?>([\\s\\S]*?)<\\/script>/g)){
  if(!match[1].trim())continue;
  try{new vm.Script(match[1],{filename:file});}catch(error){errors.push('Inline script syntax '+file+': '+error.message);}
 }
}

let questions=0,diagrams=0;
for(let i=0;i<62;i++){
 const start=html.indexOf('<section id="structureSheet'+i+'" hidden>');
 const end=html.indexOf('</section>',start);
 if(start<0||end<0){errors.push('Missing section '+i);continue;}
 const section=html.slice(start,end+10);
 const heading=section.match(/<h2>[^<]*?([A-Za-z][^<]*)<\/h2>/);
 if(!heading){errors.push('Missing topic heading '+i);continue;}
 const name=heading[1].trim();
 let slug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
 slug=aliases[slug]||slug;
 const normalized=name.toLowerCase().replace(/[^a-z0-9]/g,'');
 const route="==='"+normalized+"'";
 if(!html.includes(route)){errors.push('Missing topic routing: '+name);}
 if(!section.includes('id="structureQuiz'+i+'"'))errors.push('Missing quiz link: '+name);
 if(!section.includes('botany-mcq.html?concept='+encodeURIComponent(name)))errors.push('Wrong quiz link: '+name);
 if(!quiz.includes("'"+name.toLowerCase()+"':window."))errors.push('Missing quiz bank mapping: '+name);
 const checks=(section.match(/<details><summary>/g)||[]).length;
 if(checks<3)errors.push('Fewer than 3 Quick Checks: '+name);
 const images=[...section.matchAll(/<img[^>]+src="(assets\/[^"]+\.svg)"/g)];
 // Older topics may use externally hosted reference images or no diagram yet.\n // Record self-hosted diagram coverage without failing unrelated quiz integrity checks.
 for(const img of images){const p=path.join(root,img[1]);if(!fs.existsSync(p))errors.push('Missing diagram file '+img[1]);else diagrams++;}
 const file=path.join(root,'question-banks',slug+'-question-bank.js');
 if(!fs.existsSync(file)){errors.push('Missing question bank '+slug);continue;}
 const context={window:{}};try{vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{timeout:2000});}catch(e){errors.push('Bank JS error '+slug+': '+e.message);continue;}
 const entries=Object.values(context.window).find(Array.isArray);
 if(!entries||entries.length<3){errors.push('Empty bank '+slug);continue;}
 questions+=entries.length;
 entries.forEach((q,j)=>{
  if(typeof q.q!=='string'||!q.q.trim()||!Array.isArray(q.o)||q.o.length!==4||!Number.isInteger(q.a)||q.a<0||q.a>=q.o.length||typeof q.e!=='string'||!q.e.trim())errors.push('Malformed MCQ '+slug+' #'+(j+1));
 });
}
console.log('Chapter 2 audit: 62 topics, '+diagrams+' self-hosted diagrams, '+questions+' MCQs; '+errors.length+' errors');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}

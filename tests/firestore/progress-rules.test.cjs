const { initializeTestEnvironment, assertSucceeds, assertFails } = require('@firebase/rules-unit-testing');
const { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, where } = require('firebase/firestore');
const { before, after, beforeEach, test } = require('node:test');
const fs = require('node:fs');

let env;
const row = {
  user_id: 'student',
  subject: 'Zoology',
  topic: 'zoo-Ecology_20and_20Environment--Biodiversity',
  concept: 'Biodiversity',
  concept_id: 'zoo-Ecology%20and%20Environment--Biodiversity',
  completed: true,
  score: 24,
  total_questions: 30,
  percentage: 80,
  xp: 240,
  updated_at: '2026-11-25T00:00:00.000Z'
};

before(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-skillup-validation',
    firestore: { rules: fs.readFileSync('firestore.rules', 'utf8') }
  });
});
after(async () => { if (env) await env.cleanup(); });
beforeEach(async () => { await env.clearFirestore(); });

const db = (uid = 'student') => env.authenticatedContext(uid).firestore();
const ref = (database = db(), id = 'student_Zoology_zoo-Ecology_20and_20Environment--Biodiversity') =>
  doc(database, 'skillup_progress', id);
const seed = async (extra = {}) => env.withSecurityRulesDisabled(async context =>
  setDoc(ref(context.firestore()), { ...row, ...extra })
);

test('owner can create and read own progress', async () => {
  await assertSucceeds(setDoc(ref(), row));
  await assertSucceeds(getDoc(ref()));
});
test('owner can update progress without changing account ownership', async () => {
  await seed();
  await assertSucceeds(updateDoc(ref(), { score: 27, percentage: 90 }));
});
test('owner can list progress only through a user_id-scoped query', async () => {
  await seed();
  const ownQuery = query(collection(db(), 'skillup_progress'), where('user_id', '==', 'student'));
  const result = await assertSucceeds(getDocs(ownQuery));
  if (result.size !== 1) throw new Error('Expected one own progress record');
  await assertFails(getDocs(collection(db(), 'skillup_progress')));
});
test('another account cannot read, list, update or delete this progress', async () => {
  await seed();
  const other = db('other');
  await assertFails(getDoc(ref(other)));
  await assertFails(getDocs(query(collection(other, 'skillup_progress'), where('user_id', '==', 'student'))));
  await assertFails(updateDoc(ref(other), { score: 0 }));
  await assertFails(deleteDoc(ref(other)));
});
test('a user cannot create progress under another account ID', async () => {
  const otherOwned = { ...row, user_id: 'other' };
  await assertFails(setDoc(ref(), otherOwned));
});
test('a user cannot transfer an existing progress record to another account', async () => {
  await seed();
  await assertFails(updateDoc(ref(), { user_id: 'other' }));
});
test('anonymous users cannot create or read progress', async () => {
  const anonymous = env.unauthenticatedContext().firestore();
  await assertFails(setDoc(ref(anonymous), row));
  await seed();
  await assertFails(getDoc(ref(anonymous)));
});

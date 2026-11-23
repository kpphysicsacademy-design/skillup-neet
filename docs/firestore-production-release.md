# Firestore rules production release runbook (manual only)

Target Firebase project: `kp-physics-academy`. Source: `firestore.rules` on `main`.

**No production deployment is configured in GitHub Actions.** Do not add Firebase credentials to the repository or to issue comments.

## Preconditions
1. Confirm the latest `Validate Firestore profile rules` GitHub Actions workflow is green for the exact `main` commit to release.
2. Use a trusted administrator machine with Node.js, Java 21, Firebase CLI, and authorized Firebase project access.
3. Check existing profile document shapes and the sign-in/profile-update flow against the new schema. Existing documents with missing required fields may still fail updates; email changes require an explicit profile email sync to the new authenticated email.
4. Confirm the production rules are not concurrently being edited. Plan a maintenance/rollback window.

## Backup production rules (before any deployment)
```bash
firebase login
firebase use kp-physics-academy
firebase firestore:rules:get --project kp-physics-academy > firestore.rules.production.backup
```
**CLI compatibility:** if `firestore:rules:get` is unavailable in the installed CLI version, export/copy the current published rules from Firebase Console → Firestore Database → Rules to a dated local backup, and verify the saved file before continuing. Do not commit this backup without reviewing its contents.

## Compare and test
```bash
git checkout main
git pull --ff-only
git status --short
git diff --no-index firestore.rules.production.backup firestore.rules
npx firebase emulators:exec --only firestore --project demo-skillup-validation "node --test tests/firestore/profile-rules.test.cjs"
```
Review **every** difference, including unrelated collections. A deploy publishes the entire ruleset, not just the profile match block. Stop if the current production rules have changes that are not accounted for in the GitHub version.

## Deploy (manual, separate authorization required)
```bash
firebase deploy --only firestore:rules --project kp-physics-academy
```
This publishes only Firestore rules, not Firestore indexes, Hosting, or GitHub Pages. Verify a fresh account can register, an existing account can update allowed fields, cross-account access is denied, and learning/community workflows still work.

## Rollback
Keep the verified backup file outside the repo. If an unexpected authorization regression occurs, restore the prior rules to the configured rules path on a clean working tree, and manually deploy only Firestore rules again:
```bash
cp firestore.rules.production.backup firestore.rules
firebase deploy --only firestore:rules --project kp-physics-academy
```
After rollback, restore the Git working tree and investigate the regression before another release. Do not roll back automatically without confirming the backup is valid and reflects the previously published production rules.

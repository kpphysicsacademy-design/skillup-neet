/* SkillUp Eye Shield disabled site-wide.
   Kept as a compatibility no-op so any older page reference cannot override its design. */
(() => {
  const old = document.getElementById('skillup-eye-shield-style');
  if (old) old.remove();
})();

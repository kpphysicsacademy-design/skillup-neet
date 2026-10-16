(() => {
  // Keep the PWA and same-site WebView link support, but do not render a navigation bar.
  if (!document.querySelector('link[rel="manifest"]')) {
    const pwaManifest = document.createElement('link');
    pwaManifest.rel = 'manifest';
    pwaManifest.href = '/manifest.webmanifest';
    document.head.appendChild(pwaManifest);
  }

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).catch(error => {
      console.warn('SkillUp offline support could not be registered', error);
    });
  }

  const legacyBars = [
    '.skillup-bottom-nav',
    '.skillup-universal-nav',
    '.neet-nav',
    '.bottom-nav',
    '.bottom-navigation',
    '.mobile-bottom-nav',
    '.fixed-bottom-nav',
    '.app-bottom-nav',
    '[data-skillup-bottom-nav]',
    '#bottomNav',
    '#bottom-nav',
    '#bottom-navigation',
    'nav[aria-label="SkillUp main navigation"]'
  ].join(',');

  document.querySelectorAll(legacyBars).forEach(element => element.remove());

  const oldStyle = document.getElementById('skillup-bottom-nav-style');
  if (oldStyle) oldStyle.remove();

  // Also remove fixed bottom navigation elements that used a custom class or inline style.
  document.querySelectorAll('nav, [role="navigation"]').forEach(element => {
    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    if (style.position === 'fixed' && (style.bottom === '0px' || style.bottom === '0') && rect.height >= 40) {
      element.remove();
    }
  });


  // Chemistry-matched visual system for Maths quiz pages.
  // Keep this scoped to quiz routes so the rest of SkillUp retains its own design.
  if (/^\\/maths-.*quiz.*\\.html$/i.test(window.location.pathname)) {
    const theme = document.createElement('style');
    theme.id = 'skillup-chemistry-quiz-theme';
    theme.textContent = `
      :root{color-scheme:light!important;--bg:#f1f7ff!important;--panel:#fff!important;--panel2:#fff!important;--line:#dbe7f8!important;--ink:#17265e!important;--muted:#60718f!important;--green:#58cc02!important;--green2:#278100!important;--blue:#3478f6!important;--red:#e65369!important;--b:#3478f6!important;--n:#17265e!important;--m:#60718f!important;--l:#dbe7f8!important}
      html{color-scheme:light!important;background:#f1f7ff!important}
      body{background:radial-gradient(ellipse at 5% 4%,rgba(88,204,2,.10),transparent 28%),radial-gradient(ellipse at 95% 10%,rgba(95,93,255,.12),transparent 30%),#f1f7ff!important;color:#17265e!important}
      .wrap{max-width:720px}
      .top{background:rgba(241,247,255,.94)!important;backdrop-filter:blur(10px)}
      .back{color:#3478f6!important}.brand{color:#17265e!important}.brand span{color:#3478f6!important}
      .progress{background:#dce8fa!important}.bar{background:linear-gradient(90deg,#58cc02,#9be85b)!important}
      .xp{background:#e3f8d6!important;color:#278100!important}.heart{background:#ffe8ed!important;color:#d9435a!important}
      .meta,.hint,.small{color:#60718f!important}
      .card,.quiz-card,.question-card,.question-container,.question-panel{background:linear-gradient(160deg,#fff,#fbfdff)!important;color:#17265e!important;border:2px solid #d5e8fa!important;border-radius:24px!important;box-shadow:0 7px 0 #dce9f7,0 14px 28px rgba(52,120,246,.08)!important}
      .eyebrow{color:#278100!important;background:#e3f8d6!important;border-radius:999px;padding:6px 11px}
      h1,h2,h3,.question,.title{color:#17265e!important}
      .options,.choices{gap:11px}
      .option,.choice,.answer,.answer-option,.option-btn{background:#fff!important;color:#243b68!important;border:2px solid #dbe7f8!important;border-bottom:4px solid #c9d9f0!important;border-radius:16px!important;transition:transform .16s,border-color .16s,box-shadow .16s,background .16s!important}
      .option:hover:not(:disabled),.choice:hover:not(:disabled),.answer:hover:not(:disabled),.answer-option:hover:not(:disabled),.option-btn:hover:not(:disabled){border-color:#8ebaff!important;background:#f5f9ff!important;transform:translateY(-2px);box-shadow:0 4px 0 #dce9fa!important}
      .option.selected,.choice.selected,.answer.selected,.answer-option.selected{border-color:#3478f6!important;background:#eaf2ff!important}
      .option.correct,.choice.correct,.answer.correct,.answer-option.correct,.correct{border-color:#58cc02!important;background:#e9fbdc!important;color:#245c0c!important}
      .option.wrong,.choice.wrong,.answer.wrong,.answer-option.wrong,.wrong{border-color:#f07c8c!important;background:#fff0f2!important;color:#9f2437!important}
      .feedback{border-radius:14px!important;animation:skillup-quiz-feedback .22s ease-out}
      .feedback.good,.feedback.correct,.feedback.success,.correct-feedback{background:#e3f8d6!important;color:#286f00!important;border:1px solid #c5eca8!important}
      .feedback.bad,.feedback.wrong,.feedback.error,.wrong-feedback{background:#fff0f2!important;color:#9f2437!important;border:1px solid #f5c5cd!important}
      button.primary,.primary,.primary-btn,.next-btn,#next,.check-answer,button[type=submit]{background:#58cc02!important;color:#244b14!important;border-color:#46a302!important;border-bottom-color:#46a302!important;border-radius:15px!important;transition:transform .15s,filter .15s!important}
      button.primary:hover:not(:disabled),.primary:hover:not(:disabled),.next-btn:hover:not(:disabled),#next:hover:not(:disabled){filter:brightness(1.03);transform:translateY(-1px)}
      button.primary:disabled,.primary:disabled,.next-btn:disabled,#next:disabled{background:#b7dca0!important;color:#fff!important;opacity:.8}
      .bigscore{color:#3478f6!important}.reward{background:#e3f8d6!important;color:#278100!important}
      .tile{background:linear-gradient(120deg,#f0ffe8,#edf6ff)!important;border:1px solid #dbe7f8!important;border-radius:18px!important;color:#17265e!important}
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #8ebaff!important;outline-offset:3px}
      @keyframes skillup-quiz-feedback{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
    `;
    document.head.appendChild(theme);
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = '#f1f7ff';
    // Remove legacy Eye Shield overlays from quiz pages without affecting other site pages.
    document.querySelectorAll('[id*="eye-shield" i],[class*="eye-shield" i],[aria-label*="eye shield" i]').forEach(el => el.remove());
  }

  // Android WebView compatibility: preserve same-site target=_blank navigation.
  document.addEventListener('click', event => {
    const link = event.target && event.target.closest ? event.target.closest('a[target="_blank"]') : null;
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.hasAttribute('download')) return;
    try {
      const destination = new URL(link.href, location.href);
      if (destination.origin !== location.origin) return;
      event.preventDefault();
      location.href = destination.href;
    } catch (error) {
      // Leave malformed or unsupported URLs to the browser's default handling.
    }
  }, false);
})();

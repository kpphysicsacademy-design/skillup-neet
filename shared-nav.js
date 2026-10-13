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

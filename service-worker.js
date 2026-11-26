/* SkillUp offline-first service worker.
 * Caches same-origin learning pages and static resources after successful visits.
 * Firebase and all cross-origin requests remain network-only; user progress/API data
 * is never added to Cache Storage.
 */
const CACHE_NAME = 'skillup-offline-v14-zoology-cheatsheet-quiz-buttons';
const PRECACHE_URLS = [
  '/index.html',
  '/learn.html',
  '/ai-quiz.html',
  '/physics-home.html',
  '/physics-home-fast.html',
  '/chemistry-home.html',
  '/botany-home.html',
  '/zoology-home.html',
  '/zoology-mcq.html',
  '/zoology-quicklearn.html',
  '/zoology-topic-cheat-sheet.html',
  '/zoology-chapter-test.html',
  '/maths-home.html',
  '/profile.html',
  '/community.html',
  '/share.html',
  '/progress.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/skillup-logo.svg',
  '/icons/skillup-pwa-192.svg',
  '/icons/skillup-pwa-512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith('skillup-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function cachePage(request, url, response) {
  if (!response || !response.ok || response.type !== 'basic') return;
  const pageKey = new Request(url.origin + url.pathname, { method: 'GET' });
  const copy = response.clone();
  return caches.open(CACHE_NAME).then(cache => cache.put(pageKey, copy)).catch(() => {});
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok && response.type === 'basic') {
          event.waitUntil(cachePage(request, url, response));
        }
        return response;
      } catch (error) {
        const pageKey = new Request(url.origin + url.pathname, { method: 'GET' });
        const savedPage = await cache.match(pageKey);
        if (savedPage) return savedPage;
        const fallback = await cache.match('/offline.html');
        return fallback || Response.error();
      }
    })());
    return;
  }

  // Only cache same-origin static files. Do not cache API-like routes or user data.
  if (!/\.(?:css|js|mjs|svg|png|jpe?g|webp|gif|ico|woff2?|json|csv|txt|webmanifest)$/i.test(url.pathname)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const freshTheme = /^\/(?:shared-nav\.js|physics-design-system\.css|physics-duolingo-quiz\.css|physics-physical-quantities-theme\.css)$/.test(url.pathname);
    const networkFetch = fetch(request, freshTheme ? {cache:'no-cache'} : {}).then(response => {
      if (response && response.ok && response.type === 'basic') {
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    });
    if (freshTheme) {
      try { return await networkFetch; } catch (_) { return cached || Response.error(); }
    }
    if (cached) {
      event.waitUntil(networkFetch.catch(() => {}));
      return cached;
    }
    try {
      return await networkFetch;
    } catch (error) {
      return Response.error();
    }
  })());
});

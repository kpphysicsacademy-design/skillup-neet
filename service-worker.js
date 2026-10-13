/* SkillUp offline-first service worker.
 * Caches same-origin learning pages and static resources after successful visits.
 * Firebase and all cross-origin requests remain network-only; user progress/API data
 * is never added to Cache Storage.
 */
const CACHE_NAME = 'skillup-offline-v2';
const PRECACHE_URLS = [
  '/index.html',
  '/learn.html',
  '/ai-quiz.html',
  '/physics-home.html',
  '/physics-home-fast.html',
  '/chemistry-home.html',
  '/botany-home.html',
  '/zoology-home.html',
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
  return caches.open(CACHE_NAME).then(cache => cache.put(pageKey, response.clone())).catch(() => {});
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
          await cachePage(request, url, response);
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
    const networkFetch = fetch(request).then(response => {
      if (response && response.ok && response.type === 'basic') {
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    });
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

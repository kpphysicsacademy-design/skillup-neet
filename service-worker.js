/* SkillUp PWA service worker.
 * Caches static assets only. Never caches HTML navigations, authenticated pages,
 * Firebase/API responses, or user progress data.
 */
const CACHE_NAME = 'skillup-static-v1';
const PRECACHE_URLS = [
  '/icons/skillup-pwa-192.svg',
  '/icons/skillup-pwa-512.svg',
  '/skillup-logo.svg'
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
      .then(keys => Promise.all(keys.filter(key => key.startsWith('skillup-static-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') return; // Never cache page HTML or auth redirects.
  if (!/\.(?:css|js|mjs|svg|png|webp|woff2?)$/i.test(url.pathname)) return;

  event.respondWith(
    fetch(request).then(response => {
      if (response && response.ok && response.type === 'basic') {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
      }
      return response;
    }).catch(() => caches.match(request).then(cached => cached || Response.error()))
  );
});

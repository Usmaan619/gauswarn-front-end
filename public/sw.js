/* ===============================
   Gauswarn PWA Service Worker
   =============================== */

const CACHE_NAME = 'gauswarn-v1';

/**
 * Static files to cache on install
 * (index.html is important for React SPA)
 */
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
];

/* ================= INSTALL ================= */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  // Activate immediately
  self.skipWaiting();
});

/* ================= ACTIVATE ================= */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Take control of all clients
  self.clients.claim();
});

/* ================= FETCH ================= */
self.addEventListener('fetch', (event) => {
  // ❌ Only cache GET requests
  if (event.request.method !== 'GET') return;

  // ❌ Ignore chrome-extension, devtools, adblock, etc.
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // ✅ Serve from cache if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // 🌐 Fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // ✅ Cache only valid same-origin responses
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === 'basic'
            ) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          });
      })
      .catch(() => {
        // 🔌 Offline fallback for React SPA navigation
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      })
  );
});

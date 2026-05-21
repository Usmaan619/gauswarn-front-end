/* ===============================
   Gauswarn PWA Service Worker
   =============================== */

const CACHE_NAME = "gauswarn-v18";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/robots.txt",
  "/security.txt",
];

/* ================= INSTALL ================= */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
  self.skipWaiting();
});

/* ================= ACTIVATE ================= */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        }),
      ),
    ),
  );
  self.clients.claim();
});

/* ================= FETCH ================= */
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 🚫 NEVER handle sitemap, robots, xml, txt files
  if (
    url.pathname.endsWith(".xml") ||
    url.pathname.endsWith(".txt") ||
    url.pathname === "/.well-known/security.txt"
  ) {
    return;
  }

  // ❌ Only GET requests
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith("http")) return;

  // ⭐ NETWORK-FIRST for Navigation (index.html)
  // This ensures that when you upload a new build, the browser gets the fresh index.html
  // and doesn't get stuck with an old cached version pointing to missing JS files.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Cache the fresh index.html
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match("/index.html");
          });
        }),
    );
    return;
  }

  // ⭐ CACHE-FIRST for other assets (images, hashed JS/CSS)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Return a generic response or let it fail naturally
          return new Response("", { status: 404, statusText: "Not Found" });
        });
    }),
  );
});

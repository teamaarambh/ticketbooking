const CACHE = "aarambh-homepage-v1";
const ASSETS = [
  "/homepage/index.html",
  "/homepage/assets/css/folio.css",
  "/homepage/assets/js/folio.js"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE && caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then(r => r || fetch(evt.request))
  );
});

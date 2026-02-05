const CACHE = "cricket-pwa-v1";
const ASSETS = [
  "/cricket-pwa/",
  "/cricket-pwa/index.html",
  "/cricket-pwa/style.css",
  "/cricket-pwa/app.js",
  "/cricket-pwa/pitch-data.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
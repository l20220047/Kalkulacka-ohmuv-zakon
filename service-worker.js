const cacheName = "kalkulackaodporu";
const soubory = [
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "icon-192x192.png",
  "icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(soubory);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
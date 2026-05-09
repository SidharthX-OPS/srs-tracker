const CACHE = "srs-tracker-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // Network-first for Firebase requests, cache-first for everything else
  if(e.request.url.includes("firebase") || e.request.url.includes("googleapis")) {
    return; // let it pass through normally
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if(e.request.method === "GET" && res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});

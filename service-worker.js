self.addEventListener("install", () => {
  console.log("Service worker installed");
  self.skipWaiting(); // Tvinger opdatering igennem uden at låse appen
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim()); // Overtager kontrollen over appen med det samme
});

self.addEventListener("fetch", (event) => {
  // Tillader appen at loade dens filer lokalt uden konflikter
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

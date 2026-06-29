// Created by Mia

//constants
const STATIC_CACHE = "static-v1";
const DATA_CACHE = "data-v1";

const STATIC_ASSETS = [
  "/",
  "/offline.html",//needs to be cached for offline pages next js cant to this.(it creates it own html page for any fallbacks)
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/maskable-512.png"
];//files that need to work offline

// Install events
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );//end the waitUntill block
  self.skipWaiting();
});//ending off the install event

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DATA_CACHE) {
            return caches.delete(key);
          }
        })
      )
    )
  );//ending of cleanup logic
  self.clients.claim();
});//ending off activate event

// Fetch events
self.addEventListener("fetch", (event) => {//runs when app makes a network request
  const url = new URL(event.request.url);

  // Voucher API caching (network-first strategy)
  if (url.pathname.startsWith("/api/vouchers")) {
    event.respondWith(
      caches.open(DATA_CACHE).then(async (cache) => {//opens data cache
        try {
          const response = await fetch(event.request);
          cache.put(event.request, response.clone());
          return response;
        } catch {
          return cache.match(event.request);
        }
      })
    );
    return;//Ends the API caching logic and prevents the static handler from running
  }

  // Static assets Caching (Cache‑First Strategy)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        })
      );
    })
  );
});//ending of the fetch handler

// PUSH NOTIFICATIONS
self.addEventListener("push", (event) => {
 
  const data = event.data
    ? event.data.json()
    : {
        title: "Voucher App",
        body: "New voucher available!",
      };
 
  self.registration.showNotification(
    data.title,
    {
      body: data.body,
      icon: "/icon-192.png",
    }
  );
 
});

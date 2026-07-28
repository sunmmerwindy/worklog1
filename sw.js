const C='worklog-v2';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const rc=r.clone();caches.open(C).then(c=>c.put(e.request,rc));return r}).catch(()=>caches.match(e.request)))});

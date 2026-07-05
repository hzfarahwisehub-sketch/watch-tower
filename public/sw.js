/* Watch Tower · Service Worker (escrito à mão — sem Serwist, por causa do Turbopack)
 *
 * Faz duas coisas:
 *  1) OFFLINE (só-leitura): cacheia o app-shell + estáticos + últimos dados
 *     (bulletins-status.json). Estratégia network-first com fallback pro cache,
 *     pra sempre tentar o dado fresco mas ainda abrir offline.
 *  2) PUSH: recebe notificações (novo Visa Bulletin, cron falhou, lembrete) e
 *     trata o clique abrindo/focando o app.
 *
 * Bump a versão do CACHE pra invalidar caches antigos num deploy.
 */
const CACHE = "watch-tower-v50";
const APP_SHELL = ["/", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png"];

// ---------- install: precache do shell ----------
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()),
  );
});

// ---------- mensagem do app: forçar o SW novo a assumir (botão Atualizar) ----------
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

// ---------- activate: limpa caches antigos ----------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// ---------- fetch: estratégias ----------
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Só GET. Mutações (POST/PATCH/DELETE) e auth NUNCA são cacheadas.
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // ignora cross-origin
  if (url.pathname.startsWith("/api/auth")) return; // nunca toca no fluxo de login

  // Navegação (abrir páginas): network-first SEM cache HTTP (no-store), pra o
  // HTML vir sempre fresco e referenciar os chunks novos a cada deploy. Sem
  // isso, um HTML cacheado prende a versão antiga do app. Fallback pro shell "/".
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request, { cache: "no-store" })
        .then((res) => {
          if (res.ok) caches.open(CACHE).then((c) => c.put(request, res.clone()));
          return res;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match("/"))),
    );
    return;
  }

  // Estáticos do Next (_next/static, imutáveis): cache-first, mas só guarda OK.
  if (url.pathname.startsWith("/_next/static") || url.pathname.startsWith("/icons/")) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((res) => {
        if (res.ok) caches.open(CACHE).then((c) => c.put(request, res.clone()));
        return res;
      })),
    );
    return;
  }

  // Dados (bulletins-status.json e afins): network-first → fallback cache.
  event.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) caches.open(CACHE).then((c) => c.put(request, res.clone()));
        return res;
      })
      .catch(() => caches.match(request)),
  );
});

// ---------- push: exibe notificação ----------
self.addEventListener("push", (event) => {
  let data = { title: "Watch Tower", body: "", url: "/" };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch {
    if (event.data) data.body = event.data.text();
  }
  const options = {
    body: data.body,
    icon: data.icon || "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    tag: data.tag || undefined,
    data: { url: data.url || "/" },
    vibrate: [80, 40, 80],
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

// ---------- clique na notificação: foca/abre o app ----------
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientsArr) => {
      for (const client of clientsArr) {
        if ("focus" in client) {
          client.navigate(target);
          return client.focus();
        }
      }
      return self.clients.openWindow(target);
    }),
  );
});

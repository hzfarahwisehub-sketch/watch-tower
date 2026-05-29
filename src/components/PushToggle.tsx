"use client";
import { useEffect, useState } from "react";
import { useToast } from "./ToastProvider";

/**
 * PushToggle — opt-in de notificações push, pensado pro menu do usuário.
 * Pede permissão, inscreve via PushManager e registra no servidor.
 * No iPhone, push só funciona com o app instalado (standalone) — então
 * mostra a dica de instalar primeiro nesse caso.
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  // Aloca um ArrayBuffer explícito pro TS saber que não é SharedArrayBuffer
  // (applicationServerKey exige BufferSource sobre ArrayBuffer concreto).
  const arr = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

const ROW =
  "w-full text-left px-4 py-2.5 text-[12.5px] hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-wait";

export function PushToggle() {
  const toast = useToast();
  const [supported, setSupported] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [needsInstall, setNeedsInstall] = useState(false);

  useEffect(() => {
    const ok =
      "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
    setSupported(ok);
    if (!ok) return;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as { standalone?: boolean }).standalone === true;
    if (isIOS && !standalone) setNeedsInstall(true);
    navigator.serviceWorker.ready
      .then(async (reg) => setSubscribed(!!(await reg.pushManager.getSubscription())))
      .catch(() => {});
  }, []);

  async function enable() {
    if (busy) return;
    setBusy(true);
    try {
      const key = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!key) { toast("Push não configurado no servidor"); return; }
      const perm = await Notification.requestPermission();
      if (perm !== "granted") { toast("Permissão de notificação negada"); return; }
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(key),
      });
      const json = sub.toJSON();
      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: json.endpoint, keys: json.keys }),
      });
      if (!res.ok) { toast("Falha ao registrar no servidor"); return; }
      setSubscribed(true);
      toast("🔔 Notificações ativadas");
    } catch {
      toast("Erro ao ativar notificações");
    } finally {
      setBusy(false);
    }
  }

  async function disable() {
    if (busy) return;
    setBusy(true);
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch("/api/push/subscribe", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        }).catch(() => {});
        await sub.unsubscribe();
      }
      setSubscribed(false);
      toast("Notificações desativadas");
    } finally {
      setBusy(false);
    }
  }

  async function test() {
    const res = await fetch("/api/push/test", { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.sent > 0) toast("📨 Teste enviado pro seu device");
    else toast("Nenhum device ativo recebeu");
  }

  if (!supported) return null;

  if (needsInstall && !subscribed) {
    return (
      <div className="px-4 py-2.5 text-[11px] leading-snug" style={{ color: "var(--text-3)" }}>
        🔔 No iPhone, instale o app primeiro (Compartilhar → Adicionar à Tela de Início) pra ativar notificações.
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        disabled={busy}
        onClick={subscribed ? disable : enable}
        className={ROW}
        style={{ color: "var(--text-2)" }}
      >
        {subscribed ? "🔕 Desativar notificações" : "🔔 Ativar notificações"}
      </button>
      {subscribed && (
        <button type="button" onClick={test} className={ROW} style={{ color: "var(--text-3)" }}>
          📨 Enviar notificação de teste
        </button>
      )}
    </>
  );
}

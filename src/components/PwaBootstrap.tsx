"use client";
import { useEffect, useRef, useState } from "react";

/**
 * PwaBootstrap — registra o service worker, oferece "Instalar app" e avisa
 * quando há uma NOVA VERSÃO com um botão "Atualizar" (em vez de recarregar
 * sozinho). Assim, quando a gente publica uma mudança interna, o app de cada
 * sócio mostra o aviso e ele atualiza com 1 clique.
 *
 * - Android/Chrome: beforeinstallprompt → pill "Instalar".
 * - iOS (Safari): dica "Compartilhar → Adicionar à Tela de Início".
 * - Standalone (instalado): não mostra o de instalar; o de ATUALIZAR aparece igual.
 * - Checa por versão nova ao abrir, a cada 60s e ao voltar o foco.
 */
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "wt_install_dismissed";

export function PwaBootstrap() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [updateReady, setUpdateReady] = useState(false);
  const regRef = useRef<ServiceWorkerRegistration | null>(null);

  // Registra o service worker + detecta NOVA VERSÃO (mostra o botão Atualizar).
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let interval: ReturnType<typeof setInterval> | null = null;

    const markUpdate = () => setUpdateReady(true);

    const watch = (reg: ServiceWorkerRegistration) => {
      // já tem um SW novo esperando e a página já é controlada = update pronto
      if (reg.waiting && navigator.serviceWorker.controller) markUpdate();
      reg.addEventListener("updatefound", () => {
        const installing = reg.installing;
        if (!installing) return;
        installing.addEventListener("statechange", () => {
          // "installed" com um controller já ativo = é atualização (não 1ª vez)
          if (installing.state === "installed" && navigator.serviceWorker.controller) {
            markUpdate();
          }
        });
      });
    };

    const onLoad = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .then((reg) => {
          regRef.current = reg;
          watch(reg);
          reg.update().catch(() => {});
          interval = setInterval(() => reg.update().catch(() => {}), 60_000);
        })
        .catch(() => {});
    };

    const onVisible = () => {
      if (!document.hidden) regRef.current?.update().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisible);

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", onVisible);
      if (interval) clearInterval(interval);
    };
  }, []);

  function applyUpdate() {
    const reg = regRef.current;
    // se houver um SW novo "esperando", pede pra ele assumir; depois recarrega
    // pra puxar os assets frescos (o SW já roda skipWaiting no install, então
    // normalmente basta recarregar).
    try {
      reg?.waiting?.postMessage({ type: "SKIP_WAITING" });
    } catch {}
    window.location.reload();
  }

  // Detecta instalabilidade.
  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as { standalone?: boolean }).standalone === true;
    if (standalone) return; // já instalado
    if (localStorage.getItem(DISMISS_KEY) === "1") return;

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as { MSStream?: unknown }).MSStream;
    setIsIOS(ios);

    const onBip = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onBip);

    // iOS não dispara beforeinstallprompt — mostra a dica mesmo assim.
    if (ios) setShow(true);

    return () => window.removeEventListener("beforeinstallprompt", onBip);
  }, []);

  function dismiss() {
    setShow(false);
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch {}
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  }

  // Aviso de NOVA VERSÃO (tem prioridade sobre o de instalar). Não é dispensável
  // de propósito: é rápido e garante que o sócio pega a atualização.
  if (updateReady) {
    return (
      <div
        className="fixed z-[9999] left-1/2 -translate-x-1/2 bottom-4 w-[min(440px,calc(100vw-24px))] rounded-[14px] p-3.5 flex items-center gap-3 shadow-2xl"
        style={{ background: "var(--surface, #1A1730)", border: "1px solid rgba(31,85,255,.5)" }}
      >
        <div
          className="w-10 h-10 rounded-[9px] shrink-0 flex items-center justify-center text-[20px]"
          style={{ background: "linear-gradient(135deg,#1F55FF,#7BA0FF)" }}
        >
          🔄
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold" style={{ color: "var(--text, #E8E6F4)" }}>
            Nova versão disponível
          </div>
          <div className="text-[11px] leading-snug" style={{ color: "var(--text-dim, #9F9DBE)" }}>
            Atualize pra pegar as últimas melhorias do Watch Tower.
          </div>
        </div>
        <button
          type="button"
          onClick={applyUpdate}
          className="px-3.5 py-1.5 rounded-[10px] text-[12px] font-bold cursor-pointer shrink-0"
          style={{ color: "#fff", background: "linear-gradient(135deg,#1F55FF,#7BA0FF)" }}
        >
          Atualizar
        </button>
      </div>
    );
  }

  if (!show) return null;

  return (
    <div
      className="fixed z-[9999] left-1/2 -translate-x-1/2 bottom-4 w-[min(440px,calc(100vw-24px))] rounded-[14px] p-3.5 flex items-center gap-3 shadow-2xl"
      style={{ background: "var(--surface, #1A1730)", border: "1px solid var(--border, rgba(123,160,255,.3))" }}
    >
      <img src="/icons/icon-192.png" alt="" width={40} height={40} className="rounded-[9px] shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-bold" style={{ color: "var(--text, #E8E6F4)" }}>
          Instalar o Watch Tower
        </div>
        {isIOS ? (
          <div className="text-[11px] leading-snug" style={{ color: "var(--text-dim, #9F9DBE)" }}>
            Toque em <b>Compartilhar</b> e depois <b>Adicionar à Tela de Início</b>.
          </div>
        ) : (
          <div className="text-[11px] leading-snug" style={{ color: "var(--text-dim, #9F9DBE)" }}>
            Acesso rápido na tela inicial, em tela cheia.
          </div>
        )}
      </div>
      {!isIOS && deferred && (
        <button
          type="button"
          onClick={install}
          className="px-3 py-1.5 rounded-[10px] text-[12px] font-semibold cursor-pointer shrink-0"
          style={{ color: "#fff", background: "linear-gradient(135deg,#1F55FF,#7BA0FF)" }}
        >
          Instalar
        </button>
      )}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dispensar"
        className="w-7 h-7 rounded-[8px] flex items-center justify-center cursor-pointer shrink-0"
        style={{ color: "var(--text-dim, #9F9DBE)", background: "transparent" }}
      >
        ✕
      </button>
    </div>
  );
}

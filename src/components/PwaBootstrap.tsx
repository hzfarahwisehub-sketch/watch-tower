"use client";
import { useEffect, useState } from "react";

/**
 * PwaBootstrap — registra o service worker e oferece o "Instalar app".
 *
 * - Android/Chrome: captura o evento beforeinstallprompt e mostra um pill
 *   "Instalar" que dispara o prompt nativo.
 * - iOS (Safari): não tem prompt programático — mostra instrução
 *   "Compartilhar → Adicionar à Tela de Início".
 * - Se já estiver rodando instalado (display-mode: standalone), não mostra nada.
 * - Dispensável; lembra a dispensa via localStorage.
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

  // Registra o service worker.
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).catch(() => {});
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

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

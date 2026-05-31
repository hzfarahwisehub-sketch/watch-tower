"use client";
import { useEffect, useRef, useState } from "react";
import { makeBus, type WinMsg } from "@/lib/window-bus";
import { renderPanel, panelTitle, panelEmoji, isPanelId, type PanelId } from "@/components/PanelRegistry";

/**
 * Janela FILHA: renderiza UM painel (via ?panel=<id>) numa janela própria.
 * Conversa com a principal pelo BroadcastChannel (dock/fechar/geometria/seleção).
 */
export default function JanelaPage() {
  const [id, setId] = useState<string>("");
  const [ready, setReady] = useState(false);
  const busRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("panel") ?? "";
    setId(p);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !id) return;
    const bus = makeBus();
    busRef.current = bus;
    const post = (m: WinMsg) => {
      try {
        bus?.postMessage(m);
      } catch {}
    };

    if (isPanelId(id)) {
      document.title = `${panelEmoji(id)} ${panelTitle(id)} · Watch Tower`;
    }
    post({ type: "hello", id });

    const sendGeom = () =>
      post({ type: "geom", id, x: window.screenX, y: window.screenY, w: window.outerWidth, h: window.outerHeight });
    sendGeom();
    const geomTimer = setInterval(sendGeom, 1500);

    const onUnload = () => {
      sendGeom();
      post({ type: "bye", id });
    };
    window.addEventListener("beforeunload", onUnload);

    if (bus) {
      bus.onmessage = (e: MessageEvent<WinMsg>) => {
        const m = e.data;
        if (m && m.type === "close" && m.id === id) {
          try {
            window.close();
          } catch {}
        }
      };
    }

    return () => {
      clearInterval(geomTimer);
      window.removeEventListener("beforeunload", onUnload);
      try {
        bus?.close();
      } catch {}
      busRef.current = null;
    };
  }, [ready, id]);

  const dock = () => {
    try {
      busRef.current?.postMessage({ type: "dock", id });
    } catch {}
    try {
      window.close();
    } catch {}
  };

  const onSelectCountry = (code: string) => {
    try {
      busRef.current?.postMessage({ type: "select", code });
    } catch {}
  };

  if (!ready) return null;

  const valid = isPanelId(id);

  return (
    <div className="flex flex-col h-screen" style={{ background: "var(--bg)" }}>
      <div
        className="flex items-center justify-between gap-3 px-4 py-2 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border)", background: "rgba(15,12,30,.4)" }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[15px]">{valid ? panelEmoji(id) : "🧩"}</span>
          <h1 className="text-[12px] tracking-[1.5px] uppercase font-bold truncate" style={{ color: "var(--color-wh-blue-light)" }}>
            {valid ? panelTitle(id) : "Painel desconhecido"}
          </h1>
          <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-semibold" style={{ color: "var(--text-3)" }}>
            · janela separada
          </span>
        </div>
        <button
          type="button"
          onClick={dock}
          title="Fecha esta janela e devolve o painel pra janela principal"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[14px] text-[11px] font-bold tracking-wide cursor-pointer transition-all hover:-translate-y-px flex-shrink-0"
          style={{ color: "#fff", background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", border: "1px solid rgba(74,122,255,.5)" }}
        >
          ↩ Inserir na principal
        </button>
      </div>
      <div className="flex-1 min-h-0 overflow-auto p-3">
        {valid ? renderPanel(id as PanelId, onSelectCountry) : (
          <p className="text-[13px] p-4" style={{ color: "var(--text-3)" }}>
            Painel não encontrado. Feche esta janela.
          </p>
        )}
      </div>
    </div>
  );
}

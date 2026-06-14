"use client";
import { useEffect, useRef, useState } from "react";
import { makeBus, HOST_TIMEOUT_MS, upsertOpenWindow, removeOpenWindow, type WinMsg } from "@/lib/window-bus";
import { renderPanel, panelEmoji, panelTitleKey, isPanelId, type PanelId } from "@/components/PanelRegistry";
import { useLocale } from "@/components/LocaleProvider";

/**
 * Janela FILHA: renderiza UM painel (via ?panel=<id>) numa janela própria.
 * Conversa com a principal pelo BroadcastChannel.
 *  - Ao abrir, se a URL trouxer x/y/w/h, a janela se move/redimensiona pra
 *    posição salva (inclusive em outro monitor, quando a permissão de
 *    gerenciamento de janelas já foi concedida na principal).
 *  - Lease: se a principal sumir sem avisar (crash) por mais de HOST_TIMEOUT_MS,
 *    a janela se fecha sozinha. O fechamento normal é imediato, via `close-all`.
 */
export default function JanelaPage() {
  const { t } = useLocale();
  const [id, setId] = useState<string>("");
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [dbg, setDbg] = useState("");
  const busRef = useRef<BroadcastChannel | null>(null);
  const lastHostSeenRef = useRef<number>(0);
  const closingByHostRef = useRef(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setId(sp.get("panel") ?? "");

    // Reposiciona na geometria salva (move primeiro, depois redimensiona).
    const num = (k: string) => {
      const v = Number(sp.get(k));
      return Number.isFinite(v) ? v : null;
    };
    const x = num("x");
    const y = num("y");
    const w = num("w");
    const h = num("h");
    const place = () => {
      try {
        if (x != null && y != null) window.moveTo(Math.round(x), Math.round(y));
        if (w != null && h != null) window.resizeTo(Math.round(w), Math.round(h));
      } catch {}
    };
    // Ativa o modo multi-monitor NESTE contexto (a permissão já foi concedida na
    // principal), depois reposiciona. Sem ativar aqui, alguns navegadores prendem
    // o moveTo na tela atual mesmo com a permissão dada.
    const wmApi = window as unknown as { getScreenDetails?: () => Promise<unknown> };
    if (typeof wmApi.getScreenDetails === "function") {
      wmApi.getScreenDetails().then(place).catch(() => {});
    }
    place();
    // de novo no próximo frame e em alguns instantes, porque a janela recém
    // aberta costuma ignorar o move/resize enquanto ainda está abrindo.
    const raf = requestAnimationFrame(place);
    const t1 = setTimeout(place, 120);
    const t2 = setTimeout(place, 400);
    const t3 = setTimeout(place, 800);
    const t4 = setTimeout(place, 1500);

    // Medidor de diagnóstico: alvo salvo vs posição real desta janela + telas.
    const updDbg = () => {
      const ext = (window.screen as unknown as { isExtended?: boolean }).isExtended === true;
      setDbg(
        t("janela.dbg.line", {
          target: `${x},${y} ${w}x${h}`,
          now: `${window.screenX},${window.screenY} ${window.outerWidth}x${window.outerHeight}`,
          screens: ext ? "2+" : "1",
        }),
      );
    };
    updDbg();
    const dbgT = setInterval(updDbg, 1000);

    setReady(true);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(dbgT);
    };
  }, []);

  useEffect(() => {
    if (!ready || !id) return;
    const bus = makeBus();
    busRef.current = bus;
    lastHostSeenRef.current = Date.now();

    const geom = () => ({ x: window.screenX, y: window.screenY, w: window.outerWidth, h: window.outerHeight });
    const post = (m: WinMsg) => {
      try {
        bus?.postMessage(m);
      } catch {}
    };
    const announce = () => post({ type: "child-hello", id, ...geom() });

    if (isPanelId(id)) {
      document.title = `${panelEmoji(id)} ${t(panelTitleKey(id))} · Watch Tower`;
    }
    announce();
    // Esta janela se registra no layout salvo JÁ ao abrir e mantém a própria
    // posição/tamanho atualizados a cada 2s. Não depende da principal capturar
    // nada (essencial no app instalado / PWA, onde o canal pode falhar).
    upsertOpenWindow({ id, ...geom() });
    const reg = setInterval(() => {
      if (!closingByHostRef.current) upsertOpenWindow({ id, ...geom() });
    }, 2000);

    if (bus) {
      bus.onmessage = (e: MessageEvent<WinMsg>) => {
        const m = e.data;
        if (!m || typeof m !== "object") return;
        if (m.type === "host-alive") {
          lastHostSeenRef.current = Date.now();
          announce();
        } else if (m.type === "selected") {
          setSelected(m.code);
        } else if (m.type === "close" && m.id === id) {
          // Dock individual (voltar pra principal): tira do layout salvo.
          closingByHostRef.current = true;
          removeOpenWindow(id);
          try {
            window.close();
          } catch {}
        } else if (m.type === "close-all") {
          // App fechando: grava a posição FINAL pra reabrir exatamente aqui.
          // Se for dock (trazer todas pra principal), aí sim remove do layout.
          closingByHostRef.current = true;
          if (m.dock) removeOpenWindow(id);
          else upsertOpenWindow({ id, ...geom() });
          try {
            window.close();
          } catch {}
        }
      };
    }

    // Lease de segurança: principal sumiu sem avisar (crash) => fecha.
    const lease = setInterval(() => {
      if (Date.now() - lastHostSeenRef.current > HOST_TIMEOUT_MS) {
        // Principal sumiu (crash/kill): preserva a posição pra reabrir depois.
        closingByHostRef.current = true;
        upsertOpenWindow({ id, ...geom() });
        try {
          window.close();
        } catch {}
      }
    }, 500);

    const onUnload = () => {
      if (closingByHostRef.current) return; // já tratado (close/close-all/lease)
      // X do sistema nesta janela: o usuário fechou ESTA caixa de propósito.
      // Grava a posição (caso recupere) mas marca a intenção via "bye"; o host
      // tira da UI. A própria caixa some do layout pra não reabrir sozinha.
      removeOpenWindow(id);
      post({ type: "bye", id });
    };
    window.addEventListener("beforeunload", onUnload);

    return () => {
      clearInterval(lease);
      clearInterval(reg);
      window.removeEventListener("beforeunload", onUnload);
      try {
        bus?.close();
      } catch {}
      busRef.current = null;
    };
  }, [ready, id]);

  const dock = () => {
    closingByHostRef.current = true;
    removeOpenWindow(id); // o usuário trouxe pra principal: sai do layout
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
            {valid ? t(panelTitleKey(id)) : t("janela.unknownPanel")}
          </h1>
          <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-semibold" style={{ color: "var(--text-3)" }}>
            {t("janela.separateWindow")}
          </span>
        </div>
        <button
          type="button"
          onClick={dock}
          title={t("janela.dock.title")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[14px] text-[11px] font-bold tracking-wide cursor-pointer transition-all hover:-translate-y-px flex-shrink-0"
          style={{ color: "#fff", background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", border: "1px solid rgba(74,122,255,.5)" }}
        >
          {t("janela.dock.label")}
        </button>
      </div>
      <div className="flex-1 min-h-0 overflow-auto p-3">
        {valid ? renderPanel(id as PanelId, onSelectCountry, selected) : (
          <p className="text-[13px] p-4" style={{ color: "var(--text-3)" }}>
            {t("janela.notFound")}
          </p>
        )}
      </div>
      <div
        className="flex-shrink-0 px-3 py-2 font-mono font-bold leading-tight"
        style={{ borderTop: "2px solid #f5a623", color: "#1a1208", background: "#ffd24a" }}
      >
        <div className="text-[10px] uppercase tracking-wide" style={{ color: "#7a5200" }}>
          {t("janela.dbg.prompt")}
        </div>
        <div className="text-[13px] break-all">{dbg}</div>
      </div>
    </div>
  );
}

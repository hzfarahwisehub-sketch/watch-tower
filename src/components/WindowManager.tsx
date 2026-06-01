"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  makeBus,
  loadOpenWindows,
  saveOpenWindows,
  type WinMsg,
  type StoredWin,
} from "@/lib/window-bus";
import { panelTitle, panelEmoji, isPanelId, type PanelId } from "./PanelRegistry";
import { useToast } from "./ToastProvider";

type Geom = { x: number; y: number; w: number; h: number };

type Ctx = {
  isOpen: (id: string) => boolean;
  openIds: string[];
  savedClosed: string[];
  popOut: (id: PanelId) => void;
  dockBack: (id: string) => void;
  dockAll: () => void;
  focusWindow: (id: string) => void;
  restoreSaved: () => void;
};

const WinCtx = createContext<Ctx | null>(null);

export function WindowManagerProvider({
  onSelectCountry,
  selectedCountry = null,
  children,
}: {
  onSelectCountry?: (code: string) => void;
  selectedCountry?: string | null;
  children: ReactNode;
}) {
  const toast = useToast();
  const winRefs = useRef<Map<string, Window>>(new Map());
  const geomRef = useRef<Map<string, Geom>>(new Map());
  const openIdsRef = useRef<string[]>([]);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [savedClosed, setSavedClosed] = useState<string[]>([]);
  const onSelectRef = useRef(onSelectCountry);
  onSelectRef.current = onSelectCountry;
  // País selecionado na principal, espelhado num ref pra responder às filhas
  // recém-abertas (hello) com o estado atual sem recriar o listener.
  const selectedRef = useRef<string | null>(selectedCountry);
  selectedRef.current = selectedCountry;
  const busRef = useRef<BroadcastChannel | null>(null);

  const setOpen = useCallback((updater: (prev: string[]) => string[]) => {
    setOpenIds((prev) => {
      const next = updater(prev);
      openIdsRef.current = next;
      return next;
    });
  }, []);

  const persist = useCallback(() => {
    const list: StoredWin[] = openIdsRef.current.map((id) => {
      const g = geomRef.current.get(id);
      return { id, ...(g ?? {}) };
    });
    saveOpenWindows(list);
  }, []);

  const popOut = useCallback(
    (id: PanelId) => {
      const existing = winRefs.current.get(id);
      if (existing && !existing.closed) {
        existing.focus();
        return;
      }
      const i = openIdsRef.current.length;
      const g = geomRef.current.get(id);
      const w = g?.w ?? 560;
      const h = g?.h ?? 680;
      const x = g?.x ?? 90 + i * 28;
      const y = g?.y ?? 90 + i * 28;
      const features = `popup=yes,width=${w},height=${h},left=${x},top=${y}`;
      const win = window.open(`/janela?panel=${id}`, `wt-win-${id}`, features);
      if (!win) {
        toast("Permita pop-ups deste site pra abrir em janela separada");
        return;
      }
      winRefs.current.set(id, win);
      if (!g) geomRef.current.set(id, { x, y, w, h });
      setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setSavedClosed((prev) => prev.filter((p) => p !== id));
      setTimeout(persist, 0);
    },
    [persist, setOpen, toast],
  );

  const dockBack = useCallback(
    (id: string) => {
      const win = winRefs.current.get(id);
      try {
        win?.close();
      } catch {}
      winRefs.current.delete(id);
      setOpen((prev) => prev.filter((x) => x !== id));
      setTimeout(persist, 0);
    },
    [persist, setOpen],
  );

  const dockAll = useCallback(() => {
    for (const id of [...openIdsRef.current]) dockBack(id);
  }, [dockBack]);

  const focusWindow = useCallback((id: string) => {
    const win = winRefs.current.get(id);
    try {
      win?.focus();
    } catch {}
  }, []);

  const restoreSaved = useCallback(() => {
    const ids = savedClosed.filter((id) => !openIdsRef.current.includes(id));
    for (const id of ids) if (isPanelId(id)) popOut(id);
  }, [savedClosed, popOut]);

  // Mount: carrega janelas salvas (não reabre sozinho — navegador bloqueia) +
  // assina o barramento + fecha as filhas quando a principal fecha.
  useEffect(() => {
    const saved = loadOpenWindows();
    for (const s of saved) {
      if (s.x != null && s.y != null && s.w != null && s.h != null) {
        geomRef.current.set(s.id, { x: s.x, y: s.y, w: s.w, h: s.h });
      }
    }
    setSavedClosed(saved.map((s) => s.id).filter(isPanelId));

    const bus = makeBus();
    busRef.current = bus;
    if (bus) {
      bus.onmessage = (e: MessageEvent<WinMsg>) => {
        const msg = e.data;
        if (!msg || typeof msg !== "object") return;
        if (msg.type === "dock" || msg.type === "bye") {
          winRefs.current.delete(msg.id);
          setOpen((prev) => prev.filter((x) => x !== msg.id));
          setTimeout(persist, 0);
        } else if (msg.type === "geom") {
          geomRef.current.set(msg.id, { x: msg.x, y: msg.y, w: msg.w, h: msg.h });
        } else if (msg.type === "select") {
          onSelectRef.current?.(msg.code);
        } else if (msg.type === "hello") {
          // filha acabou de abrir — manda o país atual pra ela já nascer sincronizada
          try {
            bus.postMessage({ type: "selected", code: selectedRef.current ?? null });
          } catch {}
        }
      };
    }

    // Detecta filhas fechadas pelo X do SO (caso o "bye" não chegue)
    const poll = setInterval(() => {
      let changed = false;
      for (const id of [...openIdsRef.current]) {
        const win = winRefs.current.get(id);
        if (!win || win.closed) {
          winRefs.current.delete(id);
          changed = true;
        }
      }
      if (changed) {
        setOpen((prev) => prev.filter((x) => winRefs.current.has(x)));
        setTimeout(persist, 0);
      }
    }, 2500);

    const onBeforeUnload = () => {
      for (const win of winRefs.current.values()) {
        try {
          win.close();
        } catch {}
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      clearInterval(poll);
      window.removeEventListener("beforeunload", onBeforeUnload);
      try {
        bus?.close();
      } catch {}
      busRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sempre que o país selecionado muda na principal, avisa todas as janelas
  // filhas pra refletirem (globo voa, área do país atualiza). Fecha o ciclo:
  // filha clica → "select" → principal muda estado → "selected" → todas as filhas.
  useEffect(() => {
    try {
      busRef.current?.postMessage({ type: "selected", code: selectedCountry ?? null });
    } catch {}
  }, [selectedCountry]);

  const value: Ctx = {
    isOpen: (id) => openIds.includes(id),
    openIds,
    savedClosed: savedClosed.filter((id) => !openIds.includes(id)),
    popOut,
    dockBack,
    dockAll,
    focusWindow,
    restoreSaved,
  };

  return <WinCtx.Provider value={value}>{children}</WinCtx.Provider>;
}

export function useWindowManager(): Ctx {
  const ctx = useContext(WinCtx);
  if (!ctx) throw new Error("useWindowManager precisa estar dentro de <WindowManagerProvider>");
  return ctx;
}
export function useWindowManagerOptional(): Ctx | null {
  return useContext(WinCtx);
}

/** Menu da faixa do Dashboard pra gerenciar as janelas abertas. */
export function WindowsMenu() {
  const wm = useWindowManagerOptional();
  const [open, setOpen] = useState(false);
  if (!wm) return null;

  const count = wm.openIds.length;
  const canRestore = wm.savedClosed.length > 0;
  if (count === 0 && !canRestore) {
    return null; // nada pra gerenciar ainda
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Gerenciar janelas separadas"
        aria-haspopup="menu"
        aria-expanded={open}
        className="px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-colors"
        style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text-2)", cursor: "pointer" }}
      >
        🪟 Janelas{count > 0 ? ` · ${count}` : ""}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            role="menu"
            className="absolute right-0 top-[40px] z-50 w-[250px] rounded-xl p-1.5 wt-card"
            style={{ border: "1px solid var(--border-hi)", boxShadow: "var(--shadow-bar)", transformOrigin: "top right", animation: "wt-menu-pop .14s ease-out" }}
          >
            {wm.openIds.length > 0 && (
              <>
                <div className="px-2.5 py-1 text-[9.5px] uppercase tracking-[1.5px] font-bold" style={{ color: "var(--text-3)" }}>
                  Abertas em janela
                </div>
                {wm.openIds.map((id) => (
                  <div key={id} className="flex items-center gap-1 px-1.5 py-1 rounded-lg hover:bg-white/5">
                    <button
                      type="button"
                      onClick={() => wm.focusWindow(id)}
                      className="flex-1 flex items-center gap-2 text-left text-[12px] font-semibold truncate"
                      style={{ color: "var(--text-2)", background: "transparent", border: "none", cursor: "pointer" }}
                      title="Focar a janela"
                    >
                      <span>{panelEmoji(id)}</span>
                      <span className="truncate">{panelTitle(id)}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => wm.dockBack(id)}
                      title="Trazer de volta pra principal"
                      className="text-[10px] font-bold px-1.5 py-1 rounded-md flex-shrink-0"
                      style={{ background: "rgba(31,85,255,.15)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)", cursor: "pointer" }}
                    >
                      ↩
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    wm.dockAll();
                    setOpen(false);
                  }}
                  className="w-full mt-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-left hover:bg-white/5"
                  style={{ color: "var(--text-2)", background: "transparent", border: "none", cursor: "pointer" }}
                >
                  ↩ Trazer todas de volta
                </button>
              </>
            )}
            {canRestore && (
              <button
                type="button"
                onClick={() => {
                  wm.restoreSaved();
                  setOpen(false);
                }}
                className="w-full mt-1 px-2.5 py-2 rounded-lg text-[11.5px] font-bold text-left"
                style={{ color: "#fff", background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", border: "1px solid rgba(74,122,255,.5)", cursor: "pointer" }}
                title="Reabre as janelas que estavam abertas, nas posições salvas"
              >
                ↻ Restaurar janelas · {wm.savedClosed.length}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

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
  HEARTBEAT_MS,
  HOST_TIMEOUT_MS,
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

function newHostId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {}
  return `h-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

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
  // Último sinal de vida de cada filha (responde ao pulso). É como a principal
  // sabe quem ainda está aberto sem depender da referência Window (que se perde
  // num reload).
  const lastSeenRef = useRef<Map<string, number>>(new Map());
  const openIdsRef = useRef<string[]>([]);
  const hostIdRef = useRef<string>("");
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [savedClosed, setSavedClosed] = useState<string[]>([]);
  // > 0 quando o app reabriu e há janelas salvas pra restaurar (espera 1 gesto).
  const [pendingRestore, setPendingRestore] = useState(0);
  const onSelectRef = useRef(onSelectCountry);
  onSelectRef.current = onSelectCountry;
  // País selecionado na principal, espelhado num ref pra responder às filhas
  // recém-abertas com o estado atual sem recriar o listener.
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

  const post = useCallback((m: WinMsg) => {
    try {
      busRef.current?.postMessage(m);
    } catch {}
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
      lastSeenRef.current.set(id, Date.now());
      if (!g) geomRef.current.set(id, { x, y, w, h });
      setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setSavedClosed((prev) => prev.filter((p) => p !== id));
      setTimeout(persist, 0);
    },
    [persist, setOpen, toast],
  );

  const forget = useCallback(
    (id: string) => {
      winRefs.current.delete(id);
      lastSeenRef.current.delete(id);
      setOpen((prev) => prev.filter((x) => x !== id));
      setTimeout(persist, 0);
    },
    [persist, setOpen],
  );

  const dockBack = useCallback(
    (id: string) => {
      // Pede pra filha fechar pelo canal (funciona mesmo sem a referência, ex:
      // após um reload da principal) e fecha pela referência se ainda tivermos.
      post({ type: "close", id });
      const win = winRefs.current.get(id);
      try {
        win?.close();
      } catch {}
      forget(id);
    },
    [forget, post],
  );

  const dockAll = useCallback(() => {
    post({ type: "close-all" });
    for (const id of [...openIdsRef.current]) {
      const win = winRefs.current.get(id);
      try {
        win?.close();
      } catch {}
    }
    winRefs.current.clear();
    lastSeenRef.current.clear();
    setOpen(() => []);
    setTimeout(persist, 0);
  }, [persist, post, setOpen]);

  const focusWindow = useCallback((id: string) => {
    const win = winRefs.current.get(id);
    try {
      win?.focus();
    } catch {}
  }, []);

  // Reabre as janelas salvas (lendo o layout do localStorage) que ainda não
  // estão abertas, cada uma na posição salva. Usado pelo menu e pelo "restaurar
  // no primeiro gesto".
  const doRestore = useCallback(() => {
    const saved = loadOpenWindows();
    for (const s of saved) {
      if (isPanelId(s.id) && !openIdsRef.current.includes(s.id)) popOut(s.id);
    }
    setPendingRestore(0);
  }, [popOut]);
  const doRestoreRef = useRef(doRestore);
  doRestoreRef.current = doRestore;

  const restoreSaved = useCallback(() => {
    doRestoreRef.current();
  }, []);

  // Mount: carrega o layout salvo, sobe o barramento e o heartbeat, reconecta
  // filhas vivas (sem duplicar), e arma a restauração no primeiro gesto quando
  // o app reabre.
  useEffect(() => {
    hostIdRef.current = newHostId();

    const saved = loadOpenWindows();
    for (const s of saved) {
      if (s.x != null && s.y != null && s.w != null && s.h != null) {
        geomRef.current.set(s.id, { x: s.x, y: s.y, w: s.w, h: s.h });
      }
    }
    setSavedClosed(saved.map((s) => s.id).filter(isPanelId));

    const bus = makeBus();
    busRef.current = bus;

    const beat = () => {
      try {
        bus?.postMessage({ type: "host-alive", host: hostIdRef.current, ts: Date.now() });
      } catch {}
    };

    if (bus) {
      bus.onmessage = (e: MessageEvent<WinMsg>) => {
        const msg = e.data;
        if (!msg || typeof msg !== "object") return;
        if (msg.type === "child-hello") {
          // Uma filha viva se anunciou (na abertura ou respondendo ao pulso).
          // Reconstrói o estado de "aberto" sem duplicar — é o que conserta o
          // reaparecimento dos painéis na principal após um reload. Grava o
          // layout só quando muda de fato (não a cada pulso).
          lastSeenRef.current.set(msg.id, Date.now());
          let changed = false;
          if (msg.x != null && msg.y != null && msg.w != null && msg.h != null) {
            const prev = geomRef.current.get(msg.id);
            if (!prev || prev.x !== msg.x || prev.y !== msg.y || prev.w !== msg.w || prev.h !== msg.h) {
              geomRef.current.set(msg.id, { x: msg.x, y: msg.y, w: msg.w, h: msg.h });
              changed = true;
            }
          }
          if (isPanelId(msg.id)) {
            if (!openIdsRef.current.includes(msg.id)) {
              setOpen((prev) => (prev.includes(msg.id) ? prev : [...prev, msg.id]));
              setSavedClosed((prev) => prev.filter((p) => p !== msg.id));
              changed = true;
            }
            setPendingRestore((n) => (n === 0 ? n : 0)); // filha viva => não é reabertura
          }
          if (changed) setTimeout(persist, 0);
        } else if (msg.type === "geom") {
          lastSeenRef.current.set(msg.id, Date.now());
          geomRef.current.set(msg.id, { x: msg.x, y: msg.y, w: msg.w, h: msg.h });
        } else if (msg.type === "dock" || msg.type === "bye") {
          forget(msg.id);
        } else if (msg.type === "select") {
          onSelectRef.current?.(msg.code);
        }
      };
    }

    beat();
    const heartbeat = setInterval(beat, HEARTBEAT_MS);

    // Varre filhas mortas: as que pararam de responder (lease vencido) ou cuja
    // janela conhecida foi fechada pelo X do SO.
    const sweep = setInterval(() => {
      const now = Date.now();
      let changed = false;
      for (const id of [...openIdsRef.current]) {
        const ref = winRefs.current.get(id);
        const refClosed = ref ? ref.closed : false;
        const seen = lastSeenRef.current.get(id) ?? 0;
        const leaseDead = now - seen > HOST_TIMEOUT_MS;
        if (refClosed || leaseDead) {
          winRefs.current.delete(id);
          lastSeenRef.current.delete(id);
          changed = true;
        }
      }
      if (changed) {
        setOpen((prev) => prev.filter((x) => lastSeenRef.current.has(x)));
        setTimeout(persist, 0);
      }
    }, 1000);

    // Restaurar no primeiro gesto: se há layout salvo e, após uma janelinha de
    // espera, nenhuma filha viva respondeu (ou seja, o app reabriu em vez de
    // só recarregar), arma o restore no primeiro clique/toque/tecla. O
    // navegador só permite abrir janelas a partir de um gesto do usuário.
    let armTimer: ReturnType<typeof setTimeout> | null = null;
    let gestureBound = false;
    const onGesture = () => {
      unbindGesture();
      doRestoreRef.current();
    };
    const unbindGesture = () => {
      if (!gestureBound) return;
      gestureBound = false;
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    };
    if (saved.length > 0) {
      armTimer = setTimeout(() => {
        if (openIdsRef.current.length === 0 && lastSeenRef.current.size === 0) {
          setPendingRestore(saved.filter((s) => isPanelId(s.id)).length);
          gestureBound = true;
          window.addEventListener("pointerdown", onGesture, { once: true });
          window.addEventListener("keydown", onGesture, { once: true });
        }
      }, 1200);
    }

    return () => {
      clearInterval(heartbeat);
      clearInterval(sweep);
      if (armTimer) clearTimeout(armTimer);
      unbindGesture();
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
    post({ type: "selected", code: selectedCountry ?? null });
  }, [selectedCountry, post]);

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

  const restoreCount = pendingRestore || savedClosed.filter((id) => !openIds.includes(id)).length;

  return (
    <WinCtx.Provider value={value}>
      {pendingRestore > 0 && (
        <button
          type="button"
          onClick={() => doRestoreRef.current()}
          className="fixed left-1/2 -translate-x-1/2 top-3 z-[80] px-4 py-2.5 rounded-2xl text-[12px] font-bold tracking-wide flex items-center gap-2"
          style={{
            color: "#fff",
            background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
            border: "1px solid rgba(74,122,255,.5)",
            boxShadow: "var(--shadow-bar)",
            cursor: "pointer",
            animation: "wt-menu-pop .16s ease-out",
          }}
          title="Reabre as janelas que estavam abertas, nas posições salvas"
        >
          <span className="text-[14px]">↻</span>
          Restaurar {restoreCount} {restoreCount === 1 ? "janela" : "janelas"}
          <span className="hidden sm:inline font-semibold opacity-80">· toque em qualquer lugar</span>
        </button>
      )}
      {children}
    </WinCtx.Provider>
  );
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

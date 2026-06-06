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
  APP_BUILD,
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
  supported: boolean;
};

const WinCtx = createContext<Ctx | null>(null);

function newHostId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {}
  return `h-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

/**
 * Detecta se o app está rodando instalado como PWA (display standalone /
 * fullscreen / minimal-ui). Nesse modo, window.open NÃO cria uma janela
 * separada de verdade: abre fora do app ou é bloqueado. O sistema de pop-out
 * (auto-restaurar + reposicionar) então fica tentando reabrir sem parar e o
 * listener global de gesto acaba sequestrando todo toque, travando o globo e
 * os cliques. Por isso o pop-out é DESLIGADO na PWA instalada e fica disponível
 * só no navegador, onde funciona.
 */
function isStandalonePWA(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const mm = window.matchMedia;
    if (
      mm?.("(display-mode: standalone)").matches ||
      mm?.("(display-mode: fullscreen)").matches ||
      mm?.("(display-mode: minimal-ui)").matches
    ) {
      return true;
    }
    return (window.navigator as { standalone?: boolean }).standalone === true;
  } catch {
    return false;
  }
}

/**
 * Pede a permissão de gerenciamento de janelas (Window Management API). Uma vez
 * concedida, `moveTo`/`resizeTo` passam a posicionar janelas em QUALQUER
 * monitor (sem isso o navegador prende tudo na tela atual). É o que permite
 * reabrir cada caixa no monitor onde ela estava.
 */
async function ensureScreenPermission(): Promise<void> {
  try {
    const w = window as unknown as { getScreenDetails?: () => Promise<unknown> };
    if (typeof w.getScreenDetails === "function") await w.getScreenDetails();
  } catch {}
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
  const lastSeenRef = useRef<Map<string, number>>(new Map());
  const openIdsRef = useRef<string[]>([]);
  const hostIdRef = useRef<string>("");
  const isUnloadingRef = useRef(false);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [savedClosed, setSavedClosed] = useState<string[]>([]);
  // > 0 quando o app reabriu e há janelas salvas pra restaurar (espera 1 gesto).
  const [pendingRestore, setPendingRestore] = useState(0);
  const onSelectRef = useRef(onSelectCountry);
  onSelectRef.current = onSelectCountry;
  const selectedRef = useRef<string | null>(selectedCountry);
  selectedRef.current = selectedCountry;
  const busRef = useRef<BroadcastChannel | null>(null);
  // No app instalado (PWA) o pop-out de janelas não funciona e trava os gestos;
  // detectamos e desligamos o recurso, deixando-o disponível só no navegador.
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    setSupported(!isStandalonePWA());
  }, []);

  const setOpen = useCallback((updater: (prev: string[]) => string[]) => {
    setOpenIds((prev) => {
      const next = updater(prev);
      openIdsRef.current = next;
      return next;
    });
  }, []);

  // O layout salvo (localStorage) é gerenciado pelas PRÓPRIAS janelas filhas:
  // cada uma faz upsert/remove de si mesma. A principal só LÊ no boot e na
  // restauração. Isso evita a principal sobrescrever janelas que ela não
  // chegou a registrar (o que furava tudo no app instalado / PWA).

  const post = useCallback((m: WinMsg) => {
    try {
      busRef.current?.postMessage(m);
    } catch {}
  }, []);

  // Abre um painel em janela própria. geomOverride (usado no restore) tem
  // prioridade sobre a geometria em memória, pra reabrir na posição salva.
  const popOut = useCallback(
    (id: PanelId, geomOverride?: StoredWin): Window | null => {
      // PWA instalada: window.open não abre janela separada de verdade, então
      // nem tenta (evita roubar o foco e travar o globo). Pop-out só no navegador.
      if (isStandalonePWA()) {
        toast("As janelas separadas funcionam no navegador. No app instalado, o painel fica aqui mesmo.");
        return null;
      }
      const existing = winRefs.current.get(id);
      if (existing && !existing.closed) {
        existing.focus();
        return existing;
      }
      const i = openIdsRef.current.length;
      const g = geomOverride ?? geomRef.current.get(id);
      const w = Math.round(g?.w ?? 560);
      const h = Math.round(g?.h ?? 680);
      const x = Math.round(g?.x ?? 90 + i * 28);
      const y = Math.round(g?.y ?? 90 + i * 28);
      const url = `/janela?panel=${id}&x=${x}&y=${y}&w=${w}&h=${h}`;
      const features = `popup=yes,width=${w},height=${h},left=${x},top=${y}`;
      // IMPORTANTE: nada de getScreenDetails AQUI. Pedir a permissao de telas
      // antes do window.open consome a ativacao do gesto e o navegador derruba
      // a janela recem-aberta (bug "a janela some" no pop-out). A permissao e
      // pedida so na restauracao, depois das janelas ja abertas.
      const win = window.open(url, `wt-win-${id}`, features);
      if (!win || win.closed) {
        toast("Permita pop-ups deste site pra abrir em janela separada");
        return null;
      }
      winRefs.current.set(id, win);
      lastSeenRef.current.set(id, Date.now());
      geomRef.current.set(id, { x, y, w, h });
      setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setSavedClosed((prev) => prev.filter((p) => p !== id));
      return win;
    },
    [setOpen, toast],
  );

  const forget = useCallback(
    (id: string) => {
      winRefs.current.delete(id);
      lastSeenRef.current.delete(id);
      setOpen((prev) => prev.filter((x) => x !== id));
    },
    [setOpen],
  );

  const dockBack = useCallback(
    (id: string) => {
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
    post({ type: "close-all", dock: true });
    for (const id of [...openIdsRef.current]) {
      const win = winRefs.current.get(id);
      try {
        win?.close();
      } catch {}
    }
    winRefs.current.clear();
    lastSeenRef.current.clear();
    setOpen(() => []);
    saveOpenWindows([]); // trazer todas pra principal limpa o layout salvo
  }, [post, setOpen]);

  const focusWindow = useCallback((id: string) => {
    const win = winRefs.current.get(id);
    try {
      win?.focus();
    } catch {}
  }, []);

  // Reabre as janelas salvas, cada uma no monitor/posição que estava. Abre
  // primeiro (dentro do gesto, senão o navegador bloqueia o pop-up), depois
  // pede a permissão de telas e reposiciona com precisão entre monitores.
  const doRestore = useCallback(
    async (opts?: { auto?: boolean }) => {
      // PWA instalada: não há janelas pra restaurar (pop-out desligado). Zera o
      // pendente pra nunca armar o listener global que sequestraria os gestos.
      if (isStandalonePWA()) {
        setPendingRestore(0);
        return;
      }
      const saved = loadOpenWindows();
      const toOpen = saved.filter((s) => isPanelId(s.id) && !openIdsRef.current.includes(s.id));
      if (toOpen.length === 0) {
        setPendingRestore(0);
        return;
      }
      let opened = 0;
      for (const s of toOpen) {
        const win = popOut(s.id as PanelId, s);
        if (win) opened += 1;
      }
      if (opened > 0) await ensureScreenPermission();
      // Reposiciona cada caixa na tela/posição salva. Repete algumas vezes
      // porque a janela recém-aberta costuma só aceitar o moveTo um instante
      // depois, e o move cross-monitor depende da permissão de telas concedida.
      const reposition = () => {
        for (const s of toOpen) {
          if (s.x == null || s.y == null || s.w == null || s.h == null) continue;
          const win = winRefs.current.get(s.id);
          if (win && !win.closed) {
            try {
              win.moveTo(Math.round(s.x), Math.round(s.y));
              win.resizeTo(Math.round(s.w), Math.round(s.h));
            } catch {}
          }
        }
      };
      reposition();
      setTimeout(reposition, 150);
      setTimeout(reposition, 450);
      setTimeout(reposition, 900);
      // Reconta após um tick: pega o bloqueio "soft", quando o navegador
      // devolve a janela mas a fecha logo em seguida.
      await new Promise((r) => setTimeout(r, 700));
      let alive = 0;
      for (const s of toOpen) {
        const w = winRefs.current.get(s.id);
        if (w && !w.closed) alive += 1;
      }
      const missing = toOpen.length - alive;
      if (missing > 0) {
        // Navegador bloqueou pop-ups: mostra o botão; o efeito de pendingRestore
        // rearma o gesto pra tentar de novo no próximo clique/toque.
        setPendingRestore(missing);
        if (!opts?.auto) {
          toast("O navegador bloqueou. Libere pop-ups deste site pra reabrir as janelas de uma vez.");
        }
      } else {
        setPendingRestore(0);
      }
    },
    [popOut, toast],
  );
  const doRestoreRef = useRef(doRestore);
  doRestoreRef.current = doRestore;

  const restoreSaved = useCallback(() => {
    void doRestoreRef.current();
  }, []);

  // Mount: carrega o layout salvo, sobe o barramento + heartbeat (rede de
  // segurança), e arma a restauração no primeiro gesto quando o app reabre.
  useEffect(() => {
    hostIdRef.current = newHostId();
    isUnloadingRef.current = false;

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
          lastSeenRef.current.set(msg.id, Date.now());
          if (msg.x != null && msg.y != null && msg.w != null && msg.h != null) {
            geomRef.current.set(msg.id, { x: msg.x, y: msg.y, w: msg.w, h: msg.h });
          }
          if (isPanelId(msg.id)) {
            if (!openIdsRef.current.includes(msg.id)) {
              setOpen((prev) => (prev.includes(msg.id) ? prev : [...prev, msg.id]));
              setSavedClosed((prev) => prev.filter((p) => p !== msg.id));
            }
            setPendingRestore((n) => (n === 0 ? n : 0));
          }
        } else if (msg.type === "geom") {
          lastSeenRef.current.set(msg.id, Date.now());
          geomRef.current.set(msg.id, { x: msg.x, y: msg.y, w: msg.w, h: msg.h });
        } else if (msg.type === "dock" || msg.type === "bye") {
          if (isUnloadingRef.current) return; // preserva o snapshot ao fechar a principal
          forget(msg.id);
        } else if (msg.type === "select") {
          onSelectRef.current?.(msg.code);
        }
      };
    }

    beat();
    const heartbeat = setInterval(beat, HEARTBEAT_MS);

    // Rede de segurança: remove filhas que sumiram sem avisar (lease vencido)
    // ou cuja janela conhecida foi fechada pelo X do SO.
    const sweep = setInterval(() => {
      if (isUnloadingRef.current) return;
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
        // Some da UI, mas NÃO mexe no layout salvo: uma janela que sumiu por
        // lease (sem comunicar) pode voltar na próxima abertura. Só dock/bye
        // intencional reduz o layout.
        setOpen((prev) => prev.filter((x) => lastSeenRef.current.has(x)));
      }
    }, 1000);

    // Ao reabrir o app: se há layout salvo e nenhuma filha viva respondeu numa
    // janelinha de espera, tenta reabrir AUTOMATICAMENTE. Com pop-ups liberados,
    // as janelas voltam sozinhas, cada uma no seu monitor. Se o navegador
    // bloquear, o botão Restaurar aparece e qualquer clique tenta de novo (efeito
    // que observa pendingRestore mais abaixo).
    let armTimer: ReturnType<typeof setTimeout> | null = null;
    if (saved.length > 0 && !isStandalonePWA()) {
      armTimer = setTimeout(() => {
        if (openIdsRef.current.length === 0 && lastSeenRef.current.size === 0) {
          // Mostra o botão Restaurar JÁ (garantia visível) e tenta reabrir
          // sozinho. Com pop-ups liberados, as janelas voltam e o botão some;
          // senão, ele fica pro primeiro clique em qualquer lugar.
          setPendingRestore(saved.filter((s) => isPanelId(s.id)).length);
          void doRestoreRef.current({ auto: true });
        }
      }, 1200);
    }

    // Fechar/recarregar a principal => fecha TODAS as filhas na hora, depois de
    // gravar a disposição. O guard isUnloading impede que os "bye" das filhas
    // apaguem o snapshot salvo.
    const onBeforeUnload = () => {
      isUnloadingRef.current = true;
      // Não reescreve o layout aqui: ele já fica salvo a cada pop-out e a cada
      // movimento de janela. Reescrever no fechamento arriscaria gravar uma
      // lista esvaziada pelo sweep e apagar o snapshot.
      try {
        bus?.postMessage({ type: "close-all" });
      } catch {}
      for (const win of winRefs.current.values()) {
        try {
          win.close();
        } catch {}
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    window.addEventListener("pagehide", onBeforeUnload);

    return () => {
      clearInterval(heartbeat);
      clearInterval(sweep);
      if (armTimer) clearTimeout(armTimer);
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("pagehide", onBeforeUnload);
      try {
        bus?.close();
      } catch {}
      busRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Enquanto houver janelas pendentes (pop-up bloqueado), o próximo clique ou
  // toque em qualquer lugar tenta reabrir de novo. Some quando tudo restaurou.
  useEffect(() => {
    if (pendingRestore <= 0 || isStandalonePWA()) return;
    const onGesture = () => {
      void doRestoreRef.current({ auto: false });
    };
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);
    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    };
  }, [pendingRestore]);

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
    supported,
  };

  const restoreCount = pendingRestore;

  return (
    <WinCtx.Provider value={value}>
      {pendingRestore > 0 && (
        <button
          type="button"
          onClick={() => void doRestoreRef.current()}
          className="fixed left-1/2 -translate-x-1/2 top-3 z-[80] px-4 py-2.5 rounded-2xl text-[12px] font-bold tracking-wide flex items-center gap-2"
          style={{
            color: "#fff",
            background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
            border: "1px solid rgba(74,122,255,.5)",
            boxShadow: "var(--shadow-bar)",
            cursor: "pointer",
            animation: "wt-menu-pop .16s ease-out",
          }}
          title="Reabre as janelas que estavam abertas, nos mesmos monitores e posições"
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
  if (!wm || !wm.supported) return null; // pop-out só no navegador, não na PWA

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
                title="Reabre as janelas que estavam abertas, nos mesmos monitores e posições"
              >
                ↻ Restaurar janelas · {wm.savedClosed.length}
              </button>
            )}
            <div
              className="px-2.5 pt-2 mt-1 text-[9px] text-right font-semibold"
              style={{ color: "var(--text-3)", borderTop: "1px solid var(--border)" }}
            >
              Watch Tower · {APP_BUILD}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

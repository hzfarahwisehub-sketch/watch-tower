"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Responsive, WidthProvider, type Layout, type ResponsiveLayouts } from "react-grid-layout/legacy";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { COUNTRIES } from "@/lib/data";
import { Header } from "./Header";
import { KpiRow } from "./KpiRow";
import { AlertsBanner } from "./AlertsBanner";
import { CountriesSidebar } from "./CountriesSidebar";
import { DailyGrid } from "./DailyGrid";
import { Feed } from "./Feed";
import { OfficialBulletins } from "./OfficialBulletins";
import { CountryBenchmark } from "./CountryBenchmark";
import { SuggestionBox } from "./SuggestionBox";
import { ExportButton } from "./ExportButton";
import { useUndo } from "./UndoProvider";
import { WindowManagerProvider, WindowsMenu, useWindowManagerOptional } from "./WindowManager";
import { type PanelId } from "./PanelRegistry";
import { markNavigating } from "@/lib/nav-perf";
import { useSession } from "next-auth/react";
import { InfoCenters, FinanceCenters, CryptoCenters } from "./InfoCenters";
import { useSettings } from "./SettingsProvider";
import { SettingsPanel } from "./SettingsPanel";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MapZone = dynamic(() => import("./MapZone"), {
  ssr: false,
  loading: () => (
    <div
      className="wt-card flex flex-col h-full"
      style={{ minHeight: 300 }}
    >
      <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[12px] tracking-[2.5px] uppercase font-bold" style={{ color: "var(--color-wh-blue-light)" }}>
          🗺 Carregando mapa…
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center" style={{ color: "var(--text-3)" }}>
        <span className="wt-live-dot" /> &nbsp; conectando ao CartoDB
      </div>
    </div>
  ),
});

// Key estável — NÃO bumpa mais. A sanitização do useEffect lida com items
// adicionados no futuro (preserva posições do user, completa com defaults).
const LAYOUT_STORAGE_KEY = "wt-layout";
// Chaves de versões anteriores — usadas só pra migração one-time se o user
// já tinha layout salvo em algum bump antigo.
const LEGACY_LAYOUT_KEYS = [
  "wt-layout-v10","wt-layout-v9","wt-layout-v8","wt-layout-v7",
  "wt-layout-v6","wt-layout-v5","wt-layout-v4","wt-layout-v3","wt-layout-v2",
];

// Layout padrão por breakpoint — COLS DOBRADOS pra free placement mais fino.
//   lg: ≥1200  · 24 cols   md: 996-1199 · 20 cols
//   sm: 768-995 · 12 cols   xs: 480-767  · 8 cols
//   xxs: <480 · 4 cols
//
// Cada unidade vertical (h) = rowHeight (24px) + margin (12px) = 36px
// Granularidade maior = caixa "encaixa" no lugar mais próximo ao soltar.
// Mínimos baixos (1 col / 1 row) — usuário pode encolher caixa pra qualquer tamanho.
// Conteúdo interno usa container queries (@xs:, @sm:, @md:, etc.) pra se reorganizar.
const MIN = { minW: 2, minH: 2 } as const;

// Em granularidade 24-col, cada h vale 36px (24 rowHeight + 12 margin).
// Pra ocupar ~360px de altura → h=10. Pra ~720px → h=20.
const DEFAULT_LAYOUTS: ResponsiveLayouts = {
  lg: [
    { i: "alerts",    x: 0,  y: 0,   w: 24, h: 4,  ...MIN },
    { i: "kpis",      x: 0,  y: 4,   w: 24, h: 4,  ...MIN },
    { i: "map",       x: 0,  y: 8,   w: 14, h: 18, ...MIN },
    { i: "countries", x: 14, y: 8,   w: 10, h: 18, ...MIN },
    { i: "inbox",     x: 0,  y: 26,  w: 8,  h: 12, ...MIN },
    { i: "agenda",    x: 8,  y: 26,  w: 8,  h: 12, ...MIN },
    { i: "tasks",     x: 16, y: 26,  w: 8,  h: 12, ...MIN },
    { i: "scheduled", x: 0,  y: 38,  w: 12, h: 12, ...MIN },
    { i: "reminders", x: 12, y: 38,  w: 12, h: 12, ...MIN },
    { i: "benchmark", x: 0,  y: 50,  w: 24, h: 26, ...MIN },
    { i: "info",      x: 0,  y: 76,  w: 24, h: 26, ...MIN },
    { i: "finance",   x: 0,  y: 102, w: 12, h: 26, ...MIN },
    { i: "crypto",    x: 12, y: 102, w: 12, h: 26, ...MIN },
    { i: "bulletins", x: 0,  y: 128, w: 24, h: 24, ...MIN },
    { i: "feed",      x: 0,  y: 152, w: 24, h: 28, ...MIN },
    { i: "requests",  x: 0,  y: 180, w: 24, h: 12, ...MIN },
  ],
  md: [
    { i: "alerts",    x: 0,  y: 0,   w: 20, h: 4,  ...MIN },
    { i: "kpis",      x: 0,  y: 4,   w: 20, h: 4,  ...MIN },
    { i: "map",       x: 0,  y: 8,   w: 12, h: 18, ...MIN },
    { i: "countries", x: 12, y: 8,   w: 8,  h: 18, ...MIN },
    { i: "inbox",     x: 0,  y: 26,  w: 10, h: 12, ...MIN },
    { i: "agenda",    x: 10, y: 26,  w: 10, h: 12, ...MIN },
    { i: "tasks",     x: 0,  y: 38,  w: 10, h: 12, ...MIN },
    { i: "scheduled", x: 10, y: 38,  w: 10, h: 12, ...MIN },
    { i: "reminders", x: 0,  y: 50,  w: 20, h: 10, ...MIN },
    { i: "benchmark", x: 0,  y: 60,  w: 20, h: 26, ...MIN },
    { i: "info",      x: 0,  y: 86,  w: 20, h: 26, ...MIN },
    { i: "finance",   x: 0,  y: 112, w: 10, h: 26, ...MIN },
    { i: "crypto",    x: 10, y: 112, w: 10, h: 26, ...MIN },
    { i: "bulletins", x: 0,  y: 138, w: 20, h: 24, ...MIN },
    { i: "feed",      x: 0,  y: 162, w: 20, h: 28, ...MIN },
    { i: "requests",  x: 0,  y: 190, w: 20, h: 12, ...MIN },
  ],
  sm: [
    { i: "alerts",    x: 0, y: 0,    w: 12, h: 4,  ...MIN },
    { i: "kpis",      x: 0, y: 4,    w: 12, h: 6,  ...MIN },
    { i: "map",       x: 0, y: 10,   w: 12, h: 18, ...MIN },
    { i: "countries", x: 0, y: 28,   w: 12, h: 18, ...MIN },
    { i: "inbox",     x: 0, y: 46,   w: 12, h: 12, ...MIN },
    { i: "agenda",    x: 0, y: 58,   w: 12, h: 14, ...MIN },
    { i: "tasks",     x: 0, y: 72,   w: 12, h: 14, ...MIN },
    { i: "scheduled", x: 0, y: 86,   w: 12, h: 12, ...MIN },
    { i: "reminders", x: 0, y: 98,   w: 12, h: 10, ...MIN },
    { i: "benchmark", x: 0, y: 108,  w: 12, h: 30, ...MIN },
    { i: "info",      x: 0, y: 138,  w: 12, h: 32, ...MIN },
    { i: "finance",   x: 0, y: 170,  w: 12, h: 28, ...MIN },
    { i: "crypto",    x: 0, y: 198,  w: 12, h: 26, ...MIN },
    { i: "bulletins", x: 0, y: 224,  w: 12, h: 28, ...MIN },
    { i: "feed",      x: 0, y: 252,  w: 12, h: 32, ...MIN },
    { i: "requests",  x: 0, y: 284,  w: 12, h: 14, ...MIN },
  ],
  xs: [
    { i: "alerts",    x: 0, y: 0,    w: 8, h: 6,  ...MIN },
    { i: "kpis",      x: 0, y: 6,    w: 8, h: 12, ...MIN },
    { i: "map",       x: 0, y: 18,   w: 8, h: 16, ...MIN },
    { i: "countries", x: 0, y: 34,   w: 8, h: 16, ...MIN },
    { i: "inbox",     x: 0, y: 50,   w: 8, h: 14, ...MIN },
    { i: "agenda",    x: 0, y: 64,   w: 8, h: 16, ...MIN },
    { i: "tasks",     x: 0, y: 80,   w: 8, h: 16, ...MIN },
    { i: "scheduled", x: 0, y: 96,   w: 8, h: 14, ...MIN },
    { i: "reminders", x: 0, y: 110,  w: 8, h: 12, ...MIN },
    { i: "benchmark", x: 0, y: 122,  w: 8, h: 36, ...MIN },
    { i: "info",      x: 0, y: 158,  w: 8, h: 40, ...MIN },
    { i: "finance",   x: 0, y: 198,  w: 8, h: 32, ...MIN },
    { i: "crypto",    x: 0, y: 230,  w: 8, h: 30, ...MIN },
    { i: "bulletins", x: 0, y: 260,  w: 8, h: 36, ...MIN },
    { i: "feed",      x: 0, y: 296,  w: 8, h: 40, ...MIN },
    { i: "requests",  x: 0, y: 336,  w: 8, h: 16, ...MIN },
  ],
  xxs: [
    { i: "alerts",    x: 0, y: 0,    w: 4, h: 8,  ...MIN },
    { i: "kpis",      x: 0, y: 8,    w: 4, h: 22, ...MIN },
    { i: "map",       x: 0, y: 30,   w: 4, h: 14, ...MIN },
    { i: "countries", x: 0, y: 44,   w: 4, h: 16, ...MIN },
    { i: "inbox",     x: 0, y: 60,   w: 4, h: 16, ...MIN },
    { i: "agenda",    x: 0, y: 76,   w: 4, h: 18, ...MIN },
    { i: "tasks",     x: 0, y: 94,   w: 4, h: 18, ...MIN },
    { i: "scheduled", x: 0, y: 112,  w: 4, h: 16, ...MIN },
    { i: "reminders", x: 0, y: 128,  w: 4, h: 14, ...MIN },
    { i: "benchmark", x: 0, y: 142,  w: 4, h: 44, ...MIN },
    { i: "info",      x: 0, y: 186,  w: 4, h: 50, ...MIN },
    { i: "finance",   x: 0, y: 236,  w: 4, h: 42, ...MIN },
    { i: "crypto",    x: 0, y: 278,  w: 4, h: 38, ...MIN },
    { i: "bulletins", x: 0, y: 316,  w: 4, h: 44, ...MIN },
    { i: "feed",      x: 0, y: 360,  w: 4, h: 48, ...MIN },
    { i: "requests",  x: 0, y: 408,  w: 4, h: 18, ...MIN },
  ],
};

const REQUIRED_KEYS = ["alerts","kpis","map","countries","inbox","agenda","tasks","scheduled","reminders","requests","benchmark","info","finance","crypto","bulletins","feed"];

function GridCell({ panelId, label, children, locked }: { panelId?: PanelId; label: string; children: ReactNode; locked: boolean }) {
  const wm = useWindowManagerOptional();
  const poppedOut = !!(panelId && wm?.isOpen(panelId));
  return (
    <div className={`wt-grid-cell ${locked ? "wt-cell-locked" : ""}`} style={{ position: "relative" }}>
      {!locked && (
        <button
          type="button"
          className="wt-drag-handle"
          aria-label={`Arrastar ${label} pra reposicionar`}
          title={`Arrastar pra reposicionar — ${label}`}
        >
          <span aria-hidden>⠿</span>
        </button>
      )}
      {panelId && wm && wm.supported && (
        <button
          type="button"
          onClick={() => (poppedOut ? wm.dockBack(panelId) : wm.popOut(panelId))}
          title={poppedOut ? `Trazer "${label}" de volta` : `Abrir "${label}" em janela separada`}
          aria-label={poppedOut ? "Trazer de volta" : "Abrir em janela separada"}
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            zIndex: 6,
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 7,
            fontSize: 12,
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            color: "var(--text-3)",
            cursor: "pointer",
          }}
        >
          {poppedOut ? "↩" : "⧉"}
        </button>
      )}
      <div className="wt-grid-content">
        {poppedOut ? (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2.5 text-center px-4">
            <span className="text-[26px]">🪟</span>
            <span className="text-[12px] font-bold" style={{ color: "var(--text-2)" }}>{label}</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-3)" }}>
              Aberto numa janela separada.
            </span>
            <button
              type="button"
              onClick={() => panelId && wm?.dockBack(panelId)}
              className="px-3 py-1.5 rounded-lg text-[11px] font-bold"
              style={{ background: "rgba(31,85,255,.15)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)", cursor: "pointer" }}
            >
              ↩ Trazer de volta
            </button>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export function Dashboard() {
  const { locked } = useSettings();
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user?.email;
  // mapSelected: país em foco. Alimenta o Benchmark (a "área completa" do país,
  // com tudo do local) e o voo do globo. Clicar em qualquer lugar (mapa,
  // alertas, sidebar, feed) aponta todo mundo pro mesmo país, SEM modal cobrindo.
  const [mapSelected, setMapSelected] = useState<string | null>(null);
  const [layouts, setLayouts] = useState<ResponsiveLayouts>(DEFAULT_LAYOUTS);
  const [mounted, setMounted] = useState(false);

  // Persistência do último país selecionado no mapa → restaura no próximo boot
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wt-last-country");
      if (saved && COUNTRIES.some((c) => c.code === saved)) {
        setMapSelected(saved);
      }
    } catch {}
  }, []);
  useEffect(() => {
    if (!mapSelected) return;
    try { localStorage.setItem("wt-last-country", mapSelected); } catch {}
  }, [mapSelected]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const panel = new URLSearchParams(window.location.search).get("panel");
    if (!panel) return;
    window.setTimeout(() => {
      document.getElementById(`wt-panel-${panel}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 250);
  }, []);

  useEffect(() => {
    try {
      let stored = localStorage.getItem(LAYOUT_STORAGE_KEY);
      // Migração one-time: se a key estável está vazia, procura em chaves
      // legadas (de versions antigas que bumpávamos a cada novo item). Pega
      // a primeira que existir, migra pra key nova e remove a antiga.
      if (!stored) {
        for (const legacy of LEGACY_LAYOUT_KEYS) {
          const old = localStorage.getItem(legacy);
          if (old) {
            stored = old;
            try {
              localStorage.setItem(LAYOUT_STORAGE_KEY, old);
              localStorage.removeItem(legacy);
            } catch {}
            break;
          }
        }
      }
      if (stored) {
        const parsed = JSON.parse(stored) as ResponsiveLayouts;
        // Merge com defaults pra garantir todos os items presentes
        const merged: ResponsiveLayouts = { ...DEFAULT_LAYOUTS };
        for (const bp of Object.keys(parsed)) {
          const arr = parsed[bp];
          if (!Array.isArray(arr)) continue;
          // Sanitiza: garante que todos os 7 items estão presentes e dentro de bounds razoáveis
          const itemsByKey = new Map(arr.map((it) => [it.i, it]));
          const defaultArr = DEFAULT_LAYOUTS[bp] ?? DEFAULT_LAYOUTS.lg ?? [];
          const fixed = REQUIRED_KEYS.map((key) => {
            const item = itemsByKey.get(key);
            const fallback = defaultArr.find((d) => d.i === key);
            if (!item || typeof item.x !== "number" || typeof item.y !== "number") {
              return fallback ?? { i: key, x: 0, y: 0, w: 4, h: 4, minW: 2, minH: 2 };
            }
            // Bound: x e y sempre >= 0; w e h >= 2 (mínimo viável)
            return {
              ...item,
              x: Math.max(0, item.x),
              y: Math.max(0, item.y),
              w: Math.max(2, item.w ?? 4),
              h: Math.max(2, item.h ?? 4),
              minW: 2,
              minH: 2,
            };
          });
          merged[bp] = fixed;
        }
        setLayouts(merged);
      }
    } catch {}
    setMounted(true);
  }, []);

  // Clicar num país (mapa, alertas, sidebar ou feed) aponta o Benchmark + o voo
  // do globo pra ele. O Benchmark é a "área completa" do país (tudo do local),
  // sem modal cobrindo a tela. O Benchmark rola sozinho pra dentro da vista.
  const selectCountry = (code: string) => setMapSelected(code);
  const openModal = selectCountry;
  const selectOnMap = selectCountry;

  // ── Histórico de Desfazer/Refazer (Voltar/Avançar) ──
  const { push: pushUndo, undo, redo, canUndo, canRedo, nextUndoLabel, nextRedoLabel } = useUndo();
  const layoutsRef = useRef<ResponsiveLayouts>(layouts);
  const dragBeforeRef = useRef<ResponsiveLayouts | null>(null);
  const cloneLayouts = (l: ResponsiveLayouts): ResponsiveLayouts => JSON.parse(JSON.stringify(l));

  const applyLayouts = (all: ResponsiveLayouts, persist: boolean) => {
    layoutsRef.current = all;
    setLayouts(all);
    try {
      if (persist) localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(all));
      else localStorage.removeItem(LAYOUT_STORAGE_KEY);
    } catch {}
  };

  const onLayoutChange = (_current: Layout, all: ResponsiveLayouts) => {
    markNavigating(); // arrasto/resize em andamento → navegação fluida
    layoutsRef.current = all;
    setLayouts(all);
    try {
      localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(all));
    } catch {}
  };

  // Captura o layout antes de arrastar/redimensionar; ao soltar, registra a ação.
  const captureLayoutBefore = () => {
    dragBeforeRef.current = cloneLayouts(layoutsRef.current);
  };
  const commitLayoutAction = (label: string) => {
    const before = dragBeforeRef.current;
    dragBeforeRef.current = null;
    if (!before) return;
    // espera o onLayoutChange final assentar, então compara e registra
    setTimeout(() => {
      const after = cloneLayouts(layoutsRef.current);
      if (JSON.stringify(before) === JSON.stringify(after)) return;
      pushUndo({
        label,
        undo: () => applyLayouts(before, true),
        redo: () => applyLayouts(after, true),
      });
    }, 0);
  };

  const resetLayout = () => {
    const before = cloneLayouts(layoutsRef.current);
    applyLayouts(DEFAULT_LAYOUTS, false);
    pushUndo({
      label: "restaurar layout",
      undo: () => applyLayouts(before, true),
      redo: () => applyLayouts(DEFAULT_LAYOUTS, false),
    });
  };

  return (
    <>
      <div className="wt-watermark" aria-hidden />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
      <WindowManagerProvider onSelectCountry={selectCountry} selectedCountry={mapSelected}>
      <Header />

      <div
        className="flex items-center justify-between gap-3 mb-4 flex-wrap"
        style={{ marginTop: 16 }}
      >
        <div
          className="text-[11px] tracking-wider uppercase font-semibold flex items-center gap-2 min-w-0 flex-1"
          style={{ color: "var(--text-3)" }}
        >
          {locked ? (
            <>
              <span style={{ color: "#FFB13B", fontSize: 14 }}>🔒</span>
              layout travado · clica no cadeado pra liberar movimentação
            </>
          ) : (
            <>
              <span style={{ color: "var(--color-wh-blue-light)", fontSize: 14 }}>⠿</span>
              arraste · ⤡ redimensione · caixa sempre encaixa no espaço mais próximo · nenhuma some
            </>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end shrink-0">
          {/* Voltar / Avançar (desfazer/refazer ações da sessão) */}
          <div className="flex items-center rounded-lg overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--bg2)" }}>
            <button
              type="button"
              onClick={undo}
              disabled={!canUndo}
              title={canUndo ? `Voltar${nextUndoLabel ? `: ${nextUndoLabel}` : ""}` : "Nada pra voltar"}
              aria-label="Voltar (desfazer)"
              className="px-2.5 py-1.5 text-[12px] font-bold transition-colors"
              style={{ color: canUndo ? "var(--text-2)" : "var(--text-3)", opacity: canUndo ? 1 : 0.4, cursor: canUndo ? "pointer" : "default", borderRight: "1px solid var(--border)" }}
            >
              ↶ Voltar
            </button>
            <button
              type="button"
              onClick={redo}
              disabled={!canRedo}
              title={canRedo ? `Avançar${nextRedoLabel ? `: ${nextRedoLabel}` : ""}` : "Nada pra avançar"}
              aria-label="Avançar (refazer)"
              className="px-2.5 py-1.5 text-[12px] font-bold transition-colors"
              style={{ color: canRedo ? "var(--text-2)" : "var(--text-3)", opacity: canRedo ? 1 : 0.4, cursor: canRedo ? "pointer" : "default" }}
            >
              Avançar ↷
            </button>
          </div>
          <WindowsMenu />
          {isLoggedIn && (
            <ExportButton
              label="REPAVET"
              title="REPAVET — Resumo Elaborado dos Países e das Atualizações dos Vistos, Economia e Trabalho · gera o documento completo, país a país"
            />
          )}
          {!locked && (
            <button
              type="button"
              onClick={resetLayout}
              className="px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-colors"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                color: "var(--text-2)",
                cursor: "pointer",
              }}
            >
              ↻ Restaurar layout padrão
            </button>
          )}
        </div>
      </div>

      {mounted && (
        <ResponsiveGridLayout
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 24, md: 20, sm: 12, xs: 8, xxs: 4 }}
          rowHeight={24}
          margin={[12, 12]}
          containerPadding={[0, 0]}
          isDraggable={!locked}
          isResizable={!locked}
          isBounded
          draggableHandle=".wt-drag-handle"
          onLayoutChange={onLayoutChange}
          onDragStart={captureLayoutBefore}
          onResizeStart={captureLayoutBefore}
          onDragStop={() => commitLayoutAction("mover caixa")}
          onResizeStop={() => commitLayoutAction("redimensionar caixa")}
          compactType="vertical"
          preventCollision={false}
          allowOverlap={false}
          useCSSTransforms
        >
          <div key="alerts">
            <GridCell panelId="alerts" label="Alertas críticos" locked={locked}>
              <AlertsBanner onSelect={openModal} />
            </GridCell>
          </div>
          <div key="kpis">
            <GridCell panelId="kpis" label="KPIs globais" locked={locked}>
              <KpiRow />
            </GridCell>
          </div>
          <div key="map">
            <GridCell panelId="map" label="Mapa global" locked={locked}>
              <MapZone countries={COUNTRIES} selected={mapSelected} onSelect={selectOnMap} />
            </GridCell>
          </div>
          <div key="countries">
            <GridCell panelId="countries" label="Lista de países" locked={locked}>
              <CountriesSidebar countries={COUNTRIES} selected={mapSelected} onSelect={openModal} />
            </GridCell>
          </div>
          <div key="inbox">
            <GridCell panelId="inbox" label="Inbox" locked={locked}>
              <DailyGrid only="inbox" />
            </GridCell>
          </div>
          <div key="agenda">
            <GridCell panelId="agenda" label="Agenda" locked={locked}>
              <DailyGrid only="agenda" />
            </GridCell>
          </div>
          <div key="tasks">
            <GridCell panelId="tasks" label="Tarefas do dia" locked={locked}>
              <DailyGrid only="tasks" />
            </GridCell>
          </div>
          <div key="scheduled">
            <GridCell panelId="scheduled" label="Ações programadas" locked={locked}>
              <DailyGrid only="scheduled" />
            </GridCell>
          </div>
          <div key="reminders" id="wt-panel-reminders">
            <GridCell panelId="reminders" label="Lembretes" locked={locked}>
              <DailyGrid only="reminders" />
            </GridCell>
          </div>
          <div key="benchmark">
            <GridCell panelId="benchmark" label="Benchmark do país" locked={locked}>
              <CountryBenchmark selectedCode={mapSelected} />
            </GridCell>
          </div>
          <div key="info">
            <GridCell panelId="info" label="Centros de Informação" locked={locked}>
              <InfoCenters />
            </GridCell>
          </div>
          <div key="finance">
            <GridCell panelId="finance" label="Finanças & Mercados" locked={locked}>
              <FinanceCenters />
            </GridCell>
          </div>
          <div key="crypto">
            <GridCell panelId="crypto" label="Cripto & Derivativos" locked={locked}>
              <CryptoCenters />
            </GridCell>
          </div>
          <div key="bulletins">
            <GridCell panelId="bulletins" label="Boletins oficiais" locked={locked}>
              <OfficialBulletins />
            </GridCell>
          </div>
          <div key="feed">
            <GridCell panelId="feed" label="Feed de mudanças" locked={locked}>
              <Feed countries={COUNTRIES} onSelect={openModal} />
            </GridCell>
          </div>
          <div key="requests">
            <GridCell panelId="requests" label="Caixa de solicitações" locked={locked}>
              <SuggestionBox />
            </GridCell>
          </div>
        </ResponsiveGridLayout>
      )}

      <SettingsPanel />
      </WindowManagerProvider>
      </div>
    </>
  );
}

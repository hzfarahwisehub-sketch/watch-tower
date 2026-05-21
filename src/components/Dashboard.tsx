"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
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
import { Modal } from "./Modal";
import { OfficialBulletins } from "./OfficialBulletins";
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

const LAYOUT_STORAGE_KEY = "wt-layout-v4";

// Layout padrão por breakpoint
//   lg: ≥1200  · 12 cols   md: 996-1199 · 10 cols
//   sm: 768-995 · 6 cols    xs: 480-767  · 4 cols
//   xxs: <480 · 2 cols
//
// Cada unidade vertical (h) = rowHeight (40px) + margin (16px) = 56px
// Mínimos baixos (1 col / 1 row) — usuário pode encolher caixa pra qualquer tamanho.
// Conteúdo interno usa container queries (@xs:, @sm:, @md:, etc.) pra se reorganizar.
const MIN = { minW: 1, minH: 1 } as const;

const DEFAULT_LAYOUTS: ResponsiveLayouts = {
  lg: [
    { i: "alerts",    x: 0, y: 0,  w: 12, h: 2, ...MIN },
    { i: "kpis",      x: 0, y: 2,  w: 12, h: 2, ...MIN },
    { i: "map",       x: 0, y: 4,  w: 7,  h: 9, ...MIN },
    { i: "countries", x: 7, y: 4,  w: 5,  h: 9, ...MIN },
    { i: "daily",     x: 0, y: 13, w: 12, h: 10, ...MIN },
    { i: "bulletins", x: 0, y: 23, w: 12, h: 12, ...MIN },
    { i: "feed",      x: 0, y: 35, w: 12, h: 14, ...MIN },
  ],
  md: [
    { i: "alerts",    x: 0, y: 0,  w: 10, h: 2, ...MIN },
    { i: "kpis",      x: 0, y: 2,  w: 10, h: 2, ...MIN },
    { i: "map",       x: 0, y: 4,  w: 6,  h: 9, ...MIN },
    { i: "countries", x: 6, y: 4,  w: 4,  h: 9, ...MIN },
    { i: "daily",     x: 0, y: 13, w: 10, h: 10, ...MIN },
    { i: "bulletins", x: 0, y: 23, w: 10, h: 12, ...MIN },
    { i: "feed",      x: 0, y: 35, w: 10, h: 14, ...MIN },
  ],
  sm: [
    { i: "alerts",    x: 0, y: 0,  w: 6, h: 2, ...MIN },
    { i: "kpis",      x: 0, y: 2,  w: 6, h: 3, ...MIN },
    { i: "map",       x: 0, y: 5,  w: 6, h: 9, ...MIN },
    { i: "countries", x: 0, y: 14, w: 6, h: 9, ...MIN },
    { i: "daily",     x: 0, y: 23, w: 6, h: 12, ...MIN },
    { i: "bulletins", x: 0, y: 35, w: 6, h: 14, ...MIN },
    { i: "feed",      x: 0, y: 49, w: 6, h: 16, ...MIN },
  ],
  xs: [
    { i: "alerts",    x: 0, y: 0,  w: 4, h: 3, ...MIN },
    { i: "kpis",      x: 0, y: 3,  w: 4, h: 6, ...MIN },
    { i: "map",       x: 0, y: 9,  w: 4, h: 8, ...MIN },
    { i: "countries", x: 0, y: 17, w: 4, h: 8, ...MIN },
    { i: "daily",     x: 0, y: 25, w: 4, h: 12, ...MIN },
    { i: "bulletins", x: 0, y: 37, w: 4, h: 18, ...MIN },
    { i: "feed",      x: 0, y: 55, w: 4, h: 20, ...MIN },
  ],
  xxs: [
    { i: "alerts",    x: 0, y: 0,  w: 2, h: 4, ...MIN },
    { i: "kpis",      x: 0, y: 4,  w: 2, h: 11, ...MIN },
    { i: "map",       x: 0, y: 15, w: 2, h: 7, ...MIN },
    { i: "countries", x: 0, y: 22, w: 2, h: 8, ...MIN },
    { i: "daily",     x: 0, y: 30, w: 2, h: 14, ...MIN },
    { i: "bulletins", x: 0, y: 44, w: 2, h: 22, ...MIN },
    { i: "feed",      x: 0, y: 66, w: 2, h: 24, ...MIN },
  ],
};

function GridCell({ label, children, locked }: { label: string; children: ReactNode; locked: boolean }) {
  return (
    <div className={`wt-grid-cell ${locked ? "wt-cell-locked" : ""}`}>
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
      <div className="wt-grid-content">{children}</div>
    </div>
  );
}

export function Dashboard() {
  const { locked } = useSettings();
  const [selected, setSelected] = useState<string | null>(null);
  const [layouts, setLayouts] = useState<ResponsiveLayouts>(DEFAULT_LAYOUTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ResponsiveLayouts;
        // Merge com defaults pra garantir todos os items presentes
        const merged: ResponsiveLayouts = { ...DEFAULT_LAYOUTS };
        for (const bp of Object.keys(parsed)) {
          if (Array.isArray(parsed[bp])) merged[bp] = parsed[bp];
        }
        setLayouts(merged);
      }
    } catch {}
    setMounted(true);
  }, []);

  const select = (code: string) => setSelected(code);
  const country = selected ? COUNTRIES.find((c) => c.code === selected) ?? null : null;

  const onLayoutChange = (_current: Layout, all: ResponsiveLayouts) => {
    setLayouts(all);
    try {
      localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(all));
    } catch {}
  };

  const resetLayout = () => {
    setLayouts(DEFAULT_LAYOUTS);
    try {
      localStorage.removeItem(LAYOUT_STORAGE_KEY);
    } catch {}
  };

  return (
    <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-7 relative z-10">
      <Header />

      <div
        className="flex items-center justify-between gap-3 mb-4 flex-wrap"
        style={{ marginTop: 16 }}
      >
        <div
          className="text-[11px] tracking-wider uppercase font-semibold flex items-center gap-2"
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
              arraste pelo handle no canto superior direito · ⤡ redimensione pelo canto inferior direito · layout salvo automático
            </>
          )}
        </div>
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

      {mounted && (
        <ResponsiveGridLayout
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={40}
          margin={[16, 16]}
          containerPadding={[0, 0]}
          isDraggable={!locked}
          isResizable={!locked}
          draggableHandle=".wt-drag-handle"
          onLayoutChange={onLayoutChange}
          compactType="vertical"
          preventCollision={false}
          useCSSTransforms
        >
          <div key="alerts">
            <GridCell label="Alertas críticos" locked={locked}>
              <AlertsBanner onSelect={select} />
            </GridCell>
          </div>
          <div key="kpis">
            <GridCell label="KPIs globais" locked={locked}>
              <KpiRow />
            </GridCell>
          </div>
          <div key="map">
            <GridCell label="Mapa global" locked={locked}>
              <MapZone countries={COUNTRIES} selected={selected} onSelect={select} />
            </GridCell>
          </div>
          <div key="countries">
            <GridCell label="Lista de países" locked={locked}>
              <CountriesSidebar countries={COUNTRIES} selected={selected} onSelect={select} />
            </GridCell>
          </div>
          <div key="daily">
            <GridCell label="Operação diária" locked={locked}>
              <DailyGrid />
            </GridCell>
          </div>
          <div key="bulletins">
            <GridCell label="Boletins oficiais" locked={locked}>
              <OfficialBulletins />
            </GridCell>
          </div>
          <div key="feed">
            <GridCell label="Feed de mudanças" locked={locked}>
              <Feed countries={COUNTRIES} onSelect={select} />
            </GridCell>
          </div>
        </ResponsiveGridLayout>
      )}

      <Modal country={country} onClose={() => setSelected(null)} />
      <SettingsPanel />
    </div>
  );
}

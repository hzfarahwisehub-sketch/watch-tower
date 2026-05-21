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

const LAYOUT_STORAGE_KEY = "wt-layout-v5";

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
    { i: "alerts",    x: 0,  y: 0,  w: 24, h: 4,  ...MIN },
    { i: "kpis",      x: 0,  y: 4,  w: 24, h: 4,  ...MIN },
    { i: "map",       x: 0,  y: 8,  w: 14, h: 18, ...MIN },
    { i: "countries", x: 14, y: 8,  w: 10, h: 18, ...MIN },
    { i: "daily",     x: 0,  y: 26, w: 24, h: 20, ...MIN },
    { i: "bulletins", x: 0,  y: 46, w: 24, h: 24, ...MIN },
    { i: "feed",      x: 0,  y: 70, w: 24, h: 28, ...MIN },
  ],
  md: [
    { i: "alerts",    x: 0,  y: 0,  w: 20, h: 4,  ...MIN },
    { i: "kpis",      x: 0,  y: 4,  w: 20, h: 4,  ...MIN },
    { i: "map",       x: 0,  y: 8,  w: 12, h: 18, ...MIN },
    { i: "countries", x: 12, y: 8,  w: 8,  h: 18, ...MIN },
    { i: "daily",     x: 0,  y: 26, w: 20, h: 20, ...MIN },
    { i: "bulletins", x: 0,  y: 46, w: 20, h: 24, ...MIN },
    { i: "feed",      x: 0,  y: 70, w: 20, h: 28, ...MIN },
  ],
  sm: [
    { i: "alerts",    x: 0, y: 0,   w: 12, h: 4,  ...MIN },
    { i: "kpis",      x: 0, y: 4,   w: 12, h: 6,  ...MIN },
    { i: "map",       x: 0, y: 10,  w: 12, h: 18, ...MIN },
    { i: "countries", x: 0, y: 28,  w: 12, h: 18, ...MIN },
    { i: "daily",     x: 0, y: 46,  w: 12, h: 24, ...MIN },
    { i: "bulletins", x: 0, y: 70,  w: 12, h: 28, ...MIN },
    { i: "feed",      x: 0, y: 98,  w: 12, h: 32, ...MIN },
  ],
  xs: [
    { i: "alerts",    x: 0, y: 0,   w: 8, h: 6,  ...MIN },
    { i: "kpis",      x: 0, y: 6,   w: 8, h: 12, ...MIN },
    { i: "map",       x: 0, y: 18,  w: 8, h: 16, ...MIN },
    { i: "countries", x: 0, y: 34,  w: 8, h: 16, ...MIN },
    { i: "daily",     x: 0, y: 50,  w: 8, h: 24, ...MIN },
    { i: "bulletins", x: 0, y: 74,  w: 8, h: 36, ...MIN },
    { i: "feed",      x: 0, y: 110, w: 8, h: 40, ...MIN },
  ],
  xxs: [
    { i: "alerts",    x: 0, y: 0,   w: 4, h: 8,  ...MIN },
    { i: "kpis",      x: 0, y: 8,   w: 4, h: 22, ...MIN },
    { i: "map",       x: 0, y: 30,  w: 4, h: 14, ...MIN },
    { i: "countries", x: 0, y: 44,  w: 4, h: 16, ...MIN },
    { i: "daily",     x: 0, y: 60,  w: 4, h: 28, ...MIN },
    { i: "bulletins", x: 0, y: 88,  w: 4, h: 44, ...MIN },
    { i: "feed",      x: 0, y: 132, w: 4, h: 48, ...MIN },
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
          cols={{ lg: 24, md: 20, sm: 12, xs: 8, xxs: 4 }}
          rowHeight={24}
          margin={[12, 12]}
          containerPadding={[0, 0]}
          isDraggable={!locked}
          isResizable={!locked}
          draggableHandle=".wt-drag-handle"
          onLayoutChange={onLayoutChange}
          compactType={null}
          preventCollision={false}
          allowOverlap={false}
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

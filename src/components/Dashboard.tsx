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
import { CountryBenchmark } from "./CountryBenchmark";
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

const LAYOUT_STORAGE_KEY = "wt-layout-v7";

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
    { i: "bulletins", x: 0,  y: 76,  w: 24, h: 24, ...MIN },
    { i: "feed",      x: 0,  y: 100, w: 24, h: 28, ...MIN },
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
    { i: "bulletins", x: 0,  y: 86,  w: 20, h: 24, ...MIN },
    { i: "feed",      x: 0,  y: 110, w: 20, h: 28, ...MIN },
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
    { i: "bulletins", x: 0, y: 138,  w: 12, h: 28, ...MIN },
    { i: "feed",      x: 0, y: 166,  w: 12, h: 32, ...MIN },
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
    { i: "bulletins", x: 0, y: 158,  w: 8, h: 36, ...MIN },
    { i: "feed",      x: 0, y: 194,  w: 8, h: 40, ...MIN },
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
    { i: "bulletins", x: 0, y: 186,  w: 4, h: 44, ...MIN },
    { i: "feed",      x: 0, y: 230,  w: 4, h: 48, ...MIN },
  ],
};

const REQUIRED_KEYS = ["alerts","kpis","map","countries","inbox","agenda","tasks","scheduled","reminders","benchmark","bulletins","feed"];

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
  // Separação intencional:
  //  - mapSelected: país selecionado via MAPA → alimenta a caixa Benchmark
  //  - modalCode: país selecionado via AlertsBanner/CountriesSidebar/Feed →
  //    abre o Modal com detalhes completos (não mexe no Benchmark)
  const [mapSelected, setMapSelected] = useState<string | null>(null);
  const [modalCode, setModalCode] = useState<string | null>(null);
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
    try {
      const stored = localStorage.getItem(LAYOUT_STORAGE_KEY);
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

  // Handlers distintos:
  const openModal = (code: string) => setModalCode(code);     // AlertsBanner, CountriesSidebar, Feed
  const selectOnMap = (code: string) => setMapSelected(code); // MapZone
  const modalCountry = modalCode ? COUNTRIES.find((c) => c.code === modalCode) ?? null : null;

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
              arraste · ⤡ redimensione · caixa sempre encaixa no espaço mais próximo · nenhuma some
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
          isBounded
          draggableHandle=".wt-drag-handle"
          onLayoutChange={onLayoutChange}
          compactType="vertical"
          preventCollision={false}
          allowOverlap={false}
          useCSSTransforms
        >
          <div key="alerts">
            <GridCell label="Alertas críticos" locked={locked}>
              <AlertsBanner onSelect={openModal} />
            </GridCell>
          </div>
          <div key="kpis">
            <GridCell label="KPIs globais" locked={locked}>
              <KpiRow />
            </GridCell>
          </div>
          <div key="map">
            <GridCell label="Mapa global" locked={locked}>
              <MapZone countries={COUNTRIES} selected={mapSelected} onSelect={selectOnMap} />
            </GridCell>
          </div>
          <div key="countries">
            <GridCell label="Lista de países" locked={locked}>
              <CountriesSidebar countries={COUNTRIES} selected={modalCode} onSelect={openModal} />
            </GridCell>
          </div>
          <div key="inbox">
            <GridCell label="Inbox" locked={locked}>
              <DailyGrid only="inbox" />
            </GridCell>
          </div>
          <div key="agenda">
            <GridCell label="Agenda" locked={locked}>
              <DailyGrid only="agenda" />
            </GridCell>
          </div>
          <div key="tasks">
            <GridCell label="Tarefas do dia" locked={locked}>
              <DailyGrid only="tasks" />
            </GridCell>
          </div>
          <div key="scheduled">
            <GridCell label="Ações programadas" locked={locked}>
              <DailyGrid only="scheduled" />
            </GridCell>
          </div>
          <div key="reminders">
            <GridCell label="Lembretes" locked={locked}>
              <DailyGrid only="reminders" />
            </GridCell>
          </div>
          <div key="benchmark">
            <GridCell label="Benchmark do país" locked={locked}>
              <CountryBenchmark selectedCode={mapSelected} />
            </GridCell>
          </div>
          <div key="bulletins">
            <GridCell label="Boletins oficiais" locked={locked}>
              <OfficialBulletins />
            </GridCell>
          </div>
          <div key="feed">
            <GridCell label="Feed de mudanças" locked={locked}>
              <Feed countries={COUNTRIES} onSelect={openModal} />
            </GridCell>
          </div>
        </ResponsiveGridLayout>
      )}

      <Modal country={modalCountry} onClose={() => setModalCode(null)} />
      <SettingsPanel />
    </div>
  );
}

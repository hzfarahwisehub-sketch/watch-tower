"use client";
import { useEffect, useState } from "react";
import { Responsive, WidthProvider, type Layout, type ResponsiveLayouts } from "react-grid-layout/legacy";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useSession } from "next-auth/react";
import { COUNTRIES } from "@/lib/data";
import { agendaAllowed } from "@/lib/agenda-access";
import { Header } from "./Header";
import { StatusBar } from "./StatusBar";
import { TopControls } from "./TopControls";
import { ExportButton } from "./ExportButton";
import { SettingsPanel } from "./SettingsPanel";
import { useLocale } from "./LocaleProvider";
import { useSettings } from "./SettingsProvider";
import { useToast } from "./ToastProvider";
import { WindowManagerProvider, WindowsMenu, useWindowManagerOptional } from "./WindowManager";
import { renderPanel, panelTitleKey, type PanelId } from "./PanelRegistry";

const RGL = WidthProvider(Responsive);

// ── 7 abas (ordem aprovada) ────────────────────────────────────────────────
type TabDef = { id: string; fallback: string; emoji: string; panels: PanelId[]; requiresAgenda?: boolean };
const TABS: TabDef[] = [
  { id: "mapa", fallback: "Mapa", emoji: "🗺", panels: ["map", "countries", "benchmark"] },
  { id: "oper", fallback: "Operações", emoji: "📥", panels: ["inbox", "scheduled", "requests", "reminders", "tasks"] },
  { id: "agenda", fallback: "Agendas", emoji: "📅", panels: ["agenda"], requiresAgenda: true },
  { id: "feed", fallback: "Feed", emoji: "📡", panels: ["feed"] },
  { id: "info", fallback: "Centro de Informações", emoji: "🧭", panels: ["info"] },
  { id: "bull", fallback: "Boletins Oficiais", emoji: "📜", panels: ["bulletins"] },
  { id: "fin", fallback: "Finanças e Mercados", emoji: "📈", panels: ["finance", "crypto"] },
];
function tabLabel(t: (k: string) => string, def: TabDef): string {
  const v = t(`tabs.${def.id}`);
  return v === `tabs.${def.id}` ? def.fallback : v;
}

// ── Arranjos padrão por aba (lg = 24 colunas). O Hammis molda por cima. ──────
const MIN = { minW: 3, minH: 4 } as const;
type LItem = { i: string; x: number; y: number; w: number; h: number };
const LG: Record<string, LItem[]> = {
  mapa: [
    { i: "map", x: 0, y: 0, w: 9, h: 15 },
    { i: "countries", x: 9, y: 0, w: 6, h: 15 },
    { i: "benchmark", x: 15, y: 0, w: 9, h: 15 },
  ],
  oper: [
    { i: "inbox", x: 0, y: 0, w: 8, h: 10 },
    { i: "scheduled", x: 8, y: 0, w: 8, h: 10 },
    { i: "requests", x: 16, y: 0, w: 8, h: 10 },
    { i: "reminders", x: 0, y: 10, w: 12, h: 9 },
    { i: "tasks", x: 12, y: 10, w: 12, h: 9 },
  ],
  agenda: [{ i: "agenda", x: 0, y: 0, w: 24, h: 18 }],
  feed: [{ i: "feed", x: 0, y: 0, w: 24, h: 18 }],
  info: [{ i: "info", x: 0, y: 0, w: 24, h: 18 }],
  bull: [{ i: "bulletins", x: 0, y: 0, w: 24, h: 18 }],
  fin: [
    { i: "finance", x: 0, y: 0, w: 16, h: 16 },
    { i: "crypto", x: 16, y: 0, w: 8, h: 16 },
  ],
};
function stacked(items: LItem[], cols: number): LItem[] {
  let y = 0;
  return items.map((it) => {
    const r = { i: it.i, x: 0, y, w: cols, h: it.h, ...MIN };
    y += it.h;
    return r;
  });
}
function defaultLayouts(tabId: string): ResponsiveLayouts {
  const base = LG[tabId] ?? [];
  return {
    lg: base.map((i) => ({ ...i, ...MIN })),
    md: stacked(base, 20),
    sm: stacked(base, 12),
    xs: stacked(base, 8),
    xxs: stacked(base, 4),
  } as ResponsiveLayouts;
}
const STORE = (id: string) => `wt-tabgrid-v1-${id}`;

// ── Célula: alça de arrastar + destacar em janela + conteúdo com scroll ──────
function GridCell({ id, selected, onSelect, locked, isMap }: {
  id: PanelId; selected: string | null; onSelect: (c: string) => void; locked: boolean; isMap: boolean;
}) {
  const wm = useWindowManagerOptional();
  const { t } = useLocale();
  const popped = !!wm?.isOpen(id);
  const label = t(panelTitleKey(id));
  return (
    <div className="wt-gcell">
      {!locked && (
        <button type="button" className="wt-drag" title={t("dash.grid.dragTitle", { label })} aria-label={t("dash.grid.dragAria", { label })}>
          <span aria-hidden>⠿</span>
        </button>
      )}
      {wm?.supported && (
        <button
          type="button"
          className="wt-pop"
          onClick={() => (popped ? wm.dockBack(id) : wm.popOut(id))}
          title={popped ? t("dash.grid.dockTitle", { label }) : t("dash.grid.popTitle", { label })}
          aria-label={popped ? t("dash.grid.dockAria") : t("dash.grid.popAria")}
        >
          {popped ? "↩" : "⧉"}
        </button>
      )}
      <div className={`wt-gcell-body ${isMap ? "wt-gcell-map" : "wt-slot-scroll"}`}>
        {popped ? (
          <div className="wt-card h-full w-full flex flex-col items-center justify-center gap-2.5 text-center px-4">
            <span className="text-[26px]">🪟</span>
            <span className="text-[12px] font-bold" style={{ color: "var(--text-2)" }}>{label}</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-3)" }}>{t("dash.grid.poppedOut")}</span>
            <button type="button" onClick={() => wm?.dockBack(id)} className="px-3 py-1.5 rounded-lg text-[11px] font-bold"
              style={{ background: "rgba(31,85,255,.15)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)", cursor: "pointer" }}>
              {t("dash.grid.dockBack")}
            </button>
          </div>
        ) : (
          renderPanel(id, onSelect, selected)
        )}
      </div>
    </div>
  );
}

export function TabbedDashboard() {
  const { t } = useLocale();
  const { data: session } = useSession();
  const { locked } = useSettings();
  const toast = useToast();
  const isLoggedIn = !!session?.user?.email;
  const canSeeAgenda = agendaAllowed((session?.user as { role?: string })?.role, session?.user?.email);

  const [mapSelected, setMapSelected] = useState<string | null>(null);
  const [active, setActive] = useState("mapa");
  const [layouts, setLayouts] = useState<Record<string, ResponsiveLayouts>>({});
  const [mounted, setMounted] = useState(false);

  // carrega arranjos salvos (merge com defaults) + país + aba
  useEffect(() => {
    const all: Record<string, ResponsiveLayouts> = {};
    for (const tb of TABS) {
      const def = defaultLayouts(tb.id);
      try {
        const raw = localStorage.getItem(STORE(tb.id));
        if (raw) {
          const parsed = JSON.parse(raw) as ResponsiveLayouts;
          const merged = { ...def } as Record<string, Layout>;
          for (const bp of Object.keys(parsed)) {
            const arr = (parsed as Record<string, Layout>)[bp];
            if (Array.isArray(arr)) merged[bp] = arr;
          }
          all[tb.id] = merged as ResponsiveLayouts;
        } else {
          all[tb.id] = def;
        }
      } catch {
        all[tb.id] = def;
      }
    }
    setLayouts(all);
    try {
      const c = localStorage.getItem("wt-last-country");
      if (c && COUNTRIES.some((x) => x.code === c)) setMapSelected(c);
      const tabSaved = localStorage.getItem("wt-active-tab");
      if (tabSaved && TABS.some((x) => x.id === tabSaved)) setActive(tabSaved);
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => { if (mapSelected) { try { localStorage.setItem("wt-last-country", mapSelected); } catch {} } }, [mapSelected]);
  useEffect(() => { try { localStorage.setItem("wt-active-tab", active); } catch {} }, [active]);

  const selectCountry = (code: string) => { setMapSelected(code); setActive("mapa"); };

  const onLayoutChange = (_cur: Layout, all: ResponsiveLayouts, tabId: string) => {
    setLayouts((prev) => ({ ...prev, [tabId]: all }));
    try { localStorage.setItem(STORE(tabId), JSON.stringify(all)); } catch {}
  };

  const exportLayouts = () => {
    const out: Record<string, unknown> = {};
    for (const tb of TABS) {
      try { const raw = localStorage.getItem(STORE(tb.id)); if (raw) out[tb.id] = JSON.parse(raw); } catch {}
    }
    const json = JSON.stringify(out);
    try {
      navigator.clipboard?.writeText(json);
      toast("Arranjo copiado! Cole aqui pra Friday salvar como padrão.");
    } catch {
      toast("Não consegui copiar — abra o console e copie wt-tabgrid-v1-*.");
    }
  };

  const visibleTabs = TABS.filter((tb) => !tb.requiresAgenda || canSeeAgenda);
  const activeTab = visibleTabs.find((tb) => tb.id === active) ?? visibleTabs[0];

  return (
    <>
      <div className="wt-watermark" aria-hidden />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10 wt-app-shell">
        <WindowManagerProvider onSelectCountry={selectCountry} selectedCountry={mapSelected}>
          <Header />

          <nav className="wt-tabs" role="tablist" aria-label="Seções do Watch Tower">
            <div className="wt-tabs-scroll">
              {visibleTabs.map((tb) => {
                const on = tb.id === activeTab?.id;
                return (
                  <button key={tb.id} type="button" role="tab" aria-selected={on} onClick={() => setActive(tb.id)} className={`wt-tab ${on ? "wt-tab-on" : ""}`}>
                    <span aria-hidden>{tb.emoji}</span>
                    <span className="wt-tab-txt">{tabLabel(t, tb)}</span>
                  </button>
                );
              })}
            </div>
            <div className="wt-tabs-actions">
              <TopControls />
              {!locked && (
                <button type="button" className="wt-export-btn" onClick={exportLayouts} title="Copiar o arranjo de todas as abas (pra Friday salvar como padrão)">
                  ⤓ Arranjo
                </button>
              )}
              <WindowsMenu />
              {isLoggedIn && <ExportButton label="REPAVET" title={t("dash.repavet.title")} />}
            </div>
          </nav>

          <div className="wt-tabbody" role="tabpanel">
            {activeTab?.id === "mapa" && <StatusBar onSelect={selectCountry} />}
            {mounted && activeTab && layouts[activeTab.id] && (
              <RGL
                key={activeTab.id}
                className="wt-rgl"
                layouts={layouts[activeTab.id]}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 24, md: 20, sm: 12, xs: 8, xxs: 4 }}
                rowHeight={30}
                margin={[10, 10]}
                containerPadding={[0, 10]}
                isDraggable={!locked}
                isResizable={!locked}
                draggableHandle=".wt-drag"
                compactType="vertical"
                useCSSTransforms
                onLayoutChange={(cur: Layout, all: ResponsiveLayouts) => onLayoutChange(cur, all, activeTab.id)}
              >
                {activeTab.panels.map((id) => (
                  <div key={id}>
                    <GridCell id={id} selected={mapSelected} onSelect={selectCountry} locked={locked} isMap={id === "map"} />
                  </div>
                ))}
              </RGL>
            )}
          </div>

          <SettingsPanel />
        </WindowManagerProvider>
      </div>
    </>
  );
}

"use client";
import { useEffect, useState, type CSSProperties } from "react";
import { useSession } from "next-auth/react";
import { COUNTRIES } from "@/lib/data";
import { agendaAllowed } from "@/lib/agenda-access";
import { Header } from "./Header";
import { StatusBar } from "./StatusBar";
import { TopControls } from "./TopControls";
import { AlertsBanner } from "./AlertsBanner";
import { ExportButton } from "./ExportButton";
import { SettingsPanel } from "./SettingsPanel";
import { useLocale } from "./LocaleProvider";
import {
  WindowManagerProvider,
  WindowsMenu,
  useWindowManagerOptional,
} from "./WindowManager";
import {
  renderPanel,
  panelTitleKey,
  panelEmoji,
  type PanelId,
} from "./PanelRegistry";

// ── Definição das 7 abas (a pedido do Hammis) ─────────────────────────────
// A ordem e os agrupamentos batem com o preview aprovado. Boletins ANTES de
// Finanças. Rótulos vêm do i18n (tabs.*) com fallback PT embutido.
type TabDef = {
  id: string;
  fallback: string;
  emoji: string;
  panels: PanelId[];
  /** só aparece pra quem pode ver a agenda (sócios, menos Igor). */
  requiresAgenda?: boolean;
};

const TABS: TabDef[] = [
  { id: "mapa", fallback: "Mapa", emoji: "🗺", panels: ["map", "countries", "benchmark"] },
  { id: "oper", fallback: "Operações", emoji: "📥", panels: ["inbox", "scheduled", "requests", "reminders", "tasks"] },
  { id: "agenda", fallback: "Agendas", emoji: "📅", panels: ["agenda"], requiresAgenda: true },
  { id: "feed", fallback: "Feed", emoji: "📡", panels: ["feed"] },
  { id: "info", fallback: "Centro de Informações", emoji: "🧭", panels: ["info"] },
  { id: "bull", fallback: "Boletins Oficiais", emoji: "📜", panels: ["bulletins"] },
  { id: "fin", fallback: "Finanças e Mercados", emoji: "📈", panels: ["finance", "crypto"] },
];

function tabLabel(t: (k: string, p?: Record<string, string | number>) => string, def: TabDef): string {
  const key = `tabs.${def.id}`;
  const val = t(key);
  return val === key ? def.fallback : val;
}

// Slot de um painel dentro de uma aba: o painel já é um wt-card auto-contido;
// aqui só sobrepomos o botão de destacar em janela (reaproveita o WindowManager).
function PanelSlot({
  id,
  selected,
  onSelect,
  className,
  style,
}: {
  id: PanelId;
  selected: string | null;
  onSelect: (code: string) => void;
  className?: string;
  style?: CSSProperties;
}) {
  const wm = useWindowManagerOptional();
  const { t } = useLocale();
  const popped = !!wm?.isOpen(id);
  const label = t(panelTitleKey(id));
  return (
    <div className={`relative min-h-0 min-w-0 flex flex-col ${className ?? ""}`} style={style}>
      {wm?.supported && (
        <button
          type="button"
          onClick={() => (popped ? wm.dockBack(id) : wm.popOut(id))}
          title={popped ? t("dash.grid.dockTitle", { label }) : t("dash.grid.popTitle", { label })}
          aria-label={popped ? t("dash.grid.dockAria") : t("dash.grid.popAria")}
          className="absolute right-2 top-2 z-20 w-7 h-7 rounded-lg flex items-center justify-center text-[13px] transition-colors"
          style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text-3)", cursor: "pointer" }}
        >
          {popped ? "↩" : "⧉"}
        </button>
      )}
      <div className="flex-1 min-h-0 wt-slot-scroll">
        {popped ? (
          <div className="wt-card h-full w-full flex flex-col items-center justify-center gap-2.5 text-center px-4">
            <span className="text-[26px]">🪟</span>
            <span className="text-[12px] font-bold" style={{ color: "var(--text-2)" }}>{label}</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-3)" }}>{t("dash.grid.poppedOut")}</span>
            <button
              type="button"
              onClick={() => wm?.dockBack(id)}
              className="px-3 py-1.5 rounded-lg text-[11px] font-bold"
              style={{ background: "rgba(31,85,255,.15)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)", cursor: "pointer" }}
            >
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

function TabContent({
  tab,
  selected,
  onSelect,
}: {
  tab: TabDef;
  selected: string | null;
  onSelect: (code: string) => void;
}) {
  // Aba MAPA — a "arma principal": barra de status (KPIs + alertas) em cima,
  // e a composição globo · países · benchmark embaixo.
  if (tab.id === "mapa") {
    return (
      <div className="flex flex-col gap-3 wt-tab-mapa">
        <StatusBar />
        <AlertsBanner onSelect={onSelect} />
        <div className="wt-maprow">
          <PanelSlot id="map" selected={selected} onSelect={onSelect} className="wt-cell-map" />
          <PanelSlot id="countries" selected={selected} onSelect={onSelect} className="wt-cell-countries" />
          <PanelSlot id="benchmark" selected={selected} onSelect={onSelect} className="wt-cell-benchmark" />
        </div>
      </div>
    );
  }
  // Demais abas — grade responsiva dos painéis da aba.
  const cols =
    tab.panels.length >= 5 ? "wt-grid-3" :
    tab.panels.length >= 2 ? "wt-grid-2" :
    "wt-grid-1";
  return (
    <div className={`wt-tabgrid ${cols}`}>
      {tab.panels.map((id) => (
        <PanelSlot key={id} id={id} selected={selected} onSelect={onSelect} />
      ))}
    </div>
  );
}

export function TabbedDashboard() {
  const { t } = useLocale();
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user?.email;
  const canSeeAgenda = agendaAllowed(
    (session?.user as { role?: string })?.role,
    session?.user?.email,
  );

  const [mapSelected, setMapSelected] = useState<string | null>(null);
  const [active, setActive] = useState<string>("mapa");

  // Restaura último país selecionado + aba salva.
  useEffect(() => {
    try {
      const c = localStorage.getItem("wt-last-country");
      if (c && COUNTRIES.some((x) => x.code === c)) setMapSelected(c);
      const tabSaved = localStorage.getItem("wt-active-tab");
      if (tabSaved && TABS.some((x) => x.id === tabSaved)) setActive(tabSaved);
    } catch {}
  }, []);
  useEffect(() => {
    if (mapSelected) { try { localStorage.setItem("wt-last-country", mapSelected); } catch {} }
  }, [mapSelected]);
  useEffect(() => {
    try { localStorage.setItem("wt-active-tab", active); } catch {}
  }, [active]);

  const selectCountry = (code: string) => {
    setMapSelected(code);
    setActive("mapa"); // clicar num país foca o Mapa (benchmark + globo)
  };

  const visibleTabs = TABS.filter((tb) => !tb.requiresAgenda || canSeeAgenda);
  const activeTab = visibleTabs.find((tb) => tb.id === active) ?? visibleTabs[0];

  return (
    <>
      <div className="wt-watermark" aria-hidden />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10 wt-app-shell">
        <WindowManagerProvider onSelectCountry={selectCountry} selectedCountry={mapSelected}>
          <Header />

          {/* Barra de abas */}
          <nav className="wt-tabs" role="tablist" aria-label="Seções do Watch Tower">
            <div className="wt-tabs-scroll">
              {visibleTabs.map((tb) => {
                const on = tb.id === activeTab?.id;
                return (
                  <button
                    key={tb.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(tb.id)}
                    className={`wt-tab ${on ? "wt-tab-on" : ""}`}
                  >
                    <span aria-hidden>{tb.emoji}</span>
                    <span className="wt-tab-txt">{tabLabel(t, tb)}</span>
                  </button>
                );
              })}
            </div>
            <div className="wt-tabs-actions">
              <TopControls />
              <WindowsMenu />
              {isLoggedIn && <ExportButton label="REPAVET" title={t("dash.repavet.title")} />}
            </div>
          </nav>

          {/* Conteúdo da aba ativa */}
          <div className="wt-tabbody" role="tabpanel">
            {activeTab && (
              <TabContent tab={activeTab} selected={mapSelected} onSelect={selectCountry} />
            )}
          </div>

          <SettingsPanel />
        </WindowManagerProvider>
      </div>
    </>
  );
}

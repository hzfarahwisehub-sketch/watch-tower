"use client";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { COUNTRIES } from "@/lib/data";
import { KpiRow } from "./KpiRow";
import { AlertsBanner } from "./AlertsBanner";
import { CountriesSidebar } from "./CountriesSidebar";
import { DailyGrid } from "./DailyGrid";
import { Feed } from "./Feed";
import { OfficialBulletins } from "./OfficialBulletins";
import { CountryBenchmark } from "./CountryBenchmark";
import { SuggestionBox } from "./SuggestionBox";
import { ContentRequests } from "./ContentRequests";
import { InfoCenters, FinanceCenters, CryptoCenters } from "./InfoCenters";

const MapZone = dynamic(() => import("./MapZone"), { ssr: false });

export type PanelId =
  | "map" | "benchmark" | "alerts" | "feed" | "bulletins" | "countries"
  | "kpis" | "tasks" | "agenda" | "reminders" | "scheduled" | "inbox"
  | "requests" | "content" | "info" | "finance" | "crypto";

/** Catálogo dos painéis que podem virar janela própria (id = chave da célula). */
export const PANELS: { id: PanelId; title: string; emoji: string }[] = [
  { id: "map", title: "Mapa Global 3D", emoji: "🗺" },
  { id: "benchmark", title: "Benchmark do País", emoji: "🎯" },
  { id: "alerts", title: "Alertas críticos", emoji: "🚨" },
  { id: "feed", title: "Feed de mudanças", emoji: "📰" },
  { id: "bulletins", title: "Boletins oficiais", emoji: "📜" },
  { id: "countries", title: "Lista de países", emoji: "🌎" },
  { id: "kpis", title: "KPIs globais", emoji: "📊" },
  { id: "tasks", title: "Tarefas do dia", emoji: "✅" },
  { id: "agenda", title: "Agenda", emoji: "📅" },
  { id: "reminders", title: "Lembretes", emoji: "🔔" },
  { id: "scheduled", title: "Ações programadas", emoji: "⚡" },
  { id: "inbox", title: "Inbox", emoji: "📧" },
  { id: "requests", title: "Caixa de solicitações", emoji: "💡" },
  { id: "content", title: "Pedidos de conteúdo", emoji: "🎬" },
  { id: "info", title: "Centros de Informação", emoji: "🌐" },
  { id: "finance", title: "Finanças & Mercados", emoji: "💰" },
  { id: "crypto", title: "Cripto & Derivativos", emoji: "🪙" },
];

export function panelTitle(id: string): string {
  return PANELS.find((p) => p.id === id)?.title ?? id;
}
/** Chave i18n do título do painel (resolva com t(panelTitleKey(id))). O título
 *  localizado vive em src/lib/i18n/messages/registry.ts. panelTitle() acima
 *  segue como fallback PT (ex.: usos fora de componente). */
export function panelTitleKey(id: string): string {
  return "registry." + id;
}
export function panelEmoji(id: string): string {
  return PANELS.find((p) => p.id === id)?.emoji ?? "🧩";
}
export function isPanelId(id: string): id is PanelId {
  return PANELS.some((p) => p.id === id);
}

/** Renderiza o conteúdo de um painel (usado na célula do grid e na janela). */
export function renderPanel(id: PanelId, onSelectCountry: (code: string) => void, selected: string | null = null): ReactNode {
  switch (id) {
    case "map": return <MapZone countries={COUNTRIES} selected={selected} onSelect={onSelectCountry} />;
    case "benchmark": return <CountryBenchmark selectedCode={selected} />;
    case "alerts": return <AlertsBanner onSelect={onSelectCountry} />;
    case "feed": return <Feed countries={COUNTRIES} onSelect={onSelectCountry} />;
    case "bulletins": return <OfficialBulletins />;
    case "countries": return <CountriesSidebar countries={COUNTRIES} selected={selected} onSelect={onSelectCountry} />;
    case "kpis": return <KpiRow />;
    case "tasks": return <DailyGrid only="tasks" />;
    case "agenda": return <DailyGrid only="agenda" />;
    case "reminders": return <DailyGrid only="reminders" />;
    case "scheduled": return <DailyGrid only="scheduled" />;
    case "inbox": return <DailyGrid only="inbox" />;
    case "requests": return <SuggestionBox />;
    case "content": return <ContentRequests />;
    case "info": return <InfoCenters />;
    case "finance": return <FinanceCenters />;
    case "crypto": return <CryptoCenters />;
    default: return null;
  }
}

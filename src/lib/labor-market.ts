// Mercado de Trabalho por país (curado pela equipe WiseHub, com links oficiais).
//
// Tipos + acessor aqui; os DADOS ficam em labor-market-data.ts (gerado pela
// rodada da equipe de agentes). PT é o canônico; EN vem do overlay
// labor-market-en.ts com fallback EN->PT. App + REPAVET leem daqui.
// NÃO é mural de vagas ao vivo: é análise + onde se candidatar (job board oficial).

import type { Locale } from "./i18n/config";
import { LABOR_MARKET } from "./labor-market-data";
import { LABOR_MARKET_EN } from "./labor-market-en";

export type LaborSource = { label: string; url: string; official?: boolean };

/** Mercado de trabalho de UM país. Todo número deve apontar pra uma fonte. */
export type LaborMarketCountry = {
  /** ISO da última curadoria, ex.: "2026-06-22" */
  updatedAt: string;
  /** panorama em 1-2 parágrafos (jornalístico) */
  overview: string;
  /** setores em alta */
  hotSectors: string[];
  /** setores em baixa (opcional) */
  coolingSectors?: string[];
  /** profissões em demanda */
  inDemandRoles: { role: string; note?: string }[];
  /** recomendação por formação/curso ("tenho X, onde vale mais") */
  byQualification?: { area: string; advice: string }[];
  /** faixas salariais de referência, com fonte */
  salaries?: { role: string; range: string; source?: LaborSource }[];
  /** regras pra estrangeiro: work permit, profissões regulamentadas, restrições */
  foreignerRules: string;
  /** janelas de oportunidade: programas, recrutamento ativo, escassez */
  opportunityWindows?: string[];
  /** onde se candidatar (job boards oficiais) */
  jobBoards: LaborSource[];
  /** fontes gerais usadas na curadoria */
  sources: LaborSource[];
};

export type LaborMarketMap = Record<string, LaborMarketCountry>;

export { LABOR_MARKET };

/** Conteúdo no idioma do app. Overlay EN raso; campos ausentes caem pro PT. */
export function getLaborMarket(
  code: string,
  lang: Locale | "pt" | "en" = "pt",
): LaborMarketCountry | undefined {
  const pt = LABOR_MARKET[code];
  if (!pt) return undefined;
  if (lang === "en") {
    const en = LABOR_MARKET_EN[code];
    return en ? { ...pt, ...en } : pt;
  }
  return pt;
}

export function laborStats(): { countries: number } {
  return { countries: Object.keys(LABOR_MARKET).length };
}

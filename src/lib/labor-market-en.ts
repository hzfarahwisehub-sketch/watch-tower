// Overlay EN do Mercado de Trabalho. Começa vazio; getLaborMarket faz fallback
// EN->PT. A curadoria EN é preenchida pela equipe de agentes (versão em inglês).
import type { LaborMarketCountry } from "./labor-market";

export const LABOR_MARKET_EN: Record<string, Partial<LaborMarketCountry>> = {};

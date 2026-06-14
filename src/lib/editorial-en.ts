// Overlay EN do editorial — versão em inglês das peças curadas (community /
// countryTab / blog), mantida pela rotina diária automática da Friday.
//
// Começa vazio: enquanto um país não tiver versão EN aqui, o getEditorial cai
// no PT (fallback gracioso, nada quebra). A rotina diária (cron) preenche e
// atualiza este arquivo país a país, em paralelo ao editorial.ts (PT).
import type { CountryEditorial } from "./editorial";

export const EDITORIAL_EN: Record<string, CountryEditorial> = {};

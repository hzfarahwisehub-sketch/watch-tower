/**
 * check-parity — blindagem de paridade dos países.
 *
 * Roda ANTES do build (ver package.json "build"). Todo país do COUNTRIES tem que
 * existir nos TRÊS datasets por país, senão o benchmark fica capenga pra ele
 * (sem "Fontes/Ao vivo", sem "Mercado de trabalho", sem "Comunidade/Blog/Notícia"):
 *   - INFO_CENTERS      (src/lib/infoCenters.ts)      → Fontes + Ao vivo
 *   - LABOR_MARKET      (src/lib/labor-market-data.ts) → Mercado de trabalho
 *   - EDITORIAL         (src/lib/editorial.ts)         → Comunidade/Dicas/Notícia/Blog
 *
 * Se uma regeneração (rodada de labor, Ronda editorial, edição do infoCenters)
 * derrubar um país, o build FALHA aqui com a lista — em vez de publicar calado.
 * Foi o que aconteceu com Islândia/Noruega/Rússia (2026-07-18): estavam no
 * cadastro mas faltavam nos datasets. Ver memória watch-tower-cadastro-paises.
 */
import { COUNTRIES } from "../src/lib/data";
import { INFO_CENTERS } from "../src/lib/infoCenters";
import { LABOR_MARKET } from "../src/lib/labor-market-data";
import { EDITORIAL } from "../src/lib/editorial";

const codes = COUNTRIES.map((c) => c.code);
const info = new Set(INFO_CENTERS.map((i) => i.countryCode));
const labor = new Set(Object.keys(LABOR_MARKET));
const editorial = new Set(Object.keys(EDITORIAL));

const gaps: string[] = [];
for (const code of codes) {
  const miss: string[] = [];
  if (!info.has(code)) miss.push("INFO_CENTERS");
  if (!labor.has(code)) miss.push("LABOR_MARKET");
  if (!editorial.has(code)) miss.push("EDITORIAL");
  if (miss.length) gaps.push(`  ${code}: falta em ${miss.join(", ")}`);
}

if (gaps.length > 0) {
  console.error(
    `\n✖ check-parity: ${gaps.length} pais(es) sem paridade completa entre os ${codes.length} do COUNTRIES:\n${gaps.join(
      "\n",
    )}\n\nCada pais do COUNTRIES precisa estar em INFO_CENTERS + LABOR_MARKET + EDITORIAL.\nComplete os datasets do(s) pais(es) acima antes de publicar (o benchmark deles fica capenga).\n`,
  );
  process.exit(1);
}

console.log(
  `✓ check-parity: ${codes.length} paises com paridade completa (INFO_CENTERS + LABOR_MARKET + EDITORIAL).`,
);

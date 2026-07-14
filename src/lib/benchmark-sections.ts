// Filtro por SEÇÃO do Benchmark do País (decisão do Hammis, 2026-07-14).
//
// Um botão por assunto: clicou em "Ao vivo", aparece só a atividade ao vivo;
// clicou em "Mercado de trabalho", só o mercado; e assim por diante. "Todos"
// volta a empilhar tudo na sequência, como era antes.
//
// NÃO confundir com DIMENSION_FILTERS (editorial.ts), que é outro eixo: lá o
// corte é por tema do país (Vistos & Trabalho · Educação · Saúde · Economia) e
// vale só dentro do editorial. Os dois convivem e são ortogonais: dá pra ver
// "Notícia completa" (seção) só de "Educação" (dimensão).
//
// A disponibilidade é calculada aqui pra que o botão de uma seção vazia nem
// apareça — o Hammis não clica em botão que não leva a lugar nenhum.
import { getEditorial, recencyBucket } from "@/lib/editorial";
import { INFO_CENTERS } from "@/lib/infoCenters";
import { getLaborMarket } from "@/lib/labor-market";
import type { Locale } from "@/lib/i18n/config";
import type { Country } from "@/lib/types";

export type SectionKey =
  | "all"
  | "live"
  | "labor"
  | "tips"
  | "story"
  | "community"
  | "blog"
  | "sources"
  | "milestones";

export const SECTION_FILTERS: ReadonlyArray<{ key: SectionKey; emoji: string; labelKey: string }> = [
  { key: "all", emoji: "🗂", labelKey: "bench.sec.all" },
  { key: "live", emoji: "📡", labelKey: "bench.sec.live" },
  { key: "labor", emoji: "💼", labelKey: "bench.sec.labor" },
  { key: "tips", emoji: "💡", labelKey: "bench.sec.tips" },
  { key: "story", emoji: "📰", labelKey: "bench.sec.story" },
  { key: "community", emoji: "💬", labelKey: "bench.sec.community" },
  { key: "blog", emoji: "✍", labelKey: "bench.sec.blog" },
  { key: "sources", emoji: "🌐", labelKey: "bench.sec.sources" },
  { key: "milestones", emoji: "📜", labelKey: "bench.sec.milestones" },
];

/** Mostra a seção `key` quando o filtro está em `sel`? */
export function showSection(sel: SectionKey, key: Exclude<SectionKey, "all">): boolean {
  return sel === "all" || sel === key;
}

// Mesma régua de recência do CountryDetailSections: o que já foi pro arquivo
// (mais velho que "semana passada") não conta. Peça legada sem data fica.
const fresh = (publishedAt?: string) => recencyBucket(publishedAt) !== "arquivo";

/**
 * Seções que realmente têm conteúdo para este país.
 *
 * Cuidado deliberado: a disponibilidade ignora o filtro de DIMENSÃO. Se ela
 * respeitasse, os botões sumiriam e voltariam conforme o outro filtro mudasse,
 * e a barra ficaria pulando na cara de quem clica.
 *
 * "live" é a exceção honesta: a atividade ao vivo chega por RSS assíncrono, e
 * aqui só dá pra saber se o país TEM feed configurado, não se ele voltou com
 * manchete. O botão aparece com feed configurado; o vazio quem informa é o
 * próprio componente.
 */
export function availableSections(country: Country, locale: Locale): Set<SectionKey> {
  const out = new Set<SectionKey>(["all"]);

  const center = INFO_CENTERS.find((ic) => ic.countryCode === country.code);
  const sources = center?.sources ?? [];
  if (sources.some((s) => s.rss)) out.add("live");
  if (sources.length > 0) out.add("sources");

  if (getLaborMarket(country.code, locale === "en" ? "en" : "pt")) out.add("labor");
  if (country.events.length > 0) out.add("milestones");

  const ed = getEditorial(country.code, locale);
  if (ed) {
    const community = ed.community.filter((p) => fresh(p.publishedAt));
    if (community.length > 0) out.add("community");
    if (community.some((p) => p.cta)) out.add("tips");
    if (ed.countryTab.some((a) => fresh(a.publishedAt))) out.add("story");
    if (ed.blog.some((p) => fresh(p.publishedAt))) out.add("blog");
  }

  return out;
}

// Tradução automática das manchetes RSS (PT + EN).
//
// As manchetes chegam na língua de cada fonte oficial (alemão, francês, etc.).
// O cron `scripts/collect-rss.ts` traduz os títulos via MyMemory (grátis, $0,
// sem IA na Vercel) e grava o mapa em /public/rss-translated.json. Aqui só
// carregamos esse mapa (client-side, 1x, memoizado) e escolhemos a versão no
// idioma do app, com fallback pro original. NÃO mexe no /api/rss.

import type { Locale } from "./i18n/config";

export type Translation = { pt?: string; en?: string };
export type TransMap = Record<string, Translation>;

// Normaliza o título pra virar chave estável (mesma função usada no cron, que
// importa daqui). Só colapsa espaços e tira as pontas — sem mudar conteúdo.
export function normalizeTitle(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

let mapPromise: Promise<TransMap> | null = null;

/** Carrega o mapa de traduções uma vez (memoizado entre todos os componentes). */
export function loadTranslationMap(): Promise<TransMap> {
  if (mapPromise) return mapPromise;
  mapPromise = fetch("/rss-translated.json", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => (j && typeof j === "object" && j.translations ? (j.translations as TransMap) : {}))
    .catch(() => ({}));
  return mapPromise;
}

/**
 * Escolhe o título no idioma do app. Devolve o texto a exibir, o original e se
 * houve tradução (pra o app mostrar o original embaixo + o selo "auto").
 * Se não houver tradução (ou for igual ao original), cai no original.
 */
export function pickTitle(
  original: string,
  locale: Locale,
  map: TransMap,
): { text: string; original: string; isTranslation: boolean } {
  const tr = map[normalizeTitle(original)];
  const want = locale === "en" ? tr?.en : tr?.pt;
  if (want && normalizeTitle(want) !== normalizeTitle(original)) {
    return { text: want, original, isTranslation: true };
  }
  return { text: original, original, isTranslation: false };
}

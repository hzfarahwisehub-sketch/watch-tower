// Dicionário de strings da UI do componente InfoCenters (namespace "info.").
// Mesmo modelo dos outros módulos: chave -> string, placeholders {n}/{err} trocados
// em runtime. As chaves de pt e en são idênticas.

const dict = {
  pt: {
    // ---- Títulos dos variants ----
    "info.title.news": "Centros de Informação",
    "info.title.finance": "Finanças & Mercados",
    "info.title.crypto": "Cripto & Derivativos",

    // ---- Rótulos de categoria (legenda + cards) ----
    "info.cat.news": "Notícias gerais",
    "info.cat.finance": "Mercado financeiro",
    "info.cat.crypto": "Cripto & derivativos",
    "info.cat.legal": "Leis & regulação",

    // ---- Tempo relativo das manchetes ----
    "info.time.now": "agora",
    "info.time.min": "{n}min",
    "info.time.hour": "{n}h",
    "info.time.day": "{n}d",
    "info.time.month": "{n}mês",

    // ---- Estados das headlines ----
    "info.headlines.loading": "carregando manchetes…",
    "info.headlines.error": "⚠ feed indisponível ({err})",

    // ---- Header / contadores ----
    "info.header.counts": "{countries} países · {sources} fontes · {rss} com headlines ao vivo",

    // ---- Legenda ----
    "info.legend.live": "RSS ao vivo · refresh 10min",

    // ---- Cards ----
    "info.card.sources": "{n} fontes",
    "info.card.rssBadge": "RSS ao vivo · headlines abaixo",
    "info.card.rssBadge.short": "RSS ao vivo",

    // ---- Card especial: cripto global ----
    "info.global.title": "Cripto global · derivativos & on-chain",

    // ---- Footer ----
    "info.footer": "Fontes com bolinha verde ● têm RSS ao vivo (manchetes atualizadas a cada 10min via /api/rss · cache 15min). Reuters/WSJ/Bloomberg/FT/Coinglass não publicam feed público estável, ficam apenas como link clicável. {rss} de {sources} fontes com RSS conectado.",
  },
  en: {
    // ---- Variant titles ----
    "info.title.news": "Information Centers",
    "info.title.finance": "Finance & Markets",
    "info.title.crypto": "Crypto & Derivatives",

    // ---- Category labels (legend + cards) ----
    "info.cat.news": "General news",
    "info.cat.finance": "Financial markets",
    "info.cat.crypto": "Crypto & derivatives",
    "info.cat.legal": "Law & regulation",

    // ---- Relative time for headlines ----
    "info.time.now": "now",
    "info.time.min": "{n}min",
    "info.time.hour": "{n}h",
    "info.time.day": "{n}d",
    "info.time.month": "{n}mo",

    // ---- Headline states ----
    "info.headlines.loading": "loading headlines…",
    "info.headlines.error": "⚠ feed unavailable ({err})",

    // ---- Header / counters ----
    "info.header.counts": "{countries} countries · {sources} sources · {rss} with live headlines",

    // ---- Legend ----
    "info.legend.live": "Live RSS · refresh 10min",

    // ---- Cards ----
    "info.card.sources": "{n} sources",
    "info.card.rssBadge": "Live RSS · headlines below",
    "info.card.rssBadge.short": "Live RSS",

    // ---- Special card: global crypto ----
    "info.global.title": "Global crypto · derivatives & on-chain",

    // ---- Footer ----
    "info.footer": "Sources with a green dot ● have live RSS (headlines refreshed every 10min via /api/rss · 15min cache). Reuters/WSJ/Bloomberg/FT/Coinglass don't publish a stable public feed, so they stay as clickable links only. {rss} of {sources} sources with RSS connected.",
  },
} as const;

export default dict;

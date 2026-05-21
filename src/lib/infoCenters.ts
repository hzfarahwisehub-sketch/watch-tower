/**
 * Centros de Informação por país — fontes oficiais e referência de notícias
 * relevantes pra estrangeiros: política migratória, leis, economia, finanças,
 * cripto. Catalogados como links clicáveis (não há scraping/cron nesses sites,
 * apenas redirecionamento pro navegador do usuário).
 *
 * Critério editorial inicial (expansível):
 *  - 3 fontes principais por país, cobrindo notícias + finanças tradicionais + cripto
 *  - Fontes globais reconhecidas (Reuters, WSJ, FT, Bloomberg, Nikkei, SCMP, etc.)
 *  - Fontes específicas de cripto/derivativos (Coinglass, CoinDesk, The Block,
 *    Cointelegraph, Decrypt) quando o país tem agenda relevante
 *
 * Hammis pediu começar com: Reuters · WSJ · Coinglass. Expandido pra cobrir
 * relevância em cada país sem perder essas 3 sementes.
 */

export type InfoSourceCategory = "news" | "finance" | "crypto" | "legal";

export type InfoSource = {
  name: string;
  url: string;
  category: InfoSourceCategory;
  language: "en" | "pt" | "de" | "fr" | "es" | "it" | "ja" | "zh";
  /** Nota editorial: por que essa fonte foi escolhida */
  note?: string;
};

export type CountryInfoCenter = {
  countryCode: string;
  countryName: string;
  flag: string;
  sources: InfoSource[];
};

const CATEGORY_META: Record<InfoSourceCategory, { icon: string; color: string; label: string }> = {
  news:    { icon: "📰", color: "#7BA0FF", label: "Notícias gerais" },
  finance: { icon: "💰", color: "#10A570", label: "Mercado financeiro" },
  crypto:  { icon: "🪙", color: "#E5C156", label: "Cripto & derivativos" },
  legal:   { icon: "⚖", color: "#C76FFF", label: "Leis & regulação" },
};

export function categoryMeta(c: InfoSourceCategory) {
  return CATEGORY_META[c];
}

export const INFO_CENTERS: CountryInfoCenter[] = [
  // ===== AMÉRICA =====
  {
    countryCode: "us",
    countryName: "Estados Unidos",
    flag: "🇺🇸",
    sources: [
      { name: "Reuters · US",     url: "https://www.reuters.com/world/us",      category: "news",    language: "en", note: "Cobertura editorial global, neutra; agenda de leis e política" },
      { name: "WSJ · Markets",    url: "https://www.wsj.com/news/markets",      category: "finance", language: "en", note: "Referência absoluta em mercado tradicional US (paywall premium)" },
      { name: "Coinglass",        url: "https://www.coinglass.com/",            category: "crypto",  language: "en", note: "Métricas em tempo real de derivativos cripto" },
      { name: "Bloomberg Markets", url: "https://www.bloomberg.com/markets",    category: "finance", language: "en", note: "Bloomberg Terminal grátis em parte; cobertura institucional" },
    ],
  },
  {
    countryCode: "ca",
    countryName: "Canadá",
    flag: "🇨🇦",
    sources: [
      { name: "Reuters · Americas", url: "https://www.reuters.com/world/americas", category: "news",    language: "en" },
      { name: "Financial Post",     url: "https://financialpost.com/",             category: "finance", language: "en", note: "Principal jornal financeiro CA" },
      { name: "BNN Bloomberg CA",   url: "https://www.bnnbloomberg.ca/",           category: "finance", language: "en", note: "Bloomberg vertical Canadá" },
    ],
  },
  {
    countryCode: "br",
    countryName: "Brasil",
    flag: "🇧🇷",
    sources: [
      { name: "Reuters · Americas", url: "https://www.reuters.com/world/americas", category: "news",    language: "en" },
      { name: "Valor Econômico",    url: "https://valor.globo.com/",               category: "finance", language: "pt", note: "Maior jornal financeiro do Brasil" },
      { name: "G1 Economia",        url: "https://g1.globo.com/economia/",         category: "news",    language: "pt", note: "Cobertura ampla em português" },
    ],
  },

  // ===== EUROPA =====
  {
    countryCode: "uk",
    countryName: "Reino Unido",
    flag: "🇬🇧",
    sources: [
      { name: "Reuters · UK",         url: "https://www.reuters.com/world/uk",  category: "news",    language: "en" },
      { name: "Financial Times",      url: "https://www.ft.com/",               category: "finance", language: "en", note: "Referência mundial em finanças/política UK" },
      { name: "BBC Business",         url: "https://www.bbc.com/business",      category: "news",    language: "en", note: "Cobertura ampla, acesso livre" },
    ],
  },
  {
    countryCode: "de",
    countryName: "Alemanha",
    flag: "🇩🇪",
    sources: [
      { name: "Reuters · Europa",   url: "https://www.reuters.com/world/europe",          category: "news",    language: "en" },
      { name: "Handelsblatt",       url: "https://www.handelsblatt.com/",                 category: "finance", language: "de", note: "Principal financial daily alemão" },
      { name: "DW · Business",      url: "https://www.dw.com/en/business/s-1431",         category: "news",    language: "en", note: "Deutsche Welle em inglês" },
    ],
  },
  {
    countryCode: "fr",
    countryName: "França",
    flag: "🇫🇷",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Les Échos",             url: "https://www.lesechos.fr/",                 category: "finance", language: "fr", note: "Principal jornal econômico francês" },
      { name: "Le Figaro · Économie",  url: "https://www.lefigaro.fr/economie",         category: "finance", language: "fr" },
    ],
  },
  {
    countryCode: "es",
    countryName: "Espanha",
    flag: "🇪🇸",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Expansión",             url: "https://www.expansion.com/",               category: "finance", language: "es", note: "Principal jornal financeiro espanhol" },
      { name: "El País · Economía",    url: "https://elpais.com/economia/",             category: "news",    language: "es" },
    ],
  },
  {
    countryCode: "pt",
    countryName: "Portugal",
    flag: "🇵🇹",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Jornal de Negócios",    url: "https://www.jornaldenegocios.pt/",         category: "finance", language: "pt", note: "Principal jornal financeiro PT" },
      { name: "Público · Economia",    url: "https://www.publico.pt/economia",          category: "news",    language: "pt" },
    ],
  },
  {
    countryCode: "it",
    countryName: "Itália",
    flag: "🇮🇹",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Il Sole 24 Ore",        url: "https://www.ilsole24ore.com/",             category: "finance", language: "it", note: "Principal jornal econômico italiano" },
      { name: "ANSA · Economia",       url: "https://www.ansa.it/sito/notizie/economia/economia.shtml", category: "news", language: "it" },
    ],
  },
  {
    countryCode: "ch",
    countryName: "Suíça",
    flag: "🇨🇭",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Neue Zürcher Zeitung",  url: "https://www.nzz.ch/wirtschaft",            category: "finance", language: "de", note: "Principal financial CH" },
      { name: "SwissInfo · Business",  url: "https://www.swissinfo.ch/eng/business",    category: "news",    language: "en" },
    ],
  },
  {
    countryCode: "ie",
    countryName: "Irlanda",
    flag: "🇮🇪",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Irish Times · Business", url: "https://www.irishtimes.com/business/",    category: "finance", language: "en", note: "Cobertura macroeconômica IE" },
      { name: "RTÉ Business",          url: "https://www.rte.ie/news/business/",        category: "news",    language: "en" },
    ],
  },
  {
    countryCode: "nl",
    countryName: "Holanda",
    flag: "🇳🇱",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "NL Times · Business",   url: "https://nltimes.nl/business",              category: "finance", language: "en", note: "Notícias holandesas em inglês" },
      { name: "DutchNews",             url: "https://www.dutchnews.nl/",                category: "news",    language: "en" },
    ],
  },
  {
    countryCode: "pl",
    countryName: "Polônia",
    flag: "🇵🇱",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Notes from Poland",     url: "https://notesfrompoland.com/",             category: "news",    language: "en", note: "Notícias PL em inglês com viés econômico" },
      { name: "Polska Agencja Prasowa", url: "https://www.pap.pl/en",                   category: "news",    language: "en", note: "Agência oficial de notícias PL" },
    ],
  },
  {
    countryCode: "dk",
    countryName: "Dinamarca",
    flag: "🇩🇰",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Børsen",                url: "https://borsen.dk/",                       category: "finance", language: "en", note: "Principal financial daily DK (paywall)" },
      { name: "The Local Denmark",     url: "https://www.thelocal.dk/",                 category: "news",    language: "en", note: "Notícias DK em inglês pra expats" },
    ],
  },

  // ===== ÁSIA-PACÍFICO =====
  {
    countryCode: "jp",
    countryName: "Japão",
    flag: "🇯🇵",
    sources: [
      { name: "Nikkei Asia",           url: "https://asia.nikkei.com/",                 category: "finance", language: "en", note: "Cobertura financeira asiática · referência institucional" },
      { name: "Japan Times · Business", url: "https://www.japantimes.co.jp/business/",  category: "news",    language: "en" },
      { name: "Reuters · Ásia-Pacífico", url: "https://www.reuters.com/world/asia-pacific", category: "news", language: "en" },
    ],
  },
  {
    countryCode: "sg",
    countryName: "Singapura",
    flag: "🇸🇬",
    sources: [
      { name: "Channel News Asia · Business", url: "https://www.channelnewsasia.com/business", category: "finance", language: "en", note: "Cobertura fintech ASEAN" },
      { name: "Straits Times · Business",     url: "https://www.straitstimes.com/business",    category: "news",    language: "en" },
      { name: "Reuters · Ásia-Pacífico",      url: "https://www.reuters.com/world/asia-pacific", category: "news",  language: "en" },
    ],
  },
  {
    countryCode: "cn",
    countryName: "China",
    flag: "🇨🇳",
    sources: [
      { name: "SCMP · Business",       url: "https://www.scmp.com/business",            category: "finance", language: "en", note: "South China Morning Post — referência ocidental em CN" },
      { name: "Caixin Global",         url: "https://www.caixinglobal.com/",            category: "finance", language: "en", note: "Mais respeitado business media nativo CN em EN" },
      { name: "Reuters · China",       url: "https://www.reuters.com/world/china",      category: "news",    language: "en" },
    ],
  },
  {
    countryCode: "au",
    countryName: "Austrália",
    flag: "🇦🇺",
    sources: [
      { name: "Australian Financial Review", url: "https://www.afr.com/",                category: "finance", language: "en", note: "Principal jornal financeiro AU" },
      { name: "SMH · Business",              url: "https://www.smh.com.au/business",     category: "news",    language: "en", note: "Sydney Morning Herald" },
      { name: "Reuters · Ásia-Pacífico",     url: "https://www.reuters.com/world/asia-pacific", category: "news", language: "en" },
    ],
  },
  {
    countryCode: "nz",
    countryName: "Nova Zelândia",
    flag: "🇳🇿",
    sources: [
      { name: "NZ Herald · Business",  url: "https://www.nzherald.co.nz/business/",     category: "finance", language: "en", note: "Principal jornal NZ" },
      { name: "Stuff · Business",      url: "https://www.stuff.co.nz/business",         category: "news",    language: "en" },
      { name: "Reuters · Ásia-Pacífico", url: "https://www.reuters.com/world/asia-pacific", category: "news", language: "en" },
    ],
  },

  // ===== ORIENTE MÉDIO =====
  {
    countryCode: "ae",
    countryName: "Emirados Árabes",
    flag: "🇦🇪",
    sources: [
      { name: "Gulf News · Business",  url: "https://gulfnews.com/business",            category: "finance", language: "en", note: "Cobertura UAE/região do Golfo" },
      { name: "The National · Business", url: "https://www.thenationalnews.com/business/", category: "news", language: "en", note: "Diário oficial Abu Dhabi em inglês" },
      { name: "Khaleej Times · Business", url: "https://www.khaleejtimes.com/business",  category: "news",    language: "en" },
    ],
  },
];

/** Fontes globais de cripto/derivativos — agregadas separadamente (não-por-país) */
export const GLOBAL_CRYPTO_SOURCES: InfoSource[] = [
  { name: "Coinglass",     url: "https://www.coinglass.com/",     category: "crypto", language: "en", note: "Derivativos cripto · liquidations · open interest em tempo real" },
  { name: "CoinDesk",      url: "https://www.coindesk.com/",      category: "crypto", language: "en", note: "Maior portal editorial cripto" },
  { name: "The Block",     url: "https://www.theblock.co/",       category: "crypto", language: "en", note: "Research institucional cripto" },
  { name: "Cointelegraph", url: "https://cointelegraph.com/",     category: "crypto", language: "en", note: "Cobertura ampla cripto + regulação" },
  { name: "Decrypt",       url: "https://decrypt.co/",            category: "crypto", language: "en", note: "Editorial cripto + Web3" },
];

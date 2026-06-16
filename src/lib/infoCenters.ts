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
  /** Código ISO do idioma da fonte (só exibição, ex.: "en", "de", "hr"). */
  language: string;
  /** Nota editorial: por que essa fonte foi escolhida */
  note?: string;
  /** RSS/Atom feed URL — quando presente, o card mostra as 3 manchetes mais
   *  recentes via /api/rss. Fontes premium (Reuters/WSJ/Bloomberg/FT) não têm
   *  feed público estável, então ficam só como link clicável. */
  rss?: string;
  /** Fonte de COMUNIDADE (não-oficial): portais/blogs mantidos pela comunidade,
   *  não por governo. As manchetes entram marcadas como "a confirmar" e passam
   *  pela checagem cruzada da Friday (ver italianismo-checagem.ts). */
  community?: boolean;
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
      { name: "USCIS · News Releases", url: "https://www.uscis.gov/newsroom/news-releases", category: "legal", language: "en", note: "Órgão oficial de imigração dos EUA (USCIS/DHS) · vistos, cidadania e política migratória", rss: "https://www.uscis.gov/rss-news/1/1125" },
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
      { name: "IRCC · Imigração Canadá", url: "https://www.canada.ca/en/immigration-refugees-citizenship/news.html", category: "legal", language: "en", note: "Departamento federal de imigração do Canadá (IRCC) · vistos, residência e cidadania", rss: "https://api.io.canada.ca/io-server/gc/news/en/v2?dept=departmentofcitizenshipandimmigration&sort=publishedDate&orderBy=desc&format=atom" },
      { name: "Reuters · Americas", url: "https://www.reuters.com/world/americas", category: "news",    language: "en" },
      { name: "Financial Post",     url: "https://financialpost.com/",             category: "finance", language: "en", note: "Principal jornal financeiro CA", rss: "https://financialpost.com/feed/" },
      { name: "BNN Bloomberg CA",   url: "https://www.bnnbloomberg.ca/",           category: "finance", language: "en", note: "Bloomberg vertical Canadá" },
    ],
  },
  {
    countryCode: "br",
    countryName: "Brasil",
    flag: "🇧🇷",
    sources: [
      { name: "Polícia Federal · Imigração", url: "https://www.gov.br/pf/pt-br/assuntos/imigracao", category: "legal", language: "pt", note: "Autoridade oficial de imigração e fronteiras do Brasil (PF) · controle migratório e operações", rss: "https://www.gov.br/pf/@@search_rss" },
      { name: "Reuters · Americas", url: "https://www.reuters.com/world/americas", category: "news",    language: "en" },
      { name: "Valor Econômico",    url: "https://valor.globo.com/",               category: "finance", language: "pt", note: "Maior jornal financeiro do Brasil" },
      { name: "G1 Economia",        url: "https://g1.globo.com/economia/",         category: "news",    language: "pt", note: "Cobertura ampla em português", rss: "http://g1.globo.com/dynamo/economia/rss2.xml" },
    ],
  },

  // ===== EUROPA =====
  {
    countryCode: "uk",
    countryName: "Reino Unido",
    flag: "🇬🇧",
    sources: [
      { name: "UK Visas & Immigration", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration", category: "legal", language: "en", note: "Órgão oficial de vistos do Reino Unido (Home Office) · vistos, ETA e regras de imigração", rss: "https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=uk-visas-and-immigration" },
      { name: "Reuters · UK",         url: "https://www.reuters.com/world/uk",  category: "news",    language: "en" },
      { name: "Financial Times",      url: "https://www.ft.com/",               category: "finance", language: "en", note: "Referência mundial em finanças/política UK" },
      { name: "BBC Business",         url: "https://www.bbc.com/business",      category: "news",    language: "en", note: "Cobertura ampla, acesso livre", rss: "https://feeds.bbci.co.uk/news/business/rss.xml" },
    ],
  },
  {
    countryCode: "de",
    countryName: "Alemanha",
    flag: "🇩🇪",
    sources: [
      { name: "BAMF · Migração e Refugiados", url: "https://www.bamf.de/", category: "legal", language: "de", note: "Autoridade federal alemã de migração e refugiados (BAMF) · asilo, integração e dados oficiais", rss: "https://www.bamf.de/SiteGlobals/Functions/RSS/DE/Feed/RSSNewsfeed_Meldungen.xml" },
      { name: "Reuters · Europa",   url: "https://www.reuters.com/world/europe",          category: "news",    language: "en" },
      { name: "Handelsblatt",       url: "https://www.handelsblatt.com/",                 category: "finance", language: "de", note: "Principal financial daily alemão", rss: "https://www.handelsblatt.com/contentexport/feed/schlagzeilen" },
      { name: "DW · Business",      url: "https://www.dw.com/en/business/s-1431",         category: "news",    language: "en", note: "Deutsche Welle em inglês", rss: "https://rss.dw.com/xml/rss-en-bus" },
    ],
  },
  {
    countryCode: "fr",
    countryName: "França",
    flag: "🇫🇷",
    sources: [
      { name: "France Info · Immigration", url: "https://www.franceinfo.fr/societe/immigration.html", category: "news", language: "fr", note: "Editoria de imigração da rádio pública francesa (Radio France)", rss: "https://www.franceinfo.fr/societe/immigration.rss" },
      { name: "Le Monde · Immigration",  url: "https://www.lemonde.fr/immigration-et-diversite/", category: "news", language: "fr", note: "Editoria de imigração e diversidade do Le Monde", rss: "https://www.lemonde.fr/immigration-et-diversite/rss_full.xml" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Les Échos",             url: "https://www.lesechos.fr/",                 category: "finance", language: "fr", note: "Principal jornal econômico francês", rss: "https://syndication.lesechos.fr/rss/rss_economie.xml" },
      { name: "Le Figaro · Économie",  url: "https://www.lefigaro.fr/economie",         category: "finance", language: "fr", rss: "https://www.lefigaro.fr/rss/figaro_economie.xml" },
    ],
  },
  {
    countryCode: "es",
    countryName: "Espanha",
    flag: "🇪🇸",
    sources: [
      { name: "BOE · Disposiciones generales", url: "https://www.boe.es/rss/", category: "legal", language: "es", note: "Diário oficial do Estado espanhol · publica toda a normativa de extranjería e migração", rss: "https://www.boe.es/rss/boe.php?s=1" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Expansión",             url: "https://www.expansion.com/",               category: "finance", language: "es", note: "Principal jornal financeiro espanhol", rss: "https://e00-expansion.uecdn.es/rss/portada.xml" },
      { name: "El País · Economía",    url: "https://elpais.com/economia/",             category: "news",    language: "es", rss: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/economia/portada" },
    ],
  },
  {
    countryCode: "pt",
    countryName: "Portugal",
    flag: "🇵🇹",
    sources: [
      { name: "Diário da República · Série I", url: "https://diariodarepublica.pt/dr/home", category: "legal", language: "pt", note: "Diário oficial português · leis e decretos, incluindo a Lei de Estrangeiros gerida pela AIMA", rss: "https://files.diariodarepublica.pt/rss/serie1-html.xml" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Jornal de Negócios",    url: "https://www.jornaldenegocios.pt/",         category: "finance", language: "pt", note: "Principal jornal financeiro PT", rss: "https://www.jornaldenegocios.pt/rss/empresas" },
      { name: "Público · Economia",    url: "https://www.publico.pt/economia",          category: "news",    language: "pt", rss: "https://feeds.feedburner.com/PublicoEconomia" },
    ],
  },
  {
    countryCode: "it",
    countryName: "Itália",
    flag: "🇮🇹",
    sources: [
      { name: "Gazzetta Ufficiale · Serie Generale", url: "https://www.gazzettaufficiale.it/", category: "legal", language: "it", note: "Diário oficial do Estado italiano · leis e decreti, incluindo os decreti flussi de imigração", rss: "https://www.gazzettaufficiale.it/rss/SG" },
      { name: "Italianismo · Cidadania", url: "https://italianismo.com.br/category/cidadania/", category: "news", language: "pt", community: true, note: "Portal brasileiro da comunidade ítalo-descendente (NÃO-oficial). Notícias de cidadania entram marcadas como 'a confirmar' e passam pela checagem cruzada da Friday em fontes oficiais.", rss: "https://italianismo.com.br/category/cidadania/feed/" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Il Sole 24 Ore",        url: "https://www.ilsole24ore.com/",             category: "finance", language: "it", note: "Principal jornal econômico italiano", rss: "https://www.ilsole24ore.com/rss/economia.xml" },
      { name: "ANSA · Economia",       url: "https://www.ansa.it/sito/notizie/economia/economia.shtml", category: "news", language: "it", rss: "https://www.ansa.it/sito/notizie/economia/economia_rss.xml" },
      { name: "Corte Costituzionale · Sentenze", url: "https://www.cortecostituzionale.it/", category: "legal", language: "it", note: "Corte Constitucional italiana · decisões sobre a reforma do jure sanguinis (ex. sentença 63/2026). Fonte oficial primária descoberta via Italianismo." },
      { name: "Questione Giustizia",   url: "https://www.questionegiustizia.it/",       category: "legal", language: "it", note: "Revista jurídica da magistratura italiana · análise técnica das decisões de cidadania. Fonte de referência confiável citada pelo Italianismo." },
    ],
  },
  {
    countryCode: "ch",
    countryName: "Suíça",
    flag: "🇨🇭",
    sources: [
      { name: "SEM · Secretaria de Migração", url: "https://www.sem.admin.ch/sem/en/home/sem/aktuell.html", category: "legal", language: "en", note: "Secretaria de Estado para Migração da Suíça (SEM) · asilo, residência e acesso ao trabalho", rss: "https://d-nsbc-p.admin.ch/NSBSubscriber/feeds/rss?lang=en&org-nr=405&kind=M" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Neue Zürcher Zeitung",  url: "https://www.nzz.ch/wirtschaft",            category: "finance", language: "de", note: "Principal financial CH", rss: "https://www.nzz.ch/wirtschaft.rss" },
      { name: "SwissInfo · Business",  url: "https://www.swissinfo.ch/eng/business",    category: "news",    language: "en", rss: "https://www.swissinfo.ch/eng/business/rss" },
    ],
  },
  {
    countryCode: "ie",
    countryName: "Irlanda",
    flag: "🇮🇪",
    sources: [
      { name: "Irish Immigration Service", url: "https://www.irishimmigration.ie/news/", category: "legal", language: "en", note: "Serviço de imigração do Ministério da Justiça da Irlanda · vistos, residência e cidadania", rss: "https://www.irishimmigration.ie/feed/" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Irish Times · Business", url: "https://www.irishtimes.com/business/",    category: "finance", language: "en", note: "Cobertura macroeconômica IE", rss: "https://www.irishtimes.com/cmlink/news-1.1319192" },
      { name: "RTÉ Business",          url: "https://www.rte.ie/news/business/",        category: "news",    language: "en", rss: "https://www.rte.ie/news/rss/business-headlines.xml" },
    ],
  },
  {
    countryCode: "nl",
    countryName: "Holanda",
    flag: "🇳🇱",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "NL Times · Business",   url: "https://nltimes.nl/business",              category: "finance", language: "en", note: "Notícias holandesas em inglês", rss: "https://nltimes.nl/feed" },
      { name: "DutchNews",             url: "https://www.dutchnews.nl/",                category: "news",    language: "en", rss: "https://www.dutchnews.nl/feed/" },
    ],
  },
  {
    countryCode: "pl",
    countryName: "Polônia",
    flag: "🇵🇱",
    sources: [
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Notes from Poland",     url: "https://notesfrompoland.com/",             category: "news",    language: "en", note: "Notícias PL em inglês com viés econômico", rss: "https://notesfrompoland.com/feed/" },
      { name: "Polska Agencja Prasowa", url: "https://www.pap.pl/en",                   category: "news",    language: "en", note: "Agência oficial de notícias PL", rss: "https://www.pap.pl/en/rss.xml" },
    ],
  },
  {
    countryCode: "dk",
    countryName: "Dinamarca",
    flag: "🇩🇰",
    sources: [
      { name: "Ny i Danmark · SIRI",   url: "https://www.nyidanmark.dk/",               category: "legal",   language: "en", note: "Serviço de Imigração dinamarquês (SIRI / Udlændingestyrelsen)" },
      { name: "DR Nyheder · Indland",  url: "https://www.dr.dk/nyheder/indland",        category: "news",    language: "da", note: "Emissora pública dinamarquesa (DR)", rss: "https://www.dr.dk/nyheder/service/feeds/indland" },
      { name: "DR Nyheder · Politik",  url: "https://www.dr.dk/nyheder/politik",        category: "news",    language: "da", rss: "https://www.dr.dk/nyheder/service/feeds/politik" },
      { name: "Reuters · Europa",      url: "https://www.reuters.com/world/europe",     category: "news",    language: "en" },
      { name: "Børsen",                url: "https://borsen.dk/",                       category: "finance", language: "en", note: "Principal financial daily DK (paywall)" },
      { name: "The Local Denmark",     url: "https://www.thelocal.dk/",                 category: "news",    language: "en", note: "Notícias DK em inglês pra expats", rss: "https://feeds.thelocal.com/rss/dk" },
    ],
  },

  // ===== ÁSIA-PACÍFICO =====
  {
    countryCode: "jp",
    countryName: "Japão",
    flag: "🇯🇵",
    sources: [
      { name: "NHK World · Japão", url: "https://www3.nhk.or.jp/nhkworld/en/news/", category: "news", language: "en", note: "Emissora pública oficial do Japão (NHK) em inglês · fonte estatal pois a ISA/MOJ não publica RSS", rss: "https://www3.nhk.or.jp/nhkworld/data/en/news/backstory/rss.xml" },
      { name: "Nikkei Asia",           url: "https://asia.nikkei.com/",                 category: "finance", language: "en", note: "Cobertura financeira asiática · referência institucional", rss: "https://asia.nikkei.com/rss/feed/nar" },
      { name: "Japan Times · Business", url: "https://www.japantimes.co.jp/business/",  category: "news",    language: "en", rss: "https://www.japantimes.co.jp/feed/topstories/" },
      { name: "Reuters · Ásia-Pacífico", url: "https://www.reuters.com/world/asia-pacific", category: "news", language: "en" },
    ],
  },
  {
    countryCode: "sg",
    countryName: "Singapura",
    flag: "🇸🇬",
    sources: [
      { name: "Channel News Asia · Business", url: "https://www.channelnewsasia.com/business", category: "finance", language: "en", note: "Cobertura fintech ASEAN", rss: "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=6936" },
      { name: "Straits Times · Business",     url: "https://www.straitstimes.com/business",    category: "news",    language: "en", rss: "https://www.straitstimes.com/news/business/rss.xml" },
      { name: "Reuters · Ásia-Pacífico",      url: "https://www.reuters.com/world/asia-pacific", category: "news",  language: "en" },
    ],
  },
  {
    countryCode: "cn",
    countryName: "China",
    flag: "🇨🇳",
    sources: [
      { name: "Global Times · China", url: "https://www.globaltimes.cn/", category: "news", language: "en", note: "Jornal estatal chinês em inglês (People's Daily) · fonte oficial pois a NIA não publica RSS", rss: "https://www.globaltimes.cn/rss/outbrain.xml" },
      { name: "SCMP · Business",       url: "https://www.scmp.com/business",            category: "finance", language: "en", note: "South China Morning Post — referência ocidental em CN", rss: "https://www.scmp.com/rss/91/feed" },
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
      { name: "SMH · Business",              url: "https://www.smh.com.au/business",     category: "news",    language: "en", note: "Sydney Morning Herald", rss: "https://www.smh.com.au/rss/business.xml" },
      { name: "Reuters · Ásia-Pacífico",     url: "https://www.reuters.com/world/asia-pacific", category: "news", language: "en" },
    ],
  },
  {
    countryCode: "nz",
    countryName: "Nova Zelândia",
    flag: "🇳🇿",
    sources: [
      { name: "NZ Government · Beehive", url: "https://www.beehive.govt.nz/", category: "legal", language: "en", note: "Site oficial do governo da Nova Zelândia · comunicados ministeriais, incluindo imigração", rss: "https://www.beehive.govt.nz/rss.xml" },
      { name: "NZ Herald · Business",  url: "https://www.nzherald.co.nz/business/",     category: "finance", language: "en", note: "Principal jornal NZ" },
      { name: "Stuff · Business",      url: "https://www.stuff.co.nz/business",         category: "news",    language: "en", rss: "https://www.stuff.co.nz/rss" },
      { name: "Reuters · Ásia-Pacífico", url: "https://www.reuters.com/world/asia-pacific", category: "news", language: "en" },
    ],
  },

  // ===== ORIENTE MÉDIO =====
  {
    countryCode: "ae",
    countryName: "Emirados Árabes",
    flag: "🇦🇪",
    sources: [
      { name: "ICP · Identidade e Cidadania", url: "https://icp.gov.ae/en/media-en/news-reports/", category: "legal", language: "en", note: "Autoridade federal de identidade, cidadania e imigração dos Emirados (ICP). Site recusa acesso de datacenter, então fica como link oficial sem feed ao vivo" },
      { name: "Gulf News · Business",  url: "https://gulfnews.com/business",            category: "finance", language: "en", note: "Cobertura UAE/região do Golfo" },
      { name: "The National · Business", url: "https://www.thenationalnews.com/business/", category: "news", language: "en", note: "Diário oficial Abu Dhabi em inglês", rss: "https://www.thenationalnews.com/arc/outboundfeeds/rss/?outputType=xml" },
      { name: "Khaleej Times · Business", url: "https://www.khaleejtimes.com/business",  category: "news",    language: "en" },
    ],
  },

  // ===== EUROPA — DEMAIS PAÍSES (UE/EEE) · feeds oficiais + notícia verificados 2026-06-11 =====
  {
    countryCode: "at",
    countryName: "Áustria",
    flag: "🇦🇹",
    sources: [
      { name: "BMI · Ministério do Interior", url: "https://www.bmi.gv.at/", category: "legal", language: "de", note: "Ministério federal do Interior austríaco · imigração, asilo, residência", rss: "https://www.bmi.gv.at/rss/bmi_presse.xml" },
      { name: "BFA · Imigração e Asilo", url: "https://www.bfa.gv.at/", category: "legal", language: "de", note: "Bundesamt für Fremdenwesen und Asyl · autoridade de estrangeiros e asilo", rss: "https://www.bmi.gv.at/rss/bfa_presse.xml" },
      { name: "ORF · news.ORF.at", url: "https://orf.at/", category: "news", language: "de", note: "Emissora pública austríaca", rss: "https://rss.orf.at/news.xml" },
      { name: "Der Standard · Inland", url: "https://www.derstandard.at/inland", category: "news", language: "de", rss: "https://www.derstandard.at/rss/inland" },
    ],
  },
  {
    countryCode: "be",
    countryName: "Bélgica",
    flag: "🇧🇪",
    sources: [
      { name: "Belga News Agency", url: "https://www.belganewsagency.eu/", category: "news", language: "en", note: "Agência de notícias belga", rss: "https://www.belganewsagency.eu/feed" },
      { name: "VRT NWS", url: "https://www.vrt.be/vrtnws/nl/", category: "news", language: "nl", note: "Emissora pública flamenga", rss: "https://www.vrt.be/vrtnws/nl.rss.articles.xml" },
      { name: "La Libre Belgique", url: "https://www.lalibre.be/", category: "news", language: "fr", rss: "https://www.lalibre.be/arc/outboundfeeds/rss/?outputType=xml" },
      { name: "Office des Étrangers", url: "https://dofi.ibz.be/", category: "legal", language: "fr", note: "Autoridade de imigração belga (Immigration Office)" },
    ],
  },
  {
    countryCode: "bg",
    countryName: "Bulgária",
    flag: "🇧🇬",
    sources: [
      { name: "BTA · Agência Telegráfica Búlgara", url: "https://www.bta.bg/", category: "news", language: "bg", note: "Agência estatal de notícias da Bulgária", rss: "https://www.bta.bg/bg/rss/free" },
      { name: "The Sofia Globe", url: "https://sofiaglobe.com/", category: "news", language: "en", note: "Notícias da Bulgária em inglês", rss: "https://sofiaglobe.com/feed/" },
      { name: "Mediapool.bg", url: "https://www.mediapool.bg/", category: "news", language: "bg", rss: "https://www.mediapool.bg/rss" },
      { name: "Държавен вестник · Diário Oficial", url: "http://dv.parliament.bg/", category: "legal", language: "bg", note: "Gazeta oficial do Estado búlgaro" },
    ],
  },
  {
    countryCode: "cy",
    countryName: "Chipre",
    flag: "🇨🇾",
    sources: [
      { name: "Cyprus Mail · Immigration", url: "https://cyprus-mail.com/tag/immigration/", category: "news", language: "en", note: "Editoria de imigração do principal jornal cipriota em inglês", rss: "https://cyprus-mail.com/tag/immigration/feed/" },
      { name: "Cyprus Mail · Cyprus News", url: "https://cyprus-mail.com/category/news/cyprus/", category: "news", language: "en", rss: "https://cyprus-mail.com/category/news/cyprus/feed/" },
      { name: "Cyprus Mail", url: "https://cyprus-mail.com/", category: "news", language: "en", rss: "https://cyprus-mail.com/feed/" },
      { name: "Civil Registry & Migration Dept", url: "https://migration.moi.gov.cy/", category: "legal", language: "en", note: "Departamento de registo civil e migração de Chipre" },
    ],
  },
  {
    countryCode: "hr",
    countryName: "Croácia",
    flag: "🇭🇷",
    sources: [
      { name: "Vlada RH · Vijesti", url: "https://vlada.gov.hr/", category: "legal", language: "hr", note: "Governo da Croácia · comunicados oficiais", rss: "https://vlada.gov.hr/rss/18210" },
      { name: "Ured za zakonodavstvo", url: "https://zakonodavstvo.gov.hr/", category: "legal", language: "hr", note: "Atos e regulamentos oficiais", rss: "https://zakonodavstvo.gov.hr/rss.aspx?ID=8" },
      { name: "HRT · Vijesti", url: "https://vijesti.hrt.hr/", category: "news", language: "hr", note: "Rádio-televisão pública croata", rss: "https://feed.hrt.hr/vijesti/hrvatska.xml" },
      { name: "Index.hr · Vijesti", url: "https://www.index.hr/", category: "news", language: "hr", rss: "https://www.index.hr/rss/vijesti-hrvatska" },
    ],
  },
  {
    countryCode: "sk",
    countryName: "Eslováquia",
    flag: "🇸🇰",
    sources: [
      { name: "Slovensko.sk · Oznamy", url: "https://www.slovensko.sk/", category: "legal", language: "sk", note: "Portal oficial do governo eslovaco · avisos", rss: "https://www.slovensko.sk/sk/rss/oznamy" },
      { name: "TASR / TERAZ.sk", url: "https://www.teraz.sk/", category: "news", language: "sk", note: "Agência de notícias eslovaca (estatal)", rss: "https://www.teraz.sk/rss/slovensko.rss" },
      { name: "Denník N", url: "https://dennikn.sk/", category: "news", language: "sk", rss: "https://dennikn.sk/feed/" },
    ],
  },
  {
    countryCode: "si",
    countryName: "Eslovênia",
    flag: "🇸🇮",
    sources: [
      { name: "GOV.SI · Notícias do Governo", url: "https://www.gov.si/en/news/", category: "legal", language: "en", note: "Governo da Eslovênia · imigração e estrangeiros", rss: "https://www.gov.si/en/news/rss/" },
      { name: "RTV Slovenija · Slovenija", url: "https://www.rtvslo.si/", category: "news", language: "sl", note: "Rádio-televisão pública eslovena", rss: "https://www.rtvslo.si/feeds/01.xml" },
      { name: "RTV Slovenija · Todas", url: "https://www.rtvslo.si/", category: "news", language: "sl", rss: "https://www.rtvslo.si/feeds/00.xml" },
    ],
  },
  {
    countryCode: "ee",
    countryName: "Estônia",
    flag: "🇪🇪",
    sources: [
      { name: "ERR News (EN)", url: "https://news.err.ee/", category: "news", language: "en", note: "Emissora pública estoniana em inglês", rss: "https://news.err.ee/rss" },
      { name: "Riigikogu · Press releases", url: "https://www.riigikogu.ee/en/", category: "legal", language: "en", note: "Parlamento da Estônia", rss: "http://feeds.feedburner.com/RiigikoguPressReleases" },
      { name: "ERR Uudised", url: "https://www.err.ee/", category: "news", language: "et", rss: "https://www.err.ee/rss" },
      { name: "Politsei- ja Piirivalveamet", url: "https://www.politsei.ee/en/", category: "legal", language: "en", note: "Polícia e Guarda de Fronteiras (autoridade de imigração)" },
    ],
  },
  {
    countryCode: "fi",
    countryName: "Finlândia",
    flag: "🇫🇮",
    sources: [
      { name: "Migri · Comunicados", url: "https://migri.fi/en/", category: "legal", language: "en", note: "Serviço Finlandês de Imigração (Migri)", rss: "https://migri.fi/en/press-releases?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_h86npU2Dqv2l&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getRSS&p_p_cacheability=cacheLevelPage" },
      { name: "Valtioneuvosto · Ministérios", url: "https://valtioneuvosto.fi/en/", category: "legal", language: "en", note: "Comunicados de todos os ministérios finlandeses", rss: "https://valtioneuvosto.fi/en/staattiset-feedit-en/-/asset_publisher/LOmkEPY4nk2s/rss" },
      { name: "Yle News (EN)", url: "https://yle.fi/news", category: "news", language: "en", note: "Emissora pública finlandesa", rss: "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS" },
    ],
  },
  {
    countryCode: "gr",
    countryName: "Grécia",
    flag: "🇬🇷",
    sources: [
      { name: "Ministério da Imigração e Asilo", url: "https://migration.gov.gr/en/", category: "legal", language: "en", note: "Autoridade grega de imigração e asilo", rss: "https://migration.gov.gr/en/feed/" },
      { name: "Ethniko Typografeio · Diário Oficial", url: "https://www.et.gr/", category: "legal", language: "el", note: "Imprensa Nacional / gazeta oficial grega (FEK)", rss: "https://www.et.gr/feed" },
      { name: "Greek Reporter", url: "https://greekreporter.com/", category: "news", language: "en", rss: "https://greekreporter.com/feed/" },
    ],
  },
  {
    countryCode: "hu",
    countryName: "Hungria",
    flag: "🇭🇺",
    sources: [
      { name: "HVG · Itthon", url: "https://hvg.hu/", category: "news", language: "hu", note: "Portal de notícias húngaro", rss: "https://hvg.hu/rss/itthon" },
      { name: "Telex.hu", url: "https://telex.hu/", category: "news", language: "hu", note: "Portal independente húngaro", rss: "https://telex.hu/rss" },
      { name: "444.hu", url: "https://444.hu/", category: "news", language: "hu", rss: "https://444.hu/feed" },
      { name: "Magyar Közlöny · Diário Oficial", url: "https://magyarkozlony.hu/", category: "legal", language: "hu", note: "Gazeta oficial da Hungria" },
    ],
  },
  {
    countryCode: "lv",
    countryName: "Letônia",
    flag: "🇱🇻",
    sources: [
      { name: "Ministério do Interior (IeM)", url: "https://www.iem.gov.lv/en", category: "legal", language: "en", note: "Ministério do Interior letão · OCMA/PMLP (cidadania e migração)", rss: "https://www.iem.gov.lv/en/rss/articles" },
      { name: "Latvijas Vēstnesis · Diário Oficial", url: "https://www.vestnesis.lv/", category: "legal", language: "lv", note: "Gazeta oficial da Letônia", rss: "https://www.vestnesis.lv/feed/JL" },
      { name: "LSM · Public Broadcasting (EN)", url: "https://eng.lsm.lv/", category: "news", language: "en", note: "Radiodifusão pública da Letônia", rss: "https://eng.lsm.lv/rss/?lang=en" },
    ],
  },
  {
    countryCode: "lt",
    countryName: "Lituânia",
    flag: "🇱🇹",
    sources: [
      { name: "LRT", url: "https://www.lrt.lt/", category: "news", language: "lt", note: "Rádio e Televisão Nacional da Lituânia", rss: "https://www.lrt.lt/?rss" },
      { name: "15min.lt", url: "https://www.15min.lt/", category: "news", language: "lt", rss: "https://www.15min.lt/rss" },
      { name: "Migracijos departamentas", url: "https://migracija.lrv.lt/en/", category: "legal", language: "en", note: "Departamento de Migração da Lituânia" },
    ],
  },
  {
    countryCode: "lu",
    countryName: "Luxemburgo",
    flag: "🇱🇺",
    sources: [
      { name: "Le gouvernement luxembourgeois", url: "https://gouvernement.lu/en.html", category: "legal", language: "en", note: "Governo de Luxemburgo · todas as atualidades", rss: "https://gouvernement.lu/en/actualites/toutes_actualites.rss" },
      { name: "Affaires intérieures (DGIM)", url: "https://maint.gouvernement.lu/", category: "legal", language: "fr", note: "Direção de Imigração (Ministère des Affaires intérieures)", rss: "https://maint.gouvernement.lu/fr/actualites.rss" },
      { name: "Luxembourg Times", url: "https://www.luxtimes.lu/", category: "news", language: "en", rss: "https://www.luxtimes.lu/rss" },
    ],
  },
  {
    countryCode: "mt",
    countryName: "Malta",
    flag: "🇲🇹",
    sources: [
      { name: "Office of the Prime Minister · Press", url: "https://opm.gov.mt/en/", category: "legal", language: "en", note: "Gabinete do PM de Malta · comunicados oficiais", rss: "https://opm.gov.mt/en/feed/" },
      { name: "TVMnews.mt (PBS)", url: "https://tvmnews.mt/en/", category: "news", language: "en", note: "Emissora pública maltesa", rss: "https://tvmnews.mt/en/feed/" },
      { name: "Newsbook.com.mt", url: "https://newsbook.com.mt/en/", category: "news", language: "en", rss: "https://newsbook.com.mt/en/feed/" },
    ],
  },
  {
    countryCode: "ro",
    countryName: "Romênia",
    flag: "🇷🇴",
    sources: [
      { name: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/en/", category: "legal", language: "en", note: "Autoridade romena de imigração", rss: "https://igi.mai.gov.ro/en/category/press-releases-news/feed/" },
      { name: "Monitorul Oficial al României", url: "https://monitoruloficial.ro/", category: "legal", language: "ro", note: "Gazeta oficial da Romênia", rss: "https://monitoruloficial.ro/rss/" },
      { name: "Digi24 · Externe", url: "https://www.digi24.ro/", category: "news", language: "ro", rss: "https://www.digi24.ro/rss/externe" },
      { name: "HotNews.ro", url: "https://hotnews.ro/", category: "news", language: "ro", rss: "https://hotnews.ro/feed" },
    ],
  },
  {
    countryCode: "se",
    countryName: "Suécia",
    flag: "🇸🇪",
    sources: [
      { name: "Migrationsverket · News (EN)", url: "https://www.migrationsverket.se/en/", category: "legal", language: "en", note: "Agência Sueca de Migração", rss: "https://www.migrationsverket.se/rss_en" },
      { name: "Sveriges Radio · Ekot", url: "https://sverigesradio.se/ekot", category: "news", language: "sv", note: "Rádio pública sueca", rss: "https://api.sr.se/api/rss/program/83" },
      { name: "SVT Nyheter", url: "https://www.svt.se/nyheter/", category: "news", language: "sv", note: "Televisão pública sueca", rss: "https://www.svt.se/nyheter/rss.xml" },
    ],
  },
  {
    countryCode: "cz",
    countryName: "Tchéquia",
    flag: "🇨🇿",
    sources: [
      { name: "Vláda ČR · Governo (EN)", url: "https://vlada.gov.cz/en/", category: "legal", language: "en", note: "Governo da Tchéquia · comunicados", rss: "https://vlada.gov.cz/en/rss.xml" },
      { name: "ČTK / České noviny", url: "https://www.ceskenoviny.cz/", category: "news", language: "cs", note: "Agência de notícias tcheca (estatal)", rss: "https://www.ceskenoviny.cz/sluzby/rss/zpravy.php" },
      { name: "ČT24 · Česká televize", url: "https://ct24.ceskatelevize.cz/", category: "news", language: "cs", note: "Televisão pública tcheca", rss: "https://ct24.ceskatelevize.cz/rss/hlavni-zpravy" },
    ],
  },
];

/** Fontes globais de cripto/derivativos — agregadas separadamente (não-por-país) */
export const GLOBAL_CRYPTO_SOURCES: InfoSource[] = [
  { name: "Coinglass",     url: "https://www.coinglass.com/",     category: "crypto", language: "en", note: "Derivativos cripto · liquidations · open interest em tempo real" },
  { name: "CoinDesk",      url: "https://www.coindesk.com/",      category: "crypto", language: "en", note: "Maior portal editorial cripto", rss: "https://www.coindesk.com/arc/outboundfeeds/rss/" },
  { name: "The Block",     url: "https://www.theblock.co/",       category: "crypto", language: "en", note: "Research institucional cripto" },
  { name: "Cointelegraph", url: "https://cointelegraph.com/",     category: "crypto", language: "en", note: "Cobertura ampla cripto + regulação", rss: "https://cointelegraph.com/rss" },
  { name: "Decrypt",       url: "https://decrypt.co/",            category: "crypto", language: "en", note: "Editorial cripto + Web3", rss: "https://decrypt.co/feed" },
];

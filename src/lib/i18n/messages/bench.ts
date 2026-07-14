// Dicionário do CountryBenchmark (namespace "bench").
// Formato: chave -> string. Placeholders {n} trocados em runtime pelo t().
const dict = {
  pt: {
    "bench.title": "Benchmark do País",

    // Rótulos de status
    "bench.status.crit": "Crítico",
    "bench.status.warn": "Atenção",
    "bench.status.stable": "Estável",

    // Estado do cron / última mudança no header
    "bench.cronError": "cron c/ erro",
    "bench.lastChange": "última mudança",
    "bench.noBulletin": "sem boletim monitorado",

    // Tempo relativo (idade da última mudança)
    "bench.age.none": "—",
    "bench.age.today": "hoje",
    "bench.age.yesterday": "ontem",
    "bench.age.days": "há {n}d",
    "bench.age.weeks": "há {n}sem",
    "bench.age.months": "há {n}mês",
    "bench.age.year": "+1 ano",

    // Imagem
    "bench.img.landmark": "ponto turístico",
    "bench.img.clickToZoom": "Clique pra ampliar",
    "bench.img.zoom": "Ampliar imagem",

    // Stats
    "bench.stat.status": "Status",
    "bench.stat.lastChange": "Última mudança",
    "bench.new": "NOVO",

    // Panorama
    "bench.panorama": "Panorama",

    // Filtro por seção (um botão por assunto · "Todos" empilha tudo)
    "bench.sec.aria": "Filtrar o Benchmark por assunto",
    "bench.sec.all": "Todos",
    "bench.sec.live": "Ao vivo",
    "bench.sec.labor": "Mercado de trabalho",
    "bench.sec.tips": "Dicas práticas",
    "bench.sec.story": "Notícia completa",
    "bench.sec.community": "Comunidade",
    "bench.sec.blog": "Blog",
    "bench.sec.sources": "Fontes",
    "bench.sec.milestones": "Marcos",

    // Marcos editoriais
    "bench.milestones": "Marcos editoriais ({n})",
    "bench.curated": "CURADO PELA EQUIPE",
    "bench.milestones.caption":
      "Contexto histórico selecionado pela equipe WiseHub. Para mudanças em tempo real, veja Atividade ao vivo acima.",
  },
  en: {
    "bench.title": "Country Benchmark",

    // Status labels
    "bench.status.crit": "Critical",
    "bench.status.warn": "Watch",
    "bench.status.stable": "Stable",

    // Cron state / last change in header
    "bench.cronError": "cron error",
    "bench.lastChange": "last change",
    "bench.noBulletin": "no bulletin monitored",

    // Relative time (age of last change)
    "bench.age.none": "—",
    "bench.age.today": "today",
    "bench.age.yesterday": "yesterday",
    "bench.age.days": "{n}d ago",
    "bench.age.weeks": "{n}w ago",
    "bench.age.months": "{n}mo ago",
    "bench.age.year": "1+ year",

    // Image
    "bench.img.landmark": "landmark",
    "bench.img.clickToZoom": "Click to zoom",
    "bench.img.zoom": "Zoom image",

    // Stats
    "bench.stat.status": "Status",
    "bench.stat.lastChange": "Last change",
    "bench.new": "NEW",

    // Panorama
    "bench.panorama": "Overview",

    // Section filter (one button per topic · "All" stacks everything)
    "bench.sec.aria": "Filter the Benchmark by topic",
    "bench.sec.all": "All",
    "bench.sec.live": "Live",
    "bench.sec.labor": "Labor market",
    "bench.sec.tips": "Practical tips",
    "bench.sec.story": "Full story",
    "bench.sec.community": "Community",
    "bench.sec.blog": "Blog",
    "bench.sec.sources": "Sources",
    "bench.sec.milestones": "Milestones",

    // Editorial milestones
    "bench.milestones": "Editorial milestones ({n})",
    "bench.curated": "CURATED BY THE TEAM",
    "bench.milestones.caption":
      "Historical context curated by the WiseHub team. For real-time changes, see Live activity above.",
  },
} as const;

export default dict;

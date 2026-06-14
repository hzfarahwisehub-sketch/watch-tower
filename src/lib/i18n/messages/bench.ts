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

    // Editorial milestones
    "bench.milestones": "Editorial milestones ({n})",
    "bench.curated": "CURATED BY THE TEAM",
    "bench.milestones.caption":
      "Historical context curated by the WiseHub team. For real-time changes, see Live activity above.",
  },
} as const;

export default dict;

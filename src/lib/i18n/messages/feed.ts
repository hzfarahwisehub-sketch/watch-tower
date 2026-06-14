// Dicionário de strings da UI do componente Feed (PT-BR + EN).
// Namespace "feed.*". Carregado no índice central de mensagens.

const dict = {
  pt: {
    "feed.rel.now": "agora",
    "feed.rel.min": "há {n}min",
    "feed.rel.hour": "há {n}h",
    "feed.rel.day": "há {n}d",
    "feed.rel.week": "há {n}sem",
    "feed.dash": "—",
    "feed.heading": "📰 Feed de Mudanças por País",
    "feed.badge.auto": "● AUTO",
    "feed.lastScan.label": "Última varredura: {value}",
    "feed.lastScan.loading": "carregando…",
    "feed.loading": "Carregando mudanças do cron diário…",
    "feed.empty.line1": "Nenhuma mudança detectada nas últimas varreduras.",
    "feed.empty.line2": "O cron roda diariamente às 11h UTC (08h BRT).",
    "feed.card.title": "Boletim oficial atualizado",
    "feed.card.body": "Mudança detectada pelo cron diário no site oficial. Clique pra ver os detalhes do país ou abrir a fonte.",
    "feed.card.openSource": "↗ Abrir fonte oficial",
  },
  en: {
    "feed.rel.now": "now",
    "feed.rel.min": "{n}min ago",
    "feed.rel.hour": "{n}h ago",
    "feed.rel.day": "{n}d ago",
    "feed.rel.week": "{n}w ago",
    "feed.dash": "—",
    "feed.heading": "📰 Country Change Feed",
    "feed.badge.auto": "● AUTO",
    "feed.lastScan.label": "Last scan: {value}",
    "feed.lastScan.loading": "loading…",
    "feed.loading": "Loading changes from the daily cron…",
    "feed.empty.line1": "No changes detected in the latest scans.",
    "feed.empty.line2": "The cron runs daily at 11h UTC (08h BRT).",
    "feed.card.title": "Official bulletin updated",
    "feed.card.body": "Change detected by the daily cron on the official site. Click to see the country details or open the source.",
    "feed.card.openSource": "↗ Open official source",
  },
} as const;

export default dict;

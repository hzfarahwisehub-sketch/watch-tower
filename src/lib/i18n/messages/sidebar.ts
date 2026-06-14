// Dicionário do componente CountriesSidebar (namespace "sidebar.").
// Mesmo modelo dos demais módulos: chave -> string, placeholders {nome}.
// Montado no índice MESSAGES depois — este arquivo só declara as chaves.

const dict = {
  pt: {
    "sidebar.title": "🏳 Países Monitorados",
    "sidebar.count.all": "{n} países",
    "sidebar.count.some": "{n} de {total}",
    "sidebar.search.placeholder": "🔍  Buscar país...",
    "sidebar.search.clear": "Limpar busca",
    "sidebar.filter.all": "Todos",
    "sidebar.filter.crit": "Críticos",
    "sidebar.filter.warn": "Atenção",
    "sidebar.filter.stable": "Estáveis",
    "sidebar.sort.label": "↕ Ordenar:",
    "sidebar.sort.active": "Mais ativos",
    "sidebar.sort.name": "Alfabético",
    "sidebar.sort.changes": "Mudanças ↓",
    "sidebar.empty": "Nenhum país encontrado",
    "sidebar.clear": "↺ Limpar filtros",
    "sidebar.changes.title": "{n} mudança(s) no período",
  },
  en: {
    "sidebar.title": "🏳 Monitored Countries",
    "sidebar.count.all": "{n} countries",
    "sidebar.count.some": "{n} of {total}",
    "sidebar.search.placeholder": "🔍  Search country...",
    "sidebar.search.clear": "Clear search",
    "sidebar.filter.all": "All",
    "sidebar.filter.crit": "Critical",
    "sidebar.filter.warn": "Watch",
    "sidebar.filter.stable": "Stable",
    "sidebar.sort.label": "↕ Sort:",
    "sidebar.sort.active": "Most active",
    "sidebar.sort.name": "Alphabetical",
    "sidebar.sort.changes": "Changes ↓",
    "sidebar.empty": "No country found",
    "sidebar.clear": "↺ Clear filters",
    "sidebar.changes.title": "{n} change(s) in the period",
  },
} as const;

export default dict;

// Dicionário i18n do componente MapZone (namespace "map.").
// Mesmo formato dos outros módulos: chaves IDÊNTICAS em pt e en.
// Placeholders {name}/{n}/{authority} trocados em runtime pelo t().
const dict = {
  pt: {
    "map.title": "Mapa Global 3D",
    "map.style.button.title": "Trocar o estilo do globo",
    "map.style.google.label": "Google",
    "map.style.satellite.label": "Satélite HD",
    "map.style.relief.label": "Relevo",
    "map.style.dark.label": "Escuro",
    "map.marker.title": "{name} · {n} mudança(s) · {authority}",
  },
  en: {
    "map.title": "3D Global Map",
    "map.style.button.title": "Change the globe style",
    "map.style.google.label": "Google",
    "map.style.satellite.label": "Satellite HD",
    "map.style.relief.label": "Relief",
    "map.style.dark.label": "Dark",
    "map.marker.title": "{name} · {n} change(s) · {authority}",
  },
} as const;

export default dict;

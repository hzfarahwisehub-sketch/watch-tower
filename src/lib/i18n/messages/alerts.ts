// Strings da UI do AlertsBanner (PT-BR + EN). Namespace "alerts.".
// {country} = nome do país (dado, não traduzido) — renderizado na mesma posição.
const dict = {
  pt: {
    "alerts.recent": "Alertas Recentes",
    "alerts.bulletinUpdated": "{country} · boletim oficial atualizado",
  },
  en: {
    "alerts.recent": "Recent Alerts",
    "alerts.bulletinUpdated": "{country} · official bulletin updated",
  },
} as const;
export default dict;

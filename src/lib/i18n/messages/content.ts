// Dicionário do componente ContentRequests (aba 🎬 Conteúdo).
// Namespace "content.*". Montado no índice central (messages.ts).

const dict = {
  pt: {
    "content.title": "🎬 Pedidos de Conteúdo",
    "content.subtitle": "Abertos automaticamente pela Watch Tower. A Friday escreve e marca como feito.",
    "content.loading": "Carregando…",
    "content.empty.loggedOut": "Entre para ver os pedidos de conteúdo.",
    "content.empty.none": "Nenhum pedido de conteúdo pendente. O gerador diário de roteiros roda todo dia às 09:00 UTC.",
    "content.expand": "Ver tudo",
    "content.collapse": "Recolher",
    "content.action.done": "✓ Feito",
    "content.action.reopen": "Reabrir",
    "content.showDone": "Mostrar concluídos ({n})",
    "content.age.min": "há {n}min",
    "content.age.hour": "há {n}h",
    "content.age.day": "há {n}d",
  },
  en: {
    "content.title": "🎬 Content Requests",
    "content.subtitle": "Opened automatically by Watch Tower. Friday writes them and marks them done.",
    "content.loading": "Loading…",
    "content.empty.loggedOut": "Sign in to see content requests.",
    "content.empty.none": "No pending content requests. The daily script generator runs every day at 09:00 UTC.",
    "content.expand": "Show all",
    "content.collapse": "Collapse",
    "content.action.done": "✓ Done",
    "content.action.reopen": "Reopen",
    "content.showDone": "Show completed ({n})",
    "content.age.min": "{n}min ago",
    "content.age.hour": "{n}h ago",
    "content.age.day": "{n}d ago",
  },
} as const;
export default dict;

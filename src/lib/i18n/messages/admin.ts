// Dicionário do namespace "admin" — página de Allowlist (quem pode entrar).
// Mesmo modelo dos demais módulos: chave -> string, prefixo "admin.".
// Placeholders {n} / {email} / {name} são trocados em runtime pelo t().

const dict = {
  pt: {
    // ---- chrome geral ----
    "admin.signout": "Sair",
    "admin.signin": "Fazer login",
    "admin.loading": "Carregando…",

    // ---- título ----
    "admin.title": "🔐 Allowlist · Quem pode entrar",
    "admin.subtitle":
      "Lista de e-mails autorizados a fazer login no painel. Outros e-mails são silenciosamente rejeitados.",

    // ---- estado de erro ----
    "admin.error.heading": "Não foi possível carregar",
    "admin.err.unauth": "Não autenticado.",
    "admin.err.unauth.login": "Não autenticado. Faça login.",
    "admin.err.forbidden": "Acesso restrito a admins.",
    "admin.err.http": "Erro HTTP {n}",
    "admin.err.http.short": "HTTP {n}",

    // ---- formulário de adicionar ----
    "admin.form.heading": "+ Adicionar e-mail",
    "admin.form.notes.placeholder": "Anotação opcional (ex: 'sócio 30%')",
    "admin.form.saving": "Salvando…",
    "admin.form.add": "Adicionar",

    // ---- papéis ----
    "admin.role.editor": "Editor",
    "admin.role.admin": "Admin",

    // ---- lista ----
    "admin.list.count.one": "{n} e-mail autorizado",
    "admin.list.count.many": "{n} e-mails autorizados",
    "admin.badge.you": "você",
    "admin.added": "adicionado",
    "admin.added.by": "· por {name}",

    // ---- remover ----
    "admin.confirm.remove": "Remover {email} da allowlist?",
    "admin.remove": "Remover",
    "admin.remove.title": "Remover",
    "admin.remove.self.title": "Não pode remover você mesmo",

    // ---- ajuda ----
    "admin.help.heading": "Como funciona",
    "admin.help.body.1":
      "Quem está aqui pode fazer login via magic link. Quem não está, ao tentar logar, recebe a tela de “link enviado”, mas o link ",
    "admin.help.body.em": "nunca",
    "admin.help.body.2":
      " é enviado (proteção pra não vazar quem está/não está na lista).",
  },
  en: {
    // ---- chrome geral ----
    "admin.signout": "Sign out",
    "admin.signin": "Sign in",
    "admin.loading": "Loading…",

    // ---- título ----
    "admin.title": "🔐 Allowlist · Who can sign in",
    "admin.subtitle":
      "List of e-mails allowed to sign in to the panel. Any other e-mail is silently rejected.",

    // ---- estado de erro ----
    "admin.error.heading": "Couldn’t load",
    "admin.err.unauth": "Not authenticated.",
    "admin.err.unauth.login": "Not authenticated. Please sign in.",
    "admin.err.forbidden": "Restricted to admins.",
    "admin.err.http": "HTTP error {n}",
    "admin.err.http.short": "HTTP {n}",

    // ---- formulário de adicionar ----
    "admin.form.heading": "+ Add e-mail",
    "admin.form.notes.placeholder": "Optional note (e.g. '30% partner')",
    "admin.form.saving": "Saving…",
    "admin.form.add": "Add",

    // ---- papéis ----
    "admin.role.editor": "Editor",
    "admin.role.admin": "Admin",

    // ---- lista ----
    "admin.list.count.one": "{n} authorized e-mail",
    "admin.list.count.many": "{n} authorized e-mails",
    "admin.badge.you": "you",
    "admin.added": "added",
    "admin.added.by": "· by {name}",

    // ---- remover ----
    "admin.confirm.remove": "Remove {email} from the allowlist?",
    "admin.remove": "Remove",
    "admin.remove.title": "Remove",
    "admin.remove.self.title": "You can’t remove yourself",

    // ---- ajuda ----
    "admin.help.heading": "How it works",
    "admin.help.body.1":
      "Anyone here can sign in via magic link. Anyone who isn’t, when trying to sign in, sees the “link sent” screen, but the link is ",
    "admin.help.body.em": "never",
    "admin.help.body.2":
      " sent (a safeguard so the list of who is / isn’t on it never leaks).",
  },
} as const;

export default dict;

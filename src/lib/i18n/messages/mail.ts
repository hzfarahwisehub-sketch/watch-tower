// Dicionário do namespace "mail" (Inbox Fase 3: card + viewer + contas
// pessoais). Mesmo modelo dos outros módulos: chave -> string, com
// placeholders {nome} trocados em runtime. Chaves de pt e en idênticas.

const dict = {
  pt: {
    // ---- card ----
    "mail.title": "📧 Inbox",
    "mail.total": "{n} não lidos",
    "mail.sync": "↻ Sync",
    "mail.synced": "Inbox sincronizado · {live} caixas ao vivo",
    "mail.loading": "Conectando nas caixas…",
    "mail.signin": "Entre pra ver as caixas de e-mail",
    "mail.error": "Não deu pra carregar o status das caixas",
    "mail.shared.header": "WiseHub",
    "mail.personal.header": "Minhas contas",
    "mail.personal.add": "+ conta",
    "mail.personal.empty": "Nenhuma conta pessoal conectada · adicione a sua",
    "mail.personal.dbdown": "Contas pessoais indisponíveis agora (banco fora do ar)",
    "mail.personal.delete": "Remover conta",
    "mail.personal.delete.confirm":
      "Remover esta conta do Watch Tower? (a caixa de e-mail em si não é apagada)",
    "mail.personal.deleted": "Conta removida",
    "mail.state.live.empty": "Caixa em dia",
    "mail.state.pending": "aguardando credencial",
    "mail.state.pending.hint":
      "O servidor de e-mail recusou a senha desta caixa. Assim que a senha combinada for aplicada no cPanel, ela conecta sozinha.",
    "mail.state.off": "sem senha no servidor",
    "mail.state.off.hint": "Falta configurar a senha desta caixa no servidor.",
    "mail.state.error": "indisponível",
    "mail.state.error.hint":
      "Falha temporária de conexão com o servidor de e-mail. Tenta de novo em instantes.",
    "mail.noSubject": "(sem assunto)",
    "mail.row.webmail": "Abrir no webmail",

    // ---- formulário de conta pessoal ----
    "mail.add.title": "Conectar conta pessoal",
    "mail.add.desc":
      "Só você enxerga esta conta. A senha fica criptografada no servidor e nunca aparece pra ninguém.",
    "mail.add.email": "E-mail",
    "mail.add.password": "Senha",
    "mail.add.host": "Servidor IMAP (opcional)",
    "mail.add.hostHint":
      "Detectado automaticamente pra Gmail, Outlook, Yahoo, iCloud e @wisehubnow.com",
    "mail.add.gmailHint":
      "Gmail exige senha de app: Conta Google → Segurança → Verificação em 2 etapas → Senhas de app.",
    "mail.add.save": "Conectar",
    "mail.add.saving": "Testando login…",
    "mail.add.cancel": "Cancelar",
    "mail.add.success": "Conta conectada ✓",
    "mail.add.err.auth_failed":
      "O servidor recusou o login (e-mail ou senha). No Gmail, use uma senha de app.",
    "mail.add.err.connect_failed": "Não deu pra conectar no servidor IMAP.",
    "mail.add.err.host_required": "Informe o servidor IMAP deste provedor.",
    "mail.add.err.host_invalid": "Servidor IMAP inválido.",
    "mail.add.err.limit_reached": "Limite de contas pessoais atingido.",
    "mail.add.err.crypto_off": "Cofre de senhas não configurado no servidor.",
    "mail.add.err.db_unavailable": "Banco indisponível agora. Tenta mais tarde.",
    "mail.add.err.generic": "Não deu pra salvar a conta (erro {n}).",

    // ---- viewer ----
    "mail.viewer.close": "Fechar",
    "mail.viewer.back": "← Voltar",
    "mail.viewer.select": "Selecione uma mensagem ao lado",
    "mail.viewer.loadingList": "Carregando mensagens…",
    "mail.viewer.loadingMsg": "Abrindo mensagem…",
    "mail.viewer.loadMore": "Carregar mais",
    "mail.viewer.empty": "Caixa vazia",
    "mail.viewer.total": "{n} mensagens · {u} não lidas",
    "mail.viewer.markUnread": "Marcar como não lida",
    "mail.viewer.markedUnread": "Marcada como não lida",
    "mail.viewer.images.load": "🖼 Carregar imagens",
    "mail.viewer.images.hint":
      "Imagens externas ficam bloqueadas por privacidade até você pedir.",
    "mail.viewer.attachments": "Anexos",
    "mail.viewer.att.tooLarge": "Anexo acima de 4MB · baixe pelo webmail",
    "mail.viewer.webmail": "↗ Webmail",
    "mail.viewer.error": "Não deu pra abrir esta mensagem",
    "mail.viewer.listError": "Não deu pra listar a caixa",
    "mail.viewer.oversized":
      "Mensagem grande demais pra abrir aqui com segurança (acima de 6MB). Abra pelo webmail pra ver o conteúdo e os anexos completos.",
  },
  en: {
    // ---- card ----
    "mail.title": "📧 Inbox",
    "mail.total": "{n} unread",
    "mail.sync": "↻ Sync",
    "mail.synced": "Inbox synced · {live} live mailboxes",
    "mail.loading": "Connecting to mailboxes…",
    "mail.signin": "Sign in to see the mailboxes",
    "mail.error": "Couldn't load mailbox status",
    "mail.shared.header": "WiseHub",
    "mail.personal.header": "My accounts",
    "mail.personal.add": "+ account",
    "mail.personal.empty": "No personal account connected · add yours",
    "mail.personal.dbdown": "Personal accounts unavailable right now (database down)",
    "mail.personal.delete": "Remove account",
    "mail.personal.delete.confirm":
      "Remove this account from Watch Tower? (the mailbox itself is not deleted)",
    "mail.personal.deleted": "Account removed",
    "mail.state.live.empty": "All caught up",
    "mail.state.pending": "waiting for credentials",
    "mail.state.pending.hint":
      "The mail server rejected this mailbox's password. Once the agreed password is applied in cPanel, it connects on its own.",
    "mail.state.off": "no password on server",
    "mail.state.off.hint": "This mailbox's password is not configured on the server yet.",
    "mail.state.error": "unavailable",
    "mail.state.error.hint":
      "Temporary connection failure with the mail server. Try again shortly.",
    "mail.noSubject": "(no subject)",
    "mail.row.webmail": "Open in webmail",

    // ---- personal account form ----
    "mail.add.title": "Connect personal account",
    "mail.add.desc":
      "Only you can see this account. The password is stored encrypted on the server and is never shown to anyone.",
    "mail.add.email": "Email",
    "mail.add.password": "Password",
    "mail.add.host": "IMAP server (optional)",
    "mail.add.hostHint":
      "Auto-detected for Gmail, Outlook, Yahoo, iCloud and @wisehubnow.com",
    "mail.add.gmailHint":
      "Gmail requires an app password: Google Account → Security → 2-Step Verification → App passwords.",
    "mail.add.save": "Connect",
    "mail.add.saving": "Testing login…",
    "mail.add.cancel": "Cancel",
    "mail.add.success": "Account connected ✓",
    "mail.add.err.auth_failed":
      "The server rejected the login (email or password). For Gmail, use an app password.",
    "mail.add.err.connect_failed": "Couldn't connect to the IMAP server.",
    "mail.add.err.host_required": "Enter this provider's IMAP server.",
    "mail.add.err.host_invalid": "Invalid IMAP server.",
    "mail.add.err.limit_reached": "Personal account limit reached.",
    "mail.add.err.crypto_off": "Password vault not configured on the server.",
    "mail.add.err.db_unavailable": "Database unavailable right now. Try later.",
    "mail.add.err.generic": "Couldn't save the account (error {n}).",

    // ---- viewer ----
    "mail.viewer.close": "Close",
    "mail.viewer.back": "← Back",
    "mail.viewer.select": "Select a message on the left",
    "mail.viewer.loadingList": "Loading messages…",
    "mail.viewer.loadingMsg": "Opening message…",
    "mail.viewer.loadMore": "Load more",
    "mail.viewer.empty": "Empty mailbox",
    "mail.viewer.total": "{n} messages · {u} unread",
    "mail.viewer.markUnread": "Mark as unread",
    "mail.viewer.markedUnread": "Marked as unread",
    "mail.viewer.images.load": "🖼 Load images",
    "mail.viewer.images.hint": "External images stay blocked for privacy until you ask.",
    "mail.viewer.attachments": "Attachments",
    "mail.viewer.att.tooLarge": "Attachment over 4MB · download via webmail",
    "mail.viewer.webmail": "↗ Webmail",
    "mail.viewer.error": "Couldn't open this message",
    "mail.viewer.listError": "Couldn't list the mailbox",
    "mail.viewer.oversized":
      "Message too large to open here safely (over 6MB). Open it in webmail to see the full content and attachments.",
  },
} as const;

export default dict;

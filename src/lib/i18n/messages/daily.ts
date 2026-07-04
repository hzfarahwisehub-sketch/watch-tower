// Dicionário do namespace "daily" (DailyGrid: Inbox, Ações Programadas, Agenda,
// Tarefas, Lembretes). Mesmo modelo dos outros módulos: chave -> string, com
// placeholders {nome} trocados em runtime. As chaves de pt e en são idênticas.

const dict = {
  pt: {
    // ---- comuns ----
    "daily.common.dash": "—",
    "daily.by": "por {author}",
    "daily.byInline": "· por {author}",
    "daily.remove": "Remover",
    "daily.when.today": "Hoje",
    "daily.when.tomorrow": "Amanhã",
    "daily.freq.daily": "Diário",

    // ---- escopo (toggle Equipe/Pessoal) ----
    "daily.scope.toggleTitle": "Alternar entre o quadro do time e o seu pessoal",
    "daily.scope.team": "Equipe",
    "daily.scope.personal": "Pessoal",

    // ---- badge mock ----
    "daily.mock.title": "Mock · integração real virá na próxima fase",
    "daily.mock.badge": "Pendente",

    // ---- undo ----
    "daily.undo.deleteTask": "apagar tarefa",
    "daily.undo.deleteAgenda": "apagar compromisso",

    // ---- Inbox: agora é real (namespace "mail", componente InboxCard) ----

    // ---- Google Agenda (importação Google → Watch Tower) ----
    "daily.gcal.title": "📆 Google Agenda",
    "daily.gcal.connect": "Conectar meu Google Agenda",
    "daily.gcal.connecting": "Abrindo o Google…",
    "daily.gcal.connected": "Google Agenda conectado ✓",
    "daily.gcal.cancelled": "Conexão cancelada",
    "daily.gcal.error": "Não deu pra conectar o Google Agenda",
    "daily.gcal.expired": "A conexão do Google expirou · reconecte",
    "daily.gcal.empty": "Sem eventos próximos no Google",
    "daily.gcal.disconnect": "Desconectar",
    "daily.gcal.disconnected": "Google Agenda desconectado",
    "daily.gcal.readonly": "só leitura",
    "daily.gcal.allday": "dia inteiro",
    "daily.gcal.loading": "Carregando eventos do Google…",

    // ---- Ações Programadas ----
    "daily.scheduled.title": "⚡ Ações Programadas",
    "daily.scheduled.total": "{n} ações",
    "daily.scheduled.action": "+ Ação",
    "daily.scheduled.pause": "Pausar",
    "daily.scheduled.activate": "Ativar",
    "daily.scheduled.add.prompt": "Nova ação programada (nome):",
    "daily.scheduled.add.confirm": "Deseja confirmar esta ação programada?",

    // ---- Agenda ----
    "daily.agenda.title": "📅 Agenda · Amanhã",
    "daily.agenda.total": "{n} compromissos",
    "daily.agenda.action": "+ Evento",
    "daily.agenda.dragReorder": "Arrastar para reordenar",
    "daily.agenda.drag": "Arrastar",
    "daily.agenda.remove": "Remover compromisso",
    "daily.agenda.removeNamed": "Remover {title}",
    "daily.agenda.add.titlePrompt": "Novo compromisso (título):",
    "daily.agenda.add.timePrompt": "Horário (HH:MM):",
    "daily.agenda.add.confirm": "Deseja confirmar este compromisso?",
    "daily.agenda.delete.confirm": "Deseja eliminar este compromisso?",

    // ---- Tarefas ----
    "daily.tasks.title": "✅ Tarefas do Dia",
    "daily.tasks.total": "{n} de {total} restantes",
    "daily.tasks.action": "+ Tarefa",
    "daily.tasks.add.prompt": "Nova tarefa:",
    "daily.tasks.add.confirm": "Deseja confirmar esta tarefa?",
    "daily.tasks.delete.confirm": "Deseja eliminar esta tarefa?",

    // ---- Lembretes ----
    "daily.reminders.title": "🔔 Lembretes",
    "daily.reminders.total": "{n} ativos",
    "daily.reminders.action": "+ Lembrete",
    "daily.reminders.add.prompt": "Novo lembrete:",
    "daily.reminders.add.confirm": "Deseja confirmar este lembrete?",

    // ---- envio pra Friday ----
    "daily.friday.reminderFrom": "lembrete de {author}",
    "daily.friday.sent": "Enviado pra Friday · ela te pergunta na próxima vez que você abrir",
    "daily.friday.signin": "Faça login pra enviar pra Friday",
    "daily.friday.error": "Erro {n} ao enviar pra Friday",
    "daily.friday.fail": "Falha ao enviar pra Friday",
    "daily.friday.btnTitle": "Enviar pra Friday executar · ela te pergunta na próxima vez que você abrir",
    "daily.friday.btnAria": "Enviar lembrete \"{text}\" pra Friday",
  },
  en: {
    // ---- comuns ----
    "daily.common.dash": "—",
    "daily.by": "by {author}",
    "daily.byInline": "· by {author}",
    "daily.remove": "Remove",
    "daily.when.today": "Today",
    "daily.when.tomorrow": "Tomorrow",
    "daily.freq.daily": "Daily",

    // ---- escopo (toggle Equipe/Pessoal) ----
    "daily.scope.toggleTitle": "Switch between the team board and your personal one",
    "daily.scope.team": "Team",
    "daily.scope.personal": "Personal",

    // ---- badge mock ----
    "daily.mock.title": "Mock · real integration coming next phase",
    "daily.mock.badge": "Pending",

    // ---- undo ----
    "daily.undo.deleteTask": "delete task",
    "daily.undo.deleteAgenda": "delete event",

    // ---- Inbox: agora é real (namespace "mail", componente InboxCard) ----

    // ---- Google Calendar (import Google → Watch Tower) ----
    "daily.gcal.title": "📆 Google Calendar",
    "daily.gcal.connect": "Connect my Google Calendar",
    "daily.gcal.connecting": "Opening Google…",
    "daily.gcal.connected": "Google Calendar connected ✓",
    "daily.gcal.cancelled": "Connection cancelled",
    "daily.gcal.error": "Couldn't connect Google Calendar",
    "daily.gcal.expired": "Google connection expired · reconnect",
    "daily.gcal.empty": "No upcoming Google events",
    "daily.gcal.disconnect": "Disconnect",
    "daily.gcal.disconnected": "Google Calendar disconnected",
    "daily.gcal.readonly": "read-only",
    "daily.gcal.allday": "all day",
    "daily.gcal.loading": "Loading Google events…",

    // ---- Ações Programadas ----
    "daily.scheduled.title": "⚡ Scheduled Actions",
    "daily.scheduled.total": "{n} actions",
    "daily.scheduled.action": "+ Action",
    "daily.scheduled.pause": "Pause",
    "daily.scheduled.activate": "Activate",
    "daily.scheduled.add.prompt": "New scheduled action (name):",
    "daily.scheduled.add.confirm": "Confirm this scheduled action?",

    // ---- Agenda ----
    "daily.agenda.title": "📅 Agenda · Tomorrow",
    "daily.agenda.total": "{n} events",
    "daily.agenda.action": "+ Event",
    "daily.agenda.dragReorder": "Drag to reorder",
    "daily.agenda.drag": "Drag",
    "daily.agenda.remove": "Remove event",
    "daily.agenda.removeNamed": "Remove {title}",
    "daily.agenda.add.titlePrompt": "New event (title):",
    "daily.agenda.add.timePrompt": "Time (HH:MM):",
    "daily.agenda.add.confirm": "Confirm this event?",
    "daily.agenda.delete.confirm": "Delete this event?",

    // ---- Tarefas ----
    "daily.tasks.title": "✅ Today's Tasks",
    "daily.tasks.total": "{n} of {total} remaining",
    "daily.tasks.action": "+ Task",
    "daily.tasks.add.prompt": "New task:",
    "daily.tasks.add.confirm": "Confirm this task?",
    "daily.tasks.delete.confirm": "Delete this task?",

    // ---- Lembretes ----
    "daily.reminders.title": "🔔 Reminders",
    "daily.reminders.total": "{n} active",
    "daily.reminders.action": "+ Reminder",
    "daily.reminders.add.prompt": "New reminder:",
    "daily.reminders.add.confirm": "Confirm this reminder?",

    // ---- envio pra Friday ----
    "daily.friday.reminderFrom": "reminder from {author}",
    "daily.friday.sent": "Sent to Friday · she'll ask you next time you open",
    "daily.friday.signin": "Sign in to send to Friday",
    "daily.friday.error": "Error {n} sending to Friday",
    "daily.friday.fail": "Failed to send to Friday",
    "daily.friday.btnTitle": "Send to Friday to run · she'll ask you next time you open",
    "daily.friday.btnAria": "Send reminder \"{text}\" to Friday",
  },
} as const;

export default dict;

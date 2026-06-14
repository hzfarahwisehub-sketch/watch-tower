// Dicionário i18n do componente PushToggle (namespace "push.").
// Mesmo modelo dos demais módulos: chave -> string, prefixadas com "push.".
const dict = {
  pt: {
    "push.notConfigured": "Push não configurado no servidor",
    "push.permissionDenied": "Permissão de notificação negada",
    "push.registerFailed": "Falha ao registrar no servidor",
    "push.enabled": "🔔 Notificações ativadas",
    "push.enableError": "Erro ao ativar notificações",
    "push.disabled": "Notificações desativadas",
    "push.testSent": "📨 Teste enviado pro seu device",
    "push.testNone": "Nenhum device ativo recebeu",
    "push.iosInstall":
      "🔔 No iPhone, instale o app primeiro (Compartilhar → Adicionar à Tela de Início) pra ativar notificações.",
    "push.disable": "🔕 Desativar notificações",
    "push.enable": "🔔 Ativar notificações",
    "push.test": "📨 Enviar notificação de teste",
  },
  en: {
    "push.notConfigured": "Push not configured on the server",
    "push.permissionDenied": "Notification permission denied",
    "push.registerFailed": "Failed to register on the server",
    "push.enabled": "🔔 Notifications enabled",
    "push.enableError": "Error enabling notifications",
    "push.disabled": "Notifications disabled",
    "push.testSent": "📨 Test sent to your device",
    "push.testNone": "No active device received it",
    "push.iosInstall":
      "🔔 On iPhone, install the app first (Share → Add to Home Screen) to enable notifications.",
    "push.disable": "🔕 Disable notifications",
    "push.enable": "🔔 Enable notifications",
    "push.test": "📨 Send test notification",
  },
} as const;

export default dict;

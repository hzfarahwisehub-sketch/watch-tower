const dict = {
  pt: {
    "authReset.loading": "Carregando…",

    // ── Modo confirmar (tem token) ──
    "authReset.confirm.title": "Nova senha",
    "authReset.confirm.subtitle": "Escolha uma senha nova pra sua conta.",
    "authReset.confirm.newPassword": "Nova senha (mín. 8)",
    "authReset.confirm.confirmPassword": "Confirmar senha",
    "authReset.confirm.submit": "Redefinir senha",
    "authReset.confirm.submitting": "Salvando…",

    // ── Confirmação de envio ──
    "authReset.sent.title": "Verifique seu e-mail",
    "authReset.sent.body": "Se este e-mail estiver autorizado e já tiver senha, enviamos um link pra redefinir. O link expira em 1 hora.",

    // ── Modo pedir reset (sem token) ──
    "authReset.request.title": "Esqueci a senha",
    "authReset.request.subtitle": "Digite seu e-mail e mandamos um link pra redefinir.",
    "authReset.request.emailLabel": "E-mail autorizado",
    "authReset.request.submit": "Enviar link de redefinição",
    "authReset.request.submitting": "Enviando…",

    "authReset.backToLogin": "← Voltar pro login",
    "authReset.footer": "© WiseHub US LLC · Watch Tower",

    // ── Erros ──
    "authReset.error.unexpected": "Erro inesperado. Tente novamente.",
    "authReset.error.minLength": "A senha precisa ter pelo menos 8 caracteres.",
    "authReset.error.mismatch": "As senhas não conferem.",
    "authReset.error.invalidLink": "Link inválido ou expirado. Peça um novo.",
  },
  en: {
    "authReset.loading": "Loading…",

    // ── Confirm mode (has token) ──
    "authReset.confirm.title": "New password",
    "authReset.confirm.subtitle": "Pick a new password for your account.",
    "authReset.confirm.newPassword": "New password (min. 8)",
    "authReset.confirm.confirmPassword": "Confirm password",
    "authReset.confirm.submit": "Reset password",
    "authReset.confirm.submitting": "Saving…",

    // ── Sent confirmation ──
    "authReset.sent.title": "Check your e-mail",
    "authReset.sent.body": "If this e-mail is authorized and already has a password, we sent a link to reset it. The link expires in 1 hour.",

    // ── Request reset mode (no token) ──
    "authReset.request.title": "Forgot password",
    "authReset.request.subtitle": "Enter your e-mail and we'll send a link to reset it.",
    "authReset.request.emailLabel": "Authorized e-mail",
    "authReset.request.submit": "Send reset link",
    "authReset.request.submitting": "Sending…",

    "authReset.backToLogin": "← Back to login",
    "authReset.footer": "© WiseHub US LLC · Watch Tower",

    // ── Errors ──
    "authReset.error.unexpected": "Unexpected error. Please try again.",
    "authReset.error.minLength": "Password must be at least 8 characters.",
    "authReset.error.mismatch": "Passwords don't match.",
    "authReset.error.invalidLink": "Invalid or expired link. Request a new one.",
  },
} as const;
export default dict;

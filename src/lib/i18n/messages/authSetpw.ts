// Strings da UI da tela "Primeiro acesso / definir senha" (/auth/set-password).
// Namespace: authSetpw.* — PT-BR + EN. Segue o modelo chave -> string do projeto.

const dict = {
  pt: {
    "authSetpw.heading": "Primeiro acesso",
    "authSetpw.subtitle": "Defina sua senha. Seu e-mail precisa estar na lista de autorizados.",
    "authSetpw.label.email": "E-mail autorizado",
    "authSetpw.placeholder.email": "voce@wisehubnow.com",
    "authSetpw.label.password": "Nova senha (mín. 8)",
    "authSetpw.label.confirm": "Confirmar senha",
    "authSetpw.submit.saving": "Salvando…",
    "authSetpw.submit.idle": "Definir senha e entrar",
    "authSetpw.haveAccount": "← Já tenho senha",
    "authSetpw.error.minlen": "A senha precisa ter pelo menos 8 caracteres.",
    "authSetpw.error.mismatch": "As senhas não conferem.",
    "authSetpw.error.exists": "Esta conta já tem senha. Use \"Esqueci a senha\".",
    "authSetpw.error.unauthorized": "Este e-mail não está autorizado.",
    "authSetpw.error.generic": "Não foi possível definir a senha. Tente de novo.",
    "authSetpw.error.unexpected": "Erro inesperado. Tente novamente.",
  },
  en: {
    "authSetpw.heading": "First access",
    "authSetpw.subtitle": "Set your password. Your e-mail must be on the authorized list.",
    "authSetpw.label.email": "Authorized e-mail",
    "authSetpw.placeholder.email": "you@wisehubnow.com",
    "authSetpw.label.password": "New password (min. 8)",
    "authSetpw.label.confirm": "Confirm password",
    "authSetpw.submit.saving": "Saving…",
    "authSetpw.submit.idle": "Set password and sign in",
    "authSetpw.haveAccount": "← I already have a password",
    "authSetpw.error.minlen": "The password must be at least 8 characters.",
    "authSetpw.error.mismatch": "The passwords don't match.",
    "authSetpw.error.exists": "This account already has a password. Use \"Forgot password\".",
    "authSetpw.error.unauthorized": "This e-mail is not authorized.",
    "authSetpw.error.generic": "Couldn't set the password. Try again.",
    "authSetpw.error.unexpected": "Unexpected error. Please try again.",
  },
} as const;

export default dict;

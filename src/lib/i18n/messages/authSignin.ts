// Dicionário i18n do namespace "authSignin" — tela de login (src/app/auth/signin/page.tsx).
// Formato: chave -> string, prefixada com "authSignin.". As chaves de pt e en
// são idênticas; o índice em messages.ts é montado depois.

const dict = {
  pt: {
    "authSignin.subtitle": "Monitoramento Global de Imigração",
    "authSignin.heading": "Acessar painel",
    "authSignin.subheading": "Entre com seu e-mail autorizado e sua senha.",
    "authSignin.label.email": "E-mail autorizado",
    "authSignin.label.password": "Senha",
    "authSignin.button.submit": "Entrar",
    "authSignin.button.submitting": "Entrando…",
    "authSignin.link.firstAccess": "Primeiro acesso",
    "authSignin.link.forgotPassword": "Esqueci a senha",
    "authSignin.magic.cta": "Não consegue entrar? Receber link por e-mail",
    "authSignin.magic.submitting": "Enviando…",
    "authSignin.restricted": "Acesso restrito · e-mails autorizados pela administração.",
    "authSignin.notice.reset": "Senha redefinida. Entre com a nova senha.",
    "authSignin.notice.registered": "Senha criada. Entre com ela abaixo.",
    "authSignin.error.credentials": "E-mail ou senha incorretos. Verifique e tente de novo.",
    "authSignin.error.unexpected": "Erro inesperado. Tente novamente.",
    "authSignin.error.emailRequired": "Digite o e-mail pra receber o link de acesso.",
    "authSignin.error.magicLink": "Não foi possível enviar o link. Verifique o e-mail.",
  },
  en: {
    "authSignin.subtitle": "Global Immigration Monitoring",
    "authSignin.heading": "Access panel",
    "authSignin.subheading": "Sign in with your authorized e-mail and password.",
    "authSignin.label.email": "Authorized e-mail",
    "authSignin.label.password": "Password",
    "authSignin.button.submit": "Sign in",
    "authSignin.button.submitting": "Signing in…",
    "authSignin.link.firstAccess": "First access",
    "authSignin.link.forgotPassword": "Forgot password",
    "authSignin.magic.cta": "Can't sign in? Get a link by e-mail",
    "authSignin.magic.submitting": "Sending…",
    "authSignin.restricted": "Restricted access · e-mails authorized by the administration.",
    "authSignin.notice.reset": "Password reset. Sign in with the new password.",
    "authSignin.notice.registered": "Password created. Sign in with it below.",
    "authSignin.error.credentials": "Incorrect e-mail or password. Check and try again.",
    "authSignin.error.unexpected": "Unexpected error. Please try again.",
    "authSignin.error.emailRequired": "Enter your e-mail to receive the access link.",
    "authSignin.error.magicLink": "Couldn't send the link. Check the e-mail.",
  },
} as const;

export default dict;

// Dicionário do namespace "authVerify" — página /auth/verify (confira seu e-mail).
// Mesmo formato dos demais módulos: chave -> string, prefixadas com "authVerify.".
// Placeholders {n} são trocados em runtime; aqui não há nenhum.

const dict = {
  pt: {
    "authVerify.heading": "Confira seu e-mail",
    "authVerify.body.line1": "Mandamos um link mágico de acesso pro seu e-mail.",
    "authVerify.body.line2": "Clica nele pra entrar no painel.",
    "authVerify.validity": "Link válido por 24 horas.",
    "authVerify.spam": "Não chegou? Veja a caixa de spam. Remetente:",
    "authVerify.back": "← Voltar",
  },
  en: {
    "authVerify.heading": "Check your e-mail",
    "authVerify.body.line1": "We sent a magic sign-in link to your e-mail.",
    "authVerify.body.line2": "Click it to enter the dashboard.",
    "authVerify.validity": "Link valid for 24 hours.",
    "authVerify.spam": "Didn't arrive? Check your spam folder. Sender:",
    "authVerify.back": "← Back",
  },
} as const;

export default dict;

// Dicionário i18n do componente AuthErrorPage (src/app/auth/error/page.tsx).
// Namespace "authError.*". Modelo: chave -> string, placeholders {nome} em runtime.

const dict = {
  pt: {
    "authError.configuration.title": "Erro de configuração",
    "authError.configuration.body":
      "O servidor de autenticação não está configurado corretamente. Avise o admin.",
    "authError.accessDenied.title": "Acesso negado",
    "authError.accessDenied.body":
      "Seu e-mail não está na lista de autorizados. Peça pra administração adicionar.",
    "authError.verification.title": "Link expirado",
    "authError.verification.body":
      "O link mágico expirou ou já foi usado. Solicita outro na tela de login.",
    "authError.default.title": "Erro inesperado",
    "authError.default.body": "Algo deu errado durante a autenticação. Tente novamente.",
    "authError.codeLabel": "código",
    "authError.retry": "Tentar novamente",
    "authError.loading": "Carregando…",
  },
  en: {
    "authError.configuration.title": "Configuration error",
    "authError.configuration.body":
      "The authentication server isn't set up correctly. Let the admin know.",
    "authError.accessDenied.title": "Access denied",
    "authError.accessDenied.body":
      "Your email isn't on the allowlist. Ask an admin to add it.",
    "authError.verification.title": "Link expired",
    "authError.verification.body":
      "The magic link expired or was already used. Request a new one on the sign-in screen.",
    "authError.default.title": "Unexpected error",
    "authError.default.body": "Something went wrong during authentication. Try again.",
    "authError.codeLabel": "code",
    "authError.retry": "Try again",
    "authError.loading": "Loading…",
  },
} as const;

export default dict;

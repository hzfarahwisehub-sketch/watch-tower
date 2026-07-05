// Controle de acesso à AGENDA do Watch Tower (client-safe, sem imports de servidor).
// Regra do Hammis (2026-07-02): a Agenda é dos SÓCIOS + Hammis, MENOS o Igor.
//
// Correção 2026-07-05: a versão anterior liberava só por papel "admin". Mas os
// sócios Lucas/Marcela/Jessé são papel "editor", então perdiam a Agenda (e até o
// Hammis sumia quando a sessão não vinha como admin). Agora a liberação é por
// E-MAIL dos 4 fundadores (independente do papel), OU qualquer admin — e sempre
// bloqueando a lista de exceção (Igor). Isso casa com a intenção: sócios veem,
// Igor não.
export const AGENDA_ALLOW_EMAILS = new Set<string>([
  "hzfarah.wisehub@gmail.com", // Hammis
  "lucasbin181@gmail.com", // Lucas
  "marcelanogueiracidadania@gmail.com", // Marcela
  "diver.wisehub@gmail.com", // Jessé
]);

export const AGENDA_DENY_EMAILS = new Set<string>([
  "igormncidadaniaitaliana@gmail.com", // Igor — braço direito, admin, sem agenda
]);

/**
 * Pode ver/editar a Agenda? Um dos 4 fundadores (por e-mail) OU qualquer admin,
 * desde que NÃO esteja na lista de exceção (Igor). Sem e-mail/deslogado = não.
 */
export function agendaAllowed(
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  if (!email) return false;
  const e = email.toLowerCase();
  if (AGENDA_DENY_EMAILS.has(e)) return false;
  return AGENDA_ALLOW_EMAILS.has(e) || role === "admin";
}

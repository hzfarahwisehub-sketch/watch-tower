// Controle de acesso à AGENDA do Watch Tower (client-safe, sem imports de servidor).
//
// Regra do Hammis (confirmada 2026-07-05): TODOS os que têm acesso são admin
// (Hammis, Lucas, Marcela, Jessé, Igor). A Agenda é da equipe; a ÚNICA exceção é
// o Igor, que tem acesso ao sistema mas NÃO enxerga a agenda de ninguém.
//
// Por isso a regra é uma LISTA DE EXCEÇÃO (deny-list), não por papel: qualquer
// pessoa LOGADA vê a Agenda, MENOS quem estiver na lista de bloqueio. Assim não
// depende do "role" da sessão (que pode vir desatualizado) — some a fonte de bug
// que escondia a Agenda até dos sócios/admins.
export const AGENDA_DENY_EMAILS = new Set<string>([
  "igormncidadaniaitaliana@gmail.com", // Igor — tem acesso, mas sem agenda
]);

/**
 * Pode ver/editar a Agenda? Qualquer usuário LOGADO (com e-mail), MENOS quem
 * estiver na lista de exceção. Deslogado = não. O parâmetro `role` é aceito por
 * compatibilidade, mas a decisão NÃO depende dele.
 */
export function agendaAllowed(
  _role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  if (!email) return false;
  return !AGENDA_DENY_EMAILS.has(email.toLowerCase());
}

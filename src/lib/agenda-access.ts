// Controle de acesso à AGENDA do Watch Tower (client-safe, sem imports de servidor).
// Regra do Hammis (2026-07-02): a Agenda é dos sócios + Hammis (papel "admin").
// O Igor é braço direito e foi promovido a admin (pra ter login permanente),
// MAS NÃO enxerga a agenda dos sócios. Por isso o bloqueio é por E-MAIL,
// independente do papel: precisa ser admin E estar fora da lista de exceção.
export const AGENDA_DENY_EMAILS = new Set<string>([
  "igormncidadaniaitaliana@gmail.com", // Igor — braço direito, admin, sem agenda
]);

/** Pode ver/editar a Agenda? Só admin que NÃO esteja na lista de exceção. */
export function agendaAllowed(
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  return role === "admin" && !!email && !AGENDA_DENY_EMAILS.has(email.toLowerCase());
}

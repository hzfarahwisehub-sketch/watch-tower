// Alerta o Hammis (conta master) quando QUALQUER alteração num item de
// EQUIPE for feita por outra pessoa que não ele — via push + e-mail.
// Regra do Hammis: "me alerta caso qualquer alteração seja feita que não
// venha de mim e de você (Friday) por aqui."
import { prisma } from "@/lib/prisma";
import { sendPushToUser } from "@/lib/push";
import { sendAlertEmail } from "@/lib/mailer";

/** Conta master que recebe os alertas e pode editar/apagar qualquer item de equipe. */
export const MASTER_EMAIL = "hzfarah.wisehub@gmail.com";

/** E-mails que recebem o alerta de nova solicitação. À prova de token: o aviso
 *  sai do servidor via Resend, independente de a Friday/Codex estarem online. */
export const ALERT_EMAILS = ["hzfarah.wisehub@gmail.com", "adm.wisehub@gmail.com"];

/** Os 4 sócios — recebem e-mail quando um item de EQUIPE (tarefa/agenda) é criado. */
export const SOCIO_EMAILS = [
  "hzfarah.wisehub@gmail.com",
  "lucasbin181@gmail.com",
  "marcelanogueiracidadania@gmail.com",
  "diver.wisehub@gmail.com",
];

export function isMaster(email: string | null | undefined): boolean {
  return !!email && email.toLowerCase() === MASTER_EMAIL;
}

type TeamChange = {
  actorEmail: string;
  actorName?: string | null;
  action: "criou" | "editou" | "concluiu" | "apagou";
  entity: string; // "tarefa" | "item de agenda" | "lembrete" | "ação programada" | "solicitação"
  title: string;
};

/**
 * Dispara o alerta. NÃO alerta quando quem fez a mudança é o próprio Hammis.
 * Nunca explode (best-effort) — uma falha de push/email não pode quebrar a
 * mutação que já aconteceu.
 */
export async function notifyTeamChange(c: TeamChange): Promise<void> {
  if (isMaster(c.actorEmail)) return; // mudança do próprio Hammis não gera alerta
  try {
    const who = c.actorName?.trim() || c.actorEmail;
    const msg = `${who} ${c.action} ${c.entity} de equipe: "${c.title}"`;

    const master = await prisma.user.findUnique({
      where: { email: MASTER_EMAIL },
      select: { id: true },
    });

    await Promise.allSettled([
      master?.id
        ? sendPushToUser(master.id, {
            title: "Watch Tower · quadro da equipe",
            body: msg,
            url: "/",
            tag: "team-change",
          })
        : Promise.resolve(),
      sendAlertEmail(MASTER_EMAIL, "Alteração no quadro da equipe", msg),
    ]);
  } catch (e) {
    console.warn("[team-notify] falhou (ignorado):", e);
  }
}

/**
 * Avisa o Hammis (push + e-mail) quando chega uma nova solicitação na caixa.
 * Sempre avisa, inclusive se foi o próprio Hammis (ele quer o registro), mas
 * só faz sentido alertar quando NÃO é ele — então mantemos a mesma regra.
 */
export async function notifyNewSuggestion(c: { actorEmail: string; actorName?: string | null; body: string }): Promise<void> {
  if (isMaster(c.actorEmail)) return;
  try {
    const who = c.actorName?.trim() || c.actorEmail;
    const preview = c.body.length > 140 ? c.body.slice(0, 140) + "…" : c.body;
    const msg = `${who} mandou uma solicitação: "${preview}"`;
    const master = await prisma.user.findUnique({ where: { email: MASTER_EMAIL }, select: { id: true } });
    await Promise.allSettled([
      master?.id
        ? sendPushToUser(master.id, { title: "Watch Tower · nova solicitação", body: msg, url: "/", tag: "suggestion" })
        : Promise.resolve(),
      sendAlertEmail(ALERT_EMAILS, "Nova solicitação na caixa", msg),
    ]);
  } catch (e) {
    console.warn("[team-notify] suggestion falhou (ignorado):", e);
  }
}

/**
 * Avisa TODOS os sócios (e-mail) quando um item de EQUIPE é criado (tarefa ou
 * compromisso de agenda). Diferente do notifyTeamChange (que só alerta o Hammis),
 * aqui os 4 sócios recebem, inclusive quem criou. Best-effort: nunca quebra a criação.
 */
export async function notifyItemCreated(c: { actorName: string; entity: string; title: string }): Promise<void> {
  try {
    const msg = `${c.actorName} criou ${c.entity} no quadro da equipe: "${c.title}"`;
    await sendAlertEmail(SOCIO_EMAILS, `Watch Tower · ${c.entity} criada na equipe`, msg);
  } catch (e) {
    console.warn("[team-notify] item-created falhou (ignorado):", e);
  }
}

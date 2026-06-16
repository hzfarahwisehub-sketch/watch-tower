/**
 * Avaliador mínimo de `cronExpr` pras Atividades Programadas do Watch Tower.
 *
 * A UI gera só presets via `freqToCron` (diário/semanal/mensal às 9h), mas o
 * campo aceita cron de 5 campos ("min hora dia mês dia-da-semana"). Aqui
 * inferimos o período e calculamos a PRÓXIMA ocorrência futura. Cobre os presets
 * de forma exata e faz best-effort pro resto (cai pra diário no horário do cron).
 *
 * Mantido sem dependência externa de propósito (cron-parser etc.): o escopo real
 * são 3 periodicidades. Se um dia precisar de cron arbitrário, trocar por lib.
 */

export type Period = "daily" | "weekly" | "monthly";

type CronFields = { min: number; hour: number; dom: string; dow: string };

/** Lê "min hora dia mês dia-da-semana". Campos ausentes viram default. */
function parseCron(expr: string): CronFields {
  const parts = (expr || "").trim().split(/\s+/);
  const min = Number(parts[0]);
  const hour = Number(parts[1]);
  return {
    min: Number.isFinite(min) ? min : 0,
    hour: Number.isFinite(hour) ? hour : 9,
    dom: parts[2] ?? "*",
    dow: parts[4] ?? "*",
  };
}

/** Período inferido: dia-do-mês fixo → mensal; dia-da-semana fixo → semanal; senão diário. */
export function inferPeriod(expr: string): Period {
  const { dom, dow } = parseCron(expr);
  if (dom !== "*" && Number.isFinite(Number(dom))) return "monthly";
  if (dow !== "*" && Number.isFinite(Number(dow))) return "weekly";
  return "daily";
}

/** Próxima ocorrência estritamente futura (> from) do cronExpr. */
export function nextRunFrom(expr: string, from: Date): Date {
  const { min, hour, dom, dow } = parseCron(expr);
  const period = inferPeriod(expr);
  const next = new Date(from);
  next.setSeconds(0, 0);
  next.setHours(hour, min, 0, 0);

  if (period === "monthly") {
    const day = Number(dom) || 1;
    next.setDate(day);
    if (next <= from) next.setMonth(next.getMonth() + 1, day);
  } else if (period === "weekly") {
    const targetDow = ((Number(dow) || 0) % 7 + 7) % 7; // 0=domingo
    const delta = (targetDow - next.getDay() + 7) % 7;
    next.setDate(next.getDate() + delta);
    if (next <= from) next.setDate(next.getDate() + 7);
  } else {
    if (next <= from) next.setDate(next.getDate() + 1);
  }
  return next;
}

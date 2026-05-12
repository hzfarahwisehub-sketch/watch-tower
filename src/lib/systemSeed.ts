import type { Task, Reminder } from "./types";

// Bump this version every time new system items are added below.
// Items are inserted only when stored version < current version.
// Once merged, user can edit/delete freely — seed will NOT reinsert
// on next load (because storedVersion is already at current).
export const SYSTEM_SEED_VERSION = 1;

// IDs >= 9000 are reserved for system-seeded items (to avoid collision
// with user-created IDs which start at 1 and increment).
export const SYSTEM_TASKS: Task[] = [
  {
    id: 9001,
    text: '📌 [Sistema] WiseRank Novo Plano em estudo — frase-gatilho pra retomar: "Friday, vamos retomar o novo plano da Wise Rank"',
    done: false,
  },
  {
    id: 9002,
    text: "📌 [Sistema] Refinar critérios EXATOS de cada um dos 15 títulos do WiseRank Novo Plano (pendência crítica)",
    done: false,
  },
  {
    id: 9003,
    text: "📌 [Sistema] Buscar advogado MLM/FTC compliance (Thompson Burton ou Spencer Reese) — orçamento US$ 13k-26k pra validação completa",
    done: false,
  },
];

export const SYSTEM_REMINDERS: Reminder[] = [
  {
    id: 9001,
    text: "🟡 Estudo WiseRank Novo Plano em pausa desde 12/mai — aguardando decisões finais (modelo convite, limite Embaixadores, vitalício)",
    when: "Quando retomar",
    crit: false,
  },
  {
    id: 9002,
    text: '🔴 Frase-gatilho de retomada: "Friday, vamos retomar o novo plano da Wise Rank" (NÃO confundir com frase antiga "vamos retomar o WiseRank")',
    when: "Crítico",
    crit: true,
  },
  {
    id: 9003,
    text: "📄 Doc canônico do estudo: wiki/Wise Rank - Novo Plano Estudo Maio 2026.md · 15 títulos novos, 4 trilhas, single-tier 8%, blindagem FTC",
    when: "Referência",
    crit: false,
  },
];

export interface SeedResult {
  tasks: Task[];
  reminders: Reminder[];
  newVersion: number;
  changed: boolean;
}

export function applySystemSeed(
  currentTasks: Task[],
  currentReminders: Reminder[],
  storedVersion: number,
): SeedResult {
  if (storedVersion >= SYSTEM_SEED_VERSION) {
    return {
      tasks: currentTasks,
      reminders: currentReminders,
      newVersion: storedVersion,
      changed: false,
    };
  }

  const existingTaskIds = new Set(currentTasks.map((t) => t.id));
  const tasksToAdd = SYSTEM_TASKS.filter((t) => !existingTaskIds.has(t.id));

  const existingReminderIds = new Set(currentReminders.map((r) => r.id));
  const remindersToAdd = SYSTEM_REMINDERS.filter((r) => !existingReminderIds.has(r.id));

  return {
    tasks: [...currentTasks, ...tasksToAdd],
    reminders: [...currentReminders, ...remindersToAdd],
    newVersion: SYSTEM_SEED_VERSION,
    changed: tasksToAdd.length > 0 || remindersToAdd.length > 0,
  };
}

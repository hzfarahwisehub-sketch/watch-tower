import type { Task, Reminder } from "./types";

// Bump this version every time new system items are added below.
// Items are inserted only when stored version < current version.
// Once merged, user can edit/delete freely — seed will NOT reinsert
// on next load (because storedVersion is already at current).
export const SYSTEM_SEED_VERSION = 2;

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
  // ─── Adicionados 2026-05-13 — Pesquisa Jurídica v2.2 WiseRank ───
  {
    id: 9004,
    text: "🔴 [WiseRank v2.2] Aprovar com sócios a Pesquisa Jurídica v2.2 (14 títulos · mini-comunidade no 4º · cure period · FTC disclosure)",
    done: false,
  },
  {
    id: 9005,
    text: "🟡 [WiseRank v2.2] Travar calibragem fina dos critérios qualitativos (retenção 60-85% · engajamento 40-60% · cadência de lives)",
    done: false,
  },
  {
    id: 9006,
    text: "🔴 [WiseRank v2.2] Redigir Affiliate Agreement v2 (cláusulas: não-multi-nível · cure period · tributária · privacidade · marca · FTC disclosure)",
    done: false,
  },
  {
    id: 9007,
    text: "🔴 [WiseRank v2.2] Definir Brand Guidelines & Communication Standards (linguagem regulada · separação visual · templates · hashtags FTC)",
    done: false,
  },
  {
    id: 9008,
    text: "🔴 [WiseRank v2.2] Desenhar IDS Público mensal em wiserank.com/transparencia/affiliates (mediana · percentis · auditor externo)",
    done: false,
  },
  {
    id: 9009,
    text: "🔴 [WiseRank v2.2] Escrever Regulamento da Mini-comunidade (código de conduta · moderação · cure period · apelação)",
    done: false,
  },
  {
    id: 9010,
    text: "🔴 [WiseRank v2.2] Estruturar Política Tributária por Jurisdição (1099 EUA · DIRPF BR · VAT UE/UK · ABN AU · T4A CA) — contador internacional",
    done: false,
  },
  {
    id: 9011,
    text: "🟡 [WiseRank v2.2] Definir Roadmap de Promoções Vigentes 12 meses (Q1 MASTER · Q2 viagem premium · Q3 edição limitada · Q4 casa destino)",
    done: false,
  },
  {
    id: 9012,
    text: "🔴 [WiseRank v2.2] Contratar validação jurídica externa pré go-live (Kevin Thompson EUA · counsel BR/UE/UK/AU/CA)",
    done: false,
  },
  {
    id: 9013,
    text: "🔴 [WiseRank v2.2] Escrever Política de Transição dos 25 ranks antigos → 14 novos (conversão · comunicação · 60-90d adaptação · compensação)",
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
  // ─── Adicionados 2026-05-13 — Pesquisa Jurídica v2.2 WiseRank ───
  {
    id: 9004,
    text: "📄 Pesquisa Jurídica v2.2 (13/mai) entregue em Downloads — PDF + DOCX prontos pra sócios. 14 títulos · Aventureiro→Embaixador Global Lenda · mini-comunidade no 4º",
    when: "Referência",
    crit: false,
  },
  {
    id: 9005,
    text: "🔴 9 entregáveis pendentes pra fechar plano 100% dentro da lei (cap. 11 da v2.2): Agreement · Brand Guidelines · IDS · Regulamento · Tributário · Roadmap · Counsel · Transição",
    when: "Pré go-live",
    crit: true,
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

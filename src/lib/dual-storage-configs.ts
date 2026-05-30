// Configs pros 4 hooks duais de DailyGrid. Mapeia entre tipos legacy
// (id: number, text, etc) e tipos do DB (id: cuid, title, priority, etc).
import type { Task, AgendaItem, Reminder, ScheduledAction } from "./types";
import type { DualStorageConfig } from "./dual-storage";
import { STORAGE } from "./storage";
import {
  DEFAULT_TASKS,
  DEFAULT_AGENDA,
  DEFAULT_REMINDERS,
  DEFAULT_SCHEDULED,
} from "./data";

// =============== TIPOS DO DB (Prisma) ===============
type DbTask = {
  id: string;
  title: string;
  done: boolean;
  priority: "low" | "normal" | "high" | "critical";
  dueDate: string | null;
  notes: string | null;
};
type DbAgenda = {
  id: string;
  title: string;
  description: string | null;
  scheduledAt: string;
  durationMin: number;
  location: string | null;
};
type DbReminder = {
  id: string;
  title: string;
  triggerAt: string;
  recurring: "daily" | "weekly" | "monthly" | null;
  done: boolean;
};
type DbScheduled = {
  id: string;
  name: string;
  cronExpr: string;
  active: boolean;
  lastRunAt: string | null;
  nextRunAt: string | null;
  payload: unknown;
};

// =============== TASKS ===============
export const tasksConfig: DualStorageConfig<Task, DbTask> = {
  storageKey: STORAGE.tasks,
  defaults: DEFAULT_TASKS,
  apiPath: "/api/tasks",
  apiArrayKey: "tasks",
  fromDb: (db, idMap) => ({
    id: idMap.register(db.id),
    text: db.title,
    done: db.done,
    author: (db as { author?: string }).author,
  }),
  toCreatePayload: (item) => ({
    title: item.text,
    priority: "normal",
  }),
  toPatchPayload: (patch) => {
    const out: Record<string, unknown> = {};
    if (patch.text !== undefined) out.title = patch.text;
    if (patch.done !== undefined) out.done = patch.done;
    return out;
  },
};

// =============== AGENDA ===============
// 'time' local é "HH:MM" sem data. Pra DB precisa ISO completo — usamos
// HOJE como base. Quando lemos do DB, exibimos apenas HH:MM (formatted).
function timeStrToIso(timeStr: string): string {
  const [h, m] = timeStr.split(":").map(Number);
  const d = new Date();
  d.setHours(h || 0, m || 0, 0, 0);
  return d.toISOString();
}
function isoToTimeStr(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "00:00";
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export const agendaConfig: DualStorageConfig<AgendaItem, DbAgenda> = {
  storageKey: STORAGE.agenda,
  defaults: DEFAULT_AGENDA,
  apiPath: "/api/agenda",
  apiArrayKey: "items",
  fromDb: (db, idMap) => ({
    id: idMap.register(db.id),
    time: isoToTimeStr(db.scheduledAt),
    title: db.title,
    where: db.location ?? "",
    author: (db as { author?: string }).author,
  }),
  toCreatePayload: (item) => ({
    title: item.title,
    scheduledAt: timeStrToIso(item.time),
    location: item.where || null,
    durationMin: 30,
  }),
  toPatchPayload: (patch) => {
    const out: Record<string, unknown> = {};
    if (patch.title !== undefined) out.title = patch.title;
    if (patch.time !== undefined) out.scheduledAt = timeStrToIso(patch.time);
    if (patch.where !== undefined) out.location = patch.where || null;
    return out;
  },
};

// =============== REMINDERS ===============
// 'when' local é texto livre tipo "Hoje", "Amanhã 14h". Pra DB usamos hoje+1h
// como default. Conversao pra ISO é grosseira mas funcional (Friday melhora
// depois com parser de natural language se necessario).
function whenToIso(when: string): string {
  // Heuristica simples; default amanha 23:59
  const d = new Date();
  const w = when.toLowerCase();
  if (w.includes("hoje")) {
    d.setHours(23, 59, 0, 0);
  } else if (w.includes("amanhã") || w.includes("amanha")) {
    d.setDate(d.getDate() + 1);
    d.setHours(9, 0, 0, 0);
  } else {
    d.setDate(d.getDate() + 1);
    d.setHours(23, 59, 0, 0);
  }
  return d.toISOString();
}
function isoToWhen(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const tmr = new Date(now);
  tmr.setDate(tmr.getDate() + 1);
  const isTomorrow = d.toDateString() === tmr.toDateString();
  if (sameDay) return `Hoje ${d.getHours()}h${String(d.getMinutes()).padStart(2, "0")}`;
  if (isTomorrow) return `Amanhã ${d.getHours()}h${String(d.getMinutes()).padStart(2, "0")}`;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

export const remindersConfig: DualStorageConfig<Reminder, DbReminder> = {
  storageKey: STORAGE.reminders,
  defaults: DEFAULT_REMINDERS,
  apiPath: "/api/reminders",
  apiArrayKey: "reminders",
  fromDb: (db, idMap) => ({
    id: idMap.register(db.id),
    text: db.title,
    when: isoToWhen(db.triggerAt),
    crit: false,
    author: (db as { author?: string }).author,
  }),
  toCreatePayload: (item) => ({
    title: item.text,
    triggerAt: whenToIso(item.when),
  }),
  toPatchPayload: (patch) => {
    const out: Record<string, unknown> = {};
    if (patch.text !== undefined) out.title = patch.text;
    if (patch.when !== undefined) out.triggerAt = whenToIso(patch.when);
    return out;
  },
};

// =============== SCHEDULED ACTIONS ===============
// Mapeamento mais perdido: legacy tem icon/frequency/nextRun (strings
// editoriais), DB tem cronExpr (cron syntax) + active. Convertemos best-effort.
function freqToCron(freq: string): string {
  const f = freq.toLowerCase();
  if (f.includes("diári") || f.includes("daily")) return "0 9 * * *"; // 9h
  if (f.includes("semanal") || f.includes("weekly")) return "0 9 * * 1"; // seg 9h
  if (f.includes("mensal") || f.includes("monthly")) return "0 9 1 * *"; // dia 1 9h
  return "0 9 * * *";
}
function cronToFreq(cron: string): string {
  if (cron === "0 9 * * *") return "Diário";
  if (cron === "0 9 * * 1") return "Semanal";
  if (cron === "0 9 1 * *") return "Mensal";
  return cron;
}

export const scheduledConfig: DualStorageConfig<ScheduledAction, DbScheduled> = {
  storageKey: STORAGE.scheduled,
  defaults: DEFAULT_SCHEDULED,
  apiPath: "/api/scheduled",
  apiArrayKey: "actions",
  fromDb: (db, idMap) => ({
    id: idMap.register(db.id),
    icon: "⚡",
    title: db.name,
    frequency: cronToFreq(db.cronExpr),
    nextRun: db.nextRunAt
      ? new Date(db.nextRunAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
      : "—",
    status: db.active ? "active" : "paused",
    author: (db as { author?: string }).author,
  }),
  toCreatePayload: (item) => ({
    name: item.title,
    cronExpr: freqToCron(item.frequency),
    active: item.status === "active",
  }),
  toPatchPayload: (patch) => {
    const out: Record<string, unknown> = {};
    if (patch.title !== undefined) out.name = patch.title;
    if (patch.frequency !== undefined) out.cronExpr = freqToCron(patch.frequency);
    if (patch.status !== undefined) out.active = patch.status === "active";
    return out;
  },
};

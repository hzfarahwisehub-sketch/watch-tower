"use client";
import { useCallback, useEffect, useState } from "react";

/**
 * Hooks fetch + cache + mutate pras 4 entidades da Fase 2.
 * Polling padrao 15s — pode ser override.
 */

type State<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; data: T }
  | { status: "error"; error: string };

function useResource<T>(
  url: string,
  extract: (json: unknown) => T,
  pollMs = 15_000,
) {
  const [state, setState] = useState<State<T>>({ status: "idle" });

  const load = useCallback(async () => {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.status === 401) {
        setState({ status: "error", error: "unauthenticated" });
        return;
      }
      if (!res.ok) {
        setState({ status: "error", error: `HTTP ${res.status}` });
        return;
      }
      const json = await res.json();
      setState({ status: "ok", data: extract(json) });
    } catch (err) {
      setState({ status: "error", error: String(err) });
    }
  }, [url, extract]);

  useEffect(() => {
    setState({ status: "loading" });
    load();
    if (pollMs > 0) {
      const id = setInterval(load, pollMs);
      return () => clearInterval(id);
    }
  }, [load, pollMs]);

  return { state, reload: load };
}

// =====================================================
// Tasks
// =====================================================

export type Task = {
  id: string;
  title: string;
  done: boolean;
  priority: "low" | "normal" | "high" | "critical";
  dueDate: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};

const extractTasks = (json: unknown): Task[] => (json as { tasks: Task[] }).tasks;

export function useTasks(pollMs?: number) {
  const r = useResource<Task[]>("/api/tasks", extractTasks, pollMs);
  return {
    ...r,
    create: async (payload: Partial<Task> & { title: string }) => {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) r.reload();
      return res;
    },
    update: async (id: string, patch: Partial<Task>) => {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (res.ok) r.reload();
      return res;
    },
    remove: async (id: string) => {
      const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
      if (res.ok) r.reload();
      return res;
    },
  };
}

// =====================================================
// Agenda
// =====================================================

export type AgendaItem = {
  id: string;
  title: string;
  description: string | null;
  scheduledAt: string;
  durationMin: number;
  location: string | null;
  createdAt: string;
  updatedAt: string;
};

const extractAgenda = (json: unknown): AgendaItem[] => (json as { items: AgendaItem[] }).items;

export function useAgenda(pollMs?: number) {
  const r = useResource<AgendaItem[]>("/api/agenda", extractAgenda, pollMs);
  return {
    ...r,
    create: async (payload: Partial<AgendaItem> & { title: string; scheduledAt: string }) => {
      const res = await fetch("/api/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) r.reload();
      return res;
    },
    update: async (id: string, patch: Partial<AgendaItem>) => {
      const res = await fetch(`/api/agenda/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (res.ok) r.reload();
      return res;
    },
    remove: async (id: string) => {
      const res = await fetch(`/api/agenda/${id}`, { method: "DELETE" });
      if (res.ok) r.reload();
      return res;
    },
  };
}

// =====================================================
// Reminders
// =====================================================

export type Reminder = {
  id: string;
  title: string;
  triggerAt: string;
  recurring: "daily" | "weekly" | "monthly" | null;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

const extractReminders = (json: unknown): Reminder[] => (json as { reminders: Reminder[] }).reminders;

export function useReminders(pollMs?: number) {
  const r = useResource<Reminder[]>("/api/reminders", extractReminders, pollMs);
  return {
    ...r,
    create: async (payload: Partial<Reminder> & { title: string; triggerAt: string }) => {
      const res = await fetch("/api/reminders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) r.reload();
      return res;
    },
    update: async (id: string, patch: Partial<Reminder>) => {
      const res = await fetch(`/api/reminders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (res.ok) r.reload();
      return res;
    },
    remove: async (id: string) => {
      const res = await fetch(`/api/reminders/${id}`, { method: "DELETE" });
      if (res.ok) r.reload();
      return res;
    },
  };
}

// =====================================================
// Scheduled Actions
// =====================================================

export type ScheduledAction = {
  id: string;
  name: string;
  cronExpr: string;
  active: boolean;
  lastRunAt: string | null;
  nextRunAt: string | null;
  payload: unknown;
  createdAt: string;
  updatedAt: string;
};

const extractScheduled = (json: unknown): ScheduledAction[] => (json as { actions: ScheduledAction[] }).actions;

export function useScheduled(pollMs?: number) {
  const r = useResource<ScheduledAction[]>("/api/scheduled", extractScheduled, pollMs);
  return {
    ...r,
    create: async (payload: Partial<ScheduledAction> & { name: string; cronExpr: string }) => {
      const res = await fetch("/api/scheduled", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) r.reload();
      return res;
    },
    update: async (id: string, patch: Partial<ScheduledAction>) => {
      const res = await fetch(`/api/scheduled/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (res.ok) r.reload();
      return res;
    },
    remove: async (id: string) => {
      const res = await fetch(`/api/scheduled/${id}`, { method: "DELETE" });
      if (res.ok) r.reload();
      return res;
    },
  };
}

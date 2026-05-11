export const STORAGE = {
  theme: "wt-theme",
  tasks: "wt-tasks",
  agenda: "wt-agenda",
  reminders: "wt-reminders",
  scheduled: "wt-scheduled",
} as const;

export function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function save<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota errors
  }
}

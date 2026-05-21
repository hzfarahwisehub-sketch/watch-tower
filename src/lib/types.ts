export type Status = "crit" | "warn" | "stable";
export type Theme = "dark" | "light";

export interface CountryEvent {
  title: string;
  desc: string;
  src: string;
  time: string;
}

export interface Country {
  code: string;
  name: string;
  coords: [number, number];
  status: Status;
  changes: number;
  authority: string;
  events: CountryEvent[];
  /** URL de imagem de destaque (landmark/cidade conhecida) — usada no CountryBenchmark */
  imageUrl?: string;
  /** Resumo executivo do país pra área de benchmark */
  summary?: string;
}

export interface InboxAccount {
  id: string;
  label: string;
  icon: string;
  cls?: "gmail";
  unread: number;
  last: string;
}

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface AgendaItem {
  id: number;
  time: string;
  title: string;
  where: string;
}

export interface Reminder {
  id: number;
  text: string;
  when: string;
  crit?: boolean;
}

export interface ScheduledAction {
  id: number;
  icon: string;
  title: string;
  frequency: string;
  nextRun: string;
  status: "active" | "paused";
}

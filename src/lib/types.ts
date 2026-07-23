export type Status = "crit" | "warn" | "stable";
export type Theme = "dark" | "light" | "wise";

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
  authority: string;
  events: CountryEvent[];
  /** URL de imagem de destaque (landmark/cidade conhecida) — usada no CountryBenchmark */
  imageUrl?: string;
  /** Resumo executivo do país pra área de benchmark */
  summary?: string;
}

export interface Task {
  id: number;
  text: string;
  done: boolean;
  /** Executor (só itens de equipe) — "Friday", "Hammis", etc. */
  author?: string;
}

export interface AgendaItem {
  id: number;
  /** Data local do compromisso, "YYYY-MM-DD". Vazio = hoje (compat legado). */
  date: string;
  time: string;
  title: string;
  where: string;
  author?: string;
  /** description CRU do banco: texto humano + sidecar de meta rica (Onda 4).
   *  Não é exibido direto; o form da Agenda decodifica com lib/calendar/rich. */
  description?: string;
  /** Duração em minutos (default 30) — Onda 4. */
  durationMin?: number;
}

export interface Reminder {
  id: number;
  text: string;
  when: string;
  crit?: boolean;
  author?: string;
  /** Lembrete único que já disparou o push (notifiedAt setado no banco pelo cron). */
  fired?: boolean;
}

export interface ScheduledAction {
  id: number;
  icon: string;
  title: string;
  frequency: string;
  nextRun: string;
  status: "active" | "paused";
  author?: string;
}

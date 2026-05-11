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

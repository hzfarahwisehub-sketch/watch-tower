"use client";
// Onda 4 — campos "ricos" do compromisso da Agenda (convidados, Google Meet,
// cor, lembrete, fuso por evento, recorrência e duração). Controlado: recebe um
// draft + onChange. Os valores são serializados no sidecar de meta do description
// (ver lib/calendar/rich) e propagados pra agenda-satélite "Watch Tower" do Google.
import {
  GOOGLE_EVENT_COLORS,
  COMMON_TIMEZONES,
  encodeDescription,
  decodeDescription,
  repeatToRrule,
  rruleToRepeat,
  type RepeatFreq,
  type RichMeta,
} from "@/lib/calendar/rich";

type TFn = (key: string, params?: Record<string, string | number>) => string;

export interface RichDraft {
  description: string;
  guests: string;
  meet: boolean;
  colorId: string;
  reminderMin: string;
  reminderMethod: "popup" | "email";
  tz: string;
  repeat: RepeatFreq;
  durationMin: string;
  /** Link do Meet já resolvido (só leitura; preservado entre edições). */
  hangoutLink: string;
}

export function emptyRichDraft(): RichDraft {
  return {
    description: "",
    guests: "",
    meet: false,
    colorId: "",
    reminderMin: "",
    reminderMethod: "popup",
    tz: "",
    repeat: "",
    durationMin: "",
    hangoutLink: "",
  };
}

/** description CRU (+ durationMin) → draft do form. */
export function toDraft(rawDescription: string | null | undefined, durationMin?: number): RichDraft {
  const { text, meta } = decodeDescription(rawDescription);
  const first = meta.reminders?.[0];
  return {
    description: text,
    guests: (meta.attendees ?? []).join(", "),
    meet: meta.meet ?? false,
    colorId: meta.colorId ?? "",
    reminderMin: first ? String(first.minutes) : "",
    reminderMethod: first?.method ?? "popup",
    tz: meta.tz ?? "",
    repeat: rruleToRepeat(meta.rrule),
    durationMin: durationMin != null ? String(durationMin) : "",
    hangoutLink: meta.hangoutLink ?? "",
  };
}

/** draft do form → { description CRU (com sidecar), durationMin }. */
export function fromDraft(draft: RichDraft): { description: string | null; durationMin: number } {
  const attendees = draft.guests
    .split(/[\s,;]+/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.includes("@"));
  const minutes = draft.reminderMin.trim();
  const reminders =
    minutes && Number.isFinite(Number(minutes))
      ? [{ method: draft.reminderMethod, minutes: Math.max(0, Math.round(Number(minutes))) }]
      : undefined;
  const meta: RichMeta = {
    tz: draft.tz || undefined,
    attendees: attendees.length ? attendees : undefined,
    meet: draft.meet || undefined,
    hangoutLink: draft.hangoutLink || undefined,
    colorId: draft.colorId || undefined,
    reminders,
    rrule: repeatToRrule(draft.repeat),
  };
  const description = encodeDescription(draft.description, meta);
  const dur = draft.durationMin.trim();
  const durationMin = dur && Number.isFinite(Number(dur)) ? Math.max(1, Math.round(Number(dur))) : 30;
  return { description, durationMin };
}

const inputCls =
  "w-full bg-transparent text-[11px] outline-none px-1.5 py-1 rounded";
const inputStyle = { color: "var(--text-2)", border: "1px solid var(--border)" } as const;
const labelCls = "block text-[9px] font-bold uppercase tracking-wide mb-0.5";
const labelStyle = { color: "var(--text-3)" } as const;

export function AgendaRichFields({
  draft,
  onChange,
  t,
}: {
  draft: RichDraft;
  onChange: (next: RichDraft) => void;
  t: TFn;
}) {
  const set = <K extends keyof RichDraft>(k: K, v: RichDraft[K]) => onChange({ ...draft, [k]: v });

  return (
    <div className="flex flex-col gap-2 mt-2">
      {/* Descrição */}
      <div>
        <label className={labelCls} style={labelStyle}>
          {t("daily.agenda.form.description")}
        </label>
        <textarea
          rows={2}
          value={draft.description}
          onChange={(e) => set("description", e.target.value)}
          className={inputCls + " resize-y"}
          style={inputStyle}
        />
      </div>

      {/* Convidados */}
      <div>
        <label className={labelCls} style={labelStyle}>
          {t("daily.agenda.form.guests")}
        </label>
        <input
          type="text"
          inputMode="email"
          placeholder="ana@ex.com, beto@ex.com"
          value={draft.guests}
          onChange={(e) => set("guests", e.target.value)}
          className={inputCls}
          style={inputStyle}
        />
      </div>

      {/* Meet + Duração */}
      <div className="flex gap-2 items-end">
        <label className="flex items-center gap-1.5 text-[11px] font-semibold cursor-pointer flex-1" style={{ color: "var(--text-2)" }}>
          <input type="checkbox" checked={draft.meet} onChange={(e) => set("meet", e.target.checked)} />
          🎥 {t("daily.agenda.form.meet")}
        </label>
        <div className="w-[110px]">
          <label className={labelCls} style={labelStyle}>
            {t("daily.agenda.form.duration")}
          </label>
          <input
            type="number"
            min={1}
            placeholder="30"
            value={draft.durationMin}
            onChange={(e) => set("durationMin", e.target.value)}
            className={inputCls}
            style={inputStyle}
          />
        </div>
      </div>
      {draft.hangoutLink && (
        <a
          href={draft.hangoutLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-bold underline"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          🎥 {t("daily.agenda.meetJoin")}
        </a>
      )}

      {/* Cor */}
      <div>
        <label className={labelCls} style={labelStyle}>
          {t("daily.agenda.form.color")}
        </label>
        <div className="flex flex-wrap gap-1.5 items-center">
          <button
            type="button"
            onClick={() => set("colorId", "")}
            title={t("daily.agenda.form.colorDefault")}
            aria-label={t("daily.agenda.form.colorDefault")}
            aria-pressed={draft.colorId === ""}
            className="w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center"
            style={{
              border: draft.colorId === "" ? "2px solid var(--text)" : "1px solid var(--border)",
              color: "var(--text-3)",
            }}
          >
            ∅
          </button>
          {GOOGLE_EVENT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => set("colorId", c.id)}
              title={c.hex}
              aria-label={c.key}
              aria-pressed={draft.colorId === c.id}
              className="w-[18px] h-[18px] rounded-full"
              style={{
                background: c.hex,
                border: draft.colorId === c.id ? "2px solid var(--text)" : "1px solid rgba(0,0,0,.25)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lembrete */}
      <div>
        <label className={labelCls} style={labelStyle}>
          {t("daily.agenda.form.reminder")}
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={0}
            placeholder="10"
            value={draft.reminderMin}
            onChange={(e) => set("reminderMin", e.target.value)}
            className={inputCls + " w-[70px] flex-none"}
            style={inputStyle}
          />
          <span className="text-[10px]" style={{ color: "var(--text-3)" }}>
            {t("daily.agenda.form.minutesBefore")}
          </span>
          <select
            value={draft.reminderMethod}
            onChange={(e) => set("reminderMethod", e.target.value === "email" ? "email" : "popup")}
            className={inputCls + " flex-1"}
            style={inputStyle}
          >
            <option value="popup">{t("daily.agenda.form.reminderPopup")}</option>
            <option value="email">{t("daily.agenda.form.reminderEmail")}</option>
          </select>
        </div>
      </div>

      {/* Fuso por evento + Recorrência */}
      <div className="flex gap-2">
        <div className="flex-1 min-w-0">
          <label className={labelCls} style={labelStyle}>
            {t("daily.agenda.form.timezone")}
          </label>
          <select
            value={draft.tz}
            onChange={(e) => set("tz", e.target.value)}
            className={inputCls}
            style={inputStyle}
          >
            <option value="">{t("daily.agenda.form.timezoneDefault")}</option>
            {COMMON_TIMEZONES.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-0">
          <label className={labelCls} style={labelStyle}>
            {t("daily.agenda.form.repeat")}
          </label>
          <select
            value={draft.repeat}
            onChange={(e) => set("repeat", e.target.value as RepeatFreq)}
            className={inputCls}
            style={inputStyle}
          >
            <option value="">{t("daily.agenda.form.repeatNone")}</option>
            <option value="daily">{t("daily.agenda.form.repeatDaily")}</option>
            <option value="weekly">{t("daily.agenda.form.repeatWeekly")}</option>
            <option value="monthly">{t("daily.agenda.form.repeatMonthly")}</option>
          </select>
        </div>
      </div>

      <div className="text-[9.5px] leading-tight" style={{ color: "var(--text-3)" }}>
        {t("daily.agenda.richHint")}
      </div>
    </div>
  );
}

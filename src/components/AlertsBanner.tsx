"use client";
import type { Status } from "@/lib/types";

const ALERTS: { code: string; flag: string; label: string; level: "crit" | "warn" }[] = [
  { code: "ca", flag: "ca", label: "Canadá · CRS cutoff +12 pts",       level: "crit" },
  { code: "au", flag: "au", label: "Austrália · 189 visa vagas −18%",   level: "crit" },
  { code: "us", flag: "us", label: "EUA · H1B nova regra wage-based",   level: "warn" },
];

export function AlertsBanner({ onSelect }: { onSelect: (code: string) => void }) {
  return (
    <div
      className="flex items-center gap-3.5 px-5 py-4 mb-5 flex-wrap rounded-[14px]"
      style={{
        background: "linear-gradient(90deg, rgba(255,59,92,.15), rgba(255,59,92,.04) 70%)",
        border: "1px solid rgba(255,59,92,.4)",
        borderLeft: "4px solid var(--color-status-critical)",
        boxShadow: "0 4px 20px rgba(255,59,92,.15)",
      }}
    >
      <span className="text-[20px] font-black" style={{ color: "var(--color-status-critical)" }}>⚠</span>
      <span
        className="text-[11px] tracking-[2.5px] uppercase font-extrabold flex-shrink-0"
        style={{ color: "var(--color-status-critical)" }}
      >
        Alertas Críticos
      </span>
      {ALERTS.map((a) => (
        <button
          key={a.code}
          type="button"
          onClick={() => onSelect(a.code)}
          className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-[18px] text-[12px] font-semibold cursor-pointer transition-all hover:-translate-y-px"
          style={{
            color: "var(--text)",
            background: a.level === "crit" ? "rgba(255,59,92,.18)" : "rgba(255,138,31,.18)",
            border: `1px solid ${a.level === "crit" ? "rgba(255,59,92,.5)" : "rgba(255,138,31,.5)"}`,
          }}
        >
          <span className={`wt-flag sm ${a.flag}`} style={{ width: 18, height: 13 }} />
          {a.label}
        </button>
      ))}
    </div>
  );
}

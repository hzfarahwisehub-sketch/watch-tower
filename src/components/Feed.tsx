"use client";
import { useMemo } from "react";
import type { Country, CountryEvent, Status } from "@/lib/types";

const TIME_ORDER: Record<string, number> = { "há 2h": 0, "há 10h": 1, "há 14h": 2, "há 18h": 3, "ontem": 4 };

const STATUS_COLOR: Record<Status, string> = {
  crit: "var(--color-status-critical)",
  warn: "var(--color-status-warning)",
  stable: "var(--color-status-stable)",
};
const STATUS_BG: Record<Status, string> = {
  crit: "rgba(255,59,92,.05)",
  warn: "rgba(255,138,31,.05)",
  stable: "rgba(16,224,160,.05)",
};

export function Feed({ countries, onSelect }: { countries: Country[]; onSelect: (code: string) => void }) {
  const items = useMemo(() => {
    const all: Array<CountryEvent & { country: Country }> = [];
    countries.forEach((c) => c.events.forEach((e) => all.push({ ...e, country: c })));
    all.sort((a, b) => (TIME_ORDER[a.time] ?? 99) - (TIME_ORDER[b.time] ?? 99));
    return all.slice(0, 6);
  }, [countries]);

  return (
    <section>
      <h2
        className="text-[13px] tracking-[3px] uppercase font-extrabold flex items-center gap-2.5 mb-4 pb-3"
        style={{ color: "var(--color-wh-blue-light)", borderBottom: "1px solid var(--border)" }}
      >
        📰 Feed de Mudanças por País
      </h2>

      <div className="wt-card">
        <div className="p-2">
          {items.map((it, i) => (
            <button
              type="button"
              key={`${it.country.code}-${i}`}
              onClick={() => onSelect(it.country.code)}
              className="w-full flex items-start gap-3 px-4 py-3 rounded-lg my-1 text-left cursor-pointer transition-colors hover:bg-[rgba(31,85,255,0.04)]"
              style={{
                borderLeft: `3px solid ${STATUS_COLOR[it.country.status]}`,
                background: STATUS_BG[it.country.status],
              }}
            >
              <span className={`wt-flag md ${it.country.code} flex-shrink-0 mt-0.5`} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                  <span
                    className="text-[10.5px] tracking-[2px] uppercase font-extrabold"
                    style={{ color: "var(--color-wh-blue-light)" }}
                  >
                    {it.country.name}
                  </span>
                  <span className={`wt-status ${it.country.status}`} style={{ width: 7, height: 7 }} />
                  <span
                    className="text-[9.5px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded"
                    style={{ color: "var(--text-3)", background: "rgba(255,255,255,.05)" }}
                  >
                    {it.time}
                  </span>
                </div>
                <h3
                  className="text-[12.5px] font-bold leading-snug mb-1"
                  style={{ color: "var(--text)", overflowWrap: "anywhere", wordBreak: "break-word" }}
                >
                  {it.title}
                </h3>
                <p
                  className="text-[11px] leading-snug"
                  style={{ color: "var(--text-2)", overflowWrap: "anywhere", wordBreak: "break-word" }}
                >
                  {it.desc}
                </p>
                <div
                  className="flex flex-wrap gap-x-2 gap-y-0.5 mt-2 text-[9px] uppercase tracking-wide font-semibold leading-tight"
                  style={{ color: "var(--text-3)" }}
                >
                  <span>
                    {it.country.changes} mudança{it.country.changes > 1 ? "s" : ""}
                  </span>
                  <span style={{ color: "var(--color-wh-blue-light)" }}>· {it.src}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

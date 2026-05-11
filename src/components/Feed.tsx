"use client";
import { useMemo } from "react";
import type { Country, CountryEvent } from "@/lib/types";

const TIME_ORDER: Record<string, number> = { "há 2h": 0, "há 10h": 1, "há 14h": 2, "há 18h": 3, "ontem": 4 };

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <button
            type="button"
            key={`${it.country.code}-${i}`}
            onClick={() => onSelect(it.country.code)}
            className="wt-card px-5 py-4.5 cursor-pointer transition-all hover:-translate-y-0.5 text-left"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className={`wt-flag md ${it.country.code}`} />
              <span className="text-[12px] tracking-[2px] uppercase font-extrabold flex-1" style={{ color: "var(--color-wh-blue-light)" }}>
                {it.country.name}
              </span>
              <span className={`wt-status ${it.country.status}`} style={{ width: 8, height: 8 }} />
              <span
                className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-[10px]"
                style={{ color: "var(--text-3)", background: "rgba(255,255,255,.05)" }}
              >
                {it.time}
              </span>
            </div>
            <h3 className="text-[15.5px] font-bold leading-snug my-1 mb-2" style={{ color: "var(--text)" }}>
              {it.title}
            </h3>
            <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              {it.desc}
            </p>
            <div
              className="flex justify-between items-center text-[10.5px] uppercase tracking-wider mt-3 pt-2.5 font-semibold"
              style={{ color: "var(--text-3)", borderTop: "1px solid rgba(74,122,255,.15)" }}
            >
              <span>{it.country.changes} mudança{it.country.changes > 1 ? "s" : ""} no período</span>
              <span className="font-extrabold" style={{ color: "var(--color-wh-blue-light)" }}>
                {it.src}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

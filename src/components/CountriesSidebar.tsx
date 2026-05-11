"use client";
import { useMemo, useState } from "react";
import type { Country, Status } from "@/lib/types";

type Filter = "all" | Status;

export function CountriesSidebar({
  countries,
  selected,
  onSelect,
}: {
  countries: Country[];
  selected: string | null;
  onSelect: (code: string) => void;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => ({
    all: countries.length,
    crit: countries.filter((c) => c.status === "crit").length,
    warn: countries.filter((c) => c.status === "warn").length,
    stable: countries.filter((c) => c.status === "stable").length,
  }), [countries]);

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    return countries.filter((c) => {
      if (filter !== "all" && c.status !== filter) return false;
      if (term && !c.name.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [countries, filter, search]);

  return (
    <div className="wt-card flex flex-col">
      <div
        className="flex items-center justify-between gap-3 px-5 py-4"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2 className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2" style={{ color: "var(--color-wh-blue-light)" }}>
          🏳 Países Monitorados
        </h2>
      </div>

      <div className="px-4 py-3.5 flex flex-col gap-2.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <input
          type="text"
          placeholder="🔍  Buscar país..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-[12.5px] outline-none font-sans transition-colors"
          style={{
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        />
        <div className="flex gap-1.5 flex-wrap">
          {(["all", "crit", "warn", "stable"] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="px-2.5 py-[5px] rounded-[14px] text-[10.5px] font-bold tracking-wider uppercase cursor-pointer transition-all"
              style={{
                background: filter === f ? "var(--color-wh-blue)" : "var(--bg2)",
                border: `1px solid ${filter === f ? "var(--border-hi)" : "var(--border)"}`,
                color: filter === f ? "#fff" : "var(--text-2)",
              }}
            >
              {f === "all" ? "Todos" : f === "crit" ? "Críticos" : f === "warn" ? "Atenção" : "Estáveis"}
              <span className="ml-1 opacity-70">{counts[f]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-1.5 max-h-[440px]">
        {filtered.length === 0 ? (
          <div className="py-6 text-center text-[12px]" style={{ color: "var(--text-3)" }}>
            Nenhum país encontrado
          </div>
        ) : (
          filtered.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => onSelect(c.code)}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg my-0.5 transition-colors text-left cursor-pointer"
              style={{
                background: selected === c.code ? "rgba(31,85,255,.18)" : undefined,
                borderLeft: `3px solid ${selected === c.code ? "var(--color-wh-blue)" : "transparent"}`,
              }}
            >
              <span className={`wt-flag sm ${c.code}`} />
              <span className="flex-1 text-[13px] font-semibold" style={{ color: "var(--text)" }}>
                {c.name}
              </span>
              <span className="text-[10.5px] font-semibold" style={{ color: "var(--text-3)" }}>
                {c.changes}
              </span>
              <span className={`wt-status ${c.status}`} />
            </button>
          ))
        )}
      </div>
    </div>
  );
}

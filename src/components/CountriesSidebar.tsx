"use client";
import { useMemo, useState } from "react";
import type { Country, Status } from "@/lib/types";
import { useCountryChangesMap } from "@/lib/useCountryChanges";
import { useLocale } from "./LocaleProvider";

type Filter = "all" | Status;
type SortBy = "active" | "name" | "changes";

const SORT_KEY: Record<SortBy, string> = {
  active: "sidebar.sort.active",
  name: "sidebar.sort.name",
  changes: "sidebar.sort.changes",
};

const STATUS_ORDER: Record<Status, number> = { crit: 0, warn: 1, stable: 2 };

export function CountriesSidebar({
  countries,
  selected,
  onSelect,
}: {
  countries: Country[];
  selected: string | null;
  onSelect: (code: string) => void;
}) {
  const { t } = useLocale();
  const changesMap = useCountryChangesMap();
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("active");

  const counts = useMemo(
    () => ({
      all: countries.length,
      crit: countries.filter((c) => c.status === "crit").length,
      warn: countries.filter((c) => c.status === "warn").length,
      stable: countries.filter((c) => c.status === "stable").length,
    }),
    [countries]
  );

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    const result = countries.filter((c) => {
      if (filter !== "all" && c.status !== filter) return false;
      if (term && !c.name.toLowerCase().includes(term)) return false;
      return true;
    });
    // Ordenação
    return result.slice().sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name, "pt-BR");
      if (sortBy === "changes") return (changesMap[b.code] ?? 0) - (changesMap[a.code] ?? 0);
      // "active" — primeiro por status (crit > warn > stable), depois por changes desc
      const statusDiff = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
      if (statusDiff !== 0) return statusDiff;
      return (changesMap[b.code] ?? 0) - (changesMap[a.code] ?? 0);
    });
  }, [countries, filter, search, sortBy, changesMap]);

  return (
    <div className="wt-card flex flex-col h-full @container">
      <div
        className="flex items-center justify-between gap-x-2 gap-y-0.5 pl-5 pr-[64px] py-3.5 flex-shrink-0 flex-wrap"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          {t("sidebar.title")}
        </h2>
        <span
          className="text-[10px] tracking-wider uppercase font-semibold flex-shrink-0"
          style={{ color: "var(--text-3)" }}
        >
          {filtered.length === counts.all
            ? t("sidebar.count.all", { n: counts.all })
            : t("sidebar.count.some", { n: filtered.length, total: counts.all })}
        </span>
      </div>

      {/* Busca + filtros + ordenação */}
      <div
        className="px-4 py-3 flex flex-col gap-2 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {/* Campo busca com botão limpar */}
        <div className="relative">
          <input
            type="text"
            placeholder={t("sidebar.search.placeholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 pr-8 rounded-lg text-[12.5px] outline-none font-sans transition-colors"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label={t("sidebar.search.clear")}
              title={t("sidebar.search.clear")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded text-[11px] font-bold cursor-pointer transition-colors"
              style={{ color: "var(--text-3)", background: "rgba(255,255,255,.05)" }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Chips de filtro de status */}
        <div className="flex gap-1.5 flex-wrap">
          {(["all", "crit", "warn", "stable"] as Filter[]).map((f) => {
            const active = filter === f;
            const accent =
              f === "crit"
                ? "var(--color-status-critical)"
                : f === "warn"
                  ? "var(--color-status-warning)"
                  : f === "stable"
                    ? "var(--color-status-stable)"
                    : "var(--color-wh-blue)";
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className="px-2.5 py-[5px] rounded-[14px] text-[10.5px] font-bold tracking-wider uppercase cursor-pointer transition-all"
                style={{
                  background: active ? accent : "var(--bg2)",
                  border: `1px solid ${active ? accent : "var(--border)"}`,
                  color: active ? "#fff" : "var(--text-2)",
                  boxShadow: active ? `0 2px 8px ${accent}40` : undefined,
                }}
              >
                {f === "all"
                  ? t("sidebar.filter.all")
                  : f === "crit"
                    ? t("sidebar.filter.crit")
                    : f === "warn"
                      ? t("sidebar.filter.warn")
                      : t("sidebar.filter.stable")}
                <span className="ml-1 opacity-80">{counts[f]}</span>
              </button>
            );
          })}
        </div>

        {/* Ordenação — chips menores */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span
            className="text-[9.5px] tracking-wider uppercase font-bold"
            style={{ color: "var(--text-3)" }}
          >
            {t("sidebar.sort.label")}
          </span>
          {(["active", "name", "changes"] as SortBy[]).map((s) => {
            const active = sortBy === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSortBy(s)}
                className="px-2 py-[3px] rounded-[10px] text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-all"
                style={{
                  background: active ? "rgba(31,85,255,.18)" : "transparent",
                  color: active ? "var(--color-wh-blue-light)" : "var(--text-3)",
                  border: `1px solid ${active ? "var(--color-wh-blue-light)" : "transparent"}`,
                }}
              >
                {t(SORT_KEY[s])}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lista de países — ocupa altura disponível */}
      <div className="flex-1 overflow-y-auto p-1.5 pr-2.5 min-h-0">
        {filtered.length === 0 ? (
          <div className="py-8 text-center text-[12px] flex flex-col items-center gap-2" style={{ color: "var(--text-3)" }}>
            <span className="text-[24px] opacity-50">🔍</span>
            <span>{t("sidebar.empty")}</span>
            {(search || filter !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
                className="mt-1 text-[10.5px] uppercase tracking-wider font-bold cursor-pointer"
                style={{ color: "var(--color-wh-blue-light)" }}
              >
                {t("sidebar.clear")}
              </button>
            )}
          </div>
        ) : (
          filtered.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => onSelect(c.code)}
              className="w-full flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-lg my-0.5 transition-colors text-left cursor-pointer"
              style={{
                background: selected === c.code ? "rgba(31,85,255,.18)" : undefined,
                borderLeft: `3px solid ${selected === c.code ? "var(--color-wh-blue)" : "transparent"}`,
              }}
            >
              <span className={`wt-flag sm ${c.code}`} />
              <span className="flex-1 text-[13px] font-semibold truncate" style={{ color: "var(--text)" }}>
                {c.name}
              </span>
              <span
                className="text-[10px] uppercase tracking-wider font-bold flex-shrink-0 px-1.5 py-0.5 rounded"
                style={{
                  color: "var(--text-3)",
                  background: "rgba(255,255,255,.04)",
                }}
                title={t("sidebar.changes.title", { n: changesMap[c.code] ?? 0 })}
              >
                {changesMap[c.code] ?? 0}
              </span>
              <span className={`wt-status ${c.status} flex-shrink-0`} />
            </button>
          ))
        )}
      </div>
    </div>
  );
}

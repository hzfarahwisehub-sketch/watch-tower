"use client";
import { useEffect, useState } from "react";
import type { Country, Status } from "@/lib/types";
import { BULLETINS, type StatusFile, type BulletinStatus } from "./OfficialBulletins";

const STATUS_COLOR: Record<Status, string> = {
  crit: "var(--color-status-critical)",
  warn: "var(--color-status-warning)",
  stable: "var(--color-status-stable)",
};

function fmtRelative(iso: string | null): string {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  const delta = Date.now() - date.getTime();
  const m = Math.floor(delta / 60_000);
  if (m < 1) return "agora";
  if (m < 60) return `há ${m}min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `há ${h}h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `há ${d}d`;
  const w = Math.floor(d / 7);
  if (w < 5) return `há ${w}sem`;
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

type FeedItem = {
  key: string;
  country: string;
  flag: string;
  source: string;
  url: string;
  lastChangedAt: string;
  ageMs: number;
};

/**
 * Feed de Mudanças por País — agora 100% dinamico.
 * Fonte: /bulletins-status.json (atualizado pelo cron diario).
 * Refresh: a cada 5min via setInterval (caso fique aberto muito tempo).
 *
 * Cruza key do bulletin com Country (countries.code) pra herdar status
 * (crit/warn/stable) usado no border lateral.
 */
export function Feed({ countries, onSelect }: { countries: Country[]; onSelect: (code: string) => void }) {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [lastRun, setLastRun] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch("/bulletins-status.json", { cache: "no-store" });
        if (!res.ok) {
          if (!cancelled) setLoading(false);
          return;
        }
        const data: StatusFile = await res.json();
        if (cancelled) return;

        const now = Date.now();
        const merged: FeedItem[] = data.bulletins
          .filter((b): b is BulletinStatus & { lastChangedAt: string } =>
            !!b.lastChangedAt && b.lastStatus === "changed",
          )
          .map((b) => {
            const meta = BULLETINS.find((bm) => bm.key === b.key);
            if (!meta) return null;
            return {
              key: b.key,
              country: meta.country,
              flag: meta.flag,
              source: meta.source,
              url: b.url,
              lastChangedAt: b.lastChangedAt,
              ageMs: now - new Date(b.lastChangedAt).getTime(),
            };
          })
          .filter((x): x is FeedItem => x !== null)
          .sort((a, b) => a.ageMs - b.ageMs)
          .slice(0, 6);

        setItems(merged);
        setLastRun(data.lastRun);
        setLoading(false);
      } catch {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const statusByCode = new Map(countries.map((c) => [c.code, c.status] as const));

  return (
    <section>
      <h2
        className="text-[13px] tracking-[3px] uppercase font-extrabold flex items-center justify-between gap-2.5 mb-4 pb-3 pr-[64px] flex-wrap"
        style={{ color: "var(--color-wh-blue-light)", borderBottom: "1px solid var(--border)" }}
      >
        <span className="flex items-center gap-2.5">
          📰 Feed de Mudanças por País
          <span
            className="text-[8.5px] tracking-wider font-bold px-1.5 py-0.5 rounded normal-case"
            style={{ color: "#10A570", background: "rgba(16,165,112,.12)", letterSpacing: "1.5px" }}
          >
            ● AUTO
          </span>
        </span>
        <span className="text-[9.5px] uppercase tracking-wider font-bold normal-case" style={{ color: "var(--text-3)" }}>
          Última varredura: {loading ? "carregando…" : fmtRelative(lastRun)}
        </span>
      </h2>

      {loading && (
        <div className="text-[11.5px] py-6 text-center" style={{ color: "var(--text-3)" }}>
          Carregando mudanças do cron diário…
        </div>
      )}

      {!loading && items.length === 0 && (
        <div className="text-[11.5px] py-6 text-center" style={{ color: "var(--text-3)" }}>
          Nenhuma mudança detectada nas últimas varreduras.
          <br />
          O cron roda diariamente às 11h UTC (08h BRT).
        </div>
      )}

      <div className="grid grid-cols-1 @lg:grid-cols-2 gap-5">
        {items.map((it) => {
          const status: Status = statusByCode.get(it.key) ?? "stable";
          return (
            <button
              type="button"
              key={it.key}
              onClick={() => onSelect(it.key)}
              className="wt-card cursor-pointer transition-all hover:-translate-y-0.5 text-left"
              style={{
                borderLeft: `3px solid ${STATUS_COLOR[status]}`,
                paddingTop: 28,
                paddingBottom: 28,
                paddingLeft: 32,
                paddingRight: 44,
              }}
            >
              <div className="flex items-center gap-3 mb-3 flex-wrap min-w-0">
                <span className="text-[20px] flex-shrink-0">{it.flag}</span>
                <span
                  className="text-[11.5px] tracking-[2px] uppercase font-extrabold flex-1 min-w-0 truncate"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  {it.country}
                </span>
                <span className={`wt-status ${status} flex-shrink-0`} style={{ width: 8, height: 8 }} />
                <span
                  className="text-[9.5px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-[10px] flex-shrink-0"
                  style={{ color: "var(--text-3)", background: "rgba(255,255,255,.05)" }}
                >
                  {fmtRelative(it.lastChangedAt)}
                </span>
              </div>
              <h3
                className="text-[14px] font-bold leading-snug mb-2.5"
                style={{
                  color: "var(--text)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                Boletim oficial atualizado
              </h3>
              <p
                className="text-[12px]"
                style={{
                  color: "var(--text-2)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  lineHeight: 1.8,
                  maxWidth: "56ch",
                  paddingRight: 4,
                }}
              >
                Mudança detectada pelo cron diário no site oficial. Clique pra ver os detalhes do país ou abrir a fonte.
              </p>
              <div
                className="flex justify-between items-center gap-3 text-[10px] uppercase tracking-wider mt-4 pt-3 font-semibold flex-wrap min-w-0"
                style={{ color: "var(--text-3)", borderTop: "1px solid rgba(74,122,255,.15)" }}
              >
                <a
                  href={it.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="truncate min-w-0 hover:underline"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  ↗ Abrir fonte oficial
                </a>
                <span
                  className="font-extrabold flex-shrink-0 truncate"
                  style={{ color: "var(--text-3)", maxWidth: "60%" }}
                  title={it.source}
                >
                  {it.source}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

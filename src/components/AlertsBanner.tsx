"use client";
import { useEffect, useState } from "react";
import { BULLETINS, type StatusFile } from "./OfficialBulletins";

type Alert = {
  code: string;
  flag: string;
  label: string;
  level: "crit" | "warn";
  ageMs: number;
};

/**
 * AlertsBanner — agora dinamico.
 * Mostra ate 4 bulletins com mudancas recentes (< 48h).
 * Crit: < 24h · Warn: 24-48h · acima: nao mostra (sai do banner).
 *
 * Fonte: /bulletins-status.json. Refresh a cada 5min.
 */
export function AlertsBanner({ onSelect }: { onSelect: (code: string) => void }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);
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
        const day = 86_400_000;
        const merged: Alert[] = data.bulletins
          .filter((b) => b.lastChangedAt && b.lastStatus === "changed")
          .map((b) => {
            const meta = BULLETINS.find((bm) => bm.key === b.key);
            if (!meta || !b.lastChangedAt) return null;
            const ageMs = now - new Date(b.lastChangedAt).getTime();
            if (ageMs > 2 * day) return null;
            return {
              code: b.key,
              flag: b.key,
              label: `${meta.country} · boletim oficial atualizado`,
              level: ageMs < day ? ("crit" as const) : ("warn" as const),
              ageMs,
            };
          })
          .filter((x): x is Alert => x !== null)
          .sort((a, b) => a.ageMs - b.ageMs)
          .slice(0, 4);

        setAlerts(merged);
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

  if (loading || alerts.length === 0) {
    return null;
  }

  return (
    <div
      className="flex items-center gap-3.5 pl-5 pr-[70px] py-4 mb-5 flex-wrap rounded-[14px]"
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
        Alertas Recentes
      </span>
      {alerts.map((a) => (
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

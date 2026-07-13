"use client";
import { useEffect, useRef, useState } from "react";
import { BULLETINS, type StatusFile } from "./OfficialBulletins";
import { useLocale } from "./LocaleProvider";

type TFn = (key: string, params?: Record<string, string | number>) => string;
type Metric = { icon: string; label: string; value: string; color?: string };
type Alert = { code: string; flag: string; country: string; level: "crit" | "warn"; ageMs: number };

function fmtRelative(iso: string | null, t: TFn): string {
  if (!iso) return t("common.dash");
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return t("common.dash");
  const delta = Date.now() - date.getTime();
  const m = Math.floor(delta / 60000);
  if (m < 1) return t("common.rel.now");
  if (m < 60) return t("common.rel.min", { n: m });
  const h = Math.floor(m / 60);
  if (h < 24) return t("common.rel.hour", { n: h });
  const d = Math.floor(h / 24);
  return t("common.rel.day", { n: d });
}

/**
 * StatusBar — barra ÚNICA fina: 6 KPIs condensados (esquerda) + Alertas
 * Recentes em carrossel (direita), fundidos numa faixa só. Mesma fonte de
 * dados do KpiRow/AlertsBanner: /bulletins-status.json, refresh a cada 5min.
 */
export function StatusBar({ onSelect }: { onSelect?: (code: string) => void } = {}) {
  const { t } = useLocale();
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/bulletins-status.json", { cache: "no-store" });
        if (!res.ok) return;
        const data: StatusFile = await res.json();
        if (cancelled) return;

        const now = Date.now();
        const day = 86_400_000;
        const total = data.bulletins.length;
        const changed7d = data.bulletins.filter((b) => b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < 7 * day).length;
        const changed24h = data.bulletins.filter((b) => b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < day).length;
        const changed48h = data.bulletins.filter((b) => b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < 2 * day).length;
        const errors = data.bulletins.filter((b) => b.lastStatus && b.lastStatus.startsWith("error")).length;

        setMetrics([
          { icon: "🌎", label: t("kpi.countries.label"), value: String(total) },
          { icon: "📰", label: t("kpi.changes.label"), value: String(changed7d) },
          { icon: "⚠", label: t("kpi.alerts.label"), value: String(changed24h), color: "var(--color-status-critical)" },
          { icon: "🔥", label: t("kpi.hot.label"), value: String(changed48h), color: "var(--color-status-warning)" },
          { icon: "⏱", label: t("kpi.updated.label"), value: fmtRelative(data.lastRun, t) },
          { icon: "📡", label: t("kpi.sources.label"), value: String(total - errors) },
        ]);

        const alertList: Alert[] = data.bulletins
          .filter((b) => b.lastChangedAt && b.lastStatus === "changed")
          .map((b) => {
            const meta = BULLETINS.find((bm) => bm.key === b.key);
            if (!meta || !b.lastChangedAt) return null;
            const ageMs = now - new Date(b.lastChangedAt).getTime();
            if (ageMs > 2 * day) return null;
            return { code: b.key, flag: b.key, country: meta.country, level: ageMs < day ? "crit" : "warn", ageMs } as Alert;
          })
          .filter((x): x is Alert => x !== null)
          .sort((a, b) => a.ageMs - b.ageMs)
          .slice(0, 8);
        setAlerts(alertList);
      } catch {
        // silencioso
      }
    };

    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [t]);

  const shown: Metric[] = metrics.length > 0 ? metrics : Array.from({ length: 6 }, (): Metric => ({ icon: "·", label: t("common.loading"), value: "—" }));
  const scrollTrack = (dir: number) => trackRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });

  return (
    <div className="wt-statbar wt-card" role="status" aria-label="Indicadores globais e alertas">
      <div className="wt-statbar-metrics">
        {shown.map((m, i) => (
          <div className="wt-stat" key={i}>
            <span className="wt-stat-ic" aria-hidden>{m.icon}</span>
            <div className="wt-stat-col">
              <span className="wt-stat-num" style={m.color ? { color: m.color } : undefined}>{m.value}</span>
              <span className="wt-stat-lab">{m.label}</span>
            </div>
          </div>
        ))}
      </div>

      {alerts.length > 0 && (
        <>
          <div className="wt-vsep" aria-hidden />
          <div className="wt-statbar-alerts">
            <span className="wt-al-lbl">⚠ {t("alerts.recent")}</span>
            {alerts.length > 3 && (
              <button type="button" className="wt-al-arrow" onClick={() => scrollTrack(-1)} aria-label="Anterior">‹</button>
            )}
            <div className="wt-al-track" ref={trackRef}>
              {alerts.map((a) => (
                <button
                  key={a.code}
                  type="button"
                  onClick={() => onSelect?.(a.code)}
                  className="wt-al-pill"
                  style={a.level === "crit" ? { borderColor: "rgba(255,59,92,.5)" } : { borderColor: "rgba(255,138,31,.5)" }}
                  title={t("alerts.bulletinUpdated", { country: a.country })}
                >
                  <span className={`wt-flag sm ${a.flag}`} style={{ width: 18, height: 13 }} />
                  {t("alerts.bulletinUpdated", { country: a.country })}
                </button>
              ))}
            </div>
            {alerts.length > 3 && (
              <button type="button" className="wt-al-arrow" onClick={() => scrollTrack(1)} aria-label="Próximo">›</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

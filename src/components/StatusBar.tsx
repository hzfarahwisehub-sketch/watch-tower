"use client";
import { useEffect, useState } from "react";
import { BULLETINS, type StatusFile } from "./OfficialBulletins";
import { useLocale } from "./LocaleProvider";

type TFn = (key: string, params?: Record<string, string | number>) => string;
type Metric = { icon: string; label: string; value: string; color?: string };

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
 * StatusBar — versão CONDENSADA dos 6 KPIs numa barra horizontal fina
 * (substitui os cards grandes/empilhados). Mesma fonte de dados do KpiRow:
 * /bulletins-status.json, refresh a cada 5min. Números ressaltados, rótulo
 * miúdo, divisórias finas. Rola na horizontal quando falta largura (mobile).
 */
export function StatusBar() {
  const { t } = useLocale();
  const [metrics, setMetrics] = useState<Metric[]>([]);

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
        const changed7d = data.bulletins.filter(
          (b) => b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < 7 * day,
        ).length;
        const changed24h = data.bulletins.filter(
          (b) => b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < day,
        ).length;
        const changed48h = data.bulletins.filter(
          (b) => b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < 2 * day,
        ).length;
        const errors = data.bulletins.filter(
          (b) => b.lastStatus && b.lastStatus.startsWith("error"),
        ).length;

        setMetrics([
          { icon: "🌎", label: t("kpi.countries.label"), value: String(total) },
          { icon: "📰", label: t("kpi.changes.label"), value: String(changed7d) },
          { icon: "⚠", label: t("kpi.alerts.label"), value: String(changed24h), color: "var(--color-status-critical)" },
          { icon: "🔥", label: t("kpi.hot.label"), value: String(changed48h), color: "var(--color-status-warning)" },
          { icon: "⏱", label: t("kpi.updated.label"), value: fmtRelative(data.lastRun, t) },
          { icon: "📡", label: t("kpi.sources.label"), value: String(total - errors) },
        ]);
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

  // Mantém o comprimento estável antes de carregar (usa BULLETINS pra placeholder)
  const shown: Metric[] = metrics.length > 0 ? metrics : Array.from({ length: 6 }, (): Metric => ({ icon: "·", label: t("common.loading"), value: "—" }));
  void BULLETINS;

  return (
    <div className="wt-statbar wt-card" role="status" aria-label="Indicadores globais">
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
  );
}

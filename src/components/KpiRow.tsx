"use client";
import { useEffect, useState } from "react";
import { BULLETINS, type StatusFile } from "./OfficialBulletins";
import { useLocale } from "./LocaleProvider";

type TFn = (key: string, params?: Record<string, string | number>) => string;

type TrendCls = "up" | "warn" | "crit" | "muted";

type Kpi = {
  icon: string;
  label: string;
  value: string;
  trend: string;
  trendCls: TrendCls;
};

function trendColor(cls: TrendCls) {
  switch (cls) {
    case "up":   return "var(--color-status-stable)";
    case "warn": return "var(--color-status-warning)";
    case "crit": return "var(--color-status-critical)";
    default:     return "var(--text-3)";
  }
}

function fmtRelative(iso: string | null, t: TFn): string {
  if (!iso) return t("common.dash");
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return t("common.dash");
  const delta = Date.now() - date.getTime();
  const m = Math.floor(delta / 60_000);
  if (m < 1) return t("common.rel.now");
  if (m < 60) return t("common.rel.min", { n: m });
  const h = Math.floor(m / 60);
  if (h < 24) return t("common.rel.hour", { n: h });
  const d = Math.floor(h / 24);
  return t("common.rel.day", { n: d });
}

/**
 * KpiRow — 6 indicadores agora calculados em tempo real dos dados do cron.
 * Fonte: /bulletins-status.json. Refresh a cada 5min.
 */
export function KpiRow() {
  const { t } = useLocale();
  const [kpis, setKpis] = useState<Kpi[]>([]);

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
        const changed24h = data.bulletins.filter(
          (b) => b.lastChangedAt && (now - new Date(b.lastChangedAt).getTime()) < day,
        ).length;
        const changed7d = data.bulletins.filter(
          (b) => b.lastChangedAt && (now - new Date(b.lastChangedAt).getTime()) < 7 * day,
        ).length;
        const changed48h = data.bulletins.filter(
          (b) => b.lastChangedAt && (now - new Date(b.lastChangedAt).getTime()) < 2 * day,
        ).length;
        const errors = data.bulletins.filter(
          (b) => b.lastStatus && b.lastStatus.startsWith("error"),
        ).length;

        setKpis([
          {
            icon: "🌎",
            label: t("kpi.countries.label"),
            value: String(total),
            trend: t("kpi.countries.trend", { n: BULLETINS.length }),
            trendCls: "muted",
          },
          {
            icon: "📰",
            label: t("kpi.changes.label"),
            value: String(changed7d),
            trend: t("kpi.changes.trend"),
            trendCls: changed7d > 0 ? "up" : "muted",
          },
          {
            icon: "⚠",
            label: t("kpi.alerts.label"),
            value: String(changed24h),
            trend: changed24h > 0 ? t("kpi.alerts.trend.some") : t("kpi.alerts.trend.none"),
            trendCls: changed24h > 0 ? "crit" : "muted",
          },
          {
            icon: "🔥",
            label: t("kpi.hot.label"),
            value: String(changed48h),
            trend: t("kpi.hot.trend"),
            trendCls: changed48h > 0 ? "warn" : "muted",
          },
          {
            icon: "⏱",
            label: t("kpi.updated.label"),
            value: fmtRelative(data.lastRun, t),
            trend: t("kpi.updated.trend"),
            trendCls: "muted",
          },
          {
            icon: "📡",
            label: t("kpi.sources.label"),
            value: String(total - errors),
            trend: errors > 0 ? t("kpi.sources.trend.errors", { n: errors }) : t("kpi.sources.trend.ok"),
            trendCls: errors > 0 ? "warn" : "up",
          },
        ]);
      } catch {
        // silencioso — UI fica vazia se falhar
      }
    };

    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [t]);

  if (kpis.length === 0) {
    return (
      <section className="grid grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @xl:grid-cols-6 gap-3.5 @xl:pr-[66px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="wt-card p-4" style={{ opacity: 0.4, minHeight: 110 }}>
            <div className="text-[10px] tracking-[1.5px] uppercase font-bold" style={{ color: "var(--text-3)" }}>
              {t("common.loading")}
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @xl:grid-cols-6 gap-3.5 @xl:pr-[66px]">
      {kpis.map((k) => (
        <div key={k.label} className="wt-card p-4 hover:-translate-y-0.5 transition-transform relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
            style={{ background: "linear-gradient(90deg, transparent, var(--color-wh-blue-light), transparent)" }}
          />
          <div className="flex items-center gap-2 mb-2.5">
            <div
              className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[14px] flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(31,85,255,.4)",
              }}
            >
              {k.icon}
            </div>
            <div className="text-[10px] tracking-[1.5px] uppercase font-bold" style={{ color: "var(--text-3)" }}>
              {k.label}
            </div>
          </div>
          <div className="text-[clamp(26px,3vw,38px)] font-extrabold leading-none -tracking-tight" style={{ color: "var(--text)" }}>
            {k.value}
          </div>
          <div className="text-[10.5px] tracking-wide mt-1.5 font-semibold" style={{ color: trendColor(k.trendCls) }}>
            {k.trend}
          </div>
        </div>
      ))}
    </section>
  );
}

const KPIS: { icon: string; label: string; value: string; trend: string; trendCls?: "up" | "warn" | "crit" | "muted" }[] = [
  { icon: "🌎", label: "Países",        value: "12",   trend: "monitorados",        trendCls: "muted" },
  { icon: "📰", label: "Mudanças",      value: "47",   trend: "▲ +12 esta semana",  trendCls: "up" },
  { icon: "⚠",  label: "Alertas",       value: "3",    trend: "críticos ativos",    trendCls: "crit" },
  { icon: "🔥", label: "Quentes",       value: "5",    trend: "países em atenção",  trendCls: "warn" },
  { icon: "⏱",  label: "Atualização",   value: "2min", trend: "em tempo real",      trendCls: "muted" },
  { icon: "📡", label: "Fontes",        value: "8",    trend: "oficiais ativas",    trendCls: "up" },
];

function trendColor(cls?: "up" | "warn" | "crit" | "muted") {
  switch (cls) {
    case "up":   return "var(--color-status-stable)";
    case "warn": return "var(--color-status-warning)";
    case "crit": return "var(--color-status-critical)";
    default:     return "var(--text-3)";
  }
}

export function KpiRow() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-5">
      {KPIS.map((k) => (
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

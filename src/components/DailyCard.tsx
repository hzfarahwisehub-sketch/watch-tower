"use client";
// Card padrão dos blocos do dia (Inbox, Ações, Agenda, Tarefas, Lembretes).
// Extraído do DailyGrid pra ser reusado pelo InboxCard sem import circular.

export type TFn = (key: string, params?: Record<string, string | number>) => string;
export type BoardScope = "personal" | "team" | "all";

export function DailyCard({
  t,
  cardKey,
  title,
  subtitle,
  total,
  action,
  onAction,
  children,
  scope,
  onScopeChange,
  scopes,
}: {
  t: TFn;
  cardKey: string;
  title: string;
  subtitle?: string;
  total: string;
  action: string;
  onAction: () => void;
  children: React.ReactNode;
  bodyMaxHeight?: number;
  scope?: BoardScope;
  onScopeChange?: (s: BoardScope) => void;
  /** Escopos exibidos no toggle. Default ["team","personal"]; a agenda usa
   *  ["all","team","personal"] pra ter o botão "Todos". */
  scopes?: BoardScope[];
}) {
  const scopeLabel = (s: BoardScope): string => {
    if (s === "team") return t("daily.scope.team");
    if (s === "personal") return t("daily.scope.personal");
    const a = t("daily.scope.all");
    return a === "daily.scope.all" ? "Todos" : a;
  };
  const scopeList: BoardScope[] = scopes ?? ["team", "personal"];
  // O tamanho do card é controlado SÓ pelo grid (react-grid-layout) — uma única
  // forma de esticar/encolher, pelo ⤡ do canto. O corpo preenche a célula e rola
  // por dentro quando o conteúdo passa do espaço. Sem resize interno: acabou a
  // "dupla" (e o scroll da página durante o arraste, que vinha desse resize).
  const body = (
    <div
      className="wt-daily-body pl-2.5 pr-4 py-2 pb-2.5"
      style={{
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "auto",
        position: "relative",
      }}
      data-card-key={cardKey}
    >
      {children}
    </div>
  );

  return (
    <div className="wt-card flex flex-col h-full" style={{ position: "relative" }}>
      <div className="pl-5 pr-[64px] py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between gap-x-2 gap-y-0.5 flex-wrap">
          <h2
            className="text-[11px] tracking-[2.5px] uppercase font-bold flex items-center gap-2 min-w-0 truncate"
            style={{ color: "var(--color-wh-blue-light)" }}
            title={title}
          >
            {title}
          </h2>
          {onScopeChange && (
            <div
              className="flex items-center gap-0.5 p-0.5 rounded-full flex-shrink-0"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              title={t("daily.scope.toggleTitle")}
            >
              {scopeList.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onScopeChange(s)}
                  className="px-2 py-0.5 rounded-full text-[8.5px] font-extrabold uppercase tracking-wide transition-all cursor-pointer"
                  style={{
                    background: scope === s ? "var(--color-wh-blue)" : "transparent",
                    color: scope === s ? "#fff" : "var(--text-3)",
                  }}
                >
                  {scopeLabel(s)}
                </button>
              ))}
            </div>
          )}
          {subtitle && (
            <span
              className="text-[8.5px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide flex-shrink-0"
              style={{
                color: "var(--color-status-warning)",
                background: "rgba(255,138,31,.12)",
                border: "1px solid rgba(255,138,31,.3)",
              }}
              title={t("daily.mock.title")}
            >
              {t("daily.mock.badge")}
            </span>
          )}
        </div>
      </div>

      {body}

      <div
        className="px-4 py-2.5 flex justify-between items-center gap-2"
        style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}
      >
        <span
          className="text-[10px] uppercase tracking-wider font-bold truncate min-w-0"
          style={{ color: "var(--text-3)" }}
          title={total}
        >
          {total}
        </span>
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-[14px] cursor-pointer text-[10px] font-bold tracking-wide uppercase transition-all hover:-translate-y-px flex-shrink-0 whitespace-nowrap"
          style={{
            background: "rgba(31,85,255,.15)",
            color: "var(--color-wh-blue-light)",
            border: "1px solid var(--border-hi)",
          }}
        >
          {action}
        </button>
      </div>
    </div>
  );
}

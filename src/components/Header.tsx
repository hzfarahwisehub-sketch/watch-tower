"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useToast } from "./ToastProvider";

export function Header() {
  const { theme, toggle } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [diffMin, setDiffMin] = useState(2);
  const toast = useToast();

  useEffect(() => {
    const id = setInterval(() => {
      setDiffMin(Math.floor((Date.now() - lastRefresh.getTime()) / 60000));
    }, 30000);
    return () => clearInterval(id);
  }, [lastRefresh]);

  const liveLabel =
    diffMin === 0 ? "atualizado agora" :
    diffMin === 1 ? "atualizado há 1min" :
    `atualizado há ${diffMin}min`;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastRefresh(new Date());
      setDiffMin(0);
      toast("Dados atualizados das 8 fontes oficiais");
    }, 1200);
  };

  const logoSrc = theme === "dark" ? "/brand/wisehub-logo-dark.svg" : "/brand/wisehub-logo-light.svg";

  return (
    <header
      className="flex items-center justify-between gap-4 mb-6 px-5 py-4 flex-wrap rounded-2xl"
      style={{
        background: "linear-gradient(180deg, var(--surface), var(--surface-hi))",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-bar)",
      }}
    >
      <div className="flex items-center gap-4">
        <Image src={logoSrc} alt="WiseHub" width={180} height={46} priority className="h-[46px] w-auto" />
        <div className="w-px h-9" style={{ background: "linear-gradient(180deg, transparent, var(--color-wh-blue), transparent)" }} />
        <div>
          <h1 className="text-[clamp(16px,2vw,22px)] font-extrabold tracking-[2.5px] uppercase leading-none">
            Watch <span style={{ color: "var(--color-wh-blue-light)" }}>Tower</span>
          </h1>
          <div className="text-[11px] tracking-[3px] uppercase mt-1 font-medium" style={{ color: "var(--text-3)" }}>
            Monitoramento Global de Imigração
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[1px] uppercase"
          style={{
            background: "rgba(16,224,160,.12)",
            border: "1px solid rgba(16,224,160,.4)",
            color: "var(--color-status-stable)",
          }}
        >
          <span className="wt-live-dot" />
          <span>{liveLabel}</span>
        </div>

        <IconBtn title="Alternar tema" onClick={toggle}>
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </IconBtn>

        <IconBtn title="Atualizar agora" onClick={onRefresh}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={refreshing ? { animation: "wt-spin 1s linear infinite" } : undefined}
          >
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
        </IconBtn>

        <IconBtn title="Configurações" onClick={() => toast("Configurações em breve · próxima fase: integração de e-mails")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </IconBtn>

        <IconBtn title="Notificações" onClick={() => toast("3 alertas críticos · 2 novas mudanças aguardando")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </IconBtn>
      </div>
    </header>
  );
}

function IconBtn({ children, onClick, title }: { children: React.ReactNode; onClick: () => void; title: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center cursor-pointer transition-all hover:-translate-y-px"
      style={{
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--color-wh-blue-light)",
      }}
    >
      {children}
    </button>
  );
}

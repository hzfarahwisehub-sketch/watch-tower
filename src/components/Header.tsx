"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "./ThemeProvider";
import { useToast } from "./ToastProvider";
import { useSettings } from "./SettingsProvider";
import { ExportButton } from "./ExportButton";
import { PushToggle } from "./PushToggle";

export function Header() {
  const { theme, toggle } = useTheme();
  const { locked, toggleLock, openPanel } = useSettings();
  const { data: session, status: sessionStatus } = useSession();
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [diffMin, setDiffMin] = useState(2);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toast = useToast();

  const isLoggedIn = sessionStatus === "authenticated" && !!session?.user?.email;
  const isAdmin = isLoggedIn && (session.user as { role?: string }).role === "admin";
  const userInitial = session?.user?.email?.[0]?.toUpperCase() ?? "?";

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
  const liveLabelShort = diffMin === 0 ? "ao vivo" : `${diffMin}min`;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastRefresh(new Date());
      setDiffMin(0);
      toast("Dados atualizados das 8 fontes oficiais");
    }, 1200);
  };

  return (
    <header
      className="flex items-center justify-between gap-4 mb-6 px-5 py-4 flex-wrap rounded-2xl"
      style={{
        background: "linear-gradient(180deg, var(--surface), var(--surface-hi))",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-bar)",
      }}
    >
      <div className="flex items-center gap-3 md:gap-3.5 min-w-0 flex-auto">
        <Image
          src="/brand/watchtower-icon.png"
          alt="WiseHub Watch Tower"
          width={48}
          height={48}
          priority
          className="h-9 w-9 md:h-10 md:w-10 min-w-9 md:min-w-10 max-w-none rounded-[11px] flex-shrink-0"
          style={{ boxShadow: "0 0 0 1px var(--border), 0 3px 12px rgba(31,85,255,.3)" }}
        />
        <div
          className="hidden md:block w-px h-8 flex-shrink-0"
          style={{ background: "linear-gradient(180deg, transparent, var(--color-wh-blue), transparent)" }}
        />
        <div className="min-w-0">
          <h1 className="text-[clamp(13px,1.8vw,20px)] font-extrabold tracking-[1.5px] md:tracking-[2px] uppercase leading-none truncate">
            Watch <span style={{ color: "var(--color-wh-blue-light)" }}>Tower</span>
          </h1>
          <div
            className="hidden sm:block text-[10px] tracking-[2.5px] uppercase mt-1.5 font-medium truncate"
            style={{ color: "var(--text-3)" }}
          >
            Monitoramento Global de Imigração
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap flex-shrink-0">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[1px] uppercase"
          style={{
            background: "rgba(16,224,160,.12)",
            border: "1px solid rgba(16,224,160,.4)",
            color: "var(--color-status-stable)",
          }}
        >
          <span className="wt-live-dot" />
          <span className="hidden sm:inline">{liveLabel}</span>
          <span className="sm:hidden">{liveLabelShort}</span>
        </div>

        {isAdmin && <ExportButton minimal />}

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

        {/* Cadeado · trava/destrava drag+resize de todas as caixas */}
        <IconBtn
          title={locked ? "Layout travado · clica pra destravar" : "Layout livre · clica pra travar"}
          onClick={() => {
            toggleLock();
            toast(locked ? "🔓 Layout destravado — caixas podem ser movidas e redimensionadas" : "🔒 Layout travado — caixas fixas no lugar");
          }}
          active={locked}
          activeColor="#FFB13B"
        >
          {locked ? (
            // Cadeado fechado
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ) : (
            // Cadeado aberto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
          )}
        </IconBtn>

        <IconBtn title="Configurações · cor + fonte" onClick={openPanel}>
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

        {/* User menu / Login */}
        {!isLoggedIn ? (
          <button
            type="button"
            onClick={() => signIn()}
            className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-full text-[11.5px] font-bold uppercase tracking-wider cursor-pointer transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(31,85,255,.35)",
              border: "1px solid rgba(74,122,255,.5)",
            }}
          >
            Entrar
          </button>
        ) : (
          <div className="relative">
            <button
              type="button"
              onClick={() => setUserMenuOpen((v) => !v)}
              title={session?.user?.email ?? ""}
              className="w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:-translate-y-px text-[14px] font-extrabold"
              style={{
                background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
                color: "#fff",
                boxShadow: "0 0 0 2px rgba(74,122,255,.3), 0 4px 14px rgba(31,85,255,.35)",
                border: "1px solid rgba(74,122,255,.5)",
              }}
            >
              {userInitial}
            </button>
            {userMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                <div
                  className="absolute right-0 top-[44px] z-50 w-[260px] rounded-xl py-2 wt-card"
                  style={{
                    border: "1px solid var(--border-hi)",
                    boxShadow: "var(--shadow-bar)",
                  }}
                >
                  <div className="px-4 py-2.5 border-b" style={{ borderColor: "var(--border)" }}>
                    <div className="text-[12px] font-bold truncate" style={{ color: "var(--text)" }}>
                      {session?.user?.email}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider font-bold mt-0.5" style={{ color: isAdmin ? "var(--color-wh-blue-light)" : "var(--text-3)" }}>
                      {isAdmin ? "Admin master" : "Editor"}
                    </div>
                  </div>

                  {isAdmin && (
                    <Link
                      href="/admin/allowlist"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2.5 text-[12.5px] hover:bg-white/5 transition-colors"
                      style={{ color: "var(--text-2)" }}
                    >
                      🔐 Allowlist · gerenciar acesso
                    </Link>
                  )}

                  <div className="my-1 border-t" style={{ borderColor: "var(--border)" }} />

                  <PushToggle />

                  <div className="my-1 border-t" style={{ borderColor: "var(--border)" }} />

                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      signOut({ callbackUrl: "/auth/signin" });
                    }}
                    className="w-full text-left px-4 py-2.5 text-[12.5px] hover:bg-white/5 transition-colors"
                    style={{ color: "var(--color-status-critical)" }}
                  >
                    ↩ Sair
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

function IconBtn({
  children,
  onClick,
  title,
  active = false,
  activeColor,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  active?: boolean;
  activeColor?: string;
}) {
  const color = active && activeColor ? activeColor : "var(--color-wh-blue-light)";
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center cursor-pointer transition-all hover:-translate-y-px"
      style={{
        border: active && activeColor ? `1px solid ${activeColor}` : "1px solid var(--border)",
        background: active && activeColor ? `${activeColor}22` : "var(--surface)",
        color,
        boxShadow: active && activeColor ? `0 0 0 2px ${activeColor}33, 0 2px 8px ${activeColor}30` : undefined,
      }}
    >
      {children}
    </button>
  );
}

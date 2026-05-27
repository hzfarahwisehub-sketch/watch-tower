"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ERROR_MESSAGES: Record<string, string> = {
  Configuration: "Erro de configuração do servidor. Avise o admin.",
  AccessDenied: "Seu e-mail não está autorizado a acessar este painel.",
  Verification: "O link expirou ou já foi usado. Solicite outro.",
  Default: "Erro inesperado de autenticação.",
};

function ErrorContent() {
  const params = useSearchParams();
  const error = params.get("error") ?? "Default";
  const message = ERROR_MESSAGES[error] ?? ERROR_MESSAGES.Default;

  return (
    <div
      className="wt-card w-full max-w-md p-8 flex flex-col gap-4 text-center"
      style={{ borderRadius: 14 }}
    >
      <div className="text-[48px]">⚠</div>
      <h1
        className="text-[18px] font-extrabold tracking-[2px] uppercase"
        style={{ color: "var(--color-status-critical)" }}
      >
        Falha no acesso
      </h1>
      <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
        {message}
      </p>
      <p className="text-[11px]" style={{ color: "var(--text-3)" }}>
        Código: <code style={{ background: "var(--bg2)", padding: "2px 6px", borderRadius: 4 }}>{error}</code>
      </p>
      <a
        href="/auth/signin"
        className="px-4 py-2 rounded-lg font-bold tracking-wider uppercase text-[12px] mt-2 self-center"
        style={{
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          color: "var(--text)",
        }}
      >
        Tentar novamente
      </a>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Suspense fallback={<div style={{ color: "var(--text-3)" }}>Carregando…</div>}>
        <ErrorContent />
      </Suspense>
    </main>
  );
}

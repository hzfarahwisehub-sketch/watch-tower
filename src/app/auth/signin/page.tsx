"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { PasswordInput } from "@/components/PasswordInput";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [magicSubmitting, setMagicSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // Mensagens vindas por query (?reset=ok depois de redefinir a senha).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("reset") === "ok") setNotice("Senha redefinida. Entre com a nova senha.");
    if (p.get("registered") === "ok") setNotice("Senha criada. Entre com ela abaixo.");
  }, []);

  function callbackUrl(): string {
    const p = new URLSearchParams(window.location.search);
    return p.get("callbackUrl") || "/";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setNotice(null);
    try {
      const res = await signIn("password", { email, password, redirect: false });
      if (res?.error) {
        setError("E-mail ou senha incorretos. Verifique e tente de novo.");
      } else {
        window.location.href = callbackUrl();
      }
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  // Rede de segurança: link mágico por e-mail (fallback de emergência).
  async function handleMagicLink() {
    if (!email) {
      setError("Digite o e-mail pra receber o link de acesso.");
      return;
    }
    setMagicSubmitting(true);
    setError(null);
    setNotice(null);
    try {
      const res = await signIn("resend", { email, redirect: false, callbackUrl: callbackUrl() });
      if (res?.error) {
        setError("Não foi possível enviar o link. Verifique o e-mail.");
      } else {
        window.location.href = "/auth/verify";
      }
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setMagicSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ color: "var(--text)" }}
    >
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(31,85,255,.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="w-full max-w-[440px] flex flex-col items-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/brand/watchtower-icon.png"
            alt="WiseHub Watch Tower"
            width={72}
            height={72}
            priority
            className="h-16 w-16 rounded-2xl"
          />
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-status-stable)", boxShadow: "0 0 8px var(--color-status-stable)" }} />
            <h1 className="text-[15px] font-extrabold tracking-[3px] uppercase" style={{ color: "var(--color-wh-blue-light)" }}>
              Watch Tower
            </h1>
          </div>
          <p className="text-[10px] tracking-[2.5px] uppercase font-medium" style={{ color: "var(--text-3)" }}>
            Monitoramento Global de Imigração
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="wt-card w-full p-7 flex flex-col gap-5"
          style={{ borderRadius: 16, boxShadow: "var(--shadow-bar)" }}
        >
          <div>
            <h2 className="text-[18px] font-extrabold mb-1.5" style={{ color: "var(--text)" }}>
              Acessar painel
            </h2>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              Entre com seu e-mail autorizado e sua senha.
            </p>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>
              E-mail autorizado
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="voce@wisehubnow.com"
              autoFocus
              autoComplete="email"
              className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all"
              style={{ background: "var(--bg2)", border: "1.5px solid var(--border)", color: "var(--text)" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>
              Senha
            </span>
            <PasswordInput value={password} onChange={setPassword} required autoComplete="current-password" />
          </label>

          <button
            type="submit"
            disabled={submitting || !email || !password}
            className="px-4 py-3.5 rounded-lg font-extrabold tracking-[1.5px] uppercase text-[12.5px] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
              color: "#fff",
              boxShadow: "0 6px 20px rgba(31,85,255,.45), inset 0 1px 0 rgba(255,255,255,.15)",
              border: "1px solid rgba(74,122,255,.5)",
            }}
          >
            {submitting ? "Entrando…" : "Entrar"}
          </button>

          {notice && (
            <div
              className="text-[12px] px-3.5 py-2.5 rounded-lg flex items-start gap-2"
              style={{ color: "var(--color-status-stable)", background: "rgba(16,224,160,.10)", border: "1px solid rgba(16,224,160,.35)" }}
            >
              <span className="text-[14px] leading-none mt-px">✓</span>
              <span>{notice}</span>
            </div>
          )}

          {error && (
            <div
              className="text-[12px] px-3.5 py-2.5 rounded-lg flex items-start gap-2"
              style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.12)", border: "1px solid rgba(255,59,92,.4)" }}
            >
              <span className="text-[14px] leading-none mt-px">⚠</span>
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[11.5px] pt-1">
            <Link href="/auth/set-password" className="font-bold hover:underline" style={{ color: "var(--color-wh-blue-light)" }}>
              Primeiro acesso
            </Link>
            <Link href="/auth/reset" className="font-bold hover:underline" style={{ color: "var(--text-2)" }}>
              Esqueci a senha
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-3 mt-1" style={{ borderTop: "1px solid var(--border)" }}>
            <button
              type="button"
              onClick={handleMagicLink}
              disabled={magicSubmitting}
              className="text-[11px] uppercase tracking-[1.5px] font-bold transition-all hover:opacity-80 disabled:opacity-50"
              style={{ color: "var(--text-3)" }}
            >
              {magicSubmitting ? "Enviando…" : "Não consegue entrar? Receber link por e-mail"}
            </button>
            <div className="flex items-center gap-2 text-[11px]" style={{ color: "var(--text-3)" }}>
              <span className="text-[14px] leading-none">🔒</span>
              <span>Acesso restrito · e-mails autorizados pela administração.</span>
            </div>
          </div>
        </form>

        <p className="text-[10px] tracking-[2px] uppercase font-medium" style={{ color: "var(--text-3)" }}>
          © WiseHub US LLC · Watch Tower
        </p>
      </div>
    </main>
  );
}

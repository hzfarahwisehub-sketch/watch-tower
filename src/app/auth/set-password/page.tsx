"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SetPasswordPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("As senhas não conferem.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        // Cria a senha e já loga direto.
        const login = await signIn("password", { email, password, redirect: false });
        if (login?.error) {
          window.location.href = "/auth/signin?registered=ok";
        } else {
          window.location.href = "/";
        }
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string; message?: string };
      if (res.status === 409) {
        setError(data.message ?? "Esta conta já tem senha. Use \"Esqueci a senha\".");
      } else if (res.status === 403) {
        setError(data.message ?? "Este e-mail não está autorizado.");
      } else {
        setError(data.message ?? "Não foi possível definir a senha. Tente de novo.");
      }
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden" style={{ color: "var(--text)" }}>
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(31,85,255,.25), transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="w-full max-w-[440px] flex flex-col items-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <Image src="/brand/watchtower-icon.png" alt="WiseHub Watch Tower" width={72} height={72} priority className="h-16 w-16 rounded-2xl" />
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-status-stable)", boxShadow: "0 0 8px var(--color-status-stable)" }} />
            <h1 className="text-[15px] font-extrabold tracking-[3px] uppercase" style={{ color: "var(--color-wh-blue-light)" }}>
              Watch Tower
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="wt-card w-full p-7 flex flex-col gap-5" style={{ borderRadius: 16, boxShadow: "var(--shadow-bar)" }}>
          <div>
            <h2 className="text-[18px] font-extrabold mb-1.5" style={{ color: "var(--text)" }}>
              Primeiro acesso
            </h2>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              Defina sua senha. Seu e-mail precisa estar na lista de autorizados.
            </p>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>E-mail autorizado</span>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="voce@wisehubnow.com" autoFocus autoComplete="email"
              className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all"
              style={{ background: "var(--bg2)", border: "1.5px solid var(--border)", color: "var(--text)" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>Nova senha (mín. 8)</span>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" autoComplete="new-password"
              className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all"
              style={{ background: "var(--bg2)", border: "1.5px solid var(--border)", color: "var(--text)" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>Confirmar senha</span>
            <input
              type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required placeholder="••••••••" autoComplete="new-password"
              className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all"
              style={{ background: "var(--bg2)", border: "1.5px solid var(--border)", color: "var(--text)" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </label>

          <button
            type="submit"
            disabled={submitting || !email || !password || !confirm}
            className="px-4 py-3.5 rounded-lg font-extrabold tracking-[1.5px] uppercase text-[12.5px] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
              color: "#fff",
              boxShadow: "0 6px 20px rgba(31,85,255,.45), inset 0 1px 0 rgba(255,255,255,.15)",
              border: "1px solid rgba(74,122,255,.5)",
            }}
          >
            {submitting ? "Salvando…" : "Definir senha e entrar"}
          </button>

          {error && (
            <div className="text-[12px] px-3.5 py-2.5 rounded-lg flex items-start gap-2" style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.12)", border: "1px solid rgba(255,59,92,.4)" }}>
              <span className="text-[14px] leading-none mt-px">⚠</span>
              <span>{error}</span>
            </div>
          )}

          <Link href="/auth/signin" className="text-[11px] uppercase tracking-[2px] font-bold text-center hover:underline transition-all pt-2" style={{ color: "var(--color-wh-blue-light)", borderTop: "1px solid var(--border)" }}>
            ← Já tenho senha
          </Link>
        </form>

        <p className="text-[10px] tracking-[2px] uppercase font-medium" style={{ color: "var(--text-3)" }}>
          © WiseHub US LLC · Watch Tower
        </p>
      </div>
    </main>
  );
}

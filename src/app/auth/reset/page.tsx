"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResetPage() {
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // request mode
  const [email, setEmail] = useState("");
  const [requested, setRequested] = useState(false);

  // confirm mode
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setToken(p.get("token"));
    setReady(true);
  }, []);

  async function handleRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await fetch("/api/auth/reset/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      // Sempre mostra confirmação (anti-enumeração).
      setRequested(true);
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleConfirm(e: React.FormEvent<HTMLFormElement>) {
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
      const res = await fetch("/api/auth/reset/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      if (res.ok) {
        window.location.href = "/auth/signin?reset=ok";
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      setError(data.message ?? "Link inválido ou expirado. Peça um novo.");
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle = { background: "var(--bg2)", border: "1.5px solid var(--border)", color: "var(--text)" };
  const focusOn = (e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)");
  const focusOff = (e: React.FocusEvent<HTMLInputElement>) => (e.currentTarget.style.borderColor = "var(--border)");

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden" style={{ color: "var(--text)" }}>
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(31,85,255,.22), transparent 70%)", filter: "blur(40px)" }}
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

        <div className="wt-card w-full p-7 flex flex-col gap-5" style={{ borderRadius: 16, boxShadow: "var(--shadow-bar)" }}>
          {!ready ? (
            <p className="text-center text-[13px]" style={{ color: "var(--text-3)" }}>Carregando…</p>
          ) : token ? (
            // ── Modo confirmar (tem token) ──
            <form onSubmit={handleConfirm} className="flex flex-col gap-5">
              <div>
                <h2 className="text-[18px] font-extrabold mb-1.5" style={{ color: "var(--text)" }}>Nova senha</h2>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>Escolha uma senha nova pra sua conta.</p>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>Nova senha (mín. 8)</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" autoFocus autoComplete="new-password" className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all" style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>Confirmar senha</span>
                <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required placeholder="••••••••" autoComplete="new-password" className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all" style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
              </label>
              <button type="submit" disabled={submitting || !password || !confirm} className="px-4 py-3.5 rounded-lg font-extrabold tracking-[1.5px] uppercase text-[12.5px] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" style={{ background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", color: "#fff", boxShadow: "0 6px 20px rgba(31,85,255,.45), inset 0 1px 0 rgba(255,255,255,.15)", border: "1px solid rgba(74,122,255,.5)" }}>
                {submitting ? "Salvando…" : "Redefinir senha"}
              </button>
              {error && (
                <div className="text-[12px] px-3.5 py-2.5 rounded-lg flex items-start gap-2" style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.12)", border: "1px solid rgba(255,59,92,.4)" }}>
                  <span className="text-[14px] leading-none mt-px">⚠</span><span>{error}</span>
                </div>
              )}
            </form>
          ) : requested ? (
            // ── Confirmação de envio ──
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]" style={{ background: "linear-gradient(135deg, rgba(16,224,160,.2), rgba(16,224,160,.05))", border: "1px solid rgba(16,224,160,.4)" }}>✓</div>
              <h2 className="text-[18px] font-extrabold" style={{ color: "var(--text)" }}>Verifique seu e-mail</h2>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                Se este e-mail estiver autorizado e já tiver senha, enviamos um link pra redefinir. O link expira em 1 hora.
              </p>
              <Link href="/auth/signin" className="text-[11px] uppercase tracking-[2px] font-bold mt-1 hover:underline" style={{ color: "var(--color-wh-blue-light)" }}>← Voltar pro login</Link>
            </div>
          ) : (
            // ── Modo pedir reset (sem token) ──
            <form onSubmit={handleRequest} className="flex flex-col gap-5">
              <div>
                <h2 className="text-[18px] font-extrabold mb-1.5" style={{ color: "var(--text)" }}>Esqueci a senha</h2>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>Digite seu e-mail e mandamos um link pra redefinir.</p>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[10.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--text-3)" }}>E-mail autorizado</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="voce@wisehubnow.com" autoFocus autoComplete="email" className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all" style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
              </label>
              <button type="submit" disabled={submitting || !email} className="px-4 py-3.5 rounded-lg font-extrabold tracking-[1.5px] uppercase text-[12.5px] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" style={{ background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", color: "#fff", boxShadow: "0 6px 20px rgba(31,85,255,.45), inset 0 1px 0 rgba(255,255,255,.15)", border: "1px solid rgba(74,122,255,.5)" }}>
                {submitting ? "Enviando…" : "Enviar link de redefinição"}
              </button>
              {error && (
                <div className="text-[12px] px-3.5 py-2.5 rounded-lg flex items-start gap-2" style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.12)", border: "1px solid rgba(255,59,92,.4)" }}>
                  <span className="text-[14px] leading-none mt-px">⚠</span><span>{error}</span>
                </div>
              )}
              <Link href="/auth/signin" className="text-[11px] uppercase tracking-[2px] font-bold text-center hover:underline pt-2" style={{ color: "var(--color-wh-blue-light)", borderTop: "1px solid var(--border)" }}>← Voltar pro login</Link>
            </form>
          )}
        </div>

        <p className="text-[10px] tracking-[2px] uppercase font-medium" style={{ color: "var(--text-3)" }}>
          © WiseHub US LLC · Watch Tower
        </p>
      </div>
    </main>
  );
}

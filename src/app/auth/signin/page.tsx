"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await signIn("resend", {
        email,
        redirect: false,
        callbackUrl: "/",
      });
      if (res?.error) {
        setError("Não foi possível enviar o link. Verifique o e-mail e tente de novo.");
      } else {
        window.location.href = "/auth/verify";
      }
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ color: "var(--text)" }}
    >
      {/* Glow decorativo no canto superior */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(31,85,255,.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="w-full max-w-[440px] flex flex-col items-center gap-8 relative z-10">
        {/* Logo + título */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/brand/wisehub-logo-dark.svg"
            alt="WiseHub"
            width={180}
            height={45}
            priority
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-status-stable)", boxShadow: "0 0 8px var(--color-status-stable)" }} />
            <h1
              className="text-[15px] font-extrabold tracking-[3px] uppercase"
              style={{ color: "var(--color-wh-blue-light)" }}
            >
              Watch Tower
            </h1>
          </div>
          <p
            className="text-[10px] tracking-[2.5px] uppercase font-medium"
            style={{ color: "var(--text-3)" }}
          >
            Monitoramento Global de Imigração
          </p>
        </div>

        {/* Card */}
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
              Digite seu e-mail e te mandamos um link mágico de acesso (válido por 24h).
            </p>
          </div>

          <label className="flex flex-col gap-2">
            <span
              className="text-[10.5px] tracking-[2px] uppercase font-bold"
              style={{ color: "var(--text-3)" }}
            >
              E-mail autorizado
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="hzfarah.wisehub@gmail.com"
              autoFocus
              autoComplete="email"
              className="px-4 py-3 rounded-lg text-[14px] outline-none transition-all"
              style={{
                background: "var(--bg2)",
                border: "1.5px solid var(--border)",
                color: "var(--text)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </label>

          <button
            type="submit"
            disabled={submitting || !email}
            className="px-4 py-3.5 rounded-lg font-extrabold tracking-[1.5px] uppercase text-[12.5px] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
              color: "#fff",
              boxShadow: "0 6px 20px rgba(31,85,255,.45), inset 0 1px 0 rgba(255,255,255,.15)",
              border: "1px solid rgba(74,122,255,.5)",
            }}
          >
            {submitting ? "Enviando…" : "Receber link de acesso"}
          </button>

          {error && (
            <div
              className="text-[12px] px-3.5 py-2.5 rounded-lg flex items-start gap-2"
              style={{
                color: "var(--color-status-critical)",
                background: "rgba(255,59,92,.12)",
                border: "1px solid rgba(255,59,92,.4)",
              }}
            >
              <span className="text-[14px] leading-none mt-px">⚠</span>
              <span>{error}</span>
            </div>
          )}

          <div
            className="flex items-center gap-2 pt-3 mt-1 text-[11px]"
            style={{ color: "var(--text-3)", borderTop: "1px solid var(--border)" }}
          >
            <span className="text-[14px] leading-none">🔒</span>
            <span>Acesso restrito · e-mails autorizados pela administração.</span>
          </div>
        </form>

        {/* Footer */}
        <p className="text-[10px] tracking-[2px] uppercase font-medium" style={{ color: "var(--text-3)" }}>
          © WiseHub US LLC · Watch Tower
        </p>
      </div>
    </main>
  );
}

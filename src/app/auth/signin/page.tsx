"use client";
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
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="wt-card w-full max-w-md p-8 flex flex-col gap-5"
        style={{ borderRadius: 14 }}
      >
        <div>
          <h1
            className="text-[20px] font-extrabold tracking-[2px] uppercase mb-1"
            style={{ color: "var(--color-wh-blue-light)" }}
          >
            Watch Tower
          </h1>
          <p className="text-[11px] tracking-[2.5px] uppercase font-medium" style={{ color: "var(--text-3)" }}>
            Monitoramento Global de Imigração
          </p>
        </div>

        <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
          Digite seu e-mail e te mandamos um link mágico de acesso (válido por 24h).
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="seu@email.com"
          autoFocus
          className="px-4 py-3 rounded-lg text-[14px] outline-none"
          style={{
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        />

        <button
          type="submit"
          disabled={submitting || !email}
          className="px-4 py-3 rounded-lg font-bold tracking-wider uppercase text-[13px] transition-all hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
            color: "#fff",
            boxShadow: "0 4px 14px rgba(31,85,255,.35)",
          }}
        >
          {submitting ? "Enviando…" : "Receber link de acesso"}
        </button>

        {error && (
          <p
            className="text-[12px] px-3 py-2 rounded-lg"
            style={{
              color: "var(--color-status-critical)",
              background: "rgba(255,59,92,.1)",
              border: "1px solid rgba(255,59,92,.3)",
            }}
          >
            {error}
          </p>
        )}

        <p className="text-[10.5px] mt-2" style={{ color: "var(--text-3)" }}>
          Acesso restrito a e-mails autorizados pela administração.
        </p>
      </form>
    </main>
  );
}

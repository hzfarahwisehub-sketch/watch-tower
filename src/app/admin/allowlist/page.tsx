"use client";
import { useCallback, useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type AllowedEmail = {
  id: string;
  email: string;
  role: "admin" | "editor";
  addedBy: string | null;
  addedAt: string;
  notes: string | null;
};

type LoadState =
  | { status: "loading" }
  | { status: "ok"; allowed: AllowedEmail[] }
  | { status: "error"; message: string };

export default function AllowlistPage() {
  const { data: session, status: sessionStatus } = useSession();
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "editor">("editor");
  const [newNotes, setNewNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/allowlist", { cache: "no-store" });
      if (res.status === 401) {
        setState({ status: "error", message: "Não autenticado. Faça login." });
        return;
      }
      if (res.status === 403) {
        setState({ status: "error", message: "Acesso restrito a admins." });
        return;
      }
      if (!res.ok) {
        setState({ status: "error", message: `Erro HTTP ${res.status}` });
        return;
      }
      const data = await res.json();
      setState({ status: "ok", allowed: data.allowed });
    } catch (err) {
      setState({ status: "error", message: String(err) });
    }
  }, []);

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      load();
    } else if (sessionStatus === "unauthenticated") {
      setState({ status: "error", message: "Não autenticado." });
    }
  }, [sessionStatus, load]);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (!newEmail) return;
    setSubmitting(true);
    setActionError(null);
    try {
      const res = await fetch("/api/admin/allowlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newEmail.trim().toLowerCase(),
          role: newRole,
          notes: newNotes.trim() || undefined,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setActionError(body.message ?? `HTTP ${res.status}`);
        return;
      }
      setNewEmail("");
      setNewNotes("");
      setNewRole("editor");
      await load();
    } finally {
      setSubmitting(false);
    }
  }

  async function remove(email: string) {
    if (!confirm(`Remover ${email} da allowlist?`)) return;
    setActionError(null);
    try {
      const res = await fetch(
        `/api/admin/allowlist?email=${encodeURIComponent(email)}`,
        { method: "DELETE" },
      );
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setActionError(body.message ?? `HTTP ${res.status}`);
        return;
      }
      await load();
    } catch (err) {
      setActionError(String(err));
    }
  }

  return (
    <main className="min-h-screen px-6 py-10" style={{ color: "var(--text)" }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-7">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 flex-wrap">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/brand/watchtower-icon.png"
              alt="WiseHub Watch Tower"
              width={40}
              height={40}
              priority
              className="h-9 w-9 rounded-[10px]"
            />
            <span
              className="text-[14px] font-extrabold tracking-[2.5px] uppercase"
              style={{ color: "var(--color-wh-blue-light)" }}
            >
              ← Watch Tower
            </span>
          </Link>

          {session?.user?.email && (
            <div className="flex items-center gap-3 text-[12px]">
              <span style={{ color: "var(--text-3)" }}>{session.user.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                className="px-3 py-1.5 rounded-lg uppercase tracking-wider font-bold text-[10.5px] transition-all hover:-translate-y-px"
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  color: "var(--text-2)",
                }}
              >
                Sair
              </button>
            </div>
          )}
        </header>

        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[22px] font-extrabold tracking-[2px] uppercase" style={{ color: "var(--text)" }}>
            🔐 Allowlist · Quem pode entrar
          </h1>
          <p className="text-[13px]" style={{ color: "var(--text-2)" }}>
            Lista de e-mails autorizados a fazer login no painel. Outros e-mails são silenciosamente rejeitados.
          </p>
        </div>

        {/* Loading */}
        {state.status === "loading" && (
          <div
            className="wt-card p-6 text-center text-[13px]"
            style={{ color: "var(--text-3)" }}
          >
            Carregando…
          </div>
        )}

        {/* Error */}
        {state.status === "error" && (
          <div
            className="wt-card p-6 flex items-start gap-3"
            style={{
              borderLeft: "3px solid var(--color-status-critical)",
              color: "var(--text)",
            }}
          >
            <span className="text-[20px] leading-none" style={{ color: "var(--color-status-critical)" }}>⚠</span>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Não foi possível carregar</h3>
              <p className="text-[12.5px]" style={{ color: "var(--text-2)" }}>{state.message}</p>
              {sessionStatus === "unauthenticated" && (
                <Link
                  href="/auth/signin"
                  className="inline-block mt-3 px-4 py-2 rounded-lg uppercase tracking-wider font-bold text-[11px]"
                  style={{
                    background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
                    color: "#fff",
                  }}
                >
                  Fazer login
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Form add */}
        {state.status === "ok" && (
          <form
            onSubmit={add}
            className="wt-card p-5 flex flex-col gap-3"
          >
            <h2 className="text-[12px] tracking-[2px] uppercase font-bold" style={{ color: "var(--color-wh-blue-light)" }}>
              + Adicionar e-mail
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px_auto] gap-3">
              <input
                type="email"
                required
                placeholder="email@example.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="px-3 py-2.5 rounded-lg text-[13px] outline-none"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)" }}
              />
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value as "admin" | "editor")}
                className="px-3 py-2.5 rounded-lg text-[13px] outline-none cursor-pointer"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)" }}
              >
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type="submit"
                disabled={submitting || !newEmail}
                className="px-5 py-2.5 rounded-lg font-extrabold tracking-wider uppercase text-[11.5px] transition-all hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
                  color: "#fff",
                  boxShadow: "0 4px 14px rgba(31,85,255,.35)",
                }}
              >
                {submitting ? "Salvando…" : "Adicionar"}
              </button>
            </div>
            <input
              type="text"
              placeholder="Anotação opcional (ex: 'Lucas Bin · sócio 30%')"
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
              className="px-3 py-2 rounded-lg text-[12px] outline-none"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text-2)" }}
            />
            {actionError && (
              <div
                className="text-[12px] px-3 py-2 rounded-lg"
                style={{
                  color: "var(--color-status-critical)",
                  background: "rgba(255,59,92,.1)",
                  border: "1px solid rgba(255,59,92,.3)",
                }}
              >
                {actionError}
              </div>
            )}
          </form>
        )}

        {/* List */}
        {state.status === "ok" && (
          <div className="wt-card overflow-hidden">
            <div
              className="px-5 py-3.5 flex items-center justify-between"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <h2 className="text-[12px] tracking-[2px] uppercase font-bold" style={{ color: "var(--color-wh-blue-light)" }}>
                {state.allowed.length} {state.allowed.length === 1 ? "e-mail autorizado" : "e-mails autorizados"}
              </h2>
            </div>
            <ul className="divide-y" style={{ borderColor: "var(--border)" }}>
              {state.allowed.map((entry) => {
                const isSelf = entry.email === session?.user?.email;
                const roleColor = entry.role === "admin" ? "var(--color-wh-blue-light)" : "var(--text-3)";
                return (
                  <li
                    key={entry.id}
                    className="px-5 py-3.5 flex items-center justify-between gap-4 transition-colors"
                  >
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-[14px] font-bold truncate" style={{ color: "var(--text)" }}>
                          {entry.email}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold"
                          style={{
                            color: roleColor,
                            background: entry.role === "admin" ? "rgba(74,122,255,.15)" : "rgba(255,255,255,.05)",
                            border: `1px solid ${entry.role === "admin" ? "rgba(74,122,255,.4)" : "var(--border)"}`,
                          }}
                        >
                          {entry.role}
                        </span>
                        {isSelf && (
                          <span
                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded"
                            style={{
                              color: "var(--color-status-stable)",
                              background: "rgba(16,224,160,.12)",
                            }}
                          >
                            você
                          </span>
                        )}
                      </div>
                      {entry.notes && (
                        <p className="text-[11.5px]" style={{ color: "var(--text-2)" }}>{entry.notes}</p>
                      )}
                      <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
                        adicionado {new Date(entry.addedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })}
                        {entry.addedBy && ` · por ${entry.addedBy}`}
                      </p>
                    </div>
                    <button
                      onClick={() => remove(entry.email)}
                      disabled={isSelf}
                      title={isSelf ? "Não pode remover você mesmo" : "Remover"}
                      className="px-3 py-1.5 rounded-lg uppercase tracking-wider font-bold text-[10.5px] transition-all hover:-translate-y-px disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                      style={{
                        color: "var(--color-status-critical)",
                        background: "rgba(255,59,92,.08)",
                        border: "1px solid rgba(255,59,92,.3)",
                      }}
                    >
                      Remover
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Help */}
        {state.status === "ok" && (
          <div
            className="px-4 py-3 rounded-lg text-[11.5px]"
            style={{
              color: "var(--text-3)",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="mb-1.5"><strong style={{ color: "var(--text-2)" }}>Como funciona</strong></p>
            <p>Quem está aqui pode fazer login via magic link. Quem não está, ao tentar logar, recebe a tela de &ldquo;link enviado&rdquo; — mas o link <em>nunca</em> é enviado (proteção pra não vazar quem está/não está na lista).</p>
          </div>
        )}
      </div>
    </main>
  );
}

"use client";
// Card 📧 Inbox REAL (Fase 3): contadores de não-lidos ao vivo via IMAP.
// Duas seções: caixas WiseHub (compartilhadas, todo logado vê) e "Minhas
// contas" (pessoais — cada usuário cadastra a sua e SÓ ele enxerga; decisão
// Hammis 2026-07-01). Clicar numa caixa ao vivo abre o MailViewer embutido.
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DailyCard } from "./DailyCard";
import { MailViewer } from "./MailViewer";
import { MailCompose, type ComposePrefill } from "./MailCompose";
import { useLocale } from "./LocaleProvider";
import { useToast } from "./ToastProvider";
import type { MailAccountStatus, MailStatusResponse } from "@/lib/mail/types";

const POLL_MS = 5 * 60 * 1000;

export function InboxCard() {
  const { t } = useLocale();
  const toast = useToast();

  const [accounts, setAccounts] = useState<MailAccountStatus[]>([]);
  const [phase, setPhase] = useState<"loading" | "ok" | "anon" | "error">("loading");
  const [dbDown, setDbDown] = useState(false);
  const [viewer, setViewer] = useState<MailAccountStatus | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [compose, setCompose] = useState<ComposePrefill | null>(null);

  const load = useCallback(async (force = false): Promise<MailAccountStatus[] | null> => {
    try {
      const res = await fetch(`/api/mail/status${force ? "?refresh=1" : ""}`);
      if (res.status === 401 || res.status === 403) {
        setPhase("anon");
        return null;
      }
      if (!res.ok) {
        setPhase((p) => (p === "ok" ? "ok" : "error"));
        return null;
      }
      const data: MailStatusResponse = await res.json();
      setAccounts(data.accounts);
      setDbDown(!!data.personalDbDown);
      setPhase("ok");
      return data.accounts;
    } catch {
      setPhase((p) => (p === "ok" ? "ok" : "error"));
      return null;
    }
  }, []);

  useEffect(() => {
    load();
    const iv = setInterval(() => {
      if (!document.hidden) load();
    }, POLL_MS);
    return () => clearInterval(iv);
  }, [load]);

  const sync = useCallback(async () => {
    const accs = await load(true);
    if (accs) {
      const live = accs.filter((a) => a.state === "live").length;
      toast(t("mail.synced", { live }));
    }
  }, [load, t, toast]);

  const removePersonal = useCallback(
    async (a: MailAccountStatus) => {
      if (!window.confirm(`${t("mail.personal.delete.confirm")}\n\n${a.address}`)) return;
      try {
        const res = await fetch("/api/mail/personal", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: a.id }),
        });
        if (!res.ok) throw new Error(String(res.status));
        toast(t("mail.personal.deleted"));
        load();
      } catch {
        toast(t("mail.add.err.db_unavailable"));
      }
    },
    [load, t, toast],
  );

  const openAccount = useCallback(
    (a: MailAccountStatus) => {
      if (a.state === "live") setViewer(a);
      else if (a.state === "pending") toast(t("mail.state.pending.hint"));
      else if (a.state === "off") toast(t("mail.state.off.hint"));
      else toast(t("mail.state.error.hint"));
    },
    [t, toast],
  );

  const shared = accounts.filter((a) => a.kind === "shared");
  const personal = accounts.filter((a) => a.kind === "personal");
  const unreadTotal = accounts
    .filter((a) => a.state === "live")
    .reduce((s, a) => s + a.unseen, 0);

  const sectionHeader = (label: string, extra?: React.ReactNode) => (
    <div className="flex items-center justify-between px-4 pt-2 pb-1">
      <span
        className="text-[9px] uppercase tracking-[2px] font-extrabold"
        style={{ color: "var(--text-3)" }}
      >
        {label}
      </span>
      {extra}
    </div>
  );

  return (
    <>
      <DailyCard
        t={t}
        cardKey="inbox"
        title={t("mail.title")}
        total={t("mail.total", { n: unreadTotal })}
        action={t("mail.sync")}
        onAction={sync}
        bodyMaxHeight={300}
      >
        {phase === "loading" && (
          <div className="px-4 py-3 text-[11px]" style={{ color: "var(--text-3)" }}>
            {t("mail.loading")}
          </div>
        )}
        {phase === "anon" && (
          <a
            href="/auth/signin"
            className="block px-4 py-3 text-[11px] font-semibold underline"
            style={{ color: "var(--color-wh-blue-light)" }}
          >
            {t("mail.signin")}
          </a>
        )}
        {phase === "error" && (
          <div className="px-4 py-3 text-[11px]" style={{ color: "var(--color-status-critical)" }}>
            {t("mail.error")}
          </div>
        )}

        {phase === "ok" && accounts.length === 0 && (
          <div className="px-4 py-4 text-[11px] leading-relaxed" style={{ color: "var(--text-3)" }}>
            {t("mail.noAccounts")}
          </div>
        )}

        {phase === "ok" && accounts.length > 0 && (
          <>
            {accounts.some((a) => a.state === "live") && (
              <div className="px-4 pt-2.5 pb-1">
                <button
                  type="button"
                  onClick={() => setCompose({ mode: "new" })}
                  className="w-full py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide cursor-pointer transition-all hover:-translate-y-px"
                  style={{ background: "var(--color-wh-blue)", color: "#fff", boxShadow: "0 2px 8px rgba(31,85,255,.3)" }}
                >
                  {t("mail.compose.new")}
                </button>
              </div>
            )}
            {shared.length > 0 && sectionHeader(t("mail.shared.header"))}
            {shared.map((a) => (
              <AccountRow key={a.id} a={a} onOpen={openAccount} t={t} />
            ))}

            {sectionHeader(
              t("mail.personal.header"),
              <button
                type="button"
                onClick={() => setShowAdd(true)}
                className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide cursor-pointer"
                style={{
                  background: "rgba(31,85,255,.12)",
                  color: "var(--color-wh-blue-light)",
                  border: "1px solid var(--border-hi)",
                }}
              >
                {t("mail.personal.add")}
              </button>,
            )}
            {dbDown && (
              <div className="px-4 py-2 text-[10px]" style={{ color: "var(--color-status-warning)" }}>
                {t("mail.personal.dbdown")}
              </div>
            )}
            {personal.map((a) => (
              <AccountRow
                key={a.id}
                a={a}
                onOpen={openAccount}
                // remover só as self-service (id "p_"); as pré-configuradas
                // (me_wh/me_gmail) não têm botão de remover.
                onRemove={a.id.startsWith("p_") ? removePersonal : undefined}
                t={t}
              />
            ))}
          </>
        )}
      </DailyCard>

      {viewer && (
        <MailViewer
          account={viewer}
          onCompose={(p) => setCompose(p)}
          onDeleted={() => load(true)}
          suspendEscape={!!compose}
          onClose={() => {
            setViewer(null);
            // force=true: o markSeen bustou o cache, mas em serverless o status
            // pode vir de outra instância; force reduz a janela de contador
            // obsoleto de ~5min pra ≤30s (piso do refresh).
            load(true);
          }}
        />
      )}
      {compose && (
        <MailCompose
          accounts={accounts}
          prefill={compose}
          onClose={() => setCompose(null)}
        />
      )}
      {showAdd && (
        <AddPersonalForm
          onClose={() => setShowAdd(false)}
          onSaved={() => {
            setShowAdd(false);
            load();
          }}
        />
      )}
    </>
  );
}

function AccountRow({
  a,
  onOpen,
  onRemove,
  t,
}: {
  a: MailAccountStatus;
  onOpen: (a: MailAccountStatus) => void;
  onRemove?: (a: MailAccountStatus) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}) {
  const isGmail = a.address.endsWith("gmail.com");
  const stateLabel =
    a.state === "pending"
      ? t("mail.state.pending")
      : a.state === "off"
        ? t("mail.state.off")
        : a.state === "error"
          ? t("mail.state.error")
          : null;

  return (
    <div
      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg my-0.5 transition-colors group hover:bg-[rgba(31,85,255,0.06)]"
      style={{
        borderLeft: "3px solid transparent",
        opacity: a.state === "live" ? 1 : 0.55,
      }}
    >
      <button
        type="button"
        onClick={() => onOpen(a)}
        className="flex items-center gap-3 flex-1 min-w-0 text-left cursor-pointer"
        title={a.state === "live" ? a.address : stateLabel || a.address}
      >
        <div
          className="w-[24px] h-[24px] rounded-[6px] flex items-center justify-center text-[11px] font-bold flex-shrink-0"
          style={{
            background: isGmail
              ? "linear-gradient(135deg,#EA4335,#C5221F)"
              : "linear-gradient(135deg,var(--color-wh-blue),var(--color-wh-blue-dark))",
            color: "#fff",
            boxShadow: "0 2px 6px rgba(31,85,255,.3)",
          }}
        >
          {a.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-[11px] font-semibold truncate leading-tight"
            style={{ color: "var(--text)" }}
          >
            {a.address}
          </div>
          <div
            className="text-[9.5px] mt-1 truncate leading-tight"
            style={{
              color: a.state === "live" ? "var(--text-3)" : "var(--color-status-warning)",
            }}
          >
            {a.state === "live"
              ? a.lastSubject || t("mail.state.live.empty")
              : stateLabel}
          </div>
        </div>
      </button>

      {onRemove && (
        <button
          type="button"
          onClick={() => onRemove(a)}
          title={t("mail.personal.delete")}
          className="opacity-0 group-hover:opacity-100 cursor-pointer text-[12px] px-1 transition-opacity flex-shrink-0"
          style={{ color: "var(--text-3)", background: "none", border: "none" }}
        >
          ✕
        </button>
      )}

      {a.state === "live" ? (
        <button
          type="button"
          onClick={() => onOpen(a)}
          className="px-2 py-0.5 rounded-[11px] text-[10px] font-extrabold flex-shrink-0 min-w-[22px] text-center leading-tight cursor-pointer"
          style={{
            background: a.unseen === 0 ? "transparent" : "var(--color-status-critical)",
            color: a.unseen === 0 ? "var(--text-3)" : "#fff",
          }}
        >
          {a.unseen}
        </button>
      ) : (
        <span
          className="px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-wide flex-shrink-0"
          style={{
            color: "var(--color-status-warning)",
            background: "rgba(255,138,31,.12)",
            border: "1px solid rgba(255,138,31,.3)",
          }}
        >
          ⏳
        </span>
      )}
    </div>
  );
}

function AddPersonalForm({
  onClose,
  onSaved,
}: {
  onClose: () => void;
  onSaved: () => void;
}) {
  const { t } = useLocale();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [host, setHost] = useState("");
  const [needHost, setNeedHost] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  // onClose num ref pro listener de Escape não depender da identidade da função
  // (o pai recria a arrow a cada render; o poll de 5min re-renderiza).
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Foco SÓ no mount — senão qualquer re-render do pai (poll, toast, idioma)
  // roubava o cursor de volta pro campo E-mail durante a digitação.
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/mail/personal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: email.trim(),
          password,
          ...(host.trim() ? { host: host.trim() } : {}),
        }),
      });
      if (res.ok) {
        toast(t("mail.add.success"));
        onSaved();
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      const code = data.error || "";
      if (code === "host_required") setNeedHost(true);
      const known = [
        "auth_failed",
        "connect_failed",
        "host_required",
        "host_invalid",
        "limit_reached",
        "crypto_off",
        "db_unavailable",
      ];
      setError(
        known.includes(code)
          ? t(`mail.add.err.${code}`)
          : t("mail.add.err.generic", { n: res.status }),
      );
    } catch {
      setError(t("mail.add.err.connect_failed"));
    } finally {
      setSaving(false);
    }
  };

  const isGmail = /@gmail\./i.test(email) || /@googlemail\./i.test(email);

  const inputStyle: React.CSSProperties = {
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    color: "var(--text)",
  };

  const body = (
    <div
      className="fixed inset-0 z-[2100] flex items-center justify-center p-4"
      style={{ background: "rgba(5,4,15,.74)", backdropFilter: "blur(6px)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form onSubmit={submit} className="wt-card w-full max-w-[380px] p-5 flex flex-col gap-3">
        <h3
          className="text-[12px] tracking-[2px] uppercase font-bold"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          {t("mail.add.title")}
        </h3>
        <p className="text-[10.5px] leading-relaxed" style={{ color: "var(--text-3)" }}>
          {t("mail.add.desc")}
        </p>

        <label className="flex flex-col gap-1">
          <span className="text-[9.5px] uppercase tracking-wide font-bold" style={{ color: "var(--text-3)" }}>
            {t("mail.add.email")}
          </span>
          <input
            ref={emailRef}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded-md text-[12px] outline-none"
            style={inputStyle}
            autoComplete="off"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-[9.5px] uppercase tracking-wide font-bold" style={{ color: "var(--text-3)" }}>
            {t("mail.add.password")}
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded-md text-[12px] outline-none"
            style={inputStyle}
            autoComplete="new-password"
          />
        </label>

        {isGmail && (
          <p
            className="text-[10px] leading-relaxed px-2.5 py-2 rounded-md"
            style={{
              color: "var(--color-status-warning)",
              background: "rgba(255,138,31,.1)",
              border: "1px solid rgba(255,138,31,.3)",
            }}
          >
            {t("mail.add.gmailHint")}
          </p>
        )}

        <label className="flex flex-col gap-1">
          <span className="text-[9.5px] uppercase tracking-wide font-bold" style={{ color: "var(--text-3)" }}>
            {t("mail.add.host")}
          </span>
          <input
            type="text"
            required={needHost}
            value={host}
            onChange={(e) => setHost(e.target.value)}
            placeholder="imap.exemplo.com"
            className="px-3 py-2 rounded-md text-[12px] outline-none"
            style={inputStyle}
            autoComplete="off"
          />
          <span className="text-[9px]" style={{ color: "var(--text-3)" }}>
            {t("mail.add.hostHint")}
          </span>
        </label>

        {error && (
          <p className="text-[10.5px] font-semibold" style={{ color: "var(--color-status-critical)" }}>
            {error}
          </p>
        )}

        <div className="flex items-center justify-end gap-2 mt-1">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
            style={{ background: "rgba(255,255,255,.05)", color: "var(--text-2)", border: "1px solid var(--border)" }}
          >
            {t("mail.add.cancel")}
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
            style={{
              background: "rgba(31,85,255,.2)",
              color: "var(--color-wh-blue-light)",
              border: "1px solid var(--border-hi)",
              opacity: saving ? 0.6 : 1,
            }}
          >
            {saving ? t("mail.add.saving") : t("mail.add.save")}
          </button>
        </div>
      </form>
    </div>
  );

  return createPortal(body, document.body);
}

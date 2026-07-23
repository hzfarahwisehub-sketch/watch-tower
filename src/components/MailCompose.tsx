"use client";
// Compositor de e-mail (mini-cliente do Inbox Fase 3). Modal em portal:
// De (escolhe a conta), Para/Cc/Cco, Assunto, Corpo, Anexos. Envia via
// /api/mail/send (guarda cópia em Enviados) ou salva em /api/mail/draft.
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "./LocaleProvider";
import { useToast } from "./ToastProvider";
import { MailRichEditor, type MailRichEditorHandle } from "./MailRichEditor";
import type { MailAccountStatus } from "@/lib/mail/types";

export interface ComposePrefill {
  mode: "new" | "reply" | "forward" | "draft";
  /** id da conta remetente sugerida (ex.: a caixa onde a mensagem foi lida) */
  fromAccountId?: string;
  to?: string;
  cc?: string;
  subject?: string;
  body?: string;
  /** Corpo já em HTML (edição de rascunho) — usado direto no editor rico, sem
   *  passar pelo textToHtml (que é só pro prefill de texto puro reply/forward). */
  bodyHtml?: string;
  inReplyTo?: string;
  references?: string[];
  /** anexos já carregados (ex.: encaminhamento leva os anexos do original) */
  attachments?: File[];
  /** UID do rascunho original (modo "draft"): removido ao enviar/salvar de novo,
   *  pra não deixar rascunho duplicado. Vive na conta `fromAccountId`. */
  draftUid?: number;
}

function fmtBytes(n: number): string {
  if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)}MB`;
  if (n >= 1024) return `${Math.round(n / 1024)}KB`;
  return `${n}B`;
}

const MAX_TOTAL_BYTES = 4 * 1024 * 1024;

/** Corpo de prefill (reply/forward) vem em texto puro → HTML pro editor rico. */
function textToHtml(text: string): string {
  if (!text) return "";
  const esc = text.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c] as string));
  return esc.replace(/\r\n|\r|\n/g, "<br>");
}

// ---- Agenda de contatos (Onda 3): autocomplete + auto-save ----
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type ContactSuggestion = { id: string; name: string | null; email: string };

/** "Fulano <a@x.com>" | "a@x.com" → {email, name?}. null se não for e-mail. */
function parseAddress(part: string): { email: string; name?: string } | null {
  const angle = part.match(/^\s*"?([^"<]*?)"?\s*<\s*([^>]+?)\s*>\s*$/);
  if (angle) {
    const email = angle[2].trim().toLowerCase();
    const name = angle[1].trim();
    return EMAIL_RE.test(email) ? { email, name: name || undefined } : null;
  }
  const email = part.trim().toLowerCase();
  return EMAIL_RE.test(email) ? { email } : null;
}

/** Junta destinatários únicos de vários campos (Para/Cc/Cco) pro auto-save. */
function collectContacts(fields: string[]): { email: string; name?: string }[] {
  const seen = new Set<string>();
  const out: { email: string; name?: string }[] = [];
  for (const f of fields) {
    for (const part of f.split(/[,;\n]/)) {
      const a = parseAddress(part);
      if (a && !seen.has(a.email)) {
        seen.add(a.email);
        out.push(a);
      }
    }
  }
  return out;
}

const recipInputStyle: React.CSSProperties = {
  background: "var(--bg2)",
  border: "1px solid var(--border)",
  color: "var(--text)",
};

/**
 * Campo de destinatário (Para/Cc/Cco) com autocomplete da agenda: ao digitar o
 * trecho depois da última vírgula, busca /api/contacts?q= (debounce) e sugere
 * nome+e-mail; escolher preenche o campo. Best-effort — se a busca falhar, o
 * campo continua um input de texto normal.
 */
function RecipientInput({
  value,
  onChange,
  placeholder,
  listLabel,
  inputRef,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  listLabel: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}) {
  const localRef = useRef<HTMLInputElement>(null);
  const ref = inputRef ?? localRef;
  const [suggestions, setSuggestions] = useState<ContactSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  // token = trecho depois do último separador (o e-mail sendo digitado agora)
  const token = useMemo(() => {
    const lastSep = Math.max(value.lastIndexOf(","), value.lastIndexOf(";"));
    return value.slice(lastSep + 1).trim();
  }, [value]);

  useEffect(() => {
    if (token.length < 1) {
      setSuggestions([]);
      return;
    }
    const ctrl = new AbortController();
    const id = setTimeout(() => {
      fetch(`/api/contacts?q=${encodeURIComponent(token)}`, { signal: ctrl.signal })
        .then((r) => (r.ok ? r.json() : { contacts: [] }))
        .then((d: { contacts?: ContactSuggestion[] }) => {
          setSuggestions(Array.isArray(d.contacts) ? d.contacts : []);
          setActive(0);
        })
        .catch(() => {});
    }, 200);
    return () => {
      clearTimeout(id);
      ctrl.abort();
    };
  }, [token]);

  const choose = (c: ContactSuggestion) => {
    const lastSep = Math.max(value.lastIndexOf(","), value.lastIndexOf(";"));
    const prefix = lastSep >= 0 ? value.slice(0, lastSep + 1) + " " : "";
    onChange(prefix + c.email + ", ");
    setSuggestions([]);
    setOpen(false);
    ref.current?.focus();
  };

  const visible = open && suggestions.length > 0;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!visible) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      // só sequestra o Enter quando há item destacado — não bloqueia o submit
      if (suggestions[active]) {
        e.preventDefault();
        choose(suggestions[active]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative flex-1">
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="w-full px-2 py-1 rounded-md text-[12px] outline-none"
        style={recipInputStyle}
        autoComplete="off"
        role="combobox"
        aria-expanded={visible}
        aria-autocomplete="list"
      />
      {visible && (
        <ul
          role="listbox"
          aria-label={listLabel}
          className="absolute left-0 right-0 top-full mt-1 z-[2060] max-h-[190px] overflow-auto rounded-md py-1"
          style={{ background: "var(--bg2)", border: "1px solid var(--border-hi)", boxShadow: "0 8px 24px rgba(0,0,0,.35)" }}
        >
          {suggestions.map((c, i) => (
            <li
              key={c.id}
              role="option"
              aria-selected={i === active}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(c)}
              className="px-2 py-1.5 cursor-pointer text-[12px] flex flex-col"
              style={{ background: i === active ? "rgba(31,85,255,.14)" : "transparent" }}
            >
              {c.name ? (
                <>
                  <span style={{ color: "var(--text)" }}>{c.name}</span>
                  <span className="text-[10px]" style={{ color: "var(--text-3)" }}>
                    {c.email}
                  </span>
                </>
              ) : (
                <span style={{ color: "var(--text)" }}>{c.email}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function MailCompose({
  accounts,
  prefill,
  onClose,
}: {
  accounts: MailAccountStatus[];
  prefill: ComposePrefill;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const toast = useToast();

  // só contas que dá pra enviar (autenticadas)
  const sendable = accounts.filter((a) => a.state === "live");
  const initialFrom =
    (prefill.fromAccountId && sendable.some((a) => a.id === prefill.fromAccountId)
      ? prefill.fromAccountId
      : sendable[0]?.id) ?? "";

  const [fromId, setFromId] = useState(initialFrom);
  const [to, setTo] = useState(prefill.to ?? "");
  const [cc, setCc] = useState(prefill.cc ?? "");
  const [bcc, setBcc] = useState("");
  const [showCc, setShowCc] = useState(!!prefill.cc);
  const [subject, setSubject] = useState(prefill.subject ?? "");
  const [files, setFiles] = useState<File[]>(prefill.attachments ?? []);
  const [sending, setSending] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  // corpo = editor rico (HTML). Reply/forward vêm em texto puro (→ textToHtml);
  // a edição de rascunho já traz HTML pronto (bodyHtml) e entra direto.
  const initialBodyHtml = useMemo(
    () => (prefill.bodyHtml != null ? prefill.bodyHtml : textToHtml(prefill.body ?? "")),
    [prefill.bodyHtml, prefill.body],
  );
  const editorApiRef = useRef<MailRichEditorHandle | null>(null);
  const [bodyEmpty, setBodyEmpty] = useState(!(prefill.bodyHtml ?? prefill.body ?? "").trim());
  const [inlineBytes, setInlineBytes] = useState(0);

  useEffect(() => {
    if (prefill.mode === "forward" || !prefill.to) toRef.current?.focus();
  }, [prefill.mode, prefill.to]);

  const title =
    prefill.mode === "reply"
      ? t("mail.compose.title.reply")
      : prefill.mode === "forward"
        ? t("mail.compose.title.forward")
        : prefill.mode === "draft"
          ? t("mail.compose.title.draft")
          : t("mail.compose.title.new");

  // Ao enviar/salvar de novo um rascunho aberto, remove o original pra não
  // duplicar em Rascunhos (best-effort: se falhar, não bloqueia). Sempre usa a
  // conta ONDE o rascunho estava (fromAccountId), não o "De" que pode ter mudado.
  const removeOriginalDraft = () => {
    if (prefill.mode !== "draft" || !prefill.draftUid || !prefill.fromAccountId) return;
    void fetch("/api/mail/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account: prefill.fromAccountId, uid: prefill.draftUid, mailbox: "drafts" }),
    }).catch(() => {});
  };

  const buildForm = (): FormData | null => {
    if (!fromId) {
      setError(t("mail.compose.needFrom"));
      return null;
    }
    const filesBytes = files.reduce((s, f) => s + f.size, 0);
    if (filesBytes + inlineBytes > MAX_TOTAL_BYTES) {
      setError(t("mail.compose.err.attachments_too_large"));
      return null;
    }
    const api = editorApiRef.current;
    const html = api ? api.getHtml() : "";
    const text = api ? api.getText() : "";
    const fd = new FormData();
    fd.set("account", fromId);
    fd.set("to", to);
    fd.set("cc", cc);
    fd.set("bcc", bcc);
    fd.set("subject", subject);
    fd.set("text", text);
    if (html.trim()) fd.set("html", html);
    if (prefill.inReplyTo) fd.set("inReplyTo", prefill.inReplyTo);
    if (prefill.references?.length) fd.set("references", prefill.references.join(" "));
    for (const f of files) fd.append("attachments", f);
    // imagens inline: cada File casa por ordem com um cid (parseComposeForm no
    // servidor as transforma em anexo inline referenciado por src="cid:…").
    const inline = api ? api.getInlineImages() : [];
    if (inline.length) {
      const cids: string[] = [];
      for (const im of inline) {
        fd.append("inlineImages", im.file);
        cids.push(im.cid);
      }
      fd.set("inlineCids", JSON.stringify(cids));
    }
    return fd;
  };

  const errText = (code: string, status: number) => {
    const known = [
      "invalid_recipient",
      "too_many_recipients",
      "attachments_too_large",
      "smtp_auth",
      "smtp_timeout",
      "smtp_failed",
      "account_off",
    ];
    return known.includes(code) ? t(`mail.compose.err.${code}`) : t("mail.compose.err.generic", { n: status });
  };

  const send = async (e: FormEvent) => {
    e.preventDefault();
    if (sending || savingDraft) return;
    setError(null);
    if (!to.trim()) {
      setError(t("mail.compose.needTo"));
      return;
    }
    const fd = buildForm();
    if (!fd) return;
    setSending(true);
    try {
      const res = await fetch("/api/mail/send", { method: "POST", body: fd });
      if (res.ok) {
        const data = (await res.json().catch(() => ({}))) as { savedToSent?: boolean };
        toast(data.savedToSent === false ? t("mail.compose.sentNoCopy") : t("mail.compose.sent"));
        // Agenda cresce sozinha: salva os destinatários novos (best-effort, não
        // bloqueia o fechamento nem falha o envio se o banco estiver fora).
        const contacts = collectContacts([to, cc, bcc]);
        if (contacts.length) {
          void fetch("/api/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contacts }),
          }).catch(() => {});
        }
        removeOriginalDraft();
        onClose();
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(errText(data.error || "", res.status));
    } catch {
      setError(t("mail.compose.err.smtp_failed"));
    } finally {
      setSending(false);
    }
  };

  const saveDraft = async () => {
    if (sending || savingDraft) return;
    setError(null);
    const fd = buildForm();
    if (!fd) return;
    setSavingDraft(true);
    try {
      const res = await fetch("/api/mail/draft", { method: "POST", body: fd });
      if (res.ok) {
        toast(t("mail.compose.draftSaved"));
        removeOriginalDraft();
        onClose();
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(errText(data.error || "", res.status));
    } catch {
      setError(t("mail.compose.err.smtp_failed"));
    } finally {
      setSavingDraft(false);
    }
  };

  const tryClose = () => {
    const dirty = to || cc || bcc || subject || !bodyEmpty || files.length;
    if (dirty && !window.confirm(t("mail.compose.discardConfirm"))) return;
    onClose();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") tryClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const onPickFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    setFiles((prev) => [...prev, ...picked]);
    if (fileRef.current) fileRef.current.value = "";
  };
  const filesBytes = files.reduce((s, f) => s + f.size, 0);
  const totalBytes = filesBytes + inlineBytes; // anexos + imagens inline (teto único de 4MB)

  const onEditorError = (key: "image_type" | "image_too_large") => {
    toast(t(`mail.compose.err.${key}`));
  };
  const editorLabels = {
    bold: t("mail.compose.fmt.bold"),
    italic: t("mail.compose.fmt.italic"),
    underline: t("mail.compose.fmt.underline"),
    bulletList: t("mail.compose.fmt.bulletList"),
    numberList: t("mail.compose.fmt.numberList"),
    link: t("mail.compose.fmt.link"),
    linkPrompt: t("mail.compose.fmt.linkPrompt"),
    image: t("mail.compose.fmt.image"),
    ariaLabel: t("mail.compose.editor.label"),
    placeholder: t("mail.compose.body"),
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    color: "var(--text)",
  };
  const rowStyle: React.CSSProperties = { borderBottom: "1px solid var(--border)" };

  const body_ = (
    <div
      className="fixed inset-0 z-[2050] flex items-center justify-center p-2 sm:p-6"
      style={{ background: "rgba(5,4,15,.74)", backdropFilter: "blur(6px)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) tryClose();
      }}
    >
      <form
        onSubmit={send}
        className="wt-card flex flex-col w-full max-w-[720px] max-h-[90vh] overflow-hidden"
      >
        {/* header */}
        <div className="flex items-center justify-between px-4 py-3" style={rowStyle}>
          <h3
            className="text-[12px] tracking-[2px] uppercase font-bold"
            style={{ color: "var(--color-wh-blue-light)" }}
          >
            {title}
          </h3>
          <button
            type="button"
            onClick={tryClose}
            className="w-[26px] h-[26px] rounded-md flex items-center justify-center text-[13px] font-bold cursor-pointer"
            style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.08)", border: "1px solid rgba(255,59,92,.25)" }}
          >
            ✕
          </button>
        </div>

        {/* De */}
        <div className="flex items-center gap-2 px-4 py-2" style={rowStyle}>
          <span className="text-[10px] uppercase tracking-wide font-bold w-[52px]" style={{ color: "var(--text-3)" }}>
            {t("mail.compose.from")}
          </span>
          <select
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            className="flex-1 px-2 py-1 rounded-md text-[12px] outline-none"
            style={inputStyle}
          >
            {sendable.map((a) => (
              <option key={a.id} value={a.id}>
                {a.address}
              </option>
            ))}
          </select>
        </div>

        {/* Para */}
        <div className="flex items-center gap-2 px-4 py-2" style={rowStyle}>
          <span className="text-[10px] uppercase tracking-wide font-bold w-[52px]" style={{ color: "var(--text-3)" }}>
            {t("mail.compose.to")}
          </span>
          <RecipientInput
            inputRef={toRef}
            value={to}
            onChange={setTo}
            placeholder={t("mail.compose.recipientPlaceholder")}
            listLabel={t("mail.compose.contacts.listLabel")}
          />
          {!showCc && (
            <button
              type="button"
              onClick={() => setShowCc(true)}
              className="text-[10px] font-bold uppercase tracking-wide cursor-pointer flex-shrink-0"
              style={{ color: "var(--color-wh-blue-light)" }}
            >
              {t("mail.compose.addCc")}
            </button>
          )}
        </div>

        {/* Cc / Cco */}
        {showCc && (
          <>
            <div className="flex items-center gap-2 px-4 py-2" style={rowStyle}>
              <span className="text-[10px] uppercase tracking-wide font-bold w-[52px]" style={{ color: "var(--text-3)" }}>
                {t("mail.compose.cc")}
              </span>
              <RecipientInput value={cc} onChange={setCc} placeholder={t("mail.compose.recipientPlaceholder")} listLabel={t("mail.compose.contacts.listLabel")} />
            </div>
            <div className="flex items-center gap-2 px-4 py-2" style={rowStyle}>
              <span className="text-[10px] uppercase tracking-wide font-bold w-[52px]" style={{ color: "var(--text-3)" }}>
                {t("mail.compose.bcc")}
              </span>
              <RecipientInput value={bcc} onChange={setBcc} placeholder={t("mail.compose.recipientPlaceholder")} listLabel={t("mail.compose.contacts.listLabel")} />
            </div>
          </>
        )}

        {/* Assunto */}
        <div className="flex items-center gap-2 px-4 py-2" style={rowStyle}>
          <span className="text-[10px] uppercase tracking-wide font-bold w-[52px]" style={{ color: "var(--text-3)" }}>
            {t("mail.compose.subject")}
          </span>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="flex-1 px-2 py-1 rounded-md text-[12px] outline-none" style={inputStyle} autoComplete="off" />
        </div>

        {/* Corpo — editor rico (HTML + imagem inline) */}
        <MailRichEditor
          initialHtml={initialBodyHtml}
          labels={editorLabels}
          otherBytes={filesBytes}
          apiRef={editorApiRef}
          onChange={({ empty, inlineBytes: ib }) => {
            setBodyEmpty(empty);
            setInlineBytes(ib);
          }}
          onError={onEditorError}
        />

        {/* anexos escolhidos + medidor do teto (inclui imagens inline) */}
        {(files.length > 0 || inlineBytes > 0) && (
          <div className="flex flex-wrap gap-1.5 px-4 py-2" style={{ borderTop: "1px solid var(--border)" }}>
            {files.map((f, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold"
                style={{ background: "rgba(31,85,255,.1)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)" }}
              >
                📎 {f.name} · {fmtBytes(f.size)}
                <button
                  type="button"
                  onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                  className="ml-1 cursor-pointer"
                  style={{ color: "var(--color-status-critical)" }}
                >
                  ✕
                </button>
              </span>
            ))}
            <span className="text-[9px] self-center" style={{ color: totalBytes > MAX_TOTAL_BYTES ? "var(--color-status-critical)" : "var(--text-3)" }}>
              {fmtBytes(totalBytes)} / 4MB
            </span>
          </div>
        )}

        {error && (
          <div className="px-4 py-2 text-[11px] font-semibold" style={{ color: "var(--color-status-critical)" }}>
            {error}
          </div>
        )}

        {/* barra de ações */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}>
          <button
            type="submit"
            disabled={sending || savingDraft}
            className="px-4 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide cursor-pointer"
            style={{ background: "var(--color-wh-blue)", color: "#fff", opacity: sending ? 0.6 : 1 }}
          >
            {sending ? t("mail.compose.sending") : t("mail.compose.send")}
          </button>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            title={t("mail.compose.attachHint")}
            className="px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide cursor-pointer"
            style={{ background: "rgba(255,255,255,.05)", color: "var(--text-2)", border: "1px solid var(--border)" }}
          >
            {t("mail.compose.attach")}
          </button>
          <input ref={fileRef} type="file" multiple onChange={onPickFiles} className="hidden" />
          <button
            type="button"
            onClick={saveDraft}
            disabled={sending || savingDraft}
            className="px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide cursor-pointer"
            style={{ background: "rgba(255,255,255,.05)", color: "var(--text-2)", border: "1px solid var(--border)" }}
          >
            {savingDraft ? t("mail.compose.savingDraft") : t("mail.compose.saveDraft")}
          </button>
          <div className="flex-1" />
          <button
            type="button"
            onClick={tryClose}
            className="px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide cursor-pointer"
            style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.08)", border: "1px solid rgba(255,59,92,.25)" }}
          >
            {t("mail.compose.discard")}
          </button>
        </div>
      </form>
    </div>
  );

  return createPortal(body_, document.body);
}

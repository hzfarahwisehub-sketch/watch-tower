"use client";
// Leitor de e-mail embutido (Inbox Fase 3). Overlay em portal acima de tudo:
// coluna de mensagens + painel de leitura. O HTML da mensagem chega SANITIZADO
// do servidor (sem script; imagens remotas bloqueadas até o usuário pedir).
// Abrir uma mensagem marca como lida (vale pra caixa toda, como em webmail).
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "./LocaleProvider";
import { useToast } from "./ToastProvider";
import type { ComposePrefill } from "./MailCompose";
import type {
  MailAccountStatus,
  MailDetail,
  MailListItem,
  MailListResponse,
} from "@/lib/mail/types";

const PAGE = 25;

function fmtBytes(n: number): string {
  if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)}MB`;
  if (n >= 1024) return `${Math.round(n / 1024)}KB`;
  return `${n}B`;
}

/** Remove prefixos Re:/Fwd:/Enc: repetidos do assunto. */
function stripPrefix(subject: string): string {
  return subject.replace(/^((re|fwd|enc|fw)\s*:\s*)+/i, "").trim();
}

export function MailViewer({
  account,
  onCompose,
  onDeleted,
  onClose,
  suspendEscape = false,
}: {
  account: MailAccountStatus;
  onCompose: (prefill: ComposePrefill) => void;
  onDeleted: () => void;
  onClose: () => void;
  /** true quando um modal por cima (compositor) está aberto: não trata Escape. */
  suspendEscape?: boolean;
}) {
  const { t, intl } = useLocale();
  const toast = useToast();
  const suspendRef = useRef(suspendEscape);
  suspendRef.current = suspendEscape;

  const [items, setItems] = useState<MailListItem[]>([]);
  const [total, setTotal] = useState(0);
  const [unseen, setUnseen] = useState(0);
  const [listState, setListState] = useState<"loading" | "ok" | "error">("loading");
  const [loadingMore, setLoadingMore] = useState(false);

  const [detailUid, setDetailUid] = useState<number | null>(null);
  const [detail, setDetail] = useState<MailDetail | null>(null);
  const [detailState, setDetailState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [imagesOn, setImagesOn] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [markingUnread, setMarkingUnread] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const itemsRef = useRef(items);
  itemsRef.current = items;
  // uids com fetch de mensagem em voo — evita decrementar o contador 2x no
  // duplo clique numa mensagem não lida.
  const openingRef = useRef<Set<number>>(new Set());

  const loadList = useCallback(
    async (offset: number) => {
      if (offset === 0) setListState("loading");
      else setLoadingMore(true);
      try {
        const res = await fetch(
          `/api/mail/messages?account=${encodeURIComponent(account.id)}&offset=${offset}&limit=${PAGE}`,
        );
        if (!res.ok) throw new Error(String(res.status));
        const data: MailListResponse = await res.json();
        setTotal(data.total);
        setUnseen(data.unseen);
        setItems((prev) => {
          if (offset === 0) return data.items;
          // Paginação por sequência: se chegar/sair e-mail entre páginas, a
          // janela pode re-incluir uids já exibidos. Deduplica por uid pra não
          // duplicar linha nem repetir key do React.
          const seen = new Set(prev.map((i) => i.uid));
          const fresh = data.items.filter((i) => !seen.has(i.uid));
          if (fresh.length === 0) setAtEnd(true); // nada novo → fim da lista
          return [...prev, ...fresh];
        });
        // resposta menor que a página = última página
        if (offset > 0 && data.items.length < PAGE) setAtEnd(true);
        setListState("ok");
      } catch {
        if (offset === 0) setListState("error");
      } finally {
        setLoadingMore(false);
      }
    },
    [account.id],
  );

  useEffect(() => {
    setItems([]);
    setDetail(null);
    setDetailUid(null);
    setDetailState("idle");
    setAtEnd(false);
    loadList(0);
  }, [loadList]);

  // ESC fecha o viewer — mas NÃO quando o compositor está por cima (senão um
  // único Esc fecharia os dois modais de uma vez).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !suspendRef.current) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const openMessage = useCallback(
    async (uid: number, withImages = false) => {
      // Guarda de reentrada: duplo clique na mesma mensagem não dispara dois
      // fetches nem decrementa o contador 2x.
      if (openingRef.current.has(uid)) return;
      openingRef.current.add(uid);
      setDetailUid(uid);
      setDetailState("loading");
      setImagesOn(withImages);
      try {
        const res = await fetch(
          `/api/mail/message?account=${encodeURIComponent(account.id)}&uid=${uid}&markSeen=1${withImages ? "&images=1" : ""}`,
        );
        if (!res.ok) throw new Error(String(res.status));
        const d: MailDetail = await res.json();
        setDetail(d);
        setDetailState("ok");
        // Decremento derivado do estado atual: só cai se o item ainda constava
        // como não lido (idempotente mesmo com chamadas concorrentes).
        setItems((prev) => {
          const it = prev.find((i) => i.uid === uid);
          if (it && !it.seen) setUnseen((u) => Math.max(0, u - 1));
          return prev.map((i) => (i.uid === uid ? { ...i, seen: true } : i));
        });
      } catch {
        setDetailState("error");
      } finally {
        openingRef.current.delete(uid);
      }
    },
    [account.id],
  );

  const markUnread = useCallback(async () => {
    if (!detailUid || markingUnread) return;
    // Já está não-lida? Não faz nada (evita inflar o contador com cliques
    // repetidos, já que o servidor é no-op nesse caso).
    if (itemsRef.current.some((i) => i.uid === detailUid && !i.seen)) return;
    setMarkingUnread(true);
    try {
      const res = await fetch("/api/mail/seen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ account: account.id, uid: detailUid, seen: false }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setItems((prev) => {
        const it = prev.find((i) => i.uid === detailUid);
        if (it && it.seen) setUnseen((u) => u + 1);
        return prev.map((i) => (i.uid === detailUid ? { ...i, seen: false } : i));
      });
      toast(t("mail.viewer.markedUnread"));
    } catch {
      toast(t("mail.viewer.error"));
    } finally {
      setMarkingUnread(false);
    }
  }, [account.id, detailUid, markingUnread, t, toast]);

  // ---- citação pra responder/encaminhar ----
  const quotedBody = useCallback(
    (d: MailDetail, forward = false): string => {
      const when = d.date ? new Date(d.date).toLocaleString(intl) : "";
      const who = d.fromName ? `${d.fromName} <${d.fromAddress}>` : d.fromAddress;
      const text = d.text || "";
      if (forward) {
        const header = [
          `De: ${who}`,
          d.to.length ? `Para: ${d.to.join(", ")}` : "",
          when ? `Data: ${when}` : "",
          `Assunto: ${d.subject}`,
        ]
          .filter(Boolean)
          .join("\n");
        return `\n\n---------- Mensagem encaminhada ----------\n${header}\n\n${text}`;
      }
      const original = text.split("\n").map((l) => `> ${l}`).join("\n");
      return `\n\n${when} ${who}:\n${original}`;
    },
    [intl],
  );

  const doReply = useCallback(
    (all: boolean) => {
      const d = detail;
      if (!d) return;
      const own = account.address.toLowerCase();
      const cc = all
        ? [...d.to, ...d.cc]
            .filter((a) => a && a.toLowerCase() !== own && a.toLowerCase() !== d.fromAddress.toLowerCase())
            .join(", ")
        : "";
      onCompose({
        mode: "reply",
        fromAccountId: account.id,
        to: d.fromAddress,
        cc,
        subject: t("mail.compose.replyPrefix") + stripPrefix(d.subject),
        body: quotedBody(d),
        inReplyTo: d.messageId || undefined,
        references: [...d.references, d.messageId || ""].filter(Boolean),
      });
    },
    [detail, account.address, account.id, onCompose, t, quotedBody],
  );

  const [forwarding, setForwarding] = useState(false);
  const doForward = useCallback(async () => {
    const d = detail;
    if (!d || forwarding) return;
    // Encaminhar carrega os anexos do original (dentro do teto de 4MB); avisa
    // se algum for grande demais pra levar junto.
    let files: File[] = [];
    let skipped = 0;
    if (d.attachments.length) {
      setForwarding(true);
      let budget = 4 * 1024 * 1024;
      try {
        for (const a of d.attachments) {
          if (a.size > budget) {
            skipped++;
            continue;
          }
          const res = await fetch(
            `/api/mail/attachment?account=${encodeURIComponent(account.id)}&uid=${d.uid}&index=${a.index}`,
          );
          if (!res.ok) {
            skipped++;
            continue;
          }
          const blob = await res.blob();
          budget -= blob.size;
          files.push(new File([blob], a.filename, { type: a.contentType }));
        }
      } catch {
        skipped = d.attachments.length - files.length;
      } finally {
        setForwarding(false);
      }
    }
    if (skipped > 0) toast(t("mail.viewer.fwdSkipped", { n: skipped }));
    onCompose({
      mode: "forward",
      fromAccountId: account.id,
      subject: t("mail.compose.fwdPrefix") + stripPrefix(d.subject),
      body: quotedBody(d, true),
      attachments: files.length ? files : undefined,
    });
  }, [detail, forwarding, account.id, onCompose, t, toast, quotedBody]);

  const doDelete = useCallback(async () => {
    if (!detailUid || deleting) return;
    if (!window.confirm(t("mail.viewer.delete.confirm"))) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/mail/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ account: account.id, uid: detailUid }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const wasUnseen = itemsRef.current.some((i) => i.uid === detailUid && !i.seen);
      setItems((prev) => prev.filter((i) => i.uid !== detailUid));
      setTotal((n) => Math.max(0, n - 1));
      if (wasUnseen) setUnseen((u) => Math.max(0, u - 1));
      setDetail(null);
      setDetailUid(null);
      setDetailState("idle");
      toast(t("mail.viewer.deleted"));
      onDeleted();
    } catch {
      toast(t("mail.viewer.deleteError"));
    } finally {
      setDeleting(false);
    }
  }, [account.id, detailUid, deleting, onDeleted, t, toast]);

  const dateShort = (iso: string | null) =>
    iso
      ? new Date(iso).toLocaleDateString(intl, { day: "2-digit", month: "2-digit" })
      : "";
  const dateFull = (iso: string | null) =>
    iso
      ? new Date(iso).toLocaleString(intl, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

  const body = (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-6"
      style={{ background: "rgba(5,4,15,.74)", backdropFilter: "blur(6px)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="wt-card flex flex-col w-full h-full max-w-[1200px] max-h-[880px] overflow-hidden">
        {/* header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div
            className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-[12px] font-bold flex-shrink-0"
            style={{
              background: account.address.endsWith("gmail.com")
                ? "linear-gradient(135deg,#EA4335,#C5221F)"
                : "linear-gradient(135deg,var(--color-wh-blue),var(--color-wh-blue-dark))",
              color: "#fff",
            }}
          >
            {account.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-bold truncate" style={{ color: "var(--text)" }}>
              {account.address}
            </div>
            <div className="text-[10px] uppercase tracking-wide font-semibold" style={{ color: "var(--text-3)" }}>
              {t("mail.viewer.total", { n: total, u: unseen })}
            </div>
          </div>
          {account.webmailUrl && (
            <a
              href={account.webmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide flex-shrink-0"
              style={{
                background: "rgba(31,85,255,.12)",
                color: "var(--color-wh-blue-light)",
                border: "1px solid var(--border-hi)",
              }}
            >
              {t("mail.viewer.webmail")}
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            title={t("mail.viewer.close")}
            className="w-[28px] h-[28px] rounded-md flex items-center justify-center text-[14px] font-bold cursor-pointer flex-shrink-0 hover:scale-110 transition-transform"
            style={{
              color: "var(--color-status-critical)",
              background: "rgba(255,59,92,.08)",
              border: "1px solid rgba(255,59,92,.25)",
            }}
          >
            ✕
          </button>
        </div>

        {/* corpo: lista + leitura */}
        <div className="flex flex-1 min-h-0">
          {/* lista */}
          <div
            className={`${detailUid ? "hidden md:flex" : "flex"} flex-col w-full md:w-[320px] md:flex-shrink-0 min-h-0 overflow-y-auto`}
            style={{ borderRight: "1px solid var(--border)" }}
          >
            {listState === "loading" && (
              <div className="p-4 text-[11px]" style={{ color: "var(--text-3)" }}>
                {t("mail.viewer.loadingList")}
              </div>
            )}
            {listState === "error" && (
              <div className="p-4 text-[11px]" style={{ color: "var(--color-status-critical)" }}>
                {t("mail.viewer.listError")}
              </div>
            )}
            {listState === "ok" && items.length === 0 && (
              <div className="p-4 text-[11px]" style={{ color: "var(--text-3)" }}>
                {t("mail.viewer.empty")}
              </div>
            )}
            {items.map((m) => (
              <button
                key={m.uid}
                type="button"
                onClick={() => openMessage(m.uid)}
                className="w-full text-left px-4 py-3 cursor-pointer transition-colors hover:bg-[rgba(31,85,255,0.06)]"
                style={{
                  borderBottom: "1px solid var(--border)",
                  borderLeft: `3px solid ${m.uid === detailUid ? "var(--color-wh-blue)" : "transparent"}`,
                  background: m.uid === detailUid ? "rgba(31,85,255,.08)" : undefined,
                }}
              >
                <div className="flex items-center gap-2">
                  {!m.seen && (
                    <span
                      className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                      style={{ background: "var(--color-wh-blue-light)" }}
                    />
                  )}
                  <span
                    className="text-[11px] truncate flex-1 min-w-0"
                    style={{
                      color: m.seen ? "var(--text-2)" : "var(--text)",
                      fontWeight: m.seen ? 500 : 800,
                    }}
                  >
                    {m.fromName || m.fromAddress}
                  </span>
                  <span className="text-[9.5px] flex-shrink-0" style={{ color: "var(--text-3)" }}>
                    {dateShort(m.date)}
                  </span>
                </div>
                <div
                  className="text-[10.5px] mt-1 truncate leading-tight"
                  style={{
                    color: m.seen ? "var(--text-3)" : "var(--text-2)",
                    fontWeight: m.seen ? 400 : 600,
                  }}
                >
                  {m.subject || t("mail.noSubject")}
                </div>
              </button>
            ))}
            {listState === "ok" && !atEnd && items.length < total && (
              <button
                type="button"
                disabled={loadingMore}
                onClick={() => loadList(items.length)}
                className="m-3 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                style={{
                  background: "rgba(31,85,255,.12)",
                  color: "var(--color-wh-blue-light)",
                  border: "1px solid var(--border-hi)",
                  opacity: loadingMore ? 0.5 : 1,
                }}
              >
                {loadingMore ? t("mail.viewer.loadingList") : t("mail.viewer.loadMore")}
              </button>
            )}
          </div>

          {/* leitura */}
          <div className={`${detailUid ? "flex" : "hidden md:flex"} flex-col flex-1 min-h-0 overflow-y-auto`}>
            {detailUid === null && (
              <div className="flex-1 flex items-center justify-center text-[12px]" style={{ color: "var(--text-3)" }}>
                {t("mail.viewer.select")}
              </div>
            )}
            {detailUid !== null && detailState === "loading" && (
              <div className="flex-1 flex items-center justify-center text-[12px]" style={{ color: "var(--text-3)" }}>
                {t("mail.viewer.loadingMsg")}
              </div>
            )}
            {detailUid !== null && detailState === "error" && (
              <div className="flex-1 flex items-center justify-center text-[12px]" style={{ color: "var(--color-status-critical)" }}>
                {t("mail.viewer.error")}
              </div>
            )}
            {detailState === "ok" && detail && (
              <div className="p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => {
                    setDetailUid(null);
                    setDetail(null);
                    setDetailState("idle");
                  }}
                  className="md:hidden mb-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                  style={{
                    background: "rgba(31,85,255,.12)",
                    color: "var(--color-wh-blue-light)",
                    border: "1px solid var(--border-hi)",
                  }}
                >
                  {t("mail.viewer.back")}
                </button>
                <h3 className="text-[15px] font-extrabold leading-snug" style={{ color: "var(--text)" }}>
                  {detail.subject || t("mail.noSubject")}
                </h3>
                <div className="mt-1.5 text-[11px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                  <span className="font-bold">{detail.fromName || detail.fromAddress}</span>
                  {detail.fromName && (
                    <span style={{ color: "var(--text-3)" }}> &lt;{detail.fromAddress}&gt;</span>
                  )}
                  <span style={{ color: "var(--text-3)" }}> · {dateFull(detail.date)}</span>
                </div>
                {detail.to.length > 0 && (
                  <div className="text-[10px] mt-0.5 truncate" style={{ color: "var(--text-3)" }}>
                    → {detail.to.join(", ")}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => doReply(false)}
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                    style={{ background: "rgba(31,85,255,.15)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)" }}
                  >
                    {t("mail.viewer.reply")}
                  </button>
                  {(detail.to.length + detail.cc.length > 1) && (
                    <button
                      type="button"
                      onClick={() => doReply(true)}
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                      style={{ background: "rgba(31,85,255,.1)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)" }}
                    >
                      {t("mail.viewer.replyAll")}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={doForward}
                    disabled={forwarding}
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                    style={{ background: "rgba(255,255,255,.05)", color: "var(--text-2)", border: "1px solid var(--border)", opacity: forwarding ? 0.5 : 1 }}
                  >
                    {forwarding ? t("mail.viewer.forwarding") : t("mail.viewer.forward")}
                  </button>
                  <button
                    type="button"
                    onClick={doDelete}
                    disabled={deleting}
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                    style={{ background: "rgba(255,59,92,.08)", color: "var(--color-status-critical)", border: "1px solid rgba(255,59,92,.25)", opacity: deleting ? 0.5 : 1 }}
                  >
                    {t("mail.viewer.delete")}
                  </button>
                  <button
                    type="button"
                    onClick={markUnread}
                    disabled={markingUnread}
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,.05)",
                      color: "var(--text-2)",
                      border: "1px solid var(--border)",
                      opacity: markingUnread ? 0.5 : 1,
                    }}
                  >
                    {t("mail.viewer.markUnread")}
                  </button>
                  {detail.remoteImagesBlocked && !imagesOn && (
                    <button
                      type="button"
                      onClick={() => openMessage(detail.uid, true)}
                      title={t("mail.viewer.images.hint")}
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                      style={{
                        background: "rgba(255,138,31,.12)",
                        color: "var(--color-status-warning)",
                        border: "1px solid rgba(255,138,31,.3)",
                      }}
                    >
                      {t("mail.viewer.images.load")}
                    </button>
                  )}
                </div>

                {detail.attachments.length > 0 && (
                  <div className="mt-3">
                    <div
                      className="text-[9.5px] uppercase tracking-wide font-bold mb-1.5"
                      style={{ color: "var(--text-3)" }}
                    >
                      📎 {t("mail.viewer.attachments")} ({detail.attachments.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {detail.attachments.map((a) =>
                        a.size > 4 * 1024 * 1024 ? (
                          <button
                            key={a.index}
                            type="button"
                            onClick={() => toast(t("mail.viewer.att.tooLarge"))}
                            className="px-2 py-1 rounded-md text-[10px] font-semibold cursor-pointer"
                            style={{
                              background: "rgba(255,255,255,.04)",
                              color: "var(--text-3)",
                              border: "1px dashed var(--border)",
                            }}
                          >
                            {a.filename} · {fmtBytes(a.size)}
                          </button>
                        ) : (
                          <a
                            key={a.index}
                            href={`/api/mail/attachment?account=${encodeURIComponent(account.id)}&uid=${detail.uid}&index=${a.index}`}
                            className="px-2 py-1 rounded-md text-[10px] font-semibold"
                            style={{
                              background: "rgba(31,85,255,.1)",
                              color: "var(--color-wh-blue-light)",
                              border: "1px solid var(--border-hi)",
                            }}
                          >
                            ⬇ {a.filename} · {fmtBytes(a.size)}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  {detail.oversized ? (
                    <div
                      className="rounded-lg px-4 py-4 text-[12px] leading-relaxed"
                      style={{
                        color: "var(--color-status-warning)",
                        background: "rgba(255,138,31,.1)",
                        border: "1px solid rgba(255,138,31,.3)",
                      }}
                    >
                      {t("mail.viewer.oversized")}
                      {account.webmailUrl && (
                        <a
                          href={account.webmailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 font-bold underline"
                          style={{ color: "var(--color-wh-blue-light)" }}
                        >
                          {t("mail.viewer.webmail")}
                        </a>
                      )}
                    </div>
                  ) : detail.html ? (
                    <div
                      className="wt-mail-html"
                      dangerouslySetInnerHTML={{ __html: detail.html }}
                    />
                  ) : (
                    <pre className="wt-mail-html whitespace-pre-wrap text-[12.5px] leading-relaxed">
                      {detail.text || ""}
                    </pre>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .wt-mail-html {
          background: #ffffff;
          color: #16161d;
          border-radius: 10px;
          padding: 18px;
          overflow-x: auto;
          font-family: inherit;
        }
        .wt-mail-html img { max-width: 100%; height: auto; }
        .wt-mail-html table { max-width: 100% !important; }
        .wt-mail-html a { color: #1f55ff; }
        .wt-mail-html * { word-break: break-word; }
      `}</style>
    </div>
  );

  return createPortal(body, document.body);
}

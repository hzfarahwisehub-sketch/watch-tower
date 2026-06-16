"use client";
import { useState } from "react";
import { useToast } from "./ToastProvider";

/**
 * CalendarConnect — conecta os Lembretes + Agenda do Watch Tower ao calendário
 * pessoal (Google Agenda, Apple, Outlook) via feed .ics assinável. Pensado pro
 * menu do usuário, ao lado do PushToggle. Um clique abre o Google Agenda no
 * fluxo de "adicionar por URL" e copia o link como backup (Apple/Outlook).
 */
const ROW =
  "w-full text-left px-4 py-2.5 text-[12.5px] hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-wait";

export function CalendarConnect() {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  const [link, setLink] = useState<string | null>(null);

  async function connect() {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/calendar/url");
      if (res.status === 401) {
        toast("Entre na sua conta pra conectar o calendário.");
        return;
      }
      if (!res.ok) {
        toast("Não consegui gerar o link agora.");
        return;
      }
      const data = (await res.json()) as { url: string; googleAddUrl: string };
      setLink(data.url);
      try {
        await navigator.clipboard.writeText(data.url);
      } catch {}
      window.open(data.googleAddUrl, "_blank", "noopener,noreferrer");
      toast("Abrindo o Google Agenda. Link do calendário também copiado.");
    } catch {
      toast("Não consegui gerar o link agora.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      toast("Link do calendário copiado.");
    } catch {
      toast("Copie manualmente este link no app de calendário.");
    }
  }

  return (
    <>
      <button
        type="button"
        disabled={busy}
        onClick={connect}
        className={ROW}
        style={{ color: "var(--text-2)" }}
        title="Recebe seus lembretes e agenda do Watch Tower no seu Google Agenda (ou Apple/Outlook)."
      >
        📅 Conectar ao Google Agenda
      </button>
      {link && (
        <button type="button" onClick={copy} className={ROW} style={{ color: "var(--text-3)" }}>
          Copiar link do meu calendário (.ics)
        </button>
      )}
    </>
  );
}

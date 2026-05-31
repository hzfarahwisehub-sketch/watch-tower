"use client";
import { useState, useRef, useEffect } from "react";
import { useToast } from "./ToastProvider";

/**
 * Menu de exportação do relatório completo. Junta TODAS as informações do
 * Watch Tower (país a país: panorama, boletins oficiais, marcos editoriais,
 * RSS ao vivo e Centros de Informação) e baixa em 2 formatos:
 *   - PDF   → leitura/compartilhamento
 *   - Word  → editável no Word (.docx)
 *
 * Cache no servidor de 30min compartilhado entre formatos — a 1ª geração
 * leva ~30-60s (busca ~32 feeds RSS); as seguintes são instantâneas.
 */

type Format = "pdf" | "docx";

const FORMATS: Array<{ id: Format; label: string; hint: string }> = [
  { id: "pdf", label: "PDF", hint: "Pra ler e compartilhar" },
  { id: "docx", label: "Word (.doc)", hint: "Editável no Word" },
];

export function ExportButton({
  minimal = false,
  label = "Exportar relatório",
  title,
}: {
  minimal?: boolean;
  label?: string;
  title?: string;
}) {
  const [downloading, setDownloading] = useState<Format | null>(null);
  const [open, setOpen] = useState(false);
  const [lastDownload, setLastDownload] = useState<{ url: string; filename: string } | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastUrlRef = useRef<string | null>(null);
  const toast = useToast();

  useEffect(
    () => () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (lastUrlRef.current) URL.revokeObjectURL(lastUrlRef.current);
    },
    [],
  );

  function showDownloadChip(url: string, filename: string) {
    if (lastUrlRef.current && lastUrlRef.current !== url) URL.revokeObjectURL(lastUrlRef.current);
    lastUrlRef.current = url;
    setLastDownload({ url, filename });
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setLastDownload(null), 30000);
  }

  function dismissChip() {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (lastUrlRef.current) {
      URL.revokeObjectURL(lastUrlRef.current);
      lastUrlRef.current = null;
    }
    setLastDownload(null);
  }

  function openLastFile() {
    if (lastDownload) window.open(lastDownload.url, "_blank", "noopener");
  }

  async function download(format: Format) {
    if (downloading) return;
    setDownloading(format);
    try {
      const res = await fetch(`/api/export/full-report?format=${format}`);
      if (!res.ok) {
        if (res.status === 401) toast("Faça login pra exportar o relatório");
        else if (res.status === 403) toast("Acesso restrito a admins");
        else toast(`Erro ${res.status} ao gerar relatório`);
        return;
      }
      const blob = await res.blob();
      const cacheHeader = res.headers.get("X-Cache");
      const stamp = new Date().toISOString().slice(0, 10);
      const filename = `watch-tower-relatorio-${stamp}.${format}`;

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      // mantém a URL viva pro chip "Arquivo baixado · abrir"
      showDownloadChip(url, filename);

      const fmtName = format === "docx" ? "Word" : format.toUpperCase();
      toast(cacheHeader === "HIT" ? `${fmtName} baixado (cache)` : `${fmtName} gerado e baixado`);
      setOpen(false);
    } catch (err) {
      toast(`Falha: ${String(err)}`);
    } finally {
      setDownloading(null);
    }
  }

  const busy = downloading !== null;

  return (
    <>
    <div className="relative">
      {minimal ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          disabled={busy}
          title={busy ? "Gerando relatório…" : "Exportar relatório (PDF · Word)"}
          aria-haspopup="menu"
          aria-expanded={open}
          className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center cursor-pointer transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-wait"
          style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--color-wh-blue-light)" }}
        >
          {busy ? <Spinner size={16} /> : <DownloadIcon size={16} />}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          disabled={busy}
          title={title}
          aria-haspopup="menu"
          aria-expanded={open}
          className="inline-flex items-center gap-2 px-4 py-[8px] rounded-[18px] text-[12px] font-bold tracking-wide cursor-pointer transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-wait"
          style={{
            color: "#fff",
            background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
            border: "1px solid rgba(74,122,255,.5)",
            boxShadow: "0 4px 14px rgba(31,85,255,.35)",
          }}
        >
          {busy ? <Spinner size={14} /> : <DownloadIcon size={14} />}
          {busy ? "Gerando…" : label}
        </button>
      )}

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => !busy && setOpen(false)} />
          <div
            role="menu"
            className="absolute right-0 top-[44px] z-50 w-[min(260px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] rounded-xl py-2 wt-card"
            style={{ border: "1px solid var(--border-hi)", boxShadow: "var(--shadow-bar)" }}
          >
            <div className="px-4 py-1.5 text-[10px] uppercase tracking-[1.5px] font-bold" style={{ color: "var(--text-3)" }}>
              Escolha o formato
            </div>
            {FORMATS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="menuitem"
                onClick={() => download(f.id)}
                disabled={busy}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/5 disabled:cursor-wait"
              >
                <span className="flex items-center justify-center w-[26px] h-[26px] rounded-md flex-shrink-0" style={{ background: "rgba(74,122,255,.12)", color: "var(--color-wh-blue-light)" }}>
                  {downloading === f.id ? <Spinner size={14} /> : <DownloadIcon size={14} />}
                </span>
                <span className="min-w-0">
                  <span className="block text-[12.5px] font-bold truncate" style={{ color: "var(--text)" }}>{f.label}</span>
                  <span className="block text-[10.5px] truncate" style={{ color: "var(--text-3)" }}>{f.hint}</span>
                </span>
              </button>
            ))}
            <div className="px-4 pt-1.5 mt-1 text-[10px] leading-snug border-t" style={{ color: "var(--text-3)", borderColor: "var(--border)" }}>
              Conteúdo pronto pra postar + fontes + dados técnicos, país a país.
            </div>
          </div>
        </>
      )}
    </div>

    {lastDownload && (
      <div
        role="status"
        className="fixed right-4 bottom-4 z-[60] flex items-center gap-2 pl-2.5 pr-2 py-2 rounded-2xl wt-card"
        style={{
          border: "1px solid var(--border-hi)",
          boxShadow: "var(--shadow-bar)",
          animation: "wt-chip-in .28s ease both",
          maxWidth: "min(330px, calc(100vw - 2rem))",
        }}
      >
        <button
          type="button"
          onClick={openLastFile}
          title="Abrir o arquivo que você acabou de baixar"
          className="flex items-center gap-2.5 cursor-pointer text-left min-w-0"
          style={{ background: "transparent", border: "none", padding: 0 }}
        >
          <span
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{ background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", color: "#fff" }}
          >
            <span style={{ display: "inline-flex", animation: "wt-arrow-bounce 1.1s ease-in-out infinite" }}>
              <DownloadIcon size={17} />
            </span>
          </span>
          <span className="min-w-0">
            <span className="block text-[12px] font-bold leading-tight" style={{ color: "var(--text)" }}>
              Arquivo baixado
            </span>
            <span className="block text-[10.5px] truncate leading-tight" style={{ color: "var(--text-3)" }}>
              {lastDownload.filename} · toque pra abrir
            </span>
          </span>
        </button>
        <button
          type="button"
          onClick={dismissChip}
          aria-label="Fechar aviso de download"
          className="flex items-center justify-center w-6 h-6 rounded-md flex-shrink-0 cursor-pointer text-[11px]"
          style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text-3)" }}
        >
          ✕
        </button>
      </div>
    )}
    </>
  );
}

function DownloadIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function Spinner({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "wt-spin 1s linear infinite" }}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

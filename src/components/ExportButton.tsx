"use client";
import { useState } from "react";
import { useToast } from "./ToastProvider";

/**
 * Baixa o relatorio completo (.md) chamando /api/export/full-report.
 * Mostra spinner durante a geracao (geralmente 30-60s pelas chamadas
 * RSS de ~32 feeds). Cache no servidor de 30min — chamadas repetidas
 * sao instantaneas.
 */
export function ExportButton({ minimal = false }: { minimal?: boolean }) {
  const [downloading, setDownloading] = useState(false);
  const toast = useToast();

  async function handleDownload() {
    setDownloading(true);
    try {
      const res = await fetch("/api/export/full-report");
      if (!res.ok) {
        if (res.status === 401) toast("Faça login pra exportar o relatório");
        else if (res.status === 403) toast("Acesso restrito a admins");
        else toast(`Erro ${res.status} ao gerar relatório`);
        return;
      }
      const blob = await res.blob();
      const cacheHeader = res.headers.get("X-Cache");
      const stamp = new Date().toISOString().slice(0, 10);
      const filename = `watch-tower-relatorio-${stamp}.md`;

      // Download
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      toast(cacheHeader === "HIT" ? "Relatório baixado (cache)" : "Relatório gerado e baixado");
    } catch (err) {
      toast(`Falha: ${String(err)}`);
    } finally {
      setDownloading(false);
    }
  }

  if (minimal) {
    return (
      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        title={downloading ? "Gerando relatório (até 60s)…" : "Baixar relatório completo (.md)"}
        className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center cursor-pointer transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-wait"
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface)",
          color: "var(--color-wh-blue-light)",
        }}
      >
        {downloading ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "wt-spin 1s linear infinite" }}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={downloading}
      className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-[18px] text-[12px] font-semibold cursor-pointer transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-wait"
      style={{
        color: "var(--color-wh-blue-light)",
        background: "rgba(74,122,255,.12)",
        border: "1px solid rgba(74,122,255,.4)",
      }}
    >
      {downloading ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "wt-spin 1s linear infinite" }}>
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          Gerando…
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Baixar relatório
        </>
      )}
    </button>
  );
}

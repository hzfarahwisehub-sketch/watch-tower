"use client";
// Editor de corpo rico do compositor de e-mail (Fase 1). contentEditable leve
// (sem lib externa) com barra: negrito, itálico, sublinhado, lista com
// marcador, lista numerada, link e inserir imagem. O conteúdo é guardado como
// HTML; imagens inline são embutidas como anexo `cid` (contentDisposition
// inline) — no DOM aparecem como data: URI pro usuário ver, e no getHtml() o
// src vira "cid:<id>", casando com o anexo que o servidor manda.
import { useEffect, useRef, useState } from "react";

export interface InlineImage {
  cid: string;
  file: File;
}

export interface MailRichEditorHandle {
  /** HTML do corpo com as imagens inline já reescritas pra src="cid:…". */
  getHtml: () => string;
  /** Versão texto puro (fallback multipart/alternative). */
  getText: () => string;
  /** Imagens inline ainda presentes no corpo, em ordem (cid casa 1:1 no HTML). */
  getInlineImages: () => InlineImage[];
  isEmpty: () => boolean;
  focus: () => void;
}

interface EditorLabels {
  bold: string;
  italic: string;
  underline: string;
  bulletList: string;
  numberList: string;
  link: string;
  linkPrompt: string;
  image: string;
  ariaLabel: string;
  placeholder: string;
}

const MAX_TOTAL = 4 * 1024 * 1024; // 4MB (mesmo teto do servidor)

/** cid seguro (mesmo alfabeto que o servidor aceita em compose-helpers). */
function makeCid(): string {
  const rand = Math.random().toString(36).slice(2, 10);
  return `img-${Date.now().toString(36)}-${rand}@wt`;
}

export function MailRichEditor({
  initialHtml,
  labels,
  otherBytes,
  apiRef,
  onChange,
  onError,
}: {
  initialHtml: string;
  labels: EditorLabels;
  /** bytes já ocupados por anexos comuns (pro teto de 4MB compartilhado). */
  otherBytes: number;
  apiRef: React.MutableRefObject<MailRichEditorHandle | null>;
  onChange: (stats: { empty: boolean; inlineBytes: number }) => void;
  onError: (key: "image_type" | "image_too_large") => void;
}) {
  const edRef = useRef<HTMLDivElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const inlineMap = useRef<Map<string, File>>(new Map());
  const otherBytesRef = useRef(otherBytes);
  otherBytesRef.current = otherBytes;
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // imagens inline ainda no DOM, na ordem em que aparecem
  const currentInline = (): InlineImage[] => {
    const ed = edRef.current;
    if (!ed) return [];
    const out: InlineImage[] = [];
    ed.querySelectorAll("img[data-cid]").forEach((el) => {
      const cid = (el as HTMLElement).dataset.cid || "";
      const file = inlineMap.current.get(cid);
      if (cid && file) out.push({ cid, file });
    });
    return out;
  };

  const inlineBytes = (): number => currentInline().reduce((s, im) => s + im.file.size, 0);

  const isEmpty = (): boolean => {
    const ed = edRef.current;
    if (!ed) return true;
    return (ed.textContent ?? "").trim() === "" && ed.querySelector("img") === null;
  };

  const notify = () => {
    const empty = isEmpty();
    setShowPlaceholder(empty);
    onChange({ empty, inlineBytes: inlineBytes() });
  };

  // conteúdo inicial só uma vez (contentEditable é não-controlado)
  useEffect(() => {
    const ed = edRef.current;
    if (ed && initialHtml) ed.innerHTML = initialHtml;
    setShowPlaceholder(isEmpty());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle imperativo pro compositor
  useEffect(() => {
    apiRef.current = {
      getHtml: () => {
        const ed = edRef.current;
        if (!ed) return "";
        const clone = ed.cloneNode(true) as HTMLElement;
        clone.querySelectorAll("img[data-cid]").forEach((el) => {
          const img = el as HTMLImageElement;
          const cid = img.dataset.cid || "";
          if (cid) img.setAttribute("src", `cid:${cid}`);
          img.removeAttribute("data-cid");
        });
        return clone.innerHTML;
      },
      getText: () => edRef.current?.innerText ?? "",
      getInlineImages: () => currentInline(),
      isEmpty,
      focus: () => edRef.current?.focus(),
    };
    return () => {
      apiRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef]);

  const focusEditor = () => edRef.current?.focus();

  const exec = (command: string, value?: string) => {
    focusEditor();
    document.execCommand(command, false, value);
    notify();
  };

  const onLink = () => {
    focusEditor();
    const url = window.prompt(labels.linkPrompt, "https://");
    if (!url || !url.trim()) return;
    const href = url.trim();
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) {
      document.execCommand("createLink", false, href);
    } else {
      const safe = href.replace(/"/g, "%22").replace(/</g, "%3C").replace(/>/g, "%3E");
      const label = href.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
      document.execCommand("insertHTML", false, `<a href="${safe}">${label}</a>`);
    }
    notify();
  };

  const insertImageFile = (file: File) => {
    if (!/^image\//i.test(file.type)) {
      onError("image_type");
      return;
    }
    const projected = otherBytesRef.current + inlineBytes() + file.size;
    if (projected > MAX_TOTAL) {
      onError("image_too_large");
      return;
    }
    const cid = makeCid();
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || "");
      if (!dataUrl) return;
      inlineMap.current.set(cid, file);
      focusEditor();
      const alt = (file.name || "imagem").replace(/[<>&"]/g, "");
      document.execCommand(
        "insertHTML",
        false,
        `<img src="${dataUrl}" data-cid="${cid}" alt="${alt}" style="max-width:100%;height:auto;" />`,
      );
      notify();
    };
    reader.readAsDataURL(file);
  };

  const onPickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) insertImageFile(file);
    if (imgInputRef.current) imgInputRef.current.value = "";
  };

  // colar imagem (clipboard com arquivo de imagem) → mesma trilha cid
  const onPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const items = Array.from(e.clipboardData?.items ?? []);
    const imgItem = items.find((it) => it.kind === "file" && /^image\//i.test(it.type));
    if (imgItem) {
      const file = imgItem.getAsFile();
      if (file) {
        e.preventDefault();
        insertImageFile(file);
      }
    }
  };

  const btn: React.CSSProperties = {
    minWidth: 28,
    height: 26,
    borderRadius: 6,
    border: "1px solid var(--border)",
    background: "rgba(255,255,255,.04)",
    color: "var(--text-2)",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 6px",
  };

  const toolButton = (
    key: string,
    label: string,
    onClick: () => void,
    content: React.ReactNode,
  ) => (
    <button
      key={key}
      type="button"
      title={label}
      aria-label={label}
      // mousedown preventDefault preserva a seleção do editor ao clicar
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      style={btn}
    >
      {content}
    </button>
  );

  return (
    <div className="flex flex-col flex-1 min-h-0" style={{ borderTop: "1px solid var(--border)" }}>
      {/* barra de ferramentas */}
      <div
        className="flex flex-wrap items-center gap-1 px-4 py-2"
        style={{ borderBottom: "1px solid var(--border)", background: "rgba(15,12,30,.25)" }}
        role="toolbar"
        aria-label={labels.ariaLabel}
      >
        {toolButton("bold", labels.bold, () => exec("bold"), <b>B</b>)}
        {toolButton("italic", labels.italic, () => exec("italic"), <i>I</i>)}
        {toolButton("underline", labels.underline, () => exec("underline"), <u>U</u>)}
        <span style={{ width: 1, height: 16, background: "var(--border)", margin: "0 2px" }} />
        {toolButton("ul", labels.bulletList, () => exec("insertUnorderedList"), <span>•≡</span>)}
        {toolButton("ol", labels.numberList, () => exec("insertOrderedList"), <span>1.≡</span>)}
        <span style={{ width: 1, height: 16, background: "var(--border)", margin: "0 2px" }} />
        {toolButton("link", labels.link, onLink, <span>🔗</span>)}
        {toolButton("image", labels.image, () => imgInputRef.current?.click(), <span>🖼</span>)}
        <input
          ref={imgInputRef}
          type="file"
          accept="image/*"
          onChange={onPickImage}
          className="hidden"
        />
      </div>

      {/* área editável + placeholder */}
      <div className="relative flex-1 min-h-[200px] overflow-auto">
        <div
          ref={edRef}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label={labels.ariaLabel}
          onInput={notify}
          onBlur={notify}
          onPaste={onPaste}
          className="min-h-[200px] px-4 py-3 text-[13px] leading-relaxed outline-none"
          style={{ background: "transparent", color: "var(--text)", wordBreak: "break-word" }}
        />
        {showPlaceholder && (
          <div
            className="absolute top-3 left-4 text-[13px] pointer-events-none select-none"
            style={{ color: "var(--text-3)" }}
            aria-hidden="true"
          >
            {labels.placeholder}
          </div>
        )}
      </div>
    </div>
  );
}

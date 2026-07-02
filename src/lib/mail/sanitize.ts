// Sanitização do HTML dos e-mails (Inbox Fase 3).
// Regras: nada de script/iframe/form, links abrem em aba nova com
// noopener, e imagens REMOTAS são bloqueadas por padrão (privacidade /
// tracking pixels) — o viewer oferece o botão "carregar imagens", que
// re-busca com allowRemote=true. Imagens inline (cid:/data:) passam.
import sanitizeHtml from "sanitize-html";

// gif transparente 1×1 — placeholder das imagens bloqueadas
const BLOCKED_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function sanitizeEmailHtml(
  html: string,
  allowRemote: boolean,
): { html: string; remoteBlocked: boolean } {
  let remoteBlocked = false;

  const clean = sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "center",
      "font",
      "u",
      "html",
      "body",
    ],
    allowedAttributes: {
      "*": [
        "style",
        "align",
        "valign",
        "width",
        "height",
        "cellpadding",
        "cellspacing",
        "border",
        "bgcolor",
        "colspan",
        "rowspan",
        "dir",
        "lang",
      ],
      a: ["href", "name", "target", "rel", "style"],
      img: ["src", "alt", "width", "height", "style", "border"],
      font: ["color", "size", "face"],
    },
    // Whitelist de CSS inline: só propriedades seguras, e nenhuma aceita
    // `url(...)`. Isso mata dois vetores de uma vez: (1) pixel de rastreio via
    // `background-image:url(...)` (que furava o bloqueio de imagem remota, que
    // só olhava <img src>); (2) overlay de phishing cobrindo o app inteiro via
    // position:fixed/absolute + z-index (o HTML é injetado no DOM autenticado).
    allowedStyles: {
      // Só propriedades de texto/cor/box seguras. Nenhuma delas dispara rede
      // via url() nem posiciona (position/z-index ficam DE FORA → sem overlay).
      // Cor é permissiva (não busca rede); as com url() perigoso nem entram.
      "*": {
        color: [/^[#a-z0-9(),.\s%-]+$/i],
        "background-color": [/^[#a-z0-9(),.\s%-]+$/i],
        "text-align": [/^(left|right|center|justify)$/i],
        "vertical-align": [/^(top|middle|bottom|baseline)$/i],
        "font-size": [/^[0-9.]+(px|em|rem|pt|%)$/i],
        "font-weight": [/^(normal|bold|bolder|lighter|[1-9]00)$/i],
        "font-style": [/^(normal|italic|oblique)$/i],
        "font-family": [/^[\w\s,"'-]+$/i],
        "text-decoration": [/^[\w\s-]+$/i],
        "line-height": [/^[0-9.]+(px|em|rem|%)?$/i],
        width: [/^[0-9.]+(px|em|rem|%)$/i],
        "max-width": [/^[0-9.]+(px|em|rem|%)$/i],
        height: [/^[0-9.]+(px|em|rem|%)$/i],
        padding: [/^[0-9.\s]+(px|em|rem|%)?$/i],
        margin: [/^[0-9.\s]+(px|em|rem|%|auto)?$/i],
        border: [/^[\w\s#().,%-]+$/i],
      },
    },
    // data: liberado SÓ pra img (imagens inline); http/https pros links.
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: {
      img: ["http", "https", "data", "cid"],
    },
    allowProtocolRelative: false,
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: { ...attribs, target: "_blank", rel: "noopener noreferrer" },
      }),
      img: (tagName, attribs) => {
        const src = attribs.src || "";
        if (!allowRemote && /^(https?:)?\/\//i.test(src)) {
          remoteBlocked = true;
          return {
            tagName: "img",
            attribs: { ...attribs, src: BLOCKED_PIXEL, "data-remote-blocked": "1" },
          };
        }
        return { tagName, attribs };
      },
    },
  });

  return { html: clean, remoteBlocked };
}

// Dicionário de strings da página /janela (janela FILHA de painel destacado).
// Mesmo modelo incremental do messages.ts: chave -> string, prefixo "janela.".

const dict = {
  pt: {
    "janela.unknownPanel": "Painel desconhecido",
    "janela.separateWindow": "· janela separada",
    "janela.dock.title": "Fecha esta janela e devolve o painel pra janela principal",
    "janela.dock.label": "↩ Inserir na principal",
    "janela.notFound": "Painel não encontrado. Feche esta janela.",
    "janela.dbg.prompt": "📸 Friday precisa desta linha · tira uma foto e manda:",
    "janela.dbg.line": "alvo {target} · agora {now} · telas {screens}",
  },
  en: {
    "janela.unknownPanel": "Unknown panel",
    "janela.separateWindow": "· separate window",
    "janela.dock.title": "Closes this window and docks the panel back into the main window",
    "janela.dock.label": "↩ Dock into main",
    "janela.notFound": "Panel not found. Close this window.",
    "janela.dbg.prompt": "📸 Friday needs this line · snap a photo and send it:",
    "janela.dbg.line": "target {target} · now {now} · screens {screens}",
  },
} as const;

export default dict;

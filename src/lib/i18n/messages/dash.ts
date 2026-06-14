// Strings do Dashboard (shell do grid): loading do mapa, barra de dica,
// voltar/avançar, restaurar layout, REPAVET, e os textos da célula do grid
// (tooltips/aria + placeholder de janela destacada). {label} = nome do painel.
const dict = {
  pt: {
    "dash.map.loading": "Carregando mapa…",
    "dash.map.connecting": "conectando ao CartoDB",

    "dash.grid.dragAria": "Arrastar {label} pra reposicionar",
    "dash.grid.dragTitle": "Arrastar pra reposicionar · {label}",
    "dash.grid.dockTitle": "Trazer \"{label}\" de volta",
    "dash.grid.popTitle": "Abrir \"{label}\" em janela separada",
    "dash.grid.dockAria": "Trazer de volta",
    "dash.grid.popAria": "Abrir em janela separada",
    "dash.grid.poppedOut": "Aberto numa janela separada.",
    "dash.grid.dockBack": "↩ Trazer de volta",

    "dash.hint.locked": "layout travado · clica no cadeado pra liberar movimentação",
    "dash.hint.free": "arraste · ⤡ redimensione · caixa sempre encaixa no espaço mais próximo · nenhuma some",

    "dash.undo.btn": "↶ Voltar",
    "dash.undo.label": "Voltar",
    "dash.undo.titleActive": "Voltar: {label}",
    "dash.undo.titleIdle": "Nada pra voltar",
    "dash.undo.aria": "Voltar (desfazer)",
    "dash.redo.btn": "Avançar ↷",
    "dash.redo.label": "Avançar",
    "dash.redo.titleActive": "Avançar: {label}",
    "dash.redo.titleIdle": "Nada pra avançar",
    "dash.redo.aria": "Avançar (refazer)",

    "dash.reset.btn": "↻ Restaurar layout padrão",
    "dash.action.move": "mover caixa",
    "dash.action.resize": "redimensionar caixa",
    "dash.action.reset": "restaurar layout",

    "dash.repavet.title": "REPAVET · Resumo Elaborado dos Países e das Atualizações dos Vistos, Economia e Trabalho · gera o documento completo, país a país",
  },
  en: {
    "dash.map.loading": "Loading map…",
    "dash.map.connecting": "connecting to CartoDB",

    "dash.grid.dragAria": "Drag {label} to reposition",
    "dash.grid.dragTitle": "Drag to reposition · {label}",
    "dash.grid.dockTitle": "Bring \"{label}\" back",
    "dash.grid.popTitle": "Open \"{label}\" in a separate window",
    "dash.grid.dockAria": "Bring back",
    "dash.grid.popAria": "Open in a separate window",
    "dash.grid.poppedOut": "Open in a separate window.",
    "dash.grid.dockBack": "↩ Bring back",

    "dash.hint.locked": "layout locked · click the padlock to allow moving",
    "dash.hint.free": "drag · ⤡ resize · boxes always snap to the nearest spot · none disappear",

    "dash.undo.btn": "↶ Undo",
    "dash.undo.label": "Undo",
    "dash.undo.titleActive": "Undo: {label}",
    "dash.undo.titleIdle": "Nothing to undo",
    "dash.undo.aria": "Undo",
    "dash.redo.btn": "Redo ↷",
    "dash.redo.label": "Redo",
    "dash.redo.titleActive": "Redo: {label}",
    "dash.redo.titleIdle": "Nothing to redo",
    "dash.redo.aria": "Redo",

    "dash.reset.btn": "↻ Restore default layout",
    "dash.action.move": "move box",
    "dash.action.resize": "resize box",
    "dash.action.reset": "restore layout",

    "dash.repavet.title": "REPAVET · full country-by-country report on visa, economy and work updates · generates the complete document",
  },
} as const;
export default dict;

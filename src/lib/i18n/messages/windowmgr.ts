// Dicionário do WindowManager (pop-out de janelas + menu de janelas).
// Todas as chaves prefixadas com "windowmgr.". Mantém o estilo incremental
// do projeto: chave -> string, com placeholders {n} trocados em runtime.

const dict = {
  pt: {
    // ---- toasts ----
    "windowmgr.toast.allowPopups": "Permita pop-ups deste site pra abrir em janela separada",
    "windowmgr.toast.blocked": "O navegador bloqueou. Libere pop-ups deste site pra reabrir as janelas de uma vez.",

    // ---- botão flutuante de restaurar ----
    "windowmgr.restore.title": "Reabre as janelas que estavam abertas, nos mesmos monitores e posições",
    "windowmgr.restore.btn.one": "Restaurar {n} janela",
    "windowmgr.restore.btn.many": "Restaurar {n} janelas",
    "windowmgr.restore.tapHint": "· toque em qualquer lugar",

    // ---- menu de janelas ----
    "windowmgr.menu.title": "Gerenciar janelas separadas",
    "windowmgr.menu.label": "Janelas",
    "windowmgr.menu.openInWindow": "Abertas em janela",
    "windowmgr.menu.focus": "Focar a janela",
    "windowmgr.menu.dockBack": "Trazer de volta pra principal",
    "windowmgr.menu.dockAll": "Trazer todas de volta",
    "windowmgr.menu.restore": "Restaurar janelas",
  },
  en: {
    // ---- toasts ----
    "windowmgr.toast.allowPopups": "Allow pop-ups for this site to open in a separate window",
    "windowmgr.toast.blocked": "The browser blocked it. Allow pop-ups for this site to reopen all windows at once.",

    // ---- botão flutuante de restaurar ----
    "windowmgr.restore.title": "Reopens the windows that were open, on the same monitors and positions",
    "windowmgr.restore.btn.one": "Restore {n} window",
    "windowmgr.restore.btn.many": "Restore {n} windows",
    "windowmgr.restore.tapHint": "· tap anywhere",

    // ---- menu de janelas ----
    "windowmgr.menu.title": "Manage separate windows",
    "windowmgr.menu.label": "Windows",
    "windowmgr.menu.openInWindow": "Open in window",
    "windowmgr.menu.focus": "Focus the window",
    "windowmgr.menu.dockBack": "Bring back to main",
    "windowmgr.menu.dockAll": "Bring all back",
    "windowmgr.menu.restore": "Restore windows",
  },
} as const;

export default dict;

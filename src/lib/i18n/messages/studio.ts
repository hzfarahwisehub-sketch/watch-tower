// Dicionário do componente ContentStudio (aba 🎥 Conteúdo Digital).
// Namespace "studio.*". Montado no índice central (messages.ts).

const dict = {
  pt: {
    "studio.title": "🎥 Conteúdo Digital",
    "studio.subtitle":
      "Roteiros prontos pros fundadores gravarem. Texto completo, copia e usa. O que não for usado hoje continua aqui.",
    "studio.f.all": "todos",
    "studio.f.tipo": "Tipo",
    "studio.f.persona": "Fundador",
    "studio.f.canal": "Canal",
    "studio.f.date": "Lote",
    "studio.f.onlyUnused": "Só os não usados",
    "studio.f.onlyUrgent": "Só urgentes",
    "studio.urgent": "⚡ Urgente",
    "studio.urgentHint": "Grave hoje: perde validade rápido.",
    "studio.empty": "Nenhum roteiro com esse filtro.",
    "studio.words": "palavras",
    "studio.copy": "📋 Copiar",
    "studio.copied": "✓ Copiado",
    "studio.copyFail": "Falhou, copie à mão",
    "studio.usedYes": "✓ Usado",
    "studio.usedNo": "Marcar como usado",
    "studio.usedBy": "✓ Já gravado por {name}",
    "studio.usedNote":
      "Marcar como usado vale pra todo mundo: qualquer usuário marca e todos veem, pra ninguém gravar o mesmo texto duas vezes. O roteiro nunca é apagado.",
  },
  en: {
    "studio.title": "🎥 Digital Content",
    "studio.subtitle":
      "Scripts ready for the founders to record. Full text, copy and use. Whatever goes unused today stays here.",
    "studio.f.all": "all",
    "studio.f.tipo": "Type",
    "studio.f.persona": "Founder",
    "studio.f.canal": "Channel",
    "studio.f.date": "Batch",
    "studio.f.onlyUnused": "Unused only",
    "studio.f.onlyUrgent": "Urgent only",
    "studio.urgent": "⚡ Urgent",
    "studio.urgentHint": "Record today: it expires fast.",
    "studio.empty": "No script matches this filter.",
    "studio.words": "words",
    "studio.copy": "📋 Copy",
    "studio.copied": "✓ Copied",
    "studio.copyFail": "Failed, copy by hand",
    "studio.usedYes": "✓ Used",
    "studio.usedNo": "Mark as used",
    "studio.usedBy": "✓ Already recorded by {name}",
    "studio.usedNote":
      "Marking as used applies to everyone: any user marks it and all users see it, so nobody records the same script twice. The script is never deleted.",
  },
} as const;
export default dict;

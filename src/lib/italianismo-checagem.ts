/**
 * Checagem curada das notícias do Italianismo (fonte de comunidade, não-oficial).
 *
 * O Hammis pediu (2026-06-16): incluir o Italianismo nas notícias da Itália, mas
 *  - toda notícia dele entra marcada como fonte de comunidade "a confirmar";
 *  - quando a Friday confere, registra aqui se o FATO foi confirmado em fonte
 *    oficial, qual o status, e SEMPRE as fontes que a própria matéria usou de
 *    referência (pra rastrear a origem);
 *  - o REPAVET / botão de download descreve o que foi descoberto, por notícia.
 *
 * Como a verificação é CURADA pela Friday (sem IA no servidor), este arquivo é a
 * base de conhecimento que a Friday mantém à mão. Cada vez que a Friday revisa
 * as manchetes do Italianismo, adiciona/atualiza uma entrada aqui. Manchete sem
 * entrada cai no estado "pendente" (aviso honesto de que ainda não foi conferida).
 *
 * Casa a manchete pela URL da matéria (slug do WordPress), que é estável.
 */

export type ChecagemStatus = "confirmado" | "nao_confirmado" | "pendente";

/** Uma fonte que a matéria do Italianismo usou de referência. */
export type FonteRef = {
  nome: string;
  url?: string;
  /** true = fonte oficial/primária (governo, tribunal, diário oficial). */
  oficial: boolean;
};

export type ItalianismoChecagem = {
  /** Trecho do slug/URL da matéria pra casar (match por "includes", minúsculo). */
  match: string;
  titulo: string;
  status: ChecagemStatus;
  /** Fontes que a própria matéria cita (rastreio de origem). */
  fontesCitadas: FonteRef[];
  /** Análise curada da Friday: o que foi descoberto e o veredito. */
  nota: string;
  /** Data ISO em que a Friday curou esta entrada. */
  curadoEm: string;
};

/**
 * Base curada. Começa com a matéria jurídica já analisada na sessão de 2026-06-16.
 * Cresce a cada revisão da Friday.
 */
export const ITALIANISMO_CHECAGENS: ItalianismoChecagem[] = [
  {
    match: "para-jurista-quem-preparava-documentos-antes-do-decreto",
    titulo:
      "Para jurista, quem preparava documentos antes do decreto mantém direito à cidadania italiana",
    status: "nao_confirmado",
    fontesCitadas: [
      { nome: "Antonello Ciervo — jurista cassacionista, Unitelma Sapienza (Roma)", oficial: false },
      {
        nome: "Questione Giustizia — análise da sentença 63/2026",
        url: "https://www.questionegiustizia.it/articolo/prima-lettura-corte-cost-63-2026",
        oficial: false,
      },
      { nome: "Corte Costituzionale — sentença n. 63/2026", url: "https://www.cortecostituzionale.it/", oficial: true },
      { nome: "Decreto-Legge 36/2025 (convertido na Lei 74/2025)", url: "https://www.normattiva.it/", oficial: true },
      { nome: "Tribunal de Justiça da UE — Grande Seção (set/2023)", url: "https://curia.europa.eu/", oficial: true },
    ],
    nota:
      "O FATO de base (sentença 63/2026 da Corte Constitucional e o Decreto 36/2025) é confirmável em fonte oficial e está correto. Já a TESE da matéria, de que quem preparava documentos antes do decreto manteria o direito, é OPINIÃO jurídica do prof. Ciervo publicada na Questione Giustizia, não um ato oficial nem decisão vinculante. Tratar como interpretação, não como regra confirmada.",
    curadoEm: "2026-06-16",
  },
];

export type ChecagemResultado = {
  status: ChecagemStatus;
  /** Selo curto pro app e pro relatório. */
  rotulo: string;
  /** Análise curada (vazia quando pendente). */
  nota: string;
  fontesCitadas: FonteRef[];
};

function rotuloDe(status: ChecagemStatus): string {
  switch (status) {
    case "confirmado":
      return "✓ Confirmado em fonte oficial";
    case "nao_confirmado":
      return "⚠ Não confirmado em fontes oficiais (opinião/interpretação)";
    default:
      return "⚠ Confirmação em fontes oficiais pendente";
  }
}

/** Normaliza pra casar slug independente de barra/maiúscula/acento de URL. */
function norm(s: string): string {
  return (s || "").toLowerCase();
}

/**
 * Resolve a checagem de uma manchete do Italianismo. Se a Friday já curou aquela
 * matéria, devolve o veredito completo; senão, devolve o estado "pendente" (aviso
 * honesto de que ainda não foi conferida em fontes oficiais).
 */
export function resolverChecagem(link: string, titulo: string): ChecagemResultado {
  const alvo = `${norm(link)} ${norm(titulo)}`;
  const hit = ITALIANISMO_CHECAGENS.find((c) => alvo.includes(norm(c.match)));
  if (hit) {
    return {
      status: hit.status,
      rotulo: rotuloDe(hit.status),
      nota: hit.nota,
      fontesCitadas: hit.fontesCitadas,
    };
  }
  return {
    status: "pendente",
    rotulo: rotuloDe("pendente"),
    nota:
      "Notícia de fonte de comunidade ainda não conferida em fontes oficiais pela Friday. Antes de publicar, confirmar o fato em fonte oficial (Gazzetta Ufficiale, Corte Costituzionale, consulado) e rastrear a referência usada pela matéria.",
    fontesCitadas: [],
  };
}

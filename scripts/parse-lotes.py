# -*- coding: utf-8 -*-
"""Converte os lotes .md de roteiros em src/lib/roteiros-data.ts (dados tipados).

Fonte: D:\\FRIDAY-BRAIN\\05 - Conteúdo\\Roteiros Fundadores\\AAAA-MM-DD - Lote NN.md
Saída: src/lib/roteiros-data.ts (commitado no repo · deploy via Git, REGRA 4)

Formato de cada roteiro no .md:
    ## <n> · <Persona> · <Canal> (<longo|curto>)
    Título: <titulo>
    Urgência: urgente · <motivo curto>      <- OPCIONAL, ver abaixo
    <parágrafos separados por linha em branco>

MARCAÇÃO DE URGÊNCIA (escrita à mão pela Friday, logo abaixo do "Título:")
--------------------------------------------------------------------------
    Urgência: urgente · Regra do LMIA muda em 17/07

Sem essa linha, o roteiro é NORMAL. É só isso: a ausência é o padrão, então
os lotes antigos seguem funcionando sem tocar em nada.

O motivo (o texto depois do "·") é OBRIGATÓRIO na prática: o selo vermelho
sozinho não diz ao fundador O QUE corre. Escreva curto e datado, do jeito
que o fundador entende em 2 segundos ("Statement of changes entra em vigor
em 22/07"), não genérico ("mudança importante").

Aceita, por tolerância: "Urgencia" sem acento, "·" ou "|" ou "-" como
separador, e "Urgência: normal" escrito explicitamente (= sem marcação).

QUANDO MARCAR — critério do Hammis (2026-07-20), canônico, não inventar outro:
  URGENTE = (a) alteração de LEI ou de REGRA de visto/imigração/residência/
            cidadania; (b) ato oficial publicado (decreto, portaria, statement
            of changes, decisão judicial que muda regra, novo limite/taxa/prazo
            em vigor); (c) aconteceu HOJE ou ONTEM (janela de 48h), ou prazo/
            janela que abre ou fecha em poucos dias.
  NORMAL  = conteúdo que NÃO perde validade amanhã: dica prática, "o que você
            pode fazer", "como fazer", guia, orientação, análise, matéria perene.
  NA DÚVIDA: se a peça perde validade se for postada semana que vem, é URGENTE.
            Se continua útil, é NORMAL.
"""
import glob
import json
import os
import re
import sys

SRC_DIR = r"D:\FRIDAY-BRAIN\05 - Conteúdo\Roteiros Fundadores"
HUBBY_DIR = r"D:\FRIDAY-BRAIN\05 - Conteúdo\Hubby - Dicas Diarias"
OUT = r"D:\FRIDAY-BRAIN\workspace\watch-tower-git\src\lib\roteiros-data.ts"

HEAD = re.compile(r"^##\s+(\d+)\s+·\s+(\w+)\s+·\s+([^(]+)\(([^)]+)\)\s*$")

# Linha OPCIONAL de urgência (ver docstring). Tolera "Urgencia" sem acento e
# ·|- como separador. Sem a linha => roteiro normal.
URGENCIA = re.compile(r"^Urg[êe]ncia:\s*([^\s·|-]+)\s*(?:[·|-]+\s*(.*))?$", re.M | re.I)
# Remove a linha do corpo (como o "Título:"), pra não vazar no texto copiável.
URGENCIA_STRIP = re.compile(r"^Urg[êe]ncia:.*$", re.M | re.I)


def parse_file(path):
    name = os.path.basename(path)
    # Aceita o lote dos fundadores ("AAAA-MM-DD - Lote NN.md") E os formatos novos
    # ("AAAA-MM-DD - Dupla e Custo - Lote NN.md"). O que vem entre a data e "Lote"
    # e livre. Arquivos sem esse padrao (ex.: _EXEMPLARES...) sao pulados.
    m = re.match(r"(\d{4}-\d{2}-\d{2})\s+-\s+.*?Lote\s+(\d+)\.md$", name)
    if not m:
        print("  ! nome fora do padrao, pulando:", name)
        return None
    date, lote = m.group(1), int(m.group(2))

    raw = open(path, encoding="utf-8").read()
    blocks = re.split(r"\n(?=##\s)", raw)
    scripts = []
    for b in blocks:
        first = b.split("\n", 1)[0]
        hm = HEAD.match(first.strip())
        if not hm:
            continue
        idx, persona, canal, tipo = hm.group(1), hm.group(2), hm.group(3).strip(), hm.group(4).strip()
        body = b.split("\n", 1)[1] if "\n" in b else ""
        body = body.replace("\r", "")
        tm = re.search(r"^Título:\s*(.+)$", body, re.M)
        titulo = tm.group(1).strip() if tm else "(sem título)"
        # Urgência: opcional. Só "urgente" liga o selo; qualquer outro valor
        # (inclusive "normal") deixa o roteiro normal, sem campo no dado.
        um = URGENCIA.search(body)
        urgencia = None
        urgencia_motivo = None
        if um and um.group(1).strip().lower().rstrip(".:") == "urgente":
            urgencia = "urgente"
            motivo = (um.group(2) or "").strip()
            if motivo:
                urgencia_motivo = motivo
            else:
                print(f"    ! roteiro {idx} marcado urgente SEM motivo (o selo nao dira o que corre)")
        body = re.sub(r"^Título:.*$", "", body, flags=re.M)
        body = URGENCIA_STRIP.sub("", body)
        body = re.sub(r"^-{3,}\s*$", "", body, flags=re.M)
        # Linhas ">" sao provenancia interna (fonte); nao entram no texto copiavel.
        body = re.sub(r"^>.*$", "", body, flags=re.M)
        paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
        if not paras:
            continue
        # tipo = familia do conteudo, pro filtro da aba:
        #   "dupla"   -> peca do casal (persona "Dupla")
        #   "custo"   -> dica de custo do Lucas (rotulo "(dica de custo)")
        #   "roteiro" -> roteiro comum dos fundadores
        low_tipo = tipo.lower()
        if persona.lower() == "dupla":
            familia = "dupla"
        elif "custo" in low_tipo:
            familia = "custo"
        else:
            familia = "roteiro"
        if tipo.startswith("longo"):
            formato = "longo"
        elif tipo.startswith("curto"):
            formato = "curto"
        else:
            formato = "longo"  # dupla/custo sao peças longas
        rec = {
            "id": f"{date}-{int(idx):02d}",
            "date": date,
            "lote": lote,
            "n": int(idx),
            "persona": persona,
            "canal": canal,
            "formato": formato,
            "tipo": familia,
            "titulo": titulo,
            "paras": paras,
            "palavras": sum(len(p.split()) for p in paras),
        }
        # Campos só existem quando há urgência: roteiro normal sai do parser
        # exatamente como saía antes (retrocompatível, e o diff fica limpo).
        if urgencia:
            rec["urgencia"] = urgencia
            if urgencia_motivo:
                rec["urgenciaMotivo"] = urgencia_motivo
        scripts.append(rec)
    return scripts


HUBBY_NAME = re.compile(r"^(\d{4}-\d{2}-\d{2})\s+-\s+(.+)\.md$")


def parse_hubby(path):
    """Dicas Práticas do Hubby: 1 arquivo = 1 peça (roteiro de vídeo narrado).

    Formato (ver 05 - Conteúdo\\Hubby - Dicas Diarias\\*.md): frontmatter YAML
    (data/pais/tema/...) + corpo com "# Titulo" e "# Roteiro (voz do Hubby)".
    A seção "# Notas de producao" é interna e não entra no texto copiável.
    """
    name = os.path.basename(path)
    m = HUBBY_NAME.match(name)
    if not m:
        print("  ! nome fora do padrao, pulando (hubby):", name)
        return None
    date = m.group(1)

    raw = open(path, encoding="utf-8").read()
    # Corta o frontmatter --- ... --- do início, se existir.
    body = re.sub(r"^---\n.*?\n---\n", "", raw, count=1, flags=re.S)

    tm = re.search(r"^#\s*Titulo\s*\n+(.+)$", body, re.M)
    titulo = tm.group(1).strip() if tm else "(sem título)"

    rm = re.search(r"^#\s*Roteiro[^\n]*\n+(.*?)(?=^#\s|\Z)", body, re.M | re.S)
    roteiro_body = rm.group(1) if rm else ""
    paras = [p.strip() for p in re.split(r"\n\s*\n", roteiro_body) if p.strip()]
    if not paras:
        return None

    rec = {
        "id": f"hubby-{date}",
        "date": date,
        "lote": 0,
        "n": 0,
        "persona": "Hubby",
        "canal": "YouTube",
        "formato": "curto",
        "tipo": "dicas",
        "titulo": titulo,
        "paras": paras,
        "palavras": sum(len(p.split()) for p in paras),
    }
    return [rec]


def main():
    files = sorted(glob.glob(os.path.join(SRC_DIR, "*.md")))
    all_scripts = []
    for f in files:
        s = parse_file(f)
        if s:
            print(f"  {os.path.basename(f)} -> {len(s)} roteiros")
            all_scripts.extend(s)

    hubby_files = sorted(glob.glob(os.path.join(HUBBY_DIR, "*.md")))
    for f in hubby_files:
        s = parse_hubby(f)
        if s:
            print(f"  {os.path.basename(f)} -> {len(s)} dica(s) do Hubby")
            all_scripts.extend(s)

    if not all_scripts:
        print("NADA parseado — abortando pra nao gerar arquivo vazio.")
        sys.exit(1)

    # mais novo primeiro
    all_scripts.sort(key=lambda s: (s["date"], s["n"]), reverse=True)

    body = json.dumps(all_scripts, ensure_ascii=False, indent=2)
    ts = f'''// GERADO por scripts/parse-lotes.py a partir dos lotes em
// "D:\\\\FRIDAY-BRAIN\\\\05 - Conteúdo\\\\Roteiros Fundadores". NÃO editar à mão:
// a fonte da verdade é o .md do lote, escrito e revisado pela Friday.
//
// Por que os roteiros moram no repo (e não no banco): é o mesmo padrão do
// editorial.ts — conteúdo curado pela Friday, versionado no Git, publicado no
// deploy (REGRA 4). Sem IA no servidor, e o histórico de cada lote fica no log
// do Git em vez de sumir numa linha de tabela.

export type RoteiroFormato = "longo" | "curto";
/** Família do conteúdo (filtro da aba). */
export type RoteiroTipo = "roteiro" | "dupla" | "custo" | "dicas";
/**
 * Marcação de urgência. Só existe um valor: a AUSÊNCIA do campo é "normal".
 * Critério do Hammis (2026-07-20): urgente = mudou uma lei/regra de visto, saiu
 * ato oficial, ou aconteceu nas últimas 48h / prazo fecha em poucos dias. Se a
 * peça continua válida semana que vem, é normal. Escrita à mão no .md do lote
 * (linha "Urgência: urgente · <motivo>"), ver docstring de scripts/parse-lotes.py.
 */
export type RoteiroUrgencia = "urgente";

export type Roteiro = {{
  /** `<data>-<n>` — estável, serve de chave de "já usei este". */
  id: string;
  /** AAAA-MM-DD do lote. */
  date: string;
  lote: number;
  n: number;
  /** "Lucas" | "Marcela" | "Dupla" */
  persona: string;
  /** "YouTube" | "Reels" | "Instagram" */
  canal: string;
  formato: RoteiroFormato;
  /** roteiro comum · dupla (casal) · custo (dica de custo do Lucas) · dicas (Dicas Práticas do Hubby). */
  tipo: RoteiroTipo;
  titulo: string;
  /** Corpo já quebrado em parágrafos, na ordem de leitura. */
  paras: string[];
  palavras: number;
  /** Presente só nos urgentes. Ausente = normal (os lotes antigos não têm). */
  urgencia?: RoteiroUrgencia;
  /** Por que corre, em uma linha ("Regra do LMIA muda em 17/07"). O selo
   *  sozinho não diz ao fundador o que está em jogo. */
  urgenciaMotivo?: string;
}};

export const ROTEIROS: Roteiro[] = {body};
'''
    with open(OUT, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(ts)
    print(f"\nOK: {len(all_scripts)} roteiros -> {OUT}")


if __name__ == "__main__":
    main()

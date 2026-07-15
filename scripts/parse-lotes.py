# -*- coding: utf-8 -*-
"""Converte os lotes .md de roteiros em src/lib/roteiros-data.ts (dados tipados).

Fonte: D:\\FRIDAY-BRAIN\\05 - Conteúdo\\Roteiros Fundadores\\AAAA-MM-DD - Lote NN.md
Saída: src/lib/roteiros-data.ts (commitado no repo · deploy via Git, REGRA 4)

Formato de cada roteiro no .md:
    ## <n> · <Persona> · <Canal> (<longo|curto>)
    Título: <titulo>
    <parágrafos separados por linha em branco>
"""
import glob
import json
import os
import re
import sys

SRC_DIR = r"D:\FRIDAY-BRAIN\05 - Conteúdo\Roteiros Fundadores"
OUT = r"D:\FRIDAY-BRAIN\workspace\watch-tower-git\src\lib\roteiros-data.ts"

HEAD = re.compile(r"^##\s+(\d+)\s+·\s+(\w+)\s+·\s+([^(]+)\(([^)]+)\)\s*$")


def parse_file(path):
    name = os.path.basename(path)
    m = re.match(r"(\d{4}-\d{2}-\d{2})\s+-\s+Lote\s+(\d+)\.md", name)
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
        body = re.sub(r"^Título:.*$", "", body, flags=re.M)
        body = re.sub(r"^-{3,}\s*$", "", body, flags=re.M)
        paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
        if not paras:
            continue
        scripts.append({
            "id": f"{date}-{int(idx):02d}",
            "date": date,
            "lote": lote,
            "n": int(idx),
            "persona": persona,
            "canal": canal,
            "formato": "longo" if tipo.startswith("longo") else "curto",
            "titulo": titulo,
            "paras": paras,
            "palavras": sum(len(p.split()) for p in paras),
        })
    return scripts


def main():
    files = sorted(glob.glob(os.path.join(SRC_DIR, "*.md")))
    all_scripts = []
    for f in files:
        s = parse_file(f)
        if s:
            print(f"  {os.path.basename(f)} -> {len(s)} roteiros")
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

export type Roteiro = {{
  /** `<data>-<n>` — estável, serve de chave de "já usei este". */
  id: string;
  /** AAAA-MM-DD do lote. */
  date: string;
  lote: number;
  n: number;
  /** "Lucas" | "Marcela" */
  persona: string;
  /** "YouTube" | "Reels" | "Instagram" */
  canal: string;
  formato: RoteiroFormato;
  titulo: string;
  /** Corpo já quebrado em parágrafos, na ordem de leitura. */
  paras: string[];
  palavras: number;
}};

export const ROTEIROS: Roteiro[] = {body};
'''
    with open(OUT, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(ts)
    print(f"\nOK: {len(all_scripts)} roteiros -> {OUT}")


if __name__ == "__main__":
    main()

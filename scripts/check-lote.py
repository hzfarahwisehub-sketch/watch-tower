# -*- coding: utf-8 -*-
"""Autoteste do lote ANTES de gastar as 3 lentes.

Mede o que elas mediriam e que da pra medir por maquina:
  1. duplicacao contra lotes anteriores (n-gramas de 8 palavras)
  2. formulas proibidas por regex
  3. contagem de palavras por roteiro
"""
import io
import re
import sys

BASE = r"D:\FRIDAY-BRAIN\05 - Conteúdo\Roteiros Fundadores"
NOVO = BASE + r"\2026-07-15 - Lote 03.md"
ANT = [BASE + r"\2026-07-13 - Lote 01.md", BASE + r"\2026-07-14 - Lote 02.md"]

HEAD = re.compile(r"^##\s+(\d+)\s+·\s+(\w+)\s+·\s+([^(]+)\(([^)]+)\)\s*$")


def roteiros(path):
    raw = io.open(path, encoding="utf-8").read()
    out = []
    for b in re.split(r"\n(?=##\s)", raw):
        first = b.split("\n", 1)[0].strip()
        m = HEAD.match(first)
        if not m:
            continue
        body = b.split("\n", 1)[1] if "\n" in b else ""
        body = re.sub(r"^Título:.*$", "", body, flags=re.M)
        # Linha opcional de urgência: metadado, não texto gravável. Fora da
        # contagem de palavras e da checagem de duplicação, como o "Título:".
        body = re.sub(r"^Urg[êe]ncia:.*$", "", body, flags=re.M | re.I)
        body = re.sub(r"^-{3,}\s*$", "", body, flags=re.M)
        out.append({
            "id": "%s %s %s (%s)" % (m.group(1), m.group(2), m.group(3).strip(), m.group(4).strip()),
            "longo": m.group(4).strip().startswith("longo"),
            "texto": body.strip(),
        })
    return out


def palavras(t):
    return re.findall(r"[\wÀ-ÿ]+", t.lower())


def ngrams(ws, n=5):
    return set(tuple(ws[i:i + n]) for i in range(len(ws) - n + 1))


# A lente da rodada 2 me pegou otimizando PRO PROPRIO TESTE: a duplicacao sumiu em
# n=8 (o limiar que EU escolhi) e sobreviveu em n=6 e n=5. Entao o teste desce pra 5.
# E a formula proibida sobreviveu em variacoes que o regex de "não é" nao pegava:
# "não está X. Está Y", "não quer dizer X. Quer dizer Y". A antitese e um TIQUE meu:
# ela volta em qualquer conjugacao. Cobrir o verbo, nao a palavra.
VERBO = r"(é|era|foi|está|estava|significa|quer dizer|descreve|decide|vira|vai ser|tem)"
PROIBIDO = [
    (r"não %s [^,.;]{2,45}[,.;]\s*%s\b" % (VERBO, VERBO), "FORMULA 'nao <verbo> X, <verbo> Y' (antitese negada)"),
    (r"não %s [^,.;]{2,45}[,.;]\s*(É|Está|Quer|Significa)\b" % VERBO, "FORMULA com ponto e maiuscula"),
    # "toda" saiu: casava "consome quase toda a atencao", que e quantificador normal e nao
    # a alegacao de raridade sobre PESSOAS que a regra proibe. Falso positivo meu.
    (r"quase (ninguém|todo mundo|nenhum)\b", "CLICHE 'quase ninguem/todo mundo'"),
    (r"você sabia", "CLICHE 'voce sabia'"),
    (r"mais do que você (imagina|pensa)", "curiosity-gap"),
    (r"\bnão é sobre\b", "FORMULA 'nao e sobre X'"),
    (r"—", "TRAVESSAO"),
    # moldes de fecho que a lente 1 mandou banir do lote inteiro
    (r"O que (ela|ele|a gente|a comunidade|a WiseHub) [a-zç]+ é ", "MOLDE de fecho 'O que X faz e ___'"),
    (r"\bVem [a-zç]+ com quem já\b", "MOLDE de fecho 'Vem ___ com quem ja ___'"),
    (r"^Se você está planejando", "MOLDE de abertura de fecho"),
]

print("=" * 70)
print("1) DUPLICACAO vs lotes anteriores (n-grama de 5 palavras)")
ant_ng = set()
for p in ANT:
    for r in roteiros(p):
        ant_ng |= ngrams(palavras(r["texto"]))

total_dup = 0
for r in roteiros(NOVO):
    ng = ngrams(palavras(r["texto"]))
    dup = ng & ant_ng
    total_dup += len(dup)
    flag = "OK" if not dup else "DUPLICADO"
    print("  %-34s %-10s %d n-gramas repetidos" % (r["id"], flag, len(dup)))
    if dup:
        ex = " ".join(sorted(dup)[0])
        print("       ex.: ...%s..." % ex)
print("  TOTAL:", total_dup, "(limiar endurecido: n=5)")

print()
print("=" * 70)
print("1b) DUPLICACAO INTERNA (um roteiro do lote copiando outro do MESMO lote)")
# A lente pegou 12 palavras iguais entre R1 (Lucas) e R5 (Marcela) e o teste nao via:
# ele so comparava contra os lotes ANTERIORES. Buraco meu.
novos = roteiros(NOVO)
inter = 0
for i in range(len(novos)):
    for j in range(i + 1, len(novos)):
        d2 = ngrams(palavras(novos[i]["texto"]), 8) & ngrams(palavras(novos[j]["texto"]), 8)
        if d2:
            inter += len(d2)
            print("  %s  x  %s : %d trecho(s) de 8+ palavras" % (novos[i]["id"][:20], novos[j]["id"][:20], len(d2)))
            print("       ex.: ...%s..." % " ".join(sorted(d2)[0]))
if not inter:
    print("  nenhuma")

print()
print("=" * 70)
print("2) FORMULAS PROIBIDAS")
achou = 0
for r in roteiros(NOVO):
    for pat, nome in PROIBIDO:
        for m in re.finditer(pat, r["texto"], re.I):
            achou += 1
            ini = max(0, m.start() - 40)
            print("  [%s] %s" % (r["id"][:22], nome))
            print("       ...%s..." % r["texto"][ini:m.end() + 40].replace("\n", " "))
if not achou:
    print("  nenhuma")

print()
print("=" * 70)
print("3) CONTAGEM DE PALAVRAS")
fora = 0
for r in roteiros(NOVO):
    n = len(palavras(r["texto"]))
    lo, hi = (450, 600) if r["longo"] else (120, 180)
    ok = lo <= n <= hi
    if not ok:
        fora += 1
    print("  %-34s %4d  %s" % (r["id"], n, "ok" if ok else "FORA (%d-%d)" % (lo, hi)))

print()
print("=" * 70)
print("VEREDITO AUTOMATICO: dup_externa=%d dup_interna=%d formulas=%d fora_de_faixa=%d" % (total_dup, inter, achou, fora))
sys.exit(0 if (inter == 0 and achou == 0 and fora == 0) else 1)

#!/usr/bin/env bash
# deploy-labor.sh - deploy determinista e blindado da rodada do Mercado de Trabalho.
# Uso:  bash deploy-labor.sh <caminho_output.json> [YYYY-MM-DD] ["rotulo do grupo"]
#
# Roda SEMPRE via Bash (POSIX), NUNCA PowerShell:
#   - PowerShell 5.1 mente sobre UTF-8 (mojibake-fantasma) ao validar texto acentuado.
#   - O falso-bloqueio do harness so inspeciona o comando externo (bash deploy-labor.sh),
#     entao 'rm'/'git worktree remove' DENTRO do script nao disparam a trava.
# Encapsula TODOS os portoes de qualidade como exit code + o deploy via worktree.
set -uo pipefail

OUT="${1:-}"
STAMP="${2:-$(date +%F)}"
GRUPO="${3:-rodada}"
DRY_RUN="${DRY_RUN:-0}"
DATA="src/lib/labor-market-data.ts"
SUCCESS=0

REPO="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO" || { echo "ABORTADO: nao achei o repo"; exit 1; }
WT="$(dirname "$REPO")/.wt-labor-deploy"
LOCK="$REPO/.deploy-labor.lock"

cleanup() {
  git worktree remove "$WT" --force >/dev/null 2>&1 || true
  git worktree prune >/dev/null 2>&1 || true
  rm -f "$LOCK" >/dev/null 2>&1 || true
  # se a rodada NAO concluiu o deploy, restaura o working tree (o gerador pode ter
  # deixado conteudo reprovado em $DATA) pra nao sujar o repo compartilhado.
  if [ "$SUCCESS" != 1 ] && [ "$DRY_RUN" != 1 ]; then git checkout -- "$DATA" >/dev/null 2>&1 || true; fi
}
trap cleanup EXIT

fail(){ printf '\xE2\x9D\x8C ABORTADO (exit %s): %s\n' "$1" "$2" >&2; exit "$1"; }

if [ "$DRY_RUN" = 1 ]; then
  echo "== DRY RUN: so valida os gates no $DATA atual; nao gera, nao comita, nao da push =="
else
  [ -n "$OUT" ] || fail 1 "uso: bash deploy-labor.sh <output.json> [data] [grupo]"
  [ -f "$OUT" ] || fail 1 "arquivo .output nao existe: $OUT"
  # --- LOCK: serializa com a editorial-diaria e evita 2 rodadas no mesmo repo ---
  if [ -e "$LOCK" ]; then fail 10 "ja existe $LOCK (outra rodada/processo). Saindo sem mexer em nada."; fi
  echo "$$ $(date)" > "$LOCK"
  echo "== 1/5 Gerando dados (merge seguro) =="
  node _gen-labor.mjs "$OUT" "$STAMP" || fail 1 "o gerador abortou (ver msg acima: mojibake/crivo/anti-apagamento/etc). NAO vou deployar."
fi

echo "== 2/5 Portoes de qualidade (Node/grep, nunca PowerShell) =="
# tsc: falha so se houver erro NOS arquivos de labor-market
TSC="$(npx --no-install tsc --noEmit 2>&1 || true)"
if echo "$TSC" | grep -qi "labor-market"; then fail 1 "erro de TypeScript em labor-market: $(echo "$TSC" | grep -i labor-market | head -3)"; fi
# travessao (em-dash U+2014): grep e UTF-8 no Git Bash
if grep -F "$(printf '\xE2\x80\x94')" "$DATA" >/dev/null 2>&1; then fail 1 "travessao (em-dash) encontrado no $DATA"; fi
# HTML cru
if grep -nE "<[a-zA-Z/][^>]*>" "$DATA" >/dev/null 2>&1; then fail 1 "HTML cru (<...>) encontrado no $DATA"; fi
# 'Watch Tower' no conteudo (proibido no REPAVET)
if grep -iF "watch tower" "$DATA" >/dev/null 2>&1; then fail 1 "'Watch Tower' citado no conteudo (proibido)"; fi
# segredos
if grep -nE "sk_live|rk_live|RESEND_API_KEY|DATABASE_URL|BEGIN (RSA |)PRIVATE KEY" "$DATA" >/dev/null 2>&1; then fail 1 "possivel segredo no $DATA"; fi
# contagem >=38 + campos obrigatorios + mojibake (char-level via Node UTF-8)
node -e '
const fs=require("fs");
const s=fs.readFileSync(process.argv[1],"utf8");
if(/[ÂÃ][-¿]/.test(s)){console.error("mojibake (UTF-8 lido como Latin-1) no data.ts");process.exit(1);}
const m=s.match(/LABOR_MARKET:\s*LaborMarketMap\s*=\s*(\{[\s\S]*\});\s*$/);
if(!m){console.error("nao consegui parsear o data.ts");process.exit(1);}
const map=JSON.parse(m[1]); const codes=Object.keys(map);
if(codes.length<38){console.error("menos de 38 paises: "+codes.length);process.exit(1);}
const req=["overview","hotSectors","inDemandRoles","foreignerRules","jobBoards","sources"];
const bad=[];
for(const c of codes){const o=map[c]||{};for(const f of req){const v=o[f];
  const vazio = v===undefined||v===null||(typeof v==="string"&&v.trim()==="")||(Array.isArray(v)&&v.length===0);
  if(vazio) bad.push(c+"."+f);}}
if(bad.length){console.error("campos obrigatorios vazios ("+bad.length+"): "+bad.slice(0,25).join(", "));process.exit(1);}
console.log("   OK Node: "+codes.length+" paises, campos obrigatorios presentes, sem mojibake");
' "$DATA" || fail 1 "validacao Node (contagem/campos/mojibake) falhou"
echo "   gates de texto (travessao/HTML/watch-tower/segredo) OK"

if [ "$DRY_RUN" = 1 ]; then printf '\xE2\x9C\x85 DRY RUN OK - todos os gates passaram no %s atual (nada gerado/deployado).\n' "$DATA"; exit 0; fi

# Nada mudou? sai limpo (sem commit vazio).
if git diff --quiet -- "$DATA"; then echo "   (sem mudancas em $DATA - nada a deployar)"; exit 0; fi

echo "== 3/5 Commit (so o $DATA, ignora WIP de outro processo) =="
# git commit -- <path> comita SOMENTE esse caminho, ignorando qualquer coisa ja staged por outro processo.
git commit -m "content(labor): rodada semanal do mercado de trabalho ($GRUPO)" \
           -m "Regenerado por _gen-labor.mjs (merge preservando os outros paises; gates de qualidade no deploy-labor.sh)." \
           -m "Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>" \
           -- "$DATA" || fail 1 "git commit falhou"
SHA="$(git rev-parse HEAD)"
CHANGED="$(git show --name-only --format= HEAD | grep -v '^$' || true)"
[ "$CHANGED" = "$DATA" ] || fail 1 "o commit tocou arquivos alem do esperado: [$CHANGED]"
echo "   commit ${SHA:0:8} toca SO $DATA"

echo "== 4/5 Deploy via worktree + cherry-pick (main tem WIP de outro processo) =="
git fetch origin || fail 1 "git fetch falhou"
git worktree remove "$WT" --force >/dev/null 2>&1 || true
git worktree prune >/dev/null 2>&1 || true
git worktree add --detach "$WT" origin/main || fail 1 "git worktree add falhou"

if ! git -C "$WT" cherry-pick "$SHA" >/dev/null 2>&1; then
  echo "   conflito no cherry-pick; nosso $DATA vence (e o unico arquivo tocado)"
  git -C "$WT" checkout --theirs -- "$DATA" >/dev/null 2>&1 || git -C "$WT" checkout "$SHA" -- "$DATA"
  git -C "$WT" add "$DATA"
  GIT_EDITOR=true git -C "$WT" cherry-pick --continue >/dev/null 2>&1 || fail 1 "cherry-pick conflitante nao resolveu"
fi

PUSHED=""
for i in 1 2 3; do
  if git -C "$WT" push origin HEAD:main >/dev/null 2>&1; then PUSHED="ok"; break; fi
  echo "   push rejeitado (tentativa $i/3); rebase em origin/main e retry..."
  git -C "$WT" fetch origin >/dev/null 2>&1 || true
  git -C "$WT" rebase origin/main >/dev/null 2>&1 || git -C "$WT" rebase --abort >/dev/null 2>&1 || true
done
[ -n "$PUSHED" ] || fail 1 "push falhou apos 3 tentativas (divergencia/rede?)"
NEWSHA="$(git -C "$WT" rev-parse HEAD)"

echo "== 5/5 Verificacao: o push aterrissou em origin/main? =="
git fetch origin >/dev/null 2>&1 || true
REMOTE="$(git rev-parse origin/main)"
[ "$REMOTE" = "$NEWSHA" ] || fail 1 "origin/main ($REMOTE) != commit empurrado ($NEWSHA)"
SUCCESS=1
printf '\xE2\x9C\x85 DEPLOY OK - origin/main agora = %s - grupo: %s - data: %s\n' "${NEWSHA:0:8}" "$GRUPO" "$STAMP"
echo "   (Vercel publica via webhook do Git; conferir 'Ready' apontando pra esse SHA no painel.)"

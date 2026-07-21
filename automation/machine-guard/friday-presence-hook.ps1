param(
  [Parameter(Mandatory=$true)][ValidateSet('Start','End')][string]$Event
)
# Friday - Hook de Presenca (SessionStart/SessionEnd)
# Mantem um contador simples de sessoes ativas por maquina, SEM conteudo (nunca grava
# assunto/arquivo/pasta - so "tem sessao ativa desde quando"), respeitando o isolamento
# entre WiseHub e assuntos particulares (Wrap Labs/Trust/pessoal).
#
# Grava em DOIS lugares:
#   1) Vault local (sincroniza pela vault/Syncthing quando pareado - alimenta o Dashboard Obsidian)
#   2) VDS via scp (disponivel na hora, nao depende do Syncthing - alimenta o briefing via SSH)
# Falha de rede na VDS nao trava a sessao (best-effort, silencioso).
#
# Limitacao conhecida e aceita: se uma sessao cair sem fechar limpo (crash/energia), o
# contador pode nao decrementar. Por isso quem LE este arquivo deve aplicar um corte de
# obsolescencia (ex.: >12h sem atualizacao = tratar como inativa), nao confiar cegamente
# no numero. Portavel: usa $PSScriptRoot e $env:USERPROFILE, funciona em qualquer PC/drive.
#
# v3 (2026-07-20): endereco da VDS vem de .friday-vds.json (fora do git).
# CUIDADO ESPECIAL: isto e HOOK DE SESSAO. Ele NUNCA pode escrever em stderr nem travar a
# abertura da sessao. Por isso chama o loader com -NoStderr: se faltar config, ele apenas
# PULA o espelho na VDS e segue gravando na vault. O motivo fica registrado em GUARD-ERRO.log.

$ErrorActionPreference = 'SilentlyContinue'
$idFile      = Join-Path $env:USERPROFILE '.friday-machine.id'
$presenceDir = Join-Path $PSScriptRoot 'presence'

$vds = $null
$loader = Join-Path $PSScriptRoot 'friday-vds-config.ps1'
if (Test-Path $loader) {
  . $loader
  $vds = Get-FridayVdsConfig -NoStderr
}

function Get-MyId {
  if (Test-Path $idFile) {
    $v = (Get-Content $idFile -Raw).Trim()
    if ($v) { return $v }
  }
  return $env:COMPUTERNAME
}

$me = Get-MyId
if (-not (Test-Path $presenceDir)) { New-Item -ItemType Directory -Path $presenceDir -Force | Out-Null }
$file = Join-Path $presenceDir "$me.json"
$nowIso = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ')

$state = $null
if (Test-Path $file) {
  try { $state = Get-Content $file -Raw | ConvertFrom-Json } catch { $state = $null }
}
if (-not $state) {
  $state = [PSCustomObject]@{ machine = $me; active_count = 0; since = $null; last_updated = $nowIso }
}

if ($Event -eq 'Start') {
  if (-not $state.active_count -or $state.active_count -lt 1) {
    $state.active_count = 1
    $state.since = $nowIso
  } else {
    $state.active_count = [int]$state.active_count + 1
  }
} else {
  $state.active_count = [Math]::Max(0, [int]$state.active_count - 1)
}
$state.last_updated = $nowIso

$json = $state | ConvertTo-Json -Depth 3
Set-Content -Path $file -Value $json -Encoding UTF8

# best-effort: espelha na VDS (nao bloqueia a sessao se falhar, nem se faltar config)
if ($vds) {
  try {
    & scp -i $vds.KeyPath -o ConnectTimeout=6 -o BatchMode=yes $file "$($vds.Target):$($vds.ControlDir)/presence/$me.json" 2>$null | Out-Null
  } catch { }
}

exit 0

param(
  [Parameter(Mandatory=$true)][string]$TaskId,
  [Parameter(Mandatory=$true)][ValidateSet('daily','weekly','6h')][string]$Frequency
)
# Friday - Guarda de Coordenacao entre Maquinas (v3, claim-lock + failover + config externa)
# Imprime RUN (prossiga com a tarefa) ou SKIP (encerre em silencio, ja e/sera feita em outra maquina).
#
# Modo AUTO (padrao): cada tarefa disputa uma RESERVA ATOMICA na VDS pro periodo atual
# (mkdir, que so uma maquina consegue criar). A maquina preferida tenta primeiro (sem espera);
# a outra espera um pouco (cede a vez) antes de tentar. Se a preferida estiver desligada,
# ninguem disputa a reserva dela e a outra maquina pega sozinha - failover automatico, sem
# precisar trocar chave manual.
#
# Modo MANUAL (manual_override preenchido): so a maquina indicada roda, sempre, sem disputa.
#
# Fail-closed: se nao conseguir ler o flag NEM falar com a VDS, imprime SKIP (nunca duplica por duvida).
#
# Portavel: usa $PSScriptRoot (onde ESTE script fisicamente esta) em vez de letra de drive fixa,
# e $env:USERPROFILE em vez de usuario fixo - funciona em qualquer PC, qualquer letra/usuario.
#
# v3 (2026-07-20): o endereco da VDS saiu do codigo e foi para .friday-vds.json (fora do git),
# lido por friday-vds-config.ps1. Assim este script pode ser versionado num repo publico.
#
# CONTRATO DE SAIDA (nao mudou para quem chama):
#   stdout  = exatamente 'RUN' ou 'SKIP', e nada mais.
# CODIGOS DE SAIDA (novos, para separar decisao de cegueira):
#   0 = decisao legitima (rodei, ou cedi porque a reserva ja era de alguem)
#   3 = NAO CONFIGURADO (sem .friday-vds.json valido) - stdout SKIP, stderr GRITA
#   4 = CEGO (nao li o estado nem na vault nem na VDS) - stdout SKIP, stderr GRITA
# Um SKIP com exit 0 e uma decisao. Um SKIP com exit 3 ou 4 e um defeito que precisa de gente.

$ErrorActionPreference = 'SilentlyContinue'
$idFile    = Join-Path $env:USERPROFILE '.friday-machine.id'
$flagVault = Join-Path $PSScriptRoot 'active-machine.json'
$NAO_PREFERIDA_ESPERA_SEGUNDOS = 120

$loader = Join-Path $PSScriptRoot 'friday-vds-config.ps1'
if (-not (Test-Path $loader)) {
  [Console]::Error.WriteLine("[{0}] GUARD-NAO-CONFIGURADO falta friday-vds-config.ps1 ao lado do guard: {1}" -f (Get-Date -Format o), $loader)
  Write-Output 'SKIP'
  exit 3
}
. $loader

$vds = Get-FridayVdsConfig
if (-not $vds) {
  # SKIP porque fail-closed (nunca duplicar por duvida), MAS exit 3 + stderr para nao morrer calado.
  Write-Output 'SKIP'
  exit 3
}
$sshKey  = $vds.KeyPath
$vdsHost = $vds.Target
$ctl     = $vds.ControlDir

function Get-MyId {
  if (Test-Path $idFile) {
    $v = (Get-Content $idFile -Raw).Trim()
    if ($v) { return $v }
  }
  return $env:COMPUTERNAME
}

function Get-Flag {
  if (Test-Path $flagVault) {
    try {
      $j = Get-Content $flagVault -Raw | ConvertFrom-Json
      if ($j) { return $j }
    } catch { }
  }
  try {
    $out = & ssh -i $sshKey -o BatchMode=yes -o ConnectTimeout=8 $vdsHost "cat $ctl/active-machine.json" 2>$null
    if ($out) { return ($out -join "`n") | ConvertFrom-Json }
  } catch { }
  return $null
}

function Get-PeriodKey {
  param([string]$freq)
  $now = [DateTime]::UtcNow
  switch ($freq) {
    'daily'  { return $now.ToString('yyyy-MM-dd') }
    'weekly' { $cal = [System.Globalization.CultureInfo]::InvariantCulture.Calendar
               $week = $cal.GetWeekOfYear($now, [System.Globalization.CalendarWeekRule]::FirstFourDayWeek, [DayOfWeek]::Monday)
               return "$($now.Year)-W$week" }
    '6h'     { $block = [Math]::Floor($now.Hour / 6) * 6
               return $now.ToString('yyyy-MM-dd') + "-h$block" }
  }
}

$me   = Get-MyId
$flag = Get-Flag

if (-not $flag) {
  Write-GuardError "sem estado em lugar nenhum (vault: $flagVault | VDS: $($vds.Source)). SKIP por seguranca, mas isto e cegueira, nao decisao."
  Write-Output 'SKIP'
  exit 4
}

if ($flag.manual_override) {
  if ($me -eq [string]$flag.manual_override) { Write-Output 'RUN' } else { Write-Output 'SKIP' }
  exit 0
}

$preferred = [string]$flag.preferred_machine
if ($preferred -and ($me -ne $preferred)) {
  Start-Sleep -Seconds $NAO_PREFERIDA_ESPERA_SEGUNDOS
}

$period = Get-PeriodKey -freq $Frequency
$claimName = "$TaskId--$period"
$remoteCmd = "mkdir $ctl/claims/$claimName 2>/dev/null && echo CLAIMED_BY_ME || echo JA_RESERVADO"

try {
  $result = & ssh -i $sshKey -o BatchMode=yes -o ConnectTimeout=10 $vdsHost $remoteCmd 2>$null
} catch {
  Write-Output 'SKIP'
  exit 0
}

if ($result -match 'CLAIMED_BY_ME') {
  & ssh -i $sshKey -o BatchMode=yes -o ConnectTimeout=8 $vdsHost "echo '$me em $(Get-Date -Format o)' > $ctl/claims/$claimName/info.txt" 2>$null | Out-Null
  Write-Output 'RUN'
} else {
  Write-Output 'SKIP'
}
exit 0

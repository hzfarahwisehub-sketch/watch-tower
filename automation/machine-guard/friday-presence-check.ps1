# Friday - Consulta de Presenca (uso no briefing REGRA 2)
# Imprime UMA linha por OUTRA maquina (nao a atual) que tenha sessao ativa e nao-obsoleta,
# no formato pronto pra colar no briefing: "<MAQUINA> tem sessao ativa desde HH:MM".
# Se nao houver nenhuma, NAO imprime nada (saida vazia) - o briefing entao omite a linha
# de Presenca inteira, sem placeholder vazio.
#
# Fonte: VDS primeiro (via SSH, disponivel na hora, nao depende do Syncthing ter pareado),
# cai pro arquivo local da vault se a VDS estiver fora.
#
# v3 (2026-07-20): endereco da VDS vem de .friday-vds.json (fora do git).
# Sem config, este script NAO grita: ele existe pra nao imprimir nada quando nao ha o que
# dizer, e poluir o briefing com erro seria pior que o silencio. Ele cai direto pro arquivo
# local da vault e registra o motivo em GUARD-ERRO.log (quem investiga acha la).

$ErrorActionPreference = 'SilentlyContinue'
$idFile      = Join-Path $env:USERPROFILE '.friday-machine.id'
$presenceDir = Join-Path $PSScriptRoot 'presence'
$STALE_HOURS = 12
$TODAS = @('RASTAMAX','GPU-NOVA')

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

function Get-Presence {
  param([string]$machine)
  if ($vds) {
    try {
      $out = & ssh -i $vds.KeyPath -o BatchMode=yes -o ConnectTimeout=6 $vds.Target "cat $($vds.ControlDir)/presence/$machine.json" 2>$null
      if ($out) { return ($out -join "`n") | ConvertFrom-Json }
    } catch { }
  }
  $local = Join-Path $presenceDir "$machine.json"
  if (Test-Path $local) {
    try { return Get-Content $local -Raw | ConvertFrom-Json } catch { }
  }
  return $null
}

$me = Get-MyId
foreach ($m in $TODAS) {
  if ($m -eq $me) { continue }
  $st = Get-Presence -machine $m
  if (-not $st) { continue }
  if (-not $st.active_count -or [int]$st.active_count -lt 1) { continue }
  if (-not $st.last_updated) { continue }
  try {
    $age = (Get-Date).ToUniversalTime() - [DateTime]::Parse($st.last_updated).ToUniversalTime()
  } catch { continue }
  if ($age.TotalHours -ge $STALE_HOURS) { continue }
  $since = 'agora'
  if ($st.since) {
    try { $since = ([DateTime]::Parse($st.since)).ToLocalTime().ToString('HH:mm') } catch { }
  }
  Write-Output "$m tem sessao ativa desde $since"
}
exit 0

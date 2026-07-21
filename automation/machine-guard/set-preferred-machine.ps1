param(
  [Parameter(Mandatory=$true)]
  [ValidateSet('RASTAMAX','GPU-NOVA')]
  [string]$Machine
)
# Muda qual maquina tem a LARGADA na disputa automatica (a preferida tenta na hora;
# a outra cede ~2 min antes de tentar). Nao forca nada: se a preferida estiver desligada,
# a outra assume sozinha do mesmo jeito.
# Portavel: usa $PSScriptRoot (funciona em qualquer letra de drive/PC).
# v3: endereco da VDS vem de .friday-vds.json (fora do git), nao do codigo.

. (Join-Path $PSScriptRoot 'friday-vds-config.ps1')
$vds = Get-FridayVdsConfig
if (-not $vds) {
  Write-Output "ABORTADO: guard sem .friday-vds.json valido (ver a mensagem acima e GUARD-ERRO.log nesta pasta). Nada foi alterado."
  exit 1
}

$flagVault = Join-Path $PSScriptRoot 'active-machine.json'
$stamp = (Get-Date).ToString('yyyy-MM-dd HH:mm')
$me = $env:COMPUTERNAME
$j = Get-Content $flagVault -Raw | ConvertFrom-Json
$j.preferred_machine = $Machine
$j.updated_at = $stamp
$j.updated_by = "set-preferred-machine em $me"
$json = $j | ConvertTo-Json -Depth 5
Set-Content -Path $flagVault -Value $json -Encoding UTF8

$tmp = Join-Path $env:TEMP 'active-machine.json'
Set-Content -Path $tmp -Value $json -Encoding UTF8
& scp -i $vds.KeyPath -o ConnectTimeout=10 $tmp "$($vds.Target):$($vds.ControlDir)/active-machine.json" 2>$null
if ($LASTEXITCODE -eq 0) { $st = 'VDS OK' } else { $st = 'VDS falhou (rode de novo com a VDS no ar)' }
Write-Output "Preferida agora: $Machine. $st"

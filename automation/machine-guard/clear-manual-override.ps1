# Volta ao modo AUTOMATICO (disputa por reserva + failover), desligando o modo manual.
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
$j.manual_override = $null
$j.updated_at = $stamp
$j.updated_by = "clear-manual-override em $me"
$json = $j | ConvertTo-Json -Depth 5
Set-Content -Path $flagVault -Value $json -Encoding UTF8

$tmp = Join-Path $env:TEMP 'active-machine.json'
Set-Content -Path $tmp -Value $json -Encoding UTF8
& scp -i $vds.KeyPath -o ConnectTimeout=10 $tmp "$($vds.Target):$($vds.ControlDir)/active-machine.json" 2>$null
if ($LASTEXITCODE -eq 0) { $st = 'VDS OK' } else { $st = 'VDS falhou (rode de novo com a VDS no ar)' }
Write-Output "MODO AUTOMATICO restaurado: as maquinas voltam a disputar reserva (preferida = $($j.preferred_machine)). $st"

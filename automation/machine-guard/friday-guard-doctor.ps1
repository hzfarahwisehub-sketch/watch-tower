# Friday - Doutor do Guard. Diz, em voz alta, se ESTA maquina consegue coordenar.
# Nao altera nada e nao reserva periodo nenhum. Rode depois de instalar numa maquina nova,
# ou quando uma rotina "sumir" sem explicacao.
#
# Nao imprime o endereco da VDS: mostra so a ORIGEM da config e se cada peca respondeu.
# Assim a saida pode ser colada numa conversa sem vazar infra.
#
# exit 0 = tudo pronto | exit 1 = tem peca faltando (a saida diz qual)

$ErrorActionPreference = 'SilentlyContinue'
$falhas = 0
function Ok   { param($m) Write-Output "  [ok]    $m" }
function Fail { param($m) Write-Output "  [FALTA] $m"; $script:falhas++ }

Write-Output "`nDoutor do guard de maquina ativa`n"

# 1. identidade
$idFile = Join-Path $env:USERPROFILE '.friday-machine.id'
if (Test-Path $idFile) {
  $me = (Get-Content $idFile -Raw).Trim()
  Ok "identidade desta maquina: $me  (.friday-machine.id)"
} else {
  $me = $env:COMPUTERNAME
  Fail "nao existe .friday-machine.id em %USERPROFILE% - caindo pro COMPUTERNAME ($me), que pode nao bater com os rotulos usados no active-machine.json"
}

# 2. loader
$loader = Join-Path $PSScriptRoot 'friday-vds-config.ps1'
if (Test-Path $loader) { Ok "friday-vds-config.ps1 presente" } else { Fail "friday-vds-config.ps1 ausente nesta pasta"; }

# 3. config local
$vds = $null
if (Test-Path $loader) {
  . $loader
  $vds = Get-FridayVdsConfig -NoStderr
}
if ($vds) {
  Ok "config da VDS lida de: $($vds.Source)"
  Ok "chave SSH encontrada em: $($vds.KeyPath)"
} else {
  Fail "nenhum .friday-vds.json valido (copie .friday-vds.example.json para .friday-vds.json aqui do lado e preencha). Detalhe do motivo em GUARD-ERRO.log"
}

# 4. estado
$flagVault = Join-Path $PSScriptRoot 'active-machine.json'
if (Test-Path $flagVault) {
  try {
    $j = Get-Content $flagVault -Raw | ConvertFrom-Json
    $mo = if ($j.manual_override) { $j.manual_override } else { 'nenhum' }
    Ok "active-machine.json presente (preferida: $($j.preferred_machine) | override manual: $mo)"
  } catch { Fail "active-machine.json existe mas esta ilegivel (JSON invalido)" }
} else {
  Fail "active-machine.json ausente nesta pasta (vem pela vault/Syncthing; sem ele o guard depende so da VDS)"
}

# 5. SSH de verdade (leitura pura, nao reserva nada)
if ($vds) {
  $probe = & ssh -i $vds.KeyPath -o BatchMode=yes -o ConnectTimeout=8 $vds.Target "test -d $($vds.ControlDir)/claims && echo CLAIMS_OK" 2>$null
  if ($probe -match 'CLAIMS_OK') {
    Ok "SSH respondeu e o diretorio de reservas existe no lado remoto"
  } else {
    Fail "SSH nao respondeu, ou o diretorio de reservas nao existe no lado remoto (VDS fora? chave sem acesso? controlDir errado?)"
  }
}

if ($falhas -eq 0) {
  Write-Output "`nTudo pronto: esta maquina consegue coordenar.`n"
  exit 0
}
Write-Output "`n$falhas peca(s) faltando. Enquanto isso, o guard vai imprimir SKIP e sair com codigo 3 ou 4 (nao com 0).`n"
exit 1

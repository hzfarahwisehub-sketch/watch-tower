# Friday - Carregador do endereco da VDS.
#
# ESTE ARQUIVO NAO CONTEM SEGREDO. Ele so ENSINA onde procurar a configuracao local.
# Mesmo principio que o README de automation/ ja aplica ao .friday-secret:
#   o script aponta ONDE a infra mora, nunca CARREGA o endereco dela.
#
# Ordem de busca (o primeiro que existir E for valido vence):
#   1) $env:FRIDAY_VDS_CONFIG          - override explicito, para teste
#   2) <esta pasta>\.friday-vds.json   - o normal (viaja junto com os scripts pela vault)
#   3) %USERPROFILE%\.friday-vds.json  - maquina cuja vault ainda nao pareou
#
# Falha NUNCA e silenciosa: escreve em stderr E em GUARD-ERRO.log, e devolve $null.
# Quem chama decide o que fazer com o $null (abortar, pular espelho, etc).

function Write-GuardError {
  param([string]$Msg, [switch]$NoStderr)
  $line = "[{0}] GUARD-NAO-CONFIGURADO {1}" -f (Get-Date -Format o), $Msg
  if (-not $NoStderr) { [Console]::Error.WriteLine($line) }
  try { Add-Content -Path (Join-Path $PSScriptRoot 'GUARD-ERRO.log') -Value $line -Encoding UTF8 } catch { }
}

function Get-FridayVdsConfig {
  param([switch]$NoStderr)

  $cands = @()
  if ($env:FRIDAY_VDS_CONFIG) { $cands += $env:FRIDAY_VDS_CONFIG }
  $cands += (Join-Path $PSScriptRoot '.friday-vds.json')
  $cands += (Join-Path $env:USERPROFILE '.friday-vds.json')

  foreach ($p in $cands) {
    if (-not (Test-Path $p)) { continue }

    $cfg = $null
    try { $cfg = Get-Content $p -Raw | ConvertFrom-Json } catch {
      Write-GuardError "config ilegivel (JSON invalido): $p" -NoStderr:$NoStderr
      continue
    }
    if (-not $cfg) {
      Write-GuardError "config vazio: $p" -NoStderr:$NoStderr
      continue
    }

    $vHost = [string]$cfg.host
    $vUser = [string]$cfg.user
    $vKey  = [string]$cfg.keyPath
    $vCtl  = [string]$cfg.controlDir
    # Os quatro sao obrigatorios de proposito. Ter um valor padrao para controlDir seria
    # deixar o layout remoto (e a conta que o dono dele usa) cravado neste arquivo, que e
    # justamente o que esta migracao veio tirar do codigo.
    if (-not $vHost -or -not $vUser -or -not $vKey -or -not $vCtl) {
      Write-GuardError "config incompleto (precisa host, user, keyPath, controlDir): $p" -NoStderr:$NoStderr
      continue
    }

    $key = [Environment]::ExpandEnvironmentVariables($vKey)
    if (-not (Test-Path $key)) {
      # Config existe e aponta para uma chave que nao esta la: isso e erro DURO.
      # Nao cai para o proximo candidato - seria mascarar um problema real.
      Write-GuardError "config $p aponta chave SSH inexistente: $key" -NoStderr:$NoStderr
      return $null
    }

    return [PSCustomObject]@{
      Source     = $p
      Target     = "$vUser@$vHost"
      KeyPath    = $key
      ControlDir = $vCtl.TrimEnd('/')
    }
  }

  Write-GuardError ("nenhum .friday-vds.json valido. Procurei em: " + ($cands -join ' | ') +
                    ". Copie .friday-vds.example.json para .friday-vds.json ao lado dos scripts " +
                    "e preencha. Ver automation/README.md, secao 'Maquina nova'.") -NoStderr:$NoStderr
  return $null
}

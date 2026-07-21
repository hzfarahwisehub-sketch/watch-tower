# Coordenação entre Máquinas (v3 — reserva automática + failover + config fora do git)

> Criado pela Friday em 2026-07-16, evoluído no mesmo dia pra v2, e em 2026-07-20 pra v3
> (endereço da VDS saiu do código). Objetivo: as tarefas agendadas existem idênticas nas duas
> máquinas (RASTAMAX e a nova com GPU), mas **nunca duplicam**, e se uma estiver desligada,
> **a outra assume sozinha, automático**.

## Como funciona (em 1 parágrafo)
Toda tarefa agendada, antes de fazer qualquer coisa, tenta fazer uma **reserva atômica**
no servidor de coordenação pro período daquela rodada (o dia, a semana, ou a janela de 6h,
conforme a tarefa). Só uma máquina consegue reservar; a outra vê a reserva e desiste em
silêncio. A máquina **preferida** tenta reservar na hora; a outra **cede ~2 minutos** antes
de tentar — dando tempo da preferida pegar primeiro se estiver ligada. Se a preferida estiver
desligada, ninguém disputa a reserva dela, e a outra pega sozinha depois da cessão: **failover
automático, sem trocar chave manual**. Existe também um **modo manual** (força bruta) pra
quando você quer garantir 100% que só uma máquina roda, não importa o quê.

## Peças
| Arquivo | O que é |
|---|---|
| `active-machine.json` (nesta pasta, sincroniza pela vault) | O estado: `mode`, `preferred_machine`, `manual_override`. **Não vai pro git** (estado de runtime). |
| `.friday-vds.json` (nesta pasta) | **A configuração local**: onde fica o servidor de coordenação, com que usuário e com que chave. **Nunca vai pro git.** Modelo: `.friday-vds.example.json`. |
| `friday-vds-config.ps1` | Lê o `.friday-vds.json` e entrega o alvo pros outros scripts. Não contém endereço nenhum. |
| `<controlDir>/active-machine.json` (remoto) | Cópia-âncora, caso a vault esteja fora. |
| `<controlDir>/claims/<taskId>--<periodo>` (remoto) | As reservas em si (pastas vazias = trava atômica; `mkdir` só um consegue). |
| `%USERPROFILE%\.friday-machine.id` | O rótulo desta máquina (`RASTAMAX` ou `GPU-NOVA`). **Não sincroniza** (é local de cada PC). |
| `friday-active-guard.ps1 -TaskId <id> -Frequency daily\|weekly\|6h` | O guard. Imprime `RUN` ou `SKIP`. Chamado no topo de cada scheduled task. |
| `friday-guard-doctor.ps1` | Diagnóstico: diz se esta máquina tem tudo que precisa pra coordenar. Não reserva nada. |
| `set-preferred-machine.ps1 -Machine <X>` | Muda quem tem a largada na disputa automática. |
| `set-manual-override.ps1 -Machine <X>` | Força só uma máquina a rodar (ignora a disputa). |
| `clear-manual-override.ps1` | Volta ao modo automático. |
| `friday-presence-hook.ps1 -Event Start\|End` | Hook de sessão: conta sessões ativas por máquina (sem conteúdo). |
| `friday-presence-check.ps1` | Lê o contador acima pro briefing da REGRA 2. |

## Comandos do dia a dia
```powershell
# Diagnostico primeiro, sempre que algo parecer estranho
powershell -File "<raiz>\00 - System\control\friday-guard-doctor.ps1"

# Mudar qual maquina tem a largada (nao forca nada, so muda quem tenta primeiro)
powershell -File "<raiz>\00 - System\control\set-preferred-machine.ps1" -Machine GPU-NOVA

# Forcar 100% so uma maquina (manutencao pontual)
powershell -File "<raiz>\00 - System\control\set-manual-override.ps1" -Machine RASTAMAX

# Voltar ao automatico
powershell -File "<raiz>\00 - System\control\clear-manual-override.ps1"
```
Os três últimos atualizam a vault (sincroniza pra outra máquina em segundos) **e** o servidor
de coordenação (imediato, funciona mesmo se o sync estiver fora).

## Onde o código mora x onde ele roda
**O repositório é a fonte do código. A vault é onde ele executa.** Os scripts rodam a partir de
`00 - System\control\` porque é lá que o `active-machine.json` vive e sincroniza entre as
máquinas — se rodassem de dentro do clone do repo, o `$PSScriptRoot` mudaria de pasta, o flag
local sumiria e a coordenação passaria a depender só do servidor remoto. Por isso o
`sync-tasks.mjs guard-install` **copia** do repo pra vault, igual ao que ele já faz com os
`SKILL.md` das rotinas.

Consequência prática: o `.friday-vds.json` mora **ao lado dos scripts, na vault**. Isso é de
propósito. Quando o código muda no repo e é instalado, ele chega na outra máquina pela vault
sozinho, e o config chega junto, pelo mesmo canal, no mesmo instante. Se o config morasse só em
`%USERPROFILE%` (que não sincroniza), existiria uma janela em que o código novo já chegou lá e o
config não — e as rotinas do dia seguinte parariam. Exposição extra: zero, porque esse endereço
já está dentro da vault de qualquer jeito.

## Regra de segurança (fail-closed) e o fim do SKIP mudo
Se o guard não conseguir ler o estado em lugar nenhum (vault e servidor fora), ele imprime
`SKIP` de propósito: prefere **não rodar** a arriscar as duas rodando junto.

O que mudou na v3: **`SKIP` deixou de ser uma palavra só.** O `stdout` continua sendo
exatamente `RUN` ou `SKIP` (quem chama não muda nada), mas o **código de saída** agora separa
decisão de defeito:

| exit | significado | o que fazer |
|---|---|---|
| `0` | decisão legítima: rodei, ou cedi porque a reserva já era de alguém | nada, é o normal |
| `3` | **não configurado**: sem `.friday-vds.json` válido | rodar o doutor, criar o config |
| `4` | **cego**: não li o estado nem na vault nem no servidor | rodar o doutor, ver rede/sync |

Nos casos `3` e `4` o guard também **escreve o motivo em `stderr`** e registra em
`GUARD-ERRO.log` (nesta pasta, fora do git). A razão de existir: um `SKIP` com exit `0` é o
mecanismo funcionando; um `SKIP` por config faltando é a automação morrendo sem ninguém saber.
Eram a mesma saída até a v3, e essa indistinção é exatamente a família de falha silenciosa que
já mordeu esta casa antes.

**Exceção deliberada:** `friday-presence-hook.ps1` nunca grita. É hook de sessão — se gritasse,
sujaria a abertura de toda conversa. Sem config ele apenas pula o espelho remoto, segue gravando
na vault, e deixa o motivo no `GUARD-ERRO.log`.

## Sobre conversas/sessões interativas (não-automáticas)
Duas conversas do Claude Code em máquinas diferentes, na mesma conta, **não conflitam
entre si** — são processos separados, cada uma com seu próprio histórico. O único lugar
onde "atropelo" pode acontecer de verdade é quando as duas mexem no **mesmo arquivo/deploy
ao mesmo tempo** (as tarefas automáticas acima), o que este mecanismo resolve. Trabalhar
numa máquina enquanto usa a outra pra outra coisa é seguro por padrão.

## Estado atual (2026-07-20)
- Modo: **automático**. Preferida: **GPU-NOVA**. Override manual: nenhum.
- Guard aplicado nas 6 tarefas recorrentes ativas: `watch-tower-editorial-diario` (daily),
  `watch-tower-caixa-ronda` (6h), `watch-tower-mercado-trabalho-semanal` (weekly),
  `acao-plano-paralelo-semanal` (weekly), `revisao-semanal-watch-tower` (weekly),
  `acompanhamento-parcerias-servico-verificacao` (weekly).
- Testado ponta a ponta em 2026-07-16: reserva atômica (1ª ganha, 2ª perde), modo manual
  (RUN/SKIP por identidade), modo automático como preferida (RUN rápido, sem espera) e como
  não-preferida sem concorrência (cede ~120s, depois RUN sozinha — failover confirmado).
- Testado de novo em 2026-07-20 na migração pra v3: guard original e guard parametrizado
  produzem **saída idêntica** na mesma disputa (RUN na 1ª chamada, SKIP na 2ª), e o caminho
  de config ausente passou a falhar visível (exit 3 + mensagem) em vez de `SKIP` mudo.
- **Pendência conhecida, fora do escopo da v3:** o `friday-presence-hook.ps1` existe, roda e
  retorna 0, mas **não está registrado** como hook de sessão em `~/.claude/settings.json`.
  Ou seja: ninguém o chama. A linha "Presença" do briefing da REGRA 2 está muda desde 17/07 e
  o `presence/` só tem o arquivo de uma máquina, congelado. É a mesma família de doença que a
  v3 atacou no guard, num script vizinho.

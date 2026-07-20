---
name: watch-tower-mercado-trabalho-semanal
description: Rodada semanal rotativa - a equipe de agentes re-pesquisa um lote de paises do Mercado de Trabalho da Watch Tower e atualiza o app/REPAVET, com deploy blindado por script.
---

GUARD DE MAQUINA ATIVA (OBRIGATORIO, ANTES DE TUDO): localize a raiz do FRIDAY-BRAIN nesta maquina (a pasta que contem "00 - System\control\friday-active-guard.ps1" - neste PC e D:\FRIDAY-BRAIN, mas pode ser outra letra noutra maquina, NAO fixe D:) e rode: powershell -ExecutionPolicy Bypass -File "<raiz>\00 - System\control\friday-active-guard.ps1" -TaskId watch-tower-mercado-trabalho-semanal -Frequency weekly. Se a saida for SKIP, ENCERRE agora em silencio: a reserva desta rodada ja foi feita (por voce mesma antes, ou pela outra maquina), entao nao faca nada, nao logue, nao commite, nao envie email. So prossiga se a saida for RUN. (O comando pode levar ate ~2 minutos se esta nao for a maquina preferida - e o tempo de cessao antes de assumir sozinha; e normal, aguarde.)

Rodada SEMANAL ROTATIVA do Mercado de Trabalho da Watch Tower. Objetivo: manter os dados dos 38 paises frescos, de graca, re-pesquisando um lote por semana (gira por todos a cada ~5 semanas). A area JA existe e esta no ar nos 38 paises (app + REPAVET); esta tarefa SO atualiza. Roda quando o app da Friday esta aberto (se fechado no horario, na proxima abertura).

Repo: D:\FRIDAY-BRAIN\workspace\watch-tower (branch main, deploy via Git = REGRA 4).

== PASSO 0 - Contexto obrigatorio (REGRA 1 e REGRA 2) ==
Antes de tudo, leia (com a ferramenta Read, NAO com cat/bash) D:\FRIDAY-BRAIN\skills\watch-tower-deploy\PENDENCIAS-WATCH-TOWER.md (fonte canonica da automacao) e respeite as regras criticas: deploy SO via Git; SEM travessao no meio das frases; tom jornalistico-informativo WiseHub, profissional e fluido, SEM cara de IA nem papo de conversa; NUNCA citar "Watch Tower" no conteudo; nao enviar email a ninguem; kill switch WISERANK_EMAILS intocado. O detector diario do Design/PLANO antigos foi DESCARTADO - a automacao e ESTA rodada semanal; ignore instrucoes antigas de reativar detector.

== PASSO 1 - Lote da semana ==
Os 38 paises estao em 5 grupos. Calcule o numero da semana ISO do ano atual e use (semana % 5):
  0 -> Grupo A: us, ca, br, uk, fr, de, es, pt
  1 -> Grupo B: it, au, ae, nl, ie, ch, se, dk
  2 -> Grupo C: pl, at, be, fi, gr, cz, ro, hu
  3 -> Grupo D: bg, cy, hr, sk, si, ee, lv
  4 -> Grupo E: lt, lu, mt, nz, cn, sg, jp

== PASSO 2 - Pesquisa pela equipe de agentes (ferramenta Workflow) ==
Rode a equipe via Workflow, 1 agente de pesquisa por pais do grupo, com schema LaborMarketCountry: code, country, overview, hotSectors, coolingSectors, inDemandRoles[{role,note}], byQualification[{area,advice}], salaries[{role,range,sourceLabel,sourceUrl,sourceOfficial:boolean}], foreignerRules, opportunityWindows, jobBoards[{label,url,official}], sources[{label,url,official}]. O workflow deve retornar tambem um campo review { ok:boolean, summary, perCountry[{code,sourcesOk,issues}] }.
Cada agente USA WebSearch/WebFetch nas FONTES OFICIAIS do pais (agencia de emprego, instituto de estatistica, regras de work permit; EURES/Eurostat pros da UE). PADRAO DE ESCRITA WISEHUB (obrigatorio): jornalistico-informativo, profissional, fluido, SEM travessao, SEM cara de IA nem linguagem de conversa, SEM citar "Watch Tower"; toda info com fonte oficial; campo sem dado confiavel fica VAZIO em vez de inventar. Marque review.ok=false se o resultado nao for confiavel (o deploy vai abortar e nao publicar lixo). Modelo: os workflows labor-market-5 / labor-market-33 ja rodados.
Se o grupo for grande e houver risco de estourar a sessao (lote grande gasta muito token), rode em sub-lotes de ~4 paises (2 chamadas de Workflow) e rode o PASSO 3 pra CADA sub-lote (merge incremental: o gerador preserva o resto e so soma o sub-lote). Guarde o caminho do arquivo .output do workflow.

== PASSO 3 - Deploy blindado (UM comando, NAO re-derivar git na mao) ==
O script determinista faz tudo: merge seguro (preservando os outros paises) + TODOS os gates como exit code (tsc, travessao, HTML cru, "Watch Tower", segredo, contagem>=38, campos obrigatorios, mojibake, crivo editorial) + commit SO do labor-market-data.ts (mensagem -m simples, sem here-string) + deploy via worktree cherry-pick + retry/rebase no push + verificacao, com lock (serializa com a editorial-diaria) e cleanup garantido. Rode:
  bash "D:/FRIDAY-BRAIN/workspace/watch-tower/deploy-labor.sh" "<caminho .output do workflow>" "<YYYY-MM-DD de hoje>" "Grupo X"
REGRA DE SHELL (pra rodar sem travar): rode UM comando por vez, NUNCA encadeie com && | ;. Pra LER arquivos use a ferramenta Read (nunca cat/grep via Bash). O deploy acima e UM comando so com caminho absoluto (o script entra no repo sozinho, nao precisa de cd).
Se o script sair com codigo != 0, ele JA explicou o motivo e NAO publicou nada (e restaurou o working tree). NAO force; registre o problema e os paises afetados pra proxima rodada. Conferencia sem publicar: DRY_RUN=1 bash deploy-labor.sh.

== PASSO 4 - Reporte ==
Reporte ao Hammis: grupo rodado, paises atualizados, o SHA que o script empurrou pra origin/main, e se algum pais ficou de fora (e por que). Nao precisa pedir confirmacao pra rodar (a tarefa e a autorizacao). LEITURA DE TEXTO ACENTUADO SEMPRE via Bash/Node, NUNCA via PowerShell (PowerShell 5.1 mostra mojibake-fantasma que nao existe).

Contexto/blindagem: D:\FRIDAY-BRAIN\skills\watch-tower-deploy\RETOMAR-mercado-trabalho-automacao.md e PENDENCIAS-WATCH-TOWER.md. Ferramentas versionadas no repo: _gen-labor.mjs (gerador/merge) e deploy-labor.sh (deploy blindado).
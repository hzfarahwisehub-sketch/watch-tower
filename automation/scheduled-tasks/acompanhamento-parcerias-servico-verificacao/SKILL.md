---
name: acompanhamento-parcerias-servico-verificacao
description: Acompanhamento semanal das parcerias de serviço (ter 9:00, assinatura). Versão VDS/API desativada (API só último recurso).
---

GUARD DE MAQUINA ATIVA (OBRIGATORIO, ANTES DE TUDO): localize a raiz do FRIDAY-BRAIN nesta maquina (a pasta que contem "00 - System\control\friday-active-guard.ps1" - neste PC e D:\FRIDAY-BRAIN, mas pode ser outra letra noutra maquina, NAO fixe D:) e rode: powershell -ExecutionPolicy Bypass -File "<raiz>\00 - System\control\friday-active-guard.ps1" -TaskId acompanhamento-parcerias-servico-verificacao -Frequency weekly. Se a saida for SKIP, ENCERRE agora em silencio: a reserva desta rodada ja foi feita (por voce mesma antes, ou pela outra maquina), entao nao faca nada, nao logue, nao commite, nao envie email. So prossiga se a saida for RUN. (O comando pode levar ate ~2 minutos se esta nao for a maquina preferida - e o tempo de cessao antes de assumir sozinha; e normal, aguarde.)

Tarefa interna de acompanhamento das PARCERIAS DE SERVIÇO COM DESCONTO da WiseHub (contrato 2). Idioma português, tratamento "Hammis", sem travessão no meio de frases, nunca "tu".

Contexto (leia antes): D:\FRIDAY-BRAIN\00 - System\PENDENCIAS-ABERTAS.md (item 12, bloco "2º CONTRATO ... Parceiros de SERVIÇO com desconto") e a página D:\FRIDAY-BRAIN\08 - Friday Brain\wiki\Verificacao de Membro - Parcerias WiseHub.md. O contrato e o estudo técnico já foram entregues (em _ENTREGAS + Google Drive). O modelo de verificação é por CUPOM (a WiseHub emite um cupom de uso único ao membro e ao parceiro ao mesmo tempo). A comissão é recebida pela WiseHub US LLC via Stripe (cartão internacional) ou transferência; base = 5% sobre o valor pago pelo membro; percentuais negociados por parceiro.

STATUS (atualizado 2026-07-07): as 5 decisões que esta tarefa cobrava JÁ FORAM TOMADAS pelo Hammis em 26/06 e estão gravadas no contrato v3.1 (Cláusula 4.3-4.5), no estudo técnico (seção 9), no PENDENCIAS-ABERTAS.md (item 12) e na wiki. São elas: cupom 72h reemissível; cobrança na confirmação de uso pelo parceiro; fonte única "membro ativo" = assinatura Stripe/WiseRank (não consulta Circle); estorno/cancelamento vira crédito; identidade = presencial doc com foto, online login+cupom. NÃO cobrar essas de novo.

O que fazer nesta execução: apresentar ao Hammis um lembrete CURTO com só o que segue aberto:
1. 🟡 Confirmar a NOTA FISCAL com o contador (NFS-e do parceiro ao membro + invoice da WiseHub ao parceiro). Não trava a operação; depende do contador.
2. 🔴 Falta CONSTRUIR o mecanismo automatizado de verificação (tela de solicitação do cupom na área do membro, geração do cupom uso único 72h, envio duplo membro+parceiro via Resend, endpoint de confirmação de uso, painel de conciliação emitidos × confirmados × relatados). Pré-build exige REGRA 1 no repo wiserank (área logada + fonte de assinatura ativa + infra Resend). Até produção, opera no modo provisório manual (WiseHub emite o cupom por e-mail em 1 dia útil, amparado na Cláusula 4.7).

Perguntar ao Hammis se quer autorizar a construção do mecanismo agora (ou seguir no provisório manual). Se autorizar, rodar a REGRA 1 no repo wiserank e começar. Isto é interno: não enviar nada a parceiros nem a membros. Quando o mecanismo estiver construído E a nota fiscal confirmada com o contador, sugerir desativar esta tarefa.
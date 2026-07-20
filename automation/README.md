# automation/ — rotinas agendadas da Friday (cérebro das automações)

Aqui vive o **texto** das rotinas agendadas de projeto da WiseHub: o `SKILL.md` que a Friday
lê e executa quando cada tarefa dispara. Até 20/07/2026 esse conteúdo existia em **uma máquina
só** (`%USERPROFILE%\.claude\scheduled-tasks`), sem histórico e sem cópia. Agora a fonte da
verdade é este repositório.

---

## O que está versionado

Seis rotinas, listadas em [`tasks.json`](./tasks.json), que é a **allowlist** usada pelo script
de sync (ele nunca varre diretório, só copia o que está nessa lista):

| taskId | quando | projeto |
|---|---|---|
| `watch-tower-editorial-diario` | todo dia 00:30 | watch-tower |
| `watch-tower-caixa-ronda` | de 6 em 6 horas | watch-tower |
| `watch-tower-mercado-trabalho-semanal` | segunda 18:00 | watch-tower |
| `revisao-semanal-watch-tower` | sexta 16:37 | watch-tower |
| `acao-plano-paralelo-semanal` | quarta 09:17 | CRM Plano Alternativo |
| `acompanhamento-parcerias-servico-verificacao` | terça 09:00 | Contratos / Parcerias |

As duas últimas **não são do Watch Tower**. Estão aqui porque este repo virou o lugar das
rotinas de projeto, não porque pertençam ao app. Se um dia elas mudarem de casa, o `tasks.json`
é o único arquivo que precisa saber disso.

## O que NÃO está versionado, e por quê

**1. As rotinas pessoais do Hammis.** Existem cinco tarefas de assunto **pessoal** que rodam
nesta máquina e **não entram neste repositório em nenhuma hipótese**. Elas carregam dado
sensível de terceiro, e este repo é da WiseHub e compartilhável com sócios. É a regra de
isolamento de assuntos pessoais, e ela não tem exceção: nem o conteúdo, nem a descrição do
conteúdo, entram aqui. O `sync-tasks.mjs` tem uma lista `DENY` que **aborta com exit 2** se
um taskId de assunto pessoal aparecer no manifesto, mesmo que alguém o adicione por engano.
Consequência honesta: **essas cinco rotinas continuam sem backup nenhum.** Elas precisam de
destino próprio (repo privado separado ou backup cifrado), e isso é decisão do Hammis, não
deste repositório.

**2. Segredos.** Nenhum dos seis arquivos contém segredo literal — foi verificado por varredura
antes da cópia. O que existe é uma **referência de caminho**, em `watch-tower-caixa-ronda`:
a rotina manda ler o `CRON_SECRET` de `D:\FRIDAY-BRAIN\skills\watch-tower-deploy\.friday-secret`.
O caminho pode ficar no git; o arquivo não pode, e não está. Ao editar qualquer rotina, mantenha
esse padrão: **a rotina aponta para onde o segredo mora, nunca carrega o valor.**

**3. Os scripts do guard de máquina ativa.** As seis rotinas dependem de
`00 - System\control\friday-active-guard.ps1`, que continua fora do git. Não é esquecimento:
esse script tem o host SSH da VDS (usuário `root`) e o caminho da chave cravados dentro dele.
Colocá-lo num repositório compartilhável com sócios publicaria a superfície de acesso root da
VDS. Se ele for versionado um dia, deve ser em repo privado de infraestrutura, com o host lido
de variável de ambiente. **Enquanto isso, ele é um ponto único de falha conhecido:** máquina
nova restaurada só por este repo instala as rotinas, mas o guard precisa ser copiado à parte.

**4. O agendamento em si.** Ver a seção de instalação abaixo.

### Cobertura do `.gitignore`

O `.gitignore` da raiz já cobre `.env*`, `*.pem` e `.vercel`. O `automation/.gitignore` reforça,
para esta pasta: `.friday-secret`, `*.key`, `*.pem`, `.friday-last-seen-*.json` e
`active-machine.json` (estado de runtime, não configuração).

---

## Como usar

```bash
node automation/sync-tasks.mjs check                      # repo x máquina, byte a byte
node automation/sync-tasks.mjs export  [--yes]            # máquina -> repo
node automation/sync-tasks.mjs install [--yes] [--dest D] # repo -> máquina
```

**Sem `--yes` nada é escrito.** O script imprime o plano, marcando em amarelo cada arquivo que
seria sobrescrito e com quantos bytes, e sai. Rodar com `--yes` escreve só o que realmente
difere, então rodar duas vezes seguidas não muda nada na segunda.

- **`export`** depois de editar uma rotina na mão. Sem isso, o repo envelhece calado — foi
  exatamente assim que os moldes antigos na VDS apodreceram, congelados em 16/07 enquanto a
  rotina real seguia mudando.
- **`check`** acusa divergência nos dois sentidos e sai com código 1. Vale chamar no fim da
  revisão semanal: pega o drift em dias, não em semanas.
- **`--dest`** aponta o install para outro diretório. É como se testa sem tocar nas rotinas reais.

## Instalando numa máquina nova

```bash
git clone <este repo>
cd watch-tower
node automation/sync-tasks.mjs install          # confere o plano
node automation/sync-tasks.mjs install --yes    # aplica
```

Isso deixa os seis `SKILL.md` no lugar certo em `%USERPROFILE%\.claude\scheduled-tasks`.

**Falta um passo, e ele não dá para automatizar por aqui.** O agendamento (cron, enabled) **não
mora em disco** — vive do lado do serviço de tarefas e só é criado por chamada de ferramenta.
O git restaura o texto e o manifesto; registrar as seis tarefas é uma chamada
`create_scheduled_task` por tarefa, feita pela Friday numa sessão na máquina nova. O `install`
imprime a tabela `taskId` / cron pronta para isso. Peça a ela: *"roda o install e recria as
tarefas pelo tasks.json"*. É um comando, não é zero.

Além disso, copie à parte: os scripts de `00 - System\control\` (item 3 acima) e o
`.friday-secret` referenciado pela ronda da caixa.

---

## A verdade sobre o limite

**Isto é portabilidade e backup. Não é execução em nuvem.**

Versionar resolve perda total, histórico, reversão e bootstrap de máquina nova com o texto
certo. Não resolve execução. Um repositório não executa nada.

As rotinas rodam **pela assinatura do Claude, dentro do app aberto numa máquina**. Hoje existe
failover entre duas máquinas (GPU-NOVA e RASTAMAX) via o guard em `00 - System\control\`, que
disputa uma reserva atômica por período: se a máquina preferida está desligada, a outra assume
sozinha. Isso cobre *"um dos dois PCs está desligado"*. **Não cobre "os dois estão desligados"**
— nesse caso a curadoria editorial das 00:30 simplesmente não roda, e continuará não rodando
depois deste repositório existir.

Execução de verdade independente de máquina exige uma destas três, todas com custo:

1. rodar na VDS com **API paga** da Anthropic (contraria a decisão de 03/07: "API só último recurso");
2. manter uma das máquinas ligada 24/7 como servidora (custo de energia, zero de API);
3. converter as rotinas mecânicas em código sem LLM. `watch-tower-caixa-ronda` é a candidata
   óbvia: os passos são HTTP mais append em arquivo, sem julgamento, e viraria cron na VDS por
   quase nada. `watch-tower-editorial-diario` **não** converte: o valor dela é o julgamento
   editorial e a classificação de urgência.

São duas conversas separadas, e a segunda tem preço.

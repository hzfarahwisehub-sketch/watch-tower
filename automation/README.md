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

**3. A configuração local do guard de máquina ativa.** Os scripts do guard **passaram a ser
versionados** em [`machine-guard/`](./machine-guard) em 20/07/2026. O que não é versionado é o
`.friday-vds.json`: o arquivo que diz **onde** fica o servidor de coordenação, com que usuário
e com que chave. Ele fica ao lado dos scripts na vault, é próprio de cada casa, e o
`.gitignore` desta pasta o barra nos dois sentidos (o `sync-tasks.mjs` também se recusa a
copiá-lo, em qualquer direção).

Até 20/07 esses valores estavam **cravados dentro de seis scripts**, e era por isso que o guard
inteiro tinha que ficar fora do git — o que fazia dele um ponto único de falha: máquina nova
restaurada só por este repo instalava as rotinas, mas não o guard que as coordena. Agora o
código vem do git e só a configuração é local. A regra que fica valendo é a mesma do
`.friday-secret` no item anterior: **o script aponta onde a infra mora, nunca carrega o
endereço dela.**

Vale reforçar por que isso importa aqui e não em qualquer repo: **este repositório é público.**
Um endereço de servidor com conta privilegiada num commit vai para a busca do GitHub e é varrido
por scanner automatizado em horas. Não é uma preferência de estilo, é a diferença entre publicar
e não publicar uma receita de acesso pronta.

**4. O agendamento em si.** Ver a seção de instalação abaixo.

### Cobertura do `.gitignore`

O `.gitignore` da raiz já cobre `.env*`, `*.pem` e `.vercel`. O `automation/.gitignore` reforça,
para esta pasta: `.friday-secret`, `*.key`, `*.pem`, `.friday-last-seen-*.json`,
`active-machine.json` (estado de runtime, não configuração), `.friday-vds.json` (a config local
do guard), `GUARD-ERRO.log` e `presence/`.

O `.friday-vds.example.json` **é** versionado de propósito: é só um molde com campos vazios,
e é o que faz uma máquina nova saber o que precisa preencher.

---

## Como usar

```bash
node automation/sync-tasks.mjs check                      # repo x máquina, byte a byte
node automation/sync-tasks.mjs export  [--yes]            # máquina -> repo
node automation/sync-tasks.mjs install [--yes] [--dest D] # repo -> máquina
```

Os três modos cobrem **duas** coisas no mesmo plano e no mesmo dry-run: os `SKILL.md` das
rotinas (allowlist em `tasks.json`, destino `%USERPROFILE%\.claude\scheduled-tasks`) e os
scripts do guard (allowlist literal em `machine-guard/`, destino `00 - System\control` da
vault). O `--control <dir>` troca o destino do guard, como o `--dest` faz com as rotinas.

**Por que o guard instala na vault em vez de rodar de dentro do clone.** O guard lê o
`active-machine.json` por `$PSScriptRoot`, e esse arquivo é estado vivo que sincroniza entre
as máquinas pela vault. Rodando de dentro do repo, ele procuraria o flag na pasta errada, não
o acharia, e a coordenação passaria a depender só do servidor remoto. Então: **o repositório é
a fonte do código; a vault é onde ele executa.**

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

### Passo 1 — clonar e instalar os arquivos

```bash
git clone <este repo>
cd watch-tower
node automation/sync-tasks.mjs install          # confere o plano, não escreve nada
node automation/sync-tasks.mjs install --yes    # aplica
```

Isso deixa os seis `SKILL.md` em `%USERPROFILE%\.claude\scheduled-tasks` **e** os scripts do
guard em `00 - System\control` da vault. Se a vault não estiver em `..\..` a partir do repo,
o script para e pede `--control <caminho da pasta control>` — ele não chuta destino.

### Passo 2 — dar um nome a esta máquina

Crie `%USERPROFILE%\.friday-machine.id` com o rótulo dela (o mesmo vocabulário que o
`active-machine.json` usa, ex.: `RASTAMAX`, `GPU-NOVA`). Sem esse arquivo o guard cai no
`COMPUTERNAME`, que provavelmente não bate com nenhum rótulo — e aí a máquina nunca se
reconhece como a preferida.

### Passo 3 — instalar a chave SSH privada

Copie a chave privada de coordenação para dentro de `%USERPROFILE%\.ssh\` nesta máquina.
**Ela não está neste repositório e nunca vai estar** — é segredo de verdade, arquivo em disco.
Traga do gerenciador de segredos ou do canal seguro de sempre, não por e-mail nem por chat.

### Passo 4 — criar a configuração local do guard

```bash
# na pasta control da vault:
cp .friday-vds.example.json .friday-vds.json
```

Abra o `.friday-vds.json` e preencha os quatro campos: `host`, `user`, `keyPath` e `controlDir`.
Os valores desta casa **não estão escritos em lugar nenhum deste repositório, de propósito** —
peça ao Hammis, ou copie de uma máquina já operacional (o arquivo vive ao lado dos scripts, na
vault). O `keyPath` aceita `%USERPROFILE%` e aponta para a chave do passo 3.

Ordem de busca, se precisar variar: `$env:FRIDAY_VDS_CONFIG` (override explícito, para teste),
depois o arquivo ao lado dos scripts, depois `%USERPROFILE%\.friday-vds.json` (útil numa máquina
cuja vault ainda não pareou). O primeiro que existir e for válido vence.

### Passo 5 — conferir antes de confiar

```powershell
powershell -File "<pasta control>\friday-guard-doctor.ps1"
```

O doutor confere identidade, config, chave, estado e conexão, e **sai com código 1 se faltar
alguma peça**, dizendo qual. Ele não reserva período nenhum, então pode rodar à vontade. Só
considere a máquina pronta quando ele disser *"Tudo pronto"*.

### Passo 6 — registrar o agendamento (não dá para automatizar por aqui)

O agendamento (cron, enabled) **não mora em disco** — vive do lado do serviço de tarefas e só é
criado por chamada de ferramenta. O git restaura o texto e o manifesto; registrar as seis
tarefas é uma chamada `create_scheduled_task` por tarefa, feita pela Friday numa sessão na
máquina nova. O `install` imprime a tabela `taskId` / cron pronta para isso. Peça a ela:
*"roda o install e recria as tarefas pelo tasks.json"*. É um comando, não é zero.

### O que ainda precisa vir à parte

Versionar o guard tirou um item desta lista, não a zerou:

- **a chave SSH privada** (passo 3) e **os valores do `.friday-vds.json`** (passo 4);
- **o `.friday-secret`** referenciado pela ronda da caixa;
- **a própria vault.** As rotinas referenciam caminhos dentro dela (o clone do repo, o
  `PENDENCIAS-ABERTAS.md`, o `.friday-secret`). Máquina com repo e sem vault não roda essas
  rotinas de qualquer jeito — este repositório resolve o guard, não a vault.

## Falha silenciosa: o que mudou no guard em 20/07

O `stdout` do guard continua sendo exatamente `RUN` ou `SKIP` — nenhuma das seis rotinas mudou
uma vírgula. O que ganhou significado foi o **código de saída**:

| exit | significado |
|---|---|
| `0` | decisão legítima: rodou, ou cedeu porque a reserva já era de alguém |
| `3` | **não configurado** — sem `.friday-vds.json` válido |
| `4` | **cego** — não leu o estado nem na vault nem no servidor |

Nos casos `3` e `4` o guard também escreve o motivo em `stderr` e em `GUARD-ERRO.log`.

A razão: antes, um `SKIP` porque a outra máquina pegou a reserva e um `SKIP` porque a
configuração sumiu eram **a mesma saída, com o mesmo código 0**. A automação podia morrer sem
ninguém saber, que é exatamente o modo de falha que já mordeu esta casa antes. Agora um `SKIP`
com exit `0` é o mecanismo funcionando, e um `SKIP` com exit `3` ou `4` é um defeito que pede
gente.

Uma exceção deliberada: o `friday-presence-hook.ps1` nunca grita, porque é hook de sessão e
sujaria a abertura de toda conversa. Sem config ele pula o espelho remoto, segue gravando na
vault e deixa o motivo no log.

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

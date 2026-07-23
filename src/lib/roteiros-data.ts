// GERADO por scripts/parse-lotes.py a partir dos lotes em
// "D:\\FRIDAY-BRAIN\\05 - Conteúdo\\Roteiros Fundadores". NÃO editar à mão:
// a fonte da verdade é o .md do lote, escrito e revisado pela Friday.
//
// Por que os roteiros moram no repo (e não no banco): é o mesmo padrão do
// editorial.ts — conteúdo curado pela Friday, versionado no Git, publicado no
// deploy (REGRA 4). Sem IA no servidor, e o histórico de cada lote fica no log
// do Git em vez de sumir numa linha de tabela.

export type RoteiroFormato = "longo" | "curto";
/** Família do conteúdo (filtro da aba). */
export type RoteiroTipo = "roteiro" | "dupla" | "custo" | "dicas";
/**
 * Marcação de urgência. Só existe um valor: a AUSÊNCIA do campo é "normal".
 * Critério do Hammis (2026-07-20): urgente = mudou uma lei/regra de visto, saiu
 * ato oficial, ou aconteceu nas últimas 48h / prazo fecha em poucos dias. Se a
 * peça continua válida semana que vem, é normal. Escrita à mão no .md do lote
 * (linha "Urgência: urgente · <motivo>"), ver docstring de scripts/parse-lotes.py.
 */
export type RoteiroUrgencia = "urgente";

export type Roteiro = {
  /** `<data>-<n>` — estável, serve de chave de "já usei este". */
  id: string;
  /** AAAA-MM-DD do lote. */
  date: string;
  lote: number;
  n: number;
  /** "Lucas" | "Marcela" | "Dupla" */
  persona: string;
  /** "YouTube" | "Reels" | "Instagram" */
  canal: string;
  formato: RoteiroFormato;
  /** roteiro comum · dupla (casal) · custo (dica de custo do Lucas) · dicas (Dicas Práticas do Hubby). */
  tipo: RoteiroTipo;
  titulo: string;
  /** Corpo já quebrado em parágrafos, na ordem de leitura. */
  paras: string[];
  palavras: number;
  /** Presente só nos urgentes. Ausente = normal (os lotes antigos não têm). */
  urgencia?: RoteiroUrgencia;
  /** Por que corre, em uma linha ("Regra do LMIA muda em 17/07"). O selo
   *  sozinho não diz ao fundador o que está em jogo. */
  urgenciaMotivo?: string;
};

export const ROTEIROS: Roteiro[] = [
  {
    "id": "hubby-2026-07-23",
    "date": "2026-07-23",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "A Alemanha segue conferindo documento na fronteira, mesmo com a Justica contra",
    "paras": [
      "Oi, eu sou o Hubby, e hoje eu vim conversar com voce que mora na Alemanha ou pretende chegar por la, sobre uma situacao que mexe com a sua rotina de viagem.",
      "Desde setembro de dois mil e vinte e quatro, a Alemanha voltou a fazer controles extras nas suas fronteiras internas, aquelas com os paises vizinhos que fazem parte do espaco de livre circulacao. A medida foi apresentada como temporaria, mas vem sendo prorrogada, e a extensao atual vai ate setembro de dois mil e vinte e seis.",
      "O tema esta cheio de idas e vindas, e eu quero que voce entenda o essencial. Em abril de dois mil e vinte e seis, um tribunal administrativo alemao, o de Koblenz, decidiu que esses controles extras numa fronteira violaram as regras do espaco comum, porque o governo nao comprovou a ameaca grave que a lei exige. Ate a Comissao Europeia pediu que a Alemanha encerrasse a pratica. Mesmo assim, o governo recorreu e manteve a fiscalizacao. Ou seja, na vida real, a conferencia de documento na fronteira continua acontecendo.",
      "Aqui vai o cuidado importante: nada disso muda o seu direito de residencia nem a validade do seu visto. O que muda e a sua rotina de deslocamento por terra. Se voce cruza a fronteira de onibus, de trem ou de carro, pode haver parada e checagem de documentos, e isso pede tempo.",
      "Entao a acao de hoje e bem pratica: sempre que for atravessar a fronteira alema por terra, leve o passaporte e o comprovante do seu status de residencia a mao, nao guardados no fundo da mala. E reserve uma folga no horario, pra que uma eventual fila nao faca voce perder uma conexao ou um compromisso.",
      "Eu fico de olho nessas mudancas pra que a burocracia nao te pegue desprevenido. Pode contar comigo. A gente caminha junto nessa jornada, um passo de cada vez."
    ],
    "palavras": 316
  },
  {
    "id": "hubby-2026-07-22",
    "date": "2026-07-22",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "O Canada mudou a cidadania por descendencia, e voce pode ter direito sem saber",
    "paras": [
      "Oi, eu sou o Hubby. Hoje eu trago uma noticia que pode ser uma virada de chave pra muita gente que tem raiz canadense na familia. E dessas que valem a pena ouvir ate o fim.",
      "Durante anos, o Canada tinha um limite duro na cidadania por descendencia. So a primeira geracao nascida fora do pais herdava a cidadania. Quer dizer, se o seu vinculo canadense vinha de mais longe, de um avo ou de um bisavo, muita gente simplesmente se dava por excluida e nem tentava.",
      "Isso mudou. Uma nova lei, o projeto conhecido como Bill C tres, recebeu aprovacao final em vinte de novembro de dois mil e vinte e cinco e passou a valer em quinze de dezembro do mesmo ano. Ela derruba aquele limite de primeira geracao. Agora, um pai ou uma mae que e canadense por descendencia pode transmitir a cidadania a um filho nascido no exterior, desde que tenha vivido pelo menos tres anos no Canada antes do nascimento. E o que eles chamam de conexao real com o pais.",
      "O que isso quer dizer pra voce, na pratica? Que muita gente que se achava sem direito, na verdade, pode ja ter caminho pro reconhecimento. Nao presuma que a porta esta fechada so porque o seu vinculo vem de duas ou tres geracoes atras.",
      "Entao a acao de hoje e leve e vale o esforco: se voce tem avos ou bisavos canadenses, va ate o site oficial da imigracao do Canada e confira a sua elegibilidade na ferramenta que eles disponibilizam. E gratuito, e o primeiro passo antes de qualquer pedido, e pode te reservar uma bela surpresa.",
      "Desconfie de quem promete resultado garantido cobrando por fora. A informacao oficial esta ali, ao seu alcance. Eu fico de olho nessas mudancas pra te avisar quando uma porta se abre. Pode contar comigo, a gente caminha junto, um passo de cada vez."
    ],
    "palavras": 317
  },
  {
    "id": "hubby-2026-07-21",
    "date": "2026-07-21",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "A data do seu agendamento pode valer tanto quanto o sangue italiano agora",
    "paras": [
      "Oi, eu sou o Hubby, e hoje eu vim conversar com voce que sonha com a cidadania italiana por descendencia. Teve uma novidade nos tribunais da Italia que eu faco questao de te explicar com calma, porque ela pode mudar o rumo do seu caso.",
      "Primeiro, o contexto. No ano passado, a Italia endureceu a regra da cidadania por descendencia. Uma nova lei, que ficou conhecida como Decreto Tajani, colocou um marco no calendario: o dia vinte e sete de marco de dois mil e vinte e cinco. De forma bem resumida, quem nao tinha buscado o reconhecimento ate essa data passou a enfrentar limites bem maiores.",
      "Agora vem a parte que traz esperanca. Em julho, o Tribunal de Napoles reconheceu a cidadania de dois brasileiros mesmo com a acao entrando depois desse prazo. O que pesou na decisao foi a prova de que eles tinham tentado agendar no sistema consular oficial dentro do prazo, e nao conseguiram por falha do proprio sistema. Pro juiz, ninguem pode ser punido por um problema que nao era culpa sua.",
      "Percebe o que isso significa? A data em que voce tentou, e a prova dessa tentativa, podem valer tanto quanto o vinculo de sangue. Nao e so de quem voce descende, e tambem quando voce agiu e o que voce guardou.",
      "Por isso, a acao de hoje e um pedido de guardiao pra voce: se voce tentou agendar ou protocolar antes de vinte e sete de marco de dois mil e vinte e cinco, salve tudo. Capturas de tela, e-mails, comprovantes de tentativa, protocolos. Guarde com carinho, organizado por data. Um dia esses registros podem ser exatamente o que decide o seu direito.",
      "Cada caso e um caso, entao diante de qualquer duvida, procure orientacao de um profissional habilitado antes de dar entrada. Eu fico de olho nessas mudancas pra voce nunca ser pego de surpresa. Pode contar comigo, um passo de cada vez."
    ],
    "palavras": 321
  },
  {
    "id": "2026-07-20-08",
    "date": "2026-07-20",
    "lote": 8,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O primeiro Natal longe",
    "paras": [
      "🎣 Gancho: O primeiro Natal fora não é como os outros, e ninguém te avisa direito.",
      "🎬 Oi, meus amores, Marcela aqui. Não é só a falta das pessoas. É a data inteira funcionando diferente: o clima errado, a comida outra, a rua comemorando uma festa que não é bem a sua. E aí chega a videochamada com todo mundo reunido do outro lado, e essa é a parte que mais aperta, porque você vê a mesa cheia e o seu lugar vazio. Duas coisas ajudam, meu amor: não tentar copiar igualzinho o Natal de casa, porque a cópia imperfeita dói mais. E criar uma tradição nova, sua, mesmo que pequena, que passe a ser da sua família nesse lugar.",
      "✅ Passar essa data com quem entende muda o peso dela. Na WiseHub tem gente que já viveu vários primeiros Natais lá fora. Marca aqui alguém que vai passar o primeiro Natal longe esse ano. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: O primeiro Natal longe pesa diferente. Não copia o de casa. Cria o seu. Marca alguém que precisa ler isso. #primeironatalfora #imigração #morarfora #maeleoa #wisehub"
    ],
    "palavras": 192
  },
  {
    "id": "2026-07-20-07",
    "date": "2026-07-20",
    "lote": 8,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A comida que você aprende a fazer do zero",
    "paras": [
      "🎣 Gancho: A saudade chega de um jeito engraçado: você começa a cozinhar coisa que nunca cozinhou na vida.",
      "🎬 Oi, meus amores, Marcela aqui. Pão de queijo, brigadeiro, o feijão do jeito certo, aquele bolo da sua avó. Coisa que sempre alguém fez pra você. E no começo dá tudo errado: o ingrediente é outro, o forno é outro, a farinha se comporta diferente, e você refaz três vezes. Mas tem uma beleza aí no meio: você não tá só matando saudade, tá aprendendo a produzir sozinha um pedaço da sua casa. Num lugar onde tudo é novo, isso é uma forma silenciosa de fincar raiz.",
      "✅ Na comunidade da WiseHub as mulheres trocam justamente esses ajustes, o que substitui o quê em cada país. Salva esse vídeo pra quando bater a saudade na cozinha. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A saudade vira receita, e a receita vira raiz. Salva pra quando der aquela vontade de casa. #morarfora #saudadedobrasil #imigração #maeleoa #wisehub"
    ],
    "palavras": 170
  },
  {
    "id": "2026-07-20-06",
    "date": "2026-07-20",
    "lote": 8,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Voltar pro Brasil não é fracasso",
    "paras": [
      "🎣 Gancho: Voltar pro Brasil não é fracasso. Quem te disse que é nunca fez a mala sozinho.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de um assunto que a comunidade de imigrante evita, e esse silêncio machuca muita gente: a possibilidade de voltar. Você foi embora sob aplauso, todo mundo achou corajoso, todo mundo comemorou. Aí, se as coisas apertam, você fica preso lá por um motivo que não é prático, é vergonha. Voltar viraria admitir em público que não deu certo, e isso pesa mais que muita dificuldade real. Eu quero desmontar isso com você, com cuidado, porque essa ideia prende gente boa numa situação ruim. Mudança é um projeto, meu amor, e projeto a gente revê com dado, não com orgulho. Se as premissas mudaram, o emprego sumiu, a profissão pediu uma revalidação que ninguém tinha avisado, a família precisou de você, a criança não se adaptou de um jeito que preocupa; isso não é fracasso pessoal, é a vida acontecendo. E tem uma coisa que quase ninguém enxerga: quem passa um tempo fora volta diferente. Volta com outra língua, outra cultura de trabalho, e uma coragem de recomeçar do zero que só quem fez tem. Isso não é derrota, é bagagem. Eu vim do Padre Bento, da periferia de Guarulhos, e aprendi cedo que origem não é teto, e o caminho de volta também não é. Antes de decidir, vale ter o mapa: o que uma saída significa pro seu status naquele país, se tem prazo que faz perder algo já conquistado, o que muda pras crianças na escola. Sobre o que uma saída representa pro seu status, quem responde é advogado, porque isso é específico do seu caso. E se o que estiver pesando for uma angústia constante, isso merece profissional de saúde mental, não só conversa de comunidade. Na WiseHub esse assunto tem espaço, e isso não é pouco, porque em muito lugar ele é tabu: tem gente que voltou, gente que quase voltou e ficou, gente que voltou e saiu de novo, mais preparada.",
      "✅ Fica porque você escolheu ficar, não porque tem vergonha de voltar. As duas saídas são dignas, viu? Comenta VERDADE aqui embaixo que eu continuo essa conversa com você. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Ninguém conta, mas voltar não é derrota, é revisar um projeto com honestidade. Origem não é teto, e recomeço nenhum é. Comenta VERDADE. #voltarpraobrasil #imigração #maeleoa #origemnaoeteto #wisehub"
    ],
    "palavras": 413
  },
  {
    "id": "2026-07-20-05",
    "date": "2026-07-20",
    "lote": 8,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A avó que virou uma tela",
    "paras": [
      "🎣 Gancho: Tem uma perda na sua mudança que não é sua. É da sua mãe e do seu pai. E ninguém te avisa disso.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar dos avós que ficam pra trás quando a gente muda. Você decide, você se prepara, você tem um projeto novo te puxando pra frente. Eles não escolheram nada, só recebem a notícia de que o neto vai crescer longe, e ficam com a mesma casa de sempre, só que com uma cadeira a menos. Isso costuma vir atravessado: a mãe que não pergunta nada, o pai que faz uma piada ácida, a avó que só fala do frio que você vai passar. A gente lê como falta de apoio, e quase sempre é medo e saudade sem nome. Mas tem o que fazer, meu amor, e é com a criança. Vínculo de neto com avó vive de convivência, e chamada de dez minutos onde o adulto pergunta \"como foi a escola\" não segura ninguém. Criança pequena não conversa, ela brinca. Então transforma a chamada em atividade: ler a mesma história, cozinhar a mesma receita ao mesmo tempo, dar um tour pela rua. E aposta no dia a dia: áudio curto, foto boba, vídeo de dez segundos constroem mais presença que uma ligação formal por mês. Combina um horário fixo, porque o fuso desorganiza qualquer boa intenção. E um cuidado que muita gente esquece: planeja a visita dos avós com antecedência de verdade. Sobre exigência de entrada e documento de visitante, a fonte é sempre oficial e quem orienta é advogado, porque isso muda de país pra país. Vou ser honesta com você: nada disso apaga a distância. O que dá pra fazer é garantir que a criança saiba quem são os avós dela, e que eles saibam quem essa criança está virando. Na comunidade da WiseHub, quem já mora fora conta como organizou a visita dos pais nos países que a gente acompanha.",
      "✅ Marca o horário dessa semana com a sua mãe, meu amor. Vínculo não sobrevive só de intenção. Comenta CUIDAR aqui embaixo que eu te mando o que funciona pra manter os avós presentes. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: O neto vai crescer longe, e quem mais sente é quem ficou. Dá pra manter esse vínculo vivo, mas tem que ser de propósito. Comenta CUIDAR. #imigração #maeleoa #familia #morarfora #wisehub"
    ],
    "palavras": 405
  },
  {
    "id": "2026-07-20-04",
    "date": "2026-07-20",
    "lote": 8,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Seu maior custo não é dinheiro, é retrabalho",
    "paras": [
      "O gasto que mais dói num projeto de mudança quase nunca é o previsto. É fazer duas vezes.",
      "Documento traduzido no formato errado e retraduzido. Processo protocolado sem uma peça e reiniciado. Curso pago que não é reconhecido lá. Mudança pra uma cidade e depois pra outra porque o trabalho não estava onde parecia.",
      "Cada um desses custa dinheiro, e custa principalmente meses.",
      "E quase todo retrabalho tem a mesma origem: informação desatualizada ou de fonte errada. Regra que mudou, exigência específica daquele consulado, detalhe que só quem fez sabe.",
      "Confirmar antes leva uma tarde. Refazer leva um semestre.",
      "Na WiseHub você confere com quem fez o processo recentemente, e confirma na fonte oficial antes de agir. É a parte mais chata e a que mais economiza."
    ],
    "palavras": 127
  },
  {
    "id": "2026-07-20-03",
    "date": "2026-07-20",
    "lote": 8,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A conta muda quando tem filho",
    "paras": [
      "Um erro comum de quem planeja mudança com família: usar a conta de custo de vida de solteiro.",
      "Filho muda a estrutura toda. Muda o tamanho do imóvel, e imóvel maior é o maior salto de custo em quase todo lugar. Muda o bairro, porque agora depende de escola. Muda o transporte. E entra uma despesa que solteiro não tem, que é cuidado infantil, uma das mais caras em vários países.",
      "Tem também o efeito na renda: com criança pequena e sem rede de apoio, muitas vezes um dos dois adultos não consegue trabalhar em tempo integral no começo. Isso não é detalhe, é metade da renda planejada.",
      "Refaça a conta com o tamanho real da sua família e com renda de uma pessoa e meia no primeiro ano.",
      "Na WiseHub tem famílias que já fizeram essa conta na prática nos países acompanhados e contam onde erraram por baixo."
    ],
    "palavras": 149
  },
  {
    "id": "2026-07-20-02",
    "date": "2026-07-20",
    "lote": 8,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Quanto vale um ano da sua vida",
    "paras": [
      "Toda decisão de mudança acaba virando uma discussão sobre dinheiro. Quanto custa o processo, quanto se ganha lá, quanto se gasta pra viver. São perguntas boas, e são incompletas, porque falta a variável mais escassa da conta, que é tempo.",
      "Vou colocar de forma concreta. Existe um caminho que custa menos e leva quatro anos. E existe outro que custa bem mais caro e leva um ano e meio. A comparação apenas financeira escolhe o primeiro sem pensar. Mas os dois anos e meio de diferença não são abstratos. São dois anos e meio de renda na outra moeda que não entraram. São dois anos e meio da sua filha crescendo aqui em vez de lá. São dois anos e meio a mais de idade sua na hora de entrar num mercado novo, o que em várias áreas conta.",
      "Quando a conta inclui isso, o caminho mais caro às vezes passa a ser o mais barato. E às vezes não passa, e aí a decisão fica clara pelo outro lado. O ponto não é qual é o certo, é que a decisão estava sendo tomada sem uma das variáveis principais.",
      "Tem um segundo lugar onde o tempo aparece e quase ninguém mede: o custo de esperar a certeza. Muita gente adia por dois, três anos, esperando ter clareza total antes de dar o primeiro passo. Só que boa parte da clareza não vem de fora, ela vem de ter começado. Enquanto se espera, o relógio corre igual, e algumas portas dependem de idade, de tempo de experiência ou de janelas que abrem e fecham.",
      "E tem o terceiro, que é o oposto e igualmente caro: pressa. Antecipar uma mudança sem reserva ou sem entender o mercado de destino costuma custar um ano de retrabalho lá na frente, exatamente o ano que a pressa queria economizar.",
      "O que ajuda a decidir é atribuir um valor ao seu ano. Não precisa ser exato. Pegue o que você ganharia a mais por ano no destino, some o que aquele ano representa em qualidade de vida ou em oportunidade pra sua família, e use esse número pra comparar caminhos. De repente uma diferença de custo que parecia enorme vira pequena perto de dois anos de espera. Ou o contrário fica evidente.",
      "Essa é uma conversa recorrente na WiseHub, porque quase todo mundo lá já enfrentou essa escolha entre o caminho mais barato e o mais rápido, nos nove países acompanhados. Ouvir de quem escolheu cada um, e como se sente hoje, costuma esclarecer mais que qualquer planilha.",
      "Sendo exato: prazos de processo não são previsíveis e ninguém aqui garante tempo de análise nem resultado. Isso depende de órgão oficial e do seu caso, e quem orienta é advogado. Decisão financeira é com contador. O que a comunidade dá é a experiência de quem já pagou os dois preços.",
      "Coloque o tempo na planilha. É a única linha que você não consegue repor depois."
    ],
    "palavras": 489
  },
  {
    "id": "2026-07-20-01",
    "date": "2026-07-20",
    "lote": 8,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O plano B que virou plano A sem ninguém decidir",
    "paras": [
      "Tem uma armadilha silenciosa em projeto de mudança internacional, e ela não é financeira nem burocrática. É de decisão.",
      "Quase todo mundo monta um plano principal e um alternativo. O principal costuma ser o país que a pessoa realmente quer, e o alternativo é aquele que parece mais fácil de entrar. O plano B existe justamente pra tirar o desespero da jogada, e nisso ele é excelente.",
      "O problema começa quando o plano B é o que anda primeiro. E ele quase sempre anda primeiro, porque foi escolhido por ser mais fácil. Aí a pessoa vai avançando por ali, um passo puxa o outro, e num certo momento já investiu tanto tempo e dinheiro naquele caminho que voltar parece desperdício. Dois anos depois ela está morando num lugar que nunca foi a escolha dela, sem lembrar exatamente quando isso foi decidido.",
      "Isso tem nome em economia, é o custo afundado. A gente continua investindo numa direção pra não perder o que já gastou, e não porque aquela direção continua sendo a melhor. É um dos erros mais caros que existem, e ele é quase invisível por dentro.",
      "O antídoto é bem simples e quase ninguém faz: escrever, antes de começar, qual é a condição que faz o plano B virar oficial. Por exemplo, se até tal data o processo principal não tiver avançado até tal ponto, mudo o foco. Definido isso com antecedência, a decisão fica sendo sua. Sem isso, a decisão vai sendo tomada pelo caminho que apresenta menos resistência, o que é outra forma de dizer que ninguém decidiu.",
      "Vale um segundo cuidado. Plano B feito só por facilidade de entrada costuma envelhecer mal. Entrar é o primeiro dia, e você vai viver todos os outros. Um destino que abre a porta rápido mas não tem mercado pra sua área, ou custo de vida incompatível com a sua renda possível, ou nenhuma perspectiva de permanência longa, resolve o começo e complica o resto.",
      "Por isso vale comparar os dois caminhos pelos mesmos critérios, e não só pela facilidade: o que o mercado de lá busca na sua área, quanto custa viver, quais são os caminhos reais de permanência ao longo do tempo, e o que muda pra sua família. Esse é justamente o tipo de comparação que a comunidade da WiseHub organiza entre os nove países acompanhados de perto, com quem já mora em cada um deles.",
      "Nada disso é garantia de que o processo vai sair, e ninguém prevê tempo de análise nem resultado. A parte legal de cada caminho quem responde é advogado. O que a comunidade oferece é o retrato do dia seguinte à chegada, que é o que quase nunca entra na comparação.",
      "Defina hoje o critério que faz seu plano virar. Se você não definir, ele vira sozinho, e provavelmente numa direção que você não escolheu."
    ],
    "palavras": 473
  },
  {
    "id": "hubby-2026-07-20",
    "date": "2026-07-20",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "A protecao dos ucranianos na Polonia foi esticada ate 2028, e a letra miuda importa",
    "paras": [
      "Oi, eu sou o Hubby. Hoje eu quero conversar com voce que vive na Polonia sob protecao temporaria, ou que tem alguem querido nessa situacao, porque saiu uma noticia que traz alivio, e tambem um cuidado.",
      "No dia quinze de julho, os paises da Uniao Europeia chegaram a um acordo pra estender a protecao temporaria de quem fugiu da guerra na Ucrania. Antes, essa protecao estava garantida ate quatro de marco de dois mil e vinte e sete. Agora ela deve alcancar quatro de marco de dois mil e vinte e oito, mais um ano inteiro de tranquilidade. E isso pesa muito por aqui, porque a Polonia abriga a maior comunidade ucraniana do bloco.",
      "Mas eu preciso te contar a letra miuda, porque ela anda sendo mal contada por ai. Junto com a extensao veio uma regra nova ligada as obrigacoes militares na Ucrania. Muita manchete resumiu isso como se fosse uma proibicao pra todos os homens em idade militar, e nao e. O proprio texto diz, com todas as letras, que essa verificacao vale so pra quem chegar depois da regra entrar em vigor. Quem ja esta protegido na Polonia nao e atingido.",
      "Entao respira. Se voce ja tem a sua protecao aqui, o seu direito continua de pe. Na pratica polonesa, e o numero PESEL com o status UKR que confirma que voce pode residir no pais.",
      "A acao de hoje e simples: nao tome nenhuma decisao com base em manchete assustadora que chega pelo celular. Antes de mudar qualquer coisa, acompanhe os comunicados oficiais do escritorio para estrangeiros, o UDSC. Nas vezes anteriores, os certificados foram estendidos de forma automatica, sem voce precisar pedir documento novo.",
      "Eu leio a fonte oficial pra te trazer o que e verdade, sem susto e sem exagero. Pode contar comigo. A gente caminha junto nessa jornada, um passo de cada vez."
    ],
    "palavras": 310
  },
  {
    "id": "2026-07-19-08",
    "date": "2026-07-19",
    "lote": 7,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Você vai errar a etiqueta e tudo bem",
    "paras": [
      "🎣 Gancho: Você vai cumprimentar errado, vai rir alto num lugar silencioso, e vai sentir aquela vergonha quente subir no rosto. Respira, tá tudo bem.",
      "🎬 Oi, meus amores, Marcela aqui. Escuta uma coisa de quem já viu muita gente passar por isso: essa vergonha é bem menor por fora do que por dentro, porque na maioria dos lugares as pessoas percebem na hora que você é de fora e relevam. O que pega mal não é errar, é insistir em fazer tudo do jeito de casa depois que você já viu a diferença. Meu cuidado de mãe: nos primeiros meses, observe mais do que se explique, porque os códigos daquele lugar a gente aprende assistindo, e bem mais rápido que a língua. Sotaque nenhum, etiqueta nenhuma, vai te tirar do lugar que é seu.",
      "✅ Marca alguém que está de mala pronta e precisa ouvir isso, e comenta CERTO se você também já pagou um mico desses lá fora. Origem não é teto, e errar etiqueta vira história boa depois. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Você vai errar os códigos, e isso não te faz menos capaz. Observa, respira, e segue. #imigrantesbrasileiros #morarforadobrasil #origemnaoeteto #recomecolafora #wisehub"
    ],
    "palavras": 204
  },
  {
    "id": "2026-07-19-07",
    "date": "2026-07-19",
    "lote": 7,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O médico que não te entende",
    "paras": [
      "🎣 Gancho: Estar doente num país onde você ainda não fala bem a língua é um tipo de solidão que ninguém te conta.",
      "🎬 Oi, meus amores, Marcela aqui. Você precisa explicar uma dor, e dor é detalhe: onde, desde quando, se piora, se irradia. Quando falta palavra, você simplifica, e simplificar sintoma pode mudar o que o médico entende de você. Meu cuidado pra você: escreva antes o que quer dizer, já com as palavras que faltam traduzidas, e pergunte se você tem direito a intérprete, porque em muito lugar esse direito existe e ninguém oferece se você não pedir. E, por favor, não leve o seu filho de tradutor pra dentro do consultório, criança não carrega esse peso.",
      "✅ Comenta CUIDAR se você já se sentiu assim numa consulta lá fora, e marca alguém que vai precisar ouvir isso. Como funciona o atendimento e o direito a intérprete no seu caso, confirma sempre nos canais oficiais de saúde de lá. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Ninguém devia adoecer sozinha longe de casa. Se prepara antes, pede o intérprete, e não bota o filho de tradutor. #saudeimigrante #morarforadobrasil #imigrantesbrasileiros #cuidado #wisehub"
    ],
    "palavras": 199
  },
  {
    "id": "2026-07-19-06",
    "date": "2026-07-19",
    "lote": 7,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O filho que se recusa a falar a língua nova em casa",
    "paras": [
      "🎣 Gancho: Seu filho aprende a língua nova num piscar de olhos e de repente se recusa a falar português com você em casa. Calma, isso não é rejeição.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar do filho que chega em casa e não quer mais falar a nossa língua, e eu sei o quanto isso dói, parece que ele está deixando a família, os avós, a origem pra trás. Mas eu te dou um cuidado que eu aprendi de perto: criança usa língua por função, não por lealdade, ela fala a língua do lugar onde a vida dela acontece, e nessa idade a vida acontece na escola. O que não volta sozinho é a língua que ficou anos sem ser usada, então o segredo não é obrigar, porque obrigar vira castigo, o segredo é dar motivo. Chamada de vídeo com os avós onde só rola o português, música, jogo, alguém do outro lado que se importe de verdade com o que ela tem pra contar.",
      "✅ Se você vive isso na sua casa, comenta CERTO que eu quero saber o que funcionou com o seu, e salva esse vídeo. E se você sentir que é mais que fase, um atraso de fala de verdade, isso é conversa com fonoaudiólogo ou pediatra, não é comigo, tá? Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Não brigue pela língua. Crie motivo pra ela existir, pra que um dia o seu neto ainda saiba conversar com a avó. #familiaimigrante #filhosbilingues #maeimigrante #origemnaoeteto #wisehub"
    ],
    "palavras": 258
  },
  {
    "id": "2026-07-19-05",
    "date": "2026-07-19",
    "lote": 7,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Quando toda a sua vida social passa pelo trabalho dele",
    "paras": [
      "🎣 Gancho: Um dia você acorda naquele país novo e percebe: todos os seus amigos, na verdade, são amigos do seu marido.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de uma coisa que eu vejo acontecer com tanta mulher forte: você chega lá fora e a vida social inteira se forma em volta do trabalho dele, o jantar dos colegas dele, o churrasco do chefe dele, o grupo dos casais do trabalho dele. No começo é um alívio enorme, porque é companhia pronta num lugar onde você ainda não conhece ninguém. Mas eu preciso te dar um cuidado de mãe: se um dia esse trabalho mudar, você perde o círculo inteiro de uma vez, porque o vínculo era com ele, não era com você. Vida própria a gente constrói na repetição, uma coisa só que seja sua e que se repita toda semana, até as pessoas te conhecerem pelo seu nome e não por quem é o seu marido.",
      "✅ Se você se reconheceu, comenta CUIDAR aqui embaixo e marca aquela amiga que foi morar longe e sumiu dentro da vida do marido. Ter vida sua não é vaidade, é o que te segura em pé. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Origem não é teto, e nem a sua vida lá fora precisa ser a sombra da vida dele. Começa por uma coisa só que seja sua. #mulherimigrante #morarforadobrasil #origemnaoeteto #recomecar #wisehub"
    ],
    "palavras": 242
  },
  {
    "id": "2026-07-19-04",
    "date": "2026-07-19",
    "lote": 7,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Ninguém vê seu esforço, vê seu resultado",
    "paras": [
      "Uma coisa que pega o brasileiro trabalhando fora: a quantidade de esforço deixa de ser moeda.",
      "Aqui a gente aprendeu a mostrar dedicação. Ficar até tarde, responder no fim de semana, estar sempre disponível. Em vários mercados isso não impressiona, e em alguns preocupa, porque sugere que você não dá conta no horário.",
      "O que conta é entrega no prazo combinado, comunicação clara quando algo atrasa, e previsibilidade.",
      "Isso é libertador quando você entende. Dá pra trabalhar menos horas e ser melhor avaliado, desde que o resultado apareça e a comunicação funcione.",
      "Na WiseHub tem gente que já fez essa transição de cultura de trabalho e conta o que mudou na prática, nos países acompanhados."
    ],
    "palavras": 115
  },
  {
    "id": "2026-07-19-03",
    "date": "2026-07-19",
    "lote": 7,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O preço de aceitar a primeira oferta",
    "paras": [
      "Chegou proposta e o alívio é imenso. A vontade é dizer sim na hora.",
      "Só que a primeira oferta define mais coisa do que o mês seguinte. Em muitos mercados, o próximo salário é calculado a partir do atual, e a próxima empresa pergunta quanto você ganha hoje. Você não está negociando um contrato, está calibrando uma faixa.",
      "Não estou dizendo pra recusar. Estou dizendo pra não aceitar em dois minutos por medo de perder. Pedir um ou dois dias pra pensar é normal na maioria dos lugares e não queima ninguém.",
      "E vale perguntar o que é negociável além do valor. Às vezes o salário está travado, mas outras condições não estão.",
      "Na WiseHub dá pra ouvir de quem já negociou naquele mercado o que é comum e o que é ofensa cultural. O que vale pro seu contrato específico é conversa com profissional."
    ],
    "palavras": 145
  },
  {
    "id": "2026-07-19-02",
    "date": "2026-07-19",
    "lote": 7,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Emprego ou empresa própria: a escolha que muda tudo lá fora",
    "paras": [
      "Quem já empreendeu no Brasil costuma chegar em outro país com uma pergunta que parece de gosto pessoal, mas é estrutural: procuro emprego ou abro meu negócio aqui?",
      "A resposta honesta é que essa decisão raramente é só sobre preferência. Ela é limitada, antes de tudo, pelo que a sua situação permite. Nem toda autorização de permanência habilita a exercer atividade por conta própria, e nem toda habilita a ser contratado. Em vários lugares as duas coisas exigem enquadramentos diferentes. Ou seja: a primeira pergunta não é o que você quer, é o que você pode, e isso muda de país pra país.",
      "Passada essa porta, aparece a diferença que ninguém fala. Emprego formal, em muitos países, não é só renda. Ele costuma vir amarrado a coisas que pesam bastante na vida prática: acesso a certos serviços, histórico que facilita aluguel, comprovação estável para processos futuros, previsibilidade. Empreender pode render mais, e frequentemente rende, mas costuma tornar tudo isso mais difícil no começo, porque o mercado local ainda não tem histórico seu.",
      "Tem também uma questão de tempo que é fácil subestimar. Abrir negócio num país que você não conhece exige entender o cliente daquele lugar, a forma como ele compra, o que ele espera de atendimento, quanto ele aceita pagar. Isso é aprendizado de mercado, e ele leva meses mesmo pra quem já foi muito bem sucedido em outro lugar. Fazer isso queimando reserva é uma pressão pesada.",
      "Por isso o caminho mais comum entre quem deu certo não é escolher um dos dois, é sequenciar. Entrar com renda mais previsível, usar esse período pra entender o mercado por dentro, construir rede e reputação local, e abrir o próprio quando já se sabe pra quem se está vendendo. Não é o caminho mais rápido, é o que quebra menos gente.",
      "Isso não é regra e não vale pra todo mundo. Tem área onde entrar como autônomo é o caminho natural, e tem gente que já chega com cliente contratado. O ponto é decidir com informação, e não por identidade, aquele \"eu sou empreendedor, não volto a ser empregado\" que já custou caro pra muita gente no primeiro ano.",
      "Na WiseHub, entre os nove países acompanhados, tem gente dos dois lados dessa escolha, e ouvir os dois muda a decisão. Dá pra perguntar quanto tempo levou até o negócio andar, o que foi exigido pra formalizar, e o que a pessoa faria diferente.",
      "Duas ressalvas que não são detalhe. O que a sua autorização permite quem responde é advogado. Formalização, imposto e estrutura de empresa quem responde é contador daquele país. Comunidade não faz nenhum dos dois, e ninguém aqui garante resultado de negócio.",
      "Decida pela sequência que te deixa em pé no segundo ano, não pela que soa melhor de contar."
    ],
    "palavras": 462
  },
  {
    "id": "2026-07-19-01",
    "date": "2026-07-19",
    "lote": 7,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Por que a reserva derrete mais rápido do que a conta previa",
    "paras": [
      "Quase toda pessoa que se muda faz uma reserva. Calcula os meses de custo de vida, arredonda pra cima achando que está sendo conservadora, e embarca tranquila. Aí a reserva acaba antes, e quase sempre pelos mesmos motivos.",
      "O primeiro é que a conta cobre o custo de viver, mas não cobre o custo de instalar. São coisas diferentes. Viver é aluguel, comida, transporte. Instalar é depósito de garantia, mobiliar do zero, taxa de tradução de documento, aparelho novo porque o seu não funciona ali, seguro exigido no contrato, primeira consulta médica antes do sistema estar resolvido. Isso é uma onda de gasto que acontece uma vez só e concentrada nas primeiras semanas, exatamente quando ainda não entrou renda nenhuma.",
      "O segundo é o tempo até o primeiro dinheiro entrar. Mesmo com emprego contratado, existe um intervalo entre chegar e receber, e ele costuma ser maior do que se imagina, porque depende de abrir conta, de documento sair, de fechar mês. Quando não há emprego garantido, esse intervalo é a maior incógnita do projeto e é aí que a maioria das reservas quebra.",
      "O terceiro é mais sutil e vale prestar atenção. No começo você gasta mais porque ainda não sabe economizar naquele lugar. Não conhece o mercado mais barato, não sabe qual transporte compensa, compra errado e compra de novo. Isso é uma taxa de aprendizado, ela é real, e some depois de uns meses. Só que ela pesa justamente no período mais frágil.",
      "Então a conta boa tem três blocos, não um. Custo de instalação, que é uma vez. Custo de vida mensal, multiplicado por um número de meses. E uma margem específica pro tempo até a primeira renda, que deve ser maior do que a sua estimativa otimista, porque a estimativa otimista é a que quebra.",
      "Uma coisa que muda muito o cálculo e quase ninguém pesquisa antes: quanto custa instalar naquele país específico. Depósito de aluguel varia muito, exigência de garantia varia, se o imóvel vem mobiliado ou vazio varia. Duas cidades com custo de vida parecido podem ter custos de entrada completamente diferentes.",
      "É isso que a comunidade da WiseHub tem organizado nos nove países acompanhados: não só quanto custa viver, mas quanto custou entrar, contado por quem entrou. Você monta sua reserva com número de gente que fez, não com estimativa de internet.",
      "Preciso ser exato: isso não é orientação financeira nem promessa de que a conta vai fechar. Cada caso tem variáveis próprias, e decisão sobre patrimônio e investimento é conversa com profissional habilitado. O que existe aqui é experiência real, que serve pra você não subestimar o começo.",
      "Faça a conta com os três blocos. Se ela ficar assustadora, melhor descobrir isso agora do que no quinto mês."
    ],
    "palavras": 456
  },
  {
    "id": "hubby-2026-07-19",
    "date": "2026-07-19",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "Irlanda criou uma janela de verao pra quem esta com o cartao de residencia vencido",
    "paras": [
      "Oi, eu sou o Hubby, e hoje eu vim conversar com voce que mora na Irlanda e estava com um aperto no peito por causa das ferias. Aconteceu uma coisa boa, dessas que tiram um peso das costas, e eu quero te contar com calma.",
      "O escritorio de registro de Dublin, em Burgh Quay, esta com uma fila enorme. A renovacao do cartao de residencia, que na Irlanda se chama IRP, passou de dezessete semanas em algumas categorias, e ainda leva mais umas duas semanas ate o cartao novo chegar na sua mao. Quem tinha viagem marcada pras ferias ficou com medo de embarcar com o cartao vencido.",
      "Foi por isso que o servico de imigracao criou uma medida temporaria. Entre treze de julho e trinta e um de agosto, quem ja pediu a renovacao antes do cartao vencer pode viajar apresentando o cartao recem-expirado, junto com um aviso oficial que a propria imigracao publicou. E tem mais: nesse mesmo periodo, quem continua trabalhando com o pedido em andamento segue autorizado a permanecer, mesmo com o cartao vencido.",
      "Agora, presta atencao na parte que decide tudo, porque aqui mora o cuidado. Essa protecao so vale pra quem enviou o pedido de renovacao antes da data de vencimento. Quem deixou o cartao vencer primeiro fica de fora. Entao, a acao de hoje e simples e importante: guarde o recibo do pedido, com o numero de protocolo que eles chamam de OREG, e o e-mail de confirmacao, porque e essa dupla que prova que voce esta em dia.",
      "Se voce vai viajar, baixe e imprima o aviso oficial no site da imigracao, leve o cartao vencido e o comprovante do pedido, e avise a companhia aerea antes de ir. E se tiver conexao fora da Uniao Europeia, confirme se aquele pais aceita o documento.",
      "Eu fico de olho nessas mudancas justamente pra voce nao ser pego de surpresa. Pode contar comigo. A gente caminha junto, um passo de cada vez."
    ],
    "palavras": 328
  },
  {
    "id": "2026-07-18-08",
    "date": "2026-07-18",
    "lote": 6,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Você não precisa gostar no primeiro mês",
    "paras": [
      "🎣 Gancho: Você mudou de país e ainda não está feliz? Respira. Isso não quer dizer que você errou.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar da cobrança silenciosa de estar feliz. Você lutou pra chegar, sonhou com isso, contou pra todo mundo. Aí chega e sente um vazio estranho, e vem a culpa junto. Eu quero te dizer que isso é comum e não significa que você se enganou. Adaptação tem uma fase que não tem nada de encantadora: é cansaço, é burocracia, é não entender nada, é sentir falta de bobagem.",
      "✅ Gostar de um lugar leva tempo, porque gostar depende de pertencer, e pertencer se constrói devagar. Salva esse vídeo pra quando a culpa bater de novo. Na WiseHub tem gente que passou por esse começo sem graça e hoje ama onde mora, e ninguém precisa atravessar isso sozinha. Se o vazio virar peso que não passa, isso é conversa pra profissional, não pra grupo. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Não precisa amar o país novo no primeiro mês. Adaptação tem uma fase sem graça, e ela passa. Salva pra quando a culpa bater. #MudarDePais #VidaDeImigrante #Adaptacao #OrigemNaoETeto #WiseHub"
    ],
    "palavras": 202
  },
  {
    "id": "2026-07-18-07",
    "date": "2026-07-18",
    "lote": 6,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A amizade que não sobreviveu",
    "paras": [
      "🎣 Gancho: Ninguém te avisa: tem amizade que não atravessa a mudança de país. E não, não é culpa sua.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar da amizade que ficou pra trás. Não teve briga, não teve motivo. As mensagens foram ficando raras, os assuntos pararam de coincidir, e um dia você percebe que já faz meses. Dói mais do que parece, porque a gente se preparou pra perder o país, não as pessoas. Mas escuta: amizade se sustenta no cotidiano que a distância tirou. Não é falta de amor, é falta de rotina em comum.",
      "✅ Algumas voltam com o tempo, várias voltam diferentes, e aparecem outras que você ainda nem conhece. Marca aqui alguém que também sentiu isso na pele. Na WiseHub tem gente que passou por isso e continuou, não devolve o que passou, mas ajuda saber que você não está fazendo nada de errado. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Algumas amizades não atravessam a mudança, e não é culpa sua. É falta de rotina em comum, não falta de amor. Marca quem também sentiu isso. #VidaDeImigrante #MudarDePais #SaudadeDoBrasil #OrigemNaoETeto #WiseHub"
    ],
    "palavras": 195
  },
  {
    "id": "2026-07-18-06",
    "date": "2026-07-18",
    "lote": 6,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Quando o filho vira o seu tradutor",
    "paras": [
      "🎣 Gancho: Se o seu filho já traduziu o médico pra você, para tudo e escuta: essa conta não é dele pra pagar.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de uma cena que acontece em quase toda família que muda de país. A criança aprende a língua nova primeiro, e vira a intérprete da casa. No começo tem graça: ela pede na padaria, corrige a sua pronúncia rindo. E é justo comemorar, porque é sinal de que ela está se adaptando. Mas presta atenção no dia em que isso deixa de ser eventual e vira função. Quando ela é chamada pra traduzir a conversa com o médico, pra explicar o que o dono do apartamento falou, pra te ajudar a entender um documento. Aí uma criança está carregando informação de adulto e responsabilidade de adulto, e ela não tem estrutura pra isso. Isso gera ansiedade nela, porque ela sente que se errar a tradução alguma coisa importante da família dá errado. E inverte os papéis: ela começa a se sentir responsável por você. Cuidado com isso, meu amor, porque criança que vira adulto cedo demais tem dificuldade de voltar a ser cuidada depois.",
      "✅ O ajuste não precisa ser dramático. Separa o que é ajuda do dia a dia, que pode continuar, do que é assunto de adulto, que não passa por ela: consulta, dinheiro, documento, conflito com terceiros, isso é seu. Em muito lugar você tem direito a um intérprete de graça no serviço de saúde e no serviço público, vale perguntar antes de levar seu filho como tradutor [CONFERIR COM A MARCELA]. E o passo que resolve de verdade é você estudar a língua, nem que seja meia hora por dia. Não pra falar bonito, pra se virar sozinha no essencial e voltar a resolver a sua própria vida. Na WiseHub tem muita mãe exatamente nesse ponto, e a troca é sobre isso: por onde começar e como encaixar o estudo numa rotina já cheia. Deixa o seu filho ser criança: ele pode ajudar, mas não pode ser o adulto responsável pela comunicação da família. Comenta CUIDAR aqui embaixo que eu te respondo. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Seu filho pode ajudar com a língua, mas não pode ser o adulto responsável pela comunicação da família. Consulta, dinheiro e documento é dos pais. Comenta CUIDAR. #FamiliaImigrante #FilhosDeImigrantes #MudarDePais #OrigemNaoETeto #WiseHub"
    ],
    "palavras": 403
  },
  {
    "id": "2026-07-18-05",
    "date": "2026-07-18",
    "lote": 1,
    "n": 5,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "custo",
    "titulo": "O carro é a linha que te engana na hora de mudar pra Europa",
    "paras": [
      "ABERTURA (o Lucas escolhe uma):\nOpção A: Pessoal, hoje eu não vim com achismo, vim com número.\nOpção B: Meus amigos, senta que esse aqui é papo de planilha.\nOpção C: Gente, essa é a conta que costuma ficar pela metade.",
      "Quase todo mundo que planeja mudar calcula aluguel, comida, passagem. E deixa de fora uma linha que na Europa costuma doer: o carro.",
      "Vou te explicar por que o mesmo carro que já é caro aqui fica ainda mais caro em muito lugar da Europa, e Portugal é o exemplo campeão. Além do preço do veículo, existe um imposto chamado ISV, o Imposto Sobre Veículos. Ele é pago uma vez, na hora de registrar o carro, e é calculado por dois fatores: a cilindrada do motor e a emissão de CO2. Quanto maior o motor e mais o carro polui, mais pesado o imposto. Isso empurra o preço final do carro novo pra bem acima do que a gente está acostumado.",
      "E não para no carro. A gasolina acompanha. Enquanto no Brasil o litro roda perto de um euro, em Portugal ele fica perto de um euro e oitenta. Todo mês, essa diferença aparece no seu bolso.",
      "Agora o outro lado, porque eu não vim aqui só assustar. Em muitas cidades europeias, o transporte público é bom o bastante pra você viver sem carro no começo, o que na maioria das cidades brasileiras é bem mais difícil. Então, antes de perguntar quanto custa o carro lá, pergunta se você precisa mesmo de carro no primeiro ano, ou se o metrô resolve enquanto você se estabelece.",
      "Pra quem vai de Canadá ou Austrália, o cenário do carro é mais parecido com o do Brasil, sem esse imposto pesado de registro, mas com distâncias maiores, onde o carro deixa de ser luxo e vira necessidade mais cedo.",
      "O ponto é esse: o carro é uma das linhas que mais varia de país pra país, e uma das que mais somem da conta de quem planeja. Colocar ele na mesa antes de embarcar evita um susto grande logo na largada.",
      "É esse tipo de detalhe que a gente destrincha na WiseHub, com dado atual e gente que já paga essas contas lá fora. Um aviso que eu sempre dou: imposto e preço de carro mudam com o modelo, o ano e a cidade, e nada aqui substitui uma pesquisa no seu caso concreto. O que eu te entrego é a linha que você ia esquecer.",
      "FECHAMENTO (o Lucas escolhe uma):\nOpção 1: É isso, pessoal. Número na mesa, e a decisão fica com você.\nOpção 2: Pesquisa o seu caso, roda a sua conta, e me conta aqui embaixo o que achou.\nOpção 3: Cabeça fria e planilha aberta. Te espero no próximo."
    ],
    "palavras": 461
  },
  {
    "id": "2026-07-18-05",
    "date": "2026-07-18",
    "lote": 6,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A divisão que ninguém combinou",
    "paras": [
      "🎣 Gancho: Sabe o que quebra mais casamento que muda de país? Não é dinheiro, não é saudade. É uma pilha de tarefas que ninguém combinou quem ia carregar.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de uma conversa que quase todo casal pula antes de embarcar. Vocês combinam cidade, escola, orçamento, prazo. E esquecem da única coisa que decide o clima dentro de casa no primeiro ano: quem faz o quê. Porque quando a família chega, aparece um segundo emprego que ninguém contratou. Abrir conta, entender aluguel, matricular criança, achar médico, decifrar o sistema de saúde. E isso quase sempre escorre pra quem está com a agenda \"livre\", só que ela nunca esteve livre, ela só estava sem nome. Aí uma pessoa se esgota e a outra genuinamente não entende por quê, porque de fora não parece trabalho. Eu vou te dar o atalho, meu amor: antes de mudar, sentem os dois e dividam as frentes, não as tarefas soltas. Saúde é de quem. Escola é de quem. Burocracia é de quem. E quem cuida de uma frente cuida de verdade, pesquisa e decide, não só executa o que o outro mandou. E marca uma conversa curta, uma vez por semana, só sobre a logística da casa. Parece burocrático demais pra casamento, e é justamente por parecer que quase todo mundo pula e depois briga.",
      "✅ Essa é uma das conversas que mais se repete entre as mulheres da WiseHub, porque o padrão é o mesmo em todo país que a gente acompanha. Ouvir de quem já está dois anos na frente como resolveu a divisão em casa poupa meses de desgaste, e você não precisa descobrir isso sozinha. Uma coisa eu preciso te falar com o coração: quando o cansaço vira mágoa acumulada, isso é conversa pra um profissional, não pra grupo. A gente troca experiência, não faz terapia de casal. Salva esse vídeo e marca a pessoa que vai com você, façam essa conversa antes de embarcar. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A divisão de tarefas que ninguém combina é o que mais desgasta casal recém-chegado. Combina antes de embarcar. Salva e marca quem vai com você. #MudarDePais #VidaDeImigrante #MulheresQueMigram #OrigemNaoETeto #WiseHub"
    ],
    "palavras": 375
  },
  {
    "id": "2026-07-18-04",
    "date": "2026-07-18",
    "lote": 1,
    "n": 4,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "custo",
    "titulo": "\"Portugal ficou caro?\" Depende da conta que você faz",
    "paras": [
      "ABERTURA (o Lucas escolhe uma):\nOpção A: Pessoal, hoje eu não vim com achismo, vim com número.\nOpção B: Meus amigos, senta que esse aqui é papo de planilha.\nOpção C: Gente, essa é a conta que costuma ficar pela metade.",
      "Toda semana chega a mesma mensagem: \"Lucas, Portugal ficou caríssimo, não vale mais a pena.\" E eu entendo de onde vem, porque olhando só o preço, assusta mesmo. Mas preço sozinho conta metade da história.",
      "Vou te dar os números reais, e depois a leitura que muda tudo. Alugar um apartamento de um quarto no centro sai, em média, por uns 337 euros no Brasil e uns 917 em Portugal. É quase o triplo. A comida acompanha: a dúzia de ovos, o quilo de frango, a gasolina, tudo pesa mais no bolso português. Até aqui, a frase \"é caro demais\" parece fechada.",
      "Agora a outra metade, a que costuma ficar de fora da mesma tela. O salário líquido médio no Brasil gira em torno de 460 euros por mês. Em Portugal, em torno de 1.150. Também quase o triplo.",
      "E é aí que a conta vira. O que mede o peso de uma coisa é uma divisão simples: o preço, dividido pelo que você ganha naquele país. Um aluguel que custa o triplo, pago com um salário que também é o triplo, ocupa quase a mesma fatia do seu mês. A mesma cidade pode ser cara ou tranquila dependendo do lado da conta que você olha.",
      "Isso não quer dizer que Portugal seja barato, e eu não vou te vender isso. Tem item que pesa mais de verdade, sem salário que compense. O carro é o exemplo. Além do preço, existe o ISV, um imposto pesado que se paga uma vez, no registro, calculado pela cilindrada e pela emissão de CO2. Isso faz o mesmo carro custar bem mais lá, e não tem salário local que equilibre isso no primeiro ano.",
      "O ponto é esse: \"caro\" e \"barato\" são palavras preguiçosas pra uma decisão desse tamanho. O número que decide é a proporção. Quanto cada coisa custa do salário que você vai ganhar lá, e não do seu de hoje convertido.",
      "É esse tipo de conta que a gente destrincha na WiseHub. A proporção real, país por país, custo de vida e salário lado a lado, com dado atual e gente que já paga essas contas todo mês. Um aviso que eu sempre dou: índice de custo de vida é indicativo, muda com a cidade e com o câmbio, e nada aqui substitui um contador pro seu caso. O que eu te entrego é a pergunta certa pra fazer.",
      "FECHAMENTO (o Lucas escolhe uma):\nOpção 1: É isso, pessoal. Número na mesa, e a decisão fica com você.\nOpção 2: Pesquisa o seu caso, roda a sua conta, e me conta aqui embaixo o que achou.\nOpção 3: Cabeça fria e planilha aberta. Te espero no próximo."
    ],
    "palavras": 488
  },
  {
    "id": "2026-07-18-04",
    "date": "2026-07-18",
    "lote": 6,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Seu concorrente não é quem você pensa",
    "paras": [
      "Quando alguém se candidata a uma vaga em outro país, imagina competir com os profissionais daquele país.",
      "Na maioria das áreas, não é bem isso. Você compete com quem já está autorizado a trabalhar ali, o que inclui muito imigrante que chegou antes, já tem documento resolvido, já fala a língua e já tem referência local.",
      "Isso muda a estratégia. Não adianta só ser bom tecnicamente. Pesa o quanto você reduz o trabalho de quem contrata: documentação clara, disponibilidade real, comunicação sem atrito.",
      "Quem entende isso para de vender só competência e passa a vender previsibilidade.",
      "Na WiseHub você conversa com quem já foi contratado nos países acompanhados e sabe o que pesou de verdade. Sobre o que sua situação permite legalmente, quem responde é advogado."
    ],
    "palavras": 126
  },
  {
    "id": "2026-07-18-03",
    "date": "2026-07-18",
    "lote": 1,
    "n": 3,
    "persona": "Dupla",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "dupla",
    "titulo": "A Espanha encurtou o caminho da regularização, e mudou a conta do tempo",
    "paras": [
      "**[Marcela]** Oi meus amores, meu nome é Marcela, e eu estou muito feliz de ter você aqui comigo. Se você sonha com a Espanha, presta atenção nessa.",
      "**[Lucas]** Pessoal, hoje eu não vim com achismo, vim com lei na mão. E a Espanha acabou de encurtar um caminho que era longo demais.",
      "**[Marcela]** Muita gente vai pra Espanha e vive anos ali, trabalhando, construindo vida, esperando poder se regularizar. E esse tempo de espera acabou de diminuir.",
      "**[Lucas]** O fato: o novo Regulamento de Estrangeiros, o Real Decreto 1155/2024, entrou em vigor em maio de 2025. Ele mexeu no arraigo, que é o caminho de quem já está lá pra conseguir a residência.",
      "**[Marcela]** A mudança que mais toca: o tempo mínimo de permanência no país caiu de três anos pra dois. Um ano a menos de espera pra quem está construindo raiz lá.",
      "**[Lucas]** E o contrato de trabalho que serve pra isso ficou mais realista. Aceita contrato de qualquer tipo, com no mínimo 90 dias e pelo menos o salário mínimo, jornada a partir de 20 horas por semana, e dá pra somar mais de um contrato. O prazo pra resposta do pedido é de três meses.",
      "**[Marcela]** Pra quem está planejando de longe, isso muda a conta do tempo. O que parecia distante ficou um degrau mais perto.",
      "**[Lucas]** E onde a WiseHub entra? A gente acompanha essa regra de perto, do jeito que ela está hoje, e não do jeito que estava num vídeo de dois anos atrás. Com jurídico verificado quando o seu caso pede.",
      "**[Marcela]** Sempre com honestidade: a gente não regulariza ninguém, não fala pelo governo espanhol, e nada aqui substitui um advogado de imigração. O que a gente faz é te mostrar o caminho certo e andar junto.",
      "**[Lucas]** Se a Espanha está no seu radar, começa contando o seu tempo de vínculo com o país. É a peça central. É isso, pessoal. Número na mesa, e a decisão fica com você.",
      "**[Marcela]** A WiseHub está esperando por você. E não se esqueça: os seus sonhos merecem ser realizados."
    ],
    "palavras": 347
  },
  {
    "id": "2026-07-18-03",
    "date": "2026-07-18",
    "lote": 6,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Networking não é evento",
    "paras": [
      "Muita gente entende networking como ir a evento, apertar mão e distribuir contato. Depois de mudar de país, esse formato costuma render pouco.",
      "O que funciona lá fora tem outro ritmo. É conversa individual, é ajudar antes de precisar, é aparecer com consistência no mesmo lugar até virar rosto conhecido. Leva mais tempo e dá muito mais resultado.",
      "Tem uma diferença que pega o brasileiro de surpresa: em vários mercados, pedir uma conversa de vinte minutos pra entender a área é absolutamente normal, e quase todo mundo aceita. A gente não pede porque acha invasivo, e perde a porta mais aberta que existe.",
      "Comece por quem já esteve na sua posição. Quem migrou há dois anos lembra do caminho e costuma responder.",
      "Na WiseHub essa conversa acontece toda semana, com gente que já está do outro lado. Ninguém garante vaga nem indicação, mas o caminho fica menos solitário."
    ],
    "palavras": 148
  },
  {
    "id": "2026-07-18-02",
    "date": "2026-07-18",
    "lote": 1,
    "n": 2,
    "persona": "Dupla",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "dupla",
    "titulo": "O Canadá acabou de devolver a cidadania pra quem tinha perdido",
    "paras": [
      "**[Marcela]** Oi meus amores, meu nome é Marcela, e eu estou muito feliz de ter você aqui comigo. Essa aqui é uma notícia boa, dessas de arrepiar.",
      "**[Lucas]** Pessoal, hoje eu não vim com achismo, vim com lei na mão. E dessa vez a lei abriu porta, em vez de fechar.",
      "**[Marcela]** O Canadá acabou de devolver a cidadania pra um monte de gente que tinha perdido por um detalhe da lei antiga. São os que chamam lá de canadenses perdidos.",
      "**[Lucas]** Os fatos. Em 15 de dezembro de 2025 entrou em vigor o Bill C-3, que mexeu na Lei da Cidadania. Ele derrubou o chamado limite de primeira geração, uma regra de 2009 que cortava a cidadania de quem nascia fora a partir da segunda geração.",
      "**[Marcela]** Traduzindo: se você tem pai, avô, às vezes bisavô canadense, e ficou de fora só por causa daquela regra, a sua cidadania pode voltar. E o mais bonito, pra quem nasceu antes de 15 de dezembro de 2025, ela volta de forma automática e retroativa, sem você ter que provar o tempo que o seu pai morou lá.",
      "**[Lucas]** Agora, atenção no detalhe que muda o jogo pra quem vem depois. Pra quem nasce a partir de 15 de dezembro de 2025, filho de canadense que também nasceu fora, a regra pede prova: o pai ou a mãe precisa ter somado pelo menos 1.095 dias, três anos, de presença física no Canadá antes do nascimento.",
      "**[Marcela]** Então a mensagem é dupla. Se você já devia ser canadense e foi cortado, corre atrás, o caminho reabriu. E se você está planejando o futuro dos seus filhos, esse número de três anos entra na conta desde já.",
      "**[Lucas]** E é aqui que a WiseHub faz diferença. A gente separa o boato de internet da lei que está em vigor, com a data certa e o jurídico verificado quando o seu caso pede.",
      "**[Marcela]** Com a honestidade de sempre: a gente não emite passaporte, não decide o seu processo, e nada aqui substitui um advogado. O que a gente entrega é a informação certa e a mão na sua.",
      "**[Lucas]** Confere a sua linha de descendência e a data do seu nascimento. É por aí que começa. É isso, pessoal. Número na mesa, e a decisão fica com você.",
      "**[Marcela]** A WiseHub está esperando por você. E não se esqueça: os seus sonhos merecem ser realizados."
    ],
    "palavras": 401
  },
  {
    "id": "2026-07-18-02",
    "date": "2026-07-18",
    "lote": 6,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A armadilha de ganhar numa moeda e viver em outra",
    "paras": [
      "Tem um arranjo que parece perfeito no papel e que quebra muita gente na prática: manter o trabalho no Brasil, ganhando em real, e ir morar num país de moeda forte.",
      "A lógica inicial faz sentido. Você já tem a renda, já tem o cliente, não precisa procurar emprego lá fora, e ainda ganha tempo pra se estabelecer. É um plano razoável de transição. O problema é quando ele deixa de ser transição e vira o plano definitivo, sem ninguém ter decidido isso.",
      "O primeiro aperto é aritmético. Seu ganho está numa moeda e seu custo está em outra, e as duas se movem sem combinar com você. Um período ruim de câmbio não reduz seu salário, reduz a sua vida. O mesmo trabalho, no mesmo volume, de repente paga menos aluguel. E você não tem nenhuma alavanca sobre isso.",
      "O segundo é mais lento e mais perigoso, porque não dói no começo. Trabalhando exclusivamente pra fora, você não constrói presença no mercado onde mora. Não faz rede local, não acumula referência local, não aprende como aquele mercado contrata. Passam dois anos e você continua sendo, profissionalmente, alguém que mora ali mas não pertence dali. Aí, quando você precisa ou quer virar a chave, começa do zero, só que agora com mais idade e mais pressa.",
      "O terceiro é que esse arranjo costuma vir com uma bagunça de formalização. Onde a renda é declarada, o que aquele país exige de quem trabalha de dentro dele para fora, o que a sua autorização de permanência permite e o que não permite. Isso varia bastante, e é o tipo de detalhe que ninguém confere enquanto está dando certo.",
      "Não estou dizendo pra não fazer. Estou dizendo pra fazer com data. Se a renda de fora é a ponte, defina quando a ponte acaba e o que precisa estar de pé até lá: quantos contatos locais, qual primeira experiência no mercado de lá, que percentual da renda já vem na moeda em que você vive.",
      "Na WiseHub tem bastante gente exatamente nessa situação, em vários dos países acompanhados, e a troca ali costuma ser sobre isso mesmo: quanto tempo cada um levou pra virar a chave, o que fez a diferença, o que atrasou. Dá pra perguntar pra quem está seis meses à sua frente, que é o conselho mais útil que existe.",
      "Duas ressalvas honestas. A parte legal, sobre o que sua autorização permite em cada país, é conversa com advogado. A parte de onde declarar renda é conversa com contador. Comunidade não faz nenhum dos dois papéis e ninguém aqui garante que sua transição vai dar certo.",
      "Ponte é boa. Só não pode virar endereço fixo sem alguém ter escolhido isso."
    ],
    "palavras": 450
  },
  {
    "id": "2026-07-18-01",
    "date": "2026-07-18",
    "lote": 1,
    "n": 1,
    "persona": "Dupla",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "dupla",
    "titulo": "A cidadania italiana mudou em 2025, e muita família ainda planeja pela regra velha",
    "paras": [
      "**[Marcela]** Oi meus amores, meu nome é Marcela, e eu estou muito feliz de ter você aqui comigo. E hoje eu não vim sozinha.",
      "**[Lucas]** Pessoal, hoje eu não vim com achismo, vim com lei na mão. E o assunto é sério pra quem tem sangue italiano na família.",
      "**[Marcela]** A Itália mudou a regra da cidadania por descendência em 2025. Isso mexe com o sonho de muita gente que tem uma bisavó, um bisavô que veio de lá.",
      "**[Lucas]** Vamos aos fatos, sem drama. Em 28 de março de 2025 saiu o decreto que virou a Lei 74 de 2025, confirmada em maio. Ela colocou um limite de gerações que antes não existia.",
      "**[Marcela]** Traduzindo pro coração: agora a cidadania automática vale, em regra, até a segunda geração. Quem tem pai ou avô italiano. O bisneto, que antes conseguia, saiu do caminho automático a partir de 27 de março de 2025.",
      "**[Lucas]** E tem um detalhe que vale ouro pra quem já estava no processo. Quem já tinha dado entrada, ou agendamento confirmado antes das 23h59 de Roma do dia 27 de março, continua na regra antiga. Aquela data virou uma linha divisória.",
      "**[Marcela]** Então se você é neto de italiano, respira, o caminho continua aberto. Se é bisneto, o automático fechou, e a conversa vira sobre outras portas, como casamento ou residência, que pedem mais tempo.",
      "**[Lucas]** E teve novidade fresca: em março de 2026 a Corte Constitucional da Itália manteve o limite de duas gerações. É regra firme, ninguém deve contar que vá voltar atrás.",
      "**[Marcela]** A gente conta isso com cuidado porque não tem coisa pior do que uma família planejar dois anos em cima de uma regra que já mudou.",
      "**[Lucas]** E é isso que a gente faz na WiseHub. A regra atualizada, país por país, com quem acompanha todo dia, e jurídico verificado quando o caso pede.",
      "**[Marcela]** Com honestidade: a gente não emite cidadania, não acelera consulado, e nada aqui substitui um advogado. O que a gente entrega é o mapa certo e a companhia.",
      "**[Lucas]** Antes de gastar sola de sapato, confere em qual geração você está. É a primeira conta. É isso, pessoal. Número na mesa, e a decisão fica com você.",
      "**[Marcela]** A WiseHub está esperando por você. E não se esqueça: os seus sonhos merecem ser realizados."
    ],
    "palavras": 388
  },
  {
    "id": "2026-07-18-01",
    "date": "2026-07-18",
    "lote": 6,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Mudar de país não te desliga automaticamente do sistema anterior",
    "paras": [
      "Existe uma suposição silenciosa que atrapalha muita gente: a ideia de que, no dia em que o avião decola, sua vida anterior se encerra sozinha. Vida financeira não funciona assim, e é bom saber disso antes.",
      "O ponto central é que residência fiscal não é a mesma coisa que endereço. São conceitos diferentes, definidos por regras próprias em cada país, e mudar de casa não muda automaticamente a segunda. Existe procedimento, existem prazos, e existe a possibilidade de você ser considerado ligado a dois lugares ao mesmo tempo, com obrigações nos dois.",
      "Isso importa por uma razão bem prática: gente que não organiza essa transição costuma descobrir a pendência tarde, quando ela já acumulou. E o pior é que essas descobertas costumam vir em momentos ruins, na hora de comprar um imóvel, de fazer um processo, de justificar patrimônio.",
      "Tem um segundo ponto que quase ninguém considera na hora de escolher destino. Cada país trata de forma diferente a renda que você recebe de fora, o patrimônio que você mantém no país de origem, e o que acontece quando você tem investimentos nos dois lados. Duas pessoas com a mesma renda podem ter situações completamente distintas dependendo de onde escolheram morar e de como organizaram a saída.",
      "E tem o terceiro, que é sobre timing. A ordem em que você faz as coisas muda o resultado. Vender um bem antes ou depois de mudar de residência fiscal não é indiferente. Iniciar uma atividade lá antes ou depois de encerrar formalmente algo aqui não é indiferente. Nada disso é armadilha, é só sequência, e sequência se planeja.",
      "O que a comunidade faz aqui é te dar o mapa de perguntas. Na WiseHub, entre os nove países acompanhados, você encontra gente que já organizou essa transição e sabe exatamente quais foram as decisões que precisaram tomar e em que ordem. Isso te permite chegar no profissional certo já sabendo o que perguntar, o que costuma economizar tempo e dinheiro.",
      "Agora eu preciso ser bem direto, porque esse é o tipo de assunto onde conselho errado custa caro. Nada disso é orientação tributária. Não somos consultoria, não existe resposta única, e a sua situação depende de detalhes que só um contador olhando o seu caso consegue avaliar. Conteúdo educativo serve pra você saber que o tema existe e que ele tem prazo, não pra substituir profissional habilitado.",
      "O recado é um só: coloque isso na sua lista antes da mudança, não depois. É das poucas coisas do projeto que ficam mais caras exatamente por serem adiadas."
    ],
    "palavras": 423
  },
  {
    "id": "2026-07-17-08",
    "date": "2026-07-17",
    "lote": 5,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A professora ainda não entende seu filho",
    "paras": [
      "🎣 Gancho: Tem uma cena que aperta o meu coração de mãe: você deixa seu filho na escola nova sabendo que ele vai passar horas sem conseguir dizer o que sente.",
      "🎬 Oi, meus amores, Marcela aqui. Ele vai querer água e não vai saber pedir, vai se machucar e não vai saber explicar onde dói. Eu sei o tamanho desse aperto. Mas escuta de mãe: essa fase é mais curta do que parece de dentro, porque criança pega língua no contexto, e escola é contexto o dia inteiro. O que ajuda é combinar com a escola antes: como eles te avisam se acontecer algo, se existe apoio de língua e quem é a pessoa de referência dele nos primeiros meses. Na WiseHub tem mãe que já viveu esse começo nos países que a comunidade acompanha e conta como foi na prática. Agora, como funciona o apoio escolar em cada lugar, você confirma na própria escola e nos canais oficiais, que é onde mora a resposta do seu caso.",
      "✅ Se seu filho está nessa fase, comenta ESCOLA aqui embaixo que eu quero te acalmar o coração. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A fase do silêncio na escola nova é real, e é mais curta do que parece de dentro. Comenta ESCOLA. #FilhosNoExterior #MaeLeoa #EscolaNova #MudarDePais #WiseHub"
    ],
    "palavras": 224
  },
  {
    "id": "2026-07-17-07",
    "date": "2026-07-17",
    "lote": 5,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O aniversário que você organiza sozinha",
    "paras": [
      "🎣 Gancho: O primeiro aniversário do seu filho em outro país tem uma cena que ninguém fotografa: você fazendo tudo sozinha.",
      "🎬 Oi, meus amores, Marcela aqui. Não tem a sua mãe pra ajudar na comida, não tem a sua irmã pra segurar o bolo, e não é que faltou gente, é que a sua gente ainda não existe ali. Isso bate mais forte do que parece, porque festa de criança é feita de rede, e a rede é justamente o que a mudança desmonta. Mas escuta de mãe: a primeira festa vai ser menor, e menor não é pior. E convida quem você mal conhece, mesmo morrendo de vergonha, porque é assim que rede começa, com um convite feito antes de existir intimidade. Na WiseHub tem mãe que já passou por esse primeiro aniversário longe e conta que a próxima festa costuma ter bem mais gente.",
      "✅ Marca aqui embaixo uma mãe que vai viver esse primeiro aniversário longe, pra ela não achar que está sozinha. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A primeira festa longe é menor, e menor não é pior. Marca uma mãe que precisa ler isso. #MaeNoExterior #MaeLeoa #MudarDePais #RedeDeApoio #WiseHub"
    ],
    "palavras": 202
  },
  {
    "id": "2026-07-17-06",
    "date": "2026-07-17",
    "lote": 5,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Quando alguém adoece e você está longe",
    "paras": [
      "🎣 Gancho: Tem um medo que eu carrego calada, e talvez você também: o medo do telefonema de madrugada. Aquele em que alguém da sua família adoece e você está a um oceano de distância.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar disso com cuidado, porque é o assunto que a gente foge justamente por doer. A primeira coisa que pega é a culpa, aquela que sussurra que você escolheu estar longe. Então escuta de mãe: cuidar não é só presença física. Organizar informação, entender o que o médico disse, ajudar quem está lá, isso é cuidado, e muitas vezes é o cuidado que a família mais precisa. A segunda coisa é a viagem, porque nem sempre correr no primeiro susto é a melhor hora, às vezes você faz mais falta semanas depois, quando todo mundo já está exausto. E tem a parte que ninguém quer olhar antes: saber com calma como está a sua situação pra sair e voltar, e se um processo em andamento pode ser atrapalhado por uma viagem. Na WiseHub você entende como isso funciona nos países que a comunidade acompanha e ouve de quem já viajou às pressas o que deixou organizado antes. Só que o que vale pro seu caso, ainda mais com processo em andamento, quem responde é advogado, sempre. E quando a dor for maior do que a família aguenta sozinha, isso é hora de profissional de saúde, não de grupo.",
      "✅ Deixa isso organizado agora, enquanto está tudo bem, não é atrair coisa ruim, é o contrário. Comenta CUIDAR aqui embaixo que eu te mostro por onde começar, e me segue pra você não descobrir essas coisas na pior hora. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: O medo do telefonema é real, mas dá pra se preparar com cuidado antes que ele venha. Comenta CUIDAR. #MorarFora #MaeLeoa #Cuidado #FamiliaLonge #WiseHub"
    ],
    "palavras": 318
  },
  {
    "id": "2026-07-17-05",
    "date": "2026-07-17",
    "lote": 5,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A casa que você monta duas vezes",
    "paras": [
      "🎣 Gancho: Ninguém te avisa, mas mudar de país é montar uma casa duas vezes. A primeira você desmonta chorando em cima de uma caixa. A segunda você levanta do zero, sozinha, num lugar onde nem sabe onde se compra um martelo.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar da casa que a gente monta duas vezes. Desmontar dói porque cada objeto vira uma decisão, e não é sobre objeto: é a roupinha que os dois filhos usaram, é a louça da sua mãe. Depois a segunda casa começa vazia num sentido que vai além de móvel, você não conhece o mercado, a farmácia, a vizinha pra pedir socorro. O que ajuda de verdade não é organização, é baixar a régua: deixa pronto só o essencial, cama, cozinha, banho, rotina das crianças, que o resto se acomoda morando. Na WiseHub você acha quem já levantou essa segunda casa nos países que a comunidade acompanha de perto e lembra exatamente onde perdeu tempo, então você chega sabendo o que perguntar. Agora, com o coração na mão: contrato de aluguel, fiador, questão legal de moradia, isso depende do seu caso e às vezes de um profissional, não é comunidade que resolve.",
      "✅ Se você está no meio da primeira casa, chorando em cima de uma caixa, comenta CASA aqui embaixo que eu quero saber de você, e me segue pra não montar essa casa sozinha. Origem não é teto, e casa não se faz num mês, se faz morando. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Mudar de país é montar uma casa duas vezes, e ninguém te conta o peso da primeira. Comenta CASA que eu te respondo. #MudarDePais #MaeLeoa #OrigemNaoETeto #VidaLaFora #WiseHub"
    ],
    "palavras": 290
  },
  {
    "id": "2026-07-17-04",
    "date": "2026-07-17",
    "lote": 5,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Diploma não é passaporte",
    "paras": [
      "Existe uma frase que atrapalha muita gente: com o meu diploma eu trabalho em qualquer lugar.",
      "Depende inteiramente da profissão. Algumas atravessam fronteira quase sem atrito. Outras exigem revalidação formal, exame, estágio supervisionado ou registro em conselho local, e isso pode levar de meses a anos, dependendo do país e da área.",
      "O erro caro não é a exigência existir. É descobrir dela depois de já ter se mudado, quando o orçamento foi feito contando com uma renda que ainda não pode ser exercida.",
      "Essa é a primeira pergunta a fazer, antes de escolher destino: minha profissão é regulamentada lá, e se for, qual é o caminho e quanto tempo leva.",
      "Na WiseHub dá pra ouvir de quem já passou por esse processo na sua área, nos países acompanhados. O que vale pro seu caso específico quem responde é o órgão oficial e um profissional habilitado, e vale confirmar sempre na fonte antes de decidir."
    ],
    "palavras": 155
  },
  {
    "id": "2026-07-17-03",
    "date": "2026-07-17",
    "lote": 5,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O sócio que fica no Brasil",
    "paras": [
      "Tem uma dúvida que trava muito empreendedor na hora de se mudar: e o sócio que fica?",
      "A resposta honesta é que sociedade à distância funciona, mas não do mesmo jeito. O que sustentava a parceria era muita conversa não combinada. Café, corredor, decisão rápida no fim do dia. Isso some, e ninguém percebe que sumiu até começar o ruído.",
      "O que costuma salvar é bem chato e bem simples: escrever o que antes era combinado no ar. Quem decide o quê sozinho, o que precisa dos dois, e em que ritmo vocês se falam de verdade sobre número, não sobre tarefa.",
      "Isso vale a conversa antes de você embarcar, não depois. Fuso horário não perdoa combinação vaga.",
      "Na WiseHub tem gente que atravessou exatamente isso, e conta o que quebrou e o que aguentou. Contrato, responsabilidade e a parte jurídica da sociedade quem trata é advogado, não comunidade."
    ],
    "palavras": 149
  },
  {
    "id": "2026-07-17-02",
    "date": "2026-07-17",
    "lote": 5,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Quem está pagando a conta do câmbio na sua mudança",
    "paras": [
      "Todo projeto de mudança internacional tem uma despesa que não aparece em planilha nenhuma, e ela costuma comer mais que muita passagem aérea. É o custo de mover dinheiro entre países.",
      "A confusão começa porque quase todo mundo olha só a tarifa. O banco anuncia uma taxa baixa, você acha que fez um bom negócio, e o dinheiro chega menor do que a conta prometia. O motivo é que a tarifa raramente é a maior parte do custo. A maior parte está na cotação usada na conversão, que costuma ser diferente daquela que você viu no aplicativo de notícias. Essa diferença tem nome, chama-se spread, e ela é silenciosa por desenho.",
      "Faça a conta uma vez e você não esquece mais. Numa mudança comum, entre reserva inicial, depósito de aluguel, primeiros meses de custo de vida e eventuais taxas de processo, é fácil movimentar valores altos em poucos meses. Um ponto percentual a mais de diferença nessa movimentação toda vira uma quantia que paga móveis, ou um mês inteiro de aluguel.",
      "Existe um segundo custo, e esse é mais sutil. É a decisão de quando converter. Muita gente converte tudo de uma vez, num dia qualquer, sem pensar. Câmbio oscila, e concentrar toda a conversão num único momento é uma aposta que ninguém escolheu conscientemente fazer. Distribuir em algumas etapas não garante melhor resultado, mas reduz a chance de você ter feito tudo justo no pior dia do ano.",
      "E tem o terceiro, que só aparece depois. Muita gente mantém obrigação financeira nos dois países durante um tempo, e cada ida e volta de dinheiro paga o pedágio de novo. Vale mapear isso antes: o que realmente precisa atravessar fronteira, o que pode ficar onde está, e o que pode ser encerrado antes da mudança.",
      "A WiseHub não move dinheiro nem indica onde você deve converter, e é bom que fique claro. O que existe ali é gente que já fez esses movimentos nos nove países acompanhados e conta o que aprendeu na prática, quais foram os custos que pegaram de surpresa e o que fariam diferente. Você chega na sua decisão com o mapa dos pedágios, e não descobrindo cada um deles no susto.",
      "Preciso ser exato numa coisa. Nada disso é recomendação de investimento nem de operação financeira. Não somos consultoria e não existe garantia de resultado em câmbio, que oscila por motivos que ninguém controla. Decisão sobre dinheiro, imposto e remessa tem endereço certo, que é contador e profissional habilitado do seu caso.",
      "Coloque o custo de mover dinheiro como uma linha própria no seu orçamento, com nome e valor estimado. Ela existe de qualquer jeito. A diferença é se ela vai aparecer no seu planejamento ou só no seu extrato."
    ],
    "palavras": 454
  },
  {
    "id": "2026-07-17-01",
    "date": "2026-07-17",
    "lote": 5,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A entrevista começou antes de você ser chamado",
    "paras": [
      "Existe uma etapa do processo seletivo internacional que quase ninguém trata como etapa, e ela acontece antes de qualquer contato. É o momento em que alguém do outro lado digita seu nome e olha o que aparece.",
      "Não é sobre ter presença digital bonita. É sobre coerência. Quem contrata de outro país tem menos informação sobre você do que teria sobre um candidato local. Não conhece sua empresa anterior, não conhece a faculdade, não tem um conhecido em comum pra perguntar. Então ele preenche essas lacunas com o que encontra. E o que encontra costuma ser um perfil profissional desatualizado, dizendo um cargo que você não ocupa mais, numa língua que o mercado dele não lê.",
      "O efeito prático é cruel na sua discrição. Você nunca recebe um retorno dizendo que foi descartado ali. Simplesmente não vem convite, e você atribui isso à concorrência, ao visto, ao mercado difícil. A causa real ficou numa aba de navegador que você nunca viu.",
      "Arrumar isso é das poucas coisas do projeto de mudança que dependem só de você, não custam nada e podem ser feitas neste fim de semana. Descrever a função pelo nome que o mercado de destino usa. Trazer resultado em número quando existir número. Deixar claro em que país você está e o que está buscando, porque recrutador nenhum vai adivinhar se você já tem autorização, se está se mudando ou se quer trabalho remoto.",
      "Tem um detalhe que muda a leitura de tudo isso. O que conta como \"bom perfil\" varia de mercado pra mercado. Em alguns lugares valoriza-se um relato mais direto e sóbrio. Em outros, mostrar trajetória e propósito pesa. Copiar o padrão de um país aplicando em outro produz aquele efeito estranho de texto traduzido, que soa competente e ao mesmo tempo deslocado.",
      "É esse tipo de calibragem que fica mais rápido com quem já está lá dentro. Na WiseHub você encontra gente trabalhando nos nove países que a comunidade acompanha de perto, e dá pra perguntar como é lido um perfil na área específica em que você atua, o que costuma chamar atenção e o que costuma queimar. Você leva sua dúvida pra uma live e sai com o ajuste, em vez de descobrir isso depois de meses de silêncio.",
      "Nada disso garante entrevista, e ninguém aqui consegue prometer processo seletivo pra você. Contratação depende do mercado, do momento da empresa e de fatores que ninguém controla. Questões de visto e autorização de trabalho quem responde é advogado. O que a comunidade oferece é o espelho antes da vitrine.",
      "Olhe seu perfil hoje como se você fosse o recrutador. Se ele não conta em trinta segundos quem você é e o que sabe fazer, essa é a primeira entrevista que você está perdendo, e ela é gratuita de consertar."
    ],
    "palavras": 465
  },
  {
    "id": "2026-07-16-08",
    "date": "2026-07-16",
    "lote": 4,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A primeira vez que você dirige sozinha lá fora",
    "paras": [
      "🎣 Gancho: Sabe qual foi o dia que eu soube que uma mulher tinha vencido lá fora? Não foi a cidadania. Foi a primeira vez que ela dirigiu sozinha na cidade nova.",
      "🎬 Oi, meus amores, Marcela aqui. Sem o marido do lado indicando o caminho, sem o aplicativo aberto o tempo todo. Só ela, o carro, e uma rua que já não era estranha. Parece pouco de fora. De dentro, é a prova de que ela consegue se mover sozinha naquele lugar. Adaptação não chega num anúncio grande, meu amor. Ela chega nesses momentos pequenos, que a gente quase deixa passar sem comemorar.",
      "✅ Qual foi a sua \"primeira vez sozinha\" lá fora? Comenta aqui embaixo, que eu quero comemorar com você. E se você ainda vai viver isso, na WiseHub tem mulheres que já passaram e comemoram junto, pra você não fazer sozinha. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Adaptação chega nos momentos pequenos. Qual foi a sua primeira vez sozinha lá fora? Comenta. #MãeLeoa #PrimeiraVezSozinha #VidaLáFora #OrigemNãoÉTeto #WiseHub"
    ],
    "palavras": 177
  },
  {
    "id": "2026-07-16-07",
    "date": "2026-07-16",
    "lote": 4,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A gente volta?",
    "paras": [
      "🎣 Gancho: Seu filho pequeno já te perguntou, do nada, \"mãe, a gente volta?\". Ele não está pedindo uma data.",
      "🎬 Oi, meus amores, Marcela aqui. Seu filho ainda não entende fronteira nem visto. Ele pergunta isso pra testar se o chão embaixo dele é firme. Responder com uma data que você não tem é pior do que não responder. O que acalma de verdade é o que se repete: a mesma hora de dormir, o mesmo bonequinho na cama, o mesmo colo depois do dia ruim. É isso que vira chão pra ele, não o endereço.",
      "✅ Salva esse vídeo pra lembrar no dia que a pergunta vier. Na WiseHub as mães trocam justamente isso, como dar firmeza sem prometer o que não sabem. Cada criança tem o seu tempo, e às vezes é hora de conversar com um profissional também. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: \"Mãe, a gente volta?\" não é sobre data. É sobre chão. Salva pra lembrar. #MãeLeoa #FilhosNaMudança #MudarDePaís #Maternidade #WiseHub"
    ],
    "palavras": 173
  },
  {
    "id": "2026-07-16-06",
    "date": "2026-07-16",
    "lote": 4,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Voltar a trabalhar depois de anos em casa, num país que não é o seu",
    "paras": [
      "🎣 Gancho: Você passou anos cuidando da casa e agora acha que não sabe mais voltar pro mercado? E ainda num país que não é o seu? Fica comigo.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de voltar a trabalhar depois de anos em casa. Eu sei o seu medo, meu amor: a pausa mexe com a confiança de qualquer uma, e ainda tem a língua que você está treinando e as regras de um mercado novo. Mas escuta. Cuidar de casa, de filho e de uma mudança de país é organização, é resolver problema sob pressão, é gerir mil frentes ao mesmo tempo. Isso não é buraco no currículo. E o caminho de volta costuma ser um degrau, não um salto.",
      "✅ Quer dar esse primeiro passo? Me chama no direct, que eu te aponto por onde começar. Na WiseHub tem mulheres que voltaram a trabalhar depois da pausa, em vários países, contando o primeiro passo real que deram, não o currículo perfeito que gostariam de ter tido. Revalidação de diploma e direito trabalhista são conversa de profissional da área, combinado? Origem não é teto, e pausa não é ponto final. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Anos em casa não apagaram sua capacidade de trabalhar. Só mudaram o ponto de partida. Me chama no direct. #MãeLeoa #VoltarAoMercado #OrigemNãoÉTeto #MulheresQueMigram #WiseHub"
    ],
    "palavras": 231
  },
  {
    "id": "2026-07-16-05",
    "date": "2026-07-16",
    "lote": 4,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O trabalho que ninguém vê você fazer",
    "paras": [
      "🎣 Gancho: Se você mudou de país e passou a semana inteira resolvendo escola, médico e mercado, e ninguém viu, esse vídeo é pra você.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar do trabalho que ninguém vê você fazer. Quando a família muda, alguém acha a escola, marca a consulta, entende o transporte, faz amizade com a vizinha pra ter a quem recorrer numa emergência. Na maioria das casas, esse alguém é você. E aí você escuta que \"nem trabalha ainda\". Meu amor, você trabalha sim. Esse trabalho não tem contracheque, mas é ele que faz o lugar novo virar casa. Sem ele, a família fica flutuando, sem chão.",
      "✅ Se isso é você, comenta CUIDAR aqui embaixo, que eu quero te enxergar. Na WiseHub você encontra outras mulheres que já montaram essa vida do zero em vários países e sabem o atalho, pra você chegar sabendo o que perguntar em vez de descobrir tudo sozinha, no susto. A burocracia de cada caso é conversa de advogado, viu? Mas o mapa de quem já andou, esse a gente divide. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: O trabalho invisível de criar raiz tem nome, e segura a casa inteira. Se é você, comenta CUIDAR. #MãeLeoa #OrigemNãoÉTeto #MudarDePaís #VidaLáFora #WiseHub"
    ],
    "palavras": 217
  },
  {
    "id": "2026-07-16-04",
    "date": "2026-07-16",
    "lote": 4,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O corpo avisa antes da cabeça admitir",
    "paras": [
      "Antes de admitir que está no limite, o corpo já avisou várias vezes. O sono que não rende. A vontade de cancelar tudo num dia comum. A irritação com coisa pequena, que não é sobre a coisa pequena.",
      "Empreender ou reconstruir carreira em outro país exige um tipo de energia que ninguém sustenta no vermelho por muito tempo. E o discurso do esforço sem limite ajuda a ignorar justamente os avisos que deveriam frear a tempo.",
      "Cuidar da cabeça e do corpo nessa fase não é luxo, é manutenção do único equipamento que executa o plano inteiro. Se o cansaço já virou constante, isso é assunto pra profissional de saúde, não pra comunidade.",
      "Na WiseHub a conversa também é sobre isso: como sustentar o ritmo sem quebrar no meio do caminho, com gente que já passou pelo próprio limite e aprendeu a reconhecer o aviso mais cedo."
    ],
    "palavras": 147
  },
  {
    "id": "2026-07-16-03",
    "date": "2026-07-16",
    "lote": 4,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A pressa de provar que valeu a pena",
    "paras": [
      "Tem uma pressa que pega quem se muda: a pressa de mostrar resultado rápido, pra família, pros amigos, pra própria cabeça. Como se o primeiro ano precisasse fechar no lucro pra justificar a decisão.",
      "Não precisa. Nenhuma mudança séria de país ou de carreira se paga no primeiro ano. O que se constrói no primeiro ano é base: rede, entendimento do mercado, primeira experiência real lá dentro. O retorno maior costuma vir depois, quando a base já está pronta.",
      "Quem cobra resultado rápido demais de si mesmo costuma tomar decisão ruim só pra mostrar serviço, e decisão ruim tomada com pressa custa mais caro do que esperar.",
      "Na WiseHub tem gente contando o próprio primeiro ano, sem editar a parte difícil. Ninguém garante quando o seu retorno chega. O que dá pra fazer é entender, com quem já passou, o que é normal demorar."
    ],
    "palavras": 144
  },
  {
    "id": "2026-07-16-02",
    "date": "2026-07-16",
    "lote": 4,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O primeiro cliente lá fora não é o maior",
    "paras": [
      "Quem empreende aqui e decide abrir uma frente lá fora costuma repetir o mesmo erro de expectativa: espera que o primeiro cliente internacional seja parecido com o melhor cliente que já teve em casa. Grande, fiel, fácil de atender. Aí o primeiro contrato chega pequeno, testando, desconfiado, e a pessoa lê isso como fracasso.",
      "Não é. É o começo funcionando exatamente como começo funciona em qualquer mercado novo, inclusive nos que já deram certo pra ela antes. Ninguém contrata um fornecedor desconhecido, de outro país, com o mesmo orçamento que reserva pra quem já confia. O primeiro contrato é teste, dos dois lados. Ele serve pra provar entrega, não pra pagar as contas do mês.",
      "O erro caro não é o cliente pequeno. É desistir depois dele, achando que ele é a prova de que o mercado não quer o que você oferece. O segundo cliente, quando vem, costuma vir maior, porque agora existe um histórico real pra mostrar, e não só uma promessa.",
      "Essa semana, doze países registraram movimento nas frentes que a comunidade acompanha de perto: Eslováquia, Finlândia, Holanda, Hungria, Islândia, Nova Zelândia, Irlanda, Letônia, Luxemburgo, Reino Unido, Tchéquia e Romênia. Mercado se move o tempo todo, em regra e em oportunidade, e quem está tentando entrar de fora, sem gente que acompanha isso todo dia, decide sempre com informação velha.",
      "Na WiseHub esse acompanhamento é diário, país por país, e a conversa entre quem já vendeu lá fora e quem está tentando o primeiro contrato acontece toda semana, ao vivo. Dá pra perguntar quanto tempo o outro levou até o segundo cliente, o que mudou na proposta entre o primeiro contrato e o quinto, o que o mercado local espera de quem vem de fora.",
      "Nada disso garante venda nem contrato. Questão fiscal e jurídica de operar em outro país é conversa pra contador e advogado, não pra comunidade. O que existe aqui é gente que testou o primeiro contrato pequeno, não desistiu, e hoje conta como foi o segundo.",
      "O primeiro cliente não precisa ser o maior. Ele só precisa existir, pra abrir espaço pro segundo."
    ],
    "palavras": 350
  },
  {
    "id": "2026-07-16-01",
    "date": "2026-07-16",
    "lote": 4,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O currículo que fala uma língua que ninguém avisou",
    "paras": [
      "Um profissional decide se mudar levando o currículo mais forte que já teve. Anos de entrega, um cargo conquistado com esforço de verdade, referências que abririam qualquer porta na cidade onde ele estava. Do outro lado, silêncio. Entrevista que não vem, ou vem e para no meio, sem ninguém dizer com clareza por quê.",
      "A explicação que mais circula é rasa: lá fora é mais concorrido. Às vezes é. Mas o problema mais comum é outro: o mercado de destino lê currículo de um jeito diferente, e ninguém contou isso pra essa pessoa antes de ela chegar com um documento pronto pra um leitor que não existe do outro lado.",
      "Um cargo que aqui carrega peso de liderança pode não ter nome parecido lá. Um diploma pode precisar de equivalência formal antes de abrir qualquer porta, num prazo que varia de poucos meses a mais de um ano, dependendo do país e da profissão. Uma conquista óbvia por aqui, como segurar uma equipe inteira durante uma crise, pode estar descrita de um jeito que o recrutador de lá simplesmente não reconhece como conquista, porque o vocabulário do mercado dele é outro.",
      "Isso não é o profissional sendo menos capaz. É o documento falando uma língua que o leitor não fala, mesmo quando as duas versões estão, tecnicamente, no mesmo idioma.",
      "O ajuste tem nome e é possível fazer antes de embarcar: entender como aquele mercado específico nomeia a função equivalente à sua, o que ele exige de comprovação, e como reescrever a própria trajetória no vocabulário de quem vai ler. Isso muda a taxa de resposta antes mesmo da primeira entrevista.",
      "Na WiseHub essa leitura acontece em comunidade: gente que já atravessou esse ajuste em cada um dos nove países acompanhados de perto conta como reescreveu a própria história pra ser entendida lá. Dá pra levar seu currículo pra uma live, ouvir de quem contrata ou já foi contratado no seu setor, e ajustar antes de gastar a primeira entrevista aprendendo isso na marra.",
      "Nenhuma reescrita de currículo garante vaga, salário nem visto. Isso quem decide é o mercado, e quem cuida da parte legal do processo é advogado, não comunidade. O que a comunidade oferece é o espelho: mostrar como a sua história soa pra quem está do outro lado, antes de você descobrir isso sozinho, numa entrevista que não volta.",
      "Seu currículo não está fraco. Ele só ainda está escrito na língua errada. Traduzir isso é trabalho, mas é trabalho que se faz daqui."
    ],
    "palavras": 416
  },
  {
    "id": "2026-07-15-08",
    "date": "2026-07-15",
    "lote": 3,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Um dia você chora no mercado",
    "paras": [
      "🎣 Gancho: Um dia você vai chorar no meio do supermercado, num país novo, sem aviso nenhum. E ninguém te prepara pra isso.",
      "🎬 Oi, meus amores, Marcela aqui. Você está empurrando o carrinho, tudo bem, e aí vê alguma coisa: um pacote parecido com o que a sua mãe comprava, ou um cheiro no corredor errado. E do nada os olhos enchem, no meio do arroz. A saudade não chega nas datas grandes, onde a gente espera. Ela chega assim, numa quarta-feira qualquer, num detalhe minúsculo. Chorar ali não é fraqueza, meu amor. É a sua raiz encostando em alguma coisa conhecida.",
      "✅ Se você já chorou num corredor de mercado longe de casa, comenta CUIDAR que eu quero saber que era o seu arroz. Aqui dentro tem mulher que já passou por isso e continuou. E cuidado: se a saudade virar um peso que não passa, isso é conversa pra profissional, não pra grupo; pro resto, tem quem entenda por que era o arroz. Origem não é teto, e sentir falta de casa não te faz voltar atrás. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Um dia a saudade te encontra no corredor do arroz. Chorar ali é raiz, não fraqueza. Comenta CUIDAR se já aconteceu com você. 💛 #Saudade #VidaFora #MãeLeoa #OrigemNãoÉTeto #WiseHub"
    ],
    "palavras": 221
  },
  {
    "id": "2026-07-15-07",
    "date": "2026-07-15",
    "lote": 3,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A foto da amiga que ficou",
    "paras": [
      "🎣 Gancho: Você muda de país, abre o celular e vê a foto: o aniversário, a mesa cheia, todo mundo que você ama junto. E você não está.",
      "🎬 Aí vem aquela pergunta feia, dessas que a gente não fala em voz alta: será que valeu a pena? Oi, meus amores, Marcela aqui. E eu quero te dizer uma coisa sobre essa pergunta. Ela sempre chega num dia ruim, nunca num dia bom. Ela põe a sua terça-feira cansada contra a melhor noite da vida de outra pessoa, editada e escolhida. Isso não é comparação, meu amor. Isso é uma emboscada.",
      "✅ A saudade é real e merece respeito, só não deixa ela julgar sozinha a sua decisão inteira num dia em que você estava sem forças. Marca aqui uma amiga que também mudou e precisa ouvir isso. E cuidado: se essa pergunta parar de ir embora, ela vira assunto de terapeuta, não de grupo; enquanto ela só passa de vez em quando, aqui dentro tem gente pra dividir com você. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A foto da mesa cheia sempre chega num dia ruim. Não deixa ela julgar a sua vida inteira. Marca uma amiga que precisa ler isso. 💛 #Saudade #QuemMigra #MãeLeoa #OrigemNãoÉTeto #WiseHub"
    ],
    "palavras": 214
  },
  {
    "id": "2026-07-15-06",
    "date": "2026-07-15",
    "lote": 3,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Mudar com adolescente é outro processo",
    "paras": [
      "🎣 Gancho: Todo mundo repete que \"criança se adapta rápido\". Mas ninguém te avisa o que acontece quando o seu filho tem quinze.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de mudar de país com um adolescente em casa, porque isso é outro processo. A criança pequena vai onde a família vai, porque o mundo dela é a família. O adolescente já tem mundo próprio: grupo, apelido, uma reputação que levou anos construindo, uma pessoa de quem ele gosta e não te contou. Ele não escolheu ir, é velho o bastante pra entender o tamanho da perda e novo o bastante pra não ter voto, e por isso a reação dele parece mais raiva do que tristeza. Uma coisa costuma ajudar: dar a ele alguma coisa real pra decidir, não a mudança em si, mas o bairro entre dois, a escola entre duas, o horário pra falar com os amigos daqui. Quando ele participa de escolha de verdade, ele para de ser bagagem e vira parte.",
      "✅ Se você tem um adolescente batendo porta em casa por causa dessa mudança, salva esse vídeo pra reler no dia em que a raiva apertar. Na WiseHub dá pra entender como a escola costuma funcionar na idade dele em cada país e escutar mãe que já atravessou isso, pra você não escolher destino no escuro. E eu preciso ser honesta: quando a dor dele passar do tamanho que a família dá conta, isso é hora de profissional, não de comunidade. Eu não prometo que a adaptação vai ser tranquila, porque eu não sei. O que eu sei é que por baixo dessa raiva tem luto, e ele ainda não tem palavra pra isso. Segura a mão dele mesmo quando ela estiver fechada. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: \"Criança se adapta rápido.\" E o adolescente? Mudar aos quinze é outro processo. Salva esse vídeo pra reler no dia difícil. 💛 #MudançaComFilhos #Adolescentes #MãeLeoa #OrigemNãoÉTeto #WiseHub"
    ],
    "palavras": 331
  },
  {
    "id": "2026-07-15-05",
    "date": "2026-07-15",
    "lote": 3,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A palavra que o formulário usa pra te chamar",
    "paras": [
      "🎣 Gancho: Tem uma palavra nesse processo de imigração que faz mulher adulta se sentir pequena, e ela vem escrita bem no seu nome: dependente.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar dessa palavra, porque ela machuca mais do que parece. É um termo frio de formulário: o visto sai no nome de quem assinou o contrato, e você entra como \"dependente\". Aí você lê aquilo e alguma coisa afunda, porque você não depende de ninguém. Você já sustentou casa, já tomou decisão difícil, e de repente está num papel que te chama de anexo. Então escuta com clareza: aquele campo responde uma pergunta só, quem assinou o contrato de trabalho. Quem você é, e quem você vai ser lá, isso não cabe naquela linha. E o lado prático de virar esse jogo começa antes de embarcar: a regra que diz se você pode trabalhar, e a partir de quando, muda de país pra país, e muita mulher descobre isso tarde demais.",
      "✅ Se essa palavra já te apertou, comenta CUIDAR aqui embaixo que eu quero saber de você. Na WiseHub você não precisa atravessar isso sozinha: dá pra entender o que o visto de acompanhante costuma permitir em cada país e chegar perto de quem já construiu vida própria depois de ler \"dependente\" no próprio formulário. Só que eu faço questão de ser honesta com você: eu não mudo o que está escrito no seu visto, e quem lê o seu caso é advogado. A comunidade caminha junto enquanto a resposta não chega. Papel é papel, meu amor. Origem não é teto. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: \"Dependente\" é o que o formulário te chama. Não é quem você é. Comenta CUIDAR se essa palavra já te apertou. 💛 #ImigraçãoComCuidado #OrigemNãoÉTeto #MulheresQueMigram #MãeLeoa #WiseHub"
    ],
    "palavras": 305
  },
  {
    "id": "2026-07-15-04",
    "date": "2026-07-15",
    "lote": 3,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O visto é a menor linha do projeto",
    "paras": [
      "Quando alguém decide viver fora, gasta noventa por cento da energia numa coisa só: o visto. Fórum, advogado, checklist, ansiedade.",
      "Só que o visto é a autorização de entrar. Ele não diz onde você vai morar, quanto vai sobrar no fim do mês, se a sua profissão exige revalidação, quem vai te contratar, nem como a sua vida vai funcionar no ano dois.",
      "No orçamento de um projeto de mudança, o visto costuma ser uma das linhas menores. E ele consome quase toda a atenção porque é a única parte com prazo e protocolo.",
      "Na WiseHub a conversa é do projeto inteiro, com gente que já montou o dela. O carimbo quem trata é advogado, e a comunidade não faz esse papel. Ali dentro as outras linhas aparecem na sua frente antes de você tropeçar nelas.",
      "O carimbo tem prazo e cobra. O ano dois não cobra nada de você, e é por isso que ele chega sem ninguém ter olhado pra ele."
    ],
    "palavras": 163
  },
  {
    "id": "2026-07-15-03",
    "date": "2026-07-15",
    "lote": 3,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O seu emprego de hoje pode ser o seu treino",
    "paras": [
      "Tem gente que trata o emprego atual como a corrente que prende. Eu enxergo diferente, e é uma diferença que rende.",
      "Enquanto você está aqui, esse emprego pode ser treino pago. Dá pra pedir o projeto que exige inglês. Dá pra pegar o cliente de fora. Dá pra aprender a ferramenta que o mercado lá usa e o daqui ainda não. Dá pra construir portfólio que atravessa fronteira, no horário comercial, recebendo pra isso.",
      "Se a preparação só começa depois da decisão, ela começa no mês mais caro: você já pediu demissão e o relógio corre. O tempo de dentro é o único que passa de graça.",
      "Esse tipo de leitura circula na WiseHub, com gente que já fez o caminho. Ninguém aqui garante que isso vira vaga lá fora, e a troca é de experiência, sem assessoria de carreira nem parecer sobre o seu contrato. Dá pra começar amanhã, sem pedir demissão de nada."
    ],
    "palavras": 155
  },
  {
    "id": "2026-07-15-02",
    "date": "2026-07-15",
    "lote": 3,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A moeda em que você pensa",
    "paras": [
      "A pessoa se muda, começa a ganhar em outra moeda, e continua convertendo tudo de volta pra que ela cresceu usando. Vê um café por quatro e converte. Vê um aluguel e converte. Vê o próprio salário e converte, pra sentir se é bom. Parece prudência. Na prática é uma régua velha medindo uma vida nova.",
      "O estrago vem de dois lados. De um lado, ela acha tudo absurdamente caro e deixa de viver, porque na régua antiga aquele café é um assalto. De outro, e esse é mais perigoso, ela acha o salário fabuloso, porque na régua antiga o número é enorme. Só que ela não paga as contas na régua antiga. Ela paga naquele lugar, naquele custo de vida. O salário que parece uma fortuna convertido pode ser um salário apertado ali, e a pessoa descobre isso quando o mês fecha no vermelho pela terceira vez.",
      "E tem um efeito que aparece mais tarde, quando a poeira baixa. A régua velha também estraga a decisão de poupar. Quem converte guarda pouco, porque qualquer valor parece muito quando vira a moeda antiga na cabeça. Aí a pessoa passa o ano inteiro achando que está bem e chega em dezembro sem reserva, num país onde ela ainda não tem rede pra cair. Régua errada não erra só o gasto, erra o quanto sobra.",
      "Trocar de moeda mental é um trabalho consciente, e leva tempo. O jeito de encurtar é chegar já sabendo. Olhar o aluguel do bairro que você tem chance de morar, e não o do centro da foto. A cesta do mês. O que o imposto tira antes de o dinheiro chegar na sua conta. O transporte, que em uns lugares é detalhe e em outros come um pedaço sério do mês. Tudo isso medido lá, na vida de lá, sem passar pela calculadora.",
      "E esse número muda. Só na janela das últimas 48 horas, doze países tiveram movimento nas frentes que a comunidade acompanha. Quem monta plano com um vídeo de dois anos atrás está usando preço de outro país, que por acaso tem o mesmo nome.",
      "Régua nova ninguém te dá pronta, e a WiseHub não é exceção. O que existe ali é o número de lá, atualizado, de nove países, e gente que já morou naquela régua pra você conferir se o que entendeu bate com a vida real. Imposto e o quanto sobra de fato no seu caso é conversa pra contador. A comunidade te entrega o mapa antes, e mapa nenhum é garantia de nada.",
      "Comece a treinar a régua nova antes de embarcar. Olhe o preço de lá e resista à conversão. Vai incomodar por uns meses, e depois para. No dia em que o número parar de virar reais sozinho na sua cabeça, você já chegou um pouco antes do avião."
    ],
    "palavras": 470
  },
  {
    "id": "2026-07-15-01",
    "date": "2026-07-15",
    "lote": 3,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O custo de ficar também é um custo",
    "paras": [
      "Quando alguém pensa em viver fora, monta uma planilha só. A planilha de sair. Quanto custa o processo, a passagem, o depósito do aluguel, os meses de reserva até a renda engrenar. Some tudo, olha o número, e o número assusta. Aí a conclusão vem sozinha: é caro demais, fica pra depois.",
      "Quero propor uma segunda planilha, a que fica de fora da conversa e muda a leitura da primeira. A planilha de ficar.",
      "Em finanças a gente chama isso de custo de oportunidade: o que deixa de entrar por causa da escolha que você fez. Nenhum centavo sai do bolso, e mesmo assim custa. E ficar é uma escolha, mesmo quando parece só a ausência de uma. Cinco anos a mais numa moeda que perde poder de compra tem preço. Um filho que chega aos quinze sem a segunda língua tem preço. Uma carreira que amadurece num mercado saturado, enquanto a mesma habilidade é disputada em outro, tem preço. Nada disso aparece na planilha de sair, e é por isso que a planilha de sair sempre ganha a discussão.",
      "Não estou dizendo que ficar é errado. Ficar pode ser a decisão mais inteligente da sua vida, e para muita gente é. O que eu estou dizendo é que ficar sem ter feito a conta ainda é adiamento, com o nome de escolha. E adiamento cobra juros.",
      "A dificuldade real é que a planilha de ficar é difícil de montar sozinho. Ela exige saber o que existe do outro lado com alguma precisão. O que aquele mercado busca na sua área. Que caminhos legais se abriram e se fecharam. Quanto custa viver ali sem romantizar nem exagerar. Sem esses números, o custo de ficar vira um sentimento vago, e sentimento vago perde toda discussão contra uma planilha concreta.",
      "Encher a segunda planilha é o tipo de coisa que fica mais rápida com companhia. Na WiseHub você acha os números do outro lado sem precisar caçar em vinte sites: nove países acompanhados de perto, o que muda na regra, o que o mercado pede, quanto se gasta pra viver ali. Você monta o seu passo a passo com isso na mão, leva a dúvida pra uma live com quem trabalha na área, e se o caso virar processo chega a parceiros verificados com condições especiais. Do lado, gente que fez as duas contas e escolheu de olho aberto, pros dois lados.",
      "E olha, a planilha de ficar é sua, não minha. Ninguém aqui consegue te dar visto, renda ou retorno, e quem prometer qualquer um dos três está mentindo pra você. Isso aqui é conteúdo educativo: serve pra você enxergar as duas colunas. Na hora que o número virar decisão de dinheiro ou de processo, quem assina embaixo é contador e advogado, não comunidade.",
      "Faça as duas contas. Se depois delas você escolher ficar, ótimo, agora virou decisão. Se escolher ir, você já vai com o número na mão. As duas respostas são boas. A que não presta é a que ninguém calculou."
    ],
    "palavras": 502
  },
  {
    "id": "2026-07-14-08",
    "date": "2026-07-14",
    "lote": 2,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Antes do visto, a conversa que trava dentro de casa",
    "paras": [
      "🎣 Gancho: Visto não resolve casamento. E é aí que muita família trava sem perceber.",
      "🎬 Oi, meus amores, Marcela aqui. Talvez na sua casa um quer muito ir e o outro sorri e muda de assunto, os dois se calando achando que estão sendo generosos, e a conversa que decide a vida de vocês vai ficando pra depois. Só que documento aprovado com um de vocês em dúvida põe a família inteira do outro lado do mundo com uma conversa por terminar. O que costuma destravar é sair do sim ou não e ir pro concreto: como seria a nossa rotina lá, o que cada um perde, o que cada um ganha, o que precisa ser verdade pros dois quererem.",
      "✅ Me chama no direct se essa conversa está travada aí na sua casa, e vem pra WiseHub, onde tem casal que já passou por isso. A gente não promete visto nem resultado, e nada disso substitui um profissional quando o caso pedir. Só ajuda vocês dois a chegarem na mesma página antes do carimbo. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A conversa mais importante da mudança não é com o consulado. É na sua mesa. Me chama no direct. #casalquemigra #conversadecasal #mudardevida #antesdovisto #WiseHub"
    ],
    "palavras": 212
  },
  {
    "id": "2026-07-14-07",
    "date": "2026-07-14",
    "lote": 2,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "A sua mãe vai aprender a te ver por uma tela",
    "paras": [
      "🎣 Gancho: A gente sempre fala da coragem de quem vai. E quem fica?",
      "🎬 Oi, meus amores, Marcela aqui. A sua mãe vai aprender a te ver por uma tela. O seu pai vai contar os meses até o próximo abraço. Os avós vão perder o dente que caiu e o primeiro dia de aula, e mesmo assim vão sorrir e dizer que está tudo bem, porque querem o seu bem mais do que querem a sua companhia. Se você sente culpa disso, é porque você ama. E dá pra cuidar desse laço com plano, com rotina, com presença combinada, do mesmo jeito que a gente cuida de documento e de custo.",
      "✅ Salva esse vídeo pra quando bater a culpa, e vem conversar sobre isso aqui dentro da WiseHub, com gente que já atravessou. Ninguém promete que é fácil, e nada disso substitui um profissional quando a dor pedir. Mas você não atravessa sozinha. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Pra quem vai, coragem. Pra quem fica, saudade. Dá pra cuidar dos dois. Salva esse vídeo. #quemfica #saudade #familia #migrarcomamor #WiseHub"
    ],
    "palavras": 189
  },
  {
    "id": "2026-07-14-06",
    "date": "2026-07-14",
    "lote": 2,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O tempo da criança é diferente do tempo do adulto, e isso muda tudo na adaptação",
    "paras": [
      "🎣 Gancho: O seu filho não escolheu mudar de país. Ele foi. E é por isso que ele se adapta num tempo totalmente diferente do seu.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar do medo que aperta o peito de toda mãe: como vai ser pro meu filho. O adulto se adapta pela lógica, porque entendeu o motivo. A criança se adapta pelo corpo e pelo vínculo, e no presente dela ela perdeu a professora, o quarto e a língua em que sabia fazer piada. Tem criança que parece bem e desaba depois, e tem criança que sofre no começo e floresce de um jeito que te surpreende. Isso é processo, e processo tem o tempo dele. Você não arruinou a vida do seu filho. Talvez ele só esteja no meio do caminho.",
      "✅ Cuidado pra não confundir o tempo dele com fracasso seu, e não carrega esse medo sozinha. Comenta CUIDAR aqui embaixo e vem atravessar isso na WiseHub, perto de mãe que já passou por isso e com informação de verdade sobre a escola lá fora. A gente não promete que vai ser tranquilo, e quando a adaptação preocupa de verdade tem profissional pra isso. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: O tempo da criança não é o seu. Saber disso muda tudo na adaptação. Comenta CUIDAR. #maeleoa #filhosnoexterior #adaptação #mudardepais #WiseHub"
    ],
    "palavras": 233
  },
  {
    "id": "2026-07-14-05",
    "date": "2026-07-14",
    "lote": 2,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A carreira que você construiu não cabe na mala",
    "paras": [
      "🎣 Gancho: Ninguém te avisa, mas mudar de país tem um luto escondido. O luto da mulher que você era no trabalho.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar da carreira que você construiu e que não cabe na mala. Você passou anos virando referência, e do outro lado o seu nome ainda não diz nada pra ninguém, e isso dói tanto que tem nome: chama luto. Mas escuta uma coisa. O que se perde é o contexto, a rede, o reconhecimento de lugar. O que você É viaja com você, e antes de embarcar dá pra saber se a sua profissão pede revalidação lá fora e o que aquele mercado espera de quem chega, pra você pisar sabendo onde pisa.",
      "✅ Marca uma mulher que precisa ouvir isso, e vem reconstruir cercada de quem já fez esse caminho, aqui na WiseHub. A gente não promete visto nem emprego, e o conteúdo não substitui um profissional quando o seu caso pedir. Promete método, informação de agora e companhia. Origem não é teto, meu amor. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A sua carreira não atravessa a fronteira sozinha. Mas quem você é, sim. Marca uma mulher que precisa ler isso. #origemnaoeteto #mulheresquemigram #recomeço #vidalafora #WiseHub"
    ],
    "palavras": 214
  },
  {
    "id": "2026-07-14-04",
    "date": "2026-07-14",
    "lote": 2,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "No primeiro dia lá fora, a sua rede é zero",
    "paras": [
      "Rede lá fora funciona como estrutura básica. É ela que aponta o bairro que faz sentido, o contador que entende o seu caso, a empresa que contrata gente com o seu perfil, e o que fazer quando um processo trava.",
      "Aqui no Brasil você tem isso e nem percebe, porque levou anos construindo sem reparar. Lá, no primeiro dia, você tem zero. E o primeiro dia é justamente quando ela faria mais diferença.",
      "Estrutura assim se constrói com antecedência. Quem começa quando já precisou, começou tarde.",
      "Na WiseHub tem gente em várias etapas do caminho que você quer fazer, com método e informação atual do lado. A gente não promete resultado, e conteúdo educativo não substitui profissional habilitado no seu caso. Comece a sua rede antes de comprar a passagem."
    ],
    "palavras": 130
  },
  {
    "id": "2026-07-14-03",
    "date": "2026-07-14",
    "lote": 2,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O provedor que decide tudo sozinho e não conta pra ninguém",
    "paras": [
      "Ele pesquisa de madrugada. Faz e refaz a conta. Some no celular no fim de semana. E quando perguntam, responde que está tudo bem. É o homem que carrega a decisão de mudar o país da família inteira e não divide isso com ninguém.",
      "Ele acha que está protegendo a família do peso. Na maior parte das vezes, ele só está carregando sozinho um peso que não foi feito para uma pessoa só. E decisão tomada em silêncio é decisão sem contraditório, sem ninguém para apontar o ponto cego.",
      "A responsabilidade continua sendo sua, e ela não fica menor por ser dividida. Mas levar essa conversa para gente que já atravessou o mesmo processo tira o isolamento dela, e isso costuma melhorar o que você enxerga antes de decidir.",
      "É o que a WiseHub reúne, método para organizar o caminho e gente que decidiu isso antes de você. A gente não promete resultado, e conversa de comunidade não substitui um profissional habilitado quando o seu caso pedir. Mas aqui você não precisa decidir no escuro."
    ],
    "palavras": 175
  },
  {
    "id": "2026-07-14-02",
    "date": "2026-07-14",
    "lote": 2,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A ordem certa é renda primeiro, mudança depois",
    "paras": [
      "Em decisão séria, a ordem dos passos costuma importar mais do que a qualidade de cada passo isolado. E existe uma inversão de ordem, muito comum em quem planeja viver fora, que deixa um plano bom bem mais frágil do que ele precisava ser.",
      "A inversão é essa. A pessoa resolve o destino, resolve o visto, resolve a mudança, e deixa a renda para resolver quando chegar. No papel parece razoável. Primeiro eu entro, depois eu me viro. Na prática, você aterrissa no momento de maior custo e maior fragilidade da sua vida, num mercado que ainda não te conhece, numa língua que ainda te cansa, com um relógio financeiro correndo. É a hora em que você tem menos poder de negociação da sua vida inteira. E é justamente aí que muita gente aceita menos do que vale, porque precisa aceitar.",
      "Agora inverta de volta. Imagine chegar com renda já em movimento. Pode ser um negócio que já fatura antes de você embarcar, um cliente que já paga, uma posição já conversada, uma reserva calculada em cima do custo real daquele destino. Você chega com margem para recusar a primeira oferta. É a mesma pessoa, o mesmo talento, o mesmo país, e um resultado bem diferente, só porque a ordem mudou.",
      "Do ponto de vista de quem pensa em patrimônio, isso é feijão com arroz. Você monta a próxima fonte antes de desmontar a atual. E tem uma camada a mais, que é a concentração. Quem tem vida, renda e patrimônio inteiramente numa jurisdição só carrega um risco que raramente enxerga, porque nunca precisou enxergar. Construir presença em mais de um lugar também é gestão de risco aplicada à própria vida.",
      "O que essa ordem exige é preparo, e preparo se apoia em informação que se mexe. Nas últimas 48 horas, doze países registraram movimento nas frentes que a gente acompanha. Quem está montando renda antes de mudar precisa enxergar esse movimento enquanto o plano ainda está no papel, e não depois de executado.",
      "É esse o trabalho da WiseHub, todos os dias. A comunidade acompanha o que se move em nove países e mais de cem vistos, com as ferramentas para você montar o seu passo a passo, as lives para levar dúvida a quem entende, e parceiros verificados com condições especiais quando o seu caso pedir apoio jurídico. E do lado disso, o que nenhum portal entrega, gente construindo negócio fora agora, que já inverteu essa ordem, corrigiu, e conta como foi.",
      "Agora o aviso que eu não deixo de dar. A WiseHub não consegue te dar visto, nem renda, nem retorno, e desconfie de quem disser que consegue. O que ela põe na sua mão é método, contexto, informação atual e companhia. E o que a gente faz aqui é educativo, não ocupa o lugar de um advogado, de um contador ou de um consultor financeiro quando o seu caso exigir.",
      "Se você está planejando, resista à pressa de resolver a mudança antes da renda. A ordem certa custa mais paciência no começo, e costuma cobrar bem menos depois. E ela fica mais fácil de sustentar quando tem gente do lado que já montou essa ponte. Vem construir junto."
    ],
    "palavras": 532
  },
  {
    "id": "2026-07-14-01",
    "date": "2026-07-14",
    "lote": 2,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O que o mercado lá fora lê quando o seu currículo chega",
    "paras": [
      "Existe um erro de leitura que costuma custar caro justamente para quem é bom no que faz. A pessoa olha o próprio currículo, vê quinze anos de estrada, resultado entregue, reputação construída, e conclui que tudo isso viaja junto com ela. Que basta traduzir o documento e o mercado do outro país vai enxergar o mesmo valor que o mercado daqui enxerga. A prática costuma ser outra, e entender por quê vale mais do que muita coisa que se faz na preparação.",
      "O que você construiu aqui está amarrado a um contexto. As empresas que te conhecem, as referências que sustentam o seu nome, o vocabulário do seu setor, a forma como se negocia, o que aquele mercado considera senioridade de verdade. Nada disso atravessa a fronteira sozinho. Do outro lado, o seu currículo chega como texto. Provavelmente um bom texto, mas texto. E texto disputa vaga com gente que tem contexto local.",
      "Falo isso sem nenhum pessimismo, porque a conclusão é o contrário de desanimadora. Contexto se constrói, e ele se constrói antes de você embarcar. Dá para entender como aquele setor contrata naquele país, quais credenciais pesam e quais são decorativas, se a sua área exige revalidação ou reconhece direto, em que época do ano aquele mercado se mexe. Isso é pesquisável, é aprendível, e muda o ponto de partida de quem chega.",
      "O detalhe é que essa leitura raramente está num portal oficial. Portal oficial te dá a regra do visto. Ele não te dá a temperatura do mercado. Quem te dá a temperatura é quem está dentro dele agora.",
      "É aí que a WiseHub muda o seu começo. A comunidade acompanha nove países e mais de cem vistos, e não para na frente migratória. Acompanha também o mercado de trabalho, a economia, a educação e a saúde, porque é o conjunto disso que decide se a mudança se sustenta depois da chegada. Você monta o seu planejamento passo a passo com esses dados na mesa, leva a sua dúvida para uma live com profissionais, e quando o seu caso pede apoio jurídico você chega através de parceiros verificados, com condições especiais, em vez de contratar no escuro.",
      "Mas o que mais encurta caminho ali dentro são as pessoas. Tem gente na comunidade que já entrou em mercados como o que você está olhando, e que consegue te contar como foi o processo dela, com o detalhe que só quem viveu tem. Isso é contexto emprestado, e contexto emprestado é o começo do seu.",
      "Preciso ser direto com você, porque acho que você merece isso. A WiseHub não promete visto, não promete emprego e não promete resultado. Ela entrega método, informação atual, contexto e companhia. O nosso conteúdo é educativo, ele ilumina caminho e risco, e não substitui a orientação de um profissional habilitado quando o seu caso exigir.",
      "Se você é bom no que faz, não deixe que o mercado lá fora te conheça só por um PDF traduzido. Construa contexto antes de precisar dele, e construa perto de quem já está do outro lado."
    ],
    "palavras": 509
  },
  {
    "id": "2026-07-13-08",
    "date": "2026-07-13",
    "lote": 1,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Existe um lugar onde a saudade encontra gente que entende",
    "paras": [
      "🎣 Gancho: Existe uma solidão que só quem sonha em morar fora conhece, e ninguém perto de você entende direito.",
      "🎬 Oi, meus amores, Marcela aqui. É aquela mistura de esperança, medo e saudade antecipada de um lugar que você ainda nem deixou. Eu queria que você soubesse que existe um lugar onde essa mistura toda encontra gente que entende: onde a sua dúvida vira conversa, o seu medo vira plano e a sua saudade encontra quem já sentiu o mesmo e seguiu em frente. A WiseHub é esse lugar, e não é sobre estar certa o tempo todo, é sobre não caminhar sozinha.",
      "✅ Cuidado com atravessar isso calada, achando que é só com você, porque não é. Me chama no direct que eu te mostro por onde começar. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: A saudade de um lugar que você ainda nem deixou tem nome, e tem gente que entende. Você não precisa caminhar sozinha. #vidanoexterior #saudade #imigracao #origemnaoeteto #wisehub"
    ],
    "palavras": 169
  },
  {
    "id": "2026-07-13-07",
    "date": "2026-07-13",
    "lote": 1,
    "n": 7,
    "persona": "Marcela",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Você não precisa ser forte o tempo todo",
    "paras": [
      "🎣 Gancho: Você não precisa ser forte o tempo todo.",
      "🎬 Oi, meus amores, Marcela aqui. Se você é a mulher que tá segurando nos ombros a decisão de mudar o país da família inteira, essa é pra você. Tem uma diferença enorme entre atravessar isso no achismo, engolindo cada medo em silêncio, e atravessar cercada de gente que entende: mães que já mudaram, mulheres que reconstruíram a vida do outro lado, famílias que passaram pela escola nova e pela saudade e sobreviveram pra contar. É isso que a WiseHub é, uma família que cresce junto, com método pra organizar o caminho e colo pras horas difíceis.",
      "✅ A gente não promete que vai ser fácil; promete que você não vai estar só, e pra uma mãe isso já é quase tudo. Marca aqui uma mãe que precisa se sentir menos sozinha hoje. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Você não precisa ser forte o tempo todo, nem saber de tudo sozinha. Marca uma mãe que precisa ler isso. #maeleoa #vidanoexterior #mulheresqueinspiram #familiafora #wisehub"
    ],
    "palavras": 180
  },
  {
    "id": "2026-07-13-06",
    "date": "2026-07-13",
    "lote": 1,
    "n": 6,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "A boa notícia que muitas famílias ainda não descobriram, e por que informação a tempo muda tudo",
    "paras": [
      "🎣 Gancho: Você acha que toda mudança na lei de imigração é má notícia? Nem sempre. Às vezes uma porta que estava fechada abre, e quase ninguém descobre a tempo de passar por ela.",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de uma boa notícia que muita família ainda não descobriu. Às vezes um país mexe nas regras e facilita justamente o caminho de quem quer levar a família junto, ou reencontrar quem já foi na frente. A Espanha, pelo que se comenta, mexeu em regras ligadas à família e a quem já construiu uma vida por lá [CONFERIR COM A MARCELA]. Só que essa informação que muda uma vida quase sempre chega tarde, escondida num documento oficial, em outra língua, e a família adia o sonho por mais um ano achando que o caminho era mais difícil do que é.",
      "✅ É contra esse silêncio que a WiseHub trabalha todo dia: a comunidade acompanha o que se move lá fora e traduz pra vida real, com a leitura de quem já passou por aquilo e pega na sua mão. Com honestidade, porque é assim que eu cuido de você: a gente não promete visto nem resultado, entrega informação atual, contexto e acolhimento. Salva esse vídeo pra ter essa informação do lado certo na hora que ela contar pra sua família. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Nem toda mudança na lei é má notícia. Às vezes uma porta abre e quase ninguém sabe a tempo. Fica do lado de quem sabe primeiro. #imigracao #vidanaespanha #familiafora #origemnaoeteto #wisehub"
    ],
    "palavras": 267
  },
  {
    "id": "2026-07-13-05",
    "date": "2026-07-13",
    "lote": 1,
    "n": 5,
    "persona": "Marcela",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Quando a mudança é com a família inteira, o medo tem outro tamanho",
    "paras": [
      "🎣 Gancho: Você já deitou a cabeça no travesseiro com medo, não de você, mas do seu filho não se adaptar do outro lado do mundo?",
      "🎬 Oi, meus amores, Marcela aqui. Hoje eu quero falar de mudar de país com a família inteira. Uma coisa é arriscar a sua própria adaptação; outra, bem diferente, é pensar se o seu filho vai fazer amigo, aprender a língua e pertencer àquele lugar. E, no meio disso tudo, tem você recomeçando do zero: carreira, a mãe por perto, as amigas de sempre, tudo pra reconstruir, muitas vezes cuidando de todo mundo antes de cuidar de si. Eu não vou mentir que é fácil, mas cuidado com quem te faz achar que precisa atravessar isso sozinha, porque não precisa.",
      "✅ Se você carrega essa decisão pela família inteira, respira: a WiseHub é uma família que cresce junto, com gente que já passou pela escola nova, pela saudade e pela primeira festa junina longe de casa, e estende a mão pra você, com método pra organizar cada passo e colo pras horas difíceis. A gente não promete que vai ser fácil, promete que você não vai estar só. Marca aqui embaixo uma mãe que precisa ouvir isso hoje. Os seus sonhos merecem uma chance. Um beijo no coração!",
      "📝 Legenda: Mudar de país com a família inteira dá medo, e tudo bem. O que não dá é atravessar sozinha. Marca uma mãe que precisa ler isso. #vidanoexterior #maeleoa #familiafora #origemnaoeteto #wisehub"
    ],
    "palavras": 247
  },
  {
    "id": "2026-07-13-04",
    "date": "2026-07-13",
    "lote": 1,
    "n": 4,
    "persona": "Lucas",
    "canal": "Instagram",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "O mundo virou um mapa de oportunidades, e quase ninguém sabe ler esse mapa",
    "paras": [
      "Nunca foi tão possível construir renda, negócio e vida em mais de um país ao mesmo tempo. E, ao mesmo tempo, nunca foi tão fácil se perder tentando, porque oportunidade sem direção vira só ansiedade.",
      "O que separa quem realiza de quem só sonha raramente é talento. É estar no ambiente certo, com informação atual e com gente construindo junto. A WiseHub é esse ambiente, um ecossistema de imigração e empreendedorismo global onde a oportunidade encontra método e companhia.",
      "Não é sobre uma promessa. É sobre um movimento. E quem entra, aprende e constrói aqui dentro dificilmente volta a querer fazer isso sozinho."
    ],
    "palavras": 103
  },
  {
    "id": "2026-07-13-03",
    "date": "2026-07-13",
    "lote": 1,
    "n": 3,
    "persona": "Lucas",
    "canal": "Reels",
    "formato": "curto",
    "tipo": "roteiro",
    "titulo": "Vou conseguir sustentar minha família lá fora?",
    "paras": [
      "A pergunta que tira o sono de quem provê uma família não é se a vida fora vai ser bonita. É se ela vai ser sustentável. Vou dar conta, no país novo, na moeda nova, com o custo novo. Essa pergunta é séria, e ela merece uma resposta séria, não uma frase motivacional.",
      "A resposta honesta é que sustentabilidade não vem de coragem, vem de preparo. Vem de saber o custo de vida real do destino antes de ir, de entender o mercado de trabalho de lá, de organizar as etapas na ordem certa, e de chegar aos profissionais certos já com condições de quem é da comunidade.",
      "É isso que a WiseHub coloca na sua mão, e ao seu lado gente que já fez essa mesma conta e atravessou. A gente não promete resultado, entrega método e companhia. E quando a responsabilidade é grande, caminhar acompanhado muda tudo."
    ],
    "palavras": 149
  },
  {
    "id": "2026-07-13-02",
    "date": "2026-07-13",
    "lote": 1,
    "n": 2,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "O erro mais caro de quem planeja mudar de país é planejar sobre uma regra que já mudou",
    "paras": [
      "Quero te propor um raciocínio de gestão de risco, do tipo que a gente aplica em qualquer decisão financeira séria, mas que quase ninguém aplica na hora de mudar de país. E deveria, porque é aqui que se perde mais dinheiro e mais tempo.",
      "As regras de imigração não são estáveis. Elas se movem o tempo todo. Um país aperta uma exigência de renda para vistos de trabalho, outro afrouxa para atrair profissionais, um terceiro reescreve as condições de investimento de um mês para o outro. Isso não é exceção, é a rotina de um mercado global disputando talento e capital. E aqui está o problema. A maioria das pessoas monta o seu plano em cima da informação que encontrou uma vez, meses atrás, e nunca mais atualizou. Elas estão planejando com um mapa antigo, sem saber que o terreno mudou.",
      "O custo disso é concreto. É dinheiro gasto num caminho que fechou. São meses investidos numa exigência que já não vale. É a decisão certa, tomada tarde demais, virando a decisão errada, só porque a informação chegou atrasada. Num plano financeiro, a gente chama isso de risco de defasagem, e ele é evitável.",
      "A forma de eliminar esse risco é ter acesso rápido e confiável ao que é verdade hoje, não ao que era verdade no ano passado. E é exatamente essa a espinha da WiseHub. Todos os dias, a comunidade acompanha o que se move na imigração de nove países e mais de cem vistos, e não olha só o visto isolado, olha as cinco frentes que decidem se a mudança se paga, a parte migratória, a economia, o mercado de trabalho, a educação e a saúde. A informação que muda a sua conta chega até você enquanto ainda dá tempo de usá-la a seu favor.",
      "E tem uma camada que nenhum site oficial entrega, por melhor que seja. A leitura de quem está vivendo aquilo agora. Dentro da comunidade, a mudança não é só uma linha atualizada num documento, é uma pessoa contando o que aquilo significou na prática para o caso dela. Informação atual, somada à experiência real de quem está no meio, é o que separa quem reage tarde de quem se antecipa.",
      "Com transparência, porque é assim que a gente trabalha. A WiseHub não promete visto nem retorno. Ela entrega informação atual, contexto e direção, e o conteúdo é educativo, não substitui um profissional habilitado quando o seu caso exigir.",
      "Se a sua mudança é um projeto sério, trate a informação como parte do capital que você está protegendo. Fique onde ela é atual e onde tem gente à frente de você no caminho. É o lugar mais barato para se estar, considerando o que está em jogo."
    ],
    "palavras": 454
  },
  {
    "id": "2026-07-13-01",
    "date": "2026-07-13",
    "lote": 1,
    "n": 1,
    "persona": "Lucas",
    "canal": "YouTube",
    "formato": "longo",
    "tipo": "roteiro",
    "titulo": "Antes de ser um sonho, mudar de país é uma decisão financeira",
    "paras": [
      "Existe uma parte da conversa sobre viver fora que quase ninguém quer ter, e é justamente a mais importante. A parte dos números. A gente romantiza a mudança, imagina a paisagem nova, a vida diferente, e adia a pergunta que sustenta tudo isso. Quanto custa, de verdade, construir essa vida, e como eu me sustento enquanto ela ainda está sendo construída.",
      "Falo isso como alguém que enxerga a mudança internacional pelo que ela também é, um movimento de patrimônio, de renda e de risco. Trocar de país é redistribuir a sua vida financeira inteira. Muda a moeda em que você ganha, muda o custo de tudo o que você consome, muda a forma como você guarda, investe e protege o que construiu. Quem trata isso como detalhe descobre o tamanho do detalhe tarde demais, geralmente quando o dinheiro do plano acabou antes do plano.",
      "O provedor de uma família sente esse peso de um jeito particular. Não é medo de sonhar. É responsabilidade. É a consciência de que outras pessoas dependem do acerto dessa conta. E responsabilidade não se resolve com entusiasmo, se resolve com preparo.",
      "É por isso que a WiseHub não trata a mudança como um salto no escuro, e sim como um projeto que se constrói com método. Dentro dela, você monta o seu planejamento passo a passo, e o custo de vida real de cada destino deixa de ser um chute e vira número em cima da mesa. Você compara, você organiza etapas, você entende o que cabe no seu momento antes de mover uma peça sequer. E quando a decisão pede um profissional, você chega através de parceiros verificados, com condições especiais, em vez de contratar às cegas e torcer.",
      "Mas o que mais muda o jogo para quem pensa como empreendedor não é nenhuma ferramenta. É a mesa. Dentro da comunidade tem gente construindo negócio fora, gente que já errou e aprendeu, gente que está na etapa em que você vai estar daqui a seis meses. Sentar nessa mesa encurta anos de tentativa e erro, e no mundo dos números, tempo é a variável mais cara de todas.",
      "Vou ser direto, porque respeito o seu discernimento. A WiseHub não promete visto, não promete retorno financeiro e não promete resultado automático. O que ela entrega é método, contexto, conexão e acompanhamento. O nosso conteúdo é educativo, ele ilumina caminhos, custos e riscos, e não substitui a orientação de um profissional habilitado quando o seu caso pedir.",
      "Se você está planejando construir uma vida fora, comece pela conta que a maioria evita. E não faça essa conta sozinho, no escuro. Venha para onde ela vira estratégia, e onde tem gente construindo junto com você. Há um lugar reservado para você nesse movimento."
    ],
    "palavras": 456
  },
  {
    "id": "hubby-2026-06-11",
    "date": "2026-06-11",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "Tres novidades de imigracao: Canada, Reino Unido e Finlandia",
    "paras": [
      "## Canada, Express Entry",
      "Oi, eu sou o Hubby, e hoje eu quero te mostrar um detalhe importante sobre o Canada. O Express Entry continua sendo uma das portas mais conhecidas para quem busca residencia permanente, mas ele nao funciona apenas como uma fila de pontos. Cada convite depende do tipo de rodada que o governo decide abrir, e isso muda bastante a leitura do seu perfil.",
      "Existem rodadas gerais, rodadas por programa e rodadas por categoria. Na pratica, isso significa que duas pessoas com pontuacoes parecidas podem viver momentos bem diferentes, porque o Canada tambem observa areas de interesse, como idioma, experiencia profissional e setores que precisam de mao de obra. Por isso, acompanhar so a pontuacao de corte nao basta.",
      "A propria pagina oficial do IRCC trouxe uma atualizacao sobre uma rodada de proficiencia em frances, realizada em vinte e oito de maio. O governo informou que esta revisando um problema tecnico ligado aos convites daquela rodada, mas tambem deixou claro que os candidatos ja convidados nao foram afetados e nao precisam tomar nenhuma acao por enquanto.",
      "A dica e simples, mas faz muita diferenca. Antes de esperar o proximo convite, confira se o seu perfil esta completo, se o teste de idioma esta valido, se a sua ocupacao foi informada corretamente e se voce entende em qual categoria realmente se encaixa. No Canada, planejamento bom nao e ansiedade. E perfil bem cuidado, documento certo e acompanhamento constante da fonte oficial.",
      "## Reino Unido, eVisa e ETA",
      "Oi, eu sou o Hubby. O Reino Unido esta caminhando cada vez mais para um sistema migratorio digital. Para muita gente, isso significa que o status de imigracao deixa de depender de um documento fisico e passa a ser comprovado pelo eVisa, dentro de uma conta online do UKVI.",
      "Na pratica, essa conta precisa estar bem cuidada. E por ela que a pessoa acessa o status digital, atualiza dados importantes e gera codigos para comprovar direito de trabalho, aluguel ou outros servicos. Antes de viajar, tambem e essencial confirmar se o passaporte usado na viagem esta vinculado ao status digital.",
      "Outro ponto importante e a ETA, a autorizacao eletronica de viagem para quem nao precisa de visto, mas precisa de permissao previa para entrar como visitante. O governo britanico explica que a ETA permite viagens curtas, geralmente de ate seis meses, mas ela nao garante entrada automatica. A decisao final continua sendo na fronteira.",
      "A dica do Hubby e tratar o digital como documento de viagem. Antes de comprar passagem ou aceitar uma data de inicio, entre na sua conta oficial, confira passaporte, eVisa ou ETA, salve os comprovantes certos e evite sites que imitam o governo. No Reino Unido, um detalhe de conta online pode virar um problema real no aeroporto, no trabalho ou na universidade.",
      "## Finlandia, residencia permanente",
      "Oi, eu sou o Hubby, e hoje a dica vem da Finlandia. A partir de oito de janeiro de dois mil e vinte e seis, os pedidos de residencia permanente passaram a seguir regras mais exigentes. Para quem sonha em construir uma vida no pais, isso muda a forma de planejar tempo, trabalho, idioma e documentos.",
      "A regra geral agora exige seis anos de residencia continua antes do pedido. Existem caminhos mais curtos, mas eles dependem de condicoes especificas, como renda anual mais alta, formacao obtida na Finlandia, historico profissional, ou qualificacao em nivel avancado. Ou seja, nao e uma regra igual para todos.",
      "A Finlandia tambem passou a olhar com mais atencao para integracao. Conhecimento de finlandes ou sueco, tempo de trabalho ou atividade empresarial, e historico regular de permanencia podem fazer diferenca. Ausencias longas, dependencia prolongada de beneficios e falta de documentacao organizada podem pesar contra o planejamento.",
      "A dica pratica e comecar cedo. Use o Enter Finland sempre que possivel, mantenha comprovantes de emprego, estudos, renda e idioma em ordem, e acompanhe os prazos de atendimento. O proprio Migri informou aumento de demanda e reducao de pessoal, entao resolver tudo na ultima hora pode custar tempo. Na Finlandia, residencia permanente virou um projeto de consistencia, nao apenas de calendario."
    ],
    "palavras": 682
  },
  {
    "id": "hubby-2026-06-08",
    "date": "2026-06-08",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "A Europa vai pedir uma autorizacao nova pra voce entrar, e o viajante esperto ja se prepara",
    "paras": [
      "Oi, eu sou o Hubby, e hoje eu trago uma novidade que vai mexer com quem sonha em conhecer a Europa, ou ja vai e volta de la com frequencia. A Uniao Europeia esta colocando de pe um sistema novo de autorizacao de viagem, chamado ETIAS, e voce, brasileiro, vai precisar dele.",
      "Calma que eu te explico com carinho. Hoje, pra passear pela Europa por ate noventa dias, o brasileiro nao precisa de visto, e isso nao muda. O que muda e que, antes de embarcar, voce vai ter que pedir uma autorizacao eletronica, o ETIAS, ligada ao seu passaporte. A previsao e que ele comece a funcionar no fim de 2026, com alguns meses de adaptacao antes de virar obrigatorio de vez.",
      "E aqui vem a parte que eu faco questao de te avisar, porque e onde muita gente vai cair em cilada. O pedido e simples, feito pela internet, e custa apenas sete euros no site oficial. Sete euros, e olha que importante, a autorizacao vale por varios anos, entao voce faz uma vez e usa em varias viagens. Ja vao aparecer, e talvez ja estejam aparecendo, sites espertos cobrando bem mais caro por isso. Nao caia. Use so o site oficial da Uniao Europeia, confira o endereco com atencao, e desconfie de qualquer pagina que peca um valor alto ou dados demais.",
      "Entao, se a Europa esta nos seus planos, deixe o seu passaporte com validade folgada, separe um cartao e um e-mail, e fique de olho na abertura do sistema pra fazer o seu ETIAS com tranquilidade, sem correria de ultima hora.",
      "Eu fico de olho nessas mudancas justamente pra voce nunca ser pego de surpresa na hora de viajar. Pode contar comigo. A gente caminha junto nessa jornada, um passo de cada vez."
    ],
    "palavras": 298
  },
  {
    "id": "hubby-2026-06-07",
    "date": "2026-06-07",
    "lote": 0,
    "n": 0,
    "persona": "Hubby",
    "canal": "YouTube",
    "formato": "curto",
    "tipo": "dicas",
    "titulo": "Portugal mudou a regra da cidadania, e quem e brasileiro precisa entender isso agora",
    "paras": [
      "Oi, eu sou o Hubby, e hoje eu vim conversar com voce sobre uma mudanca importante, dessas que podem mexer com o seu plano de vida. Portugal acabou de alterar a sua Lei da Nacionalidade, e isso toca diretamente quem e brasileiro.",
      "Ate bem pouco tempo, um brasileiro que morava legalmente em Portugal podia pedir a cidadania depois de cinco anos de residencia. Desde o dia dezenove de maio, essa conta mudou. O tempo minimo passou a ser de sete anos para quem e brasileiro e para os demais cidadaos da comunidade de lingua portuguesa. Para as outras nacionalidades, o prazo subiu para dez anos.",
      "Eu sei que parece uma noticia dura, e foi exatamente por isso que eu fiz questao de trazer essa noticia com calma, junto com a informacao que realmente faz diferenca. Existe uma janela, e ela muda tudo. Quem ja tinha o pedido de cidadania protocolado antes da nova lei entrar em vigor continua sendo avaliado pelas regras antigas. Quer dizer, o que pesa nao e apenas o tempo que voce morou, e tambem a data em que o seu pedido deu entrada.",
      "Entao, se voce esta perto de completar o seu tempo de residencia, esse e o momento de organizar tudo com cuidado. Reuna os seus comprovantes de residencia legal, confira se o seu titulo esta valido e renovado, sem nenhum periodo em aberto no meio do caminho, porque qualquer lapso pode quebrar a contagem dos seus anos. E diante de qualquer duvida sobre o seu caso, busque orientacao antes de protocolar, para nao perder nem prazo nem documento.",
      "Eu fico de olho nessas mudancas justamente para que voce nunca seja pego de surpresa. Pode contar comigo. A gente caminha junto nessa jornada, um passo de cada vez."
    ],
    "palavras": 293
  }
];

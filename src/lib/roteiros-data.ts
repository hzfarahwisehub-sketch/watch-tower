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
export type RoteiroTipo = "roteiro" | "dupla" | "custo";
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
  /** roteiro comum · dupla (casal) · custo (dica de custo do Lucas). */
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
      "O primeiro Natal fora não é como os outros, e ninguém te avisa direito.",
      "Não é só a falta das pessoas. É que a data inteira funciona diferente. O clima está errado, a comida é outra, os costumes não são os seus, e as ruas comemoram uma coisa que não é bem a sua festa.",
      "E aí chega a hora da chamada de vídeo com a família toda reunida do outro lado, e essa é a parte mais difícil, porque você vê a mesa cheia e o seu lugar vazio.",
      "Duas coisas ajudam. Não tentar reproduzir exatamente o Natal de casa, porque a cópia imperfeita dói mais. E criar uma tradição nova, sua, mesmo que pequena, que passe a ser da sua família nesse lugar.",
      "Na WiseHub tem gente que já passou por vários primeiros Natais em cada um dos países acompanhados. Não tira a saudade, mas passar essa data com quem entende muda o peso dela."
    ],
    "palavras": 157
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
      "Tem um jeito curioso de a saudade aparecer: você começa a cozinhar coisas que nunca cozinhou na vida.",
      "Pão de queijo, brigadeiro, feijão do jeito certo, aquele bolo da sua avó. Coisas que sempre alguém fez pra você, ou que se comprava pronto na esquina.",
      "E é engraçado porque no começo dá tudo errado. O ingrediente é outro, o forno é outro, a farinha se comporta diferente. Você refaz três vezes.",
      "Mas tem uma coisa bonita aí no meio. Você não está só matando saudade, está aprendendo a produzir sozinha uma parte da sua casa. E isso, num lugar onde tudo é novo, é uma forma silenciosa de fincar raiz.",
      "Na WiseHub as mulheres trocam justamente esses ajustes, o que substitui o quê em cada país. Parece assunto pequeno e é dos que mais aproximam."
    ],
    "palavras": 135
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
      "Tem um assunto que a comunidade de imigrantes evita, e o silêncio em cima dele faz muito mal: a possibilidade de voltar.",
      "Quem se muda vai embora sob aplausos. Todo mundo achou corajoso, todo mundo comemorou. E aí, se as coisas não saem como o planejado, a pessoa fica presa lá por um motivo que não é prático, é social. Voltar significaria admitir publicamente que não deu certo, e isso pesa mais que muita dificuldade real.",
      "Eu queria desmontar essa ideia com cuidado, porque ela prende gente em situação ruim. Uma mudança internacional é um projeto, e projeto se avalia com dados, não com orgulho. Se as premissas que sustentavam a escolha mudaram, revisar não é fraqueza, é o que qualquer pessoa sensata faz.",
      "As premissas mudam mesmo. O emprego que existia sumiu. A profissão exigiu revalidação que não estava prevista. A família passou por algo que exige presença. A criança não se adaptou de um jeito que preocupa. O casal se separou. A saudade se mostrou maior do que se esperava. Nada disso é fracasso pessoal, é vida acontecendo.",
      "E tem uma coisa que quase ninguém enxerga na hora: quem passou um período fora volta diferente, e volta com bagagem que tem valor concreto. Outra língua, outra cultura de trabalho, experiência internacional no currículo, e uma capacidade de recomeçar do zero que só quem fez tem. Isso não é derrota, é uma experiência que muita gente gostaria de ter.",
      "Também vale nomear a versão mais comum, que quase nunca é contada: muita gente volta, se reorganiza, e sai de novo depois, melhor preparada. Isso é bastante frequente e ninguém posta.",
      "Existe uma parte prática que ajuda a decidir com clareza em vez de decidir por exaustão. Vale saber o que uma volta significa em termos de status naquele país, se existe prazo que faz perder algo já conquistado, se é possível manter alguma coisa aberta, e o que muda pras crianças em termos de escola. Ter esse mapa antes tira o pânico da conversa.",
      "Na WiseHub esse assunto tem espaço, e isso não é pouco, porque em muitos lugares ele é tabu. Tem gente ali que voltou, gente que quase voltou e ficou, gente que voltou e saiu de novo. Ouvir os três tipos ajuda a separar cansaço passageiro de decisão de verdade. Sobre o que uma saída representa pro seu status, quem responde é advogado, porque isso é específico de cada caso.",
      "E se o que estiver pesando for angústia constante, isso merece profissional de saúde mental, não só conversa de comunidade. Decisão grande tomada em esgotamento raramente é a decisão que a pessoa manteria.",
      "Fique porque escolheu ficar, não porque tem vergonha de voltar. As duas saídas são dignas."
    ],
    "palavras": 452
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
      "Tem uma perda na mudança que quase ninguém coloca na conta, e ela não é sua. É dos seus pais.",
      "Você decide, você se prepara, você escolhe. Eles não escolheram nada. Eles só recebem a notícia de que o neto vai crescer longe. E, diferente de você, eles não têm um projeto novo pra compensar, não têm a empolgação do começo. Eles ficam com o mesmo cotidiano de sempre, com uma cadeira a menos.",
      "Isso costuma aparecer de um jeito atravessado. A mãe que não pergunta nada sobre a mudança. O pai que faz piada meio ácida. A avó que só fala do frio que vai fazer. Muita gente lê isso como falta de apoio, e quase sempre é medo e luto sem nome.",
      "Do outro lado tem a criança, e é aí que dá pra fazer alguma coisa concreta. Vínculo de neto com avó se sustenta em convivência, e videochamada de dez minutos por semana em que o adulto pergunta \"como foi a escola\" não sustenta. Criança pequena não conversa, ela brinca. Então o que funciona é transformar a chamada em atividade: ler a mesma história, jogar junto, cozinhar a mesma receita ao mesmo tempo, mostrar o quarto, dar tour pela rua.",
      "O que também ajuda muito, e é subestimado, é o assíncrono. Áudio curto no fim do dia, foto boba, vídeo de dez segundos. Isso constrói presença cotidiana melhor do que uma chamada longa e formal por mês, que costuma deixar todo mundo sem graça.",
      "E vale combinar horário fixo, porque fuso horário desorganiza qualquer intenção. Sem hora marcada, vira aquele \"a gente se fala\" que não acontece.",
      "Tem uma parte prática que muda o ano inteiro da família: planejar as visitas com antecedência real. Quando e quem viaja, quanto custa, quanto tempo fica, e o que isso exige em termos de documento e de tempo fora do país. Muita gente descobre tarde que a visita dos pais depende de exigência que precisava ser preparada com meses.",
      "Na WiseHub isso aparece bastante, nos nove países acompanhados: como cada família organizou visita de avós, o que precisou preparar, o que atrapalhou. Vale ouvir de quem já recebeu os pais e de quem já teve o pedido negado. Sobre exigências de entrada e documentação de visitante, a fonte é oficial e a orientação é de advogado, sempre, porque isso varia e muda.",
      "Uma coisa é honesta dizer: nada disso apaga a distância. Não existe arranjo que faça um avô deixar de perder o dia a dia. O que dá pra fazer é garantir que a criança saiba quem eles são, e que eles saibam quem a criança está virando.",
      "Marque o horário desta semana. Vínculo não sobrevive de intenção."
    ],
    "palavras": 449
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
      "Você vai cumprimentar errado. Vai chegar cedo demais ou tarde demais. Vai fazer uma pergunta que ali é considerada íntima. Vai rir alto num lugar silencioso.",
      "Isso vai acontecer, e a vergonha é real. Só que ela é bem menor do que parece de dentro, porque na maioria dos lugares as pessoas entendem imediatamente que você é de fora e relevam.",
      "O que costuma pegar mal não é o erro, é a insistência em fazer tudo do jeito de casa depois de já ter percebido a diferença.",
      "Observe mais do que se explique nos primeiros meses. Você aprende os códigos assistindo, e eles são mais rápidos de aprender que a língua.",
      "Na WiseHub a gente ri disso junto, com quem já passou pelo mesmo em cada um dos países acompanhados. Errar etiqueta não vai te tirar do lugar, e vira história boa depois."
    ],
    "palavras": 143
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
      "Tem um momento de vulnerabilidade que pouca gente comenta: estar doente num país onde você ainda não fala bem a língua.",
      "Você precisa explicar uma dor, e dor é detalhe. Onde, desde quando, se irradia, se piora. Faltando palavra, você simplifica, e simplificar sintoma pode mudar o que o médico entende.",
      "Três coisas ajudam de verdade. Escrever antes o que você quer dizer, com as palavras que faltam já traduzidas. Perguntar se existe direito a intérprete, porque em muitos serviços existe e ninguém oferece se você não pedir. E não levar seu filho como tradutor em consulta.",
      "Na WiseHub tem gente que já passou por isso nos países acompanhados e conta como resolveu. Como funciona o atendimento e o direito a intérprete no seu caso você confirma nos canais oficiais de saúde locais."
    ],
    "palavras": 133
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
      "Muita família imigrante vive a mesma cena, e ela costuma virar briga: a criança aprende a língua do país, passa a usá-la o dia todo na escola, e em casa se recusa a falar português. Ou o contrário, aprende a nova e resiste a manter a de origem.",
      "Nos dois casos os pais se assustam, e o susto vem de lugares diferentes. Quando ela abandona o português, dói porque parece que ela está abandonando a família, os avós, a origem. Quando ela recusa a língua nova em casa, preocupa porque parece atraso na adaptação.",
      "Vale saber que as duas coisas são comuns e quase sempre passageiras. Criança usa língua por função, não por lealdade. Ela fala a língua do lugar onde acontece a vida dela, e a vida dela acontece na escola, com os amigos. Não é rejeição à família, é economia mental.",
      "Só que tem um ponto que merece atenção, porque esse não se resolve sozinho: manter a língua de origem é uma janela que fecha. Criança que para de falar português com fluência costuma manter a compreensão, mas perde a capacidade de conversar de verdade. E aí acontece o que mais dói, que é neto que não consegue ter uma conversa com avó.",
      "O que funciona não é obrigar, porque obrigar transforma a língua da família em castigo. O que funciona é dar função à língua. Chamada de vídeo frequente com os avós, onde a única opção é o português. Desenho, jogo e música na língua de origem. Alguém do outro lado que se importe com o que ela tem pra contar. Língua sobrevive quando serve pra alguma coisa que a criança quer.",
      "E vale tirar uma pressão de cima: criança bilíngue às vezes mistura, às vezes demora um pouco mais em uma das duas, e isso costuma se organizar. O que não se organiza sozinho é a língua que deixou de ser usada por anos.",
      "Na WiseHub tem mães vivendo isso em cada um dos nove países acompanhados, e a troca ali é bem concreta: o que cada uma fez, o que funcionou com filho de cada idade, o que só piorou. Também aparece muito a experiência com escolas bilíngues e com apoio de língua, que muda bastante de país pra país.",
      "Uma ressalva importante: se houver preocupação real com desenvolvimento de fala, atraso ou dificuldade que fuja do esperado, isso é avaliação de fonoaudiólogo ou pediatra, não de grupo de mães. A gente troca experiência, não avalia criança.",
      "Não brigue pela língua. Crie motivo pra ela existir."
    ],
    "palavras": 421
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
      "Tem uma coisa que acontece devagar e que muita mulher só percebe quando já está instalada: todo o círculo social da família se formou em volta do trabalho do marido.",
      "O começo é natural e até bom. Ele entra na empresa, conhece gente, e vêm os convites. O jantar com os colegas dele, o churrasco na casa do chefe dele, o grupo de mensagens dos casais do trabalho dele. Quando a família ainda não conhece ninguém, isso é um alívio enorme, porque é vida social pronta.",
      "O preço aparece depois. Nessas rodas, ela costuma ser apresentada como a esposa do fulano. As conversas giram em torno de assuntos da empresa que ela não acompanha. E há uma sensação sutil, difícil de explicar sem parecer ingratidão, de estar sempre entrando na vida de outra pessoa em vez de ter a própria.",
      "Tem um agravante prático. Se um dia esse trabalho acabar, ou o casal se separar, ou simplesmente ele mudar de empresa, ela perde de uma vez o círculo inteiro. Não porque aquela gente seja falsa, mas porque o vínculo era com ele, não com ela.",
      "O que constrói círculo próprio raramente é grande. É a rotina que só sua: um curso, uma atividade, um trabalho voluntário, o grupo de mães da escola, a academia no mesmo horário todo dia. Coisas em que você aparece com regularidade e as pessoas passam a te conhecer pelo seu nome e pelo que você faz, e não por quem é seu marido.",
      "Isso costuma exigir um empurrão desconfortável, porque no começo é tudo constrangedor: você fala mal a língua, não conhece os códigos, e é bem mais fácil ficar em casa. Vale ir mesmo assim. Círculo social não se forma por afinidade instantânea, se forma por repetição.",
      "E tem um ponto que vale nomear: isso não é vaidade nem capricho. Ter uma vida própria naquele lugar é o que sustenta a mulher quando algo dá errado, e é também o que torna o casamento mais leve, porque tira dele o peso de ser a única fonte de mundo dela.",
      "Na WiseHub tem muita mulher que passou exatamente por isso, nos nove países acompanhados, e a conversa ali costuma ser bem prática: por onde cada uma começou, o que funcionou naquele país, quanto tempo levou até ter gente sua. Vale ouvir de quem já está do outro lado.",
      "Uma coisa é honesta dizer: se a sensação de estar sumindo dentro da própria vida for pesada e constante, isso merece profissional, não só conversa de grupo. A gente caminha junto, não substitui apoio clínico.",
      "Comece por uma coisa só, que seja sua e que se repita toda semana. É assim que se deixa de ser a esposa do fulano naquele lugar."
    ],
    "palavras": 455
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
      "Existe uma cobrança silenciosa em cima de quem acabou de mudar de país: a de estar feliz.",
      "Você lutou pra chegar, sonhou com isso, contou pra todo mundo. Aí você chega e sente um vazio estranho, e vem a culpa junto.",
      "Quero te dizer que isso é comum e não significa que você errou. Adaptação tem uma fase que não tem nada de encantadora. É cansaço, é burocracia, é não entender nada, é sentir falta de coisas bobas.",
      "Gostar de um lugar leva tempo, porque gostar depende de pertencer, e pertencer se constrói.",
      "Na WiseHub tem gente que passou por esse começo sem graça e hoje ama onde mora. Se o vazio virar peso que não passa, isso é conversa pra profissional, não pra grupo."
    ],
    "palavras": 125
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
      "Ninguém te prepara pra isso: algumas amizades não atravessam a mudança.",
      "Não tem briga, não tem motivo. Aos poucos as mensagens ficam mais raras, os assuntos param de coincidir, e um dia você percebe que já faz meses.",
      "Dói mais do que parece, porque a gente esperava perder o país, não as pessoas.",
      "Uma coisa que ajuda a entender: amizade se sustenta muito no cotidiano compartilhado, e é exatamente isso que a distância tira. Não é falta de amor, é falta de rotina em comum.",
      "Algumas voltam com o tempo, e várias voltam diferentes. E aparecem outras, que você ainda não conhece.",
      "Na WiseHub tem gente que já sentiu isso e continuou. Não devolve o que passou, mas ajuda saber que não é você que está fazendo algo errado."
    ],
    "palavras": 129
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
      "Tem uma cena que acontece em quase toda família imigrante, e ela é mais complicada do que parece. A criança aprende a língua nova primeiro, e vira a intérprete da casa.",
      "No começo até tem graça. Ela pede na padaria, explica pro vizinho, corrige a sua pronúncia rindo. A família comemora, e é justo comemorar, porque é sinal de que ela está se adaptando.",
      "O problema começa quando isso deixa de ser eventual e vira função. Quando ela é chamada pra traduzir a conversa com o médico. Pra explicar o que o dono do apartamento está dizendo. Pra ajudar a mãe a entender um documento. Nessas horas, uma criança está carregando informação de adulto e responsabilidade de adulto, e ela não tem estrutura pra isso.",
      "Duas coisas costumam acontecer com ela, e as duas são silenciosas. A primeira é ansiedade, porque ela percebe que se errar a tradução alguma coisa importante da família dá errado. A segunda é uma inversão de papéis desconfortável, onde ela passa a se sentir responsável pelos pais, e crianças que assumem esse lugar cedo costumam ter dificuldade em voltar a ser cuidadas depois.",
      "Também tem um efeito no adulto, e esse a gente não fala. Quando existe alguém que resolve, a pressão pra aprender a língua diminui. Muita mãe fica anos numa dependência confortável do filho, e depois se vê sem autonomia justamente quando ele cresce e sai de casa.",
      "O ajuste não precisa ser dramático. É separar o que é ajuda cotidiana, que pode continuar e até é boa, do que é assunto de adulto, que não deve passar por ela. Consulta médica, dinheiro, documento, conflito com terceiros, isso é dos pais. Em muitos lugares existe direito a intérprete em serviço de saúde e em serviço público, e vale perguntar antes de levar a criança como tradutora.",
      "E o passo que resolve de verdade, mesmo que devagar, é a mãe estudar a língua. Não pra falar bonito, pra conseguir se virar sozinha no essencial. Meia hora por dia muda o jogo em alguns meses, e devolve pra ela uma coisa que a mudança tirou, que é a capacidade de resolver a própria vida.",
      "Na WiseHub tem muita mulher exatamente nesse ponto, em vários dos nove países acompanhados, e a troca ali costuma ser sobre isso: por onde começou, o que funcionou de fato, como encaixou estudo numa rotina que já está cheia. Se existe apoio gratuito de língua na sua região, isso você confirma nos canais oficiais locais, que variam bastante de lugar pra lugar.",
      "Deixe seu filho ser criança. Ele pode ajudar, mas não pode ser o adulto responsável pela comunicação da família."
    ],
    "palavras": 440
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
      "Antes de mudar de país, o casal conversa sobre muita coisa. Cidade, escola, orçamento, prazo. E quase nunca conversa sobre a única coisa que vai decidir o clima dentro de casa no primeiro ano: quem faz o quê.",
      "Parece pequeno, mas não é. Quando a família chega, aparece uma quantidade absurda de tarefas novas que não existiam antes, e elas não vêm com nome de responsável. Abrir conta, entender contrato de aluguel, matricular criança, achar pediatra, decifrar sistema de saúde, resolver documento, descobrir transporte, aprender onde se compra cada coisa. Isso é um segundo emprego, e ele aparece exatamente no momento em que uma pessoa da casa já começou o primeiro.",
      "O que costuma acontecer é silencioso e injusto. Quem tem horário de trabalho fixo fica com o trabalho pago, e todo o resto escorre pra quem está com a agenda \"livre\". Só que a agenda não estava livre, ela estava sem nome. E aí, semanas depois, uma pessoa está exausta e a outra genuinamente não entende por quê, porque do lado de fora não parece trabalho.",
      "O segundo movimento é ainda mais delicado. Quem assume essa carga vai acumulando um conhecimento que ninguém mais tem: só ela sabe onde ficam os documentos, como se marca consulta, qual é o prazo de tal coisa. Isso parece competência, e é, mas também é uma armadilha, porque torna impossível dividir depois. A tarefa gruda em quem começou.",
      "Tem um jeito de evitar isso, e ele precisa acontecer antes da mudança. Sentar os dois e listar as frentes, não as tarefas soltas. Saúde é de quem. Escola é de quem. Burocracia é de quem. Casa é de quem. E combinar que a pessoa responsável por uma frente é responsável de verdade, incluindo pesquisar e decidir, não apenas executar o que a outra mandou.",
      "Uma coisa que ajuda muito e quase ninguém faz: marcar uma conversa fixa, curta, uma vez por semana, só sobre logística da família. Sem cobrança e sem discussão de relação, só o que precisa ser feito e por quem. Parece burocrático demais pra casamento, e é exatamente por parecer que quase todo mundo pula e depois briga.",
      "Essa é uma das conversas mais recorrentes entre as mulheres da WiseHub, nos nove países acompanhados, porque o padrão se repete em todos eles. Ouvir de quem já está dois anos à frente como resolveu a divisão em casa costuma poupar meses de desgaste.",
      "E vale dizer com clareza: quando o desgaste do casal passa do ponto de logística e vira mágoa acumulada, isso é assunto pra profissional, e não pra grupo. A gente troca experiência, não faz terapia de casal.",
      "Combine antes de embarcar. É uma conversa de uma hora que evita um ano de ressentimento."
    ],
    "palavras": 454
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
      "**[Marcela]** Oi meus amores, meu nome é Marcela Nogueira, e eu estou muito feliz de ter você aqui comigo. Se você sonha com a Espanha, presta atenção nessa.",
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
    "palavras": 348
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
      "**[Marcela]** Oi meus amores, meu nome é Marcela Nogueira, e eu estou muito feliz de ter você aqui comigo. Essa aqui é uma notícia boa, dessas de arrepiar.",
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
    "palavras": 402
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
      "**[Marcela]** Oi meus amores, meu nome é Marcela Nogueira, e eu estou muito feliz de ter você aqui comigo. E hoje eu não vim sozinha.",
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
    "palavras": 389
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
      "Tem uma cena que aperta o coração de qualquer mãe: você deixa seu filho na escola nova sabendo que ele vai passar horas sem conseguir dizer direito o que sente.",
      "Ele vai querer água e não vai saber pedir. Vai se machucar e não vai saber explicar onde dói. Vai ouvir uma piada e rir depois de todo mundo, ou não rir.",
      "Essa fase é real, é desconfortável, e ela é mais curta do que parece de dentro. Criança pega língua em contexto, e escola é contexto o dia inteiro.",
      "O que ajuda é combinar com a escola antes: como eles avisam se algo acontecer, se existe apoio de língua e quem é a pessoa de referência dele nos primeiros meses.",
      "Na WiseHub tem mãe que já viveu esse começo em cada um dos países acompanhados e conta como foi na prática. Como funciona apoio escolar em cada lugar você confirma na própria escola e nos canais oficiais, que é onde a resposta do seu caso mora."
    ],
    "palavras": 167
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
      "O primeiro aniversário do seu filho em outro país tem uma cena que ninguém fotografa: você fazendo tudo sozinha.",
      "Não tem sua mãe pra ajudar com a comida. Não tem sua irmã pra segurar o bolo. Não tem aquele grupo que aparecia uma hora antes pra montar mesa. E não é que faltou gente. É que a sua gente ainda não existe ali.",
      "Isso bate mais forte do que a gente imagina, porque festa de criança é feita de rede, e a rede é justamente o que a mudança desmonta.",
      "Duas coisas ajudam. A primeira é aceitar que a primeira festa vai ser menor, e menor não é pior. A segunda é convidar quem você mal conhece, mesmo com vergonha. É assim que rede começa, com um convite feito antes de existir intimidade.",
      "Na WiseHub tem mães que passaram por esse primeiro aniversário e contam como foi. Não resolve saudade, mas ajuda saber que a próxima festa costuma ter mais gente."
    ],
    "palavras": 161
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
      "Tem um medo que quase toda pessoa que mora fora carrega em silêncio, e ele costuma aparecer de madrugada. É o medo do telefonema. Aquele em que alguém da família adoece e você está a um oceano de distância.",
      "Quero falar disso com cuidado, porque é o tipo de assunto que a gente evita justamente por doer. Só que evitar não protege ninguém, e chegar despreparada nesse momento torna tudo mais difícil do que precisa ser.",
      "A primeira coisa que costuma pegar é a sensação de inutilidade. Você está longe, não pode levar ao médico, não pode dormir no hospital, não pode resolver. E aí vem uma culpa pesada, que sussurra que você escolheu estar longe. Eu queria ser bem clara aqui: cuidar não é só presença física. Organizar informação, coordenar quem vai a qual consulta, entender o que o médico disse e traduzir isso pra família, ajudar financeiramente quando é possível, isso tudo é cuidado, e muitas vezes é o cuidado que a família mais precisa naquele momento.",
      "A segunda coisa é prática, e é sobre a viagem. Quando a notícia chega, todo mundo quer ir imediatamente, e nem sempre imediatamente é o melhor momento. Às vezes o momento em que a família mais vai precisar de você é semanas depois, quando os primeiros socorros passaram e todo mundo já está exausto. Ir de cabeça quente pode gastar o recurso e o tempo que fariam mais diferença adiante. Isso não é frieza, é conseguir estar presente quando presença importa mais.",
      "E tem a parte que ninguém quer olhar antes, mas que muda tudo. Saber, com calma e antecedência, qual é a sua situação de deslocamento. Se o seu documento permite sair e voltar sem risco, se há prazo de processo em andamento que uma viagem atrapalha, quanto tempo você pode ficar fora sem afetar sua residência. Muita gente descobre isso na pior hora possível, com passagem na mão.",
      "Essas respostas dependem do seu status em cada país e não são iguais pra todo mundo. Na WiseHub dá pra entender como isso funciona nos nove países acompanhados e ouvir de quem já teve que viajar às pressas o que aprendeu, inclusive sobre o que deixar organizado antes de precisar. O que vale pro seu caso específico, principalmente se houver processo em andamento, quem responde é advogado, sempre.",
      "E quando a dor for maior que o que a família consegue segurar sozinha, isso é hora de profissional de saúde, não de grupo. A gente caminha junto, não substitui cuidado clínico.",
      "Deixe isso organizado enquanto está tudo bem. Não é atrair coisa ruim, é o contrário. É garantir que, se o telefonema vier, você vá gastar sua energia com quem você ama e não com burocracia que podia estar resolvida."
    ],
    "palavras": 458
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
      "Ninguém avisa que mudar de país é montar uma casa duas vezes. A primeira é a que você desmonta, e a segunda é a que você levanta do zero, muitas vezes sozinha, num lugar onde você ainda não sabe onde se compra um martelo.",
      "A parte de desmontar é a que dói de um jeito que surpreende. Você abre armários que estavam fechados há anos e cada objeto vira uma decisão. Isso vai, isso fica, isso eu dou. Só que não é sobre objeto, e é por isso que cansa tanto. É a roupinha que os dois filhos usaram. É a louça da sua mãe. É o desenho pregado na geladeira. Cada escolha dessas custa um pedacinho, e você faz dezenas por dia, enquanto ainda resolve documento, escola e passagem.",
      "Depois vem a segunda casa, e ela começa vazia num sentido que vai além dos móveis. Você não sabe qual mercado tem o que você precisa. Não conhece a farmácia. Não tem aquela vizinha pra quem se pede socorro. Cada coisa banal vira uma pequena expedição, e você faz todas ao mesmo tempo, geralmente enquanto alguém da família já entrou na rotina de trabalho ou de escola.",
      "Tem uma coisa que ajuda de verdade nessa fase, e ela não é organização. É baixar a régua. A casa não precisa estar pronta em um mês. Ela vai levar tempo, e tudo bem que leve. O que precisa funcionar rápido é o essencial, cama, cozinha, banho, rotina das crianças. O resto pode se acomodar devagar, e vai se acomodar melhor quando você já conhecer o lugar.",
      "E tem o lado prático, que é onde a informação certa poupa semanas. Como funciona aluguel naquele país, o que se costuma exigir de garantia, o que já vem mobiliado, o que é normal ou absurdo no preço da região, como se resolve internet, conta de luz, transporte. Essas respostas mudam de país pra país e não estão em lugar nenhum de forma organizada, elas estão na cabeça de quem já fez.",
      "É esse tipo de coisa que a comunidade da WiseHub tem mastigado, nos nove países acompanhados de perto, com gente que montou a segunda casa e lembra exatamente onde perdeu tempo. Dá pra chegar sabendo o que perguntar, em vez de descobrir tudo no susto e na pressa.",
      "Uma coisa eu preciso dizer com honestidade. Nenhuma comunidade resolve contrato de aluguel, exigência de fiador ou questão legal de moradia. Isso depende do país, do seu caso, e às vezes de um profissional. O que a gente faz é encurtar a curva do que é prático e humano.",
      "Se você está no meio da primeira casa, chorando em cima de uma caixa, saiba que isso é normal e que passa. E se você já está na segunda, com metade das coisas ainda no chão, também. Casa não se faz num mês. Se faz morando."
    ],
    "palavras": 479
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
    "titulo": "A primeira vez que ela dirigiu sozinha",
    "paras": [
      "Tem um momento que não aparece em nenhuma lista de como foi se adaptar, e que muita mulher lembra com clareza: a primeira vez que ela dirigiu sozinha no país novo. Sem o marido no banco do carona indicando o caminho, sem aplicativo aberto o tempo todo. Só ela, o carro, e uma rua que já não era mais estranha.",
      "Não parece muito, de fora. De dentro, é a primeira prova de que ela consegue se mover sozinha naquele lugar. Que aquele mapa que só existia na cabeça de outra pessoa já existe também na dela.",
      "Adaptação não chega de uma vez, num anúncio grande. Ela chega em momentos pequenos como esse, que a gente quase deixa passar sem comemorar.",
      "Na WiseHub, mulheres trocam esses momentos pequenos também, não só os grandes marcos. Às vezes é isso que mais ajuda: saber que a primeira vez sozinha ao volante já foi comemorada por outra, antes."
    ],
    "palavras": 154
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
      "Tem uma pergunta que criança pequena faz sem aviso, no meio do jantar, no banho, no carro. Mãe, a gente volta?",
      "Ela não está pedindo uma data. Está testando se o chão embaixo dela é firme. Criança pequena não entende fronteira nem visto, entende se a rotina dela é previsível e se as pessoas que ama estão por perto.",
      "Responder com uma data que você não tem certeza é pior do que não responder. O que acalma de verdade é o que se repete: a mesma hora de dormir, o mesmo boneco na cama, o mesmo colo depois de um dia ruim. É isso que vira chão pra ela, não o endereço.",
      "Na WiseHub, mães trocam justamente isso: como responder essa pergunta sem prometer o que não sabem, e como construir previsibilidade num lugar novo. Ninguém aqui garante como o seu filho vai reagir. Cada criança processa mudança no próprio tempo, e isso, às vezes, também é hora de conversar com um profissional."
    ],
    "palavras": 163
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
      "Tem uma pergunta que aperta o peito de muita mulher depois que os filhos crescem um pouco e a rotina de casa afrouxa: e agora, como eu volto pro mercado, se nem sei mais como ele funciona, e ainda por cima nesse país que não é o meu?",
      "O medo tem camada dupla. Uma é a pausa em si: anos fora do mercado formal mexem com a confiança de qualquer pessoa, em qualquer país. A outra é o lugar novo: além de voltar, ela precisa entender as regras de um mercado que nunca trabalhou, muitas vezes numa língua que ainda está treinando.",
      "O erro mais comum nessa hora é achar que o currículo tem que explicar os anos de casa como se fossem um vazio a esconder. Não são. Administrar casa, rotina de filhos e mudança de país exige organização, resolução de problema sob pressão e gestão de múltiplas frentes ao mesmo tempo, competências que qualquer área valoriza, quando descritas do jeito certo.",
      "O caminho de volta costuma passar por um degrau, não por um salto. Um curso curto que atualiza uma ferramenta específica. Um trabalho parcial ou voluntário que devolve rotina e referência recente. Uma conversa com quem já contrata na área dela, naquele país, pra entender o que pesa mais na hora da entrevista. Esse degrau é mais curto do que parece de longe, mas fica invisível pra quem está sozinha tentando enxergar o caminho inteiro de uma vez.",
      "Na WiseHub tem mulheres que voltaram a trabalhar depois da pausa, em cada um dos nove países acompanhados, contando qual foi o primeiro passo real que deram, não o currículo perfeito que gostariam de ter tido. Dá pra perguntar numa live o que pesou na entrevista dela, o que ela faria diferente, por onde ela começaria se fosse hoje.",
      "Nenhuma comunidade garante vaga nem entrevista. Currículo, direito trabalhista e revalidação de diploma, quando exigida, são conversa pra profissional da área. O que existe aqui é o mapa de quem já andou o caminho e sabe onde ele aperta.",
      "Anos em casa não apagaram sua capacidade de trabalhar. Eles só mudaram o ponto de partida. E ponto de partida diferente não é o mesmo que não ter caminho."
    ],
    "palavras": 368
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
    "titulo": "O trabalho que ninguém vê ela fazendo",
    "paras": [
      "Quando a família muda de país, alguém tem que descobrir a escola, marcar a consulta médica, entender o transporte, achar o mercado que vende o tempero certo, aprender o sistema de coleta de lixo, fazer amizade com a vizinha pra ter alguém a quem recorrer numa emergência. Na maioria das famílias, esse alguém é a mulher.",
      "Esse trabalho não aparece em nenhuma conversa sobre como foi a mudança. Ele não tem linha no currículo, não gera contrato, não sai em post de conquista. E é ele que decide se a família cria raiz de verdade ou fica flutuando no país novo, sem chão.",
      "Tem um nome pra isso: infraestrutura social. É o conjunto de pequenas coisas que fazem um lugar virar casa, e alguém precisa construir do zero, sozinha, ao mesmo tempo em que tenta lidar com a própria adaptação. Enquanto o marido entra no primeiro dia de trabalho, ela está montando o resto da vida, sem folga combinada com ninguém.",
      "Quando essa mulher diz que está cansada, a resposta mais comum que ela escuta é que ela nem trabalha ainda. Essa frase erra o alvo inteiro. Ela está trabalhando, só que num trabalho que não tem contracheque nem reconhecimento, e que é, sem exagero, o que sustenta a adaptação de todo mundo em casa.",
      "Esse peso fica mais leve quando divide de forma explícita, não perguntando se ela precisa de ajuda, pergunta que costuma virar não automático, mas combinando tarefa por tarefa antes da mudança acontecer. E fica mais leve também quando ela encontra outras mulheres que já fizeram exatamente essa lista, no mesmo país, e sabem quais atalhos existem.",
      "Na WiseHub essa troca acontece entre mulheres que já resolveram escola, saúde e rotina em cada um dos nove países acompanhados, e contam o caminho mais curto que aprenderam na marra. Ninguém aqui resolve a burocracia da sua família à distância, isso depende de cada caso e muitas vezes de advogado, mas dá pra chegar sabendo o que perguntar, em vez de descobrir tudo sozinha, no susto.",
      "Se você é essa mulher, o trabalho que você está fazendo tem nome, e ele sustenta a casa tanto quanto qualquer salário. Ele só ainda não tem o reconhecimento que merece."
    ],
    "palavras": 369
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
      "Ninguém te prepara pra isso, e acontece cedo ou tarde.",
      "Você está no supermercado de um país novo, empurrando o carrinho, tudo bem. Aí você vê alguma coisa. Um pacote parecido com o que a sua mãe comprava. Ou o cheiro errado no corredor certo. E do nada os olhos enchem, no meio do arroz, sem aviso.",
      "A saudade não chega nas datas grandes, onde a gente espera. Ela chega assim, numa quarta-feira qualquer, num detalhe minúsculo que só significa alguma coisa pra você.",
      "Chorar ali é o que raiz faz quando encosta em alguma coisa conhecida.",
      "Aqui dentro a gente fala disso também, com gente que já chorou no mercado e continuou. Se a saudade virar peso que não passa, isso é conversa pra profissional, não pra grupo. Pro resto, tem quem entenda por que era o arroz."
    ],
    "palavras": 139
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
      "Você muda de país, e um dia abre o celular e vê a foto. O aniversário, a mesa cheia, todo mundo que você ama junto. E você não está.",
      "Aí vem uma pergunta feia, dessas que a gente não fala em voz alta: será que valeu a pena?",
      "Eu queria te dizer uma coisa sobre essa pergunta. Ela sempre chega num dia ruim, nunca num dia bom. Ela põe a sua terça-feira cansada contra a melhor noite da vida de outra pessoa, editada e escolhida. Chamar aquilo de comparação é generoso demais. Aquilo é uma emboscada.",
      "A saudade é real e merece respeito. Só não deixe ela julgar a sua decisão inteira sozinha, num dia em que você estava no fim das forças.",
      "Aqui dentro tem gente que já sentiu isso e continuou. Quando essa pergunta parar de ir embora, ela vira assunto de terapeuta, e a gente não faz esse papel. Enquanto ela só passa de vez em quando, você tem com quem dividir."
    ],
    "palavras": 165
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
      "Toda mãe que muda de país com filho pequeno ouve a mesma frase: criança se adapta rápido. Muitas vezes é verdade. Mas e quando o filho tem quinze?",
      "Aí é outra história, e eu queria que mais gente falasse dela. A criança pequena vai onde a família vai, porque o mundo dela é a família. O adolescente já tem mundo próprio. Ele tem grupo, tem apelido, tem uma reputação que levou anos construindo, tem uma pessoa de quem gosta e não te contou. Ele está deixando pra trás a versão dele que só existe naquele lugar, com aquelas pessoas. Quarto se remonta. Aquilo não.",
      "Por isso a reação costuma ser mais dura, e mais parecida com raiva do que com tristeza. E a raiva dele tem lógica. Ele não escolheu, é velho o bastante pra entender o tamanho da perda, e novo o bastante pra não ter voto. Essa combinação é cruel, e quando a mãe interpreta aquilo como ingratidão, os dois se afastam bem na hora em que mais precisavam um do outro.",
      "Uma coisa costuma ajudar, e ela custa: dar a ele alguma coisa real pra decidir. Não a decisão de ir, que não é dele. Mas o bairro, entre dois possíveis. A escola, entre duas. Como vai ser a rotina com os amigos daqui, com horário combinado e respeitado. Quando ele participa de escolhas de verdade, ele para de ser bagagem e vira parte. Isso não apaga a dor, mas muda a posição dele dentro dela.",
      "E tem a parte concreta, que muda de país pra país e vale saber antes. Como funciona a escola na idade dele. Se existe apoio de língua pra quem chega mais velho. Em que ano letivo ele cai, e se aquele sistema tem prova que decide caminho, e com que idade. Adolescente que chega no meio de um ciclo escolar mal escolhido perde ano, e isso ninguém avisa na hora de escolher o destino.",
      "Essas respostas são chatas de caçar sozinha, e é uma das coisas que a comunidade já tem mastigado: como a educação funciona em cada um dos nove países, na idade que interessa pra você. Você organiza o passo a passo com calma, pergunta na live pra quem entende do sistema de lá, e sobretudo escuta mãe que já atravessou isso com um adolescente batendo porta em casa.",
      "E quando a dor dele passar do tamanho que a família dá conta, isso é hora de profissional, não de comunidade. Nada que a gente conversa aqui ocupa o lugar de um psicólogo, e ninguém aqui vai te dizer que a adaptação dele vai ser tranquila, porque a gente não sabe.",
      "Se o seu filho está com raiva de você por causa dessa mudança, olha essa raiva de perto. Por baixo dela tem luto, e ele ainda não tem palavra pra isso. Segura a mão dele mesmo quando ela estiver fechada. E procura quem já segurou uma dessas."
    ],
    "palavras": 488
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
      "Tem uma palavra que aparece no processo de imigração e que machuca mais do que parece. Dependente.",
      "É um termo técnico, frio, de formulário. O visto sai no nome de quem tem o contrato de trabalho, e quem vai junto entra como dependente. Cônjuge dependente. Filhos dependentes. Faz sentido burocrático, e ninguém escreveu aquilo pra ferir ninguém. Mas você lê e alguma coisa afunda. Porque você não depende de ninguém. Você é adulta, é competente, sustentou casa, tomou decisão difícil, e de repente está num papel que te chama de anexo.",
      "E às vezes o papel contamina a vida. Ele chega antes de você, e vai te esperando lá. É a conta bancária que pede a assinatura dele. É o telefone da escola que liga primeiro pro nome que está no contrato. É a pergunta na roda, com toda a inocência do mundo: e você, o que faz? E você trava, porque a resposta honesta naquele mês é que você está montando uma casa num país que não conhece, com uma língua que ainda te cansa, e isso não tem nome de profissão.",
      "Eu quero te dizer uma coisa com clareza. Aquele campo do formulário responde uma pergunta só: quem assinou o contrato de trabalho. É toda a informação que ele carrega. Quem você é, e quem você vai ser lá, fica fora do alcance daquela linha.",
      "Agora, o lado prático de virar esse jogo começa antes de embarcar. A regra que diz se você pode trabalhar, e a partir de quando, está escrita de um jeito diferente em cada país. Muita mulher descobre isso tarde, quando já está lá. Junto com ela vem a pergunta da revalidação: se a sua profissão exige, quanto tempo leva, e o que dá pra adiantar daqui.",
      "Essas duas respostas mudam o seu primeiro ano inteiro, e elas existem. Na WiseHub elas ficam à mão: o que o visto de acompanhante autoriza em cada um dos nove países, e o que o mercado de lá costuma pedir de quem vem de fora. Dá pra levantar isso com calma ainda daqui, perguntar numa live pra quem lida com esses processos todo dia, e chegar em parceiro verificado com condição especial se virar caso jurídico. Do lado, mulheres que já leram a própria palavra \"dependente\" num formulário e construíram vida própria depois dela.",
      "Preciso ser exata numa coisa. Nenhum conteúdo aqui muda o que está escrito no seu visto, nem antecipa em um dia a data em que ele te libera pra trabalhar. Quem lê o seu caso e responde por ele é advogado. A comunidade te ajuda a saber o que perguntar, e caminha junto enquanto a resposta não chega.",
      "Papel é papel. Do lado de cá tem mulher que já leu essa palavra no próprio formulário e construiu vida inteira depois dela. A sua vaga nessa conversa está aberta."
    ],
    "palavras": 475
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
      "Tem um casal em que um quer muito ir e o outro sorri e muda de assunto. Os dois acham que estão sendo generosos. Um não quer pressionar, o outro não quer ser o motivo de o sonho não acontecer. E a conversa que decide a vida dos dois vai ficando para depois.",
      "Só que visto não resolve casamento. Documento aprovado com um dos dois em dúvida põe uma família inteira do outro lado do mundo com uma conversa por terminar.",
      "O que costuma destravar é sair do sim ou não e ir para o concreto. Como seria a nossa rotina lá. O que cada um perde, o que cada um ganha. O que precisa ser verdade para os dois quererem.",
      "É esse tipo de conversa que acontece aqui dentro, com casais que já passaram por ela. A gente não promete visto nem resultado, e nada disso substitui um profissional quando o caso pedir. Só ajuda vocês dois a chegarem na mesma página antes do carimbo."
    ],
    "palavras": 166
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
      "Quando a gente fala em mudar de país, fala da coragem de quem vai. E quem fica?",
      "Da sua mãe, que vai aprender a te ver por uma tela. Do seu pai, que vai contar os meses até o próximo abraço. Dos avós que vão perder o cotidiano do neto, o dente que caiu, o primeiro dia de aula, e vão sorrir e dizer que está tudo bem, porque querem o seu bem mais do que querem a própria companhia.",
      "Se você sente culpa disso, é porque você ama. Culpa e amor andam bem juntos nessa hora.",
      "E dá para cuidar desse laço com plano, com rotina, com presença combinada, do mesmo jeito que a gente cuida de documento e de custo. Aqui dentro a gente conversa sobre isso também, com gente que já atravessou. Nada do que a gente conversa substitui um profissional quando a dor pede, e ninguém aqui promete que vai ser fácil. Mas você não atravessa sozinha."
    ],
    "palavras": 161
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
      "Toda mãe que pensa em mudar o país da família chega numa pergunta que aperta o peito. Como vai ser para o meu filho. E tem uma parte da resposta que eu demorei a entender, e que muda o jeito de olhar tudo. O tempo da criança é diferente do seu.",
      "O adulto adapta pela lógica. Ele entende o motivo da mudança, ele fez a conta, ele escolheu. Então ele aguenta o desconforto, porque o desconforto tem sentido. A criança não escolheu nada. Ela foi. E ela adapta pelo corpo e pelo vínculo. Explicar para uma criança que aquela mudança é boa para o futuro dela resolve muito pouco, porque futuro é um conceito de adulto. O que ela sente é o presente, e no presente ela perdeu a professora, o quarto, o cheiro da casa da avó e a única língua em que ela sabia fazer piada.",
      "Por isso a curva dela costuma ser diferente. Muitas vezes ela vai parecer bem nos primeiros meses e desabar depois, quando a novidade passa e a saudade chega. Ou o contrário, sofrer no começo e florescer de um jeito que te surpreende. Tem criança que passa meses quieta na escola nova, absorvendo som, e um dia abre a boca falando a língua inteira. Isso é processo, e o processo tem o tempo dele. Quando a mãe não sabe que existe processo, ela se culpa. Ela olha o filho calado e pensa que arruinou a vida dele.",
      "Talvez não tenha arruinado. Talvez ele só esteja no meio do caminho.",
      "E eu preciso ser honesta com você aqui. Não existe país onde a criança não sofre. O que existe é chegar preparada. Saber como funciona a escola de lá, se existe apoio de língua para aluno estrangeiro, em que mês começa o ano letivo, o que a rede pública oferece e o que não oferece. Isso é informação concreta, ela existe, e ela muda o tamanho da surpresa que espera por você.",
      "E ajuda outra coisa, que nenhum documento oficial entrega. Ouvir uma mãe que já atravessou aquilo contar como foi com a filha dela. Isso não resolve o processo do seu filho, cada criança é uma, mas tira você do escuro. E quando a adaptação preocupa de verdade, existe profissional para isso, e conversa de comunidade nunca substitui esse acompanhamento.",
      "É essa a WiseHub. Uma família que cresce junto, com método para organizar o caminho passo a passo, lives para você perguntar para quem entende, parceiros verificados com condições especiais quando o caso pede apoio jurídico, e sobretudo gente que já esteve onde você está. A gente não promete visto, nem que a adaptação vai ser tranquila.",
      "Se você está com medo pelo seu filho, esse medo tem mais de cuidado do que de aviso. Só não carregue ele sozinha, e não confunda o tempo dele com fracasso seu. Vem atravessar isso perto de quem entende o tamanho."
    ],
    "palavras": 485
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
      "Quero conversar com a mulher que está no meio de uma decisão de mudança e que carrega uma pergunta que raramente encontra espaço na mesa de casa. E eu, como fico nessa história.",
      "Porque a conversa sobre mudar de país costuma girar em torno do visto, do custo, da escola das crianças, da carreira de quem tem o contrato de trabalho no nome. E aí tem você, que construiu uma carreira durante anos, com competência, com noites mal dormidas, com uma reputação que as pessoas ao seu redor reconhecem. E de repente essa carreira inteira não cabe na mala. Ela não atravessa. Do outro lado, o seu nome ainda não diz nada para ninguém.",
      "Isso dói, e a dor tem nome. Chama-se luto. Você está de luto por uma versão sua que era competente, requisitada, segura do próprio valor. E ninguém prepara a mulher para esse luto, porque todo mundo está ocupado te dizendo o quanto aquela mudança vai ser boa para as crianças. E vai ser. Mas você também está indo.",
      "Eu quero te dizer o que costuma ficar de fora dessa conversa. Recomeçar parece voltar à estaca zero, e não é a mesma coisa. O que se perde é o contexto, a rede, o reconhecimento local. O que não se perde é o que você é. A sua capacidade de resolver, de ler gente, de sustentar um projeto de pé. Isso viaja com você.",
      "E tem uma parte prática que ajuda a diminuir o tamanho do escuro. Saber, antes de embarcar, se a sua profissão exige revalidação naquele país, o que a sua área costuma pedir de quem chega de fora, como aquele mercado enxerga uma pausa no currículo. Isso serve para você chegar sabendo onde pisa, em vez de descobrir tudo já cansada, num país novo, com a casa para montar.",
      "É esse silêncio que a WiseHub quebra. A comunidade acompanha nove países e mais de cem vistos, e olha o mercado de trabalho junto com a parte migratória, a economia, a educação e a saúde, porque é isso que decide como vai ser a sua vida lá, não só a sua entrada. Você organiza o seu passo a passo com calma, leva as dúvidas para as lives com profissionais, e quando o caso pede, chega a parceiros verificados com condições especiais. E do lado, o que mais importa, mulheres que já reconstruíram carreira do outro lado e conhecem os buracos do caminho.",
      "E aqui eu não vou te vender facilidade. A WiseHub não consegue te dar visto, não consegue te dar emprego e não vai fazer isso acontecer rápido. O que ela faz é te dar método, informação atual, acolhimento e companhia. O conteúdo é educativo, ajuda você a enxergar o caminho, e não ocupa o lugar de um profissional habilitado quando o seu caso pedir.",
      "Se você está prestes a atravessar isso, se permita sentir o tamanho do que está deixando para trás. E depois, se permita reconstruir cercada de mulheres que já fizeram esse mesmo caminho. A porta está aberta, e tem gente aqui dentro que conhece essa dor."
    ],
    "palavras": 515
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
    "titulo": "Existe um lugar onde a saudade encontra gente que entende — Short",
    "paras": [
      "Tem uma solidão específica em querer uma vida em outro país. É a solidão de olhar em volta e sentir que ninguém perto de você entende bem o que se passa aí dentro. A mistura de esperança, medo e saudade antecipada de um lugar que você ainda nem deixou.",
      "Eu queria que você soubesse que existe um lugar onde essa mistura toda encontra gente que entende. Onde a sua dúvida vira conversa, o seu medo vira plano, e a sua saudade encontra quem já sentiu a mesma coisa e seguiu em frente.",
      "A WiseHub é esse lugar. Não é sobre estar certa o tempo todo. É sobre não caminhar sozinha. E quem descobre esse acolhimento raramente quer voltar a ficar de fora. Te espero lá dentro."
    ],
    "palavras": 126
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
    "titulo": "Você não precisa ser forte o tempo todo — Short",
    "paras": [
      "Para a mulher que está segurando a decisão de mudar o país da família inteira nos ombros, eu queria dizer uma coisa. Você não precisa ser forte o tempo todo, e não precisa saber de tudo sozinha.",
      "Tem uma diferença enorme entre atravessar isso na base do achismo, contando cada medo em silêncio, e atravessar cercada de gente que entende. Mães que já mudaram, mulheres que reconstruíram a vida do outro lado, famílias que já passaram pela escola nova e pela saudade e sobreviveram para contar.",
      "É isso que a WiseHub é, uma família que cresce junto, com método para organizar o caminho e colo para as horas difíceis. A gente não promete que vai ser fácil. A gente promete que você não vai estar só. E isso, para uma mãe, já é quase tudo. Te espero lá dentro."
    ],
    "palavras": 139
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
      "Nem toda mudança nas regras de imigração é uma má notícia. Às vezes, é o contrário. Às vezes, um país reescreve os seus caminhos e abre uma porta que estava fechada, e muitas famílias que se encaixam nessa porta seguem a vida inteira sem descobrir que ela abriu.",
      "A Espanha é um exemplo recente e bonito disso. O país reformou o seu regulamento de estrangeiros e tornou mais claros e mais acessíveis os caminhos ligados à família, à reunião de quem se ama e à regularização de quem já construiu uma vida por lá. Para muita gente que sonhava em levar a família junto, ou em reencontrar quem já foi na frente, o terreno ficou mais gentil do que era. E, no entanto, quantas dessas famílias sabem disso a tempo de agir.",
      "Esse é o ponto que me toca. A informação que muda uma vida existe, ela está lá, mas ela chega para tão poucas pessoas, e quase sempre tarde. Fica escondida em documento oficial, em outra língua, em meio a uma burocracia que assusta. E enquanto isso, uma família que se encaixava perfeitamente adia o sonho por mais um ano, achando que o caminho era mais difícil do que passou a ser.",
      "É contra esse silêncio que a WiseHub trabalha, todos os dias. A comunidade acompanha o que se move em nove países e mais de cem vistos, e traduz a mudança para a vida real, o que ela significa para você, para os seus filhos, para o seu recomeço. A informação importante não fica presa num portal frio, ela chega até você com contexto, com cuidado, e com a leitura de quem está vivendo aquilo agora.",
      "E é essa última parte que faz a diferença que nenhum site consegue fazer. Ao lado da notícia, tem uma mãe que já passou por aquele processo, um casal que já reuniu a família, alguém que pega na sua mão e diz por onde começar. Informação a tempo, somada a gente que já trilhou o caminho, é o que transforma uma boa notícia distante numa decisão possível para a sua família.",
      "Com a honestidade de sempre, porque é assim que a gente cuida de você. A WiseHub não promete visto nem resultado. Ela entrega informação atual, contexto e acolhimento, e o conteúdo é educativo, não substitui a orientação de um profissional habilitado quando o seu caso exigir.",
      "O mundo está mudando as regras o tempo todo, e nem sempre para pior. A pergunta é se você vai ser das primeiras a saber, ou das últimas. Aqui dentro, você fica do lado de quem sabe primeiro, e nunca sozinha. Te espero lá."
    ],
    "palavras": 439
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
      "Quero conversar com quem não está pensando em mudar de país só por si, mas com a família inteira junto. Porque, quando é assim, o peso é outro, e o medo tem outro tamanho.",
      "Uma coisa é você arriscar a sua própria adaptação. Outra, bem diferente, é deitar a cabeça no travesseiro pensando no seu filho. Será que ele vai se adaptar na escola nova. Será que vai fazer amigos, aprender a língua sem sofrer, sentir que pertence àquele lugar. Será que estou tirando as raízes dele cedo demais, ou dando a ele um mundo maior. Essas perguntas não aparecem nas planilhas de custo de vida, mas são elas que apertam o coração de mãe e de pai de madrugada.",
      "E tem a mulher que, no meio disso tudo, também está recomeçando. Que deixa para trás uma carreira construída, uma rede de apoio, a mãe por perto, as amigas de sempre, e precisa reconstruir tudo isso do zero, muitas vezes cuidando de todos antes de cuidar de si. Ninguém fala o suficiente sobre esse recomeço silencioso, e ele é um dos mais corajosos que existem.",
      "Eu não vou te dizer que é fácil, porque não é. Mas vou te dizer o que faz toda a diferença. Você não precisa carregar isso sozinha. Foi para segurar a mão de quem está nessa travessia que a WiseHub existe. Ela não é um feed de notícias soltas, é uma família que cresce junto, com gente em todas as etapas do mesmo caminho. Mães que já mudaram e sabem exatamente onde dói. Mulheres que reconstruíram a carreira do outro lado e voltaram para contar como. Famílias que já passaram pela escola nova, pela saudade, pela primeira festa junina longe de casa, e que estendem a mão para quem está começando agora.",
      "Dentro dela, a sua decisão deixa de ser um salto no vazio e vira um plano construído com calma, passo a passo, olhando o que importa de verdade, a documentação, o custo de vida, o trabalho, o idioma, a escola das crianças, e também o seu recomeço. Você tira dúvidas reais nas lives, com profissionais e com quem já viveu aquilo. E quando o caso pede apoio jurídico, você chega através de parceiros verificados, com condições especiais, acolhida, não perdida.",
      "Preciso ser honesta com você, com todo o carinho. A WiseHub não promete visto, nem ganho, nem que tudo vai ser simples. O que a gente entrega é método, contexto, acompanhamento e, acima de tudo, companhia. O conteúdo é educativo, ajuda você a enxergar caminhos e riscos, e não substitui um profissional habilitado quando o seu caso pedir.",
      "Se você está carregando essa decisão pela família inteira, respira. Você não precisa saber de tudo, e não precisa fazer sozinha. Vem construir isso com gente que entende o tamanho do que você está sentindo. A porta está aberta, e eu te espero lá dentro."
    ],
    "palavras": 480
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
    "titulo": "O mundo virou um mapa de oportunidades, e quase ninguém sabe ler esse mapa — Short",
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
    "titulo": "Vou conseguir sustentar minha família lá fora? — Short",
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
  }
];

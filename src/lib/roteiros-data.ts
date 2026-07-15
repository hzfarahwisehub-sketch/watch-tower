// GERADO por scripts/parse-lotes.py a partir dos lotes em
// "D:\\FRIDAY-BRAIN\\05 - Conteúdo\\Roteiros Fundadores". NÃO editar à mão:
// a fonte da verdade é o .md do lote, escrito e revisado pela Friday.
//
// Por que os roteiros moram no repo (e não no banco): é o mesmo padrão do
// editorial.ts — conteúdo curado pela Friday, versionado no Git, publicado no
// deploy (REGRA 4). Sem IA no servidor, e o histórico de cada lote fica no log
// do Git em vez de sumir numa linha de tabela.

export type RoteiroFormato = "longo" | "curto";

export type Roteiro = {
  /** `<data>-<n>` — estável, serve de chave de "já usei este". */
  id: string;
  /** AAAA-MM-DD do lote. */
  date: string;
  lote: number;
  n: number;
  /** "Lucas" | "Marcela" */
  persona: string;
  /** "YouTube" | "Reels" | "Instagram" */
  canal: string;
  formato: RoteiroFormato;
  titulo: string;
  /** Corpo já quebrado em parágrafos, na ordem de leitura. */
  paras: string[];
  palavras: number;
};

export const ROTEIROS: Roteiro[] = [
  {
    "id": "2026-07-14-08",
    "date": "2026-07-14",
    "lote": 2,
    "n": 8,
    "persona": "Marcela",
    "canal": "Instagram",
    "formato": "curto",
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

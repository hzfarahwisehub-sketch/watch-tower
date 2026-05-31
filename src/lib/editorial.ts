/**
 * Conteúdo editorial CURADO pela Friday (redação WiseHub), país a país.
 *
 * Diferente dos dados técnicos (boletins + RSS cru), aqui mora a NOTÍCIA já
 * redigida, fluida e pronta pra publicar, separada nos três destinos que a
 * operação usa:
 *
 *   📣 community  → posts curtos e objetivos pra Comunidade (Circle)
 *   📰 countryTab → notícia completa pra aba de cada país no Watch Tower
 *   📝 blog       → matéria aprofundada pro Blog WiseHub News
 *
 * Os números refletem o monitoramento e a curadoria da equipe WiseHub; cada
 * peça traz a fonte oficial pro leitor conferir. A Friday atualiza este arquivo
 * na curadoria diária; o relatório (REPAVET) e, depois, o app montam a partir
 * daqui. NUNCA usar travessão no meio das frases (padrão de escrita do Hammis).
 */

export type EditorialSource = { label: string; url: string };

/** Post curto pra Comunidade: objetivo, claro, explicativo. */
export type CommunityPost = {
  title: string;
  /** 1 a 2 parágrafos curtos. Parágrafos separados por linha em branco. */
  body: string;
  /** chamada pra ação (opcional). */
  cta?: string;
  sources?: EditorialSource[];
};

/** Notícia completa pra aba do país: formato jornalístico. */
export type CountryArticle = {
  headline: string;
  /** linha-fina (subtítulo que resume a matéria). */
  standfirst: string;
  /** corpo da matéria. Parágrafos separados por linha em branco. */
  body: string;
  /** dados-chave em bullets (opcional). */
  keyFacts?: string[];
  sources?: EditorialSource[];
};

/** Matéria pro Blog WiseHub News: mais longa e analítica. */
export type BlogPost = {
  headline: string;
  standfirst: string;
  body: string;
  tags?: string[];
  sources?: EditorialSource[];
};

export type CountryEditorial = {
  community: CommunityPost[];
  countryTab: CountryArticle[];
  blog: BlogPost[];
};

/** Texto-guia que abre a seção editorial do relatório. */
export const EDITORIAL_GUIDE = [
  "Este documento separa o conteúdo em três destinos de publicação. Use cada peça onde ela rende mais:",
  "",
  "📣 PARA A COMUNIDADE (Circle): posts curtos, diretos e explicativos. Servem pra avisar e engajar rápido. Copie, ajuste o tom se quiser e publique.",
  "",
  "📰 PARA A ABA DO PAÍS (Watch Tower): a notícia completa, com contexto e dados-chave. É a versão de referência que fica registrada na página do país.",
  "",
  "📝 PARA O BLOG WISEHUB NEWS: a matéria aprofundada, com análise e narrativa. É o material de marca, pra atrair e posicionar a WiseHub como autoridade.",
  "",
  "Abaixo de cada país, primeiro vem o conteúdo pronto pra publicar; depois, separados, os dados técnicos do monitoramento (boletins oficiais, marcos e manchetes ao vivo) que embasam tudo.",
].join("\n");

// Fontes oficiais reutilizadas
const SRC = {
  ircc: { label: "IRCC · Cortes do Express Entry (oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html" },
  oinp: { label: "Ontário · Programa Provincial (OINP)", url: "https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp" },
  dhaSkill: { label: "Austrália · SkillSelect (Home Affairs)", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect" },
  dhaWHV: { label: "Austrália · Work and Holiday 462", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462" },
  uaeGolden: { label: "Emirados · Golden Visa (gov oficial)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa" },
  dubaiFree: { label: "Dubai · GDRFA (residência e vistos)", url: "https://gdrfad.gov.ae/en" },
  ukSkilled: { label: "Reino Unido · Skilled Worker visa", url: "https://www.gov.uk/skilled-worker-visa" },
  ukGrad: { label: "Reino Unido · Graduate visa", url: "https://www.gov.uk/graduate-visa" },
  frTalent: { label: "França · Passeport Talent (service-public)", url: "https://www.service-public.fr/particuliers/vosdroits/F16922" },
  usH1b: { label: "EUA · H-1B (USCIS)", url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" },
} satisfies Record<string, EditorialSource>;

export const EDITORIAL: Record<string, CountryEditorial> = {
  // ───────────────────────────── Canadá ─────────────────────────────
  ca: {
    community: [
      {
        title: "Express Entry 2026: o corte subiu pra 481 pontos",
        body:
          "O Canadá começou 2026 com o Express Entry mais disputado da década. No último corte acompanhado pelo Watch Tower, a nota mínima (CRS) ficou em 481 pontos, doze a mais que no trimestre anterior.\n\nNa prática, quem está na faixa dos 470 precisa somar pontos rápido. Os caminhos mais diretos são melhorar a nota de idioma, conseguir uma oferta de trabalho válida ou garantir uma nomeação provincial.",
        cta: "Está perto do corte? Refaça o teste de idioma antes do próximo draw, é o ponto que sobe mais rápido.",
        sources: [SRC.ircc],
      },
      {
        title: "Ontário reabre 2.500 vagas de tecnologia",
        body:
          "A trilha provincial de tecnologia de Ontário está reabrindo com 2.500 vagas, e isso vale ouro pra quem trabalha com software, dados e infraestrutura.\n\nUma nomeação provincial soma 600 pontos no CRS, o suficiente pra praticamente garantir o convite. O detalhe é que as janelas abrem e fecham rápido.",
        cta: "Trabalha com tech? Deixe o perfil do Express Entry pronto pra reagir no dia da abertura.",
        sources: [SRC.oinp, SRC.ircc],
      },
    ],
    countryTab: [
      {
        headline: "Canadá aperta o funil e escolhe quem quer: tecnologia e saúde na frente",
        standfirst:
          "O Express Entry de 2026 ficou mais seletivo, com corte em 481 pontos e prioridade clara pra tecnologia e saúde. Veja o que mudou e como se posicionar.",
        body:
          "O Canadá entrou em 2026 com a política de imigração qualificada mais agressiva dos últimos dez anos. O corte do Express Entry, a nota que separa quem recebe o convite de quem fica na fila, subiu pra 481 pontos no levantamento mais recente do Watch Tower, doze pontos acima do trimestre anterior.\n\nA leitura é direta: o país está mais exigente, mas continua abrindo a porta. A diferença é que agora escolhe com mais precisão. As ocupações de tecnologia e saúde ganharam prioridade, enquanto funções genéricas perderam espaço nos sorteios.\n\nPra quem está perto do corte, três alavancas decidem o jogo. A primeira é o idioma: subir de um nível bom pra um nível alto no IELTS ou no CELPIP rende dezenas de pontos. A segunda é a nomeação provincial, que sozinha adiciona 600 pontos. A terceira é uma oferta de trabalho formal de um empregador canadense.\n\nO recado pra quem mira o Canadá este ano é planejar com antecedência. O perfil precisa estar completo e atualizado antes da abertura das janelas, porque elas são curtas e os sorteios não esperam.",
        keyFacts: [
          "CRS mínimo no último corte: 481 pontos, alta de 12 no trimestre",
          "Ontário, trilha de tecnologia: 2.500 vagas reabrindo",
          "Nomeação provincial: soma 600 pontos no CRS",
          "Tendência: alta pra tecnologia e saúde, baixa pra ocupações genéricas",
        ],
        sources: [SRC.ircc, SRC.oinp],
      },
    ],
    blog: [
      {
        headline: "Por que o Canadá virou o jogo da imigração qualificada em 2026",
        standfirst:
          "Mais seletivo e mais rápido pra quem se encaixa, o Canadá redesenhou o funil. Quem entende a lógica nova sai na frente.",
        body:
          "Durante anos o Canadá foi o destino quase automático de quem queria migrar com qualificação. Bastava juntar pontos suficientes e esperar o convite. Em 2026 essa lógica mudou de forma sutil, mas profunda.\n\nO país não fechou as portas, ele estreitou o corredor e iluminou quem realmente quer. O corte do Express Entry em 481 pontos é a parte visível disso. A parte invisível, e mais importante, é a priorização por categoria. Tecnologia e saúde passaram à frente, refletindo a escassez real de mão de obra nessas áreas.\n\nIsso cria uma assimetria interessante. Um desenvolvedor de software ou um profissional de enfermagem com bom inglês hoje tem um caminho mais previsível do que tinha dois anos atrás. Já perfis genéricos, que antes entravam pela soma bruta de pontos, encontram um funil bem mais apertado.\n\nA mensagem pra comunidade WiseHub é que estratégia vale mais do que pressa. Investir em idioma, mapear as trilhas provinciais como a de Ontário e ter o perfil pronto pra reagir no dia certo são movimentos que mudam o resultado. O Canadá continua sendo uma das melhores apostas do mundo pra imigração qualificada, desde que a pessoa jogue pelas regras novas.",
        tags: ["Canadá", "Express Entry", "Imigração qualificada", "Mercado de trabalho"],
        sources: [SRC.ircc, SRC.oinp],
      },
    ],
  },

  // ──────────────────────────── Austrália ────────────────────────────
  au: {
    community: [
      {
        title: "Austrália corta 18% das vagas do visto 189",
        body:
          "A Austrália entrou em modo restritivo. O visto de residência qualificada independente (subclasse 189) teve corte de 18% nas vagas, e o tempo de processamento do Global Talent foi a seis meses.\n\nQuem planeja aplicar precisa de mais pontos e mais paciência. A boa notícia fica por conta de outro caminho, o Work and Holiday pra brasileiros.",
        cta: "Vai pro 189? Some pontos antes de aplicar, a concorrência subiu com menos vagas disponíveis.",
        sources: [SRC.dhaSkill],
      },
      {
        title: "Work and Holiday pro Brasil dobra: agora são 2.500 vagas",
        body:
          "Em meio ao aperto geral, a Austrália dobrou as vagas do Work and Holiday pra brasileiros, que passaram pra 2.500. É a porta de entrada mais acessível pra quem tem entre 18 e 30 anos e quer trabalhar e viajar legalmente.\n\nAs vagas costumam esgotar rápido quando a janela abre, então preparação e documentação em dia fazem a diferença.",
        cta: "Tem entre 18 e 30? Junte os documentos agora, essa fila anda rápido.",
        sources: [SRC.dhaWHV],
      },
    ],
    countryTab: [
      {
        headline: "Austrália em modo seletivo: menos vagas qualificadas, mais espaço pra jovens brasileiros",
        standfirst:
          "Enquanto aperta a imigração qualificada permanente, o país abre uma janela rara pra quem quer entrar pelo Work and Holiday.",
        body:
          "A Austrália passou a 2026 em postura claramente mais restritiva na imigração permanente. O visto 189, a principal via independente pra trabalhadores qualificados, perdeu 18% das vagas, e a trilha de talentos globais, o Global Talent, teve o tempo de análise esticado pra seis meses.\n\nNa prática, a barra subiu. Com menos convites disponíveis, a nota de corte por pontos fica mais alta, e perfis medianos têm menos chance. A lista de ocupações em demanda também passa por revisão profunda, o que pode mudar quais profissões entram na fila preferencial.\n\nHá, porém, um contraponto importante pra comunidade brasileira. O programa Work and Holiday, voltado a jovens de 18 a 30 anos, dobrou de tamanho e chegou a 2.500 vagas. É o caminho mais acessível pra entrar legalmente, trabalhar e conhecer o país, e funciona muitas vezes como primeiro passo pra trilhas mais longas.\n\nQuem mira a Austrália precisa escolher bem a porta. Pra qualificados, o momento pede mais pontos e estratégia. Pra jovens, a janela do Work and Holiday é uma oportunidade concreta que costuma esgotar rápido.",
        keyFacts: [
          "Visto 189 (qualificado independente): corte de 18% nas vagas",
          "Global Talent: tempo de análise sobe pra 6 meses",
          "Work and Holiday pra brasileiros: dobra pra 2.500 vagas",
          "Lista de ocupações qualificadas em revisão profunda",
        ],
        sources: [SRC.dhaSkill, SRC.dhaWHV],
      },
    ],
    blog: [
      {
        headline: "Austrália fecha uma porta e abre outra: como ler o novo momento",
        standfirst:
          "O país está mais duro com a imigração qualificada e mais generoso com os jovens. Entender essa troca é o que separa quem se planeja de quem se frustra.",
        body:
          "A primeira leitura das notícias da Austrália em 2026 parece desanimadora. Menos vagas no visto 189, processamento mais lento no Global Talent e uma revisão da lista de ocupações que deixa todo mundo em compasso de espera. Mas reduzir o país a isso é perder metade da história.\n\nO que a Austrália está fazendo é recalibrar. Depois de anos de imigração alta, o governo aperta a entrada permanente qualificada pra aliviar pressão sobre moradia e serviços. É um movimento político tanto quanto técnico, e ele tende a oscilar nos próximos ciclos.\n\nNo mesmo gesto, o país amplia o Work and Holiday, e isso não é coincidência. Jovens que entram por essa via trabalham em setores com falta de mão de obra, gastam na economia local e, muitas vezes, criam vínculos que viram pedidos de permanência mais tarde. Pra um brasileiro de 20 e poucos anos, é uma das melhores portas de entrada do mundo.\n\nA recomendação pra comunidade WiseHub é dupla. Se o seu perfil é qualificado, trate 2026 como ano de fortalecer pontos e acompanhar a revisão das ocupações antes de aplicar. Se você tem o perfil etário do Work and Holiday, não deixe a janela passar. Em imigração, tão importante quanto o destino é o momento em que você bate na porta.",
        tags: ["Austrália", "Work and Holiday", "Imigração qualificada", "Jovens"],
        sources: [SRC.dhaSkill, SRC.dhaWHV],
      },
    ],
  },

  // ────────────────────── Emirados Árabes / Dubai ──────────────────────
  ae: {
    community: [
      {
        title: "Golden Visa dos Emirados abre pra IA, clima e medicina",
        body:
          "Os Emirados Árabes ampliaram o Golden Visa, a residência longa de dez anos, pra incluir engenheiros de inteligência artificial, pesquisadores da área climática e médicos especialistas.\n\nÉ um sinal claro de pra quem o país está olhando: talento de ponta e capital. Quem atua nessas frentes tem agora um caminho direto pra morar e trabalhar sem precisar de patrocinador local.",
        cta: "Atua com IA, clima ou medicina especializada? Vale checar os critérios do Golden Visa, a porta está aberta.",
        sources: [SRC.uaeGolden],
      },
      {
        title: "Dubai tem visto de freelancer 100% digital",
        body:
          "Dubai mantém um dos processos mais simples do mundo pra quem trabalha por conta própria. O visto de freelancer é totalmente digital, com taxa única de AED 7.500.\n\nPra nômades digitais e prestadores de serviço, é uma forma legal e rápida de fixar residência num hub global com tributação favorável.",
        cta: "Trabalha remoto? O freelancer visa de Dubai é um dos caminhos mais ágeis que existem.",
        sources: [SRC.dubaiFree],
      },
    ],
    countryTab: [
      {
        headline: "Emirados Árabes: a aposta declarada em talento de ponta e capital",
        standfirst:
          "Com Golden Visa ampliado e processos digitais, o país transformou a imigração qualificada em política de Estado. Veja quem se beneficia.",
        body:
          "Os Emirados Árabes construíram em poucos anos um dos ambientes mais favoráveis do mundo pra talentos e investidores, e em 2026 reforçaram essa direção. O Golden Visa, a residência de dez anos que dispensa patrocinador local, passou a contemplar explicitamente engenheiros de inteligência artificial, pesquisadores climáticos e médicos especialistas.\n\nA escolha dessas categorias não é aleatória. Ela espelha a estratégia do país de se posicionar como polo de tecnologia, sustentabilidade e saúde avançada, atraindo justamente os profissionais que o resto do mundo também disputa.\n\nNo plano prático do dia a dia, Dubai segue liderando em simplicidade. O visto de freelancer é totalmente digital, com taxa única de AED 7.500, o que torna a cidade um destino natural pra nômades digitais e prestadores de serviço que querem base legal num centro financeiro global.\n\nO ambiente regulatório altamente favorável, somado à ausência de imposto de renda sobre pessoa física, faz dos Emirados um caso à parte. Não é um destino de imigração de massa, é um destino de imigração selecionada, e o país deixou isso explícito em quem decidiu convidar.",
        keyFacts: [
          "Golden Visa (10 anos) ampliado pra IA, pesquisa climática e medicina especializada",
          "Dubai: visto de freelancer 100% digital, taxa única de AED 7.500",
          "Sem imposto de renda sobre pessoa física",
          "Foco declarado: talento de ponta e capital",
        ],
        sources: [SRC.uaeGolden, SRC.dubaiFree],
      },
    ],
    blog: [
      {
        headline: "Emirados Árabes: o país que decidiu colecionar talentos",
        standfirst:
          "Enquanto boa parte do mundo aperta fronteiras, os Emirados fazem o oposto com cirurgia: abrem para quem traz tecnologia, ciência e capital.",
        body:
          "Existe uma diferença filosófica entre os Emirados Árabes e quase todos os outros destinos de imigração. A maioria dos países trata a entrada de estrangeiros como algo a controlar. Os Emirados tratam como algo a desenhar.\n\nA ampliação do Golden Visa em 2026 é o exemplo perfeito. Em vez de mexer em regras genéricas, o país nomeou exatamente quem quer atrair: quem constrói inteligência artificial, quem pesquisa soluções pro clima, quem domina a medicina de alta especialidade. É imigração como política industrial.\n\nDubai adiciona a camada de execução. Um visto de freelancer inteiramente digital, com taxa única e previsível, remove o atrito que afasta o profissional autônomo de tantos outros lugares. Some a isso a ausência de imposto de renda e você entende por que a cidade virou ímã de talento global.\n\nPra comunidade WiseHub, o ponto de atenção é honesto: os Emirados não são um destino pra todo perfil. São um destino pra quem tem uma habilidade rara ou capital pra mover. Pra esses, porém, talvez não exista ambiente mais receptivo no planeta hoje. E quando um país diz com todas as letras quem quer, o melhor a fazer é ouvir.",
        tags: ["Emirados Árabes", "Dubai", "Golden Visa", "Nômade digital"],
        sources: [SRC.uaeGolden, SRC.dubaiFree],
      },
    ],
  },

  // ──────────────────────────── Reino Unido ────────────────────────────
  uk: {
    community: [
      {
        title: "Reino Unido mantém o Graduate Visa de 2 anos",
        body:
          "Depois de forte pressão das universidades, o Reino Unido decidiu manter o Graduate Visa, que permite ficar e trabalhar por dois anos após concluir um curso no país.\n\nPra quem pensa em estudar no Reino Unido, é uma segurança importante: o diploma continua vindo com uma janela real pra ganhar experiência local e buscar um patrocínio de trabalho.",
        cta: "Pensa em estudar no Reino Unido? O Graduate Visa segue de pé, planeje o pós-curso desde já.",
        sources: [SRC.ukGrad],
      },
      {
        title: "Salário mínimo do Skilled Worker em ajuste pra outubro",
        body:
          "O piso salarial exigido pelo visto Skilled Worker está em revisão e deve mudar em outubro de 2026. Como o salário é parte central da elegibilidade, qualquer ajuste afeta quem está perto do limite.\n\nQuem negocia uma oferta de trabalho no Reino Unido deve acompanhar de perto, porque o número final pode decidir a aprovação.",
        cta: "Negociando emprego no Reino Unido? Confirme o piso salarial vigente antes de assinar.",
        sources: [SRC.ukSkilled],
      },
    ],
    countryTab: [
      {
        headline: "Reino Unido equilibra aperto e atração: diploma ainda abre porta",
        standfirst:
          "O país manteve o Graduate Visa sob pressão das universidades, mas ajusta o piso salarial do Skilled Worker. Entenda o cenário pós-Brexit.",
        body:
          "O Reino Unido segue numa corda bamba entre controlar a imigração e não perder talento, e as decisões de 2026 mostram bem esse equilíbrio. De um lado, o governo manteve o Graduate Visa, que dá dois anos de permanência e trabalho a quem se forma no país. A decisão veio após pressão direta das universidades, que dependem de estudantes internacionais.\n\nDe outro lado, o piso salarial do visto Skilled Worker está em revisão, com mudança prevista pra outubro. Como o salário é critério central pra esse visto, o ajuste mexe diretamente com a elegibilidade de quem está na faixa de corte.\n\nO pano de fundo continua sendo o pós-Brexit. O país ainda atrai profissionais de tecnologia e ciência, mas os processos ficaram mais lentos e mais caros do que na época em que fazia parte da União Europeia.\n\nPra quem planeja o Reino Unido, a leitura é de oportunidade com cautela. O caminho de estudo seguido de trabalho continua sólido graças ao Graduate Visa, enquanto a via direta do Skilled Worker exige atenção redobrada ao número salarial que estará em vigor.",
        keyFacts: [
          "Graduate Visa de 2 anos mantido após pressão das universidades",
          "Skilled Worker: piso salarial em ajuste pra outubro de 2026",
          "Pós-Brexit: atrai talento, mas com processos mais lentos",
          "Estudo seguido de trabalho segue como rota mais previsível",
        ],
        sources: [SRC.ukGrad, SRC.ukSkilled],
      },
    ],
    blog: [
      {
        headline: "Reino Unido: o diploma virou a porta mais segura",
        standfirst:
          "Entre idas e vindas na política de imigração, uma rota se firmou como a mais previsível pra entrar no país: estudar primeiro, trabalhar depois.",
        body:
          "A política migratória do Reino Unido nos últimos anos parece um pêndulo. A cada ciclo, o discurso oscila entre cortar números e atrair talento. Em 2026, o pêndulo deixou uma certeza no meio do caminho: o Graduate Visa veio pra ficar, pelo menos por agora.\n\nManter esse visto, que dá dois anos de trabalho a quem se forma no país, foi menos uma escolha ideológica e mais uma necessidade econômica. As universidades britânicas dependem de estudantes internacionais, e cortar a ponte entre diploma e emprego esvaziaria salas e orçamentos. A pressão funcionou.\n\nO contraste fica com o visto Skilled Worker, a via direta de trabalho, que segue apertando pelo piso salarial. Isso cria uma assimetria estratégica: entrar pela porta do estudo, hoje, é mais previsível do que entrar pela porta do emprego direto.\n\nPra comunidade WiseHub, a lição é planejar a sequência. Um curso bem escolhido no Reino Unido não é só formação, é um visto de trabalho de dois anos embutido e tempo pra buscar um patrocínio com calma. Num país onde as regras mudam rápido, a rota do diploma é a que oferece mais chão firme.",
        tags: ["Reino Unido", "Graduate Visa", "Skilled Worker", "Estudar fora"],
        sources: [SRC.ukGrad, SRC.ukSkilled],
      },
    ],
  },

  // ────────────────────────────── França ──────────────────────────────
  fr: {
    community: [
      {
        title: "França simplifica o Passeport Talent num portal único",
        body:
          "A França reorganizou o Passeport Talent, o visto pra profissionais qualificados, pesquisadores e empreendedores, num portal único online. O tempo médio de análise caiu pra cerca de 60 dias.\n\nÉ um dos caminhos mais previsíveis da Europa pra quem tem alto valor profissional e quer estabilidade num país do bloco do euro.",
        cta: "Tem perfil qualificado? O Passeport Talent ficou mais simples, vale mapear sua categoria.",
        sources: [SRC.frTalent],
      },
    ],
    countryTab: [
      {
        headline: "França aposta na previsibilidade pra atrair talento qualificado",
        standfirst:
          "Com o Passeport Talent unificado num portal e análise em torno de 60 dias, o país se posiciona como destino estável pra profissionais de alto valor.",
        body:
          "Enquanto vários vizinhos europeus oscilam entre abrir e fechar portas, a França escolheu um caminho diferente: previsibilidade. Em 2026, o país consolidou o Passeport Talent, seu principal visto pra qualificados, num portal único online, e reduziu o tempo médio de análise pra cerca de 60 dias.\n\nO Passeport Talent cobre um leque amplo: pesquisadores, empreendedores, profissionais altamente qualificados e talentos contratados por empresas francesas. A lógica é atrair quem agrega valor econômico e científico, com um processo claro e de prazo razoável.\n\nEssa estabilidade é o grande trunfo francês. Num continente em que regras mudam de um semestre pro outro, oferecer um caminho com etapas definidas e prazo curto é um diferencial competitivo real.\n\nPra quem planeja a Europa, a França entra como uma aposta de baixo ruído. Não é o país dos anúncios chamativos, é o país do processo que funciona, e pra muita gente isso vale mais do que promessa.",
        keyFacts: [
          "Passeport Talent unificado num portal único online",
          "Tempo médio de análise em torno de 60 dias",
          "Cobre pesquisadores, empreendedores e profissionais qualificados",
          "Cenário estável, com foco em alto valor agregado",
        ],
        sources: [SRC.frTalent],
      },
    ],
    blog: [
      {
        headline: "França: o destino que aposta no tédio, e por que isso é uma vantagem",
        standfirst:
          "Sem manchetes barulhentas, o país transformou previsibilidade em estratégia de atração. Pra quem migra, processo claro vale mais do que promessa.",
        body:
          "Em imigração, a palavra mais subestimada é previsibilidade. Quem já planejou uma mudança de país sabe que o pior inimigo não é a regra dura, é a regra que muda no meio do caminho. A França entendeu isso e fez da estabilidade o seu argumento.\n\nA unificação do Passeport Talent num portal único, com análise em torno de 60 dias, parece um detalhe burocrático, mas é uma declaração de intenção. O país está dizendo ao profissional qualificado: aqui o caminho é claro e o prazo é curto. Num mercado global que disputa os mesmos talentos, isso é poderoso.\n\nO Passeport Talent foi pensado pra quem agrega valor: pesquisadores, fundadores, especialistas. Não é uma via de massa, é uma via de qualidade, e a França parece confortável com esse recorte.\n\nPra comunidade WiseHub, a França é o lembrete de que nem todo bom destino grita. Às vezes o melhor caminho é o mais silencioso, aquele com etapas definidas, prazo honesto e poucas surpresas. Pra quem tem perfil qualificado e busca solidez no coração da Europa, vale colocar a França no topo da lista.",
        tags: ["França", "Passeport Talent", "Europa", "Imigração qualificada"],
        sources: [SRC.frTalent],
      },
    ],
  },

  // ──────────────────────────── Estados Unidos ────────────────────────────
  us: {
    community: [
      {
        title: "H-1B mantém teto de 85 mil, mas seleção penaliza jovens",
        body:
          "Os Estados Unidos mantiveram o teto anual de 85 mil vistos H-1B, mas a seleção baseada em faixa salarial tende a desfavorecer candidatos no início de carreira.\n\nNa prática, profissionais com salários mais altos ganham vantagem no sorteio, o que muda o cálculo de quem está começando e mira o mercado americano.",
        cta: "Mira os EUA pelo H-1B? Negocie o melhor salário possível, ele pesa na seleção.",
        sources: [SRC.usH1b],
      },
    ],
    countryTab: [
      {
        headline: "Estados Unidos: cenário misto pra 2026, com salário no centro da disputa",
        standfirst:
          "H-1B mantém o teto, mas muda a lógica de seleção; EB-5 e OPT estão em revisão. Entenda o que está em jogo.",
        body:
          "Os Estados Unidos chegam a 2026 com um cenário de luzes e sombras pra quem quer migrar com qualificação. O visto H-1B, principal porta pra profissionais de tecnologia e áreas especializadas, manteve o teto anual de 85 mil. A mudança importante está na forma de selecionar: o modelo por faixa salarial tende a favorecer quem ganha mais e penalizar candidatos jovens, no início de carreira.\n\nNo campo do investimento, o EB-5 passa por revisão que pode alterar o valor mínimo exigido. É um sinal de atenção pra quem considerava esse caminho com base nas regras atuais.\n\nHá ainda a extensão do OPT pra formados em áreas STEM, em consulta pública. Esse mecanismo permite que recém-formados trabalhem por um período após o curso, e qualquer mudança afeta diretamente a transição entre estudo e emprego.\n\nO retrato geral é de um país que continua atraente, mas mais condicionado. O salário ganhou peso de critério, e quem planeja os Estados Unidos precisa acompanhar de perto as revisões em curso antes de decidir a rota.",
        keyFacts: [
          "H-1B: teto anual mantido em 85 mil",
          "Seleção por faixa salarial tende a penalizar candidatos jovens",
          "EB-5 (investidor): valor mínimo em revisão",
          "Extensão do OPT pra STEM em consulta pública",
        ],
        sources: [SRC.usH1b],
      },
    ],
    blog: [],
  },
};

/** Retorna o conteúdo editorial curado de um país, se houver. */
export function getEditorial(code: string): CountryEditorial | undefined {
  return EDITORIAL[code];
}

/** Total de peças editoriais já curadas (pra estatística do relatório). */
export function editorialStats(): { countries: number; pieces: number } {
  const codes = Object.keys(EDITORIAL);
  let pieces = 0;
  for (const code of codes) {
    const e = EDITORIAL[code];
    pieces += e.community.length + e.countryTab.length + e.blog.length;
  }
  return { countries: codes.length, pieces };
}

// ─────────────────────────────────────────────────────────────────────────
// Destinos de publicação (cores + legenda) e achatamento dos posts
// ─────────────────────────────────────────────────────────────────────────

export type Destination = "community" | "countryTab" | "blog";

export type DestinationMeta = {
  key: Destination;
  /** rótulo da seção */
  label: string;
  /** etiqueta curta (vai colorida ao lado do título de cada peça) */
  tag: string;
  /** emoji da seção */
  emoji: string;
  /** bolinha colorida (proxy de cor pro Markdown, que não tem cor) */
  dot: string;
  /** cor hex (Word e proxy pro PDF) */
  colorHex: string;
  /** explicação pra legenda: onde e como postar */
  legend: string;
};

/** Ordem oficial dos destinos no documento (Comunidade → Aba do país → Blog). */
export const DESTINATIONS: ReadonlyArray<DestinationMeta> = [
  {
    key: "community",
    label: "Para a Comunidade",
    tag: "COMUNIDADE",
    emoji: "📣",
    dot: "🔵",
    colorHex: "1F55FF",
    legend: "Post curto e objetivo pra publicar na Comunidade (Circle). Copie, ajuste o tom e publique.",
  },
  {
    key: "countryTab",
    label: "Para a aba do país",
    tag: "ABA DO PAÍS",
    emoji: "📰",
    dot: "🟢",
    colorHex: "0B815A",
    legend: "Notícia completa pra registrar na página do país, dentro do Watch Tower.",
  },
  {
    key: "blog",
    label: "Para o Blog WiseHub News",
    tag: "BLOG WISEHUB NEWS",
    emoji: "📝",
    dot: "🟠",
    colorHex: "B45309",
    legend: "Matéria aprofundada pro Blog WiseHub News (wisehubnow / wisehubnews.com).",
  },
];

/** Peça normalizada, pronta pra postar (independente do tipo de origem). */
export type PostablePiece = {
  destination: Destination;
  countryCode: string;
  countryName: string;
  title: string;
  standfirst?: string;
  body: string;
  cta?: string;
  keyFacts?: string[];
  tags?: string[];
  sources?: EditorialSource[];
};

type EdCountryLike = { code: string; name: string; editorial?: CountryEditorial };

/**
 * Achata todo o conteúdo curado em sequência por destino: primeiro todos os
 * posts de Comunidade, depois todas as notícias de aba do país, depois todas
 * as matérias de blog. Dentro de cada destino, na ordem dos países recebidos.
 */
export function buildPostables(
  countries: ReadonlyArray<EdCountryLike>,
): Array<{ dest: DestinationMeta; pieces: PostablePiece[] }> {
  return DESTINATIONS.map((dest) => {
    const pieces: PostablePiece[] = [];
    for (const c of countries) {
      const ed = c.editorial;
      if (!ed) continue;
      if (dest.key === "community") {
        for (const p of ed.community)
          pieces.push({ destination: "community", countryCode: c.code, countryName: c.name, title: p.title, body: p.body, cta: p.cta, sources: p.sources });
      } else if (dest.key === "countryTab") {
        for (const a of ed.countryTab)
          pieces.push({ destination: "countryTab", countryCode: c.code, countryName: c.name, title: a.headline, standfirst: a.standfirst, body: a.body, keyFacts: a.keyFacts, sources: a.sources });
      } else {
        for (const p of ed.blog)
          pieces.push({ destination: "blog", countryCode: c.code, countryName: c.name, title: p.headline, standfirst: p.standfirst, body: p.body, tags: p.tags, sources: p.sources });
      }
    }
    return { dest, pieces };
  });
}

/** Fontes/materiais consolidados por país (deduplicados por URL). */
export function consolidatedSources(
  countries: ReadonlyArray<EdCountryLike>,
): Array<{ countryCode: string; countryName: string; sources: EditorialSource[] }> {
  const out: Array<{ countryCode: string; countryName: string; sources: EditorialSource[] }> = [];
  for (const c of countries) {
    const ed = c.editorial;
    if (!ed) continue;
    const all: EditorialSource[] = [
      ...ed.community.flatMap((p) => p.sources ?? []),
      ...ed.countryTab.flatMap((a) => a.sources ?? []),
      ...ed.blog.flatMap((p) => p.sources ?? []),
    ];
    const seen = new Set<string>();
    const sources: EditorialSource[] = [];
    for (const s of all) {
      if (!seen.has(s.url)) {
        seen.add(s.url);
        sources.push(s);
      }
    }
    if (sources.length) out.push({ countryCode: c.code, countryName: c.name, sources });
  }
  return out;
}

/** Total de peças prontas pra postar (soma de todos os destinos). */
export function totalPostables(countries: ReadonlyArray<EdCountryLike>): number {
  return buildPostables(countries).reduce((s, g) => s + g.pieces.length, 0);
}

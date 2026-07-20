/**
 * Conteúdo editorial CURADO pela Friday (redação WiseHub), país a país.
 *
 * Diferente dos dados técnicos (boletins + RSS cru), aqui mora a NOTÍCIA já
 * redigida, fluida e pronta pra publicar, separada nos três destinos que a
 * operação usa:
 *
 *   📣 community  → posts curtos e objetivos pra Comunidade (Circle)
 *   📰 countryTab → notícia completa pra aba de cada país
 *   📝 blog       → matéria aprofundada pro Blog WiseHub News
 *
 * Os números refletem o monitoramento e a curadoria da equipe WiseHub; cada
 * peça traz a fonte oficial pro leitor conferir. A Friday atualiza este arquivo
 * na curadoria diária; o relatório (REPAVET) e, depois, o app montam a partir
 * daqui. NUNCA usar travessão no meio das frases (padrão de escrita do Hammis).
 */

import type { Locale } from "./i18n/config";
import { EDITORIAL_EN } from "./editorial-en";
import { RONDA_PIECES } from "./editorial-ronda";

export type EditorialSource = { label: string; url: string };

/**
 * Urgência CURADA da peça, atribuída na Ronda Diária. Ausente = peça legada,
 * nunca triada: vale NORMAL em todo lugar.
 *
 * União (e não `urgent?: boolean`) de propósito: `undefined` precisa continuar
 * distinguível de "triada e classificada como normal", o mesmo contrato que
 * `publishedAt` ausente já tem. Com booleano, `false` e ausente ficariam
 * indistinguíveis no JSON das peças da Ronda e a distinção sumiria.
 */
export type PieceUrgency = "urgent" | "normal";

/** Metadados de recência comuns a toda peça editorial. Preenchidos pela Ronda
 *  Diária. Ausentes = peça legada (renderiza sem selo, nunca vai pro arquivo). */
export type RecencyMeta = {
  /** Data ISO (YYYY-MM-DD) de quando a Friday redigiu a peça. */
  publishedAt?: string;
  /** Data ISO de quando foi marcada como já postada/utilizada. */
  usedAt?: string;
  /**
   * Critério canônico do Hammis (2026-07-20), não inventar outro:
   *
   * URGENTE = (a) alteração de LEI ou de REGRA de visto/imigração/residência/
   * cidadania; (b) ato oficial publicado (decreto, portaria, statement of
   * changes, decisão judicial que muda regra, novo limite/taxa/prazo em vigor);
   * (c) acontecimento que ocorreu HOJE ou ONTEM (janela de 48h), ou prazo/janela
   * que abre ou fecha em poucos dias.
   *
   * NORMAL = conteúdo que NÃO perde validade amanhã: dica prática, "o que você
   * pode fazer", "como fazer", guia, orientação, análise de contexto, matéria
   * perene.
   *
   * Na dúvida: se a peça perde validade caso seja postada semana que vem, é
   * `urgent`. Se continua útil, é `normal`.
   */
  urgency?: PieceUrgency;
};

/** Post curto pra Comunidade: objetivo, claro, explicativo. */
export type CommunityPost = RecencyMeta & {
  title: string;
  /** 1 a 2 parágrafos curtos. Parágrafos separados por linha em branco. */
  body: string;
  /** chamada pra ação (opcional). */
  cta?: string;
  sources?: EditorialSource[];
};

/** Notícia completa pra aba do país: formato jornalístico. */
export type CountryArticle = RecencyMeta & {
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
export type BlogPost = RecencyMeta & {
  headline: string;
  standfirst: string;
  body: string;
  tags?: string[];
  sources?: EditorialSource[];
};

/** Roteiro de vídeo pro YouTube da WiseHub: gancho de abertura + blocos. */
export type YouTubeScript = RecencyMeta & {
  title: string;
  /** gancho dos primeiros segundos, que prende o espectador. */
  hook?: string;
  /** corpo do roteiro, em blocos separados por linha em branco. */
  body: string;
  cta?: string;
  sources?: EditorialSource[];
};

/** Post pro Instagram da WiseHub: legenda/carrossel + hashtags. */
export type InstagramPost = RecencyMeta & {
  title: string;
  /** legenda do post ou roteiro do carrossel. Parágrafos separados por linha em branco. */
  body: string;
  hashtags?: string[];
  cta?: string;
  sources?: EditorialSource[];
};

export type CountryEditorial = {
  community: CommunityPost[];
  countryTab: CountryArticle[];
  blog: BlogPost[];
  /** Roteiros de vídeo (YouTube WiseHub). Opcional: nem todo país tem ainda. */
  youtube?: YouTubeScript[];
  /** Posts de Instagram (WiseHub). Opcional. */
  instagram?: InstagramPost[];
};

/** Texto-guia que abre a seção editorial do relatório. */
export const EDITORIAL_GUIDE = [
  "Este documento separa o conteúdo em cinco destinos de publicação. Use cada peça onde ela rende mais:",
  "",
  "📣 PARA A COMUNIDADE (Circle): posts curtos, diretos e explicativos. Servem pra avisar e engajar rápido. Copie, ajuste o tom se quiser e publique.",
  "",
  "📰 PARA A ABA DO PAÍS: a notícia completa, com contexto e dados-chave. É a versão de referência que fica registrada na página do país.",
  "",
  "📝 PARA O BLOG WISEHUB NEWS: a matéria aprofundada, com análise e narrativa. É o material de marca, pra atrair e posicionar a WiseHub como autoridade.",
  "",
  "🎬 PARA O YOUTUBE: o roteiro de vídeo pronto pra gravar, com gancho de abertura, blocos e chamada final.",
  "",
  "📸 PARA O INSTAGRAM: a legenda e o roteiro de post ou carrossel, já com hashtags.",
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
  // Educação / Saúde / Economia (novas dimensões)
  iccStudentCap: { label: "IRCC · Limite de vistos de estudante (oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/2025-provincial-territorial-allocations-under-international-student-cap.html" },
  eduCanada: { label: "EduCanada · Portal oficial de estudo", url: "https://www.educanada.ca" },
  healthCanada: { label: "Health Canada (oficial)", url: "https://www.canada.ca/en/health-canada.html" },
  bankCanada: { label: "Bank of Canada (taxa de juros)", url: "https://www.bankofcanada.ca" },
  statCan: { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
  ukIHS: { label: "Reino Unido · Immigration Health Surcharge (gov.uk)", url: "https://www.gov.uk/healthcare-immigration-application" },
  ucas: { label: "UCAS · Admissões universitárias (oficial)", url: "https://www.ucas.com" },
  ukStudent: { label: "Reino Unido · Visto de estudante (gov.uk)", url: "https://www.gov.uk/student-visa" },
  boe: { label: "Bank of England (taxa de juros)", url: "https://www.bankofengland.co.uk" },
  ons: { label: "Office for National Statistics (UK)", url: "https://www.ons.gov.uk" },
  // Austrália
  studyAustralia: { label: "Study Australia · Visto de estudante 500 (oficial)", url: "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500" },
  ausHealth: { label: "Austrália · Dept of Health (oficial)", url: "https://www.health.gov.au" },
  rba: { label: "Reserve Bank of Australia (juros)", url: "https://www.rba.gov.au" },
  abs: { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
  // Emirados
  uaeMoE: { label: "Emirados · Ministry of Education", url: "https://www.moe.gov.ae" },
  khda: { label: "Dubai · KHDA (educação)", url: "https://www.khda.gov.ae" },
  dhaHealth: { label: "Dubai Health Authority (DHA)", url: "https://www.dha.gov.ae" },
  centralBankUAE: { label: "Central Bank of the UAE", url: "https://www.centralbank.ae" },
  // França
  campusFrance: { label: "Campus France · Mensalidades (oficial)", url: "https://www.campusfrance.org/en/tuition-fees-France" },
  ameli: { label: "França · Assurance Maladie / Ameli", url: "https://www.ameli.fr" },
  banqueFrance: { label: "Banque de France", url: "https://www.banque-france.fr" },
  insee: { label: "INSEE (estatística · França)", url: "https://www.insee.fr" },
  // EUA
  educationUSA: { label: "EducationUSA (oficial)", url: "https://educationusa.state.gov" },
  sevis: { label: "EUA · Taxa SEVIS I-901 (Study in the States)", url: "https://studyinthestates.dhs.gov/students/prepare/paying-the-i-901-sevis-fee" },
  usHealthcare: { label: "EUA · HealthCare.gov", url: "https://www.healthcare.gov" },
  fed: { label: "Federal Reserve (EUA · juros)", url: "https://www.federalreserve.gov" },
  bls: { label: "Bureau of Labor Statistics (EUA)", url: "https://www.bls.gov" },
} satisfies Record<string, EditorialSource>;

export const EDITORIAL: Record<string, CountryEditorial> = {
  br: {
    community: [
      { title: "Brasil aposta no talento de tecnologia", body: "O Brasil vem se posicionando como um polo de tecnologia na América Latina, e a Polícia Federal tem modernizado os fluxos de imigração pelo portal gov.br/pf. O chamado Visto Tech, voltado a profissionais de inteligência artificial e fintech, oferece um caminho mais rápido para quem trabalha nessas áreas, com análise em poucas semanas.\n\nA naturalização também ficou mais acessível para residentes de longa data, com processo digital e prazos médios menores. O foco do país é claro: reter talentos qualificados e simplificar a vida de quem decide construir carreira por aqui.", cta: "Faça todo o processo migratório pelo portal oficial gov.br/pf e confira a lista de documentos exigidos antes de marcar atendimento, evitando idas desnecessárias à unidade.", sources: [{ label: "Polícia Federal · Imigração (gov.br)", url: "https://www.gov.br/pf/pt-br/assuntos/imigracao/inicio" }] },
      { title: "💡 Trabalho e investimento: conheça o Portal de Imigração", body: "Além da Polícia Federal, o governo mantém o Portal de Imigração do Ministério da Justiça, que concentra informação sobre autorizações de residência ligadas a trabalho e investimento produtivo. É a referência para entender qual via se aplica ao seu caso antes de iniciar qualquer pedido.\n\nEntender a categoria correta desde o início economiza tempo e reduz o risco de indeferimento. Cada tipo de residência tem requisitos próprios de comprovação, e o portal detalha o que vale para trabalhadores, investidores e quem já mora no país.", cta: "Comprove vínculo de trabalho ou capacidade de investimento com documentos claros e atualizados, e desconfie de intermediários que prometem aprovação garantida fora dos canais oficiais.", sources: [{ label: "Portal de Imigração · Ministério da Justiça", url: "https://portaldeimigracao.mj.gov.br/pt/" }] },
    ],
    countryTab: [
      { headline: "Brasil ganha tração como hub de tecnologia latino", standfirst: "Visto Tech com análise acelerada e naturalização digital tornam o país mais competitivo para profissionais qualificados.", body: "O Brasil tem investido em modernizar sua política migratória para atrair e reter talentos de tecnologia. A Polícia Federal, autoridade responsável pelo registro de estrangeiros, digitalizou boa parte dos fluxos no portal gov.br/pf, reduzindo a burocracia presencial.\n\nO Visto Tech é a peça central dessa estratégia, oferecendo um caminho mais rápido para profissionais de inteligência artificial e fintech. A proposta é dar previsibilidade a quem tem qualificação em alta demanda, com prazos de análise mais curtos do que as vias tradicionais.\n\nA naturalização para residentes de longa data também passou a ser feita de forma digital, com tempo médio de processamento menor. O movimento coloca o país no radar de quem busca uma base de carreira na América Latina, especialmente nas áreas de IA e fintech.", keyFacts: ["Autoridade competente: Polícia Federal, via gov.br/pf", "Visto Tech voltado a profissionais de IA e fintech, com análise acelerada", "Naturalização digital disponível para residentes de longa data"], sources: [{ label: "Polícia Federal · Imigração (gov.br)", url: "https://www.gov.br/pf/pt-br/assuntos/imigracao/inicio" }] },
    ],
    blog: [],
  },
  pt: {
    community: [
      { title: "Portugal segue como porta de entrada para a UE", body: "Portugal continua sendo um dos destinos preferidos de brasileiros que querem viver na União Europeia. A AIMA, agência que assumiu as funções do antigo SEF, é hoje a autoridade responsável por vistos, autorizações de residência e integração de migrantes.\n\nOs vistos D7, voltado a quem tem rendimento próprio, e D8, para nômades digitais, passaram por reajuste de taxas. Ainda assim, seguem entre as vias mais usadas por quem busca residência. O Tech Visa, dedicado a profissionais qualificados, foi renovado e oferece um caminho mais previsível para quem trabalha em tecnologia.", cta: "Inicie o pedido de visto pelo portal oficial vistos.mne.gov.pt e trate a autorização de residência diretamente com a AIMA, comprovando meios de subsistência com extratos e documentos atualizados.", sources: [{ label: "AIMA · Agência para a Integração, Migrações e Asilo", url: "https://aima.gov.pt/pt" }] },
      { title: "💡 Golden Visa mais restrito, foco nas regiões autónomas", body: "O programa Golden Visa, que atraía investidores por meio de imóveis, ficou bem mais restrito. Hoje as opções elegíveis de investimento se concentram em Madeira e Açores, o que muda o cálculo de quem pensava nesse caminho.\n\nPara a maioria dos profissionais, as vias de trabalho e rendimento próprio costumam fazer mais sentido do que o investimento. Vale estudar com calma qual modalidade se encaixa no seu perfil antes de comprometer recursos, já que cada visto tem exigências e prazos distintos.", cta: "Confirme sempre as regras vigentes do programa de investimento no site da AIMA antes de qualquer aporte, e prefira aconselhamento de profissionais devidamente licenciados.", sources: [{ label: "Vistos · Ministério dos Negócios Estrangeiros", url: "https://vistos.mne.gov.pt/" }] },
    ],
    countryTab: [
      { headline: "Portugal mantém apelo, mas ajusta taxas e regras", standfirst: "Vistos D7 e D8 seguem como principais vias, Tech Visa renovado e Golden Visa restrito às regiões autónomas.", body: "Portugal preserva o posto de porta de entrada favorita de brasileiros rumo à União Europeia, mesmo com ajustes recentes. A AIMA, sucessora do SEF, centraliza vistos, autorizações de residência e a integração de quem chega.\n\nAs taxas dos vistos D7 e D8 foram reajustadas, mas essas modalidades continuam entre as mais procuradas. O D7 atende quem tem rendimento próprio, enquanto o D8 foi pensado para nômades digitais. O Tech Visa, por sua vez, foi renovado e oferece um percurso mais estável a profissionais qualificados em tecnologia.\n\nO Golden Visa, antes muito ligado a imóveis, ficou restrito a opções de investimento em Madeira e Açores. Para o trabalhador comum, as vias de rendimento e de trabalho qualificado tendem a ser mais acessíveis e previsíveis do que o investimento.", keyFacts: ["Autoridade competente: AIMA, sucessora do SEF", "Vistos D7 e D8 entre as vias mais usadas, com taxas reajustadas", "Golden Visa elegível apenas em Madeira e Açores"], sources: [{ label: "AIMA · Agência para a Integração, Migrações e Asilo", url: "https://aima.gov.pt/pt" }] },
    ],
    blog: [],
  },
  es: {
    community: [
      { title: "Regularização extraordinária na Espanha fecha com mais de 900 mil pedidos", body: "A Espanha encerrou em 30 de junho de 2026 a janela de um processo extraordinário de regularização, e a procura superou de longe a expectativa. Foram mais de 900 mil pedidos, quase o dobro da estimativa inicial de 500 mil, segundo o balanço divulgado sobre o programa.\n\nA via foi aberta em 16 de abril e mirava imigrantes sem antecedentes criminais que já viviam no país e comprovavam presença anterior ao fim de 2025. A aprovação inicial concede uma autorização provisória de trabalho por um ano, que depois exige nova comprovação para renovar. Brasileiros aparecem com forte presença na fila.", cta: "Entrou no programa? Organize desde já os comprovantes de residência e de trabalho, porque a renovação vai exigir nova documentação.", sources: [{ label: "España · Inclusión, Seguridad Social y Migraciones (oficial)", url: "https://www.inclusion.gob.es/web/migraciones" }, { label: "BOE · Boletín Oficial del Estado", url: "https://www.boe.es/" }] },
      { title: "💡 Regularização de longa data: o papel do arraigo", body: "As figuras de arraigo são um traço marcante da política espanhola. Elas permitem regularizar a situação de quem já mantém vínculos no país, seja por tempo de permanência, laços familiares ou inserção social e laboral.\n\nCada modalidade exige um conjunto específico de provas, e reunir documentação consistente faz toda a diferença no resultado. Por isso vale estudar com cuidado os requisitos antes de protocolar, e organizar comprovantes que demonstrem de forma clara a sua ligação com a Espanha.", cta: "Confira os requisitos de cada modalidade de arraigo no portal oficial de extranjería e desconfie de quem promete atalhos, já que os prazos de permanência são verificados de perto.", sources: [{ label: "Información sobre extranjería · Administraciones Públicas", url: "https://sede.administracionespublicas.gob.es/pagina/index/directorio/infoext2" }] },
    ],
    countryTab: [
      { headline: "Espanha fecha regularização extraordinária com procura recorde e brasileiros na dianteira", standfirst: "Janela aberta em 16 de abril terminou em 30 de junho de 2026 com mais de 900 mil pedidos, bem acima da estimativa oficial.", body: "A Espanha viveu um dos maiores movimentos de regularização de sua história recente. O processo extraordinário, aberto em 16 de abril de 2026, encerrou a fase de pedidos em 30 de junho e reuniu mais de 900 mil solicitações, quase o dobro dos 500 mil que o governo projetava. A comunidade latino-americana, com forte peso de brasileiros, aparece na frente da fila.\n\nO desenho do programa mirou pessoas que já viviam no país sem situação regular, sem antecedentes criminais e que comprovassem presença anterior ao fim de 2025. A aprovação inicial garante uma autorização provisória de trabalho por um ano, que precisa ser confirmada com nova documentação no momento da renovação.\n\nA iniciativa reuniu apoio de ONGs, de setores religiosos, de sindicatos e de associações empresariais, mas encontrou resistência de partidos à direita do espectro político. Para quem entrou no processo, o passo seguinte é preservar o vínculo de trabalho e a comprovação de residência, peças que serão decisivas na hora de manter a autorização.", keyFacts: ["Processo extraordinário aberto em 16 de abril, pedidos até 30 de junho de 2026", "Mais de 900 mil solicitações, quase o dobro da estimativa oficial de 500 mil", "Voltado a quem estava no país sem situação regular e sem antecedentes criminais", "Aprovação inicial dá autorização provisória de trabalho por um ano, sujeita a renovação"], sources: [{ label: "España · Inclusión, Seguridad Social y Migraciones (oficial)", url: "https://www.inclusion.gob.es/web/migraciones" }, { label: "BOE · Boletín Oficial del Estado", url: "https://www.boe.es/" }] },
    ],
    blog: [
      { headline: "Por que a regularização espanhola virou um marco, e o que vem depois dela", standfirst: "Mais de 900 mil pedidos em poucas semanas mostram o tamanho da imigração invisível na Espanha. Para os aprovados, o desafio agora é transformar a autorização provisória em permanência.", body: "Quando a Espanha abriu, em abril de 2026, uma janela extraordinária para regularizar quem já vivia no país sem documentação, a expectativa oficial girava em torno de 500 mil pedidos. O número final, acima de 900 mil, disse mais sobre a realidade do que qualquer projeção: havia muito mais gente vivendo à margem do sistema do que se supunha, e boa parte veio da América Latina, com destaque para brasileiros.\n\nO mecanismo foi pensado para quem já estava no país até o fim de 2025, sem antecedentes criminais e capaz de comprovar a presença. A aprovação não entrega residência definitiva de imediato, e sim uma autorização provisória de trabalho por um ano. Esse detalhe é decisivo, porque o real teste vem na renovação, quando o imigrante precisará mostrar vínculo de trabalho e continuidade de vida no país.\n\nO programa mobilizou uma coalizão ampla, de ONGs a associações empresariais, que enxergam na regularização uma forma de trazer para a economia formal quem já estava aqui. Do outro lado, partidos à direita criticaram a medida. Essa tensão política tende a moldar como as renovações e eventuais novas janelas serão tratadas adiante.\n\nPara a comunidade WiseHub, ficam duas leituras. A primeira é que a Espanha segue sendo um dos destinos mais permeáveis da União Europeia para quem constrói vínculo local ao longo do tempo, seja por regularização, seja pelas figuras de arraigo. A segunda é um alerta prático: conseguir a primeira autorização é só o começo, e quem não organiza a comprovação de trabalho e residência corre o risco de perder na renovação o que ganhou na largada.", tags: ["Espanha", "Regularização", "Arraigo", "Trabalho"], sources: [{ label: "España · Inclusión, Seguridad Social y Migraciones (oficial)", url: "https://www.inclusion.gob.es/web/migraciones" }, { label: "BOE · Boletín Oficial del Estado", url: "https://www.boe.es/" }] },
    ],
  },
  de: {
    community: [
      { title: "Alemanha estuda cortar 41% da verba dos cursos de integração", publishedAt: "2026-07-14", body: "O governo alemão incluiu no projeto de orçamento federal uma redução expressiva no dinheiro dos cursos de integração, os Integrationskurse. A verba, hoje acima de 1 bilhão de euros, cairia para cerca de 590 milhões, uma queda de aproximadamente 41%. Entre os programas de integração, os cursos são de longe os mais afetados pela proposta.\n\nEsses cursos são coordenados pelo BAMF, o Escritório Federal para Migração e Refugiados, e certos imigrantes de fora da União Europeia têm direito ou até obrigação de frequentá-los. Como reúnem as aulas de alemão e de orientação cívica, funcionam como base para trabalho, residência de longo prazo e naturalização. A comissária de migração Natalie Pawlik criticou o corte, dizendo que a infraestrutura de integração não pode ser desmontada.", cta: "Tem direito ao curso de integração? Procure o BAMF e garanta a vaga cedo, porque um orçamento menor tende a alongar filas e reduzir turmas.", sources: [{ label: "BAMF · Cursos de Integração (Integrationskurse)", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" }] },
      { title: "💡 Por que o curso de integração ainda vale a corrida", publishedAt: "2026-07-14", body: "Mesmo com a ameaça de corte, o curso de integração segue sendo um dos melhores atalhos para quem chega. Ele combina o aprendizado do alemão com noções de leis, história e vida cotidiana, e o certificado final conta pontos em pedidos de residência permanente e de cidadania.\n\nSe a verba encolher, a disputa por vaga aumenta. Quem já tem direito ao curso ganha em se inscrever o quanto antes, sem esperar o cenário apertar. Vale confirmar no BAMF a elegibilidade e a lista de escolas credenciadas na sua cidade.", cta: "Confirme a elegibilidade e as escolas credenciadas direto no BAMF, e trate a inscrição como prioridade logo depois de chegar.", sources: [{ label: "BAMF · Cursos de Integração (Integrationskurse)", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" }] },
    ],
    countryTab: [
      { headline: "Orçamento alemão prevê corte de 41% nos cursos de integração", standfirst: "Verba dos Integrationskurse cairia de mais de 1 bilhão para cerca de 590 milhões de euros, o maior corte entre os programas de integração.", publishedAt: "2026-07-14", body: "A Alemanha, que nos últimos anos flexibilizou regras para atrair mão de obra, colocou na mesa uma proposta que caminha na direção oposta no campo da integração. O projeto de orçamento federal prevê reduzir a verba dos cursos de integração, os Integrationskurse, de um patamar acima de 1 bilhão de euros para cerca de 590 milhões, uma queda de aproximadamente 41%.\n\nEsses cursos são coordenados pelo BAMF, o Escritório Federal para Migração e Refugiados, e reúnem as aulas de alemão e de orientação cívica que muitos imigrantes de fora da União Europeia têm direito, ou dever, de frequentar. O certificado é peça importante em pedidos de residência permanente e de naturalização, o que dá aos cursos um peso que vai além do idioma.\n\nA proposta ainda tramita e faz parte de um pacote que mexe em várias áreas do orçamento. A comissária de migração Natalie Pawlik saiu em defesa da rubrica, argumentando que cortar a infraestrutura de integração compromete a estabilidade econômica e social do país. Para o imigrante, o recado prático é de atenção: se a verba encolher, a tendência é de filas mais longas e menos turmas, o que reforça a vantagem de buscar a vaga cedo.", keyFacts: ["Verba dos cursos de integração cairia de mais de 1 bilhão para cerca de 590 milhões de euros", "Queda de aproximadamente 41%, o maior corte entre os programas de integração", "Cursos coordenados pelo BAMF, com aulas de alemão e orientação cívica", "Proposta ainda em tramitação no orçamento federal"], sources: [{ label: "BAMF · Cursos de Integração (Integrationskurse)", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" }] },
      { headline: "Alemanha rebaixa exigências para atrair talento qualificado", standfirst: "Chancenkarte com pontuação mínima menor e Blue Card com limiar salarial reduzido sinalizam a busca por mão de obra.", body: "A Alemanha vem ajustando sua legislação migratória para responder à escassez de mão de obra qualificada. A autoridade BAMF, o Escritório Federal para Migração e Refugiados, coordena boa parte desses processos, com informação centralizada no portal Make it in Germany.\n\nA Chancenkarte, baseada em sistema de pontos, teve a exigência mínima reduzida, dando peso maior à experiência profissional. O Blue Card da União Europeia acompanhou a tendência, com o limiar salarial mínimo rebaixado, o que amplia o acesso de profissionais de setores em falta.\n\nO recado às áreas de tecnologia, saúde e engenharia é direto: há demanda e o país quer facilitar a chegada. Para o candidato, contudo, o reconhecimento do diploma estrangeiro segue como etapa fundamental e, em várias profissões, obrigatória.", keyFacts: ["Autoridade competente: BAMF, com informação no portal Make it in Germany", "Chancenkarte com pontuação mínima reduzida", "Reconhecimento de diploma é etapa-chave para muitas profissões"], sources: [{ label: "Make it in Germany · Portal oficial do Governo Federal", url: "https://www.make-it-in-germany.com/pt/" }] },
    ],
    blog: [
      { headline: "Alemanha aperta a integração enquanto abre a porta do trabalho", standfirst: "A proposta de cortar 41% da verba dos cursos de integração convive com regras mais fáceis para trabalhadores qualificados. Entender essa tensão ajuda a planejar a chegada.", publishedAt: "2026-07-14", body: "A política migratória alemã vive uma contradição aparente. De um lado, o país reduziu exigências para atrair profissionais qualificados, com a Chancenkarte baseada em pontos e o Blue Card da União Europeia mais acessível. De outro, o projeto de orçamento federal propõe cortar cerca de 41% da verba dos cursos de integração, os Integrationskurse, que hoje passam de 1 bilhão de euros e cairiam para perto de 590 milhões.\n\nÀ primeira vista, são movimentos opostos. Mas eles falam de dois momentos distintos da vida do imigrante. A porta de entrada, ligada ao trabalho, está mais larga. Já a estrutura que ajuda quem chegou a aprender o idioma e a se firmar, essa é que ficaria mais apertada. Como os cursos são coordenados pelo BAMF e o certificado conta em pedidos de residência permanente e de cidadania, o corte atinge justamente a fase de consolidação.\n\nA comissária de migração Natalie Pawlik resumiu o risco ao dizer que o país se beneficia da imigração e não deveria desmontar a própria infraestrutura de integração. A crítica expõe o dilema: atrair trabalhadores sem sustentar a integração pode gerar gargalos de idioma e de inserção mais adiante.\n\nPara a comunidade WiseHub, a leitura é de calendário e de prioridade. Quem pretende ir à Alemanha para trabalhar continua diante de regras favoráveis e deve mirar o portal Make it in Germany. Já quem chega e tem direito ao curso de integração ganha em se inscrever cedo, antes que um orçamento menor estreite as turmas. A proposta ainda tramita, então acompanhar o desfecho no BAMF faz parte do plano.", tags: ["Alemanha", "Integração", "Integrationskurse", "BAMF"], sources: [{ label: "BAMF · Cursos de Integração (Integrationskurse)", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" }, { label: "Make it in Germany · Portal oficial do Governo Federal", url: "https://www.make-it-in-germany.com/pt/" }] },
    ],
  },
  it: {
    community: [
      { title: "Justiça de Nápoles reconhece cidadania de brasileiros que tentaram agendar antes do prazo", publishedAt: "2026-07-14", body: "O Tribunal de Nápoles reconheceu, em decisão de 7 de julho de 2026, a cidadania italiana de dois brasileiros descendentes de um mesmo tronco italiano, mesmo com a ação protocolada depois de a nova lei entrar em vigor. O ponto decisivo foi a prova: os requerentes apresentaram capturas de tela do Prenot@mi, o sistema oficial de agendamento consular, mostrando que tentaram protocolar no prazo.\n\nO caso envolve o artigo 3-bis da Lei 91/1992, incluído pelo Decreto-Lei 36/2025 e convertido na Lei 74/2025, o chamado Decreto Tajani, que restringe o reconhecimento por descendência a quem pediu até 27 de março de 2025. Para o tribunal, a impossibilidade de usar o canal digital não pode comprimir um direito do cidadão, porque ninguém deve ser punido por falha do sistema fora do seu controle.", cta: "Tentou agendar no Prenot@mi antes de 27 de março de 2025? Guarde todas as capturas de tela e comprovantes, eles podem definir o seu caso.", sources: [{ label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }, { label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }] },
      { title: "💡 Projeto da Lega endurece a revogação da cidadania, mas não atinge o jure sanguinis", publishedAt: "2026-07-14", body: "A Câmara dos Deputados da Itália aprovou, em 8 de julho de 2026, o pedido de urgência para um projeto da Lega que amplia as hipóteses de revogação da cidadania. Hoje a revogação vale só para terrorismo e subversão, e o texto quer somar crimes como homicídio, tráfico de pessoas, mutilação genital feminina e violência sexual contra menores.\n\nO detalhe que importa para descendentes: a proposta mira cidadãos naturalizados e quem adquire a cidadania a partir dos 18 anos, e não quem tem o direito originário por linha de sangue, o jure sanguinis. A urgência apenas acelera o exame, e o projeto ainda precisa passar por comissão e votação para virar lei.", cta: "Tem cidadania por descendência? A proposta não muda o seu direito originário, mas vale acompanhar a tramitação na Câmara dos Deputados.", sources: [{ label: "Camera dei Deputati · iter dos projetos (oficial)", url: "https://www.camera.it/" }] },
      { title: "Cidadania por linha materna: tribunal italiano abre caminho após o Decreto Tajani", body: "A Terceira Seção Cível do Tribunal de Brescia reconheceu a cidadania italiana por linha materna a uma família brasileira, com a decisão transitando em julgado em 2026. O ponto central foi o momento do pedido: os requerentes já tinham buscado o reconhecimento antes de 27 de março de 2025, prazo fixado pelo Decreto-Lei 36/2025, convertido na Lei 74/2025, conhecido como Decreto Tajani.\n\nO tribunal aplicou a regra anterior invocando o princípio do legítimo afidamento, a confiança de quem começou o processo sob as regras antigas. A leitura reforça que a demora dos consulados não pode, sozinha, tirar de alguém um direito originário como a cidadania.", cta: "Começou o reconhecimento antes de 27 de março de 2025? Guarde todos os comprovantes de tentativa consular, eles podem definir qual regra se aplica ao seu caso.", sources: [{ label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
      { title: "💡 Atenção a golpes e a sites falsos de visto", body: "A alta procura por vistos italianos atrai golpistas. As próprias autoridades já alertaram para campanhas que clonam o site oficial do Ministério dos Negócios Estrangeiros para roubar dados pessoais de candidatos desavisados.\n\nA regra de ouro é digitar você mesmo o endereço do portal oficial, sem clicar em links de e-mails ou mensagens suspeitas. Desconfie de qualquer intermediário que prometa aprovação garantida ou peça pagamentos fora dos canais reconhecidos pelo governo italiano.", cta: "Acesse apenas o portal oficial vistoperitalia.esteri.it digitando o endereço manualmente, e nunca pague por promessas de aprovação garantida feitas por terceiros.", sources: [{ label: "Servizi consolari e visti · Ministero degli Affari Esteri", url: "https://www.esteri.it/it/servizi-consolari-e-visti/" }] },
    ],
    countryTab: [
      { headline: "Tribunal de Nápoles protege quem tentou agendar no Prenot@mi antes do Decreto Tajani", standfirst: "Decisão de 7 de julho de 2026 reconhece a cidadania de dois brasileiros com base em capturas de tela do sistema consular, mesmo com a ação protocolada após o prazo.", publishedAt: "2026-07-14", body: "A fila do agendamento consular voltou ao centro do debate sobre a cidadania italiana. Em 7 de julho de 2026, o Tribunal de Nápoles reconheceu a cidadania de dois brasileiros, descendentes de um italiano nascido em Cardito, na província de Nápoles, em 1891, que emigrou e nunca se naturalizou brasileiro. A ação havia sido protocolada em fevereiro de 2026, já sob a lei mais restritiva.\n\nO que sustentou a decisão foram as capturas de tela do Prenot@mi, o portal oficial de agendamento, usadas para provar a tentativa de protocolar dentro do prazo. O caso gira em torno do artigo 3-bis da Lei 91/1992, introduzido pelo Decreto-Lei 36/2025 e convertido na Lei 74/2025, o Decreto Tajani, que limita o reconhecimento por descendência a pedidos feitos até 27 de março de 2025.\n\nOs juízes registraram que a impossibilidade de usar o canal digital não pode se transformar em compressão de um direito subjetivo, porque o cidadão não pode ser punido por falhas do sistema fora do seu controle. A decisão soma-se a julgados como o do Tribunal de Brescia e reforça um padrão: a data e a prova da tentativa pesam tanto quanto o vínculo de sangue.", keyFacts: ["Tribunal de Nápoles, decisão de 7 de julho de 2026", "Cidadania reconhecida a dois brasileiros, ação protocolada em fevereiro de 2026", "Capturas de tela do Prenot@mi aceitas como prova de tentativa no prazo", "Base legal: artigo 3-bis da Lei 91/1992, via Lei 74/2025 (Decreto Tajani)"], sources: [{ label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }, { label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }] },
      { headline: "Justiça italiana preserva cidadania por linha materna de quem pediu antes do Decreto Tajani", standfirst: "Decisão do Tribunal de Brescia aplica a regra antiga a requerentes que buscaram reconhecimento até 27 de março de 2025, com base no legítimo afidamento.", body: "O reconhecimento da cidadania italiana ganhou um novo capítulo nos tribunais. A Terceira Seção Cível do Tribunal de Brescia reconheceu a cidadania por linha materna a uma família brasileira, numa decisão que transitou em julgado em 2026. O caso foi ajuizado depois do Decreto Tajani, mas o tribunal entendeu que a regra anterior deveria valer.\n\nO fio da meada é a data. O Decreto-Lei 36/2025, convertido na Lei 74/2025, fixou 27 de março de 2025 como marco para pedidos de reconhecimento administrativo. Como os requerentes comprovaram que já tinham tentado o reconhecimento consular antes desse prazo, o juízo aplicou o princípio do legítimo afidamento, protegendo quem iniciou o caminho sob as regras antigas.\n\nA fundamentação registrou que a conhecida demora das autoridades consulares não pode se transformar em obstáculo de fato ao reconhecimento de um direito originário. No pano de fundo está a Sentença 63/2026 da Corte Costituzionale, que balizou o debate sobre os limites da reforma. Para descendentes, a lição prática é documentar cada tentativa consular, por raccomandata A/R ou pelo portal Prenot@mi.", keyFacts: ["Tribunal de Brescia reconheceu cidadania por linha materna, decisão transitada em julgado em 2026", "Marco do Decreto Tajani: 27 de março de 2025 (Decreto-Lei 36/2025, convertido na Lei 74/2025)", "Base da decisão: princípio do legítimo afidamento para quem pediu antes do prazo", "Corte Costituzionale, Sentença 63/2026, balizou o debate"], sources: [{ label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
    ],
    blog: [
      { headline: "Dois movimentos na cidadania italiana: o Parlamento aperta, os tribunais protegem", standfirst: "Na mesma semana, a Câmara acelerou um projeto que amplia a revogação da cidadania e um tribunal reconheceu descendentes que tentaram agendar no prazo. Saber quem cada medida atinge evita susto.", publishedAt: "2026-07-14", body: "A cidadania italiana viveu dias de sinais opostos, e separar um do outro é essencial para quem tem sangue italiano. De um lado, a Câmara dos Deputados aprovou em 8 de julho a urgência de um projeto da Lega que amplia as hipóteses de revogação da cidadania, hoje restritas a terrorismo e subversão, para incluir crimes graves como homicídio, tráfico de pessoas e violência sexual contra menores. De outro, o Tribunal de Nápoles reconheceu a cidadania de dois brasileiros que provaram, com capturas de tela do Prenot@mi, ter tentado agendar antes do prazo do Decreto Tajani.\n\nA primeira pergunta que o descendente faz é se corre risco de perder a cidadania. Pela proposta em tramitação, não. O texto mira cidadãos naturalizados e quem adquire a cidadania a partir dos 18 anos, e não o direito originário por jure sanguinis. Além disso, é apenas um projeto: a urgência só encurta o prazo de análise, e ainda faltam comissão e votação para que vire lei.\n\nA segunda frente é onde mora a boa notícia para descendentes. As decisões de Nápoles e, antes, de Brescia, mostram tribunais dispostos a proteger quem agiu de boa-fé e tentou protocolar dentro do prazo, mesmo travado pela fila consular. O fio comum é a prova: sem o rastro das tentativas, por Prenot@mi ou por carta registrada, o argumento perde força.\n\nPara a comunidade WiseHub, o mapa fica assim. Quem já tem cidadania por descendência pode ficar tranquilo diante do projeto da Lega, que não trata do jure sanguinis. Quem ainda busca o reconhecimento deve entender o marco de 27 de março de 2025 e, acima de tudo, guardar cada comprovante de tentativa. No cenário atual, documentar a própria linha do tempo virou parte do processo.", tags: ["Itália", "Cidadania", "Jure sanguinis", "Decreto Tajani"], sources: [{ label: "Camera dei Deputati · iter dos projetos (oficial)", url: "https://www.camera.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
      { headline: "Decreto Tajani nos tribunais: por que a data do seu pedido virou o que mais importa", standfirst: "Decisões como a do Tribunal de Brescia mostram que quem buscou o reconhecimento antes de 27 de março de 2025 pode manter o direito pela regra antiga. O tempo joga a favor de quem tem prova.", body: "A reforma da cidadania italiana por descendência, apelidada de Decreto Tajani, redesenhou quem tem direito e sob quais condições. Mas a aplicação prática está sendo moldada caso a caso nos tribunais, e um padrão começa a aparecer: a data em que a pessoa buscou o reconhecimento pesa tanto quanto o vínculo de sangue.\n\nA decisão do Tribunal de Brescia é um bom exemplo. Ao reconhecer a cidadania por linha materna de uma família brasileira, o tribunal não ignorou o Decreto Tajani, apenas concluiu que a regra anterior valia para quem já tinha iniciado o pedido antes de 27 de março de 2025. O argumento jurídico é o legítimo afidamento, a ideia de que o Estado não pode mudar as regras no meio do caminho para quem agiu de boa-fé sob a lei vigente.\n\nAí entra um detalhe que muita gente subestima: a prova. O que sustentou a decisão foi a documentação das tentativas de agendamento e de contato consular, por carta registrada e pelo portal oficial. Sem esse rastro, o requerente teria dificuldade de mostrar que estava na fila antes do prazo. A demora dos consulados, tantas vezes vista como problema, virou aqui um argumento a favor do cidadão.\n\nPara a comunidade WiseHub, o recado é direto. Quem tem ascendência italiana e já se movimentou antes de 27 de março de 2025 deve reunir e preservar todo comprovante de tentativa. E quem ainda vai começar precisa entender o novo marco antes de traçar a estratégia, porque, no cenário atual, a linha do tempo do seu processo pode valer tanto quanto a sua árvore genealógica.", tags: ["Itália", "Cidadania", "Decreto Tajani", "Jure sanguinis"], sources: [{ label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
    ],
  },
  dk: {
    community: [
      { title: "Bornholm fecha a agenda de casamentos de estrangeiros no auge do verão", body: "A ilha de Bornholm, um dos endereços preferidos de casais binacionais que se casam na Dinamarca, parou de aceitar novas marcações de casamento de estrangeiros durante o pico da temporada. Segundo a emissora pública DR, os casamentos de estrangeiros já passaram de metade de todos os realizados na ilha neste ano, num volume que teria dobrado em relação a dois ou três anos atrás.\n\nO motivo é operacional. O chefe do serviço ao cidadão do município, Bo Rosendal, explica que a equipe não dá conta: casais estrangeiros costumam chegar sem testemunhas, e cada cerimônia acaba exigindo três funcionários. A decisão dividiu opiniões na ilha, com o setor de turismo preocupado com o recado que fica para quem viria.", cta: "Se você planejava casar em Bornholm nesta temporada, confirme a disponibilidade direto com o município antes de comprar passagem, e considere outros municípios dinamarqueses como alternativa.", sources: [{ label: "DR Nyheder · Emissora pública dinamarquesa", url: "https://www.dr.dk/nyheder/indland/udlaendinge-vil-giftes-paa-bornholm-nu-siger-kommunen-stop" }], publishedAt: "2026-07-16" },
      { title: "Dinamarca lidera pressão europeia por centros de retorno fora da UE", body: "A Dinamarca voltou ao centro do debate migratório europeu. Nesta semana, o ministro dinamarquês da Migração, Morten Bødskov, reuniu-se com colegas de Itália e Alemanha para discutir a criação de centros de retorno fora do território da União Europeia, destinados a solicitantes de asilo cujos pedidos foram rejeitados e que não têm direito de residência no bloco.\n\nA ideia, proposta pela Dinamarca ainda em 2019, ganhou tração depois que o Parlamento Europeu aprovou, em junho de 2026, um marco que permite aos países estabelecer centros de partida fora da UE por meio de acordos com terceiros. Bødskov afirma que o projeto entrou em fase crucial e espera um acordo com um país terceiro até o fim de 2026, com os primeiros centros previstos para 2027.", cta: "Acompanhe as regras de asilo e residência direto no Ministério da Imigração e Integração da Dinamarca antes de tomar decisões, porque o tema está em movimento no nível europeu.", sources: [{ label: "Udlændinge- og Integrationsministeriet (oficial)", url: "https://uim.dk/" }], publishedAt: "2026-07-09" },
      { title: "💡 Sistema EES de fronteira não será suspenso, insiste a UE", body: "Quem planeja entrar na Europa precisa contar com o novo sistema de entrada e saída, o EES, em funcionamento desde outubro de 2025 nos 29 países do espaço Schengen. Ele substitui o carimbo manual no passaporte pelo registro digital de impressões digitais e imagem facial de viajantes de fora da UE, no primeiro cruzamento de fronteira.\n\nApesar de relatos de filas longas em alguns pontos, a União Europeia reafirmou que não vai suspender o sistema. Há um período de flexibilidade que permite adiar temporariamente a coleta de biometria até o começo de setembro, mas o EES é o novo normal das fronteiras, e serve para controlar o limite de permanência de 90 dias a cada 180.", cta: "Reserve tempo extra na chegada durante a fase de implantação e mantenha o passaporte e a documentação de entrada à mão para o registro biométrico.", sources: [{ label: "União Europeia · Entry/Exit System (oficial)", url: "https://travel-europe.europa.eu/ees_en" }], publishedAt: "2026-07-09" },
    ],
    countryTab: [
      { headline: "Casamentos de estrangeiros passam de metade do total e Bornholm suspende novas marcações", standfirst: "Município diz que não tem gente suficiente para atender a demanda no auge do verão, num destino que virou rota conhecida de casais binacionais.", body: "A Dinamarca construiu, ao longo dos anos, a fama de lugar onde casais de nacionalidades diferentes conseguem casar com menos burocracia do que em boa parte da Europa. Bornholm, ilha no Báltico, virou um dos endereços mais procurados dessa rota. Em 15 de julho de 2026, o município disse que, por ora, não aceita mais marcações de casamento de estrangeiros nesta temporada.\n\nO peso do fenômeno aparece na proporção. De acordo com a emissora pública DR, os casamentos de estrangeiros já respondem por mais da metade de todos os realizados na ilha neste ano, volume que teria dobrado na comparação com dois ou três anos atrás. A estrutura administrativa não acompanhou o ritmo.\n\nA explicação do município é prática, não política. Bo Rosendal, que chefia o serviço ao cidadão, afirma que faltam funcionários para dar conta da demanda, e detalha o gargalo: como casais estrangeiros costumam chegar sem testemunhas, cada cerimônia acaba mobilizando três servidores. Ele observa ainda que esses casais, em boa parte, não são contribuintes da ilha, o que alimenta a discussão sobre quem deve arcar com o custo do serviço.\n\nNem todo mundo concorda com o freio. Torsten Engsig, do Destination Bornholm, pondera que a ilha se expõe ao risco de perder quem voltaria depois como turista. Siine Katherine Bergmann, dona da Wedding on the Rocks, lamenta que a suspensão caia justamente na alta temporada. Para casais binacionais que contavam com Bornholm nas próximas semanas, o caminho é confirmar disponibilidade antes de fechar viagem e considerar outros municípios dinamarqueses, já que a competência para celebrar o casamento é municipal.", keyFacts: ["Município de Bornholm suspendeu novas marcações de casamento de estrangeiros durante o verão (DR, 15 de julho de 2026)", "Casamentos de estrangeiros passaram de metade do total realizado na ilha neste ano, com volume dobrado ante dois ou três anos atrás", "Gargalo operacional: casais chegam sem testemunhas e cada cerimônia exige três funcionários", "A celebração do casamento é competência municipal, então outros municípios seguem como alternativa"], sources: [{ label: "DR Nyheder · Emissora pública dinamarquesa", url: "https://www.dr.dk/nyheder/indland/udlaendinge-vil-giftes-paa-bornholm-nu-siger-kommunen-stop" }], publishedAt: "2026-07-16" },
      { headline: "Dinamarca acelera plano de centros de retorno fora da UE para pedidos de asilo negados", standfirst: "Ministro Morten Bødskov articula com Itália e Alemanha um projeto conjunto europeu, com acordo previsto até o fim de 2026 e primeiros centros em 2027.", body: "A Dinamarca, historicamente uma das vozes mais rígidas do continente em política migratória, intensificou a articulação por centros de retorno instalados fora do território da União Europeia. Na primeira semana de julho de 2026, o ministro da Migração, Morten Bødskov, reuniu-se com o titular do Interior italiano, Matteo Piantedosi, e com o ministro alemão do Interior, Alexander Dobrindt, para ampliar o apoio à proposta.\n\nOs centros abrigariam pessoas que tiveram o pedido de asilo rejeitado e que não possuem base legal para permanecer no bloco, até a efetivação do retorno ao país de origem. O plano ganhou respaldo jurídico em junho de 2026, quando o Parlamento Europeu aprovou um marco que autoriza os Estados a criar centros de partida fora da UE por meio de acordos com países terceiros.\n\nBødskov, que classifica a medida como uma mudança profunda na política migratória europeia, afirma que as tratativas entraram em fase decisiva e que vários países demonstraram interesse. A expectativa dinamarquesa é fechar um acordo com um país terceiro até o fim de 2026 e lançar um projeto-piloto no início do próximo ano, com os primeiros centros operando em 2027. A ideia, vale lembrar, foi originalmente proposta pela própria Dinamarca em 2019.", keyFacts: ["Ministro da Migração Morten Bødskov reuniu-se com Itália e Alemanha na primeira semana de julho de 2026", "Centros de retorno seriam instalados fora da UE, para solicitantes de asilo rejeitados sem direito de residência", "Parlamento Europeu aprovou em junho de 2026 marco que permite centros de partida fora do bloco", "Acordo com país terceiro esperado até o fim de 2026, primeiros centros previstos para 2027"], sources: [{ label: "Udlændinge- og Integrationsministeriet (oficial)", url: "https://uim.dk/" }, { label: "The Local Denmark", url: "https://www.thelocal.dk/20260708/danish-migration-minister-to-discuss-deportation-centres-with-eu-ministers" }], publishedAt: "2026-07-09" },
    ],
    blog: [
      { headline: "Centros de retorno fora da UE: a aposta dinamarquesa que pode redesenhar o asilo europeu", standfirst: "O que a Dinamarca propõe desde 2019 deixou o papel. Com aval do Parlamento Europeu e apoio de Itália e Alemanha, a externalização do retorno vira política concreta.", body: "Há temas migratórios que se arrastam por anos como ideia e, de repente, ganham forma. A externalização dos centros de retorno, defendida pela Dinamarca desde 2019, é um deles. Em julho de 2026, o assunto saiu do campo da retórica e entrou na mesa de negociação entre ministros europeus.\n\nO desenho é direto na intenção e complexo na execução. Pessoas que tiveram o pedido de asilo negado e não têm direito de permanecer na União Europeia seriam encaminhadas a centros instalados fora do bloco, mantidas ali até o retorno ao país de origem. O ministro Morten Bødskov articulou apoio com Itália e Alemanha, e o Parlamento Europeu deu a base legal em junho de 2026, ao aprovar o marco que autoriza esses centros de partida por meio de acordos com países terceiros.\n\nO ponto sensível está justamente nos acordos. Instalar um centro fora da UE exige um país anfitrião disposto e garantias de respeito a direitos fundamentais, terreno em que iniciativas parecidas de outros governos já esbarraram em tribunais. A Dinamarca projeta fechar um acordo até o fim de 2026 e iniciar um piloto no ano seguinte, com operação prevista para 2027.\n\nPara quem acompanha os rumos da imigração europeia, o movimento importa além da Dinamarca. Se o modelo avançar como projeto conjunto do bloco, ele muda a lógica de como a Europa lida com pedidos negados, e sinaliza um endurecimento coordenado que tende a influenciar a política de asilo em todo o continente nos próximos anos.", tags: ["Dinamarca", "Asilo", "União Europeia", "Política migratória"], sources: [{ label: "Udlændinge- og Integrationsministeriet (oficial)", url: "https://uim.dk/" }, { label: "The Local Denmark", url: "https://www.thelocal.dk/20260708/danish-migration-minister-to-discuss-deportation-centres-with-eu-ministers" }], publishedAt: "2026-07-09" },
    ],
  },
  pl: {
    community: [
      { urgency: "urgent", title: "UE acerta prorrogar até março de 2028 a proteção temporária de quem fugiu da Ucrânia", body: "Os países da União Europeia chegaram a acordo, em 15 de julho de 2026, para estender a proteção temporária concedida a pessoas deslocadas da Ucrânia até 4 de março de 2028. O regime, ativado em março de 2022, estava garantido até 4 de março de 2027, e a prorrogação cobre o período seguinte, de 5 de março de 2027 em diante.\n\nA decisão pesa especialmente na Polônia, que abriga a maior comunidade ucraniana do bloco. Na prática polonesa, é o número PESEL com status UKR que confirma o direito de residir no país sob proteção temporária. A adoção formal pelo Conselho e a publicação no Jornal Oficial da UE ainda vão acontecer, e é a partir daí que a prorrogação entra em vigor.", cta: "Se você vive na Polônia com status UKR, acompanhe os comunicados do Escritório para Estrangeiros (UDSC), porque nas prorrogações anteriores os certificados foram estendidos automaticamente, sem necessidade de pedir documento novo.", sources: [{ label: "Conselho da UE · Acordo de 15 de julho de 2026 (oficial)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" }, { label: "UDSC · Proteção temporária (oficial)", url: "https://www.gov.pl/web/udsc-en/temporary-protection" }], publishedAt: "2026-07-16" },
      { title: "💡 A nova regra militar vale só para quem chegar depois, não para quem já tem proteção", body: "A prorrogação vem com uma condição inédita, e ela tem sido mal contada por aí. O texto proposto pela Comissão Europeia prevê que a proteção temporária não será concedida a quem estiver em desacordo com as obrigações militares previstas na lei ucraniana e, por esse motivo, não tiver autorização das autoridades da Ucrânia para deixar o país.\n\nO ponto decisivo está na ressalva expressa do próprio artigo: ele não se aplica a quem já usufrui de proteção temporária na data em que a decisão entrar em vigor. Ou seja, não se trata de excluir homens por faixa etária, e sim de verificar, apenas para quem chegar dali em diante, a autorização de saída da Ucrânia. Quem já está protegido na Polônia não é atingido.", cta: "Desconfie de manchetes que resumem a regra como proibição a homens em idade militar, e confira o texto da proposta da Comissão antes de tomar qualquer decisão sobre a sua situação.", sources: [{ label: "Comissão Europeia · Proposta COM(2026) 345 final (oficial)", url: "https://home-affairs.ec.europa.eu/news/commission-proposes-extend-temporary-protection-people-fleeing-ukraine-additional-year-2026-06-26_en" }], publishedAt: "2026-07-16" },
      { title: "Estrangeiros já respondem por cerca de 15% da população de Varsóvia", body: "A presença estrangeira na Polônia atingiu um novo patamar. Segundo dados experimentais do escritório nacional de estatística, a GUS, referentes ao fim de 2025, os estrangeiros já representam cerca de 14,5% da população de Varsóvia, algo em torno de 301 mil pessoas. Entre as grandes cidades, Wrocław lidera, com 19,5%.\n\nNo conjunto do país, são aproximadamente 2,3 milhões de residentes estrangeiros, quase 6% da população, com os ucranianos formando a maior comunidade. A própria GUS ressalta que a metodologia ainda é experimental e que os percentuais não têm caráter oficial definitivo, mas o retrato confirma o enraizamento da imigração no tecido urbano polonês.", cta: "Se a Polônia está no seu radar, comece pelo Escritório para Estrangeiros (UDSC) e confirme a categoria de autorização que se aplica ao seu caso antes de qualquer passo.", sources: [{ label: "GUS · Statistics Poland (oficial)", url: "https://stat.gov.pl/en/" }, { label: "Notes from Poland", url: "https://notesfrompoland.com/2026/07/03/foreigners-now-account-for-15-of-warsaws-population/" }], publishedAt: "2026-07-09" },
      { title: "💡 Mais de 1,1 milhão de estrangeiros trabalhando na Polônia", body: "Os dados oficiais do mercado de trabalho reforçam o mesmo movimento. Em 31 de janeiro de 2026, havia cerca de 1,119 milhão de estrangeiros exercendo trabalho na Polônia, segundo a GUS, um crescimento de 7,1% na comparação com o mesmo mês de 2025. Homens respondem por 59,9% desse contingente e mulheres por 40,1%.\n\nA leve queda de 1,9% frente a dezembro reflete a sazonalidade típica do início do ano, não uma reversão de tendência. Para quem planeja migrar por trabalho, o recado é que a demanda por mão de obra estrangeira segue firme, sobretudo em setores que já dependem desse fluxo.", cta: "Consulte as tabelas oficiais da GUS e alinhe o processo com um empregador polonês, que costuma ser quem dá entrada no pedido de autorização de trabalho.", sources: [{ label: "GUS · Estrangeiros trabalhando na Polônia, jan/2026 (oficial)", url: "https://stat.gov.pl/en/experimental-statistics/human-capital/foreigners-performing-work-in-poland-in-january-2026,12,39.html" }], publishedAt: "2026-07-09" },
    ],
    countryTab: [
      { urgency: "urgent", headline: "Proteção temporária de ucranianos vai até março de 2028, e a Polônia é o país mais afetado", standfirst: "Acordo dos Estados membros em 15 de julho estende o regime por mais um ano e cria uma verificação de obrigações militares que só vale para quem chegar depois da entrada em vigor.", body: "Os países da União Europeia acertaram, em 15 de julho de 2026, prorrogar por mais um ano a proteção temporária concedida às pessoas deslocadas da Ucrânia. O regime, ativado em 4 de março de 2022 com base na Diretiva de Proteção Temporária de 2001, estava assegurado até 4 de março de 2027 e agora deve alcançar 4 de março de 2028, cobrindo o intervalo que começa em 5 de março de 2027.\n\nOs números explicam por que a decisão importa tanto por aqui. Segundo a proposta da Comissão Europeia, quase 4,4 milhões de pessoas deslocadas da Ucrânia estavam sob proteção temporária no bloco em abril de 2026, sendo cerca de 58% mulheres e quase 30% menores de idade. O contingente se manteve relativamente estável ao longo dos anos, passando de 4,21 milhões em abril de 2024 para 4,37 milhões em abril de 2026. A Polônia concentra a maior comunidade ucraniana da União, e é no país que o efeito prático da prorrogação se faz sentir com mais força.\n\nA novidade desta rodada é uma condição ligada ao serviço militar, e ela exige leitura cuidadosa. O texto determina que a proteção não será concedida a quem não estiver em conformidade com as obrigações militares previstas na lei ucraniana e, por isso, não for autorizado pelas autoridades da Ucrânia a deixar o país. O mesmo artigo, porém, traz ressalva explícita: a regra não se aplica a quem já usufrui de proteção temporária na data de entrada em vigor da decisão. A verificação alcança apenas os novos solicitantes, e a Comissão registra que as autoridades ucranianas desenvolvem o aplicativo Reserv+ para emitir os documentos de dispensa.\n\nNo desenho polonês, quem vive sob proteção temporária tem esse direito confirmado pelo número PESEL com status UKR, e os certificados hoje válidos alcançam 4 de março de 2027. Falta a adoção formal pelo Conselho e a publicação no Jornal Oficial da União Europeia, que faz a decisão entrar em vigor no dia seguinte. Em prorrogações anteriores, a validade dos documentos foi estendida sem que os beneficiários precisassem solicitar papéis novos.", keyFacts: ["Acordo dos Estados membros em 15 de julho de 2026 estende a proteção temporária até 4 de março de 2028", "Quase 4,4 milhões de deslocados da Ucrânia sob proteção temporária na UE em abril de 2026, cerca de 58% mulheres e quase 30% menores", "Nova condição sobre obrigações militares não se aplica a quem já tem proteção temporária na entrada em vigor", "Na Polônia, o PESEL com status UKR confirma o direito de residência, com certificados válidos até 4 de março de 2027", "Adoção formal e publicação no Jornal Oficial da UE ainda pendentes"], sources: [{ label: "Conselho da UE · Acordo de 15 de julho de 2026 (oficial)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" }, { label: "Comissão Europeia · Proposta COM(2026) 345 final (oficial)", url: "https://home-affairs.ec.europa.eu/news/commission-proposes-extend-temporary-protection-people-fleeing-ukraine-additional-year-2026-06-26_en" }, { label: "UDSC · Proteção temporária (oficial)", url: "https://www.gov.pl/web/udsc-en/temporary-protection" }], publishedAt: "2026-07-16" },
      { headline: "Polônia registra presença estrangeira recorde em cidades e no mercado de trabalho", standfirst: "Dados experimentais da GUS apontam estrangeiros em torno de 14,5% da população de Varsóvia e mais de 1,1 milhão de trabalhadores estrangeiros no país no início de 2026.", body: "A imigração deixou de ser coadjuvante na demografia polonesa. Levantamento experimental do escritório nacional de estatística, a GUS, com dados do fim de 2025, indica que os estrangeiros já somam cerca de 14,5% da população de Varsóvia, algo em torno de 301 mil pessoas. Wrocław aparece à frente entre as grandes cidades, com 19,5%, seguida por Szczecin e Poznań.\n\nNo total nacional, o país abriga cerca de 2,3 milhões de residentes estrangeiros, quase 6% da população, com os ucranianos formando a maior comunidade. A GUS ressalta que a metodologia é experimental e que os percentuais não têm status oficial definitivo, mas o retrato é consistente com a expansão observada nos últimos anos.\n\nO mercado de trabalho conta a mesma história com números oficiais. Em 31 de janeiro de 2026, cerca de 1,119 milhão de estrangeiros exerciam atividade remunerada no país, alta de 7,1% na comparação anual. A distribuição por gênero mostra 59,9% de homens e 40,1% de mulheres, e a pequena retração mensal responde à sazonalidade do período. Para quem observa a Polônia como porta de entrada acessível na União Europeia, os dados confirmam uma economia que continua absorvendo trabalhadores de fora.", keyFacts: ["Estrangeiros somam cerca de 14,5% da população de Varsóvia e 19,5% em Wrocław (dados experimentais da GUS, fim de 2025)", "Cerca de 2,3 milhões de residentes estrangeiros no país, quase 6% da população, com maioria ucraniana", "Aproximadamente 1,119 milhão de estrangeiros trabalhando na Polônia em 31 de janeiro de 2026, alta de 7,1% no ano", "Autoridade competente: Urząd do Spraw Cudzoziemców (UDSC), o Escritório para Estrangeiros"], sources: [{ label: "GUS · Statistics Poland (oficial)", url: "https://stat.gov.pl/en/" }, { label: "GUS · Estrangeiros trabalhando na Polônia, jan/2026", url: "https://stat.gov.pl/en/experimental-statistics/human-capital/foreigners-performing-work-in-poland-in-january-2026,12,39.html" }], publishedAt: "2026-07-09" },
    ],
    blog: [
      { headline: "Mais um ano de proteção temporária, e a letra miúda que a manchete não contou", standfirst: "A UE estendeu até 2028 o abrigo de quase 4,4 milhões de ucranianos. A condição sobre serviço militar existe, mas poupa quem já está protegido, e essa diferença muda tudo.", body: "Toda prorrogação da proteção temporária dos ucranianos costuma passar como notícia burocrática, dessas que rendem uma linha e somem. A rodada acertada em 15 de julho de 2026 merece atenção maior, não pelo prazo em si, mas pela cláusula nova que veio junto e pelo tanto que ela foi mal traduzida no caminho até o leitor.\n\nComecemos pelo simples. O regime nasceu em 4 de março de 2022, quando o Conselho ativou a Diretiva de Proteção Temporária de 2001, um instrumento que existia havia duas décadas sem nunca ter sido usado. Desde então, a validade foi esticada ano a ano: até 2024, depois 2025, 2026 e 2027. Agora deve alcançar 4 de março de 2028. Por trás da rotina há um contingente que não encolheu: quase 4,4 milhões de pessoas em abril de 2026, cerca de 58% mulheres e quase 30% crianças e adolescentes. A Polônia carrega a maior parcela desse grupo.\n\nA cláusula inédita é que merece leitura atenta. Manchetes pelo continente resumiram a decisão como a exclusão de homens em idade militar, e a síntese é imprecisa em dois pontos. Primeiro, o critério não é idade, e sim conformidade com as obrigações militares previstas na lei ucraniana, verificada pela autorização de saída emitida pelas autoridades da Ucrânia. Segundo, e mais importante, o artigo traz ressalva expressa de que não se aplica a quem já usufrui de proteção temporária quando a decisão entrar em vigor. A verificação vale para quem chegar depois, e a própria Comissão registra que Kiev desenvolve o aplicativo Reserv+ justamente para permitir baixar e imprimir os documentos de dispensa.\n\nA distância entre as duas leituras não é detalhe acadêmico. Para uma família ucraniana que reconstruiu a vida em Varsóvia ou Cracóvia desde 2022, a diferença entre estar excluída e estar expressamente preservada é a diferença entre pânico e tranquilidade. E é exatamente esse tipo de confusão que circula rápido em grupos de mensagem, onde uma manchete estrangeira mal resumida vira decisão apressada.\n\nFica também um lembrete de calendário. O acordo político é apenas a primeira etapa: a adoção formal pelo Conselho e a publicação no Jornal Oficial ainda precisam acontecer, e a decisão só passa a valer no dia seguinte à publicação. Para a comunidade WiseHub, a lição atravessa fronteiras e nacionalidades. Em imigração, o texto legal quase sempre é mais preciso, e mais generoso com quem já está dentro, do que o resumo que chega pelo celular. Ler a fonte oficial continua sendo o hábito mais barato de evitar prejuízo.", tags: ["Polônia", "Ucrânia", "Proteção temporária", "União Europeia"], sources: [{ label: "Conselho da UE · Acordo de 15 de julho de 2026 (oficial)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" }, { label: "Comissão Europeia · Proposta COM(2026) 345 final (oficial)", url: "https://home-affairs.ec.europa.eu/news/commission-proposes-extend-temporary-protection-people-fleeing-ukraine-additional-year-2026-06-26_en" }, { label: "UDSC · Proteção temporária (oficial)", url: "https://www.gov.pl/web/udsc-en/temporary-protection" }], publishedAt: "2026-07-16" },
      { headline: "Os números que confirmam a Polônia como porta de entrada da imigração na Europa Central", standfirst: "Com estrangeiros beirando 15% em Varsóvia e mais de um milhão de trabalhadores de fora, o país deixou de ser rota de passagem e virou destino de permanência.", body: "Durante anos, a Polônia foi descrita como trampolim, um lugar barato para entrar na União Europeia antes de seguir para o oeste do continente. Os dados mais recentes sugerem que essa narrativa envelheceu. O que o país mostra agora é fixação, não passagem.\n\nO indicador mais visível vem das cidades. Segundo o levantamento experimental da GUS referente ao fim de 2025, cerca de 14,5% dos moradores de Varsóvia são estrangeiros, e Wrocław supera 19%. Não se trata de trabalhadores temporários concentrados em canteiros de obra, e sim de uma presença espalhada pelo cotidiano urbano, do comércio aos serviços de tecnologia. No agregado nacional, os quase 2,3 milhões de residentes estrangeiros já representam perto de 6% da população.\n\nO mercado de trabalho ancora esse retrato em dados oficiais. Em janeiro de 2026, mais de 1,1 milhão de estrangeiros exerciam atividade remunerada no país, com crescimento anual de 7,1%. A comunidade ucraniana segue como espinha dorsal desse contingente, mas o fluxo se diversifica, e a economia polonesa mostra apetite contínuo por mão de obra vinda de fora.\n\nPara a comunidade WiseHub, a leitura é estratégica. A Polônia combina custo de vida abaixo da média do bloco, demanda real por trabalhadores e uma comunidade estrangeira grande o bastante para amparar quem chega. Quem pensa em Europa e busca um ponto de partida com menos atrito financeiro encontra ali um destino que já não é só de passagem, mas de construção de vida.", tags: ["Polônia", "Imigração", "Mercado de trabalho", "União Europeia"], sources: [{ label: "GUS · Statistics Poland (oficial)", url: "https://stat.gov.pl/en/" }, { label: "Notes from Poland", url: "https://notesfrompoland.com/2026/07/03/foreigners-now-account-for-15-of-warsaws-population/" }], publishedAt: "2026-07-09" },
    ],
  },
  ie: {
    community: [
      { publishedAt: "2026-07-15", urgency: "urgent", title: "Irlanda libera viagem de verão com o cartão IRP vencido", body: "A Irlanda anunciou em 13 de julho de 2026 uma medida que resolve um aperto real de quem mora no país e precisa viajar nas férias. O escritório de registro de Burgh Quay, em Dublin, acumula um volume muito alto de pedidos, e a renovação do Irish Residence Permit (IRP) passou de 17 semanas em algumas categorias, mais cerca de duas semanas até o cartão novo chegar às mãos do titular.\n\nPara destravar a situação, o Immigration Service Delivery emitiu um Travel Confirmation Notice válido de 13 de julho a 31 de agosto de 2026. Com ele, o não cidadão do Espaço Econômico Europeu que já pediu a renovação antes do vencimento pode viajar apresentando o IRP recém-expirado. O aviso pede às companhias aéreas que aceitem o documento vencido nessas condições.", cta: "Baixe e imprima o aviso oficial no site do Immigration Service Delivery e leve junto o IRP vencido e o e-mail que comprova a data do pedido de renovação. Avise a companhia aérea antes de viajar e, se houver conexão fora da União Europeia, confirme se aquele país aceita o documento.", sources: [{ label: "Immigration Service Delivery · Travel Confirmation Notice (oficial)", url: "https://www.irishimmigration.ie/minister-brophy-announces-initiative-to-facilitate-customers-travelling-during-the-summer-months/" }] },
      { publishedAt: "2026-07-15", urgency: "urgent", title: "💡 IRP vencido e emprego: o que o aviso aos empregadores garante até 31 de agosto", body: "Junto com a liberação de viagem, o Immigration Service Delivery publicou um aviso provisório aos empregadores. Quem está com o IRP vencido, tem employment permit válido na data ou uma permissão que dispensa esse permit, e não conseguiu o cartão novo a tempo, segue autorizado a permanecer no país nas condições do cartão atual até 31 de agosto de 2026, independentemente de quantas semanas já tenham passado.\n\nA garantia tem uma condição que não admite exceção. É preciso comprovar que o pedido de renovação foi enviado antes do vencimento do cartão, com todos os documentos exigidos anexados, incluindo o employment permit válido quando for o caso. Se a permissão venceu antes do envio do pedido, o aviso não se aplica.", cta: "Guarde o recibo do pedido com o número OREG e o e-mail de conclusão, porque é essa dupla que comprova a situação regular perante o empregador enquanto o cartão não chega.", sources: [{ label: "Immigration Service Delivery · Aviso provisório aos empregadores (oficial)", url: "https://www.irishimmigration.ie/minister-brophy-announces-interim-notice-to-employers-regarding-renewal-of-registration/" }] },
    ],
    countryTab: [
      { publishedAt: "2026-07-15", urgency: "urgent", headline: "Fila de 17 semanas em Dublin leva a Irlanda a criar salvo-conduto de verão", standfirst: "Immigration Service Delivery libera viagem com IRP vencido e garante permanência no emprego até 31 de agosto de 2026 para quem pediu renovação dentro do prazo.", body: "A Irlanda reconheceu oficialmente em 13 de julho de 2026 o gargalo do seu escritório de registro. O Immigration Services Registration Office, em Burgh Quay, Dublin, opera com um volume muito alto de pedidos, e o tempo de renovação do Irish Residence Permit passou de 17 semanas em algumas categorias. Concluída a renovação, ainda podem levar cerca de duas semanas até a entrega do novo cartão.\n\nA resposta veio em duas frentes, ambas temporárias. A primeira é o Travel Confirmation Notice, válido de 13 de julho a 31 de agosto de 2026, pelo qual o Departamento pede às transportadoras que permitam a viagem de residentes não cidadãos do Espaço Econômico Europeu com o IRP recém-vencido, desde que o pedido de renovação tenha sido enviado antes da data de expiração. O viajante precisa portar o aviso impresso, o cartão vencido e o e-mail que detalha a data do pedido. O Departamento informou que vai comunicar as companhias aéreas e as missões diplomáticas sobre o arranjo.\n\nA segunda frente é o aviso provisório aos empregadores. Quem tem employment permit válido, ou permissão que dispensa esse permit, e ficou sem o cartão por causa da fila, continua autorizado a permanecer nas condições do IRP atual até 31 de agosto de 2026, sem limite de semanas decorridas. A exigência é ter pedido a renovação antes do vencimento, com toda a documentação anexada. Depois de 31 de agosto de 2026, volta a valer o aviso permanente aos empregadores, que cobre um período de 12 semanas.\n\nTodas as renovações na República da Irlanda são feitas online. O sistema emite um recibo com número único de pedido, o OREG, e envia um e-mail de conclusão quando o pedido é aprovado. Esse e-mail funciona como prova de registro enquanto o cartão físico não chega. O órgão também publica, atualizada toda segunda-feira, a data de processamento em curso por categoria de Stamp.", keyFacts: ["Renovação do IRP em Burgh Quay passa de 17 semanas em algumas categorias, mais cerca de duas semanas até a entrega do cartão", "Travel Confirmation Notice válido de 13 de julho a 31 de agosto de 2026 permite viajar com o IRP recém-vencido", "Permanência no emprego garantida nas condições do cartão atual até 31 de agosto de 2026, sem limite de semanas decorridas", "As duas medidas exigem pedido de renovação enviado antes do vencimento, com todos os documentos anexados", "Quem deixou a permissão vencer antes de pedir a renovação fica fora das duas medidas", "Após 31 de agosto de 2026, volta a valer o aviso permanente aos empregadores, de 12 semanas"], sources: [{ label: "Immigration Service Delivery · Travel Confirmation Notice (oficial)", url: "https://www.irishimmigration.ie/minister-brophy-announces-initiative-to-facilitate-customers-travelling-during-the-summer-months/" }, { label: "Immigration Service Delivery · Aviso provisório aos empregadores (oficial)", url: "https://www.irishimmigration.ie/minister-brophy-announces-interim-notice-to-employers-regarding-renewal-of-registration/" }] },
    ],
    blog: [
      { publishedAt: "2026-07-15", headline: "O que a fila de Dublin ensina sobre morar fora: a data do pedido vale mais que o cartão", standfirst: "A Irlanda criou duas medidas de emergência para o verão de 2026, e as duas dependem de um único detalhe. Quem pediu a renovação antes do vencimento está protegido. Quem deixou vencer, não.", body: "A Irlanda seguiu por anos com a fama de resolver imigração em meses, e não em anos. O aviso publicado em 13 de julho de 2026 pelo Immigration Service Delivery mostra o outro lado dessa reputação. O escritório de registro de Burgh Quay, em Dublin, chegou a um tempo de renovação do Irish Residence Permit acima de 17 semanas em algumas categorias, com mais duas semanas até o cartão novo ser entregue. Para quem tem passagem comprada ou um empregador esperando resposta, isso deixou de ser estatística e virou problema concreto.\n\nO governo respondeu sem mudar a lei, apenas reconhecendo a realidade da fila. Criou um Travel Confirmation Notice, válido de 13 de julho a 31 de agosto de 2026, que pede às companhias aéreas que aceitem o embarque de residentes com o IRP recém-vencido. E emitiu um aviso provisório aos empregadores, garantindo que o trabalhador com employment permit válido continue autorizado a permanecer nas condições do cartão anterior até a mesma data, independentemente de quantas semanas tenham passado desde o vencimento.\n\nO ponto que amarra as duas medidas merece atenção de quem planeja qualquer mudança internacional. Nenhuma delas protege quem deixou a permissão vencer antes de enviar o pedido. O texto oficial é explícito nisso. O que separa o residente amparado do residente irregular não é o cartão na carteira, e sim a data em que o pedido de renovação entrou no sistema, com todos os documentos anexados.\n\nDaí vem a lição prática. O sistema irlandês é inteiramente online e devolve dois comprovantes que valem ouro, o recibo com o número OREG, que registra a data do pedido, e o e-mail de conclusão, aceito como prova de registro enquanto o cartão físico não chega. Guardar esses documentos, acompanhar a data de processamento por categoria de Stamp que o órgão publica toda segunda-feira e antecipar a renovação são hábitos baratos que evitam prejuízo alto.\n\nHá ainda um alerta de viagem que costuma passar batido. O aviso irlandês vale perante as transportadoras e a fronteira irlandesa, mas não obriga terceiros países. Quem faz conexão fora da União Europeia precisa checar antes se aquela jurisdição aceita o documento, sob risco de ficar parado no meio do caminho. Depois de 31 de agosto de 2026, o regime volta ao aviso permanente aos empregadores, de 12 semanas, e a margem de tolerância diminui. Planejar com a fonte oficial na mão continua sendo o método que separa a mudança tranquila do susto no aeroporto.", tags: ["Irlanda", "IRP", "renovação", "viagem", "employment permit"], sources: [{ label: "Immigration Service Delivery · Travel Confirmation Notice (oficial)", url: "https://www.irishimmigration.ie/minister-brophy-announces-initiative-to-facilitate-customers-travelling-during-the-summer-months/" }, { label: "Immigration Service Delivery · Aviso provisório aos empregadores (oficial)", url: "https://www.irishimmigration.ie/minister-brophy-announces-interim-notice-to-employers-regarding-renewal-of-registration/" }] },
    ],
  },
  ch: {
    community: [
      { title: "Suíça: salários entre os mais altos da Europa, mas com cota", body: "A Suíça segue como um dos destinos mais cobiçados do continente, em boa medida pelos salários líquidos que figuram entre os mais altos da Europa. O país tem ampliado suas cotas de admissão, tanto para nacionais da UE e da EFTA quanto para profissionais de fora desse espaço, sinalizando apetite por talento qualificado.\n\nA Secretaria de Estado para a Migração (SEM) tem deixado claras as prioridades setoriais, com destaque para fintech, indústria farmacêutica e alta tecnologia. O ponto de atenção é que a admissão de trabalhadores de fora da UE e da EFTA é governada por cotas anuais e pela exigência de alta qualificação, somada à prova de que não havia candidato disponível no mercado local ou europeu.", cta: "Como empregador costuma ser quem solicita a autorização de trabalho, alinhe esse processo com a empresa antes de se mudar, e consulte as regras de admissão diretamente no portal da SEM.", sources: [{ label: "State Secretariat for Migration (SEM)", url: "https://www.sem.admin.ch/sem/en/home.html" }] },
      { title: "💡 Registro na comuna em poucos dias após a chegada", body: "Um detalhe da vida na Suíça surpreende quem chega: o país é descentralizado, e boa parte dos trâmites de residência passa pela comuna onde a pessoa vai morar, não por um balcão nacional único. Após a entrada no país, há um prazo curto para se registrar junto às autoridades locais, normalmente dentro de poucos dias e antes de começar a trabalhar.\n\nIsso muda a forma de planejar a mudança. Saber de antemão em qual cantão e comuna você vai residir, e quais documentos a autoridade local exige, evita correria nos primeiros dias. A declaração de emprego do empregador costuma fazer parte desse pacote inicial.", cta: "Identifique cedo o cantão e a comuna de destino e separe a declaração de emprego, porque o registro local tem prazo curto e antecede o início do trabalho.", sources: [{ label: "SEM · Trabalhar na Suíça", url: "https://www.sem.admin.ch/sem/en/home/overview-arbeit.html" }] },
    ],
    countryTab: [
      { headline: "Suíça amplia cotas e mira fintech, farma e alta tecnologia", standfirst: "Com salários entre os mais altos da Europa, o país abre mais espaço para talento qualificado, mas mantém o filtro das cotas anuais.", body: "A Suíça reforçou sua política de atração de talento ampliando as cotas de admissão de trabalhadores estrangeiros. O movimento abrange tanto nacionais da União Europeia e da EFTA quanto profissionais de fora desse espaço, sinalizando que o país quer crescer sua base de mão de obra qualificada num momento de competição global por talento.\n\nA Secretaria de Estado para a Migração, a SEM, tem comunicado prioridades setoriais nítidas. Fintech, indústria farmacêutica e alta tecnologia aparecem no topo da lista, áreas em que a economia suíça é densa e a demanda por especialistas é constante. Some-se a isso um dos maiores atrativos do país, os salários líquidos, que seguem entre os mais elevados do continente.\n\nO contrapeso é o rigor do sistema. A admissão de profissionais de fora da UE e da EFTA é regida por cotas anuais e pela exigência de alta qualificação. Na regra geral, é o futuro empregador que solicita a autorização de trabalho e precisa demonstrar que não havia candidato adequado disponível na Suíça ou no espaço UE/EFTA. A descentralização administrativa também marca o processo, com etapas de registro tratadas no nível da comuna de residência.", keyFacts: ["Autoridade competente: State Secretariat for Migration (SEM)", "Cotas de admissão ampliadas para UE/EFTA e para profissionais de fora desse espaço", "Prioridade declarada para fintech, indústria farmacêutica e alta tecnologia", "Salários líquidos entre os mais altos da Europa, com admissão sujeita a cotas anuais"], sources: [{ label: "State Secretariat for Migration (SEM)", url: "https://www.sem.admin.ch/sem/en/home.html" }] },
    ],
    blog: [],
  },
  at: {
    community: [
      { urgency: "urgent", title: "Proteção temporária de ucranianos na Áustria deve seguir até março de 2028", body: "Os Estados membros da União Europeia acertaram, em 15 de julho de 2026, prorrogar por mais um ano a proteção temporária das pessoas deslocadas da Ucrânia, que passa a valer até 4 de março de 2028. O regime estava assegurado até 4 de março de 2027, e a extensão cobre o período iniciado em 5 de março daquele ano. A medida vale para a Áustria como para os demais países do bloco.\n\nSegundo a proposta da Comissão Europeia, quase 4,4 milhões de pessoas estavam sob esse abrigo na UE em abril de 2026. A adoção formal pelo Conselho e a publicação no Jornal Oficial ainda estão pendentes, e a decisão entra em vigor no dia seguinte à publicação.", cta: "Se você acompanha um caso de proteção temporária na Áustria, confirme os prazos e os documentos direto no BFA, a autoridade federal de estrangeiros e asilo.", sources: [{ label: "Conselho da UE · Acordo de 15 de julho de 2026 (oficial)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" }, { label: "BFA · Bundesamt für Fremdenwesen und Asyl (oficial)", url: "https://www.bfa.gv.at/" }], publishedAt: "2026-07-16" },
      { title: "💡 Áustria reduz estrutura de fronteira na Caríntia e cita queda da migração irregular", body: "O Ministério do Interior austríaco anunciou, em 10 de julho de 2026, a redução da infraestrutura de gestão de fronteira no ponto de Thörl-Maglern, na Caríntia, junto à divisa com a Itália. A pasta atribui a decisão ao forte recuo da migração irregular, que teria aberto espaço para desmontar parte do aparato montado nos anos anteriores.\n\nO anúncio saiu após encontro entre o ministro Gerhard Karner e a cúpula do governo estadual da Caríntia sobre temas de segurança, e inclui ainda a realocação da base de operações aéreas de Klagenfurt e o remanejamento de um centro de treinamento operacional.", cta: "Controles de fronteira mudam de intensidade conforme a conjuntura, então quem circula pela região deve levar sempre documento de identidade ou passaporte, mesmo dentro do espaço Schengen.", sources: [{ label: "BMI · Ministério do Interior da Áustria (oficial)", url: "https://www.bmi.gv.at/news.aspx?id=574D5774595479647854593D" }], publishedAt: "2026-07-16" },
      { title: "Áustria: o sistema de pontos da Red-White-Red Card", body: "A Áustria organiza a imigração qualificada em torno da Red-White-Red Card, um cartão único que combina autorização de trabalho e residência para profissionais de fora do Espaço Econômico Europeu. O coração do modelo é um sistema de pontos, que avalia critérios como qualificação, experiência profissional, idade e conhecimento de idioma.\n\nEsse desenho premia quem soma pontos em várias frentes, e abre vias mais rápidas para setores em falta no mercado, como tecnologia e saúde, pelo programa de Skilled Workers in Shortage Occupations. Entender como a pontuação funciona antes de aplicar é o que separa um pedido bem montado de uma recusa por detalhe.", cta: "Simule sua pontuação nos critérios da Red-White-Red Card (qualificação, experiência, idade e idioma) usando o portal oficial de migração antes de iniciar o pedido.", sources: [{ label: "Migration.gv.at · Portal oficial de migração da Áustria", url: "https://www.migration.gv.at/en/" }] },
      { title: "💡 Idioma e diploma reconhecido pesam na pontuação", body: "No sistema austríaco, dois fatores costumam fazer diferença real na contagem de pontos e são, ao mesmo tempo, os que mais demoram para resolver: o reconhecimento da qualificação e o conhecimento de idioma. Diplomas obtidos fora da Áustria muitas vezes precisam passar por avaliação para serem considerados, e o domínio de alemão (ou, em certos casos, inglês) adiciona pontos valiosos.\n\nPor serem etapas demoradas, valem ser tratadas cedo. Iniciar o reconhecimento do diploma e investir no idioma com antecedência amplia as chances e encurta o tempo total até a decisão, em vez de virar gargalo de última hora.", cta: "Inicie cedo o reconhecimento do seu diploma e invista no idioma, porque ambos somam pontos e são as etapas mais demoradas do processo austríaco.", sources: [{ label: "Migration.gv.at · Imigração permanente", url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/" }] },
    ],
    countryTab: [
      { urgency: "urgent", headline: "Áustria mantém proteção temporária de ucranianos até 2028 e reduz aparato de fronteira", standfirst: "Acordo europeu de 15 de julho estende o regime por mais um ano, enquanto o Ministério do Interior desmonta parte da estrutura de controle na Caríntia.", body: "Duas decisões tomadas na mesma semana ajudam a ler o momento migratório austríaco, e elas apontam para o mesmo lado. Em 15 de julho de 2026, os países da União Europeia acertaram prorrogar até 4 de março de 2028 a proteção temporária concedida a quem foi deslocado da Ucrânia, regime que estava garantido até 4 de março de 2027. Cinco dias antes, o Ministério do Interior anunciava a redução da infraestrutura de gestão de fronteira em Thörl-Maglern, na Caríntia.\n\nA prorrogação europeia mantém em vigor o instrumento ativado em março de 2022, que abrigava quase 4,4 milhões de pessoas no bloco em abril de 2026, segundo a proposta da Comissão. A rodada traz uma condição nova, ligada às obrigações militares na lei ucraniana, que impede a concessão a quem não estiver autorizado pelas autoridades da Ucrânia a deixar o país. O próprio artigo, contudo, ressalva que a regra não alcança quem já usufrui de proteção temporária na data de entrada em vigor da decisão, de modo que a verificação recai apenas sobre novos solicitantes. Falta a adoção formal e a publicação no Jornal Oficial.\n\nNa frente doméstica, o Ministério do Interior sustenta que o forte recuo da migração irregular permite reduzir estrutura. O ponto de Thörl-Maglern, na fronteira com a Itália, terá a infraestrutura diminuída, e o pacote inclui a realocação da base de operações aéreas de Klagenfurt e o remanejamento de um centro de treinamento operacional. O anúncio veio depois de reunião do ministro Gerhard Karner com a cúpula do governo da Caríntia sobre segurança.\n\nPara quem mira a Áustria por trabalho ou estudo, nada disso altera o caminho ordinário. A Red-White-Red Card segue como principal via para qualificados de fora do Espaço Econômico Europeu, com seleção por pontos e trilhas aceleradas para profissões em falta, e as regras continuam publicadas no portal federal de migração.", keyFacts: ["Acordo europeu de 15 de julho de 2026 estende a proteção temporária até 4 de março de 2028", "Condição sobre obrigações militares não se aplica a quem já tem proteção temporária na entrada em vigor", "BMI reduz a infraestrutura de fronteira em Thörl-Maglern (Caríntia) e cita queda da migração irregular", "Vias ordinárias seguem inalteradas: Red-White-Red Card e sistema de pontos, via migration.gv.at"], sources: [{ label: "Conselho da UE · Acordo de 15 de julho de 2026 (oficial)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" }, { label: "BMI · Ministério do Interior da Áustria (oficial)", url: "https://www.bmi.gv.at/news.aspx?id=574D5774595479647854593D" }, { label: "Migration.gv.at · Portal oficial de migração da Áustria", url: "https://www.migration.gv.at/en/" }], publishedAt: "2026-07-16" },
      { headline: "Áustria mira qualificados com cartão único e sistema de pontos", standfirst: "A Red-White-Red Card combina trabalho e residência, e vias expressas atendem setores de tecnologia e saúde em falta no mercado.", body: "A Áustria mantém a Red-White-Red Card como principal porta de entrada para trabalhadores qualificados de fora do Espaço Econômico Europeu. Trata-se de um cartão único, que reúne numa só autorização o direito de trabalhar e de residir no país, simplificando o que em outros lugares se divide em documentos separados.\n\nO mecanismo central é um sistema de pontos. O candidato é avaliado por critérios como qualificação acadêmica, experiência profissional, idade e conhecimento de idioma, e precisa atingir um patamar mínimo para se habilitar. Esse formato dá previsibilidade, já que a pessoa consegue estimar suas chances antes mesmo de aplicar, e direciona a seleção para perfis alinhados às necessidades da economia austríaca.\n\nPara áreas com escassez declarada de mão de obra, há o programa de Skilled Workers in Shortage Occupations, que funciona como via expressa. Tecnologia e saúde estão entre os setores contemplados, com caminhos acelerados para profissionais cujas competências o mercado local não consegue suprir. Toda a informação oficial e os critérios atualizados são centralizados no portal de migração do governo federal.", keyFacts: ["Autoridade competente na esfera migratória: BMI (Ministério do Interior), com informações no portal migration.gv.at", "Red-White-Red Card combina autorização de trabalho e residência num cartão único", "Seleção baseada em sistema de pontos (qualificação, experiência, idade e idioma)", "Via expressa para setores em falta via Skilled Workers in Shortage Occupations"], sources: [{ label: "Migration.gv.at · Portal oficial de migração da Áustria", url: "https://www.migration.gv.at/en/" }] },
    ],
    blog: [
      { headline: "A Áustria desmonta cercas enquanto renova abrigo: o pêndulo migratório europeu em duas decisões", standfirst: "Prorrogar a proteção de quase 4,4 milhões de ucranianos e reduzir estrutura de fronteira na mesma semana não é contradição. É o retrato de uma Europa que separa quem acolhe de quem barra.", body: "Julho de 2026 entregou à Áustria duas notícias que, lidas de relance, parecem puxar para lados opostos. De um lado, Viena acompanhou os demais países da União Europeia no acordo que estende até 4 de março de 2028 a proteção temporária das pessoas deslocadas da Ucrânia. De outro, o Ministério do Interior anunciou que vai reduzir a infraestrutura de controle na fronteira da Caríntia com a Itália, sustentando que a migração irregular recuou com força.\n\nA aparente contradição some quando se percebe que os dois movimentos falam de públicos distintos. A proteção temporária é um canal excepcional, ativado em março de 2022 com base numa diretiva de 2001 que dormira vinte anos na gaveta, e continua abrigando quase 4,4 milhões de pessoas no bloco, segundo os números de abril de 2026 apresentados pela Comissão. O aparato de fronteira, por sua vez, foi erguido para conter chegadas irregulares por rota terrestre. Reduzir um não significa fechar o outro, e é justamente essa separação que a política europeia vem tentando sustentar.\n\nA rodada atual da prorrogação, ainda assim, traz uma novidade que merece precisão. O texto veda a concessão de proteção a quem estiver em desacordo com as obrigações militares da lei ucraniana e, por isso, não for autorizado a deixar o país. Boa parte da cobertura resumiu a cláusula como barreira a homens em idade militar, o que distorce a regra em dois sentidos: o critério é a autorização de saída, não a idade, e o artigo diz de forma expressa que não se aplica a quem já usufrui de proteção na data de entrada em vigor. A verificação vale daí para frente, para quem chegar depois.\n\nHá ainda um detalhe de calendário que costuma escapar. O que houve em 15 de julho foi acordo entre os Estados membros. A adoção formal pelo Conselho e a publicação no Jornal Oficial da União Europeia ainda precisam ocorrer, e só no dia seguinte à publicação a decisão passa a produzir efeito.\n\nPara quem olha a Áustria como destino de trabalho ou estudo, nenhuma das duas decisões mexe no seu caminho. A Red-White-Red Card continua sendo a via central para qualificados de fora do Espaço Econômico Europeu, com o mesmo sistema de pontos que avalia qualificação, experiência, idade e idioma. O recado que fica, para a comunidade WiseHub, é de leitura: num continente onde acolhimento e contenção convivem no mesmo noticiário, confundir os dois canais é o atalho mais rápido para planejar a vida com base na notícia errada.", tags: ["Áustria", "Ucrânia", "Proteção temporária", "União Europeia"], sources: [{ label: "Conselho da UE · Acordo de 15 de julho de 2026 (oficial)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" }, { label: "Comissão Europeia · Proposta COM(2026) 345 final (oficial)", url: "https://home-affairs.ec.europa.eu/news/commission-proposes-extend-temporary-protection-people-fleeing-ukraine-additional-year-2026-06-26_en" }, { label: "BMI · Ministério do Interior da Áustria (oficial)", url: "https://www.bmi.gv.at/news.aspx?id=574D5774595479647854593D" }], publishedAt: "2026-07-16" },
    ],
  },
  be: {
    community: [
      { title: "Bélgica entre os pontos de atenção na implantação do sistema EES", body: "A entrada na Bélgica pelos aeroportos ganhou um passo a mais. O novo sistema europeu de entrada e saída, o EES, em vigor desde outubro de 2025 nos 29 países do espaço Schengen, registra digitalmente impressões digitais e imagem facial de viajantes de fora da União Europeia no primeiro cruzamento de fronteira, no lugar do antigo carimbo no passaporte.\n\nA companhia aérea Ryanair alertou para o risco de filas longas neste verão europeu, afirmando que o sistema ainda não está plenamente pronto em alguns aeroportos. A Bélgica foi citada entre os locais com transtornos, e as autoridades europeias reconhecem gargalos pontuais enquanto a implantação avança.", cta: "Chegue ao aeroporto com boa antecedência durante a fase de implantação e mantenha passaporte e comprovantes de entrada à mão para o registro biométrico.", sources: [{ label: "União Europeia · Entry/Exit System (oficial)", url: "https://travel-europe.europa.eu/ees_en" }, { label: "The Bulletin", url: "https://www.thebulletin.be/ryanair-warns-long-queues-summer-entry-exit-system-not-ready" }], publishedAt: "2026-07-09" },
      { title: "💡 O que muda com o EES para quem entra pela Bélgica", body: "O EES não altera quem pode entrar, mas muda como a entrada é registrada. Viajantes de fora da UE passam a ter a biometria coletada e armazenada numa base europeia, o que permite controlar de forma automática o limite de permanência de 90 dias dentro de cada período de 180 dias no espaço Schengen.\n\nExiste um período de flexibilidade que permite suspender temporariamente a coleta de biometria até o começo de setembro, criado justamente para absorver o impacto nos aeroportos mais movimentados. Ainda assim, a União Europeia foi clara ao afirmar que não vai suspender o sistema, que veio para ficar.", cta: "Se você entra e sai do espaço Schengen com frequência, entenda a contagem dos 90 dias em 180, porque o registro agora é automático e cruzado entre os países.", sources: [{ label: "União Europeia · Entry/Exit System (oficial)", url: "https://travel-europe.europa.eu/ees_en" }], publishedAt: "2026-07-09" },
    ],
    countryTab: [
      { headline: "Novo sistema de fronteira EES gera filas e coloca a Bélgica em alerta", standfirst: "Em vigor desde outubro de 2025, o registro biométrico de viajantes de fora da UE avança em meio a advertências sobre congestionamento nos aeroportos belgas.", body: "A modernização das fronteiras externas da União Europeia chegou aos aeroportos belgas com o sistema de entrada e saída, o EES. Operacional desde outubro de 2025 nos 29 países do espaço Schengen, ele substitui o carimbo manual no passaporte pelo registro digital de impressões digitais e imagem facial de todo viajante de fora da UE, coletados no primeiro ponto de entrada e guardados numa base comum europeia.\n\nA transição não tem sido isenta de atritos. A companhia Ryanair advertiu para o risco de filas longas durante o verão europeu, sustentando que o sistema ainda não está plenamente operacional em parte dos aeroportos, e a Bélgica figurou entre os locais com transtornos relatados. As autoridades europeias reconhecem gargalos em pontos específicos, embora afirmem que a grande maioria dos cruzamentos de fronteira funciona sem falhas.\n\nPara amortecer o impacto, vigora um período de flexibilidade que autoriza suspender temporariamente a coleta de biometria até o início de setembro. Ainda assim, a União Europeia foi enfática ao descartar qualquer suspensão do EES, apresentado como peça central de uma fronteira mais segura e do controle automático do limite de permanência de 90 dias a cada 180. Para quem entra pela Bélgica, a orientação prática é simples: contar com tempo extra na chegada enquanto a implantação se consolida.", keyFacts: ["EES em vigor desde outubro de 2025 nos 29 países do espaço Schengen", "Coleta de impressões digitais e imagem facial de viajantes de fora da UE no primeiro cruzamento de fronteira", "Ryanair alertou para filas neste verão, com a Bélgica entre os pontos com transtornos", "Período de flexibilidade permite adiar a biometria até o início de setembro, mas o sistema não será suspenso"], sources: [{ label: "União Europeia · Entry/Exit System (oficial)", url: "https://travel-europe.europa.eu/ees_en" }, { label: "The Bulletin", url: "https://www.thebulletin.be/ryanair-warns-long-queues-summer-entry-exit-system-not-ready" }], publishedAt: "2026-07-09" },
    ],
    blog: [
      { headline: "EES na prática: como o novo controle de fronteira europeu afeta quem passa pela Bélgica", standfirst: "A troca do carimbo pelo registro biométrico promete fronteiras mais seguras, mas a implantação testa a paciência nos aeroportos e exige preparo de quem viaja.", body: "Poucas mudanças recentes na Europa afetam tanto o viajante de fora do bloco quanto o sistema de entrada e saída, o EES. Discreto no discurso oficial, ele reorganiza a experiência de chegar ao continente, e a Bélgica, sede das instituições europeias e grande porta de entrada aérea, está no centro dessa transição.\n\nA lógica é substituir o carimbo manual no passaporte por um registro digital. Ao cruzar pela primeira vez uma fronteira do espaço Schengen, o viajante de fora da UE tem impressões digitais e imagem facial coletadas e armazenadas numa base europeia. O objetivo declarado é duplo: reforçar a segurança e automatizar o controle do limite de 90 dias de permanência dentro de cada janela de 180 dias.\n\nA teoria é elegante, a prática é mais áspera. Companhias como a Ryanair alertaram para filas neste verão, e a Bélgica apareceu entre os pontos de congestionamento, ao lado de destinos como Portugal, Espanha, Itália e Grécia. Bruxelas defende que a maioria dos cruzamentos funciona bem e atribui parte dos atrasos a fatores como pessoal insuficiente e infraestrutura, não ao sistema em si. Um período de flexibilidade permite adiar a biometria até setembro, mas a União Europeia descartou suspender o EES.\n\nPara a comunidade WiseHub, o aprendizado é operacional. Quem entra ou sai pela Bélgica deve planejar tempo extra nos aeroportos durante a fase de implantação, guardar comprovantes de entrada e dominar a contagem dos 90 dias, que agora é automática e compartilhada entre os países do bloco. A fronteira ficou digital, e conhecer as novas regras é o que separa uma chegada tranquila de uma surpresa na fila.", tags: ["Bélgica", "EES", "Schengen", "União Europeia"], sources: [{ label: "União Europeia · Entry/Exit System (oficial)", url: "https://travel-europe.europa.eu/ees_en" }, { label: "The Bulletin", url: "https://www.thebulletin.be/ryanair-warns-long-queues-summer-entry-exit-system-not-ready" }], publishedAt: "2026-07-09" },
    ],
  },
  bg: {
    community: [
      { title: "Bulgária: o Visto D como porta de entrada de baixo custo na UE", body: "A Bulgária vem ganhando espaço como destino acessível dentro da União Europeia, com custo de vida entre os mais baixos do bloco. A porta de entrada para estadas longas é o Visto D, o visto de longa permanência exigido de quem pretende residir no país por mais de três meses, emitido por um consulado búlgaro no exterior.\n\nA novidade é a formalização de uma subcategoria voltada ao trabalho remoto, pensada para profissionais que comprovam renda recebida de fora do país. Na sequência, o Visto D é convertido em autorização de residência junto à Direção de Migração do Ministério do Interior, num arranjo que combina entrada via consulado e regularização já em solo búlgaro.", cta: "Solicite o Visto D no consulado búlgaro antes de viajar e fique atento ao prazo curto para dar entrada na autorização de residência após a chegada, sempre conferindo as regras no portal oficial.", sources: [{ label: "Migration Directorate · Ministry of Interior of Bulgaria", url: "https://www.mvr.bg/migration/en" }] },
      { title: "💡 Comprovar renda é o eixo do caminho remoto", body: "Para quem mira a via de trabalho remoto na Bulgária, o ponto central é a comprovação de renda estável vinda de fora do país. A lógica é demonstrar que a pessoa se sustenta sem disputar uma vaga no mercado local, o que sustenta tanto a concessão inicial quanto as renovações da permanência.\n\nIsso significa organizar com antecedência os documentos financeiros, extratos, contratos, comprovantes de rendimentos recorrentes. Reunir esse material de forma clara e, quando exigido, traduzido, costuma ser o que destrava o pedido e evita idas e vindas com a autoridade.", cta: "Organize com antecedência os comprovantes de renda recorrente de fonte estrangeira, porque essa documentação sustenta tanto a concessão inicial quanto as renovações da residência.", sources: [{ label: "Migration Directorate · Sobre a Direção", url: "https://www.mvr.bg/migration/en/about-directorate" }] },
    ],
    countryTab: [
      { headline: "Bulgária formaliza trilha de trabalho remoto e atrai pela vida barata", standfirst: "Subcategoria do Visto D mira profissionais com renda externa, num dos países de menor custo da União Europeia.", body: "A Bulgária tem se apresentado como uma das opções mais econômicas para viver dentro da União Europeia, apoiada num custo de vida que está entre os mais baixos do bloco. Essa vantagem competitiva ganhou um reforço com a formalização de uma trilha dedicada ao trabalho remoto dentro do sistema de vistos do país.\n\nA estrutura parte do Visto D, o visto de longa permanência exigido de quem pretende ficar mais de três meses no território búlgaro. Ele é solicitado num consulado da Bulgária no exterior e funciona como entrada oficial. A subcategoria voltada ao trabalho remoto foi desenhada para profissionais que comprovam renda recebida de fontes externas, dando previsibilidade a quem trabalha à distância para empresas ou clientes de fora.\n\nDepois da entrada, o caminho se completa com a conversão do Visto D em autorização de residência junto à Direção de Migração do Ministério do Interior, normalmente válida por períodos renováveis. O modelo combina, assim, uma etapa consular no exterior e uma etapa de regularização já dentro da Bulgária, conduzida pela autoridade migratória nacional.", keyFacts: ["Autoridade competente: Migration Directorate (Direção de Migração) do Ministério do Interior", "Visto D é a porta de entrada para estadas superiores a três meses", "Subcategoria de trabalho remoto exige comprovação de renda de fonte externa", "Custo de vida entre os mais baixos da União Europeia"], sources: [{ label: "Migration Directorate · Ministry of Interior of Bulgaria", url: "https://www.mvr.bg/migration/en" }] },
    ],
    blog: [],
  },
  cy: {
    community: [
      { title: "Chipre, residência tax-friendly pra quem vem de fora", body: "Chipre se firmou como um dos destinos mais procurados do Mediterrâneo por brasileiros que querem estruturar finanças e morar dentro da União Europeia. O país mantém um regime de residência amigável em impostos voltado a residentes não-domiciliados, conhecidos como non-doms, que combina previsibilidade fiscal com a estabilidade de um Estado-membro da UE.\n\nO caminho mais usado por quem investe é a Permanent Residency obtida via aquisição de imóvel, com patamar a partir de 300 mil euros. É uma rota consolidada, com regras claras, que dá direito a residir no país de forma permanente. Some-se a isso um ecossistema crescente de serviços financeiros e tecnologia, e Chipre vira um hub atrativo pra quem pensa a mudança no longo prazo.", cta: "Antes de fechar qualquer compra de imóvel pra fins de residência, confirme os requisitos atuais direto no Departamento de Registo Civil e Migração (CRMD). Programas por investimento mudam de valor e de exigência, e a fonte oficial é o que vale.", sources: [{ label: "Civil Registry and Migration Department (CRMD)", url: "http://www.moi.gov.cy/moi/crmd/crmd.nsf/home_en/" }] },
      { title: "💡 O Digital Nomad Visa pra quem trabalha remoto", body: "Quem não quer comprometer capital em imóvel tem uma alternativa: o Digital Nomad Visa de Chipre, voltado a profissionais que prestam serviço de forma remota pra empresas fora do país. É a porta de entrada mais leve pra testar a vida na ilha sem o compromisso de um investimento imobiliário.\n\nO visto exige comprovação de renda mensal estável vinda do exterior e segue as regras gerais de residência temporária do país. Por ser uma categoria pensada pra trabalho à distância, não autoriza emprego em empresa local cipriota, então o vínculo profissional precisa permanecer fora de Chipre.", cta: "Junte os comprovantes de renda recorrente do exterior dos últimos meses antes de aplicar, contratos e extratos. É o documento que mais costuma travar processos de visto pra nômade digital quando vem incompleto.", sources: [{ label: "Ministry of Interior de Chipre", url: "https://www.gov.cy/moi/en/" }] },
    ],
    countryTab: [
      { headline: "Chipre, o porto fiscal da União Europeia no Mediterrâneo", standfirst: "Entre residência tax-friendly pra non-doms e residência permanente por investimento, a ilha virou base estratégica pra quem quer um pé dentro da UE.", body: "Chipre construiu sua reputação migratória sobre um pilar simples: previsibilidade. O regime de residência amigável em impostos pra residentes não-domiciliados atrai profissionais e investidores que buscam estruturar patrimônio sem abrir mão da segurança jurídica de um Estado-membro da União Europeia.\n\nA rota de Permanent Residency por investimento imobiliário, a partir de 300 mil euros, é a mais conhecida entre quem planeja se fixar. Dá direito a residir de forma permanente e atende bem famílias que pensam a mudança como projeto de longo prazo, não como passagem temporária.\n\nEm paralelo, o país investe num ecossistema de finanças e tecnologia que alimenta a demanda por mão de obra qualificada e por profissionais remotos. Essa combinação de capital, serviços e clima mediterrâneo é o que mantém Chipre no radar de quem quer morar na Europa com planejamento fiscal sólido.", keyFacts: ["Residência tax-friendly voltada a residentes não-domiciliados (non-doms)", "Permanent Residency por investimento imobiliário a partir de 300 mil euros", "Estado-membro da União Europeia, com hub crescente de finanças e tecnologia"], sources: [{ label: "Civil Registry and Migration Department (CRMD)", url: "http://www.moi.gov.cy/moi/crmd/crmd.nsf/home_en/" }] },
    ],
    blog: [],
  },
  hr: {
    community: [
      { title: "Croácia cresce pela imigração e reverte parte da queda demográfica", body: "Os dados demográficos de 2025 divulgados em 17 de julho de 2026 pelo Instituto Croata de Estatística (Državni zavod za statistiku) mostram um país que se sustenta pela imigração. No ano passado, 56.665 pessoas se mudaram para a Croácia vindas do exterior, enquanto 37.485 deixaram o país, o que resultou num saldo migratório internacional positivo de 19.180 pessoas.\n\nEsse ganho pela imigração foi maior que a perda natural da população, de 17.528 pessoas, a diferença entre óbitos e nascimentos no ano. Na prática, foi a chegada de gente de fora que segurou a demografia croata, num movimento que se repete em boa parte da Europa Central e reforça a abertura do país a quem vem trabalhar e morar.", cta: "Pensando na Croácia? Acompanhe as vias oficiais de residência e trabalho pelo Ministério do Interior, porque um país que cresce pela imigração tende a manter canais ativos pra receber estrangeiros.", sources: [{ label: "Državni zavod za statistiku (Instituto Croata de Estatística)", url: "https://dzs.gov.hr/en" }], publishedAt: "2026-07-17" },
      { title: "💡 Crescer pela imigração não é o mesmo que afrouxar o visto", body: "O saldo positivo de imigração na Croácia é uma boa notícia de contexto, mas convém ler com cuidado. Boa parte desse fluxo vem de trabalhadores estrangeiros trazidos por empregadores locais, dentro da Single Permit no padrão da União Europeia, o documento único que junta residência e trabalho. O número alto reflete demanda do mercado, não uma flexibilização automática de regras.\n\nAo mesmo tempo, o governo croata tem endurecido o discurso sobre segurança de fronteiras. Em reunião de ministros do Interior da UE em Dublin, em 17 de julho de 2026, o vice-primeiro-ministro Davor Božinović afirmou que a isenção de visto não é um direito automático, e sim um privilégio baseado em confiança. O recado é de portas abertas pra quem entra pela via legal e formal.", cta: "Tenha em mãos proposta de trabalho firme e documentação traduzida na forma exigida. Num cenário de mais controle de fronteira, o processo bem instruído é o que destrava a entrada.", sources: [{ label: "Ministarstvo unutarnjih poslova (Ministério do Interior da Croácia)", url: "https://mup.gov.hr/" }], publishedAt: "2026-07-17" },
    ],
    countryTab: [
      { headline: "Croácia sustenta a população pela imigração e mira mais controle de fronteira", standfirst: "Dados de 2025 mostram saldo migratório internacional positivo de 19.180 pessoas, acima da perda natural, enquanto o governo reforça o discurso de segurança na UE.", body: "A Croácia fechou 2025 como um país que só não encolheu porque a imigração compensou a queda natural da população. Segundo os dados divulgados em 17 de julho de 2026 pelo Instituto Croata de Estatística (Državni zavod za statistiku), 56.665 pessoas chegaram do exterior e 37.485 partiram, gerando um saldo migratório internacional positivo de 19.180 pessoas.\n\nNo mesmo período, o país registrou uma variação natural negativa de 17.528 pessoas, resultado de mais óbitos do que nascimentos. A conta final é direta: o ganho trazido pela imigração superou a perda natural, e foi a entrada de estrangeiros e de croatas retornados que segurou a demografia. O Condado de Zagreb liderou o saldo migratório interno, com mais 3.475 pessoas.\n\nEsse retrato reforça a leitura de que a Croácia, dentro do euro e do espaço Schengen desde 2023, depende da chegada de gente de fora pra manter mercado de trabalho e serviços em pé. Ao mesmo tempo, o governo tem calibrado o tom sobre fronteiras. Em reunião informal de ministros do Interior da UE em Dublin, em 17 de julho de 2026, o vice-primeiro-ministro e ministro do Interior, Davor Božinović, defendeu mais cooperação contra o crime organizado e a plena implementação do sistema europeu de Entrada e Saída (EES), lembrando que a isenção de visto é um privilégio baseado em confiança, não um direito automático.\n\nPra quem planeja se mudar, os dois movimentos se completam. Há espaço real pra imigração de trabalho, sustentada por empregadores locais e pela Single Permit europeia, mas o país acompanha a tendência do bloco de apertar controle e rastreabilidade na entrada. Quem chega pela via formal, com contrato e documentos em ordem, encontra um destino que precisa de mão de obra e valoriza o processo bem instruído.", keyFacts: ["56.665 imigrantes chegaram e 37.485 partiram em 2025, saldo positivo de 19.180 pessoas", "Variação natural negativa de 17.528 pessoas, superada pelo ganho migratório", "Fonte oficial: Instituto Croata de Estatística (Državni zavod za statistiku), dados de 17 de julho de 2026", "Governo defende plena implementação do EES e trata isenção de visto como privilégio, não direito"], sources: [{ label: "Državni zavod za statistiku (Instituto Croata de Estatística)", url: "https://dzs.gov.hr/en" }, { label: "Ministarstvo unutarnjih poslova (Ministério do Interior da Croácia)", url: "https://mup.gov.hr/" }], publishedAt: "2026-07-17" },
    ],
    blog: [
      { headline: "Na Croácia, a imigração virou o que segura a conta demográfica", standfirst: "Com 19.180 pessoas de saldo migratório positivo em 2025, o país mostra que depende de quem chega de fora, mesmo enquanto endurece o discurso de fronteira na UE.", body: "Poucos números resumem tão bem o dilema demográfico da Europa Central quanto os que a Croácia divulgou em 17 de julho de 2026. No ano de 2025, o Instituto Croata de Estatística contabilizou 56.665 pessoas chegando do exterior e 37.485 saindo, um saldo migratório internacional positivo de 19.180. No mesmo intervalo, morreram 17.528 pessoas a mais do que nasceram. Sem a imigração, o país teria encolhido; com ela, sustentou a população.\n\nEsse é o pano de fundo que explica por que a Croácia trata imigração cada vez mais como política de Estado, e não como tema secundário. O edital de 1,2 milhão de euros aberto em julho pelo Ministério da Demografia e Imigração pra estimular o retorno da diáspora, somado aos fluxos de trabalho sustentados por empregadores locais, faz parte da mesma equação: repor gente num país que envelhece e perde nascimentos.\n\nHá, porém, um segundo movimento que corre em paralelo e não pode ser ignorado por quem planeja a mudança. Na mesma semana dos dados, o vice-primeiro-ministro e ministro do Interior, Davor Božinović, levou a Dublin, numa reunião de ministros do Interior da UE, um discurso de mais controle. Defendeu reforço da cooperação policial via Europol e Eurojust, a plena implementação do sistema de Entrada e Saída da União Europeia, e afirmou que a isenção de visto é um privilégio baseado em confiança, não um direito garantido.\n\nOs dois lados dessa moeda não se contradizem, se complementam. A Croácia precisa de imigração pra funcionar, e por isso mantém canais de trabalho e de retorno ativos, mas quer que essa entrada seja rastreável, formal e alinhada às regras do bloco. Para a comunidade WiseHub, a lição é prática e serve pra vários destinos europeus: os países que mais dependem de imigração são também os que mais estão digitalizando e apertando o controle de quem entra. A porta está aberta, mas ela passa cada vez mais pela via legal, documentada e bem preparada. Chegar com contrato, diploma reconhecido e papéis em ordem deixou de ser diferencial e virou o caminho padrão.", tags: ["Croácia", "Demografia", "Imigração de trabalho", "Fronteiras UE"], sources: [{ label: "Državni zavod za statistiku (Instituto Croata de Estatística)", url: "https://dzs.gov.hr/en" }, { label: "Ministarstvo unutarnjih poslova (Ministério do Interior da Croácia)", url: "https://mup.gov.hr/" }], publishedAt: "2026-07-17" },
    ],
  },
  sk: {
    community: [
      { title: "Eslováquia, estabilidade no coração da Europa Central", body: "A Eslováquia é o tipo de destino que não faz barulho, mas entrega previsibilidade. O país adota a Single Permit no padrão da União Europeia, o documento único que reúne autorização de residência e de trabalho num só pedido, e mantém um cenário migratório estável, sem viradas bruscas de regra.\n\nPra quem é da área de tecnologia, há uma abertura gradual. O país tem buscado atrair profissionais qualificados de TI, em geral por meio de empresas parceiras já estabelecidas no mercado local. Ter um empregador eslovaco engajado no processo costuma ser o fator que mais pesa pra destravar a vinda.", cta: "Comece pela página oficial de informações pra estrangeiros do Ministério do Interior e use o sistema de agendamento da Polícia de Estrangeiros pra marcar atendimento. Evita filas e idas perdidas.", sources: [{ label: "Ministerstvo vnútra SR, informações pra estrangeiros", url: "https://www.minv.sk/?information-for-foreigners" }] },
      { title: "💡 O diploma e a tradução oficial pesam", body: "Num processo de Single Permit eslovaco, a documentação acadêmica e profissional faz diferença real. Profissionais qualificados costumam precisar comprovar formação e, muitas vezes, passar pelo reconhecimento do diploma estrangeiro pra que ele tenha validade local.\n\nVale também antecipar as traduções oficiais dos documentos pessoais e contratuais. A Eslováquia é rigorosa com a forma, e papelada incompleta ou mal traduzida é uma das causas mais frequentes de atraso, mesmo quando o perfil do candidato é forte.", cta: "Levante cedo quais documentos exigem tradução juramentada e se o seu diploma precisa de reconhecimento. Resolver isso antes de aplicar encurta o processo inteiro.", sources: [{ label: "Ministerstvo vnútra Slovenskej republiky", url: "https://www.minv.sk/" }] },
    ],
    countryTab: [
      { headline: "Eslováquia, o caminho discreto e estável pra UE", standfirst: "Com Single Permit no padrão europeu e cenário sem sobressaltos, o país abre espaço aos poucos pra profissionais de tecnologia.", body: "A Eslováquia ocupa um lugar particular no mapa migratório europeu: o da estabilidade. O país aplica a Single Permit no padrão da União Europeia, unificando residência e trabalho num único pedido, e mantém regras previsíveis, sem as oscilações que marcam destinos mais disputados.\n\nA novidade dos últimos tempos é uma abertura controlada pra trabalhadores qualificados de tecnologia. O movimento acontece sobretudo por meio de empresas parceiras já instaladas no país, o que torna o empregador local uma peça central de qualquer processo de mudança.\n\nPra o candidato, o recado é prático. Quem chega com proposta de trabalho firme, diploma reconhecido e documentação traduzida na forma correta encontra um sistema funcional e sem surpresas. A Eslováquia recompensa o planejamento mais do que a pressa.", keyFacts: ["Single Permit no padrão da União Europeia, residência e trabalho num só pedido", "Cenário migratório estável, com abertura gradual pra TI qualificada", "Empregador local costuma ser peça central do processo"], sources: [{ label: "Ministerstvo vnútra SR, informações pra estrangeiros", url: "https://www.minv.sk/?information-for-foreigners" }] },
    ],
    blog: [],
  },
  si: {
    community: [
      { title: "Eslovênia, o destino discreto que ganhou visto de nômade", body: "A Eslovênia é uma daquelas escolhas que surpreendem quem pesquisa a fundo. Pequena, dentro do espaço Schengen e da zona do euro, oferece qualidade de vida alta, natureza exuberante e segurança, tudo a uma distância curta da Itália, da Áustria e da Croácia.\n\nO país entrou no radar dos remotos ao abrir seu Digital Nomad Visa, voltado a quem trabalha à distância pra empresas de fora. A permissão é de até um ano e atende quem mantém vínculo profissional no exterior. Como é uma categoria pensada pra trabalho remoto, ela não dá direito a se empregar em empresa eslovena local.", cta: "Confirme a regra de renovação antes de planejar uma estadia longa, porque essa categoria de visto costuma ter limite de duração e regras próprias de recomeço. O portal oficial do governo é a referência.", sources: [{ label: "GOV.SI, residência temporária pra nômades digitais", url: "https://www.gov.si/en/topics/temporary-residence-of-foreigners/" }] },
      { title: "💡 Schengen e euro abrem a Europa toda", body: "Morar na Eslovênia é também ganhar a Europa de bônus. Por estar no espaço Schengen, o país permite circular sem fronteiras internas por boa parte do continente, e por usar o euro elimina o atrito de câmbio no dia a dia e nas viagens.\n\nEssa posição central, somada à qualidade de vida e a um custo geralmente mais ameno que o das grandes capitais europeias, faz da Eslovênia uma base estratégica pra quem trabalha remoto e quer explorar o continente sem fazer da própria moradia um peso no orçamento.", cta: "Comprove fundos de subsistência suficientes pra todo o período pretendido, é exigência típica desse tipo de visto. Saldo e renda demonstrável evitam indeferimento.", sources: [{ label: "Portal oficial do Governo da Eslovênia", url: "https://www.gov.si/en/" }] },
    ],
    countryTab: [
      { headline: "Eslovênia, qualidade de vida europeia em escala humana", standfirst: "No Schengen e no euro, o país abriu um Digital Nomad Visa e cresce como destino silencioso pra quem trabalha remoto.", body: "A Eslovênia costuma passar despercebida entre os destinos europeus, e é justamente aí que mora seu apelo. País pequeno, dentro do espaço Schengen e da zona do euro, entrega segurança, natureza e qualidade de vida alta numa posição central, encaixada entre Itália, Áustria, Hungria e Croácia.\n\nO movimento mais recente foi a criação do Digital Nomad Visa, pensado pra profissionais que trabalham à distância pra empresas estrangeiras. A permissão tem duração de até um ano e exige renda vinda do exterior, sem autorizar emprego em empresa local eslovena, já que a lógica da categoria é o trabalho remoto.\n\nA combinação de moeda comum, livre circulação pelo continente e custo mais ameno que o das grandes capitais europeias faz do país uma base discreta e eficiente. Pra quem quer viver bem na Europa sem holofotes, a Eslovênia entrega exatamente isso.", keyFacts: ["Espaço Schengen e zona do euro, com livre circulação pelo continente", "Digital Nomad Visa de até um ano, com renda comprovada do exterior", "Não autoriza emprego em empresa local eslovena"], sources: [{ label: "GOV.SI, residência temporária pra nômades digitais", url: "https://www.gov.si/en/topics/temporary-residence-of-foreigners/" }] },
    ],
    blog: [],
  },
  ee: {
    community: [
      { title: "Estônia, a pioneira do mundo digital", body: "A Estônia é referência global quando o assunto é Estado digital. Foi o primeiro país a criar a e-Residency, que permite a empreendedores abrir e operar uma empresa na União Europeia de forma totalmente remota, e um dos primeiros a lançar um Digital Nomad Visa estruturado pra quem trabalha à distância.\n\nO setor de tecnologia é robusto e a burocracia, baixa pra padrões europeus. Boa parte dos serviços públicos roda online, o que se reflete na velocidade dos processos migratórios. As decisões de visto costumam sair em prazos curtos, algo raro de se ver na Europa.", cta: "Não confunda e-Residency com direito de morar no país, são coisas diferentes. A e-Residency abre empresa na UE, mas quem pretende residir precisa do visto ou da autorização de residência adequada.", sources: [{ label: "Politsei, Police and Border Guard Board", url: "https://www.politsei.ee/en/" }] },
      { title: "💡 e-Residency abre empresa, não residência", body: "Vale insistir nesse ponto porque é a confusão mais comum sobre a Estônia. A e-Residency dá uma identidade digital pra administrar uma empresa europeia de qualquer lugar do mundo, assinar documentos e acessar serviços online, mas não concede cidadania, residência nem direito de entrada no país.\n\nQuem quer de fato viver na Estônia precisa do Digital Nomad Visa, no caso de trabalho remoto pra empresa estrangeira, ou de outra autorização de residência compatível com o objetivo. São trilhos paralelos: um é empresarial e digital, o outro é migratório.", cta: "Defina primeiro o objetivo, operar empresa de longe ou morar no país, e só então escolha a via certa. Misturar os dois é o que mais gera frustração e retrabalho.", sources: [{ label: "e-Residency, governo da Estônia", url: "https://www.e-resident.gov.ee/" }] },
    ],
    countryTab: [
      { headline: "Estônia, governo digital e burocracia mínima", standfirst: "Pioneira em e-Residency e Digital Nomad Visa, a Estônia entrega um setor tech forte e decisões de visto em prazos curtos.", body: "A Estônia transformou a digitalização do Estado em vantagem competitiva migratória. Foi pioneira em dois movimentos que viraram referência mundial: a e-Residency, que permite abrir e operar uma empresa na União Europeia de forma 100% remota, e um Digital Nomad Visa pensado pra quem trabalha à distância pra empresas de fora.\n\nPor trás disso há um setor de tecnologia robusto e uma burocracia enxuta pra padrões europeus. Como grande parte dos serviços públicos é digital, os processos correm rápido, e as decisões de visto costumam sair em prazos curtos, um diferencial concreto frente a outros países do bloco.\n\nO cuidado essencial é entender a diferença entre os trilhos. A e-Residency é uma ferramenta empresarial e digital, não um direito de morar no país. Quem pretende residir de fato precisa do visto ou da autorização de residência adequada ao seu caso.", keyFacts: ["Pioneira em e-Residency, abertura de empresa na UE de forma 100% remota", "Digital Nomad Visa estruturado pra trabalho à distância", "Setor tech robusto, baixa burocracia e decisões de visto em prazos curtos"], sources: [{ label: "Politsei, Police and Border Guard Board", url: "https://www.politsei.ee/en/" }] },
    ],
    blog: [],
  },
  fi: {
    community: [
      { title: "Finlândia nega maioria dos vistos sazonais para colheita de frutas silvestres", body: "A temporada de colheita de frutas silvestres na Finlândia começou sob rigor redobrado. Segundo o governo finlandês, das cerca de 2,2 mil solicitações de visto de trabalho sazonal para apanhadores de frutas, aproximadamente 1,6 mil foram processadas e cerca de 1,4 mil acabaram recusadas.\n\nO principal motivo apontado é a falta de garantia de que os empregadores cumpririam suas obrigações legais, num setor que já registrou indícios de exploração de trabalhadores. As decisões cabem ao Ministério das Relações Exteriores e às missões finlandesas no exterior, com a maior parte dos pedidos apresentada na Tailândia. A colheita passou a exigir visto sazonal após uma emenda à lei de trabalhadores sazonais que entrou em vigor em fevereiro de 2025.", cta: "Antes de aceitar trabalho sazonal na Finlândia, verifique a idoneidade do empregador e as condições no visto, porque o país tem reforçado a fiscalização para coibir abusos.", sources: [{ label: "Valtioneuvosto · Governo da Finlândia (oficial)", url: "https://valtioneuvosto.fi/en/-/majority-of-seasonal-work-visa-applications-for-wild-berry-pickers-refused" }], publishedAt: "2026-07-09" },
      { title: "💡 Muda a forma de notificar decisões de asilo na Finlândia", body: "A partir de julho de 2026, o Serviço de Imigração da Finlândia, a Migri, altera a forma como comunica as decisões de asilo. Para quem tem assistência jurídica, a decisão passa a ser entregue ao advogado por correio registrado dos Correios, e o solicitante recebe a notificação do resultado num idioma que compreende.\n\nPara quem não tem representação legal, a decisão e as instruções de recurso são entregues em idioma compreensível, com apoio de intérprete quando necessário. A mudança é automática e não exige nenhuma ação do solicitante, mas vale conhecê-la para saber o que esperar ao acompanhar um processo.", cta: "Se você acompanha um pedido de asilo na Finlândia, confirme com a Migri por qual via receberá a decisão e mantenha seus dados de contato e representação atualizados.", sources: [{ label: "Migri · Serviço de Imigração da Finlândia (oficial)", url: "https://migri.fi/en/-/changes-to-service-of-asylum-decisions-from-july-2026" }], publishedAt: "2026-07-09" },
      { title: "Finlândia abre consulta para estender a lei de segurança de fronteira até 2028", body: "O Ministério do Interior finlandês colocou em consulta pública, em 10 de julho de 2026, a proposta que prorroga a validade da chamada lei de segurança de fronteira. O nome oficial é lei sobre medidas temporárias de combate à migração instrumentalizada, e o texto define em quais condições a Finlândia pode restringir o recebimento de pedidos de proteção internacional numa área delimitada da fronteira nacional.\n\nA proposta não mexe no conteúdo da lei, apenas no prazo: a validade passaria a alcançar 31 de dezembro de 2028. A norma entrou em vigor em 22 de julho de 2024, valia por um ano e já havia sido prorrogada até 31 de dezembro de 2026. As manifestações podem ser enviadas até 14 de agosto de 2026, e o governo pretende levar o projeto ao Parlamento em setembro.", cta: "Se o seu plano envolve a Finlândia, acompanhe a tramitação no portal do governo, porque a regra trata da fronteira terrestre e não altera vistos de trabalho, estudo ou residência.", sources: [{ label: "Valtioneuvosto · Consulta sobre a lei de segurança de fronteira (oficial)", url: "https://valtioneuvosto.fi/en/-/1410869/views-invited-on-legislative-proposal-to-extend-validity-of-border-security-act" }], publishedAt: "2026-07-16" },
      { title: "💡 Recusa de vistos sazonais ganha defesa política e alerta do setor", body: "A recusa da maioria dos vistos sazonais para a colheita de frutas silvestres virou disputa pública na Finlândia. A ministra das Finanças, Riikka Purra, do partido dos Finlandeses, defendeu a decisão e questionou por que o país precisaria trazer apanhadores do outro lado do mundo enquanto o desemprego doméstico segue alto, classificando a situação como muito incomum.\n\nDo lado do setor, a diretora executiva da Arctic Aromas, Birgitta Partanen, alertou que grandes volumes de frutas podem ficar sem colher e projetou alta de preços. O episódio mostra que a régua mais rígida sobre a idoneidade do empregador tem custo econômico, e que o governo escolheu pagá-lo.", cta: "Trabalho sazonal na Finlândia depende do empregador cumprir obrigações legais, então confirme contrato, condições e alojamento antes de aceitar qualquer proposta.", sources: [{ label: "Yle News · Emissora pública finlandesa", url: "https://yle.fi/a/74-20236501" }], publishedAt: "2026-07-16" },
    ],
    countryTab: [
      { headline: "Finlândia quer manter até 2028 a lei que permite fechar a fronteira a pedidos de asilo", standfirst: "Ministério do Interior abriu consulta pública sobre prorrogar a lei de migração instrumentalizada, sem mudar o conteúdo, com prazo de manifestação até 14 de agosto.", body: "A Finlândia iniciou o processo para manter em vigor, por mais dois anos, o instrumento legal que lhe permite suspender o recebimento de pedidos de proteção internacional em trechos determinados da fronteira. Em 10 de julho de 2026, o Ministério do Interior abriu consulta pública sobre a proposta que estende a validade da lei sobre medidas temporárias de combate à migração instrumentalizada, conhecida no país como lei de segurança de fronteira.\n\nO desenho da proposta é deliberadamente enxuto. Nada muda no conteúdo da norma, que segue estabelecendo as condições sob as quais o país pode restringir, numa área limitada da fronteira nacional, a apresentação de pedidos de asilo. O que muda é o relógio: a validade, hoje fixada em 31 de dezembro de 2026, passaria a valer até 31 de dezembro de 2028.\n\nA lei nasceu como resposta ao que Helsinque classifica como instrumentalização da migração pela Rússia, quando fluxos de solicitantes foram direcionados à fronteira leste. Entrou em vigor em 22 de julho de 2024, com duração inicial de um ano, e já passou por uma prorrogação até o fim de 2026. As manifestações da consulta podem ser enviadas até 14 de agosto de 2026, e o governo pretende encaminhar o projeto ao Parlamento em setembro.\n\nPara quem planeja a Finlândia como destino, convém separar as coisas. A norma trata da fronteira terrestre e do canal de asilo, e não altera as vias ordinárias de visto de trabalho, estudo ou residência, que continuam sob as regras de sempre e sob a gestão da Migri.", keyFacts: ["Consulta pública aberta pelo Ministério do Interior em 10 de julho de 2026, com prazo até 14 de agosto de 2026", "Proposta estende a validade da lei até 31 de dezembro de 2028, sem alterar o conteúdo", "Lei em vigor desde 22 de julho de 2024, inicialmente por um ano, já prorrogada até 31 de dezembro de 2026", "Governo pretende submeter o projeto ao Parlamento em setembro de 2026"], sources: [{ label: "Valtioneuvosto · Consulta sobre a lei de segurança de fronteira (oficial)", url: "https://valtioneuvosto.fi/en/-/1410869/views-invited-on-legislative-proposal-to-extend-validity-of-border-security-act" }], publishedAt: "2026-07-16" },
      { headline: "Finlândia recusa maioria dos vistos sazonais de colheita e reforça combate à exploração", standfirst: "Cerca de 1,4 mil dos 1,6 mil pedidos processados foram negados, com o governo citando dúvidas sobre o cumprimento das obrigações dos empregadores.", body: "A Finlândia endureceu a concessão de vistos de trabalho sazonal para a colheita de frutas silvestres, atividade tradicional que atrai milhares de trabalhadores estrangeiros a cada verão. De acordo com o governo finlandês, cerca de 2,2 mil pedidos foram apresentados, cerca de 1,6 mil foram processados e aproximadamente 1,4 mil terminaram recusados.\n\nA justificativa central, apresentada pela direção da unidade de vistos, é a falta de convicção de que os empregadores cumpririam suas obrigações legais. O setor carrega histórico de indícios de exploração de mão de obra, e as autoridades citaram preocupações que vão de descumprimento de deveres estatutários a alegações mais graves. As decisões cabem ao Ministério das Relações Exteriores e às representações finlandesas no exterior, e a maior parte das solicitações partiu da Tailândia, com a embaixada em Bangkok concentrando cerca de 2,1 mil pedidos.\n\nO pano de fundo é uma mudança legal. Uma emenda à lei de trabalhadores sazonais, em vigor desde fevereiro de 2025, passou a submeter a colheita de frutas silvestres à exigência de visto sazonal, sujeitando a atividade a um controle mais estrito. O resultado deste ano mostra na prática o efeito dessa régua mais alta, num país que tem buscado equilibrar a necessidade de mão de obra sazonal com a proteção de quem vem trabalhar.", keyFacts: ["Cerca de 2,2 mil pedidos apresentados, 1,6 mil processados e aproximadamente 1,4 mil recusados", "Motivo principal: falta de garantia de que os empregadores cumpririam obrigações legais", "Decisões a cargo do Ministério das Relações Exteriores e das missões finlandesas no exterior", "Colheita passou a exigir visto sazonal após emenda em vigor desde fevereiro de 2025"], sources: [{ label: "Valtioneuvosto · Governo da Finlândia (oficial)", url: "https://valtioneuvosto.fi/en/-/majority-of-seasonal-work-visa-applications-for-wild-berry-pickers-refused" }], publishedAt: "2026-07-09" },
    ],
    blog: [
      { headline: "Vistos sazonais na Finlândia: quando proteger o trabalhador vira critério de entrada", standfirst: "A recusa em massa de vistos para colheita de frutas silvestres mostra um país disposto a barrar a mão de obra quando não confia no empregador.", body: "A imagem da Finlândia como destino de imigração eficiente costuma vir associada a talento qualificado, tecnologia e saúde. A temporada de 2026 acrescentou um capítulo menos comentado, mas igualmente revelador: o de um Estado que prefere negar vistos a arriscar colocar trabalhadores em mãos pouco confiáveis.\n\nOs números dão a dimensão. Dos cerca de 2,2 mil pedidos de visto sazonal para a colheita de frutas silvestres, aproximadamente 1,6 mil foram analisados e cerca de 1,4 mil foram recusados. A razão não foi o perfil dos candidatos, e sim a desconfiança quanto aos empregadores, num setor marcado por relatos de exploração. As decisões partiram do Ministério das Relações Exteriores e das missões no exterior, com forte concentração de pedidos na Tailândia.\n\nO gatilho legal veio antes. Uma emenda à lei de trabalhadores sazonais, vigente desde fevereiro de 2025, trouxe a colheita de frutas silvestres para dentro do regime de visto sazonal, o que deu às autoridades a base para recusar quando as garantias não aparecem. É uma inversão sutil de lógica: em vez de apenas facilitar a entrada de quem preenche requisitos, o sistema passa a filtrar também a idoneidade de quem contrata.\n\nPara quem observa a imigração de trabalho na Europa, o caso finlandês é um sinal de tendência. A proteção do trabalhador estrangeiro deixa de ser discurso e vira critério prático de concessão de visto. Para a comunidade WiseHub, o recado é direto: em destinos que apertam essa fiscalização, checar a reputação e a conformidade do empregador antes de embarcar deixou de ser cautela extra e virou parte essencial do planejamento.", tags: ["Finlândia", "Trabalho sazonal", "Vistos", "Direitos do trabalhador"], sources: [{ label: "Valtioneuvosto · Governo da Finlândia (oficial)", url: "https://valtioneuvosto.fi/en/-/majority-of-seasonal-work-visa-applications-for-wild-berry-pickers-refused" }, { label: "Migri · Serviço de Imigração da Finlândia", url: "https://migri.fi/en/" }], publishedAt: "2026-07-09" },
    ],
  },
  gr: {
    community: [
      { title: "Grécia: três caminhos para o Mediterrâneo", body: "A Grécia se consolidou como uma das portas de entrada mais procuradas da Europa do Sul, combinando residência via investimento, vistos para nômades digitais e o acesso amplo que vem com o espaço Schengen. O Golden Visa segue atrativo, com valores de entrada que variam conforme a região do imóvel, mais altos em zonas premium como Ática, Tessalônica e ilhas de maior demanda, e mais baixos no restante do país.\n\nPara quem trabalha remoto, o Digital Nomad Visa virou um dos favoritos do continente. Ele exige comprovação de renda mensal recorrente vinda de fora da Grécia e permite viver legalmente no país enquanto se atende clientes ou empregadores no exterior. A soma de clima ameno, custo de vida razoável e mobilidade europeia explica o fluxo crescente de brasileiros.", cta: "Confira sempre os valores e regiões atualizados direto no portal do Ministério da Migração antes de fechar qualquer compra de imóvel, porque o threshold do Golden Visa muda conforme a localização.", sources: [{ label: "Ministério da Migração e Asilo da Grécia", url: "https://migration.gov.gr/en/" }] },
      { title: "💡 Comprovação de renda no Digital Nomad Visa", body: "O ponto que mais reprova candidatos ao visto de nômade digital grego não é burocrático, é financeiro. A autoridade quer ver renda estável e recorrente, normalmente comprovada por extratos bancários dos últimos meses, contratos de trabalho remoto ou declaração de atividade como autônomo.\n\nQuem é freelancer com receita irregular costuma ter mais dificuldade do que quem tem contrato fixo com empresa estrangeira. Organizar a documentação financeira com antecedência, traduzida quando exigido, encurta bastante o processo.", cta: "Monte uma pasta com extratos bancários recentes e comprovantes de renda antes de aplicar, e confirme o formato aceito no site oficial da migração grega.", sources: [{ label: "Ministério da Migração e Asilo da Grécia", url: "https://migration.gov.gr/en/" }] },
    ],
    countryTab: [
      { headline: "Grécia equilibra investimento, trabalho remoto e estilo de vida", standfirst: "O país do Mediterrâneo mantém o Golden Visa entre os mais comentados da Europa e amplia o apelo para nômades digitais, com a mobilidade Schengen como pano de fundo.", body: "A política migratória grega gira em torno de dois eixos principais para quem vem de fora da União Europeia. De um lado, o Golden Visa atrai investidores com a possibilidade de residência a partir da aquisição de imóveis, com valores de entrada escalonados conforme a região do país. De outro, o Digital Nomad Visa abre espaço para profissionais remotos que comprovem renda vinda do exterior.\n\nA gestão da migração está a cargo do Ministério da Migração e Asilo, que centraliza pedidos, agendamentos e a digitalização progressiva dos serviços. A tendência das autoridades tem sido ajustar critérios de renda e de investimento ao longo do tempo, o que torna a consulta à fonte oficial indispensável antes de qualquer decisão.\n\nPara o brasileiro, o atrativo combina fatores difíceis de encontrar juntos: clima ameno, custo de vida mais acessível que o do norte europeu e a liberdade de circular pelo espaço Schengen. É um destino que recompensa quem planeja a documentação financeira com cuidado.", keyFacts: ["Golden Visa com valor de entrada que varia conforme a região do imóvel, mais alto em zonas premium", "Digital Nomad Visa exige renda recorrente comprovada vinda de fora da Grécia", "Autoridade competente: Ministério da Migração e Asilo (migration.gov.gr)", "Residência grega dá acesso à livre circulação no espaço Schengen"], sources: [{ label: "Ministério da Migração e Asilo da Grécia", url: "https://migration.gov.gr/en/" }] },
    ],
    blog: [],
  },
  nl: {
    community: [
      { publishedAt: "2026-07-15", title: "ETIAS adiado de novo: a autorização de viagem à Europa fica para 2027", body: "Quem planejava a primeira viagem à Holanda contando com o ETIAS ganhou mais fôlego. Segundo apuração do Financial Times, divulgada em 11 de julho de 2026, o sistema europeu de autorização de viagem foi adiado outra vez e não deve entrar no ar neste ano, com a estreia empurrada para 2027. O motivo apontado é o tumulto na implantação do EES, o sistema de registro de entrada e saída que tem gerado filas longas no controle de passaportes.\n\nO site oficial da União Europeia mantém uma posição prudente e informa apenas que o ETIAS não está em operação e que nenhum pedido de autorização está sendo recebido neste momento. O bloco afirma que vai comunicar a data específica de início com vários meses de antecedência.", cta: "Enquanto isso, guarde esta regra de ouro: como o sistema ainda não recebe pedidos, qualquer site cobrando por um ETIAS hoje é golpe. A informação válida sai no portal oficial travel-europe.europa.eu.", sources: [{ label: "União Europeia · Portal oficial do ETIAS", url: "https://travel-europe.europa.eu/etias_en" }, { label: "IamExpat in the Netherlands · ETIAS adiado para 2027", url: "https://www.iamexpat.nl/expat-info/dutch-news/eu-delays-etias-launch-until-2027-due-ees-border-chaos" }] },
      { publishedAt: "2026-07-15", title: "💡 Quem mora na Holanda com residência não precisa de ETIAS", body: "Vale separar duas situações que costumam se confundir. O ETIAS é uma autorização de viagem para quem é dispensado de visto e vai à Europa por temporada curta, não um substituto de visto nem de autorização de residência. Nacionais de 59 países isentos de visto, o Brasil entre eles, precisarão preencher um formulário com dados pessoais, de passaporte e de segurança, pagar 20 euros e obter a autorização antes de viajar a 30 países europeus, incluindo a Holanda.\n\nJá quem não é cidadão da União Europeia mas tem autorização de residência holandesa fica fora dessa exigência. Nesse caso, basta apresentar o passaporte e a autorização de residência na fronteira. A autorização do ETIAS, quando entrar em vigor, ficará vinculada ao passaporte, valerá por até três anos e permitirá várias viagens.", cta: "Se o seu plano é morar na Holanda, o foco continua sendo a autorização de residência junto à IND. O ETIAS só entra na conta em visitas curtas, antes de você ter residência.", sources: [{ label: "União Europeia · Portal oficial do ETIAS", url: "https://travel-europe.europa.eu/etias_en" }, { label: "IND, serviço de imigração da Holanda", url: "https://ind.nl/en" }] },
    ],
    countryTab: [
      { publishedAt: "2026-07-15", headline: "Adiamento do ETIAS para 2027 muda o cálculo de quem visita a Holanda", standfirst: "Financial Times aponta nova postergação do sistema europeu de autorização de viagem, pressionado pelo tumulto do EES nas fronteiras. Portal oficial da União Europeia segue sem confirmar data.", body: "O sistema europeu de autorização de viagem foi adiado mais uma vez. Segundo apuração do Financial Times, publicada em 11 de julho de 2026, o ETIAS não deve entrar em operação neste ano e teve a estreia empurrada para 2027. A última data anunciada e depois abandonada era o último trimestre de 2026, e o sistema já vinha adiado desde a previsão original, de 2022.\n\nA causa apontada é o efeito cascata de outro sistema. O EES, que registra a entrada e a saída de estrangeiros com dados de passaporte e biometria na primeira chegada ao bloco, teve implantação conturbada e vem provocando esperas longas no controle de passaportes e atrasos de voos neste verão europeu. Companhias aéreas e aeroportos chegaram a pedir a suspensão do EES durante o pico da temporada, mas o bloco recusou, afirmando que a medida não é necessária e que os problemas de fila se concentram em cerca de 20 pontos críticos.\n\nO portal oficial da União Europeia não confirma o novo prazo e mantém uma formulação cautelosa. Informa que o ETIAS não está em operação, que nenhum pedido de autorização está sendo coletado neste momento e que a data específica de início será comunicada com vários meses de antecedência. Essa distância entre a apuração da imprensa e o comunicado oficial é o que o viajante precisa ter em mente antes de tomar qualquer decisão.\n\nPara o público brasileiro, o tema é direto ao ponto. O Brasil está entre os 59 países cujos nacionais viajam à Europa sem visto, e é justamente esse grupo que precisará do ETIAS quando o sistema entrar no ar, ao custo de 20 euros, com autorização vinculada ao passaporte, válida por até três anos e boa para várias viagens a 30 países europeus, a Holanda incluída. Já quem não é cidadão europeu mas tem autorização de residência holandesa não precisará do ETIAS, bastando apresentar passaporte e a autorização na fronteira. Quando a estreia finalmente ocorrer, haverá um período de transição de seis meses, durante o qual quem não tiver preenchido o formulário não terá a entrada negada.", keyFacts: ["Financial Times aponta, em 11 de julho de 2026, adiamento do ETIAS para 2027", "Última data anunciada e abandonada era o último trimestre de 2026; a previsão original era 2022", "Portal oficial da União Europeia não confirma data e diz que avisará com vários meses de antecedência", "Nenhum pedido de ETIAS está sendo coletado neste momento, o que torna golpe qualquer cobrança hoje", "Custo previsto de 20 euros, autorização vinculada ao passaporte, válida por até três anos, para 30 países europeus", "Brasil está entre os 59 países isentos de visto cujos nacionais precisarão do ETIAS", "Residentes com autorização holandesa ficam dispensados: basta passaporte e autorização de residência", "Adiamento é atribuído ao tumulto na implantação do EES, com filas no controle de passaportes"], sources: [{ label: "União Europeia · Portal oficial do ETIAS", url: "https://travel-europe.europa.eu/etias_en" }, { label: "IamExpat in the Netherlands · ETIAS adiado para 2027", url: "https://www.iamexpat.nl/expat-info/dutch-news/eu-delays-etias-launch-until-2027-due-ees-border-chaos" }, { label: "IND, serviço de imigração da Holanda", url: "https://ind.nl/en" }] },
    ],
    blog: [
      { publishedAt: "2026-07-15", headline: "O ETIAS que não chega: o adiamento diz mais sobre a Europa do que sobre o sistema", standfirst: "Quatro anos depois da data original, a autorização de viagem europeia foi empurrada para 2027 porque outro sistema de fronteira travou. Para o viajante brasileiro, a lição é sobre onde buscar informação.", body: "O ETIAS deveria ter estreado em 2022. A data foi sendo empurrada seguidas vezes, chegou ao último trimestre de 2026 e agora, segundo apuração do Financial Times publicada em 11 de julho de 2026, escorregou para 2027. A repetição já virou quase piada entre quem acompanha fronteiras europeias, mas o motivo desta vez é concreto e vale entender, porque explica o que o viajante encontra hoje ao desembarcar na Holanda.\n\nO culpado indireto é o EES, o sistema de entrada e saída que registra passaporte e biometria de estrangeiros na primeira chegada ao bloco. A implantação foi acidentada e o resultado apareceu no lugar mais visível possível, a fila do controle de passaportes, com esperas longas e voos atrasados em pleno verão europeu. Companhias aéreas e aeroportos pediram a suspensão temporária do EES durante o pico da temporada. O bloco recusou, argumentando que a suspensão não é necessária e que a dificuldade se concentra em cerca de 20 pontos críticos. Empilhar sobre esse cenário a estreia de um segundo sistema, que atingiria todos os viajantes isentos de visto, seria pedir para o problema crescer.\n\nAqui entra o ponto que mais interessa a quem lê a WiseHub, e ele não é a data. É a diferença entre o que a imprensa apura e o que o governo confirma. O portal oficial da União Europeia não fala em 2027. Ele diz, com todas as letras, que o ETIAS não está em operação, que nenhum pedido de autorização está sendo coletado neste momento e que a data específica será anunciada com vários meses de antecedência. Ou seja, o adiamento é uma informação jornalística sólida, mas a data oficial ainda não existe. Quem trata apuração como decreto acaba planejando em cima de areia.\n\nEssa distinção tem consequência prática imediata, e ela é financeira. Como o sistema não recebe pedidos, nenhuma taxa de ETIAS é legítima hoje. Todo site que ofereça o processamento da sua autorização neste momento, por 20 euros ou por qualquer valor, está vendendo o que não existe. Historicamente, cada anúncio de adiamento vem acompanhado de uma nova onda de páginas que imitam a identidade visual oficial e cobram por um serviço fantasma.\n\nQuando o ETIAS enfim entrar no ar, o desenho já é conhecido. Nacionais de 59 países isentos de visto, o Brasil entre eles, preencherão um formulário com dados pessoais, de passaporte e de segurança, pagarão 20 euros e receberão uma autorização vinculada ao passaporte, válida por até três anos e boa para várias viagens a 30 países europeus. Haverá ainda um período de transição de seis meses em que quem não tiver preenchido o formulário não terá a entrada negada. E quem já tem autorização de residência holandesa segue fora da exigência, apresentando passaporte e residência na fronteira.\n\nA leitura final é quase um manual de método. Fronteira europeia hoje é um canteiro de obras, com um sistema em rodagem difícil e outro na fila de espera. Nesse ambiente, a única defesa do viajante é o hábito de conferir a fonte primária, que no caso é o portal oficial travel-europe.europa.eu, e desconfiar por princípio de qualquer atalho pago. Mais um adiamento não muda o seu plano de viagem. Cair num site falso, muda.", tags: ["Holanda", "ETIAS", "EES", "fronteiras", "viagem"], sources: [{ label: "União Europeia · Portal oficial do ETIAS", url: "https://travel-europe.europa.eu/etias_en" }, { label: "IamExpat in the Netherlands · ETIAS adiado para 2027", url: "https://www.iamexpat.nl/expat-info/dutch-news/eu-delays-etias-launch-until-2027-due-ees-border-chaos" }, { label: "IND, serviço de imigração da Holanda", url: "https://ind.nl/en" }] },
    ],
  },
  hu: {
    community: [
      { title: "Hungria: política dura, mas com porta para investidores", body: "A Hungria seguiu, sob o governo Orbán, uma linha migratória das mais restritivas da União Europeia, com tensão recorrente com Bruxelas sobre regras de fronteira. Ao mesmo tempo, reativou um programa de residência por investimento, o Guest Investor Program, voltado a quem aporta recursos em fundos imobiliários aprovados ou em propriedade.\n\nEssa combinação de discurso duro com abertura seletiva ao capital é a marca da política húngara atual. Para o estrangeiro comum, o caminho é mais estreito, mas para investidores existe uma rota formal e definida.", cta: "Consulte os requisitos e canais oficiais do Guest Investor Program diretamente no portal da Direção-Geral de Imigração antes de comprometer qualquer aporte.", sources: [{ label: "Direção-Geral Nacional de Estrangeiros da Hungria (OIF)", url: "https://oif.gov.hu/factsheets" }] },
      { title: "💡 White Card: residência para quem trabalha remoto", body: "Para profissionais que trabalham de forma remota para empresas de fora do país, a Hungria oferece a White Card, sua versão de visto para nômades digitais. Ela permite residir no país enquanto se presta serviço a empregadores ou clientes estrangeiros, com comprovação de renda mensal.\n\nO processamento dos pedidos passa pela plataforma eletrônica oficial Enter Hungary, na qual se faz o registro e o agendamento. Organizar a documentação de renda e o cadastro online com antecedência evita idas e voltas.", cta: "Faça o registro pela plataforma Enter Hungary e confira a lista de documentos exigidos no site oficial da imigração húngara antes de iniciar o pedido.", sources: [{ label: "Direção-Geral Nacional de Estrangeiros da Hungria (OIF)", url: "https://oif.gov.hu/factsheets" }] },
    ],
    countryTab: [
      { headline: "Hungria endurece a fronteira, mas reabre a residência por investimento", standfirst: "Sob o governo Orbán, o país mantém uma das políticas migratórias mais restritivas da UE, ao mesmo tempo em que relançou um programa de residência para investidores.", body: "A política migratória húngara é marcada pela rigidez e por uma tensão constante com a União Europeia em torno de regras de fronteira. Esse pano de fundo, porém, convive com uma abertura calculada ao capital estrangeiro. O Guest Investor Program devolveu ao país uma rota de residência por investimento, com aportes em fundos imobiliários aprovados ou em propriedade direta.\n\nA gestão dos pedidos cabe à Direção-Geral Nacional de Estrangeiros, conhecida pela sigla OIF, que concentra a administração eletrônica pela plataforma Enter Hungary. É por ali que passam registros, agendamentos e boa parte das solicitações de autorização de residência.\n\nPara além do investidor, a Hungria oferece a White Card, voltada a profissionais remotos que comprovem renda vinda do exterior. O resultado é um país de discurso fechado na imigração geral, mas com canais específicos e formais para quem investe ou trabalha à distância. Quem se encaixa nessas categorias encontra um caminho definido, desde que siga rigorosamente a fonte oficial.", keyFacts: ["Guest Investor Program reativou a residência por investimento em fundo imobiliário ou propriedade", "White Card é a via húngara para nômades digitais, com renda comprovada do exterior", "Pedidos passam pela plataforma eletrônica oficial Enter Hungary", "Autoridade competente: Direção-Geral Nacional de Estrangeiros, a OIF (oif.gov.hu)"], sources: [{ label: "Direção-Geral Nacional de Estrangeiros da Hungria (OIF)", url: "https://oif.gov.hu/factsheets" }] },
    ],
    blog: [],
  },
  lv: {
    community: [
      { title: "Letônia: residência báltica com custo competitivo", body: "A Letônia oferece um Temporary Residence Permit acessível por duas vias principais de investimento, uma ligada à aquisição de imóveis e outra ao aporte em negócio local. Os valores de entrada são considerados competitivos para os padrões europeus, e o país soma a vantagem de estar no espaço Schengen e usar o euro.\n\nPara quem busca uma base no Báltico com custo de vida mais baixo que o da Europa Ocidental, é uma alternativa que costuma passar despercebida. A capital Riga concentra boa parte da atividade econômica e dos serviços.", cta: "Verifique no portal do Office of Citizenship and Migration Affairs as condições atuais de cada via de investimento antes de planejar o pedido.", sources: [{ label: "Departamento de Cidadania e Migração da Letônia (PMLP)", url: "https://www.pmlp.gov.lv/en/residence-permit" }] },
      { title: "💡 Startup Visa e o teste de idioma", body: "A Letônia tem investido em atrair fundadores por meio de um Startup Visa voltado a negócios inovadores, com vigência que foi ampliada para acompanhar o ciclo de crescimento das empresas. O próprio Office of Citizenship and Migration Affairs chegou a produzir material explicativo para empreendedores interessados.\n\nUm detalhe importante para quem mira residência mais longa: a legislação migratória letã passou a exigir teste de proficiência no idioma do país em determinadas situações de renovação. Vale conhecer essa regra desde o início.", cta: "Antes de contar com a renovação, confirme no site oficial da PMLP se o seu caso exige aprovação no teste de língua letã.", sources: [{ label: "Departamento de Cidadania e Migração da Letônia (PMLP)", url: "https://www.pmlp.gov.lv/en" }] },
    ],
    countryTab: [
      { headline: "Letônia atrai investidores e fundadores no coração do Báltico", standfirst: "Com residência por investimento de valor competitivo e um Startup Visa em expansão, o país combina acesso Schengen, euro e custo de vida acessível.", body: "A Letônia mantém um Temporary Residence Permit que pode ser obtido por investimento, seja na compra de imóveis, seja no aporte em negócio local. Os valores de entrada são atrativos quando comparados aos de outros países da União Europeia, o que posiciona o país como uma porta de entrada de custo moderado para o bloco.\n\nA gestão migratória cabe ao Office of Citizenship and Migration Affairs, conhecido pela sigla PMLP, que administra desde pedidos de residência até a emissão de documentos de identidade. A autoridade também tem dado atenção ao ecossistema de inovação, com um Startup Visa cuja vigência foi ampliada para sustentar o crescimento das empresas atendidas.\n\nDois pontos merecem atenção de quem planeja se mudar. O primeiro é a vantagem estratégica de estar no espaço Schengen e usar o euro, o que facilita circulação e negócios. O segundo é a exigência, em certos casos, de aprovação em teste do idioma local para renovações, reflexo de mudanças recentes na lei de imigração. Planejamento e consulta à fonte oficial fazem toda a diferença.", keyFacts: ["Temporary Residence Permit por investimento imobiliário ou em negócio, com valores competitivos", "Startup Visa teve a vigência ampliada para acompanhar o crescimento das empresas", "Em certos casos, renovação exige aprovação em teste do idioma letão", "Autoridade competente: Office of Citizenship and Migration Affairs, a PMLP (pmlp.gov.lv)"], sources: [{ label: "Departamento de Cidadania e Migração da Letônia (PMLP)", url: "https://www.pmlp.gov.lv/en" }] },
    ],
    blog: [],
  },
  lt: {
    community: [
      { title: "Lituânia: o ímã báltico para fundadores de tech", body: "A Lituânia se posicionou como um dos destinos mais acolhedores do Báltico para talento de tecnologia, com um Startup Visa que atrai fundadores de toda a Europa Oriental. O país oferece um ecossistema fintech em crescimento, além das vantagens de estar no espaço Schengen e usar o euro.\n\nA rota para startups foi desenhada para escalar com o negócio, com a possibilidade de evoluir para residência mais longa conforme a empresa ganha tração ou recebe investimento. É um convite explícito a quem quer construir do zero dentro da União Europeia.", cta: "Use o sistema eletrônico oficial do Migration Department para iniciar o pedido e acompanhar o status, evitando intermediários não licenciados.", sources: [{ label: "Departamento de Migração da Lituânia", url: "https://www.migracija.lt/en" }] },
      { title: "💡 Como funciona o pedido pela plataforma oficial", body: "Todo o fluxo do Startup Visa lituano passa por um sistema eletrônico oficial de migração, no qual o candidato preenche o requerimento de residência e anexa as cópias digitais dos documentos exigidos. O processo costuma levar entre um e dois meses para ser concluído.\n\nO cadastro permite escolher o perfil de fundador de startup e seguir um caminho guiado dentro da plataforma. Organizar a documentação da empresa e o endosso necessário antes de iniciar acelera bastante a análise.", cta: "Reúna os documentos de registro e endosso da sua startup antes de abrir o pedido, e confirme a lista atualizada no site oficial do Migration Department.", sources: [{ label: "Departamento de Migração da Lituânia", url: "https://www.migracija.lt/en" }] },
    ],
    countryTab: [
      { headline: "Lituânia abre as portas para o talento de tecnologia", standfirst: "Com um Startup Visa que atrai fundadores de toda a Europa Oriental e um ecossistema fintech em expansão, o país se firma como base europeia para empreendedores.", body: "A Lituânia construiu uma reputação de destino amigável para o empreendedorismo de tecnologia. Seu Startup Visa virou referência regional, atraindo fundadores de toda a Europa Oriental que buscam uma base dentro da União Europeia. A isso se soma um ecossistema fintech em crescimento acelerado, que tem transformado o país num polo de inovação financeira.\n\nA política é conduzida pelo Migration Department, vinculado ao Ministério do Interior, que digitalizou o processo por meio de um sistema eletrônico oficial. É nessa plataforma que o candidato preenche o requerimento, anexa documentos e acompanha a tramitação, em geral concluída em um a dois meses.\n\nO desenho do programa favorece quem pensa em longo prazo: há caminhos para evoluir da residência inicial para uma situação mais estável conforme a startup demonstra tração ou recebe aporte. Combinada com a mobilidade Schengen e o uso do euro, a Lituânia oferece um ambiente previsível e acessível para quem quer empreender na Europa. A consulta à fonte oficial mantém o planejamento no rumo certo.", keyFacts: ["Startup Visa atrai fundadores de toda a Europa Oriental para o ecossistema local", "Processo é 100% eletrônico via sistema oficial de migração, com análise típica de um a dois meses", "Há caminho para residência mais longa conforme a startup ganha tração ou investimento", "Autoridade competente: Migration Department do Ministério do Interior (migracija.lt)"], sources: [{ label: "Departamento de Migração da Lituânia", url: "https://www.migracija.lt/en" }] },
    ],
    blog: [],
  },
  lu: {
    community: [
      { title: "Luxemburgo: o hub financeiro que disputa talento", body: "Luxemburgo é um dos principais centros financeiros da Europa e estrutura sua imigração em torno da atração de profissionais altamente qualificados. A via mais relevante é a do Highly Qualified Worker, equivalente local ao EU Blue Card, que exige um patamar salarial elevado e tem o setor financeiro como prioridade.\n\nO país também é um dos centros fiscais preferidos para a administração de fundos de investimento, o que sustenta uma demanda constante por especialistas. Para quem atua em finanças, tecnologia ou serviços qualificados, é um destino que paga bem e processa rápido.", cta: "Confira no portal Guichet.lu o salário mínimo vigente e a lista de documentos do Highly Qualified Worker antes de aceitar uma proposta.", sources: [{ label: "Guichet.lu, portal oficial do governo de Luxemburgo", url: "https://guichet.public.lu/en/citoyens/immigration.html" }] },
      { title: "💡 O processo em duas etapas para o trabalhador estrangeiro", body: "Quem vem de fora da União Europeia para trabalhar mais de três meses em Luxemburgo segue um processo em duas etapas. Primeiro, solicita-se uma autorização temporária de estada à Direção de Imigração do Ministério dos Assuntos Internos, ainda a partir do país de origem. Depois, para quem precisa de visto, pede-se o visto tipo D já com a autorização em mãos.\n\nO prazo de resposta do ministério costuma ser de até alguns meses. Iniciar o pedido cedo, com a documentação completa, é essencial para encaixar o início do trabalho sem atropelos.", cta: "Solicite a autorização temporária de estada ainda do seu país de origem e acompanhe os prazos e formulários no portal Guichet.lu.", sources: [{ label: "Guichet.lu, portal oficial do governo de Luxemburgo", url: "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/salarie/salarie-pays-tiers.html" }] },
    ],
    countryTab: [
      { headline: "Luxemburgo aposta no talento qualificado para o setor financeiro", standfirst: "Centro financeiro de peso na Europa, o país mantém regras pró-talento e processa o visto de trabalhador altamente qualificado em poucos meses.", body: "Luxemburgo organiza sua política migratória em torno de uma necessidade clara: abastecer um dos maiores centros financeiros do continente com mão de obra altamente qualificada. A via principal é a do Highly Qualified Worker, versão local do EU Blue Card, que combina um patamar salarial elevado com prioridade para o setor financeiro.\n\nA administração dos pedidos é feita pela Direção de Imigração do Ministério dos Assuntos Internos, com orientações centralizadas no portal oficial Guichet.lu. O trabalhador de fora da União Europeia segue um processo em duas etapas, começando pela autorização temporária de estada solicitada ainda no país de origem, seguida do visto tipo D quando aplicável.\n\nPara além do salário e da agilidade, o país atrai por ser um dos centros fiscais preferidos para fundos de investimento, o que cria demanda permanente por especialistas em finanças, direito e tecnologia. É um destino seletivo, voltado a perfis de alta qualificação, mas que recompensa quem se encaixa com previsibilidade e remuneração competitiva. Acompanhar a fonte oficial garante que os valores e prazos usados no planejamento estejam corretos.", keyFacts: ["Highly Qualified Worker, versão local do EU Blue Card, exige salário elevado e prioriza finanças", "Processo em duas etapas: autorização temporária de estada e, quando aplicável, visto tipo D", "Centro fiscal preferido para fundos de investimento sustenta a demanda por especialistas", "Autoridade competente: Direção de Imigração via portal oficial Guichet.lu (guichet.public.lu)"], sources: [{ label: "Guichet.lu, portal oficial do governo de Luxemburgo", url: "https://guichet.public.lu/en/citoyens/immigration.html" }] },
    ],
    blog: [],
  },
  mt: {
    community: [
      {
        publishedAt: "2026-07-12",
        title: "Justiça de Malta considera curto demais o prazo de três dias úteis para recorrer de permissão negada",
        body: "Um julgamento recente do Tribunal de Recurso de Malta reacendeu o debate sobre o sistema de permissões de trabalho para nacionais de países terceiros. O juiz Lawrence Mintoff descreveu como demasiado curto o atual prazo de três dias úteis para contestar o indeferimento de um pedido de permissão única, o documento que reúne autorização de trabalho e de residência, e alertou contra uma leitura rígida demais da lei.\n\nO caso envolveu uma cidadã colombiana que entrou legalmente em Malta com visto válido e recebeu uma oferta de emprego. O empregador protocolou o pedido em nome dela e depois o retirou sem avisá-la. Ao saber que o pedido havia sido recusado, ela recorreu poucos dias depois, e o conselho de recursos de imigração rejeitou o recurso por considerá-lo fora do prazo. O tribunal reverteu essa decisão, mandou reexaminar o caso e determinou que a Identità avaliasse um novo pedido.",
        cta: "Se você planeja trabalhar em Malta, acompanhe prazos e requisitos da permissão única direto na Identità, a autoridade oficial de residência e vistos, e guarde comprovante de cada etapa do processo.",
        sources: [{ label: "Identità · Autoridade de residência e vistos de Malta", url: "https://identita.gov.mt/" }, { label: "BusinessNow.mt · Tribunal considera curto demais o prazo de recurso de três dias", url: "https://businessnow.mt/tcns-in-spotlight-as-court-says-maltas-three-day-migrant-appeal-deadline-is-far-too-short/" }],
      },
      {
        publishedAt: "2026-07-12",
        title: "💡 Por que essa decisão importa para quem vai trabalhar em Malta",
        body: "A leitura central do juiz é simples e protege o trabalhador. Ninguém pode ser cobrado a recorrer de uma decisão antes de saber que ela existe, e o tribunal observou que o conselho de recursos costuma barrar pedidos por prazo sem examinar as circunstâncias de cada caso. O ponto sensível é a posição frágil de muitos trabalhadores estrangeiros, já que o empregador pode retirar o pedido de permissão sem o conhecimento deles e deixá-los em situação irregular sem culpa própria.\n\nO pano de fundo é a queixa de empresas sobre a previsibilidade do sistema maltês para contratar talento de fora, sobretudo em setores regulados como serviços financeiros e fintech. A decisão tende a alimentar a discussão sobre reformar o quadro de imigração e permissões de trabalho do país.",
        cta: "Antes de aceitar uma vaga, confirme quem protocola e quem acompanha o seu pedido, e cobre transparência do empregador sobre cada movimento junto à Identità.",
        sources: [{ label: "Identità · Autoridade de residência e vistos de Malta", url: "https://identita.gov.mt/" }, { label: "BusinessNow.mt · Tribunal considera curto demais o prazo de recurso de três dias", url: "https://businessnow.mt/tcns-in-spotlight-as-court-says-maltas-three-day-migrant-appeal-deadline-is-far-too-short/" }],
      },
    ],
    countryTab: [
      {
        publishedAt: "2026-07-12",
        headline: "Tribunal de Malta reabre caso de trabalhadora e critica prazo de recurso de imigração",
        standfirst: "Ao considerar curto demais o prazo de três dias úteis, a Justiça mandou reexaminar o pedido de uma cidadã colombiana e reacendeu a pressão por reforma do sistema de permissões de trabalho.",
        body: "Um julgamento do Tribunal de Recurso de Malta, divulgado em 10 de julho de 2026, colocou de novo em foco o sistema de permissões de trabalho para nacionais de países terceiros. O juiz Lawrence Mintoff reverteu uma decisão do conselho de recursos de imigração que havia rejeitado, por perda de prazo, o recurso de uma cidadã colombiana, e ordenou que o caso fosse reexaminado. Na mesma decisão, instruiu a Identità a considerar um novo pedido de permissão única apresentado pela requerente.\n\nA trabalhadora havia entrado legalmente em Malta com visto válido antes de receber uma oferta de emprego. O empregador em potencial protocolou em nome dela o pedido de permissão única, que combina autorização de trabalho e de residência, mas depois o retirou sem informá-la. Ao descobrir que o pedido tinha sido recusado, ela recorreu alguns dias mais tarde. O conselho de recursos indeferiu o recurso com base na exigência da lei de imigração de contestar a decisão em três dias úteis.\n\nO juiz questionou se o legislador pretendia que esse prazo começasse a correr antes mesmo de o requerente ser notificado da decisão. Segundo ele, ninguém pode ser razoavelmente cobrado a exercer o direito de recurso antes de saber que a decisão foi tomada, e o conselho costuma descartar recursos como fora do prazo sem analisar as circunstâncias de cada caso. O magistrado também destacou a vulnerabilidade de muitos trabalhadores migrantes, sujeitos a ter o pedido retirado pelo empregador sem seu conhecimento e a cair em situação irregular sem culpa própria, e defendeu que proporcionalidade e sensibilidade devem prevalecer nessas situações.\n\nA decisão chega em meio à preocupação crescente de empregadores com o funcionamento prático do sistema maltês de contratação de estrangeiros. A crítica mais recorrente é a falta de previsibilidade nos prazos de processamento, que dificulta o planejamento de equipes em setores regulados como serviços financeiros e fintech. Para quem pensa em trabalhar na ilha, o recado é acompanhar de perto cada etapa do pedido e confirmar as regras vigentes na fonte oficial antes de se comprometer.",
        keyFacts: ["Tribunal de Recurso reverteu decisão que barrou por prazo o recurso de uma cidadã colombiana", "O prazo atual de três dias úteis para contestar permissão negada foi considerado curto demais pelo juiz Lawrence Mintoff", "A permissão única reúne autorização de trabalho e de residência para nacionais de países terceiros", "O empregador pode retirar o pedido sem avisar o trabalhador, o que pode levar à situação irregular", "O tribunal mandou reexaminar o caso e determinou que a Identità avalie um novo pedido", "Autoridade competente: Identità, agência de residência e vistos de Malta (identita.gov.mt)"],
        sources: [{ label: "Identità · Autoridade de residência e vistos de Malta", url: "https://identita.gov.mt/" }, { label: "BusinessNow.mt · Tribunal considera curto demais o prazo de recurso de três dias", url: "https://businessnow.mt/tcns-in-spotlight-as-court-says-maltas-three-day-migrant-appeal-deadline-is-far-too-short/" }],
      },
    ],
    blog: [
      {
        publishedAt: "2026-07-12",
        headline: "O relógio de três dias: por que uma decisão judicial em Malta expõe a fragilidade de quem migra a trabalho",
        standfirst: "Ao reabrir o caso de uma trabalhadora colombiana, o Tribunal de Recurso de Malta questionou um prazo curto e reacendeu o debate sobre um sistema de permissões que depende do empregador em quase tudo.",
        body: "Malta se vende ao mundo como uma base pequena e eficiente dentro da União Europeia, com um mercado aquecido em fintech, serviços financeiros e tecnologia. Por trás dessa vitrine, porém, existe um sistema de permissões de trabalho que acaba de ganhar um holofote incômodo. Em julho de 2026, o Tribunal de Recurso do país reabriu o caso de uma cidadã colombiana e, no caminho, expôs o quanto a régua pode ser dura com quem tem menos poder na relação.\n\nA história é simples e reveladora. A trabalhadora entrou em Malta de forma legal, com visto válido, e recebeu uma oferta de emprego. O empregador protocolou por ela o pedido de permissão única, o documento que junta trabalho e residência, e depois o retirou sem avisá-la. Quando ela finalmente soube que o pedido havia sido recusado, recorreu poucos dias depois. O conselho de recursos de imigração indeferiu o recurso por um único motivo, a lei de imigração concede apenas três dias úteis para contestar a decisão, e esse relógio, na leitura do conselho, já tinha zerado.\n\nFoi aí que o juiz Lawrence Mintoff colocou o dedo na ferida. Ele questionou se o legislador realmente quis que o prazo começasse a correr antes de a pessoa ser notificada, e lembrou de uma obviedade que a burocracia às vezes esquece, ninguém consegue recorrer de algo que não sabe que aconteceu. Mais do que reabrir um processo, o magistrado criticou o hábito do conselho de barrar recursos por prazo sem olhar as circunstâncias de cada caso, e mandou a Identità reavaliar um novo pedido da requerente.\n\nO ponto que interessa a quem planeja migrar é a assimetria de poder embutida no modelo. Na permissão única, é o empregador que abre e conduz o pedido, e pode retirá-lo. Se faz isso sem comunicar o trabalhador, empurra alguém que agiu de boa-fé para uma situação irregular, muitas vezes depois de gastar dinheiro e cruzar meio mundo atrás da vaga. O juiz foi explícito ao pedir proporcionalidade e sensibilidade diante dessa fragilidade, um recado que vai além do caso concreto.\n\nDo lado das empresas, a queixa é outra, mas aponta para o mesmo lugar. Executivos de setores regulados reclamam da falta de previsibilidade nos prazos de processamento, que trava o planejamento de equipe e até cronogramas de licenciamento em áreas como serviços financeiros e fintech. Quando o trabalhador sofre com prazos rígidos e a empresa sofre com prazos incertos, a conclusão é que o sistema pede ajuste dos dois lados. Não por acaso, a decisão alimenta um debate já em curso sobre reformar o quadro de imigração e permissões do país.\n\nPara o brasileiro que mira Malta, a lição é prática. O país continua atraente, com demanda real por talento qualificado, mas a permissão única coloca boa parte do seu destino nas mãos do empregador. Vale escolher empresas sérias, exigir transparência sobre cada movimento do pedido, guardar comprovantes de tudo e acompanhar o andamento direto na Identità. Uma decisão judicial pode ter aberto uma brecha de bom senso, mas o caminho mais seguro ainda é não depender da sorte nem da boa vontade de terceiros.",
        tags: ["Malta", "trabalho", "permissão única", "nacionais de países terceiros", "imigração"],
        sources: [{ label: "Identità · Autoridade de residência e vistos de Malta", url: "https://identita.gov.mt/" }, { label: "BusinessNow.mt · Tribunal considera curto demais o prazo de recurso de três dias", url: "https://businessnow.mt/tcns-in-spotlight-as-court-says-maltas-three-day-migrant-appeal-deadline-is-far-too-short/" }],
      },
    ],
  },
  ro: {
    community: [
      { publishedAt: "2026-07-10", title: "Romênia muda a lei e cobra o empregador por cada trabalhador estrangeiro", body: "A Romênia colocou em vigor, desde 27 de abril de 2026, um novo regime para a contratação de estrangeiros, a Ordonança de Urgência 32/2026. A mudança tira o empregador da posição de mero solicitante e o transforma em parte com deveres contínuos, antes, durante e depois do contrato. A contratação passa a depender de uma lista de ocupações deficitárias e de registro prévio na plataforma oficial WorkinRomania.gov.ro.\n\nEntre as novas exigências estão uma garantia financeira de mil euros por trabalhador estrangeiro, contrato redigido em duas línguas e pagamento do salário obrigatoriamente em conta bancária pessoal, sem dinheiro em espécie. Para o profissional de fora do bloco, o recado é que a vaga na Romênia agora vem com um empregador muito mais fiscalizado.", cta: "Antes de fechar qualquer proposta, confirme as regras de residência e trabalho no IGI, a autoridade oficial de imigração, e no Monitorul Oficial, onde a norma foi publicada.", sources: [{ label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }, { label: "Monitorul Oficial al României (Diário Oficial)", url: "https://monitoruloficial.ro/" }, { label: "Romania Insider · OUG 32/2026 e o novo regime de trabalho estrangeiro", url: "https://www.romania-insider.com/oug-322026-compliance-traps-now-fine-romanian-employers-foreign-worker" }] },
      { publishedAt: "2026-07-10", title: "💡 Romênia: mais proteção ao trabalhador, e novas travas de mobilidade", body: "A mesma Ordonança de Urgência 32/2026 reforçou a proteção de quem chega para trabalhar. O empregador precisa oferecer curso de romeno de no mínimo seis meses, com frequência semanal, treinamento de segurança em idioma que o trabalhador entenda e pagamento em conta pessoal. Os registros do vínculo devem ser guardados por pelo menos cinco anos.\n\nEm troca, surgiram limites. Nos primeiros seis meses não é possível trocar de emprego, salvo falta grave, e até completar dois anos a mudança só ocorre por meio de agência autorizada. Se o vínculo termina, o empregador tem 90 dias para recolocar o trabalhador e arca com o custo do retorno ao país de origem caso não consiga.", cta: "Entenda seus direitos e também os limites de troca de emprego antes de assinar, e confirme cada detalhe na fonte oficial do IGI.", sources: [{ label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }, { label: "Romania Insider · OUG 32/2026 e o novo regime de trabalho estrangeiro", url: "https://www.romania-insider.com/oug-322026-compliance-traps-now-fine-romanian-employers-foreign-worker" }] },
    ],
    countryTab: [
      { publishedAt: "2026-07-10", headline: "Romênia reescreve as regras do trabalho estrangeiro e mira o empregador", standfirst: "Em vigor desde abril de 2026, a Ordonança de Urgência 32/2026 criou plataforma única, garantia financeira por trabalhador e multas por cabeça, com novas proteções e travas de mobilidade.", body: "A Romênia deu uma guinada na forma como regula o trabalho de estrangeiros. Desde 27 de abril de 2026 está em vigor a Ordonança de Urgência 32/2026, que substitui o antigo regime de aprovação e coloca o empregador no centro da responsabilidade legal, com deveres que se estendem antes, durante e depois do contrato. A porta de entrada passou a ser a plataforma oficial WorkinRomania.gov.ro, e a contratação depende de uma lista de ocupações consideradas deficitárias.\n\nAs obrigações novas são concretas. O empregador precisa se registrar antes de qualquer contratação, depositar uma garantia financeira de mil euros por trabalhador estrangeiro e formalizar contrato bilíngue, em romeno e no idioma do trabalhador. O salário passa a ser pago apenas em conta bancária pessoal, sem espécie, e a empresa deve guardar os registros do vínculo por no mínimo cinco anos. Há ainda curso de romeno de pelo menos seis meses e treinamento de segurança em língua que o trabalhador compreenda.\n\nPara o trabalhador, o novo regime traz proteção e também restrição. A mobilidade fica limitada, sem troca de emprego nos primeiros seis meses, exceto em caso de falta grave, e mudanças apenas via agência autorizada até completar dois anos. No encerramento do contrato, o empregador tem 90 dias para recolocar o profissional e assume o custo do retorno se não houver recolocação. As penalidades foram desenhadas por trabalhador, o que multiplica o valor conforme o número de contratados, e a reincidência pode suspender o registro do empregador e travar novas contratações.\n\nPara o candidato brasileiro, a leitura é de um mercado que segue aberto, porém com regras mais exigentes dos dois lados. Vale escolher empregadores que já operam dentro da nova plataforma e confirmar cada etapa nas fontes oficiais antes de se comprometer.", keyFacts: ["Ordonança de Urgência 32/2026 em vigor desde 27 de abril de 2026", "Contratação passa pela plataforma oficial WorkinRomania.gov.ro e por lista de ocupações deficitárias", "Garantia financeira de mil euros por trabalhador estrangeiro e contrato bilíngue obrigatório", "Salário pago só em conta pessoal, registros guardados por no mínimo cinco anos e curso de romeno de seis meses", "Sem troca de emprego nos primeiros seis meses, e recolocação em até 90 dias por conta do empregador na saída", "Autoridade competente: IGI, a Inspetoria Geral para Imigração (igi.mai.gov.ro)"], sources: [{ label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }, { label: "Monitorul Oficial al României (Diário Oficial)", url: "https://monitoruloficial.ro/" }, { label: "Romania Insider · OUG 32/2026 e o novo regime de trabalho estrangeiro", url: "https://www.romania-insider.com/oug-322026-compliance-traps-now-fine-romanian-employers-foreign-worker" }] },
    ],
    blog: [
      { publishedAt: "2026-07-10", headline: "O empregador virou o fiscal: como a nova lei de trabalho da Romênia muda a conta de quem migra", standfirst: "A Ordonança de Urgência 32/2026 transferiu o peso da regularização para as empresas, com garantia por trabalhador, contrato bilíngue e multas por cabeça. Para o estrangeiro, sobram proteção e novas travas.", body: "Por muito tempo, a Romênia foi vista como uma das portas mais acessíveis do mercado de trabalho europeu, com processo relativamente simples para quem tinha uma oferta. Esse desenho mudou. Desde 27 de abril de 2026 está em vigor a Ordonança de Urgência 32/2026, que reorganiza por completo a contratação de estrangeiros e desloca o centro de gravidade do processo para o empregador.\n\nA lógica anterior tratava a empresa quase como espectadora de uma aprovação estatal. Agora ela é parte com deveres contínuos. Antes de contratar, precisa se registrar na plataforma oficial WorkinRomania.gov.ro e no registro de empregadores de estrangeiros, além de observar a lista de ocupações deficitárias que define onde a contratação é permitida. É preciso depositar uma garantia financeira de mil euros por trabalhador, um valor que, somado ao longo de uma equipe, deixa de ser simbólico.\n\nO contrato ganhou forma nova. Precisa ser bilíngue, em romeno e no idioma do trabalhador, o salário só pode ser pago em conta bancária pessoal, e a empresa deve manter os registros por pelo menos cinco anos após o fim do vínculo. Há obrigações de integração, como curso de romeno de no mínimo seis meses em frequência semanal e treinamento de segurança em língua compreensível ao trabalhador. Do ponto de vista de quem chega, é uma camada real de proteção, que reduz o espaço para abusos comuns em contratações informais.\n\nO outro lado da moeda é a mobilidade. A norma restringe a troca de emprego nos primeiros seis meses, salvo falta grave, e mantém mudanças apenas por agência autorizada até o trabalhador completar dois anos no país. Se o contrato termina, o empregador tem 90 dias para recolocar o profissional e assume o custo do retorno ao país de origem caso a recolocação não aconteça. As multas, por fim, foram calibradas por trabalhador, o que multiplica a exposição das empresas conforme o tamanho da equipe estrangeira, e a reincidência pode suspender o registro e travar novas contratações.\n\nPara o brasileiro que pensa na Romênia, a mensagem prática é dupla. O país continua sendo uma base viável dentro da União Europeia, com custo de vida competitivo e demanda real em setores qualificados. Mas a escolha do empregador passou a importar mais do que nunca, porque uma empresa desorganizada diante das novas regras vira risco direto para a sua permanência. A recomendação sensata é priorizar quem já opera dentro da plataforma oficial, ler o contrato bilíngue com atenção e confirmar cada exigência no IGI e no Monitorul Oficial, em vez de confiar em promessas de intermediários.", tags: ["Romênia", "trabalho", "imigração", "empregador", "OUG 32/2026"], sources: [{ label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }, { label: "Monitorul Oficial al României (Diário Oficial)", url: "https://monitoruloficial.ro/" }, { label: "Romania Insider · OUG 32/2026 e o novo regime de trabalho estrangeiro", url: "https://www.romania-insider.com/oug-322026-compliance-traps-now-fine-romanian-employers-foreign-worker" }] },
    ],
  },
  se: {
    community: [
      { publishedAt: "2026-07-15", urgency: "urgent", title: "Suécia passa a avaliar conduta e honestidade em pedidos de residência", body: "Desde 13 de julho de 2026 vale na Suécia uma exigência reforçada de vandel, o conceito local que reúne conduta, honestidade e respeito às regras. A mudança na Lei de Estrangeiros permite ao Migrationsverket, a agência de migração, recusar um pedido ou revogar uma autorização de residência por falta de boa conduta, e não apenas por antecedentes criminais.\n\nA avaliação alcança comportamentos que não são crime, mas contrariam regras que a sociedade quer preservar. A agência pode buscar informação em outros órgãos sobre ordens de pagamento e sobre os dados que a pessoa declarou para receber assistência social, seguro social e benefícios. Segundo o texto oficial, deslizes isolados e de menor gravidade normalmente não bastam para uma recusa, mas comportamento repetido ao longo do tempo pesa na análise.", cta: "Mantenha dívidas, declarações e pedidos de benefício em ordem e coerentes com a sua realidade, porque a partir de agora esse histórico entra na análise do seu pedido de residência.", sources: [{ label: "Migrationsverket · Exigências reforçadas de conduta (oficial)", url: "https://www.migrationsverket.se/en/news-archive/news/2026-07-13-strengthened-requirements-for-good-conduct-and-honesty.html" }] },
      { publishedAt: "2026-07-15", title: "💡 Quem fica de fora da nova régua de conduta", body: "A regra de conduta não alcança todo mundo, e essa distinção importa. Pela explicação da própria agência, as autorizações de residência que não se baseiam em direito da União Europeia estão em geral cobertas pela exigência reforçada. Já as autorizações fundadas em diretivas da União Europeia, que conforme o caso podem amparar residência para trabalho, estudo ou reunificação familiar, ficam fora. A exigência também não se aplica na análise de pedidos de proteção internacional.\n\nA avaliação é individual e depende das circunstâncias de cada caso e da base legal do pedido. A decisão precisa ser fundamentada e seguir os princípios de legalidade, objetividade e imparcialidade, pesando a eventual falta de conduta de forma proporcional aos motivos que sustentam a residência.", cta: "Antes de tirar conclusões sobre o seu caso, identifique em qual base legal o seu pedido se enquadra, porque é isso que define se a nova régua de conduta se aplica a você.", sources: [{ label: "Migrationsverket · Exigências reforçadas de conduta (oficial)", url: "https://www.migrationsverket.se/en/news-archive/news/2026-07-13-strengthened-requirements-for-good-conduct-and-honesty.html" }] },
    ],
    countryTab: [
      { publishedAt: "2026-07-15", urgency: "urgent", headline: "Suécia aperta a régua em duas frentes na mesma semana de julho", standfirst: "Exigência de boa conduta passa a valer em 13 de julho e, um dia antes, entra em vigor o pacote que adapta o país ao Pacto Europeu de Migração e Asilo e encerra a residência permanente por asilo.", body: "A Suécia concentrou em dois dias de julho de 2026 mudanças que redesenham o seu sistema migratório. Em 13 de julho passou a valer a exigência reforçada de vandel, conceito que descreve conduta, honestidade e cumprimento de regras. A alteração na Lei de Estrangeiros dá ao Migrationsverket, a agência sueca de migração, o poder de recusar pedidos ou revogar autorizações de residência por falta de boa conduta.\n\nA análise vai além da checagem criminal que já era rotina. A agência passa a avaliar se o requerente descumpre regras e exigências ligadas a conduta e comportamento cumpridor da lei, podendo obter informação de outros órgãos sobre ordens de pagamento e sobre dados declarados para obter assistência social, seguro social e benefícios. Falhas isoladas e leves em geral não derrubam um pedido, mas conduta repetida ao longo do tempo entra na conta. A avaliação é individual, precisa ser fundamentada e pesa a falta de conduta de forma proporcional aos motivos da residência. Autorizações baseadas em direito da União Europeia, que podem amparar trabalho, estudo ou reunificação familiar, ficam fora da nova régua, assim como a análise de pedidos de proteção internacional.\n\nNo dia anterior, 12 de julho, entrou em vigor o pacote que alinha a legislação sueca ao Pacto Europeu de Migração e Asilo, com base no projeto de lei 2025/26:262 do governo. Ele define que a Polícia sueca tem a responsabilidade principal pelo processo de triagem previsto no Pacto, com o Migrationsverket também designado como autoridade de triagem. Os dois órgãos assinaram acordo de cooperação, em vigor a partir de 12 de julho e até nova ordem, segundo a diretora geral da agência, Maria Mindhammar. A triagem inclui verificação de identidade, checagem de segurança, avaliação de vulnerabilidade e exame básico de saúde, este último a cargo das regiões, e começa pelos centros da agência em Boden, Märsta e Arlanda, Mölndal e Malmö.\n\nO mesmo pacote muda dois pontos sensíveis. O direito a assistência jurídica gratuita foi ajustado ao mínimo europeu, passando a garantir duas horas de aconselhamento jurídico gratuito no início do processo de asilo, com direito a defensor público custeado apenas na fase de recurso, e não mais desde a apresentação do pedido. Além disso, deixa de existir a possibilidade de autorização de residência permanente para pessoas com residência por motivos ligados a asilo, que agora terão examinada apenas a prorrogação da autorização temporária. Quem já possui residência permanente não é afetado pela mudança.", keyFacts: ["Exigência reforçada de boa conduta (vandel) em vigor desde 13 de julho de 2026, com poder de recusar pedidos e revogar autorizações", "Agência pode consultar outros órgãos sobre ordens de pagamento e dados declarados para benefícios sociais", "Autorizações baseadas em direito da União Europeia e pedidos de proteção internacional ficam fora da regra de conduta", "Desde 12 de julho de 2026 vale o pacote de adaptação ao Pacto Europeu de Migração e Asilo (projeto de lei 2025/26:262)", "Triagem sob responsabilidade principal da Polícia, com o Migrationsverket como autoridade de triagem, nos centros de Boden, Märsta e Arlanda, Mölndal e Malmö", "Assistência jurídica gratuita limitada a duas horas no início do processo de asilo, com defensor público na fase de recurso", "Fim da residência permanente para quem tem autorização ligada a asilo, sem afetar quem já a possui"], sources: [{ label: "Migrationsverket · Exigências reforçadas de conduta (oficial)", url: "https://www.migrationsverket.se/en/news-archive/news/2026-07-13-strengthened-requirements-for-good-conduct-and-honesty.html" }, { label: "Migrationsverket · Mudanças legislativas a partir de 12 de julho (oficial)", url: "https://www.migrationsverket.se/en/news-archive/news/2026-07-09-several-legislative-changes-in-the-field-of-migration-from-12-july.html" }] },
    ],
    blog: [
      { publishedAt: "2026-07-15", headline: "Vandel: a palavra sueca que agora decide quem fica", standfirst: "A Suécia passou a avaliar conduta e honestidade em pedidos de residência, num conceito que vai além da ficha criminal. Entender a base legal do seu pedido virou a informação mais valiosa do processo.", body: "Existe uma palavra sueca que quem planeja morar no país precisa aprender antes de qualquer outra, e ela não é hej. É vandel, o conceito que descreve conduta, honestidade e cumprimento de regras. Desde 13 de julho de 2026, uma exigência reforçada de vandel passou a valer para autorizações de residência, e o Migrationsverket ganhou o poder de recusar pedidos ou revogar autorizações já concedidas por falta de boa conduta.\n\nO que torna a mudança relevante é o alcance. A checagem de antecedentes criminais já era rotina em todo pedido. O que a alteração na Lei de Estrangeiros acrescenta é a avaliação de comportamentos que não configuram crime, mas contrariam regras que a sociedade quer sustentar. Nas palavras da própria agência, isso inclui descumprir regras de forma repetida ao longo do tempo, prestar informação incorreta, sustentar-se por meios desonestos ou manter ligação com redes criminosas. Para checar, a agência pode buscar dados em outros órgãos sobre ordens de pagamento e sobre o que a pessoa declarou ao pedir assistência social, seguro social e benefícios.\n\nAntes que isso vire pânico, vale ler o texto oficial com calma, porque ele traz dois freios explícitos. O primeiro é de proporção. Incidentes isolados e de menor gravidade normalmente não servem de base para recusa, e a decisão precisa ser fundamentada, seguindo os princípios de legalidade, objetividade e imparcialidade, com a eventual falta pesada de forma proporcional aos motivos que sustentam a residência. O segundo freio é de escopo, e é aqui que mora a informação mais prática de toda a mudança. Autorizações que não se baseiam em direito da União Europeia estão em geral cobertas pela nova régua. As que se baseiam em diretivas europeias, e que conforme o caso amparam residência para trabalho, estudo ou reunificação familiar, ficam fora dela. A exigência também não se aplica na análise de quem pede proteção internacional.\n\nUm dia antes, em 12 de julho, entrou em vigor o pacote que adapta a Suécia ao Pacto Europeu de Migração e Asilo. Ele organiza a triagem de chegada entre a Polícia, responsável principal, e o Migrationsverket, também designado autoridade de triagem, com atuação inicial nos centros de Boden, Märsta e Arlanda, Mölndal e Malmö. Reduz a assistência jurídica gratuita no asilo a duas horas de aconselhamento no início do processo, deixando o defensor público custeado para a fase de recurso. E encerra a possibilidade de residência permanente para quem tem autorização ligada a asilo, preservando quem já a obteve.\n\nA leitura para a comunidade WiseHub é menos alarmante e mais técnica do que as manchetes sugerem. A Suécia não fechou a porta ao profissional qualificado, e boa parte das vias de trabalho e estudo se apoia justamente em direito europeu, fora do alcance da nova régua de conduta. O que mudou foi o custo de ser desorganizado. Dívidas não resolvidas, declarações inconsistentes para obter benefício e informação prestada de qualquer jeito deixaram de ser detalhe administrativo e passaram a ser matéria de decisão migratória. Saber em qual base legal o seu pedido se apoia, e manter a própria vida documental coerente, virou parte do plano de mudança.", tags: ["Suécia", "vandel", "residência", "Pacto Europeu", "Migrationsverket"], sources: [{ label: "Migrationsverket · Exigências reforçadas de conduta (oficial)", url: "https://www.migrationsverket.se/en/news-archive/news/2026-07-13-strengthened-requirements-for-good-conduct-and-honesty.html" }, { label: "Migrationsverket · Mudanças legislativas a partir de 12 de julho (oficial)", url: "https://www.migrationsverket.se/en/news-archive/news/2026-07-09-several-legislative-changes-in-the-field-of-migration-from-12-july.html" }] },
    ],
  },
  cz: {
    community: [
      { publishedAt: "2026-07-10", title: "Tchéquia propõe salário mínimo recorde para 2027", body: "A Tchéquia deve elevar o salário mínimo mensal para 24.900 coroas em 2027, ante 22.400 coroas em 2026. O aumento de 2.500 coroas, equivalente a 11,2%, seria o maior reajuste anual já registrado no país e passaria a valer em janeiro de 2027. A confirmação final cabe ao governo e está prevista para setembro de 2026.\n\nCerca de 181 mil trabalhadores, concentrados em setores de menor remuneração, seriam diretamente afetados. Como o salário mínimo é o piso para todos, inclusive estrangeiros que atuam com o Employee Card, o reajuste eleva a base de comparação para quem planeja trabalhar no país.", cta: "Acompanhe a confirmação do valor no MPSV, o Ministério do Trabalho tcheco, antes de fechar contas sobre uma proposta de emprego.", sources: [{ label: "MPSV · Ministério do Trabalho e Assuntos Sociais (mpsv.cz)", url: "https://www.mpsv.cz/" }, { label: "Expats.cz · Salário mínimo tcheco 2027", url: "https://www.expats.cz/czech-news/article/czech-minimum-wage-2027-record-increase-who-is-affected-and-what-to-know" }] },
      { publishedAt: "2026-07-10", title: "💡 Employee Card segue a via central de trabalho na Tchéquia", body: "A principal porta de entrada para trabalhar na Tchéquia continua sendo o Employee Card, autorização de residência de longa duração ligada a um empregador e a uma vaga específica, que reúne num só documento o direito de morar e de exercer a função. O processo passa pelo Ministério do Interior, responsável pela política de migração.\n\nPara perfis em alta demanda, o país opera o programa Highly Qualified Employee, com decisão mais rápida em áreas como tecnologia e saúde. Como o Employee Card depende de uma oferta concreta, o primeiro passo é garantir o vínculo com uma empresa local antes de protocolar o pedido.", cta: "Verifique se a sua ocupação está entre as qualificadas e confira os requisitos no portal oficial para estrangeiros, o IPC.", sources: [{ label: "Ministério do Interior da Tchéquia (mvcr.cz)", url: "https://mv.gov.cz/mvcren/" }, { label: "Portal oficial para estrangeiros (ipc.gov.cz)", url: "https://ipc.gov.cz/en/" }] },
    ],
    countryTab: [
      { publishedAt: "2026-07-10", headline: "Tchéquia eleva o piso salarial e mantém rota estável de trabalho qualificado", standfirst: "Proposta de salário mínimo recorde para 2027 muda a base de cálculo, enquanto o Employee Card segue como via central para estrangeiros.", body: "A Tchéquia combina, em julho de 2026, uma novidade salarial relevante com a estabilidade que a caracteriza no campo migratório. O governo estuda elevar o salário mínimo mensal para 24.900 coroas em 2027, ante 22.400 coroas em 2026, um aumento de 2.500 coroas, ou 11,2%, descrito como o maior reajuste anual já registrado. A medida valeria a partir de janeiro de 2027, com confirmação prevista para setembro de 2026, e afetaria cerca de 181 mil trabalhadores.\n\nO ponto interessa a quem vem de fora porque o salário mínimo é o piso para todos os empregados, inclusive estrangeiros com Employee Card. Uma base mais alta eleva o patamar de comparação de propostas e o custo trabalhista das empresas, o que tende a se refletir nas negociações de vagas menos qualificadas.\n\nNo restante, o regime segue previsível. O Employee Card continua sendo a via central, uma autorização de residência de longa duração atrelada a um empregador e a uma vaga determinada. Para setores em escassez, o programa Highly Qualified Employee acelera a decisão em áreas como tecnologia e saúde. Como tudo depende de uma oferta concreta, o vínculo com uma empresa local segue sendo o primeiro passo, e a consulta aos portais oficiais define a documentação exata.", keyFacts: ["Proposta eleva o salário mínimo mensal para 24.900 coroas em 2027, ante 22.400 em 2026", "Aumento de 2.500 coroas, ou 11,2%, apontado como o maior reajuste anual já registrado", "Novo piso valeria a partir de janeiro de 2027, com confirmação do governo prevista para setembro de 2026", "Cerca de 181 mil trabalhadores seriam afetados, e o mínimo também vale para estrangeiros com Employee Card", "Employee Card e o programa Highly Qualified Employee seguem como vias centrais de trabalho"], sources: [{ label: "MPSV · Ministério do Trabalho e Assuntos Sociais (mpsv.cz)", url: "https://www.mpsv.cz/" }, { label: "Expats.cz · Salário mínimo tcheco 2027", url: "https://www.expats.cz/czech-news/article/czech-minimum-wage-2027-record-increase-who-is-affected-and-what-to-know" }, { label: "Ministério do Interior da Tchéquia (mvcr.cz)", url: "https://mv.gov.cz/mvcren/" }] },
    ],
    blog: [
      { publishedAt: "2026-07-10", headline: "Piso mais alto, regras estáveis: o que o salário mínimo de 2027 muda para quem quer trabalhar na Tchéquia", standfirst: "A proposta de reajuste recorde do salário mínimo tcheco eleva a base de comparação para estrangeiros, sem alterar a espinha dorsal do sistema, ancorada no Employee Card.", body: "A Tchéquia costuma aparecer nas conversas sobre a Europa Central como um destino de regras previsíveis, e é justamente essa estabilidade que a torna atraente para quem planeja trabalhar no continente. A novidade de julho de 2026 não muda essa espinha dorsal, mas mexe em uma variável que todo candidato deveria acompanhar de perto, o piso salarial.\n\nO governo estuda elevar o salário mínimo mensal para 24.900 coroas em 2027, contra 22.400 coroas em 2026. O reajuste de 2.500 coroas, equivalente a 11,2%, é descrito como o maior aumento anual já registrado no país e valeria a partir de janeiro de 2027, com confirmação final prevista para setembro de 2026. Segundo as estimativas, cerca de 181 mil trabalhadores seriam diretamente afetados, sobretudo em setores de menor remuneração.\n\nPor que isso importa para um estrangeiro? Porque o salário mínimo é o piso legal para todos os empregados no país, e não apenas para os nacionais. Quem atua com o Employee Card, a autorização de residência de longa duração que combina o direito de morar e trabalhar, tem nesse valor uma referência básica. Um piso mais alto pressiona para cima a base de negociação em vagas menos qualificadas e aumenta o custo trabalhista das empresas, o que pode influenciar tanto a oferta de emprego quanto o poder de compra de quem chega.\n\nO restante do sistema permanece reconhecível. O Employee Card segue como via central, sempre atrelado a um empregador e a uma vaga específica, e o programa Highly Qualified Employee mantém decisões mais rápidas para áreas estratégicas como tecnologia e saúde. Nada disso dispensa a exigência de uma oferta concreta de trabalho antes do pedido, e é esse vínculo que abre a porta do processo.\n\nA leitura para quem mira a Tchéquia é de otimismo cauteloso. O reajuste ainda é uma proposta, e só a confirmação de setembro de 2026 tornará o número definitivo. Ainda assim, a direção é clara e favorável a quem vende a própria mão de obra. O passo inteligente é acompanhar a decisão oficial no Ministério do Trabalho, calcular a proposta já considerando o novo piso e confirmar os requisitos de residência nos portais oficiais, transformando a estabilidade tcheca em um plano de mudança com números realistas.", tags: ["Tchéquia", "trabalho", "salário mínimo", "Employee Card", "custo de vida"], sources: [{ label: "MPSV · Ministério do Trabalho e Assuntos Sociais (mpsv.cz)", url: "https://www.mpsv.cz/" }, { label: "Expats.cz · Salário mínimo tcheco 2027", url: "https://www.expats.cz/czech-news/article/czech-minimum-wage-2027-record-increase-who-is-affected-and-what-to-know" }, { label: "Ministério do Interior da Tchéquia (mvcr.cz)", url: "https://mv.gov.cz/mvcren/" }] },
    ],
  },
  nz: {
    community: [
      { title: "Nova Zelândia abre as portas pra quem tem ofício técnico", body: "A Skilled Migrant Category é o principal caminho de residência da Nova Zelândia para profissionais qualificados, e o limiar de pontos foi reduzido para um patamar mais acessível, mirando especialmente tecnologia e saúde. Quem tem registro ocupacional, diploma de bacharel ou salário acima da mediana consegue somar os pontos exigidos com mais facilidade do que antes.\n\nPara áreas em alta demanda, o país mantém a chamada Green List, uma lista de ocupações prioritárias com processamento acelerado. Profissionais cujo cargo está nessa lista costumam ter o pedido analisado em prazos bem mais curtos, o que torna o cenário convidativo para engenheiros, desenvolvedores e equipe de saúde.", cta: "Confira no portal oficial da Immigration New Zealand se a sua ocupação está na Green List antes de planejar a mudança, porque isso muda o caminho e o prazo.", sources: [{ label: "Immigration New Zealand", url: "https://www.immigration.govt.nz" }] },
      { title: "💡 Diploma reconhecido vale pontos na conta da residência", body: "Na Nova Zelândia a pontuação que destrava a residência depende em boa parte das suas qualificações, e um diploma estrangeiro precisa ser avaliado para valer dentro do sistema. Não basta ter o canudo, é preciso que ele seja reconhecido pelos critérios neozelandeses para entrar na contagem.\n\nQuem trabalha em profissão regulamentada, como medicina, enfermagem ou engenharia, ainda precisa do registro junto ao órgão local da categoria. Esse registro ocupacional costuma ser exigência separada do visto e merece ser providenciado cedo, já que pode levar semanas.", cta: "Solicite a avaliação do seu diploma e o registro profissional com antecedência, pois esses passos correm em paralelo ao visto e costumam ser o gargalo do processo.", sources: [{ label: "Immigration New Zealand", url: "https://www.immigration.govt.nz" }] },
    ],
    countryTab: [
      { headline: "Nova Zelândia facilita residência para talentos e cria trilha verde de investimento", standfirst: "Redução de pontos na categoria de migrantes qualificados e nova vertente de investimento sustentável tornam o país mais aberto a tech, saúde e capital verde.", body: "A Nova Zelândia ajustou a Skilled Migrant Category para reduzir o limiar de pontos exigido, deixando o principal caminho de residência mais acessível a profissionais de tecnologia e saúde. O sistema combina fatores como registro ocupacional, nível de qualificação e renda, e a barra mais baixa amplia o número de candidatos elegíveis.\n\nNo eixo de investimento, o país lançou uma vertente verde dentro do Active Investor Plus, voltada a aportes em sustentabilidade e infraestrutura de baixo carbono. A categoria foi desenhada para atrair capital alinhado à agenda climática e oferece um caminho estruturado de residência a investidores que cumpram os requisitos.\n\nPara quem está em ocupações prioritárias, a Green List mantém processamento acelerado, reforçando o tom convidativo da política migratória neozelandesa. O conjunto sinaliza um país que busca qualificação técnica e capital produtivo ao mesmo tempo.", keyFacts: ["A Skilled Migrant Category teve o limiar de pontos reduzido, favorecendo tech e saúde", "Active Investor Plus ganhou uma vertente verde para investimentos em sustentabilidade", "A Green List mantém processamento acelerado para ocupações prioritárias"], sources: [{ label: "Immigration New Zealand", url: "https://www.immigration.govt.nz" }] },
    ],
    blog: [],
  },
  cn: {
    community: [
      { title: "China abre uma porta estreita para a elite global", body: "A China passou a sinalizar receptividade a talentos estrangeiros de alto nível com uma vertente de residência permanente voltada a profissionais de ponta, algo pouco comum em um sistema migratório tradicionalmente fechado. A National Immigration Administration conduz esse caminho, que mira pesquisadores, executivos e especialistas de impacto estratégico.\n\nA contrapartida é exigente. O acesso costuma pedir nível salarial elevado ou contribuição reconhecida em ciência, tecnologia e inovação, de modo que a abertura é real mas seletiva. O recado é claro, a China quer atrair quem agrega valor estratégico, não fluxo migratório amplo.", cta: "Consulte o portal oficial da National Immigration Administration para entender os critérios de contribuição e renda antes de planejar qualquer pedido, já que a régua é alta.", sources: [{ label: "National Immigration Administration", url: "https://en.nia.gov.cn" }] },
      { title: "💡 Hainan e o trânsito sem visto facilitam a primeira visita", body: "Além da trilha de residência para talentos, a China ampliou facilidades de entrada de curta duração, com isenção de visto de trânsito por período estendido para nacionais de dezenas de países. Esse tipo de regra ajuda quem precisa apenas conhecer o terreno, fechar negócios ou fazer escala antes de uma decisão maior.\n\nA zona de livre comércio de Hainan ganhou regime especial e aparece como vitrine dessa abertura controlada. Vale lembrar que isenção de trânsito não é visto de trabalho nem residência, e cada finalidade tem regras próprias que precisam ser respeitadas.", cta: "Verifique sempre a categoria correta para o seu objetivo, porque entrar com isenção de trânsito não autoriza trabalhar nem morar, e confirme tudo na fonte oficial.", sources: [{ label: "National Immigration Administration", url: "https://en.nia.gov.cn" }] },
    ],
    countryTab: [
      { headline: "China sinaliza abertura inédita à elite global, mas mantém a régua alta", standfirst: "Residência permanente para talentos de ponta e expansão da isenção de visto colocam o país num tom mais receptivo, condicionado a salário elevado e contribuição estratégica.", body: "A China deu um passo incomum ao sinalizar receptividade a talentos estrangeiros de alto nível, com uma vertente de residência permanente conduzida pela National Immigration Administration. O movimento mira profissionais de ciência, tecnologia e inovação, em um sistema historicamente restritivo a imigração.\n\nA abertura, porém, vem com filtros rígidos. O acesso a essa via costuma exigir patamar salarial alto ou contribuição estratégica comprovada, o que mantém o caráter seletivo da política. Trata-se de atrair valor específico, não de afrouxar o fluxo de entrada de forma ampla.\n\nNo curto prazo, a China também expandiu isenções de visto de trânsito para dezenas de países e deu regime especial à zona de livre comércio de Hainan. O conjunto reforça a imagem de uma abertura controlada, em que facilidades de entrada convivem com exigências altas para quem quer fixar residência.", keyFacts: ["Vertente de residência permanente voltada a talentos de ponta, conduzida pela NIA", "Acesso condicionado a salário elevado ou contribuição estratégica comprovada", "Isenção de visto de trânsito expandida e regime especial na zona de Hainan"], sources: [{ label: "National Immigration Administration", url: "https://en.nia.gov.cn" }] },
    ],
    blog: [],
  },
  sg: {
    community: [
      { title: "Singapura mira o topo da pirâmide de talentos", body: "Singapura elevou o critério do ONE Pass, o passe voltado à elite profissional global, reforçando uma política migratória seletiva e estável. O passe é individual, não fica preso a um único empregador e permite atuar em mais de uma empresa, o que atrai executivos e especialistas de altíssimo nível.\n\nO patamar salarial exigido subiu, sinalizando que o país quer ancorar quem está no topo da carreira. Para áreas estratégicas, como ciência aplicada, há trilhas que reconhecem realizações de destaque mesmo fora do critério puramente salarial.", cta: "Antes de mirar o ONE Pass, confira no portal oficial do Ministry of Manpower os critérios atuais de salário e de realização, porque a régua é alta e bem definida.", sources: [{ label: "Ministry of Manpower", url: "https://www.mom.gov.sg" }] },
      { title: "💡 Não existe só um caminho de passe em Singapura", body: "O ONE Pass é o passe de elite, mas Singapura tem uma escada de vistos de trabalho com critérios distintos de salário e qualificação. Quem ainda não alcança o patamar do passe mais alto pode encontrar uma categoria adequada ao seu perfil e crescer dentro do sistema.\n\nComo a política é seletiva, vale entender desde cedo qual passe corresponde ao seu cargo, salário e área. Planejar essa rota com base em fonte oficial evita frustração e ajuda a montar um caminho realista de mudança para a cidade-estado.", cta: "Avalie qual categoria de passe combina com o seu perfil de salário e qualificação no site do Ministry of Manpower, em vez de mirar só o passe mais alto.", sources: [{ label: "Ministry of Manpower", url: "https://www.mom.gov.sg" }] },
    ],
    countryTab: [
      { headline: "Singapura eleva a barra do ONE Pass e reforça política para ultra-qualificados", standfirst: "Aumento do salário mínimo exigido no passe de elite confirma uma estratégia seletiva e estável, com fast-track preservado para ciência aplicada.", body: "Singapura revisou para cima o critério do ONE Pass, o passe desenhado para atrair a elite profissional global. O movimento eleva o patamar salarial exigido e confirma a aposta da cidade-estado em concentrar talentos de altíssimo nível, em vez de ampliar o volume de entradas.\n\nO passe mantém suas características centrais, como a flexibilidade de não estar atrelado a um único empregador e a validade longa, o que o torna atraente para executivos e especialistas com trajetória consolidada. A elevação do limiar funciona como filtro, mirando quem está no topo da carreira.\n\nPara áreas estratégicas, o país preserva trilhas aceleradas, com destaque para ciência aplicada, onde realizações de impacto contam mesmo fora do critério estritamente salarial. O resultado é uma política descrita como seletiva e estável, focada em ancorar perfis ultra-qualificados.", keyFacts: ["O salário mínimo exigido no ONE Pass foi elevado, reforçando a seletividade", "O passe segue individual e com validade longa, sem ficar preso a um empregador", "Ciência aplicada mantém trilha acelerada dentro da política de talentos"], sources: [{ label: "Ministry of Manpower", url: "https://www.mom.gov.sg" }] },
    ],
    blog: [],
  },
  jp: {
    community: [
      { title: "Japão acelera residência permanente para talentos de ponta", body: "O Japão criou uma trilha expressa dentro do regime de Highly-Skilled Professional, permitindo residência permanente em prazo bem mais curto para quem atinge a pontuação mais alta do sistema. O foco está em pesquisadores e profissionais de tecnologia, e o movimento sinaliza abertura crescente de um mercado historicamente mais fechado.\n\nA pontuação combina fatores como formação acadêmica, trajetória profissional e renda anual. Quem soma o suficiente passa a ter tratamento preferencial na imigração, o que encurta de forma significativa o caminho até a permanência definitiva no país.", cta: "Use a calculadora de pontos e os formulários do portal oficial da Immigration Services Agency para estimar a sua pontuação antes de iniciar o pedido.", sources: [{ label: "Immigration Services Agency of Japan", url: "https://www.isa.go.jp/en/" }] },
      { title: "💡 Pontos somam por formação, carreira e renda", body: "No sistema japonês de Highly-Skilled Professional, a residência rápida depende de atingir um total de pontos, e esses pontos vêm de uma combinação de critérios e não de um fator único. Formação acadêmica, anos de experiência relevante e nível de renda anual entram na conta e podem se complementar.\n\nIsso significa que vale mapear cada item com cuidado, porque pequenos ganhos em diferentes categorias podem fazer a diferença para alcançar o patamar mais alto. Organizar diplomas, comprovantes de carreira e renda com antecedência facilita bastante a montagem do pedido.", cta: "Reúna comprovantes de formação, experiência e renda desde cedo, pois cada um soma pontos no sistema e juntos definem se você atinge o patamar exigido.", sources: [{ label: "Immigration Services Agency of Japan", url: "https://www.isa.go.jp/en/" }] },
    ],
    countryTab: [
      { headline: "Japão abre trilha expressa de residência permanente para altos talentos", standfirst: "Pontuação elevada no regime de Highly-Skilled Professional passa a destravar permanência em prazo curto, com foco em pesquisa e tecnologia.", body: "O Japão lançou uma trilha expressa dentro do regime de Highly-Skilled Professional, encurtando de forma marcante o caminho até a residência permanente para quem atinge a faixa mais alta de pontos. A medida mira pesquisadores e profissionais de tecnologia, perfis que o país considera estratégicos.\n\nO sistema é baseado em pontos calculados a partir de formação acadêmica, trajetória profissional e renda anual, entre outros fatores. Ao cruzar o limiar exigido, o profissional passa a receber tratamento preferencial na imigração, o que comprime o tempo necessário para obter a permanência definitiva.\n\nO gesto é lido como sinal de abertura crescente de um mercado tradicionalmente mais fechado à imigração. Ao premiar qualificação técnica e científica com um caminho acelerado, o Japão tenta se posicionar na disputa global por talentos de ponta.", keyFacts: ["Trilha expressa concede residência permanente em prazo curto para a pontuação mais alta", "O regime de Highly-Skilled Professional usa pontos por formação, carreira e renda", "O foco recai sobre pesquisadores e profissionais de tecnologia"], sources: [{ label: "Immigration Services Agency of Japan", url: "https://www.isa.go.jp/en/" }] },
    ],
    blog: [],
  },

  // ───────────────────────────── Canadá ─────────────────────────────
  ca: {
    community: [
      {
        publishedAt: "2026-07-13",
        urgency: "urgent",
        title: "Canadá reabre o LMIA de baixa remuneração em oito regiões",
        body:
          "O Canadá voltou a processar pedidos de LMIA, a avaliação de impacto no mercado de trabalho, para vagas de baixa remuneração em oito regiões metropolitanas, entre elas Halifax, Winnipeg e Regina. A restrição vinha barrando esses pedidos em áreas com desemprego mais alto.\n\nO LMIA é a peça que autoriza um empregador canadense a contratar um trabalhador estrangeiro, e sustenta boa parte dos vistos de trabalho temporário. Com a reabertura, empregadores dessas regiões voltam a poder patrocinar vagas que estavam travadas.",
        cta: "Tem oferta de trabalho numa dessas regiões? Confirme com o empregador se a vaga já pode seguir com o LMIA.",
        sources: [
          { label: "Canadá · Programa de Trabalhadores Estrangeiros Temporários (ESDC, oficial)", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html" },
        ],
      },
      {
        publishedAt: "2026-07-13",
        title: "Express Entry chama gerentes seniores e a Colúmbia Britânica prioriza saúde e construção",
        body:
          "O Canadá realizou o segundo sorteio do Express Entry voltado a gerentes seniores com experiência de trabalho no próprio país, dentro da seleção por categorias que a IRCC vem usando pra chamar perfis específicos. Na mesma semana, a Colúmbia Britânica emitiu convites pelo seu programa provincial para ocupações prioritárias de saúde e construção.\n\nÉ o retrato do momento: em vez de um funil único, o país abre janelas segmentadas por profissão e por província. Quem se encaixa numa categoria priorizada tem hoje o caminho mais curto.",
        cta: "Seu perfil é de gestão, saúde ou construção? Deixe o Express Entry pronto e acompanhe a categoria e a província certas.",
        sources: [
          SRC.ircc,
          { label: "British Columbia · BC PNP (oficial)", url: "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program" },
        ],
      },
      {
        title: "Províncias aceleram os convites em julho",
        body:
          "As províncias canadenses entraram julho de 2026 em ritmo forte de seleção. Alberta, pelo AAIP, emitiu mais de mil convites em seis sorteios recentes, com prioridade declarada pra saúde, aviação e tecnologia. Manitoba convidou 77 candidatos no Skilled Worker Stream, e a Colúmbia Britânica realizou um sorteio voltado a empreendedores.\n\nCada nomeação provincial soma 600 pontos no Express Entry, o que praticamente garante o convite federal. O detalhe é que as janelas provinciais abrem e fecham rápido, e cada programa tem lista própria de ocupações.",
        cta: "Tem perfil de saúde, tech ou empreendedor? Deixe o perfil pronto e acompanhe a província certa, porque os sorteios não avisam com antecedência.",
        sources: [
          { label: "Alberta · AAIP (oficial)", url: "https://www.alberta.ca/alberta-advantage-immigration-program" },
          { label: "Manitoba · MPNP (oficial)", url: "https://immigratemanitoba.com/" },
          { label: "British Columbia · BC PNP (oficial)", url: "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program" },
        ],
      },
      {
        title: "🍁 Cidadania por descendência: o Bill C-3 derruba o limite de 1ª geração",
        body:
          "O Canadá sancionou em 15 de dezembro de 2025 o Bill C-3, que altera o limite de primeira geração da cidadania por descendência. Antes, quem nascia fora do país só transmitia a cidadania à primeira geração nascida no exterior. Com a mudança, o vínculo pode alcançar netos e bisnetos de canadenses, desde que atendidos os critérios legais.\n\nNa prática, muita gente que se julgava sem direito pode, na verdade, já ser cidadã ou ter caminho pra reconhecimento. O primeiro passo é checar a elegibilidade na ferramenta oficial da IRCC antes de qualquer pedido.",
        cta: "Tem avós ou bisavós canadenses? Verifique a elegibilidade no site oficial da IRCC, a regra mudou e pode te alcançar.",
        sources: [
          { label: "IRCC · Mudança nas regras de cidadania em 2025 (Bill C-3, oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/act-changes/rules-2025.html" },
        ],
      },
      {
        title: "Express Entry 2026: o corte subiu pra 481 pontos",
        body:
          "O Canadá começou 2026 com o Express Entry mais disputado da década. No último corte registrado, a nota mínima (CRS) ficou em 481 pontos, doze a mais que no trimestre anterior.\n\nNa prática, quem está na faixa dos 470 precisa somar pontos rápido. Os caminhos mais diretos são melhorar a nota de idioma, conseguir uma oferta de trabalho válida ou garantir uma nomeação provincial.",
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
      {
        title: "🎓 Educação: Canadá apertou o visto de estudante",
        body:
          "O Canadá reduziu bastante a entrada de estudantes internacionais. Depois do limite criado em 2024, que cortou cerca de 40% dos vistos, o teto de 2025 ficou em 437 mil permissões de estudo, 10% a menos que no ano anterior.\n\nNa prática, a vaga ficou mais concorrida e surgiu uma exigência: a maioria dos candidatos precisa de uma carta de atestado provincial (a PAL/TAL), além da carta de aceite da instituição. Cada província tem a sua cota.",
        cta: "Vai estudar no Canadá? Confirme se a instituição emite a PAL e entre cedo, as cotas provinciais esgotam.",
        sources: [SRC.iccStudentCap, SRC.eduCanada],
      },
      {
        title: "🏥 Saúde: a cobertura pública no Canadá tem carência",
        body:
          "O Canadá tem saúde pública, o Medicare, mas ela é administrada por cada província, e várias impõem um período de carência de até cerca de 3 meses pra novos residentes começarem a ser cobertos.\n\nNesse intervalo o recém-chegado fica fora do sistema público, então um seguro-saúde privado temporário costuma ser indispensável nos primeiros meses.",
        cta: "Vai pro Canadá? Contrate um seguro-saúde pros primeiros meses até a cobertura provincial valer.",
        sources: [SRC.healthCanada],
      },
      {
        title: "💰 Economia: no Canadá, fique de olho nos juros e na moradia",
        body:
          "Dois números mexem com o bolso de quem vai pro Canadá: a taxa básica de juros do Bank of Canada, que influencia crédito e câmbio, e o custo de moradia, que segue pressionado nas grandes cidades.\n\nAcompanhar os dois ajuda a planejar o orçamento de mudança com realismo, sem surpresa no aluguel.",
        cta: "Planeje a mudança olhando a taxa do Bank of Canada e o custo de aluguel no Statistics Canada.",
        sources: [SRC.bankCanada, SRC.statCan],
      },
    ],
    countryTab: [
      {
        publishedAt: "2026-07-13",
        urgency: "urgent",
        headline: "Canadá abre julho com o trabalho no centro: LMIA reaberto e sorteios por categoria",
        standfirst:
          "A reabertura do LMIA de baixa remuneração em oito regiões, um novo sorteio do Express Entry para gerentes seniores e convites provinciais da Colúmbia Britânica marcaram a segunda semana de julho de 2026.",
        body:
          "A imigração canadense entrou na segunda semana de julho de 2026 com o mercado de trabalho no comando. A novidade de maior alcance foi a reabertura do processamento de LMIA para vagas de baixa remuneração em oito regiões metropolitanas, entre elas Halifax, Winnipeg e Regina. Essas áreas estavam com os pedidos suspensos, e a volta do LMIA destrava contratações que dependiam desse aval.\n\nNo âmbito federal, a IRCC realizou o segundo sorteio do Express Entry dirigido a gerentes seniores com experiência de trabalho no Canadá. É mais um exemplo da seleção por categorias, o modelo em que o país chama profissões específicas em vez de sortear todo mundo pela nota bruta. A lógica premia quem já tem vínculo e experiência local.\n\nAs províncias seguiram no mesmo compasso. A Colúmbia Britânica emitiu convites pelo seu programa provincial para ocupações prioritárias de saúde e construção, duas áreas de escassez declarada. Uma nomeação provincial continua somando 600 pontos no Express Entry, o que praticamente garante o convite federal.\n\nPara a comunidade WiseHub, o recado da semana é que o Canadá está contratando por recorte. Quem tem oferta numa das regiões do LMIA reaberto, perfil de gestão sênior ou profissão prioritária numa província sai na frente. O caminho mais curto hoje passa por encaixar o perfil na janela certa e reagir rápido quando ela abre.",
        keyFacts: [
          "LMIA de baixa remuneração reaberto em oito regiões, incluindo Halifax, Winnipeg e Regina",
          "Express Entry: segundo sorteio por categoria para gerentes seniores com experiência canadense",
          "Colúmbia Britânica: convites provinciais para saúde e construção",
          "Nomeação provincial soma 600 pontos no Express Entry",
        ],
        sources: [
          { label: "Canadá · Programa de Trabalhadores Estrangeiros Temporários (ESDC, oficial)", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html" },
          SRC.ircc,
          { label: "British Columbia · BC PNP (oficial)", url: "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program" },
        ],
      },
      {
        headline: "Províncias puxam a imigração canadense e a cidadania por descendência se amplia",
        standfirst:
          "Julho de 2026 começou com sorteios provinciais intensos em Alberta, Manitoba e Colúmbia Britânica, enquanto o Bill C-3 reabre a cidadania por descendência a netos e bisnetos.",
        body:
          "A imigração canadense entrou em julho de 2026 movida pelas províncias. A Alberta, por meio do AAIP, emitiu mais de mil convites em seis sorteios recentes, com foco explícito em saúde, aviação e tecnologia. Manitoba selecionou 77 candidatos no seu Skilled Worker Stream, e a Colúmbia Britânica abriu uma rodada voltada a empreendedores em duas trilhas de residência permanente.\n\nO recado é claro: as trilhas provinciais viraram a via mais concreta pra quem quer o Canadá neste momento. Uma nomeação de província soma 600 pontos no Express Entry, o suficiente pra transformar um perfil mediano em convite quase certo. Como cada programa tem lista própria de ocupações e janelas curtas, sair na frente exige perfil pronto e monitoramento constante.\n\nNo campo da cidadania, a novidade é estrutural. O Bill C-3, sancionado em 15 de dezembro de 2025, alterou o limite de primeira geração da cidadania por descendência. Descendentes que antes ficavam de fora, como netos e bisnetos de canadenses nascidos no exterior, passam a ter caminho pra reconhecimento, desde que cumpram os critérios legais.\n\nPra comunidade WiseHub, o momento pede duas frentes de atenção. Quem tem qualificação em saúde, tecnologia ou empreende deve mirar a trilha provincial certa. E quem tem raízes canadenses na família vale checar a nova regra de cidadania, porque a porta que parecia fechada pode ter sido reaberta.",
        keyFacts: [
          "Alberta (AAIP): mais de mil convites em seis sorteios recentes, foco em saúde, aviação e tecnologia",
          "Manitoba (MPNP): 77 convites no Skilled Worker Stream",
          "Colúmbia Britânica (BC PNP): rodada voltada a empreendedores em duas trilhas de PR",
          "Nomeação provincial soma 600 pontos no Express Entry",
          "Bill C-3 (15/12/2025): cidadania por descendência alcança além da 1ª geração",
        ],
        sources: [
          { label: "Alberta · AAIP (oficial)", url: "https://www.alberta.ca/alberta-advantage-immigration-program" },
          { label: "Manitoba · MPNP (oficial)", url: "https://immigratemanitoba.com/" },
          { label: "British Columbia · BC PNP (oficial)", url: "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program" },
          { label: "IRCC · Mudança nas regras de cidadania em 2025 (oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/act-changes/rules-2025.html" },
        ],
      },
      {
        headline: "Canadá aperta o funil e escolhe quem quer: tecnologia e saúde na frente",
        standfirst:
          "O Express Entry de 2026 ficou mais seletivo, com corte em 481 pontos e prioridade clara pra tecnologia e saúde. Veja o que mudou e como se posicionar.",
        body:
          "O Canadá entrou em 2026 com a política de imigração qualificada mais agressiva dos últimos dez anos. O corte do Express Entry, a nota que separa quem recebe o convite de quem fica na fila, subiu pra 481 pontos no levantamento mais recente, doze pontos acima do trimestre anterior.\n\nA leitura é direta: o país está mais exigente, mas continua abrindo a porta. A diferença é que agora escolhe com mais precisão. As ocupações de tecnologia e saúde ganharam prioridade, enquanto funções genéricas perderam espaço nos sorteios.\n\nPra quem está perto do corte, três alavancas decidem o jogo. A primeira é o idioma: subir de um nível bom pra um nível alto no IELTS ou no CELPIP rende dezenas de pontos. A segunda é a nomeação provincial, que sozinha adiciona 600 pontos. A terceira é uma oferta de trabalho formal de um empregador canadense.\n\nO recado pra quem mira o Canadá este ano é planejar com antecedência. O perfil precisa estar completo e atualizado antes da abertura das janelas, porque elas são curtas e os sorteios não esperam.",
        keyFacts: [
          "CRS mínimo no último corte: 481 pontos, alta de 12 no trimestre",
          "Ontário, trilha de tecnologia: 2.500 vagas reabrindo",
          "Nomeação provincial: soma 600 pontos no CRS",
          "Tendência: alta pra tecnologia e saúde, baixa pra ocupações genéricas",
        ],
        sources: [SRC.ircc, SRC.oinp],
      },
      {
        headline: "🎓 Estudar no Canadá ficou mais concorrido: como se posicionar",
        standfirst:
          "O limite de vistos de estudante reduziu a entrada e criou exigências novas. Veja o que mudou e como aumentar suas chances.",
        body:
          "O Canadá, que por anos foi um dos destinos mais abertos pra estudantes internacionais, mudou de rota. Em 2024 o governo criou um limite de vistos de estudo, e o efeito foi forte: a entrada de estudantes caiu cerca de 40%. Pra 2025, o teto ficou em 437 mil permissões, 10% a menos que no ano anterior.\n\nO motivo declarado foi aliviar a pressão sobre moradia, saúde e serviços nas cidades com muitos estudantes. Junto do limite veio uma exigência nova: a maioria dos candidatos agora precisa de uma carta de atestado provincial, a PAL ou TAL, além da carta de aceite da instituição. E cada província recebe uma cota própria, que esgota.\n\nNa prática, a vaga ficou mais disputada e o planejamento conta mais do que nunca. Escolher uma instituição reconhecida, que emita a PAL, e entrar com o pedido cedo no calendário são o que separa quem consegue de quem fica de fora.\n\nVale lembrar o que torna o Canadá ainda atraente: o diploma costuma vir acompanhado da elegibilidade ao PGWP, a licença de trabalho pós-estudo, que liga o estudo a uma porta de permanência. Por isso o caminho do estudo segue valioso, desde que a pessoa jogue dentro das novas regras.",
        keyFacts: [
          "Teto 2025: 437 mil vistos de estudo, 10% a menos que 2024",
          "Limite de 2024 já reduziu a entrada de estudantes em ~40%",
          "Maioria precisa da carta provincial (PAL/TAL) + aceite da instituição",
          "Cotas por província (Ontário, BC, Quebec, etc.) que esgotam",
          "Diploma pode dar elegibilidade ao PGWP (trabalho pós-estudo)",
        ],
        sources: [SRC.iccStudentCap, SRC.eduCanada],
      },
    ],
    blog: [
      {
        publishedAt: "2026-07-13",
        headline: "O Canadá que contrata por recorte: a lógica das janelas segmentadas",
        standfirst:
          "Reabrir o LMIA em regiões escolhidas, sortear gerentes seniores por categoria e chamar saúde e construção nas províncias fazem parte da mesma estratégia: selecionar por necessidade, não por volume.",
        body:
          "Por muito tempo o Canadá foi lido como um país de porta larga, em que bastava somar pontos e esperar. A segunda semana de julho de 2026 mostrou, em três movimentos, que a régua virou outra. Cada decisão recente aponta para a mesma direção: contratar por recorte, endereçando escassez específica em vez de abrir tudo de uma vez.\n\nO primeiro movimento foi a reabertura do LMIA de baixa remuneração em oito regiões metropolitanas, como Halifax, Winnipeg e Regina. Em vez de uma regra nacional única, o país calibra por território, liberando onde falta mão de obra e segurando onde o mercado está saturado. É imigração ajustada ao mapa econômico.\n\nO segundo foi o novo sorteio do Express Entry para gerentes seniores com experiência canadense. A seleção por categorias substitui o sorteio genérico por convites dirigidos, e valoriza quem já provou vínculo com o país. O terceiro veio das províncias, com a Colúmbia Britânica chamando saúde e construção, exatamente as áreas de aperto.\n\nPara a comunidade WiseHub, entender essa lógica vale mais do que perseguir a nota de corte. O Canadá de 2026 recompensa o candidato que lê o próprio perfil como uma chave e procura a fechadura certa, seja uma região com LMIA aberto, uma categoria federal priorizada ou uma província com carência declarada. Quem enxerga o sistema como um conjunto de janelas, e não como uma fila única, encontra caminhos que a maioria não vê.",
        tags: ["Canadá", "LMIA", "Express Entry", "Provincial Nominee"],
        sources: [
          { label: "Canadá · Programa de Trabalhadores Estrangeiros Temporários (ESDC, oficial)", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html" },
          SRC.ircc,
        ],
      },
      {
        headline: "O Canadá que se abre pelas províncias e pela linhagem",
        standfirst:
          "Enquanto o corte federal segue duro, as províncias e uma nova lei de cidadania criam caminhos que muita gente ainda não percebeu.",
        body:
          "Quando se fala em imigrar pro Canadá, a imagem que vem à cabeça é a do Express Entry federal e da corrida por pontos. Mas o começo de julho de 2026 mostrou que boa parte da ação real está acontecendo em outro lugar, nas províncias.\n\nAlberta, Manitoba e Colúmbia Britânica abriram sorteios em sequência, e o padrão é revelador. A Alberta despejou mais de mil convites em seis rodadas curtas, mirando saúde, aviação e tecnologia. Manitoba chamou trabalhadores qualificados pelo seu programa próprio, e a Colúmbia Britânica foi atrás de empreendedores. São vias que somam 600 pontos de uma vez e, por isso, resolvem o jogo de quem está travado no corte federal.\n\nParalelo a isso, uma mudança silenciosa mexe com a base de quem pode se dizer canadense. O Bill C-3, em vigor desde o fim de 2025, derrubou o limite que travava a cidadania por descendência na primeira geração nascida fora do país. De repente, netos e bisnetos de canadenses que se davam por excluídos ganharam um caminho pra reconhecimento.\n\nA lição pra comunidade WiseHub é não olhar o Canadá por uma porta só. A federal é a mais famosa, mas as provinciais costumam ser mais rápidas pra perfis específicos, e a via da cidadania por descendência pode transformar uma pesquisa de família num passaporte. Em 2026, quem estuda o mapa inteiro sai na frente de quem fica preso à fila federal.",
        tags: ["Canadá", "Provincial Nominee", "Cidadania", "Bill C-3"],
        sources: [
          { label: "Alberta · AAIP (oficial)", url: "https://www.alberta.ca/alberta-advantage-immigration-program" },
          { label: "IRCC · Mudança nas regras de cidadania em 2025 (oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/act-changes/rules-2025.html" },
        ],
      },
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
        title: "Austrália muda o pacote de vistos a partir de 1º de julho de 2026",
        body:
          "A Austrália colocou em vigor, desde 1º de julho de 2026, um pacote amplo de mudanças que atinge candidatos a visto, empregadores patrocinadores e quem busca a cidadania. A maioria das taxas de visto subiu 25% na primeira parcela, enquanto vistos humanitários, de proteção e parte dos de estudante tiveram reajuste menor, na linha da inflação.\n\nNo trabalho patrocinado, o piso salarial mínimo (TSMIT) passou para AUD 79.423 por ano, valendo para pedidos protocolados a partir de 1º de julho. Empregadores precisam confirmar que a vaga oferecida alcança o novo patamar antes de dar entrada.",
        cta: "Vai aplicar depois de 1º de julho? Confira a taxa atual da sua subclasse e, se for patrocinado, verifique se o salário bate o novo piso.",
        sources: [{ label: "Austrália · Home Affairs, taxas e encargos de visto (oficial)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges" }, { label: "Austrália · Federal Register of Legislation", url: "https://www.legislation.gov.au/" }],
      },
      {
        title: "Working Holiday: idade agora conta no dia do pedido, e vai até 35 pra alguns países",
        body:
          "Duas mudanças mexem com o Working Holiday australiano desde 1º de julho de 2026. Para o Working Holiday (subclasse 417) e o Work and Holiday (subclasse 462), a idade limite passa a ser verificada no momento do protocolo, e não mais numa etapa posterior. Quem está perto do teto de idade precisa aplicar o quanto antes.\n\nAlém disso, o teto de idade do 417 subiu de 30 para 35 anos para passaportes de Chipre, Finlândia, Alemanha e Coreia do Sul, por acordos recíprocos. O Brasil entra pelo 462, que segue com as regras próprias da subclasse.",
        cta: "Perto do limite de idade? Protocole cedo, porque agora a idade é conferida na data do pedido.",
        sources: [SRC.dhaWHV, { label: "Austrália · Working Holiday visa (subclasse 417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417" }],
      },
      {
        title: "🎓 Educação: a Austrália tem o visto de estudante mais caro do mundo",
        body:
          "Estudar na Austrália ficou mais caro logo na entrada. Desde 1º de julho de 2025, a taxa do visto de estudante (subclasse 500) subiu pra AUD 2.000, um aumento de 25% sobre os AUD 1.600 anteriores. É hoje a taxa de visto de estudante mais cara do mundo.\n\nE não para no estudante: o cônjuge acima de 18 paga outros AUD 2.000, e cada filho menor, AUD 500. O país também apertou os requisitos de inglês e de \"estudante genuíno\".",
        cta: "Vai estudar na Austrália? Inclua a taxa de AUD 2.000 (e a dos dependentes) no orçamento desde o início.",
        sources: [SRC.studyAustralia],
      },
      {
        title: "🏥 Saúde: estudante na Austrália precisa do OSHC obrigatório",
        body:
          "O Medicare, a saúde pública australiana, é pra cidadãos e residentes permanentes (e alguns países com acordo). Estudante internacional não entra: é obrigatório contratar o OSHC (Overseas Student Health Cover) por todo o período do visto.\n\nQuem vai a trabalho temporário também costuma precisar de cobertura privada. Então seguro-saúde entra no cálculo desde o começo.",
        cta: "Vai de visto de estudante? O OSHC é obrigatório e cobre toda a estadia, contrate junto com a matrícula.",
        sources: [SRC.studyAustralia, SRC.ausHealth],
      },
      {
        title: "💰 Economia: juros do RBA e o custo de vida australiano",
        body:
          "Dois indicadores pesam pra quem vai pra Austrália: a taxa básica do Reserve Bank of Australia (RBA), que move o câmbio do dólar australiano, e o custo de vida, alto em Sydney e Melbourne, principalmente moradia.\n\nAcompanhar o RBA e os dados do Australian Bureau of Statistics ajuda a dimensionar o orçamento sem susto.",
        cta: "Planeje a mudança olhando a taxa do RBA e o custo de vida no Australian Bureau of Statistics.",
        sources: [SRC.rba, SRC.abs],
      },
    ],
    countryTab: [
      {
        headline: "Austrália encarece vistos e eleva pisos salariais a partir de 1º de julho",
        standfirst:
          "Pacote em vigor desde 1º de julho de 2026 sobe taxas, atualiza o piso do trabalho patrocinado e muda regras do Working Holiday.",
        body:
          "A Austrália abriu o ano fiscal de 2026 com um conjunto amplo de mudanças migratórias, todas em vigor desde 1º de julho de 2026. A maioria das subclasses de visto teve alta de 25% na primeira parcela da taxa, enquanto categorias humanitárias, de proteção e parte dos vistos de estudante subiram apenas pela inflação, algo em torno de 2,6%. As taxas de cidadania também foram reajustadas.\n\nNo trabalho patrocinado por empregador, o piso salarial mínimo, o TSMIT, subiu para AUD 79.423 por ano, valendo para pedidos protocolados a partir de 1º de julho. O novo patamar afeta vistos como o Skills in Demand (subclasse 482), o Employer Nomination Scheme (186) e o Skilled Employer Sponsored Regional (494). Já o teto de alta renda usado em certas isenções do 186 passou de AUD 183.100 para AUD 190.100.\n\nO Working Holiday também mudou. Para as subclasses 417 e 462, a idade passa a ser conferida no momento do pedido, e o teto do 417 subiu de 30 para 35 anos para passaportes de Chipre, Finlândia, Alemanha e Coreia do Sul. Subiram ainda as taxas de recurso no Administrative Review Tribunal e as custas na Justiça Federal, além de um novo limite de três importações por pedido no ImmiAccount.",
        keyFacts: [
          "Pacote em vigor desde 1º de julho de 2026",
          "Maioria das taxas de visto sobe 25% na primeira parcela; humanitários e parte dos estudantes só pela inflação (~2,6%)",
          "Piso do trabalho patrocinado (TSMIT) vai a AUD 79.423 por ano",
          "Working Holiday 417 vai até 35 anos para Chipre, Finlândia, Alemanha e Coreia do Sul; idade conferida no protocolo",
        ],
        sources: [{ label: "Austrália · Home Affairs, taxas e encargos de visto (oficial)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges" }, { label: "Austrália · Federal Register of Legislation", url: "https://www.legislation.gov.au/" }],
      },
      {
        headline: "🎓 Austrália: estudar ficou mais caro e mais exigente",
        standfirst:
          "A taxa do visto de estudante saltou de patamar e os requisitos apertaram. Veja o custo real e como se preparar.",
        body:
          "A Austrália sempre foi um destino de peso pra estudantes internacionais, mas o custo de entrada deu um salto. Desde 1º de julho de 2025, a taxa do visto de estudante (subclasse 500) passou de AUD 1.600 pra AUD 2.000, um aumento de 25% que fez dela a taxa de visto de estudante mais cara do mundo.\n\nO valor sobe rápido pra quem vai em família: o cônjuge adulto paga outros AUD 2.000 e cada filho menor, AUD 500. E o custo não é só esse: o estudante internacional precisa do seguro OSHC pelo período inteiro, e o país endureceu os requisitos de inglês e o teste de \"estudante genuíno\".\n\nAinda assim, a Austrália segue valendo o esforço pra muita gente, pela qualidade das universidades e pela ligação entre estudo e trabalho pós-formatura. O ponto é planejar o orçamento real, somando visto, seguro e o custo de vida alto das grandes cidades, antes de decidir.",
        keyFacts: [
          "Visto de estudante (500): AUD 2.000 desde jul/2025 (+25%)",
          "Dependente adulto +AUD 2.000, filho +AUD 500",
          "OSHC (seguro-saúde) obrigatório por todo o visto",
          "Requisitos de inglês e de 'estudante genuíno' mais rígidos",
        ],
        sources: [SRC.studyAustralia, SRC.ausHealth],
      },
    ],
    blog: [
      {
        headline: "O 1º de julho da Austrália: mais caro pra entrar, mais exigente pra patrocinar",
        standfirst:
          "O reajuste anual de 2026 encarece a maioria dos vistos, sobe o piso do trabalho qualificado e reorganiza o Working Holiday. Entender o timing virou parte da estratégia.",
        body:
          "Todo 1º de julho a Austrália atualiza taxas e limiares, mas o pacote de 2026 chama atenção pelo tamanho. A leitura rápida é de encarecimento: a maioria das subclasses subiu 25% na primeira parcela da taxa de visto, e só categorias sensíveis, como vistos humanitários, de proteção e parte dos de estudante, ficaram na correção pela inflação.\n\nMais do que o valor, o que muda a estratégia é o piso salarial. Com o TSMIT em AUD 79.423, o trabalho patrocinado passa a exigir salários maiores, e a conta recai sobre o empregador, que precisa comprovar que a vaga alcança o novo patamar. Para quem depende de patrocínio, isso estreita as vagas elegíveis e valoriza posições mais bem pagas.\n\nHá também um recado para os mais jovens. O Working Holiday segue como a porta mais acessível, mas agora a idade é conferida na hora do pedido, o que elimina a margem de quem contava aplicar já perto do limite. Para quatro países, incluindo a Alemanha, o teto do 417 subiu a 35 anos, sinal de que a Austrália continua usando acordos bilaterais para atrair mão de obra jovem de origens específicas.\n\nA recomendação para a comunidade WiseHub é olhar o calendário tanto quanto o mérito do caso. Muitas dessas regras valem para pedidos protocolados a partir de 1º de julho, então o momento do protocolo pode definir a taxa que você paga e até a sua elegibilidade. Planejar a data deixou de ser detalhe.",
        tags: ["Austrália", "Taxas de visto", "TSMIT", "Working Holiday"],
        sources: [{ label: "Austrália · Home Affairs, taxas e encargos de visto (oficial)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges" }, { label: "Austrália · Federal Register of Legislation", url: "https://www.legislation.gov.au/" }],
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
      {
        title: "🎓 Educação: o ensino nos Emirados é internacional e privado",
        body:
          "A educação nos Emirados é majoritariamente privada e internacional, com escolas de currículo britânico, americano e indiano, e campi de universidades estrangeiras (como NYU e Sorbonne em Abu Dhabi). Não há limite de vagas pra estrangeiros, mas o custo das escolas privadas é alto.\n\nEm Dubai, a qualidade das escolas é fiscalizada e avaliada pelo KHDA; no nível federal, quem rege é o Ministério da Educação.",
        cta: "Vai com a família pros Emirados? Cheque a avaliação da escola no KHDA (Dubai) e some a mensalidade privada ao orçamento.",
        sources: [SRC.uaeMoE, SRC.khda],
      },
      {
        title: "🏥 Saúde: seguro-saúde é obrigatório pra morar nos Emirados",
        body:
          "Nos Emirados, ter seguro-saúde é condição pra obter e renovar o visto de residência. Em Dubai e Abu Dhabi, o empregador costuma cobrir o funcionário, mas dependentes e autônomos precisam contratar por conta.\n\nA rede privada é de alto padrão, e a Dubai Health Authority (DHA) regula o sistema no emirado. Sem seguro, não há residência.",
        cta: "Vai morar nos Emirados? Garanta o seguro-saúde, ele é exigido pra emitir e renovar o visto.",
        sources: [SRC.dhaHealth],
      },
      {
        title: "💰 Economia: nos Emirados, salário sem imposto de renda",
        body:
          "O grande atrativo financeiro dos Emirados é a ausência de imposto de renda sobre pessoa física: o que você ganha, você leva. O dirham (AED) é atrelado ao dólar americano, o que dá estabilidade cambial.\n\nDesde 2023 há um imposto corporativo de 9% pra empresas acima de um limite de lucro, mas o salário do trabalhador segue isento. O Banco Central dos Emirados rege a política monetária.",
        cta: "Pensando nos Emirados? Lembre que o salário é isento de imposto de renda e o dirham é atrelado ao dólar.",
        sources: [SRC.centralBankUAE],
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
        publishedAt: "2026-07-13",
        urgency: "urgent",
        title: "Reino Unido publica o Statement of Changes HC 259 e ajusta regras de fixação de filhos",
        body:
          "O Home Office publicou o Statement of Changes HC 259, o documento oficial que atualiza as Regras de Imigração britânicas. Entre os pontos estão ajustes nas regras de fixação, o settlement, de crianças previstas na Parte 8 das Regras, além de uma exceção ligada à proibição de fiança migratória.\n\nOs Statements of Changes são a forma como o Reino Unido altera suas regras de visto na prática, e cada item costuma ter a própria data de entrada em vigor. Quem tem processo de família em andamento deve conferir no texto oficial qual versão da regra se aplica ao seu caso.",
        cta: "Tem processo de fixação de filhos no Reino Unido? Confira no HC 259 a data de vigência de cada mudança.",
        sources: [
          { label: "Reino Unido · Statement of Changes to the Immigration Rules (gov.uk, oficial)", url: "https://www.gov.uk/government/collections/immigration-rules-statement-of-changes" },
        ],
      },
      {
        publishedAt: "2026-07-13",
        title: "eGates do Reino Unido passam a aceitar crianças de 8 e 9 anos",
        body:
          "O Home Office ampliou o uso dos eGates, as cabines automáticas de controle de fronteira, para crianças a partir de 8 anos, que agora podem passar acompanhadas nos aeroportos habilitados. Antes o limite de idade era mais alto, e famílias com filhos menores precisavam da fila com atendente.\n\nNa prática, é um alívio para quem viaja em família e chega por aeroportos com eGates. A medida diz respeito à entrada no país, e as regras de visto e de permissão de viagem seguem valendo normalmente.",
        cta: "Vai ao Reino Unido com crianças? Filhos de 8 e 9 anos já podem usar os eGates acompanhados.",
        sources: [
          { label: "Reino Unido · Home Office (gov.uk, oficial)", url: "https://www.gov.uk/government/organisations/home-office" },
        ],
      },
      {
        title: "Novo projeto de lei de imigração começa a tramitar no Parlamento",
        body:
          "O Reino Unido publicou o Immigration and Asylum Bill, o projeto de lei de imigração e asilo anunciado no Discurso do Rei em 13 de maio de 2026. O texto já foi apresentado à Câmara dos Comuns e iniciou sua tramitação na sessão parlamentar de 2026 e 2027.\n\nComo todo projeto ainda em análise, as regras atuais seguem valendo até que ele seja aprovado e sancionado. Pra quem planeja o país, o momento é de acompanhar as etapas oficiais sem antecipar mudanças que ainda não entraram em vigor.",
        cta: "Vai pro Reino Unido? Acompanhe a tramitação do projeto pelo Parlamento e confirme sempre a regra vigente antes de agir.",
        sources: [
          { label: "UK Parliament · Immigration and Asylum Bill (oficial)", url: "https://bills.parliament.uk/bills/4254" },
          { label: "GOV.UK · UK Visas and Immigration", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
        ],
      },
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
      {
        title: "🏥 Saúde: no Reino Unido você paga a taxa do NHS antecipada",
        body:
          "O Reino Unido tem o NHS, a saúde pública gratuita no uso. Mas quem vai com visto paga antes uma taxa de saúde, a Immigration Health Surcharge (IHS), pra ter acesso ao sistema.\n\nEm 2025 ela é £1.035 por ano pra adultos e £776 pra estudantes e crianças, paga de uma vez pra todo o período do visto. Um visto de trabalho de 5 anos, por exemplo, sai £5.175 só de IHS. Estadias abaixo de 6 meses são isentas.",
        cta: "Vai pro Reino Unido com visto? Some a IHS (£1.035/ano) ao orçamento, ela é cobrada de uma vez no pedido.",
        sources: [SRC.ukIHS],
      },
      {
        title: "🎓 Educação: estudar no Reino Unido e a regra dos dependentes",
        body:
          "As candidaturas a universidades no Reino Unido passam pelo UCAS, e o visto de estudante é a porta de entrada. Desde 2024, porém, a maioria dos cursos não permite mais trazer dependentes (cônjuge e filhos), com exceção de programas de pesquisa e pós, como doutorado.\n\nPra quem planeja ir em família, isso muda o jogo e exige checar o tipo de curso antes de aplicar.",
        cta: "Vai estudar no Reino Unido com a família? Confirme se o seu curso permite dependentes antes de aplicar.",
        sources: [SRC.ucas, SRC.ukStudent],
      },
      {
        title: "💰 Economia: juros do Bank of England e inflação no Reino Unido",
        body:
          "Pra quem mira o Reino Unido, dois indicadores valem acompanhamento: a taxa de juros do Bank of England, que move o câmbio da libra e o custo do crédito, e a inflação medida pelo Office for National Statistics, que dita o custo de vida.\n\nMonitorar os dois ajuda a escolher a hora de enviar dinheiro e a dimensionar o custo da mudança.",
        cta: "Acompanhe a taxa do Bank of England e a inflação do ONS pra planejar câmbio e custo de vida.",
        sources: [SRC.boe, SRC.ons],
      },
    ],
    countryTab: [
      {
        publishedAt: "2026-07-13",
        urgency: "urgent",
        headline: "Reino Unido mexe nas regras e na fronteira: HC 259 e eGates para crianças",
        standfirst:
          "Um novo Statement of Changes (HC 259) ajusta regras de fixação de filhos, enquanto o Home Office libera os eGates para crianças de 8 e 9 anos. Duas mudanças concretas na segunda semana de julho de 2026.",
        body:
          "O Reino Unido fechou a segunda semana de julho de 2026 com duas mudanças práticas, uma nas regras e outra na fronteira. A primeira veio pelo Statement of Changes HC 259, o instrumento oficial que atualiza as Regras de Imigração. Entre os ajustes estão mudanças nas regras de fixação, o settlement, de crianças previstas na Parte 8, além de uma exceção ligada à proibição de fiança migratória.\n\nEsse é o mecanismo típico britânico: em vez de uma grande lei, o país costuma alterar suas regras de visto por meio de Statements of Changes periódicos, cada um com datas de vigência próprias. Por isso, quem tem processo de família em curso precisa confirmar no texto oficial qual regra se aplica ao seu caso, sem se guiar por resumos de terceiros.\n\nA segunda mudança foi na experiência de entrada. O Home Office passou a permitir que crianças de 8 e 9 anos usem os eGates, as cabines automáticas dos aeroportos, quando acompanhadas. É um ganho de conveniência para famílias, sem alterar as exigências de visto ou de permissão de viagem.\n\nPara a comunidade WiseHub, o par de novidades reforça um hábito saudável: no Reino Unido, o que muda de verdade aparece nos documentos oficiais, dos Statements of Changes aos comunicados do Home Office. Acompanhar a fonte primária evita decisões baseadas em manchete e mantém o planejamento firme.",
        keyFacts: [
          "Statement of Changes HC 259 publicado, atualizando as Regras de Imigração",
          "Ajustes nas regras de fixação (settlement) de crianças na Parte 8 das Regras",
          "Exceção ligada à proibição de fiança migratória",
          "eGates liberados para crianças de 8 e 9 anos acompanhadas",
        ],
        sources: [
          { label: "Reino Unido · Statement of Changes to the Immigration Rules (gov.uk, oficial)", url: "https://www.gov.uk/government/collections/immigration-rules-statement-of-changes" },
          { label: "Reino Unido · Home Office (gov.uk, oficial)", url: "https://www.gov.uk/government/organisations/home-office" },
        ],
      },
      {
        headline: "Reino Unido põe em marcha um novo projeto de lei de imigração e asilo",
        standfirst:
          "Anunciado no Discurso do Rei em maio, o Immigration and Asylum Bill foi publicado e começou a tramitar na Câmara dos Comuns. Até virar lei, as regras atuais continuam em vigor.",
        body:
          "O governo britânico deu início ao trâmite do Immigration and Asylum Bill, o novo projeto de lei de imigração e asilo. Anunciado no Discurso do Rei em 13 de maio de 2026, o texto foi publicado e apresentado à Câmara dos Comuns, abrindo sua passagem pela sessão parlamentar de 2026 e 2027.\n\nProjetos dessa natureza percorrem várias etapas nas duas Casas do Parlamento antes de serem aprovados, o que significa que nada muda de imediato. As vias já existentes, como o Skilled Worker e o Graduate Visa, seguem valendo enquanto o projeto é debatido.\n\nPra quem tem planos com o Reino Unido, o recado é de atenção sem alarme. Vale acompanhar o andamento do projeto pelos canais oficiais do Parlamento e do serviço de vistos, e evitar decisões baseadas em versões preliminares ou em resumos de terceiros, já que o texto ainda pode mudar ao longo da tramitação.\n\nA leitura de fundo é que a imigração continua no centro do debate político britânico. Seja qual for o desenho final da lei, o país sinaliza que pretende seguir ajustando suas regras, e quem planeja migrar precisa manter o olho na fonte oficial.",
        keyFacts: [
          "Immigration and Asylum Bill anunciado no Discurso do Rei em 13/05/2026",
          "Publicado e apresentado à Câmara dos Comuns, sessão 2026 e 2027",
          "Ainda em tramitação: regras atuais seguem em vigor até aprovação",
          "Vias como Skilled Worker e Graduate Visa continuam valendo por ora",
        ],
        sources: [
          { label: "UK Parliament · Immigration and Asylum Bill (oficial)", url: "https://bills.parliament.uk/bills/4254" },
          { label: "GOV.UK · UK Visas and Immigration", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
        ],
      },
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
        headline: "O risco britânico que ninguém coloca na planilha: o seu patrocinador",
        publishedAt: "2026-07-20",
        standfirst:
          "No Reino Unido de 2026, o maior perigo para um visto de trabalho não é o candidato ser recusado. É o empregador perder a licença depois que ele já se mudou.",
        body:
          "Quem planeja uma mudança para o Reino Unido normalmente monta a conta em cima de si mesmo. Salário mínimo exigido, nível de inglês, custo do Immigration Health Surcharge, tempo até o assentamento. É uma conta correta e incompleta, porque deixa de fora a variável que mais tem derrubado projetos: a saúde regulatória de quem patrocina.\n\nA atualização da orientação de verificação do direito ao trabalho, publicada agora como preparação para as reformas de outubro, deixa isso explícito. O Estado britânico terceirizou boa parte da fiscalização migratória para o empregador, e cobra caro quando a delegação falha. Licenças de patrocínio vêm sendo revogadas em volume recorde, e a consequência não recai apenas sobre a empresa. O trabalhador patrocinado perde a base do seu visto e passa a contar um prazo curto para encontrar outro patrocinador ou deixar o país.\n\nO efeito é perverso porque é assimétrico. O profissional cumpriu tudo, atravessou o oceano, matriculou filho em escola, assinou contrato de aluguel, e o chão pode ser puxado por uma falha administrativa de terceiro. Setores com uso intensivo de mão de obra estrangeira e margens apertadas, como cuidado a idosos e hospitalidade, concentram a maior parte dos casos.\n\nHá também um contramovimento útil de registrar. A abertura de processamento prioritário para pedidos de cidadania mostra que o sistema quer resolver mais rápido o caso de quem já está integrado e cumpriu os requisitos. Quem chega ao ponto de naturalizar sai definitivamente dessa exposição, porque deixa de depender de patrocínio, de status e de renovação.\n\nA recomendação prática, portanto, é tratar a escolha do empregador como parte da devida diligência migratória, e não apenas como decisão de carreira. Vale checar há quanto tempo a empresa consta na lista oficial de patrocinadores licenciados, se já houve suspensão anterior, qual o tamanho da operação e quantos estrangeiros ela patrocina. E vale, desde o primeiro dia, construir o relógio do assentamento com disciplina, porque o objetivo final não é o visto. É deixar de precisar dele.",
        tags: ["Reino Unido", "Skilled Worker", "Patrocínio", "Cidadania britânica", "Compliance"],
        sources: [
          { label: "Reino Unido · Verificação do direito ao trabalho (gov.uk)", url: "https://www.gov.uk/check-job-applicant-right-to-work" },
          { label: "Reino Unido · Naturalização britânica (gov.uk)", url: "https://www.gov.uk/apply-citizenship-indefinite-leave-to-remain" },
          SRC.ukSkilled,
        ],
      },
      {
        publishedAt: "2026-07-13",
        headline: "Reino Unido: as mudanças que importam vêm nos Statements of Changes",
        standfirst:
          "Enquanto o debate político rende manchetes, as regras que de fato valem mudam num documento técnico e discreto. O HC 259 é o lembrete mais recente.",
        body:
          "Quem acompanha a imigração britânica pelas manchetes costuma viver de sustos. Um discurso aqui, um projeto de lei ali, e a sensação é de que tudo pode virar do avesso a qualquer momento. Só que a mecânica real do sistema é bem menos dramática, e bem mais previsível, do que os títulos sugerem.\n\nNo Reino Unido, o grosso das regras de visto não muda por grandes leis, e sim por documentos chamados Statements of Changes to the Immigration Rules. São textos técnicos, publicados com regularidade, que ajustam pontos específicos das Regras de Imigração. O HC 259, publicado em julho de 2026, é o exemplo da vez: mexeu nas regras de fixação de crianças da Parte 8 e trouxe uma exceção sobre fiança migratória, cada mudança com sua data de vigência.\n\nA diferença de fonte muda a qualidade da decisão. Uma manchete diz que o Reino Unido endureceu ou afrouxou algo. O Statement of Changes diz exatamente o quê, para quem e a partir de quando. Para uma família com processo em andamento, essa precisão é a diferença entre agir na hora certa e agir no boato.\n\nPara a comunidade WiseHub, o conselho é de método. Guarde o link oficial dos Statements of Changes e trate cada novo documento como o que realmente move o jogo. No Reino Unido, quem lê a regra na fonte decide melhor do que quem reage ao primeiro título alarmante.",
        tags: ["Reino Unido", "Statement of Changes", "HC 259", "Regras de Imigração"],
        sources: [
          { label: "Reino Unido · Statement of Changes to the Immigration Rules (gov.uk, oficial)", url: "https://www.gov.uk/government/collections/immigration-rules-statement-of-changes" },
        ],
      },
      {
        headline: "Reino Unido: por que um novo projeto de lei não é motivo pra pânico",
        standfirst:
          "O Immigration and Asylum Bill começou a tramitar, e a reação certa não é correr nem congelar planos, é entender como uma lei nasce por lá.",
        body:
          "Toda vez que o Reino Unido anuncia um novo projeto de lei de imigração, o efeito imediato costuma ser o mesmo, uma onda de ansiedade em quem planeja o país. Com o Immigration and Asylum Bill, apresentado à Câmara dos Comuns após o Discurso do Rei de maio, não é diferente. Mas vale separar o barulho do que de fato importa.\n\nNo sistema britânico, um projeto de lei não muda nada sozinho. Ele precisa passar por leituras, comissões e votações nas duas Casas do Parlamento antes de receber a sanção real e virar lei. Esse percurso leva tempo e, com frequência, o texto sai diferente de como entrou. Ou seja, o que circula hoje como resumo do projeto não é a regra que estará valendo amanhã.\n\nPra quem tem plano concreto, isso tem uma consequência prática libertadora. As vias atuais, do Skilled Worker ao Graduate Visa, continuam funcionando normalmente enquanto o debate acontece. Congelar decisões por medo de uma mudança que ainda não existe costuma custar mais caro do que seguir com o planejamento e ajustar a rota se e quando a lei mudar.\n\nA recomendação pra comunidade WiseHub é de disciplina informativa. Acompanhe o projeto pela página oficial do Parlamento, não por manchetes soltas, e trate cada etapa como o que ela é. Em imigração britânica, quem lê a fonte primária e mantém a calma quase sempre decide melhor do que quem reage ao primeiro título alarmante.",
        tags: ["Reino Unido", "Immigration and Asylum Bill", "Parlamento", "Planejamento"],
        sources: [
          { label: "UK Parliament · Immigration and Asylum Bill (oficial)", url: "https://bills.parliament.uk/bills/4254" },
        ],
      },
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
        title: "Política de vistos volta ao centro do debate francês",
        publishedAt: "2026-07-20",
        body:
          "A possibilidade de ampliar a concessão de vistos a cidadãos argelinos reacendeu a disputa política sobre imigração na França, com forte reação da direita e da extrema direita. O tema é bilateral e específico, mas o efeito transborda: quando a imigração vira pauta eleitoral, o rito administrativo tende a ficar mais conservador.\n\nNada muda de imediato para quem está com processo em andamento. O sinal a observar é o tom das instruções consulares nos próximos meses, especialmente em renovações e pedidos de naturalização.",
        cta: "Tem pedido em curso na França? Mantenha a documentação de residência e renda impecável, porque em ciclo político tenso a análise costuma ficar mais literal.",
        sources: [
          { label: "France-Visas · Portal oficial de vistos", url: "https://france-visas.gouv.fr/" },
        ],
      },
      {
        publishedAt: "2026-07-13",
        title: "Novo controle de fronteira europeu (EES) começa a mexer com os aeroportos franceses",
        body:
          "A França está entre os países que começam a operar o EES, o novo sistema europeu de entrada e saída. Ele registra de forma biométrica os viajantes de fora da União Europeia a cada passagem de fronteira, substituindo o carimbo no passaporte por um registro digital. Aeroportos franceses já manifestaram preocupação com filas e tempo de processamento na fase inicial.\n\nO EES não é um visto, é um controle de fronteira. Para quem viaja com passaporte de fora do bloco, o efeito prático é reservar mais tempo no desembarque enquanto o sistema entra em ritmo. As regras de visto e de estadia seguem as mesmas.",
        cta: "Vai entrar na França com passaporte de fora da UE? Reserve mais tempo na fronteira enquanto o EES se ajusta.",
        sources: [
          { label: "União Europeia · Sistema de Entrada/Saída (EES, oficial)", url: "https://travel-europe.europa.eu/ees_en" },
          { label: "France Info · Immigration (Radio France)", url: "https://www.franceinfo.fr/societe/immigration.html" },
        ],
      },
      {
        title: "França simplifica o Passeport Talent num portal único",
        body:
          "A França reorganizou o Passeport Talent, o visto pra profissionais qualificados, pesquisadores e empreendedores, num portal único online. O tempo médio de análise caiu pra cerca de 60 dias.\n\nÉ um dos caminhos mais previsíveis da Europa pra quem tem alto valor profissional e quer estabilidade num país do bloco do euro.",
        cta: "Tem perfil qualificado? O Passeport Talent ficou mais simples, vale mapear sua categoria.",
        sources: [SRC.frTalent],
      },
      {
        title: "🎓 Educação: estudar na França é barato, mas não-europeu paga mais",
        body:
          "A França tem ensino superior público de baixíssimo custo, mas desde 2019 cobra uma mensalidade diferenciada de estudantes de fora da União Europeia. Em 2025/2026, são cerca de €2.895 por ano na licenciatura e €3.770 no mestrado. Mesmo assim, o Estado ainda banca cerca de dois terços do custo real.\n\nMuitas universidades concedem isenções, e o doutorado custa apenas €380. As candidaturas e o visto passam pelo Campus France.",
        cta: "Vai estudar na França sem passaporte europeu? Conte com ~€2.895/ano (licence) e cheque isenções no Campus France.",
        sources: [SRC.campusFrance],
      },
      {
        title: "🏥 Saúde: na França, todo residente entra no sistema (PUMA)",
        body:
          "A França tem um dos melhores sistemas de saúde do mundo, e quem mora de forma estável tem direito à cobertura pública pela PUMA (Proteção Universal de Doença). O reembolso costuma cobrir cerca de 70% das consultas, e a maioria complementa com uma \"mutuelle\" (seguro complementar).\n\nEstudantes e novos residentes se registram na Assurance Maladie pelo site Ameli.",
        cta: "Mudou pra França? Registre-se na Assurance Maladie (Ameli) e considere uma mutuelle pra complementar.",
        sources: [SRC.ameli],
      },
      {
        title: "💰 Economia: euro estável, mas de olho na inflação",
        body:
          "A França usa o euro, o que dá previsibilidade cambial pra quem vem da zona do euro e exige atenção ao câmbio real/euro pra brasileiros. A Banque de France acompanha o sistema financeiro local.\n\nPra dimensionar custo de vida, os dados do INSEE, o instituto de estatística francês, são a referência oficial.",
        cta: "Planeje a França acompanhando o câmbio real/euro e o custo de vida no INSEE.",
        sources: [SRC.banqueFrance, SRC.insee],
      },
    ],
    countryTab: [
      {
        headline: "França entre a fila biométrica e a disputa política sobre vistos",
        publishedAt: "2026-07-20",
        standfirst:
          "O novo sistema europeu de entrada e saída pressiona os aeroportos enquanto a possível ampliação de vistos a argelinos reabre o embate parlamentar sobre imigração.",
        body:
          "A França viveu em julho duas discussões que parecem distantes e não são. Na fronteira, o sistema europeu de entrada e saída começou a mostrar seu custo operacional, com aeroportos reclamando de filas e alertando para perda de competitividade turística. Na política, a hipótese de ampliar a concessão de vistos a cidadãos argelinos provocou reação imediata da direita e da extrema direita.\n\nO que une os dois assuntos é a mesma tensão de fundo. A França precisa de mobilidade para sustentar turismo, universidade e mercado de trabalho qualificado, e ao mesmo tempo opera num ambiente político em que qualquer flexibilização migratória vira munição eleitoral.\n\nPara quem planeja se mudar, o efeito imediato é logístico e não jurídico. O registro biométrico afeta o tempo de travessia, sobretudo na primeira entrada, e não altera critério de concessão de visto. Já o debate sobre vistos argelinos é bilateral, sem impacto direto sobre pedidos brasileiros.\n\nO ponto de atenção real é indireto. Ciclos políticos tensos costumam produzir instruções administrativas mais literais nas prefeituras e nos consulados, o que aparece na prática como exigência documental mais rígida em renovações de carte de séjour e em pedidos de naturalização. A recomendação editorial é preparar dossiê com margem, não no limite.",
        keyFacts: [
          "Sistema europeu de entrada e saída registra biometria de viajantes de fora do bloco",
          "Aeroportos franceses relatam filas e alertam para impacto no turismo",
          "Ampliação de vistos a argelinos provoca reação política intensa",
          "Nenhuma mudança de critério anunciada para pedidos brasileiros",
        ],
        sources: [
          { label: "União Europeia · Sistema de Entrada e Saída (oficial)", url: "https://travel-europe.europa.eu/ees_en" },
          { label: "France-Visas · Portal oficial de vistos", url: "https://france-visas.gouv.fr/" },
          SRC.frTalent,
        ],
      },
      {
        publishedAt: "2026-07-13",
        headline: "França na largada do EES: o novo controle de fronteira europeu chega aos aeroportos",
        standfirst:
          "O sistema europeu de entrada e saída (EES) começa a operar e registra viajantes de fora da UE de forma biométrica. Aeroportos franceses alertam para filas na fase inicial.",
        body:
          "A França entrou em julho de 2026 no grupo de países que começam a rodar o EES, o sistema europeu de entrada e saída. A mudança é de fundo: em vez do carimbo manual no passaporte, os viajantes de fora da União Europeia passam a ter entradas e saídas registradas de forma biométrica, com foto e impressões digitais, a cada travessia de fronteira externa do espaço Schengen.\n\nNa largada, o principal ruído veio dos aeroportos. Operadores franceses manifestaram preocupação com o tempo de processamento e o risco de filas mais longas enquanto passageiros e equipes se adaptam ao novo fluxo. É um desconforto típico de fase inicial, ligado à operação e não a uma restrição de entrada.\n\nVale separar o que o EES é do que ele não é. Ele não cria um novo visto nem muda quem pode ou não entrar na França. É um controle de fronteira modernizado, que digitaliza o registro de quem passa. As exigências de visto e as regras de estadia continuam as mesmas de antes.\n\nPara a comunidade WiseHub, o recado é de logística. Quem viaja para a França com passaporte de fora do bloco deve contar com mais tempo no desembarque nas primeiras semanas e chegar com a documentação organizada. Passada a curva de adaptação, o registro digital tende a tornar as passagens seguintes mais rápidas.",
        keyFacts: [
          "EES: sistema europeu de entrada e saída começa a operar, com registro biométrico",
          "Vale para viajantes de fora da União Europeia nas fronteiras externas de Schengen",
          "Aeroportos franceses alertam para filas e tempo de processamento na fase inicial",
          "Não é um visto: as regras de entrada e estadia seguem as mesmas",
        ],
        sources: [
          { label: "União Europeia · Sistema de Entrada/Saída (EES, oficial)", url: "https://travel-europe.europa.eu/ees_en" },
          { label: "France Info · Immigration (Radio France)", url: "https://www.franceinfo.fr/societe/immigration.html" },
        ],
      },
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
        headline: "A fronteira europeia virou banco de dados, e isso muda o seu planejamento",
        publishedAt: "2026-07-20",
        standfirst:
          "O sistema de entrada e saída da União Europeia substitui o carimbo por registro biométrico. O incômodo é de fila hoje, mas o efeito real é de contagem de dias.",
        body:
          "Durante décadas, a regra dos 90 dias em cada período de 180 na área Schengen foi, na prática, uma regra semiautomática. Existia no papel, dependia de carimbos manuais em passaportes e de fiscalização desigual entre fronteiras. Muita gente viveu anos numa zona cinzenta sem saber exatamente quantos dias havia acumulado.\n\nEssa zona cinzenta está fechando. Com o sistema europeu de entrada e saída, cada travessia de viajante de fora do bloco passa a ser registrada com biometria e vinculada a um cadastro central. O carimbo some, e no lugar dele entra uma contagem precisa, automática e compartilhada entre países.\n\nO ruído de julho na França foi sobre o sintoma. Aeroportos reclamaram de tempo de processamento e alertaram para o risco de o turista escolher outro continente. É uma preocupação legítima e provavelmente transitória, porque o gargalo se concentra na primeira coleta de digitais e foto, feita uma única vez dentro da validade do registro.\n\nO que merece atenção de quem planeja mudança é a consequência estrutural, não a fila. A partir do momento em que a contagem é exata, o excedente de dias deixa de ser risco teórico e passa a ser evento detectável em qualquer fronteira do bloco. Isso importa muito para três perfis comuns na comunidade: o nômade digital que circula entre países europeus sem residência formal, o investidor que passa temporadas longas antes de decidir onde fixar base, e a família que faz visitas prolongadas enquanto aguarda um processo de residência.\n\nA recomendação prática é simples e vale começar agora. Mantenha o seu próprio registro de entradas e saídas, com datas exatas, e trate a regra dos 90 em 180 como cálculo contínuo, não como estimativa. Se o seu projeto envolve permanência longa, pare de contar com tolerância de fronteira e busque a via de residência correspondente, seja estudo, trabalho qualificado ou rendimento próprio. A Europa não ficou mais fechada nesta mudança. Ela ficou mais exata, e exatidão é péssima para quem improvisa.",
        tags: ["França", "Schengen", "Fronteiras", "Nômade digital", "Planejamento"],
        sources: [
          { label: "União Europeia · Sistema de Entrada e Saída (oficial)", url: "https://travel-europe.europa.eu/ees_en" },
          { label: "France-Visas · Portal oficial de vistos", url: "https://france-visas.gouv.fr/" },
        ],
      },
      {
        publishedAt: "2026-07-13",
        headline: "EES: por que o novo controle de fronteira europeu importa mais do que parece",
        standfirst:
          "A troca do carimbo por um registro biométrico não muda quem entra na Europa, mas muda a experiência de entrar. E a França é uma das primeiras portas a sentir isso.",
        body:
          "À primeira vista, o EES parece um detalhe técnico: trocar o carimbo do passaporte por um registro digital. Mas mudanças de fronteira raramente são só técnicas. Elas alteram a experiência concreta de chegar, e é por isso que o sistema europeu de entrada e saída merece atenção de quem planeja a Europa pela França.\n\nO EES registra, de forma biométrica, cada entrada e saída de viajantes de fora da União Europeia nas fronteiras externas do espaço Schengen. O objetivo declarado é controlar melhor o tempo de permanência e reduzir fraudes de identidade. Para o viajante honesto, o efeito não é ser barrado, é passar por um processo novo, que na fase inicial custa tempo enquanto todos se adaptam.\n\nA França, com aeroportos de altíssimo volume, é um bom termômetro. Os alertas de filas que surgiram nos primeiros dias não são sinal de porta fechada, são a fricção normal de um sistema novo entrando em operação. A tendência, depois da adaptação, é que o registro digital agilize as travessias seguintes, já que os dados ficam guardados.\n\nPara a comunidade WiseHub, a leitura correta é não confundir mudança de processo com mudança de regra. O EES não mexe em visto nem em elegibilidade. O que ele pede é preparo prático: mais tempo de folga no primeiro desembarque e documentação em ordem. Entender essa diferença evita ansiedade desnecessária e ajuda a planejar a viagem com realismo.",
        tags: ["França", "EES", "Fronteiras", "Europa"],
        sources: [
          { label: "União Europeia · Sistema de Entrada/Saída (EES, oficial)", url: "https://travel-europe.europa.eu/ees_en" },
        ],
      },
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
        publishedAt: "2026-07-07",
        title: "EUA abrem escritório de asilo em Atlanta a partir de 8 de julho",
        body:
          "A USCIS anunciou a abertura de um novo escritório de asilo em Atlanta, que começa a operar em 8 de julho de 2026. A unidade passa a conduzir entrevistas de asilo para requerentes da região, aproximando o atendimento de quem antes dependia de escritórios mais distantes.\n\nNa prática, é mais capacidade de atendimento no sudeste dos Estados Unidos, o que pode reduzir deslocamento e agilizar a etapa da entrevista para os processos daquela jurisdição.",
        cta: "Tem processo de asilo na região de Atlanta? Confirme pelos canais oficiais da USCIS onde sua entrevista será realizada.",
        sources: [{ label: "USCIS · Abertura do escritório de asilo em Atlanta (oficial)", url: "https://www.uscis.gov/newsroom/alerts/uscis-opens-asylum-office-in-atlanta" }],
      },
      {
        title: "H-1B mantém teto de 85 mil, mas seleção penaliza jovens",
        body:
          "Os Estados Unidos mantiveram o teto anual de 85 mil vistos H-1B, mas a seleção baseada em faixa salarial tende a desfavorecer candidatos no início de carreira.\n\nNa prática, profissionais com salários mais altos ganham vantagem no sorteio, o que muda o cálculo de quem está começando e mira o mercado americano.",
        cta: "Mira os EUA pelo H-1B? Negocie o melhor salário possível, ele pesa na seleção.",
        sources: [SRC.usH1b],
      },
      {
        title: "🎓 Educação: nos EUA, o caminho é o F-1 com OPT no fim",
        body:
          "Pra estudar nos EUA, a via é o visto F-1, que exige o pagamento da taxa SEVIS de US$ 350 antes da entrevista. A mensalidade das universidades americanas é das mais altas do mundo, mas o grande atrativo vem no fim: o OPT, uma licença de trabalho de 12 meses após a formatura, estendida por mais 24 meses pra áreas de STEM (ciências, tecnologia, engenharia e matemática).\n\nEsse OPT é a ponte clássica entre estudar e conseguir um patrocínio de trabalho, o H-1B.",
        cta: "Vai estudar nos EUA? Pague a SEVIS (US$ 350) e já planeje o OPT pós-formatura como ponte pro trabalho.",
        sources: [SRC.sevis, SRC.educationUSA],
      },
      {
        title: "🏥 Saúde: nos EUA, sem seguro a conta é assustadora",
        body:
          "Os EUA não têm saúde pública universal. O acesso depende de seguro privado, quase sempre via empregador, e sem ele uma simples ida ao hospital pode custar milhares de dólares.\n\nPra imigrante, ter um bom seguro-saúde não é luxo, é proteção financeira essencial. As universidades costumam exigir seguro dos estudantes internacionais.",
        cta: "Vai pros EUA? Não pise lá sem seguro-saúde, uma emergência sem cobertura pode custar uma fortuna.",
        sources: [SRC.usHealthcare],
      },
      {
        title: "💰 Economia: dólar forte, juros do Fed e custo de vida",
        body:
          "Os EUA têm a maior economia do mundo e o dólar como moeda de referência, o que pesa no câmbio pra quem vem do Brasil. A taxa de juros é definida pelo Federal Reserve (o Fed), e ela move desde o financiamento até o valor do dólar.\n\nPra dimensionar custo de vida e salários por região e profissão, o Bureau of Labor Statistics (BLS) é a fonte oficial.",
        cta: "Planeje os EUA acompanhando os juros do Fed e os dados de salário e custo de vida no BLS.",
        sources: [SRC.fed, SRC.bls],
      },
    ],
    countryTab: [
      {
        publishedAt: "2026-07-07",
        headline: "USCIS abre escritório de asilo em Atlanta e amplia atendimento no sudeste dos EUA",
        standfirst:
          "A partir de 8 de julho de 2026, a nova unidade passa a conduzir entrevistas de asilo, aproximando o atendimento de quem vive na região.",
        body:
          "A USCIS confirmou a abertura de um escritório de asilo em Atlanta, com início de operação em 8 de julho de 2026. A unidade vai conduzir entrevistas de asilo para requerentes daquela jurisdição, ampliando a estrutura de atendimento no sudeste dos Estados Unidos.\n\nA medida é operacional, não muda a lei de asilo, mas tem efeito prático. Mais um ponto de atendimento significa, em tese, menos deslocamento e mais capacidade para processar entrevistas em uma região de grande demanda.\n\nPara a comunidade WiseHub, o recado é direto. Quem tem processo de asilo vinculado à área de cobertura de Atlanta deve confirmar, pelos canais oficiais da USCIS, onde a entrevista será agendada, já que a redistribuição de jurisdição pode alterar o local de atendimento.",
        keyFacts: [
          "Novo escritório de asilo da USCIS em Atlanta",
          "Início de operação: 8 de julho de 2026",
          "Conduz entrevistas de asilo da jurisdição regional",
          "Medida operacional, não altera a lei de asilo",
        ],
        sources: [{ label: "USCIS · Abertura do escritório de asilo em Atlanta (oficial)", url: "https://www.uscis.gov/newsroom/alerts/uscis-opens-asylum-office-in-atlanta" }],
      },
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
      {
        headline: "🏥 Saúde nos EUA: o custo que o imigrante não pode ignorar",
        standfirst:
          "Sem sistema público universal, ficar sem seguro nos EUA é um risco financeiro real. Entenda como se proteger.",
        body:
          "De todos os pontos que um brasileiro precisa entender antes de se mudar pros EUA, a saúde é talvez o mais subestimado. Diferente de Canadá, Reino Unido, França ou Austrália, os Estados Unidos não têm um sistema público universal de saúde. O acesso ao cuidado depende de seguro privado.\n\nNa prática, isso significa que a cobertura quase sempre vem pelo empregador, embutida no pacote de trabalho. Quem fica sem seguro se expõe a contas que assustam: uma ida à emergência pode custar milhares de dólares, e uma internação, dezenas de milhares.\n\nPor isso, pra quem imigra, contratar um bom seguro-saúde não é um luxo, é proteção financeira essencial, especialmente no intervalo entre chegar e começar um emprego com benefícios. As universidades, inclusive, costumam exigir comprovação de seguro dos estudantes internacionais.\n\nO recado é direto: ao montar o orçamento de mudança pros EUA, o seguro-saúde tem que entrar como item obrigatório, não como opcional. É a diferença entre uma emergência ser um susto ou uma catástrofe financeira.",
        keyFacts: [
          "Não há saúde pública universal nos EUA",
          "Cobertura quase sempre via seguro do empregador",
          "Sem seguro, uma emergência custa milhares de dólares",
          "Universidades exigem seguro dos estudantes internacionais",
        ],
        sources: [SRC.usHealthcare],
      },
    ],
    blog: [
    ],
  },

"is": {
  "community": [
    {
      "urgency": "urgent",
      "title": "Islândia: pedido de autorização de trabalho agora entra numa porta só",
      "body": "Desde 8 de julho de 2026, a Islândia passou a processar as autorizações de trabalho pela Útlendingastofnun (Directorate of Immigration), a mesma autoridade que já cuida da residência. Antes, o pedido de trabalho ficava na Directorate of Labour. A mudança veio das alterações no Act on Foreign Nationals e no Foreign Nationals' Right to Work Act, aprovadas pelo Parlamento islandês em 18 de junho. Os pedidos que ainda não tinham sido decididos pela Directorate of Labour passaram para a nova autoridade. Para quem vem de fora do EEE/EFTA com oferta de emprego, é uma etapa a menos de balcão.",
      "cta": "Confira a regra na página oficial da Directorate of Immigration antes de montar seu pedido.",
      "sources": [
        {
          "label": "Directorate of Immigration (island.is) - New residence and work permit rules take effect",
          "url": "https://island.is/en/o/directorate-of-immigration/news/new-residence-and-work-permit-rules-take-effect"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "urgency": "urgent",
      "title": "Estudante na Islândia não precisa mais de autorização de trabalho separada",
      "body": "Pelas novas regras em vigor desde 8 de julho de 2026, quem tem residência de estudante na Islândia pode trabalhar sem uma autorização de trabalho à parte. O limite é de até 60% da jornada integral durante o período de aulas, somando todos os empregadores, e jornada integral nos intervalos entre os semestres, incluindo férias de verão e de fim de ano. Em troca, a renovação da residência passa a exigir progresso acadêmico satisfatório, definido como concluir pelo menos 75% da carga de um ano letivo integral. Quem administra a regra é a Útlendingastofnun.",
      "cta": "Leia os detalhes na fonte oficial da Directorate of Immigration.",
      "sources": [
        {
          "label": "Directorate of Immigration (island.is) - New residence and work permit rules take effect",
          "url": "https://island.is/en/o/directorate-of-immigration/news/new-residence-and-work-permit-rules-take-effect"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "title": "Islândia reajustou a renda mínima de subsistência para residência",
      "body": "Desde 18 de maio de 2026, a Islândia usa novos valores de renda mínima de subsistência nos pedidos de residência. Para maiores de 18 anos, o valor de referência subiu de 247.572 para 259.951 ISK por mês. Para casais, subiu de 396.115 para 415.922 ISK por mês. Os números são de renda antes de impostos e valem para pedidos recebidos a partir de 18 de maio. Os valores acompanham o critério de apoio financeiro da cidade de Reykjavík e são administrados pela Útlendingastofnun.",
      "cta": "Veja os valores atualizados direto na Directorate of Immigration.",
      "sources": [
        {
          "label": "Directorate of Immigration (island.is) - Higher amount required as means of support",
          "url": "https://island.is/en/o/directorate-of-immigration/news/higher-amount-as-means-of-support"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ],
  "countryTab": [
    {
      "urgency": "urgent",
      "headline": "Islândia unifica residência e trabalho na Útlendingastofnun e muda as regras para estudantes",
      "standfirst": "Reforma em vigor desde 8 de julho de 2026 move o processamento das autorizações de trabalho para a Directorate of Immigration e libera estudantes da autorização separada.",
      "body": "A Islândia colocou em vigor, em 8 de julho de 2026, um pacote de alterações no Act on Foreign Nationals e no Foreign Nationals' Right to Work Act. As mudanças foram aprovadas pelo Parlamento islandês (Alþingi) em 18 de junho e reorganizam tanto a máquina administrativa quanto algumas regras de residência.\n\nA mudança estrutural é a transferência do processamento das autorizações de trabalho da Directorate of Labour para a Útlendingastofnun (Directorate of Immigration), a mesma autoridade que já decide os pedidos de residência. Segundo a Directorate of Immigration, os pedidos de autorização de trabalho que ainda não tinham sido decididos pela Directorate of Labour antes da entrada em vigor passaram a ser tratados pela nova autoridade. As páginas oficiais de residência baseada em trabalho e de pedido de autorização de trabalho seguem, por ora, como referência para candidatos e empregadores.\n\nPara estudantes, a reforma acaba com a exigência de uma autorização de trabalho separada. Quem tem residência de estudante pode trabalhar como empregado em até 60% da jornada integral durante o período de aulas, somando todos os empregadores, e em jornada integral nos intervalos entre os semestres. A renovação da residência de estudante passa a exigir progresso acadêmico satisfatório, definido como concluir pelo menos 75% da carga de um ano letivo integral.\n\nDepois da formatura, quem concluiu um diploma universitário na Islândia pode renovar a residência de estudante por até 18 meses para buscar emprego compatível com a qualificação, prazo que antes era de três anos. Para quem tem doutorado, existe a possibilidade de renovar uma residência de especialista por até 12 meses para procurar trabalho sem autorização de trabalho.\n\nA reforma também estreitou o reagrupamento familiar, que passou a valer apenas para estudos universitários em tempo integral voltados a diploma de bacharel, mestrado ou doutorado, e criou uma categoria de residência de curto prazo para estadas de mais de 90 dias e de até 180 dias, voltada a visitas familiares ou a artistas, cientistas e atletas.",
      "keyFacts": [
        "Entrada em vigor em 8 de julho de 2026, com base em alterações aprovadas pelo Parlamento islandês em 18 de junho de 2026.",
        "Processamento das autorizações de trabalho transferido da Directorate of Labour para a Útlendingastofnun (Directorate of Immigration).",
        "Estudantes com residência de estudante deixam de precisar de autorização de trabalho separada e podem trabalhar em até 60% da jornada integral durante as aulas.",
        "Renovação da residência de estudante exige progresso acadêmico de pelo menos 75% da carga de um ano letivo integral.",
        "Após a formatura, a residência de estudante pode ser renovada por até 18 meses para busca de emprego, ante três anos antes.",
        "Doutores podem renovar residência de especialista por até 12 meses para procurar trabalho sem autorização de trabalho.",
        "Nova residência de curto prazo cobre estadas de mais de 90 e até 180 dias para visitas familiares ou artistas, cientistas e atletas."
      ],
      "sources": [
        {
          "label": "Directorate of Immigration (island.is) - New residence and work permit rules take effect",
          "url": "https://island.is/en/o/directorate-of-immigration/news/new-residence-and-work-permit-rules-take-effect"
        },
        {
          "label": "Directorate of Immigration (island.is) - página oficial da autoridade",
          "url": "https://island.is/en/o/directorate-of-immigration"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "headline": "Islândia eleva a renda mínima de subsistência exigida para residência",
      "standfirst": "Novos valores de referência valem para pedidos recebidos a partir de 18 de maio de 2026 e afetam residência e cidadania.",
      "body": "A Útlendingastofnun (Directorate of Immigration) reajustou os valores de renda mínima de subsistência que os candidatos precisam comprovar em pedidos de residência e de cidadania na Islândia. Os novos valores de referência passaram a valer para pedidos recebidos a partir de 18 de maio de 2026.\n\nPara uma pessoa maior de 18 anos, o valor de referência subiu de 247.572 para 259.951 ISK por mês. Para casais, o valor subiu de 396.115 para 415.922 ISK por mês. A autoridade esclarece que os números correspondem a renda antes de impostos.\n\nOs valores acompanham o critério de apoio financeiro da cidade de Reykjavík. O reajuste afeta candidatos que precisam demonstrar meios financeiros suficientes de sustento próprio ao pedir residência ou cidadania. Como os valores são revisados periodicamente, a orientação é conferir o número vigente direto na fonte oficial no momento do pedido.",
      "keyFacts": [
        "Novos valores de renda mínima de subsistência valem para pedidos recebidos a partir de 18 de maio de 2026.",
        "Maiores de 18 anos: valor de referência subiu de 247.572 para 259.951 ISK por mês.",
        "Casais: valor de referência subiu de 396.115 para 415.922 ISK por mês.",
        "Os valores são de renda antes de impostos e acompanham o critério de apoio financeiro da cidade de Reykjavík.",
        "A regra é administrada pela Útlendingastofnun (Directorate of Immigration) e vale para residência e cidadania."
      ],
      "sources": [
        {
          "label": "Directorate of Immigration (island.is) - Higher amount required as means of support",
          "url": "https://island.is/en/o/directorate-of-immigration/news/higher-amount-as-means-of-support"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ],
  "blog": [
    {
      "headline": "Islândia em 2026: as vias de residência por trabalho depois da reforma de julho",
      "standfirst": "O país é EEE/EFTA e, para quem vem de fora do bloco, o caminho é a residência baseada em trabalho. Veja como ficam as quatro trilhas e o que mudou com as regras em vigor desde 8 de julho.",
      "body": "A Islândia faz parte do Espaço Econômico Europeu (EEE) e da EFTA, o que significa que cidadãos do EEE e da EFTA podem morar e trabalhar no país sem autorização de trabalho. Para quem vem de fora do bloco, com oferta de emprego, o caminho é a residência baseada em trabalho, concedida por uma de quatro trilhas: conhecimento especializado, escassez de mão de obra, atletas e trabalho com base em contrato de colaboração ou de prestação de serviços.\n\nNa trilha de conhecimento especializado, voltada a profissionais qualificados, exige-se, em regra, formação de nível universitário ou treinamento reconhecido. A trilha de escassez de mão de obra pode ser usada quando não se encontram trabalhadores no mercado islandês nem dentro do EEE/EFTA. A trilha de atletas depende de vínculo com um clube filiado à associação nacional olímpica e esportiva da Islândia. A quarta trilha cobre empregados especializados em circunstâncias específicas, com base em acordo de colaboração ou de prestação de serviços. Em regra, a autorização fica ligada a um empregador determinado e é renovável mediante comprovação de emprego contínuo.\n\nA reforma que entrou em vigor em 8 de julho de 2026, com base em alterações aprovadas pelo Parlamento islandês (Alþingi) em 18 de junho, reorganizou a máquina administrativa. O processamento das autorizações de trabalho saiu da Directorate of Labour e passou para a Útlendingastofnun (Directorate of Immigration), a mesma autoridade que já decide os pedidos de residência. Os pedidos de autorização de trabalho que ainda não tinham sido decididos pela Directorate of Labour antes da entrada em vigor passaram a ser tratados pela nova autoridade. A reforma também deu à Directorate of Immigration base mais clara para priorizar pedidos, permitindo que pedidos completos baseados em emprego sejam processados à frente de outros.\n\nPara estudantes, a mudança acaba com a exigência de uma autorização de trabalho separada. Quem tem residência de estudante pode trabalhar como empregado em até 60% da jornada integral durante o período de aulas, com o limite somando todos os empregadores, e em jornada integral nos intervalos entre os semestres, incluindo férias de verão e de fim de ano. A renovação da residência de estudante passou a exigir progresso acadêmico satisfatório em cada renovação, definido como concluir pelo menos 75% da carga de um ano letivo integral. Depois da formatura, quem concluiu um diploma universitário na Islândia pode renovar a residência de estudante por até 18 meses para buscar emprego compatível com a qualificação, prazo que antes era de três anos. Quem tem doutorado pode renovar uma residência de especialista por até 12 meses para procurar trabalho sem autorização de trabalho.\n\nA reforma estreitou o reagrupamento familiar na residência de estudante, que passou a valer apenas para estudos universitários em tempo integral voltados a diploma de bacharel, mestrado ou doutorado, deixando de fora os cursos de diploma e o reagrupamento com pais. Também foi criada uma categoria de residência de curto prazo para estadas de mais de 90 e até 180 dias, voltada a visitas a familiar próximo ou a artistas, cientistas e atletas.\n\nAs regras e os valores exigidos são revisados periodicamente e administrados pela Útlendingastofnun. Antes de montar um pedido, a orientação é conferir os requisitos e prazos vigentes direto nas páginas oficiais da Directorate of Immigration.",
      "tags": [
        "Islândia",
        "imigração",
        "residência por trabalho",
        "reforma migratória 2026",
        "estudantes internacionais",
        "Útlendingastofnun"
      ],
      "sources": [
        {
          "label": "Directorate of Immigration (island.is) - New residence and work permit rules take effect",
          "url": "https://island.is/en/o/directorate-of-immigration/news/new-residence-and-work-permit-rules-take-effect"
        },
        {
          "label": "Ísland.is - Residence permit based on work (requirements)",
          "url": "https://island.is/en/permit-based-on-work/requirements"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ]
},
"no": {
  "community": [
    {
      "title": "Noruega: os pisos salariais que a UDI usa na via de qualificados",
      "body": "Na via de skilled worker da Noruega, o salário não pode ficar abaixo do piso considerado normal para a função. Quando não há acordo coletivo (tarifa) aplicável, a UDI publica dois valores de referência: NOK 545.400 por ano para cargos que exigem bacharelado e NOK 624.700 por ano para cargos que exigem mestrado, ambos em vigor desde 1 de maio de 2026, quando a UDI reajustou os pisos usados para pedidos sem acordo coletivo. São mínimos, e o número real depende da função e do local de trabalho. Vale conferir os valores oficiais antes de discutir proposta.",
      "cta": "Confira os pisos atuais na página da UDI antes de negociar salário.",
      "sources": [
        {
          "label": "UDI — Pay and working conditions in Norway",
          "url": "https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway/"
        },
        {
          "label": "Relocation.no — Skilled worker salary requirements increased from 1 May 2026",
          "url": "https://relocation.no/news-from-the-norwegian-directorate-of-immigration-udi-skilled-worker-salary-requirements-in-norway-increased-from-1-may-2026/"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "title": "Mudança de fevereiro de 2026: o empregador confirma antes de você aplicar",
      "body": "A UDI publicou em 19 de fevereiro de 2026 uma medida que altera a ordem do processo. Se você aplica sozinho, a partir do exterior, o empregador precisa primeiro confirmar a oferta de trabalho à UDI e enviar a você um código, que deve ser digitado em um campo próprio do formulário. O sistema checa o código na hora, e sem o código correto não é possível enviar a aplicação. Segundo a UDI, o objetivo é reduzir ofertas de trabalho fraudulentas. A regra vale para quem aplica por conta própria do exterior, e não muda quando o empregador aplica em nome do candidato.",
      "cta": "Peça o código ao empregador antes de iniciar sua aplicação.",
      "sources": [
        {
          "label": "UDI — Confirmation of a job or assignment offer",
          "url": "https://www.udi.no/en/important-messages/confirmation-of-a-job-offer/"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "title": "Os três pilares da via de qualificados na Noruega",
      "body": "A via principal para profissionais qualificados na Noruega, descrita pela UDI como skilled worker, se apoia em três elementos que precisam existir juntos: formação ou qualificação concluída, uma oferta concreta de um empregador na Noruega, e uma remuneração que não fique abaixo do que é normal na Noruega para a função. Se um deles falta, o pedido não se sustenta. Entender esses três pontos antes de qualquer passo ajuda a organizar documentos e expectativas com base no que a autoridade realmente pede.",
      "cta": "Veja os requisitos completos da via de qualificados no site da UDI.",
      "sources": [
        {
          "label": "UDI — Skilled workers",
          "url": "https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ],
  "countryTab": [
    {
      "headline": "Noruega passa a exigir confirmação do empregador antes da aplicação do exterior",
      "standfirst": "Desde 19 de fevereiro de 2026, quem aplica por conta própria a partir do exterior só consegue enviar o formulário depois que o empregador confirma a oferta à UDI e repassa um código de verificação.",
      "body": "A Utlendingsdirektoratet (UDI), autoridade de imigração da Noruega, publicou em 19 de fevereiro de 2026 uma mudança no fluxo de pedidos de residência para trabalho. Pela nova medida, o candidato que aplica sozinho e a partir do exterior precisa que o empregador ou contratante confirme antes a oferta de trabalho junto à UDI.\n\nApós essa confirmação, o empregador envia ao candidato um código, que deve ser inserido em um campo específico do formulário de aplicação. O sistema verifica automaticamente se o código está correto, e a aplicação não pode ser enviada com um código inválido.\n\nSegundo a própria UDI, a finalidade da medida é reduzir ofertas de trabalho fraudulentas. A exigência se aplica a quem submete o pedido por conta própria de fora da Noruega, e alcança categorias como trabalho sazonal e skilled worker com empregador no país, além de casos de funcionários enviados em missão para uma filial norueguesa. Não há mudança quando o próprio empregador faz a aplicação em nome do candidato.\n\nNa prática, isso desloca uma etapa importante para o início do processo. Antes de abrir o formulário, o candidato precisa alinhar com o empregador a confirmação e o envio do código, o que torna a comunicação com a empresa uma parte formal do procedimento, e não apenas um combinado prévio.",
      "keyFacts": [
        "Autoridade: UDI (Utlendingsdirektoratet), udi.no",
        "Publicada em 19 de fevereiro de 2026",
        "O empregador confirma a oferta à UDI e envia um código ao candidato",
        "O código é digitado em campo próprio do formulário e verificado pelo sistema",
        "Sem o código correto, a aplicação não pode ser enviada",
        "Aplica-se a quem aplica por conta própria a partir do exterior; não muda quando o empregador aplica pelo candidato",
        "Objetivo declarado pela UDI: reduzir ofertas de trabalho fraudulentas"
      ],
      "sources": [
        {
          "label": "UDI — Confirmation of a job or assignment offer",
          "url": "https://www.udi.no/en/important-messages/confirmation-of-a-job-offer/"
        },
        {
          "label": "UDI — Skilled workers",
          "url": "https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "headline": "Noruega eleva pisos salariais da UDI para qualificados sem acordo coletivo",
      "standfirst": "Para funções sem tarifa aplicável, a UDI passou a usar como referência NOK 545.400 por ano para cargos de bacharelado e NOK 624.700 por ano para cargos de mestrado, valores em vigor desde 1 de maio de 2026.",
      "body": "Um dos requisitos centrais da via de skilled worker na Noruega é o salário, que não pode ficar abaixo do piso considerado normal para a função. Quando não existe acordo coletivo (tarifa) que estabeleça o valor, a UDI publica referências próprias de remuneração mínima.\n\nNesses casos, a autoridade indica NOK 545.400 por ano, antes de impostos, para cargos que exigem formação de nível bacharelado, e NOK 624.700 por ano, antes de impostos, para cargos que exigem nível de mestrado. Esses valores passaram a valer em 1 de maio de 2026, quando a UDI reajustou os pisos usados para pedidos sem acordo coletivo.\n\nA UDI observa que uma remuneração menor pode ser aceita se o candidato conseguir documentar que aquele patamar é o normal para a ocupação no local onde vai trabalhar, o que exige comprovação substancial. Os valores funcionam, portanto, como referência mínima, e não como o salário final de qualquer posição.\n\nO piso salarial se soma aos outros elementos da via de qualificados: formação concluída e uma oferta concreta de um empregador na Noruega. É esse conjunto, e não um item isolado, que a UDI avalia no pedido de residência para trabalho.",
      "keyFacts": [
        "Autoridade: UDI (Utlendingsdirektoratet), udi.no",
        "Bacharelado: NOK 545.400 por ano, antes de impostos (sem acordo coletivo)",
        "Mestrado: NOK 624.700 por ano, antes de impostos (sem acordo coletivo)",
        "Valores em vigor desde 1 de maio de 2026, após reajuste da UDI",
        "São mínimos de referência; salário menor exige documentar que é o normal da ocupação e do local",
        "O salário integra a via de skilled worker junto com formação concluída e oferta concreta"
      ],
      "sources": [
        {
          "label": "UDI — Pay and working conditions in Norway",
          "url": "https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway/"
        },
        {
          "label": "UDI — Skilled workers",
          "url": "https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/"
        },
        {
          "label": "Relocation.no — Skilled worker salary requirements increased from 1 May 2026",
          "url": "https://relocation.no/news-from-the-norwegian-directorate-of-immigration-udi-skilled-worker-salary-requirements-in-norway-increased-from-1-may-2026/"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ],
  "blog": [
    {
      "headline": "Noruega para qualificados: como a via de skilled worker da UDI funciona em 2026",
      "standfirst": "A Noruega mantém uma porta clara para profissionais formados. Duas informações da UDI mudam a forma de se preparar em 2026: os pisos salariais reajustados em maio de 2026 e a confirmação obrigatória do empregador, em vigor desde fevereiro de 2026.",
      "body": "A autoridade de imigração da Noruega é a Utlendingsdirektoratet, a UDI, e é nela que se ancora qualquer leitura séria sobre trabalhar no país. Para quem tem formação e uma proposta de emprego, a via mais direta descrita pela UDI é a de skilled worker, o trabalhador qualificado. Este texto reúne o que essa via pede e destaca dois pontos recentes que alteram a preparação em 2026.\n\nA via principal e seus três requisitos\n\nA via de qualificados se apoia em três elementos que precisam existir ao mesmo tempo. O primeiro é a formação ou qualificação concluída, ou seja, o diploma de nível superior ou a formação profissional já obtida. O segundo é uma oferta concreta de trabalho de um empregador na Noruega, e não uma simples possibilidade de emprego. O terceiro é que a remuneração e as condições de trabalho não fiquem abaixo do que é normal na Noruega para a função. Faltando qualquer um dos três, o pedido perde sustentação. Por isso vale organizar os documentos pensando nesse conjunto, e não em um item isolado.\n\nOs pisos salariais de referência em 2026\n\nO salário costuma ser o ponto que gera mais dúvida, porque depende de haver ou não um acordo coletivo (tarifa) para a função. Quando existe tarifa, é ela que define o valor. Quando não existe, a UDI publica suas próprias referências. Para funções sem acordo coletivo, a UDI indica NOK 545.400 por ano, antes de impostos, para cargos que exigem nível de bacharelado, e NOK 624.700 por ano, antes de impostos, para cargos que exigem nível de mestrado. Esses valores passaram a valer em 1 de maio de 2026, quando a UDI reajustou os pisos. A própria UDI observa que uma remuneração menor pode ser aceita se o candidato documentar que aquele patamar é o normal para a ocupação no local de trabalho, o que exige comprovação substancial. Ou seja, são referências mínimas, e não o salário final de qualquer posição.\n\nA confirmação do empregador, em vigor desde fevereiro de 2026\n\nO segundo ponto recente muda a ordem do processo. Em 19 de fevereiro de 2026, a UDI publicou uma medida pela qual o candidato que aplica sozinho, a partir do exterior, precisa que o empregador confirme antes a oferta de trabalho junto à UDI. Depois dessa confirmação, o empregador envia ao candidato um código, que deve ser inserido em um campo próprio do formulário. O sistema verifica o código na hora, e a aplicação não pode ser enviada com um código inválido. Segundo a UDI, o objetivo é reduzir ofertas de trabalho fraudulentas. A exigência vale para quem submete o pedido por conta própria de fora da Noruega e não muda quando o próprio empregador faz a aplicação em nome do candidato.\n\nComo se preparar\n\nNa prática, os dois pontos apontam para o mesmo lugar: a relação com o empregador na Noruega é o centro do processo. É o empregador que confirma a oferta e libera o código, e é a oferta dele que precisa cumprir o piso salarial de referência para a função. Antes de abrir o formulário, vale alinhar com a empresa a confirmação, o envio do código e o valor da proposta, e conferir os números atuais direto na UDI, já que os pisos são reajustados periodicamente. Assim, a documentação chega organizada ao que a autoridade realmente pede.\n\nEste conteúdo é informativo e não substitui a orientação oficial da UDI nem aconselhamento jurídico. Confirme sempre os requisitos e valores vigentes nas páginas oficiais.",
      "tags": [
        "Noruega",
        "UDI",
        "skilled worker",
        "imigração de trabalho",
        "salário de referência"
      ],
      "sources": [
        {
          "label": "UDI — Skilled workers",
          "url": "https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/"
        },
        {
          "label": "UDI — Pay and working conditions in Norway",
          "url": "https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway/"
        },
        {
          "label": "UDI — Confirmation of a job or assignment offer",
          "url": "https://www.udi.no/en/important-messages/confirmation-of-a-job-offer/"
        },
        {
          "label": "Relocation.no — Skilled worker salary requirements increased from 1 May 2026",
          "url": "https://relocation.no/news-from-the-norwegian-directorate-of-immigration-udi-skilled-worker-salary-requirements-in-norway-increased-from-1-may-2026/"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ]
},
"ru": {
  "community": [
    {
      "title": "Rússia: RVP fora de cota e sem exames para nacionais dos EUA e da UE",
      "body": "Desde 1 de setembro de 2024, o Decreto Presidencial nº 702 (assinado em 19 de agosto de 2024) mantém uma via simplificada de RVP, a autorização de residência temporária, para estrangeiros que declarem compartilhar os valores tradicionais russos. Essa via dispensa a cota anual e os exames de língua, história e legislação. Ela se dirige a nacionais de uma lista aprovada pelo governo que inclui os Estados Unidos e os Estados-membros da União Europeia. Quem precisa de visto obtém primeiro um visto de três meses no Departamento Consular do MID e, já na Rússia, solicita o RVP à direção de migração do Ministério do Interior (ГУВМ МВД). Requisitos e formulários mudam, então vale confirmar na fonte oficial antes de agir.",
      "cta": "Leia a análise completa na aba da Rússia.",
      "sources": [
        {
          "label": "Указ Президента РФ № 702, 19.08.2024 (kremlin.ru)",
          "url": "http://www.kremlin.ru/acts/bank/51035"
        },
        {
          "label": "Departamento Consular do MID (kdmid.ru)",
          "url": "https://kdmid.ru"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "title": "O que mudou na migração russa desde 5 de fevereiro de 2025",
      "body": "A Lei Federal nº 260-ФЗ, em vigor desde 5 de fevereiro de 2025, criou o regime de expulsão e o Registro de Pessoas Controladas. Estrangeiros sem base legal para permanecer no país passam a constar nesse registro do Ministério do Interior (MVD), o que ativa restrições previstas em lei enquanto durar a situação, entre elas limites para registrar casamento, comprar imóvel, dirigir e sair da região sem autorização. O próprio interessado pode verificar seu status no site oficial do MVD, que atualiza os dados periodicamente. A saída do registro depende de regularizar a permanência, deixar o país ou obter a revogação da decisão. É um endurecimento do controle, descrito aqui apenas em seus termos legais.",
      "cta": "Entenda o regime na aba da Rússia.",
      "sources": [
        {
          "label": "Федеральный закон № 260-ФЗ, 08.08.2024 (kremlin.ru)",
          "url": "http://www.kremlin.ru/acts/bank/51023"
        },
        {
          "label": "МВД России, Реестр контролируемых лиц",
          "url": "https://мвд.рф/rkl"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "title": "Especialista Altamente Qualificado: novo piso salarial mensal previsto para 2027",
      "body": "A via do Especialista Altamente Qualificado (ВКС) segue como principal canal de trabalho para profissionais estrangeiros na Rússia, vinculada a um piso salarial. Em 8 de julho de 2026, a Duma Estatal aprovou em terceira leitura um projeto que fixa, a partir de 1 de março de 2027, um piso mensal de 717 mil rublos para a maioria dos ВКС, deslocando o cálculo do formato trimestral para o mensal. Como o texto ainda percorre as etapas finais do processo legislativo, o número deve ser confirmado na fonte oficial antes de qualquer planejamento de contratação.",
      "cta": "Veja os detalhes na matéria de blog.",
      "sources": [
        {
          "label": "Государственная Дума (duma.gov.ru), notícias legislativas",
          "url": "http://duma.gov.ru/news/"
        },
        {
          "label": "Schneider Group, análise das novas faixas salariais de ВКС",
          "url": "https://schneider-group.com/en/news/countries/changes-to-the-hqs-program-in-russia-new-salary-thresholds-and-legal-requirements/"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ],
  "countryTab": [
    {
      "headline": "Rússia mantém via de RVP fora de cota e sem exames para nacionais dos EUA e da UE",
      "standfirst": "O Decreto Presidencial nº 702, em vigor desde setembro de 2024, permite residência temporária a estrangeiros que declarem compartilhar valores tradicionais russos, incluindo cidadãos de países da lista oficial.",
      "body": "Desde 1 de setembro de 2024, a Rússia mantém em vigor uma via simplificada de autorização de residência temporária (RVP), criada pelo Decreto Presidencial nº 702, assinado em 19 de agosto de 2024. A norma se dirige a estrangeiros que declarem compartilhar os valores espirituais e morais tradicionais russos e rejeitar políticas que o governo russo descreve como destrutivas.\n\nNa prática, a via traz duas facilidades em relação ao procedimento comum: dispensa a cota anual de RVP e não exige os exames de língua russa, história e fundamentos da legislação. A elegibilidade está vinculada a uma lista de países aprovada pelo governo por meio da Diretriz nº 2560-r, de 17 de setembro de 2024, que inclui os Estados Unidos e os Estados-membros da União Europeia.\n\nO percurso envolve duas autoridades. No exterior, os vistos são competência do Departamento Consular do Ministério das Relações Exteriores (MID), com serviços centralizados no portal kdmid.ru. Nacionais de países que precisam de visto obtêm primeiro um visto de três meses, emitido com base numa declaração escrita, e entram na Rússia com esse documento. Já em território russo, o pedido de RVP é processado pela Direção-Geral de Assuntos de Migração do Ministério do Interior (ГУВМ МВД). Os requisitos e formulários podem mudar e devem ser confirmados nas fontes oficiais antes de qualquer solicitação.",
      "keyFacts": [
        "Decreto Presidencial nº 702, assinado em 19 de agosto de 2024, com efeitos desde 1 de setembro de 2024.",
        "A RVP por valores compartilhados é concedida fora da cota anual e sem exames de língua, história e legislação.",
        "A lista de países elegíveis foi aprovada pela Diretriz do Governo nº 2560-r, de 17 de setembro de 2024, e inclui os Estados Unidos e os países da União Europeia.",
        "Vistos são competência do Departamento Consular do MID (kdmid.ru); a RVP é processada pela ГУВМ МВД, no Ministério do Interior."
      ],
      "sources": [
        {
          "label": "Указ Президента РФ № 702, 19.08.2024 (kremlin.ru)",
          "url": "http://www.kremlin.ru/acts/bank/51035"
        },
        {
          "label": "Departamento Consular do MID (kdmid.ru)",
          "url": "https://kdmid.ru"
        },
        {
          "label": "ГУВМ МВД России (мвд.рф)",
          "url": "https://мвд.рф"
        }
      ],
      "publishedAt": "2026-07-18"
    },
    {
      "headline": "Rússia endurece o controle migratório com regime de expulsão e Registro de Pessoas Controladas",
      "standfirst": "Em vigor desde 5 de fevereiro de 2025, a Lei Federal nº 260-ФЗ instituiu o Registro de Pessoas Controladas e um regime de expulsão para estrangeiros sem base legal de permanência.",
      "body": "A Rússia intensificou o controle sobre a permanência irregular de estrangeiros. A Lei Federal nº 260-ФЗ, de 8 de agosto de 2024, entrou em vigor em 5 de fevereiro de 2025 e criou dois instrumentos conectados: o regime de expulsão e o Registro de Pessoas Controladas, mantido pelo Ministério do Interior (MVD).\n\nPela lei, o regime de expulsão passa a ser aplicado a um estrangeiro a partir do dia em que seus dados são inscritos no registro. Enquanto durar essa inscrição, incidem restrições previstas em lei, entre elas limites para registrar casamento, adquirir imóvel, conduzir veículo, movimentar recursos e mudar de local de residência ou sair da região sem autorização das autoridades migratórias. Os dados saem do registro quando o estrangeiro deixa o país, regulariza sua base legal de permanência, ou quando a decisão que originou o regime é revogada ou considerada ilegal por via judicial.\n\nO MVD disponibiliza a verificação de status no seu site oficial, com atualização periódica das informações. Em paralelo ao endurecimento, o país preserva canais regulados para perfis específicos, como o do Especialista Altamente Qualificado (ВКС), cuja régua salarial deve subir em 2027, conforme projeto aprovado pela Duma Estatal em terceira leitura em 8 de julho de 2026. Este texto descreve o arcabouço apenas em seus termos legais, sem juízo político.",
      "keyFacts": [
        "Lei Federal nº 260-ФЗ, de 8 de agosto de 2024, em vigor desde 5 de fevereiro de 2025.",
        "Instituiu o regime de expulsão e o Registro de Pessoas Controladas, operado pelo MVD.",
        "Durante o regime, há restrições legais como limites para casar, comprar imóvel, dirigir e sair da região sem autorização.",
        "A inscrição é retirada com a saída do país, a regularização da permanência ou a revogação/anulação judicial da decisão.",
        "A via do Especialista Altamente Qualificado (ВКС) prevê piso mensal de 717 mil rublos para a maioria dos casos a partir de 1 de março de 2027, aprovado em terceira leitura pela Duma em 8 de julho de 2026."
      ],
      "sources": [
        {
          "label": "Федеральный закон № 260-ФЗ, 08.08.2024 (kremlin.ru)",
          "url": "http://www.kremlin.ru/acts/bank/51023"
        },
        {
          "label": "КонсультантПлюс, ФЗ № 115-ФЗ, Статья 31.1 «Меры... в рамках режима высылки»",
          "url": "https://www.consultant.ru/document/cons_doc_LAW_37868/9fd31330c216a11f7173795046a63b06e8fb5fcc/"
        },
        {
          "label": "МВД России, Реестр контролируемых лиц",
          "url": "https://мвд.рф/rkl"
        },
        {
          "label": "Государственная Дума (duma.gov.ru)",
          "url": "http://duma.gov.ru/news/"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ],
  "blog": [
    {
      "headline": "Rússia em 2026: um sistema migratório de duas velocidades",
      "standfirst": "Enquanto a Lei 260-ФЗ endurece o controle sobre a permanência irregular desde fevereiro de 2025, o Decreto 702 e o regime de Especialista Altamente Qualificado mantêm vias específicas de residência e trabalho. Um mapa factual das regras e das autoridades responsáveis.",
      "body": "A Rússia opera hoje, em 2026, o que pode ser descrito como um sistema migratório de duas velocidades. De um lado, um controle mais rígido sobre quem permanece no país sem base legal. De outro, canais específicos que seguem abertos para perfis definidos, como estrangeiros que declaram compartilhar valores tradicionais russos e profissionais altamente qualificados.\n\nO endurecimento tem data e norma. A Lei Federal nº 260-ФЗ, assinada em 8 de agosto de 2024, entrou em vigor em 5 de fevereiro de 2025 e criou dois instrumentos conectados: o regime de expulsão (режим высылки) e o Registro de Pessoas Controladas (реестр контролируемых лиц), mantido pelo Ministério do Interior (MVD). O regime passa a ser aplicado ao estrangeiro a partir do dia em que seus dados entram no registro e vale para quem não tem base legal de permanência.\n\nEnquanto durar a inscrição, incidem restrições previstas em lei. Entre elas, a norma lista limites para registrar casamento, adquirir imóveis e veículos, conduzir veículo, abrir contas e movimentar recursos em bancos, além de restrições para mudar de local de residência ou sair da região sem autorização das autoridades migratórias. O próprio estrangeiro pode consultar seu status no site oficial do MVD. A saída do registro ocorre quando a pessoa deixa o país, regulariza sua permanência, ou quando a decisão que originou o regime é revogada ou anulada por via judicial. A mesma lei também reduziu, para quem entra sem visto, o teto de permanência a 90 dias por ano.\n\nNa outra velocidade estão as vias de entrada reguladas. O Decreto Presidencial nº 702, assinado em 19 de agosto de 2024 e com efeitos desde 1 de setembro de 2024, mantém uma via simplificada de autorização de residência temporária (RVP) para estrangeiros que declarem compartilhar os valores espirituais e morais tradicionais russos e rejeitar políticas que o governo russo descreve como destrutivas. Essa via dispensa a cota anual de RVP e não exige os exames de língua russa, história e fundamentos da legislação. A elegibilidade está vinculada a uma lista de países aprovada pela Diretriz do Governo nº 2560-r, de 17 de setembro de 2024, que reúne dezenas de Estados, entre eles os Estados Unidos e os países da União Europeia.\n\nO percurso envolve duas autoridades. No exterior, os vistos são competência do Departamento Consular do Ministério das Relações Exteriores (MID), com serviços centralizados no portal kdmid.ru. Quem precisa de visto obtém primeiro um visto privado de três meses, emitido com base numa declaração escrita, e entra na Rússia com esse documento. Já em território russo, o pedido de RVP é processado pela Direção-Geral de Assuntos de Migração do Ministério do Interior (ГУВМ МВД).\n\nPara o trabalho qualificado, o canal principal segue sendo o do Especialista Altamente Qualificado (ВКС), vinculado a um piso salarial. Em 8 de julho de 2026, a Duma Estatal aprovou em terceira leitura um projeto que fixa, a partir de 1 de março de 2027, um piso mensal de 717 mil rublos para a maioria dos ВКС, com um patamar reduzido, da ordem de 358 mil rublos mensais, para categorias específicas como cientistas, profissionais de saúde e professores. O texto também desloca o cálculo do formato trimestral para o mensal e prevê indexação anual do piso. Como o projeto ainda percorre as etapas finais do processo legislativo, os valores devem ser confirmados na fonte oficial antes de qualquer planejamento de contratação.\n\nEste panorama descreve o arcabouço apenas em seus termos legais, sem juízo político. Requisitos, formulários e prazos podem mudar, e cada passo deve ser confirmado nas fontes oficiais russas antes de qualquer decisão.",
      "tags": [
        "Rússia",
        "imigração",
        "RVP",
        "ВКС",
        "Lei 260-ФЗ",
        "Decreto 702",
        "controle migratório",
        "residência temporária"
      ],
      "sources": [
        {
          "label": "Указ Президента РФ № 702, 19.08.2024 (kremlin.ru)",
          "url": "http://www.kremlin.ru/acts/bank/51035"
        },
        {
          "label": "Распоряжение Правительства РФ № 2560-р, 17.09.2024 (government.ru)",
          "url": "http://government.ru/docs/all/155324/"
        },
        {
          "label": "Федеральный закон № 260-ФЗ, 08.08.2024 (kremlin.ru)",
          "url": "http://www.kremlin.ru/acts/bank/51023"
        },
        {
          "label": "Schneider Group, novas faixas salariais de ВКС",
          "url": "https://schneider-group.com/en/news/countries/changes-to-the-hqs-program-in-russia-new-salary-thresholds-and-legal-requirements/"
        },
        {
          "label": "Государственная Дума (duma.gov.ru)",
          "url": "http://duma.gov.ru/news/"
        }
      ],
      "publishedAt": "2026-07-18"
    }
  ]
}
};

/** Retorna o conteúdo editorial curado de um país, se houver, no idioma do app.
 *  EN cai no PT quando ainda não há versão EN (a rotina diária preenche). */
export function getEditorial(code: string, lang: Locale = "pt-BR"): CountryEditorial | undefined {
  if (lang === "en") return EDITORIAL_EN[code] ?? EDITORIAL[code];
  const base = EDITORIAL[code];
  // Mescla o conteúdo FRESCO da Ronda Diária (PT, redigido pela Friday) POR CIMA
  // do base: as peças novas (com publishedAt) aparecem primeiro. Ver editorial-ronda.ts.
  const ronda = RONDA_PIECES[code];
  if (!ronda) return base;
  return {
    community: [...(ronda.community ?? []), ...(base?.community ?? [])],
    countryTab: [...(ronda.countryTab ?? []), ...(base?.countryTab ?? [])],
    blog: [...(ronda.blog ?? []), ...(base?.blog ?? [])],
    youtube: base?.youtube,
    instagram: base?.instagram,
  };
}

/** Total de peças editoriais já curadas (pra estatística do relatório). */
export function editorialStats(): { countries: number; pieces: number } {
  const codes = Object.keys(EDITORIAL);
  let pieces = 0;
  for (const code of codes) {
    const e = EDITORIAL[code];
    pieces += e.community.length + e.countryTab.length + e.blog.length + (e.youtube?.length ?? 0) + (e.instagram?.length ?? 0);
  }
  return { countries: codes.length, pieces };
}

// ─────────────────────────────────────────────────────────────────────────
// Destinos de publicação (cores + legenda) e achatamento dos posts
// ─────────────────────────────────────────────────────────────────────────

export type Destination = "community" | "countryTab" | "blog" | "youtube" | "instagram";

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
    legend: "Notícia completa pra registrar na página do país.",
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
  {
    key: "youtube",
    label: "Para o YouTube",
    tag: "ROTEIRO YOUTUBE",
    emoji: "🎬",
    dot: "🔴",
    colorHex: "FF0000",
    legend: "Roteiro de vídeo pronto pra gravar no canal da WiseHub no YouTube (gancho + blocos + chamada).",
  },
  {
    key: "instagram",
    label: "Para o Instagram",
    tag: "POST INSTAGRAM",
    emoji: "📸",
    dot: "🟡",
    colorHex: "E1306C",
    legend: "Legenda e roteiro de post ou carrossel pro Instagram da WiseHub (com hashtags).",
  },
];

/**
 * Peça normalizada, pronta pra postar (independente do tipo de origem).
 *
 * HERDA `RecencyMeta` em vez de re-declarar os campos: era a re-declaração que
 * fazia `publishedAt` morrer aqui antes do conserto de 2026-07-20. Daqui em
 * diante, campo novo de recência chega à peça achatada de graça.
 */
export type PostablePiece = RecencyMeta & {
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

/**
 * Carrega TODO o `RecencyMeta` da peça de origem pra peça achatada. Campo novo
 * de recência entra AQUI e os cinco destinos herdam juntos: é o que impede a
 * regressão de "campo listado à mão em 5 lugares, esquecido em 1".
 */
function recencyOf(src: RecencyMeta): RecencyMeta {
  return { publishedAt: src.publishedAt, usedAt: src.usedAt, urgency: src.urgency };
}

/**
 * A peça é URGENTE pro relatório? Precisa ter sido CURADA como `urgent` e ainda
 * estar dentro da janela de urgência.
 *
 * A urgência decai porque o próprio critério do Hammis a define por prazo: um
 * fato de 48h ou um prazo "que fecha em poucos dias" já não é nem uma coisa nem
 * outra duas semanas depois. Sem decaimento, o acervo acumularia peças gritando
 * URGENTE pra sempre e o selo morreria de tanto mentir. Sem cutoff, não decai
 * (o chamador decide).
 */
export function isUrgentPiece(
  p: Pick<PostablePiece, "urgency" | "publishedAt">,
  urgentCutoffISO?: string,
): boolean {
  if (p.urgency !== "urgent") return false;
  if (!urgentCutoffISO) return true;
  return (p.publishedAt ?? "").slice(0, 10) >= urgentCutoffISO;
}

/**
 * Ordem de leitura das peças: mais NOVA primeiro, peça sem data por último.
 * Usada como sort estável, então peças empatadas (mesma data, ou ambas sem
 * data) mantêm a ordem de país em que foram achatadas.
 */
function byPublishedDesc(a: PostablePiece, b: PostablePiece): number {
  const da = a.publishedAt ?? "";
  const db = b.publishedAt ?? "";
  if (da === db) return 0;
  if (!da) return 1;
  if (!db) return -1;
  return db < da ? -1 : 1;
}

/**
 * Ordem de leitura final: URGENTE primeiro; dentro do mesmo grupo, mais nova
 * primeiro; peça sem data por último (`byPublishedDesc` é o desempate e não
 * muda em nada). Sort estável: empate total preserva a ordem de país.
 */
function byUrgencyThenPublishedDesc(urgentCutoffISO?: string) {
  return (a: PostablePiece, b: PostablePiece): number => {
    const ua = isUrgentPiece(a, urgentCutoffISO) ? 0 : 1;
    const ub = isUrgentPiece(b, urgentCutoffISO) ? 0 : 1;
    return ua !== ub ? ua - ub : byPublishedDesc(a, b);
  };
}

type EdCountryLike = { code: string; name: string; editorial?: CountryEditorial };

/**
 * Achata todo o conteúdo curado em sequência por destino: primeiro todos os
 * posts de Comunidade, depois todas as notícias de aba do país, depois todas
 * as matérias de blog.
 *
 * Dentro de cada destino a lista sai ordenada por URGENTE > data desc > sem
 * data. A ordenação mora AQUI (e não nos três renderizadores) de propósito: foi
 * centralizar neste ponto que consertou o carimbo de data, e espalhar em três
 * lugares recriaria o bug. Quem quiser a leitura agrupada por país passa o
 * resultado por `groupPiecesByCountry`.
 */
export function buildPostables(
  countries: ReadonlyArray<EdCountryLike>,
  opts?: { urgentCutoffISO?: string },
): Array<{ dest: DestinationMeta; pieces: PostablePiece[] }> {
  return DESTINATIONS.map((dest) => {
    const pieces: PostablePiece[] = [];
    for (const c of countries) {
      const ed = c.editorial;
      if (!ed) continue;
      if (dest.key === "community") {
        for (const p of ed.community)
          pieces.push({ ...recencyOf(p), destination: "community", countryCode: c.code, countryName: c.name, title: p.title, body: p.body, cta: p.cta, sources: p.sources });
      } else if (dest.key === "countryTab") {
        for (const a of ed.countryTab)
          pieces.push({ ...recencyOf(a), destination: "countryTab", countryCode: c.code, countryName: c.name, title: a.headline, standfirst: a.standfirst, body: a.body, keyFacts: a.keyFacts, sources: a.sources });
      } else if (dest.key === "blog") {
        for (const p of ed.blog)
          pieces.push({ ...recencyOf(p), destination: "blog", countryCode: c.code, countryName: c.name, title: p.headline, standfirst: p.standfirst, body: p.body, tags: p.tags, sources: p.sources });
      } else if (dest.key === "youtube") {
        for (const p of ed.youtube ?? [])
          pieces.push({ ...recencyOf(p), destination: "youtube", countryCode: c.code, countryName: c.name, title: p.title, standfirst: p.hook, body: p.body, cta: p.cta, sources: p.sources });
      } else if (dest.key === "instagram") {
        for (const p of ed.instagram ?? [])
          pieces.push({ ...recencyOf(p), destination: "instagram", countryCode: c.code, countryName: c.name, title: p.title, body: p.body, cta: p.cta, tags: p.hashtags, sources: p.sources });
      }
    }
    // URGENTE primeiro, depois mais NOVA primeiro, pra peça que corre risco de
    // perder validade não ficar enterrada sob o acervo. Sort estável: empates
    // preservam a ordem de país acima.
    pieces.sort(byUrgencyThenPublishedDesc(opts?.urgentCutoffISO));
    return { dest, pieces };
  });
}

/** Peças de um destino agrupadas por PAÍS. */
export type CountryPieceGroup = {
  countryCode: string;
  countryName: string;
  pieces: PostablePiece[];
};

/**
 * Reagrupa por país a lista já ordenada de um destino, PRESERVANDO a ordem em
 * que cada país apareceu pela primeira vez.
 *
 * É o que devolve ao documento o agrupamento por país que a equipe usa pra
 * varrer (a ordenação por data de 2026-07-20 tinha passado a intercalar
 * países), sem perder o ganho da ordenação: como a lista chega ordenada por
 * urgência e data, o país que aparece primeiro é justamente o dono da peça mais
 * urgente/mais nova, e dentro de cada país a ordem urgente > data desc
 * continua valendo. Quem quer a leitura cross-country tem o bloco PRIORIDADE.
 */
export function groupPiecesByCountry(pieces: ReadonlyArray<PostablePiece>): CountryPieceGroup[] {
  const out: CountryPieceGroup[] = [];
  const byCode = new Map<string, CountryPieceGroup>();
  for (const p of pieces) {
    let g = byCode.get(p.countryCode);
    if (!g) {
      g = { countryCode: p.countryCode, countryName: p.countryName, pieces: [] };
      byCode.set(p.countryCode, g);
      out.push(g);
    }
    g.pieces.push(p);
  }
  return out;
}

/**
 * Todas as peças URGENTES, de todos os países, na ordem em que os destinos
 * aparecem e, dentro de cada um, na ordem já resolvida por `buildPostables`.
 * Alimenta o bloco PRIORIDADE que abre a Parte 1.
 *
 * Recebe o resultado de `buildPostables` (e não a lista de países) de propósito:
 * o índice PRIORIDADE tem que apontar pras MESMAS peças que o documento vai
 * renderizar abaixo, não pra uma segunda montagem que poderia divergir.
 */
export function urgentPieces(
  postables: ReadonlyArray<{ pieces: ReadonlyArray<PostablePiece> }>,
  urgentCutoffISO?: string,
): PostablePiece[] {
  return postables.flatMap((g) => g.pieces.filter((p) => isUrgentPiece(p, urgentCutoffISO)));
}

/**
 * Quantas peças prontas pra postar são NOVAS (publishedAt >= cutoffISO).
 * O corte vem do renderizador, que o calcula a partir da data de geração do
 * relatório. Peça sem data nunca conta como nova.
 */
export function countFreshPostables(
  countries: ReadonlyArray<EdCountryLike>,
  cutoffISO: string,
): number {
  return buildPostables(countries).reduce(
    (sum, g) => sum + g.pieces.filter((p) => (p.publishedAt ?? "").slice(0, 10) >= cutoffISO).length,
    0,
  );
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
      ...(ed.youtube ?? []).flatMap((p) => p.sources ?? []),
      ...(ed.instagram ?? []).flatMap((p) => p.sources ?? []),
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

// ─────────────────────────────────────────────────────────────────────────
// Dimensões (Mandato de Inteligência), detectadas pelo emoji do título
// ─────────────────────────────────────────────────────────────────────────

export type DimensionKey = "all" | "core" | "education" | "health" | "economy";

export const DIMENSION_FILTERS: ReadonlyArray<{ key: DimensionKey; label: string; emoji: string }> = [
  { key: "all", label: "Tudo", emoji: "🗂" },
  { key: "core", label: "Vistos & Trabalho", emoji: "🛂" },
  { key: "education", label: "Educação", emoji: "🎓" },
  { key: "health", label: "Saúde", emoji: "🏥" },
  { key: "economy", label: "Economia", emoji: "💰" },
];

/** Descobre a dimensão de uma peça pelo emoji que prefixa o título/headline. */
export function pieceDimension(titleOrHeadline: string): Exclude<DimensionKey, "all"> {
  const t = titleOrHeadline.trimStart();
  if (t.startsWith("🎓")) return "education";
  if (t.startsWith("🏥")) return "health";
  if (t.startsWith("💰")) return "economy";
  return "core"; // sem prefixo = vistos/imigração/trabalho (conteúdo original)
}

/* ============== Recência (semana ISO, segunda a domingo) ============== */

/** Chave comparável da semana ISO: "YYYY-Www". Estável e sem depender de fuso. */
export function isoWeekKey(d: Date): string {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = date.getUTCDay() || 7; // domingo=7 (ISO começa na segunda)
  date.setUTCDate(date.getUTCDate() + 4 - day); // desloca pra quinta da semana ISO
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((date.getTime() - yearStart.getTime()) / 86_400_000) + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

export type RecencyBucket = "atual" | "semana-passada" | "arquivo";

/**
 * Classifica a peça pela semana ISO de `publishedAt` vs. agora:
 *  - "atual"          → mesma semana ISO de hoje (ou datada à frente)
 *  - "semana-passada" → semana ISO imediatamente anterior
 *  - "arquivo"        → mais velha que isso (sai do REPAVET e da aba)
 * Sem data (peça legada) → null: renderiza normal, sem selo, nunca arquiva.
 */
export function recencyBucket(publishedAt: string | undefined, now: Date = new Date()): RecencyBucket | null {
  if (!publishedAt) return null;
  const d = new Date(publishedAt + "T12:00:00Z");
  if (Number.isNaN(d.getTime())) return null;
  const wk = isoWeekKey(d);
  if (wk === isoWeekKey(now)) return "atual";
  if (d.getTime() > now.getTime()) return "atual"; // datada à frente não some
  const prevWeek = new Date(now.getTime() - 7 * 86_400_000);
  if (wk === isoWeekKey(prevWeek)) return "semana-passada";
  return "arquivo";
}

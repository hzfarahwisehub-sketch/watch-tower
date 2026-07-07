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

export type EditorialSource = { label: string; url: string };

/** Metadados de recência comuns a toda peça editorial. Preenchidos pela Ronda
 *  Diária. Ausentes = peça legada (renderiza sem selo, nunca vai pro arquivo). */
export type RecencyMeta = {
  /** Data ISO (YYYY-MM-DD) de quando a Friday redigiu a peça. */
  publishedAt?: string;
  /** Data ISO de quando foi marcada como já postada/utilizada. */
  usedAt?: string;
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
      { title: "Alemanha facilita a entrada de qualificados", body: "A Alemanha tem flexibilizado as regras para atrair mão de obra qualificada e suprir a escassez em setores como tecnologia, saúde e engenharia. A Chancenkarte, espécie de cartão de oportunidades baseado em pontos, teve a pontuação mínima reduzida, abrindo espaço para mais candidatos.\n\nO Blue Card da União Europeia também ficou mais acessível, com o limiar salarial mínimo rebaixado. A tendência é clara: o país quer facilitar a chegada de profissionais qualificados, e o portal Make it in Germany reúne em vários idiomas a informação oficial sobre vistos e requisitos.", cta: "Comece pelo portal oficial Make it in Germany e use a ferramenta de verificação rápida para descobrir qual visto se aplica ao seu perfil antes de reunir documentos.", sources: [{ label: "Make it in Germany · Portal oficial do Governo Federal", url: "https://www.make-it-in-germany.com/pt/" }] },
      { title: "💡 Reconhecimento de diploma é peça-chave", body: "Para muitas profissões na Alemanha, o reconhecimento da qualificação obtida no exterior é um passo decisivo, às vezes obrigatório. Sem essa validação, certas vagas e vistos simplesmente não se concretizam, por mais experiente que seja o candidato.\n\nO processo varia conforme a profissão e o estado, por isso vale começar cedo. O portal oficial de reconhecimento orienta sobre qual órgão é responsável pela sua área e quais documentos serão exigidos, evitando surpresas no meio do caminho.", cta: "Avalie o reconhecimento do seu diploma logo no início pelo portal oficial Anerkennung in Deutschland, e considere que aprender alemão amplia bastante as oportunidades.", sources: [{ label: "Anerkennung in Deutschland · Reconhecimento de qualificações", url: "https://www.anerkennung-in-deutschland.de/" }] },
    ],
    countryTab: [
      { headline: "Alemanha rebaixa exigências para atrair talento qualificado", standfirst: "Chancenkarte com pontuação mínima menor e Blue Card com limiar salarial reduzido sinalizam a busca por mão de obra.", body: "A Alemanha vem ajustando sua legislação migratória para responder à escassez de mão de obra qualificada. A autoridade BAMF, o Escritório Federal para Migração e Refugiados, coordena boa parte desses processos, com informação centralizada no portal Make it in Germany.\n\nA Chancenkarte, baseada em sistema de pontos, teve a exigência mínima reduzida, dando peso maior à experiência profissional. O Blue Card da União Europeia acompanhou a tendência, com o limiar salarial mínimo rebaixado, o que amplia o acesso de profissionais de setores em falta.\n\nO recado às áreas de tecnologia, saúde e engenharia é direto: há demanda e o país quer facilitar a chegada. Para o candidato, contudo, o reconhecimento do diploma estrangeiro segue como etapa fundamental e, em várias profissões, obrigatória.", keyFacts: ["Autoridade competente: BAMF, com informação no portal Make it in Germany", "Chancenkarte com pontuação mínima reduzida", "Reconhecimento de diploma é etapa-chave para muitas profissões"], sources: [{ label: "Make it in Germany · Portal oficial do Governo Federal", url: "https://www.make-it-in-germany.com/pt/" }] },
    ],
    blog: [],
  },
  it: {
    community: [
      { title: "Cidadania por linha materna: tribunal italiano abre caminho após o Decreto Tajani", body: "A Terceira Seção Cível do Tribunal de Brescia reconheceu a cidadania italiana por linha materna a uma família brasileira, com a decisão transitando em julgado em 2026. O ponto central foi o momento do pedido: os requerentes já tinham buscado o reconhecimento antes de 27 de março de 2025, prazo fixado pelo Decreto-Lei 36/2025, convertido na Lei 74/2025, conhecido como Decreto Tajani.\n\nO tribunal aplicou a regra anterior invocando o princípio do legítimo afidamento, a confiança de quem começou o processo sob as regras antigas. A leitura reforça que a demora dos consulados não pode, sozinha, tirar de alguém um direito originário como a cidadania.", cta: "Começou o reconhecimento antes de 27 de março de 2025? Guarde todos os comprovantes de tentativa consular, eles podem definir qual regra se aplica ao seu caso.", sources: [{ label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
      { title: "💡 Atenção a golpes e a sites falsos de visto", body: "A alta procura por vistos italianos atrai golpistas. As próprias autoridades já alertaram para campanhas que clonam o site oficial do Ministério dos Negócios Estrangeiros para roubar dados pessoais de candidatos desavisados.\n\nA regra de ouro é digitar você mesmo o endereço do portal oficial, sem clicar em links de e-mails ou mensagens suspeitas. Desconfie de qualquer intermediário que prometa aprovação garantida ou peça pagamentos fora dos canais reconhecidos pelo governo italiano.", cta: "Acesse apenas o portal oficial vistoperitalia.esteri.it digitando o endereço manualmente, e nunca pague por promessas de aprovação garantida feitas por terceiros.", sources: [{ label: "Servizi consolari e visti · Ministero degli Affari Esteri", url: "https://www.esteri.it/it/servizi-consolari-e-visti/" }] },
    ],
    countryTab: [
      { headline: "Justiça italiana preserva cidadania por linha materna de quem pediu antes do Decreto Tajani", standfirst: "Decisão do Tribunal de Brescia aplica a regra antiga a requerentes que buscaram reconhecimento até 27 de março de 2025, com base no legítimo afidamento.", body: "O reconhecimento da cidadania italiana ganhou um novo capítulo nos tribunais. A Terceira Seção Cível do Tribunal de Brescia reconheceu a cidadania por linha materna a uma família brasileira, numa decisão que transitou em julgado em 2026. O caso foi ajuizado depois do Decreto Tajani, mas o tribunal entendeu que a regra anterior deveria valer.\n\nO fio da meada é a data. O Decreto-Lei 36/2025, convertido na Lei 74/2025, fixou 27 de março de 2025 como marco para pedidos de reconhecimento administrativo. Como os requerentes comprovaram que já tinham tentado o reconhecimento consular antes desse prazo, o juízo aplicou o princípio do legítimo afidamento, protegendo quem iniciou o caminho sob as regras antigas.\n\nA fundamentação registrou que a conhecida demora das autoridades consulares não pode se transformar em obstáculo de fato ao reconhecimento de um direito originário. No pano de fundo está a Sentença 63/2026 da Corte Costituzionale, que balizou o debate sobre os limites da reforma. Para descendentes, a lição prática é documentar cada tentativa consular, por raccomandata A/R ou pelo portal Prenot@mi.", keyFacts: ["Tribunal de Brescia reconheceu cidadania por linha materna, decisão transitada em julgado em 2026", "Marco do Decreto Tajani: 27 de março de 2025 (Decreto-Lei 36/2025, convertido na Lei 74/2025)", "Base da decisão: princípio do legítimo afidamento para quem pediu antes do prazo", "Corte Costituzionale, Sentença 63/2026, balizou o debate"], sources: [{ label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
    ],
    blog: [
      { headline: "Decreto Tajani nos tribunais: por que a data do seu pedido virou o que mais importa", standfirst: "Decisões como a do Tribunal de Brescia mostram que quem buscou o reconhecimento antes de 27 de março de 2025 pode manter o direito pela regra antiga. O tempo joga a favor de quem tem prova.", body: "A reforma da cidadania italiana por descendência, apelidada de Decreto Tajani, redesenhou quem tem direito e sob quais condições. Mas a aplicação prática está sendo moldada caso a caso nos tribunais, e um padrão começa a aparecer: a data em que a pessoa buscou o reconhecimento pesa tanto quanto o vínculo de sangue.\n\nA decisão do Tribunal de Brescia é um bom exemplo. Ao reconhecer a cidadania por linha materna de uma família brasileira, o tribunal não ignorou o Decreto Tajani, apenas concluiu que a regra anterior valia para quem já tinha iniciado o pedido antes de 27 de março de 2025. O argumento jurídico é o legítimo afidamento, a ideia de que o Estado não pode mudar as regras no meio do caminho para quem agiu de boa-fé sob a lei vigente.\n\nAí entra um detalhe que muita gente subestima: a prova. O que sustentou a decisão foi a documentação das tentativas de agendamento e de contato consular, por carta registrada e pelo portal oficial. Sem esse rastro, o requerente teria dificuldade de mostrar que estava na fila antes do prazo. A demora dos consulados, tantas vezes vista como problema, virou aqui um argumento a favor do cidadão.\n\nPara a comunidade WiseHub, o recado é direto. Quem tem ascendência italiana e já se movimentou antes de 27 de março de 2025 deve reunir e preservar todo comprovante de tentativa. E quem ainda vai começar precisa entender o novo marco antes de traçar a estratégia, porque, no cenário atual, a linha do tempo do seu processo pode valer tanto quanto a sua árvore genealógica.", tags: ["Itália", "Cidadania", "Decreto Tajani", "Jure sanguinis"], sources: [{ label: "Corte Costituzionale · sentenze (oficial)", url: "https://www.cortecostituzionale.it/" }, { label: "Normattiva · legislação estatal italiana", url: "https://www.normattiva.it/" }] },
    ],
  },
  dk: {
    community: [
      { title: "Dinamarca busca talento com a Positive List", body: "A Dinamarca é conhecida por ser seletiva, mas também eficiente nos prazos. A chamada Positive List, que reúne ocupações com escassez de profissionais, foi ampliada e mantém um caminho mais rápido para áreas como tecnologia, engenharia e saúde, com resposta em tempo relativamente curto.\n\nA agência responsável é a SIRI, e toda a informação oficial e os serviços digitais ficam no portal New to Denmark. Se a sua profissão consta na Positive List, o processo de autorização de residência e trabalho tende a ser mais ágil, o que torna o país atraente para perfis qualificados.", cta: "Verifique se a sua profissão está na Positive List pelo portal oficial nyidanmark.dk antes de planejar a mudança, e organize a comprovação de qualificação com antecedência.", sources: [{ label: "New to Denmark · SIRI", url: "https://www.nyidanmark.dk/en-GB/" }] },
      { title: "💡 Startup Denmark e o caminho para fundadores", body: "Para quem empreende, a Dinamarca oferece o programa Startup Denmark, que teve o limiar de investimento reduzido. O foco está em fundadores de tecnologia e green tech, com um painel que avalia a solidez do projeto antes de conceder a autorização.\n\nDiferente das vias de emprego, esse caminho exige um plano de negócio consistente e aprovação prévia da ideia. Vale estruturar bem a proposta, já que a avaliação considera o potencial de inovação e a viabilidade da empresa que se pretende criar no país.", cta: "Prepare um plano de negócio sólido para o Startup Denmark e confira os critérios atualizados no portal oficial da SIRI antes de submeter a candidatura.", sources: [{ label: "New to Denmark · SIRI", url: "https://www.nyidanmark.dk/en-GB/" }] },
    ],
    countryTab: [
      { headline: "Dinamarca combina seletividade com prazos eficientes", standfirst: "Positive List ampliada e Startup Denmark com limiar menor mostram a busca por talento qualificado em setores estratégicos.", body: "A Dinamarca mantém um perfil altamente seletivo, mas se destaca pela eficiência no processamento dos pedidos. A SIRI, agência responsável pelo recrutamento internacional, concentra os serviços no portal New to Denmark, com respostas em prazos relativamente curtos.\n\nA Positive List, que lista ocupações em falta no país, foi ampliada e segue como via rápida para profissionais de tecnologia, engenharia e saúde. Estar nessa lista costuma significar um processo de autorização mais ágil, o que reforça o apelo do país a perfis qualificados.\n\nPara empreendedores, o programa Startup Denmark teve o limiar de investimento reduzido, com foco em fundadores de tecnologia e green tech. A avaliação passa por um painel que analisa a consistência do projeto, sinalizando o interesse dinamarquês por inovação em verticais estratégicas.", keyFacts: ["Autoridade competente: SIRI, via portal New to Denmark", "Positive List ampliada com via rápida para TI, engenharia e saúde", "Startup Denmark com limiar de investimento reduzido para fundadores"], sources: [{ label: "New to Denmark · SIRI", url: "https://www.nyidanmark.dk/en-GB/" }] },
    ],
    blog: [],
  },
  pl: {
    community: [
      { title: "Polônia: a porta de entrada de baixo custo pra União Europeia", body: "A Polônia consolidou nos últimos anos uma posição clara no mapa migratório europeu, a de porta de entrada acessível pra quem quer viver e trabalhar dentro da União Europeia. O custo de vida abaixo da média do bloco, somado a uma economia que cresce e demanda mão de obra qualificada, transformou o país num destino atraente, sobretudo pro setor de tecnologia.\n\nO Cartão Azul Europeu (Blue Card) emitido pela Polônia tem um patamar salarial competitivo em relação a outros países da UE, o que abre espaço pra profissionais de TI vindos da Ucrânia, de Belarus e de outros polos globais de tecnologia. Para quem tem ascendência polonesa, a Karta Polaka adiciona um caminho próprio, com trâmites mais ágeis de permanência.", cta: "Comece pelo portal oficial do Urząd do Spraw Cudzoziemców (Escritório para Estrangeiros) e confirme qual categoria de autorização se aplica ao seu caso antes de qualquer outra coisa.", sources: [{ label: "Urząd do Spraw Cudzoziemców (Escritório para Estrangeiros)", url: "https://udsc.gov.pl/en/" }] },
      { title: "💡 Karta Polaka: o atalho de quem tem raízes polonesas", body: "A Karta Polaka é um documento voltado a pessoas com vínculo comprovado com a nação polonesa, geralmente descendentes que conseguem demonstrar origem familiar e algum laço com a língua e a cultura. Ela não é um passaporte, mas funciona como uma ponte que facilita permanência e abre um caminho mais direto rumo à residência e, mais adiante, à naturalização.\n\nPara quem tem avós ou bisavós poloneses, vale reunir cedo a documentação de origem, certidões, registros de imigração, qualquer prova do vínculo familiar. Esse acervo costuma ser o gargalo do processo, então quanto antes organizado, menor a chance de atraso lá na frente.", cta: "Reúna e traduza com antecedência os documentos que comprovam ascendência polonesa, e verifique os requisitos de idioma diretamente no consulado ou no portal oficial antes de agendar qualquer etapa.", sources: [{ label: "Gov.pl · Escritório para Estrangeiros", url: "https://www.gov.pl/web/udsc-en" }] },
    ],
    countryTab: [
      { headline: "Polônia disputa talento global oferecendo a UE pelo menor custo", standfirst: "Com Blue Card de patamar acessível e via dedicada a descendentes, o país se firma como ponto de partida para quem quer Europa sem o preço do oeste europeu.", body: "A estratégia migratória polonesa parte de uma vantagem competitiva concreta, custar menos. Enquanto economias do oeste europeu pedem salários e custos de vida elevados, a Polônia oferece acesso ao mercado único da União Europeia com um piso de entrada mais baixo, o que tem atraído trabalhadores qualificados que enxergam o país como trampolim dentro do bloco.\n\nO Cartão Azul Europeu é a espinha dorsal dessa política para profissionais de alta qualificação. O patamar salarial exigido pela Polônia se mantém competitivo frente a outros Estados-membros, e isso conversa diretamente com a forte demanda do setor de tecnologia. Desenvolvedores e especialistas em TI vindos da Ucrânia, de Belarus e de outros mercados encontram ali uma combinação rara de salário razoável, custo de vida controlado e residência válida na UE.\n\nEm paralelo, a Karta Polaka mantém um canal próprio para quem tem ascendência polonesa, com trâmites de permanência mais ágeis e foco em reaproximar descendentes do país de origem. Toda a estrutura é coordenada pelo Urząd do Spraw Cudzoziemców, o Escritório para Estrangeiros, que centraliza a análise dos pedidos de residência e proteção.", keyFacts: ["Autoridade competente: Urząd do Spraw Cudzoziemców (UDSC), o Escritório para Estrangeiros", "Blue Card com patamar salarial competitivo frente a outros países da UE", "Forte demanda por profissionais de TI, com fluxo da Ucrânia e de Belarus", "Karta Polaka oferece via mais ágil para descendentes de poloneses"], sources: [{ label: "Urząd do Spraw Cudzoziemców (Escritório para Estrangeiros)", url: "https://udsc.gov.pl/en/" }] },
    ],
    blog: [],
  },
  ie: {
    community: [
      { title: "Irlanda: o hub de tecnologia que processa em meses, não em anos", body: "A Irlanda manteve ao longo dos anos um perfil bem definido, o de polo global de tecnologia, com presença forte de multinacionais e demanda constante por profissionais qualificados. Esse posicionamento se reflete diretamente na política migratória, desenhada para atrair quem tem competências em alta no mercado.\n\nO Critical Skills Employment Permit é a principal ferramenta nesse sentido, voltado a ocupações consideradas estratégicas para a economia irlandesa. A reunificação familiar via Stamp 4 complementa o quadro, permitindo que o profissional traga a família. Um diferencial relevante é a velocidade: a estrutura irlandesa costuma resolver a maioria dos casos em prazos da ordem de poucos meses, e não nos anos que marcam outros destinos.", cta: "Confirme se a sua profissão está na lista de ocupações elegíveis antes de planejar a mudança, e lembre que os vistos de trabalho passam pelo Department of Enterprise, enquanto a permissão de imigração é tratada pelo Irish Immigration Service.", sources: [{ label: "Irish Immigration Service (Immigration Service Delivery)", url: "https://www.irishimmigration.ie/" }] },
      { title: "💡 Permit de trabalho e permissão de imigração são duas portas distintas", body: "Quem pesquisa sobre a Irlanda costuma tropeçar numa divisão que confunde no início. A autorização para trabalhar, o employment permit, é concedida por um órgão, enquanto o registro da permissão de imigração e o Stamp correspondente passam por outro. São dois trilhos paralelos que precisam andar juntos.\n\nNa prática, isso significa que ter uma oferta de emprego e o permit aprovado é uma etapa, e formalizar a permissão de permanência dentro do país é outra. Entender essa separação desde o começo evita a frustração de achar que um único documento resolve tudo, e ajuda a montar a sequência certa de passos.", cta: "Trate o permit de trabalho e o registro de imigração como etapas separadas, e acompanhe cada uma no seu canal oficial para não perder prazos de registro após a chegada.", sources: [{ label: "Immigration Service Delivery · Department of Justice", url: "https://www.irishimmigration.ie/registering-your-immigration-permission/" }] },
    ],
    countryTab: [
      { headline: "Irlanda aposta em qualificação e velocidade para seguir como polo tech", standfirst: "Permissões para competências críticas e reunificação familiar simplificada sustentam um sistema que resolve a maioria dos casos em meses.", body: "A Irlanda construiu sua imagem como um dos grandes hubs de tecnologia do mundo, abrigando operações europeias de gigantes do setor e gerando demanda contínua por talento especializado. A política migratória acompanha essa vocação e se organiza em torno de atrair profissionais cujas competências estão em falta no mercado local.\n\nO Critical Skills Employment Permit é o eixo dessa estratégia. Voltado a ocupações estratégicas, ele oferece um caminho mais direto à residência de longo prazo para quem trabalha em áreas prioritárias. Junto dele, a reunificação familiar pela via do Stamp 4 foi simplificada, permitindo que o profissional traga consigo a família com menos atrito burocrático.\n\nUm traço que distingue a Irlanda é a agilidade de processamento. A estrutura responsável costuma decidir a maior parte dos casos em prazos da ordem de poucos meses, o que reduz a incerteza para quem planeja a mudança. Vale registrar uma particularidade do desenho institucional: os vistos de trabalho são concedidos pelo Department of Enterprise, Trade and Employment, ao passo que a permissão de imigração propriamente dita é administrada pelo Irish Immigration Service, ligado ao Department of Justice.", keyFacts: ["Autoridade de imigração: Irish Immigration Service (Immigration Service Delivery), do Department of Justice", "Critical Skills Employment Permit voltado a ocupações estratégicas", "Reunificação familiar via Stamp 4 simplificada", "Boa parte dos casos decidida em prazos da ordem de poucos meses"], sources: [{ label: "Irish Immigration Service (Immigration Service Delivery)", url: "https://www.irishimmigration.ie/" }] },
    ],
    blog: [],
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
      { title: "Áustria: o sistema de pontos da Red-White-Red Card", body: "A Áustria organiza a imigração qualificada em torno da Red-White-Red Card, um cartão único que combina autorização de trabalho e residência para profissionais de fora do Espaço Econômico Europeu. O coração do modelo é um sistema de pontos, que avalia critérios como qualificação, experiência profissional, idade e conhecimento de idioma.\n\nEsse desenho premia quem soma pontos em várias frentes, e abre vias mais rápidas para setores em falta no mercado, como tecnologia e saúde, pelo programa de Skilled Workers in Shortage Occupations. Entender como a pontuação funciona antes de aplicar é o que separa um pedido bem montado de uma recusa por detalhe.", cta: "Simule sua pontuação nos critérios da Red-White-Red Card (qualificação, experiência, idade e idioma) usando o portal oficial de migração antes de iniciar o pedido.", sources: [{ label: "Migration.gv.at · Portal oficial de migração da Áustria", url: "https://www.migration.gv.at/en/" }] },
      { title: "💡 Idioma e diploma reconhecido pesam na pontuação", body: "No sistema austríaco, dois fatores costumam fazer diferença real na contagem de pontos e são, ao mesmo tempo, os que mais demoram para resolver: o reconhecimento da qualificação e o conhecimento de idioma. Diplomas obtidos fora da Áustria muitas vezes precisam passar por avaliação para serem considerados, e o domínio de alemão (ou, em certos casos, inglês) adiciona pontos valiosos.\n\nPor serem etapas demoradas, valem ser tratadas cedo. Iniciar o reconhecimento do diploma e investir no idioma com antecedência amplia as chances e encurta o tempo total até a decisão, em vez de virar gargalo de última hora.", cta: "Inicie cedo o reconhecimento do seu diploma e invista no idioma, porque ambos somam pontos e são as etapas mais demoradas do processo austríaco.", sources: [{ label: "Migration.gv.at · Imigração permanente", url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/" }] },
    ],
    countryTab: [
      { headline: "Áustria mira qualificados com cartão único e sistema de pontos", standfirst: "A Red-White-Red Card combina trabalho e residência, e vias expressas atendem setores de tecnologia e saúde em falta no mercado.", body: "A Áustria mantém a Red-White-Red Card como principal porta de entrada para trabalhadores qualificados de fora do Espaço Econômico Europeu. Trata-se de um cartão único, que reúne numa só autorização o direito de trabalhar e de residir no país, simplificando o que em outros lugares se divide em documentos separados.\n\nO mecanismo central é um sistema de pontos. O candidato é avaliado por critérios como qualificação acadêmica, experiência profissional, idade e conhecimento de idioma, e precisa atingir um patamar mínimo para se habilitar. Esse formato dá previsibilidade, já que a pessoa consegue estimar suas chances antes mesmo de aplicar, e direciona a seleção para perfis alinhados às necessidades da economia austríaca.\n\nPara áreas com escassez declarada de mão de obra, há o programa de Skilled Workers in Shortage Occupations, que funciona como via expressa. Tecnologia e saúde estão entre os setores contemplados, com caminhos acelerados para profissionais cujas competências o mercado local não consegue suprir. Toda a informação oficial e os critérios atualizados são centralizados no portal de migração do governo federal.", keyFacts: ["Autoridade competente na esfera migratória: BMI (Ministério do Interior), com informações no portal migration.gv.at", "Red-White-Red Card combina autorização de trabalho e residência num cartão único", "Seleção baseada em sistema de pontos (qualificação, experiência, idade e idioma)", "Via expressa para setores em falta via Skilled Workers in Shortage Occupations"], sources: [{ label: "Migration.gv.at · Portal oficial de migração da Áustria", url: "https://www.migration.gv.at/en/" }] },
    ],
    blog: [],
  },
  be: {
    community: [
      { title: "Bélgica: o Single Permit num portal digital único", body: "A Bélgica simplificou o acesso de profissionais de fora da União Europeia com o Single Permit, a autorização única que reúne, num só pedido, o direito de trabalhar e de residir no país. O grande avanço recente foi a digitalização, com um portal único online que integra as três regiões belgas, Flandres, Valônia e a região de Bruxelas.\n\nEssa unificação reduz a fragmentação que historicamente complicava a vida de quem aplicava, já que cada região tem competência sobre o trabalho no seu território. Com o procedimento concentrado numa plataforma só, os prazos médios de processamento caíram para a casa de poucos meses, um patamar competitivo dentro do bloco.", cta: "Como em geral é o empregador que dá entrada no Single Permit junto à região onde fica o local de trabalho, alinhe esse passo com a empresa e acompanhe pelo portal oficial do Escritório de Imigração.", sources: [{ label: "Office des Étrangers (Immigration Office · IBZ)", url: "https://dofi.ibz.be/en" }] },
      { title: "💡 Três regiões, uma autorização: entenda quem decide o quê", body: "A Bélgica é um país federal e isso tem efeito direto na imigração de trabalho. A competência sobre o emprego pertence às regiões, Flandres, Valônia e Bruxelas, enquanto a dimensão de residência envolve o Escritório de Imigração no nível federal. O Single Permit foi justamente desenhado para amarrar essas duas pontas num único documento.\n\nNa prática, o pedido vai à região onde fica o principal local de trabalho, e a decisão é tomada em conjunto com a autoridade federal de imigração. Saber qual região é a competente desde o início ajuda a direcionar o pedido ao lugar certo e a entender de quem virá a resposta.", cta: "Identifique a região belga onde ficará o seu local de trabalho, pois é ela que analisa o componente de emprego do Single Permit junto ao Escritório de Imigração.", sources: [{ label: "IBZ · Single Permit", url: "https://dofi.ibz.be/en/themas/onderdanen-van-derde-landen/werk/single-permit" }] },
    ],
    countryTab: [
      { headline: "Bélgica unifica trabalho e residência no Single Permit digital", standfirst: "Plataforma única online integra Flandres, Valônia e Bruxelas, e derruba o tempo médio de processamento para poucos meses.", body: "A Bélgica avançou na simplificação da imigração de trabalho para cidadãos de fora da União Europeia com o Single Permit, a autorização única que combina, num só pedido, o direito de trabalhar e de residir no país. A mudança mais visível foi a digitalização integral do procedimento, com um portal online que passa a concentrar todo o fluxo.\n\nO ganho prático vem da integração das três regiões belgas. Por ser um Estado federal, a Bélgica atribui às regiões, Flandres, Valônia e a região de Bruxelas-Capital, a competência sobre o emprego em seus territórios, o que historicamente fragmentava o processo. A plataforma única costura essas frentes, permitindo que o pedido tramite de forma coordenada entre a região competente e a autoridade federal de imigração.\n\nO resultado aparece nos prazos. Com o procedimento unificado e online, o tempo médio de processamento caiu para a casa de poucos meses, um nível competitivo no contexto europeu. O Escritório de Imigração, conhecido como Office des Étrangers e ligado ao serviço público federal do Interior, é a autoridade que conduz a parte de residência do processo.", keyFacts: ["Autoridade competente: Office des Étrangers (Immigration Office), do SPF Intérieur / IBZ", "Single Permit reúne autorização de trabalho e de residência num só pedido", "Portal digital único integra Flandres, Valônia e a região de Bruxelas", "Tempo médio de processamento na casa de poucos meses"], sources: [{ label: "Office des Étrangers (Immigration Office · IBZ)", url: "https://dofi.ibz.be/en" }] },
    ],
    blog: [],
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
      { title: "Croácia, vida europeia com custo que cabe no bolso", body: "A Croácia entrou de vez no mapa dos brasileiros depois de consolidar sua posição dentro do espaço Schengen e da zona do euro a partir de 2023. Isso significa circular sem fronteiras internas pela maior parte da Europa e usar a moeda comum, tudo num país com custo de vida ainda competitivo pra padrões da União Europeia.\n\nO grande chamariz pra quem trabalha remoto é o Digital Nomad Permit, que ganhou tração entre brasileiros. A permissão é pensada pra quem presta serviço a empresas de fora da Croácia e quer viver no país aproveitando litoral, segurança e a infraestrutura europeia sem o custo das capitais mais caras do bloco.", cta: "A aplicação do Digital Nomad Permit pode ser feita pelo portal oficial do Ministério do Interior. Use o canal do governo direto e desconfie de intermediários que cobram caro por algo que o próprio Estado processa online.", sources: [{ label: "Ministarstvo unutarnjih poslova (MUP)", url: "https://mup.gov.hr/aliens-281621/286833" }] },
      { title: "💡 Trabalho com carteira e as quotas anuais", body: "Pra quem mira emprego formal e não trabalho remoto, a Croácia opera por um sistema de quotas anuais que definem quantos trabalhadores estrangeiros o país recebe em cada ciclo. O volume de vagas vem crescendo ano a ano, sinal de uma economia que demanda mão de obra de fora.\n\nNa prática, a maioria das contratações de não-europeus passa pela Single Permit, que une autorização de residência e de trabalho num único pedido. O empregador croata costuma ter papel central no processo, então ter uma proposta firme na mão acelera bastante o caminho.", cta: "Depois de aprovado, registre seu endereço de residência na administração policial dentro do prazo legal de chegada. Esquecer esse registro é um erro comum que pode custar a própria autorização.", sources: [{ label: "MUP, residência e trabalho", url: "https://mup.gov.hr/aliens-281621/stay-and-work/281661" }] },
    ],
    countryTab: [
      { headline: "Croácia, a porta de entrada acessível pra Europa Schengen", standfirst: "Dentro do euro e do Schengen desde 2023, o país combina custo de vida competitivo com um Digital Nomad Permit que caiu no gosto dos brasileiros.", body: "A adesão da Croácia ao espaço Schengen e à zona do euro em 2023 mudou o patamar do país como destino migratório. Quem se estabelece passa a circular sem fronteiras internas por boa parte da Europa e a usar a moeda comum, com a vantagem de um custo de vida ainda abaixo do das economias mais caras do bloco.\n\nO Digital Nomad Permit é hoje o produto migratório mais visível do país pra brasileiros. Voltado a quem trabalha de forma remota pra empresas fora da Croácia, é uma rota de residência temporária que permite viver no litoral adriático mantendo o vínculo profissional no exterior.\n\nNo campo do emprego formal, o país funciona por quotas anuais de trabalhadores estrangeiros, com volume em expansão, e pela Single Permit no padrão da União Europeia. O conjunto faz da Croácia uma das entradas mais equilibradas entre acessibilidade e qualidade de vida europeia.", keyFacts: ["Espaço Schengen e zona do euro desde 2023", "Digital Nomad Permit popular entre brasileiros, com renda mínima do exterior", "Emprego formal por quotas anuais e Single Permit no padrão da UE"], sources: [{ label: "Ministarstvo unutarnjih poslova (MUP)", url: "https://mup.gov.hr/aliens-281621/286833" }] },
    ],
    blog: [],
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
      { title: "Finlândia, qualidade de vida no topo da Europa", body: "A Finlândia aparece de forma recorrente no topo dos rankings de qualidade de vida do mundo, e isso se reflete no jeito como recebe imigrantes. O país combina serviços públicos sólidos, segurança e natureza com um sistema de imigração reconhecido pela eficiência.\n\nPra profissionais qualificados, o caminho mais ágil é o Specialist Permit, voltado a especialistas com formação ou expertise comprovada e contrato com empregador que opera na Finlândia. As áreas de tecnologia, engenharia e saúde estão entre as mais demandadas, e o sistema digital de aplicação ajuda a manter os prazos enxutos.", cta: "O Specialist Permit exige vínculo de emprego e não serve pra empreendedores ou autônomos. Confirme a categoria certa pro seu perfil no portal da Migri antes de aplicar.", sources: [{ label: "Maahanmuuttovirasto (Migri)", url: "https://migri.fi/en/specialist" }] },
      { title: "💡 Saúde e ocupações em escassez abrem portas", body: "A Finlândia enfrenta escassez de mão de obra em setores estratégicos, e isso vira oportunidade pra quem tem a qualificação certa. A área de saúde, em especial, é alvo de esforço ativo do país pra atrair profissionais de fora.\n\nHá também canais voltados a recém-graduados em ocupações com falta de gente, permitindo procurar emprego diretamente no país por um período. Pra quem está se formando ou já tem experiência numa profissão em demanda, vale mapear se a sua área entra nessa lista antes de definir a estratégia de mudança.", cta: "Antes de iniciar qualquer processo, faça avaliar seu diploma estrangeiro junto ao órgão finlandês competente, sobretudo em saúde, onde o reconhecimento é condição pra exercer a profissão.", sources: [{ label: "Migri, tipos de autorização de residência", url: "https://migri.fi/en/residence-permit-types" }] },
    ],
    countryTab: [
      { headline: "Finlândia, imigração eficiente num dos países mais bem avaliados do mundo", standfirst: "Líder em qualidade de vida na Europa, o país tem um Specialist Permit ágil e canais ativos pra tecnologia, engenharia e saúde.", body: "A Finlândia une duas coisas que raramente andam juntas: figura no topo dos rankings de qualidade de vida e mantém um sistema de imigração eficiente. Serviços públicos sólidos, segurança e natureza compõem o pano de fundo de um país que trata a atração de talento como política de Estado.\n\nO Specialist Permit é a rota mais ágil pra profissionais qualificados. Voltado a especialistas com formação ou expertise comprovada e contrato com empregador que opera no país, atende com força as áreas de tecnologia, engenharia e saúde. Por ser um processo majoritariamente digital, costuma andar rápido.\n\nO país também abre canais específicos pra ocupações em escassez, com destaque pra saúde, e pra recém-graduados que queiram procurar emprego direto na Finlândia. O recado é claro: quem tem qualificação alinhada à demanda encontra um sistema que joga a favor.", keyFacts: ["Líder europeu em qualidade de vida, com sistema de imigração eficiente", "Specialist Permit exige vínculo de emprego, voltado a tecnologia, engenharia e saúde", "Canais ativos pra ocupações em escassez e pra recém-graduados"], sources: [{ label: "Maahanmuuttovirasto (Migri)", url: "https://migri.fi/en/specialist" }] },
    ],
    blog: [],
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
      { title: "Holanda em modo de aperto: o que muda para quem migra", body: "A Holanda continua sendo um polo de talento qualificado, mas entrou num período mais rigoroso. A principal via para profissionais, a do Highly Skilled Migrant, depende de um empregador reconhecido pela imigração holandesa, que assume o pedido em nome do trabalhador. O salário mínimo exigido para esse visto vem sendo elevado, com um patamar reduzido para recém-graduados.\n\nNa prática, isso significa que conseguir uma oferta de uma empresa credenciada como sponsor é o passo decisivo. Sem esse patrocínio, o caminho do migrante altamente qualificado simplesmente não abre, por melhor que seja o currículo.", cta: "Antes de negociar uma vaga, confirme na lista pública de sponsors reconhecidos da IND se o empregador está habilitado a patrocinar o seu visto.", sources: [{ label: "IND, serviço de imigração da Holanda", url: "https://ind.nl/en" }] },
      { title: "💡 DAFT: a porta para empreendedores americanos", body: "Além das vias para empregados, a Holanda mantém um acordo bilateral histórico com os Estados Unidos, o Dutch-American Friendship Treaty. Ele permite que cidadãos americanos obtenham residência para empreender no país mediante um investimento mínimo no próprio negócio, em condições mais simples que as exigidas de outras nacionalidades.\n\nÉ uma rota específica e não substitui as vias gerais de trabalho, mas explica por que tantos fundadores dos EUA escolhem Amsterdã como base europeia. Para quem não é americano, valem as regras padrão de imigração.", cta: "Se você é elegível ao DAFT, verifique os requisitos atuais de investimento e o passo a passo diretamente no site oficial da IND, sem depender de intermediários.", sources: [{ label: "IND, serviço de imigração da Holanda", url: "https://ind.nl/en" }] },
    ],
    countryTab: [
      { headline: "Holanda aperta critérios, mas segue aberta a talento qualificado", standfirst: "O serviço de imigração eleva o salário mínimo do visto de migrante altamente qualificado, enquanto a pressão política contra a imigração líquida alta cresce no país.", body: "A Holanda vive uma fase de endurecimento da política migratória. O patamar salarial do Highly Skilled Migrant, principal porta de entrada para profissionais estrangeiros, foi elevado, mantendo um valor reduzido para recém-graduados. A medida acompanha um debate político mais amplo sobre conter a imigração líquida.\n\nMesmo assim, o país não fechou as portas para quem agrega ao mercado de trabalho. O sistema é centrado no empregador: apenas companhias reconhecidas pela IND, o serviço de imigração holandês, podem patrocinar o visto de trabalho qualificado. Essas empresas constam de um registro público com milhares de sponsors habilitados.\n\nPara empreendedores americanos, o Dutch-American Friendship Treaty segue como alternativa, permitindo residência mediante investimento no próprio negócio. O conjunto desenha uma Holanda mais seletiva, que prioriza salário alto e patrocínio formal, e recompensa quem chega com oferta de emprego ou plano de negócio sólido.", keyFacts: ["Salary threshold do Highly Skilled Migrant elevado, com valor reduzido para recém-graduados", "O visto de trabalho qualificado depende de empregador reconhecido pela IND", "DAFT mantém via de residência para empreendedores americanos via investimento", "Autoridade competente: IND, o Immigration and Naturalisation Service (ind.nl)"], sources: [{ label: "IND, serviço de imigração da Holanda", url: "https://ind.nl/en" }] },
    ],
    blog: [],
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
      { title: "Malta abre duas portas: investimento e trabalho remoto", body: "Malta mantém o Malta Permanent Residence Programme, conhecido como MPRP, como sua via principal de residência por investimento. Depois das reformas alinhadas às exigências da União Europeia, o programa deixou de ser uma rota única e passou a combinar contribuição ao Estado com um compromisso imobiliário, seja na compra de propriedade ou em contrato de aluguel de longo prazo.\n\nParalelamente, a ilha consolidou o Nomad Residence Permit, voltado a profissionais que trabalham de forma remota para empregadores ou clientes fora de Malta. É uma autorização pensada para quem tem renda estável vinda do exterior e quer viver no Mediterrâneo com a previsibilidade de um país da União Europeia.", cta: "Antes de qualquer decisão, confira os requisitos atuais direto no portal da Identità Malta, que é a autoridade oficial responsável pela emissão de residências.", sources: [{ label: "Identità Malta (portal oficial)", url: "https://identita.gov.mt/" }] },
      { title: "💡 Por que Malta virou ímã de fintech e iGaming", body: "Malta construiu nas últimas duas décadas um ecossistema regulatório que atraiu empresas de tecnologia financeira e de jogos online. Esse polo gera demanda real por profissionais qualificados e ajuda a explicar por que tanta gente de fora busca residência na ilha.\n\nPara quem pensa em se mudar a trabalho, vale entender que a estrutura econômica local privilegia setores específicos. Conhecer onde estão as oportunidades faz diferença na hora de planejar a transição, em vez de tratar Malta apenas como destino de sol e mar.", cta: "Pesquise o setor antes de se candidatar e priorize empregadores estabelecidos, que costumam dar mais segurança no processo de patrocínio da residência.", sources: [{ label: "Identità Malta · Working & Residing in Malta", url: "https://identita.gov.mt/working-residing-in-malta/" }] },
    ],
    countryTab: [
      { headline: "Residência em Malta passa por dois caminhos bem distintos", standfirst: "Investidores e trabalhadores remotos têm rotas separadas na menor capital da União Europeia.", body: "Malta segue oferecendo o Malta Permanent Residence Programme como porta de entrada para quem busca residência por investimento. Após as reformas exigidas no âmbito europeu, o programa ganhou uma estrutura combinada, que une contribuição governamental e um componente imobiliário, comprado ou alugado.\n\nDo outro lado está o Nomad Residence Permit, desenhado para profissionais que mantêm vínculo de trabalho com empresas situadas fora do país. Essa autorização atende a quem comprova renda recorrente do exterior e deseja fixar base em território maltês mantendo a atividade remota.\n\nOs dois caminhos têm exigências, custos e prazos próprios. Confundir um com o outro é um erro comum, por isso a recomendação é checar as condições vigentes na fonte oficial antes de montar a documentação.", keyFacts: ["MPRP combina contribuição ao Estado com investimento imobiliário, em compra ou aluguel", "Nomad Residence Permit atende trabalhadores remotos com renda de fora de Malta", "Identità Malta é a autoridade que processa e emite as residências"], sources: [{ label: "Identità Malta (portal oficial)", url: "https://identita.gov.mt/" }] },
    ],
    blog: [],
  },
  ro: {
    community: [
      { title: "Romênia: falta de gente em TI e cibersegurança abre espaço para estrangeiros", body: "A Romênia consolidou sua posição no espaço Schengen desde 2024 e agora ganha um novo argumento para atrair mão de obra de fora. Um relatório divulgado no início de julho de 2026 aponta escassez de especialistas em tecnologia da informação e cibersegurança no país, um gargalo que costuma empurrar empregadores a buscar talento estrangeiro para preencher vagas qualificadas.\n\nOs polos de Bucareste e Cluj concentram boa parte dessa demanda e seguem em expansão. Para o profissional brasileiro de tecnologia, é um sinal de que existe procura real, e a livre circulação garantida pelo Schengen torna a base romena ainda mais estratégica dentro da União Europeia.", cta: "Antes de negociar uma vaga, confirme as regras de residência e trabalho no portal da Inspetoria Geral para Imigração, a autoridade oficial do país.", sources: [{ label: "Romania Insider · Escassez de especialistas em TI e cibersegurança", url: "https://www.romania-insider.com/romania-shortage-it-cybersecurity-specialists-2026" }, { label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }] },
      { title: "💡 Custo de vida baixo, mas imposto sobre o salário é o maior da UE", body: "A fama de destino barato precisa de um ajuste fino. Dois levantamentos publicados no início de julho de 2026 mostram o outro lado da conta romena. O primeiro indica que o trabalhador entrega cerca de 41,5% do salário bruto ao Estado, a maior carga sobre a remuneração dentro da União Europeia. O segundo aponta preços de imóveis em alta de 7,8% no primeiro trimestre, acima da média do bloco.\n\nIsso não apaga a vantagem do custo de vida romeno, ainda competitivo, mas muda o planejamento. Quem vai trabalhar com carteira local precisa calcular o salário líquido de verdade, e quem pensa em comprar imóvel deve considerar a valorização recente antes de fechar negócio.", cta: "Simule o salário líquido depois dos descontos e avalie o impacto tributário com um profissional licenciado antes de aceitar uma proposta formal no país.", sources: [{ label: "Romania Insider · Carga tributária sobre salários", url: "https://www.romania-insider.com/employees-romania-salary-tax-burden-july-2026" }, { label: "Romania Insider · Preços de imóveis no primeiro trimestre", url: "https://www.romania-insider.com/house-prices-romania-rise-q1-2026" }] },
    ],
    countryTab: [
      { headline: "Romênia atrai tech, mas carga tributária e preços entram na conta", standfirst: "Falta de especialistas em TI e cibersegurança abre portas a estrangeiros, enquanto relatórios de julho de 2026 apontam a maior carga sobre salários da União Europeia e imóveis em alta.", body: "A Romênia segue firme como porta de entrada acessível na União Europeia, sustentada pela adesão ao espaço Schengen em 2024 e por um setor de tecnologia em expansão. O quadro ganhou reforço com um relatório divulgado no início de julho de 2026, que aponta escassez de especialistas em tecnologia da informação e cibersegurança. Esse tipo de gargalo tende a ampliar a busca por talento estrangeiro qualificado, sobretudo nos polos de Bucareste e Cluj.\n\nA mesma semana, porém, trouxe dados que pedem cautela no planejamento. Um levantamento indica que o trabalhador na Romênia entrega em torno de 41,5% do salário bruto ao Estado, a maior carga sobre a remuneração entre os países da União Europeia. Outro mostra os preços de imóveis subindo 7,8% no primeiro trimestre, acima da média do bloco. São fatores que convivem com um custo de vida ainda competitivo, mas que alteram a conta final de quem se muda para trabalhar ou investir.\n\nPara profissionais de fora do bloco que mantêm renda no exterior, o Digital Nomad Visa continua sendo uma das vias mais comentadas, com autorização inicial de doze meses, renovável mediante comprovação de rendimentos, seguro saúde e moradia. Já quem vai atuar com vínculo local precisa olhar de perto o salário líquido. Em qualquer cenário, as regras de residência e a situação fiscal mudam conforme o caso, e a consulta às fontes oficiais evita surpresas.", keyFacts: ["Relatório de julho de 2026 aponta escassez de especialistas em TI e cibersegurança", "Trabalhador entrega cerca de 41,5% do salário bruto ao Estado, a maior carga da União Europeia", "Preços de imóveis subiram 7,8% no primeiro trimestre, acima da média do bloco", "Romênia integra o espaço Schengen desde 2024, com polos tech em Bucareste e Cluj", "Autoridade competente: IGI, a Inspetoria Geral para Imigração (igi.mai.gov.ro)"], sources: [{ label: "Romania Insider · Escassez de especialistas em TI e cibersegurança", url: "https://www.romania-insider.com/romania-shortage-it-cybersecurity-specialists-2026" }, { label: "Romania Insider · Carga tributária sobre salários", url: "https://www.romania-insider.com/employees-romania-salary-tax-burden-july-2026" }, { label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }] },
    ],
    blog: [
      { headline: "Romênia barata, com asterisco: por que o salário líquido virou o novo filtro", standfirst: "O país é uma das portas de entrada mais acessíveis da União Europeia, mas os números de julho de 2026 mostram que carga tributária e valorização imobiliária redefinem a estratégia de quem migra para trabalhar.", body: "Por anos a Romênia foi apresentada como o atalho barato para viver na União Europeia, e há verdade nisso. O custo de vida continua abaixo do padrão das capitais ocidentais, o país entrou no espaço Schengen em 2024 e o setor de tecnologia cresce em ritmo consistente. O que muda agora é o nível de detalhe que o planejamento exige.\n\nUm relatório divulgado no início de julho de 2026 aponta falta de especialistas em tecnologia da informação e cibersegurança. Para o candidato estrangeiro, isso é oportunidade concreta, porque escassez de mão de obra qualificada costuma abrir vagas e flexibilizar contratações. Os polos de Bucareste e Cluj seguem no centro desse movimento, e a livre circulação pelo bloco amplia o alcance de quem faz da Romênia sua base.\n\nO contraponto veio na mesma semana. Um levantamento aponta que o trabalhador entrega cerca de 41,5% do salário bruto ao Estado, a maior carga sobre a remuneração da União Europeia, enquanto os preços de imóveis subiram 7,8% no primeiro trimestre, acima da média do bloco. Traduzindo, o salário bruto anunciado numa proposta pode encolher bastante depois dos descontos, e comprar um apartamento ficou mais caro do que há um ano.\n\nA leitura equilibrada é esta. A Romênia continua acessível, mas deixou de ser um destino que se avalia só pelo custo de vida baixo. Quem vai trabalhar com vínculo local precisa calcular o líquido de verdade. Quem prefere manter renda no exterior encontra no Digital Nomad Visa, de doze meses renováveis, uma alternativa que contorna parte da carga local, desde que respeite as regras de permanência e o próprio impacto fiscal da estadia prolongada. Em todos os caminhos, o mesmo princípio se aplica, decidir a partir das fontes oficiais e de uma simulação honesta dos números, não do rótulo de país barato.", tags: ["Romênia", "trabalho", "tributação", "tecnologia", "custo de vida"], sources: [{ label: "Romania Insider · Escassez de especialistas em TI e cibersegurança", url: "https://www.romania-insider.com/romania-shortage-it-cybersecurity-specialists-2026" }, { label: "Romania Insider · Carga tributária sobre salários", url: "https://www.romania-insider.com/employees-romania-salary-tax-burden-july-2026" }, { label: "Romania Insider · Preços de imóveis no primeiro trimestre", url: "https://www.romania-insider.com/house-prices-romania-rise-q1-2026" }, { label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/" }] },
    ],
  },
  se: {
    community: [
      { title: "Suécia aperta as regras e exige salário mais alto para quem trabalha", body: "A Suécia entrou em um ciclo mais restritivo na política migratória e elevou o patamar salarial mínimo exigido para a concessão de autorizações de trabalho. A mudança atinge tanto novos pedidos quanto renovações, e reflete uma orientação de priorizar imigração qualificada e mais bem remunerada.\n\nO órgão responsável é o Migrationsverket, a Agência Sueca de Migração, que aplica os critérios e publica as listas de ocupações com tratamento diferenciado. Quem planeja se mudar a trabalho precisa acompanhar de perto esses limiares, porque eles têm sido revisados.", cta: "Confira o valor salarial mínimo vigente e a lista de ocupações diretamente no site do Migrationsverket antes de aceitar uma proposta de emprego.", sources: [{ label: "Migrationsverket · Swedish Migration Agency", url: "https://www.migrationsverket.se/en.html" }] },
      { title: "💡 Reunificação familiar na Suécia ficou mais exigente", body: "Além das regras de trabalho, a Suécia reforçou as exigências financeiras para reunificação familiar. O patrocinador, ou seja, quem traz o parente para o país, passou a precisar comprovar um nível de renda mais alto do que o exigido anteriormente, o que tornou o processo mais seletivo.\n\nPara famílias que pensam em se reunir em solo sueco, isso significa planejamento financeiro antecipado. Subestimar essa exigência é uma das principais causas de indeferimento, e os valores são atualizados periodicamente.", cta: "Reúna comprovação de renda sólida e atualizada antes de protocolar um pedido de reunificação, e confirme o valor exigido na fonte oficial.", sources: [{ label: "Migrationsverket · Swedish Migration Agency", url: "https://www.migrationsverket.se/en.html" }] },
    ],
    countryTab: [
      { headline: "Suécia endurece a imigração e eleva o salário mínimo para trabalhar", standfirst: "Agência de migração aplica critérios mais duros e o parlamento discute novos cortes.", body: "A política migratória sueca passou por um giro restritivo nos últimos tempos, com elevação do salário mínimo exigido para autorizações de trabalho. O novo critério vale para pedidos iniciais e para renovações, e parte de uma diretriz de favorecer imigração qualificada.\n\nO Migrationsverket, agência oficial de migração, administra esses limiares e mantém listas de ocupações em escassez que podem receber tratamento diferenciado. A reunificação familiar também ficou mais exigente, com comprovação financeira reforçada para o patrocinador.\n\nO cenário ainda está em movimento, com discussões no parlamento sobre cortes mais profundos. Por isso, qualquer planejamento para a Suécia deve partir das regras atualizadas publicadas pela própria agência, e não de informações de segunda mão.", keyFacts: ["Salário mínimo para autorização de trabalho foi elevado", "Reunificação familiar passou a exigir comprovação financeira maior", "Migrationsverket mantém lista oficial de ocupações em escassez"], sources: [{ label: "Migrationsverket · Swedish Migration Agency", url: "https://www.migrationsverket.se/en.html" }] },
    ],
    blog: [],
  },
  cz: {
    community: [
      { title: "Tchéquia oferece rota estável de trabalho via Employee Card", body: "A Tchéquia mantém um regime migratório estável, e a principal via para quem quer trabalhar no país é o Employee Card. Trata-se de uma autorização de residência de longa duração ligada a um empregador e a uma vaga específica, que substitui antigos vistos de trabalho e combina, num só documento, o direito de morar e de exercer a função para a qual foi emitida.\n\nO processo passa pelo Ministério do Interior tcheco, responsável pela política de migração. Por estar atrelado a uma oferta concreta de emprego, o Employee Card exige que o candidato já tenha um vínculo formalizado antes de protocolar o pedido.", cta: "Comece pela busca de uma oferta de emprego válida e confira os requisitos do Employee Card no portal oficial do Ministério do Interior.", sources: [{ label: "Ministério do Interior da Tchéquia (mvcr.cz)", url: "https://mv.gov.cz/mvcren/" }] },
      { title: "💡 Profissionais qualificados têm via expressa na Tchéquia", body: "Para perfis em alta demanda, a Tchéquia opera o programa Highly Qualified Employee, que oferece prazo de decisão mais curto a candidatos de áreas como tecnologia e saúde. A iniciativa busca acelerar a chegada de talentos que o mercado local precisa preencher com rapidez.\n\nEssa via não substitui as exigências documentais, mas mostra que o país trata setores estratégicos com prioridade. Saber se a sua profissão está entre as ocupações qualificadas elegíveis ajuda a definir o melhor caminho desde o início.", cta: "Verifique se a sua ocupação consta na lista de profissões qualificadas e priorize sempre o portal oficial em vez de consultores não licenciados.", sources: [{ label: "Portal oficial para estrangeiros (ipc.gov.cz)", url: "https://ipc.gov.cz/en/" }] },
    ],
    countryTab: [
      { headline: "Tchéquia mantém regime previsível e aposta em mão de obra qualificada", standfirst: "Employee Card é a via central, com tratamento expresso para áreas estratégicas.", body: "A Tchéquia se destaca pela estabilidade de suas regras de imigração, o que dá previsibilidade a quem planeja se mudar a trabalho. A via principal é o Employee Card, autorização de residência de longa duração vinculada a um empregador e a uma vaga determinada, que reúne num só documento o direito de residir e de trabalhar.\n\nPara perfis estratégicos, o país opera o programa Highly Qualified Employee, com decisão mais rápida para profissionais de tecnologia e saúde. É um sinal claro de que setores em escassez recebem prioridade no fluxo de análise.\n\nComo o Employee Card depende de uma oferta concreta de emprego, o primeiro passo é assegurar o vínculo com uma empresa local. A partir daí, a consulta aos portais oficiais define a documentação exata e evita informação desatualizada.", keyFacts: ["Employee Card vincula residência e trabalho a um empregador específico", "Programa Highly Qualified Employee acelera decisões para tech e saúde", "Ministério do Interior é a autoridade responsável pela migração"], sources: [{ label: "Ministério do Interior da Tchéquia (mvcr.cz)", url: "https://mv.gov.cz/mvcren/" }] },
    ],
    blog: [],
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
    blog: [],
  },
};

/** Retorna o conteúdo editorial curado de um país, se houver, no idioma do app.
 *  EN cai no PT quando ainda não há versão EN (a rotina diária preenche). */
export function getEditorial(code: string, lang: Locale = "pt-BR"): CountryEditorial | undefined {
  if (lang === "en") return EDITORIAL_EN[code] ?? EDITORIAL[code];
  return EDITORIAL[code];
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
      } else if (dest.key === "blog") {
        for (const p of ed.blog)
          pieces.push({ destination: "blog", countryCode: c.code, countryName: c.name, title: p.headline, standfirst: p.standfirst, body: p.body, tags: p.tags, sources: p.sources });
      } else if (dest.key === "youtube") {
        for (const p of ed.youtube ?? [])
          pieces.push({ destination: "youtube", countryCode: c.code, countryName: c.name, title: p.title, standfirst: p.hook, body: p.body, cta: p.cta, sources: p.sources });
      } else if (dest.key === "instagram") {
        for (const p of ed.instagram ?? [])
          pieces.push({ destination: "instagram", countryCode: c.code, countryName: c.name, title: p.title, body: p.body, cta: p.cta, tags: p.hashtags, sources: p.sources });
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

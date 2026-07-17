/**
 * RONDA DIÁRIA · conteúdo editorial FRESCO gerado pela Friday (Claude Code).
 *
 * Este é o arquivo que a Ronda Diária (22h varredura + 2h revisão) atualiza. Cada
 * peça carrega `publishedAt` (semana ISO), então o app marca sozinho "atual",
 * "semana passada" e "arquivo". `getEditorial()` mescla estas peças POR CIMA do
 * conteúdo base de `editorial.ts` (prepend), então a notícia nova aparece primeiro.
 *
 * Regras de redação (iguais às de editorial.ts): voz jornalística WiseHub, PT-BR,
 * NUNCA travessão no meio das frases, sempre com fonte oficial. Não inventar fato.
 *
 * Só PT por enquanto (a redação é da Friday, em português). EN herda o base.
 */

import type { CommunityPost, CountryArticle, BlogPost } from "./editorial";

export type RondaPiece = { community?: CommunityPost[]; countryTab?: CountryArticle[]; blog?: BlogPost[] };

const D = "2026-07-07"; // data desta ronda
const D2 = "2026-07-10"; // ronda extra: notícias reais de 09/07 (CA, UK) + PT (AIMA)
const D3 = "2026-07-17"; // ronda extra: checagem cruzada multi-país (20 países), curadoria da Friday

export const RONDA_PIECES: Record<string, RondaPiece> = {
  us: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Cinco sinais de que a imigração legal nos EUA está mudando de forma em 2026",
      standfirst: "Entre a revogação de uma regra, um prazo fixo novo para visto de estudante, um memorando que trata o green card interno como exceção e uma taxa de US$100 mil em disputa na Justiça, o desenho da imigração legal americana ganhou contornos novos nas últimas semanas.",
      body: "Nas últimas semanas, o governo americano promoveu uma série de mudanças que, somadas, redesenham partes importantes da imigração legal para os Estados Unidos. Nenhuma delas isolada resume o quadro todo, mas juntas mostram uma linha de atuação clara, mais controle administrativo sobre quem entra, quem fica e por quanto tempo.\n\nA mudança mais recente veio do Department of Homeland Security, que publicou em 16 de julho de 2026 a regra final que substitui o modelo de duration of status por um prazo fixo de admissão de até 4 anos para os vistos F, J e I. O grace period após o fim do curso ou do programa caiu de 60 para 30 dias, e quem precisar ficar além do prazo passa a depender de uma petição de Extension of Stay junto à USCIS. É uma mudança estrutural para milhões de estudantes e intercambistas que hoje vivem nos Estados Unidos ou pretendem entrar por essas categorias.\n\nDias antes, em 21 de maio de 2026, a USCIS publicou o memorando de política PM-602-0199, que trata o ajuste de status, o caminho para pedir o green card de dentro dos Estados Unidos, como uma medida discricionária e uma graça administrativa extraordinária. O documento reforça o processamento consular, ou seja, pedir o visto de imigrante fora do país, como a via padrão esperada pelo governo. Na prática, o memorando sinaliza que o ajuste de status deixa de ser tratado como caminho automático e passa a exigir justificativa mais forte.\n\nAo mesmo tempo, a USCIS revogou a regra de public charge de 2022, o padrão que orienta como o uso de benefícios públicos pesa na avaliação de pedidos de visto e de residência. O novo padrão entra em vigor em 18 de setembro de 2026, mas o texto detalhado ainda não foi divulgado, o que torna prematuro chamar o movimento de afrouxamento geral das regras. É mais preciso ler a revogação como parte do mesmo processo de reorganização normativa em curso, sem ainda saber qual critério exato vai substituir o de 2022.\n\nEnquanto isso, a disputa em torno da taxa de US$100 mil cobrada na entrada de novos titulares de H-1B segue em aberto no Judiciário. Em 8 de junho de 2026, um juiz federal do distrito de Massachusetts invalidou a cobrança, mas suspendeu a própria decisão dias depois, e o Primeiro Circuito manteve essa suspensão enquanto o recurso corre. Na prática, a taxa continua sendo cobrada até que o caso se resolva, e empregadores e candidatos seguem sem uma resposta definitiva.\n\nPor fim, o Departamento do Trabalho, o DOL, sinalizou na Agenda Regulatória Unificada de 3 de julho de 2026 que prepara a primeira atualização abrangente do processo PERM desde 2004, o exame do mercado de trabalho que sustenta a maioria dos pedidos de green card por emprego. O texto da proposta ainda não foi publicado, então por enquanto é um plano declarado, não uma regra em vigor, mas o simples anúncio já é significativo para quem depende da certificação trabalhista no caminho da residência permanente.\n\nO denominador comum entre essas medidas é o aumento do controle discricionário da administração sobre etapas que antes seguiam fluxos mais automáticos, da permanência de estudantes à concessão do green card dentro do país. Para quem constrói um projeto de vida nos Estados Unidos, o momento pede atenção redobrada a prazos, datas de vigência e à fonte oficial de cada mudança, porque vários desses processos ainda estão em curso e podem ganhar novos capítulos nos próximos meses.",
      tags: ["EUA", "USCIS", "DHS", "H-1B", "Green Card", "PERM", "Vistos de Estudante"],
      sources: [
      { label: "DHS · Trump Administration Issues Final Rule to End Foreign Student Visa Abuse", url: "https://www.dhs.gov/news/2026/07/16/trump-administration-issues-final-rule-end-foreign-student-visa-abuse" },
      { label: "Federal Register · Public Inspection 2026-14439 (DHS)", url: "https://public-inspection.federalregister.gov/2026-14439.pdf" },
      { label: "USCIS · Policy Memorandum PM-602-0199 (21/mai/2026)", url: "https://www.uscis.gov/sites/default/files/document/memos/PM-602-0199-AdjustmentOfStatusAndDiscretion-20260521.pdf" },
      { label: "USCIS · News Release: Will Grant 'Adjustment of Status' Only in Extraordinary Circumstances", url: "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-will-grant-adjustment-of-status-only-in-extraordinary" },
      { label: "USCIS · News Release: Rescinds 2022 Public Charge Regulation", url: "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-rescinds-2022-public-charge-regulation" },
      { label: "Vorys · Court Strikes Down $100,000 New H-1B Entry Fee, But Fee Still Applies Pending Appeal", url: "https://www.vorys.com/publication-court-strikes-down-100-000-h-1b-entry-fee-but-fee-still-applies-pending-appeal" },
      { label: "Reginfo.gov · OIRA Unified Agenda: RIN 1205-AC29", url: "https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "USCIS revoga a regra de public charge de 2022; mudança vale a partir de 18 de setembro",
      body: "A USCIS confirmou a revogação da regra de public charge, o encargo público, de 2022, o padrão que orientava como o uso de determinados benefícios públicos era avaliado em pedidos de visto e de residência permanente. Segundo o comunicado oficial do órgão, o novo padrão entra em vigor em 18 de setembro de 2026.\n\nComo o texto detalhado do novo padrão ainda não foi divulgado pela USCIS, quem tem processo de green card ou de visto em andamento, e já recebeu ou recebe algum tipo de benefício público, deve acompanhar as próximas orientações oficiais em vez de agir com base em suposições. A recomendação da WiseHub é aguardar a publicação das regras completas antes de tomar qualquer decisão sobre isso no seu processo.",
      cta: "Tem processo de residência ou visto em andamento e já usou algum benefício público nos EUA? Acompanhe as próximas orientações da USCIS antes de 18 de setembro.",
      sources: [
      { label: "USCIS · News Release: Rescinds 2022 Public Charge Regulation", url: "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-rescinds-2022-public-charge-regulation" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "A taxa de US$100 mil do H-1B ainda está sendo cobrada, apesar da derrota na Justiça",
      body: "Muita gente pergunta se a USCIS ainda cobra a taxa de US$100 mil na entrada de novos titulares de H-1B. Por enquanto, a resposta é sim. Em 8 de junho de 2026, o juiz federal Leo Sorokin, do tribunal distrital de Massachusetts, invalidou a cobrança no processo State of California et al. v. Mullin. O próprio juiz, porém, suspendeu a sua decisão em 12 de junho, e o Primeiro Circuito manteve essa suspensão em vigor desde 18 de junho, enquanto o recurso corre.\n\nNa prática, isso significa que a taxa continua valendo até que o processo se resolva de forma definitiva. Quem está com petição H-1B em andamento, ou pretende protocolar uma nova, deve confirmar com o empregador ou com um advogado de imigração se a cobrança ainda se aplica ao seu caso antes de seguir com qualquer etapa.",
      cta: "Tem H-1B em andamento? Confirme com seu empregador ou advogado se a taxa de US$100 mil ainda está sendo cobrada no seu caso antes de qualquer decisão.",
      sources: [
      { label: "Vorys · Court Strikes Down $100,000 New H-1B Entry Fee, But Fee Still Applies Pending Appeal", url: "https://www.vorys.com/publication-court-strikes-down-100-000-h-1b-entry-fee-but-fee-still-applies-pending-appeal" },
    ],
    },
    ],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "DHS extingue o duration of status e fixa prazo de até 4 anos para vistos F, J e I",
      standfirst: "Regra final publicada em 16 de julho substitui a permanência vinculada ao curso ou programa por uma admissão de prazo fixo, reduz o grace period de 60 para 30 dias e passa a exigir Extension of Stay pela USCIS.",
      body: "O Department of Homeland Security, o DHS, publicou em 16 de julho de 2026 a regra final que reformula as admissões dos vistos F, para estudantes, J, para intercambistas e participantes de programas de intercâmbio, e I, para representantes de mídia estrangeira, nos Estados Unidos. O comunicado oficial do órgão, intitulado Trump Administration Issues Final Rule to End Foreign Student Visa Abuse, confirma a mudança, que também consta no texto em inspeção pública no Federal Register.\n\nA alteração central troca o modelo até então em vigor, conhecido como duration of status, ou D/S, pelo qual o titular do visto podia permanecer nos Estados Unidos enquanto mantivesse a condição de estudante ou de participante do programa, sem uma data de vencimento fixa registrada na admissão. A partir de agora, a admissão desses vistos passa a ter prazo determinado, de até 4 anos.\n\nA regra também reduz o chamado grace period, o período de tolerância após o fim do curso ou do programa, de 60 para 30 dias. Além disso, quem precisar permanecer nos Estados Unidos além do prazo fixo de admissão passa a depender de uma petição de Extension of Stay protocolada junto à própria USCIS, um passo que antes, sob o regime de duration of status, não era exigido da mesma forma.\n\nNa prática, a mudança impõe uma rotina de controle mais rígida a estudantes internacionais, intercambistas e representantes de mídia estrangeira, que passam a precisar acompanhar de perto a data exata de expiração da própria admissão, e não apenas a manutenção do vínculo com a escola ou o programa. Quem está nos Estados Unidos com visto F, J ou I, ou planeja entrar com um desses vistos, deve conferir os prazos específicos e as datas de vigência da nova regra diretamente nas fontes oficiais do DHS antes de tomar qualquer decisão.",
      keyFacts: [
        "Regra final publicada pelo DHS em 16 de julho de 2026, encerrando o modelo de duration of status para os vistos F, J e I.",
        "Admissão passa a ter prazo fixo de até 4 anos, em vez de vigorar enquanto durar o curso ou o programa.",
        "Grace period após o fim do curso ou programa cai de 60 para 30 dias.",
        "Quem precisar ficar além do prazo fixo passa a depender de petição de Extension of Stay junto à USCIS.",
      ],
      sources: [
      { label: "DHS · Trump Administration Issues Final Rule to End Foreign Student Visa Abuse", url: "https://www.dhs.gov/news/2026/07/16/trump-administration-issues-final-rule-end-foreign-student-visa-abuse" },
      { label: "Federal Register · Public Inspection 2026-14439 (DHS)", url: "https://public-inspection.federalregister.gov/2026-14439.pdf" },
    ],
    },
    ],
  },

  ch: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Suíça cresceu quase 2 milhões de habitantes em 25 anos e disse não a um teto populacional, mesmo assim",
      standfirst: "Enquanto a União Europeia endurece as regras de retorno de migrantes e a ONU cobra mais garantias de direitos humanos, os suíços preferiram, nas urnas, manter a livre circulação de pessoas intacta e rejeitar limitar por lei o tamanho da população do país.",
      body: "A população da Suíça cresceu de 7,16 milhões de habitantes em 1º de janeiro de 2000 para 9,05 milhões em 31 de dezembro de 2024, um aumento de 1,89 milhão de pessoas em duas décadas e meia. O dado é do Bundesamt für Statistik (BFS), o Escritório Federal de Estatística do país, e mostra que cerca de 80% desse crescimento veio do saldo migratório e 20% do saldo vegetativo, ou seja, mais nascimentos do que óbitos.\n\nFoi esse pano de fundo que levou à votação popular federal de 14 de junho de 2026 sobre a iniciativa 'Keine 10-Millionen-Schweiz!', que propunha limitar por lei a população residente do país a 10 milhões de pessoas até 2050, com um mecanismo em dois estágios: ao atingir 9,5 milhões de habitantes, o governo teria que negociar restrições à livre circulação de pessoas com a União Europeia, e ao chegar a 10 milhões, a limitação se tornaria compulsória. Segundo a página oficial da votação, publicada pela Chancelaria Federal da Confederação Suíça, e confirmado pela cobertura da emissora pública SRF, a iniciativa foi rejeitada por 54,8% dos votos, com a maioria dos cantões também contra.\n\nPara analistas do think tank Avenir Suisse e da associação patronal Centre Patronal, o crescimento populacional expôs um país que não se preparou o suficiente em moradia, transporte e saúde, um diagnóstico que a imprensa local resumiu como um alerta. Vale marcar a diferença: o dado de crescimento é oficial e confirmado pelo BFS, mas a leitura de que a Suíça 'paga o preço' por falta de planejamento é interpretação de especialistas, não um posicionamento do governo. Na votação de 14 de junho, os eleitores tiveram a chance de reagir a essa pressão criando um teto populacional rígido e escolheram não fazer isso.\n\nO contraste com o restante da Europa ajuda a entender o tamanho dessa escolha. Em 17 de junho de 2026, o Parlamento Europeu aprovou em Estrasburgo, por 418 votos a favor, 218 contra e 30 abstenções, um novo Regulamento de Retorno que permite aos Estados da União Europeia manter centros de retorno de migrantes fora do bloco e ampliar a detenção para até 24 meses, prorrogáveis. Três dias depois, em 20 de junho, o Alto Comissário da ONU para Direitos Humanos, Volker Türk, emitiu comunicado oficial dizendo que os Estados da UE 'não podem simplesmente terceirizar suas obrigações de direitos humanos para Estados terceiros' e pedindo que qualquer deportação siga avaliação individual e espere o esgotamento do direito de recurso.\n\nA Suíça não é membro da União Europeia, mas está ligada ao bloco por acordos bilaterais e pelo espaço Schengen, o que torna esse movimento de endurecimento na UE parte do cenário que os suíços observam de fora. Ainda assim, o resultado da votação de 14 de junho mostra um caminho diferente: em vez de legislar um limite rígido de população ou apertar regras de entrada, o eleitorado suíço optou, pela via da democracia direta, por manter a política migratória como está. Isso não faz o debate sobre moradia, infraestrutura e serviços públicos desaparecer, e é bem provável que o tema volte às urnas em alguma forma nos próximos anos, mas por ora a livre circulação de pessoas com a UE segue sem qualquer restrição adicional.",
      tags: ["Suíça", "imigração", "livre circulação", "referendo suíço", "população", "União Europeia"],
      sources: [
      { label: "Bundesamt für Statistik (BFS) / Escritório Federal de Estatística da Suíça", url: "https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung/stand-entwicklung.html" },
      { label: "Confederação Suíça · Chancelaria Federal (votação Nachhaltigkeitsinitiative)", url: "https://www.admin.ch/de/nachhaltigkeitsinitiative" },
      { label: "SRF · cobertura da votação de 14/06/2026", url: "https://www.srf.ch/news/abstimmung-initiative-keine-10-mio-schweiz-vom-14-6-2026" },
      { label: "Parlamento Europeu · Press Room", url: "https://www.europarl.europa.eu/news/en/press-room/20260611IPR45214/new-eu-system-for-return-of-illegally-staying-third-country-nationals" },
      { label: "OHCHR · comunicado oficial de Volker Türk", url: "https://www.ohchr.org/en/press-releases/2026/06/un-human-rights-chief-concerned-about-new-eu-returns-law-urges-consistency" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Ex-chefe da imigração de Basileia-Campina é julgada por negar direito de recurso a estrangeiros",
      body: "O Ministério Público de Basileia-Campina (Baselland) processa uma ex-chefe de departamento do Amt für Migration, Integration und Bürgerrecht, que esteve no cargo entre janeiro de 2020 e agosto de 2024, por abuso de função. Segundo reportagens da emissora pública SRF, do portal Bajour e do jornal 20 Minuten, ela enviou cerca de 489 cartas informais de recusa ou de saída a cidadãos da União Europeia com antecedentes leves, em vez de emitir decisões formais, que garantem o direito de recurso previsto no Acordo de Livre Circulação de Pessoas entre a Suíça e a UE.\n\nO julgamento corre no Strafgericht, o tribunal criminal do cantão, e a promotoria já pediu multa contra a ex-funcionária. Não há, até agora, um comunicado direto do governo cantonal ou do Ministério Público no site oficial baselland.ch sobre o caso, mas a cobertura de três veículos suíços independentes confirma que se trata de um processo penal real, em julgamento. Quem viveu em Baselland como cidadão da UE e recebeu, nesse período, uma carta informal de recusa ou de saída sem explicação clara sobre como recorrer pode ter sido afetado.",
      cta: "Recebeu uma carta informal de recusa ou saída de uma autoridade de imigração na Suíça, sem instrução clara sobre como recorrer? Guarde o documento e procure um advogado de imigração para avaliar seus direitos.",
      sources: [
      { label: "SRF · Strafgericht Baselland: Migrationsbeamtin soll jahrelang Ausländer schikaniert haben", url: "https://www.srf.ch/news/schweiz/strafgericht-baselland-migrationsbeamtin-soll-jahrelang-auslaender-schikaniert-haben" },
      { label: "Bajour · Ex-Abteilungsleiterin beim Migrationsamt wegen Amtsmissbrauchs vor Gericht", url: "https://bajour.ch/a/ex-abteilungsleiterin-beim-migrationsamt-wegen-amtsmissbrauchs-vor-gericht" },
      { label: "20 Minuten · Migrationsbehörde: Ich lotete die Grenzen aus", url: "https://www.20min.ch/story/migrationsbehoerde-ich-lotete-die-grenzen-aus-hat-beamtin-auslaender-schikaniert-103588624" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Suíça rejeita nas urnas iniciativa que limitaria a população a 10 milhões",
      body: "Em votação popular federal realizada no domingo, 14 de junho de 2026, os suíços rejeitaram a iniciativa 'Keine 10-Millionen-Schweiz!', que propunha limitar a população residente do país a 10 milhões de pessoas até 2050. O texto previa gatilhos de restrição à livre circulação de pessoas com a União Europeia caso a população atingisse 9,5 milhões e depois 10 milhões de habitantes. Segundo a página oficial da Chancelaria Federal sobre a votação, o resultado foi 54,8% dos votos contra a iniciativa, com a maioria dos cantões também rejeitando a proposta.\n\nNa prática, o Acordo de Livre Circulação de Pessoas com a União Europeia segue sem qualquer restrição adicional por enquanto. Quem já planeja se mudar para a Suíça como cidadão da UE ou da EFTA não enfrenta mudança nas regras de entrada em razão dessa votação.",
      cta: "Se seu plano é se mudar para a Suíça pela via da livre circulação com a União Europeia, siga o planejamento normalmente: a rejeição da iniciativa mantém as regras atuais em vigor.",
      sources: [
      { label: "Confederação Suíça · Chancelaria Federal (votação Nachhaltigkeitsinitiative)", url: "https://www.admin.ch/de/nachhaltigkeitsinitiative" },
      { label: "SRF · cobertura da votação de 14/06/2026", url: "https://www.srf.ch/news/abstimmung-initiative-keine-10-mio-schweiz-vom-14-6-2026" },
    ],
    },
    ],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Suíça rejeita teto de 10 milhões de habitantes e mantém livre circulação com a União Europeia intacta",
      standfirst: "Voto popular de 14 de junho teve 54,8% contra a iniciativa 'Keine 10-Millionen-Schweiz!', que condicionava restrições à livre circulação ao crescimento da população; resultado chega em meio a um debate sobre moradia, transporte e saúde.",
      body: "No domingo, 14 de junho de 2026, a Suíça realizou uma votação popular federal sobre a iniciativa 'Keine 10-Millionen-Schweiz!' (Nenhuma Suíça de 10 milhões), que propunha limitar por lei a população residente do país a 10 milhões de pessoas até 2050. O texto previa dois gatilhos concretos: ao atingir 9,5 milhões de habitantes, o governo teria que negociar restrições à livre circulação de pessoas com a União Europeia, e ao chegar a 10 milhões, a limitação se tornaria compulsória.\n\nSegundo a página oficial da votação, publicada pela Chancelaria Federal da Confederação Suíça, a iniciativa foi rejeitada por 54,8% dos votos contrários, com a maioria dos cantões também votando contra a proposta. O resultado, confirmado também pela cobertura da emissora pública SRF, preserva o Acordo de Livre Circulação de Pessoas com a União Europeia sem qualquer restrição adicional neste momento.\n\nA votação aconteceu num contexto de crescimento populacional real e mensurável. Segundo o Bundesamt für Statistik (BFS), o Escritório Federal de Estatística da Suíça, a população do país passou de 7,16 milhões de habitantes em 1º de janeiro de 2000 para 9,05 milhões em 31 de dezembro de 2024, um aumento de 1,89 milhão de pessoas em 25 anos. Desse crescimento, cerca de 80% veio do saldo migratório e 20% do saldo vegetativo, ou seja, mais nascimentos do que óbitos.\n\nPara analistas do think tank Avenir Suisse e da associação patronal Centre Patronal, esse crescimento expôs falta de planejamento em áreas como moradia, transporte e saúde, um diagnóstico que a imprensa local resumiu como um alerta para o país. É importante notar que essa leitura de causa e efeito é interpretação de especialistas apoiada em dado oficial correto, não um posicionamento do governo suíço, que pela votação de 14 de junho preferiu manter a política migratória atual em vez de adotar um teto populacional rígido.\n\nPara quem já vive na Suíça ou planeja se mudar para lá, o resultado da votação significa continuidade: nenhuma nova restrição à livre circulação de pessoas com a UE entra em vigor por causa desse resultado. Ainda assim, o debate sobre a capacidade do país de absorver crescimento populacional, especialmente na oferta de moradia, deve continuar mobilizando partidos e sociedade civil nos próximos anos.",
      keyFacts: [
        "Votação popular federal em 14 de junho de 2026 sobre a iniciativa 'Keine 10-Millionen-Schweiz!', que buscava limitar a população suíça a 10 milhões de habitantes até 2050.",
        "Iniciativa rejeitada por 54,8% dos votos, com maioria dos cantões também contra, segundo a Chancelaria Federal.",
        "O texto previa restrição à livre circulação de pessoas com a UE ao atingir 9,5 milhões de habitantes, e limitação compulsória ao chegar a 10 milhões; nenhum gatilho foi acionado.",
        "População suíça cresceu de 7,16 milhões (2000) para 9,05 milhões (2024), aumento de 1,89 milhão de pessoas, sendo cerca de 80% por saldo migratório, segundo o BFS.",
        "Livre circulação de pessoas com a União Europeia segue sem restrição adicional após o resultado da votação.",
      ],
      sources: [
      { label: "Confederação Suíça · Chancelaria Federal (votação Nachhaltigkeitsinitiative)", url: "https://www.admin.ch/de/nachhaltigkeitsinitiative" },
      { label: "SRF · cobertura da votação de 14/06/2026", url: "https://www.srf.ch/news/abstimmung-initiative-keine-10-mio-schweiz-vom-14-6-2026" },
      { label: "Bundesamt für Statistik (BFS) / Escritório Federal de Estatística da Suíça", url: "https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung/stand-entwicklung.html" },
    ],
    },
    ],
  },

  ae: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Por que Abu Dhabi vai sediar a Conferência da ONU sobre a Água em meio à crise hídrica global",
      standfirst: "Em dezembro de 2026, os Emirados recebem, ao lado do Senegal, o evento que a diplomacia emiradense trata como oportunidade de colocar a escassez de água no centro da agenda internacional.",
      body: "O Ministério das Relações Exteriores dos Emirados Árabes Unidos, o MOFA, confirmou em múltiplos comunicados que o país vai co-organizar, ao lado do Senegal, a Conferência da ONU sobre Água de 2026, marcada para dezembro em Abu Dhabi. A informação aparece de forma recorrente em publicações oficiais do ministério, entre elas um comunicado sobre cooperação com a ONU em sustentabilidade e outro divulgado durante a London Climate Action Week, ambos reforçando que a crise hídrica global exige mais atenção internacional.\n\nA escolha de Abu Dhabi como sede, dividindo a organização com um país africano, sinaliza um movimento diplomático específico. Em vez de tratar o tema apenas como pauta ambiental interna, os Emirados se posicionam como ponto de convergência para discutir escassez de água em escala global, articulando parcerias entre regiões que enfrentam desafios distintos, mas conectados, no acesso a esse recurso.\n\nA reportagem que deu origem a essa notícia atribui ao Assistant Minister Abdulla Balalaa a fala de que a conferência vai dar destaque internacional à crise da água no mundo. Não localizamos o comunicado oficial com essa citação literal do ministro, mas o conteúdo é consistente com a posição pública repetida do MOFA sobre o tema, documentada em pelo menos dois comunicados distintos ao longo de 2026. Ou seja, a substância da declaração está respaldada por fonte oficial, mesmo que a citação exata ainda não tenha sido localizada num documento primário.\n\nPara quem acompanha os Emirados de fora, o episódio ajuda a entender um padrão maior. O país tem usado grandes eventos internacionais como vitrine para se posicionar em pautas globais sensíveis, e a Conferência da Água de dezembro deve seguir esse roteiro. Vale acompanhar, nos próximos meses, como o programa do evento é detalhado pelos canais oficiais do MOFA e da ONU.",
      tags: ["Emirados Árabes Unidos", "Água", "Diplomacia", "ONU", "MOFA"],
      sources: [
      { label: "MOFA · UAE and UN Discuss Strengthening Cooperation on Sustainability and 2026 UN Water Conference", url: "https://www.mofa.gov.ae/en/mediahub/news/2026/5/25/uae-un-water-conference" },
      { label: "MOFA · Ministry of Foreign Affairs Mobilizes Global Efforts to Accelerate Actionable Water Solutions", url: "https://www.mofa.gov.ae/en/MediaHub/News/2026/7/2/UAE-Water-Solutions" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Dubai desmente boato de explosões na Downtown e ameaça agir contra quem espalhar informação falsa",
      body: "Um relato divulgado pela agência Reuters sobre supostas explosões na Downtown Dubai, em 16 de julho de 2026, foi negado publicamente pelo Government of Dubai Media Office, o GDMO, órgão oficial de comunicação do governo de Dubai. Segundo o comunicado, reproduzido pelo veículo estatal Emirates 24|7 e por diversos veículos internacionais, a informação é falsa, e o GDMO afirmou que vai tomar medidas legais contra quem publicar dados não verificados sobre o assunto.\n\nO episódio reforça um alerta simples para quem vive ou acompanha notícias sobre Dubai. Em casos de boatos sobre segurança, o caminho seguro é esperar a confirmação dos canais oficiais do governo antes de acreditar ou compartilhar qualquer relato, principalmente quando ele circula primeiro nas redes sociais.",
      cta: "Viu esse boato circulando? Não repasse sem confirmar. A palavra final sobre segurança em Dubai vem sempre dos canais oficiais do governo.",
      sources: [
      { label: "Emirates 24|7 (Dubai Media Incorporated)", url: "https://www.emirates247.com/uae/dubai-media-office-denies-reuters-report-on-explosions-in-downtown-dubai/3718" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Túmulo da Idade do Bronze Final é encontrado em Al Ain e revela mais de mil anos de história",
      body: "O Departamento de Cultura e Turismo de Abu Dhabi, o DCT Abu Dhabi, anunciou a descoberta de uma câmara funerária de cerca de 11 por 2,5 metros na necrópole pré-islâmica de Qattarah, na região de Al Ain. Segundo o comunicado oficial, divulgado pelo Abu Dhabi Government Media Office, a estrutura pertence ao período Wadi Suq e à Idade do Bronze Final, entre aproximadamente 2000 e 1300 a.C., e foi usada pela comunidade local por mais de mil anos.\n\nA descoberta ajuda a reconstruir uma camada mais antiga da história dos Emirados, num momento em que a região de Al Ain, já reconhecida como Patrimônio Mundial da UNESCO, segue rendendo achados arqueológicos relevantes. Para quem vive no país ou se interessa pela cultura local, é mais um motivo para conhecer de perto o acervo histórico da região.",
      cta: "Curioso para saber mais sobre a história antiga dos Emirados? Acompanhe as novidades arqueológicas de Al Ain nos canais oficiais do DCT Abu Dhabi.",
      sources: [
      { label: "DCT Abu Dhabi via Abu Dhabi Government Media Office", url: "https://www.mediaoffice.abudhabi/en/arts-culture/department-of-culture-and-tourism-abu-dhabi-uncovers-late-bronze-age-tomb-in-al-ain-region/" },
    ],
    },
    ],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Abu Dhabi projeta fechar todos os aterros sanitários em plano de cerca de cinco anos",
      standfirst: "CEO do Tadweer Group, órgão oficial de resíduos do emirado, afirma que fechar aterros é o caminho mais direto para chegar a 80% de desvio até 2031, dentro da meta pública de zero aterro até 2071.",
      body: "O Tadweer Group, entidade oficial responsável pela gestão de resíduos de Abu Dhabi, colocou no centro do debate público um plano ambicioso para transformar o destino do lixo do emirado. Em declaração ao veículo The National, o CEO da empresa, Etienne Petit, afirmou que a forma mais eficaz de alcançar a meta de 80% de desvio de aterro é justamente fechar os aterros sanitários, com um plano estimado em cerca de cinco anos.\n\nA fala está alinhada à meta pública já conhecida do Tadweer, de chegar a 80% de desvio de resíduos de aterro até 2031 e a zero aterro até 2071. Na prática, isso significa reduzir progressivamente o volume de lixo enviado a esses depósitos e redirecionar o material para outras formas de tratamento e destinação, um movimento que costuma exigir ampliação da infraestrutura de reciclagem e de processamento de resíduos.\n\nVale um ponto de atenção. A declaração do CEO foi feita publicamente, atribuída diretamente a ele e parte da entidade oficial responsável pelo tema, o que dá peso ao anúncio. Mas até o momento não há decreto ou portaria formal do governo de Abu Dhabi determinando o fechamento de todos os aterros do emirado. O que existe, por ora, é uma meta estratégica plurianual declarada publicamente pela liderança do Tadweer, e não um ato normativo já publicado. Quem acompanha o tema deve seguir as atualizações oficiais do Tadweer para confirmar cada etapa do plano.",
      keyFacts: [
        "O CEO do Tadweer Group, Etienne Petit, declarou ao The National que fechar aterros é a forma mais direta de atingir 80% de desvio de resíduos.",
        "O plano é estimado em cerca de cinco anos.",
        "A meta bate com os números públicos já conhecidos do Tadweer: 80% de desvio de aterro até 2031 e zero aterro até 2071.",
        "Não há, até o momento, decreto ou portaria formal do governo de Abu Dhabi determinando o fechamento de todos os aterros; trata-se de meta estratégica declarada pela entidade oficial de resíduos.",
      ],
      sources: [
      { label: "Tadweer Group (Centro de Gestão de Resíduos de Abu Dhabi)", url: "https://www.tadweer.ae/" },
      { label: "The National", url: "https://www.thenationalnews.com/news/uae/2026/07/17/abu-dhabi-to-close-all-landfill-sites-under-sweeping-waste-overhaul/" },
    ],
    },
    ],
  },

  ee: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Nos EUA, a queda de um ex-astro do basquete estoniano expõe os riscos das fraudes afetivas e financeiras que também miram a diáspora",
      standfirst: "A acusação federal contra Kerr Kriisa, ex-jogador universitário e cidadão estoniano indiciado por fraude eletrônica de US$2,2 milhões, é um lembrete duro de como golpes com identidade falsa e histórias fabricadas podem atingir qualquer comunidade no exterior, inclusive a estoniana.",
      body: "O Departamento de Justiça dos Estados Unidos, pela Procuradoria do Distrito Norte da West Virginia, denunciou Kerr Kriisa, ex-jogador universitário de basquete e cidadão estoniano, por cinco acusações de fraude eletrônica, a chamada wire fraud. Segundo a acusação, entre 2022 e 2 de junho de 2026 ele teria obtido cerca de US$2,2 milhões de várias vítimas usando identidades falsas e alegações fabricadas, entre elas a de que a própria mãe estaria com câncer.\n\nO caso corre na Justiça americana, não na estoniana, e é a autoridade competente para esse fato específico. Ainda assim, ele interessa diretamente a quem vive fora da Estônia, porque ilustra um padrão de golpe que não escolhe nacionalidade nem depende de fronteira: o uso de uma identidade pública, no caso a de um atleta com histórico de destaque universitário, somado a histórias emocionais fabricadas para convencer vítimas a transferir dinheiro.\n\nPara comunidades de imigrantes e expatriados, esse tipo de esquema costuma se infiltrar justamente onde a confiança é mais alta, dentro de grupos de conterrâneos, redes de ex-colegas ou contatos que compartilham a mesma origem. A recomendação prática de sempre vale aqui: desconfiar de pedidos de dinheiro ligados a emergências médicas ou familiares sem verificação independente, checar a identidade de quem pede por canais alternativos e nunca transferir valores sob pressão emocional ou urgência.\n\nO processo ainda está em curso e as acusações, até decisão final da Justiça americana, são alegações formais do Ministério Público, não uma condenação. A WiseHub acompanha o desdobramento do caso pela fonte oficial.",
      tags: ["Estônia", "fraude", "diáspora", "Estados Unidos", "segurança financeira"],
      sources: [
      { label: "U.S. Department of Justice · U.S. Attorney's Office, Northern District of West Virginia", url: "https://www.justice.gov/usao-ndwv/pr/former-college-basketball-player-charged-defrauding-victims-22-million" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Toronto reconhece igreja estoniana como patrimônio histórico da cidade",
      body: "A Prefeitura de Toronto, no Canadá, promulgou em 25 de junho de 2026 o by-law que designa a igreja estoniana St Peter's, na 817 Mount Pleasant Road, como propriedade de valor patrimonial sob o Ontario Heritage Act. A decisão veio depois do Notice of Intention to Designate, emitido em 28 de abril de 2026, e do período de recurso de 30 dias previsto em lei. Construída em 1955 por refugiados estonianos que reconstruíram suas vidas no Canadá após a Segunda Guerra, a igreja passa agora a ter proteção formal contra demolição ou descaracterização.\n\nPara a diáspora estoniana espalhada pelo mundo, o reconhecimento tem um peso simbólico além do jurídico: é o registro oficial de que um espaço erguido por imigrantes carrega valor histórico reconhecido pela cidade que os acolheu. Quem tiver curiosidade pode consultar o registro público de patrimônio de Toronto para ver os detalhes da designação.",
      cta: "Quer saber mais sobre a proteção da igreja St Peter's? O registro completo está disponível no site oficial de patrimônio da Prefeitura de Toronto.",
      sources: [
      { label: "City of Toronto · Heritage Property Search (817 Mount Pleasant Road)", url: "https://secure.toronto.ca/HeritagePreservation/details.do?folderRsn=4173255&propertyRsn=279289" },
      { label: "City of Toronto · Notice of Intention to Designate", url: "https://www.toronto.ca/legdocs/mmis/2026/ph/bgrd/backgroundfile-285142.pdf" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Festival KiKuMu reúne cinema, arte e música na Estônia com espírito anti-algoritmo",
      body: "O KiKuMu, festival estoniano que mistura cinema, arte e música, teve sua segunda edição entre 9 e 12 de julho de 2026 em Jäneda, no interior do país. O evento está listado oficialmente no Visit Estonia, o portal de turismo mantido pela agência estatal EAS (Ettevõtluse ja Innovatsiooni Sihtasutus), o que confirma sua existência, datas e programação. Segundo cobertura da Estonian World, o festival se posiciona conscientemente contra a lógica dos algoritmos, da cultura VIP e do que chama de mau gosto, propondo uma experiência cultural mais direta e menos guiada por tendências digitais.\n\nPara quem vive na Estônia ou pretende visitar o país, o KiKuMu é um bom termômetro da cena cultural independente estoniana, fora do circuito dos grandes festivais comerciais. Fique de olho nas próximas edições pelo canal oficial de turismo do país.",
      cta: "Curtiu a proposta do KiKuMu? Acompanhe as próximas datas no site oficial do Visit Estonia.",
      sources: [
      { label: "Visit Estonia (portal oficial de turismo do Estado)", url: "https://visitestonia.com/en/international-cultural-festival-kikumu" },
    ],
    },
    ],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Toronto designa igreja estoniana St Peter's como propriedade de valor patrimonial",
      standfirst: "By-law promulgado em 25 de junho de 2026 protege formalmente o templo construído em 1955 por refugiados estonianos, marco da presença da comunidade no Canadá.",
      body: "A Prefeitura de Toronto promulgou, em 25 de junho de 2026, o by-law de designação da igreja estoniana St Peter's, localizada na 817 Mount Pleasant Road, como propriedade de valor patrimonial cultural sob o Ontario Heritage Act, Parte IV, Seção 29. A decisão consolida um processo que começou com o Notice of Intention to Designate, publicado em 28 de abril de 2026, e que seguiu o rito legal de um período de recurso de 30 dias antes da promulgação final.\n\nA igreja foi erguida em 1955 por refugiados estonianos que chegaram ao Canadá fugindo da ocupação soviética na Estônia após a Segunda Guerra Mundial. O templo se tornou, ao longo das décadas, um dos pontos de referência da comunidade estoniana em Toronto, funcionando não só como espaço religioso mas também como centro de encontro cultural e social para gerações de imigrantes e seus descendentes.\n\nA designação não é um ato do governo da Estônia, e sim da administração municipal canadense, autoridade competente para decisões de patrimônio histórico dentro de seu território. Na prática, o status protege o imóvel contra demolição, alterações estruturais significativas ou descaracterização sem aprovação prévia da cidade, preservando o edifício como testemunho físico da imigração estoniana no Canadá. O caso está registrado publicamente no sistema de patrimônio de Toronto, disponível para consulta por qualquer interessado.",
      keyFacts: [
        "By-law de designação sob o Ontario Heritage Act (Parte IV, Seção 29) promulgado em 25 de junho de 2026, após o período de recurso de 30 dias.",
        "Notice of Intention to Designate emitido pela Prefeitura de Toronto em 28 de abril de 2026.",
        "Igreja St Peter's, em 817 Mount Pleasant Road, construída em 1955 por refugiados estonianos pós-Segunda Guerra.",
        "Decisão é de autoridade municipal canadense (Toronto), não do governo da Estônia, mas é a autoridade oficial competente para esse fato específico.",
        "Registro público disponível no sistema de patrimônio de Toronto (Heritage Property Search).",
      ],
      sources: [
      { label: "City of Toronto · Heritage Property Search (817 Mount Pleasant Road)", url: "https://secure.toronto.ca/HeritagePreservation/details.do?folderRsn=4173255&propertyRsn=279289" },
      { label: "City of Toronto · Notice of Intention to Designate, 817 Mount Pleasant Road", url: "https://www.toronto.ca/legdocs/mmis/2026/ph/bgrd/backgroundfile-285142.pdf" },
      { label: "City of Toronto Council · Agenda Item 2023.PB5.5", url: "https://secure.toronto.ca/council/agenda-item.do?item=2023.PB5.5" },
    ],
    },
    ],
  },

  hu: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Entre a apuração sobre a Rússia e a dependência do gás russo, a Hungria testa um novo equilíbrio",
      standfirst: "Enquanto o novo governo de Magyar Péter investiga os laços do ex-chanceler com Moscou, dados do Eurostat mostram que o país seguiu como o maior comprador de gás russo por gasoduto da União Europeia no início de 2026.",
      body: "A Hungria vive um momento de contrastes na política externa. De um lado, o governo recém-formado de Magyar Péter, o 60º primeiro-ministro do país, eleito pelo Parlamento em 9 de maio de 2026 após a vitória do partido TISZA nas eleições de abril, anunciou em 16 de julho uma investigação sobre os laços do ex-ministro dos Negócios Estrangeiros, Szijjártó Péter, com a Rússia. De outro, números oficiais mostram que o país segue profundamente conectado à energia russa.\n\nSegundo dados do Eurostat, o órgão estatístico oficial da Comissão Europeia, a Hungria foi a maior compradora de gás natural russo por gasoduto entre os países da União Europeia no período de janeiro a maio de 2026, com cerca de 1,1 bilhão de euros gastos, o equivalente a aproximadamente 46% de todo o valor pago pelo bloco em gás russo por gasoduto no período. Os números aparecem de forma consistente em reportagem da TASS, que cita diretamente a base de dados do Eurostat, e em cobertura independente da Euronews sobre as importações de gás russo pela União Europeia.\n\nA investigação anunciada por Magyar Péter, na coletiva oficial do porta-voz do governo em 16 de julho, ainda está em estágio inicial. O próprio premiê usou a expressão tudomásom szerint, pelo que eu sei, ao mencionar o tema, o que indica apuração em curso, sem conclusão ou provas públicas apresentadas até o momento. A cobertura de veículos húngaros independentes como Telex, 444 e Index registrou o anúncio com citações praticamente idênticas do primeiro-ministro.\n\nNo plano diplomático, a vice-primeira-ministra e ministra dos Negócios Estrangeiros, Orbán Anita, se reuniu em Budapeste com Franco Dal Mas, secretário-geral da Iniciativa Centro-Europeia, a InCE. O cargo de Orbán Anita é confirmado no site oficial do governo húngaro, e o encontro foi coberto por duas agências de notícias independentes da Itália, a ANSA, agência oficial italiana, e a Agenzia Nova, que descrevem os mesmos temas discutidos, entre eles os Bálcãs Ocidentais, a situação da Ucrânia e da Moldávia, e a cooperação em justiça, segurança e conectividade. Não localizamos um comunicado dedicado sobre esse encontro específico no site do governo húngaro, mas a convergência das duas fontes italianas independentes dá base para tratar o episódio como confirmado.\n\nO quadro que emerge é o de um país que, ao mesmo tempo, revisa publicamente o histórico de relações da gestão anterior com Moscou e mantém, na prática, um dos maiores volumes de compra de energia russa da União Europeia. Não há, pelas fontes oficiais disponíveis, uma ligação direta estabelecida entre a investigação sobre Szijjártó Péter e os dados de importação de gás, que dizem respeito a contratos e infraestrutura energética do país, não a decisões pessoais de um ex-ministro. Mas a coincidência de datas ajuda a ilustrar o tamanho do desafio de reposicionamento que a nova liderança húngara enfrenta, entre o discurso de maior integração europeia e uma matriz energética que segue amarrada ao fornecedor russo.",
      tags: ["Hungria", "política externa", "energia", "União Europeia", "Rússia"],
      sources: [
      { label: "Eurostat · nrg_ti_gas (Imports of natural gas by partner country)", url: "https://ec.europa.eu/eurostat/databrowser/view/nrg_ti_gas/default/table?lang=en" },
      { label: "TASS", url: "https://tass.com/economy/2161185" },
      { label: "Euronews · My Europe", url: "https://www.euronews.com/my-europe/2026/07/01/russian-gas-imports-rise-despite-eu-phase-out" },
      { label: "Magyarország Kormánya (kormany.hu) · Magyar Péter, primeiro-ministro", url: "https://kormany.hu/hirek/magyar-peter-magyarorszag-miniszterelnoke" },
      { label: "Telex", url: "https://telex.hu/belfold/2026/07/16/szijjarto-peter-oroszorszag-kapcsolat-vizsgalat-magyar-peter" },
      { label: "444.hu", url: "https://444.hu/2026/07/16/magyar-peter-ugy-tudja-vizsgalat-indult-szijjarto-orosz-kapcsolatai-miatt" },
      { label: "Magyarország Kormánya (kormany.hu) · Külügyminisztérium (Orbán Anita)", url: "https://kormany.hu/kormanyzat/kulugyminiszter" },
      { label: "ANSA", url: "https://www.ansa.it/nuova_europa/it/notizie/rubriche/politica/2026/07/16/dal-mas-ince-lintegrazione-europea-inizia-con-la-cooperazione_89805ce9-0a98-45b8-ad08-dad5d12388da.html" },
      { label: "Agenzia Nova", url: "https://www.agenzianova.com/news/balcani-ince-rafforza-asse-con-ungheria-al-centro-porto-trieste/" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Budapeste reforça policiamento e cria serviço de rua para dependência química",
      body: "O prefeito de Budapeste, Karácsony Gergely, se reuniu em 16 de julho de 2026 com o novo chefe da Polícia da capital, Baricska Norbert Tamás, nomeado pela Assembleia Geral do município em 3 de junho. No encontro, Karácsony apresentou um plano de segurança pública para a cidade, com mais patrulhamento nas ruas, um grupo de coordenação do espaço público e a criação de um serviço de rua voltado ao atendimento de pessoas em situação de dependência química.\n\nO anúncio veio em resposta à preocupação crescente de moradores com a segurança na capital húngara, segundo a cobertura da imprensa local. Para quem já mora ou planeja morar em Budapeste, vale acompanhar como as medidas serão implementadas bairro a bairro, já que detalhes de execução, como efetivo, cronograma e áreas prioritárias, ainda devem ser divulgados pela prefeitura.",
      cta: "Mora em Budapeste ou planeja se mudar para lá? Acompanhe os próximos anúncios da prefeitura sobre o plano de segurança pelos canais oficiais do município.",
      sources: [
      { label: "Budapest.hu", url: "https://budapest.hu/hirek/2026/06/03/ezekkel-az-eloterjesztesekkel-es-temakkal-foglalkozik-a-juniusi-kozgyules" },
      { label: "444.hu", url: "https://444.hu/2026/07/16/karacsony-gergely-a-fovaros-romlo-kozbiztonsagarol-targyalt-az-uj-budapesti-rendorfokapitannyal-addiktologiai-utcai-szolgalatot-indit-a-fovaros" },
      { label: "HVG", url: "https://hvg.hu/itthon/20260716_addiktologiai-utcai-szolgalat-kozbiztonsag-budapest-rendorseg-karacsony-gergely" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Nível do Danúbio bate recorde negativo na Hungria e acende alerta de seca",
      body: "O sistema oficial de monitoramento hidrológico do governo húngaro, o hydroinfo.hu, registrava em 16 de julho de 2026 o nível do Danúbio em 25 centímetros na estação de Baja e em menos 11 centímetros em Esztergom. Em Baja, o dado supera o recorde negativo anterior, de 27 centímetros, registrado em 2018, conforme confirmado por veículos húngaros como Telex, Portfolio.hu, HVG e Baon.\n\nA seca prolongada preocupa autoridades e moradores das regiões ribeirinhas, com possíveis reflexos no abastecimento de água e na navegação no rio. Quem mora perto do Danúbio ou depende de serviços ligados a ele deve acompanhar os boletins oficiais do hydroinfo.hu e as orientações das autoridades locais nos próximos dias.",
      cta: "Vive perto do Danúbio? Consulte o hydroinfo.hu regularmente para acompanhar a evolução do nível da água e eventuais alertas.",
      sources: [
      { label: "Hydroinfo.hu", url: "https://www.hydroinfo.hu/tables/dunelotH.html" },
      { label: "Telex", url: "https://telex.hu/belfold/2026/07/16/duna-baja-vizallas-aszaly-negativ-rekord" },
      { label: "Portfolio.hu", url: "https://www.portfolio.hu/gazdasag/20260716/rekordalacsonyra-csokkent-a-vizallas-a-dunan-850128" },
    ],
    },
    ],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Primeiro-ministro Magyar Péter anuncia investigação sobre laços de Szijjártó Péter com a Rússia e reforço policial em Budapeste",
      standfirst: "Na coletiva oficial do governo húngaro, em 16 de julho, o premiê confirmou que há apuração em andamento sobre o ex-chanceler e anunciou um mês de operação policial reforçada na capital.",
      body: "Magyar Péter, o 60º primeiro-ministro da Hungria, eleito pelo Parlamento em 9 de maio de 2026 depois de o partido TISZA vencer as eleições de abril, confirmou na coletiva oficial do porta-voz do governo, em 16 de julho de 2026, que há uma investigação em andamento sobre os laços do ex-ministro dos Negócios Estrangeiros, Szijjártó Péter, com a Rússia. O anúncio aconteceu logo após uma reunião de gabinete e foi coberto por veículos húngaros independentes como Telex, 444, Index e Economx, com citações praticamente idênticas do premiê.\n\nMagyar usou a expressão tudomásom szerint, que significa pelo que eu sei, ao falar do assunto. Isso confirma que existe apuração em curso, mas não significa que haja conclusão ou provas públicas apresentadas até o momento. Ou seja, o que está oficialmente confirmado é o teor do anúncio do governo, não um resultado final da investigação.\n\nNa mesma coletiva, o primeiro-ministro também anunciou o reforço do policiamento em Budapeste por um mês, resposta a preocupações crescentes com a segurança pública na capital. A medida foi anunciada em nível de governo central, no mesmo dia em que o cargo oficial de Magyar, e a origem de sua eleição em maio, seguem atestados no site do governo húngaro.",
      keyFacts: [
        "Magyar Péter é o 60º primeiro-ministro da Hungria, eleito pelo Parlamento em 9 de maio de 2026, após o TISZA vencer as eleições de abril de 2026 (fonte: kormany.hu).",
        "Em coletiva oficial de 16 de julho de 2026, após reunião de gabinete, o governo confirmou investigação em andamento sobre os laços do ex-chanceler Szijjártó Péter com a Rússia.",
        "Magyar afirmou tudomásom szerint (pelo que eu sei); há apuração em curso, mas sem conclusão ou provas públicas apresentadas até agora.",
        "O mesmo anúncio incluiu reforço do policiamento em Budapeste por um mês, direcionado à segurança pública na capital.",
      ],
      sources: [
      { label: "Magyarország Kormánya (kormany.hu)", url: "https://kormany.hu/hirek/magyar-peter-magyarorszag-miniszterelnoke" },
      { label: "Telex", url: "https://telex.hu/belfold/2026/07/16/szijjarto-peter-oroszorszag-kapcsolat-vizsgalat-magyar-peter" },
      { label: "444.hu", url: "https://444.hu/2026/07/16/magyar-peter-ugy-tudja-vizsgalat-indult-szijjarto-orosz-kapcsolatai-miatt" },
      { label: "Index.hu", url: "https://index.hu/belfold/2026/07/16/kormanyszovivoi-tajekoztato-bejelentes-kormany-magyar-peter-tisza-part/magyar-peter-szerint-vizsgaljak-szijjarto-peter-es-oroszorszag-kapcsolatat/" },
    ],
    },
    ],
  },

  ro: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Romênia atrai capital: investimento em baterias e estreia na bolsa espanhola marcam a semana econômica",
      standfirst: "Um parque eólico na Dobrogea ganha sistema de armazenamento em baterias de 87,4 milhões de lei e uma gigante romena das telecomunicações estreia sua subsidiária espanhola na bolsa de Madri, dois sinais que reforçam o apetite por investimento ligado à Romênia.",
      body: "Duas notícias divulgadas quase ao mesmo tempo, em meados de julho de 2026, ajudam a compor um retrato do momento econômico romeno. O país segue atraindo capital para infraestrutura de energia limpa e, ao mesmo tempo, vendo empresas nacionais ganharem espaço em mercados financeiros internacionais.\n\nNo parque eólico de Corugea, na comuna de Casimcea, condado de Tulcea, a PPC Renewables Romania vai construir um sistema de armazenamento de energia em baterias, conhecido pela sigla BESS, com 40 MW de potência e 80 MWh de capacidade. Segundo a AGERPRES, a agência de notícias do Estado romeno, o investimento supera 87,4 milhões de lei. Parte do financiamento, cerca de 9,9 milhões de lei, deve vir do Fondul pentru Modernizare, o Fundo para Modernização, dentro da linha de apoio a capacidades de armazenamento em baterias publicada pelo Ministério da Energia romeno. Esse tipo de investimento importa porque baterias de grande escala ajudam a estabilizar a rede elétrica diante da geração eólica intermitente, um ponto sensível para um país que vem expandindo rápido sua capacidade renovável.\n\nNo mesmo período, a Digi Communications, gigante romena de telecomunicações, avançou num movimento que chamou atenção do mercado financeiro europeu, a listagem de sua subsidiária espanhola, a Digi Spain Telecom, nas bolsas de Madri, Barcelona, Bilbao e Valência, sob o ticker DIGIS, a partir de 16 de julho de 2026. A operação, um IPO de aproximadamente 287 milhões de euros, foi formalmente comunicada pela própria Digi à Bursa de Valori București, endereçada à Autoridade de Supervisão Financeira romena, a ASF, como manda a regra de disclosure de empresas listadas. A negociação passou a ocorrer no âmbito do BME, o operador oficial das bolsas espanholas.\n\nTomados em conjunto, os dois episódios não formam uma tendência estatística, mas indicam algo relevante para quem acompanha o ambiente de negócios romeno. Capital estrangeiro segue entrando em infraestrutura de energia no país, enquanto empresas romenas ganham reconhecimento em mercados financeiros fora de suas fronteiras. Para investidores, profissionais de energia ou quem avalia oportunidades de carreira ligadas a esses setores na Romênia, ambos os movimentos valem acompanhamento, sempre com checagem direta nas fontes oficiais e nos comunicados regulatórios antes de qualquer decisão.",
      tags: ["Romênia", "Energia", "Investimento", "Mercado financeiro"],
      sources: [
      { label: "AGERPRES · Parcul eolian Corugea va fi dotat cu sistem de stocare a energiei în baterii", url: "https://agerpres.ro/economic/2026/07/15/parcul-eolian-corugea-va-fi-dotat-cu-un-sistem-de-stocare-a-energiei-in-baterii-investitia-depaseste--1576314" },
      { label: "Ministerul Energiei · Programa de apoio a capacidades de armazenamento em baterias", url: "https://energie.gov.ro/sprijinirea-investitiilor-in-dezvoltarea-capacitatilor-de-stocare-a-energiei-electrice-baterii-cu-finantare-din-fondul-pentru-modernizare-program-cheie-1-surse-regenerabile-de-energie-si/" },
      { label: "Bursa de Valori București · Comunicado Digi Spain (intenção de listagem)", url: "https://m.bvb.ro/infocont/infocont26/DIGI_20260629082530_20260629-DIGI-Digi-Spain-announcement-of-intention-to-float.pdf" },
      { label: "BME · Bolsas y Mercados Españoles", url: "https://www.bolsasymercados.es/en/bme-exchange.html" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Romênia estreia plataforma oficial para centralizar visto de trabalho de estrangeiros",
      body: "A Romênia colocou em fase de testes, em julho de 2026, a WorkinRomania.gov.ro, nova plataforma oficial do Ministério do Interior, operada pelo Inspetorado Geral para Imigrações, o IGI, destinada a unificar o recrutamento e os trâmites de visto de trabalhadores estrangeiros. A base legal é a Ordonanța de Urgență nr. 32/2026, publicada no Monitorul Oficial em 27 de abril de 2026, que trata do acesso de estrangeiros ao mercado de trabalho romeno.\n\nA entrada em vigor plena está prevista para 8 de agosto de 2026, com a criação dos novos vistos D/AM1 e D/AM2 e uma cota de 90 mil autorizações de trabalho para 2026. Para quem já está de olho numa vaga na Romênia, vale acompanhar de perto a implantação da plataforma nas próximas semanas e confirmar os requisitos direto na fonte oficial antes de iniciar qualquer processo.",
      cta: "Pretende trabalhar na Romênia? Acompanhe a entrada em vigor da WorkinRomania.gov.ro em 8 de agosto e prepare a documentação com antecedência.",
      sources: [
      { label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/en/" },
      { label: "WorkinRomania.gov.ro", url: "https://workinromania.gov.ro/" },
      { label: "Portal Legislativ · OUG nr. 32/2026", url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/309832" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Festival da Rua Armênia celebra 10ª edição em Bucareste com entrada gratuita",
      body: "A União dos Armênios da Romênia e o Centro Cultural Armeno, em parceria com o Departamento para Relações Interétnicas do Governo romeno, confirmaram a 10ª edição do Festivalul Strada Armenească, entre 31 de julho e 2 de agosto de 2026, na Grădina Botanică Dimitrie Brândză, em Bucareste. Segundo comunicado oficial divulgado pela AGERPRES, a agência de notícias do Estado romeno, o evento reúne concertos gratuitos e atividades culturais, com acesso ao jardim botânico custando 10 lei.\n\nPara quem mora em Bucareste ou está de passagem no fim de julho, é uma boa chance de conhecer de perto a comunidade armênia local e sua herança cultural na Romênia.",
      cta: "Confira a programação completa no site oficial do festival antes de planejar sua visita.",
      sources: [
      { label: "AGERPRES · Comunicat de presă, Festivalul Strada Armenească", url: "https://agerpres.ro/comunicate/2026/07/15/comunicat-de-presa---festivalul-strada-armeneasca--1576285" },
      { label: "Strada Armenească (site oficial)", url: "https://www.stradaarmeneasca.ro/" },
    ],
    },
    ],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Romênia lança WorkinRomania.gov.ro para centralizar recrutamento e visto de trabalhador estrangeiro",
      standfirst: "Nova plataforma do Ministério do Interior está em fase de testes desde julho, com entrada plena em vigor marcada para 8 de agosto e cota de 90 mil autorizações de trabalho em 2026.",
      body: "A Romênia deu um passo concreto na modernização do processo de contratação de mão de obra estrangeira. A WorkinRomania.gov.ro, nova plataforma oficial operada pelo Ministério do Interior por meio do Inspetorado Geral para Imigrações, o IGI (Inspectoratul General pentru Imigrări), começou a funcionar em fase de testes em julho de 2026 e tem como objetivo centralizar num único canal digital o recrutamento e os trâmites de visto de trabalho para estrangeiros que buscam emprego no país.\n\nA base legal da iniciativa é a Ordonanța de Urgență nr. 32/2026, que trata do acesso de estrangeiros ao mercado de trabalho romeno. O texto foi publicado no Monitorul Oficial nr. 335 em 27 de abril de 2026 e está disponível no Portal Legislativ, o portal oficial de legislação da Romênia. A entrada plena em vigor da nova sistemática está prevista para 8 de agosto de 2026.\n\nEntre as principais mudanças estão a criação de duas novas categorias de visto, o D/AM1 e o D/AM2, voltadas especificamente a trabalhadores estrangeiros, além da definição de uma cota de 90 mil autorizações de trabalho para estrangeiros ao longo de 2026. Na prática, isso sinaliza que a Romênia está tentando dar mais previsibilidade e agilidade a um processo que historicamente passava por múltiplos órgãos e etapas manuais.\n\nPara quem pretende trabalhar na Romênia, ou para empregadores que buscam contratar estrangeiros, o recomendável é acompanhar de perto o período de testes da plataforma nas próximas semanas e confirmar prazos, documentos exigidos e o funcionamento dos novos vistos diretamente nos canais oficiais, a WorkinRomania.gov.ro e o IGI, antes de iniciar qualquer processo.",
      keyFacts: [
        "WorkinRomania.gov.ro é domínio .gov.ro operado pelo Ministério do Interior via IGI (Inspetorado Geral para Imigrações), em fase de testes desde julho de 2026.",
        "Base legal: Ordonanța de Urgență nr. 32/2026, publicada no Monitorul Oficial nr. 335 em 27 de abril de 2026.",
        "Entrada plena em vigor prevista para 8 de agosto de 2026.",
        "Cria os vistos D/AM1 e D/AM2, com cota de 90 mil autorizações de trabalho para estrangeiros em 2026.",
      ],
      sources: [
      { label: "IGI · Inspectoratul General pentru Imigrări", url: "https://igi.mai.gov.ro/en/" },
      { label: "WorkinRomania.gov.ro", url: "https://workinromania.gov.ro/" },
      { label: "Portal Legislativ · OUG nr. 32/2026", url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/309832" },
    ],
    },
    ],
  },

  ca: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Canadá acelera vistos de trabalho e nominações provinciais, mas trava a porta da reunificação familiar",
      standfirst: "Dados oficiais divulgados em julho mostram dois movimentos opostos na imigração canadense: processamento mais rápido para trabalho e nomeações provinciais, e uma pausa na porta de entrada de pais e avós.",
      body: "Julho de 2026 deixou um retrato de duas velocidades na imigração canadense. De um lado, números oficiais mostram o sistema ficando mais rápido para quem já está dentro do fluxo econômico. Do outro, o Canadá fechou, ao menos por ora, a porta de um dos programas mais aguardados pela diáspora, o de patrocínio de pais e avós.\n\nNo lado da aceleração, a página oficial de estatísticas de processamento do Saskatchewan Immigrant Nominee Program, o SINP, atualizada em 14 de julho, mostra que o trimestre de abril a junho de 2026 trouxe melhora real nos prazos. A maioria das categorias do programa caiu para cerca de duas semanas de processamento, e o estado já emitiu 2.628 das 4.761 nominações previstas na cota de 2026, mais da metade da meta anual cumprida a meio do ano.\n\nO mesmo movimento aparece em nível federal. O IRCC atualiza semanalmente os tempos de processamento de residência temporária, e a atualização mais recente, de 15 de julho, mostra o tempo de permissão de trabalho solicitada dentro do Canadá caindo para 129 dias, o menor patamar registrado em 2026. Para quem já está no país trabalhando ou estudando e precisa renovar ou trocar de permissão, isso significa menos tempo de espera com o status pendente.\n\nJá no lado da freada, o aviso oficial do IRCC de 15 de julho suspendeu, até novo aviso, o recebimento de novos formulários de interesse e convites do Parents and Grandparents Program. A fila já formada, cerca de 60.500 aplicações, continua sendo processada, com meta de até 15.000 aprovações neste ano, mas ninguém novo entra no sistema por enquanto.\n\nHá ainda um terceiro movimento, mais silencioso, que aponta para um mercado de imigração mais regulado. Desde 15 de julho, está em vigor o regulamento que cria um fundo de compensação para clientes lesados por consultores de imigração e cidadania, publicado na Canada Gazette Parte II como SOR/DORS-68. A regra permite reclamar perdas causadas por ato desonesto cometido a partir de 23 de novembro de 2021, data em que o College of Immigration and Citizenship Consultants, o CICC, virou o regulador oficial da categoria. Isso quer dizer que o governo canadense segue investindo em proteção ao consumidor no mercado de assessoria migratória, mesmo enquanto aperta o programa de reunificação familiar.\n\nJuntando os três pontos, a leitura de mercado é a seguinte: o Canadá parece estar priorizando fluidez no sistema econômico, seja via nomeação provincial, seja via permissão de trabalho, ao mesmo tempo em que trata a reunificação de pais e avós como uma via que precisa de pausa para reorganização de capacidade. Essa é uma interpretação com base nos dados oficiais disponíveis, não uma declaração de política do governo canadense, que não vinculou publicamente os dois movimentos entre si. Para qualquer decisão prática, o caminho seguro é sempre confirmar prazos e regras diretamente nas páginas oficiais do IRCC e dos programas provinciais antes de agir.",
      tags: ["Canadá", "IRCC", "SINP", "PGP", "vistos de trabalho", "imigração provincial"],
      sources: [
      { label: "Government of Saskatchewan · SINP Processing Statistics", url: "https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/sinp-processing-statistics" },
      { label: "IRCC · Check current processing times (canada.ca)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" },
      { label: "IRCC/Canada.ca · Canada takes steps to responsibly manage the Parents and Grandparents Program (aviso oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html" },
      { label: "Canada Gazette, Parte II · SOR/DORS-68 (College of Immigration and Citizenship Consultants Regulations)", url: "https://gazette.gc.ca/rp-pr/p2/2026/2026-05-06/html/sor-dors68-eng.html" },
      { label: "IRCC/Canada.ca · Canada strengthens regulation of immigration and citizenship consultants", url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/canada-strengthens-regulation-of-immigration-and-citizenship-consultants.html" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Novo piso salarial do LMIA passa a valer nesta sexta-feira (17/07)",
      body: "O Employment and Social Development Canada, o ESDC, atualizou em 10 de julho de 2026 os limiares de salário mediano usados para classificar vagas de LMIA como stream de alto ou baixo salário. A partir de hoje, 17 de julho, toda nova aplicação submetida passa a ser avaliada pelos novos valores, provinciais e territoriais. Pedidos enviados antes de hoje continuam seguindo o limiar anterior.\n\nA classificação importa porque muda as regras do jogo. Vagas no stream de alto salário podem gerar permissões de trabalho de até três anos e exigem apenas quatro semanas de anúncio da vaga, enquanto o stream de baixo salário limita a permissão a um ano e pede oito semanas de anúncio. Quem está no meio de um processo de LMIA, seja como empregador ou candidato, deve conferir hoje mesmo se o salário da vaga ficou acima ou abaixo do novo piso do seu estado ou província antes de enviar qualquer aplicação.",
      cta: "Confira o novo limiar salarial da sua província no site do ESDC antes de submeter ou aceitar uma vaga com LMIA.",
      sources: [
      { label: "ESDC/Canada.ca · Hire a temporary foreign worker in a high-wage or low-wage position (median wage)", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage.html" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Nova Scotia abre janela única para quem já trabalha na província com permissão vencendo em 2026",
      body: "O Nova Scotia Office of Immigration publicou uma expansão pontual das prioridades de seleção do Nova Scotia Nominee Program (NSNP) e do Atlantic Immigration Program (AIP), mirando trabalhadores que já estão na província e têm uma Expression of Interest ativa até 30 de junho de 2026, com permissão de trabalho vencendo em 2026 ou antes. Os critérios cobrem ocupações classificadas nos níveis TEER 0 a 4 (NSNP) e TEER 0 a 5 (AIP), vagas fora da região de Halifax e faixas salariais mínimas de 20 dólares por hora ou 27 dólares por hora, dependendo da categoria.\n\nÉ uma janela desenhada especificamente para quem já está estabelecido na província e corre risco de perder o status de trabalho neste ano. Vale conferir se o seu perfil, ocupação e permissão atual se encaixam nos critérios antes que a prioridade expire.",
      cta: "Trabalha na Nova Scotia com permissão vencendo em 2026? Confira os critérios de setor, região e salário no Live in Nova Scotia antes de perder a janela.",
      sources: [
      { label: "Nova Scotia Office of Immigration · Live in NS (atualização oficial 2026)", url: "https://liveinnovascotia.com/resources/update-nova-scotia-nominee-program-and-atlantic-immigration-program-2026-selection" },
    ],
    },
    {
      publishedAt: D2,
      title: "Canadá faz o maior sorteio em francês desde março: 5.000 convites e corte CRS 420",
      body: `O IRCC realizou em 9 de julho de 2026 um sorteio do Express Entry voltado à categoria de proficiência em língua francesa. Foram emitidos 5.000 convites para candidatura, com nota de corte CRS de 420 pontos, segundo a página oficial de rodadas do IRCC. Foi o maior sorteio da categoria de francês desde março, e o corte de 420 está entre os mais acessíveis do ano.\n\nPara quem fala francês e já tem perfil no Express Entry, é uma janela relevante, porque as rodadas por categoria costumam ter cortes bem menores que os sorteios gerais. Vale conferir sua pontuação, manter a documentação em dia e acompanhar as próximas rodadas na fonte oficial antes de qualquer decisão.`,
      cta: "Fala francês e tem perfil no Express Entry? Confira sua pontuação e prepare a documentação antes da próxima rodada.",
      sources: [{ label: "IRCC · Express Entry: Rounds of invitations", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html" }],
    }, {
      publishedAt: D,
      title: "Express Entry abre julho com o menor corte de PNP do ano",
      body: `O IRCC realizou no dia 6 de julho o primeiro sorteio do Express Entry deste mês, voltado ao Programa de Nomeação Provincial (PNP). Foram emitidos 534 convites para candidatura, com nota de corte CRS em 708 pontos, a menor pontuação de corte registrada para sorteios de PNP em 2026.\n\nPara quem busca residência permanente pela via provincial, o dado é importante. Uma nota de corte mais baixa pode ampliar as chances de candidatos que já possuem uma nomeação provincial, já que esse aval agrega 600 pontos ao perfil no Express Entry. Vale acompanhar as próximas rodadas e confirmar os números na fonte oficial antes de tomar qualquer decisão.`,
      cta: "Confira a nota de corte oficial e avalie seu perfil no Express Entry antes da próxima rodada.",
      sources: [{ label: "CIC News", url: "https://www.cicnews.com/2026/07/first-express-entry-draw-of-july-sees-lowest-pnp-cut-off-score-this-year-0777251.html" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Canadá pausa novos pedidos de patrocínio de pais e avós até novo aviso",
      standfirst: "Aviso oficial do IRCC publicado em 15 de julho suspende o recebimento de formulários de interesse e convites do Parents and Grandparents Program, mas mantém o processamento da fila já existente.",
      body: "O Immigration, Refugees and Citizenship Canada, o IRCC, publicou em 15 de julho de 2026 um aviso oficial suspendendo, até novo aviso, o recebimento de novos formulários de interesse em patrocinar e de convites do Parents and Grandparents Program, o PGP, a via pela qual cidadãos e residentes permanentes canadenses trazem pais e avós para viver no país como residentes permanentes.\n\nA medida não afeta quem já está na fila. Segundo o próprio aviso, o IRCC vai manter o processamento das cerca de 60.500 aplicações já recebidas, com a meta de aprovar até 15.000 residências permanentes pelo programa ao longo de 2026. Ou seja, quem já enviou o pedido segue no sistema, mas ninguém novo entra na fila enquanto a pausa estiver em vigor.\n\nVale um esclarecimento sobre a cobertura do tema. A manchete que circulou na imprensa especializada, descrevendo a medida como o Canadá fechando a porta para pais e avós, é mais dramática do que a linguagem usada pelo próprio IRCC, que fala em pausa e em até novo aviso, não em encerramento definitivo do programa. O fato central, porém, é real e verificável na fonte oficial, o recebimento de novos formulários está mesmo suspenso.\n\nPara famílias que planejavam enviar uma expressão de interesse este ano, o recado é de espera. Não há um cronograma anunciado para a reabertura, então a orientação é acompanhar os canais oficiais do IRCC antes de fazer qualquer planejamento de viagem ou de documentação baseado no PGP.",
      keyFacts: [
        "Aviso oficial do IRCC publicado em 15 de julho de 2026 suspende o recebimento de novos formulários de interesse e convites do PGP até novo aviso.",
        "As cerca de 60.500 aplicações já na fila continuam sendo processadas normalmente.",
        "Meta oficial é aprovar até 15.000 residências permanentes pelo programa em 2026.",
        "Não há data anunciada para a reabertura do recebimento de novos formulários.",
      ],
      sources: [
      { label: "IRCC/Canada.ca · Canada takes steps to responsibly manage the Parents and Grandparents Program (aviso oficial)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html" },
    ],
    },
    {
      publishedAt: D2,
      headline: "Canadá convida 5.000 candidatos francófonos no Express Entry, com corte CRS de 420",
      standfirst: "Sorteio de 9 de julho, o maior da categoria de língua francesa desde março, teve corte mais acessível que as rodadas gerais.",
      body: `O Immigration, Refugees and Citizenship Canada, o IRCC, realizou em 9 de julho de 2026 um sorteio do Express Entry voltado à categoria de proficiência em língua francesa. Segundo a página oficial de rodadas de convites do IRCC, foram emitidos 5.000 convites para candidatura, os ITAs, com nota de corte no sistema CRS de 420 pontos.\n\nO número chama a atenção por dois motivos. Foi o maior sorteio da categoria de francês desde março de 2026, e a nota de corte de 420 está entre as mais acessíveis do ano, bem abaixo dos cortes típicos das rodadas gerais. Isso abre uma janela concreta para candidatos francófonos que já estão no pool do Express Entry.\n\nPara quem planeja imigrar pela via da língua francesa, o recado prático é manter o perfil atualizado, a comprovação de idioma válida e a documentação organizada, de olho nas próximas rodadas. Confirme sempre os números diretamente na fonte oficial do IRCC antes de tomar qualquer decisão.`,
      keyFacts: [
        "Sorteio realizado em 9 de julho de 2026, na categoria de proficiência em língua francesa.",
        "5.000 convites para candidatura (ITA) emitidos, segundo a página oficial de rodadas do IRCC.",
        "Nota de corte CRS de 420 pontos, entre as mais acessíveis do ano.",
        "Foi o maior sorteio da categoria de francês desde março de 2026; rodadas por categoria costumam ter cortes menores que as gerais.",
      ],
      sources: [{ label: "IRCC · Express Entry: Rounds of invitations", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html" }],
    }, {
      publishedAt: D,
      headline: "Canadá abre julho com sorteio de PNP e corte CRS de 708, o menor do ano",
      standfirst: "IRCC emitiu 534 convites no primeiro sorteio do Express Entry de julho, com a menor pontuação de corte para o Programa de Nomeação Provincial em 2026.",
      body: `O Immigration, Refugees and Citizenship Canada, o IRCC, realizou em 6 de julho de 2026 o primeiro sorteio do Express Entry do mês. A rodada foi direcionada a candidatos do Programa de Nomeação Provincial, o PNP, e emitiu 534 convites para candidatura, conhecidos como ITA.\n\nO destaque foi a nota de corte no sistema de classificação CRS, que ficou em 708 pontos. Segundo a CIC News, essa foi a menor pontuação de corte registrada em sorteios de PNP ao longo de 2026, o que sinaliza uma janela relevante para candidatos que já contam com uma nomeação provincial em seus perfis.\n\nNo Express Entry, uma nomeação provincial adiciona 600 pontos ao candidato, o que costuma elevar bastante a pontuação total. Por isso, cortes específicos de PNP tendem a ser mais altos que os sorteios gerais. Para quem planeja imigrar pela via provincial, vale monitorar as próximas rodadas e verificar os números diretamente na fonte oficial antes de agir.`,
      keyFacts: [
        "Sorteio realizado em 6 de julho de 2026, o primeiro do Express Entry no mês.",
        "534 convites para candidatura (ITA) emitidos, na categoria do Programa de Nomeação Provincial (PNP).",
        "Nota de corte CRS de 708 pontos, a menor para sorteios de PNP em 2026.",
        "Uma nomeação provincial soma 600 pontos ao perfil no Express Entry.",
      ],
      sources: [{ label: "CIC News", url: "https://www.cicnews.com/2026/07/first-express-entry-draw-of-july-sees-lowest-pnp-cut-off-score-this-year-0777251.html" }],
    }],
  },

  au: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Austrália mantém 185 mil vagas na migração permanente e revela sistema de níveis no visto 189",
      standfirst: "Orçamento federal confirma o teto do Programa de Migração Permanente para 2026-27, enquanto um documento liberado por pedido de acesso à informação expõe como o governo distribui vagas do visto 189 por níveis de ocupação. Juntos, os sinais apontam para uma seleção mais estruturada da migração qualificada.",
      body: "O Orçamento Federal 2026-27 da Austrália, anunciado em 12 de maio de 2026, manteve o Programa de Migração Permanente em 185 mil vagas, com cerca de 70% delas reservadas ao fluxo de habilidades (skill stream). O número e a divisão aproximada de 70% para habilidades e 30% para família são citados de forma consistente por múltiplas consultorias e escritórios de imigração independentes que referenciam diretamente o anúncio do orçamento. A página oficial do Department of Home Affairs sobre os níveis de planejamento do programa, a \"Permanent Migration Program planning levels\", trata exatamente desse tema, mas não conseguimos abrir seu conteúdo, porque o domínio bloqueou nossas tentativas automatizadas de acesso.\n\nEsse teto de 185 mil vagas, porém, não é distribuído de forma uniforme. Um documento liberado pelo Department of Home Affairs via pedido de acesso à informação (processo FA 26/01/00545) mostra que os convites do visto Subclass 189, o Skilled Independent, seguem um sistema de quatro níveis, com teto de vagas por ocupação para o ano fiscal 2025-26. Chama atenção o fato de essa estrutura não ter sido anunciada publicamente como política nova, ela só veio a público porque alguém solicitou o documento pela via do acesso à informação. Múltiplos escritórios de migração independentes descrevem a mesma arquitetura de quatro tiers, com piso mínimo de 500 vagas por ocupação, embora não tenhamos conseguido ler o PDF original na íntegra.\n\nO terceiro dado que compõe esse quadro é o aumento do TSMIT, o piso salarial mínimo exigido para vistos de trabalho qualificado, para AUD 79.423 a partir de 1º de julho de 2026, segundo a Fragomen e outras fontes profissionais convergentes. Um teto geral de vagas mantido, um sistema de níveis por ocupação que só veio à tona por pedido de transparência, e uma barra salarial mais alta para qualificar ao fluxo de habilidades formam, juntos, um retrato de seletividade crescente. É importante deixar claro que essa leitura é uma conexão editorial da WiseHub entre três fatos confirmados de forma independente, não uma síntese anunciada pelo próprio governo australiano.\n\nPara quem pretende aplicar ao visto 189 ou a qualquer outro visto do fluxo de habilidades, entender o teto geral do programa, o nível da própria ocupação dentro dos quatro tiers e o novo piso salarial ajuda a planejar a candidatura com mais realismo. A recomendação é sempre consultar um agente de migração registrado e confirmar cada número nas fontes oficiais antes de tomar decisões.",
      tags: ["Austrália", "Visto 189", "Migração qualificada", "Orçamento federal"],
      sources: [
      { label: "Department of Home Affairs · Permanent Migration Program planning levels", url: "https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels" },
      { label: "VisaEnvoy · Federal Budget 2026-27: Key Migration and Visa Changes for Australia", url: "https://visaenvoy.com/federal-budget/" },
      { label: "Department of Home Affairs · FOI Disclosure Log 2026 (FA 26/01/00545)", url: "https://www.homeaffairs.gov.au/foi/files/2026/fa-260100545-document-released.PDF" },
      { label: "VisaEnvoy · New 4-Tier Invitation System for 189 Visa", url: "https://visaenvoy.com/new-4-tier-invitation-system-189-visa/" },
      { label: "Fragomen · Australia: Fees Increase for Certain Visa Types and Citizenship Applications Effective July 1, 2026", url: "https://www.fragomen.com/insights/australia-fees-increase-for-certain-visa-types-and-citizenship-applications-effective-july-1-2026.html" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Visto 485 (Temporary Graduate) tem taxa dobrada na Austrália",
      body: "A Austrália confirmou, no Federal Register of Legislation, o \"Migration Amendment (Temporary Graduate Visa Application Charge) Regulations 2026\" (F2026L00163), registrado em 28 de fevereiro de 2026. O novo valor da taxa de solicitação do visto 485, o Temporary Graduate, passou a valer a partir de 1º de março de 2026.\n\nSegundo a VisaEnvoy e outros escritórios de migração, o novo valor para o requerente principal é de AUD 4.600, o dobro dos AUD 2.300 cobrados antes. Não conseguimos confirmar esses números exatos diretamente no texto do regulamento, mas eles são citados de forma consistente por dezenas de fontes profissionais independentes. Quem pretende se candidatar ao 485 deve reservar um orçamento maior e confirmar o valor atualizado na fonte oficial antes de dar entrada no pedido.",
      cta: "Vai aplicar para o visto 485? Confirme o valor atualizado da taxa direto na fonte oficial antes de reservar seu orçamento.",
      sources: [
      { label: "Federal Register of Legislation · Migration Amendment (Temporary Graduate Visa Application Charge) Regulations 2026", url: "https://www.legislation.gov.au/F2026L00163/asmade/text" },
      { label: "VisaEnvoy · Immigration News", url: "https://visaenvoy.com/485-visa-tr-application-fees/" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Documento oficial revela sistema de 4 níveis nos convites do visto 189",
      body: "Um documento liberado pelo próprio Department of Home Affairs da Austrália, por meio de um pedido de acesso à informação (processo FA 26/01/00545), mostra que os convites do visto Subclass 189, o Skilled Independent, passaram a seguir um sistema de quatro níveis, com teto de vagas por ocupação para o ano fiscal 2025-26. A medida não foi anunciada publicamente como política nova, ela veio à tona através do pedido de acesso à informação.\n\nNão conseguimos abrir o PDF completo, porque o domínio bloqueia acesso automatizado, mas vários escritórios de migração independentes descrevem a mesma estrutura de quatro níveis, com piso mínimo de 500 vagas por ocupação. Para quem mira o 189, o recado é conferir com um agente de migração registrado em qual nível a sua ocupação se encaixa antes de manifestar interesse.",
      cta: "Pretende aplicar para o visto 189? Descubra em qual dos 4 níveis sua ocupação está antes de manifestar interesse (EOI).",
      sources: [
      { label: "Department of Home Affairs · FOI Disclosure Log 2026 (FA 26/01/00545)", url: "https://www.homeaffairs.gov.au/foi/files/2026/fa-260100545-document-released.PDF" },
      { label: "VisaEnvoy · Immigration News", url: "https://visaenvoy.com/new-4-tier-invitation-system-189-visa/" },
    ],
    },
    {
      publishedAt: D,
      title: "Austrália muda regras de visto a partir de 1º de julho",
      body: `A Austrália colocou em vigor, no dia 1º de julho de 2026, um pacote de mudanças que atinge quem planeja morar, trabalhar ou estudar no país. Segundo a VisaEnvoy, as alterações trazem taxas mais altas de solicitação, novos limites de renda para vistos qualificados e atualizações no programa Working Holiday.\n\nNa prática, isso significa que orçamentos montados no começo do ano podem já estar defasados. Quem pretende aplicar nos próximos meses precisa refazer as contas com os valores atuais e conferir se ainda cumpre os critérios de renda exigidos antes de dar entrada no processo.`,
      cta: "Confira os novos valores e limites antes de iniciar qualquer aplicação de visto para a Austrália.",
      sources: [{ label: "VisaEnvoy · Immigration News", url: "https://visaenvoy.com/australian-visa-changes-from-1-july-2026-higher-fees-new-income-thresholds-and-working-holiday-updates/" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Austrália oficializa novas regras do visto 417 e taxas sobem a partir de 1º de julho",
      standfirst: "Instrumento confirmado no Federal Register recadastra o Working Holiday e muda o critério de idade dos programas de férias-trabalho, enquanto taxas de visto e o piso salarial mínimo (TSMIT) sobem no início do ano fiscal australiano.",
      body: "O governo australiano registrou, em 30 de junho de 2026, o \"Migration (Arrangements for Subclass 417 (Working Holiday) Visa) Instrument 2026\" (F2026L00878), confirmado por leitura direta no Federal Register of Legislation, que trata dos arranjos administrativos do visto Subclass 417, o Working Holiday. Fontes profissionais independentes citam de forma consistente um instrumento irmão para o visto Subclass 462, o Work and Holiday, com o mesmo padrão e a mesma data, mas não conseguimos localizar e abrir essa página específica diretamente no site do governo.\n\nUm dos pontos técnicos dessa leva de mudanças é o critério de idade dos dois vistos. A partir de 1º de julho de 2026, a idade do candidato passou a ser avaliada no momento do pedido, e não mais no momento da concessão do visto, como acontecia antes. A mudança está amparada pelo instrumento do 417 já confirmado e é reforçada por referências consistentes de múltiplas fontes jurídicas independentes a uma \"Migration Amendment (Working Holiday Maker Age Criteria) Regulations 2026\".\n\nTambém a partir de 1º de julho de 2026, entrou em vigor um aumento de cerca de 25% na maioria das taxas de solicitação de visto na Austrália, junto com uma elevação do TSMIT, o piso salarial mínimo exigido para vistos de trabalho qualificado, para AUD 79.423. Os números são reportados de forma consistente por dezenas de fontes profissionais, entre elas a Fragomen, banca global de imigração. O site oficial do Home Affairs bloqueou nossas tentativas automatizadas de acessar a página de tarifas, então esses valores específicos ainda devem ser confirmados na fonte oficial antes de qualquer decisão.\n\nPara quem já está no meio de um processo de Working Holiday ou de outro visto australiano, o recado prático é recalcular custos com os valores atualizados, reconferir os critérios de idade e de renda, e confirmar cada detalhe direto no site do governo australiano ou com um agente de migração registrado antes de aplicar.",
      keyFacts: [
        "Migration (Arrangements for Subclass 417 (Working Holiday) Visa) Instrument 2026 registrado em 30 de junho de 2026 (F2026L00878), confirmado no Federal Register of Legislation.",
        "Instrumento irmão para o visto Subclass 462 (Work and Holiday) citado com o mesmo padrão por fontes independentes, mas não confirmado diretamente por nós na fonte oficial.",
        "A partir de 1º de julho de 2026, a idade do candidato aos vistos 417 e 462 passou a ser avaliada no momento do pedido, não mais no momento da concessão.",
        "Taxas de visto sobem cerca de 25% e o TSMIT passa para AUD 79.423 a partir de 1º de julho de 2026, segundo fontes de mercado como a Fragomen; a página oficial de tarifas não pôde ser acessada diretamente por nós.",
      ],
      sources: [
      { label: "Federal Register of Legislation · Migration (Arrangements for Subclass 417 (Working Holiday) Visa) Instrument 2026", url: "https://www.legislation.gov.au/F2026L00878/latest/text" },
      { label: "Migration Alliance · Immigration Daily News (Subclass 462)", url: "https://migrationalliance.com.au/immigration-daily-news/entry/2026-06-migration-arrangements-for-subclass-462-work-and-holiday-visa-instrument-2026.html" },
      { label: "Migration Alliance · Immigration Daily News (Working Holiday Maker: mudanças técnicas)", url: "https://migrationalliance.com.au/immigration-daily-news/entry/2026-06-working-holiday-maker-program-technical-amendments-from-1-july-2026.html" },
      { label: "Fragomen · Australia: Fees Increase for Certain Visa Types and Citizenship Applications Effective July 1, 2026", url: "https://www.fragomen.com/insights/australia-fees-increase-for-certain-visa-types-and-citizenship-applications-effective-july-1-2026.html" },
    ],
    },
    {
      publishedAt: D,
      headline: "Austrália atualiza taxas, limites de renda e Working Holiday em 1º de julho",
      standfirst: "Novo pacote de regras entrou em vigor no início do ano fiscal australiano e afeta vistos qualificados, cidadania e o programa de férias-trabalho.",
      body: `A Austrália iniciou o ano fiscal de 2026 com um conjunto de mudanças migratórias que passou a valer em 1º de julho de 2026. De acordo com a VisaEnvoy, o pacote inclui taxas de solicitação mais altas, novos limites de renda e ajustes no programa Working Holiday, temas que impactam diretamente quem planeja imigrar.\n\nA Migration Alliance detalha parte dessas medidas. Foram publicados novos instrumentos para os vistos de trabalho e férias, a Subclasse 462 (Work and Holiday) e a Subclasse 417 (Working Holiday), que revogam e substituem as regras anteriores, além de alterações técnicas nos critérios de idade do programa. Um regulamento separado, o Home Affairs Legislation Amendment (2026 Measures No. 1), promoveu mudanças em taxas de cidadania, encargos de solicitação de visto e migração qualificada.\n\nComo os valores exatos podem variar conforme o visto e o perfil do candidato, o recomendável é consultar as fontes oficiais e um agente registrado antes de aplicar. Refazer o cálculo de custos e reconferir os limites de renda evita surpresas no meio do processo.`,
      keyFacts: [
        "As mudanças entraram em vigor em 1º de julho de 2026, início do ano fiscal australiano.",
        "Vistos Working Holiday (Subclasse 417) e Work and Holiday (Subclasse 462) ganharam novos instrumentos que substituem as regras anteriores, com alterações técnicas nos critérios de idade.",
        "O Home Affairs Legislation Amendment (2026 Measures No. 1) alterou taxas de cidadania, encargos de solicitação de visto e regras de migração qualificada.",
      ],
      sources: [{ label: "VisaEnvoy · Immigration News", url: "https://visaenvoy.com/australian-visa-changes-from-1-july-2026-higher-fees-new-income-thresholds-and-working-holiday-updates/" }],
    }],
  },

  uk: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Tribunais britânicos reforçam linha dura da imigração em série de decisões neste verão",
      standfirst: "Três julgamentos recentes, da cidadania para refugiados à deportação e ao reagrupamento familiar, mostram as cortes do Reino Unido validando políticas restritivas do Home Office.",
      body: "O verão europeu de 2026 tem sido marcado, no Reino Unido, por uma sequência de decisões judiciais que caminham na mesma direção, a de validar políticas restritivas do Home Office em áreas sensíveis da imigração. Em pouco mais de duas semanas, cortes britânicas confirmaram a recusa de cidadania a refugiados que entraram irregularmente no país, negaram provimento a um recurso contra deportação baseado em intenção futura de reatar vínculo com filho, e rejeitaram integralmente um desafio judicial à suspensão da rota de reagrupamento familiar para refugiados. Juntas, as três decisões desenham um padrão que vale a pena entender.\n\nA primeira veio da Administrative Court, em julgamento de 30 de junho de 2026 no caso R (Alibiari) v SSHD. O tribunal manteve a política do Home Office, prevista na versão 6 do guia Good character: caseworker guidance, de tratar a entrada irregular no Reino Unido como indicativo de falta de boa conduta para fins de naturalização, mesmo quando o requerente é um refugiado reconhecido. Os argumentos de discriminação levantados pelo requerente foram rejeitados. Na prática, o precedente reforça que ter status de refugiado reconhecido não neutraliza, por si só, o peso que o Home Office dá à forma como a pessoa entrou no país ao avaliar pedidos de cidadania.\n\nDias depois, em 8 de julho de 2026, a Court of Appeal (Civil Division) julgou o caso SSHD v Collins Cuthbert Lewis. A corte decidiu que o mero desejo ou intenção futura de retomar contato com um filho, sem vínculo familiar atual (o apelado estava sem contato com a criança havia mais de seis anos), não configura circunstâncias muito convincentes nem efeito desproporcionalmente severo capazes de impedir uma deportação, segundo o artigo 117C(6) da Nationality, Immigration and Asylum Act 2002. O caso reforça que, nesse tipo de defesa contra deportação, o que pesa é o vínculo familiar comprovado e atual, não a promessa de reconstruí-lo no futuro.\n\nPor fim, em 7 de julho de 2026, a High Court rejeitou, em todos os fundamentos alegados, irracionalidade, o dever do artigo 55 sobre bem-estar de crianças, a Equality Act 2010 e os artigos 14 e 8 da Convenção Europeia de Direitos Humanos, o pedido de revisão judicial movido pela organização Safe Passage International e três requerentes individuais contra a suspensão da rota Appendix Family Reunion (Sponsors with Protection). Essa rota, suspensa pelo Home Secretary desde 1º de setembro de 2025, permitia que refugiados no Reino Unido patrocinassem a vinda de familiares. Com a decisão do juiz Coppel, a suspensão segue valendo, e representantes legais das famílias já sinalizaram intenção de recorrer.\n\nO que essas três decisões têm em comum é o grau de deferência que as cortes britânicas têm dado às políticas de imigração e asilo definidas pelo Home Office ao longo de 2026, mesmo quando essas políticas afetam diretamente população refugiada e famílias separadas. Para quem tem processo de cidadania, defesa contra deportação ou pedido de reagrupamento familiar em andamento no Reino Unido, o recado prático é redobrar a atenção à qualidade da prova documental e do vínculo atual, e não presumir que boas intenções ou o status de refugiado bastam para reverter uma decisão do Home Office. Como os casos de deportação e reagrupamento ainda podem ser objeto de recurso, vale acompanhar os próximos desdobramentos junto às fontes oficiais e com orientação jurídica especializada.",
      tags: ["Reino Unido", "Tribunais", "Refugiados", "Deportação", "Cidadania"],
      sources: [
      { label: "Free Movement · Home Office policy on entering UK irregularly", url: "https://freemovement.org.uk/home-office-policy-enter-uk-irregularly/" },
      { label: "Find Case Law (The National Archives) · R (Alibiari) v SSHD [2026] EWHC 1623 (Admin)", url: "https://caselaw.nationalarchives.gov.uk/ewhc/admin/2026/1623" },
      { label: "Free Movement · Intention to resume contact not enough to stop deportation", url: "https://freemovement.org.uk/intention-resume-contact-not-enough-deport/" },
      { label: "Find Case Law (The National Archives) · SSHD v Collins Cuthbert Lewis [2026] EWCA Civ 879", url: "https://caselaw.nationalarchives.gov.uk/ewca/civ/2026/879" },
      { label: "Free Movement · Family reunion suspension challenge dismissed", url: "https://freemovement.org.uk/family-reunion-suspension-challenge-dismissed/" },
      { label: "Find Case Law (The National Archives) · Safe Passage International & Ors v SSHD [2026] EWHC 1705 (Admin)", url: "https://caselaw.nationalarchives.gov.uk/ewhc/admin/2026/1705" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Reino Unido lança processamento prioritário para pedidos de cidadania britânica",
      body: "O Home Office atualizou, em 6 de julho de 2026, o guia oficial de atendimento prioritário e lançou um serviço pago de processamento acelerado para pedidos de cidadania britânica. Segundo o próprio guia do governo, a taxa fica em torno de £500 e a meta é decidir o pedido em até 30 dias úteis após a biometria, uma redução expressiva frente ao prazo padrão, que pode chegar a 6 meses.\n\nO mesmo guia oficial faz um alerta importante: pedidos que exigem checagens adicionais, como verificação de identidade ou segurança nacional, podem ficar de fora do prazo prioritário, mesmo com a taxa paga. Antes de optar pelo serviço, vale confirmar se o seu caso se enquadra nos critérios de elegibilidade descritos no guia do Home Office.",
      cta: "Pensa em acelerar seu pedido de cidadania? Confira os critérios de elegibilidade no guia oficial antes de pagar a taxa de prioridade.",
      sources: [
      { label: "Home Office · Priority treatment requests: nationality procedure guidance (GOV.UK)", url: "https://www.gov.uk/government/publications/priority-treatment-requests-nationality-procedure-guidance/priority-treatment-requests-accessible" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Tribunal britânico anula 12 pedidos de revisão judicial movidos por esquema fraudulento",
      body: "O Upper Tribunal (Imigração e Asilo), no serviço oficial de decisões de tribunais do governo britânico, declarou nulos 12 processos de revisão judicial movidos em nome de 27 requerentes que, segundo a decisão, nem sequer sabiam da existência das ações. O caso consolidado, liderado pelo processo JR-2024-LON-001654, identificou o consultor paquistanês Globe Path como responsável por abrir os pedidos usando documentos falsos ou roubados, incluindo cartas médicas forjadas que o Chelsea and Westminster Hospital confirmou serem falsas, além de endereços de e-mail sob controle do próprio consultor.\n\nO caso é um alerta direto para quem busca ajuda com processos de imigração no Reino Unido. Antes de contratar qualquer consultoria, vale confirmar se ela é regulamentada, nunca ceder documentos originais ou acesso a e-mail para terceiros, e verificar diretamente com o tribunal se algum processo foi aberto em seu nome sem autorização.",
      cta: "Contratou uma consultoria de imigração no Reino Unido? Confirme se ela é regulamentada antes de entregar qualquer documento.",
      sources: [
      { label: "Tribunal Decisions (GOV.UK/UTIAC) · JR-2024-LON-001654 & Ors", url: "https://tribunalsdecisions.service.gov.uk/utiac/jr-2024-lon-001654-ors" },
    ],
    },
    {
      publishedAt: D2,
      title: "Reino Unido publica novo pacote de mudanças nas regras de imigração (HC 259)",
      body: `Em 9 de julho de 2026, o governo do Reino Unido publicou um novo Statement of Changes to the Immigration Rules, o documento HC 259, com ajustes que passam a valer em 30 de julho e 3 de agosto de 2026. As mudanças atingem vários caminhos, entre eles a rota de graduados (Graduate route), o reagrupamento familiar (Appendix FM), as regras de residência para filhos e o processo de entrevista de asilo.\n\nSão, na maioria, ajustes técnicos e de procedimento, não uma reforma radical. Ainda assim, quem tem processo em andamento ou pretende aplicar por uma dessas rotas deve revisar os requisitos atualizados antes de enviar o pedido. Um ponto para evitar confusão: o aumento muito comentado do prazo de assentamento permanente, o ILR, de 5 para 10 anos, ainda é proposta em discussão e não entrou nessas regras.`,
      cta: "Tem processo por uma rota afetada? Revise os requisitos atualizados no GOV.UK antes de aplicar.",
      sources: [{ label: "GOV.UK · Immigration Rules: statement of changes", url: "https://www.gov.uk/government/collections/immigration-rules-statement-of-changes" }],
    }, {
      publishedAt: D,
      title: "Reino Unido publica o Projeto de Lei de Imigração e Asilo 2026",
      body: `O governo britânico apresentou ao Parlamento, em 30 de junho de 2026, o texto do Projeto de Lei de Imigração e Asilo 2026, anunciado antes no Discurso do Rei em 13 de maio. Segundo o Free Movement, é a quinta lei ligada à imigração em cinco sessões parlamentares, sinal de quanto o tema segue em movimento no Reino Unido.\n\nO projeto agora inicia sua tramitação, que costuma ser longa, então nada muda de imediato. Para quem planeja morar, trabalhar ou estudar no Reino Unido, o momento é de acompanhar o texto de perto, porque as regras podem ser ajustadas ao longo do debate no Parlamento.`,
      cta: "Acompanhe a tramitação pela fonte oficial antes de fechar qualquer plano de mudança para o Reino Unido.",
      sources: [{ label: "Free Movement", url: "https://freemovement.org.uk/whats-in-the-immigration-and-asylum-bill-2026/" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Reino Unido estende checagem de direito ao trabalho para além do vínculo empregatício tradicional a partir de outubro",
      standfirst: "Novo código de prática do Home Office amplia a obrigação de verificação a trabalhadores de agência, subcontratados e da economia gig, com entrada em vigor confirmada para 1º de outubro de 2026.",
      body: "O Home Office publicou um projeto de Código de Prática, o draft Code of Practice on preventing illegal working: Right to Work Scheme, que amplia o alcance das checagens obrigatórias de direito ao trabalho no Reino Unido. Até aqui, o regime de verificação e de penalidade civil por trabalho ilegal se concentrava no vínculo empregatício tradicional, entre empregador e empregado direto. A partir de 1º de outubro de 2026, data confirmada no próprio documento oficial, a obrigação passa a alcançar também trabalhadores de agência, subcontratados e quem atua pela economia gig, plataformas de entrega e transporte por aplicativo, por exemplo.\n\nA mudança implementa a secção 48 do Border Security, Asylum and Immigration Act 2025, publicada em legislation.gov.uk, e fecha uma lacuna que preocupava o próprio governo, arranjos de trabalho fora do modelo tradicional de contratação vinham escapando das checagens de direito ao trabalho, mesmo quando envolviam mão de obra estrangeira sem autorização válida. Segundo o código de prática, negócios que usam esse tipo de força de trabalho passam a ter responsabilidade direta de verificar a documentação, com checagem digital feita por provedor registrado.\n\nPara empresas, o recado é claro, a lista de quem precisa fazer a checagem de direito ao trabalho cresce, e o risco de penalidade civil por trabalho ilegal também. Para trabalhadores estrangeiros que atuam via agência, subcontratação ou plataformas digitais, vale se antecipar e garantir que a documentação de status migratório esteja em ordem antes de outubro, já que a nova exigência pode afetar diretamente a continuidade do trabalho.\n\nComo o documento ainda está em formato de rascunho, os detalhes finais de implementação podem sofrer ajustes até a entrada em vigor. A recomendação é acompanhar a publicação da versão final no GOV.UK e, em caso de dúvida sobre o próprio status, confirmar diretamente com o Home Office ou um profissional habilitado.",
      keyFacts: [
        "Draft Code of Practice publicado pelo Home Office no GOV.UK estende o regime de right to work e de penalidade civil.",
        "Passa a abranger trabalhadores de agência, subcontratados e da economia gig, não só o vínculo empregatício tradicional.",
        "Entrada em vigor confirmada para 1º de outubro de 2026.",
        "Implementa a secção 48 do Border Security, Asylum and Immigration Act 2025 (legislation.gov.uk).",
      ],
      sources: [
      { label: "Home Office · Draft Code of practice on preventing illegal working: Right to Work Scheme (GOV.UK)", url: "https://assets.publishing.service.gov.uk/media/6a44fb41732d8e7ce5f53a47/Code_of_practice_on_preventing_illegal_working_-_Right_to_Work_Scheme_for_employers__updated_.pdf" },
      { label: "legislation.gov.uk · Border Security, Asylum and Immigration Act 2025, secção 48", url: "https://www.legislation.gov.uk/ukpga/2025/31/section/48/enacted" },
    ],
    },
    {
      publishedAt: D2,
      headline: "Reino Unido publica o Statement of Changes HC 259, com efeitos a partir de 30 de julho",
      standfirst: "Pacote publicado em 9 de julho ajusta Graduate route, reagrupamento familiar e entrevista de asilo, com vigência em 30 de julho e 3 de agosto.",
      body: `O Reino Unido publicou, em 9 de julho de 2026, um novo Statement of Changes to the Immigration Rules, identificado como HC 259. O documento reúne ajustes nas regras de imigração com vigência escalonada em 30 de julho e 3 de agosto de 2026, e atinge várias rotas ao mesmo tempo.\n\nEntre os pontos afetados estão a Graduate route, voltada a recém-formados, o Appendix FM, que trata do reagrupamento familiar, as regras de residência aplicáveis a filhos e o processo de entrevista de asilo. Na avaliação geral, trata-se de um conjunto de mudanças majoritariamente técnicas e de procedimento, e não de uma reforma ampla das regras.\n\nUm alerta importante para evitar desinformação: o aumento, muito comentado, do prazo para o assentamento permanente, o Indefinite Leave to Remain, de 5 para 10 anos, ainda é uma proposta em discussão e não faz parte do HC 259. Quem pretende aplicar por uma das rotas afetadas deve revisar os requisitos atualizados na fonte oficial antes de enviar o pedido, porque pequenos detalhes de elegibilidade mudaram.`,
      keyFacts: [
        "Statement of Changes HC 259 publicado em 9 de julho de 2026, com vigência em 30 de julho e 3 de agosto de 2026.",
        "Atinge a Graduate route, o Appendix FM (reagrupamento familiar), regras de residência de filhos e a entrevista de asilo.",
        "São majoritariamente ajustes técnicos e de procedimento, não uma reforma radical.",
        "O aumento do prazo de assentamento (ILR) de 5 para 10 anos ainda é proposta e não entrou no HC 259.",
      ],
      sources: [{ label: "GOV.UK · Immigration Rules: statement of changes", url: "https://www.gov.uk/government/collections/immigration-rules-statement-of-changes" }],
    }, {
      publishedAt: D,
      headline: "Projeto de Lei de Imigração e Asilo 2026 chega ao Parlamento britânico",
      standfirst: "O texto que reorganiza regras de imigração e asilo no Reino Unido foi apresentado em 30 de junho e começa agora sua tramitação.",
      body: `O Reino Unido deu um passo formal na revisão de suas regras migratórias. O Projeto de Lei de Imigração e Asilo 2026 foi apresentado ao Parlamento em 30 de junho de 2026, depois de ter sido anunciado no Discurso do Rei em 13 de maio. A informação é do Free Movement, que descreve a medida como a quinta lei ligada à imigração em cinco sessões parlamentares consecutivas.\n\nDe acordo com a análise do escritório DavidsonMorris, o projeto propõe reformas em três frentes, a lei de imigração, a de asilo e a de escravidão moderna. Como o próprio nome de projeto de lei indica, trata-se ainda de um texto em discussão, sujeito a alterações durante o processo legislativo. Nada entra em vigor enquanto a tramitação não se encerra.\n\nPara quem tem planos de imigrar, trabalhar ou estudar no Reino Unido, o recado é de atenção e cautela. Vale acompanhar o andamento do projeto pelas fontes oficiais e especializadas antes de tomar decisões definitivas, já que os detalhes ainda podem mudar. A WiseHub seguirá o tema e trará as atualizações relevantes.`,
      keyFacts: [
        "Apresentado ao Parlamento em 30 de junho de 2026, após anúncio no Discurso do Rei em 13 de maio.",
        "Abrange reformas em imigração, asilo e escravidão moderna, segundo o DavidsonMorris.",
        "É a quinta lei ligada à imigração em cinco sessões parlamentares, conforme o Free Movement.",
        "Ainda é um projeto em tramitação, então nada muda de imediato e o texto pode ser alterado.",
      ],
      sources: [{ label: "Free Movement", url: "https://freemovement.org.uk/whats-in-the-immigration-and-asylum-bill-2026/" }],
    }],
  },

  ie: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Pedidos de cidadania irlandesa por americanos sobem 63%: o que os números confirmam e o que é só manchete",
      standfirst: "Dados oficiais do Foreign Births Register mostram um salto real nos pedidos de cidadãos dos EUA. A onda de manchetes que fala em 'Trumpugees' fugindo em massa, porém, é leitura editorial, não uma causa atestada pelo governo irlandês.",
      body: "Um número andou repetido em manchetes de veículos irlandeses e britânicos nas últimas semanas, o salto de 63% nos pedidos de cidadania irlandesa por descendência feitos por cidadãos dos Estados Unidos. O dado vem do Foreign Births Register, o registro oficial mantido pelo Department of Foreign Affairs da Irlanda, e mostra que os pedidos passaram de 11.601 em 2024 pra 18.910 em 2025.\n\nO número resiste a uma checagem cruzada. A Newsweek publicou o mesmo salto citando 'dados oficiais do Foreign Births Register da Irlanda compartilhados com a Newsweek', com os valores idênticos. E, segundo reportagem que cita o Financial Times, o próprio jornal descreveu os números como 'dados oficiais compartilhados com o FT' e apontou que o total de 2025 é o maior nível já registrado desde o início do cadastro digital do FBR, em 2013. Ou seja, não é apenas um pico isolado de um ano, é um recorde histórico da série.\n\nFoi em cima desse número real que uma sequência de veículos, entre eles Irish Star, Belfast Live, Irish Mirror e Dublin Live, construiu manchetes bem mais dramáticas. Termos como 'Trumpugees', numa fusão de Trump com refugee, e frases como 'passaporte europeu de plano B' viraram o mote das reportagens, atribuindo o aumento à fuga de americanos das políticas do governo Trump. Essa leitura aparece sustentada, nas próprias matérias, pela avaliação de uma advogada de imigração citada nos textos, que descreve a motivação dos seus clientes, e não por qualquer declaração oficial do governo irlandês sobre por que os pedidos aumentaram.\n\nVale separar as duas camadas. O crescimento de 63% nos pedidos é fato confirmado, com respaldo em dado oficial e verificação cruzada independente. Já o motivo específico, americanos fugindo em massa de decisões políticas nos Estados Unidos, é interpretação do noticiário e de profissionais do setor jurídico, plausível diante do momento político amplamente discutido noutros contextos, mas que o governo irlandês não confirmou nem atribuiu oficialmente como causa.\n\nO pano de fundo prático segue o mesmo de sempre pra quem tem ascendência irlandesa fora do país, o Foreign Births Register é o canal oficial pra formalizar a cidadania por descendência, e qualquer decisão de aplicar deve passar pela checagem dos critérios diretamente com o Department of Foreign Affairs. A WiseHub segue de olho nesse movimento, mas trata os números com o rigor que eles merecem, o dado é real, a narrativa em torno dele é discussão editorial.",
      tags: ["Irlanda", "Cidadania", "Foreign Births Register", "Estados Unidos"],
      sources: [
      { label: "Department of Foreign Affairs (Irlanda) · Foreign Births Register", url: "https://www.gov.ie/en/department-of-foreign-affairs/services/register-a-foreign-birth/" },
      { label: "Newsweek · confirma os números oficiais do Foreign Births Register", url: "https://www.newsweek.com/more-americans-looking-toward-ireland-for-plan-b-12118156" },
      { label: "Sinnott Solicitors · republicação da matéria do Financial Times (não acessada diretamente, paywall)", url: "https://sinnott.ie/american-applications-for-irish-citizenship/" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Irlanda cria novo esquema de transição pra ucranianos com proteção temporária",
      body: "O Department of Justice, Home Affairs and Migration da Irlanda anunciou, em maio de 2026, um novo caminho de residência pra quem vive no país sob proteção temporária concedida por causa da guerra na Ucrânia. O chamado Temporary Protection Transition Scheme concede uma permissão em base Stamp 4, válida por até dois anos e renovável por novos períodos de dois anos, com o tempo de permanência contando pra naturalização.\n\nPra entrar no esquema é preciso comprovar um ano de residência sob proteção temporária e pelo menos seis meses de emprego ou trabalho autônomo com salário mínimo de €29.432, além de não estar morando em alojamento fornecido pelo Estado. As candidaturas têm abertura prevista pra setembro de 2026, segundo o comunicado oficial assinado pelos ministros Jim O'Callaghan e Colm Brophy.",
      cta: "Já vive na Irlanda sob proteção temporária? Comece agora a reunir os comprovantes de residência e de emprego, porque as candidaturas abrem em setembro.",
      sources: [
      { label: "Department of Justice, Home Affairs and Migration (gov.ie) · comunicado oficial", url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/press-releases/minister-for-justice-home-affairs-and-migration-jim-ocallaghan-and-minister-of-state-for-migration-colm-brophy-secure-government-approval-for-new-measures-in-relation-to-ukrainian-citizens-with-temporary-protection-status/" },
      { label: "gov.ie · coleção oficial \"A New Permission\"", url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/collections/a-new-permission-en/" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Irlanda eleva o piso salarial de todas as categorias de Employment Permit a partir de março de 2026",
      body: "O Department of Enterprise, Tourism and Employment da Irlanda confirmou um novo patamar de salário mínimo pra todas as categorias do Employment Permit, a autorização de trabalho pra profissionais de fora do Espaço Econômico Europeu, com vigência a partir de 1º de março de 2026. O General Employment Permit passa de €34.000 pra €36.605 por ano, o Critical Skills Employment Permit sobe de €38.000 pra €40.904, e os patamares reduzidos usados em setores como agricultura e saúde vão de €30.000 pra €32.691.\n\nA mudança faz parte do Employment Permits Roadmap, um plano de reajuste gradual anunciado pelo governo irlandês. Pra quem está negociando uma proposta de emprego na Irlanda, o recado é direto, o salário oferecido precisa acompanhar esses novos pisos pra que o visto seja aprovado.",
      cta: "Recebeu proposta de trabalho na Irlanda? Confira se o salário já está de acordo com os novos pisos antes de aceitar ou iniciar o processo de visto.",
      sources: [
      { label: "gov.ie · Department of Enterprise, Tourism and Employment (DETE), comunicado oficial", url: "https://www.gov.ie/en/department-of-enterprise-tourism-and-employment/press-releases/government-unveils-roadmap-for-gradual-increase-in-employment-permit-salary-thresholds/" },
      { label: "enterprise.gov.ie · Employment Permits Minimum Annual Remuneration (PDF oficial)", url: "https://enterprise.gov.ie/en/publications/publication-files/employment-permits-minimum-annual-remuneration-outcome-of-the-roadmap-review-2025.pdf" },
    ],
    },
    {
      publishedAt: D,
      title: "Irlanda alerta sobre filas maiores na renovação online da autorização de residência",
      body: `O Serviço de Imigração da Irlanda publicou em 30 de junho de 2026 uma atualização sobre os prazos da renovação online da autorização de residência. Segundo o órgão, o tempo entre o envio do pedido de renovação e o início do processamento está mais longo, algo que pode frustrar quem já mora, trabalha ou estuda no país e precisa manter sua permissão em dia.\n\nA Immigration Service Delivery afirma que está buscando maneiras de reduzir essas filas. Para quem vive na Irlanda, a orientação prática é planejar a renovação com antecedência e não deixar para a última hora, já que a demora no processamento pode afetar a validade da sua autorização enquanto o pedido está na fila.`,
      cta: "Programe sua renovação com folga e acompanhe o prazo oficial diretamente no site do Serviço de Imigração da Irlanda.",
      sources: [{ label: "Irish Immigration Service", url: "https://www.irishimmigration.ie/information-on-online-renewal-timelines/" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Irlanda lança esquema de transição pra ucranianos com proteção temporária, e candidaturas abrem em setembro",
      standfirst: "Novo Temporary Protection Transition Scheme dá base Stamp 4 renovável, com tempo contando pra naturalização, mas exige um ano de residência, seis meses de trabalho remunerado e salário mínimo de €29.432.",
      body: "O governo da Irlanda formalizou um novo caminho de residência pra pessoas que vivem no país sob proteção temporária concedida em razão da guerra na Ucrânia. O anúncio partiu do Department of Justice, Home Affairs and Migration em maio de 2026, com aprovação assinada pelo ministro Jim O'Callaghan e pelo ministro de Estado pra Migração, Colm Brophy.\n\nO novo Temporary Protection Transition Scheme concede uma permissão em base Stamp 4, o mesmo tipo de carimbo usado em outras autorizações de residência de longo prazo na Irlanda. A validade inicial é de até dois anos, com possibilidade de renovação por novos períodos de dois anos, e o tempo de permanência sob esse esquema passa a contar pra fins de naturalização, o que representa um avanço em relação ao status de proteção temporária, que não gerava esse tipo de contagem.\n\nA elegibilidade, porém, não é automática. O governo exige que o requerente tenha completado pelo menos um ano de residência sob proteção temporária e comprove seis meses de emprego ou trabalho autônomo com salário mínimo de €29.432. Também é preciso não estar morando em alojamento fornecido pelo Estado no momento do pedido, condição que direciona o esquema a quem já conseguiu se estabelecer de forma independente no país.\n\nSegundo o comunicado oficial, as candidaturas ao esquema devem abrir em setembro de 2026. Até lá, o próprio governo mantém uma coleção de páginas oficiais, chamada 'A New Permission', reunindo orientações sobre a transição do status de proteção temporária pra outras formas de permissão. Quem se enquadra no perfil deve acompanhar essa página e confirmar cada requisito diretamente na fonte oficial antes de organizar a documentação.",
      keyFacts: [
        "Anunciado pelo Department of Justice, Home Affairs and Migration em maio de 2026, pelos ministros Jim O'Callaghan e Colm Brophy.",
        "Nova permissão batizada de Temporary Protection Transition Scheme, concedida em base Stamp 4.",
        "Validade inicial de até dois anos, renovável por novos períodos de dois anos; o tempo conta pra naturalização.",
        "Exige um ano de residência sob proteção temporária e seis meses de emprego ou trabalho autônomo com salário mínimo de €29.432, sem estar em alojamento estatal.",
        "Candidaturas com abertura prevista pra setembro de 2026.",
      ],
      sources: [
      { label: "Department of Justice, Home Affairs and Migration (gov.ie) · comunicado oficial", url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/press-releases/minister-for-justice-home-affairs-and-migration-jim-ocallaghan-and-minister-of-state-for-migration-colm-brophy-secure-government-approval-for-new-measures-in-relation-to-ukrainian-citizens-with-temporary-protection-status/" },
      { label: "gov.ie · coleção oficial \"A New Permission\"", url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/collections/a-new-permission-en/" },
    ],
    },
    {
      publishedAt: D,
      headline: "Renovação online de residência na Irlanda está com prazos mais longos",
      standfirst: "O Serviço de Imigração da Irlanda reconheceu atrasos maiores no processamento das renovações online e diz estar trabalhando para reduzir as filas.",
      body: `Em comunicado publicado em 30 de junho de 2026, a Immigration Service Delivery, órgão do governo irlandês responsável pela imigração, informou que os prazos atuais da renovação online da autorização de residência estão mais extensos. O intervalo entre o momento em que o pedido de renovação é enviado e o momento em que ele efetivamente entra em processamento aumentou, o que, segundo o próprio órgão, pode ser frustrante para os requerentes.\n\nO comunicado afirma que a Immigration Service Delivery está explorando todas as alternativas para reduzir esses tempos de espera. O texto oficial não detalha um novo prazo fixo, portanto quem depende da renovação deve considerar que o processamento pode levar mais tempo do que em períodos anteriores e acompanhar as atualizações na fonte oficial.\n\nPara quem já vive, trabalha ou estuda na Irlanda, o recado prático é iniciar o processo de renovação com boa antecedência em relação ao vencimento da autorização. Isso reduz o risco de ficar com a permissão em situação irregular enquanto o pedido aguarda análise. Diante de qualquer dúvida sobre o seu caso específico, a recomendação é consultar diretamente o site oficial do Serviço de Imigração.`,
      keyFacts: [
        "Comunicado oficial publicado em 30 de junho de 2026 pela Immigration Service Delivery (Irish Immigration Service).",
        "O aviso trata do aumento dos prazos entre o envio da renovação online e o início do processamento.",
        "O órgão diz estar buscando formas de reduzir as filas, mas não anunciou um novo prazo fixo.",
        "Orientação prática: renovar com antecedência para evitar ficar sem autorização válida durante a espera.",
      ],
      sources: [{ label: "Irish Immigration Service", url: "https://www.irishimmigration.ie/information-on-online-renewal-timelines/" }],
    }],
  },

  nl: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Holanda quer talento estrangeiro em IA e biotecnologia, mas o país que recebe esse talento está sob pressão",
      standfirst: "Na mesma quinzena em que lançou uma estratégia para atrair profissionais qualificados, a Holanda escalou para escassez efetiva de água, viu a percepção de inflação disparar entre os consumidores e teve confirmada, em dado oficial, a alta na discriminação. Entender esse pano de fundo ajuda a decidir com os olhos abertos.",
      body: "Duas semanas de julho de 2026 resumem bem a Holanda de hoje. De um lado, o gabinete do primeiro-ministro Jetten lançou, em 10 de julho, a Talentstrategie voor toekomstige welvaart, uma estratégia oficial para atrair migrantes qualificados a quatro setores considerados estratégicos: digitalização e inteligência artificial, segurança e resiliência, energia e clima, e ciências da vida e biotecnologia. Do outro lado, no mesmo período, o país lidou com uma seca que forçou o comitê oficial de recursos hídricos a escalar duas vezes o nível de alerta, viu o CBS confirmar que os consumidores estimam a inflação em quase o triplo da taxa real, e teve reforçado, por dado do próprio governo, que a discriminação segue em alta.\n\nNenhum desses fatos anula o outro. Juntos, formam o quadro mais completo pra quem pensa em se mudar para a Holanda pela porta do talento qualificado.\n\nA estratégia de talentos, em si, é uma boa notícia pra quem trabalha com tecnologia, ciência ou engenharia. O documento oficial do Rijksoverheid.nl mostra um governo disposto a competir por mão de obra especializada, o que tende a se traduzir, com o tempo, em processos de visto e reconhecimento profissional mais amigáveis para esses perfis. É um sinal de intenção clara, mesmo que os detalhes de execução ainda estejam por vir.\n\nO outro lado da moeda é a infraestrutura que recebe esse talento. A Landelijke Coördinatiecommissie Waterverdeling, comitê ligado ao Rijkswaterstaat e ao Ministério de Infraestrutura e Gestão da Água, escalou em julho para 'dreigend watertekort' e, já em 16 de julho, para 'feitelijk watertekort', a fase de escassez efetiva. Os comunicados oficiais falam em nível de rio comparável à seca histórica de 1976. Não é o tipo de notícia que aparece nos folhetos de recrutamento internacional, mas é parte da realidade climática de quem se muda para lá.\n\nO dinheiro no bolso também conta uma história de tensão. O CBS, o instituto oficial de estatística, publicou que a inflação caiu para 2,9% em junho de 2026, mas que a estimativa média dos consumidores locais para essa mesma inflação ficou perto de 8%, quase o triplo. O comunicado do instituto reconhece que essa distância entre percepção e realidade cresceu bastante na comparação com o período anterior a 2022. Isso importa pra quem vai negociar salário ou orçar o custo de vida: o holandês médio sente o aperto financeiro mais forte do que os números sugerem, e é essa sensação que ajuda a moldar o clima social do dia a dia.\n\nPor fim, um dado que merece espaço em qualquer conversa sobre migrar pra Holanda como pessoa LHBTIQA+, ou como grupo minoritário de forma geral. O relatório oficial 'Discriminatiecijfers 2025', divulgado pelo governo holandês em 15 de abril de 2026 e encomendado pelos Ministérios do Interior e da Justiça e Segurança, registrou recorde de denúncias, com o Discriminatie.nl recebendo 25.356 relatos e a polícia registrando 10.748 casos, alta de 12% frente ao ano anterior. O aumento acima da média em casos envolvendo pessoas LHBTIQA+ foi um dos pontos citados no relatório oficial.\n\nPra comunidade WiseHub, a leitura não é de alarme, é de contexto. A Holanda segue sendo um destino que compete ativamente por talento qualificado, com uma estratégia de governo dedicada a isso. Mas o país também enfrenta pressão real sobre recursos hídricos, sobre o custo de vida percebido e sobre convivência social. Quem recebe uma proposta de trabalho em IA, biotecnologia ou outra área estratégica faz bem em negociar as condições, entender o clima social da cidade de destino e chegar com expectativas calibradas pela realidade, não só pelo anúncio oficial.",
      tags: ["Holanda", "Imigração Qualificada", "Talentstrategie", "Seca"],
      sources: [
      { label: "Rijksoverheid.nl · Kabinet lanceert Talentstrategie voor toekomstige welvaart (10/07/2026)", url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/10/kabinet-lanceert-talentstrategie-voor-toekomstige-welvaart" },
      { label: "Rijkswaterstaat · Droogte houdt aan (escalada para dreigend watertekort)", url: "https://www.rijkswaterstaat.nl/nieuws/archief/2026/07/droogte-houdt-aan-de-landelijke-coordinatiecommissie-waterverdeling-schaalt-op-naar-dreigend-watertekort" },
      { label: "Rijksoverheid.nl · Opschaling naar feitelijk watertekort (16/07/2026)", url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/16/extra-maatregelen-door-aanhoudende-droogte-opschaling-naar-feitelijk-watertekort" },
      { label: "CBS (Statistics Netherlands) · Consumenten schatten inflatie flink hoger dan voor 2022", url: "https://www.cbs.nl/nl-nl/nieuws/2026/29/consumenten-schatten-inflatie-flink-hoger-dan-voor-2022" },
      { label: "CBS · Inflatie daalt in juni naar 2,9 procent", url: "https://www.cbs.nl/nl-nl/nieuws/2026/28/inflatie-daalt-in-juni-naar-2-9-procent" },
      { label: "Rijksoverheid.nl · Discriminatiecijfers 2025", url: "https://www.rijksoverheid.nl/documenten/2026/04/15/discriminatiecijfers-2025" },
      { label: "Politie.nl · Meldingen discriminatie stijgen opnieuw in 2025", url: "https://www.politie.nl/nieuws/2026/april/15/00-meldingen-discriminatie-stijgen-opnieuw-in-2025.html" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Holanda escala para escassez efetiva de água, direto do comitê oficial de recursos hídricos",
      body: "A seca na Holanda voltou a piorar e já mudou de fase pela segunda vez em poucas semanas. A Landelijke Coördinatiecommissie Waterverdeling (LCW), o comitê nacional de distribuição de água ligado ao Rijkswaterstaat e ao Ministério de Infraestrutura e Gestão da Água, escalou em julho de 2026 para o nível 'dreigend watertekort', a fase de ameaça de escassez. Em 16 de julho, segundo comunicado oficial do Rijksoverheid.nl, a situação avançou para 'feitelijk watertekort', a fase de escassez efetiva, e o governo anunciou medidas extras diante da estiagem prolongada.\n\nOs comunicados oficiais falam em nível dos rios bem abaixo da média para a época do ano, com comparações à seca histórica de 1976. Para quem mora ou pretende morar na Holanda, o recado é de atenção: escassez efetiva de água costuma vir acompanhada de restrições regionais e mudanças de prioridade de uso. Acompanhe as atualizações direto no Rijksoverheid.nl e no Rijkswaterstaat antes de qualquer decisão que dependa de grande consumo de água, como agricultura ou obras.",
      cta: "Vive em região agrícola ou depende de água em grande volume na Holanda? Acompanhe os boletins do Rijkswaterstaat e do Rijksoverheid.nl para saber se novas restrições chegam à sua área.",
      sources: [
      { label: "Rijkswaterstaat · Droogte houdt aan (escalada para dreigend watertekort)", url: "https://www.rijkswaterstaat.nl/nieuws/archief/2026/07/droogte-houdt-aan-de-landelijke-coordinatiecommissie-waterverdeling-schaalt-op-naar-dreigend-watertekort" },
      { label: "Rijksoverheid.nl · Opschaling naar feitelijk watertekort (16/07/2026)", url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/16/extra-maatregelen-door-aanhoudende-droogte-opschaling-naar-feitelijk-watertekort" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Holandês acha que a inflação está quase 3 vezes mais alta do que está de verdade",
      body: "O CBS, o instituto oficial de estatística da Holanda, publicou dois comunicados na mesma semana que colocam lado a lado a inflação real e a percepção dos consumidores. Segundo o CBS, a inflação caiu para 2,9% em junho de 2026. Já a estimativa média dos próprios consumidores holandeses para a inflação ficou em torno de 8%, quase o triplo do número oficial, conforme o comunicado 'Consumenten schatten inflatie flink hoger dan voor 2022'.\n\nO próprio título do comunicado já dá a pista: essa distância entre o que as pessoas sentem e o que os números mostram cresceu bastante na comparação com o período anterior a 2022. Para quem vive ou vai viver na Holanda, o dado ajuda a entender por que a sensação de custo de vida no país costuma pesar mais do que os índices oficiais sugerem, e por que vale sempre planejar o orçamento com alguma margem extra.",
      cta: "Planejando se mudar para a Holanda? Não baseie seu orçamento só na percepção geral de preços, confira sempre os números oficiais do CBS antes de fechar as contas.",
      sources: [
      { label: "CBS (Statistics Netherlands) · Consumenten schatten inflatie flink hoger dan voor 2022", url: "https://www.cbs.nl/nl-nl/nieuws/2026/29/consumenten-schatten-inflatie-flink-hoger-dan-voor-2022" },
      { label: "CBS · Inflatie daalt in juni naar 2,9 procent", url: "https://www.cbs.nl/nl-nl/nieuws/2026/28/inflatie-daalt-in-juni-naar-2-9-procent" },
    ],
    },
    {
      publishedAt: D,
      title: "Holanda aprova lei para facilitar cooperativas de moradia",
      body: `A câmara baixa do parlamento holandês, a Tweede Kamer, aprovou nesta semana um projeto de lei que torna mais simples um grupo de moradores fundar uma cooperativa de habitação. A nova Lei de Promoção das Cooperativas de Habitação, a Wet bevordering wooncoöperaties, dá a esse modelo um lugar mais claro dentro da legislação habitacional do país, segundo a imprensa local.\n\nPara quem planeja morar na Holanda, o tema é sensível. A moradia é hoje o maior gargalo do país, com oferta apertada e preços altos. A cooperativa é um formato em que os próprios moradores se organizam para gerir onde vivem, e a medida busca abrir mais essa porta. Os detalhes finais dependem da tramitação e da fonte oficial.`,
      cta: "Acompanhe pela WiseHub como a nova lei de cooperativas pode ampliar opções de moradia na Holanda.",
      sources: [{ label: "DutchNews", url: "https://www.dutchnews.nl/2026/07/mps-back-bill-to-make-housing-co-ops-easier-to-start/" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Holanda lança estratégia nacional para atrair talento estrangeiro em IA, biotecnologia e mais dois setores",
      standfirst: "O gabinete do primeiro-ministro Jetten anunciou em 10 de julho a Talentstrategie voor toekomstige welvaart, com foco em atrair migrantes qualificados para quatro áreas consideradas estratégicas para o futuro do país.",
      body: "O governo da Holanda, liderado pelo gabinete do primeiro-ministro Jetten, lançou em 10 de julho de 2026 a Talentstrategie voor toekomstige welvaart, a Estratégia de Talentos para a Prosperidade Futura. O anúncio, publicado no site oficial do Rijksoverheid.nl, coloca a atração de mão de obra qualificada de fora do país como uma prioridade explícita de política pública.\n\nA estratégia identifica quatro áreas consideradas estratégicas para a economia holandesa nos próximos anos: digitalização e inteligência artificial, segurança e resiliência, energia e clima, e ciências da vida e biotecnologia. Segundo o gabinete, são esses os setores em que a Holanda mais precisa de profissionais especializados vindos de fora para sustentar crescimento e competitividade.\n\nPara quem trabalha ou pretende trabalhar nessas áreas, o anúncio sinaliza um ambiente de política migratória mais aberto à qualificação técnica, num momento em que o próprio governo reconhece a necessidade de talento internacional. Os detalhes de execução, como eventuais mudanças em categorias de visto ou processos de reconhecimento profissional, ainda dependem de desdobramentos futuros. A recomendação é acompanhar as próximas publicações do Rijksoverheid.nl para confirmar como a estratégia se traduz em regras práticas de imigração.",
      keyFacts: [
        "Estratégia lançada em 10 de julho de 2026 pelo gabinete do primeiro-ministro Jetten, segundo o Rijksoverheid.nl.",
        "Nome oficial: Talentstrategie voor toekomstige welvaart (Estratégia de Talentos para a Prosperidade Futura).",
        "Quatro áreas estratégicas: digitalização/IA, segurança/resiliência, energia/clima e ciências da vida/biotecnologia.",
        "Objetivo declarado: atrair migrantes qualificados para sustentar o crescimento nesses setores.",
      ],
      sources: [
      { label: "Rijksoverheid.nl · Kabinet lanceert Talentstrategie voor toekomstige welvaart (10/07/2026)", url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/10/kabinet-lanceert-talentstrategie-voor-toekomstige-welvaart" },
    ],
    },
    {
      publishedAt: D,
      headline: "Parlamento holandês aprova lei que facilita cooperativas de moradia",
      standfirst: "A Tweede Kamer apoiou um projeto que dá base legal mais clara às cooperativas de habitação, num país onde encontrar moradia é o principal desafio de quem chega.",
      body: `A câmara baixa do parlamento da Holanda aprovou um projeto de lei destinado a tornar mais fácil para grupos de moradores iniciar uma cooperativa de habitação. A proposta, chamada Wet bevordering wooncoöperaties, ou Lei de Promoção das Cooperativas de Habitação, foi votada nesta semana e organiza esse tipo de moradia de forma mais explícita dentro da legislação habitacional do país, conforme noticiado pela imprensa local.\n\nA cooperativa de habitação é um modelo em que os próprios residentes se associam para administrar e, em alguns casos, ser donos coletivos de onde moram. Segundo a emissora pública NOS, defensores da lei afirmam que esse formato tende a deixar os moradores mais satisfeitos. O texto ainda precisa completar sua tramitação legislativa antes de valer plenamente, então os detalhes de aplicação devem ser confirmados nas fontes oficiais.\n\nPara o imigrante que pretende viver na Holanda, o contexto importa. A escassez e o custo da moradia são hoje o maior obstáculo prático para quem se muda ao país. Uma via legal mais clara para cooperativas não resolve a crise de forma imediata, mas amplia o leque de arranjos possíveis. Quem se planeja deve confirmar regras, prazos e condições de participação junto aos canais oficiais holandeses.`,
      keyFacts: [
        "A câmara baixa do parlamento holandês, a Tweede Kamer, apoiou o projeto nesta semana.",
        "A medida se chama Wet bevordering wooncoöperaties, a Lei de Promoção das Cooperativas de Habitação.",
        "O objetivo é facilitar que grupos de moradores fundem cooperativas e dar a esse modelo lugar mais claro na legislação habitacional.",
      ],
      sources: [{ label: "DutchNews", url: "https://www.dutchnews.nl/2026/07/mps-back-bill-to-make-housing-co-ops-easier-to-start/" }],
    }],
  },

  es: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Sobrenome sefardita não garante cidadania espanhola sozinho, mas pode ajudar a comprová-la",
      standfirst: "A Lei 12/2015 abriu caminho para descendentes de sefarditas se naturalizarem espanhóis, mas exige provar tanto a condição de sefardita quanto uma conexão especial com a Espanha, e um sobrenome isolado não substitui esse conjunto de provas.",
      body: "A Espanha aprovou em 2015 uma lei que reconhece um direito histórico. A Lei 12/2015, publicada no BOE em 24 de junho daquele ano, permite que descendentes de judeus sefarditas expulsos da Espanha peçam a nacionalidade espanhola por naturalização, sem precisar renunciar à nacionalidade de origem. É uma reparação simbólica a uma expulsão que remonta ao final do século XV.\n\nO ponto que gera confusão é o que efetivamente comprova essa origem. A lei exige que o candidato demonstre duas coisas ao mesmo tempo, a condição de sefardita e uma conexão especial com a Espanha, essa última avaliada por critérios como certificados de comunidades judaicas, uso do ladino ou haquetia em família, ou vínculos de parentesco documentados. Um relatório motivado sobre o sobrenome pode entrar nesse conjunto de provas, mas é apenas um elemento entre vários, não um atalho sozinho.\n\nO Ministério de Assuntos Exteriores e a própria Federação de Comunidades Judaicas da Espanha já esclareceram publicamente que não existe uma lista oficial de sobrenomes que, isolada, garanta o reconhecimento da condição sefardita. Escritórios que oferecem relatórios de sobrenome prestam um serviço real dentro do processo, mas quem pesquisa o tema deve entender esse relatório como parte de um dossiê maior, não como a prova definitiva.\n\nPara quem investiga uma possível origem sefardita, o caminho responsável é reunir o máximo de documentação genealógica e histórica possível e buscar orientação jurídica especializada, sempre com base no texto da Lei 12/2015 e nas orientações oficiais do Ministério de Assuntos Exteriores antes de contratar qualquer serviço ou tomar decisões financeiras ligadas ao processo.",
      tags: ["Espanha", "Cidadania Espanhola", "Sefarditas", "Nacionalidade", "Lei 12/2015"],
      sources: [
      { label: "BOE · Ley 12/2015, de 24 de junio", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2015-7045" },
      { label: "Ministerio de Asuntos Exteriores (MAEC) · Nota sobre a Lei 12/2015", url: "https://www.exteriores.gob.es/Embajadas/budapest/es/Comunicacion/Noticias/Paginas/Articulos/20151126_NOT2.aspx" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Espanha cria o arraigo sociformativo, caminho mais rápido pra quem já estuda uma formação profissional no país",
      body: "O novo Regulamento de Estrangeiros da Espanha, aprovado pelo Real Decreto 1155/2024 e publicado no BOE em 20 de novembro de 2024, criou o arraigo sociformativo, uma modalidade de regularização voltada a quem já está matriculado em um curso de formação profissional no país. O Ministério da Inclusão, Seguridade Social e Migrações publicou em 2025 as instruções de aplicação da nova regra.\n\nA principal mudança prática é o prazo. Em vez dos três anos de permanência normalmente exigidos nos arraigos tradicionais, o arraigo sociformativo reduz essa exigência para dois anos, desde que a pessoa comprove matrícula e frequência em programa de formação profissional reconhecido. Quem já vive na Espanha nessas condições deve verificar diretamente com o Ministério da Inclusão se preenche os requisitos completos antes de reunir a documentação e dar entrada no pedido.",
      cta: "Já estuda uma formação profissional na Espanha? Confira as instruções oficiais do Ministério da Inclusão antes de organizar o seu pedido de arraigo sociformativo.",
      sources: [
      { label: "BOE · Real Decreto 1155/2024, de 19 de noviembre", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099" },
      { label: "Ministerio de Inclusión, Seguridad Social y Migraciones · Instruções sobre os novos arraigos", url: "https://www.inclusion.gob.es/documents/d/migraciones/instrucciones-sem-1_2025-sobre-las-autorizaciones-de-residencia-temporal-por-circunstancias-excepcionales-por-razon-de-arraigo-aprobado-por-el-real-decreto-1155_2024" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Aeroporto de Valência pode receber 400 milhões de euros em investimento até 2031",
      body: "A Aena, operadora aeroportuária majoritariamente estatal por meio da Enaire, incluiu 402,1 milhões de euros para o aeroporto de Valência no plano DORA III, que cobre o período de 2027 a 2031. O valor foi divulgado em nota oficial da própria sala de imprensa da Aena e citado pelo Ministério dos Transportes e Mobilidade Sustentável.\n\nVale um alerta importante antes de comemorar. Trata-se de um plano de investimento proposto, ainda em processo regulatório, que passa por consulta pública e precisa de aprovação final do Conselho de Ministros e da CNMC. Quem acompanha o crescimento de Valência de olho em oportunidades de trabalho ou moradia deve tratar o valor como uma previsão, não como obra já garantida, e seguir as atualizações oficiais da Aena.",
      cta: "Pensa em se mudar pra Valência de olho no crescimento da cidade? Acompanhe a aprovação final do plano DORA III antes de tomar decisões baseadas nele.",
      sources: [
      { label: "Aena · Sala de imprensa oficial", url: "https://www.aena.es/en/press/aena-proposes-investments-of-approximately-13-billion-for-airports-in-spain.html" },
      { label: "Ministerio de Transportes y Movilidad Sostenible", url: "https://www.transportes.gob.es/ministerio/comunicacion/sala-prensa/jue-18092025-1302" },
    ],
    },
    {
      publishedAt: D,
      title: "Espanha: quer morar mais de 90 dias? O visto de longa duração é a porta de entrada",
      body: `Quem planeja viver na Espanha por mais de 90 dias, seja por trabalho, estudos, reagrupamento familiar ou aposentadoria, não pode entrar apenas como turista. Nesses casos, a legislação espanhola exige o visto de longa duração, o documento que autoriza a permanência prolongada e abre caminho para a posterior autorização de residência no país. É esse visto que separa uma visita curta de um projeto real de mudança.\n\nUm material recém-publicado por um escritório de advocacia de imigração na Espanha reforça esse ponto e detalha as diferentes finalidades do visto, do trabalho à aposentadoria. Antes de comprar passagem ou assumir compromissos, vale confirmar qual modalidade se encaixa no seu caso e reunir a documentação com antecedência, sempre conferindo os requisitos oficiais junto ao consulado espanhol.`,
      cta: "Se o seu plano é morar na Espanha por mais de três meses, comece já a mapear qual visto de longa duração cabe no seu caso.",
      sources: [{ label: "Immigration Lawyers Spain (fonte não oficial, a confirmar)", url: "https://www.immigrationspain.es/en/long-stay-visa-spain/" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Fronteira física entre Espanha e Gibraltar deixa de existir depois de mais de um século",
      standfirst: "Tratado assinado em Bruxelas em 14 de julho entrou em vigor à meia-noite do dia seguinte e transfere o controle de passaporte para o aeroporto do Peñón, encerrando mais de cem anos de fronteira física entre La Línea e Gibraltar.",
      body: "O governo da Espanha confirmou, em nota oficial publicada pela La Moncloa em 14 de julho de 2026, a assinatura em Bruxelas do tratado entre a União Europeia e o Reino Unido sobre Gibraltar. O anúncio foi feito pelo chanceler espanhol José Manuel Albares durante a cerimônia de assinatura do acordo.\n\nO tratado entrou em vigor à meia-noite de 15 de julho de 2026. Na prática, isso removeu a fronteira física que separava, havia mais de um século, La Línea de la Concepción, do lado espanhol, e Gibraltar. O controle de passaporte, que antes acontecia na própria linha de fronteira terrestre, passou a ser feito no aeroporto do Peñón.\n\nA mudança afeta diretamente milhares de pessoas que cruzam essa fronteira todos os dias, entre trabalhadores fronteiriços, moradores de La Línea e visitantes. Deixar de haver controle físico na passagem terrestre é descrito pelo próprio governo espanhol como um marco depois de mais de cem anos de história da fronteira.\n\nO texto oficial do tratado, na versão em espanhol, também foi disponibilizado pela La Moncloa. Quem tem rotina de trabalho, estudo ou moradia que envolve atravessar essa fronteira deve acompanhar os desdobramentos práticos da mudança diretamente pelos canais oficiais do governo espanhol.",
      keyFacts: [
        "Tratado UE-Reino Unido sobre Gibraltar assinado em Bruxelas em 14 de julho de 2026, confirmado pela La Moncloa.",
        "Entrada em vigor à meia-noite de 15 de julho de 2026.",
        "O controle de passaporte passou a ser feito no aeroporto de Gibraltar, e não mais na fronteira terrestre com La Línea de la Concepción.",
        "A mudança encerra mais de um século de fronteira física entre Espanha e Gibraltar.",
      ],
      sources: [
      { label: "La Moncloa · Albares na assinatura do acordo de Gibraltar", url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/exteriores/paginas/2026/140726-albares-acuerdo-gibraltar-ue.aspx" },
      { label: "La Moncloa · Texto oficial em espanhol do tratado sobre Gibraltar", url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/exteriores/paginas/2026/130326-exteriores-texto-espanol-tratado-gibraltar.aspx" },
    ],
    },
    {
      publishedAt: D,
      headline: "Visto de longa duração é o caminho para quem quer morar na Espanha por mais de 90 dias",
      standfirst: "Trabalho, estudos, família ou aposentadoria: passar de três meses no país exige um visto próprio, e não a simples entrada de turista.",
      body: `Para quem sonha em construir vida na Espanha, o primeiro filtro prático é o tempo de permanência. Estadas de até 90 dias podem ser feitas como turista, mas qualquer plano de ficar mais que isso exige um visto de longa duração, conforme reforça um guia recém-publicado por um escritório de imigração no país.\n\nEsse visto não é único: ele varia conforme o motivo da mudança. Há modalidades voltadas a trabalho, estudos, reagrupamento familiar e aposentadoria, cada uma com seus próprios requisitos de renda, documentação e comprovações. Identificar corretamente a categoria certa é o passo que evita indeferimentos e retrabalho no processo.\n\nA WiseHub recomenda cautela: prazos, valores e exigências mudam com frequência e dependem do consulado responsável. Antes de tomar qualquer decisão, confirme sempre as condições atualizadas nas fontes oficiais espanholas e, se possível, com apoio jurídico especializado.`,
      keyFacts: [
        "Estadas acima de 90 dias na Espanha exigem visto de longa duração, não valem apenas como turista.",
        "O visto tem finalidades distintas: trabalho, estudos, reagrupamento familiar e aposentadoria.",
        "Cada modalidade tem requisitos próprios de renda e documentação; confira sempre a fonte oficial e o consulado.",
      ],
      sources: [{ label: "Immigration Lawyers Spain (fonte não oficial, a confirmar)", url: "https://www.immigrationspain.es/en/long-stay-visa-spain/" }],
    }],
  },

  it: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "O que está por trás do caso que pode levar a Cassação da Itália a revisar a cidadania por descendência",
      standfirst: "Duas decisões da Primeira Seção Civil pedem avaliação para enviar às Sezioni Unite um tema que atravessa boa parte dos processos judiciais de reconhecimento de cidadania italiana movidos por descendentes no exterior.",
      body: "Enquanto a comunidade de descendentes de italianos ainda acompanha os desdobramentos do Decreto Tajani nos tribunais de primeira instância, outra frente jurídica avança na mais alta instância civil da Itália. A Corte di Cassazione publicou duas ordinanze interlocutorie, sob os números 20122 e 20129, de 18 de julho de 2025, que podem levar ao colegiado pleno da Corte um debate antigo e recorrente nos processos de reconhecimento de cidadania: o que acontece com a cidadania dos filhos quando um ascendente se naturaliza em outro país.\n\nAs duas decisões, relatadas pelo conselheiro Alberto Pazzi, da Primeira Seção Civil, tratam da aplicação dos artigos 7 e 12, parágrafo 2º, da lei 555 de 1912, a mesma legislação histórica que fundamenta a maioria dos processos judiciais de reconhecimento de cidadania italiana por descendência movidos por brasileiros. Não é incomum que, na árvore genealógica de quem busca a cidadania, haja um bisavô ou avô que emigrou da Itália e, em algum momento, adquiriu outra nacionalidade antes da reforma de 1992 na lei da cidadania italiana, que deixou de exigir a perda automática da nacionalidade de origem em caso de naturalização estrangeira. É justamente esse tipo de situação que a lei de 1912 regula, e é aí que moram as maiores controvérsias jurídicas do tema.\n\nO pedido de avaliação para enviar o caso às Sezioni Unite, o colegiado que reúne todas as seções cíveis da Cassação para pacificar entendimentos, costuma ser reservado a questões em que os próprios tribunais italianos decidem de formas diferentes. Em outras palavras, quando a Primeira Seção Civil sinaliza essa possibilidade, é porque reconhece que o tema não tem, hoje, uma resposta uniforme na jurisprudência. Vozes do meio jurídico já acompanham o caso, como o advogado Marco Mellone e a revista especializada Questione Giustizia, o que reforça o peso da discussão dentro do próprio universo jurídico italiano.\n\nPara a família que já entrou com uma ação judicial de reconhecimento de cidadania, ou que está avaliando esse caminho, o ponto mais importante agora é entender que nada mudou de forma definitiva. São decisões interlocutórias, que não julgam o mérito da causa nem criam, sozinhas, uma nova regra. A palavra final sobre se o caso realmente vai à Corte plena, e qual interpretação vai prevalecer, ainda depende de etapas seguintes. O que fica claro é que esse tema, ao lado das discussões em curso sobre o Decreto Tajani, mostra que a via judicial da cidadania italiana segue em movimento na Itália, e não é uma regra estática. Manter contato próximo com um advogado especializado e acompanhar as fontes oficiais é a forma mais segura de não ser pego de surpresa por uma eventual mudança de entendimento.",
      tags: ["cidadania italiana", "jure sanguinis", "Corte di Cassazione", "Itália"],
      sources: [
      { label: "Corte Suprema di Cassazione · Prima Sezione Civile, ordinanze interlocutorie nn. 20122 e 20129 (relatore A. Pazzi)", url: "https://www.cortedicassazione.it/it/civile_dettaglio.page?contentId=SZC46035" },
      { label: "Questione Giustizia", url: "https://www.questionegiustizia.it/" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Brasileiros no exterior batem recorde: são 5,29 milhões, segundo o Itamaraty",
      body: "Para quem já é imigrante ou está planejando se mudar, um retrato recente ajuda a entender o tamanho desse movimento. O Relatório Consular Anual 2025 do Itamaraty registrou 5,29 milhões de brasileiros vivendo fora do país, um novo recorde histórico, com alta de 110 mil pessoas em relação a 2024. Os Estados Unidos seguem como o principal destino, com 2,1 milhões de brasileiros, seguidos por Portugal, com cerca de 628 mil, e o Paraguai, com aproximadamente 270 mil.\n\nO levantamento não detalha a posição da Itália no ranking, mas o número geral confirma uma tendência que a comunidade de descendentes de italianos já sente na prática: mais brasileiros do que nunca estão vivendo, planejando ou buscando uma vida fora do Brasil, seja pelo trabalho, pelos estudos ou pela reconexão com raízes familiares, como no caso da cidadania italiana. Antes de qualquer decisão de mudança, vale sempre confirmar dados e exigências diretamente nas fontes oficiais do país de destino.",
      cta: "Você também faz parte dessa diáspora ou está planejando se mudar? Confira o relatório completo na fonte oficial do Itamaraty.",
      sources: [
      { label: "Ministério das Relações Exteriores (Itamaraty) · Relatório Consular Anual 2025 / estimativas de brasileiros no exterior", url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/brasileiros-no-exterior-estimativas-ano-a-ano" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Cassação da Itália pode levar ao plenário caso que discute perda de cidadania de filhos de imigrantes",
      body: "A Corte di Cassazione, o mais alto tribunal civil da Itália, publicou em sua página oficial duas ordinanze interlocutorie, decisões que não encerram o caso mas pedem uma etapa extra, sob os números 20122 e 20129, de 18 de julho de 2025. Ambas foram relatadas pelo conselheiro Alberto Pazzi, da Primeira Seção Civil, e tratam de um tema sensível para quem busca a cidadania italiana por descendência: a atribuição, ou a perda, da cidadania dos filhos de quem se naturalizou em outro país, com base nos artigos 7 e 12, parágrafo 2º, da lei italiana 555 de 1912.\n\nNas duas decisões, a Primeira Seção pediu ao Primeiro Presidente da Corte que avalie enviar a questão às Sezioni Unite, o colegiado que reúne todas as seções cíveis para uniformizar o entendimento em temas controversos, algo que costuma sinalizar divergência entre tribunais. O advogado Marco Mellone e a revista jurídica Questione Giustizia já acompanham o desdobramento do caso. Ainda não há decisão final, mas quem tem processo relacionado a essa regra específica da lei de 1912 deve ficar de olho e buscar orientação jurídica atualizada.",
      cta: "Seu processo de cidadania envolve um ascendente que se naturalizou em outro país? Vale acompanhar esse caso de perto com um advogado especializado.",
      sources: [
      { label: "Corte Suprema di Cassazione · Prima Sezione Civile, ordinanze interlocutorie nn. 20122 e 20129 (relatore A. Pazzi)", url: "https://www.cortedicassazione.it/it/civile_dettaglio.page?contentId=SZC46035" },
      { label: "Questione Giustizia", url: "https://www.questionegiustizia.it/" },
    ],
    },
    {
      publishedAt: D,
      title: "Justiça italiana abre brechas no Decreto Tajani para quem já buscava a cidadania",
      body: `Duas decisões recentes de tribunais na Itália acenderam a esperança de quem tem processo de cidadania italiana por descendência em andamento. Em Brescia, o tribunal reconheceu o direito por linha materna mesmo já sob a nova lei, e em Palermo os juízes aplicaram as regras antigas a um pedido protocolado após o prazo. Nos dois casos, pesou a prova de que a pessoa já tentava obter a cidadania antes da mudança, principalmente registros de tentativas de agendamento consular.\n\nAs informações vêm do portal de comunidade Italianismo e ainda precisam ser confirmadas, porque são sentenças de primeira instância que podem ser revistas em instâncias superiores. Cada caso depende de provas próprias e não cria automaticamente um direito para todo mundo. Se você começou o seu processo antes do Decreto Tajani, guarde tudo que comprove isso e procure orientação jurídica antes de decidir os próximos passos.`,
      cta: "Guardou os comprovantes de agendamento consular feitos antes do decreto? Eles podem ser decisivos, confirme com um advogado antes de agir.",
      sources: [{ label: "Italianismo · Cidadania (fonte de comunidade, a confirmar)", url: "https://italianismo.com.br/tribunal-de-brescia-reconhece-cidadania-por-linha-materna-apos-o-decreto-tajani/" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Relator da Cassação da Itália pode levar à Corte plena caso sobre perda de cidadania de descendentes",
      standfirst: "Duas decisões da Primeira Seção Civil, relatadas pelo conselheiro Alberto Pazzi, pedem avaliação para enviar às Sezioni Unite o debate sobre a cidadania de filhos de quem se naturalizou fora da Itália.",
      body: "A Corte di Cassazione, o mais alto tribunal em matéria civil da Itália, publicou em sua página oficial duas ordinanze interlocutorie, as decisões nn. 20122 e 20129, de 18 de julho de 2025. Ambas foram relatadas pelo conselheiro Alberto Pazzi, da Primeira Seção Civil (Prima Sezione Civile), e tratam de um tema que interessa diretamente a milhares de descendentes de italianos espalhados pelo mundo, incluindo o Brasil: as regras sobre atribuição e perda da cidadania italiana.\n\nAs duas ordinanze discutem a aplicação dos artigos 7 e 12, parágrafo 2º, da lei italiana 555, de 1912, que trata da cidadania de filhos de pessoas que se naturalizaram em outro país. É a mesma norma histórica que sustenta boa parte dos processos de reconhecimento de cidadania italiana por descendência movidos por brasileiros, já que muitos casos envolvem um ascendente que emigrou da Itália e depois adquiriu outra nacionalidade.\n\nNas duas decisões, a Primeira Seção pediu ao Primeiro Presidente da Corte de Cassação que avalie a possibilidade de remeter a questão às Sezioni Unite, o colegiado que reúne todas as seções cíveis do tribunal para pacificar entendimentos quando há divergência entre julgados. Esse tipo de pedido costuma sinalizar que a própria Corte reconhece a existência de interpretações conflitantes sobre o tema entre os tribunais inferiores, o que reforça a relevância do caso. O advogado Marco Mellone e a revista jurídica especializada Questione Giustizia figuram entre as vozes que já acompanham o desdobramento.\n\nÉ importante deixar claro que essas são decisões interlocutórias, ou seja, não julgam o mérito do caso e não criam, por si só, uma nova regra geral. A palavra final sobre se a questão vai mesmo às Sezioni Unite, e qual será o entendimento consolidado, ainda não existe. Para quem tem processo de cidadania italiana em andamento cujo caso passa por um ascendente naturalizado em outro país, o recado é de atenção: acompanhar os próximos passos desse julgamento junto a um advogado especializado é essencial antes de tomar qualquer decisão.",
      keyFacts: [
        "Corte di Cassazione publicou as ordinanze interlocutorie nn. 20122 e 20129, de 18 de julho de 2025, relatadas pelo conselheiro Alberto Pazzi (Prima Sezione Civile).",
        "O tema é a atribuição e a perda de cidadania italiana de filhos de quem se naturalizou em outro país, com base nos artigos 7 e 12, parágrafo 2º, da lei 555/1912.",
        "As duas decisões pedem ao Primeiro Presidente da Corte que avalie enviar o caso às Sezioni Unite, o colegiado que uniformiza entendimentos divergentes entre tribunais.",
        "São decisões interlocutórias, sem julgamento de mérito ainda; o advogado Marco Mellone e a revista Questione Giustizia acompanham o caso.",
      ],
      sources: [
      { label: "Corte Suprema di Cassazione · Prima Sezione Civile, ordinanze interlocutorie nn. 20122 e 20129 (relatore A. Pazzi)", url: "https://www.cortedicassazione.it/it/civile_dettaglio.page?contentId=SZC46035" },
      { label: "Questione Giustizia", url: "https://www.questionegiustizia.it/" },
    ],
    },
    {
      publishedAt: D,
      headline: "Tribunais italianos reconhecem cidadania de quem já estava na fila antes do Decreto Tajani",
      standfirst: "Decisões recentes em Brescia e Palermo aplicaram as regras antigas a pedidos ligados a tentativas feitas antes da nova lei, reacendendo a esperança da diáspora.",
      body: `O Decreto Tajani apertou as regras da cidadania italiana por descendência, mas duas sentenças recentes mostram que quem já buscava o direito antes da mudança pode ter um caminho preservado. Em Brescia, o tribunal reconheceu a cidadania por linha materna mesmo com a ação aberta já sob a nova lei, e as provas de tentativas consulares feitas antes do prazo foram decisivas. Em Palermo, os juízes aplicaram a lei antiga a um pedido protocolado depois do prazo, por entender que o interessado já havia iniciado o processo.\n\nAs decisões, noticiadas pelo portal de comunidade Italianismo, precisam ser lidas com cautela. São sentenças de primeira instância, sujeitas a recurso, e cada uma se apoiou em provas específicas do caso. Não há, por enquanto, uma regra geral consolidada que garanta o mesmo resultado a todos os requerentes, e o próprio meio jurídico discute a interpretação, com análises que ligam o tema a prazos e à jurisprudência da União Europeia.\n\nPara quem tem processo em andamento, o recado prático é reunir e preservar todos os comprovantes de que o pedido começou antes do Decreto Tajani, especialmente registros de tentativas de agendamento consular. A orientação de um advogado especializado é essencial antes de qualquer passo, já que o desfecho depende do conjunto de provas e da instância que julgar o caso.`,
      keyFacts: [
        "Tribunal de Brescia reconheceu cidadania por linha materna após o Decreto Tajani, com base em tentativas consulares anteriores ao prazo.",
        "Tribunal de Palermo aplicou a lei antiga a um pedido protocolado depois do prazo, por o processo ter começado antes.",
        "São decisões de primeira instância, sujeitas a recurso, e cada caso depende de provas próprias.",
        "Guardar comprovantes de agendamento e tentativas consulares feitas antes da nova lei pode ser decisivo.",
      ],
      sources: [{ label: "Italianismo · Cidadania (fonte de comunidade, a confirmar)", url: "https://italianismo.com.br/quem-estava-na-fila-consular-pode-escapar-do-decreto-tajani-decide-tribunal-de-palermo/" }],
    }],
  },

  de: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Enquanto automatiza benefícios, Alemanha aperta o orçamento da integração de imigrantes",
      standfirst: "O mesmo governo que corta quase 41% da verba dos cursos de integração para 2027 avança em pelo menos duas frentes de digitalização do estado social, do Kindergeld automático ao seguro-desemprego 'digital first'.",
      body: "A Alemanha vive, em 2026, dois movimentos que parecem andar em direções opostas. De um lado, o governo aprovou um corte de cerca de 41% na verba destinada aos Integrationskurse, os cursos de integração para imigrantes, que caem de aproximadamente 1 bilhão de euros em 2026 para 590 milhões de euros em 2027, segundo confirmou um porta-voz do Ministério do Interior (BMI) ao portal migazin.de. De outro, o mesmo governo avança em pelo menos duas reformas que tornam mais simples o acesso a benefícios sociais para quem já está no sistema.\n\nA mais recente delas foi anunciada pelo Bundesfinanzministerium. A partir de 2027, o Kindergeld, o auxílio para filhos, passa a ser pago automaticamente, sem que a família precise solicitar. A reforma tem dois estágios, a partir de março de 2027 para famílias que já recebem o benefício por um filho mais velho, e a partir de novembro de 2027 também para o primeiro filho. Os dados passam a circular direto do cartório de registro civil, o Standesamt, para o Bundeszentralamt für Steuern e para a Familienkasse, seguindo o princípio do 'once-only', sob o qual o cidadão não precisa fornecer duas vezes uma informação que o estado já tem.\n\nNo mesmo sentido, o Gabinete Federal decidiu em 15 de julho de 2026 um projeto de lei de modernização da intermediação de emprego e do seguro-desemprego, com o princípio 'digital first' e pedidos majoritariamente feitos pelos formulários online da Bundesagentur für Arbeit, a agência federal de emprego. Segundo a própria Bundesagentur, mais de 80% dos pedidos de Arbeitslosengeld já são feitos de forma digital em 2026.\n\nO contraste chama atenção porque os Integrationskurse não são um benefício qualquer para quem chega à Alemanha. Eles ensinam alemão e noções sobre a sociedade e o sistema jurídico do país, e servem de base para autorizações de residência e, mais à frente, para a cidadania. Cortar recursos nessa área, ao mesmo tempo em que se investe em tornar mais automático o acesso a benefícios de quem já está integrado ao sistema fiscal e previdenciário alemão, sinaliza uma escolha de prioridade, não necessariamente uma coincidência de calendário orçamentário.\n\nÉ importante situar cada uma dessas medidas no estágio em que estão. O orçamento de 2027 com o corte nos Integrationskurse ainda precisa ser votado pelo Bundestag e pelo Bundesrat. A automação do Kindergeld tem datas já definidas pelo Bundesfinanzministerium, mas depende da conclusão da reforma anunciada. E a digitalização do seguro-desemprego acaba de sair do Gabinete Federal e também segue para tramitação parlamentar. Nenhuma das três está, hoje, definitivamente encerrada.\n\nPara quem vive ou planeja se mudar para a Alemanha, o recado prático é duplo. Vale acompanhar de perto a disponibilidade de vagas em cursos de integração, que pode ficar mais disputada com o orçamento menor, e ao mesmo tempo se preparar para um sistema de benefícios cada vez mais automatizado e dependente de cadastro correto junto às autoridades fiscais e de emprego. Confirme sempre as regras atualizadas nas fontes oficiais antes de tomar decisões.",
      tags: ["Alemanha", "Integrationskurse", "Kindergeld", "seguro-desemprego", "orçamento 2027", "imigração"],
      sources: [
      { label: "Bundesfinanzministerium · Regierungsentwurf Bundeshaushalt 2027", url: "https://www.bundesfinanzministerium.de/Content/DE/Pressemitteilungen/Finanzpolitik/2026/07/2026-07-06-regierungsentwurf-bundeshaushalt-2027.html" },
      { label: "migazin.de · Bund kürzt Integrationskurse und Asylberatung massiv im Haushalt", url: "https://www.migazin.de/2026/07/09/bundesregierung-bestaetig-kahlschlag-bei-integratinskursen-und-asylberatung/" },
      { label: "Bundesfinanzministerium · Kindergeld wird künftig ohne Antrag ausgezahlt", url: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/kindergeld-ohne-antrag.html" },
      { label: "Bundesregierung · Kabinett: Arbeitsvermittlung wird moderner", url: "https://www.bundesregierung.de/breg-de/aktuelles/kabinett-arbeitsvermittlung-digital-2446664" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Alemanha corta orçamento dos cursos de integração em quase 41% para 2027",
      body: "O governo federal alemão aprovou, em 6 de julho de 2026, o projeto de orçamento (Regierungsentwurf) para 2027, e a área de cursos de integração, os Integrationskurse, sofreu um dos cortes mais expressivos. Um porta-voz do Ministério do Interior (BMI) confirmou que a verba reservada cai para 590 milhões de euros, ante cerca de 1 bilhão de euros em 2026, uma redução de aproximadamente 41%.\n\nOs cursos de integração são a porta de entrada de muitos imigrantes para o aprendizado do alemão e da vida no país, além de contarem, em alguns casos, como base para autorização de residência e cidadania. Ainda é um projeto de orçamento, que precisa passar pelo Bundestag antes de valer, mas o próprio BMI já reconhece a direção do corte. Quem depende de vaga em curso de integração deve se planejar com antecedência e acompanhar a tramitação.",
      cta: "Depende de curso de integração para regularizar seu status? Fique de olho na tramitação do orçamento 2027 e não deixe a matrícula para a última hora.",
      sources: [
      { label: "Bundesfinanzministerium · Regierungsentwurf Bundeshaushalt 2027", url: "https://www.bundesfinanzministerium.de/Content/DE/Pressemitteilungen/Finanzpolitik/2026/07/2026-07-06-regierungsentwurf-bundeshaushalt-2027.html" },
      { label: "migazin.de · Bund kürzt Integrationskurse und Asylberatung massiv im Haushalt", url: "https://www.migazin.de/2026/07/09/bundesregierung-bestaetig-kahlschlag-bei-integratinskursen-und-asylberatung/" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Cidadania alemã: quais autorizações de residência abrem essa porta?",
      body: "Segundo o BAMF, o serviço federal de migração e refugiados da Alemanha, e o Ministério do Interior (BMI), pedir a Anspruchseinbürgerung, a naturalização por direito, exige em regra ter direito de residência ilimitado (unbefristetes Aufenthaltsrecht) no momento do pedido. Há exceções para quem tem Aufenthaltserlaubnis pelo acordo Suíça-UE, para portadores do Cartão Azul UE (Blaue Karte EU) e para alguns títulos de residência temporária específicos.\n\nAlém da autorização de residência correta, o BAMF lista outros requisitos, cinco anos de residência habitual, identidade e nacionalidade esclarecidas, comprometimento com a ordem constitucional alemã, incluindo a responsabilidade histórica do país, e conhecimento de alemão e da ordem jurídico-social. Quem não cumpre algum desses pontos ainda pode buscar a Ermessenseinbürgerung, a naturalização discricionária. Confirme sempre o seu caso específico com o BAMF antes de dar entrada no pedido.",
      cta: "Não sabe se sua autorização de residência conta para o pedido de cidadania? Confira os detalhes direto no site do BAMF antes de reunir a documentação.",
      sources: [
      { label: "BAMF · Einbürgerung in Deutschland", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung.html" },
      { label: "BMI · Einbürgerung", url: "https://www.bmi.bund.de/DE/themen/verfassung/staatsangehoerigkeit/einbuergerung/einbuergerung-node.html" },
    ],
    },
    {
      publishedAt: D,
      title: "Novo controle de fronteira da Europa afeta a entrada na Alemanha",
      body: `Quem planeja chegar à Alemanha neste verão precisa ficar atento ao EES, o Sistema de Entrada e Saída da União Europeia. Ele registra os dados do passaporte e informações biométricas de todo viajante de fora da UE já na primeira entrada, antes do controle de passaporte tradicional. Para brasileiros e outros cidadãos não europeus, isso significa uma etapa nova nos aeroportos alemães e das demais fronteiras Schengen.\n\nSegundo a reportagem do IamExpat, aeroportos e companhias aéreas pediram à UE que suspenda o sistema durante os meses movimentados de julho e agosto, alegando filas longas e atrasos no processamento das chegadas. O sistema entrou em operação parcial em outubro de 2025 e teve implementação plena em abril de 2026. Antes de viajar, confirme os procedimentos com fontes oficiais e chegue ao aeroporto com boa folga de tempo.`,
      cta: "Se você vai entrar na Alemanha em breve, reserve tempo extra no aeroporto e acompanhe as orientações oficiais sobre o EES.",
      sources: [{ label: "IamExpat in Germany", url: "https://www.iamexpat.de/expat-info/germany-news/eu-must-take-stock-reality-and-suspend-ees-over-summer-say-airlines" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Alemanha reduz em quase 41% o orçamento dos cursos de integração para 2027",
      standfirst: "Projeto de orçamento aprovado pelo Gabinete Federal em 6 de julho reserva 590 milhões de euros aos Integrationskurse, ante cerca de 1 bilhão em 2026, segundo o Ministério do Interior.",
      body: "O Gabinete Federal da Alemanha aprovou, em 6 de julho de 2026, o Regierungsentwurf, o projeto de orçamento federal para 2027, segundo comunicado oficial do Bundesfinanzministerium. Dentro desse projeto, a área responsável pelos Integrationskurse, os cursos de integração voltados a imigrantes, está entre as que sofrem o corte mais expressivo.\n\nUm porta-voz do Ministério do Interior (BMI) confirmou ao portal migazin.de que a verba prevista para os cursos de integração cai para 590 milhões de euros em 2027, ante cerca de 1 bilhão de euros reservados em 2026, uma redução de aproximadamente 41%. Um documento oficial do Bundestag, o hib, cita 954 milhões de euros como um dos pontos de destaque de gasto do orçamento do BMI de 2026 para os Integrationskurse, valor próximo da ordem de grandeza citada pelo próprio ministério, embora outra fonte independente, o instituto BIAJ, aponte 1.063.980.000 euros para a mesma rubrica em 2026. As diferenças refletem a linha orçamentária exata usada em cada contagem, mas a direção e o tamanho do corte são reconhecidos pelo próprio BMI.\n\nOs Integrationskurse combinam aulas de língua alemã e de orientação sobre a sociedade e o sistema jurídico do país, e para muitos imigrantes são também parte do caminho para autorização de residência e, mais adiante, para a cidadania. Um orçamento menor tende a significar menos vagas ou turmas, embora o próprio projeto ainda precise ser votado no Bundestag e no Bundesrat antes de valer.\n\nPara quem já está matriculado ou pretende se inscrever num curso de integração, o recado é de atenção. Vale acompanhar a tramitação do orçamento 2027 e procurar informações atualizadas diretamente com o BAMF ou a instituição responsável pelo curso, já que os números e prazos ainda podem mudar até a aprovação final.",
      keyFacts: [
        "Regierungsentwurf do orçamento federal de 2027 aprovado pelo Gabinete Federal em 6 de julho de 2026 (Bundesfinanzministerium).",
        "Verba dos Integrationskurse cai para 590 milhões de euros em 2027, ante cerca de 1 bilhão de euros em 2026, segundo porta-voz do BMI (corte de aproximadamente 41%).",
        "Fonte do Bundestag (hib) cita 954 milhões de euros como gasto do BMI com Integrationskurse em 2026; instituto BIAJ aponta 1.063.980.000 euros para a mesma rubrica, mesma ordem de grandeza.",
        "Ainda é um projeto de orçamento, sujeito a votação no Bundestag e no Bundesrat antes de entrar em vigor.",
      ],
      sources: [
      { label: "Bundesfinanzministerium · Regierungsentwurf Bundeshaushalt 2027", url: "https://www.bundesfinanzministerium.de/Content/DE/Pressemitteilungen/Finanzpolitik/2026/07/2026-07-06-regierungsentwurf-bundeshaushalt-2027.html" },
      { label: "Deutscher Bundestag (hib) · Haushalt 2026: BMI-Etat soll auf 16 Milliarden Euro steigen", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1105670" },
      { label: "migazin.de · Bund kürzt Integrationskurse und Asylberatung massiv im Haushalt", url: "https://www.migazin.de/2026/07/09/bundesregierung-bestaetig-kahlschlag-bei-integratinskursen-und-asylberatung/" },
    ],
    },
    {
      publishedAt: D,
      headline: "EES: o novo registro de fronteira que muda a chegada de estrangeiros à Alemanha",
      standfirst: "Sistema europeu de entrada e saída registra dados biométricos de viajantes não europeus e gera filas nos aeroportos alemães.",
      body: `A Alemanha, como parte do espaço Schengen, passou a operar o EES, o Sistema de Entrada e Saída da União Europeia. Na prática, todo viajante de fora da UE precisa registrar dados do passaporte e informações biométricas em um ponto de controle específico antes de passar pela conferência de passaporte comum. O objetivo é modernizar o controle de fronteira e substituir o carimbo manual no passaporte.\n\nDe acordo com o IamExpat, o sistema começou de forma parcial em outubro de 2025 e teve implementação plena em 10 de abril de 2026. Aeroportos e companhias aéreas, porém, pediram à UE a suspensão temporária durante julho e agosto, período de pico de viagens. A reportagem cita relatos de filas e atrasos no processamento, com suspensões pontuais já adotadas em outros países europeus.\n\nPara quem pretende imigrar, estudar ou trabalhar na Alemanha, a recomendação prática é planejar a chegada com margem de tempo maior no aeroporto e confirmar sempre os procedimentos junto a canais oficiais antes de embarcar. As regras podem variar conforme o andamento da implementação, então vale checar a informação mais recente perto da data da viagem.`,
      keyFacts: [
        "O EES registra passaporte e biometria de todo viajante de fora da UE na entrada no espaço Schengen, incluindo a Alemanha.",
        "Operação parcial começou em outubro de 2025 e a implementação plena ocorreu em 10 de abril de 2026, segundo o IamExpat.",
        "Aeroportos e companhias aéreas pediram a suspensão do sistema em julho e agosto, alegando filas e atrasos no processamento.",
      ],
      sources: [{ label: "IamExpat in Germany", url: "https://www.iamexpat.de/expat-info/germany-news/eu-must-take-stock-reality-and-suspend-ees-over-summer-say-airlines" }],
    }],
  },

  fr: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "O verão dos incêndios: por que 2026 já é a pior temporada de fogo na França desde 1945",
      standfirst: "Entre vigilância vermelha de calor, milhares de hectares queimados em Fontainebleau e a promessa de tolerância zero de Macron, a crise dos incêndios florestais expôs o quanto o risco subiu na França neste verão.",
      body: "A floresta de Fontainebleau, um dos símbolos naturais mais visitados perto de Paris, virou neste mês o centro de uma crise que a imprensa francesa já descreve como a pior temporada de incêndios do país desde 1945. Entre 2.000 e 2.050 hectares foram consumidos pelas chamas, e o tamanho do estrago levou o próprio presidente Emmanuel Macron a visitar a região em 16 de julho de 2026. No local, segundo comunicado oficial da Presidência da República, ele foi direto ao ponto sobre quem provocou o fogo: não haverá nenhuma tolerância, e o governo será intransigente.\n\nO alerta de risco não é novo nem isolado. A Préfecture de Seine-et-Marne mantém vigilância vermelha de calor desde 11 de julho, e já contabilizava mais de 1.300 hectares queimados só em Fontainebleau antes mesmo da visita presidencial. No mesmo período, o Météo-France registrava vários departamentos franceses sob risco muito elevado de incêndio florestal, um retrato de que a onda de calor e a seca do solo se combinaram para criar condições propícias ao fogo em boa parte do território.\n\nA resposta institucional não ficou só no discurso. A investigação sobre a origem dos incêndios corre sob autoridade da procuradora da República de Fontainebleau, Diane Ngomsik, que confirmou publicamente a existência de vários suspeitos em custódia, com dois já indiciados e presos preventivamente. Essas declarações foram replicadas de forma consistente por veículos como franceinfo, CNEWS, RTBF, actu17 e La Libre, o que dá confiança ao fato, ainda que não exista, até o momento, um comunicado com URL própria do Ministério Público francês detalhando o caso.\n\nPara quem mora, visita ou planeja se mudar para a França, a soma desses três elementos, o alerta meteorológico oficial, a resposta política de linha dura e a investigação criminal em andamento, sinaliza uma mudança de postura. O discurso de tolerância zero de Macron não é apenas retórica de ocasião: ele acompanha um aparato de vigilância de risco e uma apuração judicial já em curso, com prisões preventivas confirmadas.\n\nA recomendação prática, tanto para residentes quanto para quem viaja pela região neste verão, é acompanhar os avisos oficiais da préfecture local e do Météo-France antes de qualquer atividade ao ar livre em área florestal, e evitar qualquer fonte de ignição enquanto durar o período de risco elevado. A investigação segue aberta, e novos desdobramentos devem ser confirmados sempre nos canais oficiais, não em versões não verificadas que circulam nas redes.",
      tags: ["França", "Incêndios florestais", "Fontainebleau", "Segurança"],
      sources: [
      { label: "Présidence de la République · Élysée, \"Déplacement à Fontainebleau\"", url: "https://www.elysee.fr/emmanuel-macron/2026/07/16/deplacement-a-fontainebleau" },
      { label: "Préfecture de Seine-et-Marne · \"Incendies : points de situation\"", url: "https://www.seine-et-marne.gouv.fr/Actualites/Incendies-points-de-situation" },
      { label: "Météo-France · \"Attention au danger feux de forêts élevé, très élevé\"", url: "https://meteofrance.com/actualites-et-dossiers/actualites/attention-au-danger-feux-de-forets-eleve-tres-eleve" },
      { label: "franceinfo · declarações da procureure Diane Ngomsik", url: "https://www.franceinfo.fr/faits-divers/incendie/deux-suspects-mis-en-examen-pour-les-incendies-de-fontainebleau_8109698.html" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Incêndios na França: Macron promete \"nenhuma tolerância\" após pior temporada desde 1945",
      body: "Em visita a Fontainebleau no dia 16 de julho de 2026, o presidente francês Emmanuel Macron declarou que \"não haverá nenhuma tolerância\" e que o governo \"será intransigente\" com quem provocou os incêndios na região, segundo comunicado oficial da Presidência da República francesa. O fogo já consumiu entre 2.000 e 2.050 hectares de floresta, e a imprensa classifica esta como a pior temporada de incêndios do país desde 1945.\n\nA Préfecture de Seine-et-Marne mantém vigilância vermelha de calor desde 11 de julho, com mais de 1.300 hectares queimados só em Fontainebleau, e o Météo-France registra risco muito elevado de incêndio florestal em vários departamentos nessa janela de julho. A investigação corre sob autoridade da procuradora da República de Fontainebleau, que confirmou suspeitos em custódia, com dois já indiciados e presos preventivamente, segundo declarações replicadas por diversos veículos franceses.",
      cta: "Está na França ou vai visitar região de risco de incêndio neste verão? Evite qualquer fonte de ignição em área florestal e siga as orientações oficiais da préfecture local antes de acampar ou fazer fogueira.",
      sources: [
      { label: "Présidence de la République · Élysée, \"Déplacement à Fontainebleau\"", url: "https://www.elysee.fr/emmanuel-macron/2026/07/16/deplacement-a-fontainebleau" },
      { label: "Préfecture de Seine-et-Marne · \"Incendies : points de situation\"", url: "https://www.seine-et-marne.gouv.fr/Actualites/Incendies-points-de-situation" },
      { label: "Météo-France · \"Attention au danger feux de forêts élevé, très élevé\"", url: "https://meteofrance.com/actualites-et-dossiers/actualites/attention-au-danger-feux-de-forets-eleve-tres-eleve" },
      { label: "franceinfo · declarações da procureure Diane Ngomsik", url: "https://www.franceinfo.fr/faits-divers/incendie/deux-suspects-mis-en-examen-pour-les-incendies-de-fontainebleau_8109698.html" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Comissão Europeia obriga Google a compartilhar dados de busca e abrir o Android a rivais",
      body: "A Comissão Europeia determinou, sob as regras do Digital Markets Act, que o Google compartilhe dados de busca com concorrentes a partir de janeiro de 2027 e abra 11 recursos do sistema Android a rivais de inteligência artificial a partir de julho de 2027. A decisão, identificada como IP/26/825, está publicada no presscorner oficial da instituição em Bruxelas.\n\nKent Walker, chefe de assuntos globais do Google, reagiu dizendo que a medida \"compromete garantias vitais de privacidade e segurança de milhões de europeus\", frase citada de forma consistente por veículos internacionais como 9to5Google, CNBC e The Register. Quem mora ou pretende morar na França, como em qualquer país da União Europeia, pode sentir o efeito no funcionamento de serviços do Google ao longo de 2027, à medida que a decisão for cumprida.",
      cta: "Usa serviços Google no dia a dia na França? Vale acompanhar como a Comissão Europeia cobra o cumprimento da decisão ao longo de 2027, já que ela pode mudar como busca e Android funcionam na região.",
      sources: [
      { label: "Comissão Europeia · Press Corner (decisão IP/26/825, Digital Markets Act)", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_26_825" },
    ],
    },
    {
      publishedAt: D,
      title: "França debate projeto que restringe casamento de estrangeiros sem documento",
      body: `A Assembleia Nacional francesa voltou a discutir, em 25 de junho, um projeto de lei que pretende proibir o casamento de estrangeiros em situação irregular no país. A proposta, apresentada pelo partido UDR de Eric Ciotti, conta com o apoio do governo e responde a pedidos de prefeitos que dizem se recusar a celebrar uniões que consideram fraudulentas, sem real intenção matrimonial. Para quem planeja construir vida na França, é um tema que merece atenção, porque toca diretamente na relação entre estado civil e situação migratória.\n\nÉ importante deixar claro que se trata, por enquanto, de um projeto em tramitação, e não de uma lei em vigor. Nada muda de imediato, mas o simples avanço da discussão sinaliza uma tendência de endurecimento. Se você tem planos que envolvem casamento na França ligados à regularização, vale acompanhar de perto o desfecho no Parlamento e conferir sempre a fonte oficial antes de tomar qualquer decisão.`,
      cta: "Acompanhe a tramitação pela imprensa francesa de referência e confirme cada passo com um advogado de imigração antes de agir.",
      sources: [{ label: "Le Monde · Immigration et diversité", url: "https://www.lemonde.fr/societe/article/2026/06/25/l-interdiction-des-mariages-d-etrangers-sans-papiers-de-retour-a-l-assemblee-nationale-avec-le-soutien-du-gouvernement_6713343_3224.html" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "França adota lei da \"ajuda para morrer\" após mais de um ano de debate no Parlamento",
      standfirst: "Assembleia Nacional aprovou definitivamente o texto em 15 de julho de 2026, por 291 votos a favor, com pontos específicos agora sob análise do Conselho Constitucional.",
      body: "A Assembleia Nacional da França adotou definitivamente, em 15 de julho de 2026, a proposta de lei que cria o direito à aide à mourir, a ajuda para morrer, encerrando mais de um ano e quatro meses de debate parlamentar. A votação terminou com 291 votos a favor, 241 contra e 29 abstenções, segundo o portal oficial do governo francês, o info.gouv.fr.\n\nO caminho até a aprovação não foi direto. O Senado francês havia se posicionado contrário ao texto em sua própria votação, mas, pelo rito legislativo, coube à Assembleia Nacional a palavra final, conforme detalha o dossiê legislativo oficial do Senado sobre a Proposition de loi relative au droit à l'aide à mourir.\n\nAntes da promulgação, o primeiro-ministro Sébastien Lecornu acionou o Conselho Constitucional para avaliar pontos específicos do texto. Entre eles estão o prazo de retratação previsto no artigo 6, as regras de consentimento aplicáveis a adultos sob proteção legal e a cláusula de consciência que permite a profissionais de saúde recusar participação no procedimento.\n\nParte da imprensa aponta setembro de 2026 como data provável de entrada em vigor, com um período de reflexão para o paciente antes de recorrer ao procedimento. Esse detalhe específico de calendário, porém, ainda não foi confirmado por nós em fonte oficial primária, e quem acompanha o tema deve tratar a informação com essa ressalva até a publicação definitiva no Journal officiel.",
      keyFacts: [
        "Assembleia Nacional aprovou definitivamente a lei da ajuda para morrer em 15 de julho de 2026, por 291 votos a favor, 241 contra e 29 abstenções (info.gouv.fr).",
        "O Senado havia votado contra o texto, mas a palavra final coube à Assembleia Nacional, segundo o dossiê legislativo oficial do Senado.",
        "O processo levou mais de um ano e quatro meses de debate parlamentar.",
        "O primeiro-ministro Sébastien Lecornu acionou o Conselho Constitucional sobre o prazo de retratação do artigo 6, o consentimento de adultos protegidos e a cláusula de consciência.",
        "A data exata de entrada em vigor, apontada informalmente para setembro de 2026, ainda não foi confirmada por nós em fonte oficial primária.",
      ],
      sources: [
      { label: "Gouvernement français · info.gouv.fr, \"Fin de vie : le Parlement adopte définitivement la proposition de loi\"", url: "https://www.info.gouv.fr/actualite/fin-de-vie-le-parlement-adopte-definitivement-la-proposition-de-loi" },
      { label: "Sénat · dossiê legislativo, \"Proposition de loi relative au droit à l'aide à mourir\"", url: "https://www.senat.fr/travaux-parlementaires/textes-legislatifs/la-loi-en-clair/proposition-de-loi-relative-au-droit-a-laide-a-mourir.html" },
    ],
    },
    {
      publishedAt: D,
      headline: "França retoma projeto que veta casamento de estrangeiros em situação irregular",
      standfirst: "Proposta apoiada pelo governo voltou à Assembleia Nacional em 25 de junho e reacende o debate sobre estado civil e situação migratória.",
      body: `A Assembleia Nacional da França retomou, em 25 de junho de 2026, a discussão de um projeto de lei que busca proibir o casamento de estrangeiros que estejam no país sem documentação regular. O texto foi apresentado pelo partido UDR, de Eric Ciotti, e, segundo o Le Monde, recebeu o apoio do governo, o que aumenta o peso da proposta no processo legislativo.\n\nDe acordo com a reportagem, a iniciativa responde a pedidos de alguns prefeitos, responsáveis por celebrar casamentos na França, que dizem se recusar a oficializar uniões que suspeitam ser fraudulentas, ou seja, sem verdadeira intenção matrimonial. O debate se insere em um contexto europeu de discussões mais rígidas sobre migração, mas os detalhes finais do texto ainda dependem da votação no Parlamento.\n\nPara quem sonha em morar, trabalhar ou constituir família na França, o recado é de cautela e informação. Trata-se de um projeto ainda em tramitação, sem efeito prático neste momento, e o conteúdo pode mudar até a aprovação, se houver. A recomendação é acompanhar a evolução pela imprensa oficial e por fontes jurídicas confiáveis, evitando decisões precipitadas baseadas em versões preliminares do texto.`,
      keyFacts: [
        "Em 25 de junho de 2026, a Assembleia Nacional francesa retomou o debate de um projeto que veta o casamento de estrangeiros sem documento regular, segundo o Le Monde.",
        "A proposta é do partido UDR, de Eric Ciotti, e tem o apoio do governo, o que reforça seu peso na tramitação.",
        "O projeto atende a pedidos de prefeitos que dizem se recusar a celebrar uniões suspeitas de serem fraudulentas, sem intenção matrimonial.",
        "É um projeto de lei ainda em discussão, sem efeito imediato; o texto pode mudar e só valeria após aprovação parlamentar.",
      ],
      sources: [{ label: "Le Monde · Immigration et diversité", url: "https://www.lemonde.fr/societe/article/2026/06/25/l-interdiction-des-mariages-d-etrangers-sans-papiers-de-retour-a-l-assemblee-nationale-avec-le-soutien-du-gouvernement_6713343_3224.html" }],
    }],
  },

  at: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Retorno, detenção e Remigration: por que a política migratória europeia está mais dura, e o que muda na Áustria",
      standfirst: "Entre a aprovação final dos centros de retorno da UE, a crítica da ONU e a repreensão a Herbert Kickl no Parlamento austríaco, o continente atravessa um momento de endurecimento migratório com reflexos diretos no dia a dia de quem vive na Áustria.",
      body: "Várias peças que pareciam soltas se encaixam quando olhadas juntas. No dia 17 de junho de 2026, o Parlamento Europeu aprovou em plenário, por 418 votos a favor, 218 contra e 30 abstenções, a nova Return Regulation, o regulamento que rege o retorno de pessoas em situação irregular na União Europeia. Segundo o comunicado oficial do Parlamento e o acordo prévio fechado com o Conselho da UE, o texto formaliza os chamados return hubs, centros de retorno localizados fora do bloco, amplia o tempo máximo de detenção pré-remoção de 6 meses para até 2 anos, e endurece as proibições de reentrada, que passam de 5 para até 10 anos, podendo em certos casos ser vitalícias.\n\nA medida não passou sem crítica. Em 20 de junho de 2026, o Alto Comissariado das Nações Unidas para os Direitos Humanos publicou um comunicado do próprio Alto Comissário, Volker Türk, manifestando preocupação com o novo regulamento. Na nota oficial, ele afirmou que \"EU States cannot simply outsource their human rights obligations to third States\", ou seja, que os Estados da UE não podem simplesmente terceirizar suas obrigações de direitos humanos para países terceiros. É um posicionamento direto da ONU contra o modelo dos centros de retorno fora do bloco.\n\nOs números também mostram a tendência de endurecimento nas fronteiras. Segundo release oficial do Eurostat publicado em 12 de maio de 2026, 132.600 cidadãos de países terceiros foram recusados na entrada da União Europeia em 2025, um aumento de 7,1% frente aos 123.835 casos de 2024. Ucranianos foram a nacionalidade mais recusada, com 26.975 casos, seguidos por albaneses, moldavos e colombianos. Polônia, França, Croácia e Espanha concentraram a maior parte das recusas.\n\nNa Áustria, o mesmo clima aparece dentro do próprio Parlamento. Em 21 de maio de 2026, durante o debate sobre o Relatório de Extremismo 2024, a 3ª presidente do Conselho Nacional, Doris Bures, do SPÖ, aplicou dois Ordnungsrufe, chamadas formais à ordem, contra o líder do FPÖ, Herbert Kickl. Uma delas foi por métodos considerados sujos no debate, e a outra pelo uso repetido do termo Remigration, que Bures classificou oficialmente como carregado de ideologia völkisch nacionalista. O registro é do próprio Parlamento austríaco, no comunicado da sessão. Não é só um debate de bastidores, é uma sanção procedimental documentada, que mostra o tema esquentando também dentro da política doméstica austríaca.\n\nVale registrar que o endurecimento não é a única direção do momento. Na mesma semana em que o Parlamento Europeu discutia retorno e detenção, o Conselho da UE também decidiu estender a proteção temporária para quem fugiu da guerra na Ucrânia até março de 2028, mantendo intactos os direitos de quem já tem o status. Ou seja, a União Europeia aperta o controle de fronteira e o retorno de quem está irregular, ao mesmo tempo em que preserva a proteção já concedida a quem tem direito a ela. Para quem vive ou pretende viver na Áustria, o recado prático é manter a documentação e o status migratório sempre regularizados, e acompanhar essas mudanças pelas fontes oficiais, já que o cenário europeu de imigração segue em movimento.",
      tags: ["Áustria", "União Europeia", "política migratória", "retorno e deportação", "proteção temporária"],
      sources: [
      { label: "European Parliament · comunicado oficial de imprensa", url: "https://www.europarl.europa.eu/news/en/press-room/20260611IPR45214/new-eu-system-for-return-of-illegally-staying-third-country-nationals" },
      { label: "Council of the EU (Consilium) · acordo Conselho/Parlamento sobre a Return Regulation", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/06/01/council-and-parliament-reach-deal-on-returns-of-illegally-staying-third-country-nationals/" },
      { label: "OHCHR · comunicado oficial de Volker Türk", url: "https://www.ohchr.org/en/press-releases/2026/06/un-human-rights-chief-concerned-about-new-eu-returns-law-urges-consistency" },
      { label: "Eurostat · comunicado oficial", url: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260512-1" },
      { label: "Parlament Österreich · comunicado oficial da sessão do Nationalrat (PK0453)", url: "https://www.parlament.gv.at/aktuelles/pk/jahr_2026/pk0453" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "UE estende proteção temporária a ucranianos até março de 2028",
      body: "Os embaixadores dos Estados membros da União Europeia concordaram, em 15 de julho de 2026, em estender a proteção temporária para quem fugiu da guerra na Ucrânia até 4 de março de 2028. A informação é do comunicado oficial do Conselho da União Europeia, o Consilium. Quem já tem o status de proteção temporária não é afetado pela mudança e segue protegido normalmente até a nova data.\n\nA partir de agora, porém, quem ainda vai solicitar a proteção temporária pela primeira vez precisa comprovar que cumpriu, ou está isento, da obrigação de serviço militar ucraniano para receber o status. A adoção formal pelo Conselho ainda é um trâmite pendente, mas a decisão política já é pública. Como a Áustria é Estado membro da União Europeia, a extensão vale automaticamente no país.",
      cta: "Já tem proteção temporária na Áustria? Nada muda pra você até março de 2028. Vai pedir agora pela primeira vez? Comece a organizar a documentação sobre sua situação militar.",
      sources: [
      { label: "Council of the EU (Consilium) · comunicado oficial, 15/07/2026", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Graz: até 40 mil estrangeiros de fora da UE elegeram seu conselho consultivo em junho",
      body: "A cidade de Graz tem uma instituição pouco conhecida fora da Áustria, o Migrant:innenbeirat, o Conselho Consultivo de Migrantes, eleito por voto direto e secreto de residentes estrangeiros. Em 28 de junho de 2026, a eleição do conselho aconteceu junto com a eleição municipal, com cerca de 40 mil residentes de fora da União Europeia, com 16 anos ou mais e moradia em Graz, aptos a votar. O mandato dos eleitos é de 5 anos, segundo o portal oficial da Prefeitura de Graz.\n\nÉ, hoje, a única forma de um cidadão de fora da UE participar de uma votação na Áustria. Para quem já mora em Graz ou pensa em se mudar pra lá, vale conhecer o conselho e acompanhar seu trabalho nos próximos cinco anos, já que ele é o canal oficial de representação da comunidade migrante junto à administração municipal.",
      cta: "Mora em Graz e é de fora da UE? Conheça o Migrant:innenbeirat e fique de olho nos próximos passos do conselho eleito em junho.",
      sources: [
      { label: "Stadt Graz · Migrant:innenbeirat (portal oficial)", url: "http://www.graz.at/migrantInnenbeirat" },
    ],
    },
    {
      publishedAt: D,
      title: "Áustria: 2 em cada 3 estrangeiros querem a cidadania, mas as regras seguem apertadas",
      body: `Uma nova pesquisa citada pela imprensa austríaca indica que mais de dois terços dos residentes estrangeiros que vivem na Áustria gostariam de se naturalizar. O interesse é alto, mas o caminho continua exigente, com barreiras legais que a própria reportagem destaca como rígidas.\n\nNa prática, a Áustria mantém um dos regimes de cidadania mais restritivos da Europa, com longo tempo de residência, comprovação de renda, conhecimento de idioma e, na regra geral, exigência de abrir mão da nacionalidade anterior. Para quem planeja construir vida no país, o recado é claro, o desejo de virar cidadão é comum, mas o processo pede planejamento desde o primeiro dia de residência.`,
      cta: "Se o seu plano é morar na Áustria de forma definitiva, comece a organizar residência, idioma e documentação com antecedência e acompanhe as fontes oficiais.",
      sources: [{ label: "The Local Austria", url: "https://www.thelocal.at/20260626/majority-of-foreign-residents-in-austria-want-citizenship-survey-finds" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "UE estende proteção temporária a ucranianos até 2028, com nova exigência para novos pedidos",
      standfirst: "Decisão dos embaixadores dos Estados membros, anunciada em 15 de julho, prolonga o status até março de 2028. Quem já tem proteção não é afetado, mas novos requerentes terão de comprovar situação militar.",
      body: "Os embaixadores dos Estados membros da União Europeia concordaram, em 15 de julho de 2026, em estender a proteção temporária concedida a quem fugiu da guerra na Ucrânia. Segundo o comunicado oficial do Conselho da União Europeia, o Consilium, o status passa a valer até 4 de março de 2028.\n\nA extensão não muda nada para quem já tem o status de proteção temporária, que continua protegido normalmente até a nova data. A mudança relevante vale só para novos pedidos, feitos a partir de agora. Para receber a proteção temporária pela primeira vez, o requerente precisa comprovar que cumpriu, ou está isento, da obrigação de serviço militar ucraniano.\n\nA adoção formal da medida pelo Conselho da União Europeia ainda é um trâmite pendente, uma espécie de chancela final de procedimento. Mas a decisão política em si, tomada pelos embaixadores dos Estados membros, já é oficial e pública. Como Estado membro da União Europeia, a Áustria aplica a extensão automaticamente a quem já vive no país sob esse status.\n\nPara a comunidade ucraniana na Áustria, o recado prático é de continuidade e atenção. Quem já tem proteção temporária não precisa fazer nada além de manter a documentação em dia. Quem pretende solicitar o status agora deve reunir com antecedência os documentos que comprovem a situação militar, e sempre confirmar os detalhes do processo diretamente com as autoridades austríacas.",
      keyFacts: [
        "Embaixadores dos Estados membros da UE concordaram, em 15 de julho de 2026, em estender a proteção temporária a ucranianos até 4 de março de 2028.",
        "Quem já tem o status de proteção temporária não é afetado pela mudança.",
        "A partir de agora, novos requerentes precisam comprovar que cumpriram, ou estão isentos, da obrigação de serviço militar ucraniano.",
        "A adoção formal pelo Conselho da UE ainda é um trâmite pendente, mas a decisão política já é pública.",
        "Como Estado membro da UE, a Áustria aplica a extensão automaticamente a quem já vive no país sob esse status.",
      ],
      sources: [
      { label: "Council of the EU (Consilium) · comunicado oficial, 15/07/2026", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" },
    ],
    },
    {
      publishedAt: D,
      headline: "Maioria dos estrangeiros na Áustria quer a cidadania, mas as barreiras continuam altas",
      standfirst: "Pesquisa recente aponta forte desejo de naturalização entre residentes estrangeiros, esbarrando em um dos regimes de cidadania mais exigentes da Europa.",
      body: `Segundo reportagem do The Local Austria publicada em 26 de junho de 2026, mais de dois terços dos residentes estrangeiros no país manifestam vontade de obter a cidadania austríaca. O dado mostra que a naturalização é uma meta concreta para boa parte de quem já vive e trabalha na Áustria.\n\nAo mesmo tempo, a própria matéria ressalta que existem barreiras rígidas. A Áustria é conhecida por critérios severos, que costumam incluir vários anos de residência contínua, comprovação de meios de subsistência, domínio do alemão, prova de conhecimentos sobre o país e, como regra, a renúncia à nacionalidade de origem, salvo exceções previstas em lei.\n\nPara o público que planeja imigrar, o ponto central é estratégico. A cidadania não é um passo automático, ela depende de um histórico de residência regular bem construído. Vale confirmar cada requisito atualizado junto às autoridades austríacas antes de tomar decisões, já que prazos e condições podem mudar.`,
      keyFacts: [
        "Mais de dois terços dos residentes estrangeiros na Áustria disseram querer se naturalizar, segundo pesquisa citada pelo The Local Austria (26/06/2026).",
        "A reportagem destaca que existem barreiras rígidas, coerentes com a fama da Áustria de ter um dos regimes de cidadania mais restritivos da Europa.",
        "Requisitos típicos incluem longo tempo de residência, renda comprovada, idioma alemão e, em regra, renúncia à nacionalidade anterior; confirme sempre nas fontes oficiais.",
      ],
      sources: [{ label: "The Local Austria", url: "https://www.thelocal.at/20260626/majority-of-foreign-residents-in-austria-want-citizenship-survey-finds" }],
    }],
  },

  se: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Suécia em movimento duplo: mais rigor de conduta agora, mais flexibilidade de trabalho em 2027",
      standfirst: "Enquanto a exigência de 'bom comportamento' para permissões de residência já está em vigor, o governo sueco também avança com uma reforma que promete simplificar o visto de trabalho a partir de fevereiro de 2027.",
      body: "A política migratória da Suécia se move em duas direções ao mesmo tempo. De um lado, desde 13 de julho de 2026, está em vigor uma exigência reforçada de vandel, o termo sueco para bom comportamento e idoneidade, que dá ao Migrationsverket mais poder para recusar ou revogar permissões de residência baseadas em trabalho ou família. Os exemplos de falta de idoneidade citados pelo próprio governo incluem dívidas sistemáticas não pagas, trabalho sem declaração de impostos e contato com redes criminosas ou organizações terroristas e extremistas.\n\nDe outro lado, o Regeringskansliet, o gabinete do governo sueco, publicou uma lagrådsremiss, etapa formal do processo legislativo sueco, propondo tornar o visto de trabalho mais flexível. A proposta desvincula a permissão de um empregador ou cargo específico, amplia a validade do visto para até 2 anos, estende de 3 para 6 meses o prazo para buscar novo emprego em caso de desemprego para quem já tem permissão há mais de 2 anos, reduz o prazo padrão de processamento para 90 dias e proíbe empregadores de cobrar do trabalhador a taxa do pedido. A entrada em vigor está prevista para 1º de fevereiro de 2027, data que já atrasou em relação ao cronograma original, que previa maio de 2026.\n\nEssas mudanças domésticas acontecem junto com um movimento em nível europeu. O Conselho da União Europeia confirmou, em 15 de julho de 2026, que os países do bloco, entre eles a Suécia, concordaram em estender a proteção temporária para quem fugiu da guerra na Ucrânia até 4 de março de 2028, um ano além do prazo original. A partir de março de 2027, porém, essa proteção só será concedida a novos requerentes que comprovarem ter cumprido suas obrigações de serviço militar na Ucrânia, condição que não atinge quem já está protegido hoje.\n\nJuntos, os três movimentos desenham um quadro específico para quem pretende viver ou trabalhar na Suécia. A idoneidade do requerente passa a pesar mais na avaliação de permissões baseadas em trabalho e família, com efeito imediato. Ao mesmo tempo, o mercado de trabalho qualificado ganha, em médio prazo, um processo de permissão mais simples e menos amarrado a um único empregador. E a proteção para refugiados da guerra na Ucrânia segue garantida até 2028, com uma condição adicional que passa a valer só para novos pedidos a partir de 2027. Para qualquer um desses casos, prazos e critérios finais devem ser sempre confirmados nas fontes oficiais, Migrationsverket e Regeringen, antes de qualquer decisão.",
      tags: ["Suécia", "Migrationsverket", "visto de trabalho", "vandel", "Ucrânia", "proteção temporária"],
      sources: [
      { label: "Migrationsverket · New requirements regarding good conduct (vandel) for residence permits", url: "https://www.migrationsverket.se/nyheter/news-archive/2026-07-13-new-requirements-regarding-good-conduct-vandel-for-residence-permits.html" },
      { label: "Regeringen.se · Regeringen vill förenkla processen för arbetskraftsinvandrare", url: "https://www.regeringen.se/pressmeddelanden/2026/07/regeringen-vill-forenkla-processen-for-arbetskraftsinvandrare/" },
      { label: "Regeringen.se · Lagrådsremiss: Nya regler om ansökningsförfarandet för vissa uppehålls- och arbetstillstånd", url: "https://www.regeringen.se/rattsliga-dokument/lagradsremiss/2026/07/nya-regler-om-ansokningsforfarandet-for-vissa-uppehalls--och-arbetstillstand/" },
      { label: "Council of the European Union · comunicado oficial 15/07/2026", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" },
      { label: "The Local Sweden", url: "https://www.thelocal.se/20260709/sweden-aims-for-2027-launch-of-more-flexible-work-permit-rules" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Suécia: exigência de 'bom comportamento' para residência entra em vigor",
      body: "A partir de 13 de julho de 2026, passou a valer na Suécia uma exigência reforçada de vandel, expressão sueca para bom comportamento e idoneidade, aplicada a quem pede permissão de residência. A confirmação é do Migrationsverket, a Agência de Migração sueca: agora o órgão tem mais poder para recusar ou revogar uma permissão por falta de vandel. Entre os exemplos citados pelo próprio governo estão dívidas sistemáticas não pagas, trabalho sem declarar impostos e contato com redes criminosas, organizações terroristas ou extremistas.\n\nA regra vale para permissões com base na lei de imigração sueca, como trabalho e reagrupamento familiar, mas não se aplica a quem tem permissão baseada em direito da União Europeia ou em proteção internacional. Quem está em processo de pedido ou renovação deve manter a situação fiscal e financeira em dia e confirmar o próprio caso diretamente com o Migrationsverket.",
      cta: "Tem pedido ou renovação de residência baseada em trabalho ou família na Suécia em andamento? Confira se suas obrigações fiscais e financeiras estão regularizadas antes de qualquer novo passo.",
      sources: [
      { label: "Migrationsverket · New requirements regarding good conduct (vandel) for residence permits", url: "https://www.migrationsverket.se/nyheter/news-archive/2026-07-13-new-requirements-regarding-good-conduct-vandel-for-residence-permits.html" },
      { label: "The Local Sweden", url: "https://www.thelocal.se/20260713/swedens-new-good-conduct-requirements-for-foreigners-comes-into-force" },
      { label: "Regeringen.se · Regeringen går nu vidare med ett nytt vandelskrav", url: "https://www.regeringen.se/pressmeddelanden/2026/05/regeringen-gar-nu-vidare-med-ett-nytt-vandelskrav/" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "União Europeia estende proteção a quem fugiu da Ucrânia até março de 2028",
      body: "O Conselho da União Europeia confirmou, em comunicado oficial de 15 de julho de 2026, que os países do bloco concordaram em estender a proteção temporária de quem fugiu da Ucrânia até 4 de março de 2028, um ano a mais do que estava previsto. Como Estado-membro da UE, a Suécia segue essa decisão coletiva assim que ela for formalmente adotada.\n\nA partir de março de 2027, a proteção passa a ser concedida apenas a novos requerentes que comprovarem ter cumprido suas obrigações de serviço militar na Ucrânia, regra que não afeta quem já está protegido. A decisão formal ainda precisa ser publicada no Jornal Oficial da União Europeia nas próximas semanas, mas o acordo político já é oficial.",
      cta: "Se você tem proteção temporária como refugiado da Ucrânia na Suécia, o prazo segue válido até março de 2028. Acompanhe a publicação formal no Jornal Oficial da UE para confirmar os próximos passos.",
      sources: [
      { label: "Council of the European Union · comunicado oficial 15/07/2026", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/07/15/eu-countries-agree-to-extend-temporary-protection-for-those-fleeing-ukraine-until-march-2028/" },
      { label: "The Local Sweden", url: "https://www.thelocal.se/20260715/eu-extends-right-to-stay-for-ukrainians-but-excludes-military-age-men" },
      { label: "European Commission (DG HOME) · proposta oficial de decisão", url: "https://home-affairs.ec.europa.eu/document/download/0f5fd553-49bd-4c39-bf97-2199a3c2b111_en?filename=Proposal+for+a+decision+extending+temporary+protection+until+4+Mar+2028.pdf" },
    ],
    },
    {
      publishedAt: D,
      title: "Estrangeiros qualificados amam a Suécia, mas temem a insegurança das regras de residência",
      body: `Uma nova pesquisa com 860 estrangeiros que vivem na Suécia mostra um retrato de dois lados. A maioria está satisfeita com a vida no país, o padrão de vida, a região onde mora e os serviços de creche, e metade diz que muito provavelmente ainda estará na Suécia daqui a três anos. O levantamento foi feito pelo instituto Infostat em parceria com o The Local e a Câmara de Comércio de Estocolmo.\n\nO alerta vem da outra metade. Entre quem está inseguro sobre o futuro no país, mais da metade aponta a incerteza sobre autorizações de residência e sobre a política migratória como o principal motivo. O pano de fundo é o endurecimento recente das regras, com aumento do piso salarial exigido para autorização de trabalho e prazo mais longo para pedir cidadania. Boa parte dos entrevistados atua em áreas de alta qualificação, como TI, pesquisa e engenharia.`,
      cta: "Se a Suécia está no seu radar, acompanhe de perto as regras de autorização de trabalho e residência antes de planejar a mudança.",
      sources: [{ label: "The Local Sweden", url: "https://www.thelocal.se/20260701/poll-foreign-residents-love-sweden-but-are-afraid-theyll-be-forced-out" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Suécia reforça exigência de 'bom comportamento' para permissões de residência",
      standfirst: "Desde 13 de julho, o Migrationsverket tem mais poder para recusar ou revogar permissões de trabalho e família por falta de vandel, a idoneidade exigida do requerente.",
      body: "O Migrationsverket, a Agência de Migração da Suécia, confirmou em nota oficial publicada em 13 de julho de 2026 que entrou em vigor naquela data uma exigência reforçada de vandel, termo sueco que reúne bom comportamento e idoneidade, para quem solicita permissão de residência no país. A partir de agora, o órgão tem mais poder para recusar ou revogar uma permissão com base em bristande vandel, ou seja, falta de idoneidade.\n\nO próprio governo sueco listou exemplos do que pode configurar essa falta de idoneidade, dívidas sistemáticas não pagas, trabalho realizado sem a devida declaração de impostos, e contato com redes criminosas, organizações terroristas ou extremistas. São critérios amplos, que dão ao Migrationsverket margem maior de avaliação sobre o comportamento do requerente além dos requisitos tradicionais de documentação e renda.\n\nA nova exigência vale para permissões concedidas com base na lei de imigração sueca, o que inclui os vistos de trabalho e de reagrupamento familiar. Ela não se aplica, porém, a quem tem permissão de residência baseada em direito da União Europeia ou em proteção internacional, categorias que seguem regras próprias.\n\nO processo que levou a essa mudança já vinha sendo anunciado pelo governo sueco desde maio de 2026, quando o Regeringen, o governo da Suécia, publicou comunicado informando que avançava com um novo vandelskrav, o requisito de idoneidade. Para quem tem processo de residência em andamento ou pretende pedir uma permissão em breve, o recado prático é manter a situação fiscal e financeira organizada e, em caso de dúvida sobre o próprio histórico, buscar orientação antes de submeter o pedido.",
      keyFacts: [
        "Exigência reforçada de vandel (bom comportamento/idoneidade) entrou em vigor em 13 de julho de 2026, segundo o Migrationsverket.",
        "O Migrationsverket passa a ter mais poder para recusar ou revogar permissões por 'bristande vandel' (falta de idoneidade).",
        "Exemplos citados pelo governo: dívidas sistemáticas não pagas, trabalho sem declarar impostos, contato com redes criminosas ou organizações terroristas/extremistas.",
        "Vale para permissões com base na lei de imigração sueca (trabalho, família); não se aplica a quem tem base em direito da UE ou proteção internacional.",
        "O processo legislativo foi anunciado pelo Regeringen (governo sueco) em maio de 2026.",
      ],
      sources: [
      { label: "Migrationsverket · New requirements regarding good conduct (vandel) for residence permits", url: "https://www.migrationsverket.se/nyheter/news-archive/2026-07-13-new-requirements-regarding-good-conduct-vandel-for-residence-permits.html" },
      { label: "Migrationsverket · Skärpta krav på skötsamhet och hederlighet", url: "https://www.migrationsverket.se/nyhetsarkiv/nyhetsarkiv/2026-07-13-skarpta-krav-pa-skotsamhet-och-hederlighet.html" },
      { label: "Regeringen.se · Regeringen går nu vidare med ett nytt vandelskrav", url: "https://www.regeringen.se/pressmeddelanden/2026/05/regeringen-gar-nu-vidare-med-ett-nytt-vandelskrav/" },
      { label: "The Local Sweden", url: "https://www.thelocal.se/20260713/swedens-new-good-conduct-requirements-for-foreigners-comes-into-force" },
    ],
    },
    {
      publishedAt: D,
      headline: "Suécia: estrangeiros qualificados aprovam a vida no país, mas a incerteza migratória preocupa",
      standfirst: "Pesquisa com 860 residentes estrangeiros mostra alta satisfação com a vida na Suécia ao lado de receio sobre autorizações de residência e mudanças na política migratória.",
      body: `Uma pesquisa conduzida pelo instituto Infostat em parceria com o The Local e a Câmara de Comércio de Estocolmo ouviu 860 leitores estrangeiros baseados na Suécia. Metade dos entrevistados disse que muito provavelmente ainda quer estar no país daqui a três anos. Entre os demais, mais da metade citou a incerteza sobre autorizações de residência ou sobre a política migratória como a principal razão para a dúvida.\n\nOs números indicam um possível efeito colateral das reformas. Segundo o levantamento, o governo apertou a política migratória nos últimos anos no que chamou de mudança de paradigma, incluindo o aumento do piso salarial para autorizações de trabalho e o alongamento do período exigido para pedir cidadania. A maior parte dos entrevistados trabalha em setores de alta qualificação, com mais de 60 por cento em TI e tecnologia, pesquisa e academia ou engenharia, justamente o perfil de talento que autoridades suecas dizem querer atrair.\n\nDo lado positivo, a satisfação com a vida no país aparece alta: 82 por cento se disseram satisfeitos com a região onde moram e 80 por cento com o padrão de vida geral. Há pontos mais frágeis, como saúde, aprovada por 49 por cento, e a dificuldade de encontrar moradia, relatada por 40 por cento. Os dados são de pesquisa de opinião com leitores do The Local e não representam uma estatística oficial do governo; para regras e prazos vigentes, a fonte de referência é a Agência Sueca de Migração (Migrationsverket).`,
      keyFacts: [
        "Pesquisa ouviu 860 estrangeiros residentes na Suécia (Infostat, The Local e Câmara de Comércio de Estocolmo).",
        "Metade pretende continuar no país em três anos; entre os inseguros, a maioria culpa a incerteza sobre residência e política migratória.",
        "Reformas recentes elevaram o piso salarial para autorização de trabalho e ampliaram o prazo para pedir cidadania.",
        "Mais de 60 por cento dos entrevistados atuam em TI, pesquisa/academia ou engenharia; 82 por cento aprovam a região onde vivem.",
        "Trata-se de pesquisa de opinião, não de dado oficial; regras e prazos devem ser confirmados no Migrationsverket.",
      ],
      sources: [{ label: "The Local Sweden", url: "https://www.thelocal.se/20260701/poll-foreign-residents-love-sweden-but-are-afraid-theyll-be-forced-out" }],
    }],
  },

  dk: {
    community: [{
      publishedAt: D,
      title: "Dinamarca registra alta na procura por cursos superiores em inglês",
      body: `A Dinamarca teve mais de 84 mil candidaturas na primeira rodada de admissão a cursos universitários e de ensino superior, segundo a imprensa dinamarquesa. Dentro desse total, a procura por cursos ministrados em inglês cresceu cerca de 4 por cento, um sinal relevante para quem sonha em estudar no país sem dominar o dinamarquês desde o primeiro dia.\n\nPara quem pensa em imigrar via estudo, esse é um dado que vale acompanhar de perto. Mais oferta e mais procura por programas em inglês tendem a facilitar a entrada de estudantes internacionais, mas também aumentam a concorrência. Confirme sempre as regras de admissão, prazos e exigências de visto de estudante diretamente com a instituição e com os canais oficiais dinamarqueses antes de tomar qualquer decisão.`,
      cta: "Está de olho na Dinamarca? Monte seu plano de estudo com base em fontes oficiais antes de se candidatar.",
      sources: [{ label: "The Local Denmark", url: "https://www.thelocal.dk/20260706/rise-in-applicants-for-danish-university-courses-taught-in-english" }],
    }],
    countryTab: [{
      publishedAt: D,
      headline: "Cresce a procura por cursos em inglês nas universidades da Dinamarca",
      standfirst: "A primeira rodada de admissão do ensino superior dinamarquês teve mais de 84 mil candidatos, com alta na busca por programas em inglês.",
      body: `A Dinamarca recebeu mais de 84 mil candidaturas na primeira rodada de admissões baseadas em notas para cursos universitários e de ensino superior, de acordo com a imprensa local. O número de candidatos a cursos ministrados em inglês subiu cerca de 4 por cento em relação ao período anterior.\n\nEsse movimento importa para quem quer estudar ou construir carreira no país. Cursos em inglês reduzem a barreira do idioma na chegada, abrindo caminho para estudantes estrangeiros que ainda não falam dinamarquês, embora o aprendizado do idioma continue sendo um diferencial para trabalhar e permanecer.\n\nVale lembrar que admissão em universidade é apenas uma etapa. O ingresso para morar no país depende de visto de estudante, comprovação financeira e prazos específicos. Antes de qualquer passo, confirme requisitos e datas nos canais oficiais dinamarqueses e na própria instituição de ensino.`,
      keyFacts: [
        "Mais de 84 mil candidaturas na primeira rodada de admissão ao ensino superior (fonte: The Local Denmark).",
        "A procura por cursos ministrados em inglês cresceu cerca de 4 por cento, favorecendo estudantes internacionais.",
        "Admissão acadêmica não substitui o visto de estudante: verifique exigências e prazos nos canais oficiais.",
      ],
      sources: [{ label: "The Local Denmark", url: "https://www.thelocal.dk/20260706/rise-in-applicants-for-danish-university-courses-taught-in-english" }],
    }],
  },

  br: {
    community: [{
      publishedAt: D,
      title: "Imigrante no Brasil também tem direito à Previdência Social",
      body: `Se você é estrangeiro e trabalha com carteira assinada no Brasil, saiba que a contribuição ao INSS abre acesso aos mesmos direitos de qualquer trabalhador brasileiro. Em Santa Catarina, o governo estadual acaba de capacitar profissionais de assistência social e do Sistema Nacional de Emprego para orientar migrantes sobre benefícios por incapacidade, benefícios assistenciais e como recorrer ou revisar um pedido negado.\n\nA ação foi conduzida em parceria com técnicos do próprio INSS e com entidades que acolhem imigrantes, como a Organização Internacional das Migrações, os Círculos de Hospitalidade e a Pastoral do Imigrante. Santa Catarina reunia 219.498 migrantes em maio de 2026 segundo o Sistema de Registro Nacional Migratório, com Venezuela, Haiti e Argentina como principais origens, e a orientação deve chegar aos municípios em uma próxima etapa.`,
      cta: "Trabalha com carteira assinada no Brasil? Procure o CRAS ou uma entidade de acolhimento da sua cidade e confirme quais benefícios do INSS já são seus por direito.",
      sources: [{ label: "Governo de Santa Catarina · Secretaria de Estado da Assistência Social", url: "https://www.sas.sc.gov.br/index.php/noticias/2856-assistencia-social-capacita-profissionais-sobre-acesso-de-migrantes-a-previdencia-social" }],
    }],
    countryTab: [{
      publishedAt: D,
      headline: "Santa Catarina reforça acesso de migrantes à Previdência Social",
      standfirst: "Estado capacita profissionais de acolhimento para orientar imigrantes sobre direitos junto ao INSS.",
      body: `A Secretaria de Estado da Assistência Social de Santa Catarina, por meio da Diretoria de Direitos Humanos, promoveu nos dias 30 de junho e 1 de julho de 2026 a capacitação Migração e Previdência. O objetivo foi orientar sobre as questões dos migrantes relacionadas ao Instituto Nacional de Seguridade Social, com temas como tipos de segurados e dependentes, benefícios por incapacidade, benefícios assistenciais e os caminhos para recurso e revisão de pedidos.\n\nA formação foi realizada em parceria com técnicos do INSS e com entidades que atuam no acolhimento da imigração no estado, entre elas a Organização Internacional das Migrações, os Círculos de Hospitalidade e a Pastoral do Imigrante. Participaram servidores do Sistema Nacional de Emprego e da Gerência de Políticas para Igualdade Racial e Imigrantes. A diretora de Direitos Humanos da pasta, Sabrina Mores, afirmou que a meta é difundir a proteção previdenciária entre os imigrantes que chegam e residem em Santa Catarina.\n\nSegundo dados de maio de 2026 do Sistema de Registro Nacional Migratório, o estado abriga 219.498 migrantes, tendo Venezuela, Haiti e Argentina como principais países de origem. Está prevista uma segunda etapa da capacitação, voltada aos técnicos dos Centros de Referência de Assistência Social e dos Creas nos municípios, para ampliar o atendimento a essa população. Para detalhes sobre elegibilidade e prazos de cada benefício, consulte sempre o INSS.`,
      keyFacts: [
        "Capacitação Migração e Previdência realizada em 30 de junho e 1 de julho de 2026 pela Secretaria de Assistência Social de Santa Catarina.",
        "Foco em orientar imigrantes sobre benefícios do INSS, incluindo benefícios por incapacidade, assistenciais e revisão de pedidos.",
        "Santa Catarina tinha 219.498 migrantes em maio de 2026 segundo o Sismigra, com Venezuela, Haiti e Argentina como principais origens.",
      ],
      sources: [{ label: "Governo de Santa Catarina · Secretaria de Estado da Assistência Social", url: "https://www.sas.sc.gov.br/index.php/noticias/2856-assistencia-social-capacita-profissionais-sobre-acesso-de-migrantes-a-previdencia-social" }],
    }],
  },

  be: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "Bélgica renova espaço público e prepara nova taxa rodoviária, num julho de decisões concretas",
      standfirst: "Licença aprovada para reordenar a Place Meiser em Schaerbeek e acordo de princípio para uma vignette rodoviária a partir de 2027 mostram um país reorganizando investimento e custo de mobilidade, enquanto o mercado de trabalho ainda sente o fechamento da Audi Brussels.",
      body: "A Secretária de Estado bruxelense para Urbanismo e Patrimônio, Ans Persoons, confirmou em comunicado oficial do próprio gabinete que a agência regional de licenciamento urban.brussels concedeu a licença urbanística para o reordenamento completo da Place (Général) Meiser, em Schaerbeek. RTBF, La Libre e BX1 confirmaram o mesmo evento, permissão concedida e obras previstas para o local. A praça é um dos principais nós viários e de transporte da região de Bruxelas, e o projeto se soma ao esforço mais amplo da capital belga de repensar espaços hoje dominados por carros, com mais prioridade para pedestres, ciclistas e transporte público.\n\nNo mesmo período, as três Regiões do país, Flandres, Valônia e Bruxelas-Capital, fecharam em 10 de julho de 2026 um acordo de princípio para cobrar uma vignette digital de quem usa autoestradas e estradas nacionais, com cobrança prevista a partir de maio de 2027. Segundo o governo da Valônia, os valores anuais vão de 90 euros para veículos zero-emissão até 125 euros para veículos mais antigos, na faixa Euro 0 a 3, com o objetivo declarado de financiar a manutenção da rede viária.\n\nAs duas medidas, somadas, desenham um país que investe em requalificar espaço público e mobilidade, e ao mesmo tempo transfere parte do custo dessa manutenção para quem dirige. O momento chega enquanto a Bélgica ainda sente o fechamento de grandes empregadores industriais, caso da fábrica Audi Brussels, encerrada em fevereiro de 2025, cujos ex-funcionários seguem, segundo a imprensa local, em busca de recolocação por meio de um programa oficial coordenado pelas três Regiões. Para quem avalia se mudar para a Bélgica, o quadro reforça um ponto prático, custo de vida, mobilidade e mercado de trabalho têm variações regionais que valem ser mapeadas com antecedência, direto nas fontes oficiais de cada Região.",
      tags: ["Bélgica", "Bruxelas", "Mobilidade", "Custo de vida"],
      sources: [
      { label: "Ans Persoons · Secrétaire d'État bruxelloise à l'Urbanisme et au Patrimoine (comunicado oficial do gabinete)", url: "https://anspersoons.prezly.com/le-reamenagement-de-la-place-general-meiser-a-schaerbeek-peut-debuter" },
      { label: "RTBF Actus (corroboração jornalística, Place Meiser)", url: "https://www.rtbf.be/article/schaerbeek-la-region-bruxelloise-delivre-le-permis-de-reamenagement-de-la-place-meiser-11521554" },
      { label: "Gouvernement wallon · wallonie.be (página oficial de atualidades)", url: "https://www.wallonie.be/fr/actualites/vers-la-mise-en-place-dune-vignette-routiere-en-belgique" },
      { label: "RTBF Actus (corroboração jornalística, vignette)", url: "https://www.rtbf.be/article/une-vignette-autoroutiere-en-belgique-a-partir-de-mai-2027-entre-90-et-125-euros-par-an-11755761" },
      { label: "Cabinet Pierre-Yves Jeholet · Ministre wallon de l'Économie, l'Emploi et la Formation (comunicado oficial, coordenação Audi Brussels)", url: "https://jeholet.wallonie.be/home/communiques-de-presse/presses/la-reforme-du-paysage-de-l-emploi-et-de-l-activation-des-chercheurs-d-emploi-est-en-marche-2.html" },
      { label: "RTBF Actus (dados atribuídos ao comunicado conjunto dos três governos regionais, Audi Brussels)", url: "https://www.rtbf.be/article/1-an-apres-la-moitie-des-anciens-d-audi-brussels-toujours-sans-emploi-votre-profil-est-interessant-mais-vous-etes-trop-vieux-11684166" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Justiça suspende abertura de centro de acolhida para migrantes em Uccle",
      body: "O Tribunal de Première Instance de Bruxelles, em decisão de urgência extrema tomada em 10 de julho de 2026, suspendeu provisoriamente a abertura de um centro de acolhida para requerentes de asilo na rue Beeckman, em Uccle. Segundo a página oficial do governo municipal de Uccle, o local, um antigo prédio da rede Armonea com capacidade para 230 pessoas, seria administrado pela Samusocial por conta da agência federal Fedasil e tinha inauguração prevista para 14 de julho. A decisão vale até o fim de julho de 2026.\n\nA comuna informa que a ação judicial partiu de moradores, com uma petição que reuniu mais de 1.300 assinaturas, e que o descumprimento da decisão pode gerar multa diária de 1.000 euros. Para quem já vive na região ou acompanha pedidos de asilo em Bruxelas, o caso mostra como decisões sobre centros de acolhida podem mudar de uma semana para outra, e reforça a importância de confirmar qualquer informação diretamente com a Fedasil ou com a comuna responsável.",
      cta: "Tem processo de asilo em curso na região de Bruxelas? Acompanhe atualizações oficiais da Fedasil e da comuna antes de se planejar em torno de um centro específico.",
      sources: [
      { label: "Commune d'Uccle (governo municipal, página oficial)", url: "https://www.uccle.be/fr/actualites/centre-daccueil-samusocial-rue-beeckman" },
      { label: "RTBF Actus (corroboração jornalística)", url: "https://www.rtbf.be/article/uccle-l-ouverture-du-centre-fedasil-provisoirement-reportee-apres-une-decision-de-justice-11756833" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Bélgica fecha acordo para taxa rodoviária de até 125 euros por ano a partir de 2027",
      body: "As três Regiões da Bélgica, Flandres, Valônia e Bruxelas-Capital, fecharam em 10 de julho de 2026 um acordo de princípio para criar uma vignette digital, um autocolante virtual cobrado de quem usa autoestradas e estradas nacionais. Segundo o governo da Valônia, o objetivo é financiar a manutenção da rede viária, e a cobrança deve começar em maio de 2027. Os valores anuais variam pelo nível de emissão do veículo, 90 euros para carros zero-emissão, 100 euros para veículos Euro 4 ou superior, e até 125 euros para os mais antigos, na faixa Euro 0 a 3.\n\nPara quem planeja morar na Bélgica e trazer ou comprar carro no país, vale já incluir esse custo extra no orçamento anual a partir de 2027. Como o acordo ainda é de princípio, prazos e regras de cobrança podem receber ajustes até a entrada em vigor, então acompanhe os canais oficiais das três Regiões antes de fechar as contas.",
      cta: "Vai dirigir na Bélgica a partir de 2027? Reserve entre 90 e 125 euros por ano para a vignette rodoviária no seu planejamento.",
      sources: [
      { label: "Gouvernement wallon · wallonie.be (página oficial de atualidades)", url: "https://www.wallonie.be/fr/actualites/vers-la-mise-en-place-dune-vignette-routiere-en-belgique" },
      { label: "RTBF Actus (corroboração jornalística)", url: "https://www.rtbf.be/article/une-vignette-autoroutiere-en-belgique-a-partir-de-mai-2027-entre-90-et-125-euros-par-an-11755761" },
    ],
    },
    {
      publishedAt: D,
      title: "Bruxelas lista 103 profissões em falta: onde estão as vagas para quem quer trabalhar na Bélgica",
      body: `O serviço de emprego de Bruxelas, o Actiris, publicou a nova lista de profissões em falta, ocupações para as quais os empregadores têm dificuldade de encontrar mão de obra. São 103 no total, sendo 81 consideradas carências estruturais, ou seja, de longo prazo. Segundo o Actiris, os setores de cuidados (saúde e assistência) e da construção estão entre os que mais sofrem com escassez de pessoal, e parte das vagas fica em aberto por falta de qualificação, de idioma ou de experiência compatível.\n\nNove funções entraram na lista neste ano e doze saíram. Entre as novidades estão confeiteiro, chef de cozinha industrial, gestor de operações de TI, assistente jurídico, técnico de manutenção de eletrônica industrial, mecânico de veículos comerciais, motorista de caminhão e habilitados na categoria C. Listas de profissões em falta costumam pesar a favor de quem busca autorização de trabalho, mas as regras exatas de visto e permit não foram detalhadas nesta publicação, então confirme sempre no canal oficial antes de decidir.`,
      cta: "Veja a lista completa das profissões em falta em Bruxelas na fonte oficial antes de planejar sua candidatura.",
      sources: [{ label: "The Bulletin (Bruxelas)", url: "https://www.thebulletin.be/pastry-chef-roofer-100-jobs-brussels-has-difficulty-filling" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Um ano após o fechamento da Audi Brussels, quase metade dos ex-funcionários ainda busca emprego",
      standfirst: "Programa oficial tri-regional apoiou milhares de trabalhadores demitidos, mas resultados citados pela imprensa mostram que a recolocação no mercado belga ainda é lenta, principalmente para quem tem mais idade.",
      body: "A fábrica da Audi Brussels encerrou suas operações em 28 de fevereiro de 2025, deixando milhares de trabalhadores sem emprego na capital belga. Para lidar com o impacto, as três Regiões do país, Bruxelas, Flandres e Valônia, criaram um programa oficial e coordenado de recolocação profissional, reunindo os serviços de emprego Actiris, VDAB e Forem. Essa coordenação entre as três Regiões está documentada no site oficial do gabinete de Pierre-Yves Jeholet, vice-presidente e ministro valão do Emprego, que hospeda o comunicado original do acordo.\n\nMais de um ano depois do fechamento, reportagens recentes da imprensa belga, com base em nota conjunta atribuída aos ministros responsáveis pelo emprego nas três Regiões, Humblet, Delmir e Jeholet, citam números específicos, cerca de 3.181 ex-funcionários teriam recebido algum tipo de apoio do programa, e por volta de 49 por cento, o equivalente a 1.203 pessoas, já estariam reempregados. Uma parte relevante do grupo, porém, seguiria sem trabalho passado um ano do fechamento. É importante registrar que esses números mais recentes foram encontrados replicados pela RTBF, La Libre, BX1 e DH, atribuídos à nota conjunta dos governos regionais, mas não foi possível reencontrá-los na URL exata de um comunicado republicado, apenas o release inicial de coordenação de fevereiro de 2025 foi confirmado diretamente na fonte primária.\n\nEntre os relatos recolhidos pela imprensa, aparece um padrão sensível, o de trabalhadores mais velhos enfrentando mais dificuldade para se recolocar, mesmo com perfil qualificado. Para quem avalia o mercado de trabalho belga antes de imigrar, o caso é um lembrete de que programas oficiais de recolocação existem e têm estrutura tri-regional, mas não garantem resultado rápido, principalmente em setores industriais afetados por fechamentos de grande porte. Antes de qualquer decisão, vale acompanhar os números diretamente pelos canais dos três serviços de emprego regionais.",
      keyFacts: [
        "Fábrica da Audi Brussels fechou em 28 de fevereiro de 2025.",
        "Programa oficial e coordenado de recolocação reúne Actiris (Bruxelas), VDAB (Flandres) e Forem (Valônia), com coordenação documentada no site do gabinete do ministro valão Pierre-Yves Jeholet.",
        "Imprensa belga, citando nota conjunta dos três governos regionais, aponta cerca de 3.181 ex-funcionários apoiados e cerca de 49 por cento (1.203) reempregados; esses números específicos não foram reconfirmados por nós na URL exata do comunicado mais recente, só o release inicial de coordenação (fev/2025) foi verificado diretamente.",
        "Trabalhadores mais velhos aparecem como o grupo com mais dificuldade de recolocação, segundo relatos da imprensa.",
      ],
      sources: [
      { label: "Cabinet Pierre-Yves Jeholet · Ministre wallon de l'Économie, l'Emploi et la Formation (comunicado oficial)", url: "https://jeholet.wallonie.be/home/communiques-de-presse/presses/la-reforme-du-paysage-de-l-emploi-et-de-l-activation-des-chercheurs-d-emploi-est-en-marche-2.html" },
      { label: "RTBF Actus (dados atribuídos ao comunicado conjunto dos três governos regionais)", url: "https://www.rtbf.be/article/1-an-apres-la-moitie-des-anciens-d-audi-brussels-toujours-sans-emploi-votre-profil-est-interessant-mais-vous-etes-trop-vieux-11684166" },
    ],
    },
    {
      publishedAt: D,
      headline: "Bruxelas tem 103 profissões em falta: o mapa das vagas difíceis de preencher na Bélgica",
      standfirst: "O serviço de emprego Actiris atualizou a lista de ocupações com escassez de mão de obra na capital belga, um sinal de onde há demanda para quem pensa em trabalhar no país.",
      body: `O Actiris, serviço público de emprego da Região de Bruxelas, divulgou a nova lista de profissões em falta, funções para as quais os empregadores não conseguem preencher as vagas. O total chegou a 103 ocupações, das quais 81 são carências estruturais, isto é, de longo prazo. A lista é montada a partir dos números de vagas, com o critério de pelo menos 20 novas vagas em um ano para uma mesma profissão.\n\nOs setores de cuidados e de construção aparecem entre os mais pressionados. Segundo o Actiris, a dificuldade nem sempre é falta de candidatos, mas também descompasso de perfil, como domínio do idioma, carteira de motorista ou experiência exigida. Neste ano, nove funções foram acrescentadas e doze retiradas. Entre as novas estão confeiteiro, chef de cozinha industrial, gestor de operações de TI, assistente jurídico, técnico de manutenção de eletrônica industrial, mecânico de veículos comerciais e de caminhões, e motoristas habilitados na categoria C.\n\nPara quem planeja imigrar, esse tipo de lista costuma indicar setores com portas mais abertas no mercado de trabalho local. Ainda assim, as condições de visto, de autorização de trabalho e de reconhecimento de qualificações dependem de regras próprias que não constam nesta publicação. O caminho seguro é consultar as fontes oficiais belgas e de emprego antes de qualquer decisão.`,
      keyFacts: [
        "103 profissões em falta em Bruxelas, sendo 81 carências estruturais (de longo prazo), segundo o Actiris.",
        "Nove funções entraram na lista e doze saíram em relação ao ano anterior.",
        "Setores de cuidados (saúde e assistência) e de construção estão entre os que mais sofrem com escassez de mão de obra.",
        "Novos cargos incluem confeiteiro, chef de cozinha industrial, gestor de operações de TI, assistente jurídico, técnico de eletrônica industrial, mecânicos de veículos comerciais e motoristas categoria C.",
        "A lista é baseada em vagas: pelo menos 20 novas vagas em um ano para a profissão entrar.",
      ],
      sources: [{ label: "The Bulletin (Bruxelas)", url: "https://www.thebulletin.be/pastry-chef-roofer-100-jobs-brussels-has-difficulty-filling" }],
    }],
  },

  fi: {
    community: [{
      publishedAt: D,
      title: "Finlândia terá teste de cidadania a partir de 2027",
      body: `O Parlamento da Finlândia aprovou mudanças na Lei da Cidadania que endurecem as exigências para se tornar cidadão finlandês. Segundo o Serviço de Imigração da Finlândia (Migri), as novas regras entram em vigor em 1 de janeiro de 2027 e passam a valer para pedidos apresentados a partir de 1 de março de 2027, com um período de transição em janeiro e fevereiro para dar tempo aos candidatos de se prepararem.\n\nA principal novidade é a criação de um teste de cidadania, que servirá para comprovar conhecimento suficiente sobre a sociedade finlandesa. A exigência vale para candidatos de 18 a 64 anos, com possíveis isenções por motivo de saúde, deficiência ou outras razões muito graves. O teste poderá ser feito em finlandês ou sueco, e o Migri informa que o material de estudo será publicado no site oficial com antecedência para que todos se preparem com as mesmas fontes.`,
      cta: "Se a Finlândia é seu destino, comece já a acompanhar as fontes oficiais e a planejar o preparo para o novo teste de cidadania.",
      sources: [{ label: "Migri · Serviço de Imigração da Finlândia", url: "https://migri.fi/en/-/finland-to-introduce-citizenship-test-as-changes-to-citizenship-act-take-effect-on-1-january-2027" }],
    }],
    countryTab: [{
      publishedAt: D,
      headline: "Finlândia cria teste de cidadania com entrada em vigor em 2027",
      standfirst: "Nova Lei da Cidadania exige conhecimento sobre a sociedade finlandesa e vale para pedidos feitos a partir de 1 de março de 2027.",
      body: `O Parlamento finlandês aprovou uma reforma da Lei da Cidadania que torna mais rígidos os requisitos para a naturalização. De acordo com o Serviço de Imigração da Finlândia (Migri), as novas regras entram em vigor em 1 de janeiro de 2027 e se aplicam aos pedidos protocolados a partir de 1 de março de 2027. Entre janeiro e fevereiro de 2027 haverá um período de transição, pensado para dar tempo aos candidatos de estudar e realizar o exame antes de pedir a cidadania.\n\nA mudança central é a introdução de um teste de cidadania como forma de demonstrar conhecimento suficiente sobre a sociedade finlandesa. Segundo o Migri, o exame poderá abordar temas como legislação básica que rege a vida no país, direitos fundamentais e humanos, história e cultura da Finlândia e questões de igualdade. O material de estudo será divulgado publicamente e de forma antecipada no site do órgão, para que todos os candidatos tenham acesso às mesmas fontes.\n\nA exigência de conhecimento sobre a sociedade finlandesa vale para candidatos entre 18 e 64 anos, com possibilidade de isenção em casos de saúde, deficiência ou outras razões muito graves. Além do teste, o Migri indica que o requisito também pode ser cumprido por quem concluir o exame de matrícula em finlandês ou sueco, ou obtiver um diploma de ensino superior nesses idiomas na Finlândia. Pedidos enviados antes de 1 de março de 2027 seguem as regras da lei atual. Recomenda-se confirmar todos os detalhes diretamente na fonte oficial.`,
      keyFacts: [
        "Nova Lei da Cidadania entra em vigor em 1 de janeiro de 2027; regras valem para pedidos feitos a partir de 1 de março de 2027.",
        "Teste de cidadania passa a ser exigido para comprovar conhecimento sobre a sociedade finlandesa; aplicável a candidatos de 18 a 64 anos.",
        "O exame pode ser feito em finlandês ou sueco e o material de estudo será publicado no site do Migri com antecedência.",
        "Alternativas ao teste: exame de matrícula em finlandês/sueco ou diploma de ensino superior nesses idiomas na Finlândia; isenções possíveis por saúde ou outras razões graves.",
      ],
      sources: [{ label: "Migri · Serviço de Imigração da Finlândia", url: "https://migri.fi/en/-/finland-to-introduce-citizenship-test-as-changes-to-citizenship-act-take-effect-on-1-january-2027" }],
    }],
  },

  lv: {
    community: [{
      publishedAt: D,
      title: "Letônia planeja dar número de identificação a estrangeiros com visto de trabalho",
      body: `O governo da Letônia deu um passo que pode facilitar a vida de quem pretende trabalhar no país. Em 30 de junho de 2026, o Conselho de Ministros apoiou o avanço de um projeto de lei que altera a Lei do Registro de Pessoas Naturais e prevê a atribuição de um número de identificação pessoal, o personas kods, aos estrangeiros que solicitam vistos com direito a emprego na Letônia, segundo o Ministério do Interior (Iekšlietu ministrija).\n\nNa prática, o personas kods é a chave que abre portas no dia a dia letão, de serviços públicos a contratos e questões bancárias. Estender esse código já na fase do visto de trabalho tende a reduzir a burocracia de quem chega para atuar no país. Atenção: por enquanto é um projeto de lei que ainda precisa passar pelo Parlamento, a Saeima, então as regras podem mudar até a versão final.`,
      cta: "Acompanhe com a WiseHub cada etapa dessa mudança para chegar à Letônia com o pé direito.",
      sources: [{ label: "Ministério do Interior da Letônia (Iekšlietu ministrija)", url: "https://www.iem.gov.lv/lv/jaunums/planots-pieskirt-personas-kodu-arzemniekiem-kuri-pieprasa-vizas-ar-tiesibam-uz-nodarbinatibu-latvija" }],
    }],
    countryTab: [{
      publishedAt: D,
      headline: "Letônia avança projeto que dá número de identificação a estrangeiros com visto de trabalho",
      standfirst: "Conselho de Ministros apoiou, em 30 de junho, mudança na lei de registro que beneficia quem vai trabalhar no país.",
      body: `O Ministério do Interior da Letônia informou que, em 30 de junho de 2026, o Conselho de Ministros apoiou o encaminhamento ao Parlamento, a Saeima, de um projeto de lei que altera a Lei do Registro de Pessoas Naturais. O texto prevê a atribuição de um número de identificação pessoal, o chamado personas kods, aos estrangeiros que solicitam vistos com direito a emprego na Letônia.\n\nO personas kods é um identificador central no país, usado em serviços públicos, contratos e diversas rotinas administrativas. Estendê-lo à etapa do visto de trabalho sinaliza a intenção de organizar melhor o cadastro de trabalhadores estrangeiros e, potencialmente, simplificar procedimentos para quem chega para atuar no mercado letão.\n\nÉ importante frisar que se trata de um projeto de lei em tramitação, ainda sujeito à discussão e aprovação da Saeima. Os detalhes, prazos e a forma exata de aplicação só ficarão definidos com o texto final. Quem planeja imigrar deve confirmar as regras vigentes junto à fonte oficial antes de tomar decisões.`,
      keyFacts: [
        "Decisão do Conselho de Ministros em 30 de junho de 2026.",
        "Medida: atribuir número de identificação pessoal (personas kods) a estrangeiros que pedem visto com direito a trabalho.",
        "Status: projeto de lei encaminhado ao Parlamento (Saeima), ainda não aprovado.",
        "Fonte oficial: Ministério do Interior da Letônia (Iekšlietu ministrija).",
      ],
      sources: [{ label: "Ministério do Interior da Letônia (Iekšlietu ministrija)", url: "https://www.iem.gov.lv/lv/jaunums/planots-pieskirt-personas-kodu-arzemniekiem-kuri-pieprasa-vizas-ar-tiesibam-uz-nodarbinatibu-latvija" }],
    }],
  },

  lt: {
    community: [{
      publishedAt: D,
      title: "Lituânia começa a emitir certificado digital de registro de estrangeiro",
      body: `O Departamento de Migração da Lituânia informou que, a partir de 23 de junho de 2026, passou a emitir certificados digitais de registro de estrangeiro para os casos previstos na Lei sobre o Estatuto Jurídico dos Estrangeiros. A medida está ligada a uma alteração da lei em vigor desde 22 de maio, que trata da situação de quem já apresentou pedido ao Departamento de Migração para trocar sua autorização de residência temporária.\n\nNa prática, esse certificado serve para comprovar a situação regular do estrangeiro enquanto o novo documento de residência ainda está sendo processado, o que costuma ser um dos momentos mais sensíveis para quem mora e trabalha no país. Como as condições e o passo a passo exatos são definidos pelo próprio órgão, quem estiver em processo de renovação ou troca de autorização deve confirmar cada detalhe diretamente na fonte oficial.`,
      cta: "Confira os detalhes no comunicado oficial do Departamento de Migração da Lituânia antes de qualquer pedido.",
      sources: [{ label: "Migracijos departamentas (Departamento de Migração da Lituânia)", url: "https://migracija.lrv.lt/lt/naujienos/pradedami-isdavineti-skaitmeniniai-uzsieniecio-registracijos-pazymejimai-tfa/" }],
    }],
    countryTab: [{
      publishedAt: D,
      headline: "Lituânia adota certificado digital de registro para estrangeiros",
      standfirst: "Novo documento passou a ser emitido a partir de 23 de junho de 2026, ligado a mudança recente na lei de estrangeiros.",
      body: `O Departamento de Migração da Lituânia, vinculado ao Ministério do Interior, anunciou o início da emissão de certificados digitais de registro de estrangeiro a partir de 23 de junho de 2026. O documento se aplica aos casos indicados na Lei sobre o Estatuto Jurídico dos Estrangeiros do país.\n\nSegundo o órgão, a novidade está associada a uma das alterações mais recentes dessa lei, em vigor desde 22 de maio de 2026, voltada ao estrangeiro que já apresentou pedido para alterar sua autorização de residência temporária. O certificado tende a funcionar como comprovação da situação do estrangeiro durante esse período de transição de documentos.\n\nPara quem planeja imigrar, renovar ou trocar a autorização de residência na Lituânia, vale acompanhar de perto as orientações do Departamento de Migração, já que as regras de emissão e o alcance do certificado são definidos pelo próprio órgão. As informações completas e atualizadas devem ser confirmadas na fonte oficial.`,
      keyFacts: [
        "Emissão do certificado digital de registro de estrangeiro começou em 23 de junho de 2026.",
        "Medida está ligada a alteração da Lei sobre o Estatuto Jurídico dos Estrangeiros, em vigor desde 22 de maio de 2026.",
        "Documento se destina a estrangeiros que pediram alteração da autorização de residência temporária, servindo de comprovação durante a transição.",
        "Fonte oficial: Departamento de Migração da Lituânia (Migracijos departamentas).",
      ],
      sources: [{ label: "Migracijos departamentas (Departamento de Migração da Lituânia)", url: "https://migracija.lrv.lt/lt/naujienos/pradedami-isdavineti-skaitmeniniai-uzsieniecio-registracijos-pazymejimai-tfa/" }],
    }],
  },

  cz: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "O 'IMAX' tcheco: como a Tchecoslováquia projetou cinema em grande formato décadas antes de Hollywood popularizar a tela gigante",
      standfirst: "Enquanto o mundo redescobre o fascínio pelo cinema em 70mm com grandes produções internacionais, a Tchéquia guarda no seu arquivo estatal um capítulo pouco lembrado: um sistema próprio de projeção em grande formato que rodou o país entre os anos 1960 e 1980.",
      body: "Antes de o formato 70mm virar sinônimo de espetáculo em Hollywood, a então Tchecoslováquia já havia desenvolvido sua própria versão do cinema em tela gigante. O sistema, batizado de Meopton e produzido pela fabricante nacional de equipamentos ópticos Meopta, chegou a equipar cerca de 100 salas de cinema no país entre as décadas de 1960 e 1980, segundo reportagem da publicação especializada Filmový přehled.\n\nO marco inaugural dessa era ficou registrado oficialmente no Národní filmový archiv, o arquivo estatal tcheco vinculado ao Ministério da Cultura, responsável por preservar o patrimônio cinematográfico do país. Na ficha oficial do acervo, o longa Vysoká modrá zeď (1974) aparece catalogado como o primeiro filme tcheco de longa-metragem produzido no formato 70mm, um marco técnico que colocava a Tchecoslováquia entre os poucos países a dominar essa tecnologia de projeção na época.\n\nO sistema Meopton fazia parte de um esforço mais amplo da indústria cinematográfica do bloco comunista para desenvolver tecnologia própria de exibição, numa época em que o acesso a equipamentos ocidentais era limitado. Com quase 100 salas equipadas, o país chegou a ter uma das maiores redes de cinema em grande formato da Europa Central, um dado que hoje surpreende quem associa esse tipo de experiência apenas às grandes cadeias internacionais.\n\nO tema voltou a ganhar espaço na conversa pública com o interesse crescente em produções internacionais que apostam no grande formato como diferencial de exibição, o que reacendeu a curiosidade sobre a história do cinema em 70mm ao redor do mundo. Para a Tchéquia, esse resgate funciona como lembrete de que o país teve papel técnico relevante nessa história, hoje preservado no acervo do Národní filmový archiv, disponível para consulta pública.",
      tags: ["cultura", "cinema", "Tchéquia", "Praga", "história"],
      sources: [
      { label: "Národní filmový archiv (NFA) · ficha de catálogo oficial de 'Vysoká modrá zeď'", url: "https://nfa.cz/cs/26009-vysoka-modra-zed" },
      { label: "Filmový přehled · 'Velká filmová sedmdesátka: 70mm filmy a kina v Československu'", url: "https://www.filmovyprehled.cz/cs/revue/detail/velka-filmova-sedmdesatka-70mm-filmy-a-kina-v-ceskoslovensku" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Tchéquia aprova o EET 2.0: novo sistema de evidência eletrônica de vendas entra em vigor em 2027",
      body: "Para quem tem negócio próprio ou trabalha por conta na Tchéquia, um projeto importante acaba de avançar. A Câmara dos Deputados aprovou em 15 de julho de 2026 o EET 2.0, nova versão do sistema de evidência eletrônica de vendas (Elektronická evidence tržeb), com entrada em vigor prevista para 1º de janeiro de 2027. O texto agora segue para análise do Senado.\n\nSegundo tiskové zprávy oficiais do Ministério da Fazenda e da Finanční správa, autoridade fiscal do país, a expectativa é de arrecadação adicional de 14 bilhões de coroas por ano com a medida. Quem administra empresa, é autônomo ou pretende abrir negócio na Tchéquia deve acompanhar a tramitação no Senado e se preparar com antecedência para as novas obrigações de registro de vendas.",
      cta: "Tem ou pretende abrir negócio na Tchéquia? Acompanhe a tramitação do EET 2.0 no Senado e prepare-se com antecedência para as novas regras de registro de vendas.",
      sources: [
      { label: "Ministerstvo financí ČR · tisková zpráva oficial", url: "https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/snemovna-schvalila-eet-2-0-moderni-evidence-trzeb-64564" },
      { label: "Finanční správa ČR · tisková zpráva oficial", url: "https://financnisprava.gov.cz/cs/financni-sprava/media-a-verejnost/tiskove-zpravy-gfr/tiskove-zpravy-2026/snemovna-schvalila-eet-2-0" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Praga aprova licença de construção do Top Tower, arranha-céu que muda o skyline de Nové Butovice",
      body: "A capital tcheca deu luz verde a um projeto que altera o perfil da cidade. O Úřad městské části Praha 13, órgão de licenciamento de obras do distrito, confirmou a emissão da licença de construção do Top Tower, um arranha-céu de 126 metros e 44 andares planejado para o bairro de Nové Butovice. A confirmação foi dada pela porta-voz do órgão, Lucie Steinerová, à agência estatal ČTK, e reportada pelo Český rozhlas.\n\nPara quem pensa em morar ou investir em Praga, o projeto sinaliza que a cidade segue verticalizando em bairros mais afastados do centro histórico, tendência que pode influenciar preços e oferta de moradia na região nos próximos anos. Como o empreendimento ainda precisa avançar em outras etapas até a construção efetiva, vale acompanhar o andamento nas fontes locais antes de qualquer decisão ligada ao bairro.",
      cta: "De olho no mercado imobiliário de Praga? Vale acompanhar como o Top Tower pode impactar a região de Nové Butovice nos próximos anos.",
      sources: [
      { label: "Český rozhlas / iROZHLAS.cz", url: "https://www.irozhlas.cz/zpravy-domov/vrak-davida-cerneho-a-tomase-cisare-ma-stavebni-povoleni-126metrovy-mrakodrap_2607151702_jar" },
    ],
    },
    {
      publishedAt: D,
      title: "Tchéquia estuda regra que pode obrigar familiares de tchecos a esperar residência fora do país",
      body: `Um novo projeto de lei em discussão na Tchéquia pode mudar o caminho de quem pede residência como familiar de um cidadão tcheco. Pela regra atual, um estrangeiro de fora da União Europeia casado com tcheco ou com filho tcheco pode apresentar o pedido de residência por reunião familiar de dentro do país, mesmo que outra autorização, como o cartão de funcionário, expire nesse meio-tempo.\n\nSegundo o portal Expats.cz, o projeto retiraria essa possibilidade para muitos solicitantes, que passariam a ter de deixar a Tchéquia e aguardar a decisão no exterior, um processo que pode levar de três a seis meses. A proposta ainda é um projeto de lei e não está em vigor, então vale acompanhar a tramitação antes de tomar qualquer decisão sobre mudança ou renovação de status.`,
      cta: "Se você planeja pedir residência na Tchéquia por vínculo familiar, acompanhe a tramitação desse projeto pela fonte oficial antes de agir.",
      sources: [{ label: "Expats.cz (não oficial, a confirmar)", url: "https://www.expats.cz/czech-news/article/czech-mixed-families-could-face-separation-under-new-immigration-bill" }],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Castelo de Praga bate recorde histórico com mais de 9 milhões de visitantes em 2025",
      standfirst: "Divulgação oficial da Správa Pražského hradu mostra alta de 700 mil visitantes sobre 2024, recorde em tours pagos e salto de investimento em reparos e digitalização.",
      body: "O Hradčany, sede do Castelo de Praga, fechou 2025 com o maior número de visitantes de sua história. Segundo tisková zpráva oficial da Správa Pražského hradu, órgão vinculado ao Gabinete do Presidente da República, o complexo recebeu mais de 9 milhões de visitas ao longo do ano, um crescimento de 700 mil pessoas em relação a 2024 e de 2 milhões frente a 2023.\n\nO destaque entre os números é o total de visitantes em tours pagos, que chegou a 2,7 milhões, superando o recorde anterior registrado em 2019, antes da pandemia. O comunicado também aponta uma mudança na experiência de quem visita o complexo: as checagens de segurança introduzidas durante o governo do ex-presidente Miloš Zeman foram substituídas por barreiras retráteis, formato menos invasivo para o fluxo de visitantes.\n\nOutro ponto de destaque no balanço oficial é o investimento em manutenção do patrimônio. Segundo a Správa Pražského hradu, o valor anual destinado a reparos e digitalização saltou de 82 milhões para 344 milhões de coroas nos últimos três anos, período em que a administração do Castelo afirma ter promovido centenas de mudanças conceituais na gestão do espaço.\n\nPara quem mora em Praga ou pretende visitar a capital tcheca, os números reforçam o Castelo como um dos pontos mais movimentados do país, o que pode significar filas maiores em datas de pico. A recomendação, especialmente em alta temporada, é planejar a visita com antecedência e conferir horários e ingressos diretamente no site oficial do Hrad.",
      keyFacts: [
        "Mais de 9 milhões de visitantes no Castelo de Praga em 2025, recorde histórico, segundo a Správa Pražského hradu.",
        "Alta de 700 mil visitantes sobre 2024 e de 2 milhões sobre 2023.",
        "2,7 milhões de visitantes em tours pagos, recorde superando o patamar pré-pandemia de 2019.",
        "Checagens de segurança da era Zeman substituídas por barreiras retráteis.",
        "Investimento anual em reparos e digitalização saltou de 82 para 344 milhões de coroas em três anos.",
      ],
      sources: [
      { label: "Pražský hrad (Správa Pražského hradu) · Kancelář prezidenta republiky, tisková zpráva oficial", url: "https://www.hrad.cz/cs/pro-media/tiskove-zpravy/aktualni-tiskove-zpravy/rekordni-navstevnost-stamiliony-do-oprav-i-digitalizace.-na-prazskem-hrade-se-za-tri-roky-udelaly-stovky-koncepcnich-zmen-19419" },
      { label: "iROZHLAS.cz (Český rozhlas) · cobertura da tisková zpráva", url: "https://www.irozhlas.cz/zpravy-domov/na-prohlidky-prazskeho-hradu-prislo-v-roce-2025-rekordnich-27-milionu-lidi_2601072231_cen" },
    ],
    },
    {
      publishedAt: D,
      headline: "Projeto de lei na Tchéquia pode exigir que familiares de tchecos aguardem residência no exterior",
      standfirst: "Mudança em estudo mira estrangeiros de fora da UE que pedem residência como membros da família de cidadãos tchecos.",
      body: `A Tchéquia estuda uma alteração na sua lei de imigração que afeta diretamente quem busca residência por vínculo familiar. O alvo são estrangeiros de fora da União Europeia que pedem autorização de residência por serem cônjuges de tchecos ou por terem filho tcheco.\n\nPela regra em vigor hoje, esse familiar pode protocolar o pedido de dentro do território, mesmo que outra autorização, como o cartão de funcionário (zaměstnanecká karta), expire durante o processo. De acordo com o portal Expats.cz, o novo projeto removeria essa opção para muitos solicitantes, que teriam de deixar o país e esperar a decisão fora, algo que pode levar de três a seis meses.\n\nÉ importante frisar que se trata de um projeto de lei ainda em tramitação, não de uma norma já aprovada. Os detalhes finais podem mudar até a votação. Quem tem planos de imigração por reunião familiar na Tchéquia deve acompanhar o andamento pela fonte oficial e evitar decisões precipitadas sobre saída do país ou renovação de status enquanto a regra não estiver definida.`,
      keyFacts: [
        "Alvo: estrangeiros de fora da UE que pedem residência como cônjuge de tcheco ou por terem filho tcheco.",
        "Regra atual permite protocolar o pedido de dentro do país mesmo que outra autorização (ex.: cartão de funcionário) expire no meio do processo.",
        "O projeto exigiria que muitos solicitantes deixassem a Tchéquia e aguardassem a decisão no exterior, de três a seis meses.",
        "Ainda é um projeto de lei em tramitação, não uma norma em vigor; detalhes podem mudar até a votação.",
      ],
      sources: [{ label: "Expats.cz (não oficial, a confirmar)", url: "https://www.expats.cz/czech-news/article/czech-mixed-families-could-face-separation-under-new-immigration-bill" }],
    }],
  },

  pl: {
    community: [{
      publishedAt: D,
      title: "Polônia tem 1,12 milhão de estrangeiros trabalhando, alta de 7,1% em um ano",
      body: `O escritório oficial de estatísticas da Polônia, o GUS, divulgou que, no último dia de janeiro de 2026, havia 1.119,0 mil estrangeiros trabalhando no país. É um aumento de 7,1%, ou 74,1 mil pessoas, na comparação com o fim de janeiro de 2025, sinal de que o mercado de trabalho polonês segue absorvendo mão de obra vinda de fora.\n\nOs dados reforçam uma tendência que também aparece nas grandes cidades. Segundo levantamento recente, os estrangeiros já respondem por cerca de 15% da população de Varsóvia, e em Wrocław a proporção chega a 19,5%. Para quem pensa em morar e trabalhar na Polônia, o cenário aponta demanda contínua, mas confirme as regras atualizadas de autorização de trabalho e residência diretamente nas fontes oficiais antes de decidir.`,
      cta: "Confira os números oficiais no portal do GUS antes de planejar sua mudança para a Polônia.",
      sources: [{ label: "GUS · Statistics Poland", url: "https://stat.gov.pl/en/experimental-statistics/human-capital/foreigners-performing-work-in-poland-in-january-2026,12,39.html" }],
    }],
    countryTab: [{
      publishedAt: D,
      headline: "Estrangeiros trabalhando na Polônia sobem para 1,12 milhão em janeiro de 2026",
      standfirst: "Escritório oficial de estatísticas registra alta de 7,1% em um ano no número de estrangeiros com trabalho no país.",
      body: `O GUS, escritório central de estatísticas da Polônia, informou que no último dia de janeiro de 2026 havia 1.119,0 mil estrangeiros realizando trabalho no país. O total representa um crescimento de 7,1%, equivalente a 74,1 mil pessoas, em relação ao fim de janeiro de 2025. O próprio órgão observa, porém, que houve leve recuo frente a 31 de dezembro de 2025, o que sugere alguma variação sazonal dentro da tendência de alta anual.\n\nO dado dialoga com a presença crescente de estrangeiros nos centros urbanos. Reportagem do Notes from Poland aponta que estrangeiros já somam cerca de 15% da população de Varsóvia, e que Wrocław lidera entre as grandes cidades, com 19,5% de residentes estrangeiros. Juntas, as informações indicam um país que vem incorporando trabalhadores de fora tanto no mercado de trabalho quanto na composição das cidades.\n\nPara quem planeja imigrar, esses números ajudam a entender a demanda, mas não substituem a checagem das regras. Requisitos de autorização de trabalho, cartão de residência e prazos podem mudar, e devem ser confirmados nas fontes oficiais polonesas antes de qualquer decisão. Este material remete integralmente à publicação do GUS como referência.`,
      keyFacts: [
        "1.119,0 mil estrangeiros trabalhando na Polônia no fim de janeiro de 2026 (fonte: GUS).",
        "Alta de 7,1% (74,1 mil pessoas) frente a janeiro de 2025, com leve recuo ante dezembro de 2025.",
        "Estrangeiros já são cerca de 15% da população de Varsóvia e 19,5% em Wrocław (Notes from Poland).",
      ],
      sources: [{ label: "GUS · Statistics Poland", url: "https://stat.gov.pl/en/experimental-statistics/human-capital/foreigners-performing-work-in-poland-in-january-2026,12,39.html" }],
    }],
  },

  pt: {
    blog: [
      {
      publishedAt: "2026-07-17",
      headline: "El Niño já começou: por que Portugal está correndo para preparar abrigos contra o calor",
      standfirst: "A Organização Meteorológica Mundial confirma que as condições de El Niño já dominam desde o meio deste ano e devem persistir até o início de 2027, um pano de fundo que ajuda a explicar por que o Governo português orientou municípios a criar refúgios climatizados antes do verão.",
      body: "A Organização Meteorológica Mundial, a OMM, órgão da ONU para o clima, confirmou em sua atualização de maio de 2026 que as condições de El Niño já são dominantes desde o trimestre junho-agosto deste ano, com probabilidade igual ou superior a 90% de persistência nos trimestres seguintes. Nos Estados Unidos, a agência oficial NOAA vai além e estima 96% de chance de o fenômeno seguir ativo até o início de 2027. Na prática, os dois órgãos oficiais confirmam o mesmo cenário, o El Niño não é uma previsão distante, já está em curso.\n\nO El Niño é o fenômeno climático marcado pelo aquecimento anormal das águas do Pacífico tropical, e sua principal consequência prática é o aumento da probabilidade de eventos climáticos extremos ao redor do mundo, incluindo ondas de calor mais intensas e frequentes. A própria OMM associa a fase atual do fenômeno a uma maior chance de clima extremo nos próximos meses, o que ajuda a explicar por que governos ao redor do globo têm tratado a preparação para o calor como prioridade, e não como reação de última hora.\n\nEm Portugal, essa preparação já apareceu em documento oficial do Governo, que orienta municípios e Unidades Locais de Saúde a identificar, junto com a Proteção Civil e a Segurança Social, abrigos temporários climatizados para os períodos de temperatura mais alta. A Câmara Municipal de Lisboa já colocou a orientação em prática, designando 49 locais como refúgios climáticos pela cidade, entre eles pavilhões desportivos adaptados para receber a população mais vulnerável durante as ondas de calor, segundo cobertura da RTP e do Observador.\n\nPara quem vive ou planeja se mudar para Portugal, a combinação desses dois fatos importa na prática. Um verão sob influência de El Niño tende a trazer mais dias de calor extremo, e cidades como Lisboa já organizaram uma rede de abrigos justamente para esse cenário. Vale localizar com antecedência o refúgio climático mais próximo de casa e acompanhar os alertas da Proteção Civil, principalmente quem tem crianças pequenas, idosos ou pessoas com problemas de saúde na família.",
      tags: ["clima", "El Niño", "Portugal", "imigração", "ondas de calor"],
      sources: [
      { label: "WMO · El Niño/La Niña Update, maio de 2026", url: "https://wmo.int/resources/publication-series/el-ninola-nina-updates/el-ninola-nina-update-may-2026" },
      { label: "WMO · El Niño forecast to intensify, increasing likelihood of extreme weather", url: "https://wmo.int/news/media-centre/el-nino-forecast-intensify-increasing-likelihood-of-extreme-weather" },
      { label: "Governo de Portugal · Proteção das Populações Durante Ondas de Calor", url: "https://portugal.gov.pt/api/media/edge/Project/Portal-do-Governo/Portal-do-Governo/gc25/documentos/Saude/20260107_Onda-de-calor-Municipiosv1.pdf" },
      { label: "RTP Notícias", url: "https://www.rtp.pt/noticias/pais/onda-de-calor-governo-quer-um-abrigo-temporario-por-municipio_n1750610" },
      { label: "Observador", url: "https://observador.pt/2026/07/01/calor-lisboa-tem-dois-pavilhoes-preparados-para-abrigo-temporario-de-populacao-mais-vulneravel/" },
    ],
    },
    ],
    community: [
      {
      publishedAt: "2026-07-17",
      title: "Faro recebe a 44.ª Concentração Internacional de Motos até domingo",
      body: "A 44.ª edição da Concentração Internacional de Motos de Faro começou no dia 16 de julho e segue até domingo, dia 19, no Vale das Almas. O evento, organizado pelo Moto Clube de Faro, é o maior encontro internacional de motociclismo de Portugal e está confirmado na agenda oficial da Câmara Municipal de Faro, que destaca a importância do encontro para a região através de declaração do próprio presidente da autarquia.\n\nSegundo a organização e a imprensa local, a edição deste ano deve reunir cerca de 20 mil pessoas e por volta de 600 motoclubes ao todo, entre nacionais e internacionais. Esse número de público é estimativa da organização e da imprensa, não um dado divulgado pela Câmara Municipal. Para quem mora ou está de passagem pelo Algarve, vale reservar hospedagem com antecedência e conferir a programação, já que o movimento na região costuma aumentar bastante durante os quatro dias do evento.",
      cta: "Vai passar pelo Algarve entre 16 e 19 de julho? Confira a programação oficial da Concentração de Motos de Faro na Câmara Municipal antes de planejar seu roteiro.",
      sources: [
      { label: "Câmara Municipal de Faro · Agenda: 44.ª Concentração Internacional de Motos", url: "https://www.cm-faro.pt/pt/agenda/91472/44-concentracao-internacional-de-motos-de-faro.aspx" },
      { label: "The Portugal News", url: "https://www.theportugalnews.com/news/2026-07-16/44th-faro-international-motorcycle-rally-begins-with-a-strong-opening-day/1056564" },
      { label: "PlanetAlgarve", url: "https://planetalgarve.com/2026/04/20/concentracao-de-motos-de-faro-2026-espera-600-motoclubes-de-toda-a-europa-ub40-rui-veloso-xutos-pontapes-uhf-e-mojinos-escozios-sao-cabecas-de-cartaz/" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      title: "Portugal orienta municípios a criar abrigos climatizados para as ondas de calor",
      body: "O Governo português publicou orientação para que municípios e Unidades Locais de Saúde identifiquem, em articulação com a Proteção Civil e a Segurança Social, abrigos temporários climatizados durante ondas de calor. A medida busca proteger a população mais vulnerável nos períodos de temperatura extrema, que têm ficado mais frequentes nos últimos verões.\n\nA orientação já resultou em ações concretas. A Câmara Municipal de Lisboa designou 49 locais como refúgios climáticos, entre eles pavilhões desportivos preparados para acolher quem precisa de um ambiente climatizado nos dias mais quentes. Para quem mora em Portugal, principalmente idosos, crianças pequenas e pessoas com problemas de saúde, vale saber com antecedência onde fica o abrigo mais próximo de casa.",
      cta: "Sabe onde fica o refúgio climático mais próximo? Consulte o site da câmara municipal da sua cidade antes da próxima onda de calor.",
      sources: [
      { label: "Governo de Portugal · Proteção das Populações Durante Ondas de Calor", url: "https://portugal.gov.pt/api/media/edge/Project/Portal-do-Governo/Portal-do-Governo/gc25/documentos/Saude/20260107_Onda-de-calor-Municipiosv1.pdf" },
      { label: "RTP Notícias", url: "https://www.rtp.pt/noticias/pais/onda-de-calor-governo-quer-um-abrigo-temporario-por-municipio_n1750610" },
      { label: "Observador", url: "https://observador.pt/2026/07/01/calor-lisboa-tem-dois-pavilhoes-preparados-para-abrigo-temporario-de-populacao-mais-vulneravel/" },
    ],
    },
    {
      publishedAt: D2,
      title: "Portugal: AIMA começa a chamar quem pediu reagrupamento familiar pelo regime de transição",
      body: `A AIMA, a agência de imigração de Portugal, começou a convocar as pessoas que apresentaram pedido de reagrupamento familiar pelo chamado regime de transição. O processo oficial, descrito no site da AIMA, funciona assim: a pessoa é contactada por e-mail para efetuar o pagamento das taxas e, depois da confirmação, agenda o atendimento presencial num dos locais da estrutura de missão, a EMAIMA, pelo portal services.aima.gov.pt. Segundo noticiado em 7 de julho de 2026, cerca de 9 mil famílias entram nesta fase.\n\nSe esse é o seu caso, fique de olho na caixa de entrada, inclusive no spam, e confirme sempre pelos canais oficiais da AIMA antes de pagar qualquer taxa, para não cair em golpe. O pagamento e o agendamento verdadeiros passam pelo portal oficial, nunca por links ou contas de terceiros.`,
      cta: "Pediu reagrupamento familiar no regime de transição? Acompanhe o seu e-mail e confirme cada passo apenas em aima.gov.pt.",
      sources: [
        { label: "AIMA · Regime Transitório (site oficial)", url: "https://aima.gov.pt/pt/noticias/aima-lanca-novo-servico-para-o-regime-transitorio" },
        { label: "DN Brasil (imprensa, referente à comunicação da AIMA)", url: "https://dnbrasil.dn.pt/aima-convoca-inscritos-no-regime-de-transio-do-reagrupamento-familiar" },
      ],
    }],
    countryTab: [
      {
      publishedAt: "2026-07-17",
      headline: "Portugal simplifica a atribuição do número da Segurança Social para imigrantes",
      standfirst: "A partir de julho de 2026, o NISS passa a ser emitido automaticamente e em tempo real a quem procura a AIMA para regularização, eliminando a necessidade de um segundo atendimento presencial na Segurança Social.",
      body: "A Segurança Social portuguesa anunciou que, a partir de julho de 2026, o Número de Identificação da Segurança Social, o NISS, passa a ser atribuído de forma automática e em tempo real a imigrantes que procuram a AIMA, a Agência para a Integração, Migrações e Asilo, para tratar da regularização. Segundo comunicado oficial publicado no site seg-social.pt, a mudança elimina a exigência de o requerente se deslocar a um balcão à parte da Segurança Social só para obter esse número.\n\nO impacto prático está nos números. De acordo com a Segurança Social, o procedimento anterior gerava cerca de 250 mil deslocações desnecessárias em 2025, todas evitáveis com a nova integração entre os sistemas da AIMA e da Segurança Social. Na prática, quem já enfrenta filas e agendamentos para regularizar a situação em Portugal ganha uma etapa a menos no processo, já que o NISS passa a sair automaticamente do próprio atendimento na AIMA.\n\nA medida foi corroborada por veículos como Público, ECO, Jornal de Negócios e Observador, que destacam a integração como parte de um esforço mais amplo de reduzir a burocracia enfrentada por quem imigra para Portugal. Para confirmar como o procedimento se aplica ao seu caso específico, a orientação é consultar diretamente os canais oficiais da AIMA e da Segurança Social, já que prazos e etapas seguintes do processo de regularização continuam sujeitos às regras vigentes de cada situação.",
      keyFacts: [
        "A partir de julho de 2026, o NISS passa a ser atribuído automaticamente e em tempo real a imigrantes atendidos na AIMA para regularização.",
        "A medida elimina a necessidade de um atendimento separado num balcão da Segurança Social só para obter o número.",
        "Em 2025, o procedimento anterior gerou cerca de 250 mil deslocações desnecessárias, que a nova integração busca evitar.",
        "Fonte oficial: Segurança Social (seg-social.pt), corroborada pela AIMA e por veículos como Observador, Público, ECO e Jornal de Negócios.",
      ],
      sources: [
      { label: "Segurança Social · Novo serviço simplifica atribuição de números de identificação a imigrantes", url: "https://seg-social.pt/noticias/-/asset_publisher/kBZtOMZgstp3/content/novo-servico-simplifica-atribuicao-de-numeros-de-identificacao-a-imigrantes" },
      { label: "AIMA · Notícias", url: "https://aima.gov.pt/pt/noticias" },
      { label: "Observador", url: "https://observador.pt/2026/07/14/imigrantes-que-se-dirijam-a-aima-para-regularizar-situacao-passam-a-receber-numero-da-seguranca-social-de-forma-automatica/" },
    ],
    },
    {
      publishedAt: D2,
      headline: "AIMA inicia a convocação do reagrupamento familiar pelo regime de transição em Portugal",
      standfirst: "Agência portuguesa contacta por e-mail quem aderiu ao regime de transição para pagamento de taxas e agendamento presencial; a imprensa fala em cerca de 9 mil famílias.",
      body: `A Agência para a Integração, Migrações e Asilo de Portugal, a AIMA, começou a convocar quem apresentou pedido de reagrupamento familiar pelo chamado regime de transição. A informação foi noticiada em 7 de julho de 2026 por veículos de imprensa que acompanham a comunidade imigrante, com base em comunicação da própria agência.\n\nO caminho oficial do procedimento está descrito no site da AIMA. Depois de registar o pedido na plataforma services.aima.gov.pt, a pessoa é contactada por e-mail para pagar as taxas e, após a confirmação do pagamento, é marcado o atendimento presencial num dos locais da estrutura de missão responsável, a EMAIMA. A imprensa aponta que cerca de 9 mil famílias estão sendo convocadas nesta fase, número que não conseguimos confirmar diretamente numa página oficial da AIMA.\n\nO ponto de atenção é a segurança. Como a convocação chega por e-mail e envolve pagamento de taxa, é terreno fértil para golpes. Confirme sempre a autenticidade da mensagem e faça o pagamento e o agendamento apenas pelos canais oficiais da AIMA, nunca por links recebidos de terceiros. Em caso de dúvida sobre o seu processo, a fonte de referência é o próprio site aima.gov.pt.`,
      keyFacts: [
        "A AIMA começou a convocar quem pediu reagrupamento familiar pelo regime de transição, segundo noticiado em 7 de julho de 2026.",
        "Processo oficial: contacto por e-mail para pagamento de taxas e, após confirmação, agendamento presencial num local da EMAIMA (services.aima.gov.pt).",
        "A imprensa fala em cerca de 9 mil famílias nesta fase; o número não foi confirmado por nós em página oficial da AIMA.",
        "Alerta antigolpe: confirme sempre em aima.gov.pt e nunca pague por links ou contas de terceiros.",
      ],
      sources: [
        { label: "AIMA · Regime Transitório (site oficial)", url: "https://aima.gov.pt/pt/noticias/aima-lanca-novo-servico-para-o-regime-transitorio" },
        { label: "DN Brasil (imprensa, referente à comunicação da AIMA)", url: "https://dnbrasil.dn.pt/aima-convoca-inscritos-no-regime-de-transio-do-reagrupamento-familiar" },
      ],
    }],
  },
};

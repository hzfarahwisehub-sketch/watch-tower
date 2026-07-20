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
        "publishedAt": "2026-07-20",
        "headline": "Do anúncio ao texto: as regras americanas que saíram do comunicado e ganharam data no diário oficial",
        "standfirst": "Em poucos dias, a revogação do public charge e o fim do duration of status deixaram de ser comunicados de imprensa e viraram regra publicada, com data de vigência, prazo definido, formulário novo e, num dos casos, uma ressalva do Congresso. É nesse detalhe escrito que o efeito prático de cada mudança finalmente aparece.",
        "body": "Existe uma distância importante entre um órgão anunciar que vai mudar uma regra e essa regra aparecer publicada, por escrito, no Federal Register, o diário oficial federal americano. O anúncio dá o rumo. O texto publicado dá a data, o alcance, as exceções e a regra de transição, que é justamente o que permite a alguém saber se o próprio processo cai no critério velho ou no novo. Entre 16 e 20 de julho de 2026, duas mudanças que vinham sendo tratadas como anúncio completaram esse percurso, e uma terceira notícia fechou o ciclo anual de um dos vistos de trabalho mais procurados do país.\n\nO caso mais ilustrativo é o do public charge, o encargo público, o critério que avalia a probabilidade de alguém se tornar dependente de assistência governamental e que pesa em pedidos de visto e de residência permanente. Quando a USCIS anunciou a revogação da regra de 2022, o texto detalhado ainda não existia publicamente, e a leitura mais comum foi de afrouxamento. O texto saiu em 20 de julho de 2026 e mostra um quadro diferente do que essa leitura sugeria.\n\nO documento remove do regulamento os dispositivos 8 CFR 212.20 a 212.23, que traziam a cláusula de aplicabilidade, as definições fechadas, o método de análise e a lista de isenções, e não coloca nada no lugar. Em vez disso, o DHS afirma que se afasta de um critério de linha rígida de dependência primária e retoma a avaliação de totalidade das circunstâncias, feita caso a caso, com margem maior de decisão para o oficial que analisa o pedido. Os elementos que esse oficial poderá pesar estão listados: os fatores obrigatórios da seção 212(a)(4)(B) da Immigration and Nationality Act, o recebimento de benefícios públicos sujeitos a teste de renda, outros fatores individualizados do caso e dados empíricos sobre autossuficiência.\n\nA diferença conceitual é decisiva para quem planeja um processo. Sair de um regulamento detalhado para uma análise discricionária não significa necessariamente critério mais fácil, significa critério menos previsível, porque a régua deixa de estar escrita no regulamento e passa a depender da leitura de quem examina o caso. Reforça essa leitura o fato de que o DHS registrou 8.846 comentários públicos sobre a proposta, a maioria deles contrária, e mesmo assim publicou a regra final nos termos originais. A USCIS informou que editará uma orientação infralegal, sem força de lei, para guiar os oficiais, com vigência na mesma data e integrada ao USCIS Policy Manual.\n\nO texto também traz a resposta prática que faltava sobre quem já recebeu benefícios. A regra vale para pedidos de admissão feitos a partir de 18 de setembro de 2026 e para pedidos de ajuste de status postados ou enviados eletronicamente a partir dessa data. Benefícios recebidos antes desse marco continuam sendo avaliados de forma consistente com a regra de 2022. É uma linha divisória objetiva, e ela só existe porque o texto foi publicado.\n\nJunto com a data vem uma exigência burocrática que merece atenção justamente por parecer pequena. A USCIS publicará uma edição revisada do Form I-485, e edições anteriores postadas ou enviadas eletronicamente a partir de 18 de setembro de 2026 não serão aceitas. É o tipo de detalhe que não muda o mérito de nenhum pedido e ainda assim pode devolver um processo inteiro por causa do cabeçalho do formulário.\n\nO segundo caso é o da regra que encerra o duration of status para os vistos F, J e I e institui um prazo fixo de admissão. Publicada no Federal Register em 17 de julho de 2026, ela ganhou vigência definida em 15 de setembro de 2026 e, mais importante, ganhou número. Para o estudante F, a admissão passa a corresponder à duração do programa informada no Form I-20, limitada a quatro anos, somada a 30 dias para a chegada e 30 dias para a saída. Para o J o limite também é de até quatro anos, e para o I, de mídia estrangeira, é de 240 dias. Quem precisar de mais tempo terá de pedir Extension of Stay à USCIS, procedimento que hoje não faz parte da rotina de quem está em duration of status.\n\nSó que o próprio documento adverte que a regra foi classificada como major rule, sujeita à revisão do Congresso, e que, se essa data mudar ao fim da revisão, o DHS publicará novo documento para fixar a data efetiva ou para encerrar a regra. Quem depende desse calendário precisa tratar 15 de setembro como a data vigente hoje, não como um ponto fixo definitivo.\n\nO mesmo texto traz uma transição que passou despercebida no anúncio e que é mais generosa do que se noticiou de início. Durante 244 dias contados da publicação, prazo que hoje se encerra em 18 de março de 2027, estudantes F-1 em duration of status com Form I-765 pendente na entrada em vigor da regra, ou que protocolarem o I-765 a tempo dentro desse período, em geral ficam dispensados de apresentar o Form I-539 apenas para estender a permanência durante o OPT ou o STEM OPT pedido. Também está confirmada a redução de 60 para 30 dias do prazo para preparar a saída do país após a conclusão do curso ou da prática autorizada. São detalhes operacionais que mudam a rotina concreta de estudantes internacionais e que nenhum comunicado de imprensa havia especificado.\n\nA terceira notícia da semana não é regra, é contagem. Em 17 de julho de 2026, a USCIS informou ter recebido petições suficientes para atingir o teto de 65 mil vistos H-1B da cota regular e as 20 mil vagas da isenção para diploma de pós-graduação obtido nos Estados Unidos, referentes ao ano fiscal de 2027, e declarou que não conduzirá rodadas adicionais de seleção. O ciclo sujeito a cota está fechado, e quem não foi selecionado depende do próximo período de inscrição ou de caminhos isentos do teto anual. Foi também o primeiro ciclo sob a seleção ponderada por faixa salarial, em vigor desde fevereiro de 2026, em que cada registro recebe de uma a quatro entradas no sorteio conforme o salário oferecido, o que muda o cálculo de quem vai tentar de novo.\n\nO fio que costura as três é o calendário. Quem acompanha imigração americana costuma reagir a manchete de anúncio e depois perder de vista a publicação do texto, que é onde as datas nascem. Neste momento, há dois marcos escritos e verificáveis, 15 e 18 de setembro de 2026, um prazo de transição que vai até março de 2027 e um ciclo anual encerrado. Nenhum deles é motivo de pânico nem de comemoração isolada, mas todos pedem a mesma atitude: conferir a fonte oficial, identificar em qual lado da data de transição o seu caso cai e discutir os próximos passos com um profissional habilitado antes de qualquer decisão. Conteúdo informativo ajuda a entender o cenário, mas não substitui a análise individual de um advogado de imigração.",
        "tags": [
          "EUA",
          "USCIS",
          "DHS",
          "Public Charge",
          "Vistos de Estudante",
          "H-1B",
          "Federal Register",
          "Green Card"
        ],
        "sources": [
          {
            "label": "Federal Register · Public Charge Ground of Inadmissibility (regra final, 20/jul/2026)",
            "url": "https://www.federalregister.gov/documents/2026/07/20/2026-14539/public-charge-ground-of-inadmissibility"
          },
          {
            "label": "Federal Register · Establishing a Fixed Time Period of Admission and an Extension of Stay Procedure for Nonimmigrant Academic Students, Exchange Visitors, and Representatives of Foreign Information Media (17/jul/2026)",
            "url": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant"
          },
          {
            "label": "USCIS · USCIS Reaches Fiscal Year 2027 H-1B Cap (17/jul/2026)",
            "url": "https://www.uscis.gov/newsroom/alerts/uscis-reaches-fiscal-year-2027-h-1b-cap"
          },
          {
            "label": "USCIS · News Release: Rescinds 2022 Public Charge Regulation",
            "url": "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-rescinds-2022-public-charge-regulation"
          },
          {
            "label": "DHS · Study in the States: Final Rule Quick Facts",
            "url": "https://studyinthestates.dhs.gov/elimination-of-duration-of-status-quick-facts"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      headline: "Cinco sinais de que a imigração legal nos EUA está mudando de forma em 2026",
      standfirst: "Entre a revogação de uma regra, um prazo fixo novo para visto de estudante, um memorando que trata o green card interno como exceção e uma taxa de US$100 mil em disputa na Justiça, o desenho da imigração legal americana ganhou contornos novos nas últimas semanas.",
      body: "Nas últimas semanas, o governo americano promoveu uma série de mudanças que, somadas, redesenham partes importantes da imigração legal para os Estados Unidos. Nenhuma delas isolada resume o quadro todo, mas juntas mostram uma linha de atuação clara, mais controle administrativo sobre quem entra, quem fica e por quanto tempo.\n\nA mudança mais recente veio do Department of Homeland Security, que publicou em 16 de julho de 2026 a regra final que substitui o modelo de duration of status por um prazo fixo de admissão de até 4 anos para os vistos F, J e I. O grace period após o fim do curso ou do programa caiu de 60 para 30 dias, e quem precisar ficar além do prazo passa a depender de uma petição de Extension of Stay junto à USCIS. É uma mudança estrutural para milhões de estudantes e intercambistas que hoje vivem nos Estados Unidos ou pretendem entrar por essas categorias.\n\nDias antes, em 21 de maio de 2026, a USCIS publicou o memorando de política PM-602-0199, que trata o ajuste de status, o caminho para pedir o green card de dentro dos Estados Unidos, como uma medida discricionária e uma graça administrativa extraordinária. O documento reforça o processamento consular, ou seja, pedir o visto de imigrante fora do país, como a via padrão esperada pelo governo. Na prática, o memorando sinaliza que o ajuste de status deixa de ser tratado como caminho automático e passa a exigir justificativa mais forte.\n\nAo mesmo tempo, a USCIS revogou a regra de public charge de 2022, o padrão que orienta como o uso de benefícios públicos pesa na avaliação de pedidos de visto e de residência. O texto final foi publicado no Federal Register em 20 de julho de 2026 e entra em vigor em 18 de setembro. O documento remove do regulamento os dispositivos que traziam as definições fechadas e o método de análise da regra de 2022, sem colocar outros no lugar, e devolve ao oficial que examina o pedido uma avaliação de totalidade das circunstâncias, feita caso a caso. Por isso a leitura de afrouxamento geral não se sustenta: trocar um critério escrito em regulamento por análise discricionária significa menos previsibilidade, e não necessariamente mais facilidade. Benefícios recebidos antes de 18 de setembro de 2026 seguem avaliados de forma consistente com o padrão de 2022.\n\nEnquanto isso, a disputa em torno da taxa de US$100 mil cobrada na entrada de novos titulares de H-1B segue em aberto no Judiciário. Em 8 de junho de 2026, um juiz federal do distrito de Massachusetts invalidou a cobrança, mas suspendeu a própria decisão dias depois, e o Primeiro Circuito manteve essa suspensão enquanto o recurso corre. Na prática, a taxa continua sendo cobrada até que o caso se resolva, e empregadores e candidatos seguem sem uma resposta definitiva.\n\nPor fim, o Departamento do Trabalho, o DOL, sinalizou na Agenda Regulatória Unificada de 3 de julho de 2026 que prepara a primeira atualização abrangente do processo PERM desde 2004, o exame do mercado de trabalho que sustenta a maioria dos pedidos de green card por emprego. O texto da proposta ainda não foi publicado, então por enquanto é um plano declarado, não uma regra em vigor, mas o simples anúncio já é significativo para quem depende da certificação trabalhista no caminho da residência permanente.\n\nO denominador comum entre essas medidas é o aumento do controle discricionário da administração sobre etapas que antes seguiam fluxos mais automáticos, da permanência de estudantes à concessão do green card dentro do país. Para quem constrói um projeto de vida nos Estados Unidos, o momento pede atenção redobrada a prazos, datas de vigência e à fonte oficial de cada mudança, porque vários desses processos ainda estão em curso e podem ganhar novos capítulos nos próximos meses.",
      tags: ["EUA", "USCIS", "DHS", "H-1B", "Green Card", "PERM", "Vistos de Estudante"],
      sources: [
      { label: "DHS · Trump Administration Issues Final Rule to End Foreign Student Visa Abuse", url: "https://www.dhs.gov/news/2026/07/16/trump-administration-issues-final-rule-end-foreign-student-visa-abuse" },
      { label: "Federal Register · Public Inspection 2026-14439 (DHS)", url: "https://public-inspection.federalregister.gov/2026-14439.pdf" },
      { label: "USCIS · Policy Memorandum PM-602-0199 (21/mai/2026)", url: "https://www.uscis.gov/sites/default/files/document/memos/PM-602-0199-AdjustmentOfStatusAndDiscretion-20260521.pdf" },
      { label: "USCIS · News Release: Will Grant 'Adjustment of Status' Only in Extraordinary Circumstances", url: "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-will-grant-adjustment-of-status-only-in-extraordinary" },
      { label: "USCIS · News Release: Rescinds 2022 Public Charge Regulation", url: "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-rescinds-2022-public-charge-regulation" },
      { label: "Federal Register · Public Charge Ground of Inadmissibility (regra final, 20/jul/2026)", url: "https://www.federalregister.gov/documents/2026/07/20/2026-14539/public-charge-ground-of-inadmissibility" },
      { label: "Vorys · Court Strikes Down $100,000 New H-1B Entry Fee, But Fee Still Applies Pending Appeal", url: "https://www.vorys.com/publication-court-strikes-down-100-000-h-1b-entry-fee-but-fee-still-applies-pending-appeal" },
      { label: "Reginfo.gov · OIRA Unified Agenda: RIN 1205-AC29", url: "https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29" },
    ],
    },
    ],
    community: [
      {
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "USCIS atinge o teto de H-1B do ano fiscal de 2027 e descarta nova rodada de seleção",
        "body": "A USCIS informou em 17 de julho de 2026 que recebeu petições suficientes para atingir o teto de 65 mil vistos H-1B da cota regular e as 20 mil vagas adicionais da isenção destinada a quem tem diploma de pós-graduação obtido nos Estados Unidos, conhecida como master's cap, referentes ao ano fiscal de 2027. A janela para protocolar as petições dos registros selecionados foi de 1º de abril a 30 de junho de 2026.\n\nO próprio comunicado da agência responde a pergunta que mais aparece nesse momento do ciclo. Como o teto foi atingido, a USCIS informou que não conduzirá rodadas adicionais de seleção de registros para o ano fiscal de 2027. Não se trata de leitura de escritório de advocacia nem de expectativa de mercado, e sim do que a própria agência declarou. Quem não teve o registro selecionado depende do próximo período de inscrição.\n\nEste foi o primeiro ciclo conduzido sob o novo processo de seleção ponderada por faixa salarial, em vigor desde 27 de fevereiro de 2026, em que cada registro recebe de uma a quatro entradas no sorteio conforme o salário oferecido se compare aos níveis de salário prevalecente definidos pelo Department of Labor. Na prática, quem for tentar o próximo ciclo precisa saber que a faixa salarial da oferta passou a influenciar diretamente a chance de seleção.\n\nVale lembrar que nem toda petição de H-1B passa pela cota. A USCIS segue aceitando e processando petições isentas do teto, incluindo extensões, emendas e mudança de empregador, além de mudanças de status protocoladas por empregadores isentos. É isso que o candidato precisa checar com quem cuida do seu caso antes de concluir que a porta fechou de vez.",
        "cta": "Teve registro de H-1B não selecionado neste ciclo? Confirme com seu empregador ou com um advogado de imigração habilitado quais caminhos seguem disponíveis, incluindo petições isentas da cota, e como a faixa salarial da oferta pode pesar no próximo ciclo. Conteúdo informativo não substitui a análise de um profissional.",
        "sources": [
          {
            "label": "USCIS · USCIS Reaches Fiscal Year 2027 H-1B Cap (17/jul/2026)",
            "url": "https://www.uscis.gov/newsroom/alerts/uscis-reaches-fiscal-year-2027-h-1b-cap"
          },
          {
            "label": "USCIS · H-1B Cap Season",
            "url": "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-cap-season"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Fim do duration of status para F, J e I: prazo de até 4 anos, vigência em 15 de setembro e ressalva do Congresso",
        "body": "A regra final que substitui o duration of status por um prazo fixo de admissão nos vistos F, de estudante, J, de intercâmbio, e I, de representantes de mídia estrangeira, foi publicada no Federal Register em 17 de julho de 2026 e trouxe a informação que faltava no anúncio inicial: a vigência foi fixada em 15 de setembro de 2026.\n\nO ponto central da mudança é o prazo, que até agora não tinha número. No caso do estudante F, a admissão passa a ser pelo tempo do programa informado no Form I-20, limitado a quatro anos, mais 30 dias para a chegada e 30 dias para a saída. Para os vistos J, o limite também é de até quatro anos. Para os vistos I, de mídia estrangeira, o prazo máximo é de 240 dias. Quem precisar de mais tempo para concluir o curso, começar um novo programa ou fazer prática autorizada terá de pedir Extension of Stay à USCIS, um passo que hoje simplesmente não existe.\n\nO próprio texto acrescenta uma ressalva relevante. A regra foi classificada como major rule, sujeita à revisão do Congresso. Se ao fim dessa revisão a data de vigência for alterada, o DHS publicará novo documento no Federal Register para estabelecer a data efetiva ou para encerrar a regra. Em outras palavras, 15 de setembro é a data que vale hoje, e não uma data blindada contra mudança.\n\nHá ainda uma transição que interessa diretamente a quem está em OPT, e ela é mais longa do que pareceu no primeiro momento. O documento prevê um período de alívio temporário de 244 dias contados da publicação da regra, o que hoje leva a 18 de março de 2027. Estudantes F-1 que estiverem em duration of status e tiverem um Form I-765 pendente quando a regra entrar em vigor, ou que protocolarem o I-765 a tempo durante esse período, em geral não precisarão apresentar um Form I-539 apenas para estender a permanência durante o OPT pedido. O texto confirma também a redução de 60 para 30 dias do prazo de preparação para deixar o país após a conclusão do curso ou do período de prática autorizada.",
        "cta": "Está nos EUA com visto F, J ou I, ou pretende entrar por um deles nos próximos meses? Anote 15 de setembro de 2026, verifique quando termina o prazo fixo que passará a valer no seu caso e acompanhe as publicações do Federal Register, porque a data ainda pode ser revista. Converse com o escritório de estudantes internacionais da sua instituição ou com um advogado de imigração habilitado antes de decidir; conteúdo informativo não substitui essa análise.",
        "sources": [
          {
            "label": "Federal Register · Establishing a Fixed Time Period of Admission and an Extension of Stay Procedure for Nonimmigrant Academic Students, Exchange Visitors, and Representatives of Foreign Information Media (17/jul/2026)",
            "url": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant"
          },
          {
            "label": "DHS · Study in the States: Final Rule Quick Facts",
            "url": "https://studyinthestates.dhs.gov/elimination-of-duration-of-status-quick-facts"
          },
          {
            "label": "NAFSA · DHS Final Rule Ending Duration of Status",
            "url": "https://www.nafsa.org/regulatory-information/dhs-final-rule-ending-duration-status"
          }
        ]
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "headline": "Texto da regra de public charge é publicado e define o que vale a partir de 18 de setembro",
        "standfirst": "A regra final saiu no Federal Register em 20 de julho e responde o que estava em aberto desde o anúncio: o DHS abandona o critério de dependência primária, devolve margem de decisão ao oficial que analisa o caso, exige nova edição do Form I-485 e estabelece que benefícios recebidos antes da data continuam avaliados pelo padrão de 2022.",
        "body": "O Department of Homeland Security, o DHS, publicou em 20 de julho de 2026 no Federal Register a regra final que revoga a regulamentação de public charge, o encargo público, editada em 2022. O documento, registrado sob o número 2026-14539, é o texto completo que faltava quando a USCIS anunciou a revogação dias antes sem detalhar qual critério passaria a valer no lugar.\n\nA data de vigência está confirmada em 18 de setembro de 2026. A regra se aplica a pedidos de admissão feitos a partir dessa data e a pedidos de ajuste de status postados ou enviados eletronicamente a partir dela. O ponto mais concreto para quem já tem processo em andamento está na regra de transição escrita no próprio texto: o recebimento de benefícios públicos sujeitos a teste de renda antes de 18 de setembro de 2026 continuará sendo considerado de forma consistente com a regra de 2022.\n\nHá um detalhe operacional que pode custar o processo de quem não prestar atenção. A USCIS informou que publicará uma edição revisada do Form I-485, o pedido de ajuste de status, e que edições anteriores do formulário postadas ou enviadas eletronicamente a partir de 18 de setembro de 2026 não serão aceitas. Quem planeja protocolar perto dessa data precisa conferir qual edição do formulário está usando antes de enviar.\n\nNa parte substantiva, o texto remove do Código de Regulamentos Federais os dispositivos 8 CFR 212.20 a 212.23, que traziam a cláusula de aplicabilidade, as definições, o método de análise e a lista de isenções e waivers da regra de 2022, e não coloca nenhuma regulamentação no lugar. Com isso, segundo o próprio DHS, a agência se afasta do que chama de critério de linha rígida de dependência primária e volta a uma avaliação de totalidade das circunstâncias, feita caso a caso.\n\nO documento especifica o que os oficiais poderão considerar nessa avaliação: os fatores obrigatórios previstos na seção 212(a)(4)(B) da Immigration and Nationality Act, o recebimento de benefícios públicos sujeitos a teste de renda, quaisquer outros fatores individualizados e específicos do caso, e dados empíricos relevantes sobre a autossuficiência do solicitante. A regra alcança as partes 103 e 212 do Código de Regulamentos Federais e ajusta também dispositivos relativos a fianças de public charge.\n\nVale marcar uma diferença em relação à leitura que circulou logo após o anúncio inicial. Revogar a regra de 2022 não equivale automaticamente a um critério mais brando. O que o texto faz é trocar parâmetros escritos em regulamento por margem de decisão do oficial responsável pela análise, o que tende a produzir resultados mais variáveis de processo para processo, em vez de um padrão único e previsível.\n\nA USCIS informou que vai editar uma orientação infralegal, sem força de lei, com vigência na mesma data e destinada a integrar o USCIS Policy Manual, substituindo a orientação atual baseada na regra de 2022. O DHS registrou ter recebido 8.846 comentários públicos sobre a proposta, a maioria deles contrária, e ainda assim publicou a regra final nos termos em que havia sido proposta.\n\nQuem tem pedido de green card, ajuste de status ou visto em andamento e já recebeu algum benefício público deve tratar 18 de setembro de 2026 como marco de referência, conferir a edição do Form I-485 antes de protocolar e acompanhar a publicação da orientação da USCIS antes de tomar decisões sobre o próprio processo. Conteúdo informativo não substitui a análise de um advogado de imigração habilitado.",
        "keyFacts": [
          "Regra final publicada no Federal Register em 20 de julho de 2026, sob o número 2026-14539, revogando a regulamentação de public charge de 2022.",
          "Vigência em 18 de setembro de 2026, aplicável a pedidos de admissão feitos a partir dessa data e a pedidos de ajuste de status postados ou enviados eletronicamente a partir dela.",
          "Nova edição do Form I-485 será publicada, e edições anteriores postadas ou enviadas eletronicamente a partir de 18 de setembro de 2026 não serão aceitas.",
          "Benefícios públicos sujeitos a teste de renda recebidos antes de 18 de setembro de 2026 seguem avaliados de forma consistente com a regra de 2022.",
          "O texto remove os dispositivos 8 CFR 212.20 a 212.23, sem colocar regulamentação no lugar, e substitui o critério de dependência primária por análise de totalidade das circunstâncias, caso a caso.",
          "O DHS recebeu 8.846 comentários públicos, a maioria contrária, e publicou a regra final nos termos propostos.",
          "A USCIS vai editar orientação infralegal, sem força de lei, com vigência na mesma data e incorporada ao USCIS Policy Manual."
        ],
        "sources": [
          {
            "label": "Federal Register · Public Charge Ground of Inadmissibility (regra final, 20/jul/2026)",
            "url": "https://www.federalregister.gov/documents/2026/07/20/2026-14539/public-charge-ground-of-inadmissibility"
          },
          {
            "label": "USCIS · News Release: Rescinds 2022 Public Charge Regulation",
            "url": "https://www.uscis.gov/newsroom/news-releases/us-citizenship-and-immigration-services-rescinds-2022-public-charge-regulation"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "Julho concentrou recordes provinciais no Canadá, e a conta das cotas de 2026 mostra onde ainda sobra espaço",
        "standfirst": "Recordes de convites na Colúmbia Britânica e na Ilha do Príncipe Eduardo, seis sorteios em Alberta e um sorteio federal que convidou exatamente todos os nomeados disponíveis no pool. Os números de meio de ano mostram quanto espaço ainda resta nas cotas de 2026 e, principalmente, que ele não está onde a intuição sugere.",
        "body": "A segunda quinzena de julho de 2026 concentrou uma quantidade atípica de atividade na via provincial da imigração canadense. Em poucos dias, duas províncias bateram seus recordes do ano em número de convites, uma terceira acumulou seis sorteios em menos de duas semanas e o governo federal realizou uma rodada de Express Entry que esgotou o estoque de candidatos nomeados disponível no pool. Vistos em conjunto, esses movimentos se explicam melhor por aritmética de cota do que por acaso de calendário.\n\nComeça pela Colúmbia Britânica. Em 16 de julho, o BC PNP emitiu 569 convites na categoria Skills Immigration, a maior rodada da província no ano segundo a CIC News. A composição chama atenção tanto quanto o total, já que 346 convites saíram por pontuação de registro e 223 foram direcionados a ocupações TEER 0 a 3 com oferta salarial de pelo menos 58 dólares por hora. Foi a maior proporção de convites por pontuação de registro de qualquer rodada do BC PNP em 2026. A mesma cobertura aponta que a província já havia emitido ao menos 3.676 convites em 16 rodadas de seleção ao longo de 2026, com um pool de 8.683 perfis registrados em 7 de julho e uma concentração grande na faixa de 100 a 109 pontos, que sozinha reunia 1.728 perfis.\n\nNo mesmo 16 de julho, a Ilha do Príncipe Eduardo emitiu 195 convites nas vias Labour Impact e PEI Express Entry, também seu maior número do ano. A província vem mantendo uma rodada mensal, e a progressão de 2026 mostra tendência de alta com oscilações pelo caminho: 26 convites em janeiro, 109 em fevereiro, 101 em março, 127 em abril, 113 em maio, 182 em junho e 195 em julho, somando 853 no ano. Restam cinco rodadas no calendário publicado até dezembro, que a própria província trata como tentativas e sujeitas a mudança, o que significa que a maior parte do ciclo de seleção ainda está pela frente.\n\nAlberta oferece o retrato mais completo, porque publica a relação entre nominações emitidas e cota disponível. Entre 3 e 15 de julho, o AAIP realizou seis sorteios que somaram 1.167 convites, distribuídos entre a Alberta Opportunity Stream, as vias de saúde, a Accelerated Tech Pathway, a Rural Renewal Stream e a Law Enforcement Pathway. Até 15 de julho, segundo os dados do AAIP reportados pela CIC News, a província havia emitido 3.582 nominações contra uma alocação de 6.403 espaços para 2026. Ou seja, com pouco mais da metade do ano transcorrido, cerca de 56 por cento da cota já estava comprometida.\n\nA folga por via, porém, não é uniforme, e é aqui que a intuição comum erra. A via com mais espaço proporcional é a de saúde, com 232 das 500 vagas usadas, ou seja, mais da metade ainda disponível. A Accelerated Tech Pathway, apesar da fama de porta rápida, estava mais comprometida do que a corrente geral: 349 de 600 espaços usados, contra 1.872 de 3.425 na Alberta Opportunity Stream. E a Rural Renewal Stream, em 598 de 1.000, era a mais comprometida das quatro. Quem lê apenas a manchete de que existe folga nas vias setoriais pode direcionar o próprio plano para o lugar errado.\n\nDo lado federal, o sorteio de 20 de julho fechou o período com 511 convites a candidatos com nomeação provincial e corte CRS de 744 pontos. A análise do Moving2Canada observa que, em 19 de julho, havia exatamente 511 perfis acima de 601 pontos no pool. Como a nomeação provincial soma 600 pontos, essa faixa corresponde aos já nomeados, o que indica que a rodada alcançou todo o estoque disponível em vez de aplicar um filtro competitivo entre muitos nomeados.\n\nÉ desse encaixe que sai a conclusão mais útil. A nomeação provincial segue sendo o gargalo real do sistema, e não a etapa federal seguinte. Quando o Express Entry convida essencialmente todos os nomeados disponíveis, a disputa de fato já aconteceu antes, dentro de cada programa provincial, sob critérios próprios de pontuação, ocupação, região e salário. Isso ajuda a explicar por que o corte CRS dessas rodadas oscila tanto, de 708 pontos em 6 de julho para 744 em 20 de julho, sem que isso signifique endurecimento de política federal. O número reflete sobretudo quem estava no pool naquela semana, e os cortes de PNP em 2026 já variaram de 708 a 805 pontos.\n\nPara quem planeja, a leitura prática é sobre onde procurar espaço. As cotas provinciais de 2026 ainda não estão esgotadas, e em Alberta o espaço maior estava na via de saúde, não na tecnologia. Províncias menores como a Ilha do Príncipe Eduardo mantêm calendário regular com rodadas ainda por vir. Vale lembrar que esta é uma leitura de mercado baseada nos dados publicados, não uma declaração de política dos governos envolvidos, e que critérios de elegibilidade mudam sem aviso. Nada aqui garante convite, nomeação ou residência. Antes de qualquer decisão, confirme requisitos e prazos diretamente nas páginas oficiais de cada programa e considere apoio de um profissional habilitado.",
        "tags": [
          "Canadá",
          "imigração provincial",
          "PNP",
          "Express Entry",
          "BC PNP",
          "AAIP",
          "PEI",
          "cotas 2026"
        ],
        "sources": [
          {
            "label": "Alberta.ca · AAIP Processing information (alocação 2026)",
            "url": "https://www.alberta.ca/aaip-processing-information"
          },
          {
            "label": "Alberta.ca · AAIP Updates (fonte oficial)",
            "url": "https://www.alberta.ca/aaip-updates"
          },
          {
            "label": "WelcomeBC · BC PNP Invitations to Apply (fonte oficial)",
            "url": "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program/invitations-to-apply"
          },
          {
            "label": "PEI Office of Immigration · Expression of Interest Draws (fonte oficial)",
            "url": "https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws"
          },
          {
            "label": "IRCC · Express Entry: Rounds of invitations (fonte oficial)",
            "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html"
          },
          {
            "label": "CIC News · British Columbia holds largest provincial immigration selection round this year",
            "url": "https://www.cicnews.com/2026/07/british-columbia-holds-largest-provincial-immigration-selection-round-this-year-0778166.html"
          },
          {
            "label": "CIC News · PEI holds largest provincial immigration draw this year",
            "url": "https://www.cicnews.com/2026/07/pei-holds-largest-provincial-immigration-draw-this-year-0778177.html"
          },
          {
            "label": "CIC News · Alberta invites over 1,100 candidates to apply for provincial nomination",
            "url": "https://www.cicnews.com/2026/07/alberta-invites-over-1100-candidates-to-apply-for-provincial-nomination-0778126.html"
          },
          {
            "label": "Moving2Canada · 511 PNP Candidates Invited in Express Entry Draw on July 20",
            "url": "https://moving2canada.com/2026/07/new-511-ita-pnp-express-entry-draw/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Express Entry: sorteio de nomeação provincial sai com 511 convites e corte CRS 36 pontos mais alto",
        "body": "O IRCC realizou em 20 de julho de 2026 um novo sorteio do Express Entry voltado a candidatos com nomeação provincial. Foram 511 convites para candidatura, com nota de corte no sistema CRS de 744 pontos e regra de desempate fixada em 26 de maio de 2026, às 18h11min36s no horário universal.\n\nO dado interessa a quem acompanhou o sorteio anterior da mesma categoria, realizado em 6 de julho, que teve 534 convites e corte de 708 pontos, o menor do ano para PNP. Em duas semanas, portanto, a nota de corte subiu 36 pontos, o que mostra que aquele patamar mais acessível de início de julho não se manteve.\n\nHá uma leitura sobre o tamanho da rodada que muda a interpretação desse salto. Segundo a análise do Moving2Canada, em 19 de julho havia exatamente 511 perfis acima de 601 pontos no pool, o mesmo número de convites emitidos no dia seguinte. Como uma nomeação provincial soma 600 pontos ao perfil, essa faixa corresponde justamente aos candidatos já nomeados. Ou seja, a rodada não filtrou os melhores entre muitos nomeados, ela alcançou todo o estoque de nomeados disponível naquele momento. O corte de 744 reflete quem estava no pool, e não um critério novo.\n\nO mesmo levantamento aponta que este foi o 14º sorteio PNP de 2026, com 6.450 convites acumulados no ano, e que os cortes da categoria variaram entre 708 e 805 pontos ao longo de 2026.\n\nOs números do sorteio devem ser confirmados na página oficial de rodadas de convites do IRCC antes de qualquer decisão sobre o seu processo. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "cta": "Tem perfil no Express Entry aguardando nomeação provincial? Confirme os números da rodada na página oficial do IRCC e mantenha documentação e comprovação de idioma em dia para as próximas.",
        "sources": [
          {
            "label": "IRCC · Express Entry: Rounds of invitations (fonte oficial)",
            "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html"
          },
          {
            "label": "CIC News · Canada issues invitations to apply to provincial nominees (20/jul/2026)",
            "url": "https://www.cicnews.com/2026/07/canada-issues-invitations-to-apply-to-provincial-nominees-0777930.html"
          },
          {
            "label": "CIC News · First Express Entry draw of July sees lowest PNP cut-off score this year (06/jul/2026)",
            "url": "https://www.cicnews.com/2026/07/first-express-entry-draw-of-july-sees-lowest-pnp-cut-off-score-this-year-0777251.html"
          },
          {
            "label": "Moving2Canada · 511 PNP Candidates Invited in Express Entry Draw on July 20",
            "url": "https://moving2canada.com/2026/07/new-511-ita-pnp-express-entry-draw/"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "Colúmbia Britânica e PEI fazem no mesmo dia as maiores rodadas provinciais do ano",
        "body": "O meio de julho concentrou uma sequência incomum de convites provinciais no Canadá. Em 16 de julho de 2026, a Colúmbia Britânica e a Ilha do Príncipe Eduardo realizaram, cada uma, a maior rodada de seleção do ano em seus respectivos programas, segundo a cobertura da CIC News.\n\nNa Colúmbia Britânica, foram 569 convites na categoria Skills Immigration, divididos entre 346 emitidos por pontuação de registro, com mínimo de 132 pontos, e 223 direcionados a ocupações TEER 0 a 3 com oferta de emprego de pelo menos 58 dólares por hora, o equivalente a cerca de 115 mil dólares por ano. Foi a rodada com a maior proporção de convites por pontuação de registro entre todas as do BC PNP em 2026.\n\nNa Ilha do Príncipe Eduardo, foram 195 convites nas vias Labour Impact e PEI Express Entry, com prioridade para graduados internacionais de três instituições da província, a UPEI, o Holland College e o Collège de l'Île. Com essa rodada, a província chegou a 853 convites no ano, em sete rodadas.\n\nAlberta também esteve ativa no período, com 1.167 convites distribuídos em seis sorteios entre 3 e 15 de julho, concentrados em saúde, tecnologia, segurança pública e assentamento rural.\n\nSe você tem perfil registrado em algum desses programas, vale revisar pontuação, ocupação e informações de contato agora, já que as rodadas seguem calendário próprio e os critérios variam bastante entre províncias. Confirme sempre os números e as exigências nas páginas oficiais de cada programa. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "cta": "Tem registro em programa provincial? Revise sua pontuação e seus dados nas páginas oficiais do BC PNP, do PEI Office of Immigration ou do AAIP antes da próxima rodada.",
        "sources": [
          {
            "label": "WelcomeBC · BC PNP Invitations to Apply (fonte oficial)",
            "url": "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program/invitations-to-apply"
          },
          {
            "label": "PEI Office of Immigration · Expression of Interest Draws (fonte oficial)",
            "url": "https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws"
          },
          {
            "label": "Alberta.ca · AAIP Updates (fonte oficial)",
            "url": "https://www.alberta.ca/aaip-updates"
          },
          {
            "label": "CIC News · British Columbia holds largest provincial immigration selection round this year",
            "url": "https://www.cicnews.com/2026/07/british-columbia-holds-largest-provincial-immigration-selection-round-this-year-0778166.html"
          },
          {
            "label": "CIC News · PEI holds largest provincial immigration draw this year",
            "url": "https://www.cicnews.com/2026/07/pei-holds-largest-provincial-immigration-draw-this-year-0778177.html"
          },
          {
            "label": "CIC News · Alberta invites over 1,100 candidates to apply for provincial nomination",
            "url": "https://www.cicnews.com/2026/07/alberta-invites-over-1100-candidates-to-apply-for-provincial-nomination-0778126.html"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
      title: "Novo piso salarial do LMIA passa a valer nesta sexta-feira (17/07)",
      body: "O Employment and Social Development Canada, o ESDC, atualizou em 10 de julho de 2026 os limiares de salário mediano usados para classificar vagas de LMIA como stream de alto ou baixo salário. A partir de hoje, 17 de julho, toda nova aplicação submetida passa a ser avaliada pelos novos valores, provinciais e territoriais. Pedidos enviados antes de hoje continuam seguindo o limiar anterior.\n\nA classificação importa porque muda as regras do jogo. Vagas no stream de alto salário podem gerar permissões de trabalho de até três anos e exigem apenas quatro semanas de anúncio da vaga, enquanto o stream de baixo salário limita a permissão a um ano e pede oito semanas de anúncio. Quem está no meio de um processo de LMIA, seja como empregador ou candidato, deve conferir hoje mesmo se o salário da vaga ficou acima ou abaixo do novo piso do seu estado ou província antes de enviar qualquer aplicação.",
      cta: "Confira o novo limiar salarial da sua província no site do ESDC antes de submeter ou aceitar uma vaga com LMIA.",
      sources: [
      { label: "ESDC/Canada.ca · Hire a temporary foreign worker in a high-wage or low-wage position (median wage)", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage.html" },
    ],
    },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "headline": "Canadá proíbe a entrada de estrangeiros que estiveram na RDC, e a suspensão de vistos que já valia desde maio segue até 28 de agosto",
        "standfirst": "A proibição de entrada anunciada pela Agência de Saúde Pública em 19 de julho é a novidade desta semana e passa a valer às 23h59 de 20 de julho. Já a suspensão de vistos, permissões e eTAs de quem declarou RDC, Uganda ou Sudão do Sul como último país de residência não é nova: está em vigor desde 27 de maio. Em ambos os casos, o IRCC orienta não enviar o passaporte ao centro de solicitação.",
        "body": "O governo do Canadá anunciou em 19 de julho de 2026 uma nova medida temporária de fronteira em resposta ao surto de doença por vírus Ebola na República Democrática do Congo. A partir de 20 de julho de 2026, às 23h59 no horário do leste, estrangeiros que estiveram na República Democrática do Congo nos 21 dias anteriores ficam proibidos de entrar no Canadá. Segundo a Agência de Saúde Pública do Canadá, a PHAC, as medidas de fronteira permanecem em vigor até 29 de agosto de 2026.\n\nPara dar efeito prático à proibição, o governo editou também uma Interim Order sob o Aeronautics Act, a lei federal de aeronáutica, obrigando transportadoras aéreas comerciais e privadas a não permitir o embarque desses passageiros em voos com destino ao Canadá. Ou seja, a barreira não fica apenas no controle de fronteira, ela começa no balcão de check-in.\n\nAqui vale uma distinção que a cobertura desta semana tende a embaralhar, e que muda a leitura de quem tem processo em andamento. A suspensão de documentos de imigração não faz parte do anúncio de 19 de julho. Ela já estava valendo. Desde 27 de maio de 2026, às 23h59min59s no horário do leste, o IRCC mantém temporariamente suspensos os documentos de imigração de estrangeiros que informaram a República Democrática do Congo, Uganda ou Sudão do Sul como último país de residência na aplicação. Na prática, essas pessoas não podem viajar ao Canadá mesmo que já tenham um visto de residente temporário, uma permissão, um visto de residente permanente ou uma autorização eletrônica de viagem, a eTA, previamente aprovados. Essa suspensão vale até 28 de agosto de 2026, às 23h59min59s no horário do leste.\n\nAs duas datas de encerramento são de fato diferentes, e não se trata de erro. A suspensão de documentos do IRCC termina em 28 de agosto e as medidas de fronteira da PHAC seguem até 29 de agosto, porque são instrumentos distintos, editados em momentos distintos.\n\nHá um detalhe de critério que costuma gerar confusão e merece atenção. A suspensão é aplicada com base no último país de residência declarado na aplicação, e não na nacionalidade do solicitante. Quem morava fora dos três países no momento em que pediu o visto, a permissão ou outro documento de imigração não é atingido por ela.\n\nO IRCC também esclarece que pedidos novos e em andamento continuam sendo processados, mas não são finalizados enquanto as medidas estiverem valendo. A orientação expressa do órgão é não enviar o passaporte a um centro de recepção de pedidos de visto, o VAC, até que as restrições terminem. Quem foi notificado de que está afetado pode pedir uma isenção ao IRCC, explicando e apresentando evidências do motivo, e cada pedido é analisado caso a caso.\n\nPara cidadãos canadenses, residentes permanentes e pessoas registradas sob o Indian Act não há mudança de regra de entrada. Quem esteve na República Democrática do Congo, em Uganda ou no Sudão do Sul nos 21 dias anteriores segue podendo viajar ao Canadá, passa por avaliação de saúde na chegada e cumpre quarentena de 21 dias, exigência que já vinha sendo aplicada desde 30 de maio de 2026.\n\nA própria PHAC classifica como baixo o risco à saúde dos canadenses e informa que não houve, até agora, casos relacionados a viagem registrados no país, descrevendo as medidas como uma precaução. A cobertura da imprensa canadense e internacional registrou ainda que a proibição de entrada vai na direção oposta da orientação da Organização Mundial da Saúde, que historicamente desaconselha restrições de viagem como resposta a surtos.\n\nPara quem tem viagem, mudança ou processo migratório planejado envolvendo a região, a recomendação prática é confirmar a situação específica do próprio caso diretamente nas páginas oficiais do IRCC e da PHAC antes de comprar passagem, enviar documento ou tomar qualquer decisão. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "keyFacts": [
          "NOVO em 19 de julho: estrangeiros que estiveram na República Democrática do Congo nos 21 dias anteriores ficam proibidos de entrar no Canadá a partir de 20 de julho de 2026, às 23h59 no horário do leste, com as medidas de fronteira valendo até 29 de agosto de 2026.",
          "Uma Interim Order sob o Aeronautics Act obriga companhias aéreas comerciais e privadas a negar o embarque desses passageiros em voos para o Canadá.",
          "NÃO é novo: a suspensão de documentos de imigração está em vigor desde 27 de maio de 2026 e vai até 28 de agosto de 2026, às 23h59min59s no horário do leste. Ela atinge quem declarou República Democrática do Congo, Uganda ou Sudão do Sul como último país de residência, mesmo com visto, permissão, visto de residente permanente ou eTA já aprovados.",
          "O critério da suspensão é o último país de residência informado na aplicação, não a nacionalidade do solicitante.",
          "Pedidos novos e em andamento seguem sendo processados, mas não são finalizados durante as medidas, e o IRCC orienta não enviar o passaporte ao VAC nesse período. Quem foi notificado pode pedir isenção, analisada caso a caso.",
          "Cidadãos canadenses, residentes permanentes e pessoas registradas sob o Indian Act mantêm o direito de entrada, com avaliação de saúde na chegada e quarentena de 21 dias, exigência que vale desde 30 de maio de 2026.",
          "A PHAC classifica o risco à saúde dos canadenses como baixo e não registrou casos relacionados a viagem no país até agora."
        ],
        "sources": [
          {
            "label": "Agência de Saúde Pública do Canadá · New Temporary Border Measures in Response to the Ebola Disease Outbreak (19/jul/2026)",
            "url": "https://www.canada.ca/en/public-health/news/2026/07/new-temporary-border-measures-in-response-to-the-ebola-disease-outbreak.html"
          },
          {
            "label": "Agência de Saúde Pública do Canadá · Government of Canada introduces temporary border measures in response to the Ebola disease outbreak (medidas originais de maio/2026)",
            "url": "https://www.canada.ca/en/public-health/news/2026/05/government-of-canada-introduces-temporary-border-measures-in-response-to-the-ebola-disease-outbreak.html"
          },
          {
            "label": "IRCC/Canada.ca · Ebola disease: Temporary measures (suspensão de documentos, 27/mai a 28/ago)",
            "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/special-measures/ebola-2026.html"
          },
          {
            "label": "Canada.ca · Ebola disease: Border measures for travellers entering Canada",
            "url": "https://www.canada.ca/en/public-health/services/diseases/ebola/border-measures.html"
          },
          {
            "label": "CBC News · Canada to temporarily bar entry by foreign nationals recently in Congo due to Ebola risk",
            "url": "https://www.cbc.ca/news/canada/canada-congo-ebola-9.7275782"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "Austrália fixa cota por organização e prioridades de idade, inglês e renda no visto humanitário 202",
        "standfirst": "Dois instrumentos ministeriais reportados em 17 de julho completam a reforma do Community Support Program, em vigor desde 1º de julho. Um fixa a cota anual de cada organização proponente, o outro lista as prioridades que o governo quer ver no requerente principal, entre elas idade, inglês e capacidade de se sustentar em até 12 meses após a chegada. São prioridades a ponderar, não requisitos automáticos de elegibilidade.",
        "body": "A reforma da via comunitária do visto humanitário australiano ganhou as duas peças que faltavam. O Migration Amendment (Realigning the Community Support Program) Regulations 2026 foi registrado em 16 de junho de 2026 e entrou em vigor em 1º de julho, aplicando-se aos pedidos apresentados a partir dessa data. Ele reorganizou o Community Support Program, a via comunitária de acesso ao visto Subclass 202, o Global Special Humanitarian. O regulamento criou os mecanismos, mas deixou os números e os critérios concretos para instrumentos ministeriais posteriores. Esses instrumentos foram reportados em 17 de julho de 2026 pela Migration Alliance, associação de agentes e advogados de migração do país.\n\nO primeiro é o Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026, identificado como LIN 26/035. Ele estabelece a alocação anual de requerentes de cada Approved Proposing Organisation, as chamadas APOs, para o ano fiscal iniciado em 1º de julho de 2026. Dois pontos práticos chamam atenção. Requerentes principais e secundários contam para o mesmo limite, ou seja, um grupo familiar consome várias vagas da mesma organização. E o pedido que ultrapassar a cota da APO é tratado como inválido, sem chegar a ser considerado, em vez de ser recusado depois de análise de mérito. A diferença importa, porque um pedido inválido não é avaliado.\n\nUma observação necessária sobre esse instrumento. A cobertura a que tivemos acesso descreve o mecanismo da cota, mas não divulga quantas vagas cada organização recebeu. Os números por APO não estão públicos nessa reportagem. Na prática, isso significa que a única forma confiável de saber se ainda há vaga é perguntar diretamente à organização proponente antes de protocolar.\n\nO segundo instrumento é o Migration (Specification of Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026, o LIN 26/036. Ele lista as prioridades que os decisores devem considerar ao avaliar se o assentamento permanente está alinhado aos objetivos do governo. São três, segundo a Migration Alliance. O requerente principal deve, em geral, ter entre 18 e 50 anos. Deve demonstrar inglês falado e escrito adequado para vida independente, segurança no trabalho e emprego. E deve ter capacidade de se tornar financeiramente autossuficiente em até 12 meses após a chegada, apoiada por oferta de emprego remunerado na Austrália ou por evidência de habilidades e experiência de trabalho relevantes.\n\nVale insistir num ponto que costuma se perder na tradução dessas mudanças. O instrumento usa a fórmula de que o requerente principal deve, em geral, atender a esses pontos. São prioridades que o decisor pondera, não barreiras automáticas de elegibilidade. Já circulam resumos tratando a faixa de 18 a 50 anos como requisito obrigatório no momento do protocolo, e não foi isso que o instrumento estabeleceu. Quem está fora da faixa não deve concluir sozinho que está eliminado, assim como quem está dentro dela não deve concluir que está aprovado.\n\nO que mudou desde 1º de julho é justamente o grau de concretude. Antes existia a moldura, o regulamento dizendo que haveria cota por organização e que haveria prioridades da Commonwealth definidas por instrumento ministerial. Agora existem critérios nomeados e cota atribuída por organização para o ano fiscal corrente. O propósito declarado da reforma, conforme o material que a acompanha, é reforçar o objetivo de apoiar o reassentamento de pessoas em idade de trabalho com chance de alcançar autossuficiência financeira nos primeiros 12 meses.\n\nHá também um ponto que joga a favor do requerente. O regulamento passou a permitir a troca de organização proponente depois da apresentação do pedido e antes da decisão, situação que antes era travada. Isso cobre casos em que a APO deixa o programa, tem o acordo suspenso ou simplesmente esgotou a própria cota anual.\n\nVale enquadrar o alcance dessa via. O Subclass 202 não é um caminho de migração aberto, ele depende de uma proposta feita por alguém elegível ou por uma organização aprovada, e atende pessoas que enfrentam discriminação substancial ou violação de direitos humanos no país onde vivem. Ainda assim, a leitura dos dois instrumentos mostra um desenho de seleção que se aproxima do vocabulário usado na migração qualificada, com faixa etária, idioma e perspectiva de emprego entrando explicitamente na conta.\n\nUma ressalva de método, feita por transparência. As páginas oficiais do Department of Home Affairs bloquearam nossas tentativas automatizadas de acesso, e a busca automatizada no Federal Register of Legislation não retornou o registro dos dois instrumentos até o fechamento desta edição. O regulamento base de junho está confirmado em várias fontes independentes, mas o detalhamento dos dois instrumentos de julho vem de uma única fonte profissional especializada e não governamental, a Migration Alliance. Antes de qualquer decisão, confirme cada critério e cada número na fonte oficial e com um agente de migração registrado junto ao MARA. Conteúdo educativo não substitui a orientação de profissional habilitado.",
        "tags": [
          "Austrália",
          "Visto 202",
          "Humanitário",
          "Community Support Program",
          "Migração"
        ],
        "sources": [
          {
            "label": "Migration Alliance · New Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas (17/07/2026)",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-07-new-commonwealth-priorities-for-subclass-202-global-special-humanitarian-visas.html"
          },
          {
            "label": "Migration Alliance · Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026 (17/07/2026)",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-07-migration-annual-applicant-limits-for-subclass-202-global-special-humanitarian-visas-instrument-2026.html"
          },
          {
            "label": "Migration Alliance · Migration Amendment (Realigning the Community Support Program) Regulations 2026",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-06-migration-amendment-realigning-the-community-support-program-regulations-2026.html"
          },
          {
            "label": "Migration Law Updates · Realigning the Community Support Program",
            "url": "https://migrationlawupdates.com.au/realigning-the-community-support-program/"
          },
          {
            "label": "Department of Home Affairs · Subclass 202 Global Special Humanitarian visa",
            "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/global-special-humanitarian-202"
          },
          {
            "label": "Department of Home Affairs · The Special Humanitarian Program",
            "url": "https://immi.homeaffairs.gov.au/what-we-do/refugee-and-humanitarian-program/the-special-humanitarian-program"
          },
          {
            "label": "Federal Register of Legislation (onde verificar o registro oficial dos instrumentos)",
            "url": "https://www.legislation.gov.au/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Visto humanitário 202 da Austrália passa a ter cota anual por organização proponente",
        "body": "A Migration Alliance, associação de agentes e advogados de migração da Austrália, reportou em 17 de julho de 2026 o Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026, o LIN 26/035, que fixa a alocação anual de requerentes de cada Approved Proposing Organisation (APO) no Community Support Program. O instrumento completa a reforma do programa, que entrou em vigor em 1º de julho.\n\nDois detalhes mudam a estratégia de quem depende dessa via. Requerentes principais e secundários contam para o mesmo limite, então um grupo familiar consome várias vagas da mesma organização. E o pedido apresentado acima da cota da APO é tratado como inválido, sem chegar a ser considerado, em vez de ser analisado e recusado. Por outro lado, a reforma passou a permitir trocar de organização proponente depois de protocolado o pedido e antes da decisão.\n\nUm alerta prático. A cobertura disponível descreve o mecanismo, mas não divulga quantas vagas cada organização recebeu. Esse número você só obtém com a própria APO.",
        "cta": "Depende de uma organização proponente para o visto 202? Confirme com ela quantas vagas ainda restam na alocação anual antes de protocolar, e valide tudo com um agente de migração registrado junto ao MARA. Conteúdo educativo não substitui profissional habilitado.",
        "sources": [
          {
            "label": "Migration Alliance · Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026 (17/07/2026)",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-07-migration-annual-applicant-limits-for-subclass-202-global-special-humanitarian-visas-instrument-2026.html"
          },
          {
            "label": "Migration Alliance · Migration Amendment (Realigning the Community Support Program) Regulations 2026",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-06-migration-amendment-realigning-the-community-support-program-regulations-2026.html"
          },
          {
            "label": "Department of Home Affairs · Subclass 202 Global Special Humanitarian visa",
            "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/global-special-humanitarian-202"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Idade, inglês e autossuficiência entram nas prioridades do visto 202 australiano, mas não são requisitos automáticos",
        "body": "Também em 17 de julho de 2026, a Migration Alliance reportou o Migration (Specification of Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026, o LIN 26/036. O instrumento nomeia as prioridades que os decisores devem considerar ao avaliar pedidos do visto humanitário 202 dentro do Community Support Program.\n\nSão três pontos. O requerente principal deve, em geral, ter entre 18 e 50 anos. Deve demonstrar inglês falado e escrito adequado para vida independente, segurança no trabalho e emprego. E deve ter capacidade de se tornar financeiramente autossuficiente em até 12 meses após a chegada, por oferta de emprego remunerado na Austrália ou por evidência de habilidades e experiência de trabalho relevantes.\n\nAtenção a uma confusão que já está circulando. O instrumento usa a fórmula de que o requerente deve, em geral, atender a esses pontos. São prioridades ponderadas pelo decisor, não barreiras automáticas de elegibilidade. Já vimos resumos tratando os 18 a 50 anos como requisito obrigatório no protocolo, o que o instrumento não diz. Não conseguimos abrir as páginas oficiais do Department of Home Affairs, que bloqueiam acesso automatizado, então confirme na fonte oficial.",
        "cta": "Pretende usar a via do Community Support Program? Confira os critérios atualizados direto na fonte oficial e com um agente de migração registrado junto ao MARA antes de descartar ou assumir qualquer coisa sobre o seu caso. Conteúdo educativo não substitui profissional habilitado.",
        "sources": [
          {
            "label": "Migration Alliance · New Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas (17/07/2026)",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-07-new-commonwealth-priorities-for-subclass-202-global-special-humanitarian-visas.html"
          },
          {
            "label": "Department of Home Affairs · The Special Humanitarian Program",
            "url": "https://immi.homeaffairs.gov.au/what-we-do/refugee-and-humanitarian-program/the-special-humanitarian-program"
          },
          {
            "label": "Federal Register of Legislation (onde verificar o registro oficial do instrumento)",
            "url": "https://www.legislation.gov.au/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "headline": "Austrália detalha cota anual e novas prioridades do visto humanitário 202",
        "standfirst": "Dois instrumentos ministeriais reportados em 17 de julho fecham a reforma do Community Support Program, em vigor desde 1º de julho. Um define quantos requerentes cada organização proponente pode apresentar no ano fiscal, o outro lista idade, inglês e autossuficiência financeira em até 12 meses após a chegada entre as prioridades do governo.",
        "body": "A reforma do Community Support Program da Austrália, a via comunitária de acesso ao visto Subclass 202 (Global Special Humanitarian), ganhou as duas peças que ainda faltavam. Segundo a Migration Alliance, associação de agentes e advogados de migração do país, foram reportados em 17 de julho de 2026 o Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026, o LIN 26/035, e o Migration (Specification of Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026, o LIN 26/036.\n\nOs dois instrumentos preenchem a moldura criada pelo Migration Amendment (Realigning the Community Support Program) Regulations 2026, registrado em 16 de junho de 2026, em vigor desde 1º de julho e aplicável aos pedidos apresentados a partir dessa data. Foi esse regulamento que previu tanto a cota anual por organização proponente quanto a existência de prioridades da Commonwealth a serem fixadas por instrumento ministerial.\n\nO LIN 26/035 estabelece a alocação anual de requerentes de cada Approved Proposing Organisation (APO) para o ano fiscal iniciado em 1º de julho de 2026. Requerentes principais e secundários contam para o mesmo limite, o que significa que um grupo familiar ocupa mais de uma vaga da organização. Pedidos apresentados acima da alocação são tratados como inválidos e não chegam a ser considerados, em vez de analisados e recusados. Como contrapartida, o regulamento passou a permitir a troca de organização proponente após a apresentação e antes da decisão, cobrindo casos em que a APO deixa o programa, tem o acordo suspenso ou esgota a própria cota. Registre-se que a cobertura disponível descreve o mecanismo sem divulgar quantas vagas cada organização recebeu, de modo que o número concreto só pode ser obtido com a própria APO.\n\nJá o LIN 26/036 nomeia as prioridades que os decisores devem levar em conta. São três, conforme descrito pela Migration Alliance. O requerente principal deve, em geral, ter entre 18 e 50 anos. Deve demonstrar inglês falado e escrito adequado para vida independente, segurança no trabalho e emprego. E deve ter capacidade de alcançar autossuficiência financeira em até 12 meses após a chegada, por oferta de emprego remunerado na Austrália ou por evidência de habilidades e experiência de trabalho relevantes. O objetivo declarado da reforma é reforçar a finalidade do programa de apoiar o reassentamento de pessoas em idade de trabalho com perspectiva de se sustentar nos primeiros 12 meses.\n\nUm ponto merece destaque porque tende a se perder nos resumos. O instrumento usa a fórmula de que o requerente principal deve, em geral, atender a esses pontos. São prioridades ponderadas na decisão, não requisitos automáticos de elegibilidade. Já circulam versões tratando a faixa de 18 a 50 anos como exigência obrigatória no momento do protocolo, e não foi isso que o instrumento estabeleceu.\n\nÉ importante situar o alcance dessa via. O Subclass 202 não é um caminho de migração aberto ao público geral. Ele exige proposta de um proponente elegível ou de organização aprovada e atende pessoas que enfrentam discriminação substancial ou violação de direitos humanos fora da Austrália. Para quem já tem um pedido em andamento ou pretende protocolar nos próximos meses, o passo prático é confirmar com a organização proponente se ainda há alocação disponível no ano fiscal e revisar o próprio enquadramento diante das prioridades agora nomeadas.\n\nPor transparência, registramos os limites desta apuração. As páginas oficiais do Department of Home Affairs bloquearam nossas tentativas automatizadas de acesso, e a consulta automatizada ao Federal Register of Legislation não retornou o registro dos dois instrumentos até o fechamento desta edição. O regulamento base de junho está confirmado em fontes independentes, mas o detalhamento dos dois instrumentos de julho vem de uma única fonte profissional especializada e não governamental. Confirme cada ponto na fonte oficial e com um agente de migração registrado junto ao MARA antes de tomar decisões. Conteúdo educativo não substitui profissional habilitado.",
        "keyFacts": [
          "Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026 (LIN 26/035) reportado em 17 de julho de 2026 pela Migration Alliance.",
          "Migration (Specification of Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026 (LIN 26/036) reportado na mesma data.",
          "Os dois instrumentos completam o Migration Amendment (Realigning the Community Support Program) Regulations 2026, registrado em 16 de junho de 2026, em vigor desde 1º de julho de 2026 e aplicável a pedidos apresentados a partir dessa data.",
          "Cada Approved Proposing Organisation passa a ter alocação anual de requerentes; principais e secundários contam para o mesmo limite, e pedidos acima da cota são inválidos e não chegam a ser considerados.",
          "Os números de alocação por organização não constam da cobertura disponível; só a própria APO pode informar quantas vagas restam.",
          "Prioridades nomeadas para o requerente principal: idade em geral entre 18 e 50 anos, inglês falado e escrito adequado para vida independente, segurança no trabalho e emprego, e autossuficiência financeira em até 12 meses após a chegada, por oferta de emprego remunerado na Austrália ou por habilidades e experiência relevantes.",
          "Esses três pontos são prioridades ponderadas pelo decisor, não requisitos automáticos de elegibilidade; a faixa etária não é uma barreira obrigatória no protocolo.",
          "A reforma passou a permitir a troca de organização proponente após a apresentação do pedido e antes da decisão.",
          "Não conseguimos confirmar os dois instrumentos de julho diretamente nas páginas do Department of Home Affairs nem no Federal Register of Legislation, porque o acesso automatizado foi bloqueado ou não retornou os registros."
        ],
        "sources": [
          {
            "label": "Migration Alliance · New Commonwealth Priorities for Subclass 202 (Global Special Humanitarian) Visas (17/07/2026)",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-07-new-commonwealth-priorities-for-subclass-202-global-special-humanitarian-visas.html"
          },
          {
            "label": "Migration Alliance · Migration (Annual Applicant Limits for Subclass 202 (Global Special Humanitarian) Visas) Instrument 2026 (17/07/2026)",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-07-migration-annual-applicant-limits-for-subclass-202-global-special-humanitarian-visas-instrument-2026.html"
          },
          {
            "label": "Migration Alliance · Migration Amendment (Realigning the Community Support Program) Regulations 2026",
            "url": "https://migrationalliance.com.au/immigration-daily-news/entry/2026-06-migration-amendment-realigning-the-community-support-program-regulations-2026.html"
          },
          {
            "label": "Migration Law Updates · Realigning the Community Support Program",
            "url": "https://migrationlawupdates.com.au/realigning-the-community-support-program/"
          },
          {
            "label": "Department of Home Affairs · Subclass 202 Global Special Humanitarian visa",
            "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/global-special-humanitarian-202"
          },
          {
            "label": "Department of Home Affairs · The Special Humanitarian Program",
            "url": "https://immi.homeaffairs.gov.au/what-we-do/refugee-and-humanitarian-program/the-special-humanitarian-program"
          },
          {
            "label": "Federal Register of Legislation (onde verificar o registro oficial dos instrumentos)",
            "url": "https://www.legislation.gov.au/"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "1º de outubro de 2026: o dia em que trabalhar e alugar no Reino Unido passam pela mesma checagem",
        "standfirst": "Um pacote de regras que amadureceu nas últimas semanas coloca trabalho e moradia sob o mesmo regime de verificação digital de status migratório. O manual do empregador publicado em 16 de julho fechou a peça que faltava, ainda que em rascunho.",
        "body": "Há uma data que quem vive ou planeja viver no Reino Unido deveria acompanhar de perto: 1º de outubro de 2026. É quando entram em vigor, no mesmo dia, dois conjuntos de regras que tratam de coisas aparentemente distintas, o direito de trabalhar e o direito de alugar um imóvel, mas que passam a operar sob a mesma lógica, a da verificação sistemática e digital do status migratório de quem está no país.\n\nA peça mais recente desse quebra-cabeça chegou em 16 de julho de 2026, quando o Home Office atualizou a página oficial do guia de checagem de direito ao trabalho e anexou o Draft employer's guide to right to work checks: 16 July 2026, um rascunho de 72 páginas. Até então, o que existia era o desenho jurídico do regime ampliado, definido na versão revisada do código de prática sobre prevenção de trabalho ilegal, divulgada em 30 de junho de 2026, que implementa a secção 48 do Border Security, Asylum and Immigration Act 2025. O guia agora publicado traz o nível operacional, o que muda para as empresas na rotina de contratação e no acompanhamento de quem já está trabalhando. Convém registrar desde já que os dois documentos ainda são rascunho.\n\nO que se amplia no lado do trabalho não é a exigência em si, que já existia, mas o universo de quem precisa cumpri-la. O regime deixa de se limitar ao vínculo empregatício tradicional e passa a abranger contratos de trabalhador, subcontratação individual e serviços de intermediação on-line, o que na prática significa trabalhadores de agência, subcontratados e profissionais da economia gig, de entregas a transporte por aplicativo. Muitas plataformas trataram esse pessoal como autônomo e montaram processos de cadastro que simplesmente não incluíam checagem de direito ao trabalho. A partir de outubro isso deixa de ser sustentável. A penalidade civil por trabalho ilegal é de até £45.000 por trabalhador na primeira infração e até £60.000 em caso de reincidência, e escritórios que analisaram o texto, entre eles o Free Movement, avaliam que em arranjos contratuais específicos a responsabilidade pode alcançar empresas acima do empregador direto, por exemplo quando quem contratou diretamente não é identificado ou não faz a checagem.\n\nDo lado da moradia, o movimento é paralelo e veio um pouco antes. Em 30 de junho de 2026, o Home Office publicou as novas versões do código de prática do esquema de right to rent para proprietários e agentes imobiliários, com aplicação a partir de 1º de outubro de 2026, incluindo a versão dedicada a evitar discriminação ilegal nas checagens. Aqui o mecanismo é concreto e já tem nome: as empresas que fazem verificação digital para right to rent passam a ser chamadas de right to rent digital verification service providers e precisam estar registradas no Office for Digital Identities and Attributes, com anotação específica no registro autorizando esse tipo de checagem, sob o quadro criado pelo Data (Use and Access) Act 2025.\n\nÉ aí que os dois lados se encontram, e aqui vale desfazer uma confusão comum. Para a maioria dos estrangeiros, a checagem de direito ao trabalho já é feita pelo serviço on-line do Home Office, com o código de compartilhamento que o próprio trabalhador gera a partir do eVisa. A discussão sobre provedores certificados de identidade digital diz respeito sobretudo à verificação de titulares de passaporte britânico ou irlandês, e o guia hoje em vigor, na versão de 26 de junho de 2025, afirma que o uso desse tipo de provedor não é obrigatório para o empregador. A partir de outubro, quem escolher essa via precisará recorrer a provedor registrado para aquela finalidade específica. Em qualquer cenário, a responsabilidade pela penalidade civil continua sendo de quem contrata, e não do provedor de identidade que fez a verificação.\n\nPara o imigrante, o efeito prático é direto. Duas das decisões mais básicas de uma vida no exterior, conseguir trabalho e conseguir onde morar, passam a envolver checagem documental mais frequente, feita por mais atores e em mais pontos da cadeia. Quem trabalha por agência ou aplicativo, ou aluga de um pequeno proprietário que nunca lidou com verificação digital, tende a sentir o atrito primeiro.\n\nO preparo é simples e cabe em três providências. Conferir se o eVisa está com os dados corretos e vinculado ao passaporte em uso, testar a geração do código de compartilhamento no serviço View and Prove antes que alguém o peça, e verificar com antecedência se há pendência de renovação. Isso evita perder uma vaga ou um contrato de aluguel por questão burocrática. Como o guia do empregador ainda está em rascunho, detalhes de implementação podem mudar até a versão definitiva. Acompanhar a página oficial no GOV.UK e consultar profissional habilitado antes de qualquer decisão continua sendo o caminho mais seguro, porque nenhum conteúdo informativo substitui a análise do caso concreto.",
        "tags": [
          "Reino Unido",
          "Right to Work",
          "Right to Rent",
          "Identidade Digital",
          "Home Office",
          "Mercado de Trabalho"
        ],
        "sources": [
          {
            "label": "GOV.UK · Right to work checks: an employer's guide (página atualizada em 16/07/2026)",
            "url": "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide"
          },
          {
            "label": "GOV.UK · Employer's guide to right to work checks: 26 June 2025 (accessible)",
            "url": "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide/employers-guide-to-right-to-work-checks-26-june-2025-accessible"
          },
          {
            "label": "GOV.UK · Code of practice for landlords and their agents: the right to rent scheme, 1 October 2026",
            "url": "https://www.gov.uk/government/publications/right-to-rent-landlords-code-of-practice/code-of-practice-for-landlords-and-their-agents-the-right-to-rent-scheme-for-landlords-and-their-agents-1-october-2026"
          },
          {
            "label": "GOV.UK · Code of practice for landlords: avoiding unlawful discrimination when conducting right to rent checks, 1 October 2026",
            "url": "https://www.gov.uk/government/publications/right-to-rent-landlords-code-of-practice/code-of-practice-for-landlords-avoiding-unlawful-discrimination-when-conducting-right-to-rent-checks-in-the-private-rented-residential-sector-1-oc"
          },
          {
            "label": "legislation.gov.uk · Border Security, Asylum and Immigration Act 2025, secção 48",
            "url": "https://www.legislation.gov.uk/ukpga/2025/31/section/48/enacted"
          },
          {
            "label": "Free Movement · Right to work checks are changing: what employers need to know before October 2026",
            "url": "https://freemovement.org.uk/right-to-work-checks-october-2026/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Alta Corte britânica declara ilegal a retirada do pedido de reconsideração em decisões sobre tráfico de pessoas",
        "body": "A High Court de Inglaterra e País de Gales decidiu, em julgamento de 10 de julho de 2026 no caso AYA & Ors, R (on the application of) v Secretary of State for the Home Department, com citação [2026] EWHC 1742 (Admin), que o Home Office agiu de forma ilegal ao suprimir a possibilidade de pedir reconsideração de decisões negativas em processos de identificação de vítimas de tráfico de pessoas. A restrição valia para quem estava sujeito a remoção para países signatários da Convenção do Conselho da Europa sobre tráfico de seres humanos e da Convenção Europeia de Direitos Humanos, e foi introduzida para viabilizar as remoções para a França sob o acordo conhecido como one in, one out. Os pedidos foram apresentados por pessoas que chegaram ao Reino Unido pela travessia do Canal da Mancha em pequenas embarcações.\n\nNa avaliação do juiz Sheldon, embora o Home Secretary tenha discricionariedade para definir os arranjos de identificação de vítimas de tráfico, a Modern Slavery Act exige de forma implícita que esse processo seja robusto e efetivo, ainda que não perfeito. Retirar o canal de reconsideração conflitava com essa obrigação.\n\nA decisão tem limites claros, e vale entendê-los antes de criar expectativa. O próprio julgamento registra que nem todas as pessoas cujo pedido não foi reconsiderado serão trazidas de volta da França, e que vítimas reconhecidas ainda podem ser removidas para lá. Quem tem processo em andamento nesse tipo de situação deve buscar orientação jurídica especializada. Este conteúdo é informativo e não substitui análise profissional do caso concreto.",
        "cta": "Tem processo ligado a identificação de vítima de tráfico no Reino Unido? Procure orientação jurídica especializada para saber se a decisão da High Court afeta o seu caso.",
        "sources": [
          {
            "label": "Courts and Tribunals Judiciary · AYA and others v Secretary of State for the Home Department",
            "url": "https://www.judiciary.uk/judgments/aya-and-others-v-secretary-of-state-for-the-home-department/"
          },
          {
            "label": "Free Movement · Home Office acted unlawfully by removing reconsiderations for trafficking decisions",
            "url": "https://freemovement.org.uk/remove-reconsiderations-trafficking-decisions/"
          },
          {
            "label": "Garden Court Chambers · Home Secretary unlawfully denied victims of trafficking the right to request reconsideration before removal to France",
            "url": "https://gardencourtchambers.co.uk/home-secretary-unlawfully-denied-victims-of-trafficking-the-right-to-request-reconsideration-before-removal-to-france-under-one-in-one-out-policy/"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "Border Force alerta para o recrutamento de jovens viajantes por quadrilhas de tráfico de drogas",
        "body": "O Home Office e a Border Force publicaram em 17 de julho de 2026 um alerta oficial sobre o aumento do recrutamento de jovens viajantes por organizações criminosas para transportar cannabis em voos com destino ao Reino Unido. Segundo o comunicado, o número de pessoas flagradas trazendo cannabis por via aérea passou de 142 em 2023 para 976 em 2025, e nos primeiros seis meses de 2026 houve 600 prisões de passageiros usados como correio em aeroportos britânicos. As apreensões subiram de 2,1 toneladas em 2022 para mais de 28 toneladas em 2025, alta de 50% só no último ano.\n\nUm dado do comunicado merece atenção de quem viaja: o maior grupo entre os presos é de homens de 18 a 37 anos vindos da Tailândia. O texto descreve o modo de abordagem, ofertas de viagem e hospedagem de luxo, ou férias baratas oferecidas por conhecidos, em troca do transporte da bagagem, com alvo preferencial em quem está saindo da escola ou da universidade e em quem viaja pela primeira vez. A pena pode chegar a 14 anos de prisão. Kate Goldstone, Border Force Lead Officer for Safeguarding, afirma no comunicado que as quadrilhas exploram jovens para lucrar.\n\nPara quem não é cidadão britânico, o peso é ainda maior, porque condenação criminal e antecedentes entram na avaliação de pedidos de visto, de permanência e de naturalização no Reino Unido, além de gerarem restrição de viagem futura. Se alguém oferecer uma viagem paga em troca de levar bagagem de terceiros, o caminho é recusar e reportar.",
        "cta": "Recebeu oferta de viagem paga para transportar bagagem de outra pessoa? Recuse e reporte. Uma condenação criminal pode encerrar qualquer plano migratório no Reino Unido.",
        "sources": [
          {
            "label": "Home Office e Border Force (GOV.UK) · Border Force: don't let drug smugglers steal your future (17/07/2026)",
            "url": "https://www.gov.uk/government/news/border-force-dont-let-drug-smugglers-steal-your-future"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "Home Office publica o manual do empregador da nova checagem de direito ao trabalho, ainda em rascunho, a dez semanas da entrada em vigor",
        "standfirst": "Documento de 72 páginas divulgado em 16 de julho detalha a rotina prática do regime ampliado que começa em 1º de outubro e que passa a alcançar trabalhador de agência, subcontratado e profissional de aplicativo.",
        "body": "O Home Office atualizou em 16 de julho de 2026 a página oficial do guia de checagem de direito ao trabalho no GOV.UK e anexou um novo documento, o Draft employer's guide to right to work checks: 16 July 2026, um rascunho de 72 páginas que funciona como manual operacional do regime ampliado de right to work.\n\nA diferença em relação ao que já se sabia é de natureza prática. Em 30 de junho de 2026 o governo havia divulgado a versão revisada, também em rascunho, do Code of Practice on preventing illegal working, que estabelece o desenho jurídico do novo regime e confirma a data de entrada em vigor, 1º de outubro de 2026, implementando a secção 48 do Border Security, Asylum and Immigration Act 2025. O guia agora publicado desce ao nível da rotina, quem precisa checar o quê, em que momento e com qual documentação. Os dois documentos ainda são rascunho e podem sofrer ajustes até a versão definitiva.\n\nO ponto mais sensível do novo desenho é a ampliação do universo de quem precisa cumprir a exigência. Até aqui, a obrigação de verificar o direito ao trabalho e a penalidade civil por trabalho ilegal recaíam sobre quem tinha o vínculo empregatício direto. A partir de outubro, o alcance passa a incluir contratos de trabalhador, subcontratação individual e serviços de intermediação on-line, o que abrange trabalhadores de agência, subcontratados e profissionais da economia gig, de entregas a transporte por aplicativo. A penalidade civil por trabalho ilegal segue em até £45.000 por trabalhador na primeira infração e até £60.000 por trabalhador em caso de reincidência. Escritórios que analisaram o texto, entre eles o Free Movement, avaliam que, em determinados arranjos contratuais, a responsabilidade pode alcançar empresas situadas acima do empregador direto na cadeia, por exemplo quando quem contratou diretamente não é identificado ou não faz a checagem. Esse é o entendimento dos analistas sobre como a regra tende a operar, e é justamente um dos pontos cuja aplicação prática só ficará clara com a versão final e com os primeiros casos.\n\nHá também mudança na verificação digital de identidade, e aqui vale uma distinção que costuma gerar confusão. Para a maioria dos estrangeiros, a checagem já é feita hoje pelo serviço on-line do Home Office, com o código de compartilhamento gerado pelo próprio trabalhador a partir do eVisa. A discussão sobre provedores certificados de identidade digital diz respeito sobretudo à verificação de titulares de passaporte britânico ou irlandês, e o guia em vigor, na versão de 26 de junho de 2025, afirma que o uso desse tipo de provedor não é obrigatório para o empregador. A partir de 1º de outubro de 2026, quem optar por essa via precisará usar provedor registrado especificamente para checagens de direito ao trabalho. Em qualquer cenário, a responsabilidade pela penalidade civil continua sendo de quem contrata, e não do provedor de identidade.\n\nPara quem é estrangeiro e trabalha no Reino Unido por agência, subcontratação ou plataforma de aplicativo, o efeito direto é que a checagem de status migratório passa a acontecer em mais pontos da cadeia e com mais frequência. A providência concreta é conferir se o eVisa está com os dados corretos e vinculado ao passaporte atual, e saber gerar o código de compartilhamento no serviço View and Prove antes que ele seja pedido, porque a exigência pode afetar a continuidade da contratação a partir de outubro. Como o documento ainda está em versão de rascunho, a orientação é acompanhar a página oficial no GOV.UK. Este conteúdo é informativo e não substitui a análise de profissional habilitado sobre o seu caso.",
        "keyFacts": [
          "A página oficial do guia de right to work no GOV.UK foi atualizada em 16 de julho de 2026, com a inclusão do Draft employer's guide to right to work checks: 16 July 2026, de 72 páginas.",
          "O regime ampliado entra em vigor em 1º de outubro de 2026 e implementa a secção 48 do Border Security, Asylum and Immigration Act 2025.",
          "Passa a abranger contratos de trabalhador, subcontratação individual e serviços de intermediação on-line, alcançando trabalhadores de agência, subcontratados e profissionais da economia gig.",
          "A penalidade civil por trabalho ilegal é de até £45.000 por trabalhador na primeira infração e até £60.000 em caso de reincidência.",
          "Analistas, entre eles o Free Movement, avaliam que em arranjos contratuais específicos a responsabilidade pode alcançar empresas acima do empregador direto. É leitura dos especialistas, não texto literal da lei.",
          "Para a maioria dos estrangeiros, a checagem já corre pelo serviço on-line do Home Office com código de compartilhamento gerado a partir do eVisa.",
          "Tanto o guia do empregador quanto o código de prática revisado ainda são rascunho e podem mudar até a versão final."
        ],
        "sources": [
          {
            "label": "GOV.UK · Right to work checks: an employer's guide (página atualizada em 16/07/2026, com o rascunho de 72 páginas)",
            "url": "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide"
          },
          {
            "label": "GOV.UK · Employer's guide to right to work checks: 26 June 2025 (accessible)",
            "url": "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide/employers-guide-to-right-to-work-checks-26-june-2025-accessible"
          },
          {
            "label": "legislation.gov.uk · Border Security, Asylum and Immigration Act 2025, secção 48",
            "url": "https://www.legislation.gov.uk/ukpga/2025/31/section/48/enacted"
          },
          {
            "label": "Free Movement · Right to work checks are changing: what employers need to know before October 2026",
            "url": "https://freemovement.org.uk/right-to-work-checks-october-2026/"
          },
          {
            "label": "Lewis Silkin · Preventing illegal working and right to work checks: what changes from 1 October 2026",
            "url": "https://www.lewissilkin.com/insights/2026/07/02/preventing-illegal-working-and-right-to-work-checks-what-changes-from-1-october-2026"
          }
        ]
      },
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
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "A Irlanda quer mais trabalhador estrangeiro do que consegue registrar",
        "standfirst": "Em 2026 o país ampliou a lista de ocupações elegíveis a visto de trabalho e elevou os pisos salariais para atrair profissionais. No mesmo ano, a fila para renovar a autorização de residência de quem já está lá passou de 17 semanas e chegou à segunda rodada de medidas de emergência desde dezembro. As duas pontas não estão conversando.",
        "body": "Vale olhar 2026 na Irlanda por duas janelas ao mesmo tempo. Pela primeira, o país aparece disputando talento estrangeiro com bastante método. Em 22 de maio de 2026 entrou em vigor uma revisão das listas de ocupações elegíveis a employment permit conduzida pelo Department of Enterprise, Tourism and Employment. Entraram na lista de Critical Skills funções como optometristas, profissionais de propriedade intelectual, agrimensores geoespaciais e riggers da indústria de games. Cinco ocupações saíram por completo da lista de inelegíveis e passaram a aceitar General Employment Permit sem cota, entre elas técnicos farmacêuticos, técnicos de prótese dentária e trabalhadores florestais. Duas ganharam cotas novas, sendo 50 vagas para fileteiros de peixe e 100 para operadores de pescado, e outras tiveram cotas renovadas, incluindo 1.000 mecânicos de automóveis, 1.495 cuidadores e 548 açougueiros e desossadores. Antes disso, em 1º de março de 2026, entraram em vigor os pisos salariais mais altos do Employment Permits Roadmap, com o General Employment Permit indo a €36.605 por ano e o Critical Skills a €40.904.\n\nPela segunda janela, o retrato é outro. Em 13 de julho, a Immigration Service Delivery informou que o escritório de registro de Burgh Quay, em Dublin, opera com tempo de processamento superior a 17 semanas em algumas categorias de renovação do Irish Residence Permit, mais duas semanas até a entrega física do cartão. A categoria mais castigada é a do Stamp 4, com atraso na faixa das 17 a 19 semanas.\n\nO detalhe que mais expõe o descompasso é uma regra do próprio sistema. A renovação online só pode ser protocolada até 12 semanas antes do vencimento da autorização, e pedidos enviados antes disso são recusados. Ou seja, quando a fila real de uma categoria supera esse prazo, nem o requerente mais organizado consegue receber o novo cartão antes de o antigo expirar. Não é negligência do imigrante, é uma limitação estrutural do desenho atual.\n\nFoi por isso que o governo emitiu duas medidas provisórias de uma vez. O aviso provisório a empregadores permite que o trabalhador com IRP vencido siga no país e no emprego sob as condições do cartão antigo até 31 de agosto de 2026, suspendendo temporariamente o teto de 12 semanas da regra permanente, desde que o pedido tenha sido enviado antes do vencimento e com toda a documentação, incluindo employment permit válido quando aplicável. E o Travel Confirmation Notice pede às companhias aéreas que aceitem o embarque com o cartão vencido, no mesmo intervalo, mediante apresentação do aviso impresso e da confirmação do pedido.\n\nAqui entra o dado que muda a interpretação de tudo. Nenhuma das duas medidas é inédita. Um Travel Confirmation Notice equivalente já havia funcionado de 8 de dezembro de 2025 a 28 de fevereiro de 2026, na temporada de festas, e foi em dezembro de 2025 que a Immigration Service Delivery ampliou de 8 para 12 semanas o prazo do Notice to Employers permanente. O atraso não é um susto de verão. É uma condição que se arrasta desde o fim de 2025 e que o Estado vem administrando com janelas temporárias sucessivas.\n\nMedida provisória, por definição, tem data para acabar. As duas expiram em 31 de agosto de 2026, e o texto oficial avisa que depois disso volta a valer o limite de 12 semanas. Se a fila não tiver encolhido abaixo desse patamar, o problema reaparece em setembro. O histórico sugere que uma nova janela possa ser aberta, como aconteceu no inverno, mas isso é discricionário e não está prometido em documento nenhum, então ninguém deveria montar plano de viagem ou de emprego contando com essa renovação. Ao ser procurado pela RTÉ, o Departamento afirmou estar explorando todas as vias disponíveis para aumentar a capacidade de processamento, sem anunciar contratação de pessoal, meta de redução de prazo ou revisão da janela de 12 semanas para protocolar. Até aqui, portanto, o que está documentado é tratamento do efeito, não da causa.\n\nPara quem avalia a Irlanda como destino, nada disso desqualifica o país. A demanda por profissionais qualificados é real e está registrada em ato oficial. O ponto é calibrar a expectativa sobre o que acontece depois da mudança. Conseguir o employment permit e o primeiro registro é uma etapa. Manter a documentação em dia ano após ano, num sistema que precisou de aviso ministerial em duas temporadas seguidas para que as pessoas pudessem viajar e trabalhar legalmente, é outra bem diferente.\n\nA orientação prática para quem já vive na Irlanda é acompanhar semanalmente a tabela de prazos por categoria de stamp no site oficial, protocolar a renovação no primeiro dia possível dentro da janela de 12 semanas, guardar o e-mail de confirmação do pedido, que serve como prova de registro, e verificar as datas de validade dos avisos provisórios antes de comprar qualquer passagem. Atenção redobrada a quem entrou com visto de entrada única, porque esse perfil precisa de re-entry visa para voltar mesmo dentro da janela autorizada. Situações específicas, sobretudo mudança de categoria de stamp ou permissão já vencida antes do pedido, merecem consulta a um profissional habilitado em imigração irlandesa.",
        "tags": [
          "Irlanda",
          "IRP",
          "Employment Permit",
          "Residência",
          "Immigration Service Delivery"
        ],
        "sources": [
          {
            "label": "Immigration Service Delivery · Minister Brophy announces interim Notice to Employers regarding renewal of registration (13/07/2026)",
            "url": "https://www.irishimmigration.ie/minister-brophy-announces-interim-notice-to-employers-regarding-renewal-of-registration/"
          },
          {
            "label": "Immigration Service Delivery · Minister Brophy announces initiative to facilitate customers travelling during the summer months (13/07/2026)",
            "url": "https://www.irishimmigration.ie/minister-brophy-announces-initiative-to-facilitate-customers-travelling-during-the-summer-months/"
          },
          {
            "label": "Immigration Service Delivery · ISD announce extension to Travel Confirmation Notice (aviso anterior, 08/12/2025 a 28/02/2026)",
            "url": "https://www.irishimmigration.ie/isd-announce-extension-to-travel-confirmation-notice/"
          },
          {
            "label": "Immigration Service Delivery · Renewing your registration permission if you live in the Republic of Ireland (tabela de prazos, atualizada semanalmente)",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/renewing-your-registration-permission-if-you-live-in-the-republic-of-ireland/"
          },
          {
            "label": "Immigration Service Delivery · Notice to Employers (regra permanente de 12 semanas)",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/notice-to-employers/"
          },
          {
            "label": "Lewis Silkin · Ireland's employment permit occupations lists: what's changed in May 2026 (detalhamento das alterações em vigor em 22/05/2026)",
            "url": "https://www.lewissilkin.com/en-IE/insights/2026/05/27/irelands-employment-permit-occupations-lists-whats-changed-in-may-2026"
          },
          {
            "label": "DETE · Employment Permits Minimum Annual Remuneration, Outcome of the Roadmap Review 2025 (pisos em vigor desde 01/03/2026)",
            "url": "https://enterprise.gov.ie/en/publications/publication-files/employment-permits-minimum-annual-remuneration-outcome-of-the-roadmap-review-2025.pdf"
          },
          {
            "label": "Fragomen · Ireland: Temporary Residence Permission Renewal Measures Extended Amid Processing Delays (14/07/2026)",
            "url": "https://www.fragomen.com/insights/ireland-temporary-residence-permission-renewal-measures-extended-amid-processing-delays.html"
          },
          {
            "label": "RTÉ News · Interim measure introduced for workers over permit delays (13/07/2026)",
            "url": "https://www.rte.ie/news/2026/0713/1583184-irp-interim-measure/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Irlanda libera viagem internacional com o IRP vencido até 31 de agosto, e não é a primeira vez",
        "body": "Quem mora na Irlanda com autorização de residência e está preso na fila de renovação ganhou uma saída oficial para viajar no verão europeu. O ministro de Estado para Migração, Colm Brophy, emitiu um Travel Confirmation Notice pedindo às companhias aéreas que aceitem o embarque de nacionais de fora do Espaço Econômico Europeu portando o Irish Residence Permit recentemente vencido, desde que o pedido de renovação tenha sido enviado antes da data de expiração do cartão.\n\nVale registrar que a medida não é inédita. Um aviso equivalente já havia funcionado de 8 de dezembro de 2025 a 28 de fevereiro de 2026, no período de festas. A versão de agora vale de 13 de julho a 31 de agosto de 2026 e exige cuidado prático. Segundo a Immigration Service Delivery, o passageiro deve baixar e imprimir o aviso e apresentá-lo junto com o cartão vencido e o e-mail de confirmação do pedido de renovação, que traz a data da solicitação. O órgão recomenda ainda avisar a companhia aérea com antecedência e, em caso de conexão em país terceiro, confirmar antes de comprar a passagem se aquela jurisdição aceita o documento.\n\nHá dois limites importantes. O primeiro é a data de retorno: quem planeja voltar à Irlanda depois de 31 de agosto de 2026 e é nacional de país que exige visto precisará solicitar um visto de entrada tipo D na embaixada ou consulado irlandês mais próximo do destino. O segundo passa despercebido com frequência: quem entrou na Irlanda com visto de entrada única e já tem carimbo de desembarque precisa de re-entry visa para voltar, mesmo viajando dentro da janela autorizada. O aviso não substitui esse visto.\n\nEste conteúdo é informativo e não substitui a orientação de um profissional habilitado em imigração irlandesa, sobretudo em casos de mudança de categoria de stamp ou permissão já vencida antes do pedido.",
        "cta": "Vai viajar no verão com o IRP vencido? Confirme duas coisas antes de comprar a passagem: se você volta até 31 de agosto e se o seu visto original era de entrada única.",
        "sources": [
          {
            "label": "Immigration Service Delivery · Minister Brophy announces initiative to facilitate customers travelling during the summer months (13/07/2026)",
            "url": "https://www.irishimmigration.ie/minister-brophy-announces-initiative-to-facilitate-customers-travelling-during-the-summer-months/"
          },
          {
            "label": "Immigration Service Delivery · ISD announce extension to Travel Confirmation Notice (aviso anterior, válido de 08/12/2025 a 28/02/2026)",
            "url": "https://www.irishimmigration.ie/isd-announce-extension-to-travel-confirmation-notice/"
          },
          {
            "label": "Immigration Service Delivery · Travel and Re-Entry Visas",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/travel-and-re-entry-visas/"
          },
          {
            "label": "Immigration Service Delivery · Renewing your registration permission if you live in the Republic of Ireland",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/renewing-your-registration-permission-if-you-live-in-the-republic-of-ireland/"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Trabalhar na Irlanda com o IRP vencido: o que a medida provisória cobre e o que não cobre",
        "body": "A Irlanda emitiu em 13 de julho de 2026 um aviso provisório a empregadores que muda, temporariamente, a regra de permanência de quem está esperando a renovação da autorização de residência. Pela nota oficial da Immigration Service Delivery, o empregado cujo IRP venceu pode continuar no país sob as condições do cartão antigo até 31 de agosto de 2026. Uma atualização publicada em 16 de julho deixou explícito que a cobertura vale independentemente de quantas semanas já tenham passado desde o vencimento, desde que exista pedido de renovação ativo.\n\nA cobertura, porém, tem condição rígida. É preciso comprovar que o pedido de renovação foi enviado antes de o cartão vencer, com todos os documentos exigidos anexados, incluindo employment permit válido quando aplicável. Quem deixou a permissão expirar antes de protocolar a renovação fica de fora do aviso e deve procurar a Immigration Service Delivery com urgência. Pedidos que envolvem mudança de categoria de stamp, como a passagem de Stamp 1 para Stamp 4, também estão cobertos, valendo a mesma exigência documental do restante.\n\nO documento é explícito quanto ao prazo. Depois de 31 de agosto de 2026, volta a valer o Notice to Employers permanente, que limita essa permanência a no máximo 12 semanas após o vencimento do cartão. Esse teto de 12 semanas, aliás, já é resultado de um ajuste anterior: em dezembro de 2025 a Immigration Service Delivery ampliou o prazo, que antes era de 8 semanas, justamente por causa das filas. Vale guardar o e-mail de confirmação do pedido, que a própria Immigration Service Delivery indica como prova de registro válida enquanto o novo cartão não chega pelo correio.\n\nEste conteúdo é informativo e não substitui a orientação de um profissional habilitado em imigração irlandesa. Situação de permissão vencida antes do pedido, ou dúvida sobre necessidade de employment permit no seu caso, merece análise individual.",
        "cta": "Está com o IRP vencido e trabalhando na Irlanda? Separe agora o comprovante de que a renovação foi enviada antes do vencimento, porque é essa data que decide se você está coberto.",
        "sources": [
          {
            "label": "Immigration Service Delivery · Minister Brophy announces interim Notice to Employers regarding renewal of registration (13/07/2026)",
            "url": "https://www.irishimmigration.ie/minister-brophy-announces-interim-notice-to-employers-regarding-renewal-of-registration/"
          },
          {
            "label": "MRCI · ISD announces update to interim Notice to Employers regarding expired IRP cards (16/07/2026)",
            "url": "https://www.mrci.ie/2026/07/16/isd-announces-update-to-interim-notice-to-employers-regarding-expired-irp-cards/"
          },
          {
            "label": "Immigration Service Delivery · Notice to Employers (regra permanente de 12 semanas)",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/notice-to-employers/"
          },
          {
            "label": "Fragomen · Ireland: Temporary Residence Permission Renewal Measures Extended Amid Processing Delays (14/07/2026, contexto da ampliação de 8 para 12 semanas em dezembro de 2025)",
            "url": "https://www.fragomen.com/insights/ireland-temporary-residence-permission-renewal-measures-extended-amid-processing-delays.html"
          },
          {
            "label": "RTÉ News · Interim measure introduced for workers over permit delays (13/07/2026)",
            "url": "https://www.rte.ie/news/2026/0713/1583184-irp-interim-measure/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "headline": "A fila de renovação de residência na Irlanda passou de 17 semanas, e o governo abriu mais uma trégua temporária até 31 de agosto",
        "standfirst": "Em 13 de julho o Ministério da Justiça reconheceu processamento acima de 17 semanas em algumas categorias e anunciou duas medidas provisórias. Não é a primeira vez: uma janela equivalente para viagem já havia funcionado entre dezembro de 2025 e fevereiro de 2026, o que mostra um atraso crônico, não um susto de verão.",
        "body": "Em 13 de julho de 2026 o quadro das filas de imigração na Irlanda ficou explícito. O Escritório de Registro de Burgh Quay, em Dublin, informou estar operando com volume muito grande de pedidos e tempo de processamento superior a 17 semanas em algumas categorias, com mais duas semanas até a entrega do novo cartão pelo correio.\n\nA categoria mais afetada é a do Stamp 4, com atraso na casa das 17 a 19 semanas. As demais categorias corriam prazos menores em julho, mas o próprio órgão mantém no site uma tabela de filas por tipo de stamp que é atualizada toda segunda-feira, então qualquer número específico envelhece em poucos dias. Antes de tomar decisão de viagem ou de emprego, consulte a tabela na data em que for agir, e não uma reportagem.\n\nDiante disso, o ministro de Estado para Migração, Colm Brophy, anunciou duas medidas provisórias que valem de 13 de julho a 31 de agosto de 2026. A primeira é um aviso provisório a empregadores, que permite ao trabalhador com IRP vencido permanecer no país sob as condições do cartão antigo, sem o teto de 12 semanas da regra permanente, desde que a renovação tenha sido protocolada antes do vencimento e com toda a documentação anexada, incluindo employment permit válido quando aplicável. Uma atualização de 16 de julho confirmou que a cobertura vale independentemente de quantas semanas já se passaram desde o vencimento. A segunda medida é um Travel Confirmation Notice, que pede às companhias aéreas que aceitem o embarque com o cartão vencido acompanhado da prova do pedido de renovação.\n\nO contexto importa para calibrar a expectativa. Nenhuma das duas medidas é inédita. Um Travel Confirmation Notice equivalente já havia funcionado de 8 de dezembro de 2025 a 28 de fevereiro de 2026, e foi em dezembro de 2025 que a Immigration Service Delivery ampliou de 8 para 12 semanas o prazo do Notice to Employers permanente. O atraso, portanto, se arrasta desde o fim de 2025 e vem sendo administrado por janelas temporárias sucessivas, não por uma correção estrutural.\n\nAs medidas têm dois pontos cegos. O primeiro é a data de retorno: quem viajar e voltar depois de 31 de agosto de 2026, sendo nacional de país que exige visto, precisará solicitar um visto de entrada tipo D no consulado ou embaixada irlandesa mais próxima do destino. O segundo é menos comentado e pega gente desprevenida: quem entrou com visto de entrada única e já tem carimbo de desembarque precisa de re-entry visa para retornar, mesmo dentro da janela autorizada.\n\nPara quem vive ou pretende viver na Irlanda, a leitura prática é direta. O sistema permite protocolar a renovação no máximo 12 semanas antes do vencimento, e pedidos enviados antes disso são recusados. Quando a fila de uma categoria supera esse prazo, nem o requerente mais organizado consegue o cartão novo a tempo. A recomendação do próprio órgão é acompanhar a tabela semanal de prazos, protocolar no primeiro dia possível da janela, guardar o e-mail de confirmação como prova de registro e reservar pedidos de processamento acelerado a emergências comprovadas com documentação de viagem.\n\nEste conteúdo é informativo e não substitui a orientação de um profissional habilitado em imigração irlandesa.",
        "keyFacts": [
          "Aviso oficial de 13 de julho de 2026 reconhece tempo de processamento superior a 17 semanas em algumas categorias no escritório de Burgh Quay, mais duas semanas até a entrega do cartão. O Stamp 4 é a categoria mais atrasada.",
          "A tabela oficial de filas por categoria de stamp é atualizada toda segunda-feira no site da Immigration Service Delivery, e deve ser consultada na data da decisão.",
          "Medida provisória permite permanecer e trabalhar com IRP vencido até 31 de agosto de 2026, sem o teto de 12 semanas, se a renovação foi protocolada antes do vencimento com todos os documentos, incluindo employment permit válido quando aplicável. Atualização de 16 de julho confirmou que vale independentemente das semanas decorridas.",
          "Travel Confirmation Notice autoriza viagem internacional com o cartão vencido entre 13 de julho e 31 de agosto de 2026, mediante apresentação do aviso impresso e da confirmação do pedido. Não é inédito: um equivalente valeu de 08/12/2025 a 28/02/2026.",
          "Quem retorna após 31 de agosto de 2026 e é nacional sujeito a visto precisará de visto de entrada tipo D. Quem entrou com visto de entrada única precisa de re-entry visa mesmo dentro da janela. Depois de 31 de agosto volta o limite permanente de 12 semanas, que já foi ampliado de 8 para 12 em dezembro de 2025."
        ],
        "sources": [
          {
            "label": "Immigration Service Delivery · Minister Brophy announces interim Notice to Employers regarding renewal of registration (13/07/2026)",
            "url": "https://www.irishimmigration.ie/minister-brophy-announces-interim-notice-to-employers-regarding-renewal-of-registration/"
          },
          {
            "label": "Immigration Service Delivery · Minister Brophy announces initiative to facilitate customers travelling during the summer months (13/07/2026)",
            "url": "https://www.irishimmigration.ie/minister-brophy-announces-initiative-to-facilitate-customers-travelling-during-the-summer-months/"
          },
          {
            "label": "Immigration Service Delivery · Renewing your registration permission if you live in the Republic of Ireland (tabela de prazos, atualizada semanalmente)",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/renewing-your-registration-permission-if-you-live-in-the-republic-of-ireland/"
          },
          {
            "label": "Immigration Service Delivery · ISD announce extension to Travel Confirmation Notice (aviso anterior, 08/12/2025 a 28/02/2026)",
            "url": "https://www.irishimmigration.ie/isd-announce-extension-to-travel-confirmation-notice/"
          },
          {
            "label": "Immigration Service Delivery · Notice to Employers (regra permanente de 12 semanas)",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/notice-to-employers/"
          },
          {
            "label": "Immigration Service Delivery · Travel and Re-Entry Visas",
            "url": "https://www.irishimmigration.ie/registering-your-immigration-permission/travel-and-re-entry-visas/"
          },
          {
            "label": "MRCI · ISD announces update to interim Notice to Employers regarding expired IRP cards (16/07/2026)",
            "url": "https://www.mrci.ie/2026/07/16/isd-announces-update-to-interim-notice-to-employers-regarding-expired-irp-cards/"
          },
          {
            "label": "Fragomen · Ireland: Temporary Residence Permission Renewal Measures Extended Amid Processing Delays (14/07/2026)",
            "url": "https://www.fragomen.com/insights/ireland-temporary-residence-permission-renewal-measures-extended-amid-processing-delays.html"
          },
          {
            "label": "RTÉ News · Interim measure introduced for workers over permit delays (13/07/2026)",
            "url": "https://www.rte.ie/news/2026/0713/1583184-irp-interim-measure/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "O novo controle de fronteira da Europa separou visitantes de residentes, e isso muda o cálculo de quem quer morar na Espanha",
        "standfirst": "O sistema EES automatizou o registro de entradas e saídas de estrangeiros em estadas curtas e virou tema de disputa entre o setor aéreo e a Comissão Europeia neste verão. Para quem planeja a Espanha, o dado relevante não é a fila, é a linha que o sistema traçou entre quem visita e quem já tem documento para residir.",
        "body": "O noticiário desta semana sobre o sistema europeu de entradas e saídas girou em torno das filas. Em reportagens de 19 e 20 de julho, o diretor de aviação do aeroporto de Fiumicino, em Roma, afirmou que a espera média de passageiros britânicos passou de cerca de sete para vinte minutos, e em Faro, em Portugal, filas de cerca de dez minutos passaram a superar trinta. Antes disso, em carta aberta de 1º de julho, as entidades Airlines for Europe, ACI EUROPE e IATA disseram à presidência da Comissão Europeia que as esperas chegaram a cinco horas em períodos de pico.\n\nConvém tratar esses números com pesos diferentes. Os dados de Fiumicino e Faro vieram de operadores dos próprios aeroportos e descrevem médias. As cinco horas são alegação de entidades do setor em um documento que pede mudança de regra, o que não invalida o relato, mas o coloca na categoria de argumento de negociação, e não de estatística oficial. A Comissão não divulgou tempos médios por país, e não há número medido publicado para aeroportos espanhóis.\n\nPara o viajante ocasional, isso é um transtorno de verão. Para quem constrói um projeto de mudança para a Espanha, o que importa é entender por que essas filas existem e quem, afinal, entra nelas.\n\nO EES foi criado para resolver um problema antigo do espaço Schengen. Até então, o controle da estada curta dependia de carimbos em passaporte, um método manual e falho. A página oficial da Comissão Europeia descreve o sistema como uma solução automatizada de registro de nacionais de países terceiros em viagens de estada curta, com os objetivos declarados de detectar automaticamente quem excede o prazo autorizado, prevenir migração irregular, reforçar a segurança e identificar documentos fraudulentos. A implantação gradual começou em 12 de outubro de 2025 e o sistema passou a operar plenamente em 10 de abril de 2026, cobrindo 29 países europeus. Desde então, mais de 45 milhões de cruzamentos de fronteira foram registrados.\n\nA consequência prática é que o limite de estada curta das regras Schengen, de 90 dias dentro de cada período de 180 dias, deixou de depender da leitura de um carimbo e passou a ser calculado por uma base de dados comum. Quem contava com a informalidade do controle manual perdeu essa margem. Quem sempre respeitou o prazo não muda nada além do tempo de fila.\n\nO ponto decisivo vem em seguida, e é onde a maioria das matérias sobre o assunto para cedo demais. O EES não se aplica a titulares de autorização de residência, de cartão de residência nem de visto nacional de longa duração, o visto tipo D. Ou seja, a isenção não começa quando você recebe a TIE, começa quando você entra no país com o visto de longa duração para se estabelecer. Quem está nessa condição deve usar o guichê manual de controle e apresentar o documento junto com o passaporte, em vez de seguir pelo fluxo automatizado, para não ser registrado por engano como visitante de estada curta e ter dias descontados de um limite que não se aplica ao seu caso.\n\nÉ uma diferença concreta, com efeito concreto na fronteira. Estar autorizado a visitar e estar autorizado a residir são situações distintas em documento, em tratamento no controle e em previsibilidade de planejamento, e o EES tornou essa distinção automática e rastreável.\n\nVale registrar também a fragilidade operacional revelada pela carta do setor aéreo. As três causas estruturais apontadas são a falta de pessoal nos postos de fronteira, os problemas de estabilidade da plataforma central e dos sistemas nacionais, e a implantação incompleta de quiosques de autoatendimento, portões automáticos e aplicativos de pré-registro nos Estados membros. As entidades pediram autorização para suspender procedimentos do EES quando o volume superar a capacidade do controle, ao menos em julho e agosto, e um mecanismo permanente de flexibilidade definido até setembro. As regras de operação, portanto, ainda estão em disputa e podem mudar nos próximos meses.\n\nO que fazer com isso na prática. Se o seu plano para a Espanha ainda está na fase de visitas exploratórias, conte com aeroportos mais lentos neste verão europeu e prefira conexões com folga generosa. Se o seu plano é residir, trate o visto de longa duração e o documento de residência como prioridade de cronograma, não como etapa final, porque é o que define o seu fluxo na fronteira desde a primeira chegada. E acompanhe a resposta da Comissão Europeia ao pedido do setor, porque o cenário de setembro pode não ser o de hoje.\n\nEste conteúdo é informativo e não substitui a orientação de um profissional habilitado. Antes de tomar decisões de mudança, confirme sempre requisitos e prazos nas fontes oficiais e junto ao consulado espanhol responsável pela sua região.",
        "tags": [
          "Espanha",
          "EES",
          "Fronteiras Schengen",
          "Residência",
          "Visto de longa duração",
          "União Europeia",
          "Viagem"
        ],
        "sources": [
          {
            "label": "Comissão Europeia · Entry/Exit System (página oficial)",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en"
          },
          {
            "label": "Comissão Europeia · Travel to Europe, perguntas frequentes sobre o EES (isenções)",
            "url": "https://travel-europe.europa.eu/en/ees/faq"
          },
          {
            "label": "ACI EUROPE · Carta aberta à presidência da Comissão Europeia sobre o EES (1º de julho de 2026)",
            "url": "https://www.aci-europe.org/media-room/610-open-letter-to-president-of-the-european-commission-on-the-schengen-entry-exit-system-ees.html"
          },
          {
            "label": "Euronews · EES at a 'critical point': Europe's aviation sector urges EU to show more flexibility (1º de julho de 2026)",
            "url": "https://www.euronews.com/travel/2026/07/01/ees-at-a-critical-point-europes-aviation-sector-urges-eu-to-show-more-flexibility"
          },
          {
            "label": "The Local Spain · Airport bosses warn EU's new border checks triple waiting times for Brits (20 de julho de 2026)",
            "url": "https://www.thelocal.es/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          },
          {
            "label": "The Olive Press · Airlines warn of five-hour Spain border queues in letter to EU (3 de julho de 2026)",
            "url": "https://www.theolivepress.es/spain-news/2026/07/03/airlines-warn-of-five-hour-spain-border-queues-in-letter-to-eu/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "title": "Tem residência ou visto de longa duração na Espanha? Você está fora do novo registro biométrico de fronteira",
        "body": "Com as filas do sistema europeu de entradas e saídas de volta ao noticiário nesta semana, vale separar duas situações que costumam ser confundidas. O EES entrou em operação plena em 10 de abril de 2026 e registra, em base de dados comum a 29 países europeus, cada entrada e saída de cidadãos de fora da União Europeia que viajam em estadas curtas.\n\nO sistema não se aplica a quem tem autorização de residência, cartão de residência ou visto nacional de longa duração, o visto tipo D. Esse último ponto costuma passar batido e é o que mais interessa a quem está se mudando: você não precisa já estar com a TIE na mão para estar isento. Quem entra na Espanha com o visto de longa duração para se estabelecer também fica fora do registro biométrico de estada curta.\n\nNa prática, a orientação para quem é isento é usar o guichê manual de controle e apresentar o documento de residência ou o visto junto com o passaporte, em vez de seguir pelo fluxo automatizado. Isso evita ser registrado por engano como visitante de estada curta. Se você ainda está em processo de residência, aguardando emissão de documento ou em situação de renovação, confirme com o consulado espanhol ou com a autoridade de estrangeiros qual é exatamente a sua condição antes de viajar, em vez de presumir. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "cta": "Vai viajar à Espanha nas próximas semanas? Confirme se você viaja como visitante ou como residente, separe o documento certo para apresentar na fronteira e planeje a conexão com folga.",
        "sources": [
          {
            "label": "Comissão Europeia · Entry/Exit System (página oficial)",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en"
          },
          {
            "label": "Comissão Europeia · Travel to Europe, perguntas frequentes sobre o EES (isenções)",
            "url": "https://travel-europe.europa.eu/en/ees/faq"
          },
          {
            "label": "The Local Spain · Airport bosses warn EU's new border checks triple waiting times for Brits (20 de julho de 2026)",
            "url": "https://www.thelocal.es/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "Moradia na Espanha segue pressionada, e quem planeja a mudança precisa orçar com margem de reajuste",
        "body": "O custo da moradia é um dos itens que mais pesa no orçamento de quem se muda de país, e duas divulgações deste mês ajudam a calibrar a conta para a Espanha.\n\nEm 13 de julho, a agência S&P Global Ratings projetou que a Espanha será o segundo país da Europa com maior alta no preço da moradia em 2026, com estimativa de 9,1%. A agência associa a pressão à combinação de emprego forte, salários em alta e chegada de imigrantes, de um lado, e oferta de novas moradias muito insuficiente, de outro. Entre os gargalos de oferta aparecem custo de material, falta de mão de obra e processos administrativos longos.\n\nEm 20 de julho, o Consejo General de Economistas divulgou seu panorama econômico, estimando crescimento de 2,4% para a economia espanhola em 2026 e apontando desequilíbrio persistente entre oferta e demanda na moradia, com preços e custo de financiamento acima da capacidade de um número crescente de compradores. O mesmo documento registra que a Espanha precisa incorporar entre 200 mil e 300 mil pessoas por ano para sustentar o crescimento, o que mantém a demanda residencial elevada, e que a disponibilidade de solo é um dos fatores mais relevantes do preço, podendo representar até 45% do valor final do imóvel.\n\nPara quem monta um plano de mudança, o recado é de planejamento, não de desânimo. Vale simular o orçamento de moradia com margem para reajustes anuais em vez de congelar o preço de hoje na conta, comparar cidades e regiões antes de fechar contrato, e consultar os indicadores oficiais do mercado imobiliário publicados pelo Banco de España para trabalhar com número atualizado. Decisões de compra ou de aluguel de longo prazo pedem pesquisa local e apoio profissional. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "cta": "Está calculando o custo de morar na Espanha? Refaça a conta de moradia com margem de reajuste anual e compare pelo menos duas regiões antes de decidir.",
        "sources": [
          {
            "label": "El Economista · España será el segundo país europeo donde más subirá el precio de la vivienda en 2026, con un incremento del 9,1% (S&P Global Ratings)",
            "url": "https://www.eleconomista.es/vivienda-inmobiliario/noticias/13998593/07/26/espana-sera-el-segundo-pais-europeo-donde-mas-subira-el-precio-de-la-vivienda-en-2026-con-un-incremento-del-9.html"
          },
          {
            "label": "El Español · Los economistas estiman que la economía española crecerá un 2,4% en 2026 (Consejo General de Economistas, 20 de julho de 2026)",
            "url": "https://www.elespanol.com/invertia/economia/20260720/economistas-estiman-economia-espanola-crecera-pese-repunte-inflacion/1003744327938_0.html"
          },
          {
            "label": "Banco de España · Indicadores del mercado inmobiliario (estatística oficial)",
            "url": "https://www.bde.es/webbe/es/estadisticas/compartido/datos/pdf/si_1_5.pdf"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "Setor aéreo relata esperas de até cinco horas no novo controle de fronteira europeu, e quem já tem residência na Espanha está fora do sistema",
        "standfirst": "Companhias e aeroportos pediram flexibilidade à Comissão Europeia no sistema EES, em operação plena desde abril. A regra que mais importa a quem se muda: titulares de autorização de residência e de visto nacional de longa duração não passam pelo registro biométrico.",
        "body": "O sistema europeu de registro de entradas e saídas, conhecido pela sigla EES, está em operação plena desde 10 de abril de 2026, depois de uma implantação gradual iniciada em 12 de outubro de 2025. As datas constam da página oficial da Comissão Europeia sobre fronteiras inteligentes. O sistema anota, em uma base de dados comum a 29 países europeus, cada entrada e saída de cidadãos de países de fora da União Europeia que viajam em estadas curtas, com registro de nome, dados do documento de viagem e dados biométricos (impressões digitais e imagem facial).\n\nTrês meses depois da operação plena, o setor aéreo levou o problema à mesa. Em carta aberta enviada à presidência da Comissão Europeia em 1º de julho de 2026, as entidades Airlines for Europe, ACI EUROPE e IATA afirmam que os tempos de espera no controle de fronteira passaram a chegar a cinco horas em períodos de pico. É importante situar o que é esse número: trata-se da alegação das entidades do setor em um documento de pressão política, e não de uma medição oficial divulgada pela Comissão ou pelos governos nacionais. A repercussão da carta na imprensa espanhola tratou justamente do risco de filas longas na fronteira do país no verão europeu.\n\nOs números medidos que vieram a público são mais modestos e vêm de aeroportos fora da Espanha. Em reportagens de 19 e 20 de julho, o diretor de aviação do aeroporto de Fiumicino, em Roma, afirmou que a espera média de passageiros britânicos passou de cerca de sete para vinte minutos. Em Faro, em Portugal, filas que levavam cerca de dez minutos passaram a superar trinta. A IATA cita atrasos e perda de conexões em Portugal, Espanha, Itália, Grécia e Bélgica, mas não foram divulgados tempos médios específicos de aeroportos espanhóis. Desde abril, mais de 45 milhões de cruzamentos de fronteira já foram registrados no sistema.\n\nA carta do setor aponta três causas estruturais. A primeira é a falta de pessoal nos postos de fronteira dos aeroportos. A segunda são problemas de estabilidade e confiabilidade da plataforma central do EES e dos sistemas nacionais. A terceira é a implantação incompleta de quiosques de autoatendimento, portões automáticos e aplicativos de pré-registro nos Estados membros. As entidades pediram que os países possam suspender procedimentos do EES quando o volume de passageiros superar a capacidade do controle, ao menos durante julho e agosto, e que um mecanismo permanente de flexibilidade seja definido até setembro.\n\nHá um ponto que muda a leitura para quem vive na Espanha ou está se mudando em definitivo. O EES não se aplica a titulares de autorização de residência, de cartão de residência nem de visto nacional de longa duração, o chamado visto tipo D. Na prática, isso significa que a isenção não vale só para quem já tem a TIE em mãos: quem chega ao país com o visto de longa duração para se estabelecer também entra fora do registro biométrico de estada curta. Orientações oficiais e do setor recomendam que essas pessoas usem o guichê manual de controle e apresentem o documento de residência ou o visto junto com o passaporte, para não serem registradas por engano como visitantes de estada curta.\n\nQuem tem viagem marcada para a Espanha nos próximos meses e ainda viaja na condição de visitante deve prever margem extra de tempo na chegada e nas conexões, sobretudo em agosto. E vale acompanhar a resposta da Comissão Europeia ao pedido do setor, porque as regras de operação podem mudar até setembro. Antes de embarcar, confira as orientações oficiais da Comissão Europeia e do consulado espanhol responsável pela sua região. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "keyFacts": [
          "O EES está em operação plena desde 10 de abril de 2026, após implantação gradual iniciada em 12 de outubro de 2025, segundo a Comissão Europeia.",
          "O sistema cobre 29 países europeus e registra entradas e saídas de cidadãos de fora da UE em estadas curtas, com dados biométricos.",
          "Titulares de autorização de residência, de cartão de residência e de visto nacional de longa duração (tipo D) estão isentos do EES.",
          "Recomenda-se que isentos usem o guichê manual e apresentem o documento de residência ou o visto junto com o passaporte, para não serem registrados como visitantes de estada curta.",
          "Em carta aberta de 1º de julho de 2026, Airlines for Europe, ACI EUROPE e IATA alegam esperas de até cinco horas em horários de pico. O número é alegação do setor, não medição oficial.",
          "Números medidos divulgados em 19 e 20 de julho: Fiumicino (Roma) passou de cerca de 7 para 20 minutos de espera média de britânicos; Faro (Portugal), de cerca de 10 para mais de 30 minutos. Não há médias divulgadas para aeroportos espanhóis.",
          "O setor pediu autorização para suspender o EES em picos de julho e agosto e um mecanismo permanente de flexibilidade definido até setembro de 2026.",
          "Mais de 45 milhões de cruzamentos de fronteira foram registrados no sistema desde abril de 2026."
        ],
        "sources": [
          {
            "label": "Comissão Europeia · Entry/Exit System (página oficial)",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en"
          },
          {
            "label": "Comissão Europeia · Travel to Europe, perguntas frequentes sobre o EES (isenções)",
            "url": "https://travel-europe.europa.eu/en/ees/faq"
          },
          {
            "label": "ACI EUROPE · Carta aberta à presidência da Comissão Europeia sobre o EES (1º de julho de 2026)",
            "url": "https://www.aci-europe.org/media-room/610-open-letter-to-president-of-the-european-commission-on-the-schengen-entry-exit-system-ees.html"
          },
          {
            "label": "Euronews · EES at a 'critical point': Europe's aviation sector urges EU to show more flexibility (1º de julho de 2026)",
            "url": "https://www.euronews.com/travel/2026/07/01/ees-at-a-critical-point-europes-aviation-sector-urges-eu-to-show-more-flexibility"
          },
          {
            "label": "The Olive Press · Airlines warn of five-hour Spain border queues in letter to EU (3 de julho de 2026)",
            "url": "https://www.theolivepress.es/spain-news/2026/07/03/airlines-warn-of-five-hour-spain-border-queues-in-letter-to-eu/"
          },
          {
            "label": "The Local Spain · Airport bosses warn EU's new border checks triple waiting times for Brits (20 de julho de 2026)",
            "url": "https://www.thelocal.es/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "Por que os descendentes de trentinos são um caso à parte na cidadania italiana",
        "standfirst": "O pedido aprovado em Trento reacende uma via paralela ao jure sanguinis, criada porque essas famílias emigraram como súditos austro-húngaros. Entender essa diferença explica por que a reforma de 2025 atinge com força justamente as comunidades históricas.",
        "body": "A discussão sobre cidadania italiana costuma ser tratada como um bloco único, mas ela não é. Ao lado do jure sanguinis, o reconhecimento por descendência de cidadão italiano, existem vias criadas por leis especiais para famílias que a história deixou de fora do desenho padrão. O pedido aprovado em 14 de julho de 2026 pelo Conselho provincial de Trento, que solicita a Parlamento e Governo a reabertura do reconhecimento para descendentes de trentinos emigrados, trouxe uma dessas vias de volta ao centro do debate.\n\nA origem do problema é geopolítica. O Trentino não era território italiano no auge da emigração para a América. A região pertencia ao Império Austro-Húngaro e só foi incorporada à Itália depois de 1920. Isso significa que quem partiu de lá no fim do século 19 e no início do século 20 embarcou como súdito austro-húngaro, não como cidadão italiano. Como o jure sanguinis exige a transmissão a partir de um ascendente que fosse cidadão italiano, essas famílias ficaram estruturalmente fora da regra geral, ainda que falassem italiano, tivessem cultura italiana e viessem de um território que hoje é italiano.\n\nFoi para corrigir essa lacuna que o Parlamento italiano aprovou a lei 379, de 14 de dezembro de 2000, cujo título já descreve o alcance: disposições para o reconhecimento da cidadania italiana às pessoas nascidas e já residentes nos territórios pertencentes ao Império Austro-Húngaro e aos seus descendentes. O recorte é preciso. A norma alcança quem emigrou desses territórios, excluída a atual República da Áustria, antes de 16 de julho de 1920, e seus descendentes. As declarações apresentadas eram examinadas por comissão interministerial no Ministério do Interior, que emitia parecer sobre os requisitos.\n\nA lei não criou um direito permanente, e sim uma janela por tempo determinado para apresentar a declaração. Conforme as páginas oficiais dos consulados italianos no Brasil e do Ministério dos Negócios Estrangeiros, essa janela chegou a ser prorrogada por cinco anos e se encerrou em 2010, somando cerca de uma década, embora processos protocolados na época ainda tramitem.\n\nO argumento central de quem defende a reabertura é que o prazo se esgotou antes que a informação chegasse a boa parte das famílias interessadas, espalhadas sobretudo pelo Brasil e pela Argentina, e que a distância geográfica e documental tornava difícil reunir provas dentro do período disponível. Segundo o portal de comunidade Italianismo, uma associação de famílias trentinas no exterior procurou em 17 de julho parlamentares eleitos pela região para atuar em duas frentes, a apresentação de um projeto de lei específico e a pressão por uma intervenção direta do Governo. Essa informação, por vir de fonte não oficial, ainda depende de confirmação nos canais do Parlamento. Convém não confundir as entidades envolvidas: a imprensa trentina, ao noticiar a votação, cita a associação Trentini nel Mondo como a que saudou o resultado, e existe separadamente a Unione delle Famiglie Trentine all'Estero APS.\n\nHá, porém, um obstáculo de contexto que não pode ser ignorado. A tendência normativa recente na Itália é de restrição, não de abertura. O decreto-legge 36, de 28 de março de 2025, convertido na lei 74, de 23 de maio de 2025, inseriu o artigo 3-bis na lei 91/1992 e limitou o reconhecimento da cidadania para nascidos no exterior que já possuam outra nacionalidade. Provocada pelo Tribunal de Turim, a Corte Constitucional julgou a sentença 63/2026 em 30 de abril de 2026 e declarou não fundadas as questões suscitadas, limitadas a determinadas expressões e condições do dispositivo, sob o entendimento de que o legislador dispõe de ampla discricionariedade em matéria de cidadania. A decisão consolidou a mudança de paradigma iniciada em 2025, ainda que não encerre por si só todo o debate judicial sobre a reforma.\n\nEssa é justamente a razão pela qual o movimento partiu de um conselho provincial, e não de um tribunal. Uma proposta de voto aprovada em Trento não altera a lei nem reabre prazo. Ela sinaliza consenso local, cria pressão institucional e tenta pautar Roma. O caminho até uma norma efetiva passa por apresentação de projeto, tramitação parlamentar e aprovação, ou por uma decisão do Governo, e nenhuma dessas etapas tem desfecho previsível ou garantido.\n\nVale ainda antecipar uma dúvida que tende a aparecer. Uma reabertura da lei 379/2000 não significaria, automaticamente, imunidade em relação ao artigo 3-bis. Como as duas regras se articulariam dependeria inteiramente do texto que viesse a ser aprovado, e qualquer leitura hoje sobre esse ponto é especulação.\n\nPara as famílias, a leitura útil é de médio prazo. Não existe hoje janela aberta pela lei 379/2000, e ninguém pode prometer que existirá. O que faz sentido agora é organizar e preservar documentação de origem, registros paroquiais, certidões e comprovantes de emigração, com atenção especial a documentos que demonstrem a saída do território antes de 16 de julho de 1920, porque esse acervo é trabalhoso de reunir e será exigido em qualquer cenário futuro, e acompanhar as fontes oficiais italianas em vez de intermediários. Decisões concretas sobre cada caso pedem a avaliação de um profissional habilitado, já que o enquadramento depende de detalhes específicos da linha familiar.",
        "tags": [
          "cidadania italiana",
          "Trentino",
          "lei 379/2000",
          "Império Austro-Húngaro",
          "jure sanguinis",
          "Itália",
          "Corte Costituzionale"
        ],
        "sources": [
          {
            "label": "Vita Trentina · Approvata la proposta di voto per il diritto alla cittadinanza ai discendenti dei trentini emigrati all'estero",
            "url": "https://www.vitatrentina.it/2026/07/15/approvata-la-proposta-di-voto-per-il-diritto-alla/"
          },
          {
            "label": "l'Adige · Sì alla cittadinanza ai discendenti dei trentini emigrati: il Consiglio fa fronte comune",
            "url": "https://www.ladige.it/cronaca/cittadinanza-ai-discendenti-dei-trentini-emigrati-il-consiglio-fa-fronte-comune-kejyb5bk"
          },
          {
            "label": "MAECI · Riconoscimento della cittadinanza ai sensi delle leggi 379/2000 e 124/2006 (fonte oficial nacional)",
            "url": "https://www.esteri.it/en/servizi-consolari-e-visti/italiani-all-estero/cittadinanza/riconoscimento-della-cittadinanza-ai-sensi-delle-leggi-379-2000-e-124-2006/"
          },
          {
            "label": "Consolato Generale d'Italia a Curitiba (MAECI) · Legge 14 dicembre 2000, n. 379 (Trentini)",
            "url": "https://conscuritiba.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-14-dicembre-2000-n-379-trentini/"
          },
          {
            "label": "Consolato Generale d'Italia a San Paolo (MAECI) · Legge n. 379/2000",
            "url": "https://conssanpaolo.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-no-379-2000/"
          },
          {
            "label": "Corte Costituzionale · Sentenza n. 63/2026, 30 aprile 2026 (art. 3-bis della legge 91/1992, DL 36/2025 conv. legge 74/2025)",
            "url": "https://www.cortecostituzionale.it/scheda-pronuncia/2026/63"
          },
          {
            "label": "Italia Chiama Italia · Il voto unanime del Consiglio provinciale sulla cittadinanza ai discendenti dei trentini",
            "url": "https://www.italiachiamaitalia.it/cittadinanza-italiana-ai-discendenti-dei-trentini-emigrati-la-trentini-nel-mondo-applaude-il-voto-unanime-del-consiglio-provinciale/"
          },
          {
            "label": "Italianismo · Associação busca apoio no Parlamento para devolver cidadania a descendentes de trentinos (fonte de comunidade, a confirmar)",
            "url": "https://italianismo.com.br/associacao-busca-apoio-no-parlamento-para-devolver-cidadania-a-descendentes-de-trentinos/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "title": "Descendentes de trentinos: pedido de reabertura da cidadania avança em Trento e chega a Roma",
        "body": "Quem tem origem trentina e já esbarrou na lei italiana de cidadania acompanhou um movimento relevante nos últimos dias. Em 14 de julho de 2026, o Conselho provincial de Trento aprovou por unanimidade uma proposta de voto pedindo ao Parlamento e ao Governo italiano que reabram o caminho de reconhecimento da cidadania para descendentes de trentinos que emigraram quando a região ainda fazia parte do Império Austro-Húngaro. Em 17 de julho, o portal de comunidade Italianismo noticiou que uma associação de famílias trentinas no exterior havia procurado parlamentares eleitos pela região para propor um projeto de lei específico e pressionar por uma intervenção do Governo, informação que ainda não tem confirmação em canais oficiais.\n\nVale entender bem o que isso significa hoje. A proposta aprovada em Trento é um ato político que expressa uma posição e formula um pedido, e não uma mudança de lei. A via específica em questão, a lei 379/2000, criada para as famílias de territórios que pertenceram ao Império Austro-Húngaro, alcançava quem emigrou antes de 16 de julho de 1920 e seus descendentes. O prazo se encerrou em 2010 segundo as próprias páginas dos consulados italianos no Brasil e do Ministério dos Negócios Estrangeiros, e segue fechado enquanto não houver norma nova.\n\nHá também um detalhe que costuma gerar leitura errada. Mesmo uma reabertura desse prazo não afastaria por si só a restrição do artigo 3-bis, introduzida pela reforma de 2025, cuja constitucionalidade foi examinada pela Corte Constitucional em abril de 2026. Como as duas regras se combinariam dependeria do texto de uma eventual lei futura.\n\nSe a sua família tem raízes no Trentino, o momento é de organizar documentação e acompanhar as fontes oficiais, não de tomar decisões apressadas. Conteúdo informativo não substitui a orientação de um profissional habilitado.",
        "cta": "Sua família emigrou do Trentino antes de 16 de julho de 1920? Acompanhe as fontes oficiais italianas e converse com um profissional habilitado antes de qualquer passo.",
        "sources": [
          {
            "label": "Vita Trentina · Approvata la proposta di voto per il diritto alla cittadinanza ai discendenti dei trentini emigrati all'estero",
            "url": "https://www.vitatrentina.it/2026/07/15/approvata-la-proposta-di-voto-per-il-diritto-alla/"
          },
          {
            "label": "Italia Chiama Italia · Cittadinanza italiana ai discendenti dei trentini emigrati: il voto unanime del Consiglio provinciale",
            "url": "https://www.italiachiamaitalia.it/cittadinanza-italiana-ai-discendenti-dei-trentini-emigrati-la-trentini-nel-mondo-applaude-il-voto-unanime-del-consiglio-provinciale/"
          },
          {
            "label": "MAECI · Riconoscimento della cittadinanza ai sensi delle leggi 379/2000 e 124/2006 (fonte oficial nacional)",
            "url": "https://www.esteri.it/en/servizi-consolari-e-visti/italiani-all-estero/cittadinanza/riconoscimento-della-cittadinanza-ai-sensi-delle-leggi-379-2000-e-124-2006/"
          },
          {
            "label": "Italianismo · Associação busca apoio no Parlamento para devolver cidadania a descendentes de trentinos (fonte de comunidade, a confirmar)",
            "url": "https://italianismo.com.br/associacao-busca-apoio-no-parlamento-para-devolver-cidadania-a-descendentes-de-trentinos/"
          },
          {
            "label": "Consolato Generale d'Italia a San Paolo (MAECI) · Legge n. 379/2000",
            "url": "https://conssanpaolo.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-no-379-2000/"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "A lei 379/2000 continua fechada: pedido de reabertura não é prazo aberto",
        "body": "Sempre que um tema de cidadania italiana volta ao noticiário, aparecem ofertas prometendo destravar processos. Por isso vale registrar com clareza o que está e o que não está valendo agora. A lei 379, de dezembro de 2000, abriu uma via específica de reconhecimento da cidadania italiana para pessoas nascidas e já residentes em territórios que pertenceram ao Império Austro-Húngaro, como o Trentino, e para seus descendentes, alcançando quem emigrou antes de 16 de julho de 1920, excluída a atual República da Áustria. Segundo as páginas oficiais dos consulados italianos no Brasil e do Ministério dos Negócios Estrangeiros, essa janela chegou a ser prorrogada por cinco anos e se encerrou em 2010.\n\nO pedido de reabertura aprovado pelo Conselho provincial de Trento em 14 de julho de 2026 não reabre esse prazo. Um conselho provincial pode manifestar posição e endereçar solicitação ao Parlamento e ao Governo, mas a competência para mudar a lei de cidadania é nacional. Enquanto não houver aprovação parlamentar ou norma do Governo italiano publicada, não existe protocolo novo disponível com base na lei 379/2000.\n\nVale acrescentar que o ambiente normativo atual é de restrição, não de abertura. A reforma de 2025 inseriu o artigo 3-bis na lei 91/1992, e a Corte Constitucional, na sentença 63/2026, declarou não fundadas as questões que lhe foram submetidas pelo Tribunal de Turim. Quem prometer que uma decisão judicial recente destravou processos está descrevendo o oposto do que ocorreu.\n\nA orientação prática é simples: desconfie de quem prometer resultado, prazo ou acesso a uma janela que não está aberta, e confirme qualquer informação diretamente nos canais oficiais consulares italianos. Este conteúdo é informativo e não substitui a avaliação de um profissional habilitado sobre o seu caso.",
        "cta": "Recebeu alguma oferta prometendo entrada imediata pela lei 379/2000? Confirme antes nos canais oficiais dos consulados italianos.",
        "sources": [
          {
            "label": "Consolato Generale d'Italia a Curitiba (MAECI) · Legge 14 dicembre 2000, n. 379 (Trentini)",
            "url": "https://conscuritiba.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-14-dicembre-2000-n-379-trentini/"
          },
          {
            "label": "Consolato Generale d'Italia a San Paolo (MAECI) · Legge n. 379/2000",
            "url": "https://conssanpaolo.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-no-379-2000/"
          },
          {
            "label": "MAECI · Riconoscimento della cittadinanza ai sensi delle leggi 379/2000 e 124/2006 (fonte oficial nacional)",
            "url": "https://www.esteri.it/en/servizi-consolari-e-visti/italiani-all-estero/cittadinanza/riconoscimento-della-cittadinanza-ai-sensi-delle-leggi-379-2000-e-124-2006/"
          },
          {
            "label": "Corte Costituzionale · Sentenza n. 63/2026, 30 aprile 2026",
            "url": "https://www.cortecostituzionale.it/scheda-pronuncia/2026/63"
          },
          {
            "label": "Vita Trentina · Approvata la proposta di voto per il diritto alla cittadinanza ai discendenti dei trentini emigrati all'estero",
            "url": "https://www.vitatrentina.it/2026/07/15/approvata-la-proposta-di-voto-per-il-diritto-alla/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "Trento aprova por unanimidade pedido para reabrir a cidadania italiana a descendentes de trentinos",
        "standfirst": "Proposta aprovada pelo Conselho provincial pede que Parlamento e Governo reabram o prazo da lei 379/2000, encerrado em 2010. Dias depois, cobertura de comunidade relatou tratativas com parlamentares em Roma, informação que ainda não tem confirmação oficial.",
        "body": "O Conselho provincial de Trento aprovou, em 14 de julho de 2026, uma proposta de voto que pede ao Parlamento e ao Governo italiano a reabertura do caminho de reconhecimento da cidadania italiana para descendentes de trentinos que emigraram quando a região ainda pertencia ao Império Austro-Húngaro. A aprovação foi unânime, com o conselheiro Michele Malfer, do grupo Campobase, como primeiro signatário e adesão de conselheiros de maioria e de oposição, segundo a cobertura da imprensa local trentina.\n\nO pedido tem um alvo específico e é importante entender qual. Não se trata da cidadania por descendência comum, o jure sanguinis, mas de uma via paralela criada pela lei 379, de 14 de dezembro de 2000, formalmente intitulada Disposições para o reconhecimento da cidadania italiana às pessoas nascidas e já residentes nos territórios pertencentes ao Império Austro-Húngaro e aos seus descendentes. Como o Trentino só foi incorporado à Itália depois de 1920, quem saiu de lá antes disso emigrou como súdito austro-húngaro, e não como cidadão italiano, o que deixou essas famílias fora das regras gerais e exigiu uma legislação própria.\n\nA própria lei fixa um marco temporal que vale conhecer antes de qualquer outra coisa. Ela alcança quem emigrou dos territórios que pertenceram ao Império Austro-Húngaro, excluída a atual República da Áustria, antes de 16 de julho de 1920, e os descendentes dessas pessoas. As declarações apresentadas dentro do prazo eram examinadas por uma comissão interministerial instituída no Ministério do Interior, que emitia parecer sobre o cumprimento dos requisitos.\n\nEssa via, porém, está fechada. Conforme as páginas oficiais dos consulados italianos no Brasil e do Ministério dos Negócios Estrangeiros italiano, a lei 379/2000 abriu uma janela por tempo determinado para apresentar a declaração de reconhecimento, janela que chegou a ser prorrogada por cinco anos e se encerrou em 2010, somando cerca de dez anos no total. Desde então, não há prazo aberto para novos pedidos com base nessa norma, ainda que processos protocolados na época sigam em andamento. É exatamente essa reabertura que a proposta aprovada em Trento solicita.\n\nA demanda teria ganhado um passo novo em 17 de julho, quando o portal de comunidade Italianismo noticiou que uma associação de famílias trentinas no exterior havia procurado parlamentares eleitos pela região para atuar em duas frentes, a apresentação de um projeto de lei específico e a pressão junto ao Governo por uma intervenção direta que reabra o antigo prazo. Essa informação vem de fonte de comunidade e não encontra confirmação em canais oficiais do Parlamento italiano. Cabe registrar, para evitar confusão entre entidades, que a imprensa trentina ao cobrir a votação cita a associação Trentini nel Mondo como a que saudou o resultado, enquanto existe também a Unione delle Famiglie Trentine all'Estero APS, organização distinta. A atribuição precisa de quem está conduzindo as tratativas em Roma permanece a confirmar.\n\nO contexto jurídico ajuda a medir o tamanho do desafio. A reforma de 2025, introduzida pelo decreto-legge 36 de 28 de março de 2025 e convertida na lei 74 de 23 de maio de 2025, inseriu o artigo 3-bis na lei 91/1992 e restringiu o reconhecimento da cidadania para nascidos no exterior que já possuam outra nacionalidade. Em 30 de abril de 2026, a Corte Constitucional julgou a sentença 63/2026, provocada pelo Tribunal de Turim, e declarou não fundadas as questões levantadas, limitadas a determinadas expressões e condições do dispositivo, entendendo que o legislador dispõe de ampla discricionariedade em matéria de cidadania. O quadro restritivo saiu confirmado nesse julgamento, o que não significa que todo o contencioso sobre a reforma esteja encerrado, mas indica que uma mudança de rota tende a depender do terreno político e legislativo, não do judicial.\n\nHá ainda um ponto que costuma passar despercebido. Mesmo que o prazo da lei 379/2000 venha a ser reaberto, isso não afastaria automaticamente a restrição do artigo 3-bis, e o desenho de uma eventual norma nova determinaria como as duas regras conversam entre si. Não é possível antecipar esse resultado hoje.\n\nPara as famílias de origem trentina no Brasil e na Argentina, o recado prático é de atenção e cautela. Uma proposta de voto aprovada por um conselho provincial é um ato de natureza política, que manifesta uma posição e endereça um pedido, mas não altera a lei nem cria direito novo por si só. Enquanto não houver aprovação parlamentar ou norma do Governo reabrindo o prazo, a lei 379/2000 segue encerrada, e qualquer decisão sobre documentação ou processo deve ser tomada com orientação de profissional habilitado e confirmação nas fontes oficiais italianas.",
        "keyFacts": [
          "Em 14 de julho de 2026, o Conselho provincial de Trento aprovou por unanimidade uma proposta de voto pedindo a Parlamento e Governo a reabertura do reconhecimento de cidadania a descendentes de trentinos emigrados, tendo Michele Malfer (Campobase) como primeiro signatário.",
          "A via em discussão é a lei 379/2000, criada porque o Trentino pertencia ao Império Austro-Húngaro e só foi incorporado à Itália depois de 1920, o que deixou essas famílias fora das regras gerais do jure sanguinis.",
          "O critério legal alcança quem emigrou dos territórios então austro-húngaros, excluída a atual República da Áustria, antes de 16 de julho de 1920, e seus descendentes.",
          "Segundo os consulados italianos no Brasil e o Ministério dos Negócios Estrangeiros, o prazo da lei 379/2000 foi prorrogado por cinco anos e se encerrou em 2010, totalizando cerca de dez anos; não há janela aberta hoje para novos pedidos com base nessa norma.",
          "Uma associação de famílias trentinas no exterior teria procurado parlamentares da região para propor um projeto de lei e pressionar o Governo, conforme noticiou o portal Italianismo em 17 de julho (fonte de comunidade, sem confirmação oficial).",
          "O pano de fundo é a reforma de 2025 (decreto-legge 36/2025, convertido na lei 74/2025), cujo artigo 3-bis teve as questões de constitucionalidade levantadas pelo Tribunal de Turim declaradas não fundadas pela sentença 63/2026 da Corte Constitucional, de 30 de abril de 2026.",
          "Uma eventual reabertura do prazo da lei 379/2000 não afastaria automaticamente a restrição do artigo 3-bis; a articulação entre as duas regras dependeria do texto de uma norma futura."
        ],
        "sources": [
          {
            "label": "Vita Trentina · Approvata la proposta di voto per il diritto alla cittadinanza ai discendenti dei trentini emigrati all'estero",
            "url": "https://www.vitatrentina.it/2026/07/15/approvata-la-proposta-di-voto-per-il-diritto-alla/"
          },
          {
            "label": "l'Adige · Sì alla cittadinanza ai discendenti dei trentini emigrati: il Consiglio fa fronte comune",
            "url": "https://www.ladige.it/cronaca/cittadinanza-ai-discendenti-dei-trentini-emigrati-il-consiglio-fa-fronte-comune-kejyb5bk"
          },
          {
            "label": "MAECI · Riconoscimento della cittadinanza ai sensi delle leggi 379/2000 e 124/2006 (fonte oficial nacional)",
            "url": "https://www.esteri.it/en/servizi-consolari-e-visti/italiani-all-estero/cittadinanza/riconoscimento-della-cittadinanza-ai-sensi-delle-leggi-379-2000-e-124-2006/"
          },
          {
            "label": "Consolato Generale d'Italia a Curitiba (MAECI) · Legge 14 dicembre 2000, n. 379 (Trentini)",
            "url": "https://conscuritiba.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-14-dicembre-2000-n-379-trentini/"
          },
          {
            "label": "Consolato Generale d'Italia a San Paolo (MAECI) · Legge n. 379/2000",
            "url": "https://conssanpaolo.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/cittadinanza/legge-no-379-2000/"
          },
          {
            "label": "Corte Costituzionale · Sentenza n. 63/2026, 30 aprile 2026 (art. 3-bis della legge 91/1992, DL 36/2025 conv. legge 74/2025)",
            "url": "https://www.cortecostituzionale.it/scheda-pronuncia/2026/63"
          },
          {
            "label": "Italia Chiama Italia · Cittadinanza italiana ai discendenti dei trentini emigrati: il voto unanime del Consiglio provinciale",
            "url": "https://www.italiachiamaitalia.it/cittadinanza-italiana-ai-discendenti-dei-trentini-emigrati-la-trentini-nel-mondo-applaude-il-voto-unanime-del-consiglio-provinciale/"
          },
          {
            "label": "Italianismo · Associação busca apoio no Parlamento para devolver cidadania a descendentes de trentinos (fonte de comunidade, a confirmar)",
            "url": "https://italianismo.com.br/associacao-busca-apoio-no-parlamento-para-devolver-cidadania-a-descendentes-de-trentinos/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "Fronteiras internas da Alemanha: por que a pressão aumentou justamente agora",
        "standfirst": "Bruxelas, os tribunais administrativos e os próprios números de migração empurram na mesma direção, mas o governo alemão mantém as checagens até pelo menos 15 de setembro. Entenda o impasse e o que ele significa para quem vive ou pretende viver no país.",
        "body": "Quase dois anos depois de a Alemanha reintroduzir controles em todas as suas fronteiras terrestres, em 16 de setembro de 2024, a medida chegou a julho de 2026 sob três frentes de pressão que se reforçam. Nenhuma delas, isoladamente, muda a rotina de quem cruza a fronteira hoje. Somadas, porém, elas explicam por que a data de 15 de setembro de 2026 virou o ponto de decisão mais relevante do calendário migratório alemão neste semestre.\n\nA primeira frente é política e vem de Bruxelas. Em declaração divulgada em 16 de julho de 2026, o comissário europeu de Assuntos Internos e Migração, Magnus Brunner, pediu que a Alemanha comece a encerrar as checagens adicionais. O raciocínio dele parte da premissa de que o novo desenho europeu já resolve na fronteira externa aquilo que os controles internos tentam resolver por dentro. A reforma do sistema europeu comum de asilo, o GEAS, entrou em vigor de forma plena em 12 de junho de 2026 e criou um processo padronizado de triagem nas fronteiras externas do bloco. Na leitura do comissário, manter filtros internos depois disso duplica esforço sem ganho proporcional.\n\nA segunda frente é estatística, e é a que dá lastro ao argumento. Segundo dados preliminares divulgados pela Frontex em julho de 2026, a União Europeia registrou pouco mais de 49 mil travessias irregulares no primeiro semestre do ano, 37% menos que no mesmo período de 2025. Dentro da Alemanha, o movimento é semelhante. A estatística do BAMF aponta 39.646 pedidos de asilo iniciais entre janeiro e junho de 2026, contra 61.336 um ano antes, queda de 35,4%. Quando o número que motivou uma medida excepcional cai por dois anos seguidos, a justificativa dessa medida fica mais difícil de sustentar publicamente.\n\nA terceira frente é jurídica, e é a que mais gera mal-entendido. Em 1º de julho de 2026, o Tribunal Administrativo de Munique proferiu três sentenças declarando ilegais os controles na fronteira com a Áustria, apontando que checagens mantidas praticamente inalteradas por anos não se acomodam nem ao antigo nem ao novo Código de Fronteiras Schengen. Só que a mesma decisão negou o pedido de proibir checagens futuras: o tribunal entendeu que o cidadão precisa, em regra, suportar a medida no momento em que ela ocorre e questionar a legalidade depois, com tutela de urgência reservada a casos excepcionais de dano irreparável. Ou seja, ganhar na Justiça, nesse desenho, não significa passar pela fronteira sem ser parado. As sentenças são de primeira instância e cabe recurso ao Tribunal Administrativo Superior da Baviera. Em abril de 2026, diante de decisão semelhante do Tribunal Administrativo de Koblenz sobre a fronteira com Luxemburgo, o ministro do Interior classificou o julgado como decisão de caso individual de primeira instância e anunciou recurso.\n\nDo outro lado do impasse está a posição do governo. O ministro do Interior, Alexander Dobrindt, tem mantido as checagens mesmo diante das decisões judiciais e da cobrança de Bruxelas. A notificação registrada junto à Comissão Europeia cobre o período de 16 de março a 15 de setembro de 2026 e lista, como fundamento, a migração irregular, a atuação de redes de contrabando de pessoas, a pressão sobre o sistema de acolhimento de asilo e o quadro geral de segurança internacional. Ela vale para as fronteiras terrestres com França, Luxemburgo, Bélgica, Países Baixos, Dinamarca, Áustria, Suíça, República Tcheca e Polônia, ou seja, praticamente todo o entorno terrestre do país.\n\nPara quem vive ou pretende viver na Alemanha, o quadro tem duas leituras práticas. A primeira é que nada muda agora. Quem cruza fronteira a trabalho, estuda do outro lado ou planeja chegar de carro, ônibus ou trem continua sujeito à mesma abordagem de sempre, e vale carregar documento de identidade ou passaporte em qualquer deslocamento entre países vizinhos. A segunda é que setembro concentra uma decisão real. Se o governo optar por nova prorrogação, o embate com Bruxelas e com os tribunais tende a subir de tom. Se optar por reduzir as checagens, a expectativa de quem defende esse caminho é de um processo gradual, e não de um desligamento de um dia para o outro.\n\nHá ainda um efeito de soma que costuma passar despercebido. Enquanto o debate sobre as fronteiras internas segue aberto, o EES, o Sistema de Entrada e Saída da União Europeia, já acrescentou uma camada própria de espera na fronteira externa, com registros biométricos de todo viajante de fora do bloco. Medições divulgadas por dirigentes de aeroportos europeus em 20 de julho de 2026 mostram tempos médios que triplicaram em alguns pontos de entrada, como Roma e Faro. Quem chega à Alemanha vindo de fora do espaço Schengen passa pelo mesmo sistema em Frankfurt ou Munique. Para o viajante, os dois assuntos são distintos na origem, mas se encontram no mesmo lugar, o tempo gasto até estar efetivamente dentro do país.\n\nO recado prático é acompanhar duas coisas ao longo de agosto e setembro. Primeiro, se o governo alemão renova ou não a notificação que vence em 15 de setembro. Segundo, como os tribunais superiores respondem aos recursos do Ministério do Interior, já que uma decisão de instância superior tem peso muito maior do que as sentenças de primeiro grau já proferidas. Como em todo processo em curso, o cenário pode mudar, e cada passo deve ser confirmado em fonte oficial antes de qualquer decisão de viagem ou de mudança. Conteúdo informativo não substitui a orientação de um profissional habilitado para o seu caso concreto.",
        "tags": [
          "Alemanha",
          "Fronteiras",
          "Schengen",
          "Comissão Europeia",
          "Frontex",
          "BAMF",
          "EES",
          "GEAS"
        ],
        "sources": [
          {
            "label": "Comissão Europeia · Temporary Reintroduction of Border Control",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/schengen-area/temporary-reintroduction-border-control_en"
          },
          {
            "label": "Frontex · Irregular border crossings into the EU down 37% in the first half of 2026",
            "url": "https://www.frontex.europa.eu/media-centre/news/news-release/frontex-irregular-border-crossings-into-the-eu-down-37-in-the-first-half-of-2026-Z5YoLp"
          },
          {
            "label": "BAMF · Asylzahlen Juni 2026",
            "url": "https://www.bamf.de/SharedDocs/Meldungen/DE/2026/260703-asylzahlen-juni-2026.html"
          },
          {
            "label": "LTO · VG München: Grenzkontrollen zu Österreich rechtswidrig",
            "url": "https://www.lto.de/recht/nachrichten/n/vg-muenchen-m23k258366-m23k258376-grenzkontrolle-oesterreich-schengen-kodex-rechtswidrig"
          },
          {
            "label": "beck-aktuell · VG München: Die Kontrollen sind rechtswidrig, aber weiter hinzunehmen",
            "url": "https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/vg-muenchen-gff-klage-eu-grenzkontrollen-racial-profiling-2026-07-02"
          },
          {
            "label": "beck-aktuell · Nach neuem Urteil zu Grenzkontrollen: Dobrindt kündigt Berufung an",
            "url": "https://www.beck-aktuell.de/heute-im-recht/rechtsgeschehen/dobrindt-berufung-vg-koblenz-urteil-einzelfallentscheidung-grenzkontrollen-2026-04-28"
          },
          {
            "label": "LTO · Grenzkontrollen: Dobrindt kündigt Berufung gegen VG-Urteil an",
            "url": "https://www.lto.de/recht/nachrichten/n/vg-koblenz-k65025ko-grenzkontrollen-dobrindt-berufung"
          },
          {
            "label": "IamExpat in Germany · Germany must halt extra border checks, says EU Commissioner",
            "url": "https://www.iamexpat.de/expat-info/germany-news/germany-must-halt-extra-border-checks-says-eu-commissioner"
          },
          {
            "label": "migazin.de · Sommerferien: Im Stau wegen \"purer Symbolpolitik\"? (16/07/2026)",
            "url": "https://www.migazin.de/2026/07/16/grenzkontrolle-dobrindt-immer-staerker-unter-druck/"
          },
          {
            "label": "The Local Germany · Airport bosses warn EU's new border checks triple waiting times for Brits",
            "url": "https://www.thelocal.de/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "title": "Os controles nas fronteiras terrestres da Alemanha seguem valendo, apesar da pressão de Bruxelas e dos tribunais",
        "body": "O comissário europeu de Assuntos Internos e Migração, Magnus Brunner, pediu que a Alemanha comece a encerrar os controles adicionais nas suas fronteiras terrestres, em declaração divulgada em 16 de julho de 2026. O argumento dele é que as entradas irregulares caíram e que a reforma do sistema europeu comum de asilo, o GEAS, em vigor desde 12 de junho de 2026, concentrou a triagem nas fronteiras externas do bloco.\n\nNa prática, porém, nada muda por enquanto. A notificação que a Alemanha registrou junto à Comissão Europeia cobre o período de 16 de março a 15 de setembro de 2026 e alcança as fronteiras terrestres com França, Luxemburgo, Bélgica, Países Baixos, Dinamarca, Áustria, Suíça, República Tcheca e Polônia. Nem uma decisão judicial mudou isso: em 1º de julho de 2026, o Tribunal Administrativo de Munique considerou ilegais os controles na fronteira com a Áustria, mas negou o pedido de proibir checagens futuras, por entender que o cidadão deve suportar a medida no momento e discutir a legalidade depois. O Ministério do Interior mantém as checagens, e a próxima data a acompanhar é 15 de setembro, quando o governo alemão terá de decidir se prorroga de novo.",
        "cta": "Vai entrar na Alemanha por via terrestre ou cruza fronteira com frequência a trabalho? Leve documento de identidade ou passaporte sempre e confira a situação atualizada em canais oficiais antes de viajar.",
        "sources": [
          {
            "label": "Comissão Europeia · Temporary Reintroduction of Border Control",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/schengen-area/temporary-reintroduction-border-control_en"
          },
          {
            "label": "IamExpat in Germany · Germany must halt extra border checks, says EU Commissioner",
            "url": "https://www.iamexpat.de/expat-info/germany-news/germany-must-halt-extra-border-checks-says-eu-commissioner"
          },
          {
            "label": "migazin.de · Sommerferien: Im Stau wegen \"purer Symbolpolitik\"? (16/07/2026)",
            "url": "https://www.migazin.de/2026/07/16/grenzkontrolle-dobrindt-immer-staerker-unter-druck/"
          },
          {
            "label": "beck-aktuell · VG München: Die Kontrollen sind rechtswidrig, aber weiter hinzunehmen",
            "url": "https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/vg-muenchen-gff-klage-eu-grenzkontrollen-racial-profiling-2026-07-02"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "Filas do EES: saíram os primeiros números concretos, e eles não são pequenos",
        "body": "Reportagem publicada em 20 de julho de 2026 trouxe medições de dirigentes de aeroportos europeus sobre o impacto do EES, o Sistema de Entrada e Saída da União Europeia, no tempo de espera de viajantes de fora do bloco. No aeroporto de Fiumicino, em Roma, o responsável pela área de aviação, Ivan Bassato, afirma que o tempo médio de processamento de cidadãos britânicos subiu de cerca de 7 para 20 minutos, com picos ocasionais de uma a duas horas. Em Faro, em Portugal, o superintendente Pedro Oliveira relata que filas que levavam cerca de 10 minutos passaram a ultrapassar os 30 minutos com frequência.\n\nOs números dão contorno a uma queixa que o setor aéreo já vinha registrando. Em carta aberta de 1º de julho de 2026 à presidência da Comissão Europeia, as entidades A4E, ACI EUROPE e IATA afirmaram que as esperas no controle de fronteira chegaram a até 5 horas em períodos de pico desde a implementação plena do sistema, em abril, e pediram flexibilidade para suspender o EES quando o volume de passageiros superar a capacidade dos postos. Por que isso importa para quem vai à Alemanha: os aeroportos citados nas medições ficam na Itália, em Portugal, na Espanha, na Grécia e na Bélgica, mas o EES é o mesmo sistema em todo o espaço Schengen. Quem chega de fora do bloco e desembarca em Frankfurt ou Munique passa pelo mesmo registro biométrico de entrada, então esses tempos servem como referência de planejamento, não como número já medido na Alemanha.",
        "cta": "Tem voo marcado para a Europa nas próximas semanas? Reserve folga extra de tempo na conexão e acompanhe as orientações oficiais do aeroporto de chegada antes de embarcar.",
        "sources": [
          {
            "label": "The Local Germany · Airport bosses warn EU's new border checks triple waiting times for Brits",
            "url": "https://www.thelocal.de/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          },
          {
            "label": "ACI EUROPE · Open letter to the President of the European Commission on the Schengen Entry/Exit System (EES)",
            "url": "https://www.aci-europe.org/media-room/610-open-letter-to-president-of-the-european-commission-on-the-schengen-entry-exit-system-ees.html"
          },
          {
            "label": "Euronews · EES at a 'critical point': Europe's aviation sector urges EU to show more flexibility",
            "url": "https://www.euronews.com/travel/2026/07/01/ees-at-a-critical-point-europes-aviation-sector-urges-eu-to-show-more-flexibility"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "Comissário europeu cobra que a Alemanha comece a desmontar os controles nas fronteiras internas",
        "standfirst": "Magnus Brunner sustenta que a queda das entradas irregulares e o novo pacto europeu de asilo tornaram as checagens desnecessárias, mas o Ministério do Interior mantém as medidas notificadas até 15 de setembro.",
        "body": "O comissário europeu de Assuntos Internos e Migração, Magnus Brunner, pediu publicamente que a Alemanha comece a encerrar os controles adicionais nas suas fronteiras terrestres. A declaração foi divulgada em 16 de julho de 2026 e repercutida pela imprensa em língua alemã e inglesa no país, retomando uma cobrança que Bruxelas vinha fazendo ao longo do ano.\n\nO argumento do comissário se apoia em dois pontos. O primeiro é a queda das entradas irregulares na Europa. Segundo dados preliminares divulgados pela Frontex em julho de 2026, a União Europeia registrou pouco mais de 49 mil travessias irregulares no primeiro semestre do ano, uma redução de 37% em relação ao mesmo período de 2025. O segundo é a entrada em vigor plena da reforma do sistema europeu comum de asilo, o GEAS, em 12 de junho de 2026, que passou a concentrar a triagem nas fronteiras externas do bloco.\n\nOs números internos alemães seguem a mesma direção. De acordo com a estatística de asilo do BAMF, o órgão federal de migração e refugiados, foram 39.646 pedidos de asilo iniciais no primeiro semestre de 2026, contra 61.336 no mesmo período do ano anterior, uma queda de 35,4%. Só em junho de 2026 foram 4.267 pedidos iniciais, 37,8% menos que em junho de 2025.\n\nMesmo com esse quadro, nada muda por enquanto na fronteira. Os controles em todas as fronteiras terrestres alemãs estão em vigor desde 16 de setembro de 2024 e já foram prorrogados três vezes. A notificação atualmente registrada junto à Comissão Europeia cobre o período de 16 de março a 15 de setembro de 2026 e justifica a medida por migração irregular, atuação de redes de contrabando de pessoas, pressão sobre o sistema de acolhimento de asilo e o contexto geral de segurança. Ela alcança as fronteiras terrestres com França, Luxemburgo, Bélgica, Países Baixos, Dinamarca, Áustria, Suíça, República Tcheca e Polônia.\n\nA pressão também vem dos tribunais, e aqui vale entender exatamente o que foi decidido. Em 1º de julho de 2026, o Tribunal Administrativo de Munique proferiu três sentenças considerando ilegais os controles na fronteira com a Áustria, por entender que checagens mantidas praticamente inalteradas por anos não se sustentam nem sob o antigo nem sob o novo Código de Fronteiras Schengen. O ponto que costuma se perder na manchete é que o mesmo tribunal negou o pedido de proibir checagens futuras, afirmando que o cidadão deve, em regra, suportar a medida no momento e discutir a legalidade depois. As sentenças são de primeira instância, cabe recurso ao Tribunal Administrativo Superior da Baviera, e o ministro Alexander Dobrindt mantém a posição de que as checagens continuam. Em caso anterior, envolvendo a fronteira com Luxemburgo, o Ministério do Interior já havia anunciado recurso contra decisão semelhante do Tribunal Administrativo de Koblenz.\n\nPara quem vive na Alemanha, trabalha em região de fronteira ou planeja entrar no país por via terrestre, o efeito prático imediato tanto da declaração do comissário quanto das decisões judiciais é nulo. As checagens seguem valendo como antes, e a próxima data concreta a acompanhar é 15 de setembro de 2026, quando a notificação atual vence e o governo alemão precisará decidir se prorroga novamente. Confirme sempre a situação atualizada em canais oficiais antes de viajar. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado para o seu caso concreto.",
        "keyFacts": [
          "Comissário europeu de Assuntos Internos e Migração, Magnus Brunner, pediu em declaração divulgada em 16 de julho de 2026 que a Alemanha comece a encerrar os controles adicionais nas fronteiras internas.",
          "Frontex registrou pouco mais de 49 mil travessias irregulares na União Europeia no primeiro semestre de 2026, queda de 37% sobre o mesmo período de 2025 (dados preliminares).",
          "BAMF contabilizou 39.646 pedidos de asilo iniciais no primeiro semestre de 2026, contra 61.336 um ano antes, redução de 35,4%.",
          "A notificação alemã registrada na Comissão Europeia cobre de 16 de março a 15 de setembro de 2026 e abrange as fronteiras terrestres com França, Luxemburgo, Bélgica, Países Baixos, Dinamarca, Áustria, Suíça, República Tcheca e Polônia.",
          "Em 1º de julho de 2026, o Tribunal Administrativo de Munique declarou ilegais os controles na fronteira com a Áustria em três sentenças, mas negou o pedido de proibir checagens futuras. As decisões são de primeira instância e cabe recurso.",
          "As checagens não param por causa das decisões judiciais: o ministro do Interior, Alexander Dobrindt, mantém a medida, e a próxima data de decisão é 15 de setembro de 2026."
        ],
        "sources": [
          {
            "label": "Comissão Europeia · Temporary Reintroduction of Border Control",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/schengen-area/temporary-reintroduction-border-control_en"
          },
          {
            "label": "Frontex · Irregular border crossings into the EU down 37% in the first half of 2026",
            "url": "https://www.frontex.europa.eu/media-centre/news/news-release/frontex-irregular-border-crossings-into-the-eu-down-37-in-the-first-half-of-2026-Z5YoLp"
          },
          {
            "label": "BAMF · Asylzahlen Juni 2026",
            "url": "https://www.bamf.de/SharedDocs/Meldungen/DE/2026/260703-asylzahlen-juni-2026.html"
          },
          {
            "label": "IamExpat in Germany · Germany must halt extra border checks, says EU Commissioner",
            "url": "https://www.iamexpat.de/expat-info/germany-news/germany-must-halt-extra-border-checks-says-eu-commissioner"
          },
          {
            "label": "migazin.de · Sommerferien: Im Stau wegen \"purer Symbolpolitik\"? (16/07/2026)",
            "url": "https://www.migazin.de/2026/07/16/grenzkontrolle-dobrindt-immer-staerker-unter-druck/"
          },
          {
            "label": "LTO · VG München: Grenzkontrollen zu Österreich rechtswidrig",
            "url": "https://www.lto.de/recht/nachrichten/n/vg-muenchen-m23k258366-m23k258376-grenzkontrolle-oesterreich-schengen-kodex-rechtswidrig"
          },
          {
            "label": "beck-aktuell · VG München: Die Kontrollen sind rechtswidrig, aber weiter hinzunehmen",
            "url": "https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/vg-muenchen-gff-klage-eu-grenzkontrollen-racial-profiling-2026-07-02"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "Entrar na França em 2026 ficou mais lento na fronteira e mais político no consulado",
        "standfirst": "A semana juntou dois retratos do mesmo problema: filas que triplicaram com o novo sistema de fronteiras da UE e uma disputa política em Paris sobre quantos vistos a França deve conceder a argelinos. São camadas diferentes da mesma jornada.",
        "body": "Quem planeja uma mudança para a França costuma pensar no processo como uma linha reta: pedir o visto, receber, embarcar, entrar. A semana entre 15 e 20 de julho de 2026 mostrou que essa linha tem pelo menos duas camadas independentes, e que cada uma delas está sob pressão por motivos distintos.\n\nA primeira camada é a fronteira física. Em 20 de julho, dirigentes de grandes aeroportos europeus vieram a público dizer que o Entry/Exit System, o sistema automatizado que registra entradas e saídas de não europeus, elevou de forma relevante o tempo de processamento. Em Roma Fiumicino, segundo o chief aviation officer Ivan Bassato, a espera média de britânicos passou de 7 para 20 minutos. O CEO dos aeroportos de Roma, Marco Troncone, colocou sua preocupação com o verão em oito ou nove numa escala de dez e descreveu o sistema como incompatível com os volumes de pico. Em Faro, no Algarve português, o responsável pelo controle de fronteira, Pedro Oliveira, relatou filas que passaram de 10 para mais de 30 minutos.\n\nO setor aéreo pediu freio de arrumação, e vale entender exatamente o que ele pediu. Em 1º de julho, ACI EUROPE, Airlines for Europe e IATA endereçaram uma carta aberta à presidente da Comissão Europeia, Ursula von der Leyen. O pedido não foi acabar com o sistema, e sim permitir que os Estados-membros suspendam o processamento do EES quando a demanda de passageiros superar a capacidade dos postos de fronteira, ao menos durante julho e agosto, com um mecanismo permanente de flexibilidade a partir de setembro. A resposta de Bruxelas foi negativa. A Comissão reconhece cerca de 20 pontos difíceis entre aproximadamente 1.500 passagens de fronteira do bloco, mas sustenta que uma suspensão não é necessária nem possível. O argumento de eficácia vem em números: mais de 110 milhões de entradas e saídas registradas desde outubro de 2025 e mais de 44 mil recusas de entrada notificadas, sendo mais de 1.100 ligadas a ameaças à segurança. A página oficial da Comissão confirma o calendário: lançamento progressivo em 12 de outubro de 2025 e substituição do carimbo no passaporte desde 10 de abril de 2026.\n\nA segunda camada é o consulado, e ali a pressão é de outra natureza. Em 15 de julho, o embaixador francês em Argel, Stéphane Romatet, afirmou que Paris gostaria de ver o volume de vistos a cidadãos argelinos voltar a subir, provavelmente ao patamar anterior à crise diplomática, algo perto de 250 mil por ano. A frase virou combustível político em 48 horas. A direita e o Rassemblement National acusaram o governo de capitulação. Jordan Bardella invocou a detenção do jornalista francês Christophe Gleizes, condenado a sete anos de prisão na Argélia, e Bruno Retailleau, presidente de Les Républicains e ex-ministro do Interior, sustentou que diplomacia não se confunde com apaziguamento e cobrou contrapartidas. Em 16 de julho, o Ministério das Relações Exteriores desmentiu qualquer compromisso numérico, afirmando que vistos não estavam entre os temas da retomada do diálogo e que nenhum objetivo numérico foi acertado.\n\nColocadas lado a lado, as duas camadas ensinam coisas diferentes. A camada da fronteira é operacional e previsível: ela custa tempo, não custa direito. Ninguém perde a autorização de entrada por causa de fila, mas quem tem conexão curta, chegada de madrugada ou compromisso marcado logo após o pouso precisa refazer a conta. O primeiro registro biométrico é o mais demorado, e o efeito tende a se concentrar em picos de temporada.\n\nA camada consular é política e imprevisível, e é justamente por isso que exige mais cuidado de leitura. Declaração de embaixador não é norma. Anúncio de partido não é norma. Meta de volume, mesmo quando existisse, não cria direito individual nem antecipa deferimento de um pedido específico. Os critérios de análise continuam os mesmos, os pedidos continuam sendo apresentados pelo portal oficial France-Visas e continuam sendo avaliados caso a caso pelos consulados, com base na documentação de cada requerente.\n\nO que muda de verdade, na prática, é o comportamento recomendável de quem está no meio do processo. Vale dar margem de tempo em conexões e chegadas, guardar comprovantes de entrada e saída para não depender apenas do carimbo, montar o dossiê consular com folga documental em vez de apostar em janelas favoráveis, e desconfiar de qualquer conteúdo que transforme discurso diplomático em promessa de aprovação. Nenhum dos fatos desta semana altera exigência legal alguma, e nenhum deles garante resultado.\n\nO pano de fundo é consistente com o que a Europa vem sinalizando há meses. O bloco investiu num controle de fronteira mais granular e não pretende recuar dele mesmo sob pressão do setor aéreo, e a política de vistos por nacionalidade se consolidou como instrumento de negociação diplomática, sujeito a oscilar conforme a temperatura bilateral. Para quem imigra, o efeito combinado é um processo que exige mais paciência e mais documentação, não menos.\n\nEste texto tem finalidade informativa e não substitui a orientação de um profissional habilitado. Antes de tomar decisões que envolvam prazos, mudança de país ou submissão de pedido, confirme cada ponto nos canais oficiais e consulte um advogado de imigração.",
        "tags": [
          "França",
          "Vistos",
          "Entry/Exit System",
          "Fronteiras",
          "União Europeia",
          "Argélia"
        ],
        "sources": [
          {
            "label": "The Local France · Airport bosses warn EU's new border checks triple waiting times for Brits (20/07/2026)",
            "url": "https://www.thelocal.fr/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          },
          {
            "label": "Comissão Europeia · Entry/Exit System (página oficial, Migration and Home Affairs)",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en"
          },
          {
            "label": "ACI EUROPE · Open letter to the President of the European Commission on the Schengen Entry/Exit System (01/07/2026)",
            "url": "https://www.aci-europe.org/media-room/610-open-letter-to-president-of-the-european-commission-on-the-schengen-entry-exit-system-ees.html"
          },
          {
            "label": "CAPA · ACI EUROPE, A4E and IATA call for immediate intervention on Schengen Entry Exit System",
            "url": "https://centreforaviation.com/news/aci-europe-a4e-and-iata-call-for-immediate-intervention-on-schengen-entry-exit-system-1364630"
          },
          {
            "label": "CNEWS · Qui est Stéphane Romatet, ambassadeur de France en Algérie, favorable au retour à 250.000 visas par an ? (18/07/2026)",
            "url": "https://www.cnews.fr/france/2026-07-18/qui-est-stephane-romatet-ambassadeur-de-france-en-algerie-favorable-au-retour"
          },
          {
            "label": "franceinfo · reações do RN e da direita à hausse de vistos para argelinos",
            "url": "https://www.franceinfo.fr/monde/afrique/algerie/capitulation-aplaventrisme-le-rn-et-la-droite-s-insurgent-contre-la-hausse-des-visas-pour-les-algeriens-envisagee-par-paris_8111960.html"
          },
          {
            "label": "RFI · Le Quai d'Orsay recadre après la polémique sur les visas accordés aux ressortissants algériens (19/07/2026)",
            "url": "https://www.rfi.fr/fr/france/20260719-france-le-quai-d-orsay-recadre-apr%C3%A8s-la-pol%C3%A9mique-sur-les-visas-accord%C3%A9s-aux-ressortissants-alg%C3%A9riens"
          },
          {
            "label": "France-Visas · portal oficial único de pedidos de visto para a França",
            "url": "https://france-visas.gouv.fr/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "title": "Fronteiras da UE: chefes de aeroportos dizem que a espera triplicou, e Bruxelas recusa flexibilizar o novo sistema",
        "body": "Dirigentes de aeroportos europeus alertaram em 20 de julho de 2026 que o Entry/Exit System, o sistema automatizado de registro de entradas e saídas de não europeus, triplicou o tempo de espera em alguns pontos. Em Roma Fiumicino, o chief aviation officer Ivan Bassato relatou que a espera média de cidadãos britânicos passou de 7 para 20 minutos, e o CEO dos aeroportos de Roma, Marco Troncone, classificou sua preocupação com o pico do verão em oito ou nove numa escala de dez, dizendo que o sistema é incompatível com os volumes de pico. Em Faro, em Portugal, o responsável pelo controle de fronteira, Pedro Oliveira, descreveu filas que saltaram de 10 para mais de 30 minutos.\n\nA Comissão Europeia recusou o pedido do setor aéreo. Em carta aberta de 1º de julho, ACI EUROPE, Airlines for Europe e IATA não pediram o fim do sistema, e sim autorização para que os Estados-membros suspendam o processamento do EES quando a demanda de passageiros superar a capacidade dos postos de fronteira, ao menos em julho e agosto, além de um mecanismo permanente de flexibilidade a partir de setembro. Bruxelas reconhece cerca de 20 pontos problemáticos entre aproximadamente 1.500 passagens de fronteira do bloco, mas sustenta que suspender o sistema não é necessário nem possível. Pelos números citados pela Comissão, mais de 110 milhões de entradas e saídas já foram registradas desde outubro de 2025 e mais de 44 mil recusas de entrada foram notificadas, sendo mais de 1.100 delas ligadas a ameaças à segurança. Segundo a página oficial da Comissão, o sistema começou o lançamento progressivo em 12 de outubro de 2025 e substitui o carimbo no passaporte desde 10 de abril de 2026.",
        "cta": "Vai entrar na França ou em qualquer país do espaço Schengen neste verão europeu? Conte com tempo extra na fronteira, principalmente se for seu primeiro registro biométrico, e confira as regras na página oficial da Comissão Europeia antes de viajar. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "sources": [
          {
            "label": "The Local France · Airport bosses warn EU's new border checks triple waiting times for Brits (20/07/2026)",
            "url": "https://www.thelocal.fr/20260720/airport-bosses-warn-eus-new-border-checks-triple-waiting-times-for-brits"
          },
          {
            "label": "ACI EUROPE · Open letter to the President of the European Commission on the Schengen Entry/Exit System (01/07/2026)",
            "url": "https://www.aci-europe.org/media-room/610-open-letter-to-president-of-the-european-commission-on-the-schengen-entry-exit-system-ees.html"
          },
          {
            "label": "Comissão Europeia · Entry/Exit System (página oficial, Migration and Home Affairs)",
            "url": "https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "Paris adota a alíquota máxima da taxa sobre imóveis vagos para forçar a volta de apartamentos ao aluguel",
        "body": "O Conselho de Paris aprovou em 18 de julho de 2026 as alíquotas máximas permitidas por lei para a taxa sobre habitações vagas. Pelo texto votado, a alíquota do primeiro ano de vacância vai a 30% do valor locativo, contra os 17% de referência anteriores, e a partir do segundo ano vai a 60%, contra 34%. A mudança começa a valer em 1º de janeiro de 2027. No exemplo apresentado na cobertura, um apartamento de 30 metros quadrados no 17º arrondissement sairia de cerca de 790 euros anuais para aproximadamente 1.400 euros em 2027 e 2.800 euros a partir de 2028.\n\nSegundo dados do INSEE citados pela prefeitura, 139.075 moradias em Paris estão classificadas como vagas, excluídas as residências secundárias, o que representa perto de 10% do estoque habitacional da cidade. O objetivo declarado é devolver ao mercado de aluguel em torno de 20 mil imóveis parados há muito tempo. O adjunto do prefeito Jacques Baudrier chamou a votação de uma grande vitória depois de dez anos de luta, apontando que há gente que quer morar em Paris e já não consegue pagar. Para quem planeja se mudar para a capital francesa, é uma medida que mexe com a oferta de aluguel, embora o efeito real só possa ser medido depois da entrada em vigor.",
        "cta": "Está pesquisando aluguel em Paris? Vale acompanhar como o mercado reage a partir de 2027 e confirmar sempre valores e condições de contrato com fonte local confiável antes de fechar qualquer negócio. Este conteúdo é informativo e não substitui a orientação de um profissional habilitado.",
        "sources": [
          {
            "label": "The Local France · Paris doubles tax on vacant homes to bring properties back onto rental market (20/07/2026)",
            "url": "https://www.thelocal.fr/20260720/paris-doubles-tax-on-vacant-homes-to-bring-properties-back-onto-rental-market"
          },
          {
            "label": "franceinfo · La Ville de Paris a voté le doublement de la taxe sur les logements vacants",
            "url": "https://www.franceinfo.fr/economie/immobilier/logements-vacants/la-ville-de-paris-a-vote-le-doublement-de-la-taxe-sur-les-logements-vacants-pour-inciter-les-proprietaires-a-les-remettre-sur-le-marche_8112893.html"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "headline": "França desmente meta de 250 mil vistos a argelinos após fala do embaixador em Argel",
        "standfirst": "Declaração de Stéphane Romatet em 15 de julho reacendeu a disputa política sobre vistos, e o Ministério das Relações Exteriores negou que exista qualquer objetivo numérico acertado entre os dois países.",
        "body": "A relação entre França e Argélia voltou ao centro do debate migratório francês depois que o embaixador francês em Argel, Stéphane Romatet, afirmou em entrevista no dia 15 de julho de 2026 que Paris gostaria de ver o volume de vistos concedidos a cidadãos argelinos voltar a crescer, provavelmente até o patamar anterior à crise diplomática entre os dois países, algo em torno de 250 mil vistos por ano. A fala foi repercutida por veículos franceses como CNEWS, Europe 1 e France24.\n\nA reação política foi imediata. Segundo a franceinfo, a direita e o Rassemblement National acusaram o governo de capitulação. Em 17 de julho, o líder do RN, Jordan Bardella, falou em capitulação do macronismo diante do regime argelino, citando as provocações do regime e a detenção do jornalista francês Christophe Gleizes, condenado a sete anos de prisão na Argélia e preso há mais de um ano. Seu aliado Éric Ciotti falou em capitulação, humilhação e traição. Bruno Retailleau, presidente de Les Républicains e ex-ministro do Interior, sustentou que diplomacia não se confunde com apaziguamento e defendeu que a França exija contrapartidas antes de qualquer aumento.\n\nDiante da repercussão, o Ministério da Europa e dos Negócios Estrangeiros, o Quai d'Orsay, veio a público desmentir a existência de qualquer compromisso numérico. A manifestação ocorreu em 16 de julho e sustentou que a concessão de vistos a nacionais argelinos não figurava entre os assuntos tratados no âmbito da retomada do diálogo bilateral e que nenhum objetivo numérico foi fixado entre os dois países. A RFI voltou ao tema em 19 de julho, registrando que o Quai d'Orsay recolocou a discussão nos trilhos oficiais. Vale a ressalva de método: não localizamos, até o fechamento deste texto, um comunicado com URL própria no site do ministério detalhando a negativa, embora o conteúdo apareça de forma consistente em veículos distintos.\n\nPara quem tem planos ligados à França, o recado prático é separar debate político de regra em vigor. Nada mudou nos critérios de análise dos pedidos, e não existe cota anunciada oficialmente. Os pedidos continuam a ser apresentados pelo portal oficial France-Visas e analisados caso a caso pelos consulados, com base na documentação apresentada. Discurso de embaixador, declaração de partido e projeção de volume não criam direito nem garantem deferimento.\n\nO episódio é útil como termômetro. Ele mostra que o volume de vistos concedidos a determinadas nacionalidades virou moeda de negociação diplomática e tema de disputa eleitoral na França, o que tende a produzir oscilação de prazos e de rigor documental ao longo do tempo. Acompanhar os canais oficiais e buscar orientação de profissional habilitado antes de tomar decisões continua sendo o caminho mais seguro.",
        "keyFacts": [
          "Em 15 de julho de 2026, o embaixador da França na Argélia, Stéphane Romatet, disse em entrevista que o volume de vistos a cidadãos argelinos deveria voltar a subir, provavelmente ao nível anterior à crise, em torno de 250 mil por ano.",
          "Em 17 de julho, a direita e o Rassemblement National reagiram com acusações de capitulação, segundo a franceinfo. Jordan Bardella falou em capitulação do macronismo e citou a detenção do jornalista francês Christophe Gleizes, condenado a sete anos de prisão na Argélia.",
          "Bruno Retailleau, presidente de Les Républicains e ex-ministro do Interior, afirmou que diplomacia não se confunde com apaziguamento e defendeu que a França exija contrapartidas antes de qualquer aumento.",
          "Em 16 de julho, o Quai d'Orsay desmentiu compromisso numérico, afirmando que a concessão de vistos a argelinos não estava entre os assuntos discutidos na retomada do diálogo e que nenhum objetivo numérico foi fixado.",
          "Não localizamos comunicado com URL própria no site do ministério francês detalhando a negativa, e por isso o ponto fica registrado com ressalva.",
          "Nenhuma regra de concessão de visto foi alterada: os pedidos seguem pelo portal oficial France-Visas e são analisados caso a caso pelos consulados."
        ],
        "sources": [
          {
            "label": "CNEWS · Qui est Stéphane Romatet, ambassadeur de France en Algérie, favorable au retour à 250.000 visas par an ? (18/07/2026)",
            "url": "https://www.cnews.fr/france/2026-07-18/qui-est-stephane-romatet-ambassadeur-de-france-en-algerie-favorable-au-retour"
          },
          {
            "label": "franceinfo · RN e direita reagem à hausse de vistos para argelinos considerada por Paris",
            "url": "https://www.franceinfo.fr/monde/afrique/algerie/capitulation-aplaventrisme-le-rn-et-la-droite-s-insurgent-contre-la-hausse-des-visas-pour-les-algeriens-envisagee-par-paris_8111960.html"
          },
          {
            "label": "France24 · RN et LR s'insurgent contre la hausse des visas pour les Algériens envisagée par Paris (17/07/2026)",
            "url": "https://www.france24.com/fr/info-en-continu/20260717-rn-et-lr-s-insurgent-contre-la-hausse-des-visas-pour-les-alg%C3%A9riens-envisag%C3%A9e-par-paris"
          },
          {
            "label": "RFI · Le Quai d'Orsay recadre après la polémique sur les visas accordés aux ressortissants algériens (19/07/2026)",
            "url": "https://www.rfi.fr/fr/france/20260719-france-le-quai-d-orsay-recadre-apr%C3%A8s-la-pol%C3%A9mique-sur-les-visas-accord%C3%A9s-aux-ressortissants-alg%C3%A9riens"
          },
          {
            "label": "Europe 1 · La droite et le RN vent debout après l'annonce d'accorder 250.000 visas à des ressortissants algériens",
            "url": "https://www.europe1.fr/politique/la-droite-et-le-rn-vent-debout-apres-lannonce-daccorder-250000-visas-a-des-ressortissants-algeriens-977532"
          },
          {
            "label": "Ministère de l'Europe et des Affaires étrangères · Déclarations officielles et points de presse",
            "url": "https://www.diplomatie.gouv.fr/fr/photos-videos-publications-infographies/bases-documentaires/declarations-officielles-et-points-de-presse/"
          },
          {
            "label": "France-Visas · portal oficial único de pedidos de visto para a França",
            "url": "https://france-visas.gouv.fr/"
          }
        ]
      },
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
      urgency: "urgent",
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
      urgency: "urgent",
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
      urgency: "urgent",
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
      urgency: "urgent",
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
      urgency: "urgent",
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
        "publishedAt": "2026-07-20",
        "headline": "Portugal correu para apertar a nacionalidade e ficou para trás nos direitos que vinham de Bruxelas",
        "standfirst": "A lei que elevou para sete e dez anos o tempo de residência exigido para a naturalização entrou em vigor em maio dentro do prazo. Já a diretiva europeia que fixa em 90 dias a decisão da autorização única e obriga a permitir a mudança de empregador venceu em 21 de maio e continua por transpor, o que levou a Comissão Europeia a notificar o país em 15 de julho.",
        "body": "A política de imigração portuguesa está a andar por dois relógios diferentes, e eles não marcam o mesmo ritmo. Um deles restringe o acesso à nacionalidade e cumpriu o calendário. O outro vem de Bruxelas, amplia direitos de quem chega para trabalhar, e está atrasado. A notificação enviada pela Comissão Europeia em julho tornou essa diferença de velocidade impossível de ignorar.\n\nO primeiro relógio é o da nacionalidade. A Lei Orgânica n.º 1/2026, publicada no Diário da República em 18 de maio de 2026, entrou em vigor no dia seguinte e alterou a Lei da Nacionalidade, a Lei n.º 37/81, de 3 de outubro. A mudança mais visível está no tempo de residência legal exigido para pedir a naturalização, que passou a ser de sete anos para nacionais de países de língua portuguesa e de Estados-membros da União Europeia, e de dez anos para nacionais dos demais países. Antes, o critério geral era de cinco anos. Os pedidos apresentados até 18 de maio de 2026, ou seja, antes da entrada em vigor, continuam sujeitos ao regime anterior, uma salvaguarda que faz diferença enorme para quem entregou o processo a tempo.\n\nHá ainda uma peça que falta e que convém acompanhar. O próprio diploma determina que o Governo altere o Regulamento da Nacionalidade Portuguesa, aprovado pelo Decreto-Lei n.º 237-A/2006, no prazo de 90 dias contados da publicação da lei, ou seja, até 16 de agosto de 2026. É desse regulamento que dependem detalhes operacionais nada menores, como a forma de fazer prova de integração e o conteúdo das provas de conhecimento da língua, da cultura, da organização política e dos direitos fundamentais, incluindo as situações em que possam ser dispensadas. Esse texto ainda não foi divulgado.\n\nO segundo relógio é o das regras europeias, e esse ficou parado. Em 15 de julho de 2026, no pacote de infrações de julho identificado como INF/26/1376, a Comissão Europeia enviou notificação formal a Portugal por não ter comunicado a transposição completa da Diretiva (UE) 2024/1233, a chamada diretiva da autorização única. O prazo terminou em 21 de maio de 2026, dois dias depois de a nova lei da nacionalidade começar a produzir efeitos. Portugal não está sozinho nessa lista, são 17 Estados-membros na mesma situação, entre eles Alemanha, França, Países Baixos e Suécia, mas isso não anula o efeito prático do atraso.\n\nO que essa diretiva contém ajuda a medir o que está em suspenso. A decisão sobre o pedido que reúne, num só procedimento, o direito de residir e de trabalhar passa a ter de ser tomada em 90 dias contados da apresentação de um pedido completo, contra os quatro meses da diretiva de 2011, com prolongamento possível de mais 30 dias em casos excecionais justificados pela complexidade. O pedido pode ser apresentado a partir de um país terceiro ou já de dentro da União Europeia, no caso de quem tem autorização de residência válida. E os Estados-membros passam a ser obrigados a permitir a mudança de empregador, o que ataca a dependência em relação ao empregador inicial, que é justamente onde nascem as situações de exploração mais graves.\n\nConvém ser preciso quanto ao alcance dessa mudança, porque é fácil vendê-la como mais do que é. A diretiva permite que os Estados exijam notificação da mudança às autoridades competentes, que façam verificação da situação do mercado de trabalho, quando já a fazem no pedido inicial, e que imponham um período mínimo de trabalho com o primeiro empregador, nunca superior a seis meses, com exceção para casos justificados de infração grave do empregador. Em caso de desemprego, o titular tem três meses de permanência para procurar nova colocação, prazo que sobe para seis meses para quem é titular da autorização única há mais de dois anos, e não para quem simplesmente reside há dois anos. Findo esse período, pode ser exigida prova de meios de subsistência. Para completar, a diretiva exige dos Estados mecanismos de monitorização, inspeções, canais de reclamação, vias de recurso judicial e sanções.\n\nNo mesmo pacote, Portugal foi notificado também por causa da Diretiva (UE) 2024/1346, relativa às condições de acolhimento de requerentes de proteção internacional, cujo prazo terminou em 12 de junho de 2026. Nesse caso, o país aparece entre 16 Estados-membros. Em ambos os processos, Portugal tem dois meses para responder, e convém repetir que a notificação formal é a primeira fase do procedimento, não uma condenação. Só se a resposta não satisfizer a Comissão é que vem o parecer fundamentado, e apenas depois o caso pode chegar ao Tribunal de Justiça da União Europeia.\n\nA leitura mais útil não é a de intenção deliberada, e sim a de capacidade e de prioridade. Transpor uma diretiva de migração laboral exige mexer no procedimento administrativo, nos prazos e na articulação entre a AIMA, a Segurança Social e a inspeção do trabalho, ou seja, exige exatamente o tipo de máquina que tem estado sob pressão. Não por acaso, o Sindicato dos Técnicos de Migração levou à Presidência da República, em 20 de julho, um pedido de reforço de meios para a AIMA, incluindo a denúncia de que lugares de oficiais de ligação da agência estão por ocupar nos consulados portugueses há cerca de dois anos. Já elevar prazos de residência na lei da nacionalidade é uma alteração legislativa de execução mais simples, que não depende de reconstruir processos operacionais.\n\nPara quem está a construir um projeto de vida em Portugal, ficam três consequências concretas. A primeira é que o calendário do seu processo de nacionalidade depende sobretudo da data em que o pedido foi apresentado, e o regulamento que falta pode ainda detalhar exigências, por isso vale acompanhar a publicação prevista para agosto. A segunda é que os direitos da diretiva da autorização única não valem hoje em Portugal só porque o prazo europeu expirou, e decisões como pedir demissão para trocar de empregador não devem ser tomadas com base neles enquanto a transposição não for publicada. A terceira é que o quadro legal português está em movimento em várias frentes ao mesmo tempo, o que torna a data de cada passo tão importante quanto a regra em si.\n\nEste conteúdo tem finalidade informativa e não substitui a orientação de um profissional habilitado. Antes de qualquer decisão sobre o seu processo, confirme a regra aplicável ao seu caso nos canais oficiais da AIMA, do portal de vistos do Ministério dos Negócios Estrangeiros e do Diário da República.",
        "tags": [
          "Portugal",
          "AIMA",
          "nacionalidade portuguesa",
          "autorização única",
          "Comissão Europeia",
          "imigração",
          "residência e trabalho"
        ],
        "sources": [
          {
            "label": "Diário da República · Lei Orgânica n.º 1/2026, de 18 de maio (Alteração à Lei da Nacionalidade)",
            "url": "https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996"
          },
          {
            "label": "Diário da República · Lei Orgânica n.º 1/2026 (texto integral em PDF)",
            "url": "https://files.diariodarepublica.pt/1s/2026/05/09500/0000200020.pdf"
          },
          {
            "label": "Comissão Europeia · July infringements package: key decisions (INF/26/1376)",
            "url": "https://ec.europa.eu/commission/presscorner/detail/en/inf_26_1376"
          },
          {
            "label": "EUR-Lex · Diretiva (UE) 2024/1233 (autorização única)",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401233"
          },
          {
            "label": "Observador · Bruxelas processa Portugal por falhas em regras sobre migrantes",
            "url": "https://observador.pt/2026/07/15/bruxelas-processa-portugal-por-falhas-em-regras-sobre-migrantes/"
          },
          {
            "label": "Observador · Sindicato dos Técnicos de Migração alerta Belém e pede reforço da AIMA nos consulados",
            "url": "https://observador.pt/2026/07/20/sindicato-dos-tecnicos-de-migracao-alerta-belem-para-discurso-de-odio-contra-imigrantes-e-pede-reforco-da-aima-nos-consulados/"
          },
          {
            "label": "The Portugal News · European Union sues Portugal, this time because of immigration rules",
            "url": "https://www.theportugalnews.com/news/2026-07-15/european-union-sues-portugal-this-time-because-of-immigration-rules/1055607"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "title": "Os 90 dias e a mudança de empregador ainda não valem em Portugal, e a Comissão Europeia acabou de notificar o país",
        "body": "Muita gente começou a perguntar se já pode contar com o prazo de 90 dias para a decisão da autorização única de residência e trabalho, ou com o direito de mudar de empregador sem perder o processo. A resposta, por enquanto, é não. Esses direitos constam da Diretiva (UE) 2024/1233, uma regra europeia que cada país precisa transpor para a sua própria legislação, e Portugal ainda não concluiu esse passo.\n\nFoi exatamente por isso que a Comissão Europeia incluiu Portugal, em 15 de julho de 2026, no pacote de infrações de julho. O prazo para transpor a diretiva terminou em 21 de maio de 2026, e o país está entre 17 Estados-membros que receberam notificação formal. Portugal tem agora dois meses para responder.\n\nO que a diretiva prevê, quando entrar em vigor na lei portuguesa, é um conjunto relevante de mudanças. A decisão passa a ter de sair em 90 dias contados da apresentação de um pedido completo, em vez dos quatro meses da regra de 2011, com possibilidade de mais 30 dias em casos excecionais justificados pela complexidade. O pedido pode ser apresentado de fora do país ou já de dentro da União Europeia, para quem tem residência válida. E o titular passa a poder mudar de empregador.\n\nVale ler a letra pequena desse último ponto, porque é onde mais se cria expectativa errada. A mudança de empregador não é livre e sem condições: os Estados-membros podem exigir notificação às autoridades, podem fazer verificação da situação do mercado de trabalho, se já a fazem no pedido inicial, e podem impor um período mínimo com o primeiro empregador, até ao limite de seis meses. Em caso de infração grave do empregador, devidamente justificada, a mudança pode ocorrer antes disso. Já quem perde o emprego pode permanecer três meses para procurar nova colocação, prazo que sobe para seis meses para quem é titular da autorização única há mais de dois anos, e não simplesmente para quem reside há dois anos.\n\nAté lá, o seu processo continua a correr pelas regras nacionais que estão em vigor hoje. Não tome decisões, como pedir demissão para trocar de empregador, com base num direito que ainda não foi transposto. Este conteúdo é informativo e não substitui aconselhamento jurídico individual.",
        "cta": "Tem pedido de residência e trabalho em curso em Portugal? Confirme na AIMA quais regras se aplicam hoje ao seu caso antes de mudar de emprego ou de empregador, e procure profissional habilitado se tiver dúvida.",
        "sources": [
          {
            "label": "Comissão Europeia · July infringements package: key decisions (INF/26/1376)",
            "url": "https://ec.europa.eu/commission/presscorner/detail/en/inf_26_1376"
          },
          {
            "label": "EUR-Lex · Diretiva (UE) 2024/1233 (autorização única)",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401233"
          },
          {
            "label": "Observador · Bruxelas processa Portugal por falhas em regras sobre migrantes",
            "url": "https://observador.pt/2026/07/15/bruxelas-processa-portugal-por-falhas-em-regras-sobre-migrantes/"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "Sindicato leva à Presidência da República o alerta de que há lugares da AIMA por ocupar nos consulados desde 2024",
        "body": "O Sindicato dos Técnicos de Migração, o STM, reuniu nesta segunda-feira, 20 de julho de 2026, com assessoras da Presidência da República. Segundo declarações da presidente do sindicato, Manuela Niza, à agência Lusa, o encontro serviu para transmitir preocupação com o aumento do discurso de ódio contra a população imigrante em Portugal e para pedir reforço de meios à AIMA.\n\nO ponto de maior efeito prático para quem está a preparar a mudança para Portugal é o da rede consular. O sindicato afirma que há cerca de dois anos estão por ocupar lugares de oficiais de ligação da AIMA, também designados conselheiros de imigração, funções previstas na lei orgânica da agência. Esses profissionais são responsáveis pela gestão dos fluxos migratórios ainda no país de origem e pela articulação com as representações diplomáticas portuguesas, sobretudo nos países que mais enviam migrantes para Portugal. O STM defende que uma imigração regular, como o Governo afirma pretender, depende de ação junto dessas representações no estrangeiro.\n\nO sindicato pediu ainda a criação de uma carreira especial para os trabalhadores da AIMA e apresentou um projeto de cooperação com os países de língua portuguesa, com colocação de pessoal qualificado nesses países.\n\nVale registar que se trata de posição de um sindicato, e não de uma decisão do Governo ou de uma mudança de regra. Nada muda hoje no seu processo por causa desta reunião.",
        "cta": "Vai iniciar um pedido de visto num consulado português? Conte com prazos que podem variar bastante conforme o posto e acompanhe a informação oficial em vistos.mne.gov.pt e aima.gov.pt.",
        "sources": [
          {
            "label": "Observador · Sindicato dos Técnicos de Migração alerta Belém para discurso de ódio contra imigrantes e pede reforço da AIMA nos consulados",
            "url": "https://observador.pt/2026/07/20/sindicato-dos-tecnicos-de-migracao-alerta-belem-para-discurso-de-odio-contra-imigrantes-e-pede-reforco-da-aima-nos-consulados/"
          },
          {
            "label": "AIMA · Agência para a Integração, Migrações e Asilo",
            "url": "https://aima.gov.pt/pt/noticias"
          },
          {
            "label": "Vistos · Portal oficial do Ministério dos Negócios Estrangeiros",
            "url": "https://vistos.mne.gov.pt/pt/"
          }
        ]
      },
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
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "headline": "Bruxelas notifica Portugal por atraso na diretiva que reduz para 90 dias a decisão da autorização única de residência e trabalho",
        "standfirst": "No pacote de infrações de julho, divulgado em 15 de julho, a Comissão Europeia enviou notificação formal a Portugal e a mais 16 Estados-membros por não terem transposto a diretiva da autorização única, cujo prazo terminou em 21 de maio. Um segundo processo trata das condições de acolhimento. Portugal tem dois meses para responder.",
        "body": "A Comissão Europeia abriu dois processos de infração contra Portugal por causa de regras europeias ligadas à migração. A decisão consta do pacote de infrações de julho de 2026, identificado como INF/26/1376 e divulgado em 15 de julho pelo executivo comunitário. Portugal é atingido em duas frentes distintas, uma sobre residência e trabalho, outra sobre acolhimento de requerentes de proteção internacional.\n\nO processo com efeito mais direto sobre quem pretende trabalhar em Portugal diz respeito à Diretiva (UE) 2024/1233, conhecida como diretiva da autorização única. O país está entre os 17 Estados-membros que receberam notificação formal por não terem comunicado a transposição completa do texto para a legislação nacional. O prazo terminou em 21 de maio de 2026. Também constam da lista Bélgica, Bulgária, Alemanha, França, Chipre, Letónia, Lituânia, Luxemburgo, Hungria, Malta, Países Baixos, Áustria, Polónia, Eslovénia, Finlândia e Suécia.\n\nA diretiva reorganiza o procedimento pelo qual um cidadão de fora da União Europeia obtém, num único pedido, o direito de residir e de trabalhar num Estado-membro. A decisão passa a ter de ser tomada em 90 dias contados da apresentação de um pedido completo, em vez dos quatro meses previstos na diretiva de 2011, prazo que pode ser prolongado por mais 30 dias em circunstâncias excecionais e devidamente justificadas pela complexidade do pedido. O pedido passa também a poder ser apresentado a partir de um país terceiro ou já de dentro da União, no caso de quem tem autorização de residência válida.\n\nO ponto mais sensível para quem já está a trabalhar é a mudança de empregador. A diretiva obriga os Estados-membros a permitir que o titular da autorização única mude de empregador, mas admite condições nacionais: notificação às autoridades competentes, verificação da situação do mercado de trabalho, nos países que já a fazem no pedido inicial, e a exigência de um período mínimo junto do primeiro empregador, que não pode ultrapassar seis meses. Em casos devidamente justificados de infração grave por parte do empregador, a mudança pode ocorrer antes desse período.\n\nEm caso de desemprego, o titular pode permanecer no país três meses durante o período de validade da autorização, prazo que sobe para seis meses no caso de quem é titular da autorização única há mais de dois anos. Terminado esse período, os Estados-membros podem exigir prova de meios de subsistência suficientes.\n\nA diretiva também reforça a proteção contra a exploração laboral, ao exigir dos Estados-membros mecanismos de monitorização, inspeções, canais de reclamação, vias de recurso judicial e sanções aplicáveis a empregadores que desrespeitem as regras.\n\nO segundo processo tem por objeto a Diretiva (UE) 2024/1346, relativa às condições de acolhimento, cujo prazo de transposição terminou em 12 de junho de 2026. Nesse caso, Portugal aparece entre 16 Estados-membros notificados. O texto define padrões de condições de vida para requerentes de proteção internacional e procura reduzir as disparidades entre os sistemas nacionais.\n\nÉ importante situar em que fase o processo está. A notificação formal é a primeira etapa do procedimento de infração, e não uma condenação. Portugal tem agora dois meses para responder à Comissão e comunicar as medidas de transposição. Se a resposta não for considerada satisfatória, o passo seguinte é o parecer fundamentado, e só depois o caso pode seguir para o Tribunal de Justiça da União Europeia.\n\nPara quem planeia trabalhar em Portugal, o ponto de atenção é que os direitos previstos na diretiva não passam a valer automaticamente pelo simples facto de o prazo europeu ter expirado. Enquanto a transposição não for concluída e publicada, o procedimento continua a correr pelas regras nacionais em vigor. Quem tem processo em curso ou pretende iniciar um pedido deve confirmar as regras aplicáveis ao seu caso junto da AIMA e dos canais oficiais, e considerar o apoio de profissional habilitado, já que o quadro legal está em transição. Este conteúdo é informativo e não substitui aconselhamento jurídico individual.",
        "keyFacts": [
          "A Comissão Europeia divulgou em 15 de julho de 2026 o pacote de infrações de julho (INF/26/1376), que inclui dois processos contra Portugal em matéria de migração.",
          "Diretiva (UE) 2024/1233, da autorização única: o prazo de transposição terminou em 21 de maio de 2026 e Portugal está entre 17 Estados-membros notificados.",
          "A diretiva fixa em 90 dias, contados da apresentação de um pedido completo, o prazo de decisão sobre a autorização única, contra os quatro meses da diretiva de 2011. O prazo pode ser prolongado por mais 30 dias em casos excecionais justificados pela complexidade.",
          "Obriga os Estados-membros a permitir a mudança de empregador, mas admite condições: notificação às autoridades, verificação do mercado de trabalho e período mínimo com o primeiro empregador até seis meses.",
          "Em caso de desemprego, prevê três meses de permanência para procurar novo trabalho, prazo que sobe para seis meses para quem é titular da autorização única há mais de dois anos.",
          "Diretiva (UE) 2024/1346, das condições de acolhimento: prazo terminou em 12 de junho de 2026, com Portugal entre 16 Estados-membros notificados.",
          "Portugal tem dois meses para responder. A notificação formal é a primeira fase do processo, não uma condenação.",
          "Enquanto a transposição não for publicada, continuam a valer as regras nacionais atualmente em vigor."
        ],
        "sources": [
          {
            "label": "Comissão Europeia · July infringements package: key decisions (INF/26/1376)",
            "url": "https://ec.europa.eu/commission/presscorner/detail/en/inf_26_1376"
          },
          {
            "label": "EUR-Lex · Diretiva (UE) 2024/1233 (autorização única)",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401233"
          },
          {
            "label": "Observador · Bruxelas processa Portugal por falhas em regras sobre migrantes",
            "url": "https://observador.pt/2026/07/15/bruxelas-processa-portugal-por-falhas-em-regras-sobre-migrantes/"
          },
          {
            "label": "The Portugal News · European Union sues Portugal, this time because of immigration rules",
            "url": "https://www.theportugalnews.com/news/2026-07-15/european-union-sues-portugal-this-time-because-of-immigration-rules/1055607"
          }
        ]
      },
      {
      publishedAt: "2026-07-17",
      urgency: "urgent",
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
  nz: {
    community: [
      {
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "title": "Nova Zelândia flexibiliza o Pathway Student Visa e amplia o curso de inglês para 30 semanas",
        "body": "Entram em vigor nesta segunda-feira, 20 de julho de 2026, as mudanças no Pathway Student Visa, o visto de estudante neozelandês que cobre uma sequência de até três programas num único pedido, por até cinco anos. Segundo o comunicado oficial da Immigration New Zealand, parte dos estudantes que obtêm o visto pela primeira vez e vão avançar para os níveis 1 a 8 do New Zealand Qualifications and Credentials Framework passa a poder dedicar até 30 semanas ao estudo de língua inglesa antes da qualificação seguinte, contra o limite anterior de 20 semanas.\n\nA segunda alteração tem alcance mais estreito do que parece à primeira vista, e vale entender o recorte antes de fazer plano em cima dela. Ela atinge os estudantes de escola que vão migrar para o ensino superior. Para esse grupo, as condições do visto deixam de listar a área de estudo terciária e passam a registrar apenas o tipo de qualificação e a instituição, no formato \"Bachelor's degree at University of Auckland\". Na prática, quem está nessa situação pode trocar de área sem pedir um visto novo, desde que permaneça no mesmo tipo de qualificação e na mesma instituição. O visto também passa a cobrir trajetórias que levam aos níveis 1 a 4 da estrutura nacional de qualificações ou que transitam entre eles, faixa que inclui cursos de inglês, programas preparatórios e certificados vocacionais.\n\nEste conteúdo tem caráter informativo e não substitui a orientação de um profissional habilitado em imigração.",
        "cta": "Vai estudar na Nova Zelândia ou já está lá com um Pathway Student Visa? Confira o texto exato das condições registradas no seu visto no site oficial da Immigration New Zealand antes de fechar qualquer matrícula, porque o que vale para cada pessoa depende do estágio do percurso de estudo.",
        "sources": [
          {
            "label": "Immigration New Zealand · Improvements to the Pathway Student Visa to better support international students",
            "url": "https://www.immigration.govt.nz/about-us/news-centre/improvements-to-the-pathway-student-visa/"
          },
          {
            "label": "Immigration New Zealand · Pathway Student Visa information",
            "url": "https://www.immigration.govt.nz/study/study-visas/pathway-student-visa-information/"
          }
        ]
      },
      {
        "publishedAt": "2026-07-20",
        "title": "A flexibilidade nova do visto de estudante neozelandês tem uma letra miúda: a lista de instituições está fechada",
        "body": "As mudanças no Pathway Student Visa que passaram a valer em 20 de julho de 2026 ampliam a liberdade de quem já está dentro do programa, mas não ampliam a porta de entrada. A Immigration New Zealand informa no próprio site que não está aceitando novos provedores de ensino neste momento, e que não há data definida para a revisão do piloto ou para a inclusão de novas instituições. O visto só funciona com uma oferta de estudo emitida por uma instituição já credenciada, e a lista atual reúne 9 universidades, 6 politécnicos, 40 private training establishments e 118 escolas.\n\nVale marcar outro detalhe. A troca de área de estudo passou a ser possível sem novo pedido de visto para os estudantes de escola que migram para o ensino superior, mas ela vale dentro de um limite: o estudante precisa permanecer no mesmo tipo de qualificação e na mesma instituição, porque é isso que as condições do visto passam a registrar. O visto tem custo a partir de NZD 750, exige comprovação de recursos de NZD 20 mil para custos de vida a cada ano de estudo terciário, além de seguro médico e de viagem, e permite trabalhar até 25 horas semanais durante o período letivo. Nada disso garante aprovação, que segue sujeita aos requisitos de saúde, idoneidade e intenção genuína de estudo.\n\nEste conteúdo tem caráter informativo e não substitui a orientação de um profissional habilitado em imigração.",
        "cta": "Antes de escolher o curso, confirme na Immigration New Zealand se a instituição está entre as credenciadas do programa, porque uma oferta fora dessa lista não sustenta o pedido.",
        "sources": [
          {
            "label": "Immigration New Zealand · Pathway Student Visa information",
            "url": "https://www.immigration.govt.nz/study/study-visas/pathway-student-visa-information/"
          },
          {
            "label": "Immigration New Zealand · Pathway Student Visa (requisitos e custos)",
            "url": "https://www.immigration.govt.nz/visas/pathway-student-visa/"
          }
        ]
      },
    ],
    countryTab: [
      {
        "publishedAt": "2026-07-20",
        "urgency": "urgent",
        "headline": "Nova Zelândia tira a área de estudo das condições do visto de estudante e amplia o curso de inglês para 30 semanas",
        "standfirst": "Em vigor desde esta segunda-feira, a revisão do Pathway Student Visa retira a disciplina das condições do visto para quem sai da escola rumo ao ensino superior, estende o curso de inglês de 20 para 30 semanas e abre a trajetória para os níveis 1 a 4 da estrutura nacional de qualificações.",
        "body": "A Immigration New Zealand colocou em vigor em 20 de julho de 2026 um conjunto de mudanças no Pathway Student Visa, o visto que permite ao estudante internacional cursar até três programas em sequência, por até cinco anos, sem precisar protocolar um pedido novo a cada etapa. O anúncio foi publicado no mesmo dia no centro de notícias do órgão, sob o título Improvements to the Pathway Student Visa to better support international students.\n\nA alteração de maior alcance prático está na forma como as condições do visto passam a ser escritas, e o recorte dela importa mais do que a manchete sugere. Ela vale para os estudantes de escola que pretendem migrar para o ensino superior. Até agora, o documento desse grupo registrava a qualificação e a área de estudo terciária, algo como \"Bachelor of Science at University of Auckland\", o que prendia o estudante àquela disciplina específica. A partir de agora, a condição menciona apenas o tipo de qualificação e a instituição, no formato \"Bachelor's degree at University of Auckland\".\n\nO efeito é direto: quem está nessa transição pode mudar de área depois de iniciar o curso sem precisar de um novo pedido de visto de estudante, desde que permaneça no mesmo tipo de qualificação e na mesma instituição de ensino. Esses alunos continuam obrigados a indicar área, nível e instituição no momento do pedido, mas o que fica gravado no visto é apenas a qualificação terciária e o provedor de ensino, o que reduz o atrito de quem muda de ideia entre a escola e a universidade. Quem já está matriculado no ensino superior não está no alcance dessa alteração específica e deve conferir as próprias condições.\n\nO segundo ponto trata do estudo de língua inglesa. Parte dos estudantes que obtêm o Pathway Student Visa pela primeira vez e vão avançar para qualificações entre os níveis 1 e 8 do New Zealand Qualifications and Credentials Framework, a estrutura nacional de qualificações do país, passa a poder dedicar até 30 semanas ao inglês antes de começar a etapa seguinte, contra o limite anterior de 20 semanas. O visto também passou a cobrir trajetórias que levam aos níveis 1 a 4 ou que transitam entre eles, faixa que abrange cursos de idioma, programas preparatórios e certificados vocacionais.\n\nO que não mudou merece atenção igual. O visto segue restrito a quem tem oferta de estudo de instituições já credenciadas no programa, e a Immigration New Zealand declara no próprio site que não está aceitando novos provedores de ensino, sem data definida para revisar o piloto. Permanecem valendo as exigências de saúde, idoneidade, comprovação de recursos e demonstração de intenção genuína de estudo, e o cumprimento desses requisitos não garante a concessão do visto.\n\nPara quem planeja estudar na Nova Zelândia, a leitura razoável é que o país reduziu o custo burocrático de mudar de rumo justamente no ponto em que a escolha é mais frágil, a passagem da escola para a universidade, quando se decide a área aos 17 ou 18 anos. Quem já está no país com esse visto deve conferir o texto exato das próprias condições, porque as regras aplicáveis dependem da data de concessão e do estágio do percurso de estudo. Este conteúdo tem caráter informativo e não substitui a orientação de um profissional habilitado em imigração.",
        "keyFacts": [
          "As mudanças no Pathway Student Visa entraram em vigor em 20 de julho de 2026, conforme comunicado da Immigration New Zealand publicado na mesma data.",
          "Para estudantes de escola que migram para o ensino superior, as condições do visto passam a citar apenas o tipo de qualificação e a instituição, permitindo troca de área sem novo pedido de visto desde que mantidos o mesmo tipo de qualificação e a mesma instituição.",
          "O limite de estudo de língua inglesa subiu de 20 para 30 semanas para parte dos estudantes que obtêm o visto pela primeira vez e avançam para os níveis 1 a 8 do NZQCF.",
          "O visto passa a cobrir trajetórias que levam aos níveis 1 a 4 do NZQCF ou que transitam entre eles, incluindo cursos de idioma, programas preparatórios e certificados vocacionais.",
          "O programa segue restrito a instituições já credenciadas, hoje 9 universidades, 6 politécnicos, 40 private training establishments e 118 escolas, e a Immigration New Zealand informa que não está aceitando novos provedores de ensino."
        ],
        "sources": [
          {
            "label": "Immigration New Zealand · Improvements to the Pathway Student Visa to better support international students",
            "url": "https://www.immigration.govt.nz/about-us/news-centre/improvements-to-the-pathway-student-visa/"
          },
          {
            "label": "Immigration New Zealand · Pathway Student Visa information",
            "url": "https://www.immigration.govt.nz/study/study-visas/pathway-student-visa-information/"
          },
          {
            "label": "Immigration New Zealand · Pathway Student Visa (requisitos e custos)",
            "url": "https://www.immigration.govt.nz/visas/pathway-student-visa/"
          }
        ]
      },
    ],
    blog: [
      {
        "publishedAt": "2026-07-20",
        "headline": "A Nova Zelândia está montando um funil que começa no curso de inglês e aponta para a residência",
        "standfirst": "A flexibilização do visto de estudante que entrou em vigor nesta segunda-feira não é um ajuste isolado. Somada às novas rotas de residência que começam a valer em 24 de agosto e à meta oficial de dobrar a receita da educação internacional até 2034, ela revela um projeto de país com etapas encadeadas.",
        "body": "Vista sozinha, a mudança que a Immigration New Zealand colocou em vigor em 20 de julho de 2026 parece pequena. As condições do Pathway Student Visa deixam de registrar a área de estudo para os alunos que saem da escola rumo ao ensino superior, o limite de curso de inglês sobe de 20 para 30 semanas, e o visto passa a cobrir trajetórias entre os níveis 1 e 4 da estrutura nacional de qualificações. É um ajuste técnico, do tipo que costuma render meia dúzia de linhas no comunicado oficial.\n\nO significado aparece quando se olha o que veio antes e o que vem depois. Em 14 de julho de 2025, a ministra da Educação, Erica Stanford, anunciou pelo canal oficial do governo neozelandês um plano para dobrar a contribuição econômica da educação internacional, de 3,6 bilhões de dólares neozelandeses registrados em 2024 para 7,2 bilhões até 2034. O mesmo documento fixou metas de matrícula: sair de 83.400 estudantes internacionais em 2024 para 105 mil até 2027 e 119 mil até 2034. Não é uma aspiração vaga, é um número com prazo.\n\nA primeira peça desse encadeamento foi a jornada de trabalho. Em 3 de novembro de 2025, o limite de trabalho durante o período letivo subiu de 20 para 25 horas semanais para estudantes elegíveis do ensino médio e do ensino superior, e o direito foi estendido a todos os estudantes de programas de intercâmbio e Study Abroad, inclusive os de um único semestre. É a diferença entre um plano de estudo que se sustenta financeiramente e outro que não se sustenta.\n\nA peça seguinte é a que ainda não chegou. Em 24 de agosto de 2026 entram em vigor as mudanças na Skilled Migrant Category Resident Visa, a principal via de residência por qualificação profissional do país. O pacote cria duas rotas novas. A Skilled Work Experience Pathway é voltada a quem tem cinco anos ou mais de experiência diretamente relevante em ocupações de nível ANZSCO 1 a 3, incluindo dois anos na Nova Zelândia com remuneração de pelo menos 1,1 vez o salário mediano. A Trades and Technician Pathway foi desenhada para ofícios técnicos, com qualificação de nível 4 ou superior e quatro anos de experiência posterior à formação, sendo 18 meses no país com remuneração igual ou acima do salário mediano. O tempo de experiência local exigido na maioria dos casos caiu de no máximo três anos para no máximo dois.\n\nDentro desse mesmo pacote está o elo que fecha o circuito, e ele não depende de interpretação. Os pontos por bacharelado sobem de 3 para 4, o mesmo valendo para qualificações reconhecidas pelos acordos de Washington e Sydney. A Immigration New Zealand escreve que o aumento de pontos para qualificações neozelandesas de nível universitário torna mais fácil a transição de graduados para a residência, e que isso apoia o plano de crescimento da educação internacional ao reconhecer o valor das qualificações locais e incentivar estudantes internacionais a estudar no país. Ou seja, o governo declara o encadeamento em texto próprio.\n\nO desenho, portanto, tem uma lógica: entrar com um visto de estudante que tolera mudança de rumo na virada da escola para a universidade, financiar parte da estadia com 25 horas semanais de trabalho, concluir uma qualificação local que agora pontua mais, e desembocar numa rota de residência que exige menos tempo de experiência neozelandesa do que exigia. Cada etapa foi mexida separadamente, mas elas se encaixam.\n\nHá contrapesos que quem planeja a mudança precisa colocar na balança. O Pathway Student Visa continua restrito a instituições já credenciadas no programa, e a Immigration New Zealand informa que não aceita novos provedores de ensino no momento, sem data para rever isso, o que limita a escolha de escola e de curso. A troca de área, embora agora dispense novo visto para o grupo alcançado, só vale se o estudante permanecer no mesmo tipo de qualificação e na mesma instituição. E as novas rotas de residência trazem exigências duras de comprovação, entre elas a exclusão do trabalho por conta própria como prova de experiência diretamente relevante.\n\nNada disso configura garantia de residência, e a mudança de regras é uma constante nesse tipo de política. O que dá para afirmar com base nos documentos oficiais é que a Nova Zelândia parou de tratar estudante internacional como visitante de passagem e passou a tratá-lo como candidato potencial a residente, com incentivos alinhados em cada estágio. Para quem está decidindo entre destinos, essa coerência entre as etapas talvez pese mais do que qualquer um dos ajustes isolados. Este conteúdo tem finalidade informativa e não substitui a análise de um profissional habilitado em imigração.",
        "tags": [
          "Nova Zelândia",
          "Pathway Student Visa",
          "Immigration New Zealand",
          "estudante internacional",
          "Skilled Migrant Category",
          "residência",
          "NZQCF"
        ],
        "sources": [
          {
            "label": "Immigration New Zealand · Improvements to the Pathway Student Visa to better support international students",
            "url": "https://www.immigration.govt.nz/about-us/news-centre/improvements-to-the-pathway-student-visa/"
          },
          {
            "label": "Immigration New Zealand · Final details about changes to the Skilled Migrant Category Resident Visa and work to residence visas",
            "url": "https://www.immigration.govt.nz/about-us/news-centre/final-details-about-changes-to-the-skilled-migrant-category-resident-visa-and-work-to-residence-visa/"
          },
          {
            "label": "Immigration New Zealand · Changes to the Skilled Migrant Category Resident Visa announced",
            "url": "https://www.immigration.govt.nz/about-us/news-centre/changes-to-the-skilled-migrant-category-resident-visa-announced/"
          },
          {
            "label": "Immigration New Zealand · Upcoming changes to student visa work rights",
            "url": "https://www.immigration.govt.nz/about-us/news-centre/upcoming-changes-to-student-visa-work-rights/"
          },
          {
            "label": "Beehive.govt.nz · Making NZ top destination for international students (Hon Erica Stanford)",
            "url": "https://www.beehive.govt.nz/release/making-nz-top-destination-international-students"
          },
          {
            "label": "Immigration New Zealand · Pathway Student Visa information",
            "url": "https://www.immigration.govt.nz/study/study-visas/pathway-student-visa-information/"
          }
        ]
      },
    ],
  },
};

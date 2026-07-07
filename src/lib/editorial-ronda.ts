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

import type { CommunityPost, CountryArticle } from "./editorial";

export type RondaPiece = { community?: CommunityPost[]; countryTab?: CountryArticle[] };

const D = "2026-07-07"; // data desta ronda

export const RONDA_PIECES: Record<string, RondaPiece> = {
  ca: {
    community: [{
      publishedAt: D,
      title: "Express Entry abre julho com o menor corte de PNP do ano",
      body: `O IRCC realizou no dia 6 de julho o primeiro sorteio do Express Entry deste mês, voltado ao Programa de Nomeação Provincial (PNP). Foram emitidos 534 convites para candidatura, com nota de corte CRS em 708 pontos, a menor pontuação de corte registrada para sorteios de PNP em 2026.\n\nPara quem busca residência permanente pela via provincial, o dado é importante. Uma nota de corte mais baixa pode ampliar as chances de candidatos que já possuem uma nomeação provincial, já que esse aval agrega 600 pontos ao perfil no Express Entry. Vale acompanhar as próximas rodadas e confirmar os números na fonte oficial antes de tomar qualquer decisão.`,
      cta: "Confira a nota de corte oficial e avalie seu perfil no Express Entry antes da próxima rodada.",
      sources: [{ label: "CIC News", url: "https://www.cicnews.com/2026/07/first-express-entry-draw-of-july-sees-lowest-pnp-cut-off-score-this-year-0777251.html" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Austrália muda regras de visto a partir de 1º de julho",
      body: `A Austrália colocou em vigor, no dia 1º de julho de 2026, um pacote de mudanças que atinge quem planeja morar, trabalhar ou estudar no país. Segundo a VisaEnvoy, as alterações trazem taxas mais altas de solicitação, novos limites de renda para vistos qualificados e atualizações no programa Working Holiday.\n\nNa prática, isso significa que orçamentos montados no começo do ano podem já estar defasados. Quem pretende aplicar nos próximos meses precisa refazer as contas com os valores atuais e conferir se ainda cumpre os critérios de renda exigidos antes de dar entrada no processo.`,
      cta: "Confira os novos valores e limites antes de iniciar qualquer aplicação de visto para a Austrália.",
      sources: [{ label: "VisaEnvoy · Immigration News", url: "https://visaenvoy.com/australian-visa-changes-from-1-july-2026-higher-fees-new-income-thresholds-and-working-holiday-updates/" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Reino Unido publica o Projeto de Lei de Imigração e Asilo 2026",
      body: `O governo britânico apresentou ao Parlamento, em 30 de junho de 2026, o texto do Projeto de Lei de Imigração e Asilo 2026, anunciado antes no Discurso do Rei em 13 de maio. Segundo o Free Movement, é a quinta lei ligada à imigração em cinco sessões parlamentares, sinal de quanto o tema segue em movimento no Reino Unido.\n\nO projeto agora inicia sua tramitação, que costuma ser longa, então nada muda de imediato. Para quem planeja morar, trabalhar ou estudar no Reino Unido, o momento é de acompanhar o texto de perto, porque as regras podem ser ajustadas ao longo do debate no Parlamento.`,
      cta: "Acompanhe a tramitação pela fonte oficial antes de fechar qualquer plano de mudança para o Reino Unido.",
      sources: [{ label: "Free Movement", url: "https://freemovement.org.uk/whats-in-the-immigration-and-asylum-bill-2026/" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Irlanda alerta sobre filas maiores na renovação online da autorização de residência",
      body: `O Serviço de Imigração da Irlanda publicou em 30 de junho de 2026 uma atualização sobre os prazos da renovação online da autorização de residência. Segundo o órgão, o tempo entre o envio do pedido de renovação e o início do processamento está mais longo, algo que pode frustrar quem já mora, trabalha ou estuda no país e precisa manter sua permissão em dia.\n\nA Immigration Service Delivery afirma que está buscando maneiras de reduzir essas filas. Para quem vive na Irlanda, a orientação prática é planejar a renovação com antecedência e não deixar para a última hora, já que a demora no processamento pode afetar a validade da sua autorização enquanto o pedido está na fila.`,
      cta: "Programe sua renovação com folga e acompanhe o prazo oficial diretamente no site do Serviço de Imigração da Irlanda.",
      sources: [{ label: "Irish Immigration Service", url: "https://www.irishimmigration.ie/information-on-online-renewal-timelines/" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Holanda aprova lei para facilitar cooperativas de moradia",
      body: `A câmara baixa do parlamento holandês, a Tweede Kamer, aprovou nesta semana um projeto de lei que torna mais simples um grupo de moradores fundar uma cooperativa de habitação. A nova Lei de Promoção das Cooperativas de Habitação, a Wet bevordering wooncoöperaties, dá a esse modelo um lugar mais claro dentro da legislação habitacional do país, segundo a imprensa local.\n\nPara quem planeja morar na Holanda, o tema é sensível. A moradia é hoje o maior gargalo do país, com oferta apertada e preços altos. A cooperativa é um formato em que os próprios moradores se organizam para gerir onde vivem, e a medida busca abrir mais essa porta. Os detalhes finais dependem da tramitação e da fonte oficial.`,
      cta: "Acompanhe pela WiseHub como a nova lei de cooperativas pode ampliar opções de moradia na Holanda.",
      sources: [{ label: "DutchNews", url: "https://www.dutchnews.nl/2026/07/mps-back-bill-to-make-housing-co-ops-easier-to-start/" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Espanha: quer morar mais de 90 dias? O visto de longa duração é a porta de entrada",
      body: `Quem planeja viver na Espanha por mais de 90 dias, seja por trabalho, estudos, reagrupamento familiar ou aposentadoria, não pode entrar apenas como turista. Nesses casos, a legislação espanhola exige o visto de longa duração, o documento que autoriza a permanência prolongada e abre caminho para a posterior autorização de residência no país. É esse visto que separa uma visita curta de um projeto real de mudança.\n\nUm material recém-publicado por um escritório de advocacia de imigração na Espanha reforça esse ponto e detalha as diferentes finalidades do visto, do trabalho à aposentadoria. Antes de comprar passagem ou assumir compromissos, vale confirmar qual modalidade se encaixa no seu caso e reunir a documentação com antecedência, sempre conferindo os requisitos oficiais junto ao consulado espanhol.`,
      cta: "Se o seu plano é morar na Espanha por mais de três meses, comece já a mapear qual visto de longa duração cabe no seu caso.",
      sources: [{ label: "Immigration Lawyers Spain (fonte não oficial, a confirmar)", url: "https://www.immigrationspain.es/en/long-stay-visa-spain/" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Justiça italiana abre brechas no Decreto Tajani para quem já buscava a cidadania",
      body: `Duas decisões recentes de tribunais na Itália acenderam a esperança de quem tem processo de cidadania italiana por descendência em andamento. Em Brescia, o tribunal reconheceu o direito por linha materna mesmo já sob a nova lei, e em Palermo os juízes aplicaram as regras antigas a um pedido protocolado após o prazo. Nos dois casos, pesou a prova de que a pessoa já tentava obter a cidadania antes da mudança, principalmente registros de tentativas de agendamento consular.\n\nAs informações vêm do portal de comunidade Italianismo e ainda precisam ser confirmadas, porque são sentenças de primeira instância que podem ser revistas em instâncias superiores. Cada caso depende de provas próprias e não cria automaticamente um direito para todo mundo. Se você começou o seu processo antes do Decreto Tajani, guarde tudo que comprove isso e procure orientação jurídica antes de decidir os próximos passos.`,
      cta: "Guardou os comprovantes de agendamento consular feitos antes do decreto? Eles podem ser decisivos, confirme com um advogado antes de agir.",
      sources: [{ label: "Italianismo · Cidadania (fonte de comunidade, a confirmar)", url: "https://italianismo.com.br/tribunal-de-brescia-reconhece-cidadania-por-linha-materna-apos-o-decreto-tajani/" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Novo controle de fronteira da Europa afeta a entrada na Alemanha",
      body: `Quem planeja chegar à Alemanha neste verão precisa ficar atento ao EES, o Sistema de Entrada e Saída da União Europeia. Ele registra os dados do passaporte e informações biométricas de todo viajante de fora da UE já na primeira entrada, antes do controle de passaporte tradicional. Para brasileiros e outros cidadãos não europeus, isso significa uma etapa nova nos aeroportos alemães e das demais fronteiras Schengen.\n\nSegundo a reportagem do IamExpat, aeroportos e companhias aéreas pediram à UE que suspenda o sistema durante os meses movimentados de julho e agosto, alegando filas longas e atrasos no processamento das chegadas. O sistema entrou em operação parcial em outubro de 2025 e teve implementação plena em abril de 2026. Antes de viajar, confirme os procedimentos com fontes oficiais e chegue ao aeroporto com boa folga de tempo.`,
      cta: "Se você vai entrar na Alemanha em breve, reserve tempo extra no aeroporto e acompanhe as orientações oficiais sobre o EES.",
      sources: [{ label: "IamExpat in Germany", url: "https://www.iamexpat.de/expat-info/germany-news/eu-must-take-stock-reality-and-suspend-ees-over-summer-say-airlines" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "França debate projeto que restringe casamento de estrangeiros sem documento",
      body: `A Assembleia Nacional francesa voltou a discutir, em 25 de junho, um projeto de lei que pretende proibir o casamento de estrangeiros em situação irregular no país. A proposta, apresentada pelo partido UDR de Eric Ciotti, conta com o apoio do governo e responde a pedidos de prefeitos que dizem se recusar a celebrar uniões que consideram fraudulentas, sem real intenção matrimonial. Para quem planeja construir vida na França, é um tema que merece atenção, porque toca diretamente na relação entre estado civil e situação migratória.\n\nÉ importante deixar claro que se trata, por enquanto, de um projeto em tramitação, e não de uma lei em vigor. Nada muda de imediato, mas o simples avanço da discussão sinaliza uma tendência de endurecimento. Se você tem planos que envolvem casamento na França ligados à regularização, vale acompanhar de perto o desfecho no Parlamento e conferir sempre a fonte oficial antes de tomar qualquer decisão.`,
      cta: "Acompanhe a tramitação pela imprensa francesa de referência e confirme cada passo com um advogado de imigração antes de agir.",
      sources: [{ label: "Le Monde · Immigration et diversité", url: "https://www.lemonde.fr/societe/article/2026/06/25/l-interdiction-des-mariages-d-etrangers-sans-papiers-de-retour-a-l-assemblee-nationale-avec-le-soutien-du-gouvernement_6713343_3224.html" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Áustria: 2 em cada 3 estrangeiros querem a cidadania, mas as regras seguem apertadas",
      body: `Uma nova pesquisa citada pela imprensa austríaca indica que mais de dois terços dos residentes estrangeiros que vivem na Áustria gostariam de se naturalizar. O interesse é alto, mas o caminho continua exigente, com barreiras legais que a própria reportagem destaca como rígidas.\n\nNa prática, a Áustria mantém um dos regimes de cidadania mais restritivos da Europa, com longo tempo de residência, comprovação de renda, conhecimento de idioma e, na regra geral, exigência de abrir mão da nacionalidade anterior. Para quem planeja construir vida no país, o recado é claro, o desejo de virar cidadão é comum, mas o processo pede planejamento desde o primeiro dia de residência.`,
      cta: "Se o seu plano é morar na Áustria de forma definitiva, comece a organizar residência, idioma e documentação com antecedência e acompanhe as fontes oficiais.",
      sources: [{ label: "The Local Austria", url: "https://www.thelocal.at/20260626/majority-of-foreign-residents-in-austria-want-citizenship-survey-finds" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Estrangeiros qualificados amam a Suécia, mas temem a insegurança das regras de residência",
      body: `Uma nova pesquisa com 860 estrangeiros que vivem na Suécia mostra um retrato de dois lados. A maioria está satisfeita com a vida no país, o padrão de vida, a região onde mora e os serviços de creche, e metade diz que muito provavelmente ainda estará na Suécia daqui a três anos. O levantamento foi feito pelo instituto Infostat em parceria com o The Local e a Câmara de Comércio de Estocolmo.\n\nO alerta vem da outra metade. Entre quem está inseguro sobre o futuro no país, mais da metade aponta a incerteza sobre autorizações de residência e sobre a política migratória como o principal motivo. O pano de fundo é o endurecimento recente das regras, com aumento do piso salarial exigido para autorização de trabalho e prazo mais longo para pedir cidadania. Boa parte dos entrevistados atua em áreas de alta qualificação, como TI, pesquisa e engenharia.`,
      cta: "Se a Suécia está no seu radar, acompanhe de perto as regras de autorização de trabalho e residência antes de planejar a mudança.",
      sources: [{ label: "The Local Sweden", url: "https://www.thelocal.se/20260701/poll-foreign-residents-love-sweden-but-are-afraid-theyll-be-forced-out" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Bruxelas lista 103 profissões em falta: onde estão as vagas para quem quer trabalhar na Bélgica",
      body: `O serviço de emprego de Bruxelas, o Actiris, publicou a nova lista de profissões em falta, ocupações para as quais os empregadores têm dificuldade de encontrar mão de obra. São 103 no total, sendo 81 consideradas carências estruturais, ou seja, de longo prazo. Segundo o Actiris, os setores de cuidados (saúde e assistência) e da construção estão entre os que mais sofrem com escassez de pessoal, e parte das vagas fica em aberto por falta de qualificação, de idioma ou de experiência compatível.\n\nNove funções entraram na lista neste ano e doze saíram. Entre as novidades estão confeiteiro, chef de cozinha industrial, gestor de operações de TI, assistente jurídico, técnico de manutenção de eletrônica industrial, mecânico de veículos comerciais, motorista de caminhão e habilitados na categoria C. Listas de profissões em falta costumam pesar a favor de quem busca autorização de trabalho, mas as regras exatas de visto e permit não foram detalhadas nesta publicação, então confirme sempre no canal oficial antes de decidir.`,
      cta: "Veja a lista completa das profissões em falta em Bruxelas na fonte oficial antes de planejar sua candidatura.",
      sources: [{ label: "The Bulletin (Bruxelas)", url: "https://www.thebulletin.be/pastry-chef-roofer-100-jobs-brussels-has-difficulty-filling" }],
    }],
    countryTab: [{
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
    community: [{
      publishedAt: D,
      title: "Tchéquia estuda regra que pode obrigar familiares de tchecos a esperar residência fora do país",
      body: `Um novo projeto de lei em discussão na Tchéquia pode mudar o caminho de quem pede residência como familiar de um cidadão tcheco. Pela regra atual, um estrangeiro de fora da União Europeia casado com tcheco ou com filho tcheco pode apresentar o pedido de residência por reunião familiar de dentro do país, mesmo que outra autorização, como o cartão de funcionário, expire nesse meio-tempo.\n\nSegundo o portal Expats.cz, o projeto retiraria essa possibilidade para muitos solicitantes, que passariam a ter de deixar a Tchéquia e aguardar a decisão no exterior, um processo que pode levar de três a seis meses. A proposta ainda é um projeto de lei e não está em vigor, então vale acompanhar a tramitação antes de tomar qualquer decisão sobre mudança ou renovação de status.`,
      cta: "Se você planeja pedir residência na Tchéquia por vínculo familiar, acompanhe a tramitação desse projeto pela fonte oficial antes de agir.",
      sources: [{ label: "Expats.cz (não oficial, a confirmar)", url: "https://www.expats.cz/czech-news/article/czech-mixed-families-could-face-separation-under-new-immigration-bill" }],
    }],
    countryTab: [{
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
};

// GERADO pela rodada da equipe de agentes (labor-market-5) em 2026-06-22.
// NÃO editar à mão: regenerado a cada rodada semanal de pesquisa.
import type { LaborMarketMap } from "./labor-market";

export const LABOR_MARKET: LaborMarketMap = {
  "ca": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho canadense vive um momento de dois andares em 2026. De um lado, o pais ainda tinha centenas de milhares de vagas em aberto e enfrenta escassez cronica de mao de obra em saude, oficios qualificados (trades) e construcao, com a demanda por trabalhadores projetada para superar a oferta na proxima decada. De outro, a contratacao esfriou de forma generalizada: o numero de vagas caiu para 492.500 no terceiro trimestre de 2025 (menor patamar em anos), o desemprego subiu para cerca de 7,1% no segundo semestre de 2025, e o salario medio ofertado desacelerou para C$28,45/hora. O recado para o imigrante e claro: as portas estao escancaradas em saude, oficios, transporte e algumas areas de tecnologia de ponta, mas fechadas para vagas de entrada em escritorio (white-collar juniores) e para boa parte do setor de tech generalista.\n\nPara 2026 o Canada reorientou a propria imigracao economica em torno dessa realidade. O Express Entry passou a fazer sorteios por categoria de ocupacao (saude e servicos sociais, oficios, STEM, educacao, transporte, alem das novas categorias de medicos, pesquisadores e gestores senior com experiencia canadense) e o Programa de Indicacao Provincial (PNP) saltou 66%, de 55 mil para 91.500 vagas, dando as provincias muito mais poder de recrutar quem elas precisam. Quem tem profissao regulamentada em alta (enfermagem, medicina, eletricista, encanador) e disposicao de validar o diploma encontra o melhor terreno; quem busca emprego corporativo generico ou de tecnologia sem especializacao vai sentir o aperto.",
    "hotSectors": [
      "Saude e servicos sociais (enfermeiros, medicos, cuidadores, terapeutas)",
      "Oficios qualificados e construcao (eletricistas, encanadores, soldadores, gerentes de obra)",
      "Transporte e logistica (caminhoneiros, operadores, coordenadores de supply chain)",
      "Tecnologia de ponta especializada (IA, dados, engenharia de software senior via Global Talent Stream)",
      "Educacao (professores, educacao infantil)",
      "Energia limpa e mineracao (especialmente Alberta, Saskatchewan)",
      "Agricultura e industrias sazonais (Atlantico, provincias do interior)"
    ],
    "coolingSectors": [
      "Tecnologia generalista e startups (demissoes na Shopify, Hootsuite; politica AI-first reduzindo contratacao)",
      "Empregos de entrada de escritorio / white-collar junior (recem-formados e primeiro emprego mais afetados)",
      "Varejo (forte queda de vagas em 2025)",
      "Manufatura, producao automotiva e processamento de aluminio (expostos a guerra comercial com os EUA)",
      "Educacao, direito e servicos sociais (maior queda trimestral de vagas no 3o tri 2025)",
      "Agricultura e agroalimentar como rota de imigracao (categoria removida do Express Entry em 2026)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro registrado (Registered Nurse)",
        "note": "Escassez nacional cronica; categoria prioritaria de saude no Express Entry e em quase todos os PNPs. Profissao regulamentada (registro provincial obrigatorio)."
      },
      {
        "role": "Medico / Physician",
        "note": "Nova categoria dedicada no Express Entry desde 08/12/2025; primeiro sorteio teve o menor CRS de 2026 (169). Foco em medicos com experiencia previa no Canada."
      },
      {
        "role": "Eletricista",
        "note": "Oficio certificado com escassez nacional e poucos candidatos por vaga. Categoria de trades no Express Entry; regulamentado (Red Seal / certificacao provincial)."
      },
      {
        "role": "Encanador / Plumber",
        "note": "Demanda persistente em construcao residencial e comercial. Categoria de trades."
      },
      {
        "role": "Soldador / Welder",
        "note": "Alta em Alberta e BC; salario varia muito por provincia."
      },
      {
        "role": "Caminhoneiro / motorista de transporte",
        "note": "Categoria de transporte revisada para 2026; estimativa de mais de 40.400 vagas em trucking/logistica ate 2030."
      },
      {
        "role": "Engenheiro / desenvolvedor de software senior",
        "note": "Via Global Talent Stream (processamento de 2 semanas) para perfis de IA, dados e engenharia. Ocupacao NAO regulamentada. Mercado tech junior, porem, esfriou."
      },
      {
        "role": "Gerente senior (NOC 00012-00015)",
        "note": "Nova categoria 2026: financas, comunicacoes, saude, educacao, construcao, transporte. Exige experiencia canadense."
      },
      {
        "role": "Pesquisador / researcher",
        "note": "Nova categoria 2026 focada em inovacao, ciencia e pesquisa avancada, com experiencia canadense."
      },
      {
        "role": "Educador infantil (ECE) e professor",
        "note": "Categoria de educacao no Express Entry e foco recorrente de PNPs (Ontario, BC)."
      },
      {
        "role": "Analista financeiro / contador",
        "note": "Demanda em Toronto e Calgary, segundo Job Bank."
      }
    ],
    "byQualification": [
      {
        "area": "Enfermagem / Saude",
        "advice": "Melhor cenario do pais. Escassez cronica e categoria prioritaria no Express Entry (saude e servicos sociais, 37 ocupacoes) e em praticamente todos os PNPs. ACAO CRITICA: enfermagem e profissao REGULAMENTADA. Antes de trabalhar voce precisa de registro no orgao provincial (ex.: College of Nurses of Ontario) e da avaliacao via NNAS (National Nursing Assessment Service). Comece o reconhecimento de credenciais o quanto antes, pois leva meses."
      },
      {
        "area": "Medicina",
        "advice": "Demanda altissima e categoria propria no Express Entry desde dez/2025, mas e a profissao mais regulamentada do Canada. Passa pelo Medical Council of Canada (exames MCCQE), licenciamento provincial e quase sempre residencia/experiencia canadense. O foco do programa e medico que ja praticou no Canada. Planeje rota longa; considere comecar por provincia com escassez extrema (rural/Atlantico)."
      },
      {
        "area": "Engenharia (civil, eletrica, mecanica)",
        "advice": "Engenheiro e profissao regulamentada: precisa do titulo P.Eng junto a ordem provincial (ex.: Professional Engineers Ontario). Boa noticia para STEM no Express Entry. Atencao: engenharia de software/IA NAO e regulamentada, voce pode atuar assim que o work permit sair, sem exame de ordem."
      },
      {
        "area": "Tecnologia / TI / dados / IA",
        "advice": "Se for senior e especializado, mire o Global Talent Stream (LMIA e work permit em ~2 semanas, Categoria B com lista de ocupacoes tech). Ocupacao nao regulamentada, sem exame. POReM o mercado tech generalista e junior esfriou muito (demissoes, AI-first). Especializacao e portfolio fazem a diferenca; nao conte com vaga de entrada facil."
      },
      {
        "area": "Oficios qualificados (eletricista, encanador, soldador, HVAC)",
        "advice": "Excelente. Categoria de trades no Express Entry e foco de PNPs (BC, Alberta, Saskatchewan, Atlantico). Maioria e regulamentada via certificacao provincial / Red Seal, e pode exigir exame de qualificacao e horas de aprendizado reconhecidas. Alberta e BC pagam mais; Atlantico paga menos mas tem escassez aguda."
      },
      {
        "area": "Educacao (professor, educador infantil)",
        "advice": "Categoria de educacao no Express Entry e recrutamento ativo de ECE em Ontario e BC. Ensino e regulamentado: professores precisam de certificacao provincial (ex.: Ontario College of Teachers). Educacao infantil tem barreira menor e forte demanda."
      },
      {
        "area": "Administracao / negocios / white-collar generico",
        "advice": "Setor em desaceleracao, especialmente para juniores e recem-formados (AI reduzindo vagas de entrada). Sem experiencia canadense ou especializacao, a busca e dura. Caminho mais forte: chegar a nivel de gestao senior (nova categoria de senior managers exige experiencia canadense) ou migrar para uma area em alta."
      },
      {
        "area": "Empreendedor / fundador de startup",
        "advice": "O Start-up Visa esta PAUSADO para novos pedidos desde 01/01/2026 (quem tem carta de apoio de 2025 aplica ate 30/06/2026). IRCC promete detalhes de um novo piloto de empreendedorismo em 2026. Por ora, rotas viaveis: PNPs de empreendedor/investidor provinciais, ou entrar via work permit e construir negocio. Acompanhe o anuncio do novo piloto federal."
      }
    ],
    "salaries": [
      {
        "role": "Enfermeiro registrado (Registered Nurse)",
        "range": "C$30,00 (baixo) / C$43,27 (mediana) / C$54,37 (alto) por hora",
        "source": {
          "label": "Job Bank - Registered Nurse, atualizado 19/11/2025 (ref. 2023-2024)",
          "url": "https://www.jobbank.gc.ca/marketreport/wages-occupation/993/ca",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software",
        "range": "C$30,00 (baixo) / C$48,08 (mediana) / C$76,92 (alto) por hora",
        "source": {
          "label": "Job Bank - Software Developer, atualizado 19/11/2025 (ref. 2023-2024)",
          "url": "https://www.jobbank.gc.ca/marketreport/wages-occupation/22548/ca",
          "official": true
        }
      },
      {
        "role": "Eletricista",
        "range": "C$20,00 (baixo) / C$35,00 (mediana) / C$48,00 (alto) por hora",
        "source": {
          "label": "Job Bank - Electrician, atualizado 19/11/2025 (ref. 2023-2024)",
          "url": "https://www.jobbank.gc.ca/marketreport/wages-occupation/20684/ca",
          "official": true
        }
      },
      {
        "role": "Media geral de salario ofertado (todas as ocupacoes)",
        "range": "C$28,45/hora (3o tri 2025; +3,3% no ano)",
        "source": {
          "label": "Statistics Canada - Vagas de emprego, 3o tri 2025",
          "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/251216/dq251216a-eng.htm",
          "official": true
        }
      },
      {
        "role": "Vaga que exige bacharelado vs. ensino medio",
        "range": "C$44,00/hora (bacharelado) vs. C$21,85/hora (ensino medio)",
        "source": {
          "label": "Statistics Canada - Vagas de emprego, 3o tri 2025",
          "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/251216/dq251216a-eng.htm",
          "official": true
        }
      }
    ],
    "foreignerRules": "Para trabalhar no Canada o estrangeiro geralmente precisa de uma work permit. Existem dois grandes universos: (1) permits que exigem LMIA (Labour Market Impact Assessment), em que o empregador prova que nao encontrou canadense para a vaga, dentro do Temporary Foreign Worker Program; e (2) o International Mobility Program, sem LMIA. Para perfis de tecnologia e pesquisa de alta qualificacao existe o Global Talent Stream / Global Skills Strategy, com meta de processamento de cerca de 2 semanas tanto para a LMIA (10-12 dias uteis) quanto para a work permit, contra 48-60 dias uteis no fluxo padrao. Para residencia permanente, o Express Entry passou a priorizar sorteios por categoria de ocupacao e o PNP cresceu 66% (91.500 vagas em 2026), dando as provincias mais poder de selecionar conforme a demanda local. Ponto-chave para 2026: todas as categorias do Express Entry agora exigem no minimo 12 meses de experiencia qualificada (era 6 meses), dentro dos ultimos 3 anos, nao necessariamente continua. PROFISSOES REGULAMENTADAS sao o maior gargalo: enfermagem, medicina, engenharia (P.Eng), ensino, direito e varios oficios exigem registro/licenca em orgao provincial e, muitas vezes, exames e avaliacao de credenciais (NNAS para enfermagem, Medical Council of Canada para medicos, ordem provincial de engenheiros). Ja IA, ciencia de dados e engenharia de software NAO sao regulamentadas: pode-se comecar a atuar assim que a permit sair, sem exame de ordem. Regra de ouro: confirme se sua profissao e regulamentada na provincia de destino e inicie o reconhecimento de diploma cedo, porque leva meses.",
    "opportunityWindows": [
      "PNP cresceu 66% em 2026 (de 55.000 para 91.500 vagas): sorteios mais frequentes, elegibilidade ocupacional mais ampla e notas de corte mais baixas em varias provincias",
      "Express Entry por categoria derruba o CRS: o menor corte de 2026 foi 169 (categoria de medicos, 19/02/2026); senior managers tiveram primeiro sorteio com corte 429",
      "Categoria de medicos adicionada em 08/12/2025: janela direta para medicos com experiencia previa no Canada",
      "Global Talent Stream: LMIA + work permit em ~2 semanas para tech/IA/pesquisa de alta qualificacao (Categoria B)",
      "Sorteio de lingua francesa: 5.500 ITAs com corte de apenas 397; falar frances e um trunfo enorme",
      "Escassez cronica e estrutural em saude, oficios e construcao, com demanda projetada superando a oferta pela proxima decada",
      "Atlantico, Saskatchewan e Alberta com escassez aguda e recrutamento ativo em saude, oficios, agricultura e energia",
      "Novo piloto federal de empreendedorismo prometido pelo IRCC para 2026 (ficar atento ao anuncio, ja que o Start-up Visa esta pausado)"
    ],
    "jobBoards": [
      {
        "label": "Job Bank (Governo do Canada) - busca de vagas, salarios e outlook",
        "url": "https://www.jobbank.gc.ca",
        "official": true
      },
      {
        "label": "Job Bank - Explorar mercado / outlook ocupacional",
        "url": "https://www.jobbank.gc.ca/trend-analysis",
        "official": true
      },
      {
        "label": "Job Bank - Buscar salarios por ocupacao e regiao",
        "url": "https://www.jobbank.gc.ca/trend-analysis/search-wages",
        "official": true
      },
      {
        "label": "Express Entry - Sorteios por categoria de ocupacao (IRCC)",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html",
        "official": true
      },
      {
        "label": "Global Skills Strategy - processamento rapido para trabalhadores (IRCC)",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/global-skills-strategy.html",
        "official": true
      },
      {
        "label": "WorkBC - vagas e outlook da Columbia Britanica",
        "url": "https://www.workbc.ca/research-labour-market/bc-labour-market-outlook",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Canada.ca - Canada prioriza talentos no Express Entry 2026 (anuncio oficial)",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/canada-prioritizes-top-talent-in-2026-immigration-express-entry-categories.html",
        "official": true
      },
      {
        "label": "IRCC - Express Entry: sorteios por categoria de ocupacao",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html",
        "official": true
      },
      {
        "label": "Statistics Canada - Vagas de emprego, 3o trimestre 2025",
        "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/251216/dq251216a-eng.htm",
        "official": true
      },
      {
        "label": "Job Bank - Registered Nurse (salarios)",
        "url": "https://www.jobbank.gc.ca/marketreport/wages-occupation/993/ca",
        "official": true
      },
      {
        "label": "Job Bank - Software Developer (salarios)",
        "url": "https://www.jobbank.gc.ca/marketreport/wages-occupation/22548/ca",
        "official": true
      },
      {
        "label": "Job Bank - Electrician (salarios)",
        "url": "https://www.jobbank.gc.ca/marketreport/wages-occupation/20684/ca",
        "official": true
      },
      {
        "label": "ESDC - Requisitos do Global Talent Stream",
        "url": "https://www.canada.ca/en/employment-social-development/services/foreign-workers/global-talent/requirements.html",
        "official": true
      },
      {
        "label": "IRCC - Programa Start-up Visa (status e elegibilidade)",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa.html",
        "official": true
      },
      {
        "label": "CIC News - Tres novas categorias do Express Entry 2026",
        "url": "https://www.cicnews.com/2026/02/three-new-express-entry-categories-0271729.html",
        "official": false
      },
      {
        "label": "The Hub - Vagas no Canada caem para minima de 8 anos (tech e varejo)",
        "url": "https://thehub.ca/2025/10/01/job-vacancies-canada-plummet-eight-year-low-tech-retail-hit-hard-unemployment/",
        "official": false
      },
      {
        "label": "Macleans - White-collar workers nao estao bem (desaceleracao de escritorio)",
        "url": "https://macleans.ca/work/white-collar-workers-are-not-okay/",
        "official": false
      },
      {
        "label": "Can X Global - PNP Canada 2026: 91.500 vagas e expansao de 66%",
        "url": "https://canxglobal.com/pnp-canada-2026-provincial-nominee-program/",
        "official": false
      }
    ]
  },
  "au": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho australiano em 2026 vive um momento de transicao: depois de anos de aperto recorde, as pressoes comecaram a afrouxar, mas a economia segue criando vagas em ritmo mais lento. A taxa de desemprego subiu para 4,5% em abril de 2026 (de 4,3% em marco), com cerca de 692,5 mil desempregados, e o crescimento anual do emprego desacelerou para 0,9% no ano ate abril, contra a media de 1,9% dos tres anos anteriores (ABS). O numero de anuncios de vaga ainda esta cerca de 25% acima da media de 2019, mas caiu 5% em fevereiro e segue recuando, sinal de que empregadores estao mais cautelosos. Pela Lista de Ocupacoes em Escassez 2025 (Jobs and Skills Australia), 29% das 1.022 ocupacoes avaliadas estao em falta, ante 33% em 2024 e 36% em 2023, queda explicada por mais candidatos qualificados e demanda mais fraca.\n\nMesmo com o alivio geral, a escassez se concentra exatamente onde o imigrante qualificado encontra porta de entrada: quase metade das profissoes tecnicas e de oficio (trades) e duas em cada cinco profissoes de nivel superior seguem em falta, sobretudo em saude, educacao e construcao. Tecnicos e trabalhadores de oficio respondem por 51% de toda a escassez persistente. Em paralelo, ocupacoes de colarinho branco mais expostas a IA, como servicos financeiros, juridicos, administrativos e parte de TI, esfriaram, e setores como varejo, hotelaria e industria perderam folego. A leitura para quem quer trabalhar ou empreender la: as melhores chances estao em saude, cuidados (aged care e deficiencia), construcao/engenharia, energia limpa e educacao, com forte vantagem para quem aceita regioes fora das grandes capitais.",
    "hotSectors": [
      "Saude e assistencia social (enfermagem, medicina, terapias) - lidera a lista de escassez",
      "Cuidados a idosos (aged care) e a pessoas com deficiencia - nova stream Essential Skills de visto",
      "Construcao e habitacao - meta nacional de moradias e infraestrutura",
      "Engenharia (civil, mineracao, energia renovavel) - 28 ocupacoes em demanda",
      "Energia limpa / net zero e mineracao de minerais criticos",
      "Educacao (professores de educacao infantil, ensino fundamental e educacao especial)",
      "TI especializada (ciberseguranca, engenharia de software, dados) - projecao de +58 mil vagas ate 2028",
      "Oficios qualificados / trades (eletricistas, encanadores, soldadores, mecanicos) - 51% da escassez persistente",
      "Agricultura e manufatura avancada (prioridade de nomeacao estadual)"
    ],
    "coolingSectors": [
      "Varejo",
      "Hotelaria e servicos de alimentacao",
      "Industria / manufatura tradicional",
      "Servicos administrativos e clericais gerais (alta competicao)",
      "Servicos financeiros e de seguros (exposicao a automacao/IA)",
      "Servicos profissionais, cientificos e tecnicos de escritorio (contratacao desacelerando por IA)",
      "Midia e informacao",
      "Administracao publica e setores nao-mercado (restricao fiscal de governos)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) registrado(a) (Registered Nurse)",
        "note": "Grupo mais subofertado do pais segundo o Labour Supply Index; exige registro na AHPRA/ANMAC"
      },
      {
        "role": "Clinico geral (GP) e medicos residentes",
        "note": "Demanda alta puxada pelo envelhecimento populacional"
      },
      {
        "role": "Profissionais de cuidado a idosos e a pessoas com deficiencia (aged care / disability support)",
        "note": "Cobertos pela nova stream Essential Skills do visto Skills in Demand"
      },
      {
        "role": "Eletricista",
        "note": "Oficio regulamentado, exige licenca estadual; forte escassez"
      },
      {
        "role": "Encanador, soldador, carpinteiro e mecanicos",
        "note": "Trades concentram 51% da escassez persistente"
      },
      {
        "role": "Engenheiro civil, de minas e de energia renovavel",
        "note": "Engenharia tem 28 ocupacoes em demanda alinhadas a infraestrutura"
      },
      {
        "role": "Engenheiro de software, especialista em ciberseguranca e cientista de dados",
        "note": "Alvo de programas de nomeacao estadual de talento tech"
      },
      {
        "role": "Professor de educacao infantil, ensino fundamental e educacao especial",
        "note": "Escassez persistente no setor educacional"
      },
      {
        "role": "Operadores de maquinas (machinery operation)",
        "note": "Entre as 29 ocupacoes recem-adicionadas a lista de escassez em 2025"
      }
    ],
    "byQualification": [
      {
        "area": "Enfermagem / formacao em saude (enfermeiro)",
        "advice": "Setor numero 1 em escassez. O caminho obrigatorio passa por registro na AHPRA (orgao regulador da saude) e avaliacao de competencias pela ANMAC; ha uma Modified Skills Assessment para enfermeiros migrantes. Vale tanto nas capitais quanto, com salario e demanda ainda maiores, em areas regionais (visto 491 da +15 pontos). Registered Nurse e o grupo mais subofertado do pais."
      },
      {
        "area": "Medicina (clinico geral / especialista)",
        "advice": "Demanda altissima, sobretudo em regioes rurais e remotas, com remuneracao entre as maiores do mercado. Exige registro na AHPRA e reconhecimento via Australian Medical Council/colegios de especialidade. GP em tempo integral chega a faixa de AUD 345 mil/ano."
      },
      {
        "area": "Engenharia (civil, mineracao, energia, software)",
        "advice": "Mire infraestrutura, energia limpa e mineracao de minerais criticos. Avaliacao de competencias pela Engineers Australia (ou ACS, para TI). Engenharia e TI sao prioridade tanto na lista federal quanto nas nomeacoes estaduais (NSW, QLD, VIC) em ICT/ciberseguranca e net zero."
      },
      {
        "area": "TI e tecnologia",
        "advice": "Ciberseguranca, engenharia de software e dados seguem aquecidos (+58 mil vagas projetadas ate 2028), mas TI de escritorio mais generica esfriou com a IA. Skills assessment via ACS (Australian Computer Society). Programas estaduais de talento tech sao a melhor porta. Salario senior facil acima de AUD 150 mil."
      },
      {
        "area": "Oficios qualificados / trades (eletricista, encanador, soldador, carpinteiro)",
        "advice": "O maior bloco de escassez do pais (51% da escassez persistente esta em trades). Quase sempre regulamentados: exigem licenca/registro estadual alem da avaliacao de competencias (ex.: TRA - Trades Recognition Australia). Otimo encaixe no visto 491 regional, competitivo ja com 65 pontos."
      },
      {
        "area": "Educacao (professores)",
        "advice": "Faltam professores de educacao infantil, ensino fundamental e educacao especial. Profissao regulamentada: exige registro no orgao docente do estado e avaliacao pela AITSL. Muito presente nas listas de nomeacao estadual."
      },
      {
        "area": "Cuidado a idosos / pessoas com deficiencia",
        "advice": "Demanda estrutural pelo envelhecimento. Salarios menores, mas agora com porta de visto propria (stream Essential Skills do Skills in Demand), pensada para ocupacoes de menor remuneracao em setores de escassez critica. Bom ponto de entrada para quem ainda nao tem alta pontuacao."
      },
      {
        "area": "Administracao, financas, midia e areas de colarinho branco generico",
        "advice": "Cautela. Sao os setores que mais esfriaram, com forte competicao e exposicao a automacao/IA. Vale especializar (ex.: secretaria juridica, recepcao medica, administrador financeiro sofrem menos pressao) ou redirecionar para um setor em alta."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio nacional (full-time, AWOTE adulto)",
        "range": "AUD 2.051,10/semana (aprox. AUD 106.700/ano), nov/2025",
        "source": {
          "label": "ABS - Average Weekly Earnings, nov/2025",
          "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/latest-release",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "AUD 24,95/h ou AUD 948/semana (desde 1 jul 2025); sobe para AUD 26,44/h ou AUD 1.004,90/semana em 1 jul 2026",
        "source": {
          "label": "Fair Work Ombudsman - Annual Wage Review",
          "url": "https://www.fairwork.gov.au/about-us/workplace-laws/annual-wage-review/annual-wage-review-2026",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) registrado(a)",
        "range": "AUD 83.000 a 103.000+/ano (medio ~AUD 82.500-83.000)",
        "source": {
          "label": "SEEK - Registered Nurse salary",
          "url": "https://au.seek.com/career-advice/role/registered-nurse/salary",
          "official": true
        }
      },
      {
        "role": "Clinico geral (GP, tempo integral)",
        "range": "AUD 345.000 a 390.000/ano (8+ sessoes/semana)",
        "source": {
          "label": "SEEK - General Practitioner salary",
          "url": "https://au.seek.com/career-advice/role/general-practitioner/salary",
          "official": true
        }
      },
      {
        "role": "Eletricista",
        "range": "AUD 79.000 a 110.000/ano (medio ~AUD 100.800; AUD 48-52/h)",
        "source": {
          "label": "SEEK - Electrician salary",
          "url": "https://au.seek.com/career-advice/role/electrician/salary",
          "official": true
        }
      },
      {
        "role": "Carpinteiro",
        "range": "AUD 62.000 a 100.000/ano (medio ~AUD 88.000; AUD 30-48/h)",
        "source": {
          "label": "PayScale - Carpenter hourly pay Australia",
          "url": "https://www.payscale.com/research/AU/Job=Carpenter/Hourly_Rate",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software",
        "range": "AUD 105.000 a 130.000/ano; senior AUD 150.000-200.000+",
        "source": {
          "label": "SEEK - Software Engineer salary",
          "url": "https://au.seek.com/career-advice/role/software-engineer/salary",
          "official": true
        }
      }
    ],
    "foreignerRules": "Para trabalhar legalmente, o estrangeiro precisa de um visto com direito a trabalho. As principais portas em 2026: (1) Skills in Demand visa (subclasse 482), que substituiu o antigo TSS e e patrocinado por empregador, com tres streams por salario - Specialist Skills (renda minima AUD 141.210, subindo para AUD 146.717 em 1 jul 2026), Core Skills (limite CSIT de AUD 76.515, subindo para AUD 79.499) e Essential Skills (ocupacoes de menor remuneracao em setores de escassez critica, como aged care); (2) vistos de migracao qualificada por pontos - 189 (independente), 190 (nomeado por estado, +5 pontos) e 491 (regional, +15 pontos). O 482 usa a Core Skills Occupation List (CSOL), lista unica com 456 ocupacoes. Em todos os casos e obrigatorio: passar por avaliacao de competencias (skills assessment) feita pela autoridade do seu setor (ex.: ANMAC para enfermagem, Engineers Australia para engenharia, ACS para TI, VETASSESS/TRA para varias profissoes e oficios), comprovar ingles (testes valem 3 anos; ingles superior, tipo IELTS 8, pesa muito), e o salario deve atender ao maior valor entre o limite da stream e a taxa de mercado da funcao/regiao (AMSR), com cruzamento trimestral de folha entre ATO e Home Affairs. A nota minima do pool de pontos e 65, mas convites reais costumam exigir 85-95+ no 189 e 75+ no 190. Profissoes regulamentadas tem trava extra de REGISTRO/LICENCA, alem do skills assessment: saude (enfermeiros, medicos e mais 15 profissoes) precisam de registro na AHPRA antes de exercer; eletricistas, encanadores e varios oficios precisam de licenca estadual; professores precisam de registro no orgao docente do estado. Para empreender, ha vistos de negocios/investimento (Business Innovation and Investment), embora o programa esteja mais restrito; muitos imigrantes abrem empresa apos obter residencia.",
    "opportunityWindows": [
      "Lista de Ocupacoes em Escassez 2025 trouxe 29 ocupacoes novas (saude, ciencia, oficios e operacao de maquinas) - janela aberta para esses perfis",
      "Visto 491 regional: +15 pontos e convites competitivos ja a partir de 65 pontos para quem aceita morar fora das grandes capitais - 21 ocupacoes em escassez SO em regioes",
      "Nomeacao estadual de Queensland mais que dobrou (de 1.200 para 2.600 vagas no 190, +117%), virando um dos destinos mais atrativos de 2026",
      "Stream Essential Skills do Skills in Demand abre porta nova para ocupacoes de menor salario em aged care, deficiencia e parte de hotelaria/agricultura",
      "Prioridades de nomeacao do NSW: saude e aged care, construcao e habitacao, ICT e ciberseguranca, net zero/energia, agricultura e manufatura avancada",
      "Boom de construcao, habitacao e energia renovavel sustenta demanda por engenharia e trades mesmo com a economia desacelerando",
      "Projecao de mais de 58 mil novas vagas em tecnologia ate 2028 (ciberseguranca e software)"
    ],
    "jobBoards": [
      {
        "label": "Workforce Australia (portal oficial de empregos do governo federal)",
        "url": "https://www.workforceaustralia.gov.au/",
        "official": true
      },
      {
        "label": "APSjobs (vagas no servico publico federal australiano)",
        "url": "https://www.apsjobs.gov.au/",
        "official": true
      },
      {
        "label": "SkillSelect / Home Affairs - Expression of Interest para vistos qualificados",
        "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect",
        "official": true
      },
      {
        "label": "SEEK (maior plataforma privada de vagas da Australia)",
        "url": "https://www.seek.com.au/",
        "official": false
      },
      {
        "label": "Indeed Australia",
        "url": "https://au.indeed.com/",
        "official": false
      },
      {
        "label": "LinkedIn Jobs Australia",
        "url": "https://www.linkedin.com/jobs/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Jobs and Skills Australia - 2025 Occupation Shortage List (resultados)",
        "url": "https://www.jobsandskills.gov.au/news/shortages-ease-gaps-persist-2025-occupation-shortage-list",
        "official": true
      },
      {
        "label": "Jobs and Skills Australia - Occupation Shortage (dados)",
        "url": "https://www.jobsandskills.gov.au/data/occupation-shortage",
        "official": true
      },
      {
        "label": "Jobs and Skills Australia - Internet Vacancy Index",
        "url": "https://www.jobsandskills.gov.au/data/internet-vacancy-index",
        "official": true
      },
      {
        "label": "Jobs and Skills Australia - Job ads down 5% (fev/2026)",
        "url": "https://www.jobsandskills.gov.au/news/job-ads-down-5-nationally-february-2026",
        "official": true
      },
      {
        "label": "ABS - Labour Force, Australia (release mais recente)",
        "url": "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/latest-release",
        "official": true
      },
      {
        "label": "ABS - Unemployment rate rises to 4.5% in April",
        "url": "https://www.abs.gov.au/media-centre/media-releases/unemployment-rate-rises-45-april",
        "official": true
      },
      {
        "label": "ABS - Average Weekly Earnings (nov/2025)",
        "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/latest-release",
        "official": true
      },
      {
        "label": "Fair Work Ombudsman - Annual Wage Review 2026",
        "url": "https://www.fairwork.gov.au/about-us/workplace-laws/annual-wage-review/annual-wage-review-2026",
        "official": true
      },
      {
        "label": "Department of Home Affairs - Skilled occupation list",
        "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
        "official": true
      },
      {
        "label": "Department of Home Affairs - SkillSelect (invitation rounds)",
        "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds",
        "official": true
      },
      {
        "label": "AHPRA - Information for international practitioners",
        "url": "https://www.ahpra.gov.au/Registration/International-practitioners.aspx",
        "official": true
      },
      {
        "label": "ANMAC - Modified Skills Assessment (enfermagem)",
        "url": "https://anmac.org.au/skilled-migrants/modified-skills-assessment",
        "official": true
      },
      {
        "label": "Workforce Australia (portal de empregos)",
        "url": "https://www.workforceaustralia.gov.au/",
        "official": true
      },
      {
        "label": "SEEK - Registered Nurse salary",
        "url": "https://au.seek.com/career-advice/role/registered-nurse/salary",
        "official": false
      },
      {
        "label": "SEEK - Software Engineer / GP / Electrician salaries",
        "url": "https://au.seek.com/career-advice/role/software-engineer/salary",
        "official": false
      },
      {
        "label": "Hays Australia - Jobs Report 2026",
        "url": "https://www.hays.com.au/industry-insights/jobs-report",
        "official": false
      }
    ]
  },
  "ae": {
    "updatedAt": "2026-06-22",
    "overview": "Os Emirados Arabes Unidos, e Dubai em especial, seguem entre os mercados de trabalho mais aquecidos e cobicados do mundo para estrangeiros em 2026. Quase 90% da forca de trabalho do pais e expatriada, e a economia esta diversificada bem alem do petroleo, puxada por tecnologia, financas, turismo, saude, construcao e logistica. A Estrategia de IA 2031 e o Roteiro de IA de Dubai abriram demanda recorde por talento digital, enquanto o setor fintech deve triplicar de tamanho ate o fim de 2026. Salarios sao livres de imposto de renda pessoal, o que sustenta o apelo do destino mesmo com custo de vida alto. Toda contratacao formal passa pelo Ministerio de Recursos Humanos e Emiratizacao (MOHRE), que exige permissao de trabalho (work permit) e contrato registrado antes de qualquer atividade legal.\n\nO outro lado da moeda e a competicao. Pesquisas recentes apontam que cerca de 65% dos profissionais acham mais dificil achar vaga hoje do que um ano atras, e mais de 70% planejam trocar de emprego em 2026, o que lota especialmente as vagas de entrada e generalistas. A regra de ouro do mercado emiradense ficou clara: especialistas com certificacao, licenca regulada e historico comprovado recebem premio salarial e sao disputados via recrutamento internacional, enquanto perfis juniores genericos enfrentam fila. Para empreender, as reformas de 2021 tornaram a propriedade 100% estrangeira o padrao em mais de mil atividades de mainland, e as free zones seguem como porta de entrada barata e rapida. O caminho de residencia de longo prazo (Golden Visa de 5 ou 10 anos) foi ampliado em abril de 2026 para incluir enfermeiros, professores, criadores de conteudo e profissionais de e-sports, alargando as opcoes de fixacao.",
    "hotSectors": [
      "Tecnologia e Inteligencia Artificial",
      "Financas e Fintech",
      "Saude",
      "Construcao e Infraestrutura",
      "Turismo e hotelaria de luxo",
      "Imobiliario",
      "Logistica e e-commerce",
      "Energia renovavel"
    ],
    "coolingSectors": [
      "Vagas de entrada genericas em TI e administracao (excesso de candidatos, resposta lenta dos empregadores)",
      "Funcoes juniores sem certificacao ou especializacao (mercado saturado e altamente competitivo)",
      "Petroleo e gas tradicional de campo (nao colapsa, mas migra para perfis digitais, smart oilfields e HSE em vez das funcoes petroleiras classicas)"
    ],
    "inDemandRoles": [
      {
        "role": "Engenheiro de IA / Machine Learning",
        "note": "Senior pode chegar a AED 45.000-80.000/mes; puxado pela Estrategia de IA 2031 e Roteiro de IA de Dubai."
      },
      {
        "role": "Cientista e analista de dados",
        "note": "Pleno na faixa de AED 25.000-40.000/mes; um dos perfis de crescimento mais rapido."
      },
      {
        "role": "Especialista em ciberseguranca",
        "note": "Escassez aguda; entre os maiores reajustes salariais de 2026."
      },
      {
        "role": "Medico especialista",
        "note": "Entre as profissoes mais bem pagas do pais; exige licenca DHA/DOH/MOH."
      },
      {
        "role": "Enfermeiro de cuidados criticos, oncologia e neonatal",
        "note": "Escassez severa, recrutamento internacional agressivo; elegivel a Golden Visa."
      },
      {
        "role": "Banqueiro de investimento e gestor de patrimonio",
        "note": "Senior pode chegar a AED 50.000-90.000/mes."
      },
      {
        "role": "Especialista em compliance e regulatorio",
        "note": "AED 30.000-55.000/mes; demanda sustentada pelo crescimento fintech."
      },
      {
        "role": "Engenheiro civil, gerente de projetos e quantity surveyor",
        "note": "Demanda estavel puxada por mega-projetos de infraestrutura."
      },
      {
        "role": "Corretor imobiliario",
        "note": "Em ciclos de pico pode superar AED 50.000-100.000/mes, mas e fortemente comissionado."
      },
      {
        "role": "Gerente de projetos verdes e profissional HSE",
        "note": "Projecao de alta de ~15% na demanda ate 2026 em energia e sustentabilidade."
      },
      {
        "role": "Profissional de supply chain, logistica e e-commerce",
        "note": "Crescimento ligado ao hub logistico e digital de Dubai."
      }
    ],
    "byQualification": [
      {
        "area": "Enfermagem",
        "advice": "Mercado em forte escassez, especialmente em cuidados criticos, oncologia e neonatologia, com recrutamento internacional ativo. Primeiro passo e obter licenca DHA (Dubai), DOH (Abu Dhabi) ou MOH (Emirados do Norte): exige diploma reconhecido, verificacao DataFlow, Certificado de Bom Conducta (Good Standing) emitido nos ultimos 6 meses e aprovacao em exame da autoridade. Enfermeiros com 15+ anos de experiencia ou em cargos de lideranca (nurse manager, clinical nurse specialist) podem pleitear o Golden Visa pela via de profissional qualificado ou por nomeacao de orgao de saude, mesmo sem o salario de AED 30.000."
      },
      {
        "area": "Medicina",
        "advice": "Entre as carreiras mais bem pagas dos Emirados (especialistas podem chegar a AED 80.000-150.000/mes). Obrigatorio licenciar-se na DHA, DOH ou MOH conforme o emirado. Clinico geral precisa de no minimo 2 anos de experiencia pos-internato; todos passam por verificacao DataFlow, exame de licenca e GSC. Especialistas de elite em saude tem trilha dedicada de Golden Visa em Abu Dhabi."
      },
      {
        "area": "Engenharia",
        "advice": "Civil, de projetos e disciplinas ligadas a energia limpa estao em alta. Para exercer e preciso credenciar-se na Society of Engineers (SOE) com diploma de engenharia atestado pelo Ministerio de Relacoes Exteriores dos Emirados (MOFA) e, quando aplicavel, equivalencia do MOHESR; taxa tipica de AED 500-1.000. Engenheiros qualificados em ciencia de dados, IA e energia limpa podem pleitear Golden Visa com salario de AED 30.000+."
      },
      {
        "area": "Tecnologia e dados",
        "advice": "Setor mais aquecido para estrangeiros. IA, machine learning, cloud, ciberseguranca e ciencia de dados lideram demanda e reajustes. Certificacoes de mercado (AWS, Azure, CISSP, etc.) e portfolio comprovado pesam mais que diploma generico. Perfis de elite com salario de AED 30.000+ e nivel 1 ou 2 da classificacao ocupacional MOHRE qualificam para Golden Visa."
      },
      {
        "area": "Financas e contabilidade",
        "advice": "Banco de investimento, wealth management, compliance e fintech sao os nichos mais bem pagos. Certificacoes internacionais como ACCA, CFA e CPA sao valorizadas e devem ser atestadas e traduzidas. Contador pleno tipicamente AED 20.000-27.000/mes; funcoes de compliance AED 30.000-55.000/mes."
      },
      {
        "area": "Educacao / professores",
        "advice": "Para lecionar em Dubai e preciso licenca de professor da KHDA, alem de atestacao MOFA e equivalencia MOHESR; o registro leva cerca de 4 a 8 semanas. Desde abril de 2026, professores entraram nas categorias elegiveis ao Golden Visa conforme conquistas e reconhecimento."
      },
      {
        "area": "Vendas, marketing e RH",
        "advice": "Funcoes de gestao tem boa remuneracao (gerente de PR/comunicacao AED 30.000-65.000/mes; RH de topo AED 60.000-80.000/mes), mas vagas de entrada estao saturadas. Diferencie-se com especializacao setorial, idioma arabe ou experiencia em mercados do Golfo."
      }
    ],
    "salaries": [
      {
        "role": "Engenheiro de IA senior",
        "range": "AED 45.000-80.000/mes",
        "source": {
          "label": "Qureos / Saviorhire - UAE Tech Hiring Trends 2026",
          "url": "https://www.saviorhire.com/post/uae-tech-hiring-trends",
          "official": true
        }
      },
      {
        "role": "Cientista de dados pleno",
        "range": "AED 25.000-40.000/mes",
        "source": {
          "label": "Qureos - Top In-Demand Jobs in the UAE",
          "url": "https://www.qureos.com/career-guide/top-in-demand-jobs-in-the-uae",
          "official": true
        }
      },
      {
        "role": "Banqueiro de investimento senior",
        "range": "AED 50.000-90.000/mes",
        "source": {
          "label": "Gulf Workforce - UAE Salary Guide 2026",
          "url": "https://gulfworkforce.com/uae-salary-guide-2026/",
          "official": true
        }
      },
      {
        "role": "Especialista em compliance / regulatorio",
        "range": "AED 30.000-55.000/mes",
        "source": {
          "label": "Gulf Workforce - UAE Salary Guide 2026",
          "url": "https://gulfworkforce.com/uae-salary-guide-2026/",
          "official": true
        }
      },
      {
        "role": "Medico especialista",
        "range": "AED 80.000-150.000/mes",
        "source": {
          "label": "Gulf Workforce - Highest Paying Jobs Dubai 2026",
          "url": "https://gulfworkforce.com/blog-highest-paying-jobs-dubai-2026/",
          "official": true
        }
      },
      {
        "role": "Contador pleno",
        "range": "AED 20.000-27.000/mes",
        "source": {
          "label": "Michael Page - UAE Salary Guide 2026",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Associado de investimentos pleno",
        "range": "AED 50.000-60.000/mes",
        "source": {
          "label": "Michael Page - UAE Salary Guide 2026",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Gerente de PR e comunicacao",
        "range": "AED 30.000-65.000/mes",
        "source": {
          "label": "Gulf Workforce - UAE Salary Guide 2026",
          "url": "https://gulfworkforce.com/uae-salary-guide-2026/",
          "official": true
        }
      },
      {
        "role": "RH (entrada a topo)",
        "range": "AED 25.000 (entrada) a AED 60.000-80.000 (topo)/mes",
        "source": {
          "label": "Gulf Workforce - UAE Salary Guide 2026",
          "url": "https://gulfworkforce.com/uae-salary-guide-2026/",
          "official": true
        }
      },
      {
        "role": "Corretor imobiliario (em ciclos de pico)",
        "range": "AED 50.000-100.000+/mes (comissionado)",
        "source": {
          "label": "Gulf Workforce - UAE Salary Guide 2026",
          "url": "https://gulfworkforce.com/uae-salary-guide-2026/",
          "official": true
        }
      },
      {
        "role": "Salario medio do profissional em Dubai",
        "range": "AED 15.800-18.000/mes",
        "source": {
          "label": "Michael Page / Hays via Dubai Money Matters",
          "url": "https://dubaimoneymatters.com/uae-salary-guide-2026/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Trabalhar legalmente nos Emirados exige permissao de trabalho (work permit) emitida pelo MOHRE, conforme o Decreto-Lei Federal n. 33 de 2021: e ilegal exercer atividade sem ela. O MOHRE oferece 13 tipos de permissao conforme a natureza do cargo, e a ocupacao precisa estar alinhada a atividade da empresa contratante. Idade minima de 18 anos (salvo permissoes especiais de jovem aprendiz ou estagio estudantil). A taxa de emissao/renovacao varia de cerca de AED 250 a AED 3.450 conforme a classificacao A, B ou C da empresa, e o processo deve ser finalizado em ate 60 dias da entrada no pais ou mudanca de status de residencia. Profissoes reguladas exigem licenca adicional: saude (DHA em Dubai, DOH em Abu Dhabi, MOH nos Emirados do Norte, com verificacao DataFlow, exame e Good Standing Certificate), engenharia (Society of Engineers, com atestacao MOFA) e ensino (licenca KHDA em Dubai). Diplomas estrangeiros geralmente precisam de atestacao MOFA e, quando exigido, equivalencia MOHESR. Para empreender, as reformas de 2021 permitem propriedade 100% estrangeira no mainland em mais de mil atividades (poucas atividades de impacto estrategico mantem restricoes); free zones tambem dao 100% de propriedade. Licenca de mainland custa tipicamente AED 12.000-20.000 (setup total AED 25.000-40.000 fora aluguel e vistos), enquanto free zones tem pacotes a partir de cerca de AED 5.750-18.000. Residencia de longo prazo via Golden Visa: 10 anos para investidores e talentos excepcionais (limites como AED 2.000.000 em investimento/imovel ou AED 250.000/ano em imposto pago) e 5 anos para empreendedores (projeto inovador de AED 500.000+), profissionais qualificados (nivel 1 ou 2 do MOHRE, diploma de bacharel e salario de AED 30.000+/mes) e freelancers com permissao de free zone e renda anual de pelo menos AED 360.000. Em abril de 2026 a lista foi ampliada para enfermeiros, professores, criadores de conteudo e profissionais de e-sports, e o conjuge e filhos passam a ser cobertos pelo mesmo visto de 10 anos sem limite de idade dos filhos.",
    "opportunityWindows": [
      "Golden Visa ampliado em abril de 2026 para enfermeiros, professores, criadores de conteudo e profissionais de e-sports, com via de nomeacao para enfermeiros abaixo do teto salarial",
      "Escassez severa de enfermeiros de cuidados criticos, oncologia e neonatologia gera campanhas de recrutamento internacional agressivas",
      "Setor fintech projetado para triplicar de tamanho ate o fim de 2026, abrindo vagas em compliance, dados e produto",
      "Estrategia de IA 2031 e Roteiro de IA de Dubai sustentam demanda recorde por engenheiros de IA, dados e ciberseguranca",
      "Programa Nafis de Emiratizacao mira 75.000 nacionais no setor privado em 5 anos, o que abre espaco para estrangeiros em funcoes especializadas nao preenchidas localmente",
      "Mega-projetos de infraestrutura (Dubai Urban Master Plan 2040, extensoes do metro, Expo City) mantem construcao aquecida",
      "Alta projetada de ~15% na demanda por gerentes de projetos verdes e profissionais HSE ate 2026",
      "Free zones com pacotes baratos (a partir de ~AED 5.750) facilitam entrada rapida de empreendedores e freelancers"
    ],
    "jobBoards": [
      {
        "label": "Plataforma Oficial do Governo dos Emirados - Busca de Emprego",
        "url": "https://u.ae/en/information-and-services/jobs/searching-for-a-job",
        "official": true
      },
      {
        "label": "MOHRE - Ministerio de Recursos Humanos e Emiratizacao (Carreiras e Servicos)",
        "url": "https://www.mohre.gov.ae/en/careers",
        "official": true
      },
      {
        "label": "Nafis - Programa de Emiratizacao (setor privado)",
        "url": "https://www.nafis.gov.ae/",
        "official": true
      },
      {
        "label": "Bayt.com - maior portal de empregos do Oriente Medio",
        "url": "https://www.bayt.com/en/uae/jobs/",
        "official": false
      },
      {
        "label": "GulfTalent - vagas medio-senior no Golfo",
        "url": "https://www.gulftalent.com/uae/jobs",
        "official": false
      },
      {
        "label": "LinkedIn - rede profissional e sourcing de recrutadores",
        "url": "https://www.linkedin.com/jobs/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Plataforma Oficial do Governo dos Emirados (u.ae) - Permissoes de trabalho",
        "url": "https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/job-offers-and-work-permits-and-contracts/work-permits",
        "official": true
      },
      {
        "label": "MOHRE - Emissao de nova permissao de trabalho (overseas)",
        "url": "https://www.mohre.gov.ae/en/services/recruiting-a-worker-from-overseas-2022",
        "official": true
      },
      {
        "label": "u.ae - Golden Visa (residencia de longo prazo)",
        "url": "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa",
        "official": true
      },
      {
        "label": "ICP - Golden Residency",
        "url": "https://icp.gov.ae/en/services/golden-residency/",
        "official": true
      },
      {
        "label": "ADDED Abu Dhabi - Golden Visa para profissionais qualificados",
        "url": "https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-golden-visa/for-specialists/for-skilled-professionals",
        "official": true
      },
      {
        "label": "ADDED Abu Dhabi - Golden Visa para especialistas de elite em saude",
        "url": "https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-golden-visa/for-specialists/for-elite-specialists-in-health-fields",
        "official": true
      },
      {
        "label": "DOH Abu Dhabi - Professional Qualification Requirement (PQR)",
        "url": "https://www.doh.gov.ae/en/pqr",
        "official": true
      },
      {
        "label": "KHDA - Knowledge and Human Development Authority (Dubai)",
        "url": "https://web.khda.gov.ae/en/",
        "official": true
      },
      {
        "label": "u.ae - Busca de emprego",
        "url": "https://u.ae/en/information-and-services/jobs/searching-for-a-job",
        "official": true
      },
      {
        "label": "u.ae - Emprego de emiratis no setor privado (Nafis)",
        "url": "https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/emiratis-employment-in-private-sector",
        "official": true
      },
      {
        "label": "Michael Page - UAE Salary Guide 2026",
        "url": "https://www.michaelpage.ae/salary-guide-uae",
        "official": false
      },
      {
        "label": "Gulf Workforce - UAE Salary Guide 2026",
        "url": "https://gulfworkforce.com/uae-salary-guide-2026/",
        "official": false
      },
      {
        "label": "Qureos - Top In-Demand Jobs in the UAE",
        "url": "https://www.qureos.com/career-guide/top-in-demand-jobs-in-the-uae",
        "official": false
      },
      {
        "label": "Saviorhire - UAE Tech Hiring Trends 2026",
        "url": "https://www.saviorhire.com/post/uae-tech-hiring-trends",
        "official": false
      },
      {
        "label": "Khaleej Times - 7 em 10 empregados planejam trocar de vaga em 2026",
        "url": "https://www.khaleejtimes.com/uae/employees-plan-switch-bobs-2026-competition-market",
        "official": false
      },
      {
        "label": "Middle East Briefing - Setting up a business in Dubai 2026",
        "url": "https://www.middleeastbriefing.com/news/setting-up-a-business-in-dubai-a-2026-guide/",
        "official": false
      },
      {
        "label": "Erickson Immigration Group - UAE Expands Golden Visa 2026",
        "url": "https://eiglaw.com/uae-expands-golden-visa-program-eligibility/",
        "official": false
      },
      {
        "label": "Takhlees - UAE Engineering License 2026 (SOE)",
        "url": "https://takhleesbusiness.com/blog/uae-engineering-license-2026-step-by-step-guide-for-abu-dhabi-and-dubai",
        "official": false
      }
    ]
  },
  "uk": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho britanico entrou em 2026 esfriando no agregado, mas com bolsoes de escassez estrutural que seguem abertos a estrangeiros. Os dados oficiais do ONS apontam ganho salarial medio anual de cerca de 4,4% (total) e 3,4% (regular) no trimestre fevereiro a abril de 2026, com salario medio semanal de 753 libras, enquanto o numero de vagas recuou para a faixa de 700 mil a 950 mil, bem abaixo do pico pos-pandemia. A leitura pratica e de um mercado mais seletivo: contratacoes caem em varejo, hotelaria e parte do setor publico administrativo, mas saude, engenharia e tecnologia continuam puxando demanda. Para quem chega de fora, o ponto central de 2026 e o aperto das regras de visto. Desde 22 de julho de 2025 o piso salarial geral do Skilled Worker subiu para 41.700 libras por ano (ou a going rate da ocupacao, o que for maior), e o nivel minimo de qualificacao voltou ao patamar de graduacao (RQF 6). Isso elevou a barra para empregadores patrocinarem estrangeiros e tornou o salario, mais que a vaga em si, o maior filtro.\n\nApesar do aperto, ha caminhos reais. O NHS continua sendo o maior empregador patrocinador, com mais de 110 mil vagas em aberto e rotas dedicadas via Health and Care Worker visa, com piso de 25.000 libras e going rate por ocupacao. Engenharia foi o unico grande setor com vagas em alta no inicio de 2026, impulsionada por defesa, infraestrutura e transicao energetica. Tecnologia mantem escassez cronica em ciberseguranca, software e dados. Para empreendedores, as rotas Innovator Founder (negocio inovavel e escalavel, com endosso) e Global Talent (talento reconhecido em tech, ciencia e artes, com liberdade total para autonomia e abrir empresa) sao as portas principais. O alerta permanente: profissoes regulamentadas (enfermagem, medicina, ensino, engenharia chartered, direito) exigem registro no orgao competente antes de exercer, e desde o Brexit o reconhecimento de diplomas da UE deixou de ser automatico.",
    "hotSectors": [
      "Saude e cuidado (NHS com mais de 110 mil vagas; enfermeiros, medicos, radiografistas, fisioterapeutas, farmaceuticos)",
      "Engenharia (unico grande setor com vagas em alta no inicio de 2026: eletrica, mecanica, sistemas, soldadores de alta integridade, gestao de projetos)",
      "Tecnologia e digital (ciberseguranca, engenharia de software, dados, IA)",
      "Energia e net-zero (renovaveis, transicao energetica, projetos de infraestrutura)",
      "Defesa e manufatura avancada (impulsionada por compromissos de gasto militar)",
      "Ciencias da vida e biotecnologia (cientistas biologicos e biomedicos na lista de escassez)"
    ],
    "coolingSectors": [
      "Construcao residencial e geral (vagas em forte queda, na faixa de -30% ano contra ano)",
      "Varejo (contratacoes em retracao)",
      "Hotelaria e restaurantes (alto volume mas baixo poder de patrocinio de visto pos-RQF 6)",
      "Administracao do setor publico (parte das funcoes ficando para tras na recuperacao)",
      "Cuidado social de base / care workers (fechado a novos aplicantes estrangeiros desde julho 2025; ISL expira em dezembro 2026)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) registrado(a) (Registered Nurse, SOC 2231)",
        "note": "Patrocinio via Health and Care Worker visa; going rate em torno de 31.000 libras (NHS Band 5); exige registro NMC antes de exercer"
      },
      {
        "role": "Medico(a) (todos os graus, de foundation a consultant)",
        "note": "Patrocinio amplo no NHS; exige registro GMC, normalmente via PLAB para formados fora do Reino Unido"
      },
      {
        "role": "Engenheiro(a) eletrico/mecanico/de sistemas e gestao de projetos",
        "note": "Setor com vagas em alta; ~127 mil vagas, alta de 5,1% no inicio de 2026; chartered exige Engineering Council"
      },
      {
        "role": "Engenheiro(a) de software / desenvolvedor(a) (SOC 2134)",
        "note": "Going rate em torno de 49.400 libras/ano (~25,33/hora) em abril 2026, acima do piso geral"
      },
      {
        "role": "Especialista em ciberseguranca e dados",
        "note": "Escassez cronica; 75% das empresas de tech relatam dificuldade de contratacao"
      },
      {
        "role": "Soldador(a) de alta integridade / pipe welder (SOC 5213)",
        "note": "Na Immigration Salary List, com piso reduzido (34.900 padrao / 29.500 reduzido)"
      },
      {
        "role": "Carpinteiro(a) e marceneiro(a) (SOC 5316)",
        "note": "Na Immigration Salary List (33.400 padrao / 27.800 reduzido)"
      },
      {
        "role": "Cientista biologico/biomedico (SOC 2112)",
        "note": "Na Immigration Salary List (40.300 padrao / 30.700 reduzido)"
      },
      {
        "role": "Auxiliar de enfermagem (SOC 6131)",
        "note": "Na ISL a 25.000 libras; novas aplicacoes encerram em dezembro 2026 quando a ISL for retirada"
      },
      {
        "role": "Fisioterapeuta, terapeuta ocupacional, farmaceutico, paramedico, assistente social",
        "note": "Elegiveis ao Health and Care Worker visa (piso 25.000 libras ou going rate)"
      }
    ],
    "byQualification": [
      {
        "area": "Enfermagem",
        "advice": "Caminho mais solido: Health and Care Worker visa (piso 25.000 libras, going rate ~31.000 no NHS Band 5). Obrigatorio registro no NMC antes de exercer, e pos-Brexit ate diplomas da UE passam por avaliacao completa (teste de competencias e ingles via IELTS/OET). Comece pelo NHS Jobs filtrando por visa sponsorship. NHS e o maior patrocinador do pais."
      },
      {
        "area": "Medicina",
        "advice": "Demanda alta em todos os graus. Exige registro no GMC, em geral via exame PLAB para formados fora do Reino Unido (ou rota de qualificacoes pos-graduadas aceitas). Patrocinio via Health and Care Worker visa, piso 25.000 libras ou going rate. Confirme se sua qualificacao consta nas listas de qualificacoes aceitas do GMC antes de aplicar."
      },
      {
        "area": "Engenharia",
        "advice": "Melhor momento entre os grandes setores: e o unico com vagas em alta em 2026 (defesa, energia, infraestrutura). Eletrica, mecanica e de sistemas lideram. Para titulo de chartered engineer, registro no Engineering Council. Skilled Worker visa com piso de 41.700 libras ou going rate. Soldadores de alta integridade tem desconto via Immigration Salary List."
      },
      {
        "area": "Tecnologia e TI",
        "advice": "Duas portas: (1) Skilled Worker para software/dados/ciber (going rate de software ~49.400 libras costuma ser o teto a bater); (2) Global Talent visa via Tech Nation para perfis reconhecidos, que da liberdade total para trocar de empregador, fazer consultoria e abrir a propria empresa. Ciberseguranca e dados sao os mais dificeis de preencher."
      },
      {
        "area": "Ciencias da vida e pesquisa",
        "advice": "Cientistas biologicos e biomedicos estao na Immigration Salary List, com piso reduzido. Pesquisadores academicos tem rota Global Talent endossada por Royal Society, Royal Academy of Engineering, British Academy ou UK Research and Innovation, com decisao de endosso em 5 a 8 semanas."
      },
      {
        "area": "Construcao e oficios",
        "advice": "Setor em retracao no agregado, mas oficios especificos como carpinteiro/marceneiro e soldador estao na Immigration Salary List, com piso reduzido. A Temporary Shortage List (RQF 3 a 5) pode abrir mais ocupacoes de construcao apos a revisao do Stage 2 da MAC prevista para julho 2026. Atencao: ISL e TSL expiram em 31 de dezembro de 2026, salvo extensao."
      },
      {
        "area": "Artes e cultura",
        "advice": "Global Talent visa via Arts Council England e parceiros (arquitetura, moda, cinema e TV, e design, novo desde marco 2026). Permite autonomia, direcao de empresa e troca livre de empregador. Musicos de orquestra constam na Immigration Salary List (SOC 3415)."
      },
      {
        "area": "Empreendedor / quero abrir negocio",
        "advice": "Innovator Founder visa para negocio novo, inovavel e escalavel, com endosso obrigatorio de um dos corpos endossantes (UK Endorsing Services, Innovator International, Envestors). Sem exigencia fixa de 200 mil libras como na antiga rota Tier 1; foco e inovacao e fundos realistas. ILR possivel em 3 anos. Quem ja tem talento reconhecido pode preferir a Global Talent, que tambem permite autonomia total."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio semanal (todos os setores, abril 2026)",
        "range": "~753 libras/semana (total), ~697 libras/semana (regular)",
        "source": {
          "label": "ONS - Average weekly earnings in Great Britain (junho 2026)",
          "url": "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/averageweeklyearningsingreatbritain/june2026",
          "official": true
        }
      },
      {
        "role": "Piso geral Skilled Worker visa (ou going rate, o que for maior)",
        "range": "41.700 libras/ano (piso horario ~17,13 libras)",
        "source": {
          "label": "GOV.UK - Skilled Worker visa",
          "url": "https://www.gov.uk/skilled-worker-visa",
          "official": true
        }
      },
      {
        "role": "Piso ocupacoes na Immigration Salary List (80% do piso geral)",
        "range": "a partir de ~33.400 libras/ano",
        "source": {
          "label": "GOV.UK - Immigration Salary List",
          "url": "https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list",
          "official": true
        }
      },
      {
        "role": "Health and Care Worker visa (piso)",
        "range": "a partir de 25.000 libras/ano ou going rate",
        "source": {
          "label": "GOV.UK - Health and Care Worker visa: your job",
          "url": "https://www.gov.uk/health-care-worker-visa/your-job",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) registrado(a) (SOC 2231, NHS Band 5)",
        "range": "going rate ~31.000 libras/ano",
        "source": {
          "label": "GOV.UK - Health and Care Worker visa",
          "url": "https://www.gov.uk/health-care-worker-visa/your-job",
          "official": true
        }
      },
      {
        "role": "Engenheiro(a) de software / desenvolvedor(a) (SOC 2134)",
        "range": "going rate ~49.400 libras/ano (~25,33/hora)",
        "source": {
          "label": "GOV.UK - Skilled Worker visa (going rates por SOC)",
          "url": "https://www.gov.uk/skilled-worker-visa/your-job",
          "official": true
        }
      },
      {
        "role": "Carpinteiro(a) e marceneiro(a) (SOC 5316, ISL)",
        "range": "33.400 (padrao) / 27.800 (reduzido) libras/ano",
        "source": {
          "label": "GOV.UK - Immigration Salary List",
          "url": "https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list",
          "official": true
        }
      },
      {
        "role": "Soldador(a) de alta integridade (SOC 5213, ISL)",
        "range": "34.900 (padrao) / 29.500 (reduzido) libras/ano",
        "source": {
          "label": "GOV.UK - Immigration Salary List",
          "url": "https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list",
          "official": true
        }
      },
      {
        "role": "Cientista biologico/biomedico (SOC 2112, ISL)",
        "range": "40.300 (padrao) / 30.700 (reduzido) libras/ano",
        "source": {
          "label": "GOV.UK - Immigration Salary List",
          "url": "https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list",
          "official": true
        }
      },
      {
        "role": "Auxiliar de enfermagem (SOC 6131, ISL)",
        "range": "25.000 libras/ano (novas aplicacoes ate dez/2026)",
        "source": {
          "label": "GOV.UK - Immigration Salary List",
          "url": "https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list",
          "official": true
        }
      }
    ],
    "foreignerRules": "Para trabalhar no Reino Unido como estrangeiro voce quase sempre precisa de um visto com patrocinio de empregador licenciado (sponsor licence). A rota principal e o Skilled Worker visa: desde 22 de julho de 2025, exige salario de pelo menos 41.700 libras por ano OU a going rate da ocupacao (o que for maior), e qualificacao em nivel de graduacao (RQF 6). Ha descontos: ocupacoes na Immigration Salary List (ISL) podem pagar 80% do piso (a partir de ~33.400 libras), e new entrants (sub-26, recem-formados, em treinamento profissional) podem usar piso reduzido (~33.400 libras e 70% a 80% da going rate) por tempo limitado. Todos os calculos sao sobre semana de 37,5 horas, entao confirme pela taxa horaria. Saude e cuidado tem rota dedicada (Health and Care Worker visa) com piso de 25.000 libras ou going rate. Atencao critica: care workers e senior care workers estao fechados a novos aplicantes estrangeiros desde julho de 2025, e a ISL inteira expira em 31 de dezembro de 2026 (care workers SOC 6135/6136 marcados ate julho 2028). A Temporary Shortage List cobre ocupacoes de qualificacao media (RQF 3 a 5) ate dezembro 2026, sujeita a revisao da MAC em julho 2026. Profissoes regulamentadas exigem registro no orgao competente ANTES de exercer: enfermeiros no NMC, medicos no GMC (em geral via PLAB), engenheiros chartered no Engineering Council, professores e advogados em seus reguladores. Pos-Brexit, o reconhecimento automatico de diplomas da UE acabou: mesmo profissionais da UE passam por avaliacao completa. Para empreender, use Innovator Founder visa (negocio inovavel/escalavel com endosso; permite ser diretor e autonomo, ILR em 3 anos) ou Global Talent visa (talento reconhecido; permite emprego, autonomia, direcao de empresa e consultoria sem avisar o Home Office). Quase todas as rotas exigem comprovacao de ingles e pagamento do Immigration Health Surcharge (em geral ~1.035 libras por ano por pessoa).",
    "opportunityWindows": [
      "NHS com mais de 110 mil vagas em aberto e rota dedicada (Health and Care Worker visa), o maior empregador patrocinador do pais; enfermeiros e medicos com demanda continua",
      "Engenharia e o unico grande setor com vagas em alta no inicio de 2026 (~127 mil vagas, +5,1%), puxado por defesa, energia e infraestrutura",
      "Tecnologia com escassez cronica em ciberseguranca, software e dados; 75% das empresas de tech com dificuldade de contratacao",
      "Temporary Shortage List em revisao: Stage 2 da MAC reporta em julho 2026 e pode abrir novas ocupacoes RQF 3-5 (construcao, manufatura, tech, saude de apoio, industrias criativas)",
      "Janela de fechamento: Immigration Salary List expira em 31 de dezembro de 2026, entao quem se enquadra nos pisos reduzidos da ISL tem prazo para aproveitar",
      "Mudanca de novembro 2025: estudantes que concluiram o curso podem trocar direto para o Innovator Founder visa sem sair do Reino Unido e iniciar autonomia com a aplicacao pendente",
      "Global Talent agora inclui o campo de design (desde marco 2026), ampliando a rota para criativos",
      "Innovator Founder com ILR em 3 anos, prazo mais rapido que os 5 a 10 anos de varias outras rotas"
    ],
    "jobBoards": [
      {
        "label": "Find a job (servico oficial do DWP / governo)",
        "url": "https://findajob.dwp.gov.uk/search",
        "official": true
      },
      {
        "label": "Find a job - pagina GOV.UK",
        "url": "https://www.gov.uk/find-a-job",
        "official": true
      },
      {
        "label": "NHS Jobs (vagas no NHS, filtro por visa sponsorship)",
        "url": "https://www.jobs.nhs.uk/candidate/search/results?keyword=Visa+sponsorship",
        "official": true
      },
      {
        "label": "GOV.UK - Finding a job (guia oficial de busca de emprego)",
        "url": "https://www.gov.uk/browse/working/finding-job",
        "official": true
      },
      {
        "label": "GOV.UK - Register of licensed sponsors (para achar empregadores que patrocinam visto)",
        "url": "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "GOV.UK - Skilled Worker visa: immigration salary list",
        "url": "https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list",
        "official": true
      },
      {
        "label": "GOV.UK - Skilled Worker visa (overview e salario)",
        "url": "https://www.gov.uk/skilled-worker-visa",
        "official": true
      },
      {
        "label": "GOV.UK - Health and Care Worker visa: your job",
        "url": "https://www.gov.uk/health-care-worker-visa/your-job",
        "official": true
      },
      {
        "label": "GOV.UK - Innovator Founder visa (overview)",
        "url": "https://www.gov.uk/innovator-founder-visa",
        "official": true
      },
      {
        "label": "GOV.UK - Global Talent visa (overview)",
        "url": "https://www.gov.uk/global-talent",
        "official": true
      },
      {
        "label": "GOV.UK - Global Talent (digital technology / Tech Nation)",
        "url": "https://www.gov.uk/global-talent-digital-technology",
        "official": true
      },
      {
        "label": "GOV.UK - Temporary Shortage List: Stage 1 report",
        "url": "https://www.gov.uk/government/publications/temporary-shortage-list-stage-1-report/temporary-shortage-list-stage-1-report-accessible",
        "official": true
      },
      {
        "label": "ONS - Average weekly earnings in Great Britain (junho 2026)",
        "url": "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/averageweeklyearningsingreatbritain/june2026",
        "official": true
      },
      {
        "label": "ONS - Earnings and working hours",
        "url": "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours",
        "official": true
      },
      {
        "label": "NMC - Register as a nurse trained in the EU/EEA",
        "url": "https://www.nmc.org.uk/registration/joining-the-register/register-nurse-midwife/trained-in-the-eu-or-eea/",
        "official": true
      },
      {
        "label": "GMC - Acceptable overseas qualifications for doctors",
        "url": "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/before-you-apply-guide-for-doctors/acceptable-overseas-qualifications",
        "official": true
      },
      {
        "label": "GOV.UK - Regulated Professions Register",
        "url": "https://www.regulated-professions.service.gov.uk/professions/registered-nurse",
        "official": true
      },
      {
        "label": "NHS Employers - Health and Care Worker visa salary threshold",
        "url": "https://www.nhsemployers.org/news/health-and-care-worker-visa-salary-threshold",
        "official": true
      },
      {
        "label": "Career Moves Group - British Job Market 2026 (analise de mercado)",
        "url": "https://www.careermovesgroup.co.uk/blog/2026/01/british-job-market",
        "official": false
      },
      {
        "label": "CareerMetrics - UK sector vacancies 2026 (analise de vagas por setor)",
        "url": "https://careermetrics.co.uk/blog/uk-sector-vacancies-march-2026-who-is-hiring/",
        "official": false
      },
      {
        "label": "AYJ Solicitors - Skilled Worker going rates 2026 (corroboracao de going rates)",
        "url": "https://ayjsolicitors.com/skilled-worker-going-rates/",
        "official": false
      }
    ]
  },
  "fr": {
    "updatedAt": "2026-06-22",
    "overview": "A Franca entra em 2026 com um mercado de trabalho de duas faces. De um lado, o desemprego voltou a subir. O INSEE registrou taxa de 8,1% no primeiro trimestre de 2026, alta de 0,2 ponto no trimestre e de 0,7 ponto em um ano, o equivalente a 2,6 milhoes de desempregados, com o desemprego dos jovens de 15 a 24 anos em 21,1%. A taxa de atividade, porem, bateu recorde historico de 75,6%, sinal de que mais gente esta no mercado mesmo com a economia desacelerando. Do outro lado, a escassez de mao de obra continua estrutural. A pesquisa Besoins en Main d Oeuvre (BMO) 2026 do France Travail aponta 2,28 milhoes de projetos de contratacao para o ano, com 43,8% deles considerados dificeis de preencher, uma melhora frente aos 50,1% de 2025, mas ainda alto. Na pratica, isso cria janelas claras para o imigrante qualificado ou disposto a entrar em profissoes de escassez. Saude, restauracao, agricultura sazonal, construcao tecnica, industria e digital concentram a demanda. O governo mantem a lista oficial de metiers en tension, fixada pelo arrete de 21 de maio de 2025, que permite contratar nao europeus sem teste de mercado de trabalho e abre caminho de regularizacao por trabalho ate 31/12/2026. Para perfis qualificados, o Passeport Talent oferece carta de 4 anos com regime familiar facilitado. O recado e direto. Para quem chega de fora, o caminho mais rapido passa por onde os franceses faltam, e quase sempre exige falar frances e, em profissoes regulamentadas, validar o diploma antes de exercer.",
    "hotSectors": [
      "Saude e medico-social: enfermeiros, aides-soignants, medicos, cuidadores",
      "Restauracao e hotelaria: cozinha, atendimento, polivalentes",
      "Agricultura e agroalimentar: viticultores, arboricultores, sazonais",
      "Digital e cibersseguranca: 84,2 mil projetos, cerca de 49,5% dificeis de preencher",
      "Industria qualificada, nuclear e energia: industrias extrativas e energeticas com projetos +24,8% sobre 2025",
      "Construcao tecnica e BTP: recrutamento cai em volume, mas escassez de qualificados persiste, com 65% dos postos dificeis",
      "Logistica, manutencao e limpeza"
    ],
    "coolingSectors": [
      "Construcao e BTP em volume bruto: queda de cerca de 16% nos projetos de contratacao em 2026, o maior recuo entre os grandes setores, apesar da falta de qualificados",
      "Trabalho temporario e interim na construcao: menos 4% no primeiro trimestre de 2026",
      "Mercado geral em desaceleracao: total de projetos de contratacao caiu 6,5% frente a 2025"
    ],
    "inDemandRoles": [
      {
        "role": "Aide-soignant (auxiliar de enfermagem)",
        "note": "62,1 mil projetos em 2026; FHF estima falta de cerca de 100 mil; profissao regulamentada, exige diploma reconhecido"
      },
      {
        "role": "Infirmier (enfermeiro)",
        "note": "FHF estima deficit de cerca de 60 mil; profissao regulamentada, autorizacao via ARS e ordem, e EVC para diploma fora da UE"
      },
      {
        "role": "Aide de cuisine e empregado polivalente de restauracao",
        "note": "97,1 mil projetos, o metier com mais vagas na BMO 2026"
      },
      {
        "role": "Garcom de cafe e restaurante (serveur)",
        "note": "cerca de 93,8 mil projetos em 2026"
      },
      {
        "role": "Viticultor e arboricultor (agricola sazonal)",
        "note": "cerca de 83,8 mil projetos; agricultura tem a maior taxa de dificuldade de recrutamento do pais"
      },
      {
        "role": "Empregado de loja e repositor (employe de libre-service)",
        "note": "cerca de 59,9 mil projetos"
      },
      {
        "role": "Pedreiro, telhadista, carpinteiro, eletricista, condutor de maquinas (BTP)",
        "note": "muito procurados para renovacao energetica e infraestrutura; 65% dos postos do BTP dificeis"
      },
      {
        "role": "Especialista em cibersseguranca",
        "note": "segmento mais tensionado do digital; ANSSI cita cerca de 15 mil postos nao preenchidos"
      },
      {
        "role": "Desenvolvedor e engenheiro de software e DevOps",
        "note": "digital com 84,2 mil projetos e cerca de 49,5% dificeis; Passeport Talent comum nesse perfil"
      },
      {
        "role": "Operadores e tecnicos industriais qualificados, incluindo nuclear e energia",
        "note": "industria com a menor queda, menos 2,4%; previsao de cerca de 100 mil contratacoes no nuclear ate 2035"
      },
      {
        "role": "Cuidador a domicilio (aide a domicile)",
        "note": "entre os setores que mais recrutam estrangeiros segundo o Ministerio do Interior"
      }
    ],
    "byQualification": [
      {
        "area": "Enfermagem (formacao em enfermagem)",
        "advice": "Demanda altissima, FHF estima falta de cerca de 60 mil enfermeiros e 100 mil aides-soignants. E profissao REGULAMENTADA. Diploma da UE ou EEE: reconhecimento e autorizacao de exercicio pela ARS, com possivel estagio de adaptacao ou prova de aptidao. Diploma fora da UE: precisa passar pelas Epreuves de Verification des Connaissances (EVC) via Centre National de Gestion. Frances obrigatorio. Vale comecar como aide-soignant enquanto valida o diploma de infirmier."
      },
      {
        "area": "Medicina e profissoes de saude (medico, dentista, parteira, farmaceutico)",
        "advice": "Alta carencia, sobretudo no interior, nos chamados desertos medicos. Quem tem diploma fora da UE (PADHUE) precisa das EVC organizadas pelo Centre National de Gestion antes de exercer. Caminho longo, mas com demanda real e elegibilidade ao Passeport Talent salarie qualifie."
      },
      {
        "area": "TI, engenharia de software e cibersseguranca",
        "advice": "Setor digital com 84,2 mil projetos e quase metade dificeis de preencher; cibersseguranca e o mais carente, ANSSI cerca de 15 mil postos. Profissao NAO regulamentada, basta contrato e qualificacao. Salario costuma ultrapassar o limiar do Passeport Talent salarie qualifie, cerca de 39.582 EUR por ano em 2026, ou ate a Carte Bleue Europeenne, cerca de 59.373 EUR por ano."
      },
      {
        "area": "Engenharia e industria (mecanica, energia, nuclear)",
        "advice": "Industria foi o setor mais resiliente, queda de so 2,4% nos projetos, e o nuclear preve cerca de 100 mil contratacoes ate 2035. Engenheiros e tecnicos qualificados com bom salario entram facil pelo Passeport Talent. Exercer engenharia nao e regulamentado, mas reconhecimento via ENIC-NARIC ajuda na contratacao."
      },
      {
        "area": "Construcao civil e oficios tecnicos (BTP)",
        "advice": "Pedreiro, telhadista, carpinteiro, eletricista e condutor de obras seguem em forte escassez, 65% dos postos dificeis, apesar da queda no volume geral. Muitos desses oficios estao na lista de metiers en tension, o que facilita autorizacao de trabalho e regularizacao. Bom para quem tem experiencia pratica mesmo sem diploma superior."
      },
      {
        "area": "Hotelaria, restauracao e turismo",
        "advice": "Maior volume de vagas do pais, cozinha 97,1 mil e garcom 93,8 mil. Entrada mais acessivel para quem nao tem diploma superior; varios cargos estao em metiers en tension. Frances de atendimento e diferencial. Bom ponto de partida para construir trajetoria e depois migrar de titulo de residencia."
      },
      {
        "area": "Agricultura e agroalimentar",
        "advice": "Maior taxa de dificuldade de recrutamento do pais; viticultura e arboricultura com cerca de 83,8 mil projetos. Forte componente sazonal, com contratos sazonais via OFII. Tecnicos agroalimentares com bac+2 tambem em demanda. Caminho viavel para quem aceita trabalho fisico e regioes rurais."
      },
      {
        "area": "Sem formacao superior ou requalificacao",
        "advice": "Foco em metiers en tension acessiveis: restauracao, limpeza, aide a domicile, logistica, agricultura sazonal e ajudante de BTP. Esses setores recrutam muito estrangeiro e abrem caminho de regularizacao por trabalho ate 31/12/2026, com 12 meses de atividade num metier en tension nos ultimos 24 meses e 3 anos de residencia continua."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio nacional, todas as profissoes",
        "range": "cerca de 2.730 EUR liquidos por mes, 3.602 EUR brutos",
        "source": {
          "label": "INSEE, via sintese de imprensa",
          "url": "https://www.insee.fr/fr/statistiques/4805248",
          "official": true
        }
      },
      {
        "role": "Salario mediano nacional",
        "range": "cerca de 2.190 EUR liquidos por mes",
        "source": {
          "label": "INSEE, via sintese de imprensa",
          "url": "https://www.insee.fr/fr/statistiques/4805248",
          "official": true
        }
      },
      {
        "role": "SMIC, salario minimo, tempo integral 35h",
        "range": "1.823,03 EUR brutos por mes, cerca de 1.443 EUR liquidos, a partir de 01/01/2026; 12,02 EUR por hora",
        "source": {
          "label": "Service-Public e Legifrance, SMIC 2026",
          "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software, CDI cerca de 5 anos",
        "range": "cerca de 3.100 EUR liquidos por mes, cerca de 48.000 EUR brutos por ano",
        "source": {
          "label": "Sintese de mercado, corroboracao comunitaria nao oficial",
          "url": "https://www.meteojob.com/blog-emploi/salaire-et-remuneration/salaire-moyen-en-france-en-2026-tous-les-chiffres-par-metier",
          "official": true
        }
      },
      {
        "role": "Engenheiro de informatica",
        "range": "cerca de 49.700 EUR brutos por ano; DevOps e ciber, entrada 45.000 a 55.000 EUR",
        "source": {
          "label": "Indeed e Michael Page, corroboracao comunitaria nao oficial",
          "url": "https://fr.indeed.com/career/ingenieur-informatique/salaries",
          "official": true
        }
      },
      {
        "role": "Enfermeiro, setor saude e social, mediana",
        "range": "cerca de 2.300 EUR liquidos por mes, varia entre hospital publico e privado",
        "source": {
          "label": "Sintese de mercado, corroboracao comunitaria nao oficial",
          "url": "https://www.meteojob.com/blog-emploi/salaire-et-remuneration/salaire-moyen-en-france-en-2026-tous-les-chiffres-par-metier",
          "official": true
        }
      },
      {
        "role": "Limiar salarial Passeport Talent salarie qualifie, referencia",
        "range": "cerca de 39.582 EUR brutos por ano em 2026",
        "source": {
          "label": "Legifrance, arrete de 21/08/2025",
          "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052158119",
          "official": true
        }
      },
      {
        "role": "Limiar salarial Carte Bleue Europeenne",
        "range": "cerca de 59.373 EUR brutos por ano em 2026",
        "source": {
          "label": "Legifrance, arrete de 21/08/2025",
          "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052158119",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica trabalham e empreendem na Franca sem autorizacao especifica. Para nao europeus, a regra geral exige autorizacao de trabalho atrelada a um empregador. Metiers en tension: a lista oficial foi fixada pelo arrete de 21 de maio de 2025. Para profissoes e regioes dessa lista, o empregador pode contratar um nao europeu SEM precisar publicar a vaga antes, ou seja, com dispensa do teste de mercado de trabalho. Ate 31/12/2026 vigora ainda uma via de regularizacao por trabalho: o trabalhador em situacao irregular pode pedir titulo temporario de 1 ano se exerceu atividade assalariada num metier en tension por pelo menos 12 dos ultimos 24 meses, reside de forma ininterrupta ha pelo menos 3 anos e segue nesse metier ao pedir. Passeport Talent, carta plurianual de ate 4 anos com 10 categorias: para o perfil salarie qualifie exige em regra diploma equivalente a bac+3 ou 5 anos de experiencia reconhecida, contrato de pelo menos 1 ano e salario acima do limiar de referencia, cerca de 39.582 EUR brutos por ano em 2026, conforme arrete de 21 de agosto de 2025. A Carte Bleue Europeenne pede cerca de 59.373 EUR por ano. A categoria criador de empresa exige investimento minimo de 30.000 EUR e projeto viavel. O conjuge recebe titulo Passeport Talent famille e pode trabalhar sem restricao. Empreender: qualquer estrangeiro pode abrir micro-entreprise ou virar auto-entrepreneur desde que tenha titulo de residencia que autorize atividade por conta propria; europeus nao precisam. Para atividade comercial, artesanal ou liberal por mais de 3 meses existe a carte de sejour entrepreneur ou profession liberale, exigindo projeto economicamente viavel com renda ao menos igual ao SMIC. O custo do selo fiscal de primeira emissao subiu de 225 EUR para 350 EUR a partir de 01/05/2026. Profissoes regulamentadas: a Franca tem cerca de 230 profissoes regulamentadas, entre elas saude, direito e contabilidade. Quem vem de fora precisa de autorizacao da autoridade competente, como ordem, ministerio, ARS ou CNG, antes de exercer. Saude com diploma fora da UE passa pelas EVC do Centre National de Gestion; o ENIC-NARIC NAO trata diplomas de profissoes medicas e paramedicas regulamentadas, so faz comparabilidade academica geral.",
    "opportunityWindows": [
      "Lista de metiers en tension, arrete de 21/05/2025: contratacao de nao europeus sem teste de mercado de trabalho nas profissoes e regioes listadas",
      "Regularizacao por trabalho ate 31/12/2026: titulo de 1 ano para quem trabalhou 12 dos ultimos 24 meses num metier en tension, com 3 anos de residencia continua",
      "2,28 milhoes de projetos de contratacao na BMO 2026, com 43,8% dificeis de preencher, escassez ampla",
      "Saude: deficit estimado de cerca de 60 mil enfermeiros e 100 mil aides-soignants segundo a FHF",
      "Nuclear e energia: previsao de cerca de 100 mil contratacoes ate 2035; industria extrativa e energetica com projetos mais 24,8% em 2026",
      "Cibersseguranca: cerca de 15 mil postos nao preenchidos segundo a ANSSI, e digital com cerca de 49,5% de projetos dificeis",
      "Agricultura sazonal, viticultura e arboricultura: cerca de 83,8 mil projetos e maior taxa de dificuldade do pais, via contratos sazonais",
      "Passeport Talent: carta de 4 anos para qualificados e criadores de empresa, investimento minimo de 30.000 EUR, com trabalho livre para o conjuge"
    ],
    "jobBoards": [
      {
        "label": "France Travail (ex-Pole emploi), portal oficial de emprego",
        "url": "https://www.francetravail.fr",
        "official": true
      },
      {
        "label": "France Travail, Mobilite internationale (recrutamento de estrangeiros)",
        "url": "https://www.francetravail.fr/international/mobilite-internationale/accueil.html",
        "official": true
      },
      {
        "label": "EURES, portal europeu de emprego (rede oficial da UE)",
        "url": "https://eures.europa.eu/index_pt",
        "official": true
      },
      {
        "label": "APEC, emprego para quadros e recem-formados",
        "url": "https://www.apec.fr",
        "official": true
      },
      {
        "label": "Welcome to France e Business France, talentos internacionais e vistos",
        "url": "https://welcometofrance.com",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "INSEE, taxa de desemprego 1o trimestre 2026, 8,1%",
        "url": "https://www.insee.fr/fr/statistiques/8989990",
        "official": true
      },
      {
        "label": "INSEE, L essentiel sur le chomage",
        "url": "https://www.insee.fr/fr/statistiques/4805248",
        "official": true
      },
      {
        "label": "France Travail, Besoins en main d oeuvre 2026, BMO",
        "url": "https://www.francetravail.fr/candidat/decouvrir-le-marche-du-travail/besoins-en-main-doeuvre.html",
        "official": true
      },
      {
        "label": "France Travail statistiques, Enquete BMO 2026",
        "url": "https://www.francetravail.org/accueil/actualites/2026/enquete-bmo-2026-france-travail-deploie-sa-strategie-sectorielle-face-a-pres-de-2-3-millions-de-projets-de-recrutement.html",
        "official": true
      },
      {
        "label": "info.gouv.fr, lista de metiers en tension atualizada, arrete 21/05/2025",
        "url": "https://www.info.gouv.fr/actualite/travailleurs-etrangers-la-liste-des-metiers-en-tension-actualisee",
        "official": true
      },
      {
        "label": "Ministere de l Interieur, DGEF, lista de metiers en tension para estrangeiros",
        "url": "https://www.immigration.interieur.gouv.fr/Immigration/L-immigration-professionnelle/Liste-des-metiers-en-tension-pour-les-travailleurs-etrangers",
        "official": true
      },
      {
        "label": "Legifrance, arrete de 21/08/2025, limiares salariais Passeport Talent e Carte Bleue",
        "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052158119",
        "official": true
      },
      {
        "label": "Service-Public, Carte talent, Passeport Talent",
        "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
        "official": true
      },
      {
        "label": "Service-Public, carte entrepreneur ou profession liberale",
        "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F35795",
        "official": true
      },
      {
        "label": "Service-Public, estrangeiro pode criar empresa na Franca, micro-entreprise",
        "url": "https://entreprendre.service-public.gouv.fr/vosdroits/F22494",
        "official": true
      },
      {
        "label": "Service-Public, profissoes paramedicas com diploma estrangeiro",
        "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F3141",
        "official": true
      },
      {
        "label": "EURES, condicoes de vida e trabalho na Franca",
        "url": "https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-france_en",
        "official": true
      },
      {
        "label": "Observatoire des metiers du BTP, projetos de recrutamento na construcao 2026",
        "url": "https://www.metiers-btp.fr/actualites/projets-recrutement-bmo-2026/",
        "official": false
      },
      {
        "label": "Meteojob, salarios por profissao 2026, corroboracao comunitaria",
        "url": "https://www.meteojob.com/blog-emploi/salaire-et-remuneration/salaire-moyen-en-france-en-2026-tous-les-chiffres-par-metier",
        "official": false
      },
      {
        "label": "Indeed, salario engenheiro de informatica, corroboracao comunitaria",
        "url": "https://fr.indeed.com/career/ingenieur-informatique/salaries",
        "official": false
      }
    ]
  }
};

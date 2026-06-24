// GERADO pela equipe de agentes (rodadas labor-market-5 + labor-market-33) · atualizado 2026-06-23.
// NÃO editar à mão: regenerado a cada rodada de pesquisa.
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
  },
  "us": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho dos Estados Unidos entrou em 2026 estável, mas em ritmo mais lento. O Bureau of Labor Statistics (BLS) registrou taxa de desemprego de 4,3% em maio de 2026, dentro da faixa de 4,3% a 4,5% que vigora desde julho de 2025, com a economia adicionando cerca de 172 mil vagas no mês, concentradas em lazer e hospitalidade, governo local e saude. O salario anual mediano de todas as ocupacoes ficou em US$ 49.500 (maio de 2024, OEWS). No horizonte de uma decada, o BLS projeta criacao de 5,2 milhoes de empregos entre 2024 e 2034, crescimento de 3,1%, bem abaixo dos 13% do periodo 2014 a 2024. O motor e duplo: o envelhecimento da populacao puxa a demanda por saude e cuidado, enquanto a tecnologia avancada e a IA aceleram as ocupacoes de computacao e matematica.\n\nPara o estrangeiro, o cenario combina oportunidade real com barreira de entrada elevada. As areas que mais contratam, saude e tecnologia, sao tambem as que mais usam vistos de trabalho, mas o acesso depende quase sempre de patrocinio do empregador e, em muitas profissoes reguladas, de licenca estadual e revalidacao de diploma. O ambiente regulatorio de imigracao esta em movimento: a tentativa do governo de cobrar uma taxa de US$ 100 mil por novas peticoes H-1B foi derrubada por um juiz federal em 8 de junho de 2026, decisao que o governo prometeu recorrer, mantendo incerteza para quem planeja a temporada de loteria de 2026.",
    "hotSectors": [
      "Saude e assistencia social (maior crescimento de empregos e setor que mais cresce, +8,4% projetado pelo BLS 2024-2034)",
      "Servicos profissionais, cientificos e tecnicos",
      "Tecnologia da informacao e ocupacoes de computacao e matematica (+10,1%, mais de 3x a media da economia)",
      "Energia limpa (instaladores fotovoltaicos solares e tecnicos de turbina eolica sao as ocupacoes que mais crescem em percentual)",
      "Cuidado domiciliar e cuidado pessoal a idosos",
      "Lazer e hospitalidade",
      "Governo local"
    ],
    "coolingSectors": [
      "Varejo (maior perda de empregos de qualquer setor, pressionado por automacao, consolidacao e comercio eletronico)",
      "Funcoes administrativas de escritorio (office clerks -7%; bookkeeping, accounting e auditing clerks -6%)",
      "Caixas de loja (maior queda individual, cerca de 314 mil vagas a menos entre 2024 e 2034)",
      "Ocupacoes de vendas em pontos fisicos de varejo",
      "Funcoes clericais e de preparo de documentos sujeitas a automacao"
    ],
    "inDemandRoles": [
      {
        "role": "Auxiliares de saude domiciliar e cuidado pessoal (home health and personal care aides)",
        "note": "Maior numero de novas vagas entre as 832 ocupacoes do BLS; cerca de 765.800 vagas/ano na decada; crescimento de 17%. Exige pouca formacao formal."
      },
      {
        "role": "Desenvolvedores de software (software developers)",
        "note": "Cerca de 739.800 novas vagas projetadas; salario mediano US$ 133.080. Profissao de forte uso de visto H-1B."
      },
      {
        "role": "Enfermeiros registrados (registered nurses)",
        "note": "Cerca de 164.000 novas vagas; salario mediano US$ 93.600 (OEWS maio/2024). Exige licenca estadual e, para estrangeiros, certificado CGFNS e NCLEX."
      },
      {
        "role": "Enfermeiros practitioners (nurse practitioners)",
        "note": "Ocupacao de saude que mais cresce 2024-2034, puxada pelo envelhecimento da populacao."
      },
      {
        "role": "Assistentes de fisioterapia e assistentes medicos (physician assistants, physical therapist assistants)",
        "note": "Entre as ocupacoes de saude de crescimento mais rapido."
      },
      {
        "role": "Analistas de seguranca da informacao (information security analysts)",
        "note": "Salario mediano US$ 124.910; demanda alta em ciberseguranca."
      },
      {
        "role": "Instaladores fotovoltaicos solares e tecnicos de turbina eolica",
        "note": "As ocupacoes que mais crescem em percentual, embora somem menos de 20 mil novas vagas no total."
      },
      {
        "role": "Cientistas de dados e pesquisadores de computacao",
        "note": "Computer and information research scientists com salario mediano US$ 140.910; grupo de computacao cresce 2x mais rapido que a media."
      }
    ],
    "byQualification": [
      {
        "area": "Sem diploma superior / ensino medio ou menos",
        "advice": "O maior volume de vagas esta em cuidado (auxiliar de saude domiciliar, cuidado pessoal), hospitalidade e servicos. Sao postos de salario mediano baixo (suporte de saude teve mediana de US$ 37.180 em maio/2024), mas com entrada rapida e treinamento no proprio emprego. Para o estrangeiro, porem, raramente ha patrocinio de visto nessas funcoes, o que torna o acesso dependente de ja ter autorizacao de trabalho (green card, EAD, status valido)."
      },
      {
        "area": "Formacao tecnica / pos-secundaria nao universitaria",
        "advice": "Energia limpa (instalacao solar, turbinas eolicas), assistencia de saude (assistentes de fisioterapia, tecnicos) e oficios licenciados oferecem crescimento. Verifique no CareerOneStop License Finder se a ocupacao exige licenca estadual e se ha reciprocidade entre estados antes de planejar a mudanca."
      },
      {
        "area": "Bacharelado",
        "advice": "Tecnologia da informacao, engenharia e enfermagem concentram as melhores combinacoes de salario e demanda. Para o estrangeiro, e a faixa classica do visto H-1B (exige oferta de emprego em ocupacao de especialidade e diploma na area). A nova regra de selecao ponderada por salario, vigente desde 27/02/2026, favorece quem recebe ofertas de salario mais alto, dando ate 4 entradas na loteria para nivel salarial IV."
      },
      {
        "area": "Pos-graduacao / mestrado e doutorado",
        "advice": "Abre o sub-teto de 20 mil vagas H-1B reservado a titulares de mestrado ou superior de instituicao americana, alem das categorias EB-2 (profissionais com diploma avancado ou habilidade excepcional) para residencia permanente. Profissoes de computacao e pesquisa pagam as maiores medianas (cientistas de pesquisa em computacao US$ 140.910)."
      },
      {
        "area": "Habilidade extraordinaria / executivos e empreendedores",
        "advice": "Quem tem reconhecimento internacional na area pode buscar o visto O-1A (nao imigrante) ou o EB-1A (residencia permanente), sem necessidade de patrocinio de empregador no caso do EB-1A. Executivos e gerentes multinacionais usam L-1 (transferencia intracompanhia) ou EB-1C. Investidores e empreendedores tem E-2 (pais com tratado), EB-5 (investimento) e o International Entrepreneur Parole."
      }
    ],
    "salaries": [
      {
        "role": "Todas as ocupacoes (mediana nacional)",
        "range": "US$ 49.500/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OEWS - Overview May 2024",
          "url": "https://www.bls.gov/oes/2024/may/overview_2024.htm",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software",
        "range": "US$ 133.080/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Software Developers",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
          "official": true
        }
      },
      {
        "role": "Enfermeiro registrado (registered nurse)",
        "range": "US$ 93.600/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Registered Nurses",
          "url": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
          "official": true
        }
      },
      {
        "role": "Ocupacoes de TI/computacao (grupo)",
        "range": "US$ 105.990/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Computer and Information Technology Occupations",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/",
          "official": true
        }
      },
      {
        "role": "Analista de seguranca da informacao",
        "range": "US$ 124.910/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Information Security Analysts",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
          "official": true
        }
      },
      {
        "role": "Cientista de pesquisa em computacao e informacao",
        "range": "US$ 140.910/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Computer and Information Research Scientists",
          "url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
          "official": true
        }
      },
      {
        "role": "Ocupacoes de suporte de saude (grupo, ex. auxiliar de saude domiciliar)",
        "range": "US$ 37.180/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Healthcare Occupations",
          "url": "https://www.bls.gov/ooh/healthcare/",
          "official": true
        }
      },
      {
        "role": "Ocupacoes de saude (praticantes e tecnicos, grupo)",
        "range": "US$ 83.090/ano (mediano, maio/2024)",
        "source": {
          "label": "BLS OOH - Healthcare Occupations",
          "url": "https://www.bls.gov/ooh/healthcare/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Trabalhar legalmente nos EUA exige autorizacao de trabalho: green card (residencia permanente, prova por si so o direito de trabalhar), Employment Authorization Document (Form I-766/EAD) ou um visto de trabalho com status valido. Estrangeiro sem essas condicoes nao pode ser contratado. Caminhos temporarios mais comuns: H-1B (ocupacao de especialidade, exige diploma e patrocinio do empregador; teto anual de 85.000, sendo 65.000 no teto regular e 20.000 reservados a mestres/doutores de instituicao americana; registro eletronico com taxa de US$ 215 por beneficiario; temporada FY2027 abre em 4 de marco e vai ate 19 de marco de 2026; nova regra de selecao ponderada por salario vigente desde 27/02/2026). Vistos baseados em emprego para residencia permanente: EB-1 (gerentes/executivos multinacionais e habilidade extraordinaria), EB-2 (diploma avancado ou habilidade excepcional, inclui o National Interest Waiver) e EB-3 (trabalhadores qualificados, profissionais e outros). EB-2 e EB-3 geralmente exigem a certificacao de trabalho permanente PERM, em que o Department of Labor (DOL) verifica que nao ha trabalhador americano qualificado disponivel e que a contratacao do estrangeiro nao prejudica salarios locais; antes do PERM, o empregador precisa obter a determinacao de salario prevalecente no National Prevailing Wage Center. Profissoes reguladas (enfermagem, medicina, direito, engenharia, ensino, oficios) exigem LICENCA ESTADUAL, concedida por orgaos estaduais e com requisitos que variam de estado para estado; pode haver reciprocidade entre estados, mas nao e automatica. Para enfermagem, o estrangeiro normalmente precisa do certificado CGFNS (avaliacao favoravel das credenciais, exame de habilidades e proficiencia em ingles via TOEFL ou similar) e aprovacao no NCLEX. Atualizacao critica: a taxa de US$ 100 mil por novas peticoes H-1B, criada por proclamacao presidencial em 19/09/2025, foi declarada ilegal por um juiz federal de Massachusetts em 08/06/2026 (alegacao de que so o Congresso pode instituir tal cobranca); o governo anunciou recurso, entao acompanhe a situacao antes de planejar custos. Confirme sempre cada regra nas fontes oficiais USCIS, DOL e travel.state.gov.",
    "opportunityWindows": [
      "Temporada de registro da loteria H-1B FY2027 abre ao meio-dia (ET) de 4 de marco e fecha as 17h (ET) de 19 de marco de 2026; taxa de registro de US$ 215 por beneficiario",
      "Nova regra de selecao ponderada por salario (vigente desde 27/02/2026) beneficia candidatos com ofertas de salario mais alto, dando ate 4 entradas na loteria para o nivel salarial IV",
      "Estudantes internacionais em status F-1 com OPT e quem ja tem visto de trabalho podem mudar de status sem cair em taxas extras de peticao",
      "Demanda estrutural e duradoura em saude e cuidado a idosos puxada pelo envelhecimento da populacao americana ao longo de toda a decada 2024-2034",
      "Expansao de energia limpa (solar e eolica) abre as ocupacoes de crescimento percentual mais rapido",
      "Incerteza juridica em torno da taxa de US$ 100 mil (derrubada em 08/06/2026, com recurso anunciado) recomenda agir e acompanhar a evolucao antes de definir custos de patrocinio"
    ],
    "jobBoards": [
      {
        "label": "USAJobs (vagas do governo federal dos EUA)",
        "url": "https://www.usajobs.gov/",
        "official": true
      },
      {
        "label": "CareerOneStop - Job Search (Department of Labor)",
        "url": "https://www.careeronestop.org/JobSearch/job-search.aspx",
        "official": true
      },
      {
        "label": "CareerOneStop License Finder (licencas por estado/profissao)",
        "url": "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx",
        "official": true
      },
      {
        "label": "O*NET OnLine (perfis ocupacionais oficiais)",
        "url": "https://www.onetonline.org/",
        "official": true
      },
      {
        "label": "DOL FLAG - Foreign Labor Application Gateway (PERM, prevailing wage)",
        "url": "https://flag.dol.gov/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "BLS - Employment Situation Summary (maio 2026)",
        "url": "https://www.bls.gov/news.release/empsit.nr0.htm",
        "official": true
      },
      {
        "label": "BLS - Employment Projections 2024-2034 (release)",
        "url": "https://www.bls.gov/news.release/ecopro.nr0.htm",
        "official": true
      },
      {
        "label": "BLS - Industry and occupational projections overview 2024-34 (Monthly Labor Review)",
        "url": "https://www.bls.gov/opub/mlr/2026/article/industry-and-occupational-employment-projections-overview.htm",
        "official": true
      },
      {
        "label": "BLS - Fastest Growing Occupations (OOH)",
        "url": "https://www.bls.gov/ooh/fastest-growing.htm",
        "official": true
      },
      {
        "label": "BLS - Most New Jobs (OOH)",
        "url": "https://www.bls.gov/ooh/most-new-jobs.htm",
        "official": true
      },
      {
        "label": "BLS - Fastest declining occupations",
        "url": "https://www.bls.gov/emp/tables/fastest-declining-occupations.htm",
        "official": true
      },
      {
        "label": "BLS OEWS - Overview May 2024 (mediana salarial)",
        "url": "https://www.bls.gov/oes/2024/may/overview_2024.htm",
        "official": true
      },
      {
        "label": "USCIS - Permanent Workers (EB-1, EB-2, EB-3)",
        "url": "https://www.uscis.gov/working-in-the-united-states/permanent-workers",
        "official": true
      },
      {
        "label": "USCIS - H-1B Cap Season",
        "url": "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-cap-season",
        "official": true
      },
      {
        "label": "USCIS - Employment Authorization Document (EAD)",
        "url": "https://www.uscis.gov/green-card/green-card-processes-and-procedures/employment-authorization-document",
        "official": true
      },
      {
        "label": "USCIS - Options for Alien Entrepreneurs (E-2, EB-5, L-1, O-1, parole)",
        "url": "https://www.uscis.gov/working-in-the-united-states/options-for-alien-entrepreneurs-to-work-in-the-united-states",
        "official": true
      },
      {
        "label": "DOL - Permanent Labor Certification (PERM)",
        "url": "https://www.dol.gov/agencies/eta/foreign-labor/programs/permanent",
        "official": true
      },
      {
        "label": "Travel.State.Gov - Employment-Based Immigrant Visas",
        "url": "https://travel.state.gov/content/travel/en/us-visas/immigrate/employment-based-immigrant-visas.html",
        "official": true
      },
      {
        "label": "CareerOneStop - Licensed Occupations",
        "url": "https://www.careeronestop.org/ExploreCareers/Plan/licensed-occupations.aspx",
        "official": true
      },
      {
        "label": "NPR - Federal judge strikes down $100,000 H-1B fee (jun/2026)",
        "url": "https://www.npr.org/2026/06/09/nx-s1-5851474/federal-judge-fee-h1b-visa",
        "official": false
      },
      {
        "label": "USCIS - H-1B Electronic Registration Process (taxa US$ 215, temporada FY2027)",
        "url": "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process",
        "official": true
      }
    ]
  },
  "br": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho brasileiro chega a 2026 no melhor momento da série histórica. A taxa de desocupação fechou 2025 em 5,1% no trimestre encerrado em dezembro, menor patamar desde o início da PNAD Contínua em 2012, com média anual de 5,6%, segundo o IBGE. A população ocupada bateu recorde em 103 milhões de pessoas, e o emprego formal com carteira assinada no setor privado alcançou 38,9 milhões, alta de 2,8% no ano. O rendimento médio real subiu para R$ 3.560, crescimento de 5,7% sobre 2024. Nos primeiros meses de 2026 o ritmo de geração de vagas seguiu positivo: o Novo CAGED registrou saldo acumulado de mais de 1 milhão de empregos formais até maio. Para o imigrante e o estrangeiro, o quadro favorece quem tem qualificação técnica, principalmente em tecnologia, dados e saúde, áreas onde a demanda cresce mais rápido do que a formação de profissionais no país.\nApesar dos números fortes, persistem dois traços estruturais que o estrangeiro precisa considerar. A informalidade ainda atinge 38,1% dos ocupados e o trabalho por conta própria soma 26,1 milhões de pessoas, recorde histórico, o que mostra um mercado dual em que parte expressiva das ocupações não tem proteção formal. Os salários médios de admissão registrados no CAGED giram em torno de R$ 2.386, valor modesto em comparação a mercados de imigração tradicionais, embora o custo de vida também seja mais baixo. O ingresso formal de estrangeiros é regido pela Lei de Migração (Lei 13.445/2017) e exige, na maioria dos casos, autorização de residência laboral solicitada pelo empregador via sistema MigranteWeb, ou aporte mínimo em empresa para o visto de investidor.",
    "hotSectors": [
      "Serviços (saúde, educação, administração pública, informação e atividades financeiras), responsável por 57,3% das vagas formais geradas em 2026",
      "Tecnologia da informação e dados, com forte escassez de talentos (apagão de mão de obra qualificada)",
      "Construção civil, com destaque para edificações",
      "Indústria de transformação, com destaque para alimentos e automotivo",
      "Saúde, impulsionada pelo envelhecimento populacional e saúde mental",
      "Agropecuária sazonal (café, maçã, alho)"
    ],
    "coolingSectors": [
      "Comércio, único setor com saldo negativo de empregos formais no acumulado de 2026 (-26,6 mil até abril), com o varejo de vestuário entre os mais afetados",
      "Serviços domésticos, em queda de 4,4% no fechamento de 2025"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedor de software",
        "note": "Uma das maiores carências do mercado; demanda em todos os níveis de senioridade"
      },
      {
        "role": "Cientista de dados / analista de dados",
        "note": "Crescimento puxado por IA e analytics"
      },
      {
        "role": "Engenheiro de IA / machine learning",
        "note": "Função emergente de alta procura"
      },
      {
        "role": "Especialista em cibersegurança / segurança da informação",
        "note": "Um dos maiores gargalos de talentos do país"
      },
      {
        "role": "Médico especialista",
        "note": "Geriatria, psiquiatria e oncologia em alta; exige Revalida para diploma estrangeiro"
      },
      {
        "role": "Enfermeiro e profissionais de saúde",
        "note": "Setor em expansão estrutural"
      },
      {
        "role": "Profissional de marketing digital e vendas",
        "note": "Empregadores relatam dificuldade de contratação (21%)"
      },
      {
        "role": "Profissional de atendimento ao cliente",
        "note": "29% dos empregadores relatam dificuldade de contratação"
      },
      {
        "role": "Profissional de ESG e sustentabilidade",
        "note": "Tendência ligada a exigências regulatórias e corporativas"
      },
      {
        "role": "Trabalhador de construção civil",
        "note": "Edificações lideram a geração de vagas no setor"
      }
    ],
    "byQualification": [
      {
        "area": "Alta qualificação em tecnologia (TI, dados, IA, cibersegurança)",
        "advice": "É o caminho mais acessível e bem remunerado para o estrangeiro. A demanda supera a oferta de talentos locais e há empresas dispostas a patrocinar a autorização de residência laboral. Salários sênior superam com folga a média nacional. Domínio do português ajuda, mas muitas vagas de produto e empresas globais operam em inglês."
      },
      {
        "area": "Saúde (medicina, enfermagem)",
        "advice": "Profissões regulamentadas com barreira alta. O diploma de medicina obtido no exterior só é revalidado pelo Revalida (Inep), única via desde a Resolução CNE/CES 2/2024, com prova duas vezes ao ano. Outras áreas usam o Portal Carolina Bori (MEC). Após revalidar, é obrigatório registro no conselho de classe (CRM, COREN). Todos os documentos exigem tradução juramentada."
      },
      {
        "area": "Engenharia e profissões técnicas reguladas",
        "advice": "Engenheiro formado no exterior não faz prova como o médico, mas precisa revalidar o diploma pelo Portal Carolina Bori e registrar-se no CREA. Demanda firme em construção, indústria e infraestrutura."
      },
      {
        "area": "Negócios, gestão e empreendedorismo",
        "advice": "Para quem tem capital, o visto de investidor é a rota mais direta: aporte mínimo de R$ 500 mil em empresa brasileira (ou R$ 150 mil em projeto de tecnologia/inovação com plano de negócios aprovado) dá direito a residência, que pode ser permanente enquanto o investimento se mantiver."
      },
      {
        "area": "Baixa qualificação / sem diploma reconhecido",
        "advice": "Caminho mais difícil. O mercado formal de baixa qualificação paga salários de admissão modestos (em torno de R$ 2.386) e a informalidade é alta (38,1%). Sem oferta formal de emprego que justifique a autorização de residência, o ingresso regular é limitado; vale priorizar setores com vínculo formal como construção e serviços."
      }
    ],
    "salaries": [
      {
        "role": "Salário médio de admissão (todos os setores)",
        "range": "R$ 2.386,56/mês",
        "source": {
          "label": "Novo CAGED / Ministério do Trabalho e Emprego (abril 2026)",
          "url": "https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/maio/pais-gerou-85-888-empregos-em-abril-chegando-a-um-saldo-de-699-762-vagas-formais-no-ano-crescimento-de-1-5",
          "official": true
        }
      },
      {
        "role": "Rendimento médio real do trabalhador (geral)",
        "range": "R$ 3.560/mês",
        "source": {
          "label": "IBGE / PNAD Contínua (4º tri 2025, via SECOM)",
          "url": "https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/01/desemprego-atinge-menor-nivel-da-serie-historica-e-mercado-de-trabalho-registra-recordes-em-2025",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software",
        "range": "R$ 3.532 a R$ 7.728/mês (pleno ~R$ 5.479; sênior ~R$ 11.354)",
        "source": {
          "label": "Glassdoor Brasil (corroboração de comunidade, não oficial)",
          "url": "https://www.glassdoor.com.br/Sal%C3%A1rios/desenvolvedor-de-software-sal%C3%A1rio-SRCH_KO0,25.htm",
          "official": true
        }
      },
      {
        "role": "Cientista de dados",
        "range": "R$ 6.508 a R$ 13.333/mês (sênior até ~R$ 21.371)",
        "source": {
          "label": "Glassdoor Brasil (corroboração de comunidade, não oficial)",
          "url": "https://www.glassdoor.com.br/Sal%C3%A1rios/cientista-de-dados-sal%C3%A1rio-SRCH_KO0,18.htm",
          "official": true
        }
      },
      {
        "role": "Enfermeiro",
        "range": "~R$ 4.950/mês (até R$ 8.581 no percentil 90; SP ~R$ 5.922)",
        "source": {
          "label": "Glassdoor Brasil (corroboração de comunidade, não oficial)",
          "url": "https://www.glassdoor.com.br/Sal%C3%A1rios/enfermeiro-sal%C3%A1rio-SRCH_KO0,10.htm",
          "official": true
        }
      },
      {
        "role": "Médico",
        "range": "~R$ 13.100/mês (até R$ 40.200 no percentil 90; SP ~R$ 15.910)",
        "source": {
          "label": "Glassdoor Brasil (corroboração de comunidade, não oficial)",
          "url": "https://www.glassdoor.com.br/Sal%C3%A1rios/medico-sal%C3%A1rio-SRCH_KO0,6.htm",
          "official": true
        }
      }
    ],
    "foreignerRules": "O ingresso e a permanência de estrangeiros para trabalho são regidos pela Lei de Migração (Lei 13.445/2017) e pelo Decreto 9.199/2017. A regra geral é a autorização de residência para fins laborais: na modalidade com vínculo empregatício, a empresa brasileira contratante protocola o pedido no Ministério da Justiça e Segurança Pública pelo sistema MigranteWeb (versão 2.0) antes da emissão do visto de trabalho (VITEM V) pelo consulado. A residência laboral pode ser concedida por até 2 anos, prorrogável. Após entrar no país, o estrangeiro tem prazo improrrogável de 90 dias para comparecer à Polícia Federal e obter a Carteira de Registro Nacional Migratório (CRNM). O Decreto 12.657/2025 permite assistência técnica por até 180 dias por ano sem necessidade de visto específico de trabalho.\n\nPara quem quer empreender, o visto de investidor (VITEM IX) exige aporte mínimo de R$ 500 mil no capital de empresa brasileira (nova ou existente), com possibilidade de residência permanente enquanto o investimento for mantido; há valor reduzido de R$ 150 mil para projetos de tecnologia e inovação com plano de negócios aprovado. Há ainda a modalidade de investidor imobiliário (a partir de R$ 1 milhão, ou R$ 700 mil nas regiões Norte e Nordeste). As bases normativas são as Resoluções do Conselho Nacional de Imigração (RN 11/2017 para administradores/executivos, RN 13/2017 para investidores pessoa física, RN 36/2018 para investidor imobiliário).\n\nAtenção às profissões regulamentadas: revalidação de diploma é obrigatória e não basta sozinha, pois exige também registro no conselho de classe. Medicina passou a aceitar exclusivamente o Revalida (Inep) como via de revalidação, aplicado duas vezes ao ano (Resolução CNE/CES 2/2024); demais profissões usam o Portal Carolina Bori do MEC. Todos os documentos estrangeiros precisam de tradução juramentada por tradutor público registrado no Brasil.",
    "opportunityWindows": [
      "Desemprego em mínima histórica (5,1% em dez/2025) e mais de 1 milhão de vagas formais geradas em 2026 ampliam a chance de patrocínio de autorização de residência por empregadores",
      "Apagão de talentos em TI, dados e cibersegurança: 39% dos empregadores relatam dificuldade de contratar nessas áreas, abrindo espaço para estrangeiros qualificados",
      "Visto de investidor com valor reduzido (R$ 150 mil) para projetos de tecnologia e inovação, mais acessível que o aporte padrão de R$ 500 mil",
      "Envelhecimento populacional sustenta demanda crescente e estável por profissionais de saúde, especialmente geriatria, psiquiatria e oncologia",
      "São Paulo, Minas Gerais e Santa Catarina lideram a geração de vagas formais em 2026, concentrando oportunidades"
    ],
    "jobBoards": [
      {
        "label": "Portal Emprega Brasil (Sine) - Ministério do Trabalho e Emprego",
        "url": "https://empregabrasil.mte.gov.br/",
        "official": true
      },
      {
        "label": "Buscar Emprego no Sistema Nacional de Emprego (Sine) - gov.br",
        "url": "https://www.gov.br/pt-br/servicos/buscar-emprego-no-sistema-nacional-de-emprego-sine",
        "official": true
      },
      {
        "label": "Portal de Imigração Laboral - Autorização de Residência (Ministério da Justiça)",
        "url": "https://portaldeimigracao.mj.gov.br/pt/autorizacao-de-residencia-laboral",
        "official": true
      },
      {
        "label": "LinkedIn Empregos (corroboração de comunidade, não oficial)",
        "url": "https://www.linkedin.com/jobs/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "IBGE - Desocupação cai para 5,1% em dezembro e 2025 tem melhores resultados da série histórica (PNAD Contínua)",
        "url": "https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/01/desemprego-atinge-menor-nivel-da-serie-historica-e-mercado-de-trabalho-registra-recordes-em-2025",
        "official": true
      },
      {
        "label": "IBGE - Desemprego (página Explica)",
        "url": "https://www.ibge.gov.br/explica/desemprego.php",
        "official": true
      },
      {
        "label": "SECOM - Menor desemprego da série histórica em fevereiro: 5,8%",
        "url": "https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/03/brasil-tem-menor-desemprego-da-serie-historica-para-trimestre-encerrado-em-fevereiro-5-8",
        "official": true
      },
      {
        "label": "Novo CAGED - Brasil gera 85.888 empregos em abril, saldo de 699.762 no ano (MTE)",
        "url": "https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/maio/pais-gerou-85-888-empregos-em-abril-chegando-a-um-saldo-de-699-762-vagas-formais-no-ano-crescimento-de-1-5",
        "official": true
      },
      {
        "label": "Novo CAGED - Brasil encerra 2025 com saldo positivo de 1,27 milhão de empregos formais (MTE)",
        "url": "https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/janeiro/novo-caged-brasil-encerra-2025-com-saldo-positivo-de-1-27-milhao-de-empregos-formais",
        "official": true
      },
      {
        "label": "Novo CAGED - Sumário Executivo (PDF, MTE)",
        "url": "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged/2026/marco/sumario-executivo_marco-de-2026.pdf",
        "official": true
      },
      {
        "label": "Portal de Imigração - Autorização de Residência Laboral (Ministério da Justiça)",
        "url": "https://portaldeimigracao.mj.gov.br/pt/autorizacao-de-residencia-laboral",
        "official": true
      },
      {
        "label": "MRE - Visto Temporário IX (Investimento)",
        "url": "https://www.gov.br/mre/pt-br/consulado-porto/servicos-consulares/vistos/visto-ix-investimento",
        "official": true
      },
      {
        "label": "gov.br - Obter autorização de residência para fins laborais a imigrantes",
        "url": "https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-para-fins-laborais-a-imigrantes",
        "official": true
      },
      {
        "label": "Sistema Nacional de Emprego (Sine) - gov.br / MTE",
        "url": "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/sistema-nacional-de-emprego-sine",
        "official": true
      },
      {
        "label": "CFM/Portal Médico - Revalida é única forma de revalidação de diplomas médicos estrangeiros",
        "url": "https://portal.cfm.org.br/noticias/revalida-e-agora-a-unica-forma-de-revalidacao-de-diplomas-estrangeiros-no-brasil/",
        "official": true
      },
      {
        "label": "gov.br - Fazer o Exame Nacional de Revalidação de Diplomas Médicos (Revalida/Inep)",
        "url": "https://www.gov.br/pt-br/servicos/fazer-o-exame-nacional-de-revalidacao-de-diplomas-medicos-expedidos-por-instituicao-de-educacao-superior-estrangeira",
        "official": true
      },
      {
        "label": "Glassdoor Brasil - faixas salariais por profissão (comunidade, não oficial)",
        "url": "https://www.glassdoor.com.br/",
        "official": false
      },
      {
        "label": "Unico - Profissões em alta para 2026 (corroboração de comunidade, não oficial)",
        "url": "https://blog.unico.io/profissoes-em-alta-2026/",
        "official": false
      }
    ]
  },
  "pt": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho português entrou em 2026 num momento de viragem depois de mais de um ano em queda do desemprego. Segundo o Instituto Nacional de Estatística (INE), a taxa de desemprego subiu de 5,8% no quarto trimestre de 2025 para 6,1% no primeiro trimestre de 2026, interrompendo o ciclo de descida. No mesmo período a economia perdeu cerca de 39 mil postos de trabalho em termos líquidos, a maior quebra trimestral desde 2021, embora o emprego total ainda cresça em termos homólogos e ultrapasse os 5,3 milhões de pessoas. A taxa de subutilização do trabalho ronda os 10% e o desemprego jovem, apesar de recuar, mantém-se elevado, perto de 19%. O salário bruto médio mensal situou-se em torno dos 1.694 euros em 2025 e o salário mínimo nacional passou a 920 euros em janeiro de 2026.\nApesar do arrefecimento, persiste um descasamento estrutural entre a oferta e a procura de mão de obra. Há défice crónico de profissionais em saúde, tecnologia, construção e hotelaria, enquanto setores tradicionais como o têxtil, a indústria extrativa e parte do retalho perdem peso. Lisboa, Porto e Setúbal concentram os salários mais altos, puxados pelo ecossistema tecnológico, e o país continua a depender de imigração para preencher vagas que ficam abertas há mais de 90 dias. Para o estrangeiro, o quadro combina oportunidade real em setores carenciados com um sistema de vistos que ficou mais exigente em documentação a partir de 2026, sob a nova estrutura da AIMA.",
    "hotSectors": [
      "Saúde (medicina e enfermagem)",
      "Tecnologias de informação e digital (programação, cloud, cibersegurança, dados e IA)",
      "Construção civil e obras públicas",
      "Hotelaria, restauração e turismo",
      "Energias renováveis (solar e eólica)",
      "Logística e transporte rodoviário de mercadorias",
      "Indústria transformadora qualificada (CNC, soldadura, mecânica industrial)",
      "Engenharia"
    ],
    "coolingSectors": [
      "Indústria têxtil e do vestuário",
      "Indústria extrativa e mineira",
      "Retalho não especializado e venda por correspondência/Internet",
      "Algumas especialidades tradicionais da construção sem reconversão",
      "Funções administrativas de baixa qualificação sujeitas a automação"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro (geral e especialista em UCI, bloco operatório, oncologia)",
        "note": "Topo da lista de carência; sistema pressionado pelo envelhecimento e pela saída de profissionais para o estrangeiro"
      },
      {
        "role": "Médico (clínica geral e medicina familiar)",
        "note": "Escassez crónica no SNS"
      },
      {
        "role": "Programador full-stack, backend e frontend",
        "note": "Procura forte em Lisboa e Porto; concorrência internacional pelos perfis"
      },
      {
        "role": "Engenheiro DevOps, cloud e SRE",
        "note": "Perfil técnico muito procurado"
      },
      {
        "role": "Analista de cibersegurança",
        "note": "Setor crítico em expansão"
      },
      {
        "role": "Cientista de dados e engenheiro de IA",
        "note": "Entre as funções adicionadas à lista de carência em 2026"
      },
      {
        "role": "Engenheiro civil e encarregado de obra",
        "note": "Construção com vagas abertas há mais de 90 dias"
      },
      {
        "role": "Eletricista (industrial e de edifícios), canalizador, pedreiro, carpinteiro e pintor",
        "note": "Forte carência na construção"
      },
      {
        "role": "Soldador certificado (MIG/MAG/TIG)",
        "note": "Indústria e construção"
      },
      {
        "role": "Operador CNC e mecânico industrial",
        "note": "Indústria transformadora qualificada"
      },
      {
        "role": "Instalador fotovoltaico e técnico de turbinas eólicas",
        "note": "Crescimento das energias renováveis"
      },
      {
        "role": "Chef de partie, sous-chef e pasteleiro; empregado de mesa e bar experiente",
        "note": "Hotelaria vital para a economia, mas com alta rotatividade e precariedade"
      },
      {
        "role": "Motorista de pesados (carta C + CE)",
        "note": "Logística e transporte de mercadorias"
      }
    ],
    "byQualification": [
      {
        "area": "Saúde (medicina e enfermagem)",
        "advice": "É a área com maior carência e maior facilidade de colocação para estrangeiros. Antecipe o reconhecimento do diploma e do registo profissional (Ordem dos Médicos ou Ordem dos Enfermeiros) ainda no país de origem, porque são profissões regulamentadas e o registo é obrigatório para exercer. Domínio do português é exigido no contacto clínico."
      },
      {
        "area": "Tecnologia e engenharia de software",
        "advice": "Setor que paga ao dobro da mediana nacional e aceita inglês em muitas empresas. Aposte em Lisboa e Porto, em hubs de empresas internacionais e startups. Funções de cloud, cibersegurança, dados e IA têm via potencialmente mais rápida por entrarem na lista de profissões em falta e no visto D3 (atividade altamente qualificada)."
      },
      {
        "area": "Engenharia civil e construção qualificada",
        "advice": "Procura sólida com vagas que ficam meses abertas. Engenheiros devem verificar o reconhecimento junto da Ordem dos Engenheiros. Profissões técnicas (eletricista, soldador, canalizador) ganham com certificações reconhecidas e podem usar a lista de carência a favor do visto."
      },
      {
        "area": "Energias renováveis e indústria transformadora",
        "advice": "Técnicos de fotovoltaico, eólica, CNC e mecânica industrial têm procura crescente. Certificações técnicas e experiência comprovada pesam mais do que grau académico; vale validar competências via centros do IEFP."
      },
      {
        "area": "Hotelaria e turismo",
        "advice": "Porta de entrada acessível para quem chega sem rede, sobretudo em zonas turísticas. Atenção à precariedade, sazonalidade e rotatividade do setor; perfis qualificados (chefs, gestão) têm melhor estabilidade e progressão."
      },
      {
        "area": "Baixa qualificação / setores em queda",
        "advice": "Têxtil, retalho tradicional e administrativo de rotina estão a perder postos e oferecem menor segurança. Recomenda-se requalificação para áreas carenciadas, aproveitando formação do IEFP, antes de migrar com base nesses setores."
      }
    ],
    "salaries": [
      {
        "role": "Salário mínimo nacional",
        "range": "920 euros/mês brutos (14 meses), em vigor desde janeiro de 2026",
        "source": {
          "label": "Pordata / INE",
          "url": "https://www.pordata.pt/pt/estatisticas/salarios-e-pensoes/salarios/salario-minimo-nacional",
          "official": true
        }
      },
      {
        "role": "Remuneração bruta total mensal média (todos os setores)",
        "range": "cerca de 1.694 euros/mês (dados 2025)",
        "source": {
          "label": "INE - Mercado de trabalho",
          "url": "https://www.ine.pt/xportal/xmain?xpgid=ine_tema&xpid=INE&tema_cod=1114&xlang=pt",
          "official": true
        }
      },
      {
        "role": "Salário mediano bruto",
        "range": "aproximadamente 1.240 euros/mês (14 meses)",
        "source": {
          "label": "INE (compilado por imprensa especializada)",
          "url": "https://www.ine.pt/xportal/xmain?xpgid=ine_tema&xpid=INE&tema_cod=1114&xlang=pt",
          "official": true
        }
      },
      {
        "role": "Setor de tecnologias de informação (TIC)",
        "range": "remuneração bruta mensal média cerca de 2.658 euros (2025), perto do dobro da mediana nacional",
        "source": {
          "label": "INE (via Santander Salto)",
          "url": "https://www.santander.pt/salto/salario-medio-portugal-2026",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadãos da UE, EEE e Suíça trabalham livremente, sem visto. Para nacionais de países terceiros, o trabalho exige visto nacional (série D) e, depois da entrada, autorização de residência junto da AIMA (Agência para a Integração, Migrações e Asilo), que substituiu o SEF. Principais vias: D1 (atividade profissional subordinada, com contrato superior a um ano; em regra exige que a vaga tenha sido anunciada no IEFP sem candidato nacional disponível), D2 (atividade independente, empreendedores e pequenos negócios, com plano de negócios analisado pelo consulado), D3 (atividade altamente qualificada ou docente, ligada ao Cartão Azul UE) e o visto para procura de trabalho (artigo 88.º, n.º 7), válido por 120 dias, que permite entrar para procurar emprego subordinado e até trabalhar até ser concedida a autorização de residência. Existe ainda o StartUP Visa, gerido pelo IAPMEI, para projetos de inovação acolhidos por incubadora certificada, com exigência de meios de subsistência (cerca de 11.040 euros/ano) e potencial de criar emprego qualificado. O processo é em dois passos: visto no consulado/VFS Global (D1 com prazo estimado de 60 a 90 dias úteis) e depois pedido de autorização de residência à AIMA no prazo de quatro meses após a chegada; a AR inicial costuma ser de 2 anos, renovável. Atenção a duas mudanças de 2026: a AIMA deixou de aceitar pedidos com documentação incompleta e houve reestruturação de fluxos de vistos de trabalho a partir de 1 de junho de 2026, exigindo dossiê completo logo à partida. Profissões regulamentadas (medicina, enfermagem, engenharia, entre outras) exigem reconhecimento de habilitações e inscrição na respetiva Ordem antes de exercer.",
    "opportunityWindows": [
      "Lista de profissões em falta atualizada trimestralmente pelo IEFP cria via mais rápida de visto para enfermeiros, médicos, perfis de TIC (incluindo dados, IA e cibersegurança, adicionados em 2026), construção qualificada, energias renováveis e logística",
      "Visto para procura de trabalho (120 dias) permite entrar legalmente para procurar emprego subordinado antes de ter contrato fechado",
      "Ecossistema tecnológico de Lisboa e Porto em expansão, com salários perto do dobro da mediana e muitas vagas que aceitam inglês",
      "Défice crónico no SNS abre colocação contínua para profissionais de saúde estrangeiros com habilitações reconhecidas",
      "StartUP Visa do IAPMEI e visto D2 para quem quer empreender, com incubadoras certificadas a acelerar projetos de inovação",
      "Subida do salário mínimo para 920 euros em 2026 melhora o piso de rendimento para entrada em setores como hotelaria e construção"
    ],
    "jobBoards": [
      {
        "label": "IEFP - Instituto do Emprego e Formação Profissional (portal oficial de emprego)",
        "url": "https://www.iefp.pt",
        "official": true
      },
      {
        "label": "Iefponline (vagas, apoios e incentivos ao emprego)",
        "url": "https://iefponline.iefp.pt",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional (Portugal)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-portugal_en",
        "official": true
      },
      {
        "label": "IAPMEI - StartUP Visa (empreendedores)",
        "url": "https://www.iapmei.pt/Paginas/StartUP-Visa-pt.aspx",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "INE - Mercado de trabalho (estatísticas oficiais de emprego e desemprego)",
        "url": "https://www.ine.pt/xportal/xmain?xpgid=ine_tema&xpid=INE&tema_cod=1114&xlang=pt",
        "official": true
      },
      {
        "label": "INE - Estatísticas do emprego, 1.º trimestre 2026 (desemprego 6,1%)",
        "url": "https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=711499212&att_display=n&att_download=y",
        "official": true
      },
      {
        "label": "AIMA - Autorização de residência com visto para procura de trabalho (art. 88.º n.º 7)",
        "url": "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-exercicio-de-atividade-profissional-subordinada-com-visto-para-procura-de-trabalho-art-88-o-n-o7",
        "official": true
      },
      {
        "label": "AIMA - Autorização de residência com visto de residência (art. 88.º n.º 1, trabalho subordinado)",
        "url": "https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-exercicio-de-atividade-profissional-subordinada-com-visto-de-residencia-art-88-o-n-o-1",
        "official": true
      },
      {
        "label": "Portal de Vistos - Ministério dos Negócios Estrangeiros (tipos de visto nacional)",
        "url": "https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto",
        "official": true
      },
      {
        "label": "gov.pt - Migrantes: vistos e autorizações para entrar e viver em Portugal",
        "url": "https://www2.gov.pt/migrantes-viver-e-trabalhar-em-portugal/migrantes-vistos-e-autorizacoes-para-entrar-e-viver-em-portugal",
        "official": true
      },
      {
        "label": "IAPMEI - StartUP Visa (FAQ oficial)",
        "url": "https://www.iapmei.pt/getattachment/Paginas/StartUP-Visa-pt/FAQs-PT_2julho.pdf.aspx?lang=pt-PT",
        "official": true
      },
      {
        "label": "Pordata - Salário mínimo nacional (evolução)",
        "url": "https://www.pordata.pt/pt/estatisticas/salarios-e-pensoes/salarios/salario-minimo-nacional",
        "official": true
      },
      {
        "label": "Banco de Portugal / BPstat - estatísticas de população, emprego e desemprego 1.º tri 2026",
        "url": "https://bpstat.bportugal.pt/conteudos/noticias/1301",
        "official": true
      },
      {
        "label": "EURES - Informação sobre o mercado de trabalho em Portugal",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-portugal_en",
        "official": true
      },
      {
        "label": "Jobbatical - Lista de profissões em falta IEFP e fast-track de visto (corroboração)",
        "url": "https://www.jobbatical.com/blog/portugal-shortage-occupations-20-day-fast-track-visa",
        "official": false
      },
      {
        "label": "Eurodicas - Profissionais em falta em Portugal 2026 (corroboração)",
        "url": "https://www.eurodicas.com.br/profissionais-em-falta-em-portugal/",
        "official": false
      },
      {
        "label": "Santander Salto - Salário médio em Portugal 2026 (corroboração de salário TIC)",
        "url": "https://www.santander.pt/salto/salario-medio-portugal-2026",
        "official": false
      },
      {
        "label": "Diário de Notícias - INE: desemprego sobe para 6,1% no 1.º trimestre (corroboração)",
        "url": "https://www.dn.pt/economia/ine-taxa-de-desemprego-do-1-trimestre-interrompe-ciclo-de-descida-que-durava-h-mais-de-um-ano",
        "official": false
      }
    ]
  },
  "es": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho espanhol chega a 2026 em um dos seus melhores momentos da última década, ainda que com sinais sazonais de freada. Segundo a Encuesta de Población Activa do INE referente ao primeiro trimestre de 2026, o país tinha 22,29 milhões de ocupados e uma taxa de desemprego de 10,83%, com 2,71 milhões de desempregados. O recuo trimestral da ocupação (170,3 mil postos a menos) concentrou-se nos Serviços, enquanto Indústria, Construção e Agricultura cresceram, num padrão típico do início de ano. No acumulado de doze meses o emprego avançou em 527,6 mil pessoas, e o fechamento de 2025 marcou recordes de afiliação à Seguridade Social, acima de 21,7 milhões de pessoas. O setor de Serviços segue como o motor estrutural da economia, respondendo pela maior parte do emprego, da contratação e também do desemprego.\n\nPara o imigrante, o cenário combina demanda real de mão de obra com gargalos importantes. O desemprego de longa duração ainda atinge quase metade dos parados, sobretudo mulheres e maiores de 45 anos, e a taxa de desemprego juvenil (menores de 25 anos) escalou para 24,5% no primeiro trimestre de 2026. Ao mesmo tempo, o SEPE alerta para escassez de mão de obra qualificada em áreas técnicas, e o novo Reglamento de Extranjería, em vigor desde 20 de maio de 2025, ampliou e simplificou as vias de regularização e contratação: as solicitações de residência e trabalho cresceram cerca de 46% nos meses seguintes à entrada em vigor da norma. O trabalhador estrangeiro, porém, sente mais o ciclo: no primeiro trimestre de 2026 o desemprego entre estrangeiros subiu mais que entre espanhóis.",
    "hotSectors": [
      "Tecnologia da informação e digital (TIC)",
      "Construção",
      "Saúde e cuidados (economia do cuidado)",
      "Atividades profissionais, científicas e técnicas",
      "Indústria farmacêutica",
      "Transição verde e energias renováveis",
      "Indústria (manufatura, com alta no 1T 2026)",
      "Turismo e hotelaria/restauração (peso estrutural nos Serviços)"
    ],
    "coolingSectors": [
      "Agricultura (tendência estrutural de queda no emprego, segundo INE/SEPE)",
      "Serviços de baixa qualificação com forte sazonalidade (queda de 228,4 mil postos no 1T 2026)",
      "Funções administrativas e rotineiras vulneráveis à automação (alerta do SEPE sobre mudanças tecnológicas)"
    ],
    "inDemandRoles": [
      {
        "role": "Médico de família e especialistas (anestesiologia, radiologia, psiquiatria)",
        "note": "No Catálogo de Ocupaciones de Difícil Cobertura do SEPE (1T 2026); contratação de estrangeiro dispensa teste de mercado."
      },
      {
        "role": "Enfermeiro (especializado e não especializado)",
        "note": "Setor sanitário é dos mais presentes no Catálogo de Difícil Cobertura."
      },
      {
        "role": "Profissionais de TIC (desenvolvedores, dados, cibersegurança)",
        "note": "TIC entre os setores de melhor perspectiva; SEPE aponta escassez de competências digitais."
      },
      {
        "role": "Ocupações da Marinha Mercante (maquinista naval, mecânico naval, frigorista naval)",
        "note": "18 ocupações marítimas no Catálogo de Difícil Cobertura 1T 2026."
      },
      {
        "role": "Técnicos de construção e indústria (eletricista instalador, carpinteiro de alumínio, operador de guindaste)",
        "note": "Listados no Catálogo de Difícil Cobertura; construção em alta."
      },
      {
        "role": "Profissionais da transição verde (energias renováveis, eficiência energética)",
        "note": "Área destacada pelo SEPE entre as de melhor perspectiva de emprego."
      },
      {
        "role": "Profissionais altamente qualificados (engenharia, P&D, gestão técnica)",
        "note": "Via preferencial pela Tarjeta Azul-UE; setor de atividades profissionais em alta."
      },
      {
        "role": "Trabalhadores de cuidados e assistência (economia do cuidado)",
        "note": "SEPE aponta novas oportunidades no setor de cuidados, ligado ao envelhecimento."
      }
    ],
    "byQualification": [
      {
        "area": "Alta qualificação (universitário, técnico, ciência e tecnologia)",
        "advice": "Melhor porta de entrada. A Tarjeta Azul-UE exige salário anual mínimo de 39.269,92 euros em 2026 (coeficiente 1,4 sobre o salário médio), com redutor de 80% do limiar para ocupações de difícil cobertura ou recém-titulados. TIC, saúde, engenharia e farmacêutica concentram vagas. A via é tramitada na UGE-CE, com prazos mais rápidos que o regime geral."
      },
      {
        "area": "Profissões de saúde (medicina, enfermagem)",
        "advice": "Alta demanda e várias funções no Catálogo de Difícil Cobertura, o que dispensa o teste de mercado de trabalho na contratação de estrangeiro. Atenção: medicina e enfermagem são profissões reguladas, exigindo homologação do título estrangeiro pelo Ministerio de Universidades e registro no colégio profissional antes de exercer."
      },
      {
        "area": "Ofícios técnicos e construção (eletricista, soldador, ocupações navais, operador de guindaste)",
        "advice": "Forte demanda concreta e presença no Catálogo de Difícil Cobertura. Caminho viável via autorização de trabalho por cuenta ajena com contrato firme; certificados profissionais e equivalência de qualificação ajudam. Construção e indústria registraram alta no 1T 2026."
      },
      {
        "area": "Qualificação média / serviços e cuidados",
        "advice": "O setor de cuidados oferece novas oportunidades, mas há forte sazonalidade e desemprego de longa duração entre baixa qualificação. As vias de arraigo (sociolaboral, socioformativo) tornaram-se mais acessíveis com o novo Reglamento, exigindo dois anos de permanência e contrato de pelo menos o SMI proporcional a 20 horas semanais."
      },
      {
        "area": "Empreendedor / autônomo",
        "advice": "Quem quer empreender pode usar o Visado de Emprendedor (Ley 14/2013) para projeto inovador com relatório favorável da ENISA, ou a via de autônomo. O novo Reglamento passou a permitir compatibilizar trabalho por cuenta ajena como atividade principal com atividade por cuenta propia. Nômades digitais têm visto próprio (renda exigida de cerca de 200% do SMI, ~2.442 euros/mês, e no máximo 20% da renda de clientes na Espanha)."
      },
      {
        "area": "Jovens (menores de 25 anos)",
        "advice": "Cautela: o desemprego juvenil estava em 24,5% no 1T 2026, bem acima da média. Priorizar formação técnica/digital, estágios e a via socioformativa (autoriza trabalho de até 30 horas semanais durante estudos), que melhora a empregabilidade e a regularização."
      }
    ],
    "salaries": [
      {
        "role": "Salário médio anual (todos os setores)",
        "range": "29.540,26 euros/ano bruto (dados de 2024, publicados em 2026)",
        "source": {
          "label": "INE - Encuesta Anual de Estructura Salarial",
          "url": "https://ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=ultiDatos&idp=1254735976596",
          "official": true
        }
      },
      {
        "role": "Salário mediano",
        "range": "24.497,17 euros/ano bruto",
        "source": {
          "label": "INE - Encuesta Anual de Estructura Salarial",
          "url": "https://ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=ultiDatos&idp=1254735976596",
          "official": true
        }
      },
      {
        "role": "Salário mais frequente (modal)",
        "range": "16.520,18 euros/ano bruto",
        "source": {
          "label": "INE - Encuesta Anual de Estructura Salarial",
          "url": "https://ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=ultiDatos&idp=1254735976596",
          "official": true
        }
      },
      {
        "role": "Salário Mínimo Interprofissional (SMI) 2026",
        "range": "1.221 euros/mês em 14 pagas (17.094 euros/ano bruto)",
        "source": {
          "label": "La Moncloa / Ministerio de Trabajo - SMI 2026",
          "url": "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/trabajo14/paginas/2023/140223-salario-minimo-interprofesional.aspx",
          "official": true
        }
      },
      {
        "role": "Limiar salarial Tarjeta Azul-UE (altamente qualificado) 2026",
        "range": "39.269,92 euros/ano (redutor de 80% em ocupações de difícil cobertura/recém-titulados)",
        "source": {
          "label": "BOE - Orden PJC/44/2026",
          "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2142",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software (mid-level, 2-5 anos)",
        "range": "30.000 a 48.000 euros/ano (camada de comunidade, não oficial)",
        "source": {
          "label": "Glassdoor/LinkedIn/InfoJobs (estimativa de mercado)",
          "url": "https://es.indeed.com/career/desarrollador-de-software/salaries",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software (senior, 5+ anos)",
        "range": "48.000 a 80.000 euros/ano (camada de comunidade, não oficial)",
        "source": {
          "label": "Glassdoor/LinkedIn/InfoJobs (estimativa de mercado)",
          "url": "https://es.indeed.com/career/desarrollador-de-software/salaries",
          "official": true
        }
      },
      {
        "role": "Enfermeiro (sistema público, ex. SAS)",
        "range": "2.500 a 3.100 euros/mês bruto, conforme experiência e plantões (estimativa de mercado)",
        "source": {
          "label": "InfoJobs Salarios (camada de comunidade)",
          "url": "https://salarios.infojobs.net/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadãos da UE/EEE e Suíça não precisam de autorização de trabalho e têm livre circulação. Para extracomunitários, exige-se autorização de residência e trabalho, normalmente por cuenta ajena (com contrato firme) ou por cuenta propia (autônomo). O regime geral de cuenta ajena costuma exigir o teste de mercado de trabalho, dispensado quando a profissão está no Catálogo de Ocupaciones de Difícil Cobertura do SEPE (1T 2026 inclui 27 ocupações, com forte peso de saúde, Marinha Mercante e ofícios técnicos). O novo Reglamento de Extranjería (Real Decreto 1155/2024), em vigor desde 20 de maio de 2025 e ajustado pelo Real Decreto 316/2026, reorganizou as cinco figuras de arraigo (segunda oportunidade, sociolaboral, social, socioformativo e familiar), reduziu o tempo de permanência exigido de três para dois anos (exceto arraigo familiar) e passou a permitir compatibilizar trabalho por cuenta ajena como atividade principal com atividade por cuenta propia. O arraigo sociolaboral exige contrato(s) garantindo ao menos o SMI proporcional a jornada não inferior a 20 horas semanais; o socioformativo habilita trabalho de até 30 horas semanais. Profissionais altamente qualificados têm a Tarjeta Azul-UE (limiar de 39.269,92 euros/ano em 2026, tramitada pela UGE-CE). Para empreender há o Visado de Emprendedor da Ley 14/2013, que exige projeto inovador com relatório favorável da ENISA e avaliação pela UGE-CE; e a Visa de Nômade Digital, para teletrabalho remoto, com renda mínima em torno de 200% do SMI (~2.442 euros/mês) e no máximo 20% da renda vinda de clientes na Espanha. Profissões reguladas (medicina, enfermagem, advocacia, engenharia, arquitetura, professor, entre outras) exigem homologação/reconhecimento do título estrangeiro pelo Ministerio de Universidades e, quando aplicável, inscrição no colégio profissional antes do exercício.",
    "opportunityWindows": [
      "Novo Reglamento de Extranjería (em vigor desde 20/05/2025) simplificou regularização e contratação: solicitações de residência e trabalho subiram ~46% nos meses seguintes, e cerca de 95 mil pessoas se regularizaram via arraigo entre maio e outubro de 2025.",
      "Catálogo de Ocupaciones de Difícil Cobertura (1T 2026) com 27 ocupações dispensa o teste de mercado, acelerando autorizações em saúde, Marinha Mercante e ofícios técnicos.",
      "Tarjeta Azul-UE com redutor de 80% do limiar salarial para ocupações de difícil cobertura e recém-titulados, abrindo a porta a talentos qualificados mais jovens.",
      "Setores em expansão estrutural (TIC, transição verde, farmacêutica, cuidados) com escassez declarada de mão de obra qualificada pelo SEPE.",
      "Visa de Nômade Digital e Visado de Emprendedor como rotas para quem trabalha remoto ou quer abrir negócio inovador, com tramitação ágil pela UGE-CE (relatório ENISA em ~10-15 dias)."
    ],
    "jobBoards": [
      {
        "label": "Empléate (Portal de Empleo do SEPE)",
        "url": "https://www.empleate.gob.es/",
        "official": true
      },
      {
        "label": "SEPE - Encontrar trabajo",
        "url": "https://www.sepe.es/HomeSepe/Personas/encontrar-trabajo.html",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_es",
        "official": true
      },
      {
        "label": "SEPE - EURES / Empleo en Europa",
        "url": "https://www.sepe.es/HomeSepe/Personas/encontrar-trabajo/empleo-europa.html",
        "official": true
      },
      {
        "label": "InfoJobs (privado, líder de mercado na Espanha)",
        "url": "https://www.infojobs.net/",
        "official": false
      },
      {
        "label": "LinkedIn Empregos Espanha (privado)",
        "url": "https://www.linkedin.com/jobs/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "INE - Encuesta de Población Activa (EPA), 1T 2026",
        "url": "https://www.ine.es/dyngs/Prensa/EPA1T26.htm",
        "official": true
      },
      {
        "label": "INE - Encuesta Anual de Estructura Salarial (últimos datos)",
        "url": "https://ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=ultiDatos&idp=1254735976596",
        "official": true
      },
      {
        "label": "SEPE - Las tendencias del empleo en España (Abril 2026)",
        "url": "https://www.sepe.es/noticia/SEPE/2026/Abril/tendencias-empleo-espana",
        "official": true
      },
      {
        "label": "SEPE - Evolución y situación del mercado laboral en España (Abril 2026)",
        "url": "https://www.sepe.es/noticia/SEPE/2026/Abril/evolucion-situacion-mercado-laboral-espana",
        "official": true
      },
      {
        "label": "SEPE - Catálogo de Ocupaciones de Difícil Cobertura",
        "url": "https://www.sepe.es/HomeSepe/empresas/informacion-para-empresas/profesiones-de-dificil-cobertura.html",
        "official": true
      },
      {
        "label": "BOE - Real Decreto 316/2026 (modifica o Reglamento de Extranjería RD 1155/2024)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8284",
        "official": true
      },
      {
        "label": "BOE - Orden PJC/44/2026 (umbral salarial Tarjeta Azul-UE 2026)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2142",
        "official": true
      },
      {
        "label": "La Moncloa - Solicitações de residência e trabalho sobem ~46% com novo Reglamento (21/11/2025)",
        "url": "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/inclusion/paginas/2025/211125-solicitudes-residencia-trabajo.aspx",
        "official": true
      },
      {
        "label": "La Moncloa - SMI 2026",
        "url": "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/trabajo14/paginas/2023/140223-salario-minimo-interprofesional.aspx",
        "official": true
      },
      {
        "label": "Ministerio de Inclusión - UGE / Emprendedores (Ley 14/2013)",
        "url": "https://www.inclusion.gob.es/en/web/unidadgrandesempresas/emprendedores",
        "official": true
      },
      {
        "label": "Exteriores - Visado para nómadas digitales",
        "url": "https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Digital-Nomad-Visa.aspx",
        "official": true
      },
      {
        "label": "Idealista - Paro juvenil 24,5% no 1T 2026 (camada de imprensa, baseado em EPA/INE)",
        "url": "https://www.idealista.com/news/finanzas/laboral/2026/04/28/895108-la-tasa-de-paro-juvenil-escala-al-24-5-hay-mas-de-440-000-menores-de-25-anos-sin-empleo",
        "official": false
      },
      {
        "label": "InfoJobs Salarios (camada de comunidade)",
        "url": "https://salarios.infojobs.net/",
        "official": false
      },
      {
        "label": "Glassdoor / Indeed Espanha - faixas salariais de TI (camada de comunidade)",
        "url": "https://es.indeed.com/career/desarrollador-de-software/salaries",
        "official": false
      }
    ]
  },
  "de": {
    "updatedAt": "2026-06-22",
    "overview": "A Alemanha vive um paradoxo no mercado de trabalho. De um lado, o desemprego registrado pela Bundesagentur für Arbeit subiu ao patamar mais alto desde 2010, com cerca de 3,05 milhões de desempregados e taxa média em torno de 6,5% em 2026, puxado pela recessão industrial e pela crise da indústria automotiva. De outro, o país convive com escassez crônica de mão de obra qualificada: na análise oficial de gargalos (Fachkräfteengpassanalyse) da Bundesagentur, cerca de uma em cada oito profissões avaliadas é classificada como profissão de escassez, e institutos econômicos estimam centenas de milhares de vagas não preenchidas em saúde, TI, engenharia, energia e ofícios técnicos. A demografia agrava o quadro, com perda projetada de centenas de milhares de trabalhadores por ano com as aposentadorias da geração baby boomer.\n\nPara o imigrante, isso significa um mercado seletivo, mas aberto onde há qualificação reconhecida. As portas legais foram ampliadas pela reforma da Lei de Imigração de Trabalhadores Qualificados (Fachkräfteeinwanderungsgesetz), pelo EU Blue Card com limiares salariais reduzidos para profissões de escassez e pela Chancenkarte (Opportunity Card), que permite entrar no país por até 12 meses para procurar emprego sem oferta prévia. O fator decisivo costuma ser o reconhecimento do diploma estrangeiro (Anerkennung) e o nível de alemão, sobretudo em profissões regulamentadas como medicina, enfermagem e direito.",
    "hotSectors": [
      "Saúde e cuidados (enfermagem, cuidado a idosos, medicina, fisioterapia)",
      "Tecnologia da informação (desenvolvimento de software, cibersegurança, dados/IA, nuvem)",
      "Engenharia (elétrica, mecânica, civil, automação, produção)",
      "Energias renováveis e transição energética (solar, eólica, redes)",
      "Ofícios técnicos qualificados (eletricistas, encanadores, soldadores, mecatrônicos)",
      "Educação e creche (professores, educadores de infância)",
      "Construção civil e engenharia de obras",
      "Logística e transporte"
    ],
    "coolingSectors": [
      "Indústria automotiva tradicional, sobretudo linhas de montagem e motores a combustão (VW, Bosch, ZF e Audi anunciaram dezenas de milhares de cortes; até 200 mil empregos no setor podem desaparecer nos próximos anos)",
      "Fornecedores automotivos ligados ao motor a combustão",
      "Funções administrativas e de back-office em grandes indústrias em reestruturação",
      "Manufatura industrial intensiva em energia, pressionada por custos altos"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) / Pflegefachkraft e cuidador(a) de idosos",
        "note": "Setor com a escassez mais severa; exige reconhecimento (state recognition) e em geral alemão B1/B2."
      },
      {
        "role": "Médico(a) generalista e especialista",
        "note": "Profissão regulamentada; exige Approbation e alemão técnico (geralmente B2 + Fachsprachprüfung)."
      },
      {
        "role": "Desenvolvedor(a) de software / programador(a) de aplicações",
        "note": "Especialistas de TI podem usar Blue Card mesmo sem diploma, com 3 anos de experiência relevante nos últimos 7."
      },
      {
        "role": "Especialista em cibersegurança",
        "note": "Alta taxa de vagas; inglês costuma bastar em muitas empresas de tecnologia."
      },
      {
        "role": "Engenheiro(a) eletricista / eletrônico / de telecomunicações",
        "note": "Grupo ISCO 215 listado oficialmente entre as profissões de escassez."
      },
      {
        "role": "Engenheiro(a) mecânico / industrial / de produção",
        "note": "Grupo ISCO 214 na lista oficial de Mangelberufe."
      },
      {
        "role": "Engenheiro(a) civil e gestor(a) de obras",
        "note": "Demanda forte em construção e infraestrutura."
      },
      {
        "role": "Técnico(a) de energia solar e eólica",
        "note": "Impulsionado pela meta de transição energética (Energiewende)."
      },
      {
        "role": "Eletricista, encanador e soldador (ofícios)",
        "note": "Ofícios qualificados (Handwerk) com escassez estrutural; valoriza Ausbildung ou reconhecimento."
      },
      {
        "role": "Professor(a) e educador(a) de infância (Erzieher)",
        "note": "Grupo de ensino na lista oficial; alto déficit em creches e escolas."
      },
      {
        "role": "Cientista de dados / engenheiro(a) de IA-ML",
        "note": "Prêmio salarial de 15% a 25% sobre funções de engenharia equivalentes."
      },
      {
        "role": "Farmacêutico(a), fisioterapeuta, dentista",
        "note": "Profissões de saúde regulamentadas listadas oficialmente; exigem reconhecimento."
      }
    ],
    "byQualification": [
      {
        "area": "Profissionais de TI (com ou sem diploma)",
        "advice": "Caminho mais flexível para estrangeiros. Com diploma, o EU Blue Card é direto; sem diploma, especialistas de TI conseguem o Blue Card comprovando ao menos 3 anos de experiência relevante nos últimos 7 anos. Inglês frequentemente basta no início em empresas de tecnologia, mas o alemão acelera a integração e a progressão. Verifique o diploma na base ANABIN antes de aplicar."
      },
      {
        "area": "Saúde (enfermagem, medicina, fisioterapia)",
        "advice": "Profissões regulamentadas: a base ANABIN não basta. É preciso reconhecimento formal (state recognition para enfermagem, Approbation para medicina) junto ao órgão competente do estado (Land), processo que leva em média de 3 a 4 meses. O alemão é decisivo, em geral B1/B2 e, para médicos, exame de língua técnica (Fachsprachprüfung). Limiar salarial reduzido do Blue Card se aplica."
      },
      {
        "area": "Engenharia e MINT/STEM",
        "advice": "Diploma superior reconhecido abre o Blue Card com limiar salarial reduzido por estar em profissão de escassez. Engenheiro não é profissão estritamente regulamentada para exercer (só o título protegido Ingenieur exige reconhecimento), então a entrada no mercado é mais ágil que na saúde. Inglês ajuda em multinacionais, mas alemão amplia muito as vagas."
      },
      {
        "area": "Ofícios técnicos / formação profissional (Ausbildung)",
        "advice": "A Chancenkarte por pontos e os caminhos para trabalhadores com Ausbildung favorecem eletricistas, encanadores, soldadores e mecatrônicos. O reconhecimento da formação profissional (não só acadêmica) é o passo-chave; quando parcial, dá para vir e completar a qualificação na Alemanha. Alemão em nível prático (B1) costuma ser exigido."
      },
      {
        "area": "Recém-formados (diploma nos últimos 3 anos)",
        "advice": "Têm acesso ao limiar salarial reduzido do EU Blue Card, o que facilita a primeira contratação. Vale combinar com a Chancenkarte para procurar emprego no local por até 12 meses."
      },
      {
        "area": "Sem qualificação formal reconhecida",
        "advice": "Caminho estreito por vias de trabalhador qualificado. A rota realista é buscar reconhecimento parcial e completar a formação na Alemanha, ou entrar pela Chancenkarte por pontos (exige alemão A1 ou inglês B2 mais critérios de pontos como idade, experiência e idioma)."
      },
      {
        "area": "Empreendedores e autônomos",
        "advice": "Profissionais liberais (Freiberufler, como TI, consultoria, tradução, design, jornalismo, ensino) têm a rota mais simples pela Seção 21(5) da Lei de Residência. Quem abre empresa (Gewerbe) usa a Seção 21(1) e precisa demonstrar interesse econômico/demanda regional e financiamento do plano. Permissão inicial de até 3 anos, renovável se o negócio prosperar."
      }
    ],
    "salaries": [
      {
        "role": "Salário bruto anual mediano (todos os setores, tempo integral, 2025)",
        "range": "EUR 54.066/ano (média EUR 64.441/ano)",
        "source": {
          "label": "Destatis - comunicado PD26_113_621 (2026)",
          "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
          "official": true
        }
      },
      {
        "role": "Setor de energia (mediano, mais alto)",
        "range": "EUR 77.522/ano",
        "source": {
          "label": "Destatis - comunicado PD26_113_621 (2026)",
          "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
          "official": true
        }
      },
      {
        "role": "Serviços financeiros e seguros (mediano)",
        "range": "EUR 76.594/ano",
        "source": {
          "label": "Destatis - comunicado PD26_113_621 (2026)",
          "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
          "official": true
        }
      },
      {
        "role": "Hotelaria e gastronomia (mediano, mais baixo)",
        "range": "EUR 35.545/ano",
        "source": {
          "label": "Destatis - comunicado PD26_113_621 (2026)",
          "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
          "official": true
        }
      },
      {
        "role": "Agricultura, silvicultura e pesca (mediano)",
        "range": "EUR 35.689/ano",
        "source": {
          "label": "Destatis - comunicado PD26_113_621 (2026)",
          "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
          "official": true
        }
      },
      {
        "role": "Comparativo regional (mediano oeste vs leste)",
        "range": "Oeste EUR 55.435/ano; Leste (sem Berlim) EUR 46.013/ano",
        "source": {
          "label": "Destatis - comunicado PD26_113_621 (2026)",
          "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
          "official": true
        }
      },
      {
        "role": "Engenheiro(a) de software / desenvolvedor(a)",
        "range": "EUR 47.000 a 100.000+/ano (júnior ~EUR 45-47 mil; sênior EUR 75-100 mil+); mediana ~EUR 71.250 em empresas de 5.000+ funcionários",
        "source": {
          "label": "StepStone Salary Report 2025 (comunidade, corroborativo)",
          "url": "https://www.wbscodingschool.com/blog/software-engineer-salary/",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) / Pflegefachkraft",
        "range": "Início ~EUR 2.800-3.000/mês na tabela TVöD-P; média ~EUR 2.800-3.800/mês conforme experiência e região",
        "source": {
          "label": "Tabela TVöD-P / dados de comunidade (corroborativo)",
          "url": "https://www.glassdoor.sg/Salaries/germany-pflegefachkraft-salary-SRCH_IL.0,7_IN96_KO8,23.htm",
          "official": true
        }
      },
      {
        "role": "Eletricista (ofício)",
        "range": "~EUR 3.000-3.800/mês (EUR 36-45 mil/ano); experiente EUR 3.800-4.500/mês; Meister EUR 4.500-6.000/mês",
        "source": {
          "label": "Dados de mercado / comunidade (corroborativo)",
          "url": "https://finanz-handbuch.de/en/personal-finance/salary/by-profession/electricians.html",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card 2026 (padrão)",
        "range": "EUR 50.700/ano (bruto)",
        "source": {
          "label": "Make it in Germany / Auswärtiges Amt (oficial, via guias 2026)",
          "url": "https://www.visahq.com/news/2026-01-16/de/germany-confirms-higher-2026-eu-blue-card-salary-thresholds/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card 2026 (profissões de escassez, recém-formados e especialistas de TI)",
        "range": "EUR 45.934,20/ano (bruto)",
        "source": {
          "label": "Make it in Germany / Auswärtiges Amt (oficial, via guias 2026)",
          "url": "https://www.visahq.com/news/2026-01-16/de/germany-confirms-higher-2026-eu-blue-card-salary-thresholds/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Para trabalhar na Alemanha, cidadãos não-UE/EEE precisam de visto e autorização de residência com finalidade de trabalho. As vias principais são: (1) EU Blue Card, para quem tem diploma superior reconhecido e oferta de emprego, com limiar salarial de EUR 50.700/ano em 2026, reduzido para EUR 45.934,20/ano em profissões de escassez (cluster MINT/STEM e saúde), recém-formados (diploma nos últimos 3 anos) e especialistas de TI sem diploma com 3 anos de experiência nos últimos 7; (2) visto de trabalhador qualificado da Fachkräfteeinwanderungsgesetz, para quem tem diploma ou formação profissional (Ausbildung) reconhecidos; (3) Chancenkarte (Opportunity Card), lançada em junho de 2024, que permite entrar por até 12 meses para procurar emprego, pela Rota Direta (qualificação totalmente reconhecida, sem exigência de idioma) ou pelo Sistema de Pontos (reconhecimento parcial, exigindo alemão A1 ou inglês B2 mais pontos por idade, experiência e idioma).\n\nO reconhecimento do diploma estrangeiro (Anerkennung) é o ponto crítico. A base ANABIN indica como o diploma se compara ao padrão alemão (diplomas e instituições marcados como H+ costumam ser aceitos), mas ela não substitui o reconhecimento formal em profissões regulamentadas. Profissões regulamentadas como médico, enfermeiro, farmacêutico, dentista, professor, advogado e parte das engenharias (título Ingenieur) exigem reconhecimento formal ou licença profissional (por exemplo, Approbation para médicos, state recognition para enfermagem) junto ao órgão competente do estado. O processo leva, em geral, de 3 a 4 meses. O marco legal é a Lei Federal de Avaliação de Qualificações Profissionais (BQFG) somada às leis setoriais e estaduais. O alemão é decisivo em saúde e profissões reguladas (em geral B1/B2, com exame de língua técnica para médicos).\n\nPara empreender, a Seção 21 da Lei de Residência (AufenthG) prevê autorização de autônomo: a Seção 21(5) cobre profissionais liberais (Freiberufler/Katalogberufe, como software, consultoria, tradução, design, jornalismo, ensino), rota mais simples; a Seção 21(1) cobre quem abre empresa/negócio (Gewerbe), exigindo interesse econômico ou demanda regional, efeito positivo previsto na economia e financiamento próprio ou por empréstimo. Maiores de 45 anos precisam comprovar previdência adequada. A autorização é emitida por até 3 anos, renovável se o negócio prosperar e cobrir o sustento. Desde fevereiro de 2026, há portal digital de vistos para submissão de documentos online em todo o país. Recomenda-se sempre confirmar valores e requisitos atualizados nas fontes oficiais (Make it in Germany, BAMF, Auswärtiges Amt) antes de aplicar.",
    "opportunityWindows": [
      "Chancenkarte (Opportunity Card): entrada por até 12 meses para procurar emprego sem oferta prévia, ideal para quem tem qualificação reconhecida ou pontua no sistema de pontos.",
      "Limiar salarial reduzido do EU Blue Card (EUR 45.934,20 em 2026) para profissões de escassez, recém-formados e especialistas de TI, com dispensa do exame de prioridade que encurta a contratação de meses para semanas.",
      "Especialistas de TI sem diploma podem entrar pelo Blue Card comprovando 3 anos de experiência relevante nos últimos 7 anos.",
      "Saúde e cuidados com idosos: déficit estrutural e demográfico garante demanda sustentada por anos, com apoio a reconhecimento e adaptação na Alemanha.",
      "Transição energética (Energiewende): forte demanda por técnicos e engenheiros de solar, eólica e redes elétricas.",
      "Reconhecimento parcial de formação profissional permite vir e completar a qualificação na Alemanha, abrindo os ofícios técnicos (Handwerk) a estrangeiros.",
      "Empreendedorismo de profissional liberal (Freiberufler) pela Seção 21(5), rota administrativamente mais leve para áreas como TI, consultoria e design.",
      "Portal digital de vistos nacional desde fevereiro de 2026, agilizando a submissão de documentos."
    ],
    "jobBoards": [
      {
        "label": "Make it in Germany - Jobbörse (portal oficial do governo federal para profissionais estrangeiros)",
        "url": "https://www.make-it-in-germany.com/en/working-in-germany/job-listings",
        "official": true
      },
      {
        "label": "Bundesagentur für Arbeit - Jobbörse (Agência Federal de Emprego)",
        "url": "https://www.arbeitsagentur.de/en",
        "official": true
      },
      {
        "label": "Bundesagentur für Arbeit - Como encontrar emprego (apoio internacional)",
        "url": "https://www.arbeitsagentur.de/int/en/how-to-find-a-job",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "EURES Deutschland - Busca de vagas",
        "url": "https://www.eures-deutschland.de/DE/job_suchen/job_suchen_node.html",
        "official": true
      },
      {
        "label": "Anerkennung in Deutschland - reconhecimento de qualificações",
        "url": "https://www.anerkennung-in-deutschland.de/html/en/pro/professional-recognition.php",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Make it in Germany - Lista oficial de profissões de escassez (Mangelberufe, PDF, Seção 18g AufenthG, ISCO-08)",
        "url": "https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/a_Fachkraefte/PDF-Dateien/3_Visum_u_Aufenthalt/2024_Mangelberufe_EN.pdf",
        "official": true
      },
      {
        "label": "Make it in Germany - Profissões em demanda (portal oficial)",
        "url": "https://www.make-it-in-germany.com/en/working-in-germany/professions-in-demand",
        "official": true
      },
      {
        "label": "Make it in Germany - Visto para autônomos (Seção 21 AufenthG)",
        "url": "https://www.make-it-in-germany.com/en/visa-residence/types/other/self-employment",
        "official": true
      },
      {
        "label": "Bundesagentur für Arbeit - Fachkräfteengpassanalyse (análise de gargalos de mão de obra)",
        "url": "https://statistik.arbeitsagentur.de/DE/Navigation/Footer/Top-Produkte/Fachkraefteengpassanalyse-Nav.html",
        "official": true
      },
      {
        "label": "Bundesagentur für Arbeit - Profissionais qualificados ainda procurados (comunicado 2025)",
        "url": "https://www.arbeitsagentur.de/presse/2025-25-qualifizierte-fachkraefte-weiterhin-gesucht",
        "official": true
      },
      {
        "label": "Destatis - Verdiente médio/mediano 2025 (comunicado PD26_113_621)",
        "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html",
        "official": true
      },
      {
        "label": "Destatis - Verdienst por setores e profissões",
        "url": "https://www.destatis.de/DE/Themen/Arbeit/Verdienste/Verdienste-Branche-Berufe/_inhalt.html",
        "official": true
      },
      {
        "label": "Destatis - Mercado de trabalho e desemprego",
        "url": "https://www.destatis.de/EN/Themes/Labour/Labour-Market/Unemployment/_node.html",
        "official": true
      },
      {
        "label": "BAMF - Atividade autônoma e freelancing",
        "url": "https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Arbeit/SelbstaendigeTaetigkeit/selbstaendigetaetigkeit-node.html",
        "official": true
      },
      {
        "label": "Comissão Europeia - Trabalhador autônomo na Alemanha (portal de imigração da UE)",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/self-employed-worker-germany_en",
        "official": true
      },
      {
        "label": "VisaHQ - Confirmação dos limiares do EU Blue Card 2026 (corroborativo)",
        "url": "https://www.visahq.com/news/2026-01-16/de/germany-confirms-higher-2026-eu-blue-card-salary-thresholds/",
        "official": false
      },
      {
        "label": "StepStone Salary Report 2025 via WBS Coding School (salários de TI, corroborativo)",
        "url": "https://www.wbscodingschool.com/blog/software-engineer-salary/",
        "official": false
      },
      {
        "label": "Bloomberg / Detroit News / VDA - Crise e cortes na indústria automotiva alemã (corroborativo)",
        "url": "https://www.detroitnews.com/story/business/autos/2025/09/26/crisis-in-german-industry-deepens-on-volkswagen-bosch-cuts/86365875007/",
        "official": false
      }
    ]
  },
  "it": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho italiano fechou 2025 em terreno positivo, ainda que com sinais de desaceleracao no fim do ano. Segundo o ISTAT, a taxa de ocupacao media do ano subiu para 62,4 por cento e a de desemprego recuou para 6,1 por cento, o menor patamar em anos, com cerca de 24,1 milhoes de ocupados. O problema central deixou de ser falta de vagas e passou a ser falta de candidatos: o sistema Excelsior da Unioncamere aponta que as empresas tem dificuldade para preencher quase metade das contratacoes previstas, percentual que ultrapassa 60 por cento entre dirigentes e operarios especializados, num quadro de envelhecimento populacional e encolhimento da forca de trabalho jovem. O tempo medio para preencher uma vaga de dificil reperimento chega a 4,5 meses. Para o estrangeiro, isso significa portas abertas em setores especificos, mas dentro de um sistema de cotas. O trabalho subordinado nao sazonal e o sazonal dependem do Decreto Flussi, com cotas anuais definidas para o trienio 2026-2028 e ingresso por meio dos chamados click day. Ja perfis altamente qualificados podem entrar fora da cota, pela Carta Azul UE. Persiste forte divisao territorial: o Norte e o Centro concentram ocupacao alta e desemprego de 2 a 4 por cento em regioes como Lombardia, Veneto e Bolzano, enquanto o Sul, em regioes como Calabria e Campania, registra desemprego acima de 15 por cento. O salario tambem acompanha esse mapa, sendo maior no Norte e nos setores financeiro, de engenharia e farmaceutico.",
    "hotSectors": [
      "Turismo e hotelaria",
      "Saude e assistencia social (enfermagem, cuidadores, tecnicos)",
      "Tecnologia da informacao e telecomunicacoes (software, ciberseguranca)",
      "Energia verde e construcao sustentavel",
      "Logistica e transporte (motoristas de caminhao)",
      "Comercio e varejo",
      "Industria metalmecanica (operarios especializados, soldadores)",
      "Agricultura sazonal"
    ],
    "coolingSectors": [
      "Manufatura industrial em geral (queda de cerca de 3,4 por cento no ano)",
      "Construcao civil em ritmo de obras tradicionais (recuo apos o fim de incentivos, embora a construcao sustentavel cresca)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros e tecnicos de saude",
        "note": "Carencia estrutural no sistema de saude; idioma italiano costuma ser obrigatorio e a profissao e regulamentada."
      },
      {
        "role": "Cuidadores e assistentes familiares (badanti, colf)",
        "note": "Cota propria no Decreto Flussi (assistencia familiar e domestica), com forte presenca de mao de obra estrangeira."
      },
      {
        "role": "Operarios especializados (soldadores, eletricistas, pedreiros, metalurgicos)",
        "note": "Um dos grupos com maior dificuldade de reperimento segundo a Unioncamere/Excelsior."
      },
      {
        "role": "Profissionais de TI (analistas, programadores, ciberseguranca)",
        "note": "Setor critico elegivel a Carta Azul UE com limiar salarial reduzido (cerca de 1,2x a media); ingles costuma ser aceito."
      },
      {
        "role": "Trabalhadores de hotelaria e restauracao (garcons, cozinheiros, bartenders)",
        "note": "Alta demanda sazonal, com cota dedicada ao turismo no Decreto Flussi."
      },
      {
        "role": "Motoristas de caminhao e profissionais de logistica",
        "note": "Escassez recorrente apontada pela EURES."
      },
      {
        "role": "Trabalhadores agricolas sazonais",
        "note": "Maior cota individual do Decreto Flussi (47 mil por ano)."
      },
      {
        "role": "Operadores de maquinas e instalacoes fixas",
        "note": "Apontados pela EURES como o grupo com maior incidencia de escassez na Italia."
      },
      {
        "role": "Engenheiros",
        "note": "Setor entre os mais bem remunerados e com demanda por perfis tecnicos qualificados."
      }
    ],
    "byQualification": [
      {
        "area": "Baixa qualificacao / sem diploma",
        "advice": "O caminho mais realista e via Decreto Flussi nas cotas de trabalho sazonal (agricultura e turismo), assistencia familiar/domestica e trabalho subordinado nao sazonal. Exige empregador disposto a patrocinar o nulla osta e participacao no click day. Vagas em agricultura, hotelaria, cuidado de idosos e construcao sao as mais acessiveis, mas o italiano e quase sempre necessario."
      },
      {
        "area": "Tecnico / profissionalizante (operarios especializados, ITS Academy)",
        "advice": "Perfis tecnico-operativos estao entre os mais dificeis de preencher no pais. Soldadores, eletricistas, mecanicos, tecnicos de saude e diplomados de ITS Academy tem demanda alta. A entrada continua dependente do Decreto Flussi para nao UE, mas a empregabilidade e a estabilidade tendem a ser maiores. Reconhecimento de qualificacoes pode ser exigido em profissoes regulamentadas."
      },
      {
        "area": "Ensino superior / altamente qualificado",
        "advice": "Melhor rota e a Carta Azul UE, que fica fora da cota do Decreto Flussi, exige diploma de nivel superior (ou 5 anos de experiencia equivalente) e contrato acima do limiar salarial. Setores criticos como TI, saude e engenharia tem limiar reduzido (cerca de 1,2x a media, ~28 mil euros) frente ao geral (~1,5x, ~35 mil euros). Da mobilidade na UE apos 12 meses e reagrupamento familiar facilitado."
      },
      {
        "area": "Empreendedor / autonomo",
        "advice": "O visto de trabalho autonomo (lavoro autonomo) tem cota propria e muito restrita no Decreto Flussi (500 vagas por ano), exige plano de negocios, comprovacao de capital e renda. Fundadores de startups inovadoras tem rota especifica pela Italia Startup Visa, fora da cota geral. Planeje com antecedencia e assessoria, pois e a via mais concorrida e burocratica."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio nacional (privado, RAL media 2025)",
        "range": "cerca de 32.991 euros/ano brutos",
        "source": {
          "label": "Remitly (compilacao de dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Salario medio bruto anual em tempo integral (referencia ISTAT, ano-base 2022)",
        "range": "cerca de 37.302 euros/ano brutos",
        "source": {
          "label": "ISTAT (via Remitly)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Bancos e servicos financeiros (setor mais remunerado)",
        "range": "cerca de 45.000 a 46.000 euros/ano brutos (RAL media)",
        "source": {
          "label": "Remitly (dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Engenharia",
        "range": "cerca de 40.372 euros/ano brutos (RAL media)",
        "source": {
          "label": "Remitly (dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Farmaceutica e biotecnologia",
        "range": "cerca de 39.640 euros/ano brutos (RAL media)",
        "source": {
          "label": "Remitly (dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Telecomunicacoes",
        "range": "cerca de 38.950 euros/ano brutos (RAL media)",
        "source": {
          "label": "Remitly (dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Hotelaria e restauracao (entre os menos remunerados)",
        "range": "cerca de 25.855 euros/ano brutos (RAL media)",
        "source": {
          "label": "Remitly (dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Servicos a pessoa / cuidado (menor faixa)",
        "range": "cerca de 24.916 euros/ano brutos (RAL media)",
        "source": {
          "label": "Remitly (dados de mercado 2025)",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial Carta Azul UE - setores criticos (TI, saude)",
        "range": "cerca de 28.000 euros/ano (1,2x a media)",
        "source": {
          "label": "Damiani & Damiani (guia juridico Carta Azul)",
          "url": "https://damianianddamiani.com/complete-guide-blue-card-reform/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial Carta Azul UE - regra geral",
        "range": "cerca de 35.000 euros/ano (1,5x a media)",
        "source": {
          "label": "Damiani & Damiani (guia juridico Carta Azul)",
          "url": "https://damianianddamiani.com/complete-guide-blue-card-reform/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica trabalham livremente, sem necessidade de autorizacao. Para nao UE, a regra geral e o sistema nulla osta mais visto nacional (tipo D): o empregador na Italia solicita a autorizacao de trabalho (nulla osta) dentro das cotas do Decreto Flussi, e so depois o trabalhador pede o visto e, ja na Italia, o permesso di soggiorno. O Decreto Flussi 2026-2028 (DPCM de 02/10/2025) preve 164.850 ingressos em 2026, 165.850 em 2027 e 166.850 em 2028, distribuidos entre trabalho subordinado nao sazonal (cerca de 76.200/ano, com parcela reservada a paises prioritarios como Albania, Marrocos e Bangladesh), sazonal agricola (47.000/ano), sazonal turismo (13.000 em 2026), assistencia familiar/domestica (13.600 em 2026) e trabalho autonomo (apenas 500/ano). O ingresso ocorre por click day, com datas definidas: 9 de fevereiro de 2026 (sazonal turismo), 16 de fevereiro de 2026 (subordinado nao sazonal) e 18 de fevereiro de 2026 (assistencia familiar), apos fase de precompilacao. Perfis altamente qualificados podem usar a Carta Azul UE, fora da cota, exigindo diploma superior ou 5 anos de experiencia e contrato acima do limiar salarial (cerca de 1,5x a media geral, ou 1,2x em setores criticos como TI e saude). Profissoes regulamentadas (saude, engenharia, direito, ensino) exigem reconhecimento do titulo estrangeiro e, em muitos casos, inscricao em ordem profissional e dominio do italiano. Transferencias dentro de multinacionais (ICT) e startups inovadoras (Italia Startup Visa) tambem ficam fora da cota geral.",
    "opportunityWindows": [
      "Click day do Decreto Flussi 2026: 9 de fevereiro (sazonal turismo), 16 de fevereiro (subordinado nao sazonal) e 18 de fevereiro (assistencia familiar), com precompilacao previa. Empregador e candidato precisam estar prontos antes da data.",
      "Temporada turistica e agricola (verao europeu) abre vagas sazonais em hotelaria, restauracao e colheita, dentro das cotas dedicadas.",
      "Carta Azul UE para qualificados em TI, saude e engenharia: rota fora da cota, com limiar salarial reduzido em setores criticos e mobilidade na UE apos 12 meses.",
      "Carencia estrutural de operarios especializados e diplomados de ITS Academy: alta empregabilidade para perfis tecnico-profissionalizantes.",
      "Norte e Centro (Lombardia, Veneto, Bolzano) com desemprego de 2 a 4 por cento concentram as melhores oportunidades e os maiores salarios."
    ],
    "jobBoards": [
      {
        "label": "Cliclavoro (portal oficial do Ministero del Lavoro)",
        "url": "https://www.cliclavoro.gov.it",
        "official": true
      },
      {
        "label": "Portal EURES (rede europeia de empregos)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "ANPAL (Agenzia Nazionale Politiche Attive Lavoro) - coordenacao EURES Italia",
        "url": "https://www.anpal.gov.it",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "ISTAT - Occupati e disoccupati, dezembro 2025",
        "url": "https://www.istat.it/comunicato-stampa/occupati-e-disoccupati-dati-provvisori-dicembre-2025/",
        "official": true
      },
      {
        "label": "ISTAT - Il mercato del lavoro IV trimestre 2025 (PDF)",
        "url": "https://www.istat.it/wp-content/uploads/2026/03/Mercato-del-lavoro-IV-trim_2025.pdf",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Italy",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-italy_en",
        "official": true
      },
      {
        "label": "Ministero del Lavoro - Flussi 2026-2028, decreto da oltre 497mila ingressi",
        "url": "https://www.lavoro.gov.it/priorita/pagine/flussi-2026-2028-pubblicato-il-decreto-da-oltre-497mila-ingressi",
        "official": true
      },
      {
        "label": "Ministero del Lavoro - Flussi 2026, click day subordinato 16 fevereiro",
        "url": "https://www.lavoro.gov.it/notizie/pagine/flussi-2026-attribuite-le-quote-per-lavoro-subordinato-non-stagionale-click-day-il-16-febbraio",
        "official": true
      },
      {
        "label": "Excelsior/Unioncamere - Report previsivo 2025-2029 (PDF)",
        "url": "https://excelsior.unioncamere.net/sites/default/files/pubblicazioni/2025/report_previsivo_2025-29.pdf",
        "official": true
      },
      {
        "label": "Unioncamere - Report sul mismatch domanda/offerta di lavoro (PDF)",
        "url": "https://www.unioncamere.gov.it/sites/default/files/articoli/2026-02/Report%20semestrale_2-2026_def2402%20versione%20PDF.pdf",
        "official": true
      },
      {
        "label": "ANPAL - EURES (coordenacao nacional)",
        "url": "https://www.anpal.gov.it/en/eures",
        "official": true
      },
      {
        "label": "ELA/EURES - Report on labour shortages and surpluses 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "Prefettura La Spezia - Decreto Flussi 2026-2028 (quote)",
        "url": "https://prefettura.interno.gov.it/it/prefetture/spezia/decreto-flussi-2026-2028",
        "official": true
      },
      {
        "label": "Damiani & Damiani - Guia Carta Azul UE Italia (corroboracao juridica)",
        "url": "https://damianianddamiani.com/complete-guide-blue-card-reform/",
        "official": false
      },
      {
        "label": "Remitly - Stipendi medi in Italia 2025 (corroboracao salarial)",
        "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
        "official": false
      },
      {
        "label": "Tutela Previdenziale - Click Day Decreto Flussi 2026 (datas)",
        "url": "https://www.tutelaprevidenziale.it/decreto-flussi-2026-2028-nuovi-click-day-di-febbraio-9-16-e-18-febbraio-2026-cosa-fare-e-cosa-aspettarsi/",
        "official": false
      }
    ]
  },
  "dk": {
    "updatedAt": "2026-06-22",
    "overview": "A Dinamarca entrou em 2026 com um mercado de trabalho ainda saudavel pelos padroes europeus, mas claramente mais frio do que nos anos anteriores. A taxa de desemprego ficou em torno de 2,7% a 3,0% no comeco do ano, segundo a Danmarks Statistik, com cerca de 81 mil desempregados, o nivel mais alto desde 2021. Em fevereiro, o emprego assalariado caiu pela primeira vez em 17 meses, puxado pela industria e por uma onda de demissoes em grandes empregadores. O pais combina salarios altos, forte protecao via acordos coletivos (nao existe salario minimo legal, e sim pisos negociados por setor) e uma carga tributaria elevada sobre o trabalhador, que pode chegar perto de 56% na margem.\n\nPara o estrangeiro, o cenario e de duas portas distintas. Cidadaos da UE/EEE e da Suica entram e trabalham livremente, bastando registro se a estadia passar de tres meses. Ja quem vem de fora do bloco depende de esquemas com exigencia salarial alta, que subiu em janeiro de 2026 (Pay Limit Scheme passou a DKK 552.000/ano) ou de estar numa profissao das Positive Lists de escassez. As demissoes recentes na Novo Nordisk, Maersk, Orsted e Nordea esfriaram a industria farmaceutica, o transporte maritimo e o setor bancario, enquanto TI, saude, construcao civil qualificada e energia verde seguem com falta cronica de mao de obra.",
    "hotSectors": [
      "Tecnologia da informacao e ciberseguranca",
      "Engenharia (automacao, eletronica, civil)",
      "Saude e cuidados (enfermagem, social and health care)",
      "Construcao civil e trades qualificados (eletricista, encanador, soldador, carpinteiro)",
      "Energia verde e cleantech (eolica offshore, transicao energetica)",
      "Ciencias da vida e biotech (apesar dos cortes pontuais)",
      "Hotelaria e gastronomia (chefs)"
    ],
    "coolingSectors": [
      "Industria farmaceutica de grande porte (cortes da Novo Nordisk, ~5.000 vagas na Dinamarca)",
      "Transporte maritimo e logistica corporativa (cortes na Maersk)",
      "Setor bancario administrativo (cortes na Nordea, ~1.500 vagas em 2026-2027)",
      "Energia eolica corporativa em reestruturacao (Orsted)",
      "Varejo de vestuario (Bestseller)",
      "Industria de transformacao em geral (queda de empregos industriais no inicio de 2026)"
    ],
    "inDemandRoles": [
      {
        "role": "Engenheiro de TI / desenvolvedor de software",
        "note": "Carro-chefe da Positive List de ensino superior; escassez cronica em Copenhague e Aarhus"
      },
      {
        "role": "Consultor de ciberseguranca",
        "note": "Entre as profissoes de maior demanda na lista de 2026"
      },
      {
        "role": "Engenheiro de automacao e desenvolvedor de hardware",
        "note": "Na Positive List de ensino superior"
      },
      {
        "role": "Business Intelligence Manager",
        "note": "Novidade adicionada a Positive List em 2026"
      },
      {
        "role": "Enfermeiro(a) (sygeplejerske)",
        "note": "Exige autorizacao dinamarquesa para exercer; setor publico com falta estrutural"
      },
      {
        "role": "Social and Health Care Worker/Assistant",
        "note": "Na Positive List de trabalho qualificado; exige autorizacao dinamarquesa"
      },
      {
        "role": "Eletricista, encanador, soldador, carpinteiro, pedreiro",
        "note": "Trades na Positive List for Skilled Work"
      },
      {
        "role": "Chef de cozinha",
        "note": "Na Positive List for Skilled Work"
      },
      {
        "role": "Tecnico de aeronaves e mecanicos especializados",
        "note": "Na Positive List for Skilled Work"
      },
      {
        "role": "Profissionais de energia eolica offshore e cleantech",
        "note": "Setor estrategico da transicao verde dinamarquesa"
      }
    ],
    "byQualification": [
      {
        "area": "TI, engenharia e tecnologia (ensino superior)",
        "advice": "Melhor porta de entrada para nao europeus. A Positive List for People with a Higher Education traz cerca de 180 cargos em 2026, com forte peso de TI, ciberseguranca, automacao e dados. Quem tem diploma e oferta de emprego nessas areas consegue permit pela lista; alternativamente, salarios de TI senior costumam ultrapassar com folga o Pay Limit Scheme (DKK 552.000/ano), abrindo a via salarial e o Fast-track em empresas certificadas."
      },
      {
        "area": "Saude (enfermagem, cuidados)",
        "advice": "Demanda alta e estrutural, mas profissao regulamentada: enfermeiros e social/health care assistants precisam de autorizacao dinamarquesa (autorisation) e, na pratica, de dinamarques funcional para o atendimento. Vale comecar o reconhecimento do diploma cedo e investir no idioma antes de buscar a vaga."
      },
      {
        "area": "Trades e construcao civil (ensino tecnico/vocacional)",
        "advice": "A Positive List for Skilled Work (cerca de 47 a 54 cargos em 2026) cobre eletricista, encanador, soldador, carpinteiro, pedreiro, mecanicos e chefs. O salario e os termos precisam corresponder aos padroes dinamarqueses (acordos coletivos), e o empregador deve cumprir exigencias de aprendizagem (Laerepladse-AUB). Idioma tecnico ajuda muito na contratacao."
      },
      {
        "area": "Ciencias da vida e biotech",
        "advice": "Setor forte e qualificado, mas em reestruturacao apos os cortes da Novo Nordisk em 2026. Ha oportunidade para perfis especializados (P&D, regulatorio, producao GMP), porem o momento exige seletividade: priorizar empresas em crescimento e nichos terapeuticos fora da area afetada pelos cortes."
      },
      {
        "area": "Empreendedores e fundadores de startup",
        "advice": "Quem quer empreender (nao UE/EEE) deve mirar o Start-up Denmark: plano de negocio inovador e escalavel avaliado por painel de especialistas, em setores-chave (Tech, Cleantech, Life science, Food, Maritime, Design e Inovacao). Cota de 75 permits por ano, valido por ate 2 anos e renovavel. Cidadaos da UE nao usam esse esquema, pois ja tem liberdade de estabelecimento."
      },
      {
        "area": "Cidadaos da UE/EEE e Suica",
        "advice": "Acesso mais simples de todos: podem entrar e comecar a trabalhar imediatamente, sem work permit. Para estadias acima de tres meses, solicitar o registration certificate (certificado de registro) no nyidanmark.dk antes de expirar a estadia legal."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio geral (Dinamarca)",
        "range": "Cerca de DKK 47.000/mes bruto (mediana ~DKK 44.500)",
        "source": {
          "label": "Danmarks Statistik (referencia oficial de salarios)",
          "url": "https://www.dst.dk/en/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software",
        "range": "Junior ~DKK 38.000-45.000/mes; pleno ~DKK 52.000-62.000; senior ~DKK 68.000-90.000 (bruto)",
        "source": {
          "label": "Glassdoor / Levels.fyi (comunidade, nao oficial)",
          "url": "https://www.glassdoor.com/Salaries/copenhagen-denmark-software-engineer-salary-SRCH_IL.0,18_IM958_KO19,36.htm",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software",
        "range": "Cerca de DKK 45.000-65.000/mes em posicoes permanentes",
        "source": {
          "label": "Glassdoor (comunidade, nao oficial)",
          "url": "https://www.glassdoor.com/Salaries/copenhagen-denmark-software-developer-salary-SRCH_IL.0,18_IM958_KO19,37.htm",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) registrado(a)",
        "range": "Base ~DKK 30.000-42.000+/mes (cerca de DKK 400.000-500.000/ano), mais adicionais de turno",
        "source": {
          "label": "Glassdoor / PayScale (comunidade, nao oficial)",
          "url": "https://www.glassdoor.com/Salaries/denmark-registered-nurse-salary-SRCH_IL.0,7_IN63_KO8,24.htm",
          "official": true
        }
      },
      {
        "role": "Piso salarial para work permit (Pay Limit Scheme ordinario)",
        "range": "DKK 552.000/ano (minimo legal para o esquema em 2026)",
        "source": {
          "label": "New to Denmark (SIRI / nyidanmark.dk, oficial)",
          "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme",
          "official": true
        }
      },
      {
        "role": "Piso salarial Supplementary Pay Limit Scheme",
        "range": "DKK 446.000/ano em 2026 (esquema suplementar, com regras mais rigidas)",
        "source": {
          "label": "Bird & Bird (sintese de fonte oficial)",
          "url": "https://www.twobirds.com/en/insights/2026/denmark/udenlandsk-arbejdskraft---nye-bel%C3%B8bsgr%C3%A6nser-under-bel%C3%B8bsordningerne-og-opdateret-positivlister",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica nao precisam de work permit: entram e comecam a trabalhar de imediato, e so precisam solicitar o registration certificate no nyidanmark.dk se a estadia ultrapassar tres meses. Para nacionais de fora do bloco, as principais vias em 2026 sao: (1) Pay Limit Scheme, que concede permit quando ha oferta com salario anual de pelo menos DKK 552.000 (limite que subiu DKK 38.000 em janeiro de 2026); (2) Supplementary Pay Limit Scheme, com piso menor (DKK 446.000) porem regras mais duras, incluindo divulgacao publica da vaga e desemprego nacional abaixo de certo nivel; (3) Fast-track Scheme, para empresas certificadas, com processamento mais rapido e a mesma via salarial; e (4) as Positive Lists, que permitem permit a quem tem oferta numa profissao em escassez (cerca de 180 cargos na lista de ensino superior e cerca de 47 a 54 na lista de trabalho qualificado, ambas atualizadas em 1 de janeiro e 1 de julho). Em todos os esquemas o salario e os termos devem corresponder aos padroes dinamarqueses, aferidos pelo registro de salarios da Danmarks Statistik, e o salario deve ser pago em conta bancaria dinamarquesa em nome do trabalhador (aberta em ate 180 dias). Profissoes regulamentadas, como enfermagem e social/health care, exigem autorizacao dinamarquesa (autorisation) para exercer. Os novos pisos valem so para primeiros pedidos; renovacoes seguem o limite vigente na concessao original. Para empreender, nao europeus usam o Start-up Denmark (plano de negocio inovador avaliado por painel, cota de 75 permits/ano, valido por ate 2 anos e renovavel por 3 de cada vez), nos setores-chave Tech, Cleantech, Life science, Food, Maritime e Design e Inovacao.",
    "opportunityWindows": [
      "Positive Lists atualizadas em 1 de janeiro e 1 de julho: vale conferir cada nova versao, pois cargos entram e saem (em 2026 a lista de ensino superior tem ~180 cargos e a de trabalho qualificado ~47-54)",
      "TI, ciberseguranca e dados seguem como a via mais aberta para nao europeus, tanto pela Positive List quanto pelos salarios altos que cruzam o Pay Limit Scheme",
      "Energia verde e eolica offshore, prioridade estrategica nacional, sustentam demanda mesmo em desaceleracao",
      "Trades qualificados (eletricista, encanador, soldador) com falta estrutural na construcao civil",
      "Start-up Denmark com cota anual de 75 permits e janela de submissao continua (avaliacoes suspensas em julho); planejar envio fora dessa pausa",
      "Saude: quem inicia cedo o reconhecimento de diploma e o dinamarques se posiciona para a falta estrutural de enfermeiros"
    ],
    "jobBoards": [
      {
        "label": "Workindenmark (portal oficial de vagas em ingles, parte do Ministerio do Emprego / EURES)",
        "url": "https://www.workindenmark.dk/",
        "official": true
      },
      {
        "label": "Jobnet / STAR (Styrelsen for Arbejdsmarked og Rekruttering, servico publico de emprego)",
        "url": "https://job.jobnet.dk/",
        "official": true
      },
      {
        "label": "EURES (portal europeu de mobilidade laboral, vagas e condicoes na Dinamarca)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "New to Denmark / nyidanmark.dk (SIRI, autoridade de imigracao para vistos e permits)",
        "url": "https://www.nyidanmark.dk/en-GB",
        "official": true
      },
      {
        "label": "Start-up Denmark (programa oficial para empreendedores estrangeiros)",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "New to Denmark (nyidanmark.dk) - Positive List for Skilled Work",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-skilled-work",
        "official": true
      },
      {
        "label": "New to Denmark (nyidanmark.dk) - Pay Limit Scheme",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme",
        "official": true
      },
      {
        "label": "New to Denmark (nyidanmark.dk) - Start-up Denmark",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark",
        "official": true
      },
      {
        "label": "Workindenmark - Residence and work permit",
        "url": "https://www.workindenmark.dk/getting-started/rules-and-regulations/residence-and-work-permit",
        "official": true
      },
      {
        "label": "Danmarks Statistik - desemprego e emprego",
        "url": "https://www.dst.dk/en/Statistik/emner/arbejde-og-indkomst/beskaeftigelse-og-arbejdsloeshed",
        "official": true
      },
      {
        "label": "Danmarks Statistik - salarios (Earnings)",
        "url": "https://www.dst.dk/en/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen",
        "official": true
      },
      {
        "label": "EURES - Living and working conditions: Denmark",
        "url": "https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-denmark_en",
        "official": true
      },
      {
        "label": "Bird & Bird - novos limites salariais e Positive Lists 2026",
        "url": "https://www.twobirds.com/en/insights/2026/denmark/udenlandsk-arbejdskraft---nye-bel%C3%B8bsgr%C3%A6nser-under-bel%C3%B8bsordningerne-og-opdateret-positivlister",
        "official": false
      },
      {
        "label": "Deloitte - Immigration News January 2026 (Dinamarca)",
        "url": "https://www.deloitte.com/dk/en/services/tax/perspectives/immigration-news-january-2026.html",
        "official": false
      },
      {
        "label": "Fragomen - Denmark: Positive Lists Updated",
        "url": "https://www.fragomen.com/insights/denmark-positive-lists-updated.html",
        "official": false
      },
      {
        "label": "Bloomberg - Danish Jobs Drop / Novo Nordisk cuts (abril 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-04-28/danish-jobs-drop-snapping-growth-streak-as-novo-cuts-hit-data",
        "official": false
      },
      {
        "label": "The Local Denmark - cortes de grandes empresas dinamarquesas em 2026",
        "url": "https://www.thelocal.dk/20260317/key-points-which-major-danish-companies-have-announced-job-cuts-in-2026",
        "official": false
      },
      {
        "label": "Glassdoor - salarios de software e enfermagem (Dinamarca, 2026)",
        "url": "https://www.glassdoor.com/Salaries/copenhagen-denmark-software-engineer-salary-SRCH_IL.0,18_IM958_KO19,36.htm",
        "official": false
      }
    ]
  },
  "pl": {
    "updatedAt": "2026-06-22",
    "overview": "A Polonia entrou em 2026 com um dos mercados de trabalho mais aquecidos da Uniao Europeia em termos de desemprego, mas marcado por um paradoxo estrutural. A taxa de desemprego registrada ficou em torno de 6,0% em abril de 2026 (a medida harmonizada do Eurostat aponta cerca de 3,2%), e a taxa de emprego da populacao em idade ativa gira ao redor de 72%, acima da media europeia. Ao mesmo tempo, o emprego no setor corporativo (empresas com mais de nove funcionarios) acumula mais de dois anos de queda continua, e estima-se que o deficit estrutural de mao de obra possa chegar a cerca de 1,5 milhao de trabalhadores. O pais ja conta com mais de 1,2 milhao de trabalhadores estrangeiros, predominantemente ucranianos, bielorrussos e georgianos, que sustentam setores como manufatura, construcao e transporte.\n\nPara o estrangeiro, o cenario combina oportunidade e seletividade. Faltam profissionais de saude, motoristas, soldadores, eletricistas e trabalhadores da construcao, enquanto a demanda por perfis genericos de TI e de manufatura automotiva esfriou em meio a ondas de demissao coletiva e ao avanco da automacao. A boa noticia institucional e que, desde junho de 2025, a contratacao de estrangeiros foi simplificada e digitalizada: o teste de mercado de trabalho (opiniao do starosta) foi eliminado para a autorizacao tipo A, e a partir de 27 de abril de 2026 os pedidos de autorizacao unica de residencia e trabalho passam a ser feitos exclusivamente de forma eletronica, com perfil confiavel. O salario medio bruto no setor empresarial chegou a 9.530,74 zl em abril de 2026, alta de 5,4% em doze meses, enquanto o salario minimo nacional subiu para 4.806 zl brutos por mes.",
    "hotSectors": [
      "Saude e cuidados (medicos, enfermeiros, cuidadores, fisioterapeutas)",
      "Construcao civil e oficios qualificados (pedreiros, soldadores, eletricistas, telhadores)",
      "Transporte e logistica (motoristas de caminhao e onibus, operadores de armazem)",
      "Manufatura de equipamentos eletricos e tecnologia industrial / automacao",
      "TI especializado em IA, cloud e ciberseguranca",
      "Energia e infraestrutura (investimentos em automacao e energia)"
    ],
    "coolingSectors": [
      "Setor corporativo amplo (mais de 26 meses de queda no emprego ate o fim de 2025)",
      "TI generico e funcoes repetitivas afetadas por automacao e demissoes em Big Tech",
      "Industria automotiva (queda de receita ano a ano)",
      "Construcao e montagem industrial (producao caiu 7,0% no 1o trimestre de 2026)",
      "Transporte de cargas (queda de 1,7% no 1o trimestre de 2026)",
      "Mineracao (declinio estrutural de longo prazo)",
      "Economistas e perfis de economia (excesso de oferta em varias regioes)"
    ],
    "inDemandRoles": [
      {
        "role": "Medicos, enfermeiros e cuidadores",
        "note": "Profissoes deficitarias persistentes; profissoes regulamentadas exigem reconhecimento de diploma e direito de exercicio"
      },
      {
        "role": "Motoristas de caminhao e de onibus",
        "note": "Escassez cronica; setor logistico tambem demanda gestores e planejadores de armazem"
      },
      {
        "role": "Soldadores",
        "note": "Grande escassez apontada pela EURES"
      },
      {
        "role": "Eletricistas e instaladores eletricos",
        "note": "Grande escassez apontada pela EURES"
      },
      {
        "role": "Pedreiros, telhadores e trabalhadores da construcao",
        "note": "Maior grupo ocupacional em deficit no pais"
      },
      {
        "role": "Engenheiros (civil, eletrico, mecanico, quimico)",
        "note": "Demanda firme ligada a industria e infraestrutura"
      },
      {
        "role": "Especialistas em TI de IA, cloud e ciberseguranca",
        "note": "Nicho aquecido mesmo com esfriamento do TI generico"
      },
      {
        "role": "Contadores, auditores e analistas financeiros",
        "note": "Demanda constante em servicos e centros de servicos compartilhados"
      },
      {
        "role": "Professores de varias especialidades e educadores infantis",
        "note": "Setor de ensino entre os de maior deficit"
      },
      {
        "role": "Operadores de armazem e logistica",
        "note": "Sustentado por nearshoring e e-commerce"
      }
    ],
    "byQualification": [
      {
        "area": "Saude (medicos, enfermeiros, dentistas, farmaceuticos)",
        "advice": "Setor com escassez estrutural e alta demanda. Para diplomas da UE/EFTA, sete profissoes regulamentadas tem reconhecimento automatico (medico geral e especialista, dentista, farmaceutico, enfermeiro geral, parteira, veterinario e arquiteto). Diplomas de fora da UE/OCDE/EFTA exigem nostrificacao feita por universidade com categoria A+, A ou B+, alem do direito de exercicio profissional. Comece pela verificacao no sistema KWALIFIKATOR."
      },
      {
        "area": "Oficios qualificados (soldador, eletricista, pedreiro, motorista)",
        "advice": "Maior porta de entrada para nao europeus. Vagas abundantes e autorizacao de trabalho tipo A facilitada apos a eliminacao do teste de mercado. Motoristas profissionais precisam validar carteira e qualificacoes (codigo 95). Certificacoes tecnicas reconhecidas aceleram a contratacao."
      },
      {
        "area": "Engenharia e tecnologia industrial",
        "advice": "Demanda firme em manufatura de equipamentos eletricos, automacao e energia. Engenheiros altamente qualificados podem se enquadrar no Cartao Azul da UE, cujo limiar salarial subiu para 13.355,34 zl brutos/mes a partir de 9 de fevereiro de 2026. Diplomas estrangeiros podem exigir reconhecimento."
      },
      {
        "area": "TI e tecnologia",
        "advice": "Mercado seletivo. Perfis de IA, cloud, ciberseguranca e dados seguem aquecidos e bem pagos, enquanto funcoes genericas e repetitivas sofrem com demissoes e automacao. Vale buscar contratos B2B (autonomo) e mirar especializacao. O Cartao Azul da UE e caminho comum para altos salarios."
      },
      {
        "area": "Financas, contabilidade e servicos (SSC/BPO)",
        "advice": "Contadores, auditores e analistas financeiros estao entre os perfis em falta. Polones e ingles fluentes ampliam muito as chances nos centros de servicos compartilhados. Cuidado: economistas em geral estao em excesso de oferta, entao a especializacao tecnica faz diferenca."
      },
      {
        "area": "Educacao",
        "advice": "Professores de varias especialidades e educadores infantis estao em deficit. Exige reconhecimento de qualificacoes e, na pratica, dominio do idioma polones para a maioria das vagas em escolas publicas."
      },
      {
        "area": "Empreendedor / autonomo",
        "advice": "Cidadaos da UE/EEE, EUA e Suica, alem de ucranianos com PESEL e estrangeiros com titulos de residencia qualificados (residencia permanente, residente de longa duracao UE, Cartao Azul, reuniao familiar, estudos, pesquisa, casamento com polones, protecao), podem abrir empresa individual (JDG) nas mesmas condicoes dos poloneses. Quem nao tem esses titulos so pode atuar via sociedade, como a sp. z o.o. E preciso PESEL antes de registrar no CEIDG; o registro e gratuito e online."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto no setor empresarial (abr/2026)",
        "range": "9.530,74 zl/mes",
        "source": {
          "label": "GUS - Statistics Poland (situacao socioeconomica do pais, 26/05/2026)",
          "url": "https://ssgk.stat.gov.pl/Wynagrodzenia_i_swiadczenia_spoleczne.html",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional (a partir de 01/01/2026)",
        "range": "4.806 zl brutos/mes (cerca de 3.531 zl liquidos); hora minima 31,40 zl brutos",
        "source": {
          "label": "Ministerstwo Rodziny, Pracy i Polityki Spolecznej (gov.pl)",
          "url": "https://www.gov.pl/web/family/minimum-wage",
          "official": true
        }
      },
      {
        "role": "Limiar salarial do Cartao Azul da UE (a partir de 09/02/2026)",
        "range": "13.355,34 zl brutos/mes",
        "source": {
          "label": "Comissao Europeia - EU Immigration Portal (EU Blue Card Poland)",
          "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-poland_en",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software (media de mercado)",
        "range": "cerca de 120.000 a 235.000 zl brutos/ano, conforme senioridade; junior Java ~8.500 zl/mes, senior ~23.250 zl/mes (CLT) ou 25.000-27.000 zl liquidos em B2B",
        "source": {
          "label": "Comunidade - whatisthesalary / nextleveljobs (nao oficial)",
          "url": "https://whatisthesalary.com/it-salaries/software-engineer-salary-in-poland/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE trabalham e empreendem nas mesmas condicoes dos poloneses, sem necessidade de autorizacao de trabalho. Para nao europeus, a regra geral exige autorizacao de trabalho (zezwolenie na pracze) somada a um titulo de residencia. Desde junho de 2025 o processo foi simplificado e digitalizado: o teste de mercado de trabalho (opiniao do starosta) foi eliminado para a autorizacao tipo A, e a partir de 27 de abril de 2026 os pedidos de autorizacao unica de residencia e trabalho (jednolite zezwolenie) devem ser submetidos exclusivamente de forma eletronica, com perfil confiavel; pedidos em papel apos essa data nao serao analisados. As taxas oficiais (desde 1 de dezembro de 2025) sao de 200 zl para autorizacao tipo A de ate 3 meses, 400 zl para periodos maiores, 800 zl para delegacao (tipo D) e 100 zl para trabalho sazonal (tipo S). Trabalhadores altamente qualificados podem optar pelo Cartao Azul da UE, cujo limiar salarial passou a 13.355,34 zl brutos por mes a partir de 9 de fevereiro de 2026. Profissoes regulamentadas (medico, enfermeiro, dentista, farmaceutico, arquiteto, veterinario, parteira) exigem reconhecimento de qualificacoes: ha reconhecimento automatico para sete profissoes de diplomas da UE/EFTA, enquanto diplomas de fora da UE/OCDE/EFTA passam por nostrificacao em universidade com categoria A+, A ou B+. Para empreender, cidadaos da UE/EEE, EUA, Suica, ucranianos com PESEL e estrangeiros com titulos de residencia qualificados podem abrir empresa individual (JDG) como os poloneses; os demais so podem operar via sociedade (sp. z o.o.). Atencao: apos 5 de marco de 2026, sem o status UKR nao e possivel abrir nova JDG em procedimento simplificado. Todo estrangeiro precisa de numero PESEL para registrar a JDG no CEIDG.",
    "opportunityWindows": [
      "Eliminacao do teste de mercado de trabalho para autorizacao tipo A (desde jun/2025) acelera a contratacao de estrangeiros em oficios e saude",
      "Deficit estrutural projetado em ate 1,5 milhao de trabalhadores mantem a porta aberta em oficios qualificados, transporte e saude",
      "Salario minimo unico em 2026 (4.806 zl, sem reajuste no meio do ano) traz previsibilidade de custos para contratacao",
      "Nearshoring e investimentos em energia, automacao e manufatura de equipamentos eletricos abrem vagas tecnicas",
      "Nichos de IA, cloud e ciberseguranca em TI resistem ao esfriamento geral do setor",
      "Cartao Azul da UE como via rapida para profissionais altamente qualificados que atinjam o limiar salarial"
    ],
    "jobBoards": [
      {
        "label": "Wortal Publicznych Sluzb Zatrudnienia (praca.gov.pl) - servico publico de emprego",
        "url": "https://psz.praca.gov.pl/",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional",
        "url": "https://eures.europa.eu/",
        "official": true
      },
      {
        "label": "Biznes.gov.pl - registro de empresa e regras para empreender (CEIDG)",
        "url": "https://www.biznes.gov.pl/en",
        "official": true
      },
      {
        "label": "CEIDG - registro de empresa individual (JDG)",
        "url": "https://www.ceidg.gov.pl/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "GUS / Statistics Poland - Mercado de Trabalho (salarios e beneficios sociais, abr/2026)",
        "url": "https://ssgk.stat.gov.pl/Wynagrodzenia_i_swiadczenia_spoleczne.html",
        "official": true
      },
      {
        "label": "GUS / Statistics Poland - Topics / Labour Market",
        "url": "https://stat.gov.pl/en/topics/labour-market/",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Poland",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-poland_en",
        "official": true
      },
      {
        "label": "Wortal PSZ - Zezwolenia na prace (Ministerstwo Rodziny, Pracy i Polityki Spolecznej)",
        "url": "https://psz.praca.gov.pl/dla-pracodawcow-i-przedsiebiorcow/zatrudnianie-cudzoziemcow/zezwolenia-na-prace-uw",
        "official": true
      },
      {
        "label": "Biznes.gov.pl - Atividades empresariais de estrangeiros na Polonia",
        "url": "https://www.biznes.gov.pl/en/portal/004055",
        "official": true
      },
      {
        "label": "Ministerstwo Rodziny, Pracy i Polityki Spolecznej - Minimum wage",
        "url": "https://www.gov.pl/web/family/minimum-wage",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Immigration Portal: EU Blue Card Poland",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-poland_en",
        "official": true
      },
      {
        "label": "EURAXESS Poland - Reconhecimento de qualificacoes",
        "url": "https://www.euraxess.pl/poland/recognition-qualifications",
        "official": true
      },
      {
        "label": "Barometr Zawodow 2026 (financiado pelo Ministerio do Trabalho)",
        "url": "https://barometrzawodow.pl/",
        "official": true
      },
      {
        "label": "European Labour Authority (ELA) - Labour shortages and surpluses in Europe 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "Software Engineer Salary in Poland (whatisthesalary) - camada de comunidade",
        "url": "https://whatisthesalary.com/it-salaries/software-engineer-salary-in-poland/",
        "official": false
      },
      {
        "label": "Poland Insight - planos de demissoes coletivas (comunidade/imprensa)",
        "url": "https://polandinsight.com/polish-companies-plan-significant-layoffs-amid-rising-costs-and-slowdown-60829/",
        "official": false
      }
    ]
  },
  "ie": {
    "updatedAt": "2026-06-22",
    "overview": "A Irlanda chega a meados de 2026 com um mercado de trabalho ainda aquecido, mas em ajuste. Segundo a Pesquisa de Força de Trabalho do CSO (Central Statistics Office) referente ao 1o trimestre de 2026, o emprego total alcancou 2.794.500 pessoas e a taxa de desemprego ficou em 4,9%, patamar baixo para os padroes europeus, embora acima dos 4,3% registrados um ano antes. A taxa de emprego entre 15 e 64 anos recuou de 74,7% para 73,3% no periodo. O retrato setorial mostra dois movimentos opostos: a Construcao foi o setor que mais cresceu, com 20.500 novos postos (+11,7%), puxada pela meta governamental de entregar 300 mil moradias ate 2030, enquanto Informacao e Comunicacao foi o que mais encolheu, com queda de 20.300 vagas (-10,7%), concentrada em programacao e consultoria de TI.\n\nApesar dos cortes pontuais em tecnologia, o pais segue marcado por escassez de mao de obra qualificada. Levantamentos de mercado apontam que cerca de 76% dos empregadores irlandeses relatam dificuldade para preencher vagas, um dos indices mais altos da Europa, e o problema e descrito menos como falta de empregos e mais como falta de competencias. Saude, construcao, engenharia e areas de tecnologia de ponta como ciberseguranca permanecem com demanda firme. Os salarios continuaram subindo: o ganho medio semanal chegou a 1.074,61 euros no 1o trimestre de 2026, alta de 4,4% em doze meses, acima da inflacao. Para o estrangeiro, o cenario combina abertura via Critical Skills Employment Permit e listas de ocupacoes ampliadas em 2026 com exigencias salariais mais rigorosas a partir de 1o de marco de 2026.",
    "hotSectors": [
      "Saude e assistencia social (mais de 7.500 vagas na HSE, incluindo 3.400+ de enfermagem)",
      "Construcao civil e engenharia (setor que mais cresceu, +11,7% no 1o tri 2026; meta de 300 mil moradias ate 2030)",
      "Tecnologia de ponta e ciberseguranca (ciberseguranca com vacancias medias de 18+ meses)",
      "Engenharia (civil, estrutural, mecanica, eletrica, eletronica)",
      "Farmaceutico e ciencias da vida (cientistas quimicos e biologicos em manufatura)",
      "Servicos financeiros e profissionais (contadores, atuarios, analistas)",
      "Agroalimentar e transporte (novas ocupacoes adicionadas em 2026)"
    ],
    "coolingSectors": [
      "Informacao e Comunicacao / TI generalista (queda de 20.300 postos, -10,7% no 1o tri 2026)",
      "Programacao e consultoria de TI (recuo de 16.200 vagas no periodo)",
      "Trabalho remoto integral (home office recuou 4,3% com retorno presencial superando o nivel pre-pandemia)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros e parteiras registrados",
        "note": "Mais de 3.400 vagas de enfermagem na HSE; constam na Critical Skills List"
      },
      {
        "role": "Medicos (clinicos gerais e especialistas)",
        "note": "Medical practitioners na Critical Skills List; envelhecimento populacional pressiona demanda"
      },
      {
        "role": "Desenvolvedores de software e profissionais de programacao",
        "note": "Apesar de cortes em TI generalista, perfis especializados seguem na Critical Skills List"
      },
      {
        "role": "Analistas e especialistas em ciberseguranca",
        "note": "Apontada como a competencia mais dificil de recrutar, com vacancias de 18+ meses"
      },
      {
        "role": "Engenheiros de dados",
        "note": "Forte demanda em tecnologia de ponta"
      },
      {
        "role": "Engenheiros civis, estruturais e de obra (site engineers)",
        "note": "Critical Skills List; impulsionados pelo plano habitacional"
      },
      {
        "role": "Engenheiros mecanicos, eletricos e eletronicos",
        "note": "Critical Skills List, incluindo design de chips e automacao"
      },
      {
        "role": "Eletricistas, encanadores e carpinteiros",
        "note": "Setor precisa de 50 mil trabalhadores adicionais ate 2030; trades em geral fora da Critical Skills List, mas em alta demanda"
      },
      {
        "role": "Fisioterapeutas e terapeutas ocupacionais",
        "note": "Profissionais de saude aliada na Critical Skills List"
      },
      {
        "role": "Contadores e atuarios",
        "note": "Chartered and certified accountants, atuarios e estatisticos na Critical Skills List"
      },
      {
        "role": "Cientistas quimicos e biologicos / biochemistas",
        "note": "Demanda do polo farmaceutico e de ciencias da vida"
      },
      {
        "role": "Arquitetos e planejadores urbanos",
        "note": "Architect e Town Planning Officer na Critical Skills List"
      },
      {
        "role": "Assistentes sociais",
        "note": "Social Worker consta na Critical Skills List"
      }
    ],
    "byQualification": [
      {
        "area": "Saude (enfermagem, medicina, terapias)",
        "advice": "Setor de maior escassez do pais e o caminho mais direto para o estrangeiro. Enfermeiros, medicos, fisioterapeutas e terapeutas ocupacionais estao na Critical Skills List, o que da acesso ao permit mais vantajoso e residencia familiar imediata. Necessario registro no orgao profissional competente (NMBI para enfermeiros, Medical Council para medicos, CORU para terapias) e prova de ingles. A HSE recruta ativamente no exterior."
      },
      {
        "area": "Tecnologia e ciberseguranca",
        "advice": "Mesmo com a contracao da TI generalista, perfis especializados como ciberseguranca, engenharia de dados e desenvolvimento senior seguem disputados e na Critical Skills List. Vale focar em empregadores estabelecidos e em nicho de alta demanda, evitando funcoes de programacao basica que sofreram cortes. Portfolio e certificacoes contam mais que diploma generico."
      },
      {
        "area": "Engenharia",
        "advice": "Engenheiros civis, estruturais, mecanicos, eletricos e eletronicos tem caminho solido pela Critical Skills List, reforcado pelo boom da construcao e por industrias como semicondutores e energia. Buscar reconhecimento junto a Engineers Ireland fortalece a candidatura."
      },
      {
        "area": "Construcao e trades qualificados",
        "advice": "A demanda e enorme (50 mil trabalhadores ate 2030), mas a maioria dos oficios de obra como eletricista, encanador e carpinteiro NAO esta na Critical Skills List, exigindo via General Employment Permit com teste de mercado de trabalho. Em 2026 foram adicionadas funcoes como planejador/programador de obra. Compensa buscar empregador disposto a patrocinar."
      },
      {
        "area": "Financas, contabilidade e negocios",
        "advice": "Contadores certificados, atuarios, economistas, estatisticos e analistas de negocio estao na Critical Skills List. Qualificacao reconhecida (ACCA, ACA, CFA) e diferencial competitivo em Dublin, polo de servicos financeiros."
      },
      {
        "area": "Ciencias da vida e farmaceutico",
        "advice": "Cientistas quimicos, biologicos e de laboratorio medico tem demanda no forte cluster farmaceutico irlandes e constam na Critical Skills List. Mestrado/doutorado e experiencia em manufatura regulada aumentam as chances."
      },
      {
        "area": "Empreendedores e investidores",
        "advice": "Quem nao tem oferta de emprego mas tem capital e ideia inovadora pode entrar pelo Start-up Entrepreneur Programme (STEP), com financiamento minimo de 50.000 euros e projeto de potencial exportador. Negocios de servico local comum nao se qualificam: o programa exige inovacao e escala internacional."
      },
      {
        "area": "Baixa qualificacao / sem profissao listada",
        "advice": "Ocupacoes na Ineligible List (como agente imobiliario, instrutor de fitness, oficial de condicional) nao geram permit. Sem profissao em demanda, o acesso ao mercado depende de ja ter direito de residencia (cidadania UE/EEE, reagrupamento familiar, estudante com permissao de trabalho) ou de migrar para uma area listada via qualificacao."
      }
    ],
    "salaries": [
      {
        "role": "Ganho medio semanal (todos os setores)",
        "range": "1.074,61 euros/semana (1o tri 2026, +4,4% em 12 meses)",
        "source": {
          "label": "CSO - Earnings and Labour Costs",
          "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
          "official": true
        }
      },
      {
        "role": "Ganho medio horario (todos os setores)",
        "range": "33,13 euros/hora (1o tri 2026, +4,0% em 12 meses)",
        "source": {
          "label": "CSO - Earnings and Labour Costs",
          "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
          "official": true
        }
      },
      {
        "role": "Informacao e Comunicacao (custo horario total de mao de obra, mais alto)",
        "range": "62,65 euros/hora (1o tri 2026)",
        "source": {
          "label": "CSO - Earnings and Labour Costs",
          "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
          "official": true
        }
      },
      {
        "role": "Acomodacao e Alimentacao (custo horario total, mais baixo)",
        "range": "20,39 euros/hora (1o tri 2026)",
        "source": {
          "label": "CSO - Earnings and Labour Costs",
          "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
          "official": true
        }
      },
      {
        "role": "Educacao (ganho medio semanal)",
        "range": "1.133,29 euros/semana (1o tri 2026, +6,7%)",
        "source": {
          "label": "CSO - Earnings and Labour Costs",
          "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
          "official": true
        }
      },
      {
        "role": "Servicos administrativos e de apoio (ganho medio semanal)",
        "range": "848,65 euros/semana (1o tri 2026, +7,7%)",
        "source": {
          "label": "CSO - Earnings and Labour Costs",
          "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software (referencia de mercado)",
        "range": "50.000 a 70.000 euros/ano (varia muito por senioridade e fonte)",
        "source": {
          "label": "Morgan McKinley Salary Guide (comunidade, nao oficial)",
          "url": "https://www.morganmckinley.com/ie/salary-guide/data/software-engineer/ireland",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "14,15 euros/hora (cerca de 28.696 euros/ano) desde 01/01/2026",
        "source": {
          "label": "Citizens Information (oficial)",
          "url": "https://www.citizensinformation.ie/en/employment/employment-rights-and-conditions/pay-and-employment/minimum-wage/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do EEE e da Suica trabalham na Irlanda sem necessidade de permit. Para nacionais de fora desse bloco, o sistema central e o de Employment Permits do Department of Enterprise, Tourism and Employment (DETE). O principal e o Critical Skills Employment Permit, voltado a ocupacoes da Critical Skills Occupations List (saude, TI especializada, engenharia, ciencias, financas, arquitetura): permite trazer a familia desde o inicio e abre caminho mais rapido para residencia de longo prazo. Os limites salariais foram elevados em 1o de marco de 2026: cerca de 40.904 euros/ano para ocupacoes listadas pela rota padrao, 36.848 euros para recem-formados elegiveis de instituicoes irlandesas em ocupacoes listadas, e acima de 68.911 euros para funcoes nao listadas (desde que fora da Ineligible List). O General Employment Permit cobre ocupacoes fora da lista critica, com salario minimo que subiu de 34.000 para 36.605 euros a partir de 1o de marco de 2026 e, em regra, exige o Labour Market Needs Test (comprovar que nao havia candidato da UE/EEE). O DETE reforcou em 2026 a fiscalizacao contra salary padding: o salario-base do contrato deve atingir o piso sozinho, sem somar bonus, horas extras ou beneficios. Em 2026, 32 mudancas ampliaram as listas, adicionando funcoes em construcao, saude, transporte e agroalimentar, e cinco ocupacoes sairam da Ineligible List (entre elas tecnicos farmaceuticos e dentarios e trabalhadores florestais). O salario minimo nacional e de 14,15 euros/hora desde 1o de janeiro de 2026 (cerca de 28.696 euros/ano). Profissoes regulamentadas exigem registro no orgao competente antes de exercer: enfermeiros e parteiras no NMBI, medicos no Medical Council, fisioterapeutas e terapeutas no CORU, engenheiros via Engineers Ireland, alem de prova de proficiencia em ingles. Para empreender sem oferta de emprego existe o Start-up Entrepreneur Programme (STEP), com financiamento minimo de 50.000 euros (mais 30.000 por cofundador adicional) e exigencia de negocio inovador, com potencial de exportacao, capaz de gerar cerca de 10 empregos e 1 milhao de euros em vendas em tres a quatro anos; concede residencia inicial de 2 anos, renovavel por mais 3, com caminho a residencia de longo prazo.",
    "opportunityWindows": [
      "Plano habitacional Housing for All: necessidade de 50 mil trabalhadores adicionais na construcao ate 2030, abrindo vagas continuas em engenharia e trades qualificados",
      "Escassez critica na saude: mais de 7.500 vagas na HSE (3.400+ de enfermagem), com recrutamento internacional ativo e perfis na Critical Skills List",
      "Ampliacao das listas de ocupacoes em 2026: 32 mudancas adicionaram funcoes em construcao, saude, transporte e agroalimentar, e 5 ocupacoes sairam da Ineligible List",
      "Ciberseguranca com vacancias medias de 18+ meses, indicando janela longa para profissionais especializados",
      "Pressao salarial favoravel: 80% dos empregadores preveem aumentos em 2026 (media de 3,1%), com ganhos medios subindo acima da inflacao",
      "Recem-formados de instituicoes irlandesas em ocupacoes listadas tem piso salarial reduzido (36.848 euros) no Critical Skills Permit"
    ],
    "jobBoards": [
      {
        "label": "JobsIreland.ie - servico publico de emprego (Intreo / Department of Social Protection)",
        "url": "https://jobsireland.ie",
        "official": true
      },
      {
        "label": "EURES - portal europeu de mobilidade de trabalho",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "gov.ie - EURES: como encontrar trabalho na Irlanda",
        "url": "https://www.gov.ie/en/department-of-social-protection/publications/eures-how-to-find-work-in-ireland/",
        "official": true
      },
      {
        "label": "HSE - carreiras no servico de saude irlandes",
        "url": "https://www.hse.ie/eng/staff/jobs/",
        "official": true
      },
      {
        "label": "publicjobs.ie - vagas no servico publico irlandes",
        "url": "https://www.publicjobs.ie",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "CSO - Labour Force Survey Q1 2026 (Key Findings)",
        "url": "https://www.cso.ie/en/releasesandpublications/ep/p-lfs/labourforcesurveyquarter12026/keyfindings/",
        "official": true
      },
      {
        "label": "CSO - Earnings and Labour Costs Q4 2025 / Q1 2026",
        "url": "https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq42025finalq12026preliminaryestimates/",
        "official": true
      },
      {
        "label": "DETE - Critical Skills Employment Permit",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
        "official": true
      },
      {
        "label": "DETE - Critical Skills (Highly Skilled Eligible) Occupations List",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/highly-skilled-eligible-occupations-list/",
        "official": true
      },
      {
        "label": "DETE - Labour Market Needs Test",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/labour-market-needs-test/",
        "official": true
      },
      {
        "label": "DETE - Latest employment permits updates",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/latest-updates/",
        "official": true
      },
      {
        "label": "ISD (Immigration Service Delivery) - Start-up Entrepreneur Programme (STEP)",
        "url": "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/start-up-entrepreneur-programme-step/",
        "official": true
      },
      {
        "label": "Citizens Information - Minimum wage",
        "url": "https://www.citizensinformation.ie/en/employment/employment-rights-and-conditions/pay-and-employment/minimum-wage/",
        "official": true
      },
      {
        "label": "Citizens Information - Coming to set up a business in Ireland",
        "url": "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/migrant-workers/coming-to-set-up-a-business-in-ireland/",
        "official": true
      },
      {
        "label": "RTE - Increase in unemployment amid drop in tech jobs (CSO)",
        "url": "https://www.rte.ie/news/business/2026/0521/1574502-cso-labour-survey-q1/",
        "official": false
      },
      {
        "label": "RTE - Average earnings up to 1.074 a week in 2026 (CSO)",
        "url": "https://www.rte.ie/news/business/2026/0526/1575315-cso-earnings-q1-2026/",
        "official": false
      },
      {
        "label": "Silicon Republic - Ireland facing skills wall as hiring demand remains strong",
        "url": "https://www.siliconrepublic.com/careers/ireland-facing-skills-wall-hiring-demand-strong-unemployment-concerns",
        "official": false
      },
      {
        "label": "Morgan McKinley - Software Engineer Salary Guide Ireland",
        "url": "https://www.morganmckinley.com/ie/salary-guide/data/software-engineer/ireland",
        "official": false
      }
    ]
  },
  "ch": {
    "updatedAt": "2026-06-22",
    "overview": "A Suica entra em 2026 com um dos mercados de trabalho mais ricos e estaveis do mundo, mas tambem um dos mais protegidos para quem vem de fora. O salario mediano bruto nacional foi de CHF 7.024 por mes em 2024 (tempo integral, setores publico e privado juntos), segundo a Pesquisa de Estrutura Salarial do Bundesamt fur Statistik (BFS), com o decimo inferior abaixo de CHF 4.635 e o decimo superior acima de CHF 12.526. O desemprego segue baixo para padroes europeus: a taxa registrada pelo SECO ficou em torno de 3,0% em maio de 2026, ainda que a leitura da OIT (mais ampla) tenha marcado 5,2% no primeiro trimestre. O quadro e de mercado apertado em ocupacoes tecnicas e de saude, mas com sinais de esfriamento em banca, seguros e parte da industria, pressionados pela integracao UBS-Credit Suisse, fusoes e tarifas dos EUA.\n\nPara o estrangeiro, a regra de ouro e a divisao em dois mundos. Cidadaos da UE/EFTA circulam quase livremente sob o Acordo de Livre Circulacao de Pessoas e nao estao sujeitos a cotas quando contratados localmente. Ja os nacionais de terceiros paises (incluindo brasileiros) enfrentam um dos regimes mais restritivos do mundo: so podem ser admitidos como gestores, especialistas ou trabalhadores altamente qualificados, dentro de cotas anuais fixas, e somente se o empregador comprovar que nao encontrou candidato prioritario na Suica ou na UE/EFTA. Para 2026, o Conselho Federal congelou as cotas no mesmo nivel de 2025: 4.500 autorizacoes B e 4.000 autorizacoes L para terceiros paises. Quem quer empreender encontra portas abertas se for da UE/EFTA, mas exigencias pesadas de impacto economico se vier de fora do bloco.",
    "hotSectors": [
      "Saude e enfermagem (deficit estrutural estimado em mais de 12 mil profissionais de enfermagem ate 2025 pela associacao do setor)",
      "Desenvolvimento de software e engenharia de software (72% dos empregadores relatam dificuldade em preencher vagas, recorde historico)",
      "Engenharia (mecanica, eletrica, automacao, controle e sistemas, sobretudo em industria regulada, energia e automacao industrial)",
      "Eletrotecnica e tecnicos eletricistas (impulsionados por eletrificacao, energia renovavel e infraestrutura inteligente)",
      "Lideranca de canteiro de obras e oficios qualificados da construcao",
      "Farmaceutica e ciencias da vida (segue entre os setores que mais pagam, apesar de cortes pontuais)"
    ],
    "coolingSectors": [
      "Banca e servicos financeiros (desemprego no setor 19,4% acima de um ano antes; UBS projeta cerca de 3.000 cortes na Suica, concentrados no 2o semestre de 2026, pela integracao do Credit Suisse)",
      "Seguros (grupo segurador anunciou eliminacao de 1.400 a 1.800 vagas em tres anos apos fusao)",
      "Funcoes administrativas, comerciais e de escritorio (ja apontadas como excesso de oferta de mao de obra)",
      "TI generalista (estabilizando, com excesso de oferta em varios grupos de ICT, embora desenvolvimento de software siga escasso)",
      "Industria afetada por tarifas dos EUA e deslocalizacao (ex.: fabricante Bernina movendo producao para a Tailandia)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) e profissional de cuidados",
        "note": "Profissao regulamentada; exige reconhecimento de diploma (Cruz Vermelha Suica/SRC). Deficit estrutural por envelhecimento populacional e aposentadorias."
      },
      {
        "role": "Desenvolvedor(a) de software / engenheiro(a) de software",
        "note": "Maior taxa de dificuldade de contratacao ja registrada. Hubs em Zurique, Zug e Lausanne."
      },
      {
        "role": "Engenheiro(a) mecanico(a), eletrico(a), de automacao, de controle e de sistemas",
        "note": "Demanda intensa em industria regulada, manufatura, energia e automacao industrial."
      },
      {
        "role": "Eletricista certificado(a) e tecnico(a) eletronico(a)",
        "note": "Demanda acima da oferta domestica por eletrificacao e energia renovavel."
      },
      {
        "role": "Medico(a) e demais profissoes de saude regulamentadas",
        "note": "Profissao regulamentada; reconhecimento via SERI/SRC obrigatorio antes de exercer."
      },
      {
        "role": "Lider/chefe de canteiro de obras e tecnicos especializados da construcao",
        "note": "Familia de empregos estruturalmente escassa segundo o Skills Shortage Index."
      }
    ],
    "byQualification": [
      {
        "area": "Profissionais de saude (enfermeiros, medicos, fisioterapeutas, parteiras)",
        "advice": "Sao profissoes regulamentadas: o diploma estrangeiro deve ser reconhecido antes de exercer. Para enfermagem e profissoes de saude nao universitarias, o orgao e a Cruz Vermelha Suica (SRC); para medicos e demais, o ponto de contato e o SERI. Inicie o reconhecimento cedo, prepare proficiencia no idioma da regiao (alemao, frances ou italiano) e mire cantons com hospitais grandes. Demanda alta e estrutural."
      },
      {
        "area": "Profissionais de TI e engenharia de software",
        "advice": "Maior gargalo de contratacao do pais. Para terceiros paises (ex.: brasileiros), o caminho realista e ser contratado como especialista qualificado por empresa que patrocine a autorizacao dentro da cota, normalmente exigindo diploma superior e experiencia. Foque em Zurique, Zug e arco lemanico. Para UE/EFTA, basta a oferta de emprego local."
      },
      {
        "area": "Engenheiros e tecnicos (mecanica, eletrica, automacao, eletrotecnica)",
        "advice": "Setor estruturalmente curto. Certificacoes tecnicas e experiencia em industria regulada, energia e automacao pesam muito. Para nao UE/EFTA, e preciso enquadrar-se como especialista qualificado dentro da cota; reconhecimento de titulo de engenharia pode ser necessario conforme a funcao."
      },
      {
        "area": "Profissionais de banca, seguros, financas e administracao",
        "advice": "Cautela: setor em retracao em 2026 (cortes na UBS pela integracao do Credit Suisse, fusoes em seguros) e excesso de oferta em funcoes administrativas e comerciais. Para estrangeiros de terceiros paises, a regra de precedencia torna a contratacao ainda mais dificil quando ha candidatos locais e da UE/EFTA disponiveis. Avalie nichos especializados (compliance, fintech, gestao de risco) em vez de funcoes generalistas."
      },
      {
        "area": "Empreendedores e autonomos",
        "advice": "Se for da UE/EFTA, e relativamente direto: obtem-se a autorizacao B UE/EFTA comprovando a atividade autonoma planejada e capacidade de autossustento (plano de negocio, registro comercial, escritorio, contabilidade). Se for de terceiro pais, a barra e alta: e preciso provar impacto economico duradouro e positivo (diversificacao da economia regional, criacao/manutencao de empregos para locais, investimento relevante, novos pedidos para a economia suica), com plano de negocio convincente e dentro de cota. O status de autonomo e concedido pela caixa de compensacao (AVS) e o registro no Registro Comercial costuma ser exigido."
      }
    ],
    "salaries": [
      {
        "role": "Mediana nacional (todos os setores, tempo integral, bruto/mes)",
        "range": "CHF 7.024/mes (~CHF 84.288/ano); P10 CHF 4.635, P90 CHF 12.526",
        "source": {
          "label": "Bundesamt fur Statistik (BFS/FSO) - Pesquisa de Estrutura Salarial 2024",
          "url": "https://www.bfs.admin.ch/asset/en/36195850",
          "official": true
        }
      },
      {
        "role": "Setores que mais pagam (TI, farmaceutica, banca, tabaco) - bruto/mes",
        "range": "CHF 9.900 a CHF 14.300/mes (mediana setorial)",
        "source": {
          "label": "Bundesamt fur Statistik (BFS/FSO) - Pesquisa de Estrutura Salarial 2024",
          "url": "https://www.bfs.admin.ch/asset/en/36195850",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor(a) / engenheiro(a) de software (mediana de mercado)",
        "range": "CHF 105.000 a ~CHF 114.500/ano; pleno entre ~CHF 106k e CHF 130k",
        "source": {
          "label": "Levantamentos de mercado (PayScale/levels.fyi/Upreer) - corroboracao de comunidade, nao oficial",
          "url": "https://www.payscale.com/research/CH/Job=Software_Engineer/Salary",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) (tempo integral, bruto, inclui 13o salario)",
        "range": "~CHF 79.300/ano (media); registrados ate ~CHF 90.000/ano em levantamentos privados",
        "source": {
          "label": "Levantamentos de mercado (terratern/SalaryExpert) - corroboracao de comunidade, nao oficial",
          "url": "https://www.salaryexpert.com/salary/job/registered-nurse/switzerland",
          "official": true
        }
      }
    ],
    "foreignerRules": "A admissao ao mercado de trabalho suico depende fortemente da nacionalidade. Cidadaos da UE/EFTA circulam sob o Acordo de Livre Circulacao de Pessoas e, quando contratados localmente, NAO estao sujeitos a cotas anuais. Nacionais de terceiros paises (incluindo brasileiros) enfrentam regras restritivas da Lei de Estrangeiros e Integracao (LEI/FNIA): (1) Regra de precedencia (Art. 21): o empregador so pode contratar um nacional de terceiro pais se comprovar esforco genuino e malsucedido de recrutar entre os grupos prioritarios (suicos, titulares de permit C, titulares de permit B, admitidos temporarios, e nacionais UE/EFTA). (2) Qualificacao (Art. 23): admissao limitada a gestores, especialistas e outros trabalhadores qualificados, em geral com diploma universitario/superior e varios anos de experiencia, alem de fatores de integracao (idioma, idade, adaptabilidade). (3) Salario e condicoes (Art. 22): remuneracao, contribuicoes sociais e condicoes devem seguir os padroes locais, profissionais e setoriais; varios setores tem convencoes coletivas vinculantes. (4) Cotas (Art. 20): para 2026 o Conselho Federal congelou as cotas de terceiros paises em 4.500 permits B (longa duracao) e 4.000 permits L (ate 12 meses). Ha cotas separadas para prestadores de servico UE/EFTA (3.000 L e 500 B) e para nacionais do Reino Unido (1.400 L e 2.100 B). Nos ultimos anos as cotas nao foram totalmente usadas (74% das de terceiros paises ate o fim de 2024). PROFISSOES REGULAMENTADAS: medicos, dentistas, farmaceuticos, psicologos, psicoterapeutas, veterinarios, quiropraticos, enfermeiros, fisioterapeutas, parteiras, professores, advogados e notarios exigem reconhecimento do diploma estrangeiro antes do exercicio; o ponto de contato nacional e o SERI (SBFI), e para profissoes de saude o reconhecimento costuma passar pela Cruz Vermelha Suica (SRC). A plataforma recognition.swiss indica o orgao competente por profissao. AUTONOMOS/EMPREENDEDORES: UE/EFTA comprovam a atividade planejada e autossustento; terceiros paises precisam demonstrar impacto economico duradouro e positivo (empregos para locais, investimento, diversificacao), com aprovacao das autoridades cantonais e dentro de cota.",
    "opportunityWindows": [
      "Cotas de terceiros paises subutilizadas (apenas ~74% usadas ate o fim de 2024), o que indica espaco real para candidatos altamente qualificados patrocinados por empregadores.",
      "Deficit estrutural e persistente em saude/enfermagem, engenharia, eletrotecnica e lideranca de construcao, pouco sensivel ao ciclo economico.",
      "Onda de eletrificacao, energia renovavel e infraestrutura inteligente puxando demanda por eletricistas e tecnicos acima da oferta domestica.",
      "Estabilidade de planejamento: cotas congeladas para 2026 dao previsibilidade a empregadores e candidatos.",
      "Para UE/EFTA, ausencia de cota na contratacao local mantem a porta aberta o ano todo, inclusive para autonomos."
    ],
    "jobBoards": [
      {
        "label": "Job-Room (plataforma oficial do servico publico de emprego, via work.swiss / arbeit.swiss)",
        "url": "https://www.job-room.ch/",
        "official": true
      },
      {
        "label": "arbeit.swiss (SECO - servico publico de emprego e seguro-desemprego)",
        "url": "https://www.arbeit.swiss/secoalv/en/home.html",
        "official": true
      },
      {
        "label": "EURES - vagas e mobilidade profissional na UE/EFTA (portal oficial da Comissao Europeia)",
        "url": "https://europa.eu/eures/portal/jv-se/search?locationCodes=ch",
        "official": true
      },
      {
        "label": "ch.ch - portal oficial de informacoes para estrangeiros que querem trabalhar na Suica",
        "url": "https://www.ch.ch/en/foreign-nationals-in-switzerland/working-in-switzerland/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "State Secretariat for Migration (SEM) - Bases para admissao ao mercado de trabalho (LEI/FNIA, precedencia, qualificacao, salario, cotas)",
        "url": "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/grundlagen_zur_arbeitsmarktzulassung.html",
        "official": true
      },
      {
        "label": "Bundesamt fur Statistik (BFS/FSO) - Pesquisa de Estrutura Salarial 2024 (mediana CHF 7.024)",
        "url": "https://www.bfs.admin.ch/asset/en/36195850",
        "official": true
      },
      {
        "label": "Bundesamt fur Statistik (BFS/FSO) - Desemprego, subemprego e vagas (dados OIT)",
        "url": "https://www.bfs.admin.ch/bfs/en/home/statistics/work-income/unemployment-underemployment.html",
        "official": true
      },
      {
        "label": "arbeit.swiss (SECO) - servico publico de emprego, EURES e seguro-desemprego",
        "url": "https://www.arbeit.swiss/secoalv/en/home.html",
        "official": true
      },
      {
        "label": "SERI/SBFI - Reconhecimento de qualificacoes profissionais e profissoes regulamentadas",
        "url": "https://www.sbfi.admin.ch/en/recognition-of-professional-qualifications",
        "official": true
      },
      {
        "label": "KMU/admin.ch (Confederacao Suica) - Autonomia e abertura de empresa por estrangeiros (UE/EFTA e terceiros paises)",
        "url": "https://www.kmu.admin.ch/kmu/en/home/concrete-know-how/setting-up-sme/starting-business/foreign-national/citizen-of-third-state.html",
        "official": true
      },
      {
        "label": "ch.ch (portal oficial da Confederacao) - Trabalhar na Suica como estrangeiro",
        "url": "https://www.ch.ch/en/foreign-nationals-in-switzerland/working-in-switzerland/",
        "official": true
      },
      {
        "label": "Fragomen - Cotas de imigracao da Suica para 2026 (corroboracao das cotas congeladas)",
        "url": "https://www.fragomen.com/insights/swiss-immigration-quotas-for-2026-what-employers-and-workers-need-to-know.html",
        "official": false
      },
      {
        "label": "Adecco Group - Swiss Skills Shortage Index (familias de empregos escassas)",
        "url": "https://www.adeccogroup.com/en-ch/future-of-work/swiss-skills-shortage",
        "official": false
      },
      {
        "label": "The Local Switzerland - Lista de cortes de empregos anunciados para 2026 (banca, seguros, farma, industria)",
        "url": "https://www.thelocal.ch/20251126/how-many-jobs-are-set-to-be-lost-in-switzerland-in-2026",
        "official": false
      }
    ]
  },
  "at": {
    "updatedAt": "2026-06-22",
    "overview": "A Austria entra em 2026 com um mercado de trabalho de duas velocidades. De um lado, o desemprego subiu para a casa dos 7 por cento (a Statistik Austria/AMS registrou cerca de 320 mil desempregados no fim de abril de 2026, alta de 2,7 por cento sobre o ano anterior) e a indústria e a construção seguem pressionadas por anos de investimento fraco em habitação. De outro lado, persiste uma escassez estrutural de mão de obra qualificada tão aguda que o governo federal ampliou a lista oficial de profissões em falta (Mangelberufsliste) para 64 ocupações em todo o país mais 66 regionais em 2026, a maior lista da história recente. O criterio e tecnico: uma profissao entra na lista quando ha menos de 1,5 candidato registrado por vaga aberta junto ao AMS ao longo de um ano.\n\nPara o estrangeiro de fora da UE, isso cria um caminho privilegiado: quem tem formacao numa dessas profissoes acessa a Red-White-Red Card pela rota de Fachkraft com pontuacao mais baixa e sem teste de mercado de trabalho. Os setores que puxam a demanda sao saude e cuidado (enfermagem, cuidadores, medicos), TI e digitalizacao (desenvolvimento de software, ciberseguranca, dados, nuvem), engenharia (mecanica, eletrica, alta tensao, dados), trades tecnicos (eletricistas, soldadores, encanadores, mecanicos) e, sazonalmente, o turismo alpino. A remuneracao e paga em geral 14 vezes ao ano (12 meses mais 13o e 14o salarios protegidos por convencao coletiva), o que eleva o ganho anual efetivo. Salario minimo legal nacional nao existe: o piso vem das convencoes coletivas setoriais (Kollektivvertrag), com mais de 800 acordos em vigor.",
    "hotSectors": [
      "Saude e cuidado (enfermagem diplomada, assistentes de enfermagem, cuidadores, medicos, tecnicos de tecnologia medica)",
      "TI e digitalizacao (desenvolvimento de software, ciberseguranca, ciencia de dados, nuvem, engenheiros de processamento de dados)",
      "Engenharia (mecanica, eletrica, alta tensao/Starkstrom, engenharia civil, telecomunicacoes)",
      "Trades tecnicos qualificados (eletricistas, soldadores, encanadores, mecanicos automotivos, serralheiros, telhadores, marceneiros)",
      "Educacao infantil (educadores de primeira infancia, educadores inclusivos)",
      "Logistica e transporte ferroviario (maquinistas, controladores de trafego ferroviario)",
      "Turismo e hotelaria, sobretudo sazonal nas regioes alpinas",
      "RH e folha de pagamento (especialistas em payroll, contadores de custos)"
    ],
    "coolingSectors": [
      "Construcao civil e investimento habitacional (cinco anos de contracao; estabilizacao so prevista a partir de 2027)",
      "Industria de transformacao em geral, ainda sob pressao de demanda fraca",
      "Varejo, com vagas concentradas mas crescimento de emprego limitado"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) diplomado(a) e enfermeiro(a) especialista",
        "note": "Profissao regulamentada; consta da Mangelberufsliste nacional 2026; exige reconhecimento de diploma e alemao"
      },
      {
        "role": "Assistente de enfermagem e cuidador(a)",
        "note": "Forte demanda por envelhecimento populacional; na lista de profissoes em falta"
      },
      {
        "role": "Medico(a)",
        "note": "Profissao regulamentada; reconhecimento obrigatorio e alemao em nivel clinico"
      },
      {
        "role": "Desenvolvedor(a) de software / engenheiro(a) de software",
        "note": "Setor de TI dos mais bem pagos; bonus de 5 pontos se o ingles for a lingua predominante na empresa"
      },
      {
        "role": "Especialista em ciberseguranca, ciencia de dados e nuvem",
        "note": "Demanda em alta acelerada citada pelo EURES"
      },
      {
        "role": "Engenheiro(a) de processamento de dados (Diplomingenieur)",
        "note": "Perfil de alta tecnologia com prioridade na lista 2026"
      },
      {
        "role": "Tecnico(a) em alta tensao / engenharia eletrica (Starkstrom)",
        "note": "Prioridade continua na lista de escassez"
      },
      {
        "role": "Eletricista, instalador e montador eletrico",
        "note": "Trade tecnico classico na lista nacional"
      },
      {
        "role": "Soldador(a)",
        "note": "Trade na lista de profissoes em falta"
      },
      {
        "role": "Encanador(a) / instalador(a) de tubulacoes",
        "note": "Trade na lista de profissoes em falta"
      },
      {
        "role": "Mecanico(a) automotivo(a)",
        "note": "Na lista nacional 2026"
      },
      {
        "role": "Maquinista de trem e controlador(a) de trafego ferroviario",
        "note": "Novidades de 2026 ligadas ao transporte ferroviario"
      },
      {
        "role": "Especialista em folha de pagamento (payroll)",
        "note": "Nova adicao em 2026, ligada a digitalizacao de RH"
      },
      {
        "role": "Educador(a) de primeira infancia e educador(a) inclusivo(a)",
        "note": "Adicao recente refletindo lacuna em servicos sociais"
      },
      {
        "role": "Cozinheiro(a) de restaurante (chef)",
        "note": "Na lista; demanda reforcada pelo turismo alpino"
      }
    ],
    "byQualification": [
      {
        "area": "Profissionais de saude (enfermagem, medicina, terapias)",
        "advice": "Maior porta de entrada para fora da UE em 2026. Sao profissoes regulamentadas: e obrigatorio o reconhecimento (Nostrifizierung) do diploma e, na pratica, alemao em nivel clinico (B2 ou superior). Por estarem na Mangelberufsliste, acessam a Red-White-Red Card como Fachkraft com pontuacao reduzida e sem teste de mercado. Comecar pelo reconhecimento do diploma antes de buscar oferta de emprego."
      },
      {
        "area": "TI, software e dados",
        "advice": "Mercado aquecido e dos melhores pagantes. O ingles costuma bastar no dia a dia tecnico e da 5 pontos extras quando e a lingua predominante da empresa, mas o alemao amplia muito as oportunidades fora de Viena. Avaliar tambem a EU Blue Card para quem tem diploma superior e oferta acima do limiar salarial. Profissoes de TI/dados constam da lista de escassez."
      },
      {
        "area": "Engenharia (mecanica, eletrica, civil, dados, telecom)",
        "advice": "Diversos perfis estao na lista nacional 2026, com prioridade para alta tensao e processamento de dados. Diploma reconhecido e experiencia comprovada pontuam alto no sistema da Red-White-Red Card. Alemao tecnico e diferencial forte para canteiros e plantas industriais."
      },
      {
        "area": "Trades tecnicos qualificados (eletricista, soldador, encanador, mecanico)",
        "advice": "Caminho realista mesmo sem diploma universitario: o que conta e a formacao tecnica/profissional concluida na area mais oferta de emprego. Por estarem na lista de escassez, dispensam o teste de mercado e o piso salarial segue a convencao coletiva do setor (Kollektivvertrag), o que amplia o leque de candidatos. Alemao pratico e quase indispensavel."
      },
      {
        "area": "Educacao infantil e servicos sociais",
        "advice": "Novas portas em 2026 (educador de primeira infancia e inclusivo). Exigem reconhecimento de formacao e alemao em bom nivel pelo contato direto com criancas e familias."
      },
      {
        "area": "Sem qualificacao formal reconhecida ou fora da lista",
        "advice": "Caminho mais dificil. Vale considerar o turismo/hotelaria sazonal nas regioes alpinas, geralmente via cotas sazonais e nao pela Red-White-Red Card de Fachkraft. Investir no reconhecimento de qualquer formacao existente e no alemao antes de migrar."
      },
      {
        "area": "Empreendedores e investidores",
        "advice": "Duas rotas oficiais. Start-up Founder: 50 de 85 pontos, capital minimo de EUR 30.000 com participacao de pelo menos 50 por cento e plano de negocio inovador e consistente. Self-employed Key Worker: exige beneficio macroeconomico, normalmente via transferencia de capital de pelo menos EUR 100.000, criacao/manutencao de empregos ou transferencia de tecnologia. Ambas comecam com cartao de 24 meses."
      }
    ],
    "salaries": [
      {
        "role": "Media geral (tempo integral, bruto)",
        "range": "Mediana ~EUR 3.540/mes e media ~EUR 4.030/mes (base 14 salarios/ano; ~EUR 49.560 a 56.420/ano)",
        "source": {
          "label": "Statistik Austria (renda mensal/anual, via agregadores 2026)",
          "url": "https://www.statistik.at/en/statistics/population-and-society/income-and-living-conditions/monthly-income",
          "official": true
        }
      },
      {
        "role": "Engenheiro(a)/profissional de software",
        "range": "~EUR 56.000 a 99.000/ano (media ~EUR 81.000/ano); IT Engineer em Viena ~EUR 53.000 a 65.000/ano",
        "source": {
          "label": "Glassdoor / PayScale (camada comunidade, nao oficial)",
          "url": "https://www.glassdoor.com/Salaries/austria-software-engineer-salary-SRCH_IL.0,7_IN18_KO8,25.htm",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) diplomado(a)",
        "range": "Media nacional ~EUR 68.000/ano; em Viena ~EUR 75.500/ano (bruto, estimativa de mercado)",
        "source": {
          "label": "ERI SalaryExpert (camada comunidade, nao oficial)",
          "url": "https://www.salaryexpert.com/salary/job/registered-nurse/austria",
          "official": true
        }
      },
      {
        "role": "Piso minimo via convencao coletiva (maioria dos setores)",
        "range": "A partir de ~EUR 1.700/mes bruto x14, media ~EUR 1.983/mes",
        "source": {
          "label": "Sozialministerium (Ministerio Federal de Assuntos Sociais)",
          "url": "https://www.sozialministerium.gv.at/en/Topics/Labour/Labour-Law/Remuneration/Minimum-Wage-in-Austria.html",
          "official": true
        }
      },
      {
        "role": "Other Key Worker (piso legal Red-White-Red Card 2026)",
        "range": "EUR 3.465/mes bruto (minimo regulatorio, salvo convencao coletiva maior)",
        "source": {
          "label": "migration.gv.at / Fragomen",
          "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/other-key-workers/",
          "official": true
        }
      },
      {
        "role": "Super Key Employee (piso Red-White-Red Card 2026)",
        "range": "EUR 8.316/mes bruto",
        "source": {
          "label": "Fragomen (atualizacao de salarios minimos 2026)",
          "url": "https://www.fragomen.com/insights/minimum-salary-changes-announced.html",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e suicos trabalham livremente, sem necessidade de autorizacao. Para nacionais de paises terceiros, a principal via e a Red-White-Red Card, baseada em sistema de pontos. Categorias e exigencias para 2026: (1) Skilled Worker em profissao de escassez (Mangelberuf) precisa de no minimo 55 de 90 pontos, formacao concluida na profissao em falta e oferta de emprego vinculante; nao ha teste de mercado de trabalho e o salario segue o piso da convencao coletiva (Kollektivvertrag) aplicavel. (2) Other Key Workers exige salario bruto minimo de EUR 3.465/mes em 2026 (era EUR 3.225 em 2025), salvo se a convencao coletiva exigir valor maior. (3) Very Highly Qualified Workers mira faixas salariais altas e permite Job Seeker Visa com 70 pontos sem oferta previa. (4) Super Key Employee tem piso de EUR 8.316/mes em 2026. Os pontos sao distribuidos entre qualificacao (ate 30), experiencia (ate 20), idioma alemao/ingles (ate 25) e idade (ate 15), com 5 pontos extras se o ingles for a lingua predominante da empresa. Profissoes regulamentadas (saude, medicina, alguns trades, educacao) exigem reconhecimento formal do diploma/qualificacao (Nostrifizierung) antes do exercicio. O cartao costuma ser emitido por 24 meses e abre caminho para a Red-White-Red Card plus e, depois, residencia permanente. A solicitacao e feita pessoalmente na representacao austriaca (embaixada/consulado) no pais de origem; havendo exigencia de visto, entra-se com visto D para retirar a autorizacao na Austria. Para empreender: Start-up Founder (50 de 85 pontos, capital minimo EUR 30.000 com 50 por cento de participacao, plano de negocio inovador) e Self-employed Key Worker (beneficio macroeconomico, em regra investimento de pelo menos EUR 100.000 ou criacao de empregos/transferencia de tecnologia). Taxa de solicitacao em torno de EUR 218.",
    "opportunityWindows": [
      "Lista de profissoes em falta de 2026 ampliada para 64 ocupacoes nacionais mais 66 regionais, com novas entradas em ferrovia (maquinistas), payroll e educacao infantil, abrindo rotas ineditas para nao europeus",
      "Profissoes da lista dispensam o teste de mercado de trabalho e usam pontuacao reduzida na Red-White-Red Card, acelerando o processo",
      "Saude e cuidado com escassez estrutural por envelhecimento populacional, demanda firme por anos a frente",
      "TI, ciberseguranca, dados e nuvem em crescimento acelerado, com ingles frequentemente aceito no dia a dia tecnico",
      "Piso salarial da Other Key Worker subiu para EUR 3.465/mes em 2026, sinal de valorizacao mas tambem barra de entrada mais alta a observar",
      "Turismo alpino com janelas sazonais recorrentes em hotelaria e atendimento",
      "Construcao deve sair da contracao a partir de 2027, possivel janela antecipada para trades tecnicos ja em alta"
    ],
    "jobBoards": [
      {
        "label": "AMS eJob-Room (servico publico de emprego da Austria)",
        "url": "https://www.ams.at/",
        "official": true
      },
      {
        "label": "EURES (portal europeu de empregos)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Work in Austria (ABA, agencia federal)",
        "url": "https://www.workinaustria.com/en/",
        "official": true
      },
      {
        "label": "migration.gv.at (portal oficial de imigracao)",
        "url": "https://www.migration.gv.at/en/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "migration.gv.at - Skilled Workers in Shortage Occupations (oficial)",
        "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/skilled-workers-in-shortage-occupations/",
        "official": true
      },
      {
        "label": "migration.gv.at - Start-up Founders (oficial)",
        "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/start-up-founders/",
        "official": true
      },
      {
        "label": "migration.gv.at - Self-employed Key Workers (oficial)",
        "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/self-employedkeyworkers/",
        "official": true
      },
      {
        "label": "migration.gv.at - Other Key Workers (oficial)",
        "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/other-key-workers/",
        "official": true
      },
      {
        "label": "Sozialministerium - Fachkraftebarometer AMS (oficial)",
        "url": "https://www.sozialministerium.gv.at/Themen/Arbeit/Arbeitsmarkt/Arbeitsmarktdaten/Fachkraeftebarometer.html",
        "official": true
      },
      {
        "label": "Sozialministerium - Minimum Wage in Austria (oficial)",
        "url": "https://www.sozialministerium.gv.at/en/Topics/Labour/Labour-Law/Remuneration/Minimum-Wage-in-Austria.html",
        "official": true
      },
      {
        "label": "Statistik Austria - Monthly income (oficial)",
        "url": "https://www.statistik.at/en/statistics/population-and-society/income-and-living-conditions/monthly-income",
        "official": true
      },
      {
        "label": "Statistik Austria - Annual personal income (oficial)",
        "url": "https://www.statistik.at/en/statistics/population-and-society/income-and-living-conditions/annual-personal-income",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Austria (oficial)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-austria_en",
        "official": true
      },
      {
        "label": "Work in Austria - Nationwide Shortage Occupations 2026 (ABA, oficial)",
        "url": "https://www.workinaustria.com/en/residence-employment/shortage-occupations/nationwide/",
        "official": true
      },
      {
        "label": "Comissao Europeia - Economic forecast for Austria (oficial)",
        "url": "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/austria/economic-forecast-austria_en",
        "official": true
      },
      {
        "label": "Fragomen - Austria Minimum Salary Changes 2026 (escritorio de imigracao)",
        "url": "https://www.fragomen.com/insights/minimum-salary-changes-announced.html",
        "official": false
      },
      {
        "label": "Glassdoor - Software Engineer salary Austria (comunidade)",
        "url": "https://www.glassdoor.com/Salaries/austria-software-engineer-salary-SRCH_IL.0,7_IN18_KO8,25.htm",
        "official": false
      },
      {
        "label": "ERI SalaryExpert - Registered Nurse salary Austria (comunidade)",
        "url": "https://www.salaryexpert.com/salary/job/registered-nurse/austria",
        "official": false
      },
      {
        "label": "The Local Austria - End-of-year unemployment figures 2026 (imprensa)",
        "url": "https://www.thelocal.at/20260102/what-austrias-end-of-year-unemployment-figures-reveal-about-2026",
        "official": false
      }
    ]
  },
  "be": {
    "updatedAt": "2026-06-22",
    "overview": "A Belgica entra em 2026 com um mercado de trabalho aquecido e marcado por escassez estrutural de mao de obra. Segundo o EURES, a taxa de desemprego nacional gira em torno de 5,5 por cento e a taxa de emprego da populacao de 20 a 64 anos chegou a 72,8 por cento em 2025, mas a media esconde um pais de tres velocidades: Flandres opera quase em pleno emprego (emprego de 77,3 por cento e desemprego de cerca de 4,3 por cento), enquanto a Valonia (emprego 67,9 por cento) e sobretudo Bruxelas (emprego 63,9 por cento e desemprego acima de 10 por cento) tem folga maior no mercado.\n\nPara o estrangeiro, o ponto central e que o trabalho e competencia regional, nao federal. Cada regiao mantem sua propria lista de profissoes em falta e seus proprios limites salariais, e os tres servicos publicos de emprego (VDAB em Flandres, Le Forem na Valonia e Actiris em Bruxelas) concentram as vagas oficiais. A escassez e tao acentuada que a Belgica figura entre os paises da UE com maior taxa de vagas em aberto, com enfermagem e diversas funcoes tecnicas de industria e construcao no topo dos gargalos do VDAB. Ao mesmo tempo, Flandres apertou as regras em 2026, reduzindo a lista de ocupacoes de media qualificacao de 29 para 21 e exigindo teste de mercado mais rigoroso para funcoes retiradas da lista.",
    "hotSectors": [
      "Saude e cuidados (enfermagem, medicos, auxiliares e cuidadores)",
      "Tecnologia da informacao e desenvolvimento de software (Java, .NET, Python, dados)",
      "Engenharia (industrial, civil, construcao, eletrica)",
      "Construcao e oficios tecnicos (eletricistas, telhadistas, gestores de obra)",
      "Industria e manutencao (operadores de maquina, tecnicos de manutencao industrial)",
      "Logistica e transporte",
      "Educacao (professores, sobretudo STEM e bilingue)",
      "Servicos de consultoria",
      "Manutencao predial, jardinagem e paisagismo"
    ],
    "coolingSectors": [
      "Fabricacao de equipamentos de transporte (queda de cerca de 6,4 por cento no emprego em 2024)",
      "Trabalho temporario e agencias de emprego",
      "Varejo",
      "Fabricacao de eletrodomesticos e aparelhos eletricos"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a)",
        "note": "Uma das maiores ocupacoes em falta da lista do VDAB; demanda forte nas tres regioes"
      },
      {
        "role": "Desenvolvedor(a) de software",
        "note": "Escassez em Java, .NET e Python; mercado de TI em forte expansao"
      },
      {
        "role": "Engenheiro(a)",
        "note": "Pais forma cerca de 1.500 engenheiros/ano para uma demanda de mais de 2.000; deficit estrutural"
      },
      {
        "role": "Eletricista industrial",
        "note": "Entre os maiores gargalos tecnicos da industria/construcao em 2026"
      },
      {
        "role": "Gestor de obra e calculista de construcao",
        "note": "Topo da lista de gargalos da construcao no VDAB 2026"
      },
      {
        "role": "Tecnico de manutencao industrial",
        "note": "Funcao tecnica recorrente entre as de maior escassez"
      },
      {
        "role": "Operador/ajustador de maquina",
        "note": "Funcao industrial entre os dez maiores gargalos"
      },
      {
        "role": "Medico(a)",
        "note": "Demanda persistente na saude; entre as profissoes mais bem pagas"
      },
      {
        "role": "Professor(a)",
        "note": "Falta acentuada, sobretudo em STEM e ensino bilingue"
      },
      {
        "role": "Contador(a)/contabilista",
        "note": "Citado pelo VDAB como um dos maiores gargalos nao tecnicos"
      },
      {
        "role": "Profissionais de hotelaria e cuidados infantis",
        "note": "Gargalos permanentes na lista do VDAB"
      }
    ],
    "byQualification": [
      {
        "area": "Alta qualificacao (mestrado/superior em TI, engenharia, saude, financas)",
        "advice": "Rota mais facil: o Single Permit para altamente qualificados e o EU Blue Card sao isentos do teste de mercado de trabalho. Mire vagas que paguem acima do limite salarial da regiao (Flandres cerca de 48.912 euros/ano para altamente qualificados; Valonia 53.220 euros/ano; Bruxelas cerca de 44.441 euros/ano). Setores de maior absorcao: software, engenharia, saude e consultoria."
      },
      {
        "area": "Saude (enfermagem, medicina, cuidados)",
        "advice": "Demanda muito alta e estrutural nas tres regioes. Profissao regulamentada: e necessario reconhecimento do diploma e registro profissional, alem de nivel de idioma (neerlandes em Flandres, frances em Bruxelas/Valonia). Flandres aplica limite salarial reduzido (cerca de 39.130 euros/ano) para enfermeiros, facilitando o permit."
      },
      {
        "area": "Media qualificacao / oficios tecnicos (eletricista, soldador, telhadista, operador)",
        "advice": "Caminho via lista regional de ocupacoes em falta. Atencao: em 2026 Flandres encolheu a lista para 21 funcoes; algumas (motorista de caminhao, padeiro, acougueiro) sairam e agora exigem que o empregador comprove pelo menos 9 semanas de recrutamento frustrado. Confirme se sua funcao continua na lista vigente antes de aceitar a vaga."
      },
      {
        "area": "Empreendedor / autonomo (qualquer formacao)",
        "advice": "Precisa de Professional Card (carte professionnelle) emitida pela regiao onde vai operar. O projeto deve provar utilidade economica (empregos criados, investimento, inovacao, atendimento a necessidade nao suprida) com plano de negocios de ate 20 paginas. Primeira carta costuma sair em carater provisorio por 2 anos, valida ate 5 anos."
      },
      {
        "area": "Baixa qualificacao / sem diploma",
        "advice": "Acesso mais dificil para nao europeus: fora das listas de escassez, o empregador tem de passar pelo teste de mercado de trabalho. As funcoes de salario mais baixo (cuidado infantil, hotelaria, limpeza, beleza) pagam abaixo da media nacional. Priorize regioes com maior demanda (Flandres) e funcoes que ainda constem na lista de gargalos."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio nacional (todos os setores)",
        "range": "cerca de 4.076 euros brutos/mes (mediana 3.728 euros)",
        "source": {
          "label": "Statbel - Visao geral de salarios belgas (ref. 2022)",
          "url": "https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Diretores executivos (CEO)",
        "range": "cerca de 11.772 euros brutos/mes",
        "source": {
          "label": "Statbel - Visao geral de salarios belgas",
          "url": "https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software (pleno)",
        "range": "cerca de 63.900 a 78.800 euros brutos/ano (mediana 73.100)",
        "source": {
          "label": "Ravio - Salary Benchmarks Belgium 2026",
          "url": "https://ravio.com/salary-benchmarks/belgium",
          "official": true
        }
      },
      {
        "role": "Cuidador(a) infantil",
        "range": "cerca de 2.567 euros brutos/mes (37 por cento abaixo da media)",
        "source": {
          "label": "Statbel - Visao geral de salarios belgas",
          "url": "https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Garcom, cabeleireiro, faxineiro",
        "range": "abaixo de 2.700 euros brutos/mes",
        "source": {
          "label": "Statbel - Visao geral de salarios belgas",
          "url": "https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Premio por escolaridade (referencia)",
        "range": "bacharel cerca de +6 por cento e mestrado cerca de +46 por cento sobre a media; sem diploma cerca de -25 por cento",
        "source": {
          "label": "Statbel - Visao geral de salarios belgas",
          "url": "https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries",
          "official": true
        }
      }
    ],
    "foreignerRules": "Trabalhar na Belgica e competencia das regioes (Flandres, Valonia, Bruxelas), nao do governo federal. Cidadaos da UE/EEE e da Suica nao precisam de autorizacao. Nao europeus que vao trabalhar por mais de 90 dias precisam do Single Permit (permit unico), que combina autorizacao de trabalho e residencia num so documento e numa so aplicacao. O empregador inicia o pedido pelo balcao unico (one-stop counter); desde 4 de maio de 2026 todas as aplicacoes passam obrigatoriamente pelo portal federal, sem mais formularios em PDF ou envio por e-mail. A regiao avalia a parte trabalhista e o Immigration Office (IBZ) avalia a residencia. Prazo legal de 4 meses (na pratica cerca de 14 a 15 semanas). O Single Permit B e ligado a um empregador especifico e renovavel anualmente; apos 3 a 5 anos pode-se migrar para o tipo A, com acesso aberto ao mercado. Perfis altamente qualificados e o EU Blue Card sao isentos do teste de mercado de trabalho, desde que cumpram o limite salarial da regiao (a partir de 1 de janeiro de 2026, em valores anuais brutos: altamente qualificados cerca de 48.912 euros em Flandres, 53.220 euros na Valonia e cerca de 44.441 euros em Bruxelas; EU Blue Card 63.586 euros em Flandres, 68.815 euros na Valonia, 56.976 euros em Bruxelas). Subpagar, mesmo por poucos euros, pode tornar o pedido inadmissivel. Para funcoes de media qualificacao, usa-se a lista regional de profissoes em falta; em 2026 Flandres reduziu a lista de 29 para 21 funcoes (valida ate 31/12/2027) e passou a exigir comprovacao de pelo menos 9 semanas de recrutamento frustrado para funcoes que sairam da lista (ex.: motorista de caminhao, padeiro, acougueiro). Profissoes regulamentadas (saude, ensino, juridico e outras) exigem reconhecimento de diploma e, frequentemente, comprovacao de idioma (neerlandes em Flandres; frances em Bruxelas/Valonia; alemao na regiao germanofona). Para empreender ou atuar como autonomo, o nao europeu precisa de Professional Card (carte professionnelle) emitida pela regiao, mediante plano de negocios que comprove utilidade economica; taxa de 140 euros na aplicacao mais 90 euros por ano de validade, valida por ate 5 anos (primeira carta em geral provisoria por 2 anos).",
    "opportunityWindows": [
      "Escassez estrutural de enfermeiros e profissionais de saude nas tres regioes, com limite salarial reduzido em Flandres facilitando o permit",
      "Forte demanda por desenvolvedores (Java, .NET, Python) e engenheiros, com isencao do teste de mercado pela rota de altamente qualificado/Blue Card",
      "Deficit cronico de engenheiros (cerca de 1.500 formados/ano para mais de 2.000 vagas)",
      "Falta acentuada de professores, sobretudo em STEM e ensino bilingue",
      "Oficios tecnicos de construcao e industria (eletricistas, gestores de obra, manutencao) seguem na lista de gargalos de 2026",
      "Flandres, com quase pleno emprego, e a regiao com maior absorcao de mao de obra estrangeira qualificada",
      "Janela para empreendedores via Professional Card em projetos inovadores ou que atendam necessidade nao suprida (ex.: diamantes/lapidacao, remocao de amianto, nichos tecnicos recem-adicionados a lista flamenga)"
    ],
    "jobBoards": [
      {
        "label": "VDAB - servico publico de emprego de Flandres",
        "url": "https://www.vdab.be",
        "official": true
      },
      {
        "label": "Le Forem - servico publico de emprego da Valonia",
        "url": "https://www.leforem.be",
        "official": true
      },
      {
        "label": "Actiris - servico publico de emprego de Bruxelas",
        "url": "https://www.actiris.brussels",
        "official": true
      },
      {
        "label": "EURES - portal europeu de empregos",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "VDAB - lista de profissoes em falta (knelpuntberoepen)",
        "url": "https://www.vdab.be/trends-en-cijfers/knelpuntberoepenlijst",
        "official": true
      },
      {
        "label": "Working in Belgium - portal oficial do Single Permit",
        "url": "https://www.workinginbelgium.be/en/single-permit.html",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Informacao de mercado de trabalho: Belgica",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-belgium_en",
        "official": true
      },
      {
        "label": "Statbel - Visao geral de salarios belgas",
        "url": "https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries",
        "official": true
      },
      {
        "label": "Statbel - Emprego e desemprego",
        "url": "https://statbel.fgov.be/en/themes/work-training/labour-market/employment-and-unemployment",
        "official": true
      },
      {
        "label": "VDAB - lista de profissoes em falta 2026 (PDF)",
        "url": "https://www.vdab.be/sites/default/files/media/files/Knelpuntberoepen2026.pdf",
        "official": true
      },
      {
        "label": "IBZ (Immigration Office) - Single Permit",
        "url": "https://dofi.ibz.be/en/themas/onderdanen-van-derde-landen/werk/single-permit",
        "official": true
      },
      {
        "label": "Belgium.be - autorizacao de trabalho",
        "url": "https://www.belgium.be/en/work/coming_to_work_in_belgium/work_permit",
        "official": true
      },
      {
        "label": "Flanders.be - Professional Card para empreendedores estrangeiros",
        "url": "https://www.vlaanderen.be/en/working-enterprise-and-investment/working/professional-card-for-foreign-entrepreneurs",
        "official": true
      },
      {
        "label": "Brussels Economy and Employment - Professional Card",
        "url": "https://economy-employment.brussels/professional-card",
        "official": true
      },
      {
        "label": "Emploi Wallonie - cartoes profissionais",
        "url": "https://emploi.wallonie.be/en/home/travailleurs-etrangers/carte-professionnelle.html",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card na Belgica",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-belgium_en",
        "official": true
      },
      {
        "label": "Flanders.be - empregar estrangeiro em funcao de media qualificacao",
        "url": "https://www.vlaanderen.be/en/working-enterprise-and-investment/working/employing-a-foreigner-in-flanders/categories/medium-skilled-position",
        "official": true
      },
      {
        "label": "KPMG - Criterios salariais 2026 para permits belgas",
        "url": "https://kpmg.com/xx/en/our-insights/gms-flash-alert/2026/flash-alert-2026-018.html",
        "official": false
      },
      {
        "label": "Moore Belgium - Limites salariais de permit 2026",
        "url": "https://www.moore.be/en/news/work-permit-2026-discover-the-new-salary-thresholds-to-comply-with",
        "official": false
      },
      {
        "label": "Ravio - Benchmarks salariais Belgica 2026",
        "url": "https://ravio.com/salary-benchmarks/belgium",
        "official": false
      }
    ]
  },
  "bg": {
    "updatedAt": "2026-06-22",
    "overview": "A Bulgaria entrou em 2026 com um dos mercados de trabalho mais aquecidos da sua historia recente. Segundo os dados anuais de 2025 do Instituto Nacional de Estatistica (NSI), a taxa de desemprego caiu para 3,5%, recuo de 0,7 ponto frente a 2024, enquanto a taxa de emprego na faixa de 15 a 64 anos ficou em 70,9%. A populacao economicamente ativa somou cerca de 2,91 milhoes de pessoas e o emprego concentra-se fortemente nos servicos (68,4%), seguidos por industria (26,9%) e agricultura (4,8%). O quadro e de escassez de mao de obra mais do que de falta de vagas: em dezembro de 2025, 34,8% das empresas industriais apontaram a falta de trabalhadores como fator que limita a atividade. Para o estrangeiro qualificado, sobretudo em tecnologia e saude, isso significa portas abertas; para o trabalhador sem qualificacao, o cenario e mais restrito, com excedente estrutural de mao de obra de baixa escolaridade registrado pelo EURES.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (software e outsourcing)",
      "Servicos financeiros e de seguros",
      "Industria e manufatura (operadores de maquinas, eletricistas, soldadores)",
      "Construcao civil",
      "Saude (medicos, enfermeiros, farmaceuticos, tecnicos)",
      "Turismo, hotelaria e restauracao",
      "Educacao e ensino"
    ],
    "coolingSectors": [
      "Funcoes administrativas e de apoio a negocios de nivel medio (excedente de candidatos)",
      "Vendas e atendimento comercial nao especializado",
      "Trabalho bracal nao qualificado e de baixa escolaridade (excedente estrutural)"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedor / engenheiro de software",
        "note": "Setor de TI com maior crescimento de contratacoes do pais (+23%) e deficit estrutural de cerca de 40% de desenvolvedores especializados (McKinsey). Sofia concentra cerca de 70% dos profissionais de TI."
      },
      {
        "role": "Medico, enfermeiro e tecnico de saude",
        "note": "Profissoes regulamentadas com escassez critica, citadas pelo EURES entre os grupos de maior carencia."
      },
      {
        "role": "Engenheiro mecanico"
      },
      {
        "role": "Eletricista, soldador e operador de maquinas",
        "note": "Vagas ligadas a industria e construcao com dificil preenchimento."
      },
      {
        "role": "Trabalhador e tecnico da construcao civil"
      },
      {
        "role": "Processamento de alimentos, marcenaria e confeccao (costureiro)",
        "note": "Oficios artesanais apontados pelo EURES como de maior incidencia de escassez."
      },
      {
        "role": "Professor e formador"
      },
      {
        "role": "Farmaceutico"
      },
      {
        "role": "Contador operacional e especialista financeiro"
      },
      {
        "role": "Designer grafico"
      }
    ],
    "byQualification": [
      {
        "area": "Alta qualificacao em tecnologia (TI/software)",
        "advice": "E o caminho mais aberto para estrangeiros. O setor cresce acima da media, paga os melhores salarios do pais e ofertas em TI dispensam o teste de mercado de trabalho na via do Cartao Azul UE. Sofia e o polo dominante de outsourcing e nearshoring."
      },
      {
        "area": "Saude (medicos, enfermeiros, farmaceuticos)",
        "advice": "Ha escassez real e demanda firme, mas sao profissoes regulamentadas: o diploma estrangeiro precisa de reconhecimento formal e de habilitacao adicional para exercer. Diplomas da UE seguem a Diretiva 2005/36/CE com reconhecimento automatico; de fora da UE passam pelo NACID."
      },
      {
        "area": "Engenharia e tecnicos industriais",
        "advice": "Boa janela em engenharia mecanica, eletricistas, soldadores e operadores de maquina. Para fora da UE, a via usual e a Autorizacao Unica, com teste de mercado de 15 dias feito pelo empregador."
      },
      {
        "area": "Oficios e construcao",
        "advice": "Demanda em construcao, alimentos, marcenaria e confeccao, via Autorizacao Unica com patrocinio do empregador; exige comprovacao de qualificacao e experiencia."
      },
      {
        "area": "Baixa qualificacao",
        "advice": "Segmento mais dificil: ha excedente estrutural de mao de obra nao qualificada e o empregador precisa justificar a contratacao de estrangeiro. Melhores chances em turismo e hotelaria sazonais."
      },
      {
        "area": "Empreendedor",
        "advice": "Abrir empresa e simples: EOOD com capital simbolico de 2 BGN, registro remoto por procuracao em poucos dias. Ser dono de empresa nao concede residencia automatica; a permanencia exige visto e autorizacao especificos."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (sob contrato)",
        "range": "2.549 BGN/mes brutos (cerca de 1.303 EUR), Q3 2025",
        "source": {
          "label": "NSI Q3 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Tecnologia da informacao e comunicacao",
        "range": "5.512 BGN/mes brutos (cerca de 2.818 EUR), setor mais bem pago",
        "source": {
          "label": "NSI Q3 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Atividades financeiras e de seguros",
        "range": "3.716 BGN/mes brutos (cerca de 1.900 EUR)",
        "source": {
          "label": "NSI Q3 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Hotelaria e restauracao",
        "range": "1.586 BGN/mes brutos (cerca de 811 EUR), menor faixa",
        "source": {
          "label": "NSI Q3 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "EUR 477,04/mes (referencia EURES)",
        "source": {
          "label": "EURES Bulgaria",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-bulgaria_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica trabalham livremente na Bulgaria, sem necessidade de autorizacao de trabalho. Nacionais de paises terceiros (incluindo brasileiros) em geral precisam de autorizacao, sob a Lei de Migracao e Mobilidade Laboral. Vias principais: (1) Autorizacao Unica (Single Permit), que junta residencia e trabalho num so documento e exige que o empregador comprove publicacao da vaga por 15 dias sem candidato adequado da Bulgaria ou da UE (teste de mercado), que estrangeiros nao ultrapassem 20% do quadro medio (35% em PMEs), salario igual ao de um bulgaro em posicao equivalente e qualificacao comprovada; (2) Cartao Azul UE, para altamente qualificados, que exige diploma de ensino superior (minimo 3 anos) ou 5 anos de experiencia (lista especial inclui TI), contrato de no minimo 6 meses, salario de pelo menos 1,5 vez a media nacional e nao aplica teste de mercado; valido por ate 5 anos, taxa de emissao em torno de 110 BGN. Mudancas recentes: desde julho de 2025 o empregador deve inscrever titulares de Single Permit no seguro-saude estatal obrigatorio; e o reconhecimento de diploma estrangeiro pelo NACID passou a ser obrigatorio quando o pedido se apoia em titulo academico de fora. Profissoes regulamentadas (medico, dentista, farmaceutico, veterinario, advogado) exigem procedimento adicional de habilitacao. Empreender e aberto a estrangeiros (100% de propriedade, EOOD com capital de 2 BGN), mas ser dono de empresa nao concede residencia automatica.",
    "opportunityWindows": [
      "Setor de TI/software com maior crescimento de contratacoes do pais (+23%) e deficit estrutural; ofertas de TI no Cartao Azul dispensam teste de mercado de trabalho.",
      "Escassez declarada de mao de obra: 34,8% das empresas industriais apontam falta de trabalhadores como fator limitante (NSI, dez/2025).",
      "Saude com carencia critica e continua de medicos, enfermeiros e tecnicos.",
      "Construcao e industria com vagas de dificil preenchimento (eletricistas, soldadores, operadores de maquina).",
      "Turismo e hotelaria com escassez de pessoal, incluindo oportunidades sazonais.",
      "Sofia como segundo polo tecnologico de crescimento mais rapido da Europa, concentrando cerca de 70% dos profissionais de TI.",
      "Abertura de empresa rapida e barata para empreendedores estrangeiros (EOOD remota, capital simbolico)."
    ],
    "jobBoards": [
      {
        "label": "Agencia Nacional de Emprego (National Employment Agency)",
        "url": "https://www.az.government.bg/en/",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Point of Single Contact - profissoes regulamentadas",
        "url": "https://psc.egov.bg/en/market-regulated-professions",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "NSI - Main Labour Force Survey Results, 2025 Annual data",
        "url": "https://www.nsi.bg/en/press-release/main-labour-force-survey-results-2025-annual-data-8966",
        "official": true
      },
      {
        "label": "NSI - Employees and average wages and salaries, Q3 2025",
        "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
        "official": true
      },
      {
        "label": "NSI - Main Labour Force Survey Results, Q4 2025",
        "url": "https://www.nsi.bg/en/press-release/main-labour-force-survey-results-fourth-quarter-of-2025-8939",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Bulgaria",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-bulgaria_en",
        "official": true
      },
      {
        "label": "ELA/EURES - Report on labour shortages and surpluses 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Bulgaria",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-bulgaria_en",
        "official": true
      },
      {
        "label": "NACID - Reconhecimento de qualificacoes estrangeiras",
        "url": "https://nacid.bg/en/foreign_qualifications_in_bulgaria_b_m/info/",
        "official": true
      },
      {
        "label": "Intellias - Outsourcing to Bulgaria",
        "url": "https://intellias.com/outsourcing-bulgaria/",
        "official": false
      },
      {
        "label": "NextJob - Hiring statistics Bulgaria",
        "url": "https://www.nextjob.bg/hiring-statistics-bulgaria/",
        "official": false
      },
      {
        "label": "Innovires - Work Permit / EU Blue Card Bulgaria",
        "url": "https://www.innovires.com/en/blog/work-permit-bulgaria.html",
        "official": false
      }
    ]
  },
  "cy": {
    "updatedAt": "2026-06-22",
    "overview": "Chipre chega a 2025 com um dos mercados de trabalho mais aquecidos da União Europeia. O desemprego recuou para cerca de 4,1% no terceiro trimestre de 2025 segundo o Serviço de Estatística (CYSTAT), e a estimativa harmonizada do Eurostat aponta 4,4% em setembro, bem abaixo da média da zona do euro. A taxa de emprego, de 75,2%, supera em quase cinco pontos a média do bloco. O salário bruto médio mensal subiu para cerca de 2.509 euros no primeiro trimestre de 2025, alta de 5,4% em um ano. O país tem forte presença estrangeira na força de trabalho, com cerca de 21,7% vinda de fora da UE e mais 10,6% de outros Estados-membros, proporção bem acima da média europeia, o que torna o mercado relativamente aberto a quem chega de fora.\n\nA economia cipriota é dominada por serviços. Comércio, turismo e hospitalidade, serviços profissionais e construção concentram a maior parte dos empregos, mas o motor do crescimento recente é a tecnologia. Chipre se firmou como polo de empresas de FOREX, iGaming, fintech e suporte de TI, que disputam talento com empregadores internacionais e puxam os salários para cima. Em paralelo, a expansão do sistema nacional de saúde (GESY) desde 2019 elevou a demanda por profissionais de saúde, e setores como energia renovável e shipping seguem aquecidos. O lado fraco fica na agricultura tradicional, em parte da indústria e no varejo de menor qualificação, além de um excedente persistente em funções administrativas e de escritório.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TIC), desenvolvimento de software e suporte de TI",
      "FOREX, iGaming e fintech (servicos financeiros online)",
      "Turismo, hospitalidade e servicos de alimentacao",
      "Saude e cuidados (impulsionado pela expansao do GESY)",
      "Construcao e oficios de construcao",
      "Shipping e servicos maritimos",
      "Energia renovavel",
      "Servicos profissionais, cientificos e tecnicos (auditoria, contabilidade, juridico)"
    ],
    "coolingSectors": [
      "Agricultura tradicional",
      "Parte da industria de transformacao",
      "Varejo de baixa qualificacao",
      "Funcoes administrativas e de negocios (excedente de oferta)",
      "Escriturarios gerais e de digitacao (excedente)",
      "Profissionais de ensino (excedente segundo o EURES)"
    ],
    "inDemandRoles": [
      {
        "role": "Profissionais de TIC (desenvolvedores de software, engenheiros de sistemas, dados, ciberseguranca)",
        "note": "Grupo ocupacional com maior incidencia de escassez segundo o relatorio EURES/ELA 2024; setor que mais cresce junto com suporte de TI."
      },
      {
        "role": "Trabalhadores da construcao e oficios relacionados (exceto eletricistas)",
        "note": "Apontados como escassez no relatorio EURES/ELA 2024."
      },
      {
        "role": "Faxineiros, auxiliares e pessoal de limpeza",
        "note": "Escassez registrada no relatorio EURES/ELA 2024, ligada a turismo e hospitalidade."
      },
      {
        "role": "Profissionais de FOREX e iGaming (dealers, compliance, suporte ao cliente, risco)",
        "note": "Setor de crescimento mais rapido; competicao com empregadores internacionais eleva salarios."
      },
      {
        "role": "Profissionais de saude (enfermeiros, medicos, tecnicos)",
        "note": "Demanda crescente desde a expansao do GESY em 2019."
      },
      {
        "role": "Contadores qualificados, auditores e analistas financeiros",
        "note": "Sustentados pelo polo de servicos profissionais e empresas de interesse estrangeiro."
      },
      {
        "role": "Especialistas em marketing digital, dados e seguranca da informacao",
        "note": "EURES aponta lacuna de habilidades digitais em varios setores."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da informacao e dados (graduacao ou experiencia em TI)",
        "advice": "Melhor porta de entrada para estrangeiro qualificado. TIC e o grupo de maior escassez e um dos tres setores com vagas ilimitadas no EU Blue Card. Salarios de mid a senior vao de cerca de 2.800 a 6.500 euros por mes. Direcionar candidaturas a empresas de FOREX, iGaming, fintech e suporte de TI, que recrutam internacionalmente e costumam patrocinar permissao de trabalho."
      },
      {
        "area": "Financas, contabilidade e auditoria (qualificacao profissional tipo ACCA/ACA)",
        "advice": "Demanda solida no polo de servicos profissionais e nas empresas de interesse estrangeiro. Contador qualificado fica em torno de 2.400 a 3.750 euros por mes e cargos de CFO/diretor chegam a 5.000 a 10.000 euros. Qualificacao internacional reconhecida e ingles fluente abrem portas."
      },
      {
        "area": "Saude (diploma reconhecido, registro profissional)",
        "advice": "GESY ampliou a demanda por enfermeiros, medicos e tecnicos. Sao profissoes regulamentadas, exigindo reconhecimento de diploma e registro no orgao competente antes de exercer. Bom caminho para quem ja tem credencial reconhecida na UE."
      },
      {
        "area": "Construcao e oficios tecnicos (qualificacao tecnica ou experiencia comprovada)",
        "advice": "Escassez declarada de trabalhadores da construcao. Oportunidade real para quem tem experiencia pratica, ainda que os salarios sejam menores que em tecnologia e financas."
      },
      {
        "area": "Hospitalidade e servicos (qualificacao basica a media)",
        "advice": "Turismo aquece a demanda por pessoal de hotelaria, alimentacao e limpeza. Entrada mais facil, salarios proximos do minimo legal; util como primeiro passo, mas com teto de remuneracao baixo."
      },
      {
        "area": "Administracao, ensino e funcoes de escritorio (qualquer nivel)",
        "advice": "Areas em excedente de oferta segundo o EURES. Concorrencia alta e poucas vagas; evitar contar com elas como plano principal de imigracao e priorizar requalificacao para areas digitais."
      },
      {
        "area": "Empreendedores e investidores (terceiros paises)",
        "advice": "Caminho via Foreign Interest Company pela Business Facilitation Unit, com investimento minimo de 200.000 euros vindo do exterior e escritorio fisico proprio. Permite contratar a si mesmo e a estrangeiros (salario minimo de 2.500 euros/mes para empregados de paises terceiros) e abre via de residencia."
      }
    ],
    "salaries": [
      {
        "role": "Salario bruto medio mensal (toda a economia)",
        "range": "~2.509 euros/mes (1o trimestre de 2025; +5,4% em um ano)",
        "source": {
          "label": "CYSTAT via Cyprus Mail / koronapay",
          "url": "https://www.cystat.gov.cy/en/SubthemeStatistics?id=43",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "1.000 euros/mes brutos em 2025 (900 nos 6 primeiros meses); sobe a 1.088 euros (979 nos 6 primeiros meses) em jan/2026",
        "source": {
          "label": "Eurofound / Ministerio do Trabalho (MLSI)",
          "url": "https://www.eurofound.europa.eu/en/countries/cyprus/minimum-wage",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software junior",
        "range": "1.800 a 2.500 euros/mes",
        "source": {
          "label": "Cyprus salary guides (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software mid (3-5 anos)",
        "range": "2.800 a 4.200 euros/mes",
        "source": {
          "label": "Cyprus salary guides (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software senior",
        "range": "4.000 a 6.500 euros/mes",
        "source": {
          "label": "Cyprus salary guides (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "Contador qualificado",
        "range": "2.400 a 3.750 euros/mes",
        "source": {
          "label": "CareerFinders Salary Guide (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "CFO / Diretor financeiro",
        "range": "5.000 a 10.000 euros/mes",
        "source": {
          "label": "CareerFinders Salary Guide (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "FOREX/iGaming - compliance e dealer",
        "range": "2.000 a 5.000 euros/mes",
        "source": {
          "label": "CareerFinders Salary Guide (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "Engenheiro civil",
        "range": "1.800 a 4.000 euros/mes",
        "source": {
          "label": "CareerFinders Salary Guide (camada de mercado, nao oficial)",
          "url": "https://careerfinders.com.cy/salary-guide/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card (qualificados, paises terceiros)",
        "range": "minimo 43.632 euros/ano brutos",
        "source": {
          "label": "Comissao Europeia / Migration Department",
          "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-cyprus_en",
          "official": true
        }
      },
      {
        "role": "Salario minimo para empregado de pais terceiro em Foreign Interest Company",
        "range": "minimo 2.500 euros/mes brutos",
        "source": {
          "label": "Business Facilitation Unit (regra de empresa de interesse estrangeiro)",
          "url": "https://www.businessincyprus.gov.cy/doing-business-in-cyprus/start-your-business/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e suicos trabalham e se estabelecem livremente em Chipre, bastando registro local. Para nacionais de paises terceiros (incluindo brasileiros), e necessaria permissao de residencia e trabalho, em geral patrocinada pelo empregador. O regime mais relevante para qualificados e o EU Blue Card, que Chipre passou a aceitar em 7 de julho de 2025: exige contrato de pelo menos seis meses, diploma superior ou tres anos de experiencia relevante nos ultimos sete anos, seguro-saude e salario bruto minimo de 43.632 euros por ano. Tem vagas ilimitadas em tres setores (TIC, pesquisa farmaceutica e maritimo, exceto capitaes e tripulacao), analise em ate tres meses, reagrupamento familiar imediato, mobilidade na UE apos um ano e via acelerada a residencia permanente em 33 meses. No fluxo geral, o empregador submete a permissao de entrada M70; apos aprovacao, o trabalhador viaja com a permissao e passaporte e formaliza o pedido pessoalmente no Civil Registry and Migration Department em ate sete dias da chegada. Profissoes regulamentadas (saude, direito, engenharia, contabilidade/auditoria) exigem reconhecimento de diploma e registro no orgao profissional competente antes do exercicio. Para empreender, nao ha restricao a propriedade estrangeira (100% permitido); o caminho estruturado para nao europeus e a Foreign Interest Company via Business Facilitation Unit, com investimento minimo de 200.000 euros transferido do exterior, escritorio proprio e salario minimo de 2.500 euros/mes para empregados de paises terceiros. O autonomo nao europeu precisa antes da permissao de residencia/trabalho adequada e registra-se no Tax Department via portal Tax For All. Salario minimo nacional: 1.000 euros brutos/mes em 2025 (900 nos primeiros seis meses), subindo para 1.088 euros (979 nos primeiros seis meses) a partir de 1 de janeiro de 2026.",
    "opportunityWindows": [
      "EU Blue Card em vigor desde julho de 2025, com vagas ilimitadas em TIC, pesquisa farmaceutica e maritimo, analise em ate 3 meses e via rapida a residencia permanente em 33 meses",
      "Escassez declarada de profissionais de TIC, principal grupo em falta segundo o EURES/ELA 2024",
      "Boom de FOREX, iGaming e fintech, que recrutam internacionalmente e costumam patrocinar permissao de trabalho",
      "Expansao do sistema de saude GESY mantendo a demanda alta por enfermeiros, medicos e tecnicos",
      "Escassez em construcao e em limpeza/auxiliares, com entrada mais acessivel para perfis tecnicos e operacionais",
      "Regime de Foreign Interest Company (investimento de 200.000 euros) como porta de entrada estruturada para empreendedores e investidores nao europeus",
      "Salario minimo em alta (1.088 euros a partir de jan/2026), reduzindo a base de remuneracao em funcoes de entrada"
    ],
    "jobBoards": [
      {
        "label": "PES Cyprus - Sistema online do Servico Publico de Emprego (Department of Labour)",
        "url": "https://www.pescps.dl.mlsi.gov.cy",
        "official": true
      },
      {
        "label": "EURES Cyprus (Department of Labour)",
        "url": "https://www.eures.gov.cy",
        "official": true
      },
      {
        "label": "Gov.cy - Busca de vagas / plataforma de candidatos a emprego",
        "url": "https://www.gov.cy/en/service/job-search/",
        "official": true
      },
      {
        "label": "Portal EURES (rede europeia, vagas em Chipre)",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "Department of Labour / Ministerio do Trabalho (MLSI)",
        "url": "https://www.mlsi.gov.cy/mlsi/dl/dl.nsf/index_en/index_en?OpenDocument=",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Labour Market Information: Cyprus",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-cyprus_en",
        "official": true
      },
      {
        "label": "ELA/EURES - Report on labour shortages and surpluses 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "CYSTAT - Labour Market Statistics",
        "url": "https://www.cystat.gov.cy/en/SubthemeStatistics?id=43",
        "official": true
      },
      {
        "label": "Eurostat - Cyprus in the EU (apresentacao 2025)",
        "url": "https://ec.europa.eu/eurostat/documents/4187653/22762673/2025.12553+ESTAT_CY_Presidency_EN_03.pdf/2a657211-4a50-a2d1-6256-8dab88d03f60?t=1766140138406",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Cyprus",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-cyprus_en",
        "official": true
      },
      {
        "label": "Eurofound - Minimum wage in Cyprus",
        "url": "https://www.eurofound.europa.eu/en/countries/cyprus/minimum-wage",
        "official": true
      },
      {
        "label": "Business in Cyprus - Start your business (Ministerio de Energia, Comercio e Industria)",
        "url": "https://www.businessincyprus.gov.cy/doing-business-in-cyprus/start-your-business/",
        "official": true
      },
      {
        "label": "EURES Cyprus - Finding a job in Cyprus (Department of Labour)",
        "url": "https://www.eures.gov.cy/mlsi/dl/eures/eures.nsf/page21_en/page21_en?OpenDocument=",
        "official": true
      },
      {
        "label": "Cyprus Mail - Cobertura do mercado de trabalho e salario minimo 2025/2026",
        "url": "https://cyprus-mail.com/2025/12/23/labour-minister-announces-increase-of-monthly-minimum-wage-to-1088-euro",
        "official": false
      },
      {
        "label": "CareerFinders - Cyprus Salary Guide (benchmarks de mercado)",
        "url": "https://careerfinders.com.cy/salary-guide/",
        "official": false
      },
      {
        "label": "KPMG Cyprus - EU Blue Card implementation",
        "url": "https://kpmg.com/cy/en/home/insights/2025/07/european-union-eu-blue-card-implementation.html",
        "official": false
      }
    ]
  },
  "hr": {
    "updatedAt": "2026-06-22",
    "overview": "A Croacia entrou em 2025 com um dos mercados de trabalho mais aquecidos da sua historia recente. O desemprego caiu para cerca de 4,8% no fim de 2025 segundo o Eurostat, abaixo da media da Uniao Europeia, e a propria EURES classifica o pais como tendo um mercado relativamente equilibrado em relacao a outras economias europeias. O motor desse aperto e a combinacao de turismo forte, que responde por cerca de um quarto do PIB, construcao civil e uma industria de tecnologia em expansao acelerada, somada ao envelhecimento da populacao e a emigracao de croatas para outros paises da UE. O resultado e uma escassez estrutural de mao de obra que abriu as portas para trabalhadores estrangeiros, especialmente de Nepal, Filipinas e India, com mais de cem mil pessoas chegando ao pais ao longo de 2025. Os salarios subiram com forca: o salario medio bruto mensal alcancou cerca de 2.093 euros e o liquido cerca de 1.498 euros em novembro de 2025, alta nominal proxima de 10% em doze meses, segundo o Instituto Nacional de Estatistica da Croacia. Ainda assim, os valores seguem muito abaixo da media europeia e ha forte disparidade entre setores e regioes, com Zagreb e o litoral adriatico concentrando emprego e salarios mais altos enquanto a Croacia panonica registra o maior desemprego. Para 2026 entraram em vigor regras mais rigidas para a contratacao de estrangeiros, incluindo teste obrigatorio de lingua croata para renovacao de autorizacoes e limites territoriais para profissoes em falta, o que muda o calculo de quem planeja trabalhar ou empreender no pais.",
    "hotSectors": [
      "Turismo e hotelaria, que movimenta cerca de 25% do PIB",
      "Construcao civil e obras de infraestrutura",
      "Tecnologia da informacao e comunicacao (ICT), projetada para chegar a 15% do PIB ate 2030",
      "Industria de transformacao (manufatura), o maior empregador do pais",
      "Transporte e logistica",
      "Saude e assistencia social, setor com a maior taxa de vagas em aberto"
    ],
    "coolingSectors": [
      "Construcao ligada a reconstrucao pos-terremoto de Zagreb, com autorizacoes de trabalho na construcao caindo quase 28% nos primeiros nove meses de 2025",
      "Industria de vestuario e confeccao, o setor de menor remuneracao do pais",
      "Funcoes administrativas e de escritorio, classificadas como excedentarias pela EURES",
      "Comercio varejista de balcao, com vendedores e atendentes em excesso",
      "Ocupacoes excedentarias citadas pela EURES: economista, recepcionista de hotel, fotografo e cabeleireiro"
    ],
    "inDemandRoles": [
      {
        "role": "Pedreiro, carpinteiro, soldador e armador de ferro",
        "note": "Nucleo da escassez nacional na construcao, presente em Zagreb e no norte da Croacia"
      },
      {
        "role": "Eletricista, encanador e instalador de aquecimento e ar-condicionado",
        "note": "Oficios da construcao em falta em varias regioes"
      },
      {
        "role": "Operador de guindaste e de maquinas de construcao",
        "note": "Profissao deficiente listada pela HZZ e EURES"
      },
      {
        "role": "Cozinheiro, garcom, padeiro, confeiteiro e acougueiro",
        "note": "Forte demanda sazonal no turismo do litoral adriatico"
      },
      {
        "role": "Motorista de caminhao, inclusive com reboque",
        "note": "Escassez nacional confirmada pela HZZ no transporte"
      },
      {
        "role": "Mecanico de automoveis",
        "note": "Profissao em falta nos servicos automotivos"
      },
      {
        "role": "Programador e desenvolvedor de software",
        "note": "ICT em expansao; novas regras permitem reconhecer profissionais de TI sem diploma formal por experiencia"
      },
      {
        "role": "Administrador de sistemas e designer de interface (UI)",
        "note": "Funcoes de TI em demanda segundo a EURES"
      },
      {
        "role": "Profissionais de saude e assistencia social",
        "note": "Setor com a maior taxa de vagas em aberto, cerca de 3,2%"
      }
    ],
    "byQualification": [
      {
        "area": "Ensino superior e alta qualificacao (TI, engenharia, ciencias)",
        "advice": "O EU Blue Card e a porta principal. Exige diploma superior ou experiencia profissional reconhecida e contrato de no minimo 1 ano com salario acima do limiar nacional, cerca de 1,5x o salario bruto medio anual. Desde 2025 a validade subiu de 24 para 48 meses e profissionais de TI sem diploma formal podem qualificar por experiencia. Salarios de TI e engenharia estao entre os mais altos do pais."
      },
      {
        "area": "Tecnico e profissional de oficio (construcao, transporte, manutencao)",
        "advice": "Maior volume de vagas e o caminho mais aberto, via autorizacao unica de residencia e trabalho com teste de mercado da HZZ. Atencao: a partir de 2026 muitas profissoes em falta passam a ter limite territorial e e exigido teste de croata nivel A1.1 para renovar a permissao apos um ano."
      },
      {
        "area": "Hotelaria e turismo (cozinha, atendimento, hospedagem)",
        "advice": "Demanda alta e sazonal no litoral adriatico, com permissoes sazonais agora de ate 9 meses. Dominio de ingles e alemao e diferencial nas regioes turisticas. Bom ponto de entrada, mas com salarios medianos e forte concorrencia de trabalhadores asiaticos."
      },
      {
        "area": "Empreendedor e investidor",
        "advice": "E possivel obter residencia abrindo empresa (d.o.o. ou obrt) com participacao de pelo menos 51% e capital inicial em torno de 26.500 euros, ou pela autorizacao de autoemprego que exige renda de cerca de 1,5x o salario medio. Ha limiares minimos de faturamento: cerca de 10.000 euros por mes para pessoa juridica e 15.000 euros em 6 meses para autonomo."
      },
      {
        "area": "Profissional remoto e nomade digital",
        "advice": "O visto de nomade digital foi ampliado em 2025 para estadas de ate 18 meses. Voltado a quem trabalha para empregadores ou clientes fora da Croacia, sem competir no mercado local. Renda comprovada e exigida."
      }
    ],
    "salaries": [
      {
        "role": "Salario bruto medio mensal (todos os setores)",
        "range": "cerca de 2.093 euros por mes (nov. 2025)",
        "source": {
          "label": "Instituto Nacional de Estatistica da Croacia, via Croatia Week",
          "url": "https://www.croatiaweek.com/croatia-average-salary-november-2025/",
          "official": true
        }
      },
      {
        "role": "Salario liquido medio mensal (todos os setores)",
        "range": "cerca de 1.498 euros por mes (nov. 2025)",
        "source": {
          "label": "Instituto Nacional de Estatistica da Croacia, via Croatia Week",
          "url": "https://www.croatiaweek.com/croatia-average-salary-november-2025/",
          "official": true
        }
      },
      {
        "role": "Transporte aereo, setor mais bem pago",
        "range": "cerca de 3.370 euros bruto e 2.315 euros liquido por mes",
        "source": {
          "label": "Instituto Nacional de Estatistica da Croacia, via Croatia Week",
          "url": "https://www.croatiaweek.com/croatia-average-salary-november-2025/",
          "official": true
        }
      },
      {
        "role": "Industria de vestuario, setor pior pago",
        "range": "cerca de 1.277 euros bruto e 967 euros liquido por mes",
        "source": {
          "label": "Instituto Nacional de Estatistica da Croacia, via Croatia Week",
          "url": "https://www.croatiaweek.com/croatia-average-salary-november-2025/",
          "official": true
        }
      },
      {
        "role": "Salario minimo legal",
        "range": "840 euros por mes (referencia jan. 2024)",
        "source": {
          "label": "EURES, Informacao de Mercado de Trabalho Croacia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-croatia_en",
          "official": true
        }
      },
      {
        "role": "Limiar salarial do EU Blue Card",
        "range": "cerca de 1,5x o salario bruto medio anual; referencia de 24.845 euros por ano (2.070 euros por mes) usada em 2023, com aumento de cerca de 17% para 2025",
        "source": {
          "label": "Comissao Europeia, EU Blue Card Croacia",
          "url": "https://immigration-portal.ec.europa.eu/eu-blue-card/croatia_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica trabalham livremente na Croacia. Para nacionais de terceiros paises, incluindo brasileiros, o caminho padrao e a autorizacao unica de residencia e trabalho, em regra precedida de teste de mercado de trabalho feito pela HZZ (Servico Croata de Emprego), que verifica se ha candidatos locais disponiveis; nao havendo, o empregador pode pedir a permissao em ate 90 dias. As regras endureceram em 2025 e 2026: o empregador precisa ter pelo menos 10% a 16% do quadro de trabalhadores croatas, da UE, EEE ou Suica em relacao aos de terceiros paises, limiar reduzido para 8% em profissoes em falta, alem de limiares minimos de faturamento, cerca de 10.000 euros por mes para pessoa juridica e 15.000 euros em 6 meses para autonomo. Passou a ser obrigatorio teste de lingua croata nivel A1.1 para renovar a autorizacao apos um ano de residencia, e as permissoes para profissoes em falta ganharam limite territorial, restringindo o trabalhador as regioes onde a ocupacao e deficiente. Em compensacao, as permissoes ganharam prazos maiores, ate 3 anos para vagas com teste de mercado, 2 anos para isentas e sazonais ate 9 meses, o trabalhador pode ficar ate 60 dias desempregado durante a validade e trocar de empregador na mesma ocupacao por procedimento simplificado apos um ano. Profissionais altamente qualificados usam o EU Blue Card, que exige diploma superior ou experiencia reconhecida, contrato de ao menos 1 ano e salario acima do limiar, agora valido por 48 meses e com reconhecimento por experiencia para alguns cargos de TI. Profissoes regulamentadas, como saude, direito, engenharia e ensino, exigem reconhecimento de qualificacao junto a autoridade competente croata antes do exercicio. Para empreender, o estrangeiro pode abrir d.o.o. (sociedade limitada) ou obrt (empresa individual), normalmente com participacao de pelo menos 51% e capital inicial em torno de 26.500 euros, e obter a autorizacao de residencia e trabalho por autoemprego, com renda exigida de cerca de 1,5x o salario medio. Nomades digitais tem visto especifico, ampliado para ate 18 meses, voltado a quem atende clientes fora da Croacia.",
    "opportunityWindows": [
      "Escassez estrutural na construcao e nos oficios tecnicos (pedreiros, soldadores, eletricistas, encanadores) abre vagas continuas em Zagreb e no norte do pais",
      "Temporada turistica no litoral adriatico cria pico sazonal de contratacoes em hotelaria e gastronomia, com permissoes sazonais de ate 9 meses",
      "Setor de TI em expansao rapida, com nova regra que reconhece profissionais sem diploma formal por experiencia, ampliando a porta de entrada via EU Blue Card",
      "Transporte e logistica com demanda firme por motoristas de caminhao em todo o pais",
      "EU Blue Card mais atraente desde 2025: validade dobrada para 48 meses e possibilidade de atividade secundaria por conta propria",
      "Visto de nomade digital ampliado para ate 18 meses, ideal para quem mantem renda no exterior enquanto vive na Croacia"
    ],
    "jobBoards": [
      {
        "label": "HZZ, Burza rada (Servico Croata de Emprego, portal oficial de vagas)",
        "url": "https://burzarada.hzz.hr/Posloprimac_RadnaMjesta.aspx",
        "official": true
      },
      {
        "label": "EURES, portal de mobilidade de emprego da UE",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "EURES Croacia (HZZ), servicos para quem busca emprego",
        "url": "https://eures.hzz.hr/en/eures-services/jobseekers/",
        "official": true
      },
      {
        "label": "Ministerio do Trabalho da Croacia, como procurar emprego no pais",
        "url": "https://mrosp.gov.hr/highlights-7158/your-europe/labour-market-and-employment/looking-for-a-job-in-the-republic-of-croatia/12082",
        "official": true
      },
      {
        "label": "MojPosao, maior portal privado de vagas da Croacia",
        "url": "https://mojposao.hr/en/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "EURES, Informacao de Mercado de Trabalho: Croacia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-croatia_en",
        "official": true
      },
      {
        "label": "EURES e ELA, Relatorio de escassez e excedente de mao de obra 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "Eurostat, Estatisticas de desemprego (via Trading Economics)",
        "url": "https://tradingeconomics.com/croatia/unemployment-rate-eurostat-data.html",
        "official": false
      },
      {
        "label": "Comissao Europeia, Previsao economica para a Croacia",
        "url": "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/croatia/economic-forecast-croatia_en",
        "official": true
      },
      {
        "label": "Comissao Europeia, EU Blue Card Croacia",
        "url": "https://immigration-portal.ec.europa.eu/eu-blue-card/croatia_en",
        "official": true
      },
      {
        "label": "Comissao Europeia, Trabalhador autonomo na Croacia",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/self-employed-worker-croatia_en",
        "official": true
      },
      {
        "label": "Ministerio do Trabalho da Croacia, procurar emprego",
        "url": "https://mrosp.gov.hr/highlights-7158/your-europe/labour-market-and-employment/looking-for-a-job-in-the-republic-of-croatia/12082",
        "official": true
      },
      {
        "label": "OECD, Reviews of Labour Market and Social Policies: Croatia 2025",
        "url": "https://www.oecd.org/en/publications/oecd-reviews-of-labour-market-and-social-policies-croatia-2025_90b78cc3-en/full-report/the-labour-market-and-social-situation-in-croatia_b415075e.html",
        "official": true
      },
      {
        "label": "Croatia Week, Salario medio da Croacia em novembro de 2025 (dados do Instituto Nacional de Estatistica)",
        "url": "https://www.croatiaweek.com/croatia-average-salary-november-2025/",
        "official": false
      },
      {
        "label": "Expat in Croatia, Mudancas na Lei dos Estrangeiros 2025",
        "url": "https://www.expatincroatia.com/croatian-law-on-foreigners-2025/",
        "official": false
      },
      {
        "label": "Croatia Week, Teste obrigatorio de croata para trabalhadores estrangeiros",
        "url": "https://www.croatiaweek.com/croatia-mandatory-croatian-language-test-foreign-workers-law/",
        "official": false
      },
      {
        "label": "Erickson Immigration Group, Croacia muda regras de imigracao",
        "url": "https://eiglaw.com/croatia-introduces-major-changes-to-immigration-rules/",
        "official": false
      },
      {
        "label": "ETIAS, Queda nas autorizacoes de trabalho de estrangeiros na Croacia",
        "url": "https://etias.com/articles/croatia-sees-drop-in-foreign-work-permits",
        "official": false
      },
      {
        "label": "Expat in Croatia, Residencia abrindo empresa na Croacia",
        "url": "https://www.expatincroatia.com/how-to-residency-opening-business-croatia/",
        "official": false
      },
      {
        "label": "Total Croatia News, Mais de 100 mil trabalhadores estrangeiros chegaram em 2025",
        "url": "https://total-croatia-news.com/news/foreign-workers-croatia-2025/",
        "official": false
      }
    ]
  },
  "sk": {
    "updatedAt": "2026-06-22",
    "overview": "A Eslováquia entra em 2026 com um mercado de trabalho apertado e demograficamente pressionado. A taxa de desemprego fechou 2025 em 5,4 por cento, cerca de 150 mil desempregados, abaixo da média da União Europeia de 6,0 por cento, segundo o Eurostat e o Instituto Nacional de Estatística eslovaco. O salário médio mensal bruto da economia chegou a 1.620 euros em 2025, alta nominal de 6,3 por cento no ano, e atingiu 1.739 euros no quarto trimestre. O quadro é de escassez estrutural de mão de obra: o relatório EURES de escassez e excedentes aponta operadores de máquinas e plantas industriais, trabalhadores da construção exceto eletricistas e motoristas como os grupos com maior carência, ao lado de saúde, indústria automotiva, engenharia e tecnologia. Para quem quer trabalhar ou empreender, o país combina demanda real por técnicos e profissionais qualificados com custo de vida mais baixo que o do oeste europeu. A distribuição geográfica é muito desigual e define a estratégia de quem chega de fora. Bratislava e o oeste do país, Trnava, Trenčín e Nitra, concentram empregos com desemprego baixíssimo, em torno de 2,3 por cento na capital, forte presença de automotiva, ICT, química e maquinário, além de mais de 70 profissões em escassez de longa duração só na capital. Já o leste, Prešov e Košice, e o centro-sul, Banská Bystrica, sofrem com desemprego acima de 9 a 10 por cento e êxodo de trabalhadores para outras regiões e para o exterior. Em paralelo, a Eslováquia endureceu as regras de imigração laboral: desde 15 de julho de 2025 passou a exigir do candidato ao Single Permit comprovação de eslovaco no nível A2, dentro de um pacote que também passou a permitir começar a trabalhar enquanto o pedido tramita. Estrangeiros já são cerca de 5 por cento da população, com os ucranianos como maior grupo.",
    "hotSectors": [
      "Indústria automotiva e de autopeças (Volkswagen, KIA, Stellantis e a nova fábrica da Volvo)",
      "Tecnologia da informação e serviços digitais (desenvolvimento de software, ICT)",
      "Saúde (enfermagem, medicina, cuidadores e auxiliares)",
      "Engenharia e manufatura de precisão (soldadores, operadores CNC)",
      "Transporte, logística e armazenagem (motoristas de caminhão e ônibus)",
      "Construção civil e ofícios técnicos (eletricistas, encanadores, carpinteiros)",
      "Serviços financeiros e de seguros"
    ],
    "coolingSectors": [
      "Serviços de comunicação (emprego projetado em queda pelo EURES)",
      "Trabalhadores de serviços pessoais (excedente de oferta)",
      "Profissionais associados de administração e negócios (excedente)",
      "Processamento de alimentos, marcenaria, confecção e ofícios artesanais correlatos (excedente)"
    ],
    "inDemandRoles": [
      {
        "role": "Operadores de máquinas e plantas industriais estacionárias",
        "note": "Grupo com maior incidência de escassez no país, segundo o relatório EURES de escassez e excedentes."
      },
      {
        "role": "Soldadores e operadores de máquinas CNC",
        "note": "Demanda puxada pela indústria automotiva e de engenharia."
      },
      {
        "role": "Motoristas de caminhão e ônibus e operadores de veículos",
        "note": "Um dos grupos de maior carência; setor de transporte e armazenagem aquecido."
      },
      {
        "role": "Trabalhadores da construção exceto eletricistas",
        "note": "Pedreiros, carpinteiros e ofícios correlatos com alta escassez."
      },
      {
        "role": "Eletricistas, encanadores e técnicos de instalação",
        "note": "Ofícios técnicos qualificados em demanda persistente."
      },
      {
        "role": "Enfermeiros, médicos e auxiliares de saúde",
        "note": "Falta de pessoal qualificado pressiona o sistema de saúde."
      },
      {
        "role": "Desenvolvedores de software e especialistas em TI",
        "note": "Setor mais bem pago; demanda por habilidades técnicas e digitais."
      },
      {
        "role": "Trabalhadores de armazenagem e logística",
        "note": "Vagas concentradas em transporte, logística e centros de distribuição."
      }
    ],
    "byQualification": [
      {
        "area": "Ensino superior em TI e engenharia de software",
        "advice": "Maior potencial salarial do país, setor de TI com média de cerca de 3.150 euros por mês. Caminho recomendado é o EU Blue Card, que exige diploma superior, contrato de pelo menos um ano e salário acima do limiar legal. Bratislava e Košice concentram as vagas de ICT."
      },
      {
        "area": "Saúde, medicina e enfermagem",
        "advice": "Demanda alta e estrutural por escassez de pessoal. São profissões regulamentadas; é obrigatório o reconhecimento do diploma estrangeiro e, em geral, comprovação de eslovaco. A exigência de eslovaco A2 para o Single Permit, desde julho de 2025, soma-se aos requisitos linguísticos clínicos."
      },
      {
        "area": "Engenharia, mecatrônica e manufatura",
        "advice": "Forte absorção pela automotiva, KIA, VW, Stellantis e Volvo, e pela cadeia de autopeças no oeste e centro do país. Diploma técnico ou superior abre portas tanto via Single Permit quanto via Blue Card para cargos altamente qualificados."
      },
      {
        "area": "Ensino técnico e profissionalizante, soldagem, CNC e ofícios da construção",
        "advice": "Profissões frequentemente nas listas de escassez por distrito, o que dispensa o teste de mercado de trabalho e acelera o Single Permit. Certificações reconhecidas e experiência comprovada pesam mais que diploma acadêmico."
      },
      {
        "area": "Carteira de motorista profissional C e D e logística",
        "advice": "Setor com carência relevante de motoristas e operadores. Exige reconhecimento e validação da habilitação profissional e, conforme a função, formação específica de transporte."
      },
      {
        "area": "Sem qualificação formal, serviços pessoais e administrativos",
        "advice": "Áreas com excedente de oferta segundo o EURES; concorrência maior e salários mais baixos. Recomenda-se evitar essas funções como porta de entrada e buscar qualificação técnica que esteja nas listas de escassez."
      },
      {
        "area": "Empreendedores e autônomos",
        "advice": "Estrangeiros de fora da UE precisam de residência temporária para fins de negócio, atividade empresarial, distinta do Single Permit de emprego. Vale concentrar o negócio em Bratislava e no oeste, onde a economia é mais dinâmica, e contar com assessoria para o registro da živnosť, autônomo, ou s.r.o., empresa."
      }
    ],
    "salaries": [
      {
        "role": "Média da economia, bruto mensal, 2025",
        "range": "1.620 euros por mês, média anual; 1.739 euros por mês no 4º trimestre de 2025",
        "source": {
          "label": "Instituto Nacional de Estatística da Eslováquia (Statistical Office of the SR)",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages/inf_sprava_detail/e85f8bdc-faf2-4aed-8684-44ed4a839ad2/",
          "official": true
        }
      },
      {
        "role": "Salário mínimo, bruto mensal",
        "range": "750 euros por mês, referência de janeiro de 2024",
        "source": {
          "label": "EURES - Labour Market Information: Slovakia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-slovakia_en",
          "official": true
        }
      },
      {
        "role": "Indústria, bruto mensal, 2025",
        "range": "1.743 euros por mês",
        "source": {
          "label": "Instituto Nacional de Estatística da Eslováquia",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages/inf_sprava_detail/e85f8bdc-faf2-4aed-8684-44ed4a839ad2/",
          "official": true
        }
      },
      {
        "role": "Comércio, bruto mensal, 2025",
        "range": "1.518 euros por mês",
        "source": {
          "label": "Instituto Nacional de Estatística da Eslováquia",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages/inf_sprava_detail/e85f8bdc-faf2-4aed-8684-44ed4a839ad2/",
          "official": true
        }
      },
      {
        "role": "Serviços financeiros e de seguros, bruto mensal, 2025",
        "range": "acima de 2.600 euros por mês, setor mais bem pago",
        "source": {
          "label": "Instituto Nacional de Estatística da Eslováquia",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages/inf_sprava_detail/e85f8bdc-faf2-4aed-8684-44ed4a839ad2/",
          "official": true
        }
      },
      {
        "role": "Alojamento e alimentação, bruto mensal, 2025",
        "range": "969 euros por mês, único setor abaixo de 1.000 euros",
        "source": {
          "label": "Instituto Nacional de Estatística da Eslováquia",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages/inf_sprava_detail/e85f8bdc-faf2-4aed-8684-44ed4a839ad2/",
          "official": true
        }
      },
      {
        "role": "Programador e desenvolvedor de software, bruto mensal",
        "range": "1.447 a 6.673 euros; 80 por cento entre 1.656 e 4.146 euros; setor de TI com média de cerca de 3.150 euros",
        "source": {
          "label": "Platy.sk, pesquisa salarial, corroboração de comunidade, não oficial",
          "url": "https://www.platy.sk/en/salaryinfo/information-technology/programmer",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadãos da UE, EEE e Suíça não precisam de autorização de trabalho na Eslováquia. Para nacionais de terceiros países, incluindo brasileiros, o regime padrão é o Single Permit, autorização única de residência para fins de emprego: o pedido é entregue no Departamento de Polícia, que solicita ao Escritório de Trabalho ÚPSVR a confirmação de que a vaga pode ser preenchida. Mudanças em vigor desde 15 de julho de 2025 exigem do candidato comprovação de eslovaco no nível A2 e passaram a permitir começar a trabalhar enquanto o pedido é analisado; o prazo de processamento ficou em torno de 30 a 60 dias e o Single Permit vale até dois anos, renovável. Teste de mercado e profissões em escassez: em regra, o empregador precisa anunciar a vaga e aguardar cerca de 20 dias, notificação de vaga, para testar o mercado local antes da contratação de estrangeiro. Há exceção importante: para ocupações constantes das listas oficiais de escassez, publicadas por distrito onde o desemprego médio fica abaixo de 5 por cento, o Escritório de Trabalho emite a confirmação sem o teste de mercado de 20 dias, acelerando o processo. Vale verificar a lista vigente antes de planejar a vinda. EU Blue Card, trabalho altamente qualificado: destinada a quem tem diploma de ensino superior. Exige contrato de trabalho, com duração mínima a partir de 6 meses no momento do pedido e em regra de pelo menos um ano para a qualificação plena, e salário de pelo menos 1,2 vez o salário médio mensal da economia eslovaca, referência de 1.430 euros em 2023, valor atualizado anualmente. A validade padrão é de até 5 anos, ou a duração do contrato mais 90 dias quando o contrato for mais curto. É preciso comprovar o reconhecimento do diploma. Profissões regulamentadas: saúde, médicos e enfermeiros, ensino, direito e engenharias regulamentadas exigem reconhecimento formal do diploma estrangeiro e, frequentemente, comprovação de proficiência em eslovaco, somando-se ao requisito A2 do Single Permit. Não há direito automático ao work permit: a lei eslovaca prevê que a autorização de trabalho pode ser concedida pelo Escritório de Trabalho, mas não há direito subjetivo a obtê-la.",
    "opportunityWindows": [
      "Listas oficiais de profissões em escassez por distrito, onde o desemprego médio fica abaixo de 5 por cento, dispensam o teste de mercado de 20 dias e aceleram o Single Permit; alvo principal para técnicos e ofícios.",
      "Novo investimento da Volvo, carros elétricos, na região de Košice e leste, criando milhares de vagas em automotiva e engenharia em uma área historicamente de alto desemprego.",
      "Pacote de imigração de 15 de julho de 2025 permite começar a trabalhar enquanto o Single Permit é processado, encurtando o tempo até o primeiro salário.",
      "Pressão demográfica e envelhecimento da força de trabalho, projeção de queda de até 250 mil pessoas até 2050, sustentam demanda de longo prazo por imigrantes qualificados.",
      "Bratislava com mais de 70 profissões em escassez de longa duração e desemprego em torno de 2,3 por cento, concentrando vagas em TI, saúde, construção, serviços e comércio."
    ],
    "jobBoards": [
      {
        "label": "Sluzbyzamestnanosti.gov.sk e ÚPSVR, portal oficial do Escritório Central de Trabalho",
        "url": "https://www.upsvr.gov.sk/sluzby-zamestnanosti/foreign-citizens.html?lang=en",
        "official": true
      },
      {
        "label": "EURES Eslováquia, rede europeia de emprego operada pelos Escritórios de Trabalho",
        "url": "https://www.eures.sk/en/",
        "official": true
      },
      {
        "label": "EURES Portal, Comissão Europeia",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Profesia.sk, maior portal privado de empregos da Eslováquia",
        "url": "https://www.profesia.sk/en/",
        "official": false
      },
      {
        "label": "Kariera.sk, portal privado de empregos",
        "url": "https://www.kariera.sk/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Eurostat - EU unemployment rate 2025, notícia oficial",
        "url": "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260610-3",
        "official": true
      },
      {
        "label": "Instituto Nacional de Estatística da Eslováquia - desemprego 4º trimestre e ano de 2025",
        "url": "https://slovak.statistics.sk/wps/portal/ext/home/",
        "official": true
      },
      {
        "label": "Instituto Nacional de Estatística da Eslováquia - salário médio mensal 4º trimestre e ano de 2025",
        "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages/inf_sprava_detail/e85f8bdc-faf2-4aed-8684-44ed4a839ad2/",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Slovakia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-slovakia_en",
        "official": true
      },
      {
        "label": "EURES e ELA - Report on labour shortages and surpluses 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "Ministério do Trabalho da Eslováquia, employment.gov.sk - emprego de nacional de terceiro país",
        "url": "https://www.employment.gov.sk/en/information-foreigners/employment/employment-third-country-national.html",
        "official": true
      },
      {
        "label": "ÚPSVR - Foreign citizens, Escritório Central de Trabalho",
        "url": "https://www.upsvr.gov.sk/sluzby-zamestnanosti/foreign-citizens.html?lang=en",
        "official": true
      },
      {
        "label": "Comissão Europeia - EU Blue Card Slovakia, requisitos e validade",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-slovakia_en",
        "official": true
      },
      {
        "label": "Newland Chase - Slovakia Shortage Occupations Lists e processamento de Single Permit, análise de imigração",
        "url": "https://newlandchase.com/slovakia-shortage-occupations-lists-are-published-and-processing-of-single-permits-is-delayed/",
        "official": false
      },
      {
        "label": "Platy.sk - pesquisa salarial de programadores, corroboração de comunidade",
        "url": "https://www.platy.sk/en/salaryinfo/information-technology/programmer",
        "official": false
      }
    ]
  },
  "si": {
    "updatedAt": "2026-06-22",
    "overview": "A Eslovenia vive em 2026 um dos mercados de trabalho mais apertados da Uniao Europeia, com desemprego entre os mais baixos do bloco (3,7% em 2023 pela EURES, projetado em torno de 3,8% para 2026 pela Comissao Europeia) e taxa de emprego de 72,5%, acima da media dos 27 da UE. O pais cresceu economicamente apoiado em manufatura, construcao e turismo, mas esbarra num gargalo demografico severo: a populacao envelhece, a forca de trabalho local encolhe e quase metade das empresas aponta a falta de mao de obra qualificada como o principal limitador de negocios, segundo levantamentos citados pelo EURES e pela camara britanico-eslovena. Para suprir o deficit, o governo manteve em vigor, ate 31 de outubro de 2026, o decreto que acelera a contratacao de estrangeiros e ampliou a lista oficial de profissoes deficitarias para mais de 100 ocupacoes, nas quais o teste de mercado de trabalho deixa de ser exigido.\n\nEsse cenario abre uma janela concreta para imigrantes, sobretudo nas profissoes tecnicas, de saude, construcao, hotelaria e tecnologia. Os trabalhadores estrangeiros ja representam cerca de 11,7% da forca de trabalho ativa (a maioria de paises de fora da UE), concentrados em construcao, manufatura e transporte. Os salarios eslovenos sao mais comprimidos que a media da Europa Ocidental (salario bruto medio em torno de 2.678 euros em marco de 2026 pela SURS), mas o custo de vida tambem e menor, e a forte cobertura de acordos coletivos (cerca de 80% dos trabalhadores) costuma elevar os pisos setoriais acima do minimo legal. Empreender e viavel: estrangeiros podem deter 100% de uma d.o.o. sem socio local, ainda que o caminho do trabalhador autonomo exija normalmente um ano de residencia previa.",
    "hotSectors": [
      "Saude e cuidados sociais (medicos, enfermagem, cuidadores), pressionados pelo envelhecimento",
      "Construcao civil e trades (pedreiros, carpinteiros, eletricistas, encanadores)",
      "Manufatura e engenharia (automotivo, mecanica, ferramentaria, soldagem)",
      "Tecnologia da informacao e desenvolvimento de software",
      "Farmaceutica e ciencias da vida",
      "Turismo, hotelaria e alimentacao (cozinheiros, garcons, padeiros)",
      "Transporte e logistica (motoristas)"
    ],
    "coolingSectors": [
      "Profissoes juridicas, sociais e culturais (excedente segundo a ESS)",
      "Tecnicos de negocios e administracao",
      "Atendentes e auxiliares de servico ao cliente / secretariado",
      "Design grafico e multimidia, jornalismo, fotografia, arquitetura (grupos com excedente reportado pela EURES)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros e tecnicos de enfermagem",
        "note": "Demanda estrutural pelo envelhecimento; profissao regulamentada (exige reconhecimento e nivel de esloveno)."
      },
      {
        "role": "Medicos e profissionais de saude",
        "note": "Escassez cronica; profissao regulamentada com registro na camara medica e idioma."
      },
      {
        "role": "Eletricistas",
        "note": "Na lista de profissoes deficitarias 2025-2026 (teste de mercado dispensado)."
      },
      {
        "role": "Soldadores",
        "note": "Trade tecnico em alta demanda na manufatura e construcao."
      },
      {
        "role": "Pedreiros, carpinteiros e trabalhadores da construcao",
        "note": "Setor com maior reclamacao de falta de mao de obra."
      },
      {
        "role": "Encanadores e instaladores de aquecimento/refrigeracao",
        "note": "Profissao deficitaria listada."
      },
      {
        "role": "Ferramenteiros, serralheiros e mecanicos",
        "note": "Industria metalurgica e automotiva."
      },
      {
        "role": "Motoristas profissionais (caminhao/onibus)",
        "note": "Transporte e logistica com escassez."
      },
      {
        "role": "Cozinheiros, padeiros, confeiteiros e garcons",
        "note": "Turismo e hotelaria; profissoes deficitarias listadas."
      },
      {
        "role": "Desenvolvedores de software e profissionais de TI",
        "note": "Tier salarial mais alto junto com farma; demanda por talento senior."
      },
      {
        "role": "Engenheiros (mecanica, eletrica, manufatura)",
        "note": "Demanda excede a oferta no polo industrial esloveno."
      }
    ],
    "byQualification": [
      {
        "area": "Saude (enfermagem e medicina)",
        "advice": "Maior janela de demanda do pais, mas profissoes regulamentadas. Planeje o reconhecimento do diploma, registro na camara profissional e prova de esloveno (em geral B1-B2 ou superior para contato com pacientes). O EU Blue Card facilita a entrada de profissionais qualificados com contrato e salario acima do limiar."
      },
      {
        "area": "Trades tecnicos e construcao (sem diploma superior)",
        "advice": "Caminho mais rapido para nao europeus: muitas dessas funcoes estao na lista de profissoes deficitarias, dispensando o teste de mercado de trabalho e acelerando o Single Permit. Certificados de qualificacao profissional e experiencia comprovada pesam mais que diploma universitario."
      },
      {
        "area": "Engenharia e manufatura",
        "advice": "Polo industrial forte (automotivo, mecanica, farma) com demanda acima da oferta. Diploma de engenharia mais ingles tecnico abrem portas; esloveno ajuda na progressao. Elegivel a EU Blue Card."
      },
      {
        "area": "TI e desenvolvimento de software",
        "advice": "Setor que paga no topo da tabela e aceita ingles no dia a dia em muitas empresas e startups. Rota natural para EU Blue Card; portfolio e stack contam mais que credencial formal."
      },
      {
        "area": "Hotelaria, turismo e alimentacao",
        "advice": "Alta rotatividade e escassez sazonal, varias funcoes na lista deficitaria. Bom ponto de entrada para quem busca primeiro emprego no pais; esloveno basico e diferencial no atendimento."
      },
      {
        "area": "Areas administrativas, juridicas e criativas",
        "advice": "Mercado mais saturado (grupos com excedente). Exige dominio de esloveno e diferenciacao clara; considere nichos ligados a exportacao, idiomas raros ou tecnologia."
      }
    ],
    "salaries": [
      {
        "role": "Salario bruto medio nacional",
        "range": "cerca de 2.678 euros/mes (bruto, marco 2026)",
        "source": {
          "label": "SURS (Instituto de Estatistica da Eslovenia)",
          "url": "https://www.stat.si/statweb/en/Field/Index/15/74",
          "official": true
        }
      },
      {
        "role": "Salario bruto medio nacional (base oficial 2023)",
        "range": "2.222 euros bruto / 1.462 euros liquido por mes",
        "source": {
          "label": "EURES (dados oficiais 2023)",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-slovenia_en",
          "official": true
        }
      },
      {
        "role": "Salario minimo",
        "range": "1.481,88 euros/mes (bruto, a partir de 1 jan 2026)",
        "source": {
          "label": "Imprensa especializada (a confirmar no Diario Oficial)",
          "url": "https://employsome.com/hire/slovenia/average-salary-slovenia/",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software / TI",
        "range": "junior 1.800-2.500; pleno 3.000-4.500; senior 4.500-6.500; arquiteto 7.000-9.000 euros/mes (bruto)",
        "source": {
          "label": "Employsome (estimativa de mercado, nao oficial)",
          "url": "https://employsome.com/hire/slovenia/average-salary-slovenia/",
          "official": true
        }
      },
      {
        "role": "Medico",
        "range": "cerca de 4.825 euros/mes em media (faixa ~2.170 a 7.690)",
        "source": {
          "label": "WorldSalaries (estimativa de mercado, nao oficial)",
          "url": "https://worldsalaries.com/average-doctor-salary-in-slovenia/",
          "official": true
        }
      },
      {
        "role": "Enfermeiro",
        "range": "cerca de 1.327 euros/mes em media (faixa ~537 a 2.460)",
        "source": {
          "label": "WorldSalaries (estimativa de mercado, nao oficial)",
          "url": "https://worldsalaries.com/average-staff-nurse-salary-in-slovenia/",
          "official": true
        }
      },
      {
        "role": "Trabalhador da construcao",
        "range": "iniciante ~1.580; com experiencia sobe substancialmente",
        "source": {
          "label": "WorldSalaries (estimativa de mercado, nao oficial)",
          "url": "https://worldsalaries.com/average-construction-worker-salary-in-slovenia/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e Suica tem livre acesso ao mercado de trabalho esloveno. Nacionais de paises terceiros precisam de um Single Permit (autorizacao unica de residencia e trabalho), pedido num unico processo conduzido pela unidade administrativa, com consentimento do Servico de Emprego (ZRSZ). Sem o Single Permit, o contrato de trabalho e nulo e sujeito a multa da inspecao do trabalho. O primeiro permit vale pelo prazo do contrato, no maximo 2 anos; a primeira renovacao vai ate 3 anos. Para mais de 100 profissoes deficitarias (eletricistas, soldadores, cozinheiros, pedreiros, carpinteiros, encanadores, etc.) o teste de mercado de trabalho e dispensado, acelerando a aprovacao; o decreto de contratacao acelerada de estrangeiros foi prorrogado ate 31 de outubro de 2026. Profissionais altamente qualificados podem optar pelo EU Blue Card, que exige diploma de ensino superior, contrato de trabalho de pelo menos 1 ano e salario de no minimo 1,5 vez o salario bruto anual medio do pais; o cartao vale ate 2 anos, com decisao em ate 30 dias (60 em casos complexos) e taxas de 70 a 102 euros. Profissoes regulamentadas, como saude e direito, exigem reconhecimento do diploma, registro na camara profissional e prova de esloveno. Para empreender, estrangeiros podem deter 100% de uma d.o.o. (capital minimo de 7.500 euros, sem necessidade de socio local); o dono majoritario (>=51%) de uma d.o.o. obtem permit de emprego sem teste de mercado, e o representante estrangeiro que dirige a empresa precisa de investimento minimo de 30.000 euros se a empresa tem menos de 6 meses. O trabalhador autonomo (s.p.) em geral exige permit pessoal de trabalho e ao menos 1 ano de residencia legal ininterrupta, alem de comprovar cerca de 10.000 euros em recursos. Desde 21 de novembro de 2025 ha tambem um Visto de Nomade Digital para remotos de fora da UE (renda exigida de cerca de 3.200-3.300 euros/mes), que nao permite vender servicos a clientes locais eslovenos.",
    "opportunityWindows": [
      "Decreto de contratacao acelerada de estrangeiros em vigor ate 31 de outubro de 2026 (verificar prorrogacao apos essa data)",
      "Lista de profissoes deficitarias com mais de 100 ocupacoes em 2025-2026 dispensa o teste de mercado de trabalho",
      "Escassez recorde: cerca de 48% das empresas apontam falta de mao de obra qualificada como principal limitador",
      "Saude e cuidados a idosos com demanda estrutural crescente pelo envelhecimento populacional",
      "Reforma salarial do setor publico e aumento do salario minimo elevando os ganhos em 2026",
      "Novo Visto de Nomade Digital (desde nov/2025) abre porta para profissionais remotos de fora da UE",
      "100% de propriedade estrangeira permitida em d.o.o. sem socio local, registro gratuito via SPOT"
    ],
    "jobBoards": [
      {
        "label": "ZRSZ - Servico de Emprego da Republica da Eslovenia (Zavod RS za zaposlovanje)",
        "url": "https://www.ess.gov.si/en/jobseekers",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional (Eslovenia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "SPOT - Slovenian Business Point (abertura de empresa)",
        "url": "https://spot.gov.si/en/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Labour Market Information: Slovenia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-slovenia_en",
        "official": true
      },
      {
        "label": "ZRSZ - Slovenian labour market (Servico de Emprego)",
        "url": "https://www.ess.gov.si/en/employers/recruit-in-europe-eures/slovenian-labour-market",
        "official": true
      },
      {
        "label": "ZRSZ - Single Permit (autorizacao unica)",
        "url": "https://www.ess.gov.si/en/jobseekers/employment-of-non-eu-migrant-workers/work-in-slovenia/single-permit",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Slovenia",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-slovenia_en",
        "official": true
      },
      {
        "label": "SPOT - Como nao europeus podem abrir empresa na Eslovenia",
        "url": "https://spot.gov.si/en/info/how-can-non-eu-nationals-start-a-business-in-slovenia",
        "official": true
      },
      {
        "label": "SURS - Earnings and Labour Cost (Instituto de Estatistica)",
        "url": "https://www.stat.si/statweb/en/Field/Index/15",
        "official": true
      },
      {
        "label": "Comissao Europeia - Economic forecast for Slovenia",
        "url": "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/slovenia/economic-forecast-slovenia_en",
        "official": true
      },
      {
        "label": "ELA/EURES - Labour shortages and surpluses in Europe 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "CEDEFOP - Slovenia: Mismatch priority occupations",
        "url": "https://www.cedefop.europa.eu/en/data-insights/slovenia-mismatch-priority-occupations",
        "official": true
      },
      {
        "label": "Sibiz - Slovenia Expands List of Shortage Occupations for 2025",
        "url": "https://sibiz.eu/slovenia-expands-list-of-shortage-occupations-for-2025/",
        "official": false
      },
      {
        "label": "Employsome - Average Salary in Slovenia 2026",
        "url": "https://employsome.com/hire/slovenia/average-salary-slovenia/",
        "official": false
      },
      {
        "label": "WorldSalaries - Slovenia salary data",
        "url": "https://worldsalaries.com/average-doctor-salary-in-slovenia/",
        "official": false
      }
    ]
  },
  "ee": {
    "updatedAt": "2026-06-22",
    "overview": "A Estonia entra em 2026 com um mercado de trabalho de dois ritmos. A taxa de desemprego ficou em 7,1% no primeiro trimestre de 2026, com taxa de emprego de 68%, segundo os dados acompanhados pela rede EURES e pela previsao do Banco da Estonia, que projeta queda gradual do desemprego para 6,8% em 2027. O salario medio bruto mensal subiu para 2.135 euros no primeiro trimestre de 2026, alta de 6,2% em doze meses, enquanto o salario mediano alcancou 1.753 euros, conforme a Statistics Estonia. O crescimento nominal dos salarios vem esfriando e deve permanecer pouco abaixo de 5% ao ano em 2026 e 2027, sinal de uma economia que ainda aquece, mas com menos pressao do que nos anos do pico inflacionario.\n\nO retrato setorial mostra a tecnica do pais: a economia digital puxa os salarios mais altos (tecnologia da informacao e comunicacao paga em media 3.821 euros, financas 3.608 euros e energia 3.132 euros), enquanto hospedagem e alimentacao seguem na base, com 1.337 euros. A industria transformadora ainda e o maior empregador, com cerca de 21% dos postos, seguida por comercio e construcao. Para o estrangeiro qualificado, a Estonia combina um sistema 100% digital de abertura de empresa, o programa e-Residency e o Startup Visa, com forte demanda por profissionais de TI, engenharia, saude e educacao. O ponto de atencao e a cota de imigracao para nao europeus, restrita a 1.292 vagas em 2026, da qual o setor de TI e as profissoes top sao isentos.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TI/ICT)",
      "Engenharia (mecatronica, automacao, industrial)",
      "Servicos financeiros e fintech",
      "Saude (enfermagem, medicina, fonoaudiologia)",
      "Educacao e pesquisa",
      "Energia (eletricidade, gas, energia limpa)",
      "Industria transformadora qualificada (metalurgia, soldagem, operacao de maquinas)",
      "Logistica e transporte rodoviario"
    ],
    "coolingSectors": [
      "Servicos administrativos e contabeis (automacao e IA reduzindo demanda)",
      "Jornalismo e relacoes publicas",
      "Vendas no varejo e comercio de rua",
      "Trabalho braçal nao qualificado na construcao e mineracao",
      "Operacoes de armazenagem e transporte de carga manual",
      "Servicos de limpeza, lavanderia e similares"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedores e programadores de software",
        "note": "Setor de TI isento da cota de imigracao; deficit de arquitetos de sistemas e desenvolvedores"
      },
      {
        "role": "Engenheiros de mecatronica e operadores de maquinas",
        "note": "Falta cronica na industria; inclui operadores de colheitadeiras e processamento de madeira"
      },
      {
        "role": "Enfermeiros e cuidadores",
        "note": "Estonia tem deficit estimado em mais de 4 mil enfermeiros; cerca de 200 emigram por ano"
      },
      {
        "role": "Medicos e especialistas de saude",
        "note": "Profissao regulamentada, exige reconhecimento de diploma"
      },
      {
        "role": "Professores e especialistas de apoio educacional",
        "note": "Mediana etaria alta; falta de professores do ensino tecnico/vocacional"
      },
      {
        "role": "Fonoaudiologos, psicologos e educadores de necessidades especiais",
        "note": "Deficit muito grande apontado pela Töötukassa"
      },
      {
        "role": "Soldadores, eletricistas, mecanicos e encanadores",
        "note": "Trabalhadores tecnicos qualificados em falta constante"
      },
      {
        "role": "Motoristas de caminhao e veiculos pesados",
        "note": "Entre as ocupacoes de maior demanda projetada"
      },
      {
        "role": "Cozinheiros",
        "note": "Citado pela EUIF entre os de maior demanda nos proximos anos"
      },
      {
        "role": "Gestores com conhecimento setorial",
        "note": "Gestores com experiencia previa em TI e industria sao muito valorizados"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da informacao (TI/ICT)",
        "advice": "Melhor porta de entrada do pais. O setor de TI e isento da cota de imigracao para nao europeus e paga o maior salario medio (3.821 euros/mes). Vale tambem o caminho do Startup Visa para fundadores de empresas tecnologicas escalaveis. Ingles costuma bastar no ambiente de trabalho."
      },
      {
        "area": "Engenharia e tecnicos industriais",
        "advice": "Forte demanda por mecatronica, automacao, operacao de maquinas e processos. Diplomas tecnicos sao bem aceitos; experiencia pratica comprovada pesa mais que o titulo formal. Salarios na industria cresceram cerca de 7,4% no ultimo ano."
      },
      {
        "area": "Saude (medicina e enfermagem)",
        "advice": "Demanda altissima, porem sao profissoes regulamentadas. E obrigatorio o reconhecimento do diploma estrangeiro e, na pratica, dominio do idioma estoniano para atendimento. Enfermeiros, medicos e fonoaudiologos tem deficit estrutural."
      },
      {
        "area": "Educacao e pesquisa",
        "advice": "Falta de professores, especialmente no ensino tecnico e em apoio a necessidades especiais. Para sala de aula em escolas publicas, o estoniano e praticamente indispensavel; em universidades e centros de pesquisa, o ingles abre portas."
      },
      {
        "area": "Financas e negocios",
        "advice": "Setor que paga o segundo maior salario medio (3.608 euros). Procura por gestores com conhecimento setorial e experiencia previa. Bom para quem tem formacao superior e ingles fluente."
      },
      {
        "area": "Oficios manuais qualificados",
        "advice": "Soldadores, eletricistas, encanadores e mecanicos tem vagas abertas. Caminho viavel via registro de emprego de curta duracao ou permissao de residencia para trabalho, desde que o empregador pague ao menos o salario medio exigido."
      },
      {
        "area": "Empreendedor / fundador de startup",
        "advice": "Use o e-Residency para abrir e gerir uma OU (sociedade limitada) de forma remota e digital. Para morar e operar do pais, o Startup Visa exige empresa tecnologica escalavel com MVP, aval do comite Startup Estonia e renda minima de 800 euros/mes por fundador."
      },
      {
        "area": "Baixa qualificacao / sem especializacao",
        "advice": "Mercado mais apertado. Vendas no varejo, limpeza e trabalho braçal na construcao estao em excesso de oferta e com salarios na base da tabela. A cota de imigracao limitada (1.292 vagas em 2026) torna o ingresso de nao europeus nessas funcoes mais dificil."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (todos os setores)",
        "range": "2.135 EUR/mes bruto (mediana 1.753 EUR)",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Tecnologia da informacao e comunicacao (TI)",
        "range": "3.821 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Servicos financeiros e de seguros",
        "range": "3.608 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Energia (eletricidade, gas, vapor)",
        "range": "3.132 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Hospedagem e alimentacao (setor mais baixo)",
        "range": "1.337 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Outros servicos (segundo mais baixo)",
        "range": "1.389 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Tallinn (capital, media regional)",
        "range": "2.538 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Condado de Harju (regiao de Tallinn)",
        "range": "2.405 EUR/mes bruto",
        "source": {
          "label": "Statistics Estonia (via ERR), Q1 2026",
          "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
          "official": true
        }
      },
      {
        "role": "Salario minimo para permissao de residencia para trabalho (coef. 1,0x)",
        "range": "2.092 EUR/mes bruto (0,8x = 1.674 para startups)",
        "source": {
          "label": "Police and Border Guard Board (politsei.ee), mar/2026 a mar/2027",
          "url": "https://www.politsei.ee/en/instructions/residence-permit-for-employment",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica trabalham livremente, bastando registrar residencia. Para nao europeus ha tres caminhos principais. 1) Emprego de curta duracao: para trabalho de ate 365 dias dentro de um periodo de 455 dias, o empregador registra o emprego na Policia e Guarda de Fronteira (PPA) antes do inicio; a decisao sai em ate 15 dias uteis. 2) Permissao de residencia temporaria para trabalho: o empregador deve pagar salario igual ou superior ao salario medio bruto da Estonia. A tabela oficial da PPA para o periodo de 5 de marco de 2026 a marco de 2027 fixa o coeficiente 1,0x em 2.092 euros/mes (0,8x = 1.674 euros, aplicado a startups; 1,24x = 2.594; 1,5x = 3.138). 3) Empreender: via e-Residency (identidade digital para abrir e gerir empresa, sem direito de morar no pais) ou Startup Visa (direito de viver e trabalhar do pais, exige empresa tecnologica escalavel com MVP e aval do comite Startup Estonia, renda minima de 800 euros/mes por fundador, seguro saude Schengen de pelo menos 30.000 euros). A cota anual de imigracao para nao europeus em trabalho e negocios e de 1.292 vagas em 2026, mas o setor de TI e as profissoes top (top specialists) sao isentos dessa cota e nao se sujeitam mais ao criterio de salario dobrado. Profissoes regulamentadas (medicina, enfermagem, direito, docencia em escolas, entre outras) exigem reconhecimento de diploma e, em geral, conhecimento do idioma estoniano. Empresa patrocinadora deve estar no Registro Comercial estoniano e comprovar atividade economica real.",
    "opportunityWindows": [
      "Setor de TI isento da cota de imigracao para nao europeus, o que torna o ingresso de desenvolvedores e arquitetos de sistemas muito mais rapido que em outras carreiras",
      "Profissoes top (top specialists) tambem fora da cota e sem o antigo criterio de salario dobrado, facilitando contratacao de especialistas",
      "Startup Visa com exigencia financeira baixa (800 euros/mes por fundador) e analise do comite em cerca de 10 dias uteis",
      "e-Residency permite abrir e operar uma OU 100% online antes mesmo de imigrar, util para testar o mercado",
      "Deficit estrutural e envelhecimento da forca de trabalho em saude, educacao e transporte garantem demanda de medio prazo",
      "Salarios em alta acelerada na energia (+15,4%), agricultura (+11,2%) e industria (+7,4%) no ultimo ano, sinal de aperto de mao de obra nesses ramos"
    ],
    "jobBoards": [
      {
        "label": "Töötukassa - Ofertas de emprego (Fundo de Seguro-Desemprego, servico publico)",
        "url": "https://www.tootukassa.ee/en/joboffers",
        "official": true
      },
      {
        "label": "EURES Estonia (rede europeia de empregos, parte da Töötukassa)",
        "url": "https://www.eures.ee/en/toootsijale/ee",
        "official": true
      },
      {
        "label": "EURES Portal (Comissao Europeia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Minukarjäär (servico de carreira da Töötukassa)",
        "url": "https://minukarjaar.ee/en",
        "official": true
      },
      {
        "label": "Work in Estonia (portal oficial de talentos do governo)",
        "url": "https://www.workinestonia.com/",
        "official": true
      },
      {
        "label": "CV Keskus (cvkeskus.ee, maior portal privado)",
        "url": "https://www.cvkeskus.ee/",
        "official": false
      },
      {
        "label": "CV-Online (cv.ee, principal portal privado)",
        "url": "https://www.cv.ee/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Statistics Estonia - Salario medio bruto mensal Q1 2026 (via ERR)",
        "url": "https://news.err.ee/1610044036/average-monthly-wage-rose-to-2-135-in-q1-2026",
        "official": true
      },
      {
        "label": "Statistics Estonia - Salario mediano Q1 2026 (via Estonian World)",
        "url": "https://estonianworld.com/business/estonias-median-salary-e1753-a-month-in-q1-2026/",
        "official": false
      },
      {
        "label": "Statistics Estonia - Wages and salaries (portal oficial)",
        "url": "https://stat.ee/en/find-statistics/statistics-theme/work-life/wages-and-salaries-and-labour-costs/average-monthly-gross-wages-and-salaries",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Estonia (Comissao Europeia)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-estonia_en",
        "official": true
      },
      {
        "label": "Police and Border Guard Board - Residence permit for employment (tabela salarial oficial)",
        "url": "https://www.politsei.ee/en/instructions/residence-permit-for-employment",
        "official": true
      },
      {
        "label": "EU Immigration Portal - Highly-qualified worker in Estonia",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-estonia_en",
        "official": true
      },
      {
        "label": "e-Residency - Programa oficial do governo da Estonia",
        "url": "https://www.e-resident.gov.ee/e-residency-for-startups/",
        "official": true
      },
      {
        "label": "CEDEFOP - Estonia: Mismatch priority occupations (agencia da UE)",
        "url": "https://www.cedefop.europa.eu/en/data-insights/estonia-mismatch-priority-occupations",
        "official": true
      },
      {
        "label": "European Commission - Economic forecast for Estonia",
        "url": "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/estonia/economic-forecast-estonia_en",
        "official": true
      },
      {
        "label": "Töötukassa - Registration as unemployed/jobseeker",
        "url": "https://www.tootukassa.ee/en/job-seekers/registration-unemployed",
        "official": true
      }
    ]
  },
  "fi": {
    "updatedAt": "2026-06-22",
    "overview": "A Finlandia vive um paradoxo no mercado de trabalho de 2026. Por um lado, o desemprego subiu ao maior nivel em mais de uma decada: a Pesquisa de Forca de Trabalho do Statistics Finland registrou taxa de 10,9% em fevereiro de 2026, com cerca de 312 mil desempregados e 2,55 milhoes de empregados, num cenario de recuperacao lenta apos a recessao que castigou a construcao e a industria de papel e celulose. Por outro lado, o pais convive com escassez estrutural de mao de obra em saude, servicos sociais e tecnologia, puxada pelo envelhecimento populacional, e depende de imigracao qualificada para sustentar servicos publicos e o setor tecnologico. O Barometro Ocupacional do governo aponta que profissionais de saude e assistencia social seguem no topo das ocupacoes em falta, enquanto o emprego em tecnologia da informacao cresce na contramao da economia.\n\nPara o estrangeiro, isso significa um mercado de duas velocidades. Quem traz qualificacao em enfermagem, medicina, tecnologia, engenharia ou oficios tecnicos encontra demanda real, caminhos de visto acelerados e ocupacoes isentas do teste de mercado de trabalho. Quem busca vagas genericas em servicos, vendas ou administracao enfrenta concorrencia alta, desemprego jovem perto de 28% e exigencia pratica de finlandes ou sueco. Helsinki-Uusimaa concentra as oportunidades de maior renda e o ecossistema de startups, enquanto regioes do Norte e Leste tem economia mais fraca. O salario medio bruto gira em torno de 3.900 euros mensais, com tecnologia, finance e setor publico no topo e hotelaria e varejo na base, e o pais nao tem salario minimo legal: a remuneracao e definida por acordos coletivos setoriais.",
    "hotSectors": [
      "Saude e assistencia social (enfermagem, medicina, cuidadores, fisioterapia)",
      "Tecnologia da informacao e software (IA, cloud, ciberseguranca, dados)",
      "Educacao infantil e ensino",
      "Oficios tecnicos qualificados (eletricistas, soldadores, encanadores, operadores de metal)",
      "Industria e manufatura avancada",
      "Tecnologia verde e bioeconomia",
      "Servicos sociais e cuidados a idosos"
    ],
    "coolingSectors": [
      "Industria de papel e celulose (fechamentos de fabricas e demissoes)",
      "Silvicultura e produtos florestais (compras de madeira em queda, producao de serrados em baixa)",
      "Construcao civil (emprego em minimo de 25 anos, recuperacao apenas modesta prevista para 2026)",
      "Varejo e comercio (baixa demanda, salarios na base)",
      "Profissoes administrativas e de escritorio (excedente de candidatos)",
      "Vendas e servicos de restaurante/cozinha (excedente)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) registrado(a) e enfermeiro(a) pratico(a)",
        "note": "Top da lista de escassez do Barometro Ocupacional; consta no decreto governamental de profissoes criticas (jun/2025). Projecao de deficit superior a 15 mil ate 2030. Profissao regulamentada: exige licenca da Valvira."
      },
      {
        "role": "Medico(a) clinico(a) geral e especialista",
        "note": "Escassez persistente e severa, com forte disparidade regional. Profissao regulamentada via Valvira."
      },
      {
        "role": "Especialista em TI / desenvolvedor de software",
        "note": "Setor tech cresce cerca de 15%; estimativa de 130 mil novas contratacoes em TI ate 2030. Demanda em IA, cloud e ciberseguranca."
      },
      {
        "role": "Profissional de educacao infantil",
        "note": "Escassez recorrente apontada pelo EURES e pelo Barometro. Profissao regulamentada (professor)."
      },
      {
        "role": "Eletricista, soldador, encanador e operador de processamento de metal",
        "note": "Oficios tecnicos em falta; operadores de metal estao no decreto de profissoes criticas."
      },
      {
        "role": "Cuidador(a) e auxiliar de assistencia social",
        "note": "Demanda puxada pelo envelhecimento populacional."
      },
      {
        "role": "Fonoaudiologo(a), audiologista, higienista dental, bombeiro e agente funerario",
        "note": "Constam na lista de nove profissoes criticas do decreto governamental de junho de 2025 com mobilidade facilitada para titulares de permissao."
      }
    ],
    "byQualification": [
      {
        "area": "Saude (enfermagem, medicina, fisioterapia, odontologia)",
        "advice": "Maior porta de entrada do pais. Antes de exercer, e obrigatorio obter o direito de exercicio profissional junto a Valvira, autoridade que reconhece a formacao. Para formados fora da UE/EEE, o processo investiga equivalencia com a formacao finlandesa, pode exigir estudos complementares e leva em media mais de 4 meses (4 meses se a documentacao estiver completa). Varias funcoes de saude estao no decreto de profissoes criticas, o que facilita mobilidade e visto. Recomenda-se iniciar o reconhecimento cedo e investir em finlandes/sueco, exigido na pratica clinica."
      },
      {
        "area": "Tecnologia da informacao e engenharia de software",
        "advice": "Setor em alta mesmo com a economia fraca, com forte demanda em IA, cloud, dados e ciberseguranca. Ingles funciona em muitas empresas de tecnologia, sobretudo em Helsinki. Quem ganha pelo menos 3.937 euros brutos/mes (limite de 2026) qualifica para a permissao de especialista ou EU Blue Card, ambas com via rapida de cerca de duas semanas e isentas do teste de mercado de trabalho."
      },
      {
        "area": "Oficios tecnicos e industria (eletricista, soldador, operador de metal)",
        "advice": "Demanda concreta em manufatura e infraestrutura. Eletricista e profissao regulamentada (exige habilitacao). O reconhecimento de qualificacao profissional pode passar pela Finnish National Agency for Education (OPH) ou pela autoridade setorial. Vale checar se a ocupacao consta na lista regional de escassez do ELY Centre, o que dispensa o teste de mercado de trabalho."
      },
      {
        "area": "Educacao e ensino",
        "advice": "Professor e profissao regulamentada; o exercicio exige reconhecimento de qualificacao e, na pratica, dominio de finlandes ou sueco. Educacao infantil tem escassez, mas a barreira linguistica e alta. Indicado para quem ja tem ou pretende atingir fluencia no idioma local."
      },
      {
        "area": "Administracao, vendas, hotelaria e servicos gerais",
        "advice": "Areas com excedente de candidatos e salarios na base da tabela. A concorrencia e alta e o finlandes costuma ser pre-requisito. Sem qualificacao diferenciada ou idioma local, as chances sao menores; vale mirar requalificacao para setores em falta."
      },
      {
        "area": "Empreendedores e fundadores de startup",
        "advice": "A Finlandia tem permissao especifica de start-up entrepreneur, que exige um parecer de elegibilidade (Eligibility Statement) positivo da Business Finland antes de aplicar, com permissao inicial de ate 2 anos. Para empreendedor comum, nao basta possuir a empresa: e preciso trabalhar nela na Finlandia, e o ELY Centre avalia em decisao parcial se o negocio e lucrativo e se a renda e suficiente. Renda liquida minima do empreendedor em 2026: 1.210 / 1.090 / 1.030 euros/mes conforme a regiao de residencia."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto (geral)",
        "range": "cerca de 3.900 EUR/mes (mediana ~3.500 EUR/mes)",
        "source": {
          "label": "Statistics Finland - Index of wage and salary earnings",
          "url": "https://stat.fi/en/statistics/ati",
          "official": true
        }
      },
      {
        "role": "Setor de informacao e comunicacao (mais alto)",
        "range": "~4.000 EUR/mes e acima",
        "source": {
          "label": "Statistics Finland - Index of wage and salary earnings",
          "url": "https://stat.fi/en/statistics/ati",
          "official": true
        }
      },
      {
        "role": "Hotelaria e alimentacao (mais baixo)",
        "range": "~2.300 EUR/mes",
        "source": {
          "label": "Statistics Finland - Index of wage and salary earnings",
          "url": "https://stat.fi/en/statistics/ati",
          "official": true
        }
      },
      {
        "role": "Setor privado (media)",
        "range": "~4.250 EUR/mes",
        "source": {
          "label": "Statistics Finland - Index of wage and salary earnings",
          "url": "https://stat.fi/en/statistics/ati",
          "official": true
        }
      },
      {
        "role": "Setor publico central (media)",
        "range": "~4.542 EUR/mes",
        "source": {
          "label": "Statistics Finland - Index of wage and salary earnings",
          "url": "https://stat.fi/en/statistics/ati",
          "official": true
        }
      },
      {
        "role": "Setor publico local (media)",
        "range": "~3.990 EUR/mes",
        "source": {
          "label": "Statistics Finland - Index of wage and salary earnings",
          "url": "https://stat.fi/en/statistics/ati",
          "official": true
        }
      },
      {
        "role": "Limite salarial de especialista e EU Blue Card (piso legal 2026)",
        "range": "3.937 EUR/mes brutos (minimo)",
        "source": {
          "label": "Migri - Specialist residence permit",
          "url": "https://migri.fi/en/specialist",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica nao precisam de permissao de trabalho e podem trabalhar livremente, registrando o direito de residencia se a estadia passar de tres meses. Para nao europeus, a regra geral e ter emprego confirmado antes de aplicar e obter uma permissao de residencia baseada em trabalho. As principais vias em 2026 sao: (1) Permissao de residencia para pessoa empregada (TTOL), que exige teste de mercado de trabalho (availability consideration), no qual se avalia se ha mao de obra disponivel na Finlandia ou na UE/EEE; o empregador precisa publicar a vaga no Job Market Finland por duas semanas e documentar o recrutamento, salvo se a ocupacao constar na lista de escassez do ELY Centre regional. (2) Permissao de especialista, para funcoes de alta qualificacao com diploma superior ou expertise equivalente e salario bruto minimo de 3.937 euros/mes em 2026, com via rapida de cerca de duas semanas e sem teste de mercado. (3) EU Blue Card, para altamente qualificados, com mesmo limite salarial de 3.937 euros/mes (2026), contrato de pelo menos seis meses e diploma superior de pelo menos tres anos ou cinco anos de experiencia profissional. Beneficios e diarias nao contam para o salario minimo exigido. Profissoes regulamentadas (medico, enfermeiro, professor, psicologo, fisioterapeuta, advogado, auditor, entre outras) exigem reconhecimento ou licenca antes do exercicio: na saude e servicos sociais, a autorizacao e dada pela Valvira; em outras areas, o reconhecimento pode caber a Finnish National Agency for Education (OPH). Desde junho de 2025, um decreto governamental lista nove profissoes criticas (medicos gerais e especialistas, audiologistas, fonoaudiologos, enfermeiros, enfermeiros praticos, higienistas dentais, operadores de processamento de metal, agentes funerarios e bombeiros) nas quais titulares de permissao podem mudar de ocupacao com mais flexibilidade. Vigora ainda a regra de tres/seis meses de desemprego (em vigor desde junho de 2025), que afeta a validade da permissao em caso de perda do emprego. Trabalho sazonal agricola de ate 90 dias pode ser feito apenas com visto de trabalho. Empreendedores tem vias proprias (start-up e empreendedor), com avaliacao de lucratividade pelo ELY Centre e renda minima regionalizada.",
    "opportunityWindows": [
      "Profissoes de saude isentas do teste de mercado de trabalho e na lista critica do governo: enfermeiros, medicos, enfermeiros praticos, higienistas dentais e correlatas tem caminho mais curto de visto e mobilidade facilitada",
      "Tecnologia da informacao crescendo cerca de 15% na contramao da economia, com 130 mil contratacoes de TI projetadas ate 2030 e empresas operando em ingles",
      "Via rapida de cerca de duas semanas para permissao de especialista e EU Blue Card a partir de 3.937 euros/mes brutos, sem teste de mercado de trabalho",
      "Ocupacoes na lista regional de escassez do ELY Centre dispensam o teste de mercado, agilizando a contratacao de estrangeiros",
      "Decreto de profissoes criticas (vigente desde junho de 2025) permite a titulares de permissao mudar para nove ocupacoes em falta sem nova permissao",
      "Permissao de start-up entrepreneur com aval da Business Finland, voltada a fundadores inovadores, com permissao inicial de ate 2 anos"
    ],
    "jobBoards": [
      {
        "label": "Job Market Finland (Tyomarkkinatori) - portal oficial de empregos do servico publico",
        "url": "https://tyomarkkinatori.fi/en/personal-customers/vacancies",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional (vagas na Finlandia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Migri - Servico de Imigracao da Finlandia (permissoes de trabalho)",
        "url": "https://migri.fi/en/coming-to-finland-for-work",
        "official": true
      },
      {
        "label": "InfoFinland - guia oficial de trabalho e empreendedorismo para imigrantes",
        "url": "https://infofinland.fi/en/work-and-enterprise",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Statistics Finland - Pesquisa de Forca de Trabalho (fev/2026: desemprego 10,9%, 312 mil desempregados, 2,55 mi empregados)",
        "url": "https://stat.fi/en/publication/cmfp8h79k9vzt08urs1183am0",
        "official": true
      },
      {
        "label": "Statistics Finland - Labour force survey (estatistica)",
        "url": "https://stat.fi/en/statistics/tyti",
        "official": true
      },
      {
        "label": "Statistics Finland - Index of wage and salary earnings",
        "url": "https://stat.fi/en/statistics/ati",
        "official": true
      },
      {
        "label": "Finnish Government (Valtioneuvosto) - Barometro Ocupacional: saude e servicos sociais no topo da escassez",
        "url": "https://valtioneuvosto.fi/en/-/1410877/occupational-barometer-increase-in-labour-shortages-has-slowed-down-but-health-and-social-services-continue-to-account-for-top-shortage-occupations",
        "official": true
      },
      {
        "label": "Ministerio de Economia e Emprego (TEM) - Decreto sobre setores com escassez de mao de obra",
        "url": "https://tem.fi/en/-/government-issues-a-decree-on-current-labour-shortage-sectors",
        "official": true
      },
      {
        "label": "Job Market Finland - Labour Force Barometer e estatisticas de emprego",
        "url": "https://tyomarkkinatori.fi/en/employment-and-statistics",
        "official": true
      },
      {
        "label": "Migri - Permissao de especialista (salario 3.937 EUR/mes em 2026, via rapida)",
        "url": "https://migri.fi/en/specialist",
        "official": true
      },
      {
        "label": "Migri - EU Blue Card (mudancas no requisito salarial)",
        "url": "https://migri.fi/en/-/changes-in-the-salary-requirement-for-eu-blue-card-holders",
        "official": true
      },
      {
        "label": "Migri - Teste de mercado de trabalho (availability consideration)",
        "url": "https://migri.fi/en/labour-market-test",
        "official": true
      },
      {
        "label": "Migri - Permissao de start-up entrepreneur",
        "url": "https://migri.fi/en/start-up-entrepreneur",
        "official": true
      },
      {
        "label": "Migri - Permissao de empreendedor",
        "url": "https://migri.fi/en/entrepreneur",
        "official": true
      },
      {
        "label": "Valvira - Reconhecimento de qualificacoes profissionais (saude)",
        "url": "https://valvira.fi/en/rights-to-practise/recognition-of-professional-qualifications",
        "official": true
      },
      {
        "label": "Finnish National Agency for Education (OPH) - Profissoes regulamentadas na Finlandia",
        "url": "https://www.oph.fi/en/services/recognition-qualifications/regulated-professions-finland",
        "official": true
      },
      {
        "label": "EURES - Informacao de mercado de trabalho: Finlandia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-finland_en",
        "official": true
      },
      {
        "label": "Helsinki Times - Nove profissoes criticas abertas a trabalhadores estrangeiros (corroboracao jornalistica)",
        "url": "https://www.helsinkitimes.fi/finland/finland-news/domestic/26851-government-names-nine-critical-shortage-professions-open-to-foreign-workers.html",
        "official": false
      },
      {
        "label": "ForestIndustries.EU / pulpapernews - demissoes no setor florestal e de papel (corroboracao setorial)",
        "url": "https://www.pulpapernews.com/20260505/17770/finnish-forest-industry-rebounds-paper-still-declines",
        "official": false
      },
      {
        "label": "KPMG GMS Flash Alert - Novos requisitos salariais 2026 para permissoes de trabalho (corroboracao)",
        "url": "https://kpmg.com/xx/en/our-insights/gms-flash-alert/2026/flash-alert-2026-016.html",
        "official": false
      }
    ]
  },
  "gr": {
    "updatedAt": "2026-06-22",
    "overview": "A Grecia vive um paradoxo no mercado de trabalho. A economia segue em recuperacao firme depois da crise da divida, com a taxa de desemprego recuando de dois digitos para cerca de 8,5% na media de 2025, o menor patamar em mais de uma decada segundo Eurostat e ELSTAT. Ao mesmo tempo, o pais enfrenta uma das escassezes de mao de obra mais agudas da Uniao Europeia: o governo estimou em 2025 uma necessidade de cerca de 360 mil trabalhadores, dos quais apenas uma fracao foi preenchida via recrutamento estrangeiro. A combinacao de envelhecimento populacional, emigracao de talentos durante a crise e um boom turistico que responde por cerca de 10% do PIB deixou setores inteiros sem gente, sobretudo turismo, construcao, agricultura e industria. Para o estrangeiro qualificado, esse descompasso abre portas reais, ainda que a remuneracao media siga abaixo da media europeia.\n\nO salario medio bruto gira em torno de 1.300 a 1.500 euros por mes e o minimo subiu para 910 euros mensais em abril de 2025, valores modestos para os padroes da zona do euro mas acompanhados de custo de vida mais baixo que no norte da Europa. A maior parte do emprego se concentra em comercio, alojamento e alimentacao e manufatura, com forte peso da Attica (regiao de Atenas) e do turismo nas ilhas. O calcanhar de Aquiles e a retencao: a Grecia funciona como porta de entrada na UE, e parte relevante dos trabalhadores estrangeiros migra para Alemanha, Holanda e Espanha apos uma ou duas temporadas. Para quem busca carreira tecnica, saude ou tecnologia, ha demanda crescente e incentivos fiscais; para quem quer empreender ou viver de renda, existem vistos especificos, porem com exigencias de capital ou de renda passiva elevadas.",
    "hotSectors": [
      "Turismo, hotelaria e alimentacao (cerca de 85 mil vagas em aberto em 2025; setor vale ~10% do PIB)",
      "Construcao civil e infraestrutura (mais de 100 mil trabalhadores em falta; obras financiadas pelo fundo de recuperacao da UE)",
      "Tecnologia da informacao e software (ecossistema de startups crescendo ~12% ao ano; +80 mil empregados no setor)",
      "Saude e cuidados a idosos (profissionais de saude lideram a lista de ocupacoes em escassez)",
      "Agricultura e trabalho sazonal (mais de 70 mil vagas nao preenchidas)",
      "Energia verde e renovaveis (eolica, solar e eficiencia energetica em expansao)",
      "Logistica e cadeia de suprimentos (Grecia como porta entre Europa, Asia e Africa, com o porto do Pireu)"
    ],
    "coolingSectors": [
      "Profissionais juridicos, sociais e culturais (apontados como ocupacoes excedentarias pelo EURES)",
      "Profissionais de ciencia e engenharia em areas saturadas (excedente relativo segundo EURES, apesar de demanda em nichos como engenharia ambiental)",
      "Profissionais do ensino (excedente de docentes registrado pelo EURES)",
      "Setor publico tradicional, com vagas limitadas e concursos restritos a nacionais ou cidadaos da UE"
    ],
    "inDemandRoles": [
      {
        "role": "Profissionais de saude (medicos, enfermeiros, cuidadores de idosos)",
        "note": "Grupo com a maior incidencia de escassez no pais; ~2.500 vagas dedicadas a saude e cuidado de idosos no contingente de 2025"
      },
      {
        "role": "Trabalhadores de hotelaria e turismo (recepcionistas, cozinheiros, garcons, camareiras)",
        "note": "Cerca de 85 mil vagas; acordo coletivo de 2025 elevou salarios da categoria em ate ~8% ate 2026"
      },
      {
        "role": "Trabalhadores da construcao civil (pedreiros, eletricistas, encanadores, operadores)",
        "note": "Deficit superior a 100 mil trabalhadores, puxado por obras de infraestrutura"
      },
      {
        "role": "Desenvolvedores de software e especialistas em TIC",
        "note": "Alta demanda em desenvolvimento, dados, ciberseguranca e IA; polo principal em Atenas e Tessalonica"
      },
      {
        "role": "Trabalhadores agricolas sazonais",
        "note": "Mais de 70 mil vagas; visto sazonal e a principal via para nao europeus"
      },
      {
        "role": "Tecnicos e engenheiros de energia renovavel",
        "note": "Eolica, solar e eficiencia energetica em alta com metas climaticas"
      },
      {
        "role": "Profissionais de logistica e cadeia de suprimentos",
        "note": "Armazenagem, transporte e distribuicao em expansao com o papel da Grecia como hub"
      },
      {
        "role": "Atendentes de servico ao cliente e operadores de maquinas estacionarias",
        "note": "Entre os grupos com maior incidencia de escassez segundo EURES 2024"
      }
    ],
    "byQualification": [
      {
        "area": "Profissionais de saude (medicos, enfermeiros)",
        "advice": "Setor de maior escassez no pais e elegivel a limiares salariais reduzidos no EU Blue Card. Medicina e enfermagem sao profissoes regulamentadas: exigem reconhecimento do diploma e registro no conselho profissional grego, alem de prova de idioma grego para atuar em hospitais publicos. Salarios de medicos especializados estao entre os mais altos do pais. Caminho recomendado para nao europeus: contrato + reconhecimento de qualificacao + Blue Card ou permissao unica."
      },
      {
        "area": "Tecnologia e TIC (software, dados, ciberseguranca, IA)",
        "advice": "Melhor relacao entre demanda e barreira de entrada para nao europeus qualificados. Profissao nao regulamentada, entao basta diploma superior ou cinco anos de experiencia comprovada para o EU Blue Card. Atenas concentra startups (Workable, Beat, Blueground) e empresas internacionais. Vale combinar com o regime fiscal de trabalhador estrangeiro (isencao de 50% do IRPF por ate 7 anos) e, para remotos, o visto de nomade digital."
      },
      {
        "area": "Engenharia (civil, ambiental, energia)",
        "advice": "Demanda concentrada em engenharia ambiental, energia renovavel e gestao de projetos de infraestrutura, embora o EURES aponte excedente em engenharia geral. Engenharia e profissao regulamentada na Grecia (registro no Technical Chamber of Greece - TEE), entao o reconhecimento do diploma e essencial. Engenheiro civil tem mediana salarial superior a media nacional."
      },
      {
        "area": "Hotelaria, turismo e construcao (qualificacao media/tecnica)",
        "advice": "Maior volume de vagas e a via mais aberta para nao europeus, inclusive via acordos bilaterais (India, Egito, Bangladesh, Georgia, Vietna, Moldavia) e visto sazonal. Salarios modestos (categoria de hotelaria a partir de ~950-1.000 euros). Atencao a retencao: muitos usam a Grecia como trampolim para o norte da Europa. Recomendado garantir contrato formal antes de viajar e checar prazos, pois a burocracia de visto pode levar ~6 meses."
      },
      {
        "area": "Empreendedores e investidores",
        "advice": "Para abrir empresa ou atuar como autonomo, nao europeus precisam comprovar 250 mil euros de capital e apresentar plano de negocios em grego, obtendo permissao de residencia de 2 anos (atividade economica independente) ou 3 anos (investimento), renovaveis. E uma barreira alta de capital. Para quem vive de renda passiva, o visto FIP exige ~3.500 euros/mes de renda externa, mas nao permite trabalhar nem empreender no pais."
      },
      {
        "area": "Profissionais de direito, educacao e ciencias sociais",
        "advice": "Setores apontados como excedentarios pelo EURES, com mais oferta de profissionais que vagas. Direito e ensino publico ainda exigem nacionalidade ou cidadania da UE e dominio do grego para grande parte dos cargos. Recomendado reorientar para nichos privados, internacionais ou combinar com competencias digitais."
      }
    ],
    "salaries": [
      {
        "role": "Salario minimo nacional",
        "range": "910 euros/mes (bruto, desde abril de 2025)",
        "source": {
          "label": "EURES / Governo da Grecia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-greece_en",
          "official": true
        }
      },
      {
        "role": "Salario medio bruto",
        "range": "~1.300 a 1.960 euros/mes (vs. ~3.400 na media da UE27)",
        "source": {
          "label": "EURES Labour Market Information Greece",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-greece_en",
          "official": true
        }
      },
      {
        "role": "Limiar salarial do EU Blue Card (2024)",
        "range": "31.918,83 euros/ano (1,6x o salario medio bruto anual)",
        "source": {
          "label": "Comissao Europeia - EU Immigration Portal",
          "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-greece_en",
          "official": true
        }
      },
      {
        "role": "Medico",
        "range": "~33.000 a 111.000 euros/ano (media ~67.800 euros/ano)",
        "source": {
          "label": "WorldSalaries (dado de comunidade, nao oficial)",
          "url": "https://worldsalaries.com/average-doctor-salary-in-greece/",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) registrado(a)",
        "range": "~media 39.900 euros/ano",
        "source": {
          "label": "ERI SalaryExpert (dado de comunidade, nao oficial)",
          "url": "https://www.erieri.com/salary/job/registered-nurse/greece",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor / engenheiro de software",
        "range": "~13.500 a 42.300 euros/ano (media ~26.000 euros/ano)",
        "source": {
          "label": "WorldSalaries (dado de comunidade, nao oficial)",
          "url": "https://worldsalaries.com/average-software-engineer-salary-in-greece/",
          "official": true
        }
      },
      {
        "role": "Engenheiro civil",
        "range": "mediana ~44.000 euros/ano",
        "source": {
          "label": "ERI SalaryExpert (dado de comunidade, nao oficial)",
          "url": "https://www.erieri.com/salary/job/civil-engineer/greece",
          "official": true
        }
      },
      {
        "role": "Engenheiro mecanico / eletrico",
        "range": "~11.400 a 42.400 euros/ano (media ~25.700 euros/ano)",
        "source": {
          "label": "WorldSalaries (dado de comunidade, nao oficial)",
          "url": "https://worldsalaries.com/average-mechanical-and-electrical-engineer-salary-in-greece/",
          "official": true
        }
      },
      {
        "role": "Trabalhador de hotelaria (categorias de acordo coletivo)",
        "range": "~950 a 1.000 euros/mes (recepcionistas e cozinheiros na faixa mais alta)",
        "source": {
          "label": "GTP Headlines (acordo coletivo do setor hoteleiro)",
          "url": "https://news.gtp.gr/2025/02/19/greek-hotel-workers-salaries-to-rise-8-by-2026-due-to-new-labor-agreement/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica trabalham e empreendem livremente, sem necessidade de visto ou permissao de trabalho. Para nao europeus (nacionais de paises terceiros) ha varias vias, todas exigindo, em regra, contrato ou visto obtido antes da chegada num consulado grego. Trabalho assalariado: o empregador submete contrato valido de pelo menos um ano com remuneracao nao inferior a de um trabalhador nao qualificado; o processo passa pela lista unificada de necessidades de mao de obra e costuma levar varios meses (ate cerca de 6), o que cria gargalos no turismo sazonal. EU Blue Card (altamente qualificados): contrato de ao menos 1 ano em posicao qualificada, diploma superior ou 5 anos de experiencia equivalente, e salario minimo de 31.918,83 euros/ano (2024, equivalente a 1,6x o salario medio bruto anual); validade de 2 anos renovavel, taxa inicial de 150 euros, decisao em ate 90 dias. A Grecia pode aplicar limiares reduzidos para ocupacoes em escassez (classes ISCO 1-2) e recem-formados. Reformas em curso reduzem o contrato minimo para 6 meses. Profissoes regulamentadas (medicina, enfermagem, direito, engenharia, ensino, entre outras) exigem reconhecimento do diploma estrangeiro pelas autoridades gregas e, frequentemente, registro no conselho profissional e prova de grego. Trabalho sazonal: via principal para agricultura, turismo e construcao, frequentemente operada por acordos bilaterais (India, Egito, Bangladesh, Georgia, Vietna, Moldavia). Autonomo/empresa: nao europeus precisam comprovar 250.000 euros de capital, plano de negocios em grego, recursos em conta bancaria reconhecida e seguro de saude, recebendo permissao de 2 anos (atividade independente) ou 3 anos (investimento), renovaveis. Visto de nomade digital: para remotos com renda de pelo menos 3.500 euros/mes (mais 20% por conjuge e 15% por filho), valido por 12 meses e extensivel; desde a Lei 5275/2026 a aplicacao deve ser feita em consulado, nao mais dentro do pais. Visto FIP (pessoa financeiramente independente): exige ~3.500 euros/mes de renda passiva externa, valido 3 anos renovaveis, porem NAO permite trabalhar nem empreender na Grecia. Incentivo fiscal: trabalhadores e profissionais que transferem residencia fiscal para a Grecia e nao foram residentes fiscais em 5 dos 6 anos anteriores podem ter isencao de 50% do imposto de renda por ate 7 anos. Apos 5 anos de residencia legal continua, o estrangeiro pode pedir residencia de longa duracao com acesso pleno ao mercado de trabalho.",
    "opportunityWindows": [
      "Temporada turistica (preparacao entre marco e maio para a alta estacao de junho a setembro): pico de contratacao em hotelaria, alimentacao e ilhas, com escassez estimada de ~85 mil trabalhadores",
      "Acordos bilaterais de mao de obra em vigor (India, Egito, Bangladesh, Georgia, Vietna, Moldavia) abrindo cotas para agricultura, construcao e turismo",
      "Obras de infraestrutura financiadas pelo fundo de recuperacao da UE, sustentando demanda na construcao alem de 2025",
      "Expansao do setor de tecnologia e startups em Atenas e Tessalonica, com regime fiscal de 50% para atrair talento estrangeiro qualificado",
      "Transicao energetica (eolica e solar) criando janela para engenheiros e tecnicos de renovaveis",
      "Programa de regularizacao de migrantes ja presentes e limiares reduzidos do Blue Card para ocupacoes em escassez"
    ],
    "jobBoards": [
      {
        "label": "DYPA - Servico Publico de Emprego da Grecia (portal oficial)",
        "url": "https://www.dypa.gov.gr/en",
        "official": true
      },
      {
        "label": "DYPA - Servicos Digitais de Emprego",
        "url": "https://www.dypa.gov.gr/en/oaed-digital-en",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional (vagas na Grecia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "gov.gr - Portal Digital Unico do Estado grego",
        "url": "https://www.gov.gr/en/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Labour Market Information: Greece",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-greece_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Greece (EU Immigration Portal)",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-greece_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - Self-employed worker in Greece (EU Immigration Portal)",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/self-employed-worker-greece_en",
        "official": true
      },
      {
        "label": "European Labour Authority - EURES Report on labour shortages and surpluses 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "Cedefop - 2025 Skills Forecast Greece",
        "url": "https://www.cedefop.europa.eu/files/skills_forecast_-_greece_2025.pdf",
        "official": true
      },
      {
        "label": "ELSTAT - Hellenic Statistical Authority (estatisticas de emprego)",
        "url": "https://www.statistics.gr/en/statistics/-/publication/SJO02/-",
        "official": true
      },
      {
        "label": "DYPA - Servico Publico de Emprego da Grecia",
        "url": "https://www.dypa.gov.gr/en",
        "official": true
      },
      {
        "label": "Eurostat - Unemployment statistics",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php/Unemployment_statistics",
        "official": true
      },
      {
        "label": "GTP Headlines - Acordo coletivo dos hoteleiros gregos (8% ate 2026)",
        "url": "https://news.gtp.gr/2025/02/19/greek-hotel-workers-salaries-to-rise-8-by-2026-due-to-new-labor-agreement/",
        "official": false
      },
      {
        "label": "WorldSalaries - faixas salariais Grecia (comunidade)",
        "url": "https://worldsalaries.com/average-doctor-salary-in-greece/",
        "official": false
      },
      {
        "label": "ERI SalaryExpert - faixas salariais Grecia (comunidade)",
        "url": "https://www.erieri.com/salary/job/civil-engineer/greece",
        "official": false
      }
    ]
  },
  "nl": {
    "updatedAt": "2026-06-22",
    "overview": "O mercado de trabalho holandes segue apertado em padroes historicos, mas perdeu folego ao longo de 2025 e 2026. Segundo o CBS, o desemprego ficou em 3,9% da forca de trabalho em abril de 2026 (cerca de 397 mil pessoas), um dos niveis mais baixos desde 2024, enquanto o numero de vagas em aberto recuou para 378 mil no fim do primeiro trimestre, queda continua quase a cada trimestre desde o terceiro tri de 2022. A relacao ainda favorece quem procura emprego, com 91 vagas para cada 100 desempregados, e saude, comercio e servicos empresariais concentram mais da metade das vagas abertas. O UWV mantem mais de 300 profissoes classificadas como kansrijk (boas chances de emprego), sinal de que a escassez persiste em nichos especificos mesmo com o esfriamento geral.\n\nPara o estrangeiro, a Holanda continua sendo um dos destinos europeus mais estruturados graças ao regime de kennismigrant (migrante altamente qualificado), que dispensa teste de mercado de trabalho e roda via empregadores reconhecidos pela IND. O ponto de atencao em 2026 e duplo: os pisos salariais subiram cerca de 4,5% frente a 2025, e o beneficio fiscal para expatriados (a antiga regra dos 30%) sera reduzido para 27% a partir de 1 de janeiro de 2027, com novo padrao de renda. A demanda real concentra-se em TI, engenharia, tecnica, construcao, logistica, saude e educacao, ao passo que varejo nao alimentar, hotelaria e parte dos servicos empresariais perderam vagas e confianca empresarial.",
    "hotSectors": [
      "Tecnologia da informacao e ICT",
      "Engenharia e profissoes tecnicas",
      "Construcao civil",
      "Energia e instalacoes tecnicas",
      "Transporte e logistica",
      "Saude",
      "Educacao",
      "Hotelaria e servicos de alimentacao (funcoes operacionais)"
    ],
    "coolingSectors": [
      "Varejo nao alimentar (artigos domesticos, presentes, lojas especializadas pequenas)",
      "Servicos empresariais (queda de 2 mil vagas, total 63 mil)",
      "Industria (queda de 2 mil vagas, total 28 mil)",
      "Comercio em geral (queda de 3 mil vagas, total 68 mil)",
      "Aluguel de ferias e camping (turnover -4,2% no 1o tri de 2026)"
    ],
    "inDemandRoles": [
      {
        "role": "Profissionais de ICT e desenvolvedores de software",
        "note": "Kansrijk em todo o pais segundo o UWV; entre os perfis que mais qualificam para o regime de kennismigrant e o beneficio fiscal de expatriado."
      },
      {
        "role": "Engenheiros e tecnicos (mecanica, eletrica, instalacoes)",
        "note": "Escassez estrutural; energia e instalacoes tecnicas entre os 5 setores de melhores oportunidades."
      },
      {
        "role": "Enfermeiros e profissionais de saude",
        "note": "Kansrijk em todo o pais; exige registro no BIG register (profissao regulamentada)."
      },
      {
        "role": "Professores e docentes",
        "note": "Educacao listada como setor de escassez pelo UWV, embora docente universitario tenha saido da lista kansrijk."
      },
      {
        "role": "Pedreiros, assentadores e operarios da construcao",
        "note": "Novos na lista kansrijk 2026; demanda forte por quem trabalha com as maos."
      },
      {
        "role": "Trabalhadores de logistica, operadores e motoristas",
        "note": "Transporte e logistica entre os 5 setores com mais oportunidades."
      },
      {
        "role": "Hovenier (jardineiro/paisagista)",
        "note": "Citado pelo UWV como kansrijk em todo o territorio nacional."
      },
      {
        "role": "Gestores de facilities, coordenadores de eventos e consultores de orcamento",
        "note": "Funcoes HBO/WO destacadas como kansrijk na edicao 2025-2026."
      }
    ],
    "byQualification": [
      {
        "area": "Ensino superior em TI / Computacao",
        "advice": "Caminho mais direto: contrato com empregador reconhecido pela IND no regime de kennismigrant, que dispensa teste de mercado de trabalho. Em 2026 o piso e de 5.942 euros/mes (30+) ou 4.357 euros/mes (sub-30), excluindo ferias. Recem-formados em universidade holandesa ou no zoekjaar entram pelo piso reduzido de 3.122 euros/mes."
      },
      {
        "area": "Engenharia e areas tecnicas (HBO/WO)",
        "advice": "Setor em escassez estrutural; busque empregadores patrocinadores (recognised sponsor) e considere o EU Blue Card como alternativa (mesmo piso de 5.942 euros/mes em 2026, com piso reduzido de 4.754 euros para recem-formados). Muitos cargos qualificam para o beneficio fiscal de expatriado."
      },
      {
        "area": "Saude (enfermagem, medicina, fisioterapia)",
        "advice": "Profissao regulamentada: e obrigatorio o registro no BIG register sob a lei BIG antes de exercer e usar o titulo protegido. Planeje reconhecimento de diploma e exame de idioma (neerlandes) com antecedencia; a demanda e alta mas a barreira regulatoria e real."
      },
      {
        "area": "Construcao, instalacoes e oficios tecnicos (MBO)",
        "advice": "Forte demanda por praticos (pedreiros, montadores, operadores). Para nao europeu sem qualificacao alta, o caminho costuma ser GVVA com teste de mercado de trabalho (o empregador precisa provar que nao achou candidato europeu), o que e mais dificil; europeus/EEE entram sem permissao de trabalho."
      },
      {
        "area": "Recem-formado por universidade holandesa",
        "advice": "Use o zoekjaar (residencia de orientacao para altamente qualificados): 1 ano para trabalhar sem restricao de horas, empreender ou achar emprego, com acesso ao piso salarial reduzido de 3.122 euros/mes ao migrar para kennismigrant, o que abre portas em PMEs e startups."
      },
      {
        "area": "Empreendedor / autonomo",
        "advice": "Cidadao dos EUA tem via simplificada pelo DAFT (Dutch American Friendship Treaty), com capital inicial de 4.500 euros e sem sistema de pontos. Demais nacionalidades passam pela residencia de self-employed da IND, avaliada por sistema de pontos (valor agregado a economia). Startups inovadoras tem visto de 1 ano via facilitador reconhecido."
      }
    ],
    "salaries": [
      {
        "role": "Piso kennismigrant (30 anos ou mais) - 2026",
        "range": "5.942 euros/mes bruto (exclui ferias)",
        "source": {
          "label": "IND - Required amounts income requirements",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Piso kennismigrant (menor de 30 anos) - 2026",
        "range": "4.357 euros/mes bruto (exclui ferias)",
        "source": {
          "label": "IND - Required amounts income requirements",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Piso reduzido (recem-formado / zoekjaar) - 2026",
        "range": "3.122 euros/mes bruto (exclui ferias)",
        "source": {
          "label": "IND - Required amounts income requirements",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "EU Blue Card - 2026",
        "range": "5.942 euros/mes bruto (4.754 euros piso reduzido para recem-formados)",
        "source": {
          "label": "IND - Required amounts income requirements",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Salario medio nacional - 2026",
        "range": "cerca de 4.453 euros/mes bruto (53.436 euros/ano, inclui ferias)",
        "source": {
          "label": "Jobted.nl (agregador, base CBS/CAO) - referencia de comunidade",
          "url": "https://www.jobted.nl/salaris",
          "official": true
        }
      },
      {
        "role": "Software Engineer - 2026",
        "range": "3.220 a 4.355 euros/mes bruto (media ~3.785)",
        "source": {
          "label": "Jobted.nl (comunidade, nao oficial)",
          "url": "https://www.jobted.nl/salaris",
          "official": true
        }
      },
      {
        "role": "Enfermagem / saude - 2026",
        "range": "2.800 a 4.200 euros/mes bruto",
        "source": {
          "label": "Monetise / salarisperberoep.nl (comunidade, nao oficial)",
          "url": "https://monetise.nl/salaris-werk/gemiddeld-salaris-in-nederland-2026-cijfers-uitgelegd-per-sector/",
          "official": true
        }
      },
      {
        "role": "Construcao (vakmensen) - 2026",
        "range": "3.000 a 4.500 euros/mes bruto",
        "source": {
          "label": "salarisperberoep.nl (comunidade, nao oficial)",
          "url": "https://salarisperberoep.nl/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica trabalham livremente, sem permissao de trabalho. Para nao europeus existem dois caminhos principais: a TWV (tewerkstellingsvergunning), permissao de trabalho avulsa emitida pelo UWV para ate 90 dias e sem taxa governamental, e a GVVA (gecombineerde vergunning voor verblijf en arbeid), permissao combinada de residencia e trabalho para periodos acima de 90 dias, valida por ate 1 ano e renovavel por ate 5; ambas em regra exigem teste de mercado de trabalho (o empregador prova que nao achou candidato europeu). O regime de kennismigrant (migrante altamente qualificado) e a via mais usada por qualificados: dispensa o teste de mercado de trabalho, mas exige empregador reconhecido pela IND (recognised sponsor) e cumprimento do piso salarial (5.942 euros/mes para 30+, 4.357 para sub-30, 3.122 reduzido para recem-formados, valores 2026 que excluem ferias). Recem-formados por universidade holandesa podem usar o zoekjaar (residencia de orientacao, 1 ano) para procurar emprego ou empreender sem restricao de horas. Profissoes regulamentadas exigem reconhecimento: na saude e obrigatorio o registro no BIG register sob a lei BIG (Wet BIG) antes de exercer e de usar o titulo protegido. Beneficio fiscal: a regra dos 30% (remuneracao isenta para cobrir custos extra do expatriado) continua em 30% em 2026, mas cai para 27% a partir de 1 de janeiro de 2027 para quem comecou em 2024 ou depois, com padrao de renda elevado para 50.436 euros (38.388 euros para menores de 30 com mestrado). Empreendedores: norte-americanos tem via simplificada pelo DAFT (capital de 4.500 euros, sem sistema de pontos, taxa IND de 423 euros em 2026); outras nacionalidades passam pela residencia de self-employed avaliada por sistema de pontos da IND; startups inovadoras usam o visto de startup de 1 ano com facilitador reconhecido.",
    "opportunityWindows": [
      "Escassez estrutural e persistente em TI, engenharia, tecnica e saude, mantida pelo UWV mesmo com o esfriamento geral do mercado",
      "Construcao em alta: pedreiros e assentadores entraram na lista kansrijk de 2026, refletindo demanda por mao de obra pratica",
      "Janela para recem-formados em universidade holandesa via zoekjaar com piso salarial reduzido (3.122 euros), que viabiliza contratacao por PMEs e startups",
      "Beneficio fiscal de expatriado ainda em 30% durante 2026, antes da reducao para 27% em 2027 - vantagem para quem inicia o vinculo ja em 2026",
      "Via DAFT aberta e barata (4.500 euros de capital) para empreendedores norte-americanos, sem sistema de pontos"
    ],
    "jobBoards": [
      {
        "label": "UWV werk.nl - portal oficial de empregos e mercado de trabalho",
        "url": "https://www.werk.nl/",
        "official": true
      },
      {
        "label": "EURES - portal europeu de mobilidade profissional (vagas oficiais)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "UWV - Kansrijke beroepen (profissoes com boas chances)",
        "url": "https://www.uwv.nl/nl/arbeidsmarktinformatie/kansen-beroep/kansrijke-beroepen",
        "official": true
      },
      {
        "label": "Business.gov.nl - guia oficial para trabalhar e empreender na Holanda",
        "url": "https://business.gov.nl/",
        "official": true
      },
      {
        "label": "IND - regras de residencia e trabalho para estrangeiros",
        "url": "https://ind.nl/en",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "IND - Required amounts income requirements (pisos salariais 2026)",
        "url": "https://ind.nl/en/required-amounts-income-requirements",
        "official": true
      },
      {
        "label": "UWV - Kansrijke beroepen 2025-2026",
        "url": "https://www.uwv.nl/nl/arbeidsmarktinformatie/kansen-beroep/kansrijke-beroepen",
        "official": true
      },
      {
        "label": "UWV - Arbeidsmarkt opnieuw iets minder krap, alsnog honderden beroepen kansrijk",
        "url": "https://www.uwv.nl/nl/nieuws/arbeidsmarkt-opnieuw-iets-minder-krap-alsnog-honderden-beroepen-kansrijk",
        "official": true
      },
      {
        "label": "CBS - Unemployment down in April (abril 2026)",
        "url": "https://www.cbs.nl/en-gb/news/2026/21/unemployment-down-in-april",
        "official": true
      },
      {
        "label": "CBS - Labour market dashboard",
        "url": "https://www.cbs.nl/en-gb/visualisations/labour-market-dashboard",
        "official": true
      },
      {
        "label": "CBS - Turnover in accommodation and food services Q1 2026",
        "url": "https://www.cbs.nl/en-gb/news/2026/23/turnover-in-accommodation-and-food-services-sector-up-by-2-2-percent-in-q1",
        "official": true
      },
      {
        "label": "Business.gov.nl - The expat scheme (30% / 27% ruling)",
        "url": "https://business.gov.nl/staff/employing-staff/the-expat-scheme-30-percent-ruling-in-the-netherlands/",
        "official": true
      },
      {
        "label": "Business.gov.nl - Work permit employees (TWV/GVVA)",
        "url": "https://business.gov.nl/regulations/work-permit-employees/",
        "official": true
      },
      {
        "label": "Business.gov.nl - Residence permit for orientation year (zoekjaar)",
        "url": "https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-orientation-year/",
        "official": true
      },
      {
        "label": "IND - Residence permit self-employed person",
        "url": "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person",
        "official": true
      },
      {
        "label": "Government.nl - BIG register / Individual Healthcare Professions Act",
        "url": "https://www.bigregister.nl/en",
        "official": true
      },
      {
        "label": "EURES - European employment mobility portal",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Jobted.nl - salarios medios (agregador, base CBS/CAO, nao oficial)",
        "url": "https://www.jobted.nl/salaris",
        "official": false
      },
      {
        "label": "Monetise / salarisperberoep.nl - salarios por setor (comunidade, nao oficial)",
        "url": "https://monetise.nl/salaris-werk/gemiddeld-salaris-in-nederland-2026-cijfers-uitgelegd-per-sector/",
        "official": false
      }
    ]
  },
  "hu": {
    "updatedAt": "2026-06-22",
    "overview": "A Hungria fechou o primeiro semestre de 2026 com um mercado de trabalho apertado e ainda marcado por escassez estrutural de mão de obra. Segundo o Escritório Central de Estatística (KSH), a taxa de desemprego ficou em 4,5% em abril de 2026, abaixo da média da União Europeia, com cerca de 4,62 milhões de pessoas ocupadas e taxa de emprego de 74,7% na faixa de 15 a 64 anos. O salário bruto médio mensal subiu para 772.200 forints e o líquido para 541.200 forints, um avanço anual de 9% no bruto e 11,2% no líquido, sinal de pressão salarial persistente puxada pela falta de trabalhadores. A EURES descreve a escassez como cada vez mais estrutural, concentrada na construção, em serviços pessoais e em ocupações operacionais da indústria, transporte e mineração.\n\nPara o estrangeiro, porém, o cenário ganhou um obstáculo político relevante. A partir de 1º de janeiro de 2025, o governo cortou pela metade a cota anual de autorizações de residência para emprego e de trabalhadores convidados, de 65.000 para 35.000, com o discurso oficial de proteger o trabalhador doméstico. As autorizações de trabalho passaram a ser liberadas apenas para nacionais de países que cumprem critérios de readmissão, e em junho de 2026 a categoria de guest worker deixou de aceitar novos pedidos. Na prática, oportunidades existem e são reais nos setores em alta, mas a porta de entrada para quem vem de fora da UE está mais estreita e burocrática do que em anos anteriores, o que torna o EU Blue Card e o caminho do autoemprego rotas mais seguras para profissionais qualificados.",
    "hotSectors": [
      "Tecnologia da informacao e novas tecnologias (incluindo IA e ciberseguranca)",
      "Industria automotiva e fabricacao de veiculos (inclui baterias e eletromobilidade)",
      "Energia renovavel",
      "Industria farmaceutica e quimica",
      "Transporte e logistica",
      "Turismo e setor HORECA (hoteis, restaurantes, cafes)",
      "Construcao civil",
      "Saude e assistencia social",
      "Engenharia mecanica",
      "Servicos compartilhados e centros de negocios (financeiro, contabilidade, atendimento ao cliente, RH)"
    ],
    "coolingSectors": [
      "Agricultura tradicional",
      "Metalurgia e industria do metal",
      "Processamento de alimentos",
      "Marcenaria e trabalho com madeira",
      "Confeccao e setor textil/vestuario"
    ],
    "inDemandRoles": [
      {
        "role": "Trabalhadores da construcao civil (pedreiros e oficios afins, exceto eletricistas)",
        "note": "Grupo ocupacional com maior incidencia de escassez segundo a EURES em 2024-2025."
      },
      {
        "role": "Motoristas de caminhao pesado e carreta",
        "note": "Escassez recorrente apontada pela EURES no setor de transporte e logistica."
      },
      {
        "role": "Cozinheiros e profissionais de HORECA",
        "note": "Demanda forte ligada ao crescimento do turismo."
      },
      {
        "role": "Desenvolvedores de software e engenheiros de TI",
        "note": "IA, ciberseguranca e desenvolvimento entre as funcoes mais bem pagas; experiencia de 3 anos pode dispensar diploma no Blue Card."
      },
      {
        "role": "Engenheiros mecanicos e de producao",
        "note": "Puxados pela industria automotiva e de manufatura."
      },
      {
        "role": "Medicos e enfermeiros",
        "note": "Setor de saude com vagas abertas; profissoes regulamentadas com reconhecimento automatico para diplomas da UE."
      },
      {
        "role": "Trabalhadores operacionais de industria, mineracao, transporte e construcao",
        "note": "Categoria de 'laborers' com escassez ampla."
      },
      {
        "role": "Profissionais de servicos pessoais",
        "note": "Escassez apontada pela EURES, embora tambem apareca como excedente em algumas regioes."
      },
      {
        "role": "Profissionais de centros de servicos compartilhados (contabilidade, financeiro, atendimento, RH)",
        "note": "Budapeste concentra centros de negocios multinacionais."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao (desenvolvimento, IA, ciberseguranca)",
        "advice": "E o caminho mais favoravel para o estrangeiro qualificado. As funcoes estao entre as mais bem pagas (de 1,2 a mais de 2 milhoes de forints/mes em niveis senior segundo agregadores de mercado) e o EU Blue Card aceita, desde 2025, candidatos com pelo menos 3 anos de experiencia relevante em TI, ciberseguranca e IA mesmo sem diploma universitario. Budapeste concentra a maioria das vagas e dos centros de servicos multinacionais, onde o ingles costuma bastar."
      },
      {
        "area": "Saude (medicos, enfermeiros, dentistas, farmaceuticos)",
        "advice": "Profissoes regulamentadas. Diplomas obtidos na UE tem reconhecimento automatico (decisao em ate 3 meses). Para diplomas de fora da UE, o reconhecimento e mais longo e exige validacao pelo orgao competente; enfermagem e qualificacoes de nivel secundario sao reconhecidas pelo National Healthcare Service Center, nao pela Autoridade Educacional. Quem for efetivamente exercer precisa de registro operacional emitido pela Direcao-Geral de Hospitais. Ha vagas, mas o conhecimento de hungaro e praticamente indispensavel no atendimento."
      },
      {
        "area": "Engenharia e industria (mecanica, automotiva, energia)",
        "advice": "Demanda solida puxada pela industria automotiva, baterias e energia renovavel. Engenheiros com diploma e ingles tecnico encontram espaco nas multinacionais; a arquitetura tambem tem reconhecimento automatico para diplomas da UE. Vale buscar empresas que ja patrocinam Blue Card."
      },
      {
        "area": "Oficios e construcao (pedreiros, soldadores, eletricistas)",
        "advice": "Ha escassez clara, mas a rota de trabalhador convidado foi praticamente fechada para novos pedidos em 2026 e a cota geral foi cortada. Quem nao for da UE deve buscar empregador disposto a patrocinar autorizacao de residencia para emprego dentro da cota de 35.000, ou priorizar nacionalidades elegiveis. Sem isso, a entrada formal e dificil mesmo com a vaga existindo."
      },
      {
        "area": "Transporte e logistica (motoristas profissionais)",
        "advice": "Escassez forte de motoristas de caminhao pesado. Exige carteira de habilitacao reconhecida e, para nao europeus, autorizacao de trabalho dentro da cota restrita. Setor com boa absorcao para quem consegue o vinculo formal com empregador."
      },
      {
        "area": "Turismo e HORECA (cozinheiros, atendimento)",
        "advice": "Crescimento puxa a contratacao, sobretudo em Budapeste e no Balaton. Salarios mais modestos e forte sazonalidade. Para o estrangeiro, o desafio segue sendo a autorizacao de trabalho dentro da cota reduzida."
      },
      {
        "area": "Empreendedor / autoempregado",
        "advice": "Quem quer empreender pode usar a autorizacao de residencia para autoemprego (guest self-employment): exige plano de negocio com beneficio economico para a Hungria e renda anual de pelo menos o dobro do salario minimo (cerca de 6,98 milhoes de forints / ~17.600 euros em 2025). Emitida por 1 ano, renovavel ate 3 anos. A rota de socio/gestor de empresa pode exigir comprovar 5 empregados hungaros em tempo integral por 6 meses ou que a presenca do estrangeiro e essencial e gera renda suficiente."
      }
    ],
    "salaries": [
      {
        "role": "Salario bruto medio mensal (todos os setores)",
        "range": "HUF 772.200/mes (liquido HUF 541.200)",
        "source": {
          "label": "KSH - Escritorio Central de Estatistica da Hungria (abril/2026)",
          "url": "https://www.ksh.hu/labour",
          "official": true
        }
      },
      {
        "role": "Engenheiro/desenvolvedor de software (Budapeste)",
        "range": "~HUF 7.004.372/ano (medio); senior ate ~HUF 13 milhoes/ano",
        "source": {
          "label": "PayScale / agregadores de mercado (2025-2026) - referencia de comunidade, nao oficial",
          "url": "https://www.payscale.com/research/HU/Job=Software_Engineer/Salary",
          "official": true
        }
      },
      {
        "role": "Profissionais de TI (IA, software, ciberseguranca) nivel senior",
        "range": "HUF 1,2 milhao a mais de HUF 2 milhoes/mes",
        "source": {
          "label": "Agregadores de mercado (2025) - referencia de comunidade, nao oficial",
          "url": "https://blog.9cv9.com/salary-levels-in-hungary-an-in-depth-analysis-for-2025/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial minimo para EU Blue Card (2025)",
        "range": "HUF 883.671/mes (~EUR 2.166); medicina HUF 706.937",
        "source": {
          "label": "EY Global - thresholds oficiais do Blue Card na Hungria",
          "url": "https://www.ey.com/en_gl/technical/tax-alerts/hungary-announces-increased-salary-thresholds-for-eu-blue-card-applicants-postpones-planned-salary-updates-based-on-occupation-codes",
          "official": true
        }
      },
      {
        "role": "Limiar salarial minimo para EU Blue Card (2026)",
        "range": "HUF 1.001.048/mes; medicina HUF 800.838",
        "source": {
          "label": "EY Global - thresholds oficiais do Blue Card na Hungria",
          "url": "https://www.ey.com/en_gl/technical/tax-alerts/hungary-announces-increased-salary-thresholds-for-eu-blue-card-applicants-postpones-planned-salary-updates-based-on-occupation-codes",
          "official": true
        }
      }
    ],
    "foreignerRules": "A entrada de nao europeus para trabalhar na Hungria ficou mais restrita em 2025-2026. A rota principal e a Autorizacao Unica (Single Permit / residencia para fins de emprego), que combina residencia e autorizacao de trabalho num so pedido, valida por ate 2 anos e renovavel; depende sempre de oferta de emprego de um empregador hungaro. A partir de 1º de janeiro de 2025, a cota combinada de autorizacoes de emprego e de trabalhadores convidados caiu de 65.000 para 35.000 por ano. As autorizacoes passaram a ser concedidas apenas a nacionais de paises que cumprem requisitos de readmissao; entre os elegiveis para guest worker estavam Georgia, Armenia e Filipinas, enquanto Servia e Ucrania nao constavam da lista. Em junho de 2026, a categoria de guest worker deixou de aceitar novos pedidos (quem ja tem o status pode permanecer). Para profissionais altamente qualificados, o EU Blue Card e a melhor rota: exige contrato de no minimo 6 meses, diploma superior ou experiencia relevante, e salario acima do limiar oficial (HUF 883.671/mes em 2025, subindo para HUF 1.001.048 em 2026); desde 2025, 3 anos de experiencia em TI, ciberseguranca ou IA dispensam o diploma, e o prazo de analise e de ate 90 dias. Profissoes regulamentadas (medico, dentista, farmaceutico, enfermeiro, parteira, veterinario e arquiteto) tem reconhecimento automatico para diplomas da UE (decisao em ate 3 meses); diplomas de fora da UE exigem processo de equivalencia, e quem vai exercer na saude precisa de registro operacional junto a Direcao-Geral de Hospitais. Para empreender, ha a residencia para autoemprego (guest self-employment), que exige plano de negocio com beneficio economico para a Hungria e renda anual de pelo menos o dobro do salario minimo (~HUF 6,98 milhoes / EUR 17.600 em 2025), emitida por 1 ano e renovavel ate 3 anos; pedidos via plataforma Enter Hungary, com prazo de ate 60 dias. Cidadaos da UE/EEE nao precisam de autorizacao de trabalho.",
    "opportunityWindows": [
      "Profissionais de TI com 3+ anos de experiencia em desenvolvimento, IA ou ciberseguranca podem usar o EU Blue Card sem diploma universitario desde 2025, com analise em ate 90 dias",
      "Contrato de apenas 6 meses (antes 12) ja habilita o pedido de EU Blue Card, facilitando a entrada de qualificados",
      "Industria automotiva, baterias e energia renovavel em expansao concentram vagas de engenharia em Budapeste e no interior industrial",
      "Centros de servicos compartilhados multinacionais em Budapeste contratam em ingles (financeiro, contabilidade, RH, atendimento)",
      "Escassez estrutural de motoristas de caminhao pesado e de trabalhadores da construcao mantem demanda alta para quem consegue patrocinio dentro da cota",
      "Reconhecimento automatico de diplomas da UE em saude e arquitetura agiliza a insercao de profissionais europeus"
    ],
    "jobBoards": [
      {
        "label": "Virtualis Munkaeropiac Portal (VMP) - portal oficial de vagas do Servico Nacional de Emprego",
        "url": "https://vmp.munka.hu/",
        "official": true
      },
      {
        "label": "Nemzeti Foglalkoztatasi Szolgalat (Servico Nacional de Emprego da Hungria)",
        "url": "https://nfsz.munka.hu/",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional (vagas na Hungria)",
        "url": "https://europa.eu/eures/portal/jv-se/search?locationCodes=hu&lang=en",
        "official": true
      },
      {
        "label": "EURES Hungria (servico para candidatos)",
        "url": "https://eures.munka.hu/Lapok/eures_english/eures_english_jobseekers.aspx",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Informacao do Mercado de Trabalho: Hungria",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-hungary_en",
        "official": true
      },
      {
        "label": "KSH - Escritorio Central de Estatistica da Hungria (Labour)",
        "url": "https://www.ksh.hu/labour",
        "official": true
      },
      {
        "label": "European Labour Authority (ELA) - Escassez e excedentes de mao de obra na Europa 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "OIF - Escritorio Nacional de Estrangeiros da Hungria (EU Blue Card)",
        "url": "https://www.oif.gov.hu/factsheets/eu-blue-card",
        "official": true
      },
      {
        "label": "OIF - Residencia para trabalhadores convidados (guest workers)",
        "url": "https://www.oif.gov.hu/factsheets/residence-permit-for-guest-workers",
        "official": true
      },
      {
        "label": "OIF - Residencia para guest self-employment",
        "url": "https://oif.gov.hu/factsheets/residence-permit-for-guest-self-employment",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card na Hungria",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-hungary_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - Trabalhador autonomo na Hungria",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/self-employed-worker-hungary_en",
        "official": true
      },
      {
        "label": "EY Global - Hungria eleva limiares salariais do EU Blue Card",
        "url": "https://www.ey.com/en_gl/technical/tax-alerts/hungary-announces-increased-salary-thresholds-for-eu-blue-card-applicants-postpones-planned-salary-updates-based-on-occupation-codes",
        "official": false
      },
      {
        "label": "Fragomen - Hungria reduz cota de autorizacoes de emprego e guest worker",
        "url": "https://www.fragomen.com/insights/hungary-significant-reduction-in-quota-for-employment-permit-guest-worker-work-permit.html",
        "official": false
      },
      {
        "label": "GKI Gazdasagkutato - Emprego elevado mas em queda e escassez ampla de mao de obra",
        "url": "https://gki.hu/language/en/2025/07/08/high-but-declining-employment-and-widespread-labour-shortages-in-hungarys-labour-market/",
        "official": false
      },
      {
        "label": "PayScale - Salario de engenheiro de software na Hungria (referencia de comunidade)",
        "url": "https://www.payscale.com/research/HU/Job=Software_Engineer/Salary",
        "official": false
      }
    ]
  },
  "lv": {
    "updatedAt": "2026-06-22",
    "overview": "A Letonia entra em 2026 com um mercado de trabalho apertado e marcado por escassez estrutural de mao de obra. O desemprego ficou estavel em torno de 6,9% em 2025 e recuou para cerca de 6,7% no quarto trimestre, enquanto a taxa de emprego ronda os 71%, praticamente em linha com a media da Uniao Europeia. O salario medio bruto subiu para aproximadamente 1.831 euros por mes no primeiro trimestre de 2026, alta de 4,2% sobre o ano anterior, segundo o Instituto Central de Estatistica. O motor do desequilibrio e demografico: o envelhecimento da populacao e a queda da natalidade encolhem a forca de trabalho ativa e abrem vagas que o pais nao consegue preencher apenas com letoes. Em 2023, trabalhadores de paises terceiros ja respondiam por 7,8% da forca de trabalho, sinal de uma abertura crescente a estrangeiros.\n\nA demanda concentra-se em construcao, industria, saude e tecnologia da informacao. O setor de TIC emprega cerca de 40 mil pessoas e mantem contratacao continua ha anos, com Riga consolidando um ecossistema de startups que cresce acima do esperado para o tamanho do pais. Em contrapartida, o desemprego juvenil e elevado, na faixa de 13,5% a 14,8% em 2025, o que mostra que a porta esta mais aberta para perfis qualificados e tecnicos do que para quem entra sem experiencia. A Letonia tambem se destacou ao emitir mais Cartoes Azuis da UE do que paises maiores, reforcando que o caminho mais rapido para profissionais altamente qualificados passa por esse instrumento.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TIC), incluindo programacao e servicos de TI",
      "Construcao civil e oficios relacionados",
      "Industria e manufatura (metalurgia, maquinas, operadores)",
      "Saude (profissionais medicos e de enfermagem)",
      "Setor financeiro e de seguros",
      "Servicos profissionais, cientificos e tecnicos (engenharia, consultoria)",
      "Transporte e logistica",
      "Energia (eletricidade, gas)"
    ],
    "coolingSectors": [
      "Profissionais associados de negocios e administracao (excesso de oferta)",
      "Profissionais associados de ciencia e engenharia (nivel tecnico)",
      "Processamento de alimentos, marcenaria, vestuario e artesanato",
      "Funcoes administrativas de nivel inicial sem especializacao"
    ],
    "inDemandRoles": [
      {
        "role": "Trabalhadores da construcao e oficios relacionados (exceto eletricistas)",
        "note": "Grupo com maior incidencia de escassez segundo EURES 2024"
      },
      {
        "role": "Trabalhadores de metalurgia, maquinas e oficios relacionados",
        "note": "Forte escassez na industria"
      },
      {
        "role": "Profissionais de saude (medicos, enfermeiros)",
        "note": "Escassez agravada pelo envelhecimento da populacao"
      },
      {
        "role": "Desenvolvedores de software e programadores",
        "note": "Setor de TIC com cerca de 40 mil empregados e contratacao continua"
      },
      {
        "role": "Especialistas em analise de dados e competencias digitais",
        "note": "Empregadores buscam ativamente competencias digitais"
      },
      {
        "role": "Engenheiros e profissionais STEM",
        "note": "Demanda alta em TI, telecomunicacoes e manufatura"
      },
      {
        "role": "Motoristas e profissionais de transporte e logistica",
        "note": "Setor com alta taxa de vagas"
      },
      {
        "role": "Profissionais de servicos administrativos e de apoio",
        "note": "Setor com a maior taxa de vagas (4,0% em 2023)"
      }
    ],
    "byQualification": [
      {
        "area": "Alta qualificacao (diploma superior de 3+ anos)",
        "advice": "O caminho mais vantajoso e o Cartao Azul da UE, com limiar salarial de cerca de 24.720 euros por ano (reduzido para 19.776 euros em profissoes de escassez listadas pelo Conselho de Ministros). A Letonia nao aplica teste de mercado de trabalho ao Cartao Azul, o que acelera a contratacao. Profissoes reguladas (saude, direito, engenharia) exigem comprovacao de que os requisitos legais nacionais foram cumpridos, ou seja, reconhecimento de diploma."
      },
      {
        "area": "Tecnologia e dados",
        "advice": "Setor mais aquecido e mais bem pago do pais (TIC com media de cerca de 3.240 euros por mes). Riga concentra o ecossistema de startups. Vale priorizar empresas que ja patrocinam vistos e usar o Cartao Azul quando o salario qualificar."
      },
      {
        "area": "Oficios tecnicos e construcao",
        "advice": "Construcao e metalurgia sao as maiores areas de escassez. Profissionais com certificacao tecnica e experiencia comprovada tem boa absorcao, mas costumam entrar por permissao de residencia para emprego comum, que exige registro previo da vaga na NVA por pelo menos 10 dias uteis."
      },
      {
        "area": "Saude",
        "advice": "Escassez estrutural de medicos e enfermeiros, mas sao profissoes reguladas. E preciso reconhecimento da qualificacao e, em geral, conhecimento do idioma letao para atendimento. Planejar o reconhecimento de diploma antes de migrar."
      },
      {
        "area": "Empreendedor / fundador de startup",
        "advice": "A via de startup, gerida pela LIAA com comite mensal, foca na inovacao e escalabilidade da ideia, com subsistencia exigida de apenas 500 euros por mes, bem menor que a do autonomo comum (cerca de 2.554 euros por mes). Decisao em ate 60 dias e necessidade de se registrar como membro do conselho de uma empresa em ate 3 meses."
      },
      {
        "area": "Baixa qualificacao / jovens sem experiencia",
        "advice": "Mercado mais dificil: desemprego juvenil entre 13,5% e 14,8% e excedente em funcoes administrativas e de artesanato. Recomenda-se buscar setores de escassez (construcao, industria) com alguma qualificacao tecnica antes de tentar a migracao."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto nacional (todos os setores)",
        "range": "cerca de 1.831 EUR/mes (1o trimestre de 2026)",
        "source": {
          "label": "Instituto Central de Estatistica da Letonia (stat.gov.lv)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "700 EUR/mes (bruto, desde jan/2024)",
        "source": {
          "label": "EURES - Labour Market Information Latvia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-latvia_en",
          "official": true
        }
      },
      {
        "role": "TIC / telecomunicacoes, programacao e servicos de TI",
        "range": "cerca de 3.240 EUR/mes (bruto, 1o tri 2026)",
        "source": {
          "label": "Instituto Central de Estatistica (via LSM)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Atividades financeiras e de seguros",
        "range": "cerca de 3.400 EUR/mes (bruto, 1o tri 2026)",
        "source": {
          "label": "Instituto Central de Estatistica (via LSM)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Atividades profissionais, cientificas e tecnicas",
        "range": "cerca de 2.356 EUR/mes (bruto, 1o tri 2026)",
        "source": {
          "label": "Instituto Central de Estatistica (via LSM)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Energia (eletricidade, gas, vapor)",
        "range": "cerca de 2.567 EUR/mes (bruto, 1o tri 2026)",
        "source": {
          "label": "Instituto Central de Estatistica (via LSM)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Saude e assistencia social",
        "range": "cerca de 1.841 EUR/mes (bruto, 2025)",
        "source": {
          "label": "Instituto Central de Estatistica (via LSM)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Administracao publica e defesa",
        "range": "cerca de 2.052 EUR/mes (bruto, 1o tri 2026)",
        "source": {
          "label": "Instituto Central de Estatistica (via LSM)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Salario liquido medio nacional",
        "range": "cerca de 1.127 EUR/mes (2023)",
        "source": {
          "label": "EURES - Labour Market Information Latvia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-latvia_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE/Suica nao precisam de autorizacao e podem comecar a trabalhar logo apos assinar o contrato. Para nacionais de paises terceiros, a Letonia opera um sistema de permissao unica que combina residencia e direito ao trabalho, sem documento separado de work permit; o direito ao emprego e endossado dentro do visto ou da permissao de residencia, emitido pelo OCMA/PMLP (Oficina de Cidadania e Assuntos de Migracao). Regra-chave do teste de mercado: a vaga deve ficar registrada e aberta na NVA (Agencia Estatal de Emprego) por pelo menos 10 dias uteis antes de o estrangeiro poder ser contratado, salvo isencoes. O fluxo de emprego de longo prazo e: empregador registra a vaga na NVA, submete patrocinio ao OCMA com contrato e documentos de educacao, o estrangeiro pede a residencia em missao diplomatica, o OCMA emite a residencia com direito a trabalho e o trabalhador se registra na Receita (VID). Para profissionais altamente qualificados existe o Cartao Azul da UE, que NAO exige teste de mercado e nao prioriza cidadaos da UE; requer diploma superior de 3 anos ou mais (ou requisitos legais cumpridos em profissoes reguladas), contrato de pelo menos 1 ano, seguro saude e salario bruto de pelo menos 24.720 euros/ano (1,5x a media), reduzido para 19.776 euros/ano (1,2x) em profissoes de escassez do Regulamento do Gabinete. O Cartao Azul vale ate 5 anos ou o periodo do contrato; prazo de analise de ate 10 dias uteis; taxas de cerca de 100 euros (analise em 10 dias) ou 200 euros (5 dias), mais 15 euros pela producao do cartao (30 euros acelerado). Profissoes reguladas (saude, direito, engenharia, etc.) exigem reconhecimento da qualificacao. Para autonomos, a subsistencia exigida em 2026 e de cerca de 2.554 euros/mes mais plano de negocios e comprovantes; a partir de 2026 ha exigencias documentais mais rigorosas (extrato do registro comercial, declaracao fiscal, extrato bancario dos ultimos 6 meses e comprovante de moradia). A via de startup inovador exige subsistencia de apenas 500 euros/mes e e avaliada pela LIAA.",
    "opportunityWindows": [
      "Cartao Azul da UE sem teste de mercado de trabalho: contratacao mais rapida para profissionais altamente qualificados, com a Letonia emitindo mais Cartoes Azuis que paises maiores",
      "Limiar salarial reduzido (1,2x a media, cerca de 19.776 EUR/ano) para profissoes de escassez listadas no Regulamento do Gabinete",
      "Setor de TIC em contratacao continua, com salarios entre os mais altos do pais e ecossistema de startups em Riga",
      "Escassez estrutural em construcao, industria e saude pelo envelhecimento da populacao, abrindo vagas dificeis de preencher com mao de obra local",
      "Via de startup inovador da LIAA com subsistencia baixa (500 EUR/mes) e decisao em ate 60 dias, atrativa para fundadores",
      "Procedimento acelerado de analise (5 dias uteis) disponivel mediante taxa adicional"
    ],
    "jobBoards": [
      {
        "label": "NVA - Portal de CV e Vagas da Agencia Estatal de Emprego (maior base oficial de vagas)",
        "url": "https://www.nva.gov.lv/en/vacancies",
        "official": true
      },
      {
        "label": "NVA - Registro de vagas e selecao de pessoal (para empregadores)",
        "url": "https://www.nva.gov.lv/en/registration-vacancies-and-personnel-selection",
        "official": true
      },
      {
        "label": "EURES - Portal oficial de empregos da UE (Letonia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "LIAA - Vagas e apoio a investidores e startups",
        "url": "https://www.liaa.gov.lv/en/vacancies",
        "official": true
      },
      {
        "label": "CV.lv / CV-Online (portal privado dos paises balticos)",
        "url": "https://cv.lv/en",
        "official": false
      },
      {
        "label": "VisiDarbi.lv (agregador de vagas privado)",
        "url": "https://www.visidarbi.lv/en",
        "official": false
      },
      {
        "label": "Prakse.lv (base principal de estagios)",
        "url": "https://www.prakse.lv",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "EURES - Labour Market Information: Latvia (Comissao Europeia)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-latvia_en",
        "official": true
      },
      {
        "label": "NVA - Nodarbinatibas valsts agentura (Agencia Estatal de Emprego)",
        "url": "https://www.nva.gov.lv/en",
        "official": true
      },
      {
        "label": "Instituto Central de Estatistica da Letonia (stat.gov.lv)",
        "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
        "official": true
      },
      {
        "label": "EU Immigration Portal - EU Blue Card Latvia (Comissao Europeia)",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-latvia_en",
        "official": true
      },
      {
        "label": "PMLP / OCMA - Employment of foreigners",
        "url": "https://www.pmlp.gov.lv/en/employment-foreigners",
        "official": true
      },
      {
        "label": "PMLP / OCMA - Self-employed person",
        "url": "https://www.pmlp.gov.lv/en/self-employed-person-0",
        "official": true
      },
      {
        "label": "PMLP / OCMA - Innovative product creation (start-up activities)",
        "url": "https://www.pmlp.gov.lv/en/innovative-product-creation-or-development-start-activities-0",
        "official": true
      },
      {
        "label": "LIAA - Investment and Development Agency of Latvia",
        "url": "https://www.liaa.gov.lv/en",
        "official": true
      },
      {
        "label": "ELA / EURES - Labour shortages and surpluses in Europe 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "LSM (radio e TV publica da Letonia) - dados de salario e Cartao Azul",
        "url": "https://eng.lsm.lv/article/economy/employment/",
        "official": true
      }
    ]
  },
  "lt": {
    "updatedAt": "2026-06-22",
    "overview": "A Lituania vive um mercado de trabalho apertado pela demografia, com escassez estrutural de mao de obra que pressiona salarios pra cima e abre portas para estrangeiros qualificados. O desemprego ronda 6,7% a 6,8% (Eurostat/EURES, dado de 2023-2025) e a taxa de emprego subiu para cerca de 74% em 2025, acima da media da Uniao Europeia. O salario bruto medio mensal alcancou 2.427,6 euros no terceiro trimestre de 2025 e 2.526,8 euros no quarto trimestre, segundo o State Data Agency (portal oficial osp.stat.gov.lt), com crescimento anual de 8,5%. A expansao da forca de trabalho registrada entre 2022 e 2024, puxada pela chegada de refugiados ucranianos, parou em 2025 e deve reverter em 2026 e 2027 conforme o declinio populacional natural retorna, o que mantem a escassez de trabalhadores como tracо permanente.\n\nOs setores de tecnologia, fintech e servicos financeiros sao os mais aquecidos e mais bem pagos, enquanto a industria, a construcao e os transportes concentram a maior carencia de mao de obra tecnica e operacional. Para o estrangeiro, a janela esta nos cargos da lista de profissoes em falta e nos perfis altamente qualificados, que ganharam isencao da cota anual. Vilnius, Kaunas e Klaipeda formam o eixo economico, com Vilnius liderando em TI, biotecnologia e fintech. Empreender e viavel pela Startup Visa, gerida pela Startup Lithuania junto a Invest Lithuania, voltada a negocios inovadores.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TI/ICT), com emprego que dobrou desde 2018",
      "Fintech e servicos financeiros e de seguros (setor mais bem pago do pais)",
      "Atividades profissionais, cientificas e tecnicas",
      "Industria de transformacao (moveis, alimentos, plasticos, metais, eletronicos)",
      "Construcao e trabalhos especializados de obra",
      "Transporte e logistica (motoristas de caminhao pesado)",
      "Energia renovavel e manufatura avancada (novos cargos abertos para 2026)",
      "Servicos administrativos e de apoio"
    ],
    "coolingSectors": [
      "Agricultura (emprego caiu cerca de um quarto)",
      "Cargos administrativos e de associados de negocios (excedente de oferta)",
      "Trabalho braçal nao qualificado em mineracao, construcao, manufatura e transporte (excedente)",
      "Profissionais associados das areas juridica, social e cultural (excedente)",
      "Motoristas de carro e funcionarios gerais sem qualificacao (excedente)"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedor de software / engenheiro de software",
        "note": "Demanda alta com crescimento anual estimado em 15%; salario medio do setor TI chegou a 4.259 euros brutos no 1o semestre de 2025"
      },
      {
        "role": "Cientista de dados",
        "note": "Perfil de alta demanda no setor TI/AI"
      },
      {
        "role": "Especialista em ciberseguranca",
        "note": "Alta demanda no ecossistema digital e fintech"
      },
      {
        "role": "Engenheiro de IA",
        "note": "Setor emergente, cargos abertos para 2026"
      },
      {
        "role": "Eletricista",
        "note": "Profissao tecnica em falta (lista de escassez)"
      },
      {
        "role": "Soldador",
        "note": "Profissao tecnica em falta"
      },
      {
        "role": "Motorista de caminhao pesado",
        "note": "Forte carencia no setor de transporte e logistica"
      },
      {
        "role": "Operador de maquinas (metal, madeira, plastico, processamento de alimentos)",
        "note": "Grupo ocupacional com maior incidencia de escassez"
      },
      {
        "role": "Encanador",
        "note": "Profissao de obra em falta"
      },
      {
        "role": "Trabalhador especializado de construcao / assentador de concreto",
        "note": "Construcao entre os setores mais pressionados"
      },
      {
        "role": "Profissional de fintech e servicos financeiros",
        "note": "Setor mais bem remunerado, ~4.500 euros brutos de media"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao (desenvolvimento, dados, IA, ciberseguranca)",
        "advice": "Melhor janela para estrangeiro qualificado. Mire o EU Blue Card ou o estatuto de profissional altamente qualificado, que isenta da cota anual. Vilnius concentra as vagas e paga acima da media nacional (medias de setor entre 3.232 e 4.700 euros brutos). Tenha portfolio e ingles fluente; lituano nao costuma ser exigido em empresas globais."
      },
      {
        "area": "Engenharia e manufatura avancada",
        "advice": "Procure cargos na lista de profissoes em falta para entrar pelo limiar salarial reduzido (1,2x a media). Industria de moveis, alimentos, metais e eletronicos contrata em Kaunas e Klaipeda. Diploma reconhecido e experiencia tecnica abrem caminho rapido."
      },
      {
        "area": "Oficios tecnicos (eletricista, soldador, encanador, operador de maquinas)",
        "advice": "Demanda forte e constante. Certificacoes profissionais e comprovacao de experiencia valem mais que diploma universitario. Setores de construcao e industria sao porta de entrada via permissao de trabalho e cota."
      },
      {
        "area": "Transporte e logistica (motoristas)",
        "advice": "Carencia aguda de motoristas de caminhao pesado. Exige CNH categoria correspondente, codigo CPC e, em muitos casos, processo via cota de trabalhadores de terceiros paises. Confirme reconhecimento da habilitacao."
      },
      {
        "area": "Financas e fintech",
        "advice": "Setor mais bem pago do pais. Para nao europeus, o limiar salarial do Blue Card e atingido com folga. Qualificacao em contabilidade, compliance, risco e produto financeiro e valorizada; ingles essencial."
      },
      {
        "area": "Empreendedores e fundadores",
        "advice": "A Startup Visa e o caminho para nao europeus com negocio inovador. Exige prototipo ou MVP, aprovacao da Startup Lithuania e prova de subsistencia acima de 12.000 euros no primeiro ano. Residencia inicial de 2 anos, extensivel ate 5."
      },
      {
        "area": "Baixa qualificacao / trabalho braçal",
        "advice": "Mercado em excedente para perfis sem qualificacao e cota de terceiros paises reduzida para 24.830 em 2025. Chance menor; priorize requalificacao em um oficio tecnico em falta antes de migrar."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (bruto mensal)",
        "range": "2.427,6 euros (3o tri 2025); 2.526,8 euros (4o tri 2025)",
        "source": {
          "label": "State Data Agency / Statistics Lithuania",
          "url": "https://osp.stat.gov.lt/en_GB/darbo-uzmokestis-ir-darbo-sanaudos",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da Uniao Europeia e do Espaco Economico Europeu trabalham livremente, sem permissao. Para nacionais de terceiros paises o caminho usual e a Single Permit (permissao de residencia temporaria com direito a trabalho), em geral precedida de permissao de trabalho emitida pela Public Employment Service (Uzimtumo tarnyba) e residencia pela Migration Department (Migracijos departamentas). Em 2025 a cota geral de trabalhadores de terceiros paises foi reduzida para 24.830 (ante 36.663 usados em 2024) e deixou de ser dividida por setor economico. Profissoes da lista de escassez tem tramite facilitado. Mudanca de empregador so e permitida apos seis meses com o empregador inicial. Penalidades por trabalho ilegal subiram (2.772 a 11.088 euros para pessoas juridicas).\n\nProfissionais altamente qualificados e o EU Blue Card sao a rota premium e ficam isentos da cota anual. O limiar salarial e de 1,5 vez o salario bruto medio nacional (cerca de 3.020 a 3.334 euros/mes, conforme a media vigente), caindo para 1,2 vez (cerca de 2.416 euros/mes) quando a ocupacao consta na lista de profissoes de alto valor agregado em falta. Exige contrato ou oferta vinculante de no minimo 6 meses e qualificacao superior reconhecida. O Blue Card vale 36 meses ou a duracao do contrato mais 3 meses. Decisoes saem em 1 mes no procedimento padrao ou 15 dias no acelerado. Profissoes regulamentadas (saude, direito, engenharia em alguns ramos, ensino) exigem reconhecimento formal do diploma e, quando aplicavel, registro profissional. Para empreender, a Startup Visa concede residencia temporaria de 2 anos, extensivel ate 5, mediante negocio inovador aprovado pela Startup Lithuania, prototipo ou MVP e prova de subsistencia acima de 12.000 euros no primeiro ano (ate quatro fundadores por startup). Sempre confirmar valores atualizados na Migration Department e no Ministerio da Seguranca Social e do Trabalho.",
    "opportunityWindows": [
      "Profissionais de TI, dados, IA e ciberseguranca: setor em expansao continua, isencao de cota via Blue Card e salarios bem acima da media nacional",
      "Ocupacoes da lista de escassez (eletricista, soldador, motorista de caminhao pesado, operadores de maquina, encanador): limiar salarial reduzido de 1,2x e tramite facilitado",
      "Energia renovavel e manufatura avancada: cerca de 100 novos cargos em falta abertos para 2026, ampliando o leque de vistos",
      "Fintech e servicos financeiros: setor mais bem pago, atinge o limiar do Blue Card com folga",
      "Empreendedores de tecnologia: Startup Visa com apoio de Startup Lithuania e Invest Lithuania e subsistencia exigida de apenas 12.000 euros no 1o ano",
      "Pressao demografica: forca de trabalho deve encolher em 2026 e 2027, mantendo a escassez e o crescimento salarial projetado (7,1% em 2026)"
    ],
    "jobBoards": [
      {
        "label": "Uzimtumo tarnyba (Public Employment Service) - base nacional oficial de vagas",
        "url": "https://uzt.lt/en",
        "official": true
      },
      {
        "label": "EURES Lituania (rede oficial de empregos da UE, operada pela Uzimtumo tarnyba)",
        "url": "https://eures.uzt.lt/en/living-and-working-in-lithuania1",
        "official": true
      },
      {
        "label": "Work in Lithuania (iniciativa oficial para profissionais internacionais)",
        "url": "https://workinlithuania.com",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "EURAXESS Lithuania (vagas para pesquisadores e academicos)",
        "url": "https://www.euraxess.lt/lithuania/information-assistance/job-opportunities",
        "official": true
      },
      {
        "label": "CVbankas.lt (maior portal privado de empregos do pais)",
        "url": "https://en.cvbankas.lt",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "EURES - Informacao do mercado de trabalho: Lituania",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-lithuania_en",
        "official": true
      },
      {
        "label": "State Data Agency / Statistics Lithuania - salarios e custos do trabalho",
        "url": "https://osp.stat.gov.lt/en_GB/darbo-uzmokestis-ir-darbo-sanaudos",
        "official": true
      },
      {
        "label": "Statistics Lithuania - emprego e desemprego",
        "url": "https://osp.stat.gov.lt/en/gyventoju-uzimtumo-tyrimo-duomenys",
        "official": true
      },
      {
        "label": "Migration Department (Migracijos departamentas) - trabalhador altamente qualificado",
        "url": "https://www.migracija.lt/en/as-esu-aukstos-kvalifikacijos-darbuotojas",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card na Lituania",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-lithuania_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - Previsao economica para a Lituania",
        "url": "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/lithuania/economic-forecast-lithuania_en",
        "official": true
      },
      {
        "label": "Cedefop - Previsao de competencias Lituania 2025",
        "url": "https://www.cedefop.europa.eu/files/skills_forecast_-_lithuania_2025.pdf",
        "official": true
      },
      {
        "label": "OECD - Economic Surveys: Lithuania 2025",
        "url": "https://www.oecd.org/en/publications/oecd-economic-surveys-lithuania-2025_4abf1ea5-en.html",
        "official": true
      },
      {
        "label": "European Labour Authority - Relatorio de escassez e excedente de mao de obra 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "Startup Lithuania - Startup Visa",
        "url": "https://startupvisalithuania.com",
        "official": true
      },
      {
        "label": "Newland Chase - Mudancas na imigracao da Lituania 2025",
        "url": "https://newlandchase.com/lithuania-immigration-changes-for-2025/",
        "official": false
      },
      {
        "label": "Deloitte Lituania - mudanca no salario bruto medio e regulacao do emprego de estrangeiros",
        "url": "https://www.deloitte.com/lt/en/services/legal/perspectives/changes-in-the-regulation-of-the-employment-of-foreigners.html",
        "official": false
      },
      {
        "label": "Work in Lithuania - salario medio 2025",
        "url": "https://workinlithuania.com/blog/lithuania-average-salary/",
        "official": false
      },
      {
        "label": "LRT - salario medio sobe (dados Sodra)",
        "url": "https://www.lrt.lt/en/news-in-english/19/2849256/average-monthly-wage-in-lithuania-rises-to-eur1-514-sodra",
        "official": false
      },
      {
        "label": "Glassdoor - salario de desenvolvedor de software em Vilnius",
        "url": "https://www.glassdoor.com/Salaries/vilnius-software-developer-salary-SRCH_IL.0,7_IM1551_KO8,26.htm",
        "official": false
      },
      {
        "label": "levels.fyi - salario de engenheiro de software em Vilnius",
        "url": "https://www.levels.fyi/t/software-engineer/locations/vilnius-ltu",
        "official": false
      }
    ]
  },
  "lu": {
    "updatedAt": "2026-06-22",
    "overview": "Luxemburgo entrou em 2026 com um mercado de trabalho que combina salários entre os mais altos da Europa com uma taxa de desemprego em alta moderada. Segundo a ADEM e o portal de estatísticas do governo, o desemprego ajustado ficou estável em 6,3% no início de 2026, com cerca de 20.140 candidatos a emprego residentes registrados no fim de abril, alta de 8,3% em doze meses. O aumento concentrou-se de forma notável entre os perfis altamente qualificados, cujo número subiu 17,8% no ano, sinal de que mesmo o mercado de colarinho branco esfriou na margem. Ainda assim, o estoque de vagas disponíveis na ADEM cresceu 3,4% e seguia em 7.448 no fim de abril de 2026, mostrando demanda persistente em nichos específicos.\n\nO país é estruturalmente dependente de mão de obra estrangeira: trabalhadores transfronteiriços, vindos sobretudo de França, Bélgica e Alemanha, respondem por cerca de 47% do emprego assalariado, e mais de 60% da força de trabalho não é de nacionalidade luxemburguesa. O motor econômico continua sendo o setor financeiro, seguido por serviços profissionais, tecnologia, saúde e instituições europeias. Para o imigrante de terceiros países, a porta de entrada mais rápida é a lista oficial de profissões em penúria da ADEM, que dá procedimento acelerado de autorização de trabalho. O salário médio bruto anual em tempo integral gira em torno de 75.919 euros segundo a STATEC, com mediana bem menor, perto de 58.126 euros, o que revela forte dispersão entre setores altamente remunerados, como finanças, e setores de base, como hotelaria.",
    "hotSectors": [
      "Finanças e banca (gestão de risco de crédito, front office de mercados, análise e engenharia financeira)",
      "Auditoria, contabilidade e controle financeiro",
      "Jurídico e compliance (consultoria jurídica e defesa)",
      "Tecnologia da informação (administração de sistemas, suporte e expertise técnica, desenvolvimento de software)",
      "Saúde e trabalho social (enfermagem, cuidados ao paciente, intervenção socioeducativa, educação infantil)",
      "Indústria, manutenção e engenharia (manutenção mecânica industrial, equipamentos operacionais, qualidade industrial)",
      "Construção (instalação e restauração de telhados)",
      "Pesquisa e desenvolvimento industrial",
      "Serviços às empresas e trabalho temporário",
      "Setor público e instituições europeias"
    ],
    "coolingSectors": [
      "Construção civil (queda no número de empregados segundo a STATEC, apesar de telhadistas em penúria)",
      "Indústria manufatureira (retração no emprego no fim de 2025)",
      "Hotelaria e restauração (salários mais baixos do país, alta rotatividade)",
      "Funções administrativas e secretariado (entre as ocupações com mais candidatos disponíveis e maior alta de desemprego)",
      "Motoristas e operadores de máquinas móveis (listados pela EURES como ocupações em excesso de oferta)",
      "Atendentes e auxiliares administrativos gerais (excesso de candidatos)"
    ],
    "inDemandRoles": [
      {
        "role": "Analista de risco de crédito e bancário",
        "note": "Setor financeiro e jurídico; consta na lista oficial de penúria da ADEM 2026"
      },
      {
        "role": "Gestor de clientes bancários",
        "note": "Lista de penúria ADEM; banca privada e corporativa"
      },
      {
        "role": "Front office de mercados financeiros",
        "note": "Lista de penúria ADEM; perfis com escassez crônica de candidatos"
      },
      {
        "role": "Auditor e controlador financeiro / contador",
        "note": "Lista de penúria ADEM; Big Four e fundos de investimento"
      },
      {
        "role": "Consultor jurídico e advogado de defesa",
        "note": "Lista de penúria ADEM; profissão regulamentada (exige homologação)"
      },
      {
        "role": "Administrador de sistemas de TI",
        "note": "Lista de penúria ADEM; ocupações de TI lideram a alta de demanda na ADEM"
      },
      {
        "role": "Especialista em suporte e expertise técnica de sistemas",
        "note": "Lista de penúria ADEM"
      },
      {
        "role": "Desenvolvedor de software / estudos em TI",
        "note": "Lista de penúria ADEM; perfis especializados chegam a 180 mil euros/ano"
      },
      {
        "role": "Enfermeiro generalista",
        "note": "Lista de penúria ADEM; profissão de saúde regulamentada (exige licença)"
      },
      {
        "role": "Profissional de cuidados de higiene e conforto ao paciente",
        "note": "Lista de penúria ADEM; saúde regulamentada"
      },
      {
        "role": "Assistente social e educador infantil",
        "note": "Lista de penúria ADEM; intervenção socioeducativa"
      },
      {
        "role": "Técnico de manutenção mecânica industrial",
        "note": "Lista de penúria ADEM; novo na lista em 2025"
      },
      {
        "role": "Técnico de instalação e manutenção de equipamentos industriais e operacionais",
        "note": "Lista de penúria ADEM 2026"
      },
      {
        "role": "Gestor e engenheiro de qualidade industrial",
        "note": "Lista de penúria ADEM"
      },
      {
        "role": "Reparador de carroceria de veículos",
        "note": "Lista de penúria ADEM; novo na lista em 2025"
      },
      {
        "role": "Telhadista (instalação e restauração de telhados)",
        "note": "Lista de penúria ADEM; construção"
      },
      {
        "role": "Pesquisador e engenheiro de P&D industrial",
        "note": "Lista de penúria ADEM"
      }
    ],
    "byQualification": [
      {
        "area": "Finanças, banca e contabilidade",
        "advice": "É o caminho mais valorizado de Luxemburgo. Diplomas em finanças, economia, contabilidade ou direito tributário, somados a certificações internacionais (ACCA, CFA) e inglês fluente, abrem vagas em bancos, fundos e nas Big Four. Várias funções estão na lista de penúria da ADEM, o que garante autorização de trabalho acelerada para estrangeiros. O setor paga a maior média do país, cerca de 113 mil euros brutos anuais."
      },
      {
        "area": "Tecnologia da informação",
        "advice": "Administração de sistemas, suporte técnico e desenvolvimento de software constam na lista de penúria e lideram a alta de demanda na ADEM. Vale investir em cloud, cibersegurança e fintech, áreas onde perfis sêniores ultrapassam 120 mil euros e especialistas chegam a 180 mil. Não é profissão regulamentada, então a recognição de diploma costuma ser dispensada."
      },
      {
        "area": "Saúde (enfermagem e cuidados)",
        "advice": "Há penúria estrutural de enfermeiros e cuidadores. A demanda é alta, mas a profissão é regulamentada: é obrigatório obter a licença de exercício do Ministério da Saúde e, se o diploma foi obtido fora, passar pelo reconhecimento de qualificações. O francês e o luxemburguês contam muito no atendimento. Enfermeiros qualificados ganham em torno de 70 mil euros anuais."
      },
      {
        "area": "Jurídico e compliance",
        "advice": "Consultoria jurídica está na lista de penúria, mas a profissão de advogado é regulamentada e exige homologação do diploma de direito mais cursos complementares de direito luxemburguês. Para compliance e legal em fundos e bancos, o requisito de homologação é menor e o multilinguismo (francês, inglês, alemão) é decisivo."
      },
      {
        "area": "Engenharia, indústria e manutenção",
        "advice": "Manutenção mecânica industrial, qualidade industrial, equipamentos operacionais e reparo de carroceria entraram na lista de penúria. Perfis técnicos com formação em mecânica, eletrotécnica ou engenharia industrial e experiência prática têm boa colocação, com gestores de obra sêniores chegando a faixas de 110 a 180 mil euros."
      },
      {
        "area": "Sem qualificação superior ou diploma reconhecido",
        "advice": "Construção, logística, limpeza, hotelaria e restauração empregam, mas pagam perto do salário mínimo social (cerca de 2.771 euros brutos mensais para não qualificados em junho de 2026) e estão entre os setores em esfriamento. Sem profissão em penúria, o teste de mercado de trabalho da ADEM se aplica e o empregador precisa provar que não achou candidato local ou europeu, o que dificulta o patrocínio de terceiros países."
      },
      {
        "area": "Empreendedores e autônomos",
        "advice": "Quem quer abrir negócio precisa submeter, ao mesmo tempo, o pedido de autorização de residência de longa duração e a autorização de estabelecimento (business permit) junto ao Ministério da Economia, em geral antes de entrar no país. Atividades comerciais, artesanais e algumas liberais exigem comprovar qualificação e idoneidade. O ecossistema fintech, fundos e espaços de coworking favorece consultores e freelancers qualificados."
      }
    ],
    "salaries": [
      {
        "role": "Salário mínimo social não qualificado (jun/2026)",
        "range": "2.771,33 euros brutos/mês",
        "source": {
          "label": "Guichet.lu / STATEC (indexação 2026)",
          "url": "https://guichet.public.lu/en/entreprises/ressources-humaines/remuneration/paiement-remunerations/salaire.html",
          "official": true
        }
      },
      {
        "role": "Salário mínimo social qualificado (jun/2026)",
        "range": "3.325,59 euros brutos/mês",
        "source": {
          "label": "Guichet.lu / STATEC (indexação 2026)",
          "url": "https://guichet.public.lu/en/entreprises/ressources-humaines/remuneration/paiement-remunerations/salaire.html",
          "official": true
        }
      },
      {
        "role": "Salário médio bruto anual (tempo integral, todos os setores)",
        "range": "75.919 euros/ano (mediana 58.126 euros)",
        "source": {
          "label": "STATEC - Regards 09/24",
          "url": "https://statistiques.public.lu/en/publications/series/regards/2024/regards-09-24.html",
          "official": true
        }
      },
      {
        "role": "Setor financeiro e seguros (média)",
        "range": "~113.018 euros brutos/ano",
        "source": {
          "label": "STATEC (via Paperjam)",
          "url": "https://en.paperjam.lu/article/the-average-salary-in-luxembou",
          "official": true
        }
      },
      {
        "role": "Educação (média do setor)",
        "range": "~111.362 euros brutos/ano",
        "source": {
          "label": "STATEC (via Paperjam)",
          "url": "https://en.paperjam.lu/article/the-average-salary-in-luxembou",
          "official": true
        }
      },
      {
        "role": "Hotelaria e restauração (média do setor)",
        "range": "~40.461 euros brutos/ano",
        "source": {
          "label": "STATEC (via Paperjam)",
          "url": "https://en.paperjam.lu/article/the-average-salary-in-luxembou",
          "official": true
        }
      },
      {
        "role": "Enfermeiro qualificado",
        "range": "~70.000 euros brutos/ano (conforme senioridade)",
        "source": {
          "label": "Robert Half / Luxtoday (referência de mercado)",
          "url": "https://luxtoday.lu/en/knowledge/salaries-in-luxembourg",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor / engenheiro de TI sênior",
        "range": "90.000 a 120.000+ euros/ano (especialistas até 180.000)",
        "source": {
          "label": "Robert Half / Hays (guias salariais de mercado)",
          "url": "https://www.roberthalf.com/lu/en/insights/salary-guide",
          "official": true
        }
      },
      {
        "role": "Diretor financeiro (3 a 5 anos de experiência)",
        "range": "96.000 a 113.000 euros/ano",
        "source": {
          "label": "Hays Luxembourg (guia salarial de mercado)",
          "url": "https://www.hays.lu/en/blogs/the-twelve-highest-paid-jobs-in-luxembourg",
          "official": true
        }
      },
      {
        "role": "Salário anual mínimo para Cartão Azul da UE",
        "range": "65.652 euros brutos/ano",
        "source": {
          "label": "Guichet.lu (regulamento grão-ducal)",
          "url": "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/salarie-hautement-qualifie.html",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadãos da UE, do EEE e da Suíça trabalham livremente, sem autorização. Para nacionais de terceiros países (caso de brasileiros), a regra geral é: o empregador primeiro declara a vaga à ADEM, que avalia o mercado local; depois o trabalhador obtém o certificado da ADEM autorizando a contratação e, antes de entrar, solicita a autorização de residência à Direção da Imigração do Ministério dos Assuntos Internos, com visto tipo D quando exigido. Após a chegada, faz a declaração de chegada e o pedido de cartão de residência dentro de 3 meses. Atalho importante: se a vaga corresponder a uma das profissões da lista oficial de penúria da ADEM (20 ocupações em 2026, em finanças/jurídico, saúde/social, TI, construção/indústria e P&D), o teste de mercado de trabalho é dispensado e a ADEM emite o certificado em até 5 dias úteis. Perfis altamente qualificados podem usar o Cartão Azul da UE, que exige contrato de no mínimo 6 meses, qualificação superior comprovada e salário anual bruto mínimo de 65.652 euros, com cartão válido por até 4 anos. Profissões regulamentadas (saúde, direito, várias liberais) exigem, antes de exercer, o reconhecimento das qualificações obtidas no exterior (custo de 75 euros, prazo de 2 a 10 semanas) e a licença ou autorização do ministério competente; advogados precisam de homologação do diploma de direito mais cursos complementares de direito luxemburguês. Autônomos e empreendedores submetem em paralelo a autorização de residência e a autorização de estabelecimento junto ao Ministério da Economia, normalmente antes da entrada no país.",
    "opportunityWindows": [
      "Profissões na lista oficial de penúria da ADEM 2026 (20 ocupações) têm teste de mercado dispensado e certificado emitido em até 5 dias úteis, o caminho mais rápido para o estrangeiro de terceiros países",
      "TI segue como a ocupação com maior alta de demanda registrada pela ADEM, mesmo com o mercado geral esfriando",
      "Saúde tem penúria estrutural de enfermeiros e cuidadores, com reajustes salariais puxados pela escassez de pessoal",
      "Cartão Azul da UE para altamente qualificados com salário a partir de 65.652 euros/ano dá residência de até 4 anos e mobilidade europeia",
      "Setor financeiro, de fundos e fintech mantém demanda por risco, compliance, auditoria e front office, funções que constam na lista de penúria",
      "Multilinguismo (francês, inglês, alemão e luxemburguês) é diferencial competitivo forte, sobretudo em saúde, jurídico e atendimento",
      "Mercado de trabalho transfronteiriço favorece quem aceita modelos híbridos e remotos, em expansão no país"
    ],
    "jobBoards": [
      {
        "label": "JobBoard da ADEM (Agência Nacional de Emprego)",
        "url": "https://adem.public.lu/en/marche-emploi-luxembourg/jobboard.html",
        "official": true
      },
      {
        "label": "EURES - portal europeu de empregos (Luxemburgo)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Guichet.lu - portal oficial de procedimentos (imigração e trabalho)",
        "url": "https://guichet.public.lu/en/citoyens/immigration.html",
        "official": true
      },
      {
        "label": "Work in Luxembourg (iniciativa pública de atração de talentos)",
        "url": "https://workinluxembourg.com/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "ADEM - Nova lista de profissões em penúria 2025 (oficial)",
        "url": "https://adem.public.lu/en/actualites/adem/2025/03/metiers-penurie.html",
        "official": true
      },
      {
        "label": "ADEM - Estatísticas e números-chave do mercado de trabalho",
        "url": "https://adem.public.lu/en/marche-emploi-luxembourg/statistiques/chiffres-cles-adem.html",
        "official": true
      },
      {
        "label": "Portal de Estatísticas (STATEC/ADEM) - desemprego início de 2026: 6,3%",
        "url": "https://statistiques.public.lu/en/actualites/2026/adem-01-26.html",
        "official": true
      },
      {
        "label": "STATEC - Regards 09/24: salário médio bruto de 75.919 euros/ano",
        "url": "https://statistiques.public.lu/en/publications/series/regards/2024/regards-09-24.html",
        "official": true
      },
      {
        "label": "EURES - Informação do mercado de trabalho de Luxemburgo",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-luxembourg_en",
        "official": true
      },
      {
        "label": "Guichet.lu - Residência para trabalhador assalariado de terceiros países",
        "url": "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/salarie/salarie-pays-tiers.html",
        "official": true
      },
      {
        "label": "Guichet.lu - Cartão Azul da UE (altamente qualificados)",
        "url": "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/salarie-hautement-qualifie.html",
        "official": true
      },
      {
        "label": "Guichet.lu - Residência para trabalhador autônomo de terceiros países",
        "url": "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/travailleur-independant/independant.html",
        "official": true
      },
      {
        "label": "Guichet.lu - Reconhecimento de qualificações para profissões regulamentadas",
        "url": "https://guichet.public.lu/en/citoyens/famille-education/etudes-superieures/reconnaissance-diplomes/reconnaissance-titres-formation-etranger-profession-reglementee.html",
        "official": true
      },
      {
        "label": "Guichet.lu - Salário social mínimo e indexação 2026",
        "url": "https://guichet.public.lu/en/entreprises/ressources-humaines/remuneration/paiement-remunerations/salaire.html",
        "official": true
      },
      {
        "label": "Work in Luxembourg - Lista 2026 de profissões em penúria",
        "url": "https://workinluxembourg.com/news/luxembourg-publishes-its-2026-list-of-shortage-occupations",
        "official": true
      },
      {
        "label": "Paperjam - Salário médio em Luxemburgo (cita STATEC)",
        "url": "https://en.paperjam.lu/article/the-average-salary-in-luxembou",
        "official": false
      },
      {
        "label": "Robert Half - Guia salarial Luxemburgo 2026 (mercado)",
        "url": "https://www.roberthalf.com/lu/en/insights/salary-guide",
        "official": false
      },
      {
        "label": "Hays Luxembourg - Empregos mais bem pagos (mercado)",
        "url": "https://www.hays.lu/en/blogs/the-twelve-highest-paid-jobs-in-luxembourg",
        "official": false
      },
      {
        "label": "Luxtoday - Salários em Luxemburgo (comunidade)",
        "url": "https://luxtoday.lu/en/knowledge/salaries-in-luxembourg",
        "official": false
      }
    ]
  },
  "ro": {
    "updatedAt": "2026-06-22",
    "overview": "A Romenia vive um mercado de trabalho marcado por escassez estrutural de mao de obra, o que abre espaco real para o trabalhador estrangeiro. Segundo o EURES, a taxa de desemprego ficou em torno de 5,6% e a taxa de emprego em 63%, ainda 7,4 pontos abaixo da media da Uniao Europeia, sinal de que ha mais vagas do que candidatos locais em varias regioes. Bucareste e as regioes Noroeste, Centro e Oeste concentram a maior demanda, com desemprego de apenas 2,8% na capital e na regiao Oeste, enquanto o Sudeste e a Sul-Muntenia seguem com mercados mais fracos. O salario medio bruto da economia subiu de forma consistente ao longo de 2025, alcancando cerca de 9.371 lei em novembro de 2025 segundo o Instituto Nacional de Estatistica, com liquido perto de 5.615 lei.\n\nA porta de entrada para nao europeus e ampla em termos de cota mas competitiva na pratica. O governo manteve em 100.000 a cota de novas autorizacoes de trabalho para nao comunitarios em 2025 (Government Decision no. 10/2025), reduzindo-a para 90.000 em 2026. A construcao civil lidera os pedidos, seguida de hotelaria, logistica, transporte, industria e agricultura. Em paralelo, a Romenia se firmou como um dos polos de tecnologia que mais crescem na Europa, com setor ICT proximo de 10% do PIB e cerca de 250.000 profissionais de tecnologia, concentrados em Bucareste, Cluj e Iasi. Para quem pensa em empreender, o pais nao impoe restricao de nacionalidade a propriedade de empresas, e abrir uma SRL e barato e rapido.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (ICT), com Bucareste, Cluj e Iasi como polos",
      "Construcao civil e trabalhos relacionados",
      "Transporte e logistica",
      "Industria de transformacao (manufatura e montagem)",
      "Hotelaria e turismo",
      "Servicos financeiros e BPO/centros de servicos compartilhados",
      "Agricultura e processamento de alimentos"
    ],
    "coolingSectors": [
      "Profissoes da ciencia e engenharia de nivel associado (excedente segundo o EURES)",
      "Profissoes juridicas, sociais e culturais",
      "Tradutores e linguistas",
      "Professores do ensino secundario",
      "Trabalhadores agricolas de cultivo misto e pecuaria (oferta acima da demanda)"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedor de software / engenheiro de TI",
        "note": "Stacks PHP, C#, Java, C++ muito procuradas; setor com cerca de 250 mil profissionais e tres unicornios (UiPath, eMAG, Bitdefender)"
      },
      {
        "role": "Motorista de caminhao e carreta (transporte pesado)",
        "note": "Listado pelo EURES entre as maiores escassezes nacionais"
      },
      {
        "role": "Trabalhador da construcao civil e ajudante de obra",
        "note": "Setor lidera os pedidos de autorizacao de trabalho para nao comunitarios"
      },
      {
        "role": "Soldador e cortador a chama",
        "note": "Escassez recorrente na industria"
      },
      {
        "role": "Montador de maquinas e equipamentos mecanicos",
        "note": "Demanda forte na manufatura"
      },
      {
        "role": "Carpinteiro e marceneiro",
        "note": "Escassez em trades da construcao"
      },
      {
        "role": "Operador de maquina de costura",
        "note": "Escassez apontada pelo EURES"
      },
      {
        "role": "Vendedor e assistente de loja",
        "note": "Escassez no varejo"
      },
      {
        "role": "Trabalhador de limpeza e auxiliar (escritorios, hoteis)",
        "note": "Demanda em hotelaria e servicos"
      },
      {
        "role": "Vigilante / agente de seguranca",
        "note": "Escassez apontada pelo EURES"
      },
      {
        "role": "Profissional de servicos financeiros e BPO",
        "note": "Centros de servicos compartilhados em expansao"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia e engenharia de software (ensino superior)",
        "advice": "Melhor caminho para estrangeiro qualificado. O EU Blue Card foi flexibilizado em 2025, com limiar salarial reduzido para cerca da media do salario bruto (aprox. 20.782 euros/ano) e validade de tres anos. Quem tem diploma de tres anos ou mais, ou experiencia profissional relevante, qualifica. Foque em Bucareste, Cluj e Iasi."
      },
      {
        "area": "Profissoes regulamentadas de saude (medico, enfermeiro, dentista, farmaceutico, parteira)",
        "advice": "Profissoes setoriais com reconhecimento automatico para diplomas obtidos na UE, EEE e Suica, conforme a Lei 200/2004. Para diplomas de fora da UE, e necessario passar pelo CNRED e, eventualmente, periodo de adaptacao de ate tres anos ou prova de aptidao. Verifique o registro junto a ordem profissional antes de aceitar oferta."
      },
      {
        "area": "Engenharia, arquitetura e veterinaria (ensino superior)",
        "advice": "Arquiteto e veterinario tambem tem reconhecimento setorial pela Lei 200/2004 para diplomas da UE. Atencao: o EURES aponta excedente em parte das profissoes de engenharia, entao priorize nichos com escassez (industria, automacao, construcao) e regioes do Oeste e Noroeste."
      },
      {
        "area": "Tecnico e profissional de nivel medio (construcao, transporte, industria)",
        "advice": "Maior volume de vagas via cota de autorizacao de trabalho. O empregador precisa comprovar que a vaga nao pode ser preenchida por romeno ou cidadao UE/EEE. Setores de construcao, transporte e manufatura sao os que mais contratam nao comunitarios."
      },
      {
        "area": "Sem qualificacao formal especifica (hotelaria, limpeza, varejo, operacao)",
        "advice": "Ha demanda real, mas salarios proximos do minimo nacional (4.050 lei brutos em 2025, com piso maior na construcao). A contratacao depende de patrocinio do empregador e da cota anual, que se esgota cedo. Garanta contrato formal antes de migrar."
      },
      {
        "area": "Empreendedor / investidor",
        "advice": "Nao ha restricao de nacionalidade para abrir empresa. A SRL exige capital social baixo e registro no ONRC em poucos dias. O regime de microempresa tem aliquota reduzida sobre o faturamento, com limite e exigencia de ao menos um empregado. A residencia para fins comerciais e um processo de imigracao separado do registro da empresa, trate os dois em paralelo."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto da economia (total)",
        "range": "~9.371 lei/mes brutos (~5.615 lei liquidos), nov/2025",
        "source": {
          "label": "Institutul National de Statistica (INS)",
          "url": "https://insse.ro/cms/en",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional bruto",
        "range": "4.050 lei/mes (2025 e 1o semestre de 2026); 4.325 lei a partir de jul/2026",
        "source": {
          "label": "Eurofound / Governo da Romenia",
          "url": "https://www.eurofound.europa.eu/en/countries/romania/minimum-wage",
          "official": true
        }
      },
      {
        "role": "Salario minimo bruto na construcao civil",
        "range": "4.582 lei/mes (piso setorial, 2025)",
        "source": {
          "label": "EURES / Governo da Romenia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-romania_en",
          "official": true
        }
      },
      {
        "role": "Setor de TI e programacao (media setorial)",
        "range": "~18.064 euros/ano (setor mais bem pago, dado EURES 2023)",
        "source": {
          "label": "EURES Romania",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-romania_en",
          "official": true
        }
      },
      {
        "role": "Limiar salarial do EU Blue Card",
        "range": "~20.782 euros/ano (2025), equivalente a media do salario bruto",
        "source": {
          "label": "Comissao Europeia / Migration and Home Affairs",
          "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-romania_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica trabalham livremente, sem autorizacao. Para nao comunitarios o caminho padrao e a autorizacao de trabalho (work permit) solicitada pelo empregador, seguida da entrada com visto e da obtencao do single permit ou EU Blue Card junto da Inspecao Geral para Imigracao (IGI). O empregador precisa comprovar que opera ha pelo menos um ano no ramo, que a vaga nao pode ser preenchida por romeno ou cidadao UE/EEE/residente permanente, e o candidato deve atender a formacao, experiencia, aptidao medica e ausencia de antecedentes incompativeis. O pedido de prorrogacao de residencia para emprego e decidido em 30 dias, prorrogavel por ate 15 dias. A cota anual de novas autorizacoes para nao comunitarios foi de 100.000 em 2025 (Government Decision no. 10/2025) e caiu para 90.000 em 2026, e costuma esgotar antes do fim do ano. O EU Blue Card (qualificados) ficou mais acessivel em 2025: aceita diploma de tres anos ou mais OU experiencia profissional relevante, limiar salarial reduzido para cerca da media do salario bruto e validade de tres anos. Profissoes regulamentadas (medico, dentista, farmaceutico, enfermeiro, parteira, veterinario, arquiteto e outras da Lei 200/2004) exigem reconhecimento do diploma: automatico para titulos da UE/EEE/Suica, e via CNRED para titulos de fora, podendo haver periodo de adaptacao de ate tres anos ou prova de aptidao. Para empreender nao ha restricao de nacionalidade sobre a propriedade de empresas: a SRL pode ser 100% estrangeira, com capital social baixo e registro no ONRC; a residencia para fins comerciais e tratada separadamente pela legislacao de imigracao.",
    "opportunityWindows": [
      "Cota de 100.000 autorizacoes para nao comunitarios em 2025 mantida (Government Decision no. 10/2025), mas reduzida para 90.000 em 2026, o que torna a janela mais apertada e aconselha agir cedo no ano",
      "EU Blue Card flexibilizado em 2025: limiar salarial reduzido para cerca da media do salario bruto, aceitacao de experiencia profissional alem de diploma, e validade ampliada para tres anos",
      "Setor ICT proximo de 10% do PIB com escassez de talento qualificado em Bucareste, Cluj e Iasi",
      "Escassez estrutural persistente em construcao, transporte rodoviario de carga, industria, hotelaria e agricultura",
      "Novo sistema unificado e online de autorizacoes de trabalho reduz o tempo de processamento",
      "Regioes Noroeste, Centro e Oeste com desemprego baixo e forte demanda de mao de obra"
    ],
    "jobBoards": [
      {
        "label": "ANOFM - Agentia Nationala pentru Ocuparea Fortei de Munca (vagas nacionais)",
        "url": "https://www.anofm.ro/lmvw.html?agentie=ANOFM&categ=3&subcateg=1",
        "official": true
      },
      {
        "label": "EURES Romania (ANOFM) - vagas UE/EEE",
        "url": "https://www.anofm.ro/eures/index.html?agentie=&categ=11&subcateg=1",
        "official": true
      },
      {
        "label": "Portal EURES europeu - vagas na Romenia",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "EURAXESS Romania - pesquisa e qualificados",
        "url": "https://www.euraxess.gov.ro/romania",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Labour Market Information: Romania",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-romania_en",
        "official": true
      },
      {
        "label": "IGI - Inspecao Geral para Imigracao (Single Permit / Emprego)",
        "url": "https://igi.mai.gov.ro/en/single-permit/",
        "official": true
      },
      {
        "label": "Institutul National de Statistica (INS)",
        "url": "https://insse.ro/cms/en",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Romania",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-romania_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - Highly-qualified worker in Romania",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-romania_en",
        "official": true
      },
      {
        "label": "EURAXESS Romania - Reconhecimento de diplomas (CNRED)",
        "url": "https://www.euraxess.gov.ro/romania/information-assistance/recognition-diplomas-and-qualifications-obtained-abroad",
        "official": true
      },
      {
        "label": "CNRED - Reconhecimento de qualificacoes profissionais",
        "url": "https://cnred.edu.ro/en/",
        "official": true
      },
      {
        "label": "ONRC - Oficiul National al Registrului Comertului",
        "url": "https://www.onrc.ro/index.php/en",
        "official": true
      },
      {
        "label": "Eurofound - Salario minimo na Romenia",
        "url": "https://www.eurofound.europa.eu/en/countries/romania/minimum-wage",
        "official": true
      },
      {
        "label": "OECD - Reviews of Labour Market and Social Policies: Romania 2025",
        "url": "https://www.oecd.org/en/publications/oecd-reviews-of-labour-market-and-social-policies-romania-2025_f0532908-en.html",
        "official": true
      },
      {
        "label": "Accace - Cota de trabalhadores estrangeiros na Romenia (corroboracao)",
        "url": "https://accace.com/foreign-workers-quota-in-romania/",
        "official": false
      },
      {
        "label": "Romania Insider - salarios e mercado (corroboracao comunidade/imprensa)",
        "url": "https://www.romania-insider.com/romania-average-wage-q3-2025",
        "official": false
      },
      {
        "label": "ANIS - associacao da industria de software (corroboracao setor TI)",
        "url": "https://www.romania-insider.com/anis-ro-it-outsourcing-change-apr-2025",
        "official": false
      }
    ]
  },
  "se": {
    "updatedAt": "2026-06-22",
    "overview": "A Suecia chega a 2026 com um mercado de trabalho em recuperacao lenta apos dois anos de desaceleracao. Segundo a SCB (Statistics Sweden), no primeiro trimestre de 2026 havia cerca de 5,2 milhoes de pessoas ocupadas, com taxa de emprego perto de 69 por cento e desemprego ajustado em torno de 8,7 por cento, ainda elevado para o padrao sueco. O emprego voltou a crescer pelo segundo trimestre seguido, puxado sobretudo por mulheres e por contratos por tempo determinado, mas o desemprego de longa duracao tambem subiu. A Arbetsformedlingen, agencia publica de emprego, projeta fortalecimento gradual ao longo de 2026 e 2027, com recuperacao desigual entre regioes e setores. O traco mais marcante do mercado sueco e a coexistencia de escassez aguda de mao de obra qualificada com um contingente grande de desempregados de longa duracao que nao tem as competencias procuradas pelos empregadores. Para o estrangeiro, o ano de 2026 traz uma mudanca decisiva: desde 1 de junho passou a valer uma exigencia salarial mais alta para a maioria das autorizacoes de trabalho, atrelada a 90 por cento do salario mediano nacional, o que eleva a barreira de entrada para empregos de baixa remuneracao e favorece perfis qualificados em saude, tecnologia, engenharia e na transicao verde do norte do pais.",
    "hotSectors": [
      "Saude e cuidados (enfermeiros, enfermeiros especialistas, medicos, parteiras, dentistas, fisioterapeutas, auxiliares de enfermagem)",
      "Tecnologia da informacao (desenvolvedores de software e sistemas, analistas de sistemas, arquitetos de TI, ciberseguranca, IA)",
      "Transicao verde e energia (energia eolica e hidrica, industrias verdes no norte da Suecia)",
      "Engenharia (engenheiros civis e tecnicos de construcao e manufatura)",
      "Construcao e oficios qualificados (eletricistas, encanadores, carpinteiros, soldadores)",
      "Educacao (professores, professores de pre-escola, professores de formacao profissional)",
      "Transporte (motoristas de onibus e caminhao)"
    ],
    "coolingSectors": [
      "Comunicacao e relacoes publicas (comunicadores, especialistas em PR, informadores, com excedente projetado para os proximos cinco anos)",
      "Funcoes administrativas e de apoio (recepcionistas, assistentes administrativos)",
      "Hotelaria e restauracao em parte das regioes (atendentes de cafe e pessoal de cozinha em excedente)",
      "Industria dependente de manufatura no sul da Suecia (Scania e Vastmanland, com desemprego estrutural mais alto)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros especialistas (specialistsjukskoterskor)",
        "note": "Apontado pela Arbetsformedlingen como talvez a escassez de competencia mais aguda da Suecia, no curto e no longo prazo"
      },
      {
        "role": "Enfermeiros (sjukskoterskor)",
        "note": "Escassez persistente em todas as regioes; salario medio cerca de 45.100 SEK/mes (SCB 2025)"
      },
      {
        "role": "Medicos (lakare)",
        "note": "Escassez estrutural; profissao regulamentada, exige licenca sueca (legitimation) do Socialstyrelsen"
      },
      {
        "role": "Desenvolvedores de software e sistemas (mjukvaru- och systemutvecklare)",
        "note": "TI lidera as listas de escassez ano apos ano; salario medio cerca de 47.300 SEK/mes (SCB 2025)"
      },
      {
        "role": "Analistas de sistemas e arquitetos de TI",
        "note": "Demanda forte sobretudo em Estocolmo e nas regioes de crescimento"
      },
      {
        "role": "Parteiras (barnmorskor)",
        "note": "Profissao de nivel superior com escassez recorrente; regulamentada"
      },
      {
        "role": "Dentistas (tandlakare)",
        "note": "Escassez de profissionais qualificados; profissao regulamentada"
      },
      {
        "role": "Auxiliares de enfermagem (underskoterskor)",
        "note": "Alta demanda; faz parte das ocupacoes com limite salarial reduzido de 75 por cento"
      },
      {
        "role": "Eletricistas (elektriker)",
        "note": "Oficio qualificado em falta; certificacao exigida no setor eletrico"
      },
      {
        "role": "Engenheiros civis (civilingenjorer)",
        "note": "Demanda ligada a construcao, industria e transicao verde"
      },
      {
        "role": "Professores e professores de pre-escola (larare, forskollarare)",
        "note": "Escassez ampla; posto efetivo exige licenca (lararlegitimation)"
      },
      {
        "role": "Soldadores e operadores de maquinas (svetsare, CNC)",
        "note": "Demanda na industria; entre as ocupacoes com limite salarial reduzido"
      },
      {
        "role": "Tecnicos de energia renovavel e industrias verdes",
        "note": "Expansao no norte (Upper Norrland) com milhares de vagas previstas"
      }
    ],
    "byQualification": [
      {
        "area": "Saude (enfermagem, medicina, odontologia)",
        "advice": "Setor com maior escassez estrutural e melhor porta de entrada, mas todas essas profissoes sao regulamentadas: e preciso obter a licenca sueca (legitimation) junto ao Socialstyrelsen, o que costuma exigir comprovacao de formacao, prova de conhecimento e, em geral, proficiencia em sueco. Profissionais com qualificacao estrangeira que buscam emprego para obter a licenca sueca entram numa categoria com exigencia salarial reduzida (75 por cento da mediana). Investir no sueco e essencial."
      },
      {
        "area": "Tecnologia da informacao e engenharia",
        "advice": "Melhor caminho para estrangeiros altamente qualificados. Desenvolvedores, arquitetos de TI e engenheiros tem demanda alta e salarios acima da media (45.000 a 50.000 SEK ou mais), o que facilita cumprir o novo limite salarial. Quem tem diploma superior (minimo 180 creditos) ou cinco anos de experiencia e oferta com salario a partir de 52.000 SEK/mes pode usar o EU Blue Card, agora valido por ate quatro anos. Ingles costuma bastar em muitas empresas de tecnologia."
      },
      {
        "area": "Oficios qualificados e construcao",
        "advice": "Eletricistas, encanadores, carpinteiros e soldadores estao em falta. Varias dessas ocupacoes constam na lista com limite salarial reduzido a 75 por cento da mediana, o que abre espaco mesmo com salarios menores. Certificacoes do setor (sobretudo eletrico) e algum sueco aumentam muito a empregabilidade."
      },
      {
        "area": "Educacao",
        "advice": "Professores e professores de pre-escola estao entre os perfis em falta, mas postos efetivos exigem a licenca de professor (lararlegitimation) e dominio do sueco. Caminho viavel para quem ja domina o idioma ou esta disposto a um percurso de validacao mais longo."
      },
      {
        "area": "Baixa qualificacao e baixos salarios",
        "advice": "Ficou mais dificil em 2026. O novo limite salarial de 90 por cento da mediana barra grande parte dos empregos de baixa remuneracao, e as autorizacoes para apanhador de frutas silvestres e assistente pessoal foram extintas. Funcoes administrativas, recepcao e parte da hotelaria estao em excedente. Recomenda-se mirar ocupacoes da lista de 75 por cento (auxiliar de enfermagem, soldador, trabalhador agricola) ou requalificar-se."
      },
      {
        "area": "Empreendedores e autonomos",
        "advice": "E possivel obter autorizacao de residencia para trabalhar por conta propria desde que se detenha pelo menos 51 por cento do negocio, com plano de negocios e orcamento credivel, e capacidade de se sustentar (cerca de 200.000 SEK para o titular, mais 100.000 SEK para conjuge e 50.000 SEK por filho, cobrindo dois anos). O conhecimento de sueco ou ingles e exigido, e sueco muito bom se houver muito contato com clientes e fornecedores locais."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio mensal (todas as ocupacoes, Suecia)",
        "range": "Media 37.400 SEK / mediana 35.700 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Desenvolvedores de software e sistemas",
        "range": "Media 47.300 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Enfermeiros",
        "range": "Media 45.100 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Tecnicos de construcao e manufatura",
        "range": "Media 48.900 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Gerentes de arquitetura e engenharia",
        "range": "Media 59.600 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Auxiliares de creche / cuidadores (menor faixa)",
        "range": "Media 28.700 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Diretores de escola (maior faixa)",
        "range": "Media 60.900 SEK por mes (2025)",
        "source": {
          "label": "SCB - Average monthly salary by occupation 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica nao precisam de autorizacao de trabalho e podem viver e trabalhar livremente na Suecia. Para nacionais de paises terceiros (caso de brasileiros), e necessaria autorizacao de trabalho concedida pelo Migrationsverket. Desde 1 de junho de 2026 vale uma nova regra salarial: para a maioria das autorizacoes, o salario oferecido deve corresponder a pelo menos 90 por cento do salario mediano sueco no momento do pedido (a referencia divulgada foi de cerca de 33.390 SEK/mes, sobre uma mediana de aproximadamente 37.100 SEK). Cerca de vinte grupos ocupacionais ficam isentos desse piso e seguem um limite reduzido de 75 por cento da mediana, entre eles funcoes de TI (administradores de sistemas, tecnicos de suporte e de rede), auxiliares de enfermagem e cuidadores, trabalhadores agricolas e florestais, soldadores e metalurgicos, operadores de maquinas de processamento de alimentos, auxiliares de creche e acougueiros. Quatro categorias extras tambem usam o limite de 75 por cento: ex-estudantes que pedem a autorizacao de dentro da Suecia, profissionais com qualificacao estrangeira que buscam emprego para obter licenca sueca (farmaceutico, medico, enfermeiro, dentista), beneficiarios de protecao temporaria da UE e empregados de startups jovens de tecnologia ou ciencias da vida. Duas ocupacoes deixaram de dar direito a autorizacao de trabalho: apanhador de frutas silvestres e assistente pessoal. Passou a existir tambem a exigencia de o empregador notificar o Migrationsverket se o trabalhador nao iniciar o emprego em ate quatro meses. Profissionais altamente qualificados podem optar pelo EU Blue Card, que exige diploma superior de pelo menos 180 creditos (ou cinco anos de experiencia relevante), contrato de no minimo seis meses e salario a partir de 52.000 SEK/mes (1,25 vez o salario medio); a validade do Blue Card foi estendida de dois para quatro anos. Profissoes regulamentadas (medico, enfermeiro, dentista, farmaceutico, professor, entre outras) exigem licenca/legitimation emitida pela autoridade sueca competente (Socialstyrelsen na saude), com validacao de formacao, prova e em geral proficiencia em sueco. Para empreender, ha autorizacao de residencia para trabalho por conta propria: e preciso deter ao menos 51 por cento do negocio, apresentar plano e orcamento credivel, conhecimento de sueco ou ingles, e comprovar meios de sustento por dois anos (cerca de 200.000 SEK para o titular, 100.000 SEK para o conjuge e 50.000 SEK por filho). Esse permit e concedido por ate dois anos, com possibilidade de permanencia permanente apos dois anos de atividade.",
    "opportunityWindows": [
      "Expansao da transicao verde no norte da Suecia (Upper Norrland), com energia eolica e hidrica e novas industrias gerando milhares de vagas e o menor desemprego do pais",
      "Recuperacao gradual do emprego prevista pela Arbetsformedlingen para 2026-2027, com fortalecimento progressivo do mercado",
      "Escassez cronica em saude (especialmente enfermeiros especialistas) e em TI, que tende a persistir no medio e longo prazo",
      "EU Blue Card mais atrativo a partir de 2026, com validade estendida para quatro anos, beneficiando profissionais altamente qualificados",
      "Lista de cerca de vinte ocupacoes com limite salarial reduzido (75 por cento), que mantem aberta a porta para oficios e funcoes de saude de apoio mesmo com o novo piso salarial",
      "Necessidade de mao de obra no norte do pais tambem em educacao, comercio, restauracao e transporte"
    ],
    "jobBoards": [
      {
        "label": "Platsbanken (Arbetsformedlingen) - banco oficial de vagas da agencia publica de emprego",
        "url": "https://arbetsformedlingen.se/platsbanken",
        "official": true
      },
      {
        "label": "Arbetsformedlingen - Agencia Publica de Emprego da Suecia",
        "url": "https://arbetsformedlingen.se/",
        "official": true
      },
      {
        "label": "EURES - portal europeu de mobilidade profissional (vagas na Suecia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Migrationsverket - autorizacoes de trabalho e residencia",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work.html",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "SCB (Statistics Sweden) - Labour Force Survey, 1o trimestre de 2026",
        "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/labour-force-supply/labour-force-surveys-lfs/pong/statistical-news/labour-force-survey-lfs-first-quarter-2026/",
        "official": true
      },
      {
        "label": "SCB (Statistics Sweden) - Average monthly salary by occupation 2025",
        "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
        "official": true
      },
      {
        "label": "Migrationsverket - New rules for labour immigration, occupations exempted (25/05/2026)",
        "url": "https://www.migrationsverket.se/en/news-archive/news/2026-05-25-new-rules-for-labour-immigration---these-occupations-are-exempted.html",
        "official": true
      },
      {
        "label": "Migrationsverket - New rules for work permits from 1 June 2026",
        "url": "https://www.migrationsverket.se/nyheter/news-archive/2026-04-17-new-rules-for-work-permits-from-1-june-2026.html",
        "official": true
      },
      {
        "label": "Migrationsverket - Apply for a work permit (employees)",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/employees.html",
        "official": true
      },
      {
        "label": "Migrationsverket - Residence permit to run your own business (self-employed)",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/self-employed-people.html",
        "official": true
      },
      {
        "label": "Migrationsverket - EU Blue Card for highly qualified employment",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/eu-blue-cards.html",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Sweden",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-sweden_en",
        "official": true
      },
      {
        "label": "Arbetsformedlingen - Analyser och prognoser (yrkesprognoser/bristyrken)",
        "url": "https://arbetsformedlingen.se/statistik/analyser-och-prognoser",
        "official": true
      }
    ]
  },
  "cz": {
    "updatedAt": "2026-06-22",
    "overview": "A Tchequia mantem um dos mercados de trabalho mais aquecidos da Uniao Europeia, com a menor taxa de desemprego do bloco, na faixa de 2,6% a 3,0% ao longo de 2025 e inicio de 2026, segundo o Eurostat e o Czech Statistical Office, contra uma media europeia perto de 5,9%. A economia opera em quase pleno emprego, com cerca de 5,2 milhoes de pessoas ativas e um volume historicamente alto de vagas em aberto, estimado em torno de 264 mil posicoes pelo portal EURES. Esse cenario cria forte demanda por mao de obra estrangeira, embora a propria escassez conviva com um descompasso de qualificacoes: mesmo com desemprego baixo, a maioria dos empregadores relata dificuldade para encontrar candidatos com competencias digitais, tecnicas e linguisticas adequadas. O salario medio bruto mensal chegou a CZK 48.295 no terceiro trimestre de 2025, alta de 7,1% em termos nominais e de 4,5% em termos reais sobre o ano anterior, com mediana de CZK 42.901, conforme o Czech Statistical Office.\n\nA demanda concentra-se em tecnologia da informacao, industria de alta tecnologia, saude, construcao, logistica e servicos, enquanto Praga e a Boemia Central registram desemprego abaixo de 2% e regioes como Usti nad Labem e o distrito de Karvina, na Morávia-Silesia, ficam acima da media nacional. Para o estrangeiro de fora da UE, o acesso ao mercado passa pelo Cartao de Empregado (zamestnanecka karta), que combina autorizacao de trabalho e residencia num unico documento, pelo Cartao Azul da UE para profissionais altamente qualificados, e pelos programas governamentais de migracao economica geridos pelo Ministerio da Industria e Comercio. Quem deseja empreender pode obter a licenca de comercio (zivnostensky list) e atuar como autonomo (OSVC), mediante autorizacao de residencia compativel.",
    "hotSectors": [
      "Tecnologia da informacao e desenvolvimento de software",
      "Ciberseguranca",
      "Inteligencia artificial e automacao",
      "Saude e farmaceutica",
      "Engenharia (mecanica, eletrica, civil)",
      "Construcao civil e oficios qualificados",
      "Logistica e transporte rodoviario",
      "Industria de alta tecnologia e manufatura avancada",
      "Energias renovaveis",
      "Servicos compartilhados e BPO (Praga e Brno)",
      "Especialistas em sustentabilidade e ESG"
    ],
    "coolingSectors": [
      "Varejo tradicional (pressionado pelo e-commerce)",
      "Funcoes administrativas e burocraticas gerais",
      "Trabalho nao qualificado e bracal",
      "Profissoes juridicas, sociais e culturais (mais candidatos que vagas)",
      "Mineracao e extracao",
      "Setor automotivo tradicional (em transicao para veiculos eletricos)"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedores de software e especialistas em TI",
        "note": "Maior escassez apontada para 2025-2026; pool nacional de cerca de 130 a 190 mil desenvolvedores, mas demanda supera oferta"
      },
      {
        "role": "Especialistas em ciberseguranca",
        "note": "Adicionados a lista de profissoes em escassez; cluster forte de empresas como Whalebone, Safetica e Wultra"
      },
      {
        "role": "Especialistas em inteligencia artificial e automacao",
        "note": "Praga e Brno consolidados como hubs de IA na Europa Central"
      },
      {
        "role": "Engenheiros mecanicos, eletricos e civis",
        "note": "Escassez aguda em toda a industria"
      },
      {
        "role": "Enfermeiros e profissionais de saude",
        "note": "Profissao regulamentada; populacao envelhecida pressiona a demanda"
      },
      {
        "role": "Medicos e profissionais de saude qualificados",
        "note": "Profissao regulamentada, exige reconhecimento de qualificacao"
      },
      {
        "role": "Operadores de maquinas e plantas estacionarias",
        "note": "Grupo com maior incidencia de vagas em escassez segundo EURES/CEDEFOP"
      },
      {
        "role": "Trabalhadores da construcao civil e pedreiros",
        "note": "Oficios de construcao (exceto eletricistas) entre os mais escassos"
      },
      {
        "role": "Soldadores e operadores de torno CNC",
        "note": "Oficios industriais qualificados com falta cronica"
      },
      {
        "role": "Motoristas de caminhao",
        "note": "Logistica e transporte com deficit estrutural"
      },
      {
        "role": "Engenheiros de energias renovaveis",
        "note": "Incluidos entre as novas profissoes em escassez para 2026"
      },
      {
        "role": "Cozinheiros e profissionais de hotelaria",
        "note": "Servicos e turismo com falta recorrente de mao de obra"
      }
    ],
    "byQualification": [
      {
        "area": "Ensino superior em TI, engenharia de software ou dados",
        "advice": "Caminho mais favoravel. O Cartao Azul da UE atende justamente profissionais com diploma universitario e oferta salarial de pelo menos 1,5 vez o salario medio nacional. Foco em Praga e Brno (fintech, SaaS, IA, ciberseguranca, servicos compartilhados). Ingles costuma bastar para entrar; tcheco amplia opcoes."
      },
      {
        "area": "Engenharias (mecanica, eletrica, civil, automacao)",
        "advice": "Alta demanda industrial e de construcao. Para funcoes regulamentadas (engenharia autorizada) e preciso reconhecimento de qualificacao via orgao competente. Programas governamentais de trabalhador qualificado e altamente qualificado facilitam a contratacao via empregador."
      },
      {
        "area": "Saude (medicina, enfermagem, fisioterapia)",
        "advice": "Demanda forte, mas sao profissoes regulamentadas: exigem reconhecimento de qualificacao e, em geral, prova de proficiencia em tcheco. Planeje o processo de reconhecimento (taxa administrativa de CZK 2.000, prazo de ate 60 dias) antes de buscar o emprego."
      },
      {
        "area": "Oficios qualificados (soldagem, CNC, construcao, mecanica)",
        "advice": "Forte demanda via Programa de Trabalhador Qualificado, voltado a nacionalidades especificas e operado pelo empregador. Certificado de qualificacao profissional pode ser exigido. O Cartao de Empregado cobre qualquer nivel de qualificacao."
      },
      {
        "area": "Logistica, transporte e hotelaria",
        "advice": "Vagas abundantes para motoristas, operadores e profissionais de servicos. Acesso geralmente pelo Cartao de Empregado; habilitacoes especificas (carteira de motorista profissional) precisam de reconhecimento."
      },
      {
        "area": "Administrativo, juridico e funcoes de baixa qualificacao",
        "advice": "Mercado mais competitivo e em arrefecimento, com mais candidatos que vagas. Diferencie-se com tcheco fluente e especializacao; evite contar com o estrangeiro nao qualificado como porta de entrada facil."
      },
      {
        "area": "Empreendedores e autonomos",
        "advice": "A licenca de comercio (zivnostensky list) viabiliza atuacao como OSVC para quem tem residencia compativel. Atividades regulamentadas exigem comprovacao de qualificacao. Apos registrar e obter o IČO, notificar a seguranca social (em ate 15 dias) e o plano de saude (em ate 8 dias)."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto mensal (todos os setores)",
        "range": "CZK 48.295/mes (mediana CZK 42.901) no 3o trimestre de 2025",
        "source": {
          "label": "Czech Statistical Office (CZSO)",
          "url": "https://csu.gov.cz/rychle-informace/average-wages-3-quarter-of-2025",
          "official": true
        }
      },
      {
        "role": "Faixa salarial geral (80% dos empregados)",
        "range": "Entre CZK 22.559 e CZK 82.064/mes bruto (3o tri 2025)",
        "source": {
          "label": "Czech Statistical Office (CZSO)",
          "url": "https://csu.gov.cz/rychle-informace/average-wages-3-quarter-of-2025",
          "official": true
        }
      },
      {
        "role": "Salario minimo",
        "range": "Cerca de EUR 764/mes em 2024 (reajustado anualmente)",
        "source": {
          "label": "EURES Czechia",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-czechia_en",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software (nacional)",
        "range": "80% ganham entre CZK 59.989 e CZK 166.598/mes bruto; ~CZK 130.623/mes apos 5 anos",
        "source": {
          "label": "Platy.cz (pesquisa salarial; nao oficial)",
          "url": "https://www.platy.cz/en/salaryinfo/information-technology/software-engineer",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software (Praga, remuneracao total)",
        "range": "Cerca de CZK 1,14 a 1,90 milhao/ano",
        "source": {
          "label": "Levels.fyi (comunidade; nao oficial)",
          "url": "https://www.levels.fyi/t/software-engineer/locations/prague-cze",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do EEE e da Suica trabalham livremente, sem necessidade de autorizacao. Para nacionais de paises terceiros, o documento padrao e o Cartao de Empregado (zamestnanecka karta), uma autorizacao unica que combina residencia e trabalho por ate 2 anos, ligada a um empregador e a uma vaga especifica. A primeira solicitacao costuma ser feita numa embaixada tcheca; o prazo oficial e de 60 a 90 dias. A vaga geralmente precisa ter sido anunciada na Agencia de Emprego (Labour Office) por pelo menos 30 dias para comprovar que nao havia candidato da UE disponivel. Desde outubro de 2025, o prazo para encontrar novo emprego apos o fim do contrato passou para 90 dias.\n\nProfissionais com diploma universitario e oferta salarial de pelo menos 1,5 vez o salario medio nacional podem optar pelo Cartao Azul da UE. A partir de 1o de maio de 2025, o piso salarial passou a ser CZK 69.248/mes (cerca de CZK 830.970/ano); o cartao exige contrato de no minimo um ano e a vaga deve ser classificada como altamente qualificada. O Estado opera ainda dois programas de migracao economica geridos pelo Ministerio da Industria e Comercio (MPO): o Programa de Trabalhador Altamente Qualificado e o Programa de Trabalhador Qualificado, voltados a nacionalidades especificas (entre elas Ucrania, India, Filipinas, Cazaquistao, Moldova, Servia e outras), com quotas anuais, exceto para ucranianos, atendidos em fila continua.\n\nProfissoes regulamentadas (enfermeiro, medico, fisioterapeuta, engenheiro autorizado, operador de maquinas pesadas, entre outras) exigem reconhecimento de qualificacao antes do exercicio. O reconhecimento formal sob a lei de qualificacoes aplica-se sobretudo a diplomas obtidos na UE/EEE/Suica e a residentes de longa duracao; a taxa administrativa e de CZK 2.000 e a decisao sai em ate 60 dias. Para empreender, o estrangeiro com residencia compativel pode obter a licenca de comercio (zivnostensky list) e atuar como autonomo (OSVC) a partir dos 18 anos, registrando-se no Registro de Comercio e obtendo o numero IČO; atividades regulamentadas exigem comprovacao de qualificacao, e ha taxa administrativa de cerca de CZK 1.000.",
    "opportunityWindows": [
      "TI, ciberseguranca e IA com escassez estrutural e poucos requisitos de tcheco para entrar (ingles costuma bastar em Praga e Brno)",
      "Cartao Azul da UE como via rapida para diplomados com salario acima de CZK 69.248/mes",
      "Fila continua sem quota para trabalhadores ucranianos nos programas governamentais do MPO",
      "Prazo ampliado para 90 dias (desde outubro de 2025) para trocar de emprego sem perder o Cartao de Empregado",
      "Forte demanda industrial e de construcao via Programa de Trabalhador Qualificado",
      "Saude com demanda crescente por envelhecimento populacional para quem antecipa o reconhecimento de qualificacao",
      "Praga e Boemia Central em quase pleno emprego (desemprego abaixo de 2%), com maior concentracao de vagas",
      "Salarios em alta real (4,5% no 3o tri 2025), com destaque para atividades profissionais, cientificas e tecnicas (+11,4%)"
    ],
    "jobBoards": [
      {
        "label": "EURES - Portal Europeu de Emprego (Tchequia)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-czechia_en",
        "official": true
      },
      {
        "label": "Uřad prace CR - Agencia Nacional de Emprego (ÚP CR)",
        "url": "https://up.gov.cz/en/living-and-working-conditions",
        "official": true
      },
      {
        "label": "Ministerio dos Negocios Estrangeiros - Cartao de Empregado",
        "url": "https://mzv.gov.cz/jnp/en/information_for_aliens/long_stay_visa/employment_card.html",
        "official": true
      },
      {
        "label": "MPO - Programas de Migracao Economica (Trabalhador Qualificado/Altamente Qualificado)",
        "url": "https://mpo.gov.cz/en/foreign-trade/economic-migration/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES - Labour Market Information: Czechia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-czechia_en",
        "official": true
      },
      {
        "label": "Czech Statistical Office (CZSO) - Average wages, Q3 2025",
        "url": "https://csu.gov.cz/rychle-informace/average-wages-3-quarter-of-2025",
        "official": true
      },
      {
        "label": "Czech Statistical Office (CZSO) - Rates of employment and unemployment",
        "url": "https://csu.gov.cz/rychle-informace/rates-of-employment-unemployment-and-economic-activity-august-2025",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card in Czechia",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-czechia_en",
        "official": true
      },
      {
        "label": "Ministerio dos Negocios Estrangeiros - Employee Card",
        "url": "https://mzv.gov.cz/jnp/en/information_for_aliens/long_stay_visa/employment_card.html",
        "official": true
      },
      {
        "label": "MPO - Qualified / Highly Qualified Worker Programme",
        "url": "https://mpo.gov.cz/en/foreign-trade/economic-migration/program-qualified-workers--248608/",
        "official": true
      },
      {
        "label": "gov.cz - Recognition of professional qualifications",
        "url": "https://portal.gov.cz/en/sluzby-vs/recognition-of-professional-qualifications-S4384",
        "official": true
      },
      {
        "label": "Ministerio dos Negocios Estrangeiros - Entrepreneurship (trade license)",
        "url": "https://mzv.gov.cz/jnp/en/information_for_aliens/long_stay_visa/entrepreneurship.html",
        "official": true
      },
      {
        "label": "CEDEFOP - Czech Republic: Mismatch priority occupations",
        "url": "https://www.cedefop.europa.eu/en/data-insights/czech-republic-mismatch-priority-occupations",
        "official": true
      },
      {
        "label": "Move To Prague - EU Blue Card salary requirements 2025/2026",
        "url": "https://movetoprague.com/czech-republic-blue-card-salary-requirements-2025-2026/",
        "official": false
      },
      {
        "label": "Platy.cz - Software Engineer salary survey",
        "url": "https://www.platy.cz/en/salaryinfo/information-technology/software-engineer",
        "official": false
      },
      {
        "label": "Levels.fyi - Software Engineer salary, Prague",
        "url": "https://www.levels.fyi/t/software-engineer/locations/prague-cze",
        "official": false
      }
    ]
  }
};

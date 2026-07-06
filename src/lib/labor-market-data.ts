// GERADO pela equipe de agentes (rodada semanal do Mercado de Trabalho) · ultima geracao 2026-07-06.
// NAO editar a mao: regenerado a cada rodada de pesquisa (_gen-labor.mjs).
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
    "overview": "Australia entra em 2026 com um mercado de trabalho ainda apertado, mas em afrouxamento gradual. A taxa de desemprego ficou em 4,4% em maio de 2026 (ajustada sazonalmente), com 671,3 mil pessoas desempregadas, segundo a Australian Bureau of Statistics. O salario medio semanal de tempo integral (AWOTE) atingiu 2.051,10 dolares australianos em novembro de 2025, alta anual de 3,8%. A escassez de mao de obra recuou em relacao ao ano anterior, mas continua estrutural: a Jobs and Skills Australia (JSA) apontou que 29% das ocupacoes avaliadas (293 de 1.022) estavam em falta no pais em 2025, ante 33% em 2024. As lacunas se concentram em saude, construcao e trades qualificados, ensino e educacao infantil, engenharia e ciencia. Tecnicos e trabalhadores de trades respondem por cerca de metade da escassez persistente; 139 ocupacoes estao em falta todos os anos desde 2021. Ha um descompasso claro de qualificacao: em media havia 27,4 candidatos por vaga, mas apenas 9,3 considerados qualificados e 4,3 adequados. Para o imigrante, o caminho principal e a migracao qualificada via Core Skills Occupation List (CSOL) e o visto Skills in Demand (subclasse 482), que substituiu o antigo Temporary Skill Shortage em dezembro de 2024. Regioes fora das capitais oferecem janela extra: 21 ocupacoes estao em falta exclusivamente em areas regionais, e os programas de patrocinio estadual e regional priorizam essas vagas. Empreender e possivel, mas o sistema nao permite autossponsorship simples no 482; quem quer abrir negocio recorre a vistos de inovacao ou estrutura societaria com separacao genuina de controle.",
    "hotSectors": [
      "Saude e cuidados (enfermagem, cuidado a idosos, saude aliada, saude mental, clinicos gerais)",
      "Construcao e trades qualificados (eletricistas, carpinteiros, encanadores, gerentes de obra)",
      "Educacao (professores secundarios de STEM, educacao infantil, educadores de creche)",
      "Engenharia (civil, estrutural, eletrica, mecanica)",
      "TI e tecnologia (desenvolvedores de software, gerentes de TIC, ciberseguranca)",
      "Tecnologias criticas, energia renovavel e baixas emissoes (setores prioritarios do visto de inovacao)"
    ],
    "coolingSectors": [
      "Ocupacoes profissionais em geral viram a maior queda de escassez de 2024 para 2025 (recuo puxado por Professionals, embora saude e engenharia sigam em falta)",
      "Reducao geral do numero de ocupacoes em falta no pais (de 333 em 2024 para 293 em 2025), indicando afrouxamento amplo do mercado fora dos nucleos criticos"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) registrado(a) (Registered Nurse)",
        "note": "Em escassez critica em todos os estados; segunda ocupacao mais empregada do pais (cerca de 262 mil) e crescendo. Avaliacao via ANMAC."
      },
      {
        "role": "Eletricista",
        "note": "Uma das maiores faltas em trades; estimativa de 32 a 42 mil eletricistas adicionais necessarios ate 2030. Avaliacao via TRA."
      },
      {
        "role": "Carpinteiro / Encanador / Pedreiro",
        "note": "Trades de construcao em falta em areas metropolitanas e regionais; trades respondem por cerca de 51% da escassez persistente."
      },
      {
        "role": "Professor(a) do ensino secundario (STEM) e educador(a) infantil",
        "note": "Falta em todos os niveis, com demanda aguda por professores de STEM e profissionais de educacao infantil/creche."
      },
      {
        "role": "Cuidador(a) de idosos e profissionais de saude aliada",
        "note": "Envelhecimento populacional sustenta demanda por aged care, saude mental e allied health."
      },
      {
        "role": "Desenvolvedor(a) de software e gerente de TIC",
        "note": "Software and Applications Programmers somaram 13.700 trabalhadores em um ano (cerca de 203 mil empregados); gerentes de TIC com salario mediano elevado. Avaliacao via ACS."
      },
      {
        "role": "Engenheiro(a) civil, estrutural e eletrico",
        "note": "Demanda continua em engenharia ligada a construcao e infraestrutura. Avaliacao via Engineers Australia."
      },
      {
        "role": "Gerente de construcao / Construction Manager",
        "note": "Entre as ocupacoes mais demandadas, ligado ao pipeline de obras e habitacao."
      }
    ],
    "byQualification": [
      {
        "area": "Enfermagem e saude",
        "advice": "Caminho mais solido para PR. Faca a avaliacao de competencias na ANMAC (enfermeiros/parteiras) ou no orgao da sua profissao aliada, comprove ingles (geralmente IELTS/OET academico) e registre-se na AHPRA. Profissao em falta em todos os estados, com forte patrocinio estadual e regional."
      },
      {
        "area": "Trades de construcao (eletricista, carpinteiro, encanador)",
        "advice": "Avaliacao via Trades Recognition Australia (TRA), que pode exigir Job Ready Program ou teste pratico. Trades sao o maior bloco de escassez; priorize ofertas regionais, onde a demanda e maior e ha pontos extras em vistos de patrocinio regional."
      },
      {
        "area": "Engenharia",
        "advice": "Avaliacao via Engenheiros Australia (Engineers Australia), incluindo via Competency Demonstration Report (CDR) para quem nao tem diploma acreditado por acordos como Washington Accord. Civil, estrutural e eletrica tem maior tracao."
      },
      {
        "area": "TI e software",
        "advice": "Avaliacao via Australian Computer Society (ACS). Confirme o codigo ANZSCO na CSOL antes de aplicar; muitos papeis de software seguem em demanda, mas o mercado de TI afrouxou em relacao ao pico, entao tenha oferta concreta."
      },
      {
        "area": "Educacao / ensino",
        "advice": "Demanda aguda em professores secundarios de STEM e educacao infantil. E preciso avaliacao da AITSL e registro estadual de docencia. Considere areas regionais, onde a falta e mais severa."
      },
      {
        "area": "Profissoes gerais e administrativas (sem orgao especifico)",
        "advice": "A maioria e avaliada pela VETASSESS (mais de 340 ocupacoes profissionais e gerais; prazos tipicos de 6 a 8 semanas para profissionais). Verifique primeiro se a ocupacao esta na CSOL, pois muitas funcoes administrativas ficaram de fora."
      },
      {
        "area": "Empreendedores e talentos de elite",
        "advice": "Sem diploma diretamente empregavel mas com historico de destaque (tech critica, saude, energia limpa), avalie o National Innovation Visa (subclasse 858), que da PR imediata sem exigir investimento de capital nem residencia em estado especifico."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (tempo integral, ordinary time - AWOTE)",
        "range": "AUD 2.051,10 por semana (nov/2025), cerca de AUD 106.700/ano",
        "source": {
          "label": "ABS - Average Weekly Earnings, Australia, Nov 2025",
          "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/latest-release",
          "official": true
        }
      },
      {
        "role": "Managers (mediana semanal, todas as formas de emprego)",
        "range": "AUD 2.072 por semana (ago/2025)",
        "source": {
          "label": "ABS - Employee earnings, August 2025",
          "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/employee-earnings/latest-release",
          "official": true
        }
      },
      {
        "role": "Professionals (mediana semanal)",
        "range": "AUD 1.900 por semana (ago/2025)",
        "source": {
          "label": "ABS - Employee earnings, August 2025",
          "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/employee-earnings/latest-release",
          "official": true
        }
      },
      {
        "role": "Industria de construcao (media semanal)",
        "range": "AUD 1.958,20 por semana (nov/2025)",
        "source": {
          "label": "ABS - Average Weekly Earnings, Australia, Nov 2025",
          "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/latest-release",
          "official": true
        }
      },
      {
        "role": "Gerente de TIC (mediana semanal)",
        "range": "AUD 3.310 por semana",
        "source": {
          "label": "Jobs and Skills Australia - Occupation and Industry Profiles",
          "url": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations",
          "official": true
        }
      },
      {
        "role": "Piso salarial para visto qualificado (Core Skills Income Threshold)",
        "range": "AUD 76.515/ano (desde 1 jul 2025); previsto subir para AUD 79.499 em 1 jul 2026",
        "source": {
          "label": "Department of Home Affairs - Skills in Demand visa (Core Skills stream)",
          "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/core-skills-stream",
          "official": true
        }
      }
    ],
    "foreignerRules": "Para trabalhar legalmente como estrangeiro, e necessario um visto com direito de trabalho. O caminho principal de patrocinio empregaticio e o visto Skills in Demand (subclasse 482), que substituiu o Temporary Skill Shortage em 7 de dezembro de 2024. A via Core Skills exige que a ocupacao esteja na Core Skills Occupation List (CSOL, com 456 ocupacoes), que o empregador seja um Standard Business Sponsor aprovado e que o salario seja igual ou superior ao Core Skills Income Threshold (AUD 76.515 desde 1 jul 2025, previsto AUD 79.499 em 1 jul 2026) e tambem ao Annual Market Salary Rate da funcao, o que for maior. Quase todas as ocupacoes exigem skills assessment de orgao designado: ANMAC (enfermagem), Engineers Australia (engenharia), ACS (TI), TRA (trades), AITSL (docencia) e VETASSESS (maioria das profissoes gerais). Profissoes regulamentadas tem registro obrigatorio: saude via AHPRA, professores via conselho estadual, e diversas trades exigem licenca/registro estadual (ex.: eletricista licenciado). Nao e permitido autossponsorship simples no 482: a lei exige relacao genuina empregador-empregado, entao o dono que controla sozinho a empresa nao pode patrocinar a si mesmo (estruturas com socios independentes ou entidade separada podem ser possiveis). Para empreender, alternativas incluem o National Innovation Visa (subclasse 858), permanente, voltado a quem tem historico de destaque excepcional em areas como tecnologias criticas, saude e energia limpa, com residencia permanente imediata, sem exigencia de investimento de capital nem de residir em estado especifico (requer nomeacao por individuo ou organizacao de reputacao nacional via Form 1000 e ingles funcional).",
    "opportunityWindows": [
      "Saude e cuidados: enfermagem, aged care, allied health e saude mental em falta em todos os estados, sustentadas pelo envelhecimento populacional",
      "Trades de construcao: eletricistas, carpinteiros e encanadores com deficit estrutural (trades = cerca de 51% da escassez persistente; ate 42 mil eletricistas faltando ate 2030)",
      "Areas regionais: 21 ocupacoes em falta exclusivamente fora das capitais; fill rate regional menor (cerca de 65,8% vs 72,2% metro), abrindo espaco para patrocinio estadual e regional",
      "Educacao STEM e infantil: professores secundarios de ciencias/matematica e educadores de creche em demanda aguda",
      "Talentos de elite e empreendedores em tecnologias criticas, saude e energia limpa: porta direta para PR via National Innovation Visa (subclasse 858)"
    ],
    "jobBoards": [
      {
        "label": "Workforce Australia (servico oficial de emprego do governo)",
        "url": "https://www.workforceaustralia.gov.au/",
        "official": true
      },
      {
        "label": "Your Career (portal oficial de carreira e mercado de trabalho)",
        "url": "https://www.yourcareer.gov.au/",
        "official": true
      },
      {
        "label": "Jobs and Skills Australia - Occupation and Industry Profiles",
        "url": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles",
        "official": true
      },
      {
        "label": "APS Jobs (empregos no servico publico federal)",
        "url": "https://www.apsjobs.gov.au/",
        "official": true
      },
      {
        "label": "Department of Home Affairs - Skilled occupation list (CSOL)",
        "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Jobs and Skills Australia - Occupation Shortage List (2025)",
        "url": "https://www.jobsandskills.gov.au/data/occupation-shortage/occupation-shortage-list",
        "official": true
      },
      {
        "label": "Jobs and Skills Australia - 2025 OSL Key Findings Report (PDF)",
        "url": "https://www.jobsandskills.gov.au/sites/default/files/2025-10/2025%20OSL%20Key%20Findings%20Report_0.pdf",
        "official": true
      },
      {
        "label": "ABS - Labour Force, Australia, May 2026",
        "url": "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/may-2026",
        "official": true
      },
      {
        "label": "ABS - Average Weekly Earnings, Australia, November 2025",
        "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/latest-release",
        "official": true
      },
      {
        "label": "ABS - Employee earnings, August 2025",
        "url": "https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/employee-earnings/latest-release",
        "official": true
      },
      {
        "label": "Department of Home Affairs - Skills in Demand visa (subclass 482), Core Skills stream",
        "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/core-skills-stream",
        "official": true
      },
      {
        "label": "Department of Home Affairs - Core Skills Occupation List (CSOL)",
        "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
        "official": true
      },
      {
        "label": "Department of Home Affairs - National Innovation Visa (subclass 858)",
        "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/national-innovation-visa-858",
        "official": true
      },
      {
        "label": "Department of Home Affairs - Skills assessment (orgaos por ocupacao)",
        "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment",
        "official": true
      },
      {
        "label": "VETASSESS - Skills Assessment for Migration",
        "url": "https://www.vetassess.com.au/skills-assessment-for-migration",
        "official": true
      },
      {
        "label": "Your Career - Australian Jobs 2025 (PDF)",
        "url": "https://content.yourcareer.gov.au/sites/default/files/2025-06/Australian%20Jobs%202025.pdf",
        "official": true
      }
    ]
  },
  "ae": {
    "updatedAt": "2026-06-22",
    "overview": "Os Emirados Arabes Unidos seguem entre os mercados de trabalho mais atrativos do mundo para estrangeiros, sustentados por gasto publico forte, diversificacao economica e a ausencia de imposto de renda pessoal, o que faz o salario bruto equivaler ao liquido. Toda atividade remunerada exige autorizacao do Ministerio de Recursos Humanos e Emiratizacao (MOHRE): trabalhar sem permissao de trabalho valida e ilegal, e mesmo titulares de Golden Visa, visto de investidor, Green Visa ou visto familiar precisam de permissao de trabalho separada do MOHRE antes de iniciar um emprego assalariado. Em 2026 o mercado e seletivo, com contratacao concentrada em tecnologia, construcao, energia, saude e servicos financeiros, enquanto funcoes administrativas de rotina e atendimento de primeiro nivel perdem espaco para automacao. Dubai e Abu Dhabi continuam como os polos de oportunidade, com Abu Dhabi puxando energia e financa (ADGM) e Dubai concentrando tecnologia, imobiliario, turismo e comercio. Para quem quer empreender, a reforma da Lei das Sociedades Comerciais (Decreto-Lei Federal n. 32 de 2021) permite hoje 100% de propriedade estrangeira na maioria das atividades de mainland, alem das free zones que sempre permitiram capital estrangeiro integral.",
    "hotSectors": [
      "Tecnologia e Inteligencia Artificial (IA/ML, ciberseguranca, cloud, dados)",
      "Construcao e infraestrutura de grande porte",
      "Energia (petroleo, gas e renovaveis/sustentabilidade)",
      "Saude (medicos, enfermeiros, profissionais aliados, turismo medico)",
      "Servicos financeiros e gestao de patrimonio (ADGM e DIFC)",
      "Imobiliario e construcao civil",
      "Comercio eletronico e logistica"
    ],
    "coolingSectors": [
      "Atendimento ao cliente e call centers de primeiro nivel (substituidos por IA)",
      "Funcoes administrativas e analistas generalistas de rotina",
      "Marketing imobiliario e partes do varejo de shopping/especializado (demanda mais fraca)",
      "Hospitalidade e turismo em segmentos sensiveis a oscilacoes regionais",
      "Cargos de entrada repetitivos em geral, pressionados pela automacao"
    ],
    "inDemandRoles": [
      {
        "role": "Engenheiro de IA / Machine Learning",
        "note": "Escassez aguda de lideres de IA capazes de entregar em escala; premio salarial de 15% a 25% acima da media."
      },
      {
        "role": "Especialista em ciberseguranca",
        "note": "Entre os campos com maior carencia de talento no pais."
      },
      {
        "role": "Gerente de data center",
        "note": "Prioridade de contratacao com a expansao de infraestrutura digital."
      },
      {
        "role": "Gerente e diretor de projetos",
        "note": "Demanda forte em construcao, tecnologia e energia; valoriza-se experiencia previa no Golfo (GCC)."
      },
      {
        "role": "Engenheiro civil",
        "note": "Impulsionado por projetos de infraestrutura de grande escala."
      },
      {
        "role": "Gestor de patrimonio (wealth manager)",
        "note": "Crescimento puxado por ADGM e DIFC."
      },
      {
        "role": "Medicos especialistas e enfermeiros",
        "note": "Expansao de redes hospitalares e turismo medico eleva salarios; exige licenca DHA, DOH ou MOHAP."
      },
      {
        "role": "Profissionais de energia renovavel e sustentabilidade",
        "note": "Setor entre os de maior crescimento com investimento em energia limpa."
      },
      {
        "role": "Profissionais de vendas de alta performance",
        "note": "Pacotes em alta para perfis que entregam resultado."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao / Engenharia de Software",
        "advice": "Setor com a maior carencia de talento do pais. Foco em IA/ML, ciberseguranca, cloud e dados rende premio de 15% a 25% sobre a media. Vale buscar Golden Visa por qualificacao (salario a partir de AED 30.000/mes com diploma autenticado) ou abrir empresa em free zone de tecnologia."
      },
      {
        "area": "Engenharia (civil, infraestrutura, energia)",
        "advice": "Construcao e energia lideram a contratacao em 2026. Engenheiros civis e gerentes de projeto com perfil tecnico mais lideranca sao prioridade. Engenharia e profissao regulamentada: verificar registro junto a Society of Engineers/autoridade do emirato antes de exercer."
      },
      {
        "area": "Saude (medicina, enfermagem, areas aliadas)",
        "advice": "Demanda alta e crescente, mas o exercicio depende de licenca da autoridade do emirato: DHA em Dubai, DOH em Abu Dhabi e MOHAP nos emirados do Norte. O processo passa por verificacao DataFlow, avaliacao de qualificacao e exame. O pais avanca para uma plataforma unificada de licenciamento ate 2026."
      },
      {
        "area": "Financas, contabilidade e gestao de patrimonio",
        "advice": "ADGM e DIFC concentram as melhores vagas e mostram crescimento de dois digitos. Gerentes de nivel medio e cargos de VP/diretor pagam bem. Experiencia previa no Golfo e diferencial relevante."
      },
      {
        "area": "Administracao, atendimento e funcoes de rotina",
        "advice": "Area sob maior pressao da automacao. Recomenda-se requalificar para perfis hibridos que combinem competencia humana com fluencia digital, ou migrar para funcoes de coordenacao/projeto."
      },
      {
        "area": "Empreendedores e investidores",
        "advice": "100% de propriedade estrangeira permitida na maioria das atividades de mainland (DED) e em todas as free zones (DMCC, IFZA, DIFC, Meydan, RAKEZ e outras). Projeto a partir de AED 500.000 abre caminho para Golden Visa de empreendedor. Conferir se a atividade nao esta na lista restrita (defesa, utilities)."
      }
    ],
    "salaries": [
      {
        "role": "Media geral de salario em Dubai",
        "range": "AED 15.800 a 18.000/mes (mediana ~AED 13.800)",
        "source": {
          "label": "Sintese Michael Page, Hays e Cooper Fitch (via guias de mercado 2026)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Financas - analista junior",
        "range": "AED 8.000 a 12.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Financas - gerente (nivel medio)",
        "range": "AED 20.000 a 35.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Financas - VP/Diretor",
        "range": "AED 45.000 a 75.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Tecnologia - desenvolvedor junior",
        "range": "AED 7.000 a 12.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Tecnologia / TI - media geral",
        "range": "~AED 28.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Saude - nivel de entrada",
        "range": "AED 6.000 a 10.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Saude - nivel senior",
        "range": "AED 50.000 a 80.000/mes",
        "source": {
          "label": "Guia de salarios Dubai 2026 (consolidado de mercado)",
          "url": "https://www.michaelpage.ae/salary-guide-uae",
          "official": true
        }
      },
      {
        "role": "Salario minimo de emirati no setor privado (referencia de piso de mercado)",
        "range": "AED 6.000/mes (vigente desde 01/01/2026)",
        "source": {
          "label": "MOHRE / Khaleej Times",
          "url": "https://www.khaleejtimes.com/uae/firms-6-month-adjustment-period-dh6000-minimum-wage-citizens",
          "official": true
        }
      }
    ],
    "foreignerRules": "Trabalhar nos Emirados sem permissao de trabalho valida emitida pelo MOHRE e ilegal. O MOHRE mantem 13 tipos de permissao de trabalho, concedidas a empresas registradas conforme a natureza do cargo. O custo de emissao/renovacao varia de AED 250 a AED 3.450 conforme a classificacao da empresa (categoria A, B ou C), e a permissao costuma sair em cerca de cinco dias uteis pela iniciativa Work Bundle. A permissao de trabalho nao se confunde com o visto de residencia: e a aprovacao laboral que habilita o trabalho sob a lei trabalhista, enquanto a residencia segue por canal proprio (ICP). Ponto critico: mesmo titulares de Golden Visa, visto de investidor, Green Visa ou visto familiar precisam obter permissao de trabalho separada do MOHRE antes de comecar um emprego assalariado. Profissoes regulamentadas: saude exige licenca da autoridade do emirato (DHA em Dubai, DOH em Abu Dhabi, MOHAP nos emirados do Norte), com verificacao DataFlow, avaliacao de qualificacao (PQR) e exame; engenharia e direito tambem exigem registro/licenciamento local. Emiratizacao: empresas de mainland com 50+ funcionarios devem ampliar a contratacao de emiratis em cargos qualificados (meta de 2% ao ano, rumo a 10% em 2026), com multa de AED 6.000/mes por vaga emirati nao preenchida; isso pressiona a concorrencia por vagas qualificadas, embora a maioria das free zones esteja isenta. O programa Nafis e o portal nafis.gov.ae sao exclusivos para cidadaos emiratis, nao para estrangeiros. Empreender: desde a reforma de 2021, ha 100% de propriedade estrangeira na maioria das atividades de mainland (DED) e em todas as free zones; atividades restritas (defesa, utilities) ainda exigem aprovacoes especiais.",
    "opportunityWindows": [
      "Golden Visa por qualificacao: profissionais com salario a partir de AED 30.000/mes e diploma autenticado obtem residencia renovavel de 5 ou 10 anos",
      "Golden Visa de empreendedor: projeto avaliado em AED 500.000 ou mais",
      "Golden Visa de investidor: AED 2.000.000 em investimento/imovel, sem exigencia de entrada minima desde fevereiro de 2026",
      "Expansao de categorias do Golden Visa (2025-2026): criadores de conteudo, educadores, enfermeiros com 15+ anos, doadores de Waqf e profissionais de e-sports",
      "100% de propriedade estrangeira em mainland e free zones para abrir empresa sem socio local",
      "Premio de 15% a 25% para perfis de IA, ciberseguranca, cloud e blockchain",
      "Expansao hospitalar e turismo medico elevando salarios de especialistas e enfermeiros",
      "Crescimento de ADGM e DIFC abrindo vagas em banca, investimento e gestao de patrimonio"
    ],
    "jobBoards": [
      {
        "label": "Nafis (portal oficial do governo - exclusivo para cidadaos emiratis)",
        "url": "https://nafis.gov.ae/",
        "official": true
      },
      {
        "label": "MOHRE - Ministerio de Recursos Humanos e Emiratizacao (servicos e permissoes de trabalho)",
        "url": "https://www.mohre.gov.ae/en/",
        "official": true
      },
      {
        "label": "Portal Oficial do Governo dos Emirados - emprego no setor privado",
        "url": "https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector",
        "official": true
      },
      {
        "label": "Bayt.com (lider de mercado MENA)",
        "url": "https://www.bayt.com/en/uae/",
        "official": false
      },
      {
        "label": "GulfTalent (profissionais do Golfo)",
        "url": "https://www.gulftalent.com/",
        "official": false
      },
      {
        "label": "Naukrigulf",
        "url": "https://www.naukrigulf.com/",
        "official": false
      },
      {
        "label": "Michael Page UAE (guia de salarios e vagas executivas)",
        "url": "https://www.michaelpage.ae/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Portal Oficial do Governo dos Emirados (u.ae) - Permissoes de trabalho",
        "url": "https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/job-offers-and-work-permits-and-contracts/work-permits",
        "official": true
      },
      {
        "label": "MOHRE - Emissao de nova permissao de trabalho",
        "url": "https://www.mohre.gov.ae/en/services/recruiting-a-worker-from-overseas-2022",
        "official": true
      },
      {
        "label": "u.ae - Golden Visa (categorias e requisitos)",
        "url": "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa",
        "official": true
      },
      {
        "label": "u.ae - Emprego de emiratis no setor privado (Emiratizacao)",
        "url": "https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/emiratis-employment-in-private-sector",
        "official": true
      },
      {
        "label": "Department of Health Abu Dhabi (DOH) - Professional Qualification Requirement",
        "url": "https://www.doh.gov.ae/en/pqr",
        "official": true
      },
      {
        "label": "Ministerio da Saude e Prevencao (MOHAP) - Licenciamento de medico",
        "url": "https://mohap.gov.ae/en/w/licensing-of-a-doctor",
        "official": true
      },
      {
        "label": "Nafis - Programa federal de emiratizacao (cidadaos emiratis)",
        "url": "https://nafis.gov.ae/",
        "official": true
      },
      {
        "label": "Gulf News - Setores que mais vao contratar em Dubai e Abu Dhabi em 2026",
        "url": "https://gulfnews.com/business/markets/looking-for-a-job-these-sectors-will-hire-the-most-in-dubai-and-abu-dhabi-in-2026-1.500334767",
        "official": false
      },
      {
        "label": "Michael Page - Guia de Salarios UAE 2026",
        "url": "https://www.michaelpage.ae/salary-guide-uae",
        "official": false
      },
      {
        "label": "Khaleej Times - Salario minimo de emiratis no setor privado (AED 6.000)",
        "url": "https://www.khaleejtimes.com/uae/firms-6-month-adjustment-period-dh6000-minimum-wage-citizens",
        "official": false
      },
      {
        "label": "The National - Mercado de trabalho do Golfo com contratacao seletiva em 2026",
        "url": "https://www.thenationalnews.com/business/money/2026/04/28/uae-and-gulf-jobs-market-sees-selective-hiring-amid-war-driven-tourism-slump/",
        "official": false
      },
      {
        "label": "Moores Rowland - 100% de propriedade estrangeira no UAE (Decreto-Lei 32/2021)",
        "url": "https://mooresrowlanduae.com/blog/can-foreigners-own-100-of-company-in-uae/",
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
    "overview": "O mercado de trabalho italiano em 2026 vive um paradoxo estrutural: desemprego em mínimos históricos convivendo com escassez aguda de mão de obra. Segundo o ISTAT (abril de 2026), a taxa de desemprego caiu para 5,1%, a taxa de ocupação subiu para 63,1% e o desemprego juvenil recuou para 16,9%, com cerca de 25,3 milhões de ocupados e crescimento anual de aproximadamente 269 mil postos. Por trás dos números favoráveis há um envelhecimento populacional acelerado, baixa natalidade e emigração de jovens qualificados (brain drain), que esvaziam a oferta de trabalhadores. A consequência é um mismatch severo: a pesquisa Excelsior da Unioncamere com o Ministério do Trabalho aponta que em junho de 2026 cerca de 42% dos perfis procurados pelas empresas eram difíceis de encontrar, com picos acima de 56% para operários especializados e 51% para profissões técnicas. Esse cenário abre espaço real para o trabalhador e o empreendedor estrangeiro. Uma em cada três empresas italianas planeja contratar trabalhadores não comunitários, e o Estado respondeu ampliando o Decreto Flussi 2026-2028 para mais de 497 mil ingressos no triênio. A divisão é geográfica e setorial: o Norte industrializado concentra a maior dificuldade de contratação, enquanto o Sul mantém salários mais baixos e desemprego mais alto. Para o imigrante, as portas mais largas estão na saúde, no turismo, na construção, na indústria especializada, na agricultura sazonal e na tecnologia. Para o empreendedor, existem trilhas específicas via lavoro autonomo e o programa Italia Startup Visa.",
    "hotSectors": [
      "Saúde e assistência (enfermagem, técnicos de saúde, cuidadores)",
      "Turismo e hotelaria (cozinheiros, garçons, recepcionistas)",
      "Construção civil (soldadores, eletricistas, pedreiros)",
      "Tecnologia da informação e cibersegurança",
      "Indústria especializada (metalurgia, têxtil-vestuário, madeira-mobiliário)",
      "Agricultura sazonal (colheita de frutas e hortaliças)",
      "Energia renovável e transição ecológica (green jobs)",
      "Mecatrônica e operadores de máquinas e plantas"
    ],
    "coolingSectors": [
      "Manufatura industrial tradicional",
      "Construção em alguns segmentos com queda anual de obras",
      "Funções administrativas e burocráticas de baixa qualificação",
      "Trabalho geral não especializado e mão de obra agrícola sem qualificação"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a)",
        "note": "Escassez estimada em cerca de 65 mil vagas não preenchidas, num país com 23,5% da população acima de 65 anos. Profissão regulamentada, exige reconhecimento do título."
      },
      {
        "role": "Operário especializado",
        "note": "Difícil de encontrar em 56,4% dos casos segundo a Excelsior de junho de 2026, com pico acima de 60% na metalurgia, têxtil e móveis."
      },
      {
        "role": "Técnico (perfis técnicos qualificados)",
        "note": "Difícil de encontrar em 51,8% dos casos; inclui técnicos de engenharia, de saúde e de design de aplicações."
      },
      {
        "role": "Desenvolvedor de software e especialista em TI",
        "note": "Roles digitais lideram a lista de mais difíceis de preencher por três anos consecutivos segundo Unioncamere-Excelsior."
      },
      {
        "role": "Trabalhador da construção civil",
        "note": "Déficit estimado em cerca de 100 mil trabalhadores no setor."
      },
      {
        "role": "Cuidador e assistente familiar (badante)",
        "note": "13.600 cotas reservadas para assistência familiar no Decreto Flussi 2026."
      },
      {
        "role": "Trabalhador sazonal agrícola e de turismo",
        "note": "88 mil cotas sazonais no Decreto Flussi; agricultura prevê cerca de 44 mil contratos só em junho de 2026."
      },
      {
        "role": "Soldador, eletricista e pedreiro",
        "note": "Perfis de construção citados pela EURES com dificuldade de recrutamento entre as mais altas."
      },
      {
        "role": "Cozinheiro, garçom e recepcionista de hotel",
        "note": "Turismo é setor em expansão, com centenas de milhares de pedidos de contratação no ano."
      },
      {
        "role": "Especialista em cibersegurança e analista de dados",
        "note": "Demanda puxada pela transformação digital e pela transição verde."
      }
    ],
    "byQualification": [
      {
        "area": "Saúde (medicina, enfermagem, fisioterapia)",
        "advice": "Setor com a maior escassez do país e demanda crônica. O passo decisivo é o reconhecimento do título estrangeiro junto ao Ministério da Saúde (Ministero della Salute), competente para médico, enfermeiro, fisioterapeuta, farmacêutico e afins. São profissões regulamentadas: sem reconhecimento e, em geral, comprovação de italiano (frequentemente nível B2), não há exercício legal."
      },
      {
        "area": "Tecnologia da informação e engenharia de software",
        "advice": "Uma das áreas mais quentes e com menos barreiras formais de habilitação para perfis não regulamentados (programador, dev, dados, cibersegurança). Faixas salariais entre as melhores do país. Inglês abre portas, mas o italiano amplia muito o leque. Caminho natural também para o Italia Startup Visa."
      },
      {
        "area": "Engenharia (civil, mecânica, elétrica)",
        "advice": "Forte demanda por técnicos e engenheiros, sobretudo no Norte industrial e em energia/transição verde. Engenharia é profissão regulamentada pelo Ministério da Justiça quando se usa o título de engenheiro habilitado; verificar reconhecimento e inscrição na ordem (Albo). Salários médios de 35 a 42 mil euros, com picos em software e óleo e gás."
      },
      {
        "area": "Construção e ofícios técnicos (trades)",
        "advice": "Déficit de cerca de 100 mil trabalhadores. Soldadores, eletricistas e pedreiros entram com relativa facilidade, inclusive por cotas do Decreto Flussi. Não exigem diploma universitário, mas valorizam certificação técnica e experiência comprovada."
      },
      {
        "area": "Hotelaria, gastronomia e turismo",
        "advice": "Porta de entrada clássica para o imigrante, com forte componente sazonal e cotas dedicadas. Cozinheiros, garçons e recepcionistas são muito procurados. Italiano funcional é o principal diferencial de empregabilidade."
      },
      {
        "area": "Agricultura",
        "advice": "Caminho mais acessível via cotas sazonais (88 mil no Decreto Flussi 2026). Colheita em Puglia, Sicília e Veneto sofre escassez crônica. Baixa exigência de qualificação formal, mas trabalho fisicamente intenso e majoritariamente temporário."
      },
      {
        "area": "Profissões jurídicas, contábeis e regulamentadas (advogado, contador, jornalista)",
        "advice": "Caminho mais difícil para estrangeiros: reconhecimento pelo Ministério da Justiça, prova de aptidão e domínio avançado do italiano. Recomendado só a quem já tem base sólida e disposição para o processo longo de habilitação."
      },
      {
        "area": "Empreendedores e investidores",
        "advice": "Duas trilhas principais: lavoro autonomo (exige projeto de interesse econômico com recursos próprios de pelo menos 500 mil euros e criação de ao menos 3 empregos, dentro das cotas) e o Italia Startup Visa para startups inovadoras (capital de 50 mil euros para nova empresa, fora das cotas do Decreto Flussi e com processo mais ágil)."
      }
    ],
    "salaries": [
      {
        "role": "Salário médio nacional (RAL)",
        "range": "29.000 a 32.000 euros brutos/ano (líquido mensal aprox. 1.650 a 1.750 euros em 13 salários)",
        "source": {
          "label": "JobPricing/ISTAT 2026 via PMI.it",
          "url": "https://www.pmi.it/economia/lavoro/404244/stipendi-classifica-italiana-delle-retribuzioni.html",
          "official": true
        }
      },
      {
        "role": "Engenheiro",
        "range": "35.000 a 42.000 euros brutos/ano; picos de 50.000 a 60.000 em software e óleo e gás (sênior)",
        "source": {
          "label": "JobPricing 2026 via PMI.it",
          "url": "https://www.pmi.it/economia/lavoro/404244/stipendi-classifica-italiana-delle-retribuzioni.html",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software",
        "range": "Júnior aprox. 26.000 a 27.000; middle 45.000 a 55.000 euros brutos/ano; sênior acima",
        "source": {
          "label": "JobPricing 2026 via PMI.it",
          "url": "https://www.pmi.it/economia/lavoro/404244/stipendi-classifica-italiana-delle-retribuzioni.html",
          "official": true
        }
      },
      {
        "role": "Enfermeiro (SSN, CCNL Sanità)",
        "range": "26.000 a 32.000 euros brutos/ano (líquido mensal aprox. 1.600 a 1.900 euros)",
        "source": {
          "label": "JobPricing 2026 via PMI.it",
          "url": "https://www.pmi.it/economia/lavoro/404244/stipendi-classifica-italiana-delle-retribuzioni.html",
          "official": true
        }
      },
      {
        "role": "Diferença regional (Norte vs Sul)",
        "range": "Norte aprox. 31.921 euros vs Sul aprox. 28.254 euros brutos/ano",
        "source": {
          "label": "Remitly Blog Itália 2026",
          "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Trabalhadores não comunitários (extracomunitari) entram majoritariamente pelas cotas anuais do Decreto Flussi. O D.P.C.M. de 2 de outubro de 2025 fixou mais de 497 mil ingressos no triênio 2026-2028, com 164.850 entradas só em 2026, distribuídas em: 76.200 para trabalho subordinado não sazonal, 88.000 para trabalho sazonal (agricultura e turismo) e 650 para lavoro autonomo. Há cotas reservadas, incluindo 13.600 para assistência familiar (badanti) e fatias para países prioritários e com acordos de cooperação migratória. O processo passa por nulla osta (autorização) e click day. O empregador na Itália inicia o pedido; o trabalhador obtém o visto no consulado e, após chegar, tem 8 dias para solicitar o permesso di soggiorno via kit postal na Questura. Cidadãos da UE não precisam de permissão de trabalho. Para o lavoro autonomo, além das cotas, o empreendedor precisa de projeto de interesse econômico com recursos próprios de pelo menos 500.000 euros e criação de ao menos 3 empregos, ou ser profissional reconhecido em profissão regulamentada; renda mínima de referência cerca de 8.400 euros/ano e permesso de até 2 anos. O Italia Startup Visa é uma trilha separada, fora das cotas, para startups inovadoras (incorporadas há até 5 anos, P&D igual ou acima de 15% do faturamento, equipe altamente qualificada, capital de 50.000 euros para criar nova empresa ou 100.000 para entrar em existente), com nulla osta emitido em cerca de 30 dias e visto nacional tipo D válido por 1 ano. Profissões regulamentadas (médico, enfermeiro, fisioterapeuta, farmacêutico, veterinário, psicólogo pelo Ministério da Saúde; advogado, engenheiro, contador, biólogo, químico, geólogo, jornalista pelo Ministério da Justiça) exigem reconhecimento formal do título estrangeiro, eventual prova de aptidão e inscrição na ordem profissional (Albo) antes do exercício legal. O CIMEA cuida do reconhecimento acadêmico, mas não do profissional.",
    "opportunityWindows": [
      "Click day do Decreto Flussi: janelas anuais e datadas para envio dos pedidos de nulla osta dentro das cotas; perder a data significa esperar o ciclo seguinte",
      "Temporada turística (estimativa de cerca de 190 mil postos em junho de 2026 e cerca de 1,5 milhão de contratos no trimestre junho-agosto), com pico de contratação na primavera/verão",
      "Colheita agrícola sazonal em Puglia, Sicília e Veneto, com escassez crônica de mão de obra",
      "Cotas sazonais amplas (88 mil em 2026) renovadas a cada ano, com prioridade para agricultura e turismo",
      "Demanda permanente e crescente em saúde e enfermagem, sustentada pelo envelhecimento da população (23,5% acima de 65 anos)",
      "Avaliação contínua do comitê do Italia Startup Visa, com nulla osta em cerca de 30 dias, fora do calendário de cotas"
    ],
    "jobBoards": [
      {
        "label": "Cliclavoro (Ministero del Lavoro e delle Politiche Sociali) - portal oficial de ofertas e serviços de emprego",
        "url": "https://www.cliclavoro.gov.it/",
        "official": true
      },
      {
        "label": "EURES - portal europeu de mobilidade laboral, seção Itália",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-italy_en",
        "official": true
      },
      {
        "label": "Italia Startup Visa (MIMIT/MISE) - portal oficial para empreendedores não comunitários",
        "url": "https://italiastartupvisa.mise.gov.it/",
        "official": true
      },
      {
        "label": "Sistema Informativo Excelsior (Unioncamere) - dados oficiais de demanda de profissões e previsões de contratação",
        "url": "https://excelsior.unioncamere.net/",
        "official": true
      },
      {
        "label": "Integrazione Migranti (Ministero dell'Interno e del Lavoro) - guia oficial sobre ingresso para trabalho",
        "url": "https://www.integrazionemigranti.gov.it/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "ISTAT - Employment and unemployment (provisional data), April 2026",
        "url": "https://www.istat.it/en/press-release/employment-and-unemployment-provisional-data-april-2026/",
        "official": true
      },
      {
        "label": "ISTAT - Labour Market Q1 2026",
        "url": "https://www.istat.it/en/press-release/labour-market-q1-2026/",
        "official": true
      },
      {
        "label": "Ministero del Lavoro - Flussi 2026-2028, decreto da oltre 497mila ingressi",
        "url": "https://www.lavoro.gov.it/priorita/pagine/flussi-2026-2028-pubblicato-il-decreto-da-oltre-497mila-ingressi",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information Italy",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-italy_en",
        "official": true
      },
      {
        "label": "Sistema Informativo Excelsior (Unioncamere) - bollettino e previsioni",
        "url": "https://excelsior.unioncamere.net/",
        "official": true
      },
      {
        "label": "Unioncamere - Report semestrale sul mismatch domanda-offerta di lavoro 2-2026",
        "url": "https://www.unioncamere.gov.it/sites/default/files/articoli/2026-02/Report%20semestrale_2-2026_def2402%20versione%20PDF.pdf",
        "official": true
      },
      {
        "label": "Ministero dell'Interno - Visto e permesso di soggiorno",
        "url": "https://www.interno.gov.it/it/temi/immigrazione-e-asilo/modalita-dingresso/visto-e-permesso-soggiorno",
        "official": true
      },
      {
        "label": "Italia Startup Visa (MIMIT/MISE)",
        "url": "https://italiastartupvisa.mise.gov.it/",
        "official": true
      },
      {
        "label": "MIMIT - Startup innovative, programmi",
        "url": "https://www.mimit.gov.it/it/impresa/competitivita-e-nuove-imprese/start-up-innovative/programmi",
        "official": true
      },
      {
        "label": "Ministero della Giustizia - Riconoscimento titoli professionali conseguiti all'estero",
        "url": "https://www.giustizia.it/giustizia/it/mg_2_4_1.wp",
        "official": true
      },
      {
        "label": "CIMEA - Professional recognition",
        "url": "https://www.cimea.it/EN/pagina-riconoscimento-professionale",
        "official": true
      },
      {
        "label": "Cliclavoro (Ministero del Lavoro) - domanda e offerta di lavoro",
        "url": "https://www.cliclavoro.gov.it/",
        "official": true
      },
      {
        "label": "JobPricing/ISTAT 2026 - stipendi per professione via PMI.it",
        "url": "https://www.pmi.it/economia/lavoro/404244/stipendi-classifica-italiana-delle-retribuzioni.html",
        "official": false
      },
      {
        "label": "Remitly - Stipendi medi in Italia 2026 (variabilità regionale)",
        "url": "https://www.remitly.com/blog/it/lavori/stipendi-medi-in-italia/",
        "official": false
      }
    ]
  },
  "dk": {
    "updatedAt": "2026-06-22",
    "overview": "A Dinamarca entra em 2026 com um mercado de trabalho em transicao: o desemprego registrado subiu para 2,7% em abril de 2026, o maior patamar desde 2021, segundo dados da Danmarks Statistik. Apesar da alta, o nivel permanece baixo no contexto europeu e a economia ainda convive com escassez estrutural de mao de obra qualificada em tecnologia, engenharia, saude e construcao. O ano traz dois sinais opostos. De um lado, demissoes de peso, com destaque para a Novo Nordisk, que anunciou corte de cerca de 9.000 vagas globalmente, sendo 5.000 na Dinamarca, alem de dispensas crescentes em varios setores publicos e privados. De outro, o pais segue dependente de talento estrangeiro e atualizou suas Listas Positivas e regras de imigracao em janeiro de 2026. Para imigrantes de fora da UE, o caminho passa pelos esquemas de autorizacao de trabalho administrados pela SIRI (Agencia Dinamarquesa de Recrutamento e Integracao Internacional). Os limites salariais subiram: o Pay Limit Scheme exige salario anual minimo de DKK 552.000 em 2026. Uma novidade relevante para brasileiros e o novo esquema baseado em acordos coletivos, com salario minimo mais baixo, proposto para nacionais de 16 paises, entre eles o Brasil. A maioria das vagas qualificadas nao exige dinamarques, com excecao notavel da area de saude.",
    "hotSectors": [
      "Tecnologia da informacao (desenvolvimento de software, ciberseguranca, cloud, IA e machine learning)",
      "Engenharia (mecanica, eletrica e civil, com forte demanda em energia verde e eolica offshore)",
      "Energia verde e renovaveis",
      "Saude e cuidados (enfermagem, assistentes sociais e de saude)",
      "Oficios qualificados (eletricistas, encanadores, soldadores, mecanicos industriais, carpinteiros)",
      "Ciencias da vida e biotecnologia",
      "Industria e manufatura",
      "Transporte e logistica",
      "Construcao civil",
      "Negocios e financas"
    ],
    "coolingSectors": [
      "Farmaceutico de grande porte, impactado pelos cortes da Novo Nordisk (cerca de 5.000 vagas eliminadas na Dinamarca)",
      "Setores afetados por demissoes generalizadas que se tornaram comuns ao longo de 2026, em organizacoes publicas e privadas",
      "Profissoes regulamentadas de saude para estrangeiros de fora da UE, com a cota de autorizacao de enfermeiros e medicos fixada em zero ate 31 de dezembro de 2026"
    ],
    "inDemandRoles": [
      {
        "role": "Especialista em ciberseguranca",
        "note": "Apontada como a vaga mais dificil de preencher no pais, pressionada pela diretiva NIS2 e por escassez de profissionais"
      },
      {
        "role": "Desenvolvedor de software",
        "note": "Demanda alta e estavel; entre as ocupacoes mais buscadas em TI"
      },
      {
        "role": "Engenheiro de IA e machine learning"
      },
      {
        "role": "Engenheiro de cloud / cloud engineer",
        "note": "Consta nas Listas Positivas oficiais"
      },
      {
        "role": "Cientista de dados / data scientist",
        "note": "Consta nas Listas Positivas oficiais"
      },
      {
        "role": "Engenheiro mecanico",
        "note": "Consta nas Listas Positivas; forte demanda em energia verde"
      },
      {
        "role": "Engenheiro de energias renovaveis",
        "note": "Projetos de eolica offshore e redes inteligentes"
      },
      {
        "role": "Enfermeiro / healthcare nurse",
        "note": "Consta na Lista Positiva, mas autorizacao para nao-UE esta com cota zero ate 31/12/2026"
      },
      {
        "role": "Assistente social e de saude (SOSU)",
        "note": "Deficit projetado de 15.000 trabalhadores na proxima decada"
      },
      {
        "role": "Eletricista, encanador, soldador, mecanico industrial",
        "note": "Oficios qualificados na Lista Positiva para trabalho especializado"
      },
      {
        "role": "Professor de educacao profissional (VET teacher)",
        "note": "Consta nas Listas Positivas oficiais"
      },
      {
        "role": "Business Intelligence Manager",
        "note": "Adicionado a Lista Positiva de ensino superior em janeiro de 2026"
      }
    ],
    "byQualification": [
      {
        "area": "TI e Computacao (ensino superior)",
        "advice": "Setor com maior carencia do pais. Vagas como desenvolvedor, especialista em ciberseguranca, engenheiro de cloud, dados e IA estao na Lista Positiva para Pessoas com Ensino Superior, o que reduz a exigencia salarial. Ingles costuma bastar. Empregadores certificados pela SIRI permitem contratacao rapida pelo Fast-Track Scheme."
      },
      {
        "area": "Engenharia (ensino superior)",
        "advice": "Deficit projetado de profissionais STEM de 13.000 ate 2030. Engenheiros mecanicos, eletricos e civis com perfil de energia verde e eolica offshore tem caminho facilitado pela Lista Positiva. Verifique se o titulo exato consta na lista vigente publicada no nyidanmark.dk."
      },
      {
        "area": "Saude (profissoes regulamentadas)",
        "advice": "Atencao critica: medico e enfermeiro sao profissoes regulamentadas e a cota de autorizacao para nao-UE esta fixada em ZERO ate 31 de dezembro de 2026, o que impede a concessao de residencia para quem busca essa autorizacao. Para sete profissoes (enfermeiro de cuidados gerais, parteira, medico, dentista, farmaceutico, veterinario e arquiteto) ha reconhecimento automatico apenas sob regras da UE. Recomenda-se acompanhar a reabertura da cota antes de planejar a mudanca."
      },
      {
        "area": "Oficios qualificados / ensino tecnico (VET)",
        "advice": "Eletricistas, encanadores, soldadores, carpinteiros, mecanicos industriais e cozinheiros constam na Lista Positiva para Trabalho Especializado (54 titulos em 2026). Exige qualificacao vocacional comprovada. Pode haver necessidade de reconhecimento de qualificacao junto a agencia dinamarquesa."
      },
      {
        "area": "Negocios, financas e dados",
        "advice": "Demanda solida em analise de dados, business intelligence e financas. Business Intelligence Manager e Communication Officer entraram na Lista Positiva em 2026. Para perfis fora da lista, o Pay Limit Scheme (DKK 552.000/ano) abre porta independentemente da ocupacao."
      },
      {
        "area": "Empreendedores e autonomos",
        "advice": "O esquema Start-up Denmark e a via para nao-europeus que querem abrir negocio inovador e escalavel, idealmente em alta tecnologia ou energia verde. Negocios tradicionais como restaurantes, varejo e consultoria normalmente nao sao elegiveis. O plano de negocios e avaliado por um painel de especialistas e a cota anual gira em torno de 75 aprovacoes."
      }
    ],
    "salaries": [
      {
        "role": "Media geral (todos os setores, ganho-hora padronizado)",
        "range": "DKK 315,92 por hora (2024); crescimento de +3,2% no 1o trimestre de 2026",
        "source": {
          "label": "Danmarks Statistik (Statistics Denmark) - Earnings",
          "url": "https://www.dst.dk/en/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor/engenheiro de software (junior, ate 2 anos)",
        "range": "DKK 400.000 a 500.000 por ano",
        "source": {
          "label": "Glassdoor / IT-Jobs-DK (referencia de mercado)",
          "url": "https://www.glassdoor.com/Salaries/copenhagen-denmark-software-developer-salary-SRCH_IL.0,18_IM958_KO19,37.htm",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software (pleno, 2 a 5 anos)",
        "range": "DKK 500.000 a 650.000 por ano",
        "source": {
          "label": "Glassdoor / IT-Jobs-DK (referencia de mercado)",
          "url": "https://www.it-jobs-dk.com/software-engineer-salary-denmark/",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software (senior, +5 anos)",
        "range": "DKK 650.000 a 800.000 por ano",
        "source": {
          "label": "Glassdoor / IT-Jobs-DK (referencia de mercado)",
          "url": "https://www.it-jobs-dk.com/software-engineer-salary-denmark/",
          "official": true
        }
      },
      {
        "role": "Engenheiro especializado (entrada)",
        "range": "DKK 45.000 a 50.000 por mes",
        "source": {
          "label": "Edstellar / referencia de mercado",
          "url": "https://www.edstellar.com/blog/skills-in-demand-in-denmark",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica podem trabalhar imediatamente, mas devem se registrar na SIRI se permanecerem mais de tres meses (certificado de registro). Para nacionais de fora da UE, e necessaria residencia e autorizacao de trabalho concedida pela SIRI, com varias vias. Pay Limit Scheme: exige oferta com salario anual minimo de DKK 552.000 (nivel 2026), valido para qualquer ocupacao; taxa de DKK 6.810; minimo de 30 horas semanais; salario pago em conta bancaria dinamarquesa. Supplementary Pay Limit Scheme: salario minimo de DKK 446.000, com exigencia de a vaga ter sido publicada no Jobnet e no portal EURES por ao menos 2 semanas. Listas Positivas (atualizadas 2x ao ano, em janeiro e julho): permitem exigencia salarial menor quando o cargo consta na lista; em 2026 ha 180 titulos na Lista de Ensino Superior e 54 na Lista de Trabalho Especializado. Fast-Track Scheme: via mais rapida para empresas certificadas pela SIRI (requisito que cai de 20 para 10 funcionarios em tempo integral). Novo esquema de acordo coletivo (proposta de 2026): salario minimo mais baixo (DKK 300.000, nivel 2025) para nacionais de 16 paises, incluindo o BRASIL, alem de Albania, Australia, Canada, China, India, Japao, Malasia, Moldavia, Montenegro, Macedonia do Norte, Servia, Singapura, Ucrania, Reino Unido e Estados Unidos; condicionado ao desemprego bruto ajustado permanecer em ate 3,75%. Profissoes regulamentadas: cerca de 120 profissoes exigem autorizacao (medico, enfermeiro, professor municipal, entre outras); para sete profissoes ha reconhecimento automatico sob regras da UE. ALERTA: a cota de autorizacao para enfermeiros e medicos esta fixada em ZERO ate 31 de dezembro de 2026, impedindo concessao de residencia a quem busca essa autorizacao. Empreendedores nao-UE usam o Start-up Denmark (negocio inovador e escalavel aprovado por painel de especialistas; permissao de ate 2 anos, renovavel).",
    "opportunityWindows": [
      "Listas Positivas atualizadas em janeiro de 2026: 180 titulos no ensino superior e 54 em trabalho especializado, com revisao seguinte em julho; conferir o titulo exato no nyidanmark.dk antes de aplicar",
      "Proposta do esquema de acordo coletivo de 2026 inclui o Brasil entre os 16 paises com limite salarial reduzido (DKK 300.000), uma porta nova e relevante para brasileiros",
      "Reducao do requisito de empresas certificadas no Fast-Track de 20 para 10 funcionarios, ampliando o numero de empregadores aptos a contratar estrangeiros com agilidade",
      "Demanda persistente e estrutural em TI, ciberseguranca, engenharia e energia verde mantem aberta a via da Lista Positiva e do Pay Limit Scheme",
      "Isencao para eventos (desde 19/12/2025): nacionais de terceiros paises podem trabalhar em conferencias e feiras com mais de 400 participantes por ate 10 dias uteis sem autorizacao",
      "Janela de atencao: cota zero para autorizacao de enfermeiros e medicos nao-UE vigora ate 31/12/2026, entao quem mira saude deve aguardar a eventual reabertura"
    ],
    "jobBoards": [
      {
        "label": "Workindenmark (portal oficial do governo para profissionais internacionais)",
        "url": "https://www.workindenmark.dk",
        "official": true
      },
      {
        "label": "Jobnet (banco de vagas oficial da STAR / Agencia do Mercado de Trabalho)",
        "url": "https://job.jobnet.dk",
        "official": true
      },
      {
        "label": "EURES (rede oficial europeia de mobilidade no emprego)",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "Nyidanmark.dk (SIRI - autorizacoes de trabalho e residencia)",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work",
        "official": true
      },
      {
        "label": "Start-up Denmark (programa oficial para empreendedores estrangeiros)",
        "url": "https://startupdenmarkprogramme.dk",
        "official": true
      },
      {
        "label": "Life in Denmark (portal oficial do cidadao - borger.dk)",
        "url": "https://lifeindenmark.borger.dk/working/finding-a-job",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Danmarks Statistik (Statistics Denmark) - Earnings",
        "url": "https://www.dst.dk/en/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen",
        "official": true
      },
      {
        "label": "Danmarks Statistik - Unemployment / Employment",
        "url": "https://www.dst.dk/en/Statistik/emner/arbejde-og-indkomst/beskaeftigelse-og-arbejdsloeshed",
        "official": true
      },
      {
        "label": "Nyidanmark.dk (SIRI) - Pay Limit Scheme",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme",
        "official": true
      },
      {
        "label": "Nyidanmark.dk (SIRI) - Positive List for skilled work",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists",
        "official": true
      },
      {
        "label": "Nyidanmark.dk (SIRI) - Fast-Track Scheme",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track",
        "official": true
      },
      {
        "label": "Nyidanmark.dk (SIRI) - Start-up Denmark",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark",
        "official": true
      },
      {
        "label": "Nyidanmark.dk (SIRI) - Authorisation (regulated professions)",
        "url": "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Authorisation/Authorisation",
        "official": true
      },
      {
        "label": "Workindenmark - Sectors with high demand",
        "url": "https://www.workindenmark.dk/working-in-denmark/sectors-with-high-demand",
        "official": true
      },
      {
        "label": "Workindenmark - Authorisation for regulated professions",
        "url": "https://www.workindenmark.dk/getting-started/rules-and-regulations/authorisation-for-regulated-professions",
        "official": true
      },
      {
        "label": "UFM - Recognition of regulated professions (EU rules)",
        "url": "https://ufm.dk/en/education/recognition-and-transparency/regulated-professions/applications-under-eu-rules",
        "official": true
      },
      {
        "label": "Trading Economics - Denmark Unemployment Rate (dados Danmarks Statistik)",
        "url": "https://tradingeconomics.com/denmark/unemployment-rate",
        "official": false
      },
      {
        "label": "Deloitte - Danish Immigration News January 2026",
        "url": "https://www.deloitte.com/dk/en/services/tax/perspectives/immigration-news-january-2026.html",
        "official": false
      },
      {
        "label": "Fragomen - Denmark: Positive Lists Updated",
        "url": "https://www.fragomen.com/insights/denmark-positive-lists-updated.html",
        "official": false
      },
      {
        "label": "Erickson Immigration Group - Denmark eases work permit rules for 16 countries",
        "url": "https://eiglaw.com/denmark-eases-work-permit-rules-for-nationals-of-16-countries/",
        "official": false
      },
      {
        "label": "Bloomberg - Novo Nordisk layoffs and Danish jobs data",
        "url": "https://www.bloomberg.com/news/articles/2026-04-28/danish-jobs-drop-snapping-growth-streak-as-novo-cuts-hit-data",
        "official": false
      },
      {
        "label": "The Copenhagen Post - Novo Nordisk layoffs push Danish employment down",
        "url": "https://cphpost.dk/2026-04-28/news/round-up/novo-nordisk-layoffs-push-danish-employment-down-for-first-time-in-18-months/",
        "official": false
      }
    ]
  },
  "pl": {
    "updatedAt": "2026-06-29",
    "overview": "A Polonia mantem um dos mercados de trabalho mais firmes da Uniao Europeia, com taxa de desemprego registrado de 5,6% em novembro de 2025 segundo o Statistics Poland (GUS), bem abaixo da media do bloco. O salario medio bruto no setor empresarial chegou a 8.881,84 zlotys mensais em junho de 2025, alta nominal de 9,0% em relacao ao ano anterior. As faltas de mao de obra ficaram estruturais, concentradas em construcao, saude, tecnologia e oficios industriais, enquanto a economia ainda gera vagas em servicos modernos e energia renovavel. A partir de junho de 2025 entrou em vigor uma ampla reforma das regras de emprego de estrangeiros, com processo 100% digital e fim do teste de mercado de trabalho.",
    "hotSectors": [
      "Construcao civil e oficios especializados",
      "Saude e cuidados",
      "Tecnologia da informacao e cibersseguranca",
      "Servicos modernos de negocio (BPO/SSC)",
      "Energia renovavel",
      "Logistica e transporte",
      "Financas, contabilidade e e-commerce"
    ],
    "coolingSectors": [
      "Reparo de veiculos",
      "Mineracao",
      "Manufatura tradicional em algumas regioes"
    ],
    "inDemandRoles": [
      {
        "role": "Eletricista e montador eletrico",
        "note": "Escassez ampla apontada pelo EURES e por servicos publicos de emprego."
      },
      {
        "role": "Soldador",
        "note": "Uma das maiores faltas de mao de obra do pais."
      },
      {
        "role": "Pedreiro, rebocador e telhadista",
        "note": "Construcao concentra o maior numero de ocupacoes em falta."
      },
      {
        "role": "Carpinteiro e marceneiro"
      },
      {
        "role": "Enfermeiro e parteira",
        "note": "Saude com escassez cronica em varias especialidades."
      },
      {
        "role": "Medico",
        "note": "Diversas especialidades em demanda."
      },
      {
        "role": "Professor",
        "note": "Ensino geral, vocacional, infantil e especial."
      },
      {
        "role": "Motorista de caminhao pesado e de onibus"
      },
      {
        "role": "Especialista em TI, IA e cibersseguranca"
      },
      {
        "role": "Engenheiro civil, eletrico e de energia"
      },
      {
        "role": "Especialista em contabilidade, analista de negocios e economia"
      },
      {
        "role": "Cuidador de idosos e pessoas com deficiencia"
      },
      {
        "role": "Cozinheiro"
      }
    ],
    "byQualification": [
      {
        "area": "Construcao e engenharia",
        "advice": "Setor com a maior carencia de mao de obra do pais. Oficios como soldador, eletricista, pedreiro e telhadista, alem de engenheiros civis, eletricos e de energia, encontram colocacao rapida. Certificacoes reconhecidas e experiencia pratica pesam mais que o idioma no inicio."
      },
      {
        "area": "Saude",
        "advice": "Enfermeiros, parteiras e medicos seguem em falta cronica em diversas especialidades. O caminho exige reconhecimento de diploma e, na pratica, dominio do polones para atendimento direto ao paciente."
      },
      {
        "area": "Tecnologia da informacao",
        "advice": "TI, implementacao de inteligencia artificial e cibersseguranca puxam vagas nos polos de servicos modernos como Varsovia, Cracovia e Wroclaw, com ingles frequentemente suficiente nas empresas internacionais."
      },
      {
        "area": "Educacao",
        "advice": "Professores aparecem entre as ocupacoes em falta no ensino geral, tecnico, infantil e especial. A atuacao costuma exigir polones e validacao de credenciais."
      },
      {
        "area": "Financas e administracao",
        "advice": "Contabilidade, analise de negocios e economia tem procura no setor financeiro e de e-commerce, sobretudo nos centros de servicos compartilhados. Atencao: economistas e pessoal administrativo geral aparecem como excedente em varias regioes, entao especializacao faz diferenca."
      },
      {
        "area": "Transporte e logistica",
        "advice": "Motoristas de caminhao pesado e de onibus, alem de especialistas em logistica, estao entre as vagas mais comuns. Habilitacoes e certificados profissionais validos no pais sao decisivos."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto no setor empresarial",
        "range": "8.881,84 PLN/mes bruto (junho de 2025)",
        "source": {
          "label": "Statistics Poland (GUS)",
          "url": "https://stat.gov.pl/en/topics/labour-market/working-employed-wages-and-salaries-cost-of-labour/average-paid-employment-and-average-gross-wages-and-salaries-in-enterprise-sector-in-june-2025,3,171.html",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "4.666 PLN/mes bruto (vigente em 2025); 4.806 PLN/mes bruto a partir de janeiro de 2026",
        "source": {
          "label": "Ministerio da Familia, Trabalho e Politica Social (gov.pl)",
          "url": "https://www.gov.pl/web/family/minimum-wage",
          "official": true
        }
      },
      {
        "role": "Piso salarial para Cartao Azul da UE",
        "range": "12.272,58 PLN/mes bruto (aplicacoes de 2025)",
        "source": {
          "label": "Comissao Europeia, EU Immigration Portal",
          "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-poland_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do Espaco Economico Europeu (EEE) e da Suica tem livre circulacao e trabalham na Polonia sem necessidade de autorizacao de trabalho, em igualdade com os nacionais. Quem vem de fora da UE (terceiros paises) precisa, em regra, de uma autorizacao de trabalho antes de comecar, salvo isencoes como familiares de cidadao da UE, titulares de certas residencias temporarias (pesquisadores, formados em universidades polonesas, reagrupamento familiar) e beneficiarios de protecao internacional. Desde 1 de junho de 2025, uma reforma ampla tornou o processo totalmente eletronico via praca.gov.pl, eliminou o teste de mercado de trabalho e deu aos voivodas o poder de recusar autorizacoes para profissoes em listas restritivas locais. Para profissionais altamente qualificados existe o Cartao Azul da UE, com contrato minimo reduzido para 6 meses e piso salarial de 12.272,58 PLN brutos/mes nas aplicacoes de 2025. Os prazos de analise variam de 2 a 5 meses conforme a regiao.",
    "opportunityWindows": [
      "Lista de ocupacoes em falta do EURES concentrada em construcao, oficios industriais (soldador, eletricista), saude (enfermeiro, medico) e ensino",
      "Cartao Azul da UE como via para profissionais altamente qualificados de fora da UE, com regras flexibilizadas em 2025",
      "Polos de servicos modernos de negocio (BPO/SSC) em Varsovia, Cracovia e Wroclaw absorvendo TI, financas e analise de negocios"
    ],
    "jobBoards": [
      {
        "label": "praca.gov.pl (Servicos Publicos de Emprego / Urzad Pracy)",
        "url": "https://psz.praca.gov.pl/",
        "official": true
      },
      {
        "label": "Portal EURES (mobilidade profissional na UE)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "gov.pl, secao Estrangeiros na Polonia",
        "url": "https://www.gov.pl/web/udsc-en",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "EURES, Informacao do mercado de trabalho da Polonia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-poland_en",
        "official": true
      },
      {
        "label": "Statistics Poland (GUS), taxa de desemprego registrado 1990-2025",
        "url": "https://stat.gov.pl/en/topics/labour-market/registered-unemployment/unemployment-rate-1990-2025,3,1.html",
        "official": true
      },
      {
        "label": "Statistics Poland (GUS), salario medio bruto no setor empresarial (junho 2025)",
        "url": "https://stat.gov.pl/en/topics/labour-market/working-employed-wages-and-salaries-cost-of-labour/average-paid-employment-and-average-gross-wages-and-salaries-in-enterprise-sector-in-june-2025,3,171.html",
        "official": true
      },
      {
        "label": "European Labour Authority, Relatorio EURES de faltas e excedentes 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "Ministerio da Familia, Trabalho e Politica Social (gov.pl), salario minimo",
        "url": "https://www.gov.pl/web/family/minimum-wage",
        "official": true
      },
      {
        "label": "Comissao Europeia, Cartao Azul da UE na Polonia",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-poland_en",
        "official": true
      }
    ]
  },
  "ie": {
    "updatedAt": "2026-06-22",
    "overview": "A Irlanda combina pleno emprego técnico com um mercado seletivo para quem chega de fora. No primeiro trimestre de 2026, o emprego total atingiu 2.794.500 pessoas e a taxa de desemprego ficou em 4,9% (contra 4,3% um ano antes), segundo o Labour Force Survey do CSO. A força de trabalho cresceu apenas 0,6% no ano, o menor avanço em cinco anos, sinal de um mercado mais apertado depois de anos de expansão acelerada. O retrato setorial está dividido: a construção foi o grande motor, com mais 20.500 postos (+11,7%) em doze meses, enquanto Informação e Comunicação recuou 20.300 postos (-10,7%), refletindo o ajuste do setor de tecnologia após a euforia pós-pandemia. Para o imigrante qualificado, a porta principal continua sendo o Critical Skills Employment Permit, que dispensa teste de mercado de trabalho, libera o cônjuge para trabalhar e abre caminho mais curto para residência permanente. Os grupos ocupacionais com maior escassez, segundo o EURES e o Departamento de Empresa, são profissionais de ciência e engenharia, de tecnologia da informação e da saúde. Para quem quer empreender, a Irlanda mantém o Start-up Entrepreneur Programme, voltado a fundadores não-europeus com projetos inovadores e financiamento mínimo de 50 mil euros.",
    "hotSectors": [
      "Construção e habitação (meta de 300 mil casas até 2030, déficit estimado de 50 mil trabalhadores)",
      "Saúde e enfermagem (HSE com cerca de 7.500 vagas em enfermagem, parteiras e profissões aliadas)",
      "Tecnologia da informação de alto valor (desenvolvimento de software, cibersegurança, IA e dados de nuvem)",
      "Engenharia (civil, mecânica, elétrica, eletrônica e química)",
      "Serviços financeiros e profissionais, científicos e técnicos (maiores taxas de vagas em aberto)",
      "Agroalimentar e setores regionais (novas ocupações abertas em maio de 2026, como agrônomo)"
    ],
    "coolingSectors": [
      "Informação e Comunicação (queda de 20.300 postos, -10,7% no ano até o 1º tri de 2026, com ajuste das big techs)",
      "Funções de tecnologia generalistas e juniores sem especialização (vagas de cibersegurança e software sênior seguem abertas, mas o nível de entrada esfriou)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) registrado(a) (geral, saúde mental, parteira, UTI, centro cirúrgico)",
        "note": "Vaga em hospitais públicos acima de 10%; exige registro no NMBI. Consta na Critical Skills."
      },
      {
        "role": "Desenvolvedor(a) de software e engenheiro(a) de software",
        "note": "Topo da lista de habilidades mais procuradas; elegível ao Critical Skills Employment Permit."
      },
      {
        "role": "Especialista em cibersegurança",
        "note": "Uma das funções mais difíceis de preencher, com vagas que ficam abertas 18 meses ou mais."
      },
      {
        "role": "Engenheiro(a) civil, mecânico(a), elétrico(a), eletrônico(a) e químico(a)",
        "note": "Grupo de ciência e engenharia lidera a escassez segundo EURES."
      },
      {
        "role": "Profissional de obras: gestor de canteiro, planejador/programador de construção",
        "note": "Planejador/Programador de Construção entrou no Critical Skills em maio de 2026."
      },
      {
        "role": "Contador(a) qualificado(a) e atuário(a)",
        "note": "Escassez persistente em finanças; consta na Critical Skills."
      },
      {
        "role": "Arquiteto(a) e medidor(a) de quantidades (quantity surveyor)",
        "note": "Demanda puxada pelo plano nacional de habitação."
      },
      {
        "role": "Profissionais de saúde aliados: fisioterapeuta, terapeuta ocupacional, radiografista, farmacêutico(a)",
        "note": "Constam na Critical Skills; exigem reconhecimento do conselho regulador respectivo."
      },
      {
        "role": "Agrônomo(a), optometrista, agrimensor(a) geoespacial e profissional de propriedade intelectual",
        "note": "Adicionados ao Critical Skills nas regras de maio de 2026."
      },
      {
        "role": "Assistente de saúde e cuidador(a) domiciliar",
        "note": "Escassez em volume; categoria com permissão setorial e salário mínimo próprio."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da informação e computação",
        "advice": "Concentre-se em funções especializadas e seniores: desenvolvimento de software, cibersegurança, IA/machine learning, dados de nuvem e DevOps. O nível de entrada esfriou com o recuo das big techs, então chegue com portfólio sólido e mire empregadores que patrocinam o Critical Skills Employment Permit, que dispensa teste de mercado e libera o cônjuge para trabalhar."
      },
      {
        "area": "Enfermagem e saúde",
        "advice": "Inicie cedo o registro no NMBI (enfermagem e parteira) ou no conselho regulador correspondente, pois é pré-requisito legal antes de trabalhar. A escassez é estrutural (mais de 7.500 vagas no HSE), e a maioria das funções clínicas consta na Critical Skills, com pisos salariais previsíveis nas tabelas públicas do HSE."
      },
      {
        "area": "Engenharia e ciências",
        "advice": "Engenheiros civis, mecânicos, elétricos, eletrônicos e químicos, além de cientistas de laboratório, estão entre os grupos de maior escassez segundo o EURES. A maioria entra pelo Critical Skills; vale buscar empresas de manufatura avançada, farmacêutica e construção pesada."
      },
      {
        "area": "Construção e arquitetura",
        "advice": "É o setor que mais cresce, com déficit estimado de 50 mil trabalhadores até 2030. Arquitetos, medidores de quantidades, gestores de canteiro e planejadores de construção têm rota pelo Critical Skills; ofícios manuais e funções de canteiro costumam entrar pelo General Employment Permit."
      },
      {
        "area": "Finanças, contabilidade e negócios",
        "advice": "Contadores qualificados, atuários e gestores de finanças, logística e RH seguem escassos. Certificações reconhecidas internacionalmente ajudam; muitas funções qualificam ao Critical Skills, e o polo de serviços financeiros de Dublin concentra as vagas."
      },
      {
        "area": "Agroalimentar e funções regionais",
        "advice": "As regras de maio de 2026 abriram novas ocupações, como agrônomo no Critical Skills e funções agrícolas e de processamento no General Employment Permit. Boa rota para quem tem formação técnica agrícola e aceita vagas fora da grande Dublin."
      },
      {
        "area": "Empreendedores e fundadores",
        "advice": "Quem quer abrir negócio deve avaliar o Start-up Entrepreneur Programme (STEP), voltado a projetos inovadores de alto potencial com financiamento mínimo de 50 mil euros, expectativa de criar 10 empregos e atingir 1 milhão de euros em vendas em três a quatro anos. A avaliação é trimestral pela Enterprise Ireland."
      }
    ],
    "salaries": [
      {
        "role": "Enfermeiro(a) (Staff Nurse, HSE, início de carreira)",
        "range": "A partir de cerca de €37.788/ano, chegando a cerca de €56.032 no topo da escala, mais incrementos por tempo de serviço e adicionais (noturno, domingo, localização)",
        "source": {
          "label": "HSE Consolidated Salary Scales (Departamento de Saúde)",
          "url": "https://healthservice.hse.ie/staff/pay/pay-scales/",
          "official": true
        }
      },
      {
        "role": "Piso salarial Critical Skills Employment Permit",
        "range": "€40.904/ano (ou €36.848 para quem se qualificou nos 12 meses anteriores), em vigor desde 1 de março de 2026",
        "source": {
          "label": "Departamento de Empresa, Comércio e Emprego (DETE)",
          "url": "https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html",
          "official": true
        }
      },
      {
        "role": "Piso salarial General Employment Permit",
        "range": "€36.605/ano (cerca de €18,05/hora), em vigor desde 1 de março de 2026",
        "source": {
          "label": "Departamento de Empresa, Comércio e Emprego (DETE)",
          "url": "https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html",
          "official": true
        }
      },
      {
        "role": "Piso salarial setorial (processadores de carne, horticultura, assistentes de saúde e cuidadores domiciliares)",
        "range": "€32.691/ano, em vigor desde 1 de março de 2026",
        "source": {
          "label": "Departamento de Empresa, Comércio e Emprego (DETE)",
          "url": "https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadãos da UE/EEE, Suíça e Reino Unido trabalham livremente, sem permissão. Não europeus precisam de uma employment permit do Departamento de Empresa, Comércio e Emprego (DETE). A principal é o Critical Skills Employment Permit, para profissões da Critical Skills Occupations List (TI, saúde, engenharia, ciência, finanças, construção qualificada), com piso de €40.904/ano (€36.848 para recém-formados) desde 1 de março de 2026; dispensa teste de mercado de trabalho, permite que o cônjuge trabalhe via Stamp 1G e dá caminho mais rápido à residência. Para profissões fora dessa lista vale o General Employment Permit, com piso de €36.605/ano e, em geral, teste de mercado de trabalho exigido. Há ainda pisos setoriais (€32.691) para processamento de carne, horticultura, assistentes de saúde e cuidadores domiciliares. Os pisos sobem de forma gradual até 2030. Em maio de 2026 (Employment Permits (Amendment) Regulations 2026, em vigor desde 22 de maio), foram feitas 32 mudanças, incluindo seis novas funções no Critical Skills (como agrônomo, planejador/programador de construção, optometrista, agrimensor geoespacial, profissional de propriedade intelectual e rigger da indústria de jogos) e nova abertura de funções no General Permit. Profissões regulamentadas exigem reconhecimento antes de exercer: enfermeiros e parteiras devem registrar-se no NMBI (Nursing and Midwifery Board of Ireland), e médicos, farmacêuticos, fisioterapeutas e demais profissões de saúde nos respectivos conselhos. Para empreender, o Start-up Entrepreneur Programme (STEP) concede residência a fundadores não europeus com projeto inovador de alto potencial, financiamento mínimo de €50.000, taxa de €350 e avaliação trimestral pela Enterprise Ireland; a residência inicial é de dois anos, renovável por mais três.",
    "opportunityWindows": [
      "Construção em alta acelerada (+11,7% no emprego em um ano) puxada pela meta de 300 mil casas até 2030",
      "Vagas crônicas de enfermagem no HSE (cerca de 7.500 abertas, taxa acima de 10% em hospitais públicos)",
      "Cibersegurança com vagas abertas por 18 meses ou mais, indicando escassez aguda e poder de negociação para o candidato",
      "Janela das regras de maio de 2026: novas ocupações elegíveis ao Critical Skills e ao General Employment Permit em construção, saúde, transporte e agroalimentar",
      "Funções de ciência, engenharia e TI de alto valor seguem em escassez estrutural segundo EURES e DETE",
      "STEP aberto a aplicações o ano todo, com avaliação trimestral, para fundadores não europeus com projetos inovadores"
    ],
    "jobBoards": [
      {
        "label": "JobsIreland (serviço público de emprego do Departamento de Proteção Social)",
        "url": "https://www.jobsireland.ie",
        "official": true
      },
      {
        "label": "EURES Portal Europeu de Mobilidade Profissional (vagas em Irlanda)",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "Department of Enterprise, Trade and Employment (sistema de Employment Permits)",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
        "official": true
      },
      {
        "label": "Immigration Service Delivery (vistos e Start-up Entrepreneur Programme)",
        "url": "https://www.irishimmigration.ie",
        "official": true
      },
      {
        "label": "HSE Careers (vagas em saúde no serviço público)",
        "url": "https://www.hse.ie/eng/careers/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "CSO Labour Force Survey Q1 2026 (Key Findings)",
        "url": "https://www.cso.ie/en/releasesandpublications/ep/p-lfs/labourforcesurveyquarter12026/keyfindings/",
        "official": true
      },
      {
        "label": "DETE Critical Skills Occupations List",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/highly-skilled-eligible-occupations-list/",
        "official": true
      },
      {
        "label": "DETE Critical Skills Employment Permit (tipo de permissão)",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
        "official": true
      },
      {
        "label": "DETE roadmap de pisos salariais de Employment Permits (dez/2025, vigência 1 mar 2026)",
        "url": "https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html",
        "official": true
      },
      {
        "label": "DETE atualizações recentes de Employment Permits",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/latest-updates/",
        "official": true
      },
      {
        "label": "EURES Labour Market Information: Ireland",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-ireland_en",
        "official": true
      },
      {
        "label": "Immigration Service Delivery Start-up Entrepreneur Programme (STEP)",
        "url": "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/start-up-entrepreneur-programme-step/",
        "official": true
      },
      {
        "label": "HSE Pay Scales (tabelas salariais do serviço de saúde)",
        "url": "https://healthservice.hse.ie/staff/pay/pay-scales/",
        "official": true
      },
      {
        "label": "Citizens Information: General Employment Permit",
        "url": "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/employment-permits/work-permits/",
        "official": true
      },
      {
        "label": "RTE/CSO: aumento do desemprego com queda em empregos de tech (mai/2026)",
        "url": "https://www.rte.ie/news/business/2026/0521/1574502-cso-labour-survey-q1/",
        "official": false
      }
    ]
  },
  "ch": {
    "updatedAt": "2026-06-22",
    "overview": "A Suica combina um dos mercados de trabalho mais ricos da Europa com forte protecao ao trabalhador local, o que torna o acesso de estrangeiros bem regulado e dividido em dois regimes. Cidadaos da UE/EFTA circulam quase livremente sob o Acordo de Livre Circulacao de Pessoas, enquanto nacionais de terceiros paises (incluindo brasileiros) enfrentam cotas anuais rigidas e criterios de qualificacao elevados. Para 2026 o Conselho Federal manteve as cotas inalteradas: ate 8.500 autorizacoes para trabalhadores altamente qualificados de paises terceiros, sendo 4.500 autorizacoes de residencia B e 4.000 de curta duracao L. A nova Portaria de Admissao (ASEO) entrou em vigor em 1 de janeiro de 2026. Em 2024 nem todas as cotas foram usadas (74% das de terceiros paises, 50% das de prestadores de servico UE/EFTA e apenas 21% das do Reino Unido), sinal de que ha espaco para perfis muito qualificados. O salario mediano bruto em tempo integral foi de CHF 7.024 por mes em 2024 segundo o Bundesamt fur Statistik (BFS), o mais alto entre os grandes mercados europeus. O indice de escassez de mao de obra recuou cerca de 22% em 2025, voltando a niveis pre-pandemia, com queda de 8% nas vagas e aumento de 17% nos candidatos, mas a escassez estrutural persiste em saude, engenharia e tecnologia. Empreender e possivel para nao europeus, porem sob condicoes cumulativas: interesse para a economia suica, capital inicial suficiente, plano de negocio e rendimento que cubra custos operacionais e de vida.",
    "hotSectors": [
      "Saude e enfermagem",
      "Engenharia e automacao",
      "Eletrica e eletronica",
      "Tecnologia da informacao e software",
      "Farmaceutica e ciencias da vida",
      "Construcao civil",
      "Servicos financeiros e bancarios"
    ],
    "coolingSectors": [
      "Industria MEM (maquinas, equipamentos eletricos e metal) pressionada por fraca demanda de exportacao",
      "Funcoes administrativas e de escritorio com excesso de candidatos",
      "Setores ciclicos sensiveis a desaceleracao economica de 2025"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) e cuidador especializado",
        "note": "Profissao regulamentada; exige reconhecimento de diploma pela SERI/Cruz Vermelha Suica"
      },
      {
        "role": "Medico(a) e especialista de saude",
        "note": "Profissao regulamentada com reconhecimento obrigatorio de titulo"
      },
      {
        "role": "Engenheiro(a) mecanico, de automacao e de sistemas",
        "note": "Entre os grupos com maior escassez estrutural"
      },
      {
        "role": "Eletricista e tecnico(a) em eletronica",
        "note": "Demanda puxada pela carteira de obras da construcao"
      },
      {
        "role": "Desenvolvedor(a) de software e profissional de TIC",
        "note": "Salarios entre os mais altos; alta procura por seniores"
      },
      {
        "role": "Profissional de farmaceutica e ciencias da vida",
        "note": "Setor de altissimo valor agregado, polo em Basileia"
      },
      {
        "role": "Trabalhador qualificado da construcao",
        "note": "Eletricistas, encanadores e tecnicos de obra"
      }
    ],
    "byQualification": [
      {
        "area": "Saude (enfermagem, medicina, farmacia)",
        "advice": "Mercado mais aberto e carente, mas profissoes regulamentadas. Inicie cedo o reconhecimento do diploma estrangeiro junto a SERI (antiga SBFI) e, no caso da enfermagem, a Cruz Vermelha Suica. O dominio do idioma local (alemao, frances ou italiano conforme o canton) costuma ser exigido."
      },
      {
        "area": "Engenharia e tecnologia (TI, software, automacao)",
        "advice": "Forte demanda e salarios elevados. Para nao europeus, a contratacao depende de cota e de o empregador comprovar que nao encontrou candidato local ou da UE/EFTA. Perfis seniores e especializados tem mais chance de passar pelo criterio de qualificacao."
      },
      {
        "area": "Oficios qualificados (eletrica, construcao, manutencao)",
        "advice": "Alta procura, sobretudo na construcao. Certificacoes e equivalencia de formacao profissional ajudam. Para nao europeus o caminho e mais estreito por causa das cotas; vale priorizar empregadores que ja patrocinam autorizacoes."
      },
      {
        "area": "Administracao, escritorio e funcoes generalistas",
        "advice": "Setor com excesso de candidatos e menor escassez. Sem qualificacao diferenciada ou idioma local fluente, a janela para estrangeiros nao europeus e estreita. Foque em nichos com lacuna real."
      },
      {
        "area": "Empreendedores e autonomos",
        "advice": "Cidadaos da UE/EFTA obtem permissao com relativa facilidade (permit B de 5 anos). Nao europeus precisam atender condicoes cumulativas: interesse economico para a Suica, capital suficiente, plano de negocio solido e renda que cubra custos. So especialistas, executivos ou perfis altamente qualificados sao admitidos."
      }
    ],
    "salaries": [
      {
        "role": "Salario mediano bruto (tempo integral, todos os setores)",
        "range": "CHF 7.024/mes (mediano 2024); P10 abaixo de CHF 4.635, P90 acima de CHF 12.526",
        "source": {
          "label": "Bundesamt fur Statistik (BFS) - Pesquisa de Estrutura Salarial 2024",
          "url": "https://www.bfs.admin.ch/asset/en/36195850",
          "official": true
        }
      },
      {
        "role": "Farmaceutica",
        "range": "CHF 10.159/mes (mediano)",
        "source": {
          "label": "Bundesamt fur Statistik (BFS) 2024",
          "url": "https://www.bfs.admin.ch/asset/en/36195850",
          "official": true
        }
      },
      {
        "role": "Bancos e servicos financeiros",
        "range": "CHF 10.723/mes (mediano)",
        "source": {
          "label": "Bundesamt fur Statistik (BFS) 2024",
          "url": "https://www.bfs.admin.ch/asset/en/36195850",
          "official": true
        }
      },
      {
        "role": "Pesquisa e desenvolvimento",
        "range": "CHF 9.139/mes (mediano)",
        "source": {
          "label": "Bundesamt fur Statistik (BFS) 2024",
          "url": "https://www.bfs.admin.ch/asset/en/36195850",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor(a) / engenheiro(a) de software",
        "range": "CHF 95.000 a 140.000/ano (junior 75-95 mil; senior 125-180 mil)",
        "source": {
          "label": "Levantamentos de mercado (Payscale, Levels.fyi, SwissDevJobs)",
          "url": "https://www.payscale.com/research/CH/Job=Software_Engineer/Salary",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) (full-time)",
        "range": "CHF 79.300/ano (media); entrada CHF 60.000-75.000",
        "source": {
          "label": "Lohncheck / jobs.ch (referencia de mercado)",
          "url": "https://lohncheck.ch/en/lohn/soziales/krankenschwester",
          "official": true
        }
      }
    ],
    "foreignerRules": "Existem dois regimes distintos. Cidadaos da UE/EFTA tem livre circulacao sob o Acordo de Livre Circulacao de Pessoas: trabalham e abrem negocio com registro no cantao e recebem permit B de 5 anos renovavel; atividades de ate 90 dias por ano dispensam autorizacao mediante notificacao previa. Nacionais de terceiros paises (como brasileiros) estao sujeitos a cotas anuais e so sao admitidos como trabalhadores altamente qualificados, executivos ou especialistas. Para 2026 as cotas foram congeladas em ate 8.500 autorizacoes para terceiros paises (4.500 do tipo B e 4.000 do tipo L de curta duracao), alem de contingentes separados para prestadores de servico UE/EFTA (3.000 L e 500 B) e nacionais do Reino Unido (1.400 L e 2.100 B). Vigora a prioridade do trabalhador nacional e da UE/EFTA: o empregador deve demonstrar que nao encontrou candidato no mercado local antes de contratar fora. Autonomia para nao europeus exige condicoes cumulativas (interesse economico, capital, plano de negocio, renda suficiente). Profissoes regulamentadas (medico, enfermeiro, arquiteto, advogado, notario, entre outras) exigem reconhecimento do diploma estrangeiro; europeus que prestam servico declaram a qualificacao no sistema online da SERI (antiga SBFI). Desde 1 de janeiro de 2020 vigora a obrigacao de registro de vagas (Stellenmeldepflicht): em profissoes com desemprego nacional igual ou acima de 5%, a vaga deve ser publicada na area protegida do Job-Room por 5 dias uteis antes de ser anunciada em outro lugar.",
    "opportunityWindows": [
      "Cotas 2026 congeladas e historicamente subutilizadas (so 74% das de terceiros paises usadas em 2024), abrindo espaco para perfis muito qualificados",
      "Escassez estrutural cronica em saude e enfermagem por causa do envelhecimento populacional",
      "Demanda continua por engenheiros e eletricistas sustentada pela construcao e automacao",
      "Salarios em franco suico entre os mais altos do mundo, com setores de farmaceutica, banca e pesquisa acima de CHF 9.000/mes mediano",
      "Empreendedorismo viavel para europeus e para nao europeus altamente qualificados com plano de negocio robusto"
    ],
    "jobBoards": [
      {
        "label": "Job-Room (portal oficial do servico publico de emprego, work.swiss)",
        "url": "https://www.job-room.ch/",
        "official": true
      },
      {
        "label": "arbeit.swiss (SECO - seguro-desemprego e RAV)",
        "url": "https://www.arbeit.swiss/en",
        "official": true
      },
      {
        "label": "EURES - mobilidade profissional UE/EFTA",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "jobs.ch (maior portal privado de vagas)",
        "url": "https://www.jobs.ch/en/",
        "official": false
      },
      {
        "label": "SwissDevJobs (vagas de TI)",
        "url": "https://swissdevjobs.ch/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Conselho Federal - cotas de terceiros paises 2026 inalteradas (admin.ch)",
        "url": "https://www.admin.ch/en/newnsb/7HwBjdg5HpBA",
        "official": true
      },
      {
        "label": "SEM - Bases para admissao no mercado de trabalho suico (nao UE/EFTA)",
        "url": "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/grundlagen_zur_arbeitsmarktzulassung.html",
        "official": true
      },
      {
        "label": "SEM - Procedimento de notificacao para trabalho de curta duracao",
        "url": "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/meldeverfahren.html",
        "official": true
      },
      {
        "label": "KMU/admin.ch - Diretrizes de trabalho autonomo",
        "url": "https://www.kmu.admin.ch/kmu/en/home/concrete-know-how/setting-up-sme/starting-business/first-step/self-employment-guidelines.html",
        "official": true
      },
      {
        "label": "Bundesamt fur Statistik (BFS) - Estrutura salarial 2024, salario mediano CHF 7.024",
        "url": "https://www.bfs.admin.ch/asset/en/36195850",
        "official": true
      },
      {
        "label": "BFS - Salarium, calculadora oficial de salarios",
        "url": "https://www.bfs.admin.ch/bfs/en/home/statistics/work-income/wages-income-employment-labour-costs/earnings-structure.html",
        "official": true
      },
      {
        "label": "arbeit.swiss (SECO) - obrigacao de registro de vagas (Stellenmeldepflicht)",
        "url": "https://www.arbeit.swiss/secoalv/en/home/menue/unternehmen/stellenmeldepflicht.html",
        "official": true
      },
      {
        "label": "Adecco Group / UZH - Swiss Skills Shortage Index 2025",
        "url": "https://www.adeccogroup.com/en-ch/future-of-work/swiss-skills-shortage",
        "official": false
      },
      {
        "label": "Stellenmarktmonitor UZH - Swiss Skills Shortage Index",
        "url": "https://www.stellenmarktmonitor.uzh.ch/en/indices/Swiss-Skills-Shortage-Index.html",
        "official": false
      },
      {
        "label": "Fragomen - Cotas de imigracao da Suica 2026",
        "url": "https://www.fragomen.com/insights/swiss-immigration-quotas-for-2026-what-employers-and-workers-need-to-know.html",
        "official": false
      }
    ]
  },
  "at": {
    "updatedAt": "2026-06-29",
    "overview": "O mercado de trabalho austriaco entrou em 2026 com sinais mistos. A taxa de desemprego subiu para cerca de 7,5% em abril de 2026 no calculo nacional do servico publico de emprego, enquanto o emprego dependente cresceu cerca de 23 mil vagas em relacao ao ano anterior, chegando a perto de 3,96 milhoes de ocupados, segundo a Statistik Austria e o AMS. Apesar do desemprego em leve alta, a escassez de mao de obra qualificada continua sendo o tema central, com a lista oficial de profissoes em falta expandida para 64 ocupacoes nacionais em 2026. A Austria nao tem salario minimo legal, mas a negociacao coletiva cobre cerca de 98% dos trabalhadores e fixa os pisos por setor.",
    "hotSectors": [
      "Saude e cuidados (enfermagem, medicina, cuidadores)",
      "Tecnologia da informacao e comunicacao",
      "Eletrotecnica e alta tensao",
      "Construcao civil e oficios qualificados",
      "Tecnologias verdes e transicao energetica",
      "Industria digital e engenharia",
      "Hotelaria e gastronomia (HORECA)",
      "Transporte ferroviario e rodoviario de carga"
    ],
    "coolingSectors": [
      "Manufatura de baixa qualificacao afetada pela automacao",
      "Trabalho manual repetitivo na industria"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros diplomados em saude e cuidados",
        "note": "Inclui especializacoes em psiquiatria, pediatria e geriatria; consta na lista nacional de profissoes em falta 2026."
      },
      {
        "role": "Medicos de varias especialidades",
        "note": "De clinica geral a urologia, na lista oficial de profissoes em falta."
      },
      {
        "role": "Eletrotecnicos",
        "note": "Varios niveis de qualificacao; especialistas em alta tensao com prioridade."
      },
      {
        "role": "Desenvolvedores de software, analistas de sistemas e programadores",
        "note": "Profissionais de TIC lideram as listas de escassez."
      },
      {
        "role": "Engenheiros mecanicos, eletricos e civis"
      },
      {
        "role": "Oficios qualificados: soldadores, serralheiros, telhadistas, funileiros, carpinteiros"
      },
      {
        "role": "Mecanicos de veiculos automotores"
      },
      {
        "role": "Cozinheiros de restaurante (HORECA)"
      },
      {
        "role": "Maquinistas de locomotiva",
        "note": "Nova adicao em 2026, refletindo lacuna no transporte ferroviario."
      },
      {
        "role": "Especialistas em folha de pagamento",
        "note": "Nova adicao em 2026, ligada a digitalizacao de RH."
      },
      {
        "role": "Pedagogos da primeira infancia (inclusivos)",
        "note": "Nova adicao em 2026 na area de servicos sociais."
      },
      {
        "role": "Construtores de maquinas agricolas"
      }
    ],
    "byQualification": [
      {
        "area": "Saude e enfermagem",
        "advice": "Area com a maior demanda estrutural do pais. Enfermeiros diplomados e medicos constam na lista nacional de profissoes em falta, o que abre caminho prioritario via Cartao Vermelho-Branco-Vermelho. Reconhecimento do diploma e nivel de alemao sao decisivos."
      },
      {
        "area": "Tecnologia da informacao",
        "advice": "Desenvolvedores, analistas e especialistas em ciberseguranca estao entre as ocupacoes de maior escassez. Para profissionais de TIC, a Austria aceita tres anos de experiencia relevante no lugar do diploma universitario no EU Blue Card."
      },
      {
        "area": "Engenharia e eletrotecnica",
        "advice": "Engenheiros mecanicos, eletricos e civis, alem de eletrotecnicos de alta tensao, tem prioridade. Varios niveis de qualificacao sao aceitos na lista oficial."
      },
      {
        "area": "Oficios e construcao",
        "advice": "Soldadores, serralheiros, telhadistas e carpinteiros constam na lista de profissoes em falta. Formacao profissional concluida (vocational training) e o requisito-chave para o Cartao Vermelho-Branco-Vermelho de fachkraft."
      },
      {
        "area": "Hotelaria e gastronomia",
        "advice": "Cozinheiros de restaurante estao na lista nacional. Setor com escassez persistente, mas com pisos salariais definidos por acordo coletivo."
      }
    ],
    "salaries": [
      {
        "role": "Rendimento bruto medio de pessoa solteira",
        "range": "4.757 EUR/mes bruto (dado 2023, contra 3.417 EUR na media da UE27)",
        "source": {
          "label": "EURES, Informacao do Mercado de Trabalho: Austria (Comissao Europeia)",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-austria_en",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card 2026 (altamente qualificados)",
        "range": "55.678 EUR/ano bruto (cerca de 3.977 EUR/mes em 14 pagamentos)",
        "source": {
          "label": "migration.gv.at, Ministerio Federal do Trabalho e Economia da Austria",
          "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eubluecard/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do EEE e da Suica tem livre circulacao e podem trabalhar na Austria sem autorizacao de trabalho, bastando o registro de residencia. Para nacionais de terceiros paises (fora da UE/EEE), o acesso ao trabalho exige titulo de residencia com permissao de trabalho. As principais vias sao o Cartao Vermelho-Branco-Vermelho (Rot-Weiss-Rot-Karte) e o EU Blue Card. Na via para fachkraft em profissoes em falta, exige-se formacao profissional concluida numa ocupacao da lista oficial, oferta de emprego vinculante, pagamento do piso salarial do acordo coletivo e no minimo 55 de 90 pontos no sistema de avaliacao (qualificacao ate 30, experiencia ate 20, idioma ate 25, idade ate 15); nessa via dispensa-se o teste de mercado de trabalho. O EU Blue Card destina-se a altamente qualificados, exige diploma superior de pelo menos 3 anos (ou, para TIC, 3 anos de experiencia relevante), contrato de no minimo 6 meses, teste de mercado de trabalho pelo AMS e salario bruto anual minimo de 55.678 euros em 2026. Os pedidos passam pela verificacao do AMS antes de a autoridade de residencia emitir o cartao.",
    "opportunityWindows": [
      "Lista de profissoes em falta 2026: 64 ocupacoes nacionais (expansao a partir de 58 em 2025) mais 66 ocupacoes regionais, valida de 1 de janeiro a 31 de dezembro de 2026",
      "Novas ocupacoes incluidas em 2026: maquinistas de locomotiva, especialistas em folha de pagamento e pedagogos inclusivos da primeira infancia",
      "Quem trabalha numa profissao da lista ganha ate 20 pontos de bonus rumo ao limiar de 55 pontos e dispensa do teste de mercado de trabalho",
      "Mangelberufe regionais permitem vias adicionais por estado (Bundesland) conforme a escassez local"
    ],
    "jobBoards": [
      {
        "label": "AMS eJob-Room (servico publico de emprego)",
        "url": "https://www.ams.at/",
        "official": true
      },
      {
        "label": "EURES Portal de Mobilidade Profissional Europeia",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "migration.gv.at (vias de imigracao e profissoes em falta)",
        "url": "https://www.migration.gv.at/",
        "official": true
      },
      {
        "label": "oesterreich.gv.at (portal oficial do governo austriaco)",
        "url": "https://www.oesterreich.gv.at/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "AMS, Dados do Mercado de Trabalho da Austria",
        "url": "https://www.ams.at/arbeitsmarktdaten-und-medien/arbeitsmarkt-daten-und-arbeitsmarkt-forschung/arbeitsmarktdaten",
        "official": true
      },
      {
        "label": "Statistik Austria, Desemprego e procura de trabalho",
        "url": "https://www.statistik.at/statistiken/arbeitsmarkt/arbeitslosigkeit/arbeitslose-arbeitssuchende",
        "official": true
      },
      {
        "label": "migration.gv.at, Profissoes em falta a nivel nacional 2026",
        "url": "https://www.migration.gv.at/de/formen-der-zuwanderung/dauerhafte-zuwanderung/bundesweite-mangelberufe/",
        "official": true
      },
      {
        "label": "migration.gv.at, Fachkraefte in Mangelberufen (Cartao Vermelho-Branco-Vermelho)",
        "url": "https://www.migration.gv.at/de/formen-der-zuwanderung/dauerhafte-zuwanderung/fachkraefte-in-mangelberufen/",
        "official": true
      },
      {
        "label": "migration.gv.at, EU Blue Card",
        "url": "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eubluecard/",
        "official": true
      },
      {
        "label": "EURES, Informacao do Mercado de Trabalho: Austria (Comissao Europeia)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-austria_en",
        "official": true
      }
    ]
  },
  "be": {
    "updatedAt": "2026-06-29",
    "overview": "A Belgica fechou 2025 com taxa de emprego de 72,8% entre as pessoas de 20 a 64 anos e desemprego (medida OIT) estimado em 6,2%, ambos acima dos numeros de 2024, segundo o instituto de estatistica Statbel. O mercado e fortemente regionalizado: a Flandres opera perto do pleno emprego, com desemprego de 4,3%, enquanto a Valonia registra 7,9% e Bruxelas 12,7%. A escassez de mao de obra continua estrutural, puxada pelo envelhecimento da populacao, e atinge sobretudo funcoes tecnicas da industria, construcao e saude. As autoridades regionais mantem listas oficiais de profissoes em falta que abrem caminho a contratacao de estrangeiros qualificados.",
    "hotSectors": [
      "Construcao",
      "Industria e manufatura",
      "Saude e cuidados sociais",
      "Transporte e logistica",
      "Tecnologia e engenharia industrial",
      "Horticultura e agricultura"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a)",
        "note": "Profissao em falta persistente nas tres regioes, listada pela VDAB (Flandres) e pelo Le Forem (Valonia)."
      },
      {
        "role": "Motorista de caminhao",
        "note": "Falta cronica de candidatos no setor de transporte, no topo da lista da VDAB."
      },
      {
        "role": "Eletromecanico industrial",
        "note": "Funcao tecnica entre as mais persistentes da lista de profissoes em falta da Flandres."
      },
      {
        "role": "Contador(a)",
        "note": "Encabeca a lista de knelpuntberoepen 2026 da VDAB."
      },
      {
        "role": "Chefe de obra (werfleider) e calculista de construcao",
        "note": "Construcao e o setor mais representado nas listas de escassez da Valonia e da Flandres."
      },
      {
        "role": "Tecnico de manutencao industrial",
        "note": "Demanda alta na industria, dificil preenchimento por escassez qualitativa."
      },
      {
        "role": "Operador-ajustador de maquinas (usinagem)",
        "note": "Funcao tecnica industrial em falta na Flandres."
      },
      {
        "role": "Trabalhador de horticultura",
        "note": "Falta de mao de obra no setor agricola flamengo."
      },
      {
        "role": "Cozinheiro(a) / chef",
        "note": "Adicionado a lista de profissoes em falta da Valonia."
      },
      {
        "role": "Assistente social",
        "note": "Incluido na lista de funcoes criticas da Valonia."
      },
      {
        "role": "Maquinista de trem e pessoal de ambulancia",
        "note": "Entre as 26 novas funcoes criticas adicionadas pela Valonia em relacao a lista anterior."
      }
    ],
    "byQualification": [
      {
        "area": "Saude e enfermagem",
        "advice": "Enfermagem esta entre as profissoes em falta nas tres regioes. Diplomas estrangeiros precisam de reconhecimento (equivalencia) junto a autoridade regional competente, e o registro profissional e exigido para exercer."
      },
      {
        "area": "Engenharia e tecnico industrial",
        "advice": "Eletromecanica, manutencao industrial e usinagem concentram vagas dificeis de preencher na Flandres. Perfil tecnico de nivel medio passou a ser priorizado na migracao economica flamenga a partir de 2026."
      },
      {
        "area": "Construcao civil",
        "advice": "Construcao e o setor com mais funcoes criticas na Valonia e forte na Flandres. Chefe de obra, calculista e tecnico de maquinas de obra tem alta demanda."
      },
      {
        "area": "Transporte e logistica",
        "advice": "Motorista de caminhao e carencia cronica. Exige carteira de habilitacao europeia (categoria C/CE) e certificado de aptidao profissional (CAP)."
      },
      {
        "area": "Contabilidade e financas",
        "advice": "Contador encabeca a lista de profissoes em falta da Flandres em 2026, sinal de demanda firme para perfis qualificados."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (tempo integral)",
        "range": "4.076 EUR/mes bruto (referencia out/2022; mediana 3.728 EUR/mes)",
        "source": {
          "label": "Statbel, salario mensal bruto medio",
          "url": "https://statbel.fgov.be/en/news/average-gross-monthly-salary-4076-euros",
          "official": true
        }
      },
      {
        "role": "Setor mais bem pago (industria petroquimica)",
        "range": "6.431 EUR/mes bruto",
        "source": {
          "label": "Statbel, salario mensal bruto medio",
          "url": "https://statbel.fgov.be/en/news/average-gross-monthly-salary-4076-euros",
          "official": true
        }
      },
      {
        "role": "Setor mais baixo (hotelaria e alimentacao)",
        "range": "2.863 EUR/mes bruto",
        "source": {
          "label": "Statbel, salario mensal bruto medio",
          "url": "https://statbel.fgov.be/en/news/average-gross-monthly-salary-4076-euros",
          "official": true
        }
      },
      {
        "role": "Faixa geral (10% mais baixos a 10% mais altos)",
        "range": "menos de 2.443 EUR/mes ate ao menos 6.305 EUR/mes bruto",
        "source": {
          "label": "Statbel, salario mensal bruto medio",
          "url": "https://statbel.fgov.be/en/news/average-gross-monthly-salary-4076-euros",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da Uniao Europeia, do Espaco Economico Europeu e da Suica tem livre circulacao e nao precisam de autorizacao de trabalho para atuar na Belgica. Quem vem de fora da UE e quer ficar e trabalhar por mais de 90 dias precisa do Single Permit (permis unique), documento combinado que reune autorizacao de trabalho e de residencia em um unico pedido. O empregador inicia o processo junto a autoridade regional competente (Flandres, Valonia ou Bruxelas), e a regiao mais o Servico de Imigracao analisam em ate quatro meses. Profissoes que constam das listas regionais de escassez (VDAB na Flandres, Le Forem na Valonia) ficam isentas do teste de mercado de trabalho, o que agiliza a contratacao de estrangeiros. Para perfis altamente qualificados existe o EU Blue Card, com salario minimo anual bruto definido por regiao em 2026: cerca de 63.586 EUR na Flandres, 68.815 EUR na Valonia e 56.976 EUR em Bruxelas (esta publica valor mensal, em torno de 4.748 EUR). A partir de 1 de janeiro de 2026, a Flandres reformulou as regras de emprego de trabalhadores estrangeiros para priorizar migracao de conhecimento e perfis de nivel medio em funcoes de escassez, excluindo mao de obra pouco qualificada da migracao economica.",
    "opportunityWindows": [
      "Lista de profissoes em falta da Flandres (knelpuntberoepen VDAB 2026): 227 ocupacoes, com destaque para contador, eletromecanico industrial, enfermeiro, motorista de caminhao e funcoes tecnicas de construcao e industria.",
      "Lista de funcoes criticas e profissoes em falta da Valonia (Le Forem): 146 ocupacoes (82 em penuria, 64 criticas), com construcao, industria e saude representando 58% da lista; 26 novas funcoes adicionadas, incluindo maquinista de trem, pessoal de ambulancia e gestor de seguros.",
      "Profissoes nas listas regionais de escassez ficam isentas do teste de mercado de trabalho, agilizando o Single Permit para estrangeiros.",
      "Le Forem oferece 199 programas de formacao voltados as funcoes criticas e profissoes em falta, alguns com auxilio financeiro e dispensa de busca ativa de emprego."
    ],
    "jobBoards": [
      {
        "label": "VDAB (servico publico de emprego da Flandres)",
        "url": "https://www.vdab.be",
        "official": true
      },
      {
        "label": "Le Forem (servico publico de emprego da Valonia)",
        "url": "https://www.leforem.be",
        "official": true
      },
      {
        "label": "Actiris (servico publico de emprego de Bruxelas)",
        "url": "https://www.actiris.brussels",
        "official": true
      },
      {
        "label": "EURES (portal europeu de mobilidade profissional)",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "Single Permit (balcao unico, working in Belgium)",
        "url": "https://www.international.socialsecurity.be/working_in_belgium/en/single-permit.html",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Statbel, emprego e desemprego (dados 2025)",
        "url": "https://statbel.fgov.be/en/themes/work-training/labour-market/employment-and-unemployment",
        "official": true
      },
      {
        "label": "Statbel, salario mensal bruto medio",
        "url": "https://statbel.fgov.be/en/news/average-gross-monthly-salary-4076-euros",
        "official": true
      },
      {
        "label": "VDAB, profissoes em falta 2026 (knelpuntberoepen)",
        "url": "https://www.vdab.be/orienteren/knelpuntberoepen",
        "official": true
      },
      {
        "label": "Le Forem, profissoes em falta e funcoes criticas (Valonia)",
        "url": "https://www.leforem.be/citoyens/metiers-penurie.html",
        "official": true
      },
      {
        "label": "IBZ / Office des Etrangers, Single Permit",
        "url": "https://dofi.ibz.be/en/themas/onderdanen-van-derde-landen/werk/single-permit",
        "official": true
      },
      {
        "label": "EURES, informacao do mercado de trabalho belga",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-belgium_en",
        "official": true
      }
    ]
  },
  "bg": {
    "updatedAt": "2026-07-06",
    "overview": "O mercado de trabalho bulgaro segue apertado e com desemprego em queda. Segundo o Instituto Nacional de Estatistica (NSI), a taxa de desemprego caiu para 3,2% no quarto trimestre de 2025, o menor patamar do ano, com cerca de 95,7 mil desempregados e taxa de emprego de 70,7% na faixa de 15 a 64 anos. O emprego concentra-se em servicos (69,1%), industria (26,6%) e agricultura (4,3%). A escassez de mao de obra qualificada, o envelhecimento populacional e a adocao do euro em 1 de janeiro de 2026 marcam o cenario atual, com salarios em alta forte (crescimento de 12% no salario medio no terceiro trimestre de 2025 ante igual periodo de 2024, segundo o NSI).",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TIC)",
      "Servicos financeiros e de seguros",
      "Saude e assistencia social",
      "Construcao civil e oficios relacionados",
      "Industria de manufatura (leve e pesada)",
      "Turismo e hotelaria (sazonal)",
      "Educacao"
    ],
    "coolingSectors": [
      "Profissionais associados de administracao e negocios (excesso de oferta)",
      "Trabalhadores de vendas",
      "Graduados em economia, direito, psicologia e administracao de empresas",
      "Trabalhadores sem qualificacao e de baixa escolaridade"
    ],
    "inDemandRoles": [
      {
        "role": "Medicos e enfermeiros",
        "note": "Escassez permanente de especialistas medicos, sobretudo em hospitais menores; inclui parteiras, tecnicos de laboratorio e farmaceuticos (fonte: EURES/Agencia de Emprego)"
      },
      {
        "role": "Especialistas de software e programadores",
        "note": "Setor de TIC com demanda continua e maiores salarios do pais (fonte: EURES)"
      },
      {
        "role": "Engenheiros mecanicos e tecnicos",
        "note": "Demanda em manufatura e polos industriais (fonte: EURES)"
      },
      {
        "role": "Soldadores, eletricistas e trabalhadores da construcao",
        "note": "Oficios da construcao entre as maiores carencias (fonte: EURES)"
      },
      {
        "role": "Professores e educadores",
        "note": "Carencia estrutural no setor de educacao (fonte: EURES)"
      },
      {
        "role": "Operadores de maquinas e montadores",
        "note": "Demanda na industria (fonte: EURES)"
      },
      {
        "role": "Cozinheiros e garcons",
        "note": "Pico de demanda no verao na hotelaria e restauracao (fonte: EURES)"
      },
      {
        "role": "Motoristas",
        "note": "Escassez em transporte e logistica (fonte: EURES)"
      },
      {
        "role": "Trabalhadores de processamento de alimentos, madeira e confeccao",
        "note": "Grupos ocupacionais com maior incidencia de escassez em 2024 (fonte: EURES/ELA)"
      }
    ],
    "byQualification": [
      {
        "area": "Saude e enfermagem",
        "advice": "Area de maior carencia estrutural, com escassez permanente de medicos, enfermeiros, parteiras e farmaceuticos, especialmente fora dos grandes centros. Profissao regulada exige reconhecimento de diploma."
      },
      {
        "area": "Tecnologia da informacao",
        "advice": "Setor mais aquecido e mais bem pago do pais (salario medio de 5.512 BGN no setor de TIC no terceiro trimestre de 2025, segundo o NSI). Boas chances para desenvolvedores de software e programadores, inclusive via EU Blue Card, que nao exige teste de mercado de trabalho."
      },
      {
        "area": "Engenharia",
        "advice": "Engenheiros mecanicos e tecnicos tem demanda em manufatura e polos industriais como Plovdiv. Atencao: parte da engenharia aparece tambem entre ocupacoes em excesso, entao o encaixe depende da especializacao industrial."
      },
      {
        "area": "Construcao civil e oficios",
        "advice": "Alta procura por soldadores, eletricistas e trabalhadores qualificados. Setor em crescimento e entre as maiores carencias reportadas."
      },
      {
        "area": "Educacao",
        "advice": "Professores e educadores estao entre as profissoes com carencia. Profissao regulada, sujeita a reconhecimento de qualificacao."
      },
      {
        "area": "Hotelaria e turismo",
        "advice": "Forte demanda sazonal no verao por cozinheiros, garcons e afins nas regioes litoraneas. Salarios entre os mais baixos do pais (1.586 BGN em alojamento e alimentacao no terceiro trimestre de 2025, segundo o NSI)."
      },
      {
        "area": "Administracao, economia e direito",
        "advice": "Areas com excesso de oferta de diplomados. A concorrencia e maior e as oportunidades, mais limitadas, segundo o mapeamento da EURES."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto mensal (todos os setores)",
        "range": "2.549 BGN/mes (3o trim. 2025)",
        "source": {
          "label": "NSI - Empregados e salarios medios, 3o trimestre de 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Tecnologia da informacao e comunicacao",
        "range": "5.512 BGN/mes (3o trim. 2025)",
        "source": {
          "label": "NSI - Empregados e salarios medios, 3o trimestre de 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Atividades financeiras e de seguros",
        "range": "3.716 BGN/mes (3o trim. 2025)",
        "source": {
          "label": "NSI - Empregados e salarios medios, 3o trimestre de 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Eletricidade, gas e ar condicionado",
        "range": "3.539 BGN/mes (3o trim. 2025)",
        "source": {
          "label": "NSI - Empregados e salarios medios, 3o trimestre de 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Alojamento e alimentacao (mais baixo)",
        "range": "1.586 BGN/mes (3o trim. 2025)",
        "source": {
          "label": "NSI - Empregados e salarios medios, 3o trimestre de 2025",
          "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
          "official": true
        }
      },
      {
        "role": "Salario minimo (a partir de 1o jan. 2026)",
        "range": "620,20 EUR/mes (1.213 BGN); hora 3,74 EUR (7,31 BGN)",
        "source": {
          "label": "BTA - Agencia de Noticias da Bulgaria (governo)",
          "url": "https://www.bta.bg/en/news/bulgaria/1036420-minimum-wage-rises-to-eur-620-20-poverty-line-up",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e da Suica trabalham livremente na Bulgaria, sem necessidade de autorizacao. Nacionais de paises terceiros precisam de autorizacao: as vias principais sao a Autorizacao Unica de residencia e trabalho (Single Permit), valida por ate 3 anos e renovavel, para quem tem oferta concreta de emprego; e o Cartao Azul da UE (EU Blue Card), para profissionais altamente qualificados, que exige ensino superior de no minimo 3 anos, ou 5 anos de experiencia, ou experiencia em posicoes de lista especial (incluindo TI). O contrato pode ter duracao minima de 6 meses e o cartao vale ate 5 anos (no minimo 24 meses); a Bulgaria nao aplica teste de mercado de trabalho ao Cartao Azul. O limiar salarial do Cartao Azul equivale a 1,5 vez o salario medio anual (referencia de cerca de 23.500 EUR brutos anuais para 2026, segundo fontes de imigracao; o valor oficial e reajustado anualmente pela Agencia de Emprego). Mudancas em vigor em 2025: reconhecimento de diploma passou a ser obrigatorio quando o pedido se baseia em titulo estrangeiro, e desde 1 de julho de 2025 o empregador deve inscrever o titular de Single Permit no seguro-saude estatutario do Estado. Desde 1 de janeiro de 2026 todos os valores (salarios, contribuicoes, limites) sao calculados em euros, a taxa fixa de 1,95583 BGN por 1 EUR.",
    "opportunityWindows": [
      "Mercado apertado com desemprego de 3,2% (menor de 2025) e alta forte de salarios, favorecendo quem busca recolocacao",
      "Escassez permanente de profissionais de saude, sobretudo fora dos grandes centros",
      "Setor de TIC aquecido e com acesso facilitado pelo Cartao Azul da UE, que dispensa teste de mercado de trabalho",
      "Demanda sazonal expressiva no verao para hotelaria, restauracao, transporte e servicos nas regioes litoraneas",
      "Polo industrial de Plovdiv (Sul-Central) com empresas estrangeiras e carencia de perfis tecnicos e de saude",
      "Cerca de 262 mil trabalhadores e especialistas projetados como demanda em 12 meses, mais de 87% para reposicao (fonte: EURES)"
    ],
    "jobBoards": [
      {
        "label": "EURES Bulgaria (Agencia de Emprego) - portal oficial de vagas e CVs, gratuito",
        "url": "https://eures.bg",
        "official": true
      },
      {
        "label": "Agencia de Emprego da Bulgaria (Agentsia po zaetostta) - servico publico de emprego",
        "url": "https://www.az.government.bg",
        "official": true
      },
      {
        "label": "Portal EURES da UE - vagas em toda a Europa",
        "url": "https://europa.eu/eures/portal/jv-se/home?lang=en",
        "official": true
      },
      {
        "label": "Portal de Imigracao da UE - Cartao Azul Bulgaria",
        "url": "https://immigration-portal.ec.europa.eu/eu-blue-card/bulgaria_en",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "NSI - Principais resultados da Pesquisa de Forca de Trabalho, 4o trimestre de 2025",
        "url": "https://www.nsi.bg/en/press-release/main-labour-force-survey-results-fourth-quarter-of-2025-8939",
        "official": true
      },
      {
        "label": "NSI - Empregados e salarios medios, 3o trimestre de 2025",
        "url": "https://www.nsi.bg/en/press-release/employees-and-average-wages-and-salaries-third-quarter-of-2025-8846",
        "official": true
      },
      {
        "label": "EURES - Informacao de Mercado de Trabalho: Bulgaria",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-bulgaria_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - Cartao Azul da UE: Bulgaria",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-bulgaria_en",
        "official": true
      },
      {
        "label": "ELA/EURES - Relatorio sobre escassez e excesso de mao de obra 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "BTA - Salario minimo sobe para 620,20 EUR (governo bulgaro)",
        "url": "https://www.bta.bg/en/news/bulgaria/1036420-minimum-wage-rises-to-eur-620-20-poverty-line-up",
        "official": true
      }
    ]
  },
  "cy": {
    "updatedAt": "2026-07-06",
    "overview": "O mercado de trabalho cipriota segue em expansao e no menor patamar de desemprego em mais de uma decada. Segundo o Inquerito as Forcas de Trabalho do Servico de Estatistica (CyStat), a taxa de desemprego caiu para 4,0% no primeiro trimestre de 2026, ante 5,0% no mesmo periodo de 2025, com 21.246 desempregados e 510.265 pessoas ocupadas. A taxa de emprego subiu para 62,1% da populacao. O ponto de atencao e o desemprego juvenil (15 a 24 anos), que subiu para 13,1% no 1o trimestre de 2026. A economia e puxada por turismo, tecnologia da informacao, servicos financeiros e construcao, e o pais registrou 63 profissoes em falta em 2024 segundo o relatorio EURES.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TIC/ICT)",
      "Turismo e hotelaria/alimentacao",
      "Saude e farmaceutica",
      "Servicos financeiros, contabilidade e forex",
      "Construcao civil e oficios da construcao",
      "Energias renovaveis",
      "Shipping/setor maritimo"
    ],
    "coolingSectors": [
      "Agricultura tradicional",
      "Industria/manufatura",
      "Comercio varejista",
      "Profissoes administrativas e de escritorio (em excedente)",
      "Docencia/professores (em excedente)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros e parteiras",
        "note": "Escassez severa no setor de saude (relatorio EURES 2024)."
      },
      {
        "role": "Desenvolvedores de software e aplicativos",
        "note": "Alta demanda em TIC; escassez severa."
      },
      {
        "role": "Analistas de sistemas",
        "note": "TIC; escassez severa."
      },
      {
        "role": "Desenvolvedores web e multimidia",
        "note": "TIC; escassez severa."
      },
      {
        "role": "Profissionais de vendas de TIC",
        "note": "Escassez severa."
      },
      {
        "role": "Tecnicos de imagem medica",
        "note": "Saude; escassez severa."
      },
      {
        "role": "Garcons",
        "note": "Turismo/hotelaria; escassez severa."
      },
      {
        "role": "Motoristas de onibus",
        "note": "Escassez severa."
      },
      {
        "role": "Cozinheiros e chefs",
        "note": "Hotelaria; escassez media."
      },
      {
        "role": "Eletricistas, encanadores e carpinteiros",
        "note": "Oficios da construcao; escassez baixa a media."
      },
      {
        "role": "Recepcionistas de hotel",
        "note": "Turismo; escassez baixa."
      },
      {
        "role": "Motoristas de veiculos pesados (HGV)",
        "note": "Escassez media."
      },
      {
        "role": "Auxiliares de limpeza e helpers",
        "note": "Um dos grupos com maior ocorrencia de escassez."
      },
      {
        "role": "Engenheiros de varias especialidades",
        "note": "Escassez baixa."
      },
      {
        "role": "Medicos clinicos gerais e especialistas",
        "note": "Escassez baixa."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao (TIC)",
        "advice": "Setor mais aquecido e prioritario. Desenvolvedores, analistas de sistemas, web e vendas de TIC estao entre as escassez mais severas, e ha vagas ilimitadas de EU Blue Card no setor. Profissionais de fora da UE podem substituir diploma por 3 anos de experiencia relevante em TIC nos ultimos 7 anos."
      },
      {
        "area": "Saude e Enfermagem",
        "advice": "Escassez severa de enfermeiros, parteiras e tecnicos de imagem medica; medicos generalistas e especialistas com escassez baixa mas continua. Saude e um dos setores elegiveis ao EU Blue Card. Reconhecimento de diploma e essencial."
      },
      {
        "area": "Hotelaria e Turismo",
        "advice": "Demanda constante por garcons, cozinheiros/chefs, recepcionistas e auxiliares de cozinha, especialmente na temporada. Bom ponto de entrada, mas salarios proximos do piso legal."
      },
      {
        "area": "Engenharia e Construcao",
        "advice": "Oficios como eletricistas, encanadores, carpinteiros e trabalhadores da construcao estao em falta. Engenheiros de varias especialidades tem escassez baixa mas persistente."
      },
      {
        "area": "Financas, Contabilidade e Direito Empresarial",
        "advice": "Contabilidade, economia e financas sao setores elegiveis ao EU Blue Card e sustentados por forex e servicos empresariais. Atencao: profissionais de administracao e escritorio estao em EXCEDENTE, concorrencia maior."
      },
      {
        "area": "Educacao",
        "advice": "Professores estao em excedente segundo o relatorio EURES, com mais oferta que demanda. Requer diferenciacao (idiomas, areas STEM) para se destacar."
      },
      {
        "area": "Shipping e Maritimo",
        "advice": "Setor elegivel ao EU Blue Card (exceto tripulacao de embarcacao), com posicoes disponiveis para estrangeiros altamente qualificados."
      }
    ],
    "salaries": [
      {
        "role": "Media geral (todos os empregados)",
        "range": "EUR 2.605/mes (bruto, media anual 2025)",
        "source": {
          "label": "CyStat / Gov.cy - Average Monthly Earnings 2025 (preliminar)",
          "url": "https://www.gov.cy/en/economy-and-finance/average-monthly-earnings-of-employees-4th-quarter-2025-and-annual-data-2025-preliminary/",
          "official": true
        }
      },
      {
        "role": "Mediana geral (todos os empregados)",
        "range": "EUR 1.968/mes (bruto, 2025)",
        "source": {
          "label": "CyStat / Gov.cy - Average Monthly Earnings 2025",
          "url": "https://www.gov.cy/en/economy-and-finance/average-monthly-earnings-of-employees-4th-quarter-2025-and-annual-data-2025-preliminary/",
          "official": true
        }
      },
      {
        "role": "Homens (4o trimestre 2025)",
        "range": "EUR 3.102/mes (bruto)",
        "source": {
          "label": "CyStat / Gov.cy - Average Monthly Earnings Q4 2025",
          "url": "https://www.gov.cy/en/economy-and-finance/average-monthly-earnings-of-employees-4th-quarter-2025-and-annual-data-2025-preliminary/",
          "official": true
        }
      },
      {
        "role": "Mulheres (4o trimestre 2025)",
        "range": "EUR 2.718/mes (bruto)",
        "source": {
          "label": "CyStat / Gov.cy - Average Monthly Earnings Q4 2025",
          "url": "https://www.gov.cy/en/economy-and-finance/average-monthly-earnings-of-employees-4th-quarter-2025-and-annual-data-2025-preliminary/",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional (2026)",
        "range": "EUR 1.088/mes (bruto); EUR 900/mes nos 6 primeiros meses do novo contrato",
        "source": {
          "label": "Republica de Chipre - Decreto do Salario Minimo (Ministerio do Trabalho e Seguranca Social)",
          "url": "https://www.mlsi.gov.cy/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card (altamente qualificados, nao-UE)",
        "range": "EUR 43.632/ano (bruto minimo)",
        "source": {
          "label": "Departamento de Migracao / legislacao EU Blue Card (Diretiva 2021/1883)",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-cyprus_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE tem livre circulacao e podem trabalhar em Chipre sem autorizacao previa. Para nacionais de paises terceiros (nao-UE), o emprego exige autorizacao de trabalho e, em geral, oferta previa de emprego. Desde 1o de agosto de 2024 entrou em vigor o novo marco legal do EU Blue Card, harmonizado com a Diretiva europeia 2021/1883, e o Departamento de Migracao passou a receber pedidos a partir de 7 de julho de 2025. O EU Blue Card permite residir e trabalhar em setores especificos: TIC, ciencia/pesquisa/inovacao, economia/contabilidade/financas, saude e farmaceutica, e shipping (exceto tripulacao). Exige qualificacao profissional alta comprovada por diploma de ensino superior (minimo 3 anos) ou, no setor de TIC, 3 anos de experiencia relevante nos ultimos 7 anos como alternativa ao diploma, alem de salario bruto minimo de EUR 43.632/ano. Reconhecimento de diplomas estrangeiros e requerido para profissoes regulamentadas (ex.: saude). Regras oficiais no Departamento de Trabalho e no Departamento de Migracao. Fonte oficial: mlsi.gov.cy e Departamento de Migracao.",
    "opportunityWindows": [
      "63 profissoes em falta em 2024 (relatorio EURES), concentradas em TIC, saude e turismo, sinalizando forte demanda por mao de obra qualificada e semiqualificada.",
      "EU Blue Card com vagas ILIMITADAS nos setores de TIC, pesquisa farmaceutica e industria maritima (exceto tripulacao) para profissionais altamente qualificados de fora da UE.",
      "No setor de TIC, 3 anos de experiencia relevante (nos ultimos 7 anos) substituem o diploma para fins do EU Blue Card.",
      "Aproximacao da entrada de Chipre no espaco Schengen amplia a atratividade para talentos internacionais.",
      "Temporada turistica cria janelas sazonais para hotelaria, alimentacao e recepcao."
    ],
    "jobBoards": [
      {
        "label": "Public Employment Services (PES) - Servico Publico de Emprego de Chipre",
        "url": "https://www.pescps.dl.mlsi.gov.cy/",
        "official": true
      },
      {
        "label": "EURES Cyprus (portal europeu de mobilidade laboral)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-cyprus_en",
        "official": true
      },
      {
        "label": "Ergodotisi.com",
        "url": "https://www.ergodotisi.com/",
        "official": false
      },
      {
        "label": "Carierista.com",
        "url": "https://www.carierista.com/",
        "official": false
      },
      {
        "label": "CyprusJobs.com",
        "url": "https://www.cyprusjobs.com/",
        "official": false
      },
      {
        "label": "Kariera.com.cy",
        "url": "https://www.kariera.com.cy/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "CyStat / Gov.cy - Labour Force Survey 1o trimestre 2026",
        "url": "https://www.gov.cy/en/economy-and-finance/labour-force-survey-lfs-1st-quarter-2026/",
        "official": true
      },
      {
        "label": "CyStat - Estatisticas do Mercado de Trabalho",
        "url": "https://www.cystat.gov.cy/en/SubthemeStatistics?id=43",
        "official": true
      },
      {
        "label": "CyStat / Gov.cy - Average Monthly Earnings of Employees, 4o trimestre e anual 2025 (preliminar)",
        "url": "https://www.gov.cy/en/economy-and-finance/average-monthly-earnings-of-employees-4th-quarter-2025-and-annual-data-2025-preliminary/",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Cyprus",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-cyprus_en",
        "official": true
      },
      {
        "label": "EURES/ELA - Report on Labour Shortages and Surpluses 2024",
        "url": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "official": true
      },
      {
        "label": "Ministerio do Trabalho e Seguranca Social de Chipre (mlsi.gov.cy)",
        "url": "https://www.mlsi.gov.cy/",
        "official": true
      }
    ]
  },
  "hr": {
    "updatedAt": "2026-07-06",
    "overview": "O mercado de trabalho croata segue aquecido e com desemprego historicamente baixo. No quarto trimestre de 2025, a taxa de desemprego pela metodologia OIT ficou em 5,0% na faixa de 15 a 64 anos, com 89 mil desempregados, enquanto o numero de ocupados chegou a 1,701 milhao de pessoas, alta de 1,8% em relacao ao mesmo periodo de 2024 (fonte: DZS, Inquerito por Amostragem da Forca de Trabalho). A taxa de emprego subiu para 68,7% e a taxa de atividade atingiu 72,3%. O pais convive com escassez estrutural de mao de obra em construcao, turismo, industria e saude, o que abriu espaco para forte entrada de trabalhadores estrangeiros. Os salarios seguem em trajetoria de alta, com o ganho liquido medio de dezembro de 2025 crescendo 9,8% em termos nominais na comparacao anual (fonte: DZS).",
    "hotSectors": [
      "Construcao civil (pedreiros, carpinteiros, armadores, soldadores)",
      "Turismo e hotelaria (temporada adriatica de maio a outubro)",
      "Industria transformadora e construcao naval",
      "Tecnologia da informacao e comunicacao (TIC)",
      "Transporte rodoviario de carga",
      "Saude e assistencia social"
    ],
    "coolingSectors": [
      "Funcoes administrativas (economistas, secretarias, auxiliares administrativos)",
      "Ocupacoes de nivel superior em humanidades (jornalistas, cientistas politicos, filosofos)",
      "Cabeleireiros e fotografos",
      "Representantes comerciais de vendas"
    ],
    "inDemandRoles": [
      {
        "role": "Pedreiro, carpinteiro de formas e armador",
        "note": "Setor de construcao lidera a escassez em todas as regioes"
      },
      {
        "role": "Soldador e montador (construcao naval e metalurgia)"
      },
      {
        "role": "Cozinheiro, garcom e recepcionista de hotel",
        "note": "Demanda sazonal forte no litoral adriatico"
      },
      {
        "role": "Motorista de caminhao pesado"
      },
      {
        "role": "Profissionais de TIC (desenvolvedores de software, administradores de sistemas, especialistas em banco de dados)",
        "note": "Demanda cresce mais rapido que o numero de formados"
      },
      {
        "role": "Engenheiro mecanico"
      },
      {
        "role": "Medico e tecnico de enfermagem"
      },
      {
        "role": "Professor de matematica do ensino secundario"
      },
      {
        "role": "Operador de producao e de maquinas na industria"
      }
    ],
    "byQualification": [
      {
        "area": "Engenharia e TIC",
        "advice": "Sao das areas mais valorizadas e com maior escassez. Desenvolvedores de software, administradores de sistemas e engenheiros mecanicos encontram vagas com facilidade, inclusive por via da EU Blue Card, que dispensa parecer previo do Servico Croata de Emprego."
      },
      {
        "area": "Construcao civil e oficios manuais",
        "advice": "Pedreiros, carpinteiros, armadores e soldadores estao entre as ocupacoes deficitarias listadas pelo HZZ, o que abre acesso facilitado ao emprego de estrangeiros sem teste de mercado de trabalho."
      },
      {
        "area": "Turismo e hotelaria",
        "advice": "Cozinheiros, garcons e recepcionistas tem alta procura, especialmente para a temporada de maio a outubro. Trabalho sazonal em hotelaria e turismo dispensa teste de mercado de trabalho ate 90 dias por ano."
      },
      {
        "area": "Saude",
        "advice": "Medicos e tecnicos de enfermagem estao em falta. E preciso reconhecimento do diploma junto as autoridades croatas antes de exercer."
      },
      {
        "area": "Administracao e humanidades",
        "advice": "Sao areas com excesso de oferta em relacao a demanda. Economistas, auxiliares administrativos, jornalistas e cientistas politicos enfrentam maior dificuldade de transicao para o emprego."
      }
    ],
    "salaries": [
      {
        "role": "Ganho liquido medio mensal (legal entities)",
        "range": "1.494 EUR (dezembro/2025)",
        "source": {
          "label": "DZS, Ganhos Medios Mensais Liquidos e Brutos",
          "url": "https://dzs.gov.hr/news/the-average-monthly-net-earnings-for-december-2025-amounted-to-1-494-euro/2472",
          "official": true
        }
      },
      {
        "role": "Ganho bruto medio mensal (legal entities)",
        "range": "2.087 EUR (dezembro/2025)",
        "source": {
          "label": "DZS, Ganhos Medios Mensais Liquidos e Brutos",
          "url": "https://dzs.gov.hr/news/the-average-monthly-net-earnings-for-december-2025-amounted-to-1-494-euro/2472",
          "official": true
        }
      },
      {
        "role": "Salario minimo mensal (bruto)",
        "range": "1.050 EUR (a partir de 01/01/2026)",
        "source": {
          "label": "Eurofound, Salario minimo na Croacia",
          "url": "https://www.eurofound.europa.eu/en/countries/croatia/minimum-wage",
          "official": true
        }
      }
    ],
    "foreignerRules": "Nacionais de paises terceiros trabalham na Croacia por meio de uma autorizacao unica de residencia e trabalho (stay and work permit) ou de um certificado de registro de trabalho (ate 90 ou 30 dias por ano). Ha tres regimes: (1) com teste de mercado de trabalho mais parecer do Servico Croata de Emprego (HZZ), padrao para a maioria das vagas; (2) sem teste de mercado, mas com parecer do HZZ, para profissoes designadas como de alta demanda pelo Conselho de Administracao do HZZ (as ocupacoes deficitarias); (3) sem teste nem parecer, para extensoes de autorizacao, trabalho sazonal (agricultura, silvicultura, hotelaria e turismo, ate 90 dias por ano) e categorias do Artigo 110 (pessoal-chave, socios com 51% ou mais, titulares de EU Blue Card, transferencias intra-empresa, voluntarios, estagiarios e tripulantes). A EU Blue Card e destinada a profissionais altamente qualificados de paises terceiros, e emitida por ate 48 meses e dispensa o parecer previo do HZZ. Taxas administrativas: autorizacao de residencia e trabalho 74,32 EUR e certificado biometrico de residencia 31,85 EUR. Profissoes regulamentadas exigem reconhecimento de diploma junto as autoridades croatas. Fonte: Ministerio do Interior (MUP).",
    "opportunityWindows": [
      "Ocupacoes deficitarias designadas pelo HZZ dao acesso facilitado ao emprego de estrangeiros sem teste de mercado de trabalho (construcao, construcao naval, hotelaria, industria)",
      "Trabalho sazonal em hotelaria e turismo dispensa teste de mercado ate 90 dias por ano, alinhado a temporada adriatica de maio a outubro",
      "EU Blue Card ampliada pelas emendas de 2025 a Lei de Estrangeiros: validade de ate 48 meses, reconhecimento de qualificacao por experiencia para certos cargos de TIC e dispensa de parecer previo do HZZ",
      "Escassez estrutural em TIC e engenharia, onde a demanda cresce mais rapido que o numero de formados"
    ],
    "jobBoards": [
      {
        "label": "Burza rada (portal oficial do HZZ, Servico Croata de Emprego)",
        "url": "https://burzarada.hzz.hr/",
        "official": true
      },
      {
        "label": "HZZ, Servico Croata de Emprego (site institucional)",
        "url": "https://www.hzz.hr/en/",
        "official": true
      },
      {
        "label": "EURES, portal europeu de emprego",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "MojPosao",
        "url": "https://www.mojposao.hr/",
        "official": false
      },
      {
        "label": "Posao.hr",
        "url": "https://www.posao.hr/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "DZS, Forca de Trabalho na Republica da Croacia, 4o trimestre de 2025",
        "url": "https://podaci.dzs.hr/2025/en/96920",
        "official": true
      },
      {
        "label": "DZS, ganho liquido medio de dezembro de 2025 (1.494 EUR)",
        "url": "https://dzs.gov.hr/news/the-average-monthly-net-earnings-for-december-2025-amounted-to-1-494-euro/2472",
        "official": true
      },
      {
        "label": "Eurofound, salario minimo na Croacia",
        "url": "https://www.eurofound.europa.eu/en/countries/croatia/minimum-wage",
        "official": true
      },
      {
        "label": "MUP, Trabalho de nacionais de paises terceiros",
        "url": "https://mup.gov.hr/aliens-281621/stay-and-work/work-of-third-country-nationals/281663",
        "official": true
      },
      {
        "label": "MUP, EU Blue Card e trabalhadores altamente qualificados",
        "url": "https://mup.gov.hr/aliens-281621/stay-and-work/stay-and-work-of-highly-qualified-third-country-nationals/281692",
        "official": true
      },
      {
        "label": "EURES, informacao do mercado de trabalho da Croacia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-croatia_en",
        "official": true
      },
      {
        "label": "Cedefop, ocupacoes prioritarias de desajuste (Croacia)",
        "url": "https://www.cedefop.europa.eu/en/data-insights/croatia-mismatch-priority-occupations",
        "official": true
      }
    ]
  },
  "sk": {
    "updatedAt": "2026-07-06",
    "overview": "A Eslovaquia entrou em 2026 com o mercado de trabalho ainda aquecido do lado dos salarios, mas com sinais de esfriamento no emprego. O salario minimo saltou para o maior patamar da historia do pais, fixado por mecanismo automatico em 60% do salario medio de 2024. Ao mesmo tempo, o desemprego voltou a subir no primeiro trimestre de 2026, aproximando-se do limite de 6%, com forte divergencia regional, o leste e o centro do pais concentram as maiores taxas, enquanto o oeste industrial (Bratislava, Trnava, Zilina) opera perto do pleno emprego. A industria automotiva segue como motor central, reforcada pela chegada da fabrica de veiculos eletricos da Volvo perto de Kosice, e o setor de servicos (TI, saude, educacao, financas) puxa a maior parte das novas vagas. A dependencia de mao de obra estrangeira, sobretudo de fora da UE, cresce para tapar a escassez cronica em oficios tecnicos, saude e transporte.",
    "hotSectors": [
      "Industria automotiva e eletromobilidade (nova fabrica da Volvo perto de Kosice)",
      "Tecnologia da informacao e servicos digitais",
      "Saude e cuidados (enfermagem, cuidadores, tecnicos de laboratorio)",
      "Servicos financeiros",
      "Educacao",
      "Logistica e transporte",
      "Oficios tecnicos da construcao e industria (soldadores, eletricistas, operadores de maquinas)"
    ],
    "coolingSectors": [
      "Servicos de comunicacao (previsao de queda no emprego)",
      "Suporte ao cliente e suporte tecnico de TI de nivel basico (pressao de automacao e IA)",
      "Administracao publica (queda do salario real em 2025)",
      "Servicos administrativos e imobiliario (queda do salario real em 2025)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros e cuidadores",
        "note": "Escassez cronica de pessoal qualificado em todas as regioes, pressionando o sistema de saude."
      },
      {
        "role": "Medicos e tecnicos de laboratorio",
        "note": "Demanda ampla no setor de saude, alem de socorristas e paramedicos."
      },
      {
        "role": "Soldadores, eletricistas e carpinteiros",
        "note": "Oficios da construcao e industria com subutilizacao cronica de oferta em varias regioes."
      },
      {
        "role": "Operadores de maquinas e de plantas industriais fixas",
        "note": "Entre as ocupacoes de maior demanda segundo o EURES."
      },
      {
        "role": "Motoristas e operadores de equipamento movel",
        "note": "Alta procura, inclusive motoristas de caminhao."
      },
      {
        "role": "Engenheiros",
        "note": "Demanda sustentada pela industria e pela expansao automotiva."
      },
      {
        "role": "Desenvolvedores de software e profissionais de TI",
        "note": "Crescimento puxado pela digitalizacao, apesar do encolhimento de vagas de suporte basico."
      },
      {
        "role": "Profissionais de hotelaria e alimentacao",
        "note": "Procura recorrente por trabalhadores qualificados e semiqualificados."
      },
      {
        "role": "Trabalhadores de armazem e logistica",
        "note": "Sustentados pela expansao industrial e de transporte."
      }
    ],
    "byQualification": [
      {
        "area": "Saude",
        "advice": "Enfermeiros, cuidadores, medicos, tecnicos de laboratorio e socorristas estao entre os mais procurados, com falta em todas as regioes. Diplomas exigem reconhecimento oficial na Eslovaquia."
      },
      {
        "area": "Engenharia e industria",
        "advice": "Engenheiros, soldadores, eletricistas, carpinteiros e operadores de maquinas tem demanda sustentada pela industria automotiva e pela expansao da eletromobilidade, sobretudo no leste (Kosice)."
      },
      {
        "area": "Tecnologia da informacao",
        "advice": "Desenvolvedores de software e perfis com competencias digitais avancadas seguem valorizados, mas vagas de suporte tecnico basico e atendimento estao sob pressao de automacao e IA."
      },
      {
        "area": "Transporte e logistica",
        "advice": "Motoristas de caminhao, operadores de equipamento movel e trabalhadores de armazem tem procura recorrente."
      },
      {
        "area": "Hotelaria e alimentacao",
        "advice": "Demanda constante por profissionais qualificados e semiqualificados, incluindo perfis estrangeiros."
      }
    ],
    "salaries": [
      {
        "role": "Salario minimo (mensal, 2026)",
        "range": "915 EUR/mes (5,259 EUR/hora)",
        "source": {
          "label": "Slov-Lex, Zbierka zakonov, Oznamenie MPSVR SR c. 245/2025 Z. z. o sume minimalnej mzdy na rok 2026",
          "url": "https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2025/245/20250926",
          "official": true
        }
      },
      {
        "role": "Salario medio (mensal, ano de 2025)",
        "range": "1.620 EUR/mes (bruto)",
        "source": {
          "label": "Statisticky urad SR, Priemerna mesacna mzda v hospodarstve vo 4. stvrtroku a v roku 2025",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages?1dmy=&urile=wcm%3Apath%3A%2FObsah-SK-INF-AKT%2Finformativne-spravy%2Fvsetky%2Fe85f8bdc-faf2-4aed-8684-44ed4a839ad2",
          "official": true
        }
      },
      {
        "role": "Salario medio (mensal, 4o trimestre de 2025)",
        "range": "1.739 EUR/mes (bruto)",
        "source": {
          "label": "Statisticky urad SR, Priemerna mesacna mzda v hospodarstve vo 4. stvrtroku a v roku 2025",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages?1dmy=&urile=wcm%3Apath%3A%2FObsah-SK-INF-AKT%2Finformativne-spravy%2Fvsetky%2Fe85f8bdc-faf2-4aed-8684-44ed4a839ad2",
          "official": true
        }
      },
      {
        "role": "Salario medio na industria (4o trimestre de 2025)",
        "range": "1.884 EUR/mes (bruto)",
        "source": {
          "label": "Statisticky urad SR, Priemerna mesacna mzda v hospodarstve vo 4. stvrtroku a v roku 2025",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages?1dmy=&urile=wcm%3Apath%3A%2FObsah-SK-INF-AKT%2Finformativne-spravy%2Fvsetky%2Fe85f8bdc-faf2-4aed-8684-44ed4a839ad2",
          "official": true
        }
      },
      {
        "role": "Salario medio no comercio (4o trimestre de 2025)",
        "range": "1.597 EUR/mes (bruto)",
        "source": {
          "label": "Statisticky urad SR, Priemerna mesacna mzda v hospodarstve vo 4. stvrtroku a v roku 2025",
          "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages?1dmy=&urile=wcm%3Apath%3A%2FObsah-SK-INF-AKT%2Finformativne-spravy%2Fvsetky%2Fe85f8bdc-faf2-4aed-8684-44ed4a839ad2",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do Espaco Economico Europeu e da Suica tem livre acesso ao mercado de trabalho eslovaco, sem necessidade de autorizacao. Cidadaos de paises terceiros (fora da UE) precisam, na maioria dos casos, de uma autorizacao unica (single permit), solicitada junto ao Departamento de Policia, que combina residencia e trabalho e vale por ate 2 anos. A concessao depende de confirmacao do escritorio de trabalho (UPSVaR) sobre a possibilidade de preencher a vaga. Quando a ocupacao consta da lista oficial de profissoes em falta (shortage occupations), publicada pelo UPSVaR para as regioes com desemprego medio registrado abaixo de 5%, essa confirmacao e emitida sem teste de mercado de trabalho e sem exigencia de anuncio previo da vaga. O numero de estrangeiros empregados por uma mesma empresa deve ser inferior a 30% do total de funcionarios. Ha ainda a via do Cartao Azul da UE para emprego altamente qualificado, condicionada a um salario mensal de pelo menos 1,5 vez o salario medio mensal na Eslovaquia. Nao existe direito legal automatico a obtencao de autorizacao de trabalho.",
    "opportunityWindows": [
      "Expansao da eletromobilidade no leste do pais com a nova fabrica de veiculos eletricos da Volvo perto de Kosice, que deve gerar milhares de vagas ate 2027",
      "Regioes do oeste (Bratislava, Trnava, Zilina) operam perto do pleno emprego, com desemprego entre 2,6% e 3,3% no 1o trimestre de 2026, sinalizando forte demanda por trabalhadores",
      "Profissoes na lista oficial de ocupacoes em falta dispensam teste de mercado de trabalho para contratacao de estrangeiros de fora da UE, agilizando a entrada",
      "Escassez estrutural em saude e oficios tecnicos abre espaco continuo para mao de obra qualificada e semiqualificada estrangeira"
    ],
    "jobBoards": [
      {
        "label": "Sluzby zamestnanosti (portal oficial do Ministerio do Trabalho)",
        "url": "https://www.sluzbyzamestnanosti.gov.sk",
        "official": true
      },
      {
        "label": "UPSVaR, Ustredie prace, socialnych veci a rodiny (escritorio central de trabalho)",
        "url": "https://www.upsvr.gov.sk",
        "official": true
      },
      {
        "label": "EURES Eslovaquia (portal europeu de empregos)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "ISTP, Internetovy sprievodca trhom prace (vagas, cooperacao com o UPSVaR)",
        "url": "https://www.istp.sk/volne-pracovne-miesta",
        "official": true
      },
      {
        "label": "Profesia.sk (maior portal privado de vagas da Eslovaquia)",
        "url": "https://www.profesia.sk",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Slov-Lex, Zbierka zakonov, Oznamenie MPSVR SR c. 245/2025 Z. z. o sume minimalnej mzdy na rok 2026 (salario minimo 915 EUR/mes, 5,259 EUR/hora)",
        "url": "https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2025/245/20250926",
        "official": true
      },
      {
        "label": "MPSVR SR (Ministerio do Trabalho), comunicado sobre o salario minimo de 2026",
        "url": "https://www.employment.gov.sk/sk/uvodna-stranka/informacie-media/aktuality/historicky-narast-minimalnej-mzdy-je-realitou-roku-2026-je-minimalna-mzda-vo-vyske-915-eur.html",
        "official": true
      },
      {
        "label": "Statisticky urad SR (Escritorio de Estatistica), salario medio 4o trimestre e ano de 2025 e por setor",
        "url": "https://slovak.statistics.sk/wps/portal/ext/products/informationmessages?1dmy=&urile=wcm%3Apath%3A%2FObsah-SK-INF-AKT%2Finformativne-spravy%2Fvsetky%2Fe85f8bdc-faf2-4aed-8684-44ed4a839ad2",
        "official": true
      },
      {
        "label": "Statisticky urad SR, desemprego no 1o trimestre de 2026 (5,9%) e taxas regionais",
        "url": "https://slovak.statistics.sk/wps/portal/ext/home/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziA809LZycDB0NLPyCXA08QxwD3IO8TAwNTEz1g1Pz9AuyHRUBtph-Sw!!",
        "official": true
      },
      {
        "label": "EURES, informacoes do mercado de trabalho da Eslovaquia (setores, ocupacoes em falta, desemprego)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-slovakia_en",
        "official": true
      },
      {
        "label": "MPSVR SR, emprego de nacional de pais terceiro (autorizacao unica, Cartao Azul, teste de mercado)",
        "url": "https://www.employment.gov.sk/en/information-foreigners/employment/employment-third-country-national.html",
        "official": true
      },
      {
        "label": "UPSVaR, lista de ocupacoes em falta e reporte de vagas para nacionais de paises terceiros",
        "url": "https://www.upsvr.gov.sk",
        "official": true
      }
    ]
  },
  "si": {
    "updatedAt": "2026-07-06",
    "overview": "A Eslovenia entra em 2026 com um mercado de trabalho apertado e desemprego em minimos historicos. Pela Pesquisa de Forca de Trabalho da UE reportada no EURES, a taxa de desemprego estava em 3,7% em 2023, bem abaixo da media da UE27, com taxa de emprego de 72,5%. O quadro de 2026 mantem essa tensao: o Poklicni barometer 2026 do ZRSZ, servico publico de emprego, avaliou 171 ocupacoes e projetou falta de mao de obra em 98 delas contra apenas 18 em excesso, sinal de escassez generalizada. A pressao concentra-se em saude, educacao e construcao, e a demanda por trabalhadores estrangeiros cresce, ja que cerca de 15,8% dos ocupados residentes eram estrangeiros em agosto de 2024, a maioria de paises terceiros.",
    "hotSectors": [
      "Saude e assistencia social",
      "Educacao",
      "Construcao civil e engenharia",
      "Industria transformadora e metalmecanica",
      "Transporte e logistica",
      "Hotelaria e restauracao"
    ],
    "coolingSectors": [
      "Design grafico e multimidia",
      "Jornalismo e midia",
      "Areas artisticas e fotografia",
      "Servicos administrativos de secretariado e telefonia"
    ],
    "inDemandRoles": [
      {
        "role": "Medicos e especialistas de enfermagem",
        "note": "Falta estrutural no setor de saude segundo o Poklicni barometer 2026 do ZRSZ."
      },
      {
        "role": "Professores de ensino basico e medio e educadores de infancia",
        "note": "Escassez em varios grupos docentes, incluindo assistentes de educador."
      },
      {
        "role": "Engenheiros civis, mecanicos e eletricos",
        "note": "Demanda alta ligada a construcao e industria."
      },
      {
        "role": "Fisioterapeutas, assistentes pessoais e trabalhadores de cuidado social",
        "note": "Escassez no cuidado a pessoas."
      },
      {
        "role": "Pedreiros, betoneiros, carpinteiros e telhadores",
        "note": "Falta de mao de obra na construcao."
      },
      {
        "role": "Cozinheiros e garcons",
        "note": "Escassez na hotelaria e restauracao."
      },
      {
        "role": "Motoristas de caminhao pesado e de onibus",
        "note": "Falta de mao de obra no transporte."
      },
      {
        "role": "Especialistas em logistica, recursos humanos, contabilidade e auditoria",
        "note": "Demanda por perfis tecnicos e de gestao."
      },
      {
        "role": "Mecanicos e tecnicos de manutencao, torneiros e marceneiros",
        "note": "Escassez ligada a lacuna de competencias."
      },
      {
        "role": "Veterinarios",
        "note": "Listado entre as ocupacoes em falta em 2026."
      }
    ],
    "byQualification": [
      {
        "area": "Saude",
        "advice": "Setor com a maior escassez do pais. Medicos, enfermeiros especialistas, dentistas, fisioterapeutas e trabalhadores de cuidado social tem forte demanda. O reconhecimento de qualificacao profissional junto as autoridades eslovenas e, em geral, o registro no conselho profissional correspondente sao passos necessarios antes de exercer."
      },
      {
        "area": "Educacao",
        "advice": "Escassez em varios grupos de professores do ensino basico e medio, educadores de infancia e assistentes. O dominio do esloveno costuma ser exigido para funcoes docentes na rede publica."
      },
      {
        "area": "Engenharia e Construcao",
        "advice": "Engenheiros civis, mecanicos, eletricos e eletronicos estao entre os mais procurados, assim como profissionais de obra qualificados. Boa janela para quem tem diploma tecnico reconhecido."
      },
      {
        "area": "Transporte e Logistica",
        "advice": "Motoristas profissionais de caminhao pesado e onibus e especialistas em logistica tem demanda. Habilitacoes e certificacoes de conducao precisam ser validadas na Eslovenia."
      },
      {
        "area": "Hotelaria e Restauracao",
        "advice": "Cozinheiros e garcons faltam, sobretudo nas regioes turisticas e no litoral de Koper. Boa porta de entrada, muitas vezes com contratos sazonais."
      },
      {
        "area": "Design, Midia e Artes",
        "advice": "Areas com excesso de oferta segundo o ZRSZ: designers graficos e multimidia, jornalistas, artistas e fotografos enfrentam mercado mais disputado. Vale diversificar competencias ou mirar nichos tecnicos."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto (todos os setores)",
        "range": "2.678,28 EUR/mes (bruto), 1.678,81 EUR/mes (liquido)",
        "source": {
          "label": "SURS, dados de marco de 2026",
          "url": "https://www.stat.si/statweb/en/Field/Index/15/74",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional",
        "range": "1.481,88 EUR/mes (bruto), vigente desde 1 de janeiro de 2026",
        "source": {
          "label": "SURS / legislacao eslovena",
          "url": "https://www.stat.si/statweb/en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do EEE e da Suica tem livre acesso ao mercado de trabalho esloveno. Nacionais de paises terceiros precisam, na regra geral, do permesso unico (single permit), que combina residencia e trabalho: e emitido pela unidade administrativa (upravna enota) com consentimento previo obrigatorio do ZRSZ, o servico publico de emprego, que avalia as condicoes legais. O primeiro permesso vale ate 2 anos, ligado ao contrato, e a renovacao pode chegar a 3 anos. Sem permesso valido, o contrato de trabalho e nulo e sujeito a penalidades. Para trabalhadores altamente qualificados existe o EU Blue Card, destinado a quem tem formacao universitaria, contrato de pelo menos 1 ano e salario de no minimo 1,5 vez o salario bruto anual medio da Eslovenia; a validade padrao e de ate 2 anos. A autoridade decide sobre o pedido em ate 30 dias apos recebido o processo completo. Diplomas obtidos no exterior podem exigir reconhecimento junto as autoridades eslovenas, sobretudo em profissoes regulamentadas como saude e educacao. Fontes oficiais: ZRSZ (ess.gov.si) e portal do governo (gov.si).",
    "opportunityWindows": [
      "Poklicni barometer 2026 do ZRSZ (publicado em setembro de 2025) lista 98 ocupacoes em falta, das quais saude, educacao e construcao concentram a maior demanda, funcionando como guia oficial de onde ha vagas.",
      "As regioes de Ljubljana e Koper concentram mais de 100 grupos ocupacionais em escassez cada uma, sendo os polos com mais oportunidades.",
      "EU Blue Card acelera a entrada de profissionais altamente qualificados com salario a partir de 1,5 vez o salario medio anual bruto, com decisao em ate 30 dias.",
      "Contratos sazonais em hotelaria e agricultura oferecem porta de entrada mais rapida ao mercado."
    ],
    "jobBoards": [
      {
        "label": "ZRSZ - Servico Publico de Emprego da Eslovenia (ess.gov.si)",
        "url": "https://www.ess.gov.si/en/jobseekers",
        "official": true
      },
      {
        "label": "EURES Eslovenia - Portal Europeu de Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "GOV.SI - Entrada, residencia e trabalho na Eslovenia",
        "url": "https://www.gov.si/en/topics/entry-and-residence/",
        "official": true
      },
      {
        "label": "ZRSZ - Emprego de trabalhadores nao-UE (single permit)",
        "url": "https://www.ess.gov.si/en/jobseekers/employment-of-non-eu-migrant-workers/work-in-slovenia/single-permit",
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
        "label": "ZRSZ - Poklicni barometer (barometro de profissoes)",
        "url": "https://www.ess.gov.si/partnerji/trg-dela/poklicni-barometer/",
        "official": true
      },
      {
        "label": "SURS - Earnings and Labour Cost (stat.si)",
        "url": "https://www.stat.si/statweb/en/Field/Index/15/74",
        "official": true
      },
      {
        "label": "ZRSZ - Single permit (permesso unico) para nacionais de paises terceiros",
        "url": "https://www.ess.gov.si/en/jobseekers/employment-of-non-eu-migrant-workers/work-in-slovenia/single-permit",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Slovenia",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-slovenia_en",
        "official": true
      },
      {
        "label": "GOV.SI - Entry and residence",
        "url": "https://www.gov.si/en/topics/entry-and-residence/",
        "official": true
      }
    ]
  },
  "ee": {
    "updatedAt": "2026-07-06",
    "overview": "O mercado de trabalho da Estonia entrou em 2026 em recuperacao gradual apos um periodo de arrefecimento economico. Segundo o Statistics Estonia, no primeiro trimestre de 2026 a taxa de desemprego ficou em 7,1%, com 52.200 desempregados e 686.300 pessoas empregadas, enquanto a taxa de emprego atingiu 68% e a de participacao na forca de trabalho 73,2%. Na comparacao anual, o desemprego recuou 1,5 ponto percentual frente ao mesmo trimestre de 2025. O quadro combina forte economia digital e escassez estrutural de mao de obra qualificada com uma taxa de desemprego juvenil elevada, de 22,8% na faixa de 15 a 24 anos. A escassez de talento se concentra em TI, engenharia, saude, educacao e industria, enquanto ocupacoes administrativas apresentam excedente.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (ICT)",
      "Engenharia (mecanica e eletrica)",
      "Industria e manufatura (metalmecanica)",
      "Saude",
      "Educacao",
      "Logistica e transporte",
      "Construcao"
    ],
    "coolingSectors": [
      "Funcoes administrativas e de escritorio",
      "Contabilidade e escrituracao (reduzidas pela digitalizacao)",
      "Jornalismo e relacoes publicas",
      "Construcao nao qualificada"
    ],
    "inDemandRoles": [
      {
        "role": "Programadores e desenvolvedores de software",
        "note": "Apontados pelo Fundo de Seguro-Desemprego (Tootukassa) entre as ocupacoes de maior demanda nos proximos anos"
      },
      {
        "role": "Especialistas ICT altamente qualificados",
        "note": "Em deficit segundo EURES e OSKA; setor mais bem pago do pais"
      },
      {
        "role": "Cozinheiros",
        "note": "Citados pelo Tootukassa entre as ocupacoes de maior demanda"
      },
      {
        "role": "Motoristas de caminhao",
        "note": "Citados pelo Tootukassa entre as ocupacoes de maior demanda"
      },
      {
        "role": "Soldadores, mecanicos, operadores de maquinas e eletricistas",
        "note": "Escassez persistente em trabalhadores de metalmecanica (grupo com maior incidencia de falta em 2024)"
      },
      {
        "role": "Medicos",
        "note": "Escassez muito grande no setor de saude"
      },
      {
        "role": "Professores e educadores para criancas com necessidades especiais",
        "note": "Grupo de profissionais de ensino entre os de maior escassez"
      },
      {
        "role": "Fonoaudiologos, psicologos e enfermeiros",
        "note": "Deficit acentuado em saude e educacao"
      },
      {
        "role": "Engenheiros mecanicos e eletricos",
        "note": "Demanda sustentada na industria e engenharia"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao (TI/ICT)",
        "advice": "Area de maior aquecimento e melhor remuneracao do pais, com salario medio no ICT frequentemente acima de 3.400 euros mensais (EURES). Desenvolvimento de software, ciberseguranca e dados sao caminhos com deficit estrutural. Perfil ICT tem via de isencao de quota de imigracao para nao europeus."
      },
      {
        "area": "Engenharia",
        "advice": "Engenheiros mecanicos e eletricos tem demanda sustentada na industria e manufatura. A metalmecanica foi o grupo com maior incidencia de ocupacoes em falta em 2024."
      },
      {
        "area": "Saude e Medicina",
        "advice": "Escassez muito grande de medicos, enfermeiros, fonoaudiologos e psicologos. Reconhecimento de diploma e proficiencia em estoniano tendem a ser exigidos para exercicio; consultar as autoridades competentes."
      },
      {
        "area": "Educacao",
        "advice": "Deficit acentuado de professores e educadores para criancas com necessidades especiais. Profissionais de ensino estao entre os grupos de maior falta segundo o Tootukassa."
      },
      {
        "area": "Industria e Oficios Tecnicos",
        "advice": "Soldadores, mecanicos, operadores de maquinas e eletricistas seguem em falta. Boa porta de entrada via registro de emprego de curto prazo ou permissao de residencia para trabalho."
      },
      {
        "area": "Logistica e Transporte",
        "advice": "Motoristas de caminhao entre as ocupacoes de maior demanda. Setor foi identificado pelo governo como prioritario na proposta de facilitacao de contratacao de estrangeiros."
      },
      {
        "area": "Administracao, Contabilidade e Comunicacao",
        "advice": "Areas com excedente de mao de obra e demanda em queda, pressionadas pela digitalizacao e automacao. Diferenciacao tecnica ou reconversao para dados e TI amplia empregabilidade."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto mensal (todos os setores)",
        "range": "2.135 euros/mes (1o trimestre de 2026)",
        "source": {
          "label": "Statistics Estonia (stat.ee)",
          "url": "https://stat.ee/en/find-statistics/statistics-theme/work-life/wages-and-salaries-and-labour-costs/average-monthly-gross-wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Salario medio bruto mensal (media anual 2025)",
        "range": "2.092 euros/mes (+5,6% vs 2024)",
        "source": {
          "label": "Statistics Estonia (stat.ee)",
          "url": "https://stat.ee/en/news/average-wages-increased-56-last-year",
          "official": true
        }
      },
      {
        "role": "Setor de TI/ICT",
        "range": "frequentemente acima de 3.400 euros/mes",
        "source": {
          "label": "EURES (Comissao Europeia)",
          "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-estonia_en",
          "official": true
        }
      },
      {
        "role": "Piso salarial para top specialist (isencao de quota)",
        "range": "a partir de 2.528 euros/mes bruto",
        "source": {
          "label": "Work in Estonia (oficial)",
          "url": "https://workinestonia.com/12-months-non-eu/",
          "official": true
        }
      },
      {
        "role": "Coeficiente 1,0 do salario medio (base para permissao de trabalho, periodo 2024-2025)",
        "range": "1.832 euros/mes bruto",
        "source": {
          "label": "Policia e Guarda de Fronteira (politsei.ee)",
          "url": "https://www.politsei.ee/en/instructions/residence-permit-for-employment",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE/Suica trabalham sem permissao especial. Para nao europeus, ha duas vias principais (Policia e Guarda de Fronteira, PPA, e Work in Estonia): (1) registro de emprego de curto prazo, feito pelo empregador antes do inicio do trabalho, cobrindo ate 365 dias em periodo de 455 dias, sem permissao de residencia; e (2) permissao de residencia temporaria para trabalho, para contratos acima de 12 meses, valida por ate 5 anos e renovavel. O empregador deve pagar ao menos o salario medio bruto da Estonia (requisito geral, com excecoes por coeficiente: 1,0 = 1.832 euros no periodo 2024-2025). A imigracao para trabalho e negocios esta sujeita a quota anual limitada a 0,1% da populacao permanente (1.292 vagas em 2026), mas ha isencoes de quota para: emprego em startup, status de especialista ICT e top specialist com salario a partir de 2.528 euros/mes. O EU Blue Card e uma das bases de emprego reconhecidas. A partir de 2026, o empregador precisa comprovar ao menos seis meses de atividade economica real na Estonia para patrocinar nao europeus. Para permissao permanente, exige-se estoniano nivel A2 e programa de acolhimento.",
    "opportunityWindows": [
      "Isencao de quota de imigracao para especialistas ICT, empregados de startups e top specialists (salario a partir de 2.528 euros/mes), abrindo caminho mais rapido para profissionais qualificados nao europeus",
      "Proposta em tramitacao no Parlamento em 2026 para facilitar a contratacao de estrangeiros qualificados em setores com escassez, com foco inicial em manufatura e transporte/armazenagem (Aliens Act)",
      "Deficit estrutural projetado pela OSKA de cerca de 1.400 top specialists por ano ate 2035, com maiores lacunas em TI, educacao, saude e industria",
      "Registro de emprego de curto prazo (ate 365 dias) como porta de entrada rapida, processado pelo proprio empregador sem necessidade de permissao de residencia",
      "Graduados de instituicoes de ensino superior estonianas tem base propria de emprego, favorecendo quem estuda no pais"
    ],
    "jobBoards": [
      {
        "label": "Work in Estonia (guia oficial de empregos do governo)",
        "url": "https://workinestonia.com/",
        "official": true
      },
      {
        "label": "Tootukassa (Fundo de Seguro-Desemprego) - ofertas de emprego",
        "url": "https://www.tootukassa.ee/en/joboffers",
        "official": true
      },
      {
        "label": "EURES Estonia (Servicos Europeus de Emprego)",
        "url": "https://www.eures.ee/en/eures",
        "official": true
      },
      {
        "label": "EURES - portal europeu de empregos",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "CV Keskus (maior portal privado de empregos da Estonia)",
        "url": "https://www.cvkeskus.ee/",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Statistics Estonia - taxa de desemprego 1o trimestre de 2026",
        "url": "https://stat.ee/en/news/unemployment-rate-was-71-first-quarter",
        "official": true
      },
      {
        "label": "Statistics Estonia - salarios medios mensais brutos",
        "url": "https://stat.ee/en/find-statistics/statistics-theme/work-life/wages-and-salaries-and-labour-costs/average-monthly-gross-wages-and-salaries",
        "official": true
      },
      {
        "label": "Statistics Estonia - salarios subiram 5,6% em 2025",
        "url": "https://stat.ee/en/news/average-wages-increased-56-last-year",
        "official": true
      },
      {
        "label": "Work in Estonia - trabalho para nao europeus por mais de 12 meses",
        "url": "https://workinestonia.com/12-months-non-eu/",
        "official": true
      },
      {
        "label": "Policia e Guarda de Fronteira da Estonia (PPA) - permissao de residencia para trabalho",
        "url": "https://www.politsei.ee/en/instructions/residence-permit-for-employment",
        "official": true
      },
      {
        "label": "EURES - informacao de mercado de trabalho da Estonia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-estonia_en",
        "official": true
      },
      {
        "label": "OSKA (Kutsekoda) - previsao geral do mercado de trabalho 2022-2031",
        "url": "https://oska.kutsekoda.ee/en/estonian-labour-market/oska-general-forecast-2022-2031/",
        "official": true
      },
      {
        "label": "Tootukassa (Fundo de Seguro-Desemprego) - ofertas de emprego",
        "url": "https://www.tootukassa.ee/en/joboffers",
        "official": true
      }
    ]
  },
  "fi": {
    "updatedAt": "2026-06-29",
    "overview": "O mercado de trabalho finlandes vive um momento de dois lados. De acordo com os servicos publicos de emprego (tyomarkkinatori.fi), a taxa de emprego ficou em 75,2 por cento, com cerca de 325 mil desempregados e queda no numero de vagas novas em relacao ao ano anterior, sinal de uma recuperacao mais lenta. Ao mesmo tempo, o Barometro Ocupacional do governo aponta que a escassez de mao de obra desacelerou, mas continua aguda em saude e servicos sociais, que concentram as principais profissoes em falta. O pais mantem demanda estrutural por profissionais de saude, educacao infantil e tecnologia, enquanto a construcao civil enfrenta dificuldades. As maiores concentracoes de emprego estao na regiao de Helsinque-Uusimaa, polo de tecnologia e negocios.",
    "hotSectors": [
      "Saude e servicos sociais",
      "Educacao infantil",
      "Tecnologia da informacao e desenvolvimento de software",
      "Energia verde e renovavel",
      "Industria de alimentos",
      "Tecnologia naval e maritima"
    ],
    "coolingSectors": [
      "Construcao civil",
      "Setor automotivo"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiros e cuidadores de saude",
        "note": "Saude e servicos sociais lideram as profissoes em falta segundo o Barometro Ocupacional."
      },
      {
        "role": "Medicos",
        "note": "Mais de 220 vagas de medico em tempo integral nao preenchidas no pais."
      },
      {
        "role": "Profissionais de educacao infantil (ECEC)",
        "note": "Escassez estrutural; so as seis maiores cidades relatam falta de 2.600 ou mais profissionais."
      },
      {
        "role": "Desenvolvedores de software",
        "note": "Falta apontada por fontes oficiais e barometros regionais."
      },
      {
        "role": "Assistentes sociais"
      },
      {
        "role": "Trabalhadores qualificados da construcao (encanadores, soldadores, eletricistas)",
        "note": "Oficios de construcao entre os grupos com maior incidencia de escassez."
      },
      {
        "role": "Cozinheiros e trabalhadores qualificados de restaurante"
      }
    ],
    "byQualification": [
      {
        "area": "Saude e enfermagem",
        "advice": "E a area com maior abertura no pais. O governo firmou acordos bilaterais de recrutamento com India, Brasil, Vietna e Filipinas para trazer profissionais de saude, o que torna o caminho mais estruturado para quem tem formacao na area."
      },
      {
        "area": "Educacao infantil",
        "advice": "Ha falta estrutural de professores de educacao infantil com qualificacao superior. A projecao oficial aponta necessidade de milhares de novos profissionais ate 2030, abrindo espaco para formados na area que validem o diploma."
      },
      {
        "area": "Tecnologia da informacao",
        "advice": "Desenvolvedores de software seguem em demanda mesmo com a recuperacao mais lenta. Vale mirar funcoes de especialista, que se enquadram em vistos de tramitacao rapida."
      },
      {
        "area": "Engenharia e ciencias",
        "advice": "Atencao: profissionais de ciencias e engenharia aparecem entre os grupos com excedente de candidatos em algumas regioes, o que aumenta a concorrencia. Energia verde e tecnologia naval sao nichos mais aquecidos dentro da area."
      },
      {
        "area": "Construcao civil",
        "advice": "O setor passa por dificuldades, mas oficios qualificados especificos (encanador, soldador, eletricista) seguem em falta. A demanda varia muito por estacao e regiao."
      }
    ],
    "salaries": [
      {
        "role": "Trabalho com acordo coletivo (requisito minimo de visto)",
        "range": "3.937 EUR/mes bruto (2026)",
        "source": {
          "label": "Migri (Servico de Imigracao da Finlandia)",
          "url": "https://migri.fi/en/specialist",
          "official": true
        }
      },
      {
        "role": "Trabalho sem acordo coletivo ou tempo parcial (requisito minimo de visto)",
        "range": "1.463 EUR/mes bruto (2026)",
        "source": {
          "label": "Migri (Servico de Imigracao da Finlandia)",
          "url": "https://migri.fi/en/working-in-finland/income-requirement",
          "official": true
        }
      },
      {
        "role": "Especialista / EU Blue Card (requisito minimo de visto)",
        "range": "A partir de 3.937 EUR/mes bruto (2026), sem contar beneficios",
        "source": {
          "label": "Migri (Servico de Imigracao da Finlandia)",
          "url": "https://migri.fi/en/specialist",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE tem direito de trabalhar na Finlandia sem visto de trabalho, bastando registrar o direito de residencia junto as autoridades finlandesas. Quem vem de fora da UE normalmente precisa de uma autorizacao de residencia para trabalhar. Os principais tipos sao: trabalhador empregado, especialista, EU Blue Card, trabalho sazonal, pesquisador, empreendedor de startup e transferencia intracorporativa. Em 2026, o salario bruto minimo exigido e de 3.937 EUR/mes em setores com acordo coletivo, ou 1.463 EUR/mes sem acordo coletivo ou em tempo parcial. O EU Blue Card e destinado a empregos altamente qualificados, exige diploma superior de no minimo 3 anos ou cerca de 5 anos de experiencia profissional, contrato confirmado com duracao minima de seis meses e e emitido por ate 2 anos. Especialistas, cargos de gestao, EU Blue Card e empreendedores de startup podem usar o servico de tramitacao rapida (fast-track) e receber a autorizacao em duas semanas. A autorizacao de trabalho sazonal vale por ate 9 meses dentro de um periodo de 12 meses e fica vinculada a um empregador especifico, aplicada a areas como agricultura, jardinagem, silvicultura e turismo.",
    "opportunityWindows": [
      "Acordos bilaterais de recrutamento de profissionais de saude com India, Brasil, Vietna e Filipinas",
      "Necessidade projetada de cerca de 9.000 novos profissionais de educacao infantil com qualificacao superior ate 2030",
      "Mais de 220 vagas de medico em tempo integral nao preenchidas no pais",
      "Tramitacao rapida (fast-track, 2 semanas) para especialistas, gestores e EU Blue Card"
    ],
    "jobBoards": [
      {
        "label": "Job Market Finland (tyomarkkinatori.fi)",
        "url": "https://tyomarkkinatori.fi/en",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Migri - Servico de Imigracao (vistos de trabalho)",
        "url": "https://migri.fi/en/coming-to-finland-for-work",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Governo da Finlandia - Barometro Ocupacional (valtioneuvosto.fi)",
        "url": "https://valtioneuvosto.fi/en/-/1410877/occupational-barometer-increase-in-labour-shortages-has-slowed-down-but-health-and-social-services-continue-to-account-for-top-shortage-occupations",
        "official": true
      },
      {
        "label": "Job Market Finland - Emprego e estatisticas (tyomarkkinatori.fi)",
        "url": "https://tyomarkkinatori.fi/en/employment-and-statistics",
        "official": true
      },
      {
        "label": "EURES - Informacoes do mercado de trabalho da Finlandia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-finland_en",
        "official": true
      },
      {
        "label": "Migri - Especialista e requisito salarial 2026",
        "url": "https://migri.fi/en/specialist",
        "official": true
      },
      {
        "label": "Migri - Vir trabalhar na Finlandia",
        "url": "https://migri.fi/en/coming-to-finland-for-work",
        "official": true
      },
      {
        "label": "Migri - EU Blue Card",
        "url": "https://migri.fi/en/eu-blue-card",
        "official": true
      }
    ]
  },
  "gr": {
    "updatedAt": "2026-06-29",
    "overview": "O mercado de trabalho grego segue em trajetoria de recuperacao, com a taxa de desemprego em 9,5% em abril de 2026, segundo a Autoridade Estatistica Helenica (ELSTAT), abaixo dos dois digitos registrados em marco. O pais contava com cerca de 4,32 milhoes de pessoas empregadas e 452 mil desempregadas no mesmo periodo. Apesar da melhora geral, a economia convive com escassez aguda de mao de obra em setores como turismo, saude e construcao, agravada pelo envelhecimento populacional e pela forte sazonalidade das ilhas. A taxa de emprego nacional ainda fica abaixo da media da Uniao Europeia, com diferencas regionais marcantes entre Atica e o sul do Egeu, mais dinamicos, e a Macedonia Ocidental, com desemprego mais elevado.",
    "hotSectors": [
      "Turismo, hotelaria e alimentacao",
      "Saude e servicos sociais",
      "Tecnologia e transformacao digital",
      "Construcao e engenharia",
      "Economia azul e setor maritimo",
      "Comercio atacadista e varejista"
    ],
    "coolingSectors": [
      "Profissoes juridicas",
      "Ensino e docencia",
      "Profissoes sociais e culturais"
    ],
    "inDemandRoles": [
      {
        "role": "Profissionais de saude (enfermeiros, medicos, cuidadores, fisioterapeutas)",
        "note": "Demanda continua puxada pelo envelhecimento populacional e falta cronica de pessoal."
      },
      {
        "role": "Trabalhadores de hotelaria e turismo",
        "note": "Escassez aguda nas ilhas de Santorini, Mykonos, Paros e Rodes durante a alta temporada."
      },
      {
        "role": "Desenvolvedores de software e profissionais de TI",
        "note": "Procura crescente em desenvolvimento, ciberseguranca, ciencia de dados e marketing digital."
      },
      {
        "role": "Engenheiros (civil, mecanico, eletrico, ambiental)",
        "note": "Setor de construcao e infraestrutura aquecido."
      },
      {
        "role": "Operadores de maquinas",
        "note": "Vaga de dificil preenchimento apontada pela EURES."
      },
      {
        "role": "Atendentes e auxiliares de servico ao cliente",
        "note": "Escassez persistente segundo dados oficiais do mercado."
      },
      {
        "role": "Profissionais do setor maritimo e portuario",
        "note": "Operacoes de navegacao, gestao portuaria e renovaveis offshore em expansao."
      }
    ],
    "byQualification": [
      {
        "area": "Saude",
        "advice": "Enfermagem, medicina, fisioterapia e cuidados de idosos estao entre as carreiras mais demandadas. O reconhecimento de diplomas estrangeiros e o conhecimento de grego sao diferenciais para acesso ao sistema publico e privado de saude."
      },
      {
        "area": "Tecnologia da Informacao",
        "advice": "Desenvolvimento de software, ciberseguranca e ciencia de dados tem alta procura, com empregadores frequentemente aceitando ingles no ambiente de trabalho. Perfis qualificados podem se enquadrar no EU Blue Card."
      },
      {
        "area": "Engenharia",
        "advice": "Engenharia civil, mecanica, eletrica e ambiental seguem aquecidas pela construcao e infraestrutura. Vale validar o registro profissional junto a Camara Tecnica da Grecia."
      },
      {
        "area": "Turismo e Hotelaria",
        "advice": "Setor com maior carencia sazonal, sobretudo nas ilhas. Contratos costumam ser temporarios, com pico entre primavera e outono, e idiomas adicionais ampliam as chances."
      },
      {
        "area": "Setor maritimo",
        "advice": "A economia azul abre espaco em navegacao, gestao portuaria, turismo marinho e renovaveis offshore, area tradicionalmente forte na Grecia."
      }
    ],
    "salaries": [
      {
        "role": "Salario minimo (trabalhador administrativo)",
        "range": "920,00 EUR brutos por mes (a partir de 1 abr 2026)",
        "source": {
          "label": "Ministerio do Trabalho e Assuntos Sociais da Grecia",
          "url": "https://ypergasias.gov.gr/en/labour-relations/collective-employment-relations/minimum-wage/",
          "official": true
        }
      },
      {
        "role": "Salario minimo (trabalhador especializado, diaria)",
        "range": "41,09 EUR brutos por dia (a partir de 1 abr 2026)",
        "source": {
          "label": "Ministerio do Trabalho e Assuntos Sociais da Grecia",
          "url": "https://ypergasias.gov.gr/en/labour-relations/collective-employment-relations/minimum-wage/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial para EU Blue Card (alta qualificacao)",
        "range": "A partir de 31.919 EUR brutos por ano (1,6x a media nacional)",
        "source": {
          "label": "Portal de Imigracao da Comissao Europeia (EU Blue Card Grecia)",
          "url": "https://immigration-portal.ec.europa.eu/eu-blue-card/greece_en",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, do EEE e da Suica tem livre circulacao e direito a trabalhar na Grecia sem visto de trabalho. Para estadias acima de tres meses precisam apenas solicitar um certificado de registro de residencia junto as autoridades locais. Cidadaos de fora da UE precisam de autorizacao de residencia para trabalho: o emprego exige contrato com empregador grego, sendo a autorizacao emitida inicialmente por 2 anos e renovavel por periodos de 3 anos. Profissionais altamente qualificados podem solicitar o EU Blue Card, que exige diploma de ensino superior reconhecido (ou ao menos 5 anos de experiencia equivalente) e salario acima do limiar legal de 31.919 EUR brutos anuais; o cartao tambem vale 2 anos, renovavel por mais 3. As regras e procedimentos para nacionais de paises terceiros sao publicados pelo Ministerio da Imigracao e Asilo (migration.gov.gr) e pelo Ministerio do Trabalho.",
    "opportunityWindows": [
      "Escassez aguda de trabalhadores de turismo e hotelaria nas ilhas de Santorini, Mykonos, Paros e Rodes na alta temporada",
      "Programas de qualificacao e requalificacao da DYPA com meta de 150.000 novos beneficiarios em 2026",
      "Escolas de aprendizagem profissional da DYPA com mais de 35 especialidades, com enfase em competencias digitais e verdes (ano letivo 2025-2026)",
      "Carencia estrutural de profissionais de saude impulsionada pelo envelhecimento da populacao"
    ],
    "jobBoards": [
      {
        "label": "DYPA - Servico Publico de Emprego (EURES Grecia)",
        "url": "https://www.dypa.gov.gr/en/eures-1",
        "official": true
      },
      {
        "label": "DYPA - Servico Publico de Emprego (portal principal)",
        "url": "https://www.dypa.gov.gr/en",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional (Grecia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Gov.gr - Servico Publico de Emprego",
        "url": "https://www.gov.gr/en/org/dypa",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "ELSTAT - Pesquisa de Forca de Trabalho (abril 2026)",
        "url": "https://www.statistics.gr/en/statistics/-/publication/SJO02/-",
        "official": true
      },
      {
        "label": "Ministerio do Trabalho e Assuntos Sociais - Salario Minimo",
        "url": "https://ypergasias.gov.gr/en/labour-relations/collective-employment-relations/minimum-wage/",
        "official": true
      },
      {
        "label": "Ministerio do Trabalho - Trabalho para nacionais de paises terceiros",
        "url": "https://ypergasias.gov.gr/en/labour-relations/individual-employment-relations/work-for-third-country-nationals-in-greece/",
        "official": true
      },
      {
        "label": "EURES - Informacao do Mercado de Trabalho da Grecia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-greece_en",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Grecia",
        "url": "https://immigration-portal.ec.europa.eu/eu-blue-card/greece_en",
        "official": true
      },
      {
        "label": "DYPA - Servico Publico de Emprego (balanco de acoes 2025)",
        "url": "https://www.dypa.gov.gr/en",
        "official": true
      }
    ]
  },
  "nl": {
    "updatedAt": "2026-06-22",
    "overview": "A Holanda entra em 2026 com um mercado de trabalho que segue apertado, mas em afrouxamento gradual depois de anos de escassez extrema. Segundo o CBS, o desemprego ficou em 3,9% em abril e maio de 2026 (cerca de 397 mil pessoas), perto da mínima histórica, enquanto o número de vagas caiu para 378 mil no fim do primeiro trimestre, queda quase contínua desde o terceiro trimestre de 2022. A relação ainda gira em torno de 91 vagas para cada 100 desempregados, a mais alta do Espaço Econômico Europeu. Saúde, comércio e serviços empresariais concentram mais da metade das vagas abertas. O UWV identifica 193 profissões em falta (tekortberoepen) e, para 184 delas, ao menos um país da UE tem excedente de mão de obra, sinal de que a porta de entrada europeia está aberta, sobretudo via rede EURES. Para imigrantes de fora da UE, o caminho mais usado segue sendo o de trabalhador altamente qualificado (kennismigrant), com patrocínio de empregador reconhecido pela IND, enquanto quem quer empreender conta com o visto de startup e a autorização de trabalhador autônomo por pontos. Vale notar a mudança fiscal relevante: o benefício para expatriados, conhecido como regra dos 30%, cai para 27% a partir de 1 de janeiro de 2027.",
    "hotSectors": [
      "Tecnologia e TI (desenvolvimento de software, ciberseguranca, cloud, dados, IA)",
      "Saude e cuidados (enfermagem, medicina especializada, cuidado a idosos)",
      "Construcao civil e trades tecnicos (pedreiros, eletricistas, manutencao de infraestrutura)",
      "Energia e expansao da rede eletrica",
      "Logistica e transporte (motoristas, especialistas em supply chain)",
      "Engenharia (mecanica, eletrica, tecnica)",
      "Educacao (professores e assistentes em falta estrutural)",
      "Hotelaria e turismo (concentrado na regiao de Amsterda)"
    ],
    "coolingSectors": [
      "Copywriting e redacao publicitaria (UWV desaconselha por impacto da IA)",
      "Traducao",
      "Design grafico",
      "Gerencia de contas de publicidade",
      "Fotografia",
      "Cuidadores de animais (alta concorrencia)",
      "Coaching de vida e treinadores de comunicacao (poucas vagas, muita concorrencia)"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedor de software",
        "note": "Demanda alta e persistente; 33% das empresas holandesas planejam ampliar times de TI em 2026 (Robert Half)."
      },
      {
        "role": "Especialista em ciberseguranca",
        "note": "Area de TI com crescimento de seguranca, infraestrutura e suporte."
      },
      {
        "role": "Engenheiro de cloud / DevOps",
        "note": "Perfil tech entre os mais procurados."
      },
      {
        "role": "Cientista / analista de dados",
        "note": "Forte demanda no setor de tecnologia."
      },
      {
        "role": "Enfermeiro(a)",
        "note": "Falta estrutural; profissao apontada pelo UWV com boas chances em todo o pais."
      },
      {
        "role": "Medico e tecnico de laboratorio",
        "note": "Entre as 9 profissoes sem excedente em nenhum pais da UE; escassez aguda."
      },
      {
        "role": "Profissional de TI (ICT-er)",
        "note": "UWV lista como profissao com boas chances em todo o territorio nacional."
      },
      {
        "role": "Engenheiro mecanico / eletrico",
        "note": "Setor de engenharia em crescimento."
      },
      {
        "role": "Eletricista (instalacao e conexao predial)",
        "note": "Impulsionado pela construcao nova e expansao da rede eletrica."
      },
      {
        "role": "Pedreiro (bricklayer)",
        "note": "Apontado pelo UWV como profissao promissora a nivel MBO."
      },
      {
        "role": "Motorista de caminhao / especialista em logistica",
        "note": "Demanda alta com expansao de logistica e transporte."
      },
      {
        "role": "Soldador e cortador de metais",
        "note": "Profissao em falta; ha excedente em paises como a Finlandia."
      },
      {
        "role": "Jardineiro / paisagista (hovenier)",
        "note": "UWV lista com boas chances em todo o pais."
      },
      {
        "role": "Gerente de facilities / gerente de eventos / consultor de orcamento",
        "note": "Apontados pelo UWV como promissores em nivel superior."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao",
        "advice": "Caminho mais forte para estrangeiros. A rota de kennismigrant (altamente qualificado) com patrocinio de empregador reconhecido pela IND e a mais usada. Recem-formados em universidades holandesas e quem usa o ano de orientacao (zoekjaar) entram pelo limiar reduzido de salario, bem mais acessivel. Ingles costuma bastar em muitas vagas tech."
      },
      {
        "area": "Saude e Enfermagem",
        "advice": "Escassez estrutural e profunda, mas profissao regulamentada: e obrigatorio registro no BIG-register e, em geral, dominio do holandes para contato com pacientes. Diplomas estrangeiros passam por reconhecimento. Medicos, tecnicos de laboratorio e enfermeiros estao entre as profissoes sem excedente em nenhum pais da UE."
      },
      {
        "area": "Engenharia e Trades Tecnicos",
        "advice": "Alta demanda em engenharia mecanica, eletrica e construcao. Eletricistas, soldadores e pedreiros tem boas chances. Para trades, certificacoes e equivalencia de qualificacoes ajudam; muitas vagas aceitam recrutamento dentro da UE via EURES."
      },
      {
        "area": "Educacao",
        "advice": "Falta estrutural de professores, mas em geral exige proficiencia em holandes e reconhecimento de diploma para a maioria dos cargos em escolas publicas."
      },
      {
        "area": "Negocios, Marketing e Criativos",
        "advice": "Atencao: o UWV desaconselha copywriting, traducao, design grafico e contas de publicidade por causa do impacto da IA. Perfis de gestao (facilities, eventos, orcamento) tem melhores chances. Para negocios em geral, o ingles abre portas em multinacionais sediadas no pais."
      },
      {
        "area": "Empreendedores e Autonomos",
        "advice": "Duas rotas oficiais: o visto de startup (1 ano, exige produto inovador e parceria com um facilitador reconhecido) e a autorizacao de trabalhador autonomo por pontos (minimo de 90 pontos, com pelo menos 30 em cada eixo: experiencia, plano de negocio e valor agregado para a economia holandesa). Ambas exigem registro na Camara de Comercio (KvK)."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio nacional (todas as funcoes)",
        "range": "Cerca de 53.436 euros brutos/ano (aprox. 4.453 euros/mes, incluindo o subsidio de ferias de 8%)",
        "source": {
          "label": "CBS (Labour and income)",
          "url": "https://www.cbs.nl/en-gb/labour-and-income",
          "official": true
        }
      },
      {
        "role": "Salario minimo legal (21+)",
        "range": "14,71 euros brutos/hora a partir de 1 de janeiro de 2026 (aprox. 2.350 euros/mes em jornada de 40h)",
        "source": {
          "label": "Government.nl / Business.gov.nl",
          "url": "https://business.gov.nl/amendments/minimum-wage-up-january-2026/",
          "official": true
        }
      },
      {
        "role": "Limiar salarial kennismigrant (30 anos ou mais)",
        "range": "5.942 euros brutos/mes (exclui ferias), valido de 1 jan a 30 jun 2026",
        "source": {
          "label": "IND (Required amounts)",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Limiar salarial kennismigrant (menor de 30 anos)",
        "range": "4.357 euros brutos/mes, valido de 1 jan a 30 jun 2026",
        "source": {
          "label": "IND (Required amounts)",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Limiar reduzido (recem-formados / ano de orientacao)",
        "range": "3.122 euros brutos/mes, valido de 1 jan a 30 jun 2026",
        "source": {
          "label": "IND (Required amounts)",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Blue Card Europeu",
        "range": "5.942 euros brutos/mes (criterio reduzido: 4.754 euros/mes)",
        "source": {
          "label": "IND (Required amounts)",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Trabalhador autonomo (lucro bruto minimo)",
        "range": "1.734,57 euros/mes, valido de 1 jan a 30 jun 2026",
        "source": {
          "label": "IND (Required amounts)",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "Pessoal essencial de startup",
        "range": "3.122 euros brutos/mes, valido de 1 jan a 31 dez 2026",
        "source": {
          "label": "IND (Required amounts)",
          "url": "https://ind.nl/en/required-amounts-income-requirements",
          "official": true
        }
      },
      {
        "role": "TI (DevOps, ciberseguranca, ciencia de dados)",
        "range": "Faixa de mercado em torno de 68.000 a 75.000+ euros/ano (estimativa de mercado, nao oficial)"
      },
      {
        "role": "Engenharia e funcoes tecnicas",
        "range": "Faixa de mercado em torno de 55.000 a 65.000 euros/ano (estimativa de mercado, nao oficial)"
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica trabalham livremente, sem visto nem autorizacao. Para nacionais de fora da UE, a contratacao por mais de 90 dias exige a autorizacao combinada GVVA (residencia + trabalho num so documento), solicitada na IND, que consulta o UWV sobre o aspecto de mercado de trabalho; para ate 90 dias usa-se a TWV emitida pelo UWV. Em muitas profissoes nao isentas o empregador precisa passar pelo teste de mercado de trabalho, provando que nao ha candidato adequado na UE. A rota mais agil e a de trabalhador altamente qualificado (kennismigrant), que dispensa o teste de mercado mas exige patrocinio de empregador reconhecido (recognised sponsor) pela IND e o cumprimento do limiar salarial. Profissoes regulamentadas tem exigencias adicionais: na saude e obrigatorio o registro no BIG-register, e areas como medicina, enfermagem, ensino e direito exigem reconhecimento de diploma e, em geral, proficiencia em holandes. Para empreender ha duas vias oficiais: o visto de startup (1 ano, produto inovador e parceria com facilitador reconhecido) e a autorizacao de autonomo por sistema de pontos (90 pontos no minimo, 30 em cada eixo), ambas com registro obrigatorio na Camara de Comercio (KvK). Importante: a regra dos 30% para expatriados sera reduzida para 27% a partir de 1 de janeiro de 2027.",
    "opportunityWindows": [
      "Saude: medicos, tecnicos de laboratorio e enfermeiros estao entre as 9 profissoes em falta sem excedente em nenhum pais da UE, o que abre espaco real para recrutamento de fora da Europa",
      "TI e engenharia: escassez persistente e 33% das empresas planejando ampliar times de TI em 2026 mantem a janela aberta para perfis tech qualificados",
      "Construcao e energia: boom da construcao nova, expansao da rede eletrica e manutencao de pontes elevam a demanda por eletricistas, pedreiros e trades tecnicos",
      "Recrutamento intra-UE via EURES: para 184 das 193 profissoes em falta ha excedente em algum pais da UE, facilitando a mudanca de cidadaos europeus",
      "Recem-formados em universidades holandesas: o ano de orientacao (zoekjaar) e o limiar salarial reduzido de 3.122 euros/mes baixam muito a barreira de entrada",
      "Empreendedores inovadores: o visto de startup oferece via rapida de 1 ano com transicao posterior para a autorizacao de autonomo"
    ],
    "jobBoards": [
      {
        "label": "werk.nl (UWV) - portal oficial de emprego",
        "url": "https://www.werk.nl",
        "official": true
      },
      {
        "label": "EURES - portal europeu de mobilidade profissional",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "Working in NL (governo holandes / EURES)",
        "url": "https://www.workinnl.nl",
        "official": true
      },
      {
        "label": "IND - permissoes de residencia para trabalho",
        "url": "https://ind.nl/en/residence-permits/work",
        "official": true
      },
      {
        "label": "Business.gov.nl - empreender e contratar na Holanda",
        "url": "https://business.gov.nl",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "CBS - Labour market dashboard",
        "url": "https://www.cbs.nl/en-gb/visualisations/labour-market-dashboard",
        "official": true
      },
      {
        "label": "CBS - Unemployment down in April (2026)",
        "url": "https://www.cbs.nl/en-gb/news/2026/21/unemployment-down-in-april",
        "official": true
      },
      {
        "label": "CBS - Vacancies seasonally adjusted",
        "url": "https://www.cbs.nl/en-gb/figures/detail/80474eng",
        "official": true
      },
      {
        "label": "UWV - Para quase todas as profissoes em falta ha pessoas em outros paises da UE",
        "url": "https://www.uwv.nl/nl/nieuws/voor-bijna-alle-tekortberoepen-in-nederland-zijn-in-andere-eu-landen-mensen-beschikbaar",
        "official": true
      },
      {
        "label": "UWV - Kansrijke beroepen per regio",
        "url": "https://www.uwv.nl/nl/arbeidsmarktinformatie/kansen-beroep/regionale-kansrijke-beroepen",
        "official": true
      },
      {
        "label": "UWV reveals most promising professions 2026 (via IamExpat)",
        "url": "https://www.iamexpat.nl/career/employment-news/uwv-reveals-most-promising-professions-netherlands-2026",
        "official": false
      },
      {
        "label": "IND - Required amounts income requirements",
        "url": "https://ind.nl/en/required-amounts-income-requirements",
        "official": true
      },
      {
        "label": "IND - Residence permit self-employed person",
        "url": "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person",
        "official": true
      },
      {
        "label": "IND - Single Permit GVVA",
        "url": "https://ind.nl/en/residence-permits/work/single-permit-gvva",
        "official": true
      },
      {
        "label": "Business.gov.nl - Work permit for employees",
        "url": "https://business.gov.nl/regulations/work-permit-employees/",
        "official": true
      },
      {
        "label": "Business.gov.nl - Residence permit for foreign startups",
        "url": "https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-foreign-startups/",
        "official": true
      },
      {
        "label": "Business.gov.nl - Minimum wage up January 2026",
        "url": "https://business.gov.nl/amendments/minimum-wage-up-january-2026/",
        "official": true
      },
      {
        "label": "Government.nl - 30% facility reduced to 27%",
        "url": "https://www.government.nl/themes/taxes-benefits-and-allowances/income-tax/shortening-30-percent-ruling",
        "official": true
      },
      {
        "label": "NL Times - Employers can fix staff shortages by recruiting in EU (2026)",
        "url": "https://nltimes.nl/2026/05/29/employers-can-fix-netherlands-staff-shortages-poaching-workers-eu-states",
        "official": false
      }
    ]
  },
  "hu": {
    "updatedAt": "2026-06-29",
    "overview": "O mercado de trabalho húngaro segue entre os mais aquecidos da União Europeia, com taxa de desemprego de 4,5% em março e abril de 2026, segundo o Instituto Central de Estatística (KSH), abaixo da média de 5,8% do bloco. Cerca de 4,6 milhões de pessoas de 15 a 74 anos estavam empregadas no período, e o salário bruto médio em tempo integral alcançou 779.800 forints em março, com ganho real de 9,3% sobre o ano anterior. A escassez de mão de obra é estrutural, puxada pela queda demográfica, e atinge indústria, construção, logística, saúde e agricultura. Para suprir o déficit, o governo manteve em 2026 uma cota de 35 mil autorizações de residência para trabalhadores convidados de fora da UE.",
    "hotSectors": [
      "Indústria automotiva e manufatura",
      "Energia renovável",
      "Indústria farmaceutica e química",
      "TI e novas tecnologias",
      "Transporte e logística",
      "Turismo e hotelaria (HORECA)",
      "Construção",
      "Saude e cuidados (health e social care)"
    ],
    "coolingSectors": [
      "Agricultura tradicional",
      "Metalurgia e indústria metalúrgica"
    ],
    "inDemandRoles": [
      {
        "role": "Operador de máquina CNC",
        "note": "Forte demanda na manufatura e automotivo."
      },
      {
        "role": "Soldador",
        "note": "Escassez recorrente na indústria e construção."
      },
      {
        "role": "Eletricista"
      },
      {
        "role": "Tecnico de mecatronica"
      },
      {
        "role": "Motorista de caminhão"
      },
      {
        "role": "Operador de empilhadeira"
      },
      {
        "role": "Pedreiro e encanador",
        "note": "Construção segue com vagas em aberto."
      },
      {
        "role": "Engenheiro mecânico e eletrico"
      },
      {
        "role": "Engenheiro de automação e de produção"
      },
      {
        "role": "Desenvolvedor de software"
      },
      {
        "role": "Analista de dados"
      },
      {
        "role": "Especialista em ciberseguranca"
      },
      {
        "role": "Enfermeiro",
        "note": "Consta na lista oficial de ocupações em falta para Blue Card."
      },
      {
        "role": "Medico clínico geral",
        "note": "Ocupação em falta com limiar salarial reduzido para Blue Card."
      },
      {
        "role": "Farmacêutico",
        "note": "Profissão de saude na lista de escassez."
      },
      {
        "role": "Fisioterapeuta",
        "note": "Profissão de saude na lista de escassez."
      },
      {
        "role": "Parteira",
        "note": "Profissão de saude na lista de escassez."
      },
      {
        "role": "Cuidador"
      }
    ],
    "byQualification": [
      {
        "area": "Saude (medicina, enfermagem, farmácia, fisioterapia)",
        "advice": "Setor com escassez crônica e reconhecido na lista oficial de ocupações em falta. Profissionais de saude de fora da UE acessam o EU Blue Card com limiar salarial reduzido (800.838 HUF/mês em 2026), o que facilita a contratação. Validação do diploma junto às autoridades húngaras é etapa indispensável."
      },
      {
        "area": "Engenharia (mecânica, eletrica, automação, produção)",
        "advice": "Demanda alta puxada pelo polo automotivo, eletrônica e novas fábricas. Perfis de engenharia qualificam-se ao EU Blue Card pelo nível de formação superior. Inglês cobre muitas vagas em multinacionais; húngaro amplia o leque."
      },
      {
        "area": "Tecnologia da informação",
        "advice": "TI, dados e ciberseguranca estão entre os setores em expansão. Vagas costumam aceitar inglês, e o perfil se enquadra no EU Blue Card. Budapeste concentra a maior parte das oportunidades."
      },
      {
        "area": "Indústria e ofícios tecnicos (CNC, solda, eletricidade, mecatrônica)",
        "advice": "Vagas operacionais abundantes na manufatura e construção. Para quem vem de fora da UE, o caminho usual é a autorização única de trabalho ou a cota de trabalhador convidado, e não o Blue Card. Certificações tecnicas e experiência comprovada pesam mais que diploma universitário."
      },
      {
        "area": "Construção civil",
        "advice": "Pedreiro, encanador e eletricista seguem em falta. Acesso de estrangeiros de fora da UE via autorização única ou cota de trabalhador convidado, normalmente com oferta de emprego prévia."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (tempo integral, bruto)",
        "range": "779.800 HUF/mês bruto (cerca de 546.000 HUF liquido), março de 2026",
        "source": {
          "label": "KSH - Instituto Central de Estatística da Hungria",
          "url": "https://www.ksh.hu/labour",
          "official": true
        }
      },
      {
        "role": "Setor empresarial (ganho bruto regular)",
        "range": "703.100 HUF/mês, março de 2026",
        "source": {
          "label": "KSH - Instituto Central de Estatística da Hungria",
          "url": "https://www.ksh.hu/labour",
          "official": true
        }
      },
      {
        "role": "Setor publico (ganho bruto regular)",
        "range": "708.300 HUF/mês, março de 2026",
        "source": {
          "label": "KSH - Instituto Central de Estatística da Hungria",
          "url": "https://www.ksh.hu/labour",
          "official": true
        }
      },
      {
        "role": "Setor sem fins lucrativos (ganho bruto regular)",
        "range": "738.200 HUF/mês, março de 2026",
        "source": {
          "label": "KSH - Instituto Central de Estatística da Hungria",
          "url": "https://www.ksh.hu/labour",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card (geral)",
        "range": "1.001.048 HUF/mês bruto mínimo em 2026",
        "source": {
          "label": "OIF - Diretoria Nacional de Estrangeiria da Hungria",
          "url": "https://www.oif.gov.hu/factsheets/eu-blue-card",
          "official": true
        }
      },
      {
        "role": "Limiar salarial EU Blue Card (ocupações em falta / saude)",
        "range": "800.838 HUF/mês bruto mínimo em 2026",
        "source": {
          "label": "OIF - Diretoria Nacional de Estrangeiria da Hungria",
          "url": "https://www.oif.gov.hu/factsheets/eu-blue-card",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadãos da UE, do EEE e da Suíça têm livre circulação e não precisam de autorização de trabalho para atuar na Hungria, bastando registrar residência se ficarem mais de 90 dias. Para nacionais de fora da UE o acesso é controlado. O caminho mais comum é a autorização única (single permit), que combina residência e trabalho a partir de uma oferta de emprego. Profissionais altamente qualificados, com diploma superior de no mínimo três anos ou experiência equivalente, podem solicitar o EU Blue Card, que em 2026 exige remuneração bruta mínima de 1.001.048 HUF/mês, reduzida para 800.838 HUF/mês em ocupações designadas como em falta, sobretudo da saude. Para trabalho menos qualificado, vigora a cota de trabalhador convidado (guest worker), limitada a 35 mil autorizações de residência em 2026. Validação de diploma e contrato de trabalho prévio costumam ser exigidos. Fonte oficial: OIF (oif.gov.hu).",
    "opportunityWindows": [
      "Cota de 35 mil autorizações de residência para trabalhadores convidados (guest worker) de fora da UE em 2026",
      "Lista oficial de ocupações em falta da saude com limiar salarial reduzido para EU Blue Card: clínico geral, farmacêutico, optometrista, nutricionista, fisioterapeuta, enfermeiro de distrito, técnico de ambulância, enfermeiro e parteira"
    ],
    "jobBoards": [
      {
        "label": "Virtuális Munkaerőpiac Portál (VMP) - portal de vagas do Serviço Nacional de Emprego",
        "url": "https://vmp.munka.hu/",
        "official": true
      },
      {
        "label": "NFSZ - Serviço Nacional de Emprego da Hungria",
        "url": "https://nfsz.munka.hu/",
        "official": true
      },
      {
        "label": "EURES - portal europeu de empregos (vagas na Hungria)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "OIF - Diretoria Nacional de Estrangeiria (vistos e autorizações)",
        "url": "https://www.oif.gov.hu/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "KSH - Instituto Central de Estatística da Hungria (Labour)",
        "url": "https://www.ksh.hu/labour",
        "official": true
      },
      {
        "label": "OIF - Diretoria Nacional de Estrangeiria (EU Blue Card)",
        "url": "https://www.oif.gov.hu/factsheets/eu-blue-card",
        "official": true
      },
      {
        "label": "EURES - Informação de mercado de trabalho: Hungria",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-hungary_en",
        "official": true
      },
      {
        "label": "EURES - Condições de vida e trabalho: Hungria",
        "url": "https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-hungary_en",
        "official": true
      },
      {
        "label": "NFSZ - Serviço Nacional de Emprego da Hungria",
        "url": "https://nfsz.munka.hu/",
        "official": true
      },
      {
        "label": "Comissão Europeia - EU Blue Card Hungria",
        "url": "https://immigration-portal.ec.europa.eu/eu-blue-card/hungary_en",
        "official": true
      }
    ]
  },
  "lv": {
    "updatedAt": "2026-07-06",
    "overview": "O mercado de trabalho da Letonia segue estavel, porem pressionado pelo encolhimento e envelhecimento da populacao. Segundo o Portal Oficial de Estatistica (CSB), a taxa de desemprego ficou em 6,9% na media de 2025 e passou a 7,1% no primeiro trimestre de 2026, com a taxa de emprego da populacao de 15 a 74 anos em torno de 63,8% a 64,5%. A forca de trabalho ativa supera 1 milhao de pessoas num pais de cerca de 1,9 milhao de habitantes. O Ministerio da Economia projeta criacao de quase 25 mil novos postos ate 2027, concentrados em servicos profissionais, cientificos e tecnicos, construcao, tecnologia da informacao e industria, enquanto varejo e transporte e armazenagem lideram as reducoes de emprego. A escassez estrutural de mao de obra qualificada, agravada pela aposentadoria de trabalhadores mais velhos, e o principal vetor do mercado.",
    "hotSectors": [
      "Tecnologia da informacao e comunicacao (TIC)",
      "Servicos profissionais, cientificos e tecnicos",
      "Construcao e oficios relacionados",
      "Industria de transformacao (manufatura)",
      "Saude e assistencia social",
      "Transporte e logistica (hub de transito do Baltico)"
    ],
    "coolingSectors": [
      "Comercio varejista",
      "Transporte e armazenagem (reducao de postos apesar da demanda por motoristas)",
      "Ocupacoes de associados de administracao e negocios (excedente)",
      "Processamento de alimentos e confeccao de vestuario (excedente)"
    ],
    "inDemandRoles": [
      {
        "role": "Desenvolvedores de software",
        "note": "Setor de TIC em rapido crescimento, escassez documentada"
      },
      {
        "role": "Especialistas em ciberseguranca",
        "note": "Demanda em alta no setor de TIC"
      },
      {
        "role": "Analistas de dados",
        "note": "Perfil digital STEM em demanda"
      },
      {
        "role": "Administradores de sistemas de TI",
        "note": "Escassez no setor de tecnologia"
      },
      {
        "role": "Eletricistas",
        "note": "Oficio de construcao em demanda em todas as regioes"
      },
      {
        "role": "Encanadores",
        "note": "Oficio de construcao com escassez consistente"
      },
      {
        "role": "Soldadores",
        "note": "Trabalhadores de metal e maquinario, grupo de escassez aguda"
      },
      {
        "role": "Pedreiros e carpinteiros",
        "note": "Construcao entre os grupos de escassez mais aguda"
      },
      {
        "role": "Operadores de maquinas CNC e tecnicos de manutencao",
        "note": "Trabalhadores de metal e maquinario"
      },
      {
        "role": "Motoristas de caminhao",
        "note": "Entre os profissionais mais urgentemente necessarios pela posicao de transito do pais"
      },
      {
        "role": "Enfermeiros e cuidadores",
        "note": "Escassez persistente em saude e assistencia social"
      },
      {
        "role": "Medicos e fisioterapeutas",
        "note": "Profissionais de saude, grupo de escassez aguda"
      },
      {
        "role": "Professores",
        "note": "Educacao entre os setores com altas taxas de vagas"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao",
        "advice": "Area de maior aquecimento na Letonia. Desenvolvimento de software, ciberseguranca, analise de dados e administracao de sistemas figuram na escassez oficial. O EU Blue Card, voltado a profissionais qualificados, e um caminho vantajoso para quem tem diploma superior e salario elevado na area."
      },
      {
        "area": "Engenharia e Construcao",
        "advice": "Trabalhadores de construcao e oficios relacionados formam o grupo de escassez mais aguda no pais, com demanda em todas as regioes para eletricistas, encanadores, soldadores, pedreiros e carpinteiros. Certificacao profissional e reconhecimento de qualificacao facilitam a insercao rapida."
      },
      {
        "area": "Saude",
        "advice": "Saude e assistencia social registram deficit de vagas persistente, com falta de enfermeiros, cuidadores, medicos e fisioterapeutas. Profissoes reguladas exigem reconhecimento de diploma; o processo deve ser iniciado com antecedencia."
      },
      {
        "area": "Industria e Metalurgia",
        "advice": "Trabalhadores de metal, maquinario e oficios relacionados estao entre os mais demandados. Operadores CNC, tecnicos de manutencao e metalurgicos encontram vagas abertas na manufatura, setor apontado como gerador de novos postos ate 2027."
      },
      {
        "area": "Transporte e Logistica",
        "advice": "A posicao da Letonia como hub de transito do Baltico central gera demanda estrutural por motoristas profissionais e operadores logisticos. Habilitacao europeia (CE) e o Certificado de Aptidao Profissional sao pre-requisitos comuns."
      },
      {
        "area": "Administracao e Negocios",
        "advice": "Ha excedente relativo de associados de administracao e negocios, o que torna a insercao mais competitiva. Diferenciais como dominio de ferramentas digitais, ingles e russo, e experiencia em setores aquecidos ampliam as chances."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto (todos os setores)",
        "range": "1.831 EUR/mes (bruto, 1o tri 2026); liquido aprox. 1.364 EUR/mes",
        "source": {
          "label": "CSB - Portal Oficial de Estatistica (stat.gov.lv)",
          "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
          "official": true
        }
      },
      {
        "role": "Salario minimo mensal",
        "range": "780 EUR/mes (a partir de 1 jan 2026)",
        "source": {
          "label": "Ministerio do Bem-Estar (lm.gov.lv)",
          "url": "https://www.lm.gov.lv/en/minimum-monthly-wage",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e Suica trabalham na Letonia sem autorizacao de trabalho. Nacionais de paises terceiros (nao UE) precisam de autorizacao de residencia temporaria com direito a emprego, emitida pelo Departamento de Cidadania e Assuntos Migratorios (OCMA/PMLP), sob a Lei de Imigracao. A regra central: a vaga deve ser registrada oficialmente no portal de CVs e vagas da Agencia Estatal de Emprego (NVA) e permanecer aberta por pelo menos 10 dias uteis antes de contratar o estrangeiro (teste de mercado). O empregador submete o pedido de patrocinio a OCMA; em seguida o estrangeiro solicita a autorizacao de residencia com direito a trabalho na missao diplomatica da Letonia no exterior, e a OCMA emite o documento. Ha exigencia de salario minimo para o visto de trabalho (patamar vinculado ao salario medio do pais) e o EU Blue Card, para profissionais altamente qualificados, exige salario de cerca de 1,5x o salario medio bruto nacional. O empregador responde pelos custos ligados ao emprego e a saida do trabalhador. Fonte oficial: PMLP/OCMA.",
    "opportunityWindows": [
      "Programa de criacao de quase 25 mil novos postos ate 2027 (Ministerio da Economia), concentrado em servicos profissionais/cientificos/tecnicos, construcao, TIC e industria",
      "Setor de TIC apontado oficialmente como um dos de crescimento mais rapido, com escassez documentada de desenvolvedores, ciberseguranca e analistas de dados",
      "Construcao e oficios relacionados como grupo de escassez mais aguda, com demanda em todas as regioes do pais",
      "Saude e assistencia social com deficit de vagas persistente (enfermeiros, cuidadores, medicos, fisioterapeutas)",
      "EU Blue Card disponivel para profissionais qualificados de paises terceiros com diploma superior e salario a partir de ~1,5x a media nacional"
    ],
    "jobBoards": [
      {
        "label": "NVA - Agencia Estatal de Emprego (portal de vagas)",
        "url": "https://www.nva.gov.lv/en/vacancies",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional (Letonia)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "PMLP/OCMA - Emprego de estrangeiros (regras de residencia e trabalho)",
        "url": "https://www.pmlp.gov.lv/en/employment-foreigners",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "CSB - Portal Oficial de Estatistica da Letonia (desemprego)",
        "url": "https://stat.gov.lv/en/statistics-themes/labour-market/unemployment",
        "official": true
      },
      {
        "label": "CSB - Salarios e ordenados",
        "url": "https://stat.gov.lv/en/statistics-themes/labour-market/wages-and-salaries",
        "official": true
      },
      {
        "label": "NVA - Agencia Estatal de Emprego (vagas)",
        "url": "https://www.nva.gov.lv/en/vacancies",
        "official": true
      },
      {
        "label": "EURES - Informacao do Mercado de Trabalho: Letonia",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-latvia_en",
        "official": true
      },
      {
        "label": "PMLP/OCMA - Emprego de estrangeiros",
        "url": "https://www.pmlp.gov.lv/en/employment-foreigners",
        "official": true
      },
      {
        "label": "Ministerio da Economia - Previsoes do mercado de trabalho ate 2040",
        "url": "https://www.em.gov.lv/en/article/labour-market-forecasts-latvia-until-2040-have-been-prepared",
        "official": true
      },
      {
        "label": "Ministerio do Bem-Estar - Salario minimo mensal",
        "url": "https://www.lm.gov.lv/en/minimum-monthly-wage",
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
    "updatedAt": "2026-06-29",
    "overview": "A economia romena combina mercado de trabalho apertado com forte desigualdade regional. O emprego industrial ainda lidera, com a manufatura respondendo por 24,2% dos postos, seguida por comercio atacadista e varejista (21,5%) e construcao (10,7%), segundo o painel do EURES. A taxa de desemprego ficou em torno de 5,6% no plano nacional, mas Bucareste-Ilfov registra apenas 2,8% enquanto regioes do leste passam de 9%. O EURES de 2025 aponta escassez estrutural de mao de obra nas regioes de Bucareste, noroeste, centro e oeste, ao mesmo tempo em que a demanda segue fraca no leste do pais. O salario medio liquido na economia chegou a 5.443 lei em setembro de 2025, conforme o Instituto Nacional de Estatistica.",
    "hotSectors": [
      "Construcao civil",
      "Transporte rodoviario de carga e logistica",
      "Manufatura e operacao de maquinas industriais",
      "Tecnologia da informacao e desenvolvimento de software (regiao de Bucareste)",
      "Telecomunicacoes",
      "Servicos financeiros e bancarios",
      "Seguranca privada",
      "Comercio varejista"
    ],
    "coolingSectors": [
      "Agricultura e trabalho rural",
      "Trabalho florestal",
      "Cuidado pessoal domiciliar",
      "Profissoes tecnicas e cientificas de nivel medio (excesso de oferta)",
      "Profissoes juridicas, sociais e culturais (excesso de oferta)"
    ],
    "inDemandRoles": [
      {
        "role": "Motorista de caminhao pesado e carreta",
        "note": "Uma das maiores faltas registradas pelo EURES 2025."
      },
      {
        "role": "Trabalhador da construcao civil e operario de obras",
        "note": "Grupo ocupacional com maior incidencia de escassez no pais."
      },
      {
        "role": "Operador de maquina de costura",
        "note": "Falta recorrente na industria textil/confeccao."
      },
      {
        "role": "Pedreiro e estucador (gesseiro)",
        "note": "Demanda alta na construcao."
      },
      {
        "role": "Soldador e operador de corte a chama",
        "note": "Apontado em destaque pelo painel do EURES."
      },
      {
        "role": "Vendedor e atendente de loja",
        "note": "Escassez no varejo."
      },
      {
        "role": "Faxineiro e auxiliar de limpeza (escritorios, hoteis)",
        "note": "Falta de mao de obra em servicos."
      },
      {
        "role": "Vigilante / agente de seguranca privada",
        "note": "Demanda elevada."
      },
      {
        "role": "Desenvolvedor de software",
        "note": "Em falta principalmente na regiao de Bucareste."
      }
    ],
    "byQualification": [
      {
        "area": "Engenharia e tecnologia",
        "advice": "Desenvolvimento de software tem demanda concentrada em Bucareste, mas profissoes tecnicas e cientificas de nivel medio aparecem em excesso de oferta no EURES, entao foco em especializacao e idiomas (ingles e romeno) faz diferenca."
      },
      {
        "area": "Construcao civil",
        "advice": "Setor em forte escassez de mao de obra qualificada e operacional. Pedreiros, estucadores, soldadores e engenheiros de obra encontram colocacao nas regioes de Bucareste, noroeste, centro e oeste."
      },
      {
        "area": "Logistica e transporte",
        "advice": "Motoristas de caminhao pesado estao entre as maiores faltas do pais. Habilitacao categoria CE e Certificado de Qualificacao Profissional ampliam as chances."
      },
      {
        "area": "Industria e producao",
        "advice": "Operadores de maquinas industriais, costureiras e soldadores tem boa absorcao. Disposicao para trabalhar nas regioes oeste e centro melhora a empregabilidade."
      },
      {
        "area": "Saude e cuidado pessoal",
        "advice": "O cuidado domiciliar aparece com excesso de oferta no painel oficial, portanto avaliar regiao e especializacao antes de migrar para essa area."
      },
      {
        "area": "Agricultura",
        "advice": "Trabalho rural e florestal figura entre os excedentes de mao de obra. Sem qualificacao adicional, a colocacao e mais dificil."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio na economia (liquido)",
        "range": "5.443 lei/mes (setembro de 2025)",
        "source": {
          "label": "Institutul National de Statistica (INSSE)",
          "url": "https://insse.ro/cms/ro/content/c%C3%A2%C8%99tigul-salarial-mediu-lunar-132",
          "official": true
        }
      },
      {
        "role": "Salario medio na economia (bruto)",
        "range": "9.078 lei/mes (setembro de 2025)",
        "source": {
          "label": "Institutul National de Statistica (INSSE)",
          "url": "https://insse.ro/cms/ro/content/c%C3%A2%C8%99tigul-salarial-mediu-lunar-132",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional (bruto)",
        "range": "4.050 lei/mes (a partir de 1 de janeiro de 2025), liquido aprox. 2.574 lei",
        "source": {
          "label": "Eurofound - Minimum wage in Romania",
          "url": "https://www.eurofound.europa.eu/en/countries/romania/minimum-wage",
          "official": true
        }
      },
      {
        "role": "Salario minimo no setor de construcao (bruto)",
        "range": "4.582 lei/mes",
        "source": {
          "label": "Eurofound - Minimum wage in Romania",
          "url": "https://www.eurofound.europa.eu/en/countries/romania/minimum-wage",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da Uniao Europeia, do Espaco Economico Europeu e da Suica tem livre circulacao e nao precisam de autorizacao de trabalho para atuar na Romenia, bastando registrar a residencia se permanecerem mais de 90 dias. Para nacionais de fora da UE, o empregador deve obter junto ao Inspetorado Geral para a Imigracao (IGI) a autorizacao de emprego (aviz de angajare), processada em ate 30 dias, prazo prorrogavel por mais 15 dias quando ha verificacoes adicionais. O governo fixa anualmente uma cota de autorizacoes de trabalho para estrangeiros: foram 100.000 vagas em 2024, mesmo numero de 2022 e 2023. Profissionais altamente qualificados podem solicitar o Cartao Azul da UE (EU Blue Card), que serve como autorizacao de residencia e trabalho. Atualizacoes recentes passaram a aceitar experiencia profissional relevante como alternativa a formacao academica e ampliaram a validade do Cartao Azul para ate tres anos. Quem ja possui Cartao Azul emitido em outro Estado-membro tem o pedido analisado em 15 dias.",
    "opportunityWindows": [
      "Cota anual de 100.000 autorizacoes de trabalho para nacionais de fora da UE (referencia de 2024).",
      "Escassez estrutural de mao de obra nas regioes de Bucareste, noroeste, centro e oeste.",
      "Cartao Azul da UE com regras flexibilizadas: experiencia profissional aceita no lugar de diploma e validade ampliada para ate tres anos."
    ],
    "jobBoards": [
      {
        "label": "EURES - Portal Europeu da Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "ANOFM - Agentia Nationala pentru Ocuparea Fortei de Munca",
        "url": "https://www.anofm.ro/",
        "official": true
      },
      {
        "label": "EURES Romenia - informacoes do mercado de trabalho",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-romania_en",
        "official": true
      },
      {
        "label": "EURAXESS Romania (pesquisadores e qualificados)",
        "url": "https://www.euraxess.gov.ro/romania/information-assistance/work-permit",
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
        "label": "European Labour Authority - Labour shortages and surpluses in Europe 2025",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "INSSE - Castigul salarial mediu lunar",
        "url": "https://insse.ro/cms/ro/content/c%C3%A2%C8%99tigul-salarial-mediu-lunar-132",
        "official": true
      },
      {
        "label": "IGI - General Inspectorate for Immigration (Employment and Posting)",
        "url": "https://igi.mai.gov.ro/en/employment-and-posting/",
        "official": true
      },
      {
        "label": "Comissao Europeia - Highly-qualified worker in Romania (EU Blue Card)",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-romania_en",
        "official": true
      },
      {
        "label": "Eurofound - Minimum wage in Romania",
        "url": "https://www.eurofound.europa.eu/en/countries/romania/minimum-wage",
        "official": true
      },
      {
        "label": "OECD Reviews of Labour Market and Social Policies: Romania 2025",
        "url": "https://www.oecd.org/en/publications/oecd-reviews-of-labour-market-and-social-policies-romania-2025_f0532908-en.html",
        "official": true
      }
    ]
  },
  "se": {
    "updatedAt": "2026-06-22",
    "overview": "A Suecia vive um momento de mercado de trabalho dividido em 2026. A recuperacao geral avanca devagar, com a taxa de desemprego registrada caindo de cerca de 7,1% no primeiro trimestre de 2025 para 6,7% no mesmo periodo de 2026 segundo a Arbetsformedlingen, enquanto as series do SCB mostram leituras mensais mais altas (em torno de 8% a 9%) por usarem metodologia distinta. O quadro e de contraste: setores tradicionais como construcao, industria pesada de metais, automotivo, florestal e logistica enfrentam pressao e demissoes, com cortes anunciados na Ericsson e na cadeia automotiva, ao mesmo tempo em que saude, tecnologia, defesa, energia verde e engenharia seguem com escassez estrutural de mao de obra. O salario medio em 2025 ficou em torno de SEK 37.400 por mes e a mediana em cerca de SEK 35.700 (SCB). A Suecia nao tem salario minimo legal: pisos e condicoes saem de acordos coletivos, que cobrem cerca de 88% dos trabalhadores. Para o estrangeiro de fora da UE, a regra mais relevante mudou em 1 de junho de 2026: o salario para work permit passou a exigir no minimo 90% da mediana nacional, elevando o piso de entrada e tornando a qualificacao tecnica e a aderencia a setor em falta decisivos para conseguir vaga e permissao.",
    "hotSectors": [
      "Saude e cuidados (enfermeiros, enfermeiros especialistas, auxiliares de enfermagem, medicos)",
      "Tecnologia da informacao (desenvolvedores de software e sistemas, ciberseguranca, engenheiros de rede, IA)",
      "Engenharia (civil, mecanica, eletrica e tecnicos de engenharia)",
      "Construcao e oficios certificados (eletricistas, encanadores, soldadores, carpinteiros, telhadistas, pintores)",
      "Energia verde e transicao energetica no norte (eolica, hidrica, fabricas de baterias)",
      "Defesa e industria de seguranca",
      "Educacao (professores de pre-escola, ensino vocacional e educacao especial)",
      "Transporte e logistica de motoristas (caminhao e onibus) e armazem",
      "Industria de manufatura especializada (soldadores, operadores CNC, operadores de maquina)"
    ],
    "coolingSectors": [
      "Construcao residencial e incorporacao imobiliaria (em pressao desde 2025)",
      "Industria pesada de metais e mineracao de transformacao",
      "Industria automotiva e de veiculos (demissoes em curso)",
      "Setor florestal e madeireiro",
      "Transporte, logistica e frete de carga (pressao ciclica)",
      "Telecom equipamentos (cortes anunciados na Ericsson)",
      "Funcoes administrativas e de recepcao (recepcionistas e assistentes administrativos em excesso de oferta)",
      "Suporte e operacao de TI de baixa complexidade (tecnicos de suporte e de operacao)",
      "Hotelaria e restauracao em funcoes basicas (recepcionistas de hotel, pessoal de restaurante, cozinha fria)"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro e enfermeiro especialista",
        "note": "Profissao regulamentada; exige licenca (legitimation) do Socialstyrelsen. Escassez recorrente em todo o pais."
      },
      {
        "role": "Auxiliar de enfermagem (underskoterska)",
        "note": "Demanda alta e estavel; titulo protegido desde 2023, exige comprovacao de competencia."
      },
      {
        "role": "Medico e medico especialista",
        "note": "Profissao regulamentada; precisa de legitimation do Socialstyrelsen e, em geral, de conhecimento de sueco."
      },
      {
        "role": "Desenvolvedor de software e de sistemas",
        "note": "Um dos setores com melhores perspectivas; demanda forte em IA e nuvem."
      },
      {
        "role": "Especialista em ciberseguranca",
        "note": "Deficit estimado de dezenas de milhares de profissionais no setor de TI e seguranca."
      },
      {
        "role": "Engenheiro civil e tecnico de engenharia",
        "note": "Recorrente entre as vagas dificeis de preencher, sobretudo no norte e em projetos verdes."
      },
      {
        "role": "Eletricista, encanador e soldador certificado",
        "note": "Oficios com escassez constante; exigem certificacao tecnica reconhecida."
      },
      {
        "role": "Motorista de caminhao e de onibus",
        "note": "Falta cronica em varias regioes; exige carteira de habilitacao categoria correspondente e CAP."
      },
      {
        "role": "Professor de pre-escola e de educacao especial",
        "note": "Profissao com habilitacao (legitimation) emitida pelo Skolverket para cargos efetivos."
      },
      {
        "role": "Operador de maquina CNC e tecnico de manufatura",
        "note": "Demanda em industria especializada e nas novas plantas do norte."
      }
    ],
    "byQualification": [
      {
        "area": "Saude e enfermagem",
        "advice": "Caminho dos mais solidos para estrangeiros. Reconhecimento e obrigatorio: medicos, dentistas e enfermeiros precisam da legitimation do Socialstyrelsen, o que envolve prova de conhecimento, estagio supervisionado e, na pratica, sueco. Vale iniciar o reconhecimento cedo e mirar regioes com maior escassez, inclusive o norte."
      },
      {
        "area": "TI, dados e ciberseguranca",
        "advice": "Setor mais aberto a profissional internacional, com processos em ingles e funcoes na lista de profissoes que podem ter piso salarial reduzido. Foco em desenvolvimento de software, IA, nuvem e seguranca. Portfolio e GitHub pesam tanto quanto diploma."
      },
      {
        "area": "Engenharia",
        "advice": "Boa janela em engenharia civil, mecanica e eletrica, puxada pela transicao verde no norte. Engenharias nao sao reguladas para exercer, mas titulos protegidos pedem avaliacao do UHR para equivalencia academica. Sueco ajuda em obra e gestao."
      },
      {
        "area": "Oficios e construcao",
        "advice": "Demanda real para eletricista, encanador, soldador e telhadista, mas o mercado valoriza certificacao tecnica reconhecida na Suecia e filiacao a acordos coletivos. Validar competencias junto ao orgao do oficio antes de chegar."
      },
      {
        "area": "Educacao",
        "advice": "Para lecionar de forma efetiva e preciso da legitimation do Skolverket, que exige sueco. Sem ela, atuacao limitada a contratos temporarios. Caminho mais longo para quem nao domina o idioma."
      },
      {
        "area": "Administracao, recepcao e hotelaria basica",
        "advice": "Areas com excesso de oferta e forte concorrencia; pouco indicadas como porta de entrada via work permit. Sueco fluente e quase sempre exigido e o salario tende a ficar perto do piso, o que dificulta atingir o limite migratorio."
      },
      {
        "area": "Empreendedores e autonomos",
        "advice": "Quem tem capital, plano de negocio solido e experiencia no ramo pode buscar a residencia de trabalhador autonomo. Exige controle de pelo menos 51% do negocio, recursos proprios comprovados e capacidade de o negocio se sustentar. Setores de servicos qualificados, tecnologia e consultoria sao os mais viaveis."
      }
    ],
    "salaries": [
      {
        "role": "Media nacional (todas as ocupacoes)",
        "range": "cerca de SEK 37.400/mes (mediana cerca de SEK 35.700)",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Desenvolvedor de software",
        "range": "cerca de SEK 47.300/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Tecnico de engenharia",
        "range": "cerca de SEK 48.900/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Enfermeiro",
        "range": "cerca de SEK 45.100/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Gerente de arquitetura e engenharia",
        "range": "cerca de SEK 59.600/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Professor do ensino secundario",
        "range": "cerca de SEK 45.000/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Auxiliar de enfermagem",
        "range": "cerca de SEK 34.200/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      },
      {
        "role": "Faxineiro de escritorio",
        "range": "cerca de SEK 28.100/mes",
        "source": {
          "label": "SCB - Average monthly salary by occupation, 2025",
          "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE/EEE e suicos nao precisam de work permit e podem trabalhar livremente. Para nacionais de fora da UE, a regra padrao e ter oferta de emprego antes de chegar e obter a permissao de trabalho junto ao Migrationsverket. Desde 1 de junho de 2026 vigora uma exigencia salarial mais alta: o salario precisa equivaler a pelo menos 90% da mediana nacional, o que corresponde a cerca de SEK 33.390 por mes (mediana de referencia de cerca de SEK 37.100). Salario e condicoes devem estar alinhados aos acordos coletivos suecos ou a pratica do setor. Ha uma lista oficial de profissoes isentas que podem usar piso reduzido de 75% da mediana, em torno de SEK 27.825 por mes, abrangendo certas funcoes de TI, saude, engenharia, agricultura e manufatura, alem de ex-estudantes, pesquisadores e empregados de startups de tecnologia e ciencias da vida com menos de cinco anos e menos de 100 funcionarios. Para estadas de ate um ano e obrigatorio comprovar seguro saude abrangente. Profissoes regulamentadas exigem reconhecimento antes de exercer: medicos, dentistas, enfermeiros e farmaceuticos precisam de legitimation do Socialstyrelsen, professores precisam de legitimation do Skolverket, e diversos oficios pedem certificacao tecnica reconhecida; em geral o sueco e exigido nesses casos. Quem quer empreender pode pedir residencia de trabalhador autonomo: e preciso controlar ao menos 51% do negocio, ter conhecimento relevante de sueco ou ingles, apresentar plano financeiro critico e crivel e comprovar recursos proprios para sustentar a si e a familia por dois anos (SEK 200.000 para o titular, SEK 100.000 para conjuge e SEK 50.000 por filho); emprestimos normalmente nao sao aceitos. A permissao de autonomo vale por ate dois anos e pode levar a residencia permanente. Taxas: cerca de SEK 2.200 para empregado e SEK 2.000 para autonomo, alem de valores menores para familiares.",
    "opportunityWindows": [
      "Transicao verde no norte da Suecia (Norrbotten e Vasterbotten): novas plantas de baterias, hidrogenio e energia renovavel criando milhares de vagas em engenharia, construcao e operacao",
      "Saude com escassez estrutural e envelhecimento populacional: demanda firme e continua por enfermeiros, auxiliares e medicos em todo o pais",
      "TI, IA e ciberseguranca: deficit estimado em dezenas de milhares de profissionais, com processos seletivos frequentemente em ingles",
      "Defesa e seguranca: expansao do setor abrindo vagas tecnicas e de engenharia",
      "Profissoes na lista de isencao salarial: estrangeiros qualificados em TI, saude e engenharia podem se qualificar com piso reduzido de 75% da mediana",
      "Startups de tecnologia e ciencias da vida (menos de 5 anos e menos de 100 funcionarios): regra especial de salario facilita contratacao de talento estrangeiro"
    ],
    "jobBoards": [
      {
        "label": "Arbetsformedlingen - Platsbanken (servico publico de emprego)",
        "url": "https://arbetsformedlingen.se/platsbanken",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Migrationsverket - permissoes de trabalho e residencia",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work.html",
        "official": true
      },
      {
        "label": "Arbetsformedlingen - Yrkesbarometer (barometro de ocupacoes)",
        "url": "https://data.arbetsformedlingen.se/data/yrkesbarometer",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Arbetsformedlingen - Yrkesbarometer (dados abertos de ocupacoes)",
        "url": "https://data.arbetsformedlingen.se/data/yrkesbarometer",
        "official": true
      },
      {
        "label": "Arbetsformedlingen - Analises e prognosticos do mercado de trabalho",
        "url": "https://arbetsformedlingen.se/statistik/analyser-och-prognoser",
        "official": true
      },
      {
        "label": "SCB - Average monthly salary by occupation, 2025",
        "url": "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/wages-salaries-and-labour-costs/wage-and-salary-structures-and-employment-in-the-municipalities/pong/tables-and-graphs/average-monthly-salary-by-occupation/",
        "official": true
      },
      {
        "label": "Migrationsverket - Novas regras de work permit a partir de 1 de junho de 2026",
        "url": "https://www.migrationsverket.se/nyheter/news-archive/2026-06-01-new-rules-for-work-permits-now-apply.html",
        "official": true
      },
      {
        "label": "Migrationsverket - Apply for a work permit (employees)",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/employees.html",
        "official": true
      },
      {
        "label": "Migrationsverket - Residencia para trabalhador autonomo",
        "url": "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/self-employed-people.html",
        "official": true
      },
      {
        "label": "Migrationsverket - Salary requirements for a work permit",
        "url": "https://www.migrationsverket.se/en/word-explanations/salary-requirements-for-a-work-permit.html",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information: Sweden",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-sweden_en",
        "official": true
      },
      {
        "label": "ELA/EURES - Report on labour shortages and surpluses in Europe",
        "url": "https://www.ela.europa.eu/en/publications/labour-shortages-and-surpluses-europe-2025",
        "official": true
      },
      {
        "label": "Cedefop - Sweden: Mismatch priority occupations",
        "url": "https://www.cedefop.europa.eu/en/data-insights/sweden-mismatch-priority-occupations",
        "official": true
      },
      {
        "label": "The Local - What job losses are expected in Sweden in 2026 (corroboracao de comunidade/imprensa)",
        "url": "https://www.thelocal.se/20251128/what-job-losses-are-expected-in-sweden-in-2026",
        "official": false
      }
    ]
  },
  "cz": {
    "updatedAt": "2026-06-29",
    "overview": "A Republica Tcheca segue como um dos mercados de trabalho mais apertados da Uniao Europeia, com taxa de desemprego entre as menores do bloco, em torno de 2,6% pela metodologia internacional no inicio de 2025, segundo o Czech Statistical Office. O pais convive com escassez estrutural de mao de obra, agravada pelo envelhecimento populacional e pela saida de geracoes do mercado, o que mantem milhares de vagas abertas, sobretudo em areas tecnicas, de saude e de tecnologia. O salario medio bruto mensal alcancou cerca de 46.924 coroas no primeiro trimestre de 2025, com crescimento real de 3,9% no periodo. Os setores de servicos profissionais, cientificos e tecnicos, construcao e atividades imobiliarias lideraram a alta de remuneracao.",
    "hotSectors": [
      "Tecnologia da informacao e servicos de software",
      "Saude e farmaceutico",
      "Manufatura de alta tecnologia e engenharia",
      "Energias renovaveis (solar e eolica)",
      "Servicos profissionais, cientificos e tecnicos",
      "Construcao civil"
    ],
    "coolingSectors": [
      "Varejo fisico tradicional, pressionado pelo e-commerce",
      "Manufatura automotiva convencional, em transicao para veiculos eletricos",
      "Industrias intensivas em energia fossil",
      "Mineracao e extracao"
    ],
    "inDemandRoles": [
      {
        "role": "Especialistas em TI e desenvolvedores de software",
        "note": "Demanda puxada pela digitalizacao acelerada e pelo ritmo da tecnologia acima da resposta do sistema educacional."
      },
      {
        "role": "Profissionais de saude (medicos, enfermeiros e parteiras)",
        "note": "Escassez agravada pela migracao de profissionais para a Europa Ocidental e pelo aumento das exigencias de qualificacao."
      },
      {
        "role": "Engenheiros (mecanica, eletrica e civil)"
      },
      {
        "role": "Operadores de maquinas e plantas industriais"
      },
      {
        "role": "Trabalhadores da construcao civil, pedreiros e profissionais de obras"
      },
      {
        "role": "Soldadores, serralheiros e oficios tecnicos qualificados"
      },
      {
        "role": "Motoristas de caminhao"
      },
      {
        "role": "Cozinheiros e trabalhadores de servicos"
      },
      {
        "role": "Professores",
        "note": "Poucos formados seguem na carreira por causa dos salarios baixos frente a outras profissoes de nivel superior."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da informacao",
        "advice": "Area com escassez consistente e dos setores que mais elevaram salarios. Vale investir em desenvolvimento de software, ciberseguranca e automacao, com ingles solido."
      },
      {
        "area": "Saude e enfermagem",
        "advice": "Demanda alta e cronica, mas o exercicio exige reconhecimento de diploma e, em geral, conhecimento de tcheco. Planeje a validacao da formacao com antecedencia."
      },
      {
        "area": "Engenharia e areas tecnicas",
        "advice": "Engenheiros e tecnicos seguem entre as ocupacoes prioritarias. Perfis de mecanica, eletrica e civil encontram boa absorcao na industria de alta tecnologia."
      },
      {
        "area": "Construcao civil e oficios",
        "advice": "Oficios qualificados como soldador, serralheiro e pedreiro tem procura forte e o setor liderou parte da alta de salarios em 2025."
      },
      {
        "area": "Educacao",
        "advice": "Ha falta de professores, mas a remuneracao do setor e um limitante historico. Avalie o custo-beneficio frente a outras areas em alta."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto mensal (geral)",
        "range": "46.924 CZK/mes (1o trimestre de 2025)",
        "source": {
          "label": "Czech Statistical Office (CSU)",
          "url": "https://csu.gov.cz/rychle-informace/average-wages-1-quarter-of-2025",
          "official": true
        }
      },
      {
        "role": "Salario mediano mensal (geral)",
        "range": "38.385 CZK/mes (1o trimestre de 2025)",
        "source": {
          "label": "Czech Statistical Office (CSU)",
          "url": "https://csu.gov.cz/rychle-informace/average-wages-1-quarter-of-2025",
          "official": true
        }
      },
      {
        "role": "Faixa central (80% dos empregados)",
        "range": "de 21.136 a 73.611 CZK/mes (1o trimestre de 2025)",
        "source": {
          "label": "Czech Statistical Office (CSU)",
          "url": "https://csu.gov.cz/rychle-informace/average-wages-1-quarter-of-2025",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da Uniao Europeia, do Espaco Economico Europeu e da Suica tem livre circulacao e nao precisam de autorizacao para trabalhar na Republica Tcheca. Para nacionais de fora da UE, o principal instrumento e o Employee Card (zamestnanecka karta), uma autorizacao unica que combina residencia e trabalho de longo prazo, valida por ate dois anos e renovavel. O cartao e vinculado a um emprego, empregador e posicao especificos, e qualquer mudanca de empregador ou funcao precisa ser comunicada ao Ministerio do Interior. Em regra, exige uma vaga registrada na base central de vagas do pais ou acesso livre ao mercado de trabalho. Profissionais altamente qualificados podem optar pelo EU Blue Card, e ha programas governamentais como o Highly Qualified Worker Programme e o Key and Research Staff Programme, que simplificam exigencias. As cotas anuais para Employee Cards sao limitadas e priorizam esses programas. Fontes oficiais: Ministerio do Interior (mvcr.cz) e o portal de imigracao IPC (ipc.gov.cz).",
    "opportunityWindows": [
      "Programas governamentais para trabalhadores qualificados e altamente qualificados (Highly Qualified Worker Programme e Key and Research Staff Programme) com exigencias simplificadas para nacionais de fora da UE",
      "EU Blue Card como via para profissionais altamente qualificados",
      "Cerca de 264 mil vagas abertas no pais e deficit anual estimado em torno de 70 mil trabalhadores, segundo levantamentos de mercado"
    ],
    "jobBoards": [
      {
        "label": "Urad prace - Servico Publico de Emprego da Republica Tcheca",
        "url": "https://uradprace.cz",
        "official": true
      },
      {
        "label": "EURES - Portal Europeu de Mobilidade Profissional",
        "url": "https://eures.europa.eu",
        "official": true
      },
      {
        "label": "IPC - Portal oficial de imigracao (Employee Card)",
        "url": "https://ipc.gov.cz/en/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Czech Statistical Office (CSU) - Salarios medios 1o trimestre de 2025",
        "url": "https://csu.gov.cz/rychle-informace/average-wages-1-quarter-of-2025",
        "official": true
      },
      {
        "label": "Czech Statistical Office (CSU) - Taxas de emprego e desemprego, janeiro 2025",
        "url": "https://csu.gov.cz/rychle-informace/rates-of-employment-unemployment-and-economic-activity-january-2025",
        "official": true
      },
      {
        "label": "EURES - Informacoes do mercado de trabalho (Chequia)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-czechia_en",
        "official": true
      },
      {
        "label": "IPC / Ministerio do Interior - Employee Card",
        "url": "https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/employee-card/",
        "official": true
      },
      {
        "label": "Ministerio dos Negocios Estrangeiros - Employee Card",
        "url": "https://mzv.gov.cz/jnp/en/information_for_aliens/long_stay_visa/employment_card.html",
        "official": true
      },
      {
        "label": "Cedefop - Ocupacoes prioritarias com desajuste de competencias (Chequia)",
        "url": "https://www.cedefop.europa.eu/en/data-insights/czech-republic-mismatch-priority-occupations",
        "official": true
      }
    ]
  },
  "mt": {
    "updatedAt": "2026-06-22",
    "overview": "Malta opera num mercado de trabalho estruturalmente apertado e dependente de mao de obra estrangeira. No terceiro trimestre de 2025 o emprego total chegou a 337.234 pessoas, 4,8% acima do ano anterior (NSO), e a taxa de desemprego permaneceu entre as mais baixas da Uniao Europeia, em torno de 2,7% a 3,4% ao longo de 2025. As vagas em aberto somavam 9.158 no segundo trimestre de 2025, alta de 13,2% sobre o mesmo periodo de 2024 (NSO Job Vacancy Survey). A escassez de candidatos com as competencias exigidas e o gargalo central, o que leva empregadores malteses a recorrerem amplamente a trabalhadores de paises terceiros. A economia e dominada por servicos, com forte presenca de iGaming, servicos financeiros, turismo e comercio. A partir de 2025 e 2026, porem, o governo aperta as regras de emprego de nacionais de paises terceiros, introduzindo verificacao de adequacao pelo Jobsplus, curso pre-partida obrigatorio para novos requerentes e programas de integracao para ocupacoes de baixa qualificacao, sinalizando um regime mais seletivo e voltado a perfis qualificados.",
    "hotSectors": [
      "iGaming e apostas online (cerca de 8.000 empregados diretos e mais 3 a 4 mil em industrias associadas)",
      "Servicos financeiros, seguros e fintech (setor de maior remuneracao no pais)",
      "Servicos profissionais, cientificos e tecnicos (maior crescimento de vagas em 2025)",
      "Saude e assistencia social",
      "Tecnologia da informacao e desenvolvimento de software",
      "Turismo, hotelaria e alimentacao",
      "Comercio atacadista e varejista (maior empregador do pais)",
      "Administracao publica, defesa e educacao (forte alta de vagas em 2025)"
    ],
    "coolingSectors": [
      "Profissionais associados de ciencia e engenharia (grupo com excedente de oferta de mao de obra, segundo EURES)",
      "Trabalhadores de construcao e oficios relacionados, exceto eletricistas (excedente de oferta)",
      "Auxiliares de atendimento ao cliente / customer services clerks (excedente de oferta)",
      "Ocupacoes elementares de baixa qualificacao, alvo de aperto regulatorio para nacionais de paises terceiros a partir de 2026"
    ],
    "inDemandRoles": [
      {
        "role": "Profissionais associados de negocios e administracao",
        "note": "Grupo ocupacional com maior incidencia de escassez em Malta, segundo EURES e Jobsplus"
      },
      {
        "role": "Profissionais juridicos, sociais e culturais",
        "note": "Apontado como escassez pelo EURES"
      },
      {
        "role": "Trabalhadores de servicos pessoais",
        "note": "Escassez estrutural identificada pelo EURES"
      },
      {
        "role": "Oficiais de compliance e analistas de risco e fraude",
        "note": "Demanda alta em iGaming, servicos financeiros e fintech"
      },
      {
        "role": "Desenvolvedores de software e especialistas em TI",
        "note": "Demanda por Python, JavaScript, SQL, AWS, Kubernetes e Linux"
      },
      {
        "role": "Profissionais de saude (enfermeiros, medicos, cuidadores)",
        "note": "Escassez persistente; profissoes regulamentadas exigem warrant"
      },
      {
        "role": "Analistas financeiros, auditoria e contabilidade",
        "note": "Setor financeiro e iGaming finance"
      },
      {
        "role": "Agentes de atendimento ao cliente multilingues",
        "note": "Forte em iGaming e suporte tecnico"
      },
      {
        "role": "Especialistas em cibersseguranca, blockchain e analise de dados",
        "note": "Ligados a expansao fintech"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao e Engenharia de Software",
        "advice": "Setor em expansao com escassez real. Caminhos recomendados: EU Blue Card (qualificacao ISCED nivel 6 ou superior e salario a partir de cerca de 37.134 euros em 2025), Key Employee Initiative para cargos tecnicos seniores (45.000 euros a partir de agosto de 2025) ou Specialist Employee Initiative (MQF nivel 6 e 30.000 euros). Vagas concentradas em iGaming, fintech e servicos profissionais."
      },
      {
        "area": "Financas, Contabilidade, Auditoria e Compliance",
        "advice": "Setor de maior remuneracao do pais e com demanda constante por compliance e risco, sobretudo em iGaming e servicos financeiros. Qualificacao profissional reconhecida pelo MQRIC ajuda. Rotas KEI/SEI e Blue Card para perfis qualificados."
      },
      {
        "area": "Saude (enfermagem, medicina, fisioterapia)",
        "advice": "Profissoes regulamentadas: alem do reconhecimento academico pelo MQRIC, e obrigatorio obter o warrant junto ao conselho profissional competente (ex.: Medical Council, Council for Nurses and Midwives) antes de exercer. Demanda elevada, mas exige validacao previa do diploma."
      },
      {
        "area": "Direito, Ciencias Sociais e Cultura",
        "advice": "Grupo com escassez segundo o EURES. Para advocacia, e profissao regulamentada com warrant exigido; estrangeiros geralmente atuam em consultoria, compliance e servicos corporativos em vez de litigio."
      },
      {
        "area": "Hotelaria, Turismo e Servicos Pessoais",
        "advice": "Alta absorcao de mao de obra, inclusive estrangeira, mas e a area mais afetada pelo aperto de 2026 para ocupacoes de baixa qualificacao (curso pre-partida e programa de integracao obrigatorios). Bom ponto de entrada, salarios proximos ao minimo nacional."
      },
      {
        "area": "Engenharia civil e construcao",
        "advice": "EURES sinaliza excedente de oferta em varios oficios de construcao, exceto eletricistas. Mercado mais competitivo; avaliar nicho especifico antes de migrar para essa area."
      },
      {
        "area": "Empreendedores e fundadores de startups",
        "advice": "Para nao europeus, o Malta Startup Residence Programme exige startup inovadora com ate 7 anos, capital social minimo de 25.000 euros (mais 10.000 por co-fundador acima de quatro) e foco em setores como tecnologia, gaming e saude. Concede residencia de tres anos renovavel por mais cinco."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio bruto (todos os setores)",
        "range": "cerca de 2.146 euros por mes no 4o trimestre de 2025 (aprox. 25.750 euros por ano)",
        "source": {
          "label": "NSO Malta / Trading Economics",
          "url": "https://nso.gov.mt/labour_market/",
          "official": true
        }
      },
      {
        "role": "Salario basico mediano",
        "range": "cerca de 1.417 euros por mes",
        "source": {
          "label": "NSO Malta",
          "url": "https://nso.gov.mt/selected_indicators/111178/",
          "official": true
        }
      },
      {
        "role": "Gestores / cargos gerenciais",
        "range": "media em torno de 3.217 euros por mes; financas e seguros acima de 3.159 euros por mes",
        "source": {
          "label": "NSO Labour Force Survey",
          "url": "https://nso.gov.mt/labour_market/",
          "official": true
        }
      },
      {
        "role": "Ocupacoes elementares (baixa qualificacao)",
        "range": "media em torno de 1.293 euros por mes",
        "source": {
          "label": "NSO Labour Force Survey",
          "url": "https://nso.gov.mt/labour_market/",
          "official": true
        }
      },
      {
        "role": "Salario minimo nacional (18 anos ou mais)",
        "range": "229,44 euros por semana a partir de 1 de janeiro de 2026 (5,74 euros por hora)",
        "source": {
          "label": "DIER - Department for Industrial and Employment Relations",
          "url": "https://dier.gov.mt/en/services/employment-conditions/wages/national-minimum-wage/",
          "official": true
        }
      },
      {
        "role": "Limiar EU Blue Card (alta qualificacao)",
        "range": "cerca de 37.134 euros por ano em 2025 e cerca de 38.628 euros em 2026 (1,5x o salario medio bruto)",
        "source": {
          "label": "Comissao Europeia / Identita",
          "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-malta_en",
          "official": true
        }
      },
      {
        "role": "Limiar Key Employee Initiative (KEI)",
        "range": "a partir de 45.000 euros por ano (desde 1 de agosto de 2025)",
        "source": {
          "label": "Identita - Expatriates Unit",
          "url": "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/key-employee-initiative/who-is-eligible/",
          "official": true
        }
      },
      {
        "role": "Limiar Specialist Employee Initiative (SEI)",
        "range": "a partir de 30.000 euros por ano (desde agosto de 2025), MQF nivel 6 ou experiencia equivalente",
        "source": {
          "label": "Identita / fontes juridicas oficiais",
          "url": "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Cidadaos da UE, EEE e Suica trabalham livremente em Malta, precisando apenas registrar a residencia. Para nacionais de paises terceiros, o documento principal e o Single Permit, que combina autorizacao de residencia e licenca de trabalho num unico processo para empregos com duracao superior a seis meses. O trabalhador nao pode aplicar diretamente: o empregador, registrado no Jobsplus, submete o pedido pelo Expatriates Portal da Identita. O processamento pode levar ate quatro meses, e o trabalho so e autorizado apos a biometria e a emissao da autorizacao temporaria. O empregador deve realizar teste de mercado de trabalho, anunciando a vaga para verificar a indisponibilidade de candidatos locais ou da UE/EEE. Para perfis qualificados existem rotas mais rapidas: EU Blue Card (qualificacao ISCED 6 ou superior, salario de cerca de 37.134 euros em 2025, anuncio de pelo menos duas semanas e seguro saude de no minimo 100.000 euros), Key Employee Initiative (cargos gerenciais ou altamente tecnicos, 45.000 euros por ano desde agosto de 2025, processamento rapido) e Specialist Employee Initiative (ISCO grupos 1, 2 ou 3, MQF nivel 6 ou 3 anos de experiencia, 30.000 euros por ano). Profissoes regulamentadas (medicina, enfermagem, direito, arquitetura, entre outras) exigem, alem do reconhecimento academico pelo MQRIC, a obtencao de um warrant ou licenca junto ao conselho profissional competente antes de exercer. A partir de 2025 e 2026 Malta aperta as regras para paises terceiros, introduzindo verificacao de adequacao (Suitability Check) pelo Jobsplus, curso pre-partida obrigatorio para todos os novos requerentes e programa de integracao para ocupacoes de baixa qualificacao, com foco em coibir intermediarios ilegais e ofertas de emprego ficticias. Empreendedores nao europeus podem usar o Malta Startup Residence Programme, que exige startup inovadora com ate sete anos, capital social minimo de 25.000 euros e concede residencia de tres anos renovavel por mais cinco. Nacionais de Afeganistao, Coreia do Norte, Ira, Republica Democratica do Congo, Somalia, Sudao do Sul, Sudao, Siria, Iemen e Venezuela sao inelegiveis a esse programa.",
    "opportunityWindows": [
      "Verificacao de adequacao pelo Jobsplus e curso pre-partida obrigatorio para novos requerentes de paises terceiros entram em vigor em 2026, favorecendo quem chega com qualificacao reconhecida e proposta de emprego solida",
      "Limiares salariais de KEI (45.000 euros) e SEI (30.000 euros) atualizados em agosto de 2025 direcionam o mercado a perfis qualificados com processamento mais rapido (SEI em cerca de 15 dias uteis)",
      "Expansao de fintech, cibersseguranca, blockchain e inteligencia artificial cria janela para profissionais de TI e dados nos proximos anos",
      "Compliance e gestao de risco em iGaming e servicos financeiros seguem com escassez sustentada",
      "Reajuste do salario minimo em janeiro de 2026 e ajustes COLA elevam o piso de renda em ocupacoes de entrada",
      "Malta Startup Residence Programme aberto a fundadores nao europeus em setores inovadores, com capital de entrada relativamente baixo (25.000 euros)"
    ],
    "jobBoards": [
      {
        "label": "Jobsplus - servico publico de emprego de Malta (vagas e licencas)",
        "url": "https://jobsplus.gov.mt/",
        "official": true
      },
      {
        "label": "Jobsplus - pagina de vagas",
        "url": "https://jobsplus.gov.mt/vacancy",
        "official": true
      },
      {
        "label": "EURES - portal europeu de empregos (mercado de Malta)",
        "url": "https://eures.europa.eu/index_en",
        "official": true
      },
      {
        "label": "Identita - Expatriates Unit (permissoes de trabalho para nao europeus)",
        "url": "https://identita.gov.mt/expatriates-unit-main-page/",
        "official": true
      },
      {
        "label": "Residency Malta - Startup Residence Programme (empreendedores)",
        "url": "https://startup.residencymalta.gov.mt/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "NSO Malta - Labour Market (estatisticas oficiais de emprego e salarios)",
        "url": "https://nso.gov.mt/labour_market/",
        "official": true
      },
      {
        "label": "NSO Malta - Job Vacancy Survey Q2/2025",
        "url": "https://nso.gov.mt/labour-market/job-vacancy-survey-q2-2025/",
        "official": true
      },
      {
        "label": "NSO Malta - Labour Force Survey Q3/2025",
        "url": "https://nso.gov.mt/labour-market/labour-force-survey-q3-2025/",
        "official": true
      },
      {
        "label": "NSO Malta - Median annual basic salary indicator",
        "url": "https://nso.gov.mt/selected_indicators/111178/",
        "official": true
      },
      {
        "label": "EURES - Labour Market Information Malta (escassez e excedente de ocupacoes)",
        "url": "https://eures.europa.eu/living-and-working/labour-market-information/labour-market-information-malta_en",
        "official": true
      },
      {
        "label": "Jobsplus - Empregar nacionais de paises terceiros (TCNs)",
        "url": "https://jobsplus.gov.mt/find-candidates/non-eu-nationals-tcns",
        "official": true
      },
      {
        "label": "Jobsplus - Malta Labour Migration Policy (julho 2025)",
        "url": "https://jobsplus.gov.mt/media/0c3ppzjb/malta-labour-migration-policy-implementation-doc-jul-2025.pdf",
        "official": true
      },
      {
        "label": "Identita - Single Permit (elegibilidade e processo)",
        "url": "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/",
        "official": true
      },
      {
        "label": "Identita - Key Employee Initiative (elegibilidade)",
        "url": "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/key-employee-initiative/who-is-eligible/",
        "official": true
      },
      {
        "label": "Comissao Europeia - EU Blue Card Malta",
        "url": "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-malta_en",
        "official": true
      },
      {
        "label": "MFHEA / MQRIC - reconhecimento de qualificacoes academicas e profissionais",
        "url": "https://mfhea.mt/academic-qualifications/",
        "official": true
      },
      {
        "label": "DIER - National Minimum Wage (salario minimo nacional)",
        "url": "https://dier.gov.mt/en/services/employment-conditions/wages/national-minimum-wage/",
        "official": true
      },
      {
        "label": "Residency Malta - Startup Residence Programme (requisitos, agosto 2025)",
        "url": "https://startup.residencymalta.gov.mt/wp-content/uploads/2025/08/Malta-Startup-Residence-Programme-Eligbility-and-Requirements-V4.2-August-2025.pdf",
        "official": true
      }
    ]
  },
  "cn": {
    "updatedAt": "2026-06-22",
    "overview": "China remains one of the largest labor markets in the world, but for foreigners it is a selective market built around scarce, high-value talent rather than mass employment. Legal work requires a Z visa plus a Foreigner's Work Permit sponsored by a licensed Chinese employer, administered by the Ministry of Human Resources and Social Security (MOHRSS) through the State Administration of Foreign Experts Affairs (SAFEA). Foreign workers are sorted into three tiers: Category A (high-end talent, fast-tracked), Category B (professional talent, controlled) and Category C (ordinary or short-term, restricted). The domestic backdrop in 2026 is mixed: official statistics show solid wage growth in non-private urban units (average annual wage of 129,441 yuan in 2025, up 4.3 percent), led by information technology, finance and scientific research, while youth unemployment for those aged 16 to 24 stayed elevated at roughly 16 to 17 percent through late 2025 and early 2026, pressured by a prolonged property slump. The clearest signal of intent toward foreigners is the new K visa, effective October 1, 2025, which lets young science and technology graduates enter without an employer invitation, a notable opening aimed at the global STEM pool. Business setup is more open than the labor market: foreigners can hold 100 percent of a company (WFOE) in any sector outside the foreign-investment Negative List, and the nationwide minimum registered capital requirement has been abolished, though capital must be fully paid within five years under the Company Law effective July 2024.",
    "hotSectors": [
      "Artificial intelligence and machine learning",
      "Semiconductors and chip design",
      "New energy: EV, photovoltaic, wind, energy storage",
      "Autonomous driving and intelligent cockpit",
      "Cloud computing and big data",
      "Cybersecurity",
      "FinTech",
      "Game development for global markets",
      "Biotechnology and pharmaceuticals",
      "High-end manufacturing and industrial automation"
    ],
    "coolingSectors": [
      "Real estate and property development",
      "Construction tied to the property cycle",
      "Traditional after-school tutoring (curbed since the 2021 reforms)",
      "Low-end manufacturing and assembly",
      "Public-sector hiring constrained by local-government fiscal strain"
    ],
    "inDemandRoles": [
      {
        "role": "AI / machine learning engineer",
        "note": "Demand reported to outstrip supply by roughly three to one per Zhaopin recruitment data; strong fit for Category A or the new K visa."
      },
      {
        "role": "Semiconductor design and process engineer",
        "note": "Talent critically scarce across design, fabrication, packaging and equipment as China pushes chip self-sufficiency."
      },
      {
        "role": "New energy vehicle and battery engineer",
        "note": "Explosive growth in EV, autonomous driving and intelligent cockpit roles; favors experienced technical leads."
      },
      {
        "role": "Data scientist / analyst",
        "note": "Cross-sector demand in tech, finance and manufacturing."
      },
      {
        "role": "Software developer",
        "note": "Consistent demand, especially for global-market and cloud products."
      },
      {
        "role": "English teacher (native speaker)",
        "note": "One of the most accessible roles; international schools, universities and training centers. Requires a bachelor's degree plus TEFL/TESOL/CELTA."
      },
      {
        "role": "Finance and FinTech professional",
        "note": "Concentrated in Shanghai, Beijing and Shenzhen; high pay band."
      },
      {
        "role": "Healthcare and medical specialist",
        "note": "Regulated; requires recognized medical license and approvals."
      },
      {
        "role": "Automation / robotics engineer",
        "note": "Tied to high-end manufacturing upgrade."
      }
    ],
    "byQualification": [
      {
        "area": "STEM graduates (computer science, AI, electronics, materials, energy)",
        "advice": "The strongest position in the market. Target AI, semiconductor and new energy employers, and consider the new K visa (effective October 2025), which lets young STEM graduates from recognized universities enter without an employer invitation. A bachelor's qualifies; a master's or PhD plus experience pushes toward Category A and the fast 5-day permit track."
      },
      {
        "area": "Engineering and manufacturing",
        "advice": "Focus on EV, battery, automation and high-end manufacturing hubs. Two or more years of relevant experience plus a bachelor's typically meets Category B; specialized or scarce skills can reach Category A."
      },
      {
        "area": "Finance, economics and business",
        "advice": "Aim at Shanghai, Beijing and Shenzhen where finance pay leads the non-private sector. Category B is realistic with a bachelor's and 2+ years of experience; a salary at or above four times the local average wage helps qualify."
      },
      {
        "area": "Education and humanities",
        "advice": "Native-language teaching is the clearest entry route. A bachelor's degree (any field for English) plus a 120-hour accredited TEFL/TESOL/CELTA and ideally 2 years of experience meets the foreign-teacher rules; university and international-school posts pay better than training centers."
      },
      {
        "area": "Healthcare, law and other regulated fields",
        "advice": "Expect licensing barriers. Medicine requires a recognized doctor's license and practice approvals; foreign lawyers face a limited scope of practice versus domestic lawyers. Secure professional recognition before relying on these as a work-permit basis."
      },
      {
        "area": "Entrepreneurs and investors",
        "advice": "Setting up a WFOE is often more accessible than employment. 100 percent foreign ownership is allowed outside the Negative List in consulting, services, trading, manufacturing, R&D, tech, e-commerce and design; no minimum registered capital, but full contribution is due within five years."
      }
    ],
    "salaries": [
      {
        "role": "Information technology / software (urban non-private units, all employees average)",
        "range": "248,752 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025 average annual wages",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "Finance (urban non-private units average)",
        "range": "211,164 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "Scientific research and technical services (urban non-private units average)",
        "range": "182,064 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "Professional / technical staff (enterprises above designated size)",
        "range": "155,491 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "Management positions (enterprises above designated size)",
        "range": "210,016 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "Education (urban non-private units average)",
        "range": "133,539 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "All employees, urban non-private units (national average)",
        "range": "129,441 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      },
      {
        "role": "All employees, urban private units (national average)",
        "range": "71,590 yuan/year",
        "source": {
          "label": "National Bureau of Statistics of China, 2025",
          "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
          "official": true
        }
      }
    ],
    "foreignerRules": "Foreigners must hold a Z visa plus a Foreigner's Work Permit sponsored by a licensed Chinese employer, then convert to a residence permit after arrival; the permit application is filed online through the SAFEA system (fwp.safea.gov.cn) and overseen by MOHRSS and its provincial Human Resources and Social Security bureaus. Applicants are classified into three tiers. Category A (high-end talent) includes scientists, tech leaders, international entrepreneurs and urgently needed specialists, with a green-channel and a permit decision in about five working days. Category B (professional talent) typically requires a bachelor's degree plus 2+ years of relevant experience and applicants under 60, or recognized skilled-trade certificates, native-language teachers, a salary of at least four times the local average wage, or a points score above 60. Category C (ordinary or short-term) covers quota positions, internships and work under 90 days. In 2026 Beijing and Shanghai resumed enforcing salary-based thresholds (Category A around six times the local average social wage, Category B around four times), and the system requires a gapless chronological work and education history. The new K visa, effective October 1, 2025, is a separate route for young science and technology talent that does NOT require an employer invitation and allows education, research, entrepreneurial and business activities, with consular practice applying an informal age guidance of roughly 18 to 45. Regulated professions carry extra barriers: foreign-language teachers must teach their native language with a bachelor's degree and 2 years of experience (waivable with an accredited TEFL/TESOL/CELTA or education degree); medicine requires a recognized doctor's license and practice approvals; foreign lawyers have a restricted scope versus domestic lawyers; and industries with pre-approval requirements need clearance from the relevant authority before a foreigner can be hired. Since late 2024 the physical work permit card has been integrated with the social security card. For entrepreneurs, 100 percent foreign ownership (WFOE) is permitted outside the foreign-investment Negative List; restricted areas (civil aviation, marine shipping, most value-added telecom, oil and gas exploration, large-scale fuel retail, tertiary education and certain agricultural breeding) still require a Chinese joint-venture partner.",
    "opportunityWindows": [
      "New K visa (effective Oct 1, 2025) opens entry for young STEM talent without an employer sponsor, a rare easing in an otherwise sponsor-gated system.",
      "Severe AI engineer shortage, with demand reported at roughly three times supply.",
      "Semiconductor self-sufficiency drive creating scarce-talent roles across the whole chip supply chain.",
      "New energy and EV boom (photovoltaic, wind, storage, autonomous driving, intelligent cockpit) generating high-quality technical jobs.",
      "100 percent foreign ownership of WFOEs outside the Negative List, with no minimum registered capital.",
      "Steady, structural demand for native-speaker English teachers at universities and international schools."
    ],
    "jobBoards": [
      {
        "label": "SAFEA / MOHRSS Foreigner Work Permit Service System (fwp.safea.gov.cn)",
        "url": "http://fwp.safea.gov.cn/",
        "official": true
      },
      {
        "label": "Working in Beijing - Beijing Municipal Government (employment services for foreigners)",
        "url": "https://english.beijing.gov.cn/workinginbeijing/",
        "official": true
      },
      {
        "label": "Shenzhen Government Online - Foreigner's Work Permit and employment services",
        "url": "https://www.sz.gov.cn/en_szgov/services/personal/employment/",
        "official": true
      },
      {
        "label": "Nanjing Government - Foreigner services: employment and work permit",
        "url": "https://english.nanjing.gov.cn/IWantto/Work/",
        "official": true
      },
      {
        "label": "China State Council - latest policy releases (visa and talent policy)",
        "url": "https://english.www.gov.cn/policies/latestreleases/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "National Bureau of Statistics of China - Average Annual Wages of Employees in Urban Units in 2025",
        "url": "https://www.stats.gov.cn/english/PressRelease/202605/t20260518_1963740.html",
        "official": true
      },
      {
        "label": "State Council of China - China to launch new K visa for young science and technology professionals",
        "url": "https://english.www.gov.cn/policies/latestreleases/202508/14/content_WS689dd0d3c6d0868f4e8f4d1e.html",
        "official": true
      },
      {
        "label": "Beijing Municipal Government - Foreign Professionals (Category B) employment guide",
        "url": "https://english.beijing.gov.cn/workinginbeijing/quickguideonemploymentservices/foreignprofessionals/",
        "official": true
      },
      {
        "label": "Beijing Municipal Government - Notification Letter of Foreigner's Work Permit (talents outside China)",
        "url": "https://english.beijing.gov.cn/mostrequested/workpermit/noncreditbasedtalentsoutsideofchina/",
        "official": true
      },
      {
        "label": "Hunan Provincial Government - FAQs for Foreigner's Work Permit in China",
        "url": "http://enghunan.gov.cn/hneng/Services/Work/WorkPermit/202411/t20241113_33499160.html",
        "official": true
      },
      {
        "label": "Shenzhen Government Online - Foreigner's Work Permit",
        "url": "https://www.sz.gov.cn/en_szgov/services/personal/employment/content/post_11701108.html",
        "official": true
      },
      {
        "label": "SAFEA - Foreigner's Work Permit in China (official portal info)",
        "url": "http://en.safea.gov.cn/Foreignerwrc.html",
        "official": true
      },
      {
        "label": "China Law Translate - Measures for the Hiring and Management of Foreign Teachers (official draft text)",
        "url": "https://www.chinalawtranslate.com/en/foreign-teacher-rules-draft/",
        "official": false
      },
      {
        "label": "China Briefing - China Work Permits: A, B, or C Tier Talent classification",
        "url": "https://www.china-briefing.com/news/china-work-permits-are-you-a-b-c-tier-talent/",
        "official": false
      },
      {
        "label": "CNBC - China youth flocking to government jobs amid economic slowdown (youth unemployment data)",
        "url": "https://www.cnbc.com/2025/12/17/china-youth-unemployment-civil-service-jobs-economy-slowdown.html",
        "official": false
      },
      {
        "label": "Trading Economics - China Youth Unemployment Rate (NBS-sourced series)",
        "url": "https://tradingeconomics.com/china/youth-unemployment-rate",
        "official": false
      },
      {
        "label": "HiredChina - Global talent opportunities and in-demand roles 2026",
        "url": "https://www.hiredchina.com/articles/global-talent-china-careers/",
        "official": false
      },
      {
        "label": "CIProcess - China Negative List and foreign investment 2026",
        "url": "https://www.ciprocess.com/The-negative-list-for-Foreign-Investments-in-China-by-sector-of-activity.htm",
        "official": false
      }
    ]
  },
  "sg": {
    "updatedAt": "2026-06-22",
    "overview": "Singapura entra em 2026 com um mercado de trabalho estável, porém mais cauteloso. Segundo o relatório do primeiro trimestre do Ministry of Manpower (MOM), o emprego total cresceu pelo 18º trimestre consecutivo, com aumento de 9.400 postos no 1T 2026, e a taxa de desemprego geral permaneceu baixa, em 2,0% (2,9% entre residentes e 3,1% entre cidadãos em março de 2026). Ainda havia mais vagas abertas do que desempregados, com 73,3 mil vagas em março e proporção de 1,46 vaga por desempregado, embora a demanda por mão de obra venha esfriando (eram 77,7 mil vagas em dezembro de 2025). O recado para o estrangeiro é duplo. Por um lado, a cidade-Estado continua atraindo talento qualificado e mantém uma Lista de Ocupações em Escassez (Shortage Occupation List) que dá pontos extras a profissionais de tecnologia, saúde, finanças e economia verde. Por outro, as exigências de salário e pontuação para os vistos de trabalho subiram em 1 de janeiro de 2026 e voltam a subir em 2027, num movimento contínuo do governo para priorizar o emprego local e elevar o nível do estrangeiro admitido. As demissões subiram levemente (3.830 no 1T 2026, ante 3.690 no trimestre anterior), concentradas em manufatura, serviços financeiros e serviços profissionais, e a intenção de contratar das empresas caiu de forma expressiva entre fevereiro e março, sinal de prudência diante da incerteza econômica global. Para quem quer trabalhar ou empreender em Singapura, o caminho é claramente regido por mérito e salário: quanto mais alto o cargo e a remuneração, mais simples a entrada via Employment Pass, ONE Pass ou EntrePass.",
    "hotSectors": [
      "Tecnologia da informação e inteligência artificial (AI engineers, cientistas de dados, desenvolvedores de software, especialistas em nuvem)",
      "Cibersegurança (arquitetos de segurança, perícia digital, testes de intrusão)",
      "Saúde e cuidados (enfermagem, fisioterapia, terapia ocupacional, radiografia)",
      "Semicondutores e engenharia avançada",
      "Serviços financeiros e gestão de patrimônio (family offices, ultra high net worth)",
      "Economia verde e mercado de carbono",
      "Transporte e armazenagem (logística)",
      "Serviços administrativos e de apoio"
    ],
    "coolingSectors": [
      "Manufatura tradicional (concentrou demissões no 1T 2026)",
      "Serviços financeiros em funções genéricas (demissões pontuais apesar do setor seguir aquecido no topo)",
      "Serviços profissionais (consultoria e correlatos com demissões em alta)"
    ],
    "inDemandRoles": [
      {
        "role": "AI Engineer / AI Researcher / Cientista de dados",
        "note": "Constam na Shortage Occupation List 2026 (Infocomm Technology); dão até 20 pontos extras no COMPASS e podem habilitar EP de 5 anos."
      },
      {
        "role": "Desenvolvedor de software e aplicações web/mobile",
        "note": "Na SOL 2026; alta demanda persistente em tecnologia."
      },
      {
        "role": "Especialista em cibersegurança (arquiteto, perícia digital, pentester)",
        "note": "Quatro funções de cibersegurança entraram na SOL 2026 por escassez aguda de talento local."
      },
      {
        "role": "Especialista em nuvem (Cloud specialist)",
        "note": "Na SOL 2026 (Infocomm Technology)."
      },
      {
        "role": "Engenheiro de semicondutores, de processo e de instrumentação",
        "note": "Na SOL 2026 (setor de semicondutores)."
      },
      {
        "role": "Enfermeiro registrado, fisioterapeuta, terapeuta ocupacional, radiografista diagnóstico, podólogo, psicólogo clínico, assistente social médico",
        "note": "Saúde domina a SOL 2026 com sete funções."
      },
      {
        "role": "Relationship manager / investment advisor / wealth planner para ultra high net worth e family offices",
        "note": "Na SOL 2026 (serviços financeiros)."
      },
      {
        "role": "Carbon trader, gestor e auditor de projetos de carbono",
        "note": "Economia verde, na SOL 2026."
      },
      {
        "role": "Marine superintendent e marine technical superintendent",
        "note": "Setor marítimo, na SOL 2026."
      },
      {
        "role": "Cientista de alimentos de proteína alternativa / biotecnologista de novos alimentos",
        "note": "Agritech, na SOL 2026."
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da informação, ciência da computação e engenharia de software",
        "advice": "Maior porta de entrada do país. Funções como AI engineer, cientista de dados, desenvolvedor e especialista em nuvem estão na Shortage Occupation List 2026, somando até 20 pontos no COMPASS e podendo habilitar Employment Pass de 5 anos. Mire empregadores estabelecidos e use o MyCareersFuture."
      },
      {
        "area": "Cibersegurança",
        "advice": "Quatro funções entraram na SOL 2026 por falta aguda de talento local. Certificações reconhecidas e experiência em perícia digital, testes de intrusão e engenharia de segurança elevam muito a empregabilidade e a pontuação no EP."
      },
      {
        "area": "Saúde (enfermagem, fisioterapia, terapia ocupacional, radiografia, psicologia clínica)",
        "advice": "Setor com sete funções na SOL 2026. São profissões regulamentadas: além do visto, exige-se registro junto aos conselhos profissionais (ex.: Singapore Nursing Board, Allied Health Professions Council) antes de exercer."
      },
      {
        "area": "Engenharia de semicondutores, processos e instrumentação",
        "advice": "Demanda estrutural ligada à indústria de chips. Funções na SOL 2026; bom potencial para EP com pontuação reforçada."
      },
      {
        "area": "Finanças e gestão de patrimônio",
        "advice": "O topo (family offices, ultra high net worth) está na SOL 2026 e segue contratando, mas funções genéricas viram demissões. O salário mínimo do EP é mais alto no setor financeiro (S$6.200/mês na base em 2026, subindo para S$6.600 em 2027)."
      },
      {
        "area": "Economia verde e mercado de carbono",
        "advice": "Nicho em ascensão com várias funções de carbono na SOL 2026. Bom para quem tem experiência internacional em ESG, créditos de carbono e verificação."
      },
      {
        "area": "Empreendedores e fundadores",
        "advice": "O caminho é o EntrePass (startup inovadora ou venture-backed, 30% de participação, empresa com até 6 meses de constituição) ou, para perfis de altíssima renda, o ONE Pass. SMEs tradicionais não se qualificam ao EntrePass; o foco é tecnologia proprietária e escalabilidade regional."
      },
      {
        "area": "Logística, transporte, armazenagem e serviços administrativos",
        "advice": "Foram os setores que mais geraram empregos para residentes no 1T 2026, mas muitas funções operacionais caem em faixas de S Pass/Work Permit, com cotas e salários mínimos próprios (S Pass base de S$3.300/mês em 2026)."
      }
    ],
    "salaries": [
      {
        "role": "Renda mediana mensal bruta (residentes em tempo integral, todas as ocupações)",
        "range": "S$5.775/mês (2025)",
        "source": {
          "label": "MOM/SingStat - Summary Table: Income",
          "url": "https://stats.mom.gov.sg/pages/income-summary-table.aspx",
          "official": true
        }
      },
      {
        "role": "Salário mínimo qualificador do Employment Pass (geral, base por idade)",
        "range": "S$5.600/mês (23 anos ou menos) a S$10.700/mês (45+) em 2026",
        "source": {
          "label": "MOM - Eligibility for Employment Pass",
          "url": "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
          "official": true
        }
      },
      {
        "role": "Salário mínimo qualificador do Employment Pass (serviços financeiros)",
        "range": "S$6.200/mês (23 anos ou menos) a S$11.800/mês (45+) em 2026",
        "source": {
          "label": "MOM - Eligibility for Employment Pass",
          "url": "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
          "official": true
        }
      },
      {
        "role": "Salário mínimo qualificador do S Pass (base, setor geral)",
        "range": "S$3.300/mês em 2026 (S$3.800 em serviços financeiros); sobe para S$3.600 em 2027",
        "source": {
          "label": "MOM - Factsheet Foreign Workforce Policy (COS 2026)",
          "url": "https://www.mom.gov.sg/-/media/mom/documents/press-releases/2026/factsheet-on-foreign-workforce-policies-03032026.pdf",
          "official": true
        }
      },
      {
        "role": "Salário mínimo fixo do ONE Pass (Overseas Networks & Expertise Pass)",
        "range": "S$30.000/mês",
        "source": {
          "label": "MOM - Eligibility for Overseas Networks & Expertise Pass",
          "url": "https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility",
          "official": true
        }
      }
    ],
    "foreignerRules": "Estrangeiro não pode trabalhar em Singapura sem um visto de trabalho emitido pelo MOM, e o tipo de visto depende do salário e da qualificação. Employment Pass (EP): para profissionais, gerentes e executivos; exige salário mínimo qualificador (S$5.600/mês na base em 2026, mais alto conforme a idade, e S$6.200/mês no setor financeiro) e aprovação no COMPASS, sistema de pontos que requer no mínimo 40 de 100 pontos, avaliando salário, qualificação, diversidade da empresa e apoio ao emprego local. A partir de 1 de janeiro de 2026 valem listas atualizadas de qualificações e a nova Shortage Occupation List, que concede até 20 pontos extras a quem preenche funções em escassez (tecnologia, saúde, finanças de topo, economia verde, semicondutores, marítimo, agritech) e pode habilitar EP de 5 anos para certos cargos de tecnologia. As exigências sobem novamente em 1 de janeiro de 2027 (base do EP para S$6.000/mês; financeiro para S$6.600/mês). S Pass: para técnicos de qualificação intermediária, com salário mínimo de S$3.300/mês em 2026 (S$3.800 no financeiro), sujeito a cota por empresa (até 10% da força de trabalho local em serviços; 15% em construção, processo, marinha e manufatura) e a levy mensal de S$650 por trabalhador. Work Permit: para trabalhadores de setores como construção, manufatura, marinha e processo, com cotas e levies próprios. O Local Qualifying Salary, piso que define quais funcionários locais contam para as cotas, sobe de S$1.600 para S$1.800/mês em 1 de julho de 2026. ONE Pass: para talentos de altíssimo nível com salário fixo de S$30.000/mês ou trajetória de destaque em ciência, artes, esportes ou pesquisa; válido por 5 anos e permite trabalhar para mais de um empregador. EntrePass: para empreendedores que fundam empresa inovadora ou venture-backed em Singapura, com pelo menos 30% de participação e empresa constituída há no máximo 6 meses; foco em tecnologia proprietária e startups escaláveis, não em SMEs tradicionais. Profissões regulamentadas exigem registro adicional junto ao conselho profissional competente antes do exercício, caso de enfermeiros (Singapore Nursing Board), profissionais de saúde aliados (Allied Health Professions Council), médicos, advogados, contadores e engenheiros, entre outros, independentemente do visto.",
    "opportunityWindows": [
      "Janela antes de 1 de janeiro de 2027: os salários mínimos do EP e do S Pass sobem novamente nessa data, então candidatar-se em 2026 ainda pega pisos mais baixos.",
      "Funções da Shortage Occupation List 2026 dão até 20 pontos extras no COMPASS e, em alguns cargos de tecnologia, EP de validade de 5 anos, facilitando muito a aprovação.",
      "Setores de transporte/armazenagem e serviços administrativos lideraram a geração de empregos para residentes no 1T 2026.",
      "Mercado ainda com mais vagas do que desempregados (1,46 vaga por desempregado em março de 2026), apesar do esfriamento.",
      "Empreendedores de tecnologia com captação (a partir de ~S$100 mil em rodada) ou apoio de aceleradora têm caminho via EntrePass com foco governamental contínuo em startups inovadoras."
    ],
    "jobBoards": [
      {
        "label": "MyCareersFuture (portal oficial de empregos do governo, Workforce Singapore)",
        "url": "https://www.mycareersfuture.gov.sg",
        "official": true
      },
      {
        "label": "Ministry of Manpower (MOM) - vistos e regras de trabalho",
        "url": "https://www.mom.gov.sg",
        "official": true
      },
      {
        "label": "Workforce Singapore (WSG) - programas de carreira e capacitação",
        "url": "https://www.wsg.gov.sg",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "MOM - Report: Labour Market First Quarter 2026 (PDF)",
        "url": "https://stats.mom.gov.sg/iMAS_PdfLibrary/mrsd-Labour-Market-Report-1Q-2026.pdf",
        "official": true
      },
      {
        "label": "MOM - Press release: Labour Market Report 1Q 2026",
        "url": "https://www.mom.gov.sg/newsroom/press-releases/2026/0615-lmr-1q-2026",
        "official": true
      },
      {
        "label": "MOM - Eligibility for Employment Pass (salário e COMPASS)",
        "url": "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
        "official": true
      },
      {
        "label": "MOM - COMPASS C5 Skills Bonus / Shortage Occupation List (SOL)",
        "url": "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility/compass-c5-skills-bonus-shortage-occupation-list-sol",
        "official": true
      },
      {
        "label": "MOM - Shortage Occupation List Employer Guide (PDF)",
        "url": "https://www.mom.gov.sg/-/media/mom/documents/work-passes-and-permits/compass/sol-guidebook.pdf",
        "official": true
      },
      {
        "label": "MOM - Factsheet: Foreign Workforce Policy Announcements at COS 2026 (PDF)",
        "url": "https://www.mom.gov.sg/-/media/mom/documents/press-releases/2026/factsheet-on-foreign-workforce-policies-03032026.pdf",
        "official": true
      },
      {
        "label": "MOM - EntrePass",
        "url": "https://www.mom.gov.sg/passes-and-permits/entrepass",
        "official": true
      },
      {
        "label": "MOM - Eligibility for Overseas Networks & Expertise Pass (ONE Pass)",
        "url": "https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility",
        "official": true
      },
      {
        "label": "MOM/SingStat - Summary Table: Income (renda mediana 2025)",
        "url": "https://stats.mom.gov.sg/pages/income-summary-table.aspx",
        "official": true
      },
      {
        "label": "SingStat - Labour, Employment, Wages and Productivity",
        "url": "https://www.singstat.gov.sg/find-data/explore-data-themes/economy-prices/labour-employment-wages-and-productivity/latest-news-data",
        "official": true
      }
    ]
  },
  "nz": {
    "updatedAt": "2026-06-22",
    "overview": "A Nova Zelandia entrou em 2026 com um mercado de trabalho em desaceleracao apos a recessao tecnica de 2024 a 2025, mas ainda estrutural e cronicamente carente de mao de obra qualificada em saude, construcao, engenharia e tecnologia. Os dados oficiais da Stats NZ para o trimestre de marco de 2026 mostram taxa de desemprego de 5,3 por cento (queda ante os 5,4 por cento do trimestre de dezembro de 2025), com 163 mil desempregados, taxa de emprego de 66,7 por cento, participacao da forca de trabalho em torno de 70,4 por cento e subutilizacao de 12,9 por cento (406 mil pessoas), indicador que aponta folga no mercado. O ganho medio por hora subiu para 44,12 dolares neozelandeses (alta de 3,1 por cento no ano), enquanto o indice de custo do trabalho cresceu 2,0 por cento, sinalizando que a inflacao salarial arrefeceu. O desemprego juvenil segue elevado, em 24,9 por cento na faixa de 15 a 19 anos e 12,2 por cento entre 20 e 24 anos. Para o imigrante, a leitura e dupla: o mercado generalista esfriou e a concorrencia por vagas de baixa qualificacao aumentou, mas o governo mantem a Green List como via prioritaria de residencia para profissoes em escassez, e o salario mediano usado pela imigracao subiu para 35,00 dolares por hora a partir de 9 de marco de 2026. Quem chega com qualificacao reconhecida em saude, engenharia, construcao ou TI encontra demanda real e caminho rapido para residencia; quem chega sem qualificacao alinhada enfrenta um mercado competitivo e morno.",
    "hotSectors": [
      "Saude e assistencia social (enfermagem, medicina, fisioterapia, parteiras, psicologia)",
      "Construcao e infraestrutura (gerentes de projeto, engenheiros civis, eletricistas, encanadores)",
      "Engenharia (civil, mecanica, eletrica, estrutural, ambiental)",
      "Tecnologia da informacao e software (engenheiros de software, seguranca de TI, administradores de sistemas e banco de dados)",
      "Educacao (professores de educacao infantil e educacao especial, em escassez na Green List)",
      "Trades qualificados (soldadores, mecanicos, montadores, serralheiros)",
      "Agropecuaria (gestores de fazenda leiteira e pecuaristas de leite)"
    ],
    "coolingSectors": [
      "Administracao publica e seguranca (crescimento fraco no horizonte de medio prazo do MBIE)",
      "Setores primarios de baixa qualificacao (agricultura, silvicultura e pesca com crescimento minimo)",
      "Vagas generalistas e de baixa qualificacao, pressionadas pela subutilizacao de 12,9 por cento e pela alta concorrencia local",
      "Mercado de trabalho juvenil, com desemprego de 24,9 por cento na faixa de 15 a 19 anos"
    ],
    "inDemandRoles": [
      {
        "role": "Enfermeiro(a) registrado(a) (Registered Nurse)",
        "note": "Tier 1 da Green List, residencia direta. Escassez nacional cronica, agravada desde a pandemia. Exige registro no Nursing Council of New Zealand."
      },
      {
        "role": "Medico(a) clinico geral e especialistas",
        "note": "Tier 1 da Green List. Exige registro no Medical Council of New Zealand."
      },
      {
        "role": "Engenheiro(a) civil, mecanico, eletrico e estrutural",
        "note": "Tier 1 da Green List, residencia direta. Construcao e infraestrutura entre os setores de maior crescimento projetado."
      },
      {
        "role": "Engenheiro(a) de software e especialista em seguranca de TI",
        "note": "Tier 1 da Green List. TI e gestao lideram a demanda por ocupacoes altamente qualificadas segundo o MBIE."
      },
      {
        "role": "Gerente de projeto de construcao e quantity surveyor",
        "note": "Tier 1 da Green List. Setor de construcao e utilities deve adicionar cerca de 4.800 vagas por ano."
      },
      {
        "role": "Eletricista e encanador",
        "note": "Tier 2 da Green List, via Work to Residence (2 anos). Trades qualificados em alta demanda; eletricistas exigem registro (Electrical Workers Registration Board)."
      },
      {
        "role": "Professor(a) de educacao infantil e educacao especial",
        "note": "Tier 2 da Green List. Exige registro na Teaching Council of Aotearoa New Zealand."
      },
      {
        "role": "Fisioterapeuta, parteira, paramedico, farmaceutico e psicologo",
        "note": "Tier 1 da Green List, profissoes de saude regulamentadas com registro obrigatorio no conselho respectivo."
      },
      {
        "role": "Gestor de fazenda leiteira e pecuarista de leite",
        "note": "Tier 2 da Green List. Demanda regional concentrada fora dos grandes centros urbanos."
      }
    ],
    "byQualification": [
      {
        "area": "Saude (enfermagem, medicina, fisioterapia, odontologia, farmacia, psicologia)",
        "advice": "Caminho mais forte do pais. A maioria das profissoes de saude esta no Tier 1 da Green List, com residencia direta. O passo critico e obter o registro profissional junto ao conselho da area (Nursing Council, Medical Council, Physiotherapy Board, Dental Council, entre outros) antes ou logo apos a chegada, alem da comprovacao de ingles. Vale iniciar o processo de avaliacao de credenciais ainda no pais de origem."
      },
      {
        "area": "Engenharia (civil, mecanica, eletrica, estrutural, ambiental)",
        "advice": "Forte demanda e Tier 1 na Green List para varias especialidades. Recomenda-se buscar a avaliacao de qualificacao e, quando aplicavel, o reconhecimento como Chartered Professional Engineer pela Engineering New Zealand para acelerar a empregabilidade e atingir as faixas salariais mais altas."
      },
      {
        "area": "Tecnologia da informacao e software",
        "advice": "TI e gestao lideram a demanda por ocupacoes altamente qualificadas no horizonte do MBIE. Engenheiros de software e especialistas em seguranca estao no Tier 1. A area nao exige registro obrigatorio, o que facilita a entrada; o diferencial e portfolio, experiencia comprovada (2 anos ou mais) ou qualificacao de nivel 4 ou superior no quadro neozelandes."
      },
      {
        "area": "Construcao e trades (eletricista, encanador, soldador, gerente de obra)",
        "advice": "Gerentes de projeto e quantity surveyors entram no Tier 1; trades como eletricista e encanador ficam no Tier 2 (Work to Residence apos 2 anos). Eletricistas e encanadores precisam de licenca/registro neozelandes para exercer. E um dos setores com maior crescimento projetado."
      },
      {
        "area": "Educacao",
        "advice": "Professores de educacao infantil e educacao especial estao na Green List (Tier 2). Exige registro na Teaching Council of Aotearoa New Zealand e comprovacao de ingles. Demanda real, especialmente em educacao infantil."
      },
      {
        "area": "Empreendedor e investidor",
        "advice": "Para quem quer abrir ou comprar negocio, o Business Investor Work Visa (aberto desde 24 de novembro de 2025) exige investimento minimo de 1 milhao de dolares neozelandeses em negocio estabelecido mais 500 mil de fundos de subsistencia. Para grandes investidores, o Active Investor Plus Visa parte de 5 milhoes (categoria Growth, 3 anos) ou 10 milhoes (categoria Balanced, 5 anos)."
      },
      {
        "area": "Sem qualificacao alinhada / baixa qualificacao",
        "advice": "Mercado morno e competitivo, com subutilizacao de 12,9 por cento e desemprego juvenil elevado. O caminho mais viavel costuma ser o Accredited Employer Work Visa com oferta de emprego de empregador credenciado, ou vistos de working holiday para trabalho sazonal. Recomenda-se requalificar para uma area da Green List antes de migrar com objetivo de residencia."
      }
    ],
    "salaries": [
      {
        "role": "Ganho medio por hora (todos os setores, economia)",
        "range": "NZD 44,12/hora (alta de 3,1% no ano)",
        "source": {
          "label": "Stats NZ - Labour market statistics: March 2026 quarter",
          "url": "https://www.stats.govt.nz/information-releases/labour-market-statistics-march-2026-quarter/",
          "official": true
        }
      },
      {
        "role": "Salario semanal medio (equivalente a tempo integral, com horas extras)",
        "range": "NZD 1.716/semana (alta de 3,0% no ano)",
        "source": {
          "label": "Stats NZ - Labour market statistics: March 2026 quarter",
          "url": "https://www.stats.govt.nz/information-releases/labour-market-statistics-march-2026-quarter/",
          "official": true
        }
      },
      {
        "role": "Salario mediano usado pela imigracao",
        "range": "NZD 35,00/hora (a partir de 9 de marco de 2026)",
        "source": {
          "label": "Immigration New Zealand - Wage rate requirements for work visas",
          "url": "https://www.immigration.govt.nz/work/requirements-for-work-visas/wage-rates-for-work-visas/",
          "official": true
        }
      },
      {
        "role": "Enfermeiro(a) registrado(a)",
        "range": "NZD 75.000 a 106.000+/ano (estimativa de mercado, da entrada a nivel senior)"
      },
      {
        "role": "Engenheiro(a) de software",
        "range": "NZD 100.000 a 163.000/ano (estimativa de mercado)"
      },
      {
        "role": "Eletricista (senior, projetos comerciais)",
        "range": "NZD 90.000 a 110.000/ano (estimativa de mercado)"
      }
    ],
    "foreignerRules": "Para trabalhar legalmente, o estrangeiro precisa de visto de trabalho. A principal porta de entrada e o Accredited Employer Work Visa (AEWV): exige oferta de emprego de pelo menos 30 horas semanais de um empregador credenciado pela Immigration NZ, salario no minimo igual a taxa de mercado do cargo (market rate) e acima do salario minimo adulto, mais 2 anos ou mais de experiencia relevante OU qualificacao de nivel 4 ou superior no quadro neozelandes. O requisito de salario mediano foi removido do AEWV em 10 de marco de 2025. A estadia continua maxima e de 5 anos para ocupacoes de niveis de habilidade 1 a 3 e de 3 anos para niveis 4 ou 5. A residencia por habilidades ocorre principalmente pela Green List: ocupacoes Tier 1 dao direito ao Straight to Residence Visa (residencia imediata) e ocupacoes Tier 2 ao Work to Residence Visa (apos 2 anos de trabalho qualificado). O salario mediano de referencia para residencia subiu para 35,00 dolares por hora em 9 de marco de 2026, e o requerente deve ter 55 anos ou menos na data do pedido de residencia. Para incluir parceiro/dependentes via AEWV, o cargo de nivel 1 a 3 exige pagamento de pelo menos 28,00 dolares por hora e o de nivel 4 ou 5 exige 52,50 dolares por hora (a partir de 9 de marco de 2026). PROFISSOES REGULAMENTADAS: varias ocupacoes exigem registro/licenca neozelandes obrigatorio antes de exercer, entre elas enfermeiros (Nursing Council of New Zealand), medicos (Medical Council of New Zealand), professores (Teaching Council of Aotearoa New Zealand), eletricistas e encanadores (conselhos de registro de trade) e engenheiros que buscam status Chartered (Engineering New Zealand). A Immigration NZ orienta verificar se a profissao exige registro ocupacional e validar as qualificacoes antes de migrar. EMPREENDER: o Business Investor Work Visa (aberto desde 24 de novembro de 2025) pede investimento minimo de 1 milhao de dolares neozelandeses em negocio estabelecido (via de 3 anos para residencia) ou 2 milhoes (via rapida apos 12 meses), mais 500 mil de fundos de subsistencia, idade de 55 anos ou menos, ingles, saude e idoneidade; para residencia, e preciso manter ao menos 5 empregos equivalentes a tempo integral e criar pelo menos 1 vaga nova. Grandes investidores usam o Active Investor Plus Visa, a partir de 5 milhoes (categoria Growth, 3 anos) ou 10 milhoes (categoria Balanced, 5 anos).",
    "opportunityWindows": [
      "Salario mediano da imigracao fixado em NZD 35,00/hora desde 9 de marco de 2026, definindo o patamar para residencia qualificada e vistos de dependentes",
      "Business Investor Work Visa aberto desde 24 de novembro de 2025, criando nova rota de residencia para quem compra ou expande negocio estabelecido a partir de NZD 1 milhao",
      "A partir de 1 de junho de 2026, requerentes da categoria Growth do Active Investor Plus podem alocar ate 20 por cento do investimento em contribuicoes filantropicas",
      "Escassez cronica e estrutural de enfermeiros e profissionais de saude mantida como prioridade de governo, com a maioria das vagas no Tier 1 (residencia direta)",
      "Construcao e infraestrutura projetadas pelo MBIE como setor de forte crescimento de emprego no medio prazo",
      "Inflacao salarial em desaceleracao (indice de custo do trabalho a 2,0 por cento) pode reduzir a barreira de market rate para empregadores contratarem estrangeiros"
    ],
    "jobBoards": [
      {
        "label": "NZ Government Jobs (jobs.govt.nz) - vagas no servico publico",
        "url": "https://jobs.govt.nz/",
        "official": true
      },
      {
        "label": "Kimi Mahi Mai / Find a Job - Work and Income (MSD)",
        "url": "https://findajob.msd.govt.nz/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Finding work in New Zealand (alertas de vagas por profissao)",
        "url": "https://www.immigration.govt.nz/work/finding-work-in-new-zealand/",
        "official": true
      },
      {
        "label": "Jobs at MBIE (Ministry of Business, Innovation and Employment)",
        "url": "https://jobs.mbie.govt.nz/",
        "official": true
      },
      {
        "label": "SEEK New Zealand (principal portal privado de empregos)",
        "url": "https://nz.seek.com/",
        "official": false
      },
      {
        "label": "Trade Me Jobs (portal privado amplamente usado)",
        "url": "https://www.trademe.co.nz/a/jobs",
        "official": false
      }
    ],
    "sources": [
      {
        "label": "Stats NZ - Labour market statistics: March 2026 quarter",
        "url": "https://www.stats.govt.nz/information-releases/labour-market-statistics-march-2026-quarter/",
        "official": true
      },
      {
        "label": "Stats NZ - Unemployment rate at 5.3 percent in the March 2026 quarter",
        "url": "https://www.stats.govt.nz/news/unemployment-rate-at-5-3-percent-in-the-march-2026-quarter/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Green List roles, jobs we need people for",
        "url": "https://www.immigration.govt.nz/work/requirements-for-work-visas/green-list-occupations-qualifications-and-skills/green-list-roles-jobs-we-need-people-for-in-new-zealand/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Green List pathway to residence",
        "url": "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/green-list-pathway-to-residence/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Wage rate requirements for work visas",
        "url": "https://www.immigration.govt.nz/work/requirements-for-work-visas/wage-rates-for-work-visas/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Accredited Employer Work Visa",
        "url": "https://www.immigration.govt.nz/visas/accredited-employer-work-visa/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - New Business Investor Work Visa is now open",
        "url": "https://www.immigration.govt.nz/about-us/news-centre/new-business-investor-work-visa-is-now-open/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Active Investor Plus Visa overview",
        "url": "https://www.immigration.govt.nz/about-us/news-centre/investor-category/",
        "official": true
      },
      {
        "label": "Immigration New Zealand - Finding work in New Zealand",
        "url": "https://www.immigration.govt.nz/work/finding-work-in-new-zealand/",
        "official": true
      },
      {
        "label": "MBIE - Medium to long-term employment outlook: Looking ahead to 2028",
        "url": "https://www.mbie.govt.nz/business-and-employment/employment-and-skills/labour-market-reports-data-and-analysis/archives/labour-market-forecasting/medium-to-long-term-employment-outlook-looking-ahead-to-2028",
        "official": true
      }
    ]
  },
  "jp": {
    "updatedAt": "2026-06-22",
    "overview": "O Japao vive uma escassez estrutural de mao de obra movida pelo envelhecimento e pela queda populacional, o que abriu as portas como nunca para trabalhadores estrangeiros. A taxa de desemprego ficou em torno de 2,5% ao longo de 2025 e inicio de 2026, e o numero de empregados atingiu recorde de 68,28 milhoes em 2025, o quinto ano consecutivo de alta. A razao de vagas por candidato (yukyu kyujin bairitsu), indicador central do Ministerio da Saude, Trabalho e Bem-Estar (MHLW), girou perto de 1,2 vaga por candidato no fim de 2025, mas mascara contrastes severos: setores tecnicos como construcao chegam a mais de 6 vagas por candidato e cuidados a idosos a 3,5, enquanto funcoes administrativas e de escritorio seguem com excesso de candidatos (razao abaixo de 0,5). Para o estrangeiro, o pais oferece tres grandes portas: o visto Especialista em Engenharia/Humanas/Servicos Internacionais para profissionais de colarinho branco com diploma, o programa Specified Skilled Worker (SSW) para 19 setores com falta aguda de mao de obra, e o visto Highly Skilled Professional com pontuacao que acelera a residencia permanente. Quem quer empreender enfrenta uma barreira recem-elevada: desde outubro de 2025 o visto Business Manager exige capital de 30 milhoes de ienes (antes 5 milhoes). O dominio do japones, ainda que nem sempre obrigatorio por lei, e na pratica o principal divisor de aguas entre uma vaga acessivel e uma carreira de fato.",
    "hotSectors": [
      "Cuidados a idosos e enfermagem assistencial (kaigo), com escassez critica e razao de cerca de 3,5 vagas por candidato",
      "Construcao civil e engenharia de obras, o setor mais aquecido, com mais de 6 vagas por candidato segundo o MHLW",
      "Tecnologia da informacao e desenvolvimento de software, com demanda persistente e salarios entre os mais altos",
      "Manufatura industrial e fabricacao de alimentos e bebidas",
      "Hotelaria e servicos de alimentacao, impulsionados pela retomada do turismo",
      "Transporte rodoviario de cargas e passageiros (motoristas), logistica e armazenagem",
      "Agricultura, pesca, silvicultura e processamento de madeira",
      "Manutencao e reparo de automoveis, construcao naval e industria aeronautica"
    ],
    "coolingSectors": [
      "Funcoes administrativas e de escritorio em geral (jimu), com excesso de candidatos e razao abaixo de 0,5 vaga por candidato",
      "Trabalho clerical e de apoio corporativo de baixa especializacao, onde a concorrencia entre candidatos e alta"
    ],
    "inDemandRoles": [
      {
        "role": "Cuidador de idosos / auxiliar de enfermagem (kaigo)",
        "note": "Uma das maiores filas de vagas; acessivel via SSW com exame de habilidade e teste de japones; progressao possivel ao SSW tipo ii em alguns casos"
      },
      {
        "role": "Engenheiro de software / desenvolvedor / engenheiro de TI",
        "note": "Visto Especialista em Engenharia; diploma na area ou 10 anos de experiencia, ou aprovacao em exame de TI reconhecido pode substituir o diploma"
      },
      {
        "role": "Trabalhador e tecnico de construcao civil",
        "note": "Setor com a maior razao de vagas por candidato; aberto via SSW com via para o tipo ii (sem limite de permanencia)"
      },
      {
        "role": "Operador de manufatura industrial e de alimentos e bebidas",
        "note": "Campos SSW com alta demanda e progressao ao tipo ii na manufatura industrial e em alimentos"
      },
      {
        "role": "Profissional de hotelaria e de servicos de alimentacao",
        "note": "Campo SSW; atencao: novos Certificados de Elegibilidade tipo i no setor de food service foram pausados por volta de abril de 2026 ao atingir o teto de intake"
      },
      {
        "role": "Motorista profissional (caminhao, taxi, onibus) e operador de logistica",
        "note": "Transporte rodoviario e armazenagem entraram recentemente na lista SSW para suprir o deficit de motoristas"
      },
      {
        "role": "Tradutor, interprete e profissional de servicos internacionais",
        "note": "Visto Especialista em Humanas/Servicos Internacionais; valoriza o idioma materno e habilidades interculturais"
      },
      {
        "role": "Pesquisador, professor universitario e executivo",
        "note": "Elegiveis ao Highly Skilled Professional e, no topo, ao J-Skip para acelerar a residencia permanente"
      }
    ],
    "byQualification": [
      {
        "area": "Tecnologia da Informacao e Engenharia de Software",
        "advice": "Caminho mais direto e o visto Especialista em Engenharia/Humanas/Servicos Internacionais. Diploma superior na area abre a porta, mas 10 anos de experiencia ou a aprovacao em exame de TI oficialmente designado podem substituir o diploma. Salarios estao entre os mais altos do pais. Quem tem renda e qualificacao elevadas deve mirar o Highly Skilled Professional para acelerar a residencia permanente."
      },
      {
        "area": "Saude (medicos, enfermeiros, farmaceuticos)",
        "advice": "Profissoes regulamentadas e de alta barreira. Exigem diploma reconhecido como equivalente ao japones e aprovacao no exame nacional de licenca, prestado em japones, com proficiencia avancada. As taxas de aprovacao para estrangeiros sao historicamente baixas. Avalie com cautela e planeje anos de preparacao linguistica."
      },
      {
        "area": "Cuidados a idosos (kaigo)",
        "advice": "Porta de entrada acessivel mesmo sem diploma superior, via SSW (exame de habilidade + teste de japones) ou via formacao no Japao para a licenca de Kaigo Fukushishi. Demanda altissima e crescente. O japones funcional e indispensavel pelo contato direto com pacientes."
      },
      {
        "area": "Engenharia, manufatura e oficios tecnicos",
        "advice": "Para diplomados, o visto Especialista em Engenharia cobre funcoes tecnicas. Para tecnicos sem diploma, os campos SSW de manufatura industrial, construcao, naval, automotivo e aeronautico oferecem entrada com exame de habilidade e progressao ao tipo ii em varios desses campos."
      },
      {
        "area": "Administracao, negocios e empreendedorismo",
        "advice": "Profissionais de colarinho branco usam o visto de Servicos Internacionais ou o Highly Skilled Professional. Quem quer abrir empresa precisa do Business Manager, que desde outubro de 2025 exige 30 milhoes de ienes de capital e ao menos um empregado em tempo integral residente no Japao, alem de diploma de mestrado em area de gestao ou 3 anos de experiencia gerencial. O Startup Visa (ate 2 anos de preparacao) e o J-Find sao alternativas para quem ainda esta estruturando o negocio."
      },
      {
        "area": "Setores de baixa qualificacao e funcoes administrativas",
        "advice": "Funcoes clericais e administrativas tem excesso de candidatos e concorrencia alta, alem de raramente patrocinarem visto. Quem busca esses postos deve redirecionar para os 19 campos SSW, que sao a via legal e demandada para trabalho operacional no Japao."
      }
    ],
    "salaries": [
      {
        "role": "Salario medio anual nacional (todos os setores)",
        "range": "Cerca de 4,78 milhoes de ienes/ano (pesquisa salarial do setor privado da Agencia Nacional Tributaria, set/2025)",
        "source": {
          "label": "National Tax Agency (NTA) - Private-Sector Salary Survey",
          "url": "https://www.nta.go.jp/",
          "official": true
        }
      },
      {
        "role": "Trabalhador em tempo integral (media)",
        "range": "Cerca de 5,0 a 5,4 milhoes de ienes/ano; salario mensal bruto em torno de 311.800 a 336.000 ienes, mais bonus anuais de 1,0 a 1,4 milhao",
        "source": {
          "label": "MHLW - Basic Survey on Wage Structure",
          "url": "https://www.mhlw.go.jp/english/database/db-l/index.html",
          "official": true
        }
      },
      {
        "role": "Engenheiro de software senior (grandes empresas de tecnologia)",
        "range": "Cerca de 10 a 15 milhoes de ienes/ano"
      },
      {
        "role": "Medico (media ocupacional)",
        "range": "Cerca de 10,6 milhoes de ienes/ano"
      },
      {
        "role": "Setor mais bem pago (eletricidade, gas e agua)",
        "range": "Cerca de 8,32 milhoes de ienes/ano",
        "source": {
          "label": "National Tax Agency (NTA) - Private-Sector Salary Survey",
          "url": "https://www.nta.go.jp/",
          "official": true
        }
      },
      {
        "role": "Setor de menor remuneracao (hotelaria e alimentacao)",
        "range": "Cerca de 2,79 milhoes de ienes/ano",
        "source": {
          "label": "National Tax Agency (NTA) - Private-Sector Salary Survey",
          "url": "https://www.nta.go.jp/",
          "official": true
        }
      },
      {
        "role": "Specified Skilled Worker (SSW)",
        "range": "Por lei, salario igual ao de trabalhadores japoneses na mesma funcao; varia por setor e regiao",
        "source": {
          "label": "Immigration Services Agency - SSW Program",
          "url": "https://www.ssw.go.jp/en/about/visa/",
          "official": true
        }
      }
    ],
    "foreignerRules": "Trabalhar no Japao exige um status de residencia (visto) compativel com a atividade. As principais vias sao: (1) Especialista em Engenharia/Humanas/Servicos Internacionais, o visto de colarinho branco mais comum, que exige diploma na area correspondente, conclusao de curso tecnico no Japao, ou 10 anos de experiencia relevante; para alguns empregadores de categoria menor, a partir de 15 de abril de 2026 passa a ser exigido JLPT N2 em funcoes de atendimento ao publico. (2) Specified Skilled Worker (SSW), para 19 setores com escassez aguda; o tipo i permite ate 5 anos sem familia e o tipo ii (disponivel em 11 setores, voltado a cargos de gestao) nao tem limite de permanencia e permite trazer familia; ambos exigem exame de habilidade e teste de japones. Atencao: o intake de novos Certificados de Elegibilidade tipo i no setor de food service foi pausado por volta de abril de 2026. (3) Highly Skilled Professional, com sistema de pontos: 70+ pontos por 3 anos permitem residencia permanente em 3 anos, e 80+ por 1 ano em apenas 1 ano; renda anual abaixo de 3 milhoes de ienes desqualifica nas categorias de empresa/gestao. (4) J-Skip (renda de 20 milhoes de ienes/ano com mestrado ou 10 anos de experiencia; 40 milhoes para gestores) e J-Find (graduados das 100 melhores universidades dos rankings QS/THE/Shanghai, ate 2 anos para buscar emprego ou empreender). Profissoes regulamentadas exigem licenca nacional japonesa: medico, enfermeiro, farmaceutico e advogado precisam de diploma reconhecido e aprovacao em exame nacional prestado em japones. Advogados estrangeiros podem atuar como Foreign Law Business Attorney (gaikokuho jimu bengoshi) mediante registro, sem advogar lei japonesa. Empreender exige o Business Manager: desde 16 de outubro de 2025 o capital minimo subiu de 5 para 30 milhoes de ienes, com pelo menos um empregado em tempo integral residente no Japao e diploma de mestrado em gestao ou 3 anos de experiencia gerencial; ha periodo de transicao de 3 anos (ate out/2028) para quem ja tinha o status.",
    "opportunityWindows": [
      "Escassez estrutural permanente: 51,6% das empresas relatam falta de empregados regulares por quatro anos consecutivos, e falencias por falta de mao de obra batem recordes, pressionando por mais contratacao de estrangeiros",
      "Expansao recente do SSW para 19 setores, incluindo transporte rodoviario, ferrovias, logistica/armazenagem e silvicultura, abrindo novas funcoes operacionais",
      "Relaxamento de 2025 no sistema de pontos do Highly Skilled Professional, facilitando atingir 70 pontos e a residencia permanente acelerada",
      "Programas J-Skip e J-Find (desde 2023) e expansao nacional do Startup Visa para talentos de alto nivel e graduados de universidades de elite",
      "Janela de transicao do Business Manager: quem ja tinha o status antes de out/2025 tem ate out/2028 para se adequar ao novo capital de 30 milhoes de ienes",
      "Retomada do turismo aquecendo hotelaria e alimentacao, embora o intake SSW de food service tenha sido pausado em abr/2026 por atingir o teto"
    ],
    "jobBoards": [
      {
        "label": "Hello Work - Servico publico de emprego do MHLW (centros para estrangeiros em Toquio, Shinjuku e outras cidades)",
        "url": "https://www.hellowork.mhlw.go.jp/",
        "official": true
      },
      {
        "label": "Support Website for the Specified Skilled Worker Program - Immigration Services Agency (job-matching SSW)",
        "url": "https://www.ssw.go.jp/en/",
        "official": true
      },
      {
        "label": "JP-MIRAI Portal - plataforma de apoio a trabalhadores estrangeiros (info de trabalho e direitos)",
        "url": "https://portal.jp-mirai.org/en",
        "official": true
      },
      {
        "label": "MHLW - Japao busca Specified Skilled Workers (via Ministerio das Relacoes Exteriores)",
        "url": "https://www.mofa.go.jp/mofaj/ca/fna/ssw/us/",
        "official": true
      }
    ],
    "sources": [
      {
        "label": "Immigration Services Agency of Japan - Support Website for the Specified Skilled Worker Program",
        "url": "https://www.ssw.go.jp/en/about/visa/",
        "official": true
      },
      {
        "label": "Ministry of Foreign Affairs of Japan - Japan is looking for Specified Skilled Workers",
        "url": "https://www.mofa.go.jp/mofaj/ca/fna/ssw/us/",
        "official": true
      },
      {
        "label": "MHLW - Labour Statistics database (Basic Survey on Wage Structure, employment situation)",
        "url": "https://www.mhlw.go.jp/english/database/db-l/index.html",
        "official": true
      },
      {
        "label": "Statistics Bureau of Japan - Labour Force Survey (taxa de desemprego, empregados)",
        "url": "https://www.stat.go.jp/english/data/roudou/index.html",
        "official": true
      },
      {
        "label": "MHLW - Job openings-to-applicants ratio (via JILPT)",
        "url": "https://www.jil.go.jp/english/estatis/eshuyo/e0208.html",
        "official": true
      },
      {
        "label": "Ministry of Foreign Affairs of Japan - Highly Skilled Professional visa",
        "url": "https://www.mofa.go.jp/j_info/visit/visa/long/visa16.html",
        "official": true
      },
      {
        "label": "Consulate-General of Japan - J-Skip e J-Find (Immigration Services Agency)",
        "url": "https://www.denver.us.emb-japan.go.jp/itpr_en/jskip-jfind.html",
        "official": true
      },
      {
        "label": "Ministry of Justice / Immigration Services Agency - Initiatives to Accept Foreign Nationals",
        "url": "https://www.moj.go.jp/isa/content/930004452.pdf",
        "official": true
      },
      {
        "label": "Hello Work (MHLW) - servico publico de emprego",
        "url": "https://www.hellowork.mhlw.go.jp/",
        "official": true
      },
      {
        "label": "Morgan Lewis - analise da revisao do Business Manager visa 2025 (capital 30 milhoes de ienes)",
        "url": "https://www.morganlewis.com/pubs/2025/09/japanese-government-to-tighten-requirements-for-business-manager-work-permit",
        "official": false
      },
      {
        "label": "JP-MIRAI Portal - informacoes para trabalhadores estrangeiros",
        "url": "https://portal.jp-mirai.org/en",
        "official": true
      }
    ]
  }
};

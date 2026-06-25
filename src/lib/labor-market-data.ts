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

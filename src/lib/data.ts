import type { Country, InboxAccount, Task, AgendaItem, Reminder, ScheduledAction } from "./types";

// Imagens curadas via Unsplash CDN — landmarks reais de cada país.
// URLs validadas via curl em 2026-05-21. Fallback no componente CountryBenchmark
// renderiza emoji bandeira gigante se algum 404 acontecer no futuro.
// Fallback estável: Picsum determinístico por seed (sempre carrega, sem 404).

export const COUNTRIES: Country[] = [
  // ===== AMÉRICA =====
  { code:"ca", name:"Canadá", coords:[56.13,-106.35], status:"crit", changes:5, authority:"IRCC", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc5%2FMoraine_Lake_17092005.jpg&w=1200&q=80&output=jpg", summary:"Canadá lidera 2026 com Express Entry mais agressivo da década. CRS cutoff em 481 (+12 pts vs trimestre anterior), tech-PNP Ontario reabrindo com 2.500 vagas. Tendência: priorização tech + saúde, queda de oportunidades em ocupações genéricas.", events:[
    {title:"Express Entry — CRS cutoff sobe pra 481 (+12 pts)", desc:"IRCC anunciou critério revisado pra rota Q1. Programa Tech-PNP Ontario abre 03/jun com 2.500 vagas previstas. Especialistas projetam +15% de convites pra categoria tech.", src:"IRCC · CIC News", time:"há 14h"},
    {title:"PNP Ontario Tech — stream aberto 03/jun", desc:"Ontario Provincial Nominee Program abre nova janela de aplicação. 2.500 vagas previstas. Pontuação mínima estimada em 437.", src:"Ontario PNP", time:"há 18h"},
    {title:"Novo CRS Express em vigor 01/jul/2026", desc:"Cutoff revisado entra em vigor com regras de prioridade pra Tech e Healthcare.", src:"IRCC", time:"agendado"}
  ]},
  { code:"us", name:"Estados Unidos", coords:[37.09,-95.71], status:"warn", changes:3, authority:"USCIS", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F89%2FFront_view_of_Statue_of_Liberty_%2528cropped%2529.jpg&w=1200&q=80&output=jpg", summary:"EUA com cenário misto pra 2026: H1B mantém cap de 85k mas wage-based selection penaliza candidatos jovens. EB-5 sob revisão pode alterar threshold de investimento. OPT extension pra STEM em consulta pública.", events:[
    {title:"H1B Lottery 2026 — anúncio oficial 15/jun", desc:"USCIS confirma janela de registro e nova regra de wage-based selection. Cap de 85 mil mantido. Empresas tech dominam picks nos últimos ciclos.", src:"USCIS", time:"ontem"},
    {title:"OPT extension review", desc:"DHS revisa duração de Optional Practical Training pra STEM. Decisão prevista pra julho.", src:"DHS", time:"-3d"},
    {title:"EB-5 mudanças regulatórias", desc:"Investment threshold sob revisão. Decisão pode afetar candidatos atuais.", src:"USCIS", time:"-5d"}
  ]},
  { code:"br", name:"Brasil", coords:[-14.24,-51.92], status:"stable", changes:2, authority:"Polícia Federal", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4f%2FChrist_the_Redeemer_-_Cristo_Redentor.jpg&w=1200&q=80&output=jpg", summary:"Brasil ganha tração como hub de tech latino. Visto Tech fast-track + naturalização digital criam ambiente competitivo. PF moderniza fluxos via gov.br/pf. Foco em retenção de talentos de IA e fintech.", events:[
    {title:"Visto Tech Brasil — fast-track pra IA e fintech", desc:"Polícia Federal lança visto especial pra profissionais em IA e fintech. Análise em 30 dias úteis, dispensa contrato CLT pra elegíveis.", src:"Polícia Federal · gov.br", time:"-2d"},
    {title:"Naturalização digital pra residentes 4+ anos", desc:"Processo agora 100% online via gov.br/pf. Tempo médio cai pra 6 meses (era 14).", src:"Polícia Federal", time:"-5d"}
  ]},

  // ===== EUROPA =====
  { code:"pt", name:"Portugal", coords:[39.39,-8.22], status:"stable", changes:3, authority:"AIMA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F65%2FTorre_Bel%25C3%25A9m_April_2009-4a.jpg&w=1200&q=80&output=jpg", summary:"Portugal segue como porta de entrada favorita do Brasil pra UE, mas taxas D7/D8 sobem pra €500 em jul/2026. Golden Visa restrito a Madeira/Açores. Tech Visa renovado até 2028 — caminho mais previsível pra profissionais qualificados.", events:[
    {title:"D7 Visa — nova taxa €500 a partir de 15/jul", desc:"AIMA publica reajuste no Diário da República para vistos D7 e D8. Aplicações já em curso preservam a taxa anterior. Visto D8 (nômades digitais) também afetado.", src:"AIMA · DRE", time:"há 10h"},
    {title:"Tech Visa renovado por mais 2 anos", desc:"Programa de visto pra profissionais qualificados em tech ampliado até 2028.", src:"AICEP", time:"-2d"},
    {title:"Golden Visa lista atualizada", desc:"Apenas Madeira e Açores mantêm opções de investimento elegíveis.", src:"AIMA", time:"-1w"}
  ]},
  { code:"es", name:"Espanha", coords:[40.46,-3.74], status:"stable", changes:1, authority:"Extranjería", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F78%2FSF_maig_2026.jpg&w=1200&q=80&output=jpg", summary:"Espanha amplia Arraigo Familiar com flexibilização de comprovação digital. Política migratória estável, com foco em reagrupamento familiar e regularização de longa data.", events:[
    {title:"Arraigo Familiar amplia critérios", desc:"Reagrupamento familiar agora aceita comprovação por meios digitais. Vigência imediata.", src:"Ministerio Interior", time:"-4d"}
  ]},
  { code:"uk", name:"Reino Unido", coords:[55.37,-3.43], status:"warn", changes:2, authority:"Home Office", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F59%2FTower_Bridge_at_Dawn.jpg&w=1200&q=80&output=jpg", summary:"Reino Unido mantém Graduate Visa de 2 anos após pressão universitária. Skilled Worker salary threshold sob ajuste pra outubro/2026. Pós-Brexit: ainda atrai talentos tech mas processos mais lentos.", events:[
    {title:"Graduate Visa — duração de 2 anos mantida", desc:"Home Office reverte proposta de redução pra 18 meses após pressão de universidades. Acordo vale até 2028. Pós-graduandos PhD mantêm 3 anos.", src:"Home Office · GOV.UK", time:"-3d"},
    {title:"Skilled Worker salary threshold revisado", desc:"Salário mínimo pra Skilled Worker Visa será ajustado pra inflação em outubro.", src:"Home Office", time:"-5d"}
  ]},
  { code:"de", name:"Alemanha", coords:[51.16,10.45], status:"stable", changes:2, authority:"BAMF", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff8%2FSchloss_Neuschwanstein_2013.jpg&w=1200&q=80&output=jpg", summary:"Alemanha facilita Chancenkarte (pontuação mínima cai pra 6) e baixa threshold da Blue Card EU pra €45.300/ano. Tendência clara: atrair tech, saúde e engenharia pra suprir escassez de mão-de-obra qualificada.", events:[
    {title:"Chancenkarte — ampliação 2026", desc:"Pontuação reduzida pra 6 pts mínimo. Idioma alemão perde peso no scoring, experiência profissional ganha mais relevância. Vigência imediata.", src:"BMI · Bundesregierung", time:"-2d"},
    {title:"Blue Card EU — salary threshold reduzido", desc:"Limite mínimo cai pra €45.300/ano (era €56.400). Impacta profissões em escassez.", src:"BAMF", time:"-1w"}
  ]},
  { code:"fr", name:"França", coords:[46.22,2.21], status:"stable", changes:1, authority:"DGEF", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F85%2FTour_Eiffel_Wikimedia_Commons_%2528cropped%2529.jpg&w=1200&q=80&output=jpg", summary:"França simplifica Passeport Talent via portal único online. Tempo médio de análise cai pra 60 dias. Cenário estável, com foco em atrair pesquisadores, empreendedores e profissionais de alto valor.", events:[
    {title:"Passeport Talent simplificado", desc:"Procedimento online consolidado em portal único. Tempo médio de análise cai pra 60 dias.", src:"DGEF · France Visas", time:"-3d"}
  ]},
  { code:"it", name:"Itália", coords:[41.87,12.56], status:"warn", changes:2, authority:"MAECI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fde%2FColosseo_2020.jpg&w=1200&q=80&output=jpg", summary:"Itália anuncia Decreto Flussi 2026 com 165k vagas — distribuição preferencial pra Brasil e Argentina. Visto Investidor sobe pra €2M em bonds. Janela de registro 22/jun: prepare-se pra alta demanda.", events:[
    {title:"Decreto Flussi 2026 — quotas anunciadas", desc:"Janela 22/jun pra registro. 165k vagas previstas, distribuição preferencial pra Brasil e Argentina.", src:"MAECI", time:"agendado"},
    {title:"Visto Investidor — threshold atualizado", desc:"Investimento mínimo em bonds governamentais sobe pra €2M.", src:"MAE", time:"-4d"}
  ]},
  { code:"dk", name:"Dinamarca", coords:[56.26,9.50], status:"stable", changes:2, authority:"SIRI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fad%2FThe_Nyhavn_Canal_3.jpg&w=1200&q=80&output=jpg", summary:"Dinamarca segue altamente seletiva mas eficiente. Positive List ampliada e Startup Denmark com limiar reduzido (€40k) — sinal claro de busca por talento qualificado em verticais estratégicas.", events:[
    {title:"Positive List 2026 atualizada — +37 profissões", desc:"SIRI atualiza lista de ocupações com escassez. Fast-track pra TI, engenharia e saúde mantido. Resposta em até 30 dias.", src:"SIRI · nyidanmark.dk", time:"-3d"},
    {title:"Startup Denmark — limiar reduzido pra €40k", desc:"Investimento mínimo cai. Foco em fundadores tech e green tech. Painel de avaliação inclui scaleups internacionais.", src:"SIRI", time:"-1w"}
  ]},
  { code:"pl", name:"Polônia", coords:[51.92,19.13], status:"stable", changes:2, authority:"UDSC", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F87%2FWawel_%25284%2529.jpg&w=1200&q=80&output=jpg", summary:"Polônia se posiciona como porta de entrada UE de baixo custo. Blue Card threshold competitivo + Karta Polaka acelerada — atraindo IT da Ucrânia, Belarus e tech globais.", events:[
    {title:"Karta Polaka acelera caminho pra UE", desc:"Documento agora dá direito a permanência imediata + naturalização em 1 ano. Foco em descendentes poloneses.", src:"UDSC · gov.pl", time:"-2d"},
    {title:"Blue Card PL — threshold de €27k mantido", desc:"UDSC confirma salário mínimo competitivo, atraindo IT da Ucrânia, Belarus e devs globais.", src:"UDSC", time:"-1w"}
  ]},
  { code:"ie", name:"Irlanda", coords:[53.41,-8.24], status:"stable", changes:2, authority:"Irish Immigration", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd1%2FCliffs-Of-Moher-OBriens-From-South.JPG&w=1200&q=80&output=jpg", summary:"Irlanda mantém perfil de hub tech global. Critical Skills Permit expandido + Stamp 4 family reunification simplificado. Department of Justice processa 90% dos casos em 90 dias.", events:[
    {title:"Critical Skills Permit — lista revisada · 41 profissões", desc:"Department of Justice adiciona AI engineers, climate scientists e especialistas em geriatria. Salário mínimo €38k.", src:"Irish Immigration · DoJ", time:"-2d"},
    {title:"Stamp 4 family reunification simplificado", desc:"Comprovação digital aceita. Processamento médio cai pra 90 dias.", src:"Irish Immigration", time:"-5d"}
  ]},
  { code:"ch", name:"Suíça", coords:[46.82,8.23], status:"stable", changes:2, authority:"SEM", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F60%2FMatterhorn_from_Domh%25C3%25BCtte_-_2.jpg&w=1200&q=80&output=jpg", summary:"Suíça expande quotas pra UE/EFTA (+12%) e non-EU (8.500 → 12.000). SEM sinaliza priorização clara: fintech, farma, hightech. Salários líquidos seguem entre os mais altos da Europa.", events:[
    {title:"Permis B — quota UE/EFTA ampliada em 12%", desc:"Federal Council confirma quotas anuais expandidas. Foco em fintech, farma e healthtech. Vigência 01/jul/2026.", src:"SEM · admin.ch", time:"-3d"},
    {title:"Highly skilled non-EU/EFTA — cap pra 12.000", desc:"SEM amplia cota anual de 8.500 pra 12.000 vistos. Brasil pode receber até 850 indicações em 2026.", src:"SEM", time:"-1w"}
  ]},
  // ===== EUROPA — completando os 29 (UE + UK + Suíça) =====
  { code:"at", name:"Áustria", coords:[47.52,14.55], status:"stable", changes:2, authority:"BMI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb0%2FHallstatt_-_Zentrum_.JPG&w=1200&q=80&output=jpg", summary:"Áustria mantém Red-White-Red Card como porta principal pra qualificados. Pontuação por idade/experiência/idioma. Setor tech e saúde têm via expressa via Skilled Workers in Shortage Occupations.", events:[
    {title:"Red-White-Red Card — pontuação revisada", desc:"BMI baixa pontuação mínima de 70 pra 65 pontos em ocupações em escassez. Engenheiros de software e geriatria têm path acelerado.", src:"BMI · migration.gv.at", time:"-3d"},
    {title:"Skilled Workers in Shortage Occupations — 47 profissões", desc:"Lista de escassez atualizada. Salário mínimo €31.500/ano (era €34.000).", src:"BMI", time:"-1w"}
  ]},
  { code:"be", name:"Bélgica", coords:[50.50,4.47], status:"stable", changes:1, authority:"Office des Étrangers", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F26%2FGrand-Place%252C_Brussels_-_panorama%252C_June_2018.jpg&w=1200&q=80&output=jpg", summary:"Bélgica simplifica Single Permit pra estrangeiros não-UE. Procedimento agora 100% digital via portal único. Tempo médio cai pra 4 meses.", events:[
    {title:"Single Permit — portal digital unificado", desc:"DOFI lança plataforma única online integrando todas as 3 regiões (Flandres, Valônia, Bruxelas). Processamento médio 4 meses.", src:"DOFI · ibz.be", time:"-4d"}
  ]},
  { code:"bg", name:"Bulgária", coords:[42.73,25.49], status:"stable", changes:1, authority:"MVR", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc0%2FCatedral_de_Alejandro_Nevski_--_2019_--_Sof%25C3%25ADa%252C_Bulgaria.jpg&w=1200&q=80&output=jpg", summary:"Bulgária amplia visto de longa permanência D pra remote workers. Schengen completo desde 2025 — atrai nômades digitais com custo de vida baixo.", events:[
    {title:"Visa D — categoria 'remote work' formalizada", desc:"MVR adiciona subcategoria pra trabalhadores remotos com renda comprovada de €3.500+/mês. Permanência inicial 12 meses, renovável.", src:"MVR · gov.bg", time:"-5d"}
  ]},
  { code:"cy", name:"Chipre", coords:[35.13,33.43], status:"stable", changes:1, authority:"CRMD", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9a%2FRoca_de_Afrodita%252C_Chipre%252C_2021-12-10%252C_DD_65.jpg&w=1200&q=80&output=jpg", summary:"Chipre mantém regime de tax-friendly residency pra non-doms. Permanent Residency via investimento imobiliário €300k+ continua ativo. Hub atrativo pra finanças e tech.", events:[
    {title:"Digital Nomad Visa — extensão pra 3 anos", desc:"CRMD amplia duração inicial do Digital Nomad Visa pra 36 meses. Renda mínima €3.500/mês mantida.", src:"CRMD · moi.gov.cy", time:"-1w"}
  ]},
  { code:"hr", name:"Croácia", coords:[45.10,15.20], status:"stable", changes:2, authority:"MUP", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F67%2FThe_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg&w=1200&q=80&output=jpg", summary:"Croácia consolidada no Schengen + zona Euro desde 2023. Digital Nomad Permit popular entre brasileiros. Custo de vida competitivo na UE.", events:[
    {title:"Digital Nomad Permit — extensão pra 18 meses", desc:"MUP estende permissão inicial de 12 pra 18 meses, com possibilidade de mais 18. Renda mínima €2.870/mês.", src:"MUP · mup.gov.hr", time:"-3d"},
    {title:"Work Permit — quotas 2026 anunciadas", desc:"Governo croata aprovou 207.500 vagas pra trabalhadores estrangeiros em 2026 (era 178k em 2025).", src:"MUP", time:"-2w"}
  ]},
  { code:"sk", name:"Eslováquia", coords:[48.67,19.70], status:"stable", changes:1, authority:"MV SR", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb4%2FBratislava_-_Burg_%2528b%2529.JPG&w=1200&q=80&output=jpg", summary:"Eslováquia mantém Single Permit padrão UE. Cenário estável, com leve abertura pra IT skilled workers via parceiros corporativos.", events:[
    {title:"Skilled Worker — fast-track pra IT corporativo", desc:"Ministerstvo Vnútra lança canal expresso pra contratações tech via empresas certificadas. Decisão em 30 dias.", src:"MV SR · minv.sk", time:"-5d"}
  ]},
  { code:"si", name:"Eslovênia", coords:[46.15,14.99], status:"stable", changes:1, authority:"Govt SI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F84%2FLake_Bled_from_the_Mountain.jpg&w=1200&q=80&output=jpg", summary:"Eslovênia abriu Digital Nomad Visa em jan/2025. Schengen + Euro + qualidade de vida alta. Cresce como destino discreto pra remote workers.", events:[
    {title:"Digital Nomad Visa — 1 ano renovável", desc:"Portal gov.si confirma vigência integral. Renda mínima €2.300/mês. Sem direito a trabalhar pra empresa eslovena local.", src:"Govt SI · gov.si", time:"-4d"}
  ]},
  { code:"ee", name:"Estônia", coords:[58.60,25.01], status:"stable", changes:2, authority:"Politsei", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F70%2FRaekoja_plats_at_night.jpg&w=1200&q=80&output=jpg", summary:"Estônia segue como pioneira em e-Residency e Digital Nomad Visa. Setor tech robusto, baixa burocracia. Visa decisions em até 30 dias.", events:[
    {title:"e-Residency atinge 130k membros", desc:"Programa cresceu 18% em 2025. Empreendedores podem abrir e operar empresa UE 100% remoto.", src:"Politsei · e-resident.gov.ee", time:"-1w"},
    {title:"Digital Nomad Visa — quota 2026 ampliada", desc:"Politsei confirma teto anual de 2.500 vistos (era 1.800). Renda mínima €4.500/mês.", src:"Politsei", time:"-3d"}
  ]},
  { code:"fi", name:"Finlândia", coords:[61.92,25.75], status:"stable", changes:2, authority:"Migri", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7d%2FKirkko3.png&w=1200&q=80&output=jpg", summary:"Finlândia lidera Europa em qualidade de vida + sistema de imigração eficiente. Specialist Permit pra tech tem decisão em 14 dias. Migri amplia canais pra healthcare.", events:[
    {title:"Specialist Permit — decisão em 14 dias", desc:"Migri reduz prazo médio de 30 pra 14 dias pra profissionais qualificados (tech, eng, healthcare).", src:"Migri · migri.fi", time:"-2d"},
    {title:"Job Seeker's Residence Permit — 6 meses pra qualificados", desc:"Novo permit pra graduados em ocupações em escassez procurarem emprego direto na Finlândia.", src:"Migri", time:"-1w"}
  ]},
  { code:"gr", name:"Grécia", coords:[39.07,21.82], status:"stable", changes:2, authority:"Min Migration", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbf%2F2011_Dimos_Thiras.png&w=1200&q=80&output=jpg", summary:"Grécia mantém Golden Visa atrativo (threshold €500k em zonas premium). Digital Nomad Visa popular. Renda + clima + Schengen atraem fluxo crescente.", events:[
    {title:"Golden Visa — threshold escalonado por região", desc:"Min Migration confirma €800k em Ática/Tessalônica/ilhas premium, €400k no resto. Vigência 2026.", src:"Min Migration · migration.gov.gr", time:"-3d"},
    {title:"Digital Nomad Visa — renda mínima ajustada", desc:"Critério sobe de €3.500 pra €3.800/mês. Permissão 12 meses + renovação.", src:"Min Migration", time:"-1w"}
  ]},
  { code:"nl", name:"Holanda", coords:[52.13,5.29], status:"warn", changes:2, authority:"IND", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Fff%2FKinderdijkMolens02.jpg&w=1200&q=80&output=jpg", summary:"Holanda em modo de aperto: Highly Skilled Migrant salary threshold sobe pra €5.688/mês (era €5.331). DAFT (US-NL) mantido. Pressão política contra imigração líquida alta.", events:[
    {title:"Highly Skilled Migrant — salary threshold sobe", desc:"IND eleva critério pra €5.688/mês (era €5.331). Recém-graduados mantêm threshold reduzido €4.071/mês.", src:"IND · ind.nl", time:"-2d"},
    {title:"DAFT (Dutch-American Friendship Treaty) — quota mantida", desc:"Acordo bilateral US-NL pra empreendedores americanos mantido apesar de revisão. Investimento mínimo €4.500.", src:"IND", time:"-1w"}
  ]},
  { code:"hu", name:"Hungria", coords:[47.16,19.50], status:"warn", changes:2, authority:"OIF", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F99%2FHungarian_Parliament_Building_from_across_the_Danube%252C_2025-01-11.jpg&w=1200&q=80&output=jpg", summary:"Hungria endurece política migratória sob governo Orbán. Golden Visa relançado em 2024 com threshold €250k. Tensão constante UE × Hungria sobre regras de fronteira.", events:[
    {title:"Guest Investor Program — Golden Visa relançado", desc:"OIF reativa Golden Visa com investimento mínimo €250k em fundo imobiliário aprovado OU €500k em propriedade direta.", src:"OIF · oif.gov.hu", time:"-1w"},
    {title:"White Card — Digital Nomad estendida", desc:"Visa pra remote workers ampliada pra 2 anos. Renda mínima €3.000/mês.", src:"OIF", time:"-3d"}
  ]},
  { code:"lv", name:"Letônia", coords:[56.88,24.60], status:"stable", changes:1, authority:"PMLP", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FRiga_%252833844464828%2529.jpg&w=1200&q=80&output=jpg", summary:"Letônia mantém Temporary Residence Permit via investimento imobiliário €250k+ ou business €50k+. Schengen + Euro + custo competitivo.", events:[
    {title:"Startup Visa — vigência ampliada pra 3 anos", desc:"PMLP estende Startup Visa inicial de 12 pra 36 meses. Programa atraiu 480 startups em 2025.", src:"PMLP · pmlp.gov.lv", time:"-1w"}
  ]},
  { code:"lt", name:"Lituânia", coords:[55.17,23.88], status:"stable", changes:1, authority:"Migration Dept", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa8%2FTrakai_castle_2016.jpg&w=1200&q=80&output=jpg", summary:"Lituânia abre cada vez mais pra tech talents via Startup Visa. Programa atrai fundadores de toda Europa Oriental. Schengen + Euro + ecossistema fintech crescente.", events:[
    {title:"Startup Visa — extensão 3 anos pra Class-A", desc:"Migration Department amplia path pra residência permanente em 3 anos pra Class-A startups (com investimento ou tração validada).", src:"Migration Dept · migracija.lt", time:"-5d"}
  ]},
  { code:"lu", name:"Luxemburgo", coords:[49.82,6.13], status:"stable", changes:1, authority:"Guichet.lu", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fdb%2FLuxembourg_Grand_Ducal_Palace_01.jpg&w=1200&q=80&output=jpg", summary:"Luxemburgo continua hub financeiro com regras pró-talento qualificado. Highly Qualified Worker permit em 3 meses. Centro fiscal preferido pra fundos.", events:[
    {title:"Highly Qualified Worker — salary threshold revisado", desc:"Guichet.lu confirma critério €87.780/ano pra Highly Qualified Worker (era €82.864). Setor financeiro mantém prioridade.", src:"Guichet.lu", time:"-1w"}
  ]},
  { code:"mt", name:"Malta", coords:[35.94,14.38], status:"stable", changes:2, authority:"Identità Malta", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb7%2FSt_Sebastian_Curtain_%2528cropped%2529.jpg&w=1200&q=80&output=jpg", summary:"Malta mantém Malta Permanent Residence Programme (MPRP) ativo. Após reformas UE, requer combinação investimento + propriedade. Hub fintech + iGaming.", events:[
    {title:"MPRP — investimento total mínimo €115k", desc:"Identità Malta confirma estrutura combinada: contribuição governamental €68k + investimento imobiliário €350k mínimo.", src:"Identità Malta · identita.gov.mt", time:"-4d"},
    {title:"Nomad Residence Permit — renda mínima €3.500/mês", desc:"Programa pra remote workers consolidado. Permissão 1 ano renovável até 4 anos.", src:"Identità Malta", time:"-1w"}
  ]},
  { code:"ro", name:"Romênia", coords:[45.94,24.97], status:"stable", changes:2, authority:"IGI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F17%2FCastelul_Bran2.jpg&w=1200&q=80&output=jpg", summary:"Romênia entrou Schengen em mar/2024 — fluxo migratório cresceu. Digital Nomad Visa simples. Custo de vida competitivo + crescimento tech (cluster Bucareste/Cluj).", events:[
    {title:"Digital Nomad Visa — vigência 12 meses renovável", desc:"IGI confirma path estável. Renda mínima €3.700/mês comprovada. Isenção fiscal sobre renda externa por 12 meses.", src:"IGI · igi.mai.gov.ro", time:"-3d"},
    {title:"Long-stay D Visa — categoria tech ampliada", desc:"Lista de ocupações tech elegíveis pra Single Permit ampliada em 28 profissões.", src:"IGI", time:"-1w"}
  ]},
  { code:"se", name:"Suécia", coords:[60.13,18.64], status:"warn", changes:2, authority:"Migrationsverket", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8a%2FGamla_stan_September_2014_01.jpg&w=1200&q=80&output=jpg", summary:"Suécia em modo restritivo desde governo Kristersson. Work Permit salary threshold subiu pra SEK 38.500/mês. Discussão sobre cortes mais profundos no parlamento.", events:[
    {title:"Work Permit — salary threshold SEK 38.500/mês", desc:"Migrationsverket aplica novo critério desde nov/2025. Reduzido pra ocupações em escassez via lista oficial.", src:"Migrationsverket · migrationsverket.se", time:"-2d"},
    {title:"Family Reunification — comprovação financeira reforçada", desc:"Patrocinador agora precisa comprovar SEK 415k/ano (era SEK 339k). Apertou recurso pra reunificação.", src:"Migrationsverket", time:"-1w"}
  ]},
  { code:"cz", name:"Tchéquia", coords:[49.82,15.47], status:"stable", changes:1, authority:"MV ČR", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F22%2FPrague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg&w=1200&q=80&output=jpg", summary:"Tchéquia mantém regime estável. Employee Card via empregador é principal via. Programa Highly Qualified Employee pra tech tem decisão em 30 dias.", events:[
    {title:"Highly Qualified Employee — decisão em 30 dias", desc:"Ministerstvo Vnitra mantém prazo expresso pra tech + healthcare. Lista de ocupações qualificadas inclui 89 profissões.", src:"MV ČR · mvcr.cz", time:"-5d"}
  ]},

  // ===== ÁSIA-PACÍFICO =====
  { code:"au", name:"Austrália", coords:[-25.27,133.77], status:"crit", changes:4, authority:"DHA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa0%2FSydney_Australia._%252821339175489%2529.jpg&w=1200&q=80&output=jpg", summary:"Austrália em modo restritivo: 189 Visa corta 18% das vagas, GTI processing time vai a 6 meses. Working Holiday Visa pra Brasil dobra (2.500 vagas) — única boa notícia. Skilled Occupation List passa por revisão profunda.", events:[
    {title:"189 Visa — vagas reduzidas em 18%", desc:"Department of Home Affairs anuncia corte no skilled migration program. Quotas serão revistas em outubro. Categorias tech e saúde devem manter prioridade.", src:"DHA", time:"há 2h"},
    {title:"Subclass 482 nova lista de ocupações", desc:"Skilled Occupation List atualizada. 76 profissões adicionadas, 23 removidas.", src:"DHA", time:"-1d"},
    {title:"Working Holiday Visa quota Brasil dobra", desc:"2.500 vagas anuais (era 1.250). Programa amplia parceria bilateral.", src:"DHA", time:"-3d"},
    {title:"GTI processing time aumenta pra 6 meses", desc:"Global Talent Independent visa enfrenta backlog. Solicitantes Tech mantêm prioridade.", src:"DHA", time:"-5d"}
  ]},
  { code:"nz", name:"Nova Zelândia", coords:[-40.90,174.89], status:"stable", changes:2, authority:"INZ", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb6%2FMilford_Sound_%2528New_Zealand%2529.JPG&w=1200&q=80&output=jpg", summary:"Nova Zelândia reduz Skilled Migrant Category pra 6 pts mínimo + lança Active Investor Plus Green Stream (NZD 5M). Cenário convidativo pra tech, healthcare e investidores verdes.", events:[
    {title:"Skilled Migrant Category — score reduzido pra 6 pts", desc:"Limiar mais acessível pra atrair tech e healthcare. Categoria 'Green List' mantém fast-track em 6 semanas.", src:"INZ · immigration.govt.nz", time:"-3d"},
    {title:"Active Investor Plus — Green Stream NZD 5M", desc:"Nova categoria pra investimentos em sustentabilidade e infra verde. Path direto pra residência em 4 anos.", src:"INZ", time:"-1w"}
  ]},
  { code:"cn", name:"China", coords:[35.86,104.20], status:"stable", changes:2, authority:"NIA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F23%2FThe_Great_Wall_of_China_at_Jinshanling-edit.jpg&w=1200&q=80&output=jpg", summary:"China abre porta pra elite global com Z Visa permanente e Hainan FTZ visa-free. NIA sinaliza receptividade tech sem precedente — embora exija nível salarial alto e contribuição estratégica.", events:[
    {title:"Z Visa permanente — abertura pra talentos globais", desc:"NIA anuncia path de residência permanente pra Class-A talents. Salário mínimo USD 240k/ano ou patente/publicação relevante.", src:"NIA · nia.gov.cn", time:"-2d"},
    {title:"Hainan FTZ — visa-free expandido pra 54 países", desc:"144h transit visa-free expandido. Hainan ganha regime especial pra entrada de profissionais e investidores.", src:"NIA · State Council", time:"-1w"}
  ]},
  { code:"sg", name:"Singapura", coords:[1.35,103.81], status:"stable", changes:1, authority:"MOM", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc7%2FMarina_Bay_Sands_%2528I%2529.jpg&w=1200&q=80&output=jpg", summary:"Singapura eleva critério do ONE Pass pra SGD 30k/mês — visando elite global. Fast-track pra ciência aplicada mantido. Política seletiva e estável, foco em ultra-qualificados.", events:[
    {title:"ONE Pass — critérios revisados", desc:"Salário mínimo passa pra SGD 30k/mês. Profissionais em ciência aplicada têm fast-track.", src:"MOM", time:"-2d"}
  ]},
  { code:"jp", name:"Japão", coords:[36.20,138.25], status:"stable", changes:1, authority:"ISA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff8%2FView_of_Mount_Fuji_from_%25C5%258Cwakudani_20211202.jpg&w=1200&q=80&output=jpg", summary:"Japão lança track expresso pra Highly-Skilled Professional: PR em 1 ano se atingir 80 pts. Foco em pesquisadores e tech. Sinaliza abertura crescente do mercado tradicionalmente fechado.", events:[
    {title:"Highly-Skilled Professional ganha track expresso", desc:"PR em 1 ano de residência pra quem atingir 80 pts. Categoria atrai foco em pesquisadores e tech.", src:"ISA · moj.go.jp/isa", time:"-2d"}
  ]},

  // ===== ORIENTE MÉDIO =====
  { code:"ae", name:"Emirados Árabes", coords:[23.42,53.84], status:"stable", changes:2, authority:"ICP", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F90%2FBurj_Khalifa_%2528worlds_tallest_building%2529_and_the_Dubai_skyline_%252825781049892%2529.jpg&w=1200&q=80&output=jpg", summary:"Emirados expandem Golden Visa pra engenheiros de IA, pesquisadores climáticos e médicos especialistas. Freelancer Visa Dubai 100% digital com taxa única AED 7.500. Ambiente regulatório altamente favorável a talentos e capital.", events:[
    {title:"Golden Visa amplia profissões elegíveis", desc:"Lista inclui engenheiros de IA, pesquisadores climáticos e médicos especialistas. Vigência imediata.", src:"ICP", time:"-1d"},
    {title:"Freelancer Visa Dubai simplificado", desc:"Processo 100% digital, taxa única AED 7.500.", src:"DET", time:"-1w"}
  ]}
];

export const INBOX_ACCOUNTS: InboxAccount[] = [
  {id:"gmail",   label:"hzfarah.wisehub@gmail.com", icon:"G", cls:"gmail", unread:12, last:"Stripe — Receipt #INV-2841"},
  {id:"adm",     label:"adm@wisehubnow.com",        icon:"A", unread:5,  last:"Solicitação de fatura — Maria Silva"},
  {id:"support", label:"support@wisehubnow.com",    icon:"S", unread:8,  last:"Ticket #4421 — login issue"},
  {id:"sales",   label:"sales@wisehubnow.com",      icon:"$", unread:3,  last:"Lead enterprise — Lisboa"},
  {id:"team",    label:"team@wisehubnow.com",       icon:"T", unread:2,  last:"Sprint review — 13/mai 10h"},
  {id:"hzfarah", label:"hzfarah@wisehubnow.com",    icon:"H", unread:4,  last:"Contrato US LLC — assinatura"},
  {id:"suporte", label:"suporte@wisehubnow.com",    icon:"?", unread:6,  last:"Usuário BR não consegue logar"},
  {id:"contact", label:"contact@wisehubnow.com",    icon:"@", unread:1,  last:"Parceria — Travel Tech LATAM"},
  {id:"info",    label:"info@wisehubnow.com",       icon:"i", unread:7,  last:"Imprensa — Globo News"}
];

export const DEFAULT_TASKS: Task[] = [
  {id:1, text:"Revisar PR Watch Tower #007", done:false},
  {id:2, text:"Confirmar webhook Stripe na Dashboard", done:false},
  {id:3, text:"Responder support@wisehubnow.com — Ticket #4421", done:false},
  {id:4, text:"Atualizar prompt da Mary com novo brand voice", done:true},
  {id:5, text:"Briefing semanal — preparar slides", done:false},
  {id:6, text:"Validar Stripe taxas com contador", done:false}
];

export const DEFAULT_AGENDA: AgendaItem[] = [
  {id:1, time:"09:00", title:"Call equipe WiseHub — semanal", where:"Google Meet"},
  {id:2, time:"10:30", title:"Análise sprint C — Stripe webhook", where:"Solo"},
  {id:3, time:"14:00", title:"Review imigração — pendências D7", where:"WiseHub Watch Tower"},
  {id:4, time:"16:30", title:"1:1 com Fabiano — design system", where:"Zoom"},
  {id:5, time:"18:00", title:"Encerramento semana", where:"Wrap-up"}
];

export const DEFAULT_REMINDERS: Reminder[] = [
  {id:1, text:"Stripe webhook signing secret ainda pendente", when:"Crítico", crit:true},
  {id:2, text:"Atualização Cowork sai 14/mai — testar Live Artifacts", when:"Em 3 dias"},
  {id:3, text:"Renovar API key Manus dia 5/jun", when:"Em 25 dias"},
  {id:4, text:"Backup mensal WiseRank DB — última 03/mai", when:"Esta semana"}
];

export const DEFAULT_SCHEDULED: ScheduledAction[] = [
  {id:1, icon:"🌎", title:"Atualização diária do panorama de imigração", frequency:"Diário · 06:00", nextRun:"Amanhã 06:00", status:"active"},
  {id:2, icon:"✍",  title:"Criação de notícias para postagem", frequency:"Diário · 09:00", nextRun:"Amanhã 09:00", status:"active"},
  {id:3, icon:"⚖",  title:"Verificação de novas leis, regras ou eventos", frequency:"3× por dia · 08/14/20", nextRun:"Hoje 20:00", status:"active"},
  {id:4, icon:"📊", title:"Snapshot semanal — relatório resumo", frequency:"Semanal · seg 07:00", nextRun:"Seg 07:00", status:"active"},
  {id:5, icon:"🔍", title:"Scan de oportunidades — vistos abertos", frequency:"2× por semana", nextRun:"Qua 10:00", status:"active"}
];

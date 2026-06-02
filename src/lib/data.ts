import type { Country, InboxAccount, Task, AgendaItem, Reminder, ScheduledAction } from "./types";

// Imagens curadas via Unsplash CDN â€” landmarks reais de cada paÃ­s.
// URLs validadas via curl em 2026-05-21. Fallback no componente CountryBenchmark
// renderiza emoji bandeira gigante se algum 404 acontecer no futuro.
// Fallback estÃ¡vel: Picsum determinÃ­stico por seed (sempre carrega, sem 404).

export const COUNTRIES: Country[] = [
  // ===== AMÃ‰RICA =====
  { code:"ca", name:"CanadÃ¡", coords:[56.13,-106.35], status:"crit", changes:5, authority:"IRCC", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1200px-Moraine_Lake_17092005.jpg", summary:"CanadÃ¡ lidera 2026 com Express Entry mais agressivo da dÃ©cada. CRS cutoff em 481 (+12 pts vs trimestre anterior), tech-PNP Ontario reabrindo com 2.500 vagas. TendÃªncia: priorizaÃ§Ã£o tech + saÃºde, queda de oportunidades em ocupaÃ§Ãµes genÃ©ricas.", events:[
    {title:"Express Entry â€” CRS cutoff sobe pra 481 (+12 pts)", desc:"IRCC anunciou critÃ©rio revisado pra rota Q1. Programa Tech-PNP Ontario abre 03/jun com 2.500 vagas previstas. Especialistas projetam +15% de convites pra categoria tech.", src:"IRCC Â· CIC News", time:"hÃ¡ 14h"},
    {title:"PNP Ontario Tech â€” stream aberto 03/jun", desc:"Ontario Provincial Nominee Program abre nova janela de aplicaÃ§Ã£o. 2.500 vagas previstas. PontuaÃ§Ã£o mÃ­nima estimada em 437.", src:"Ontario PNP", time:"hÃ¡ 18h"},
    {title:"Novo CRS Express em vigor 01/jul/2026", desc:"Cutoff revisado entra em vigor com regras de prioridade pra Tech e Healthcare.", src:"IRCC", time:"agendado"}
  ]},
  { code:"us", name:"Estados Unidos", coords:[37.09,-95.71], status:"warn", changes:3, authority:"USCIS", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Front_view_of_Statue_of_Liberty_%28cropped%29.jpg/1200px-Front_view_of_Statue_of_Liberty_%28cropped%29.jpg", summary:"EUA com cenÃ¡rio misto pra 2026: H1B mantÃ©m cap de 85k mas wage-based selection penaliza candidatos jovens. EB-5 sob revisÃ£o pode alterar threshold de investimento. OPT extension pra STEM em consulta pÃºblica.", events:[
    {title:"H1B Lottery 2026 â€” anÃºncio oficial 15/jun", desc:"USCIS confirma janela de registro e nova regra de wage-based selection. Cap de 85 mil mantido. Empresas tech dominam picks nos Ãºltimos ciclos.", src:"USCIS", time:"ontem"},
    {title:"OPT extension review", desc:"DHS revisa duraÃ§Ã£o de Optional Practical Training pra STEM. DecisÃ£o prevista pra julho.", src:"DHS", time:"-3d"},
    {title:"EB-5 mudanÃ§as regulatÃ³rias", desc:"Investment threshold sob revisÃ£o. DecisÃ£o pode afetar candidatos atuais.", src:"USCIS", time:"-5d"}
  ]},
  { code:"br", name:"Brasil", coords:[-14.24,-51.92], status:"stable", changes:2, authority:"PolÃ­cia Federal", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/1200px-Christ_the_Redeemer_-_Cristo_Redentor.jpg", summary:"Brasil ganha traÃ§Ã£o como hub de tech latino. Visto Tech fast-track + naturalizaÃ§Ã£o digital criam ambiente competitivo. PF moderniza fluxos via gov.br/pf. Foco em retenÃ§Ã£o de talentos de IA e fintech.", events:[
    {title:"Visto Tech Brasil â€” fast-track pra IA e fintech", desc:"PolÃ­cia Federal lanÃ§a visto especial pra profissionais em IA e fintech. AnÃ¡lise em 30 dias Ãºteis, dispensa contrato CLT pra elegÃ­veis.", src:"PolÃ­cia Federal Â· gov.br", time:"-2d"},
    {title:"NaturalizaÃ§Ã£o digital pra residentes 4+ anos", desc:"Processo agora 100% online via gov.br/pf. Tempo mÃ©dio cai pra 6 meses (era 14).", src:"PolÃ­cia Federal", time:"-5d"}
  ]},

  // ===== EUROPA =====
  { code:"pt", name:"Portugal", coords:[39.39,-8.22], status:"stable", changes:3, authority:"AIMA", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Torre_Bel%C3%A9m_April_2009-4a.jpg/1200px-Torre_Bel%C3%A9m_April_2009-4a.jpg", summary:"Portugal segue como porta de entrada favorita do Brasil pra UE, mas taxas D7/D8 sobem pra â‚¬500 em jul/2026. Golden Visa restrito a Madeira/AÃ§ores. Tech Visa renovado atÃ© 2028 â€” caminho mais previsÃ­vel pra profissionais qualificados.", events:[
    {title:"D7 Visa â€” nova taxa â‚¬500 a partir de 15/jul", desc:"AIMA publica reajuste no DiÃ¡rio da RepÃºblica para vistos D7 e D8. AplicaÃ§Ãµes jÃ¡ em curso preservam a taxa anterior. Visto D8 (nÃ´mades digitais) tambÃ©m afetado.", src:"AIMA Â· DRE", time:"hÃ¡ 10h"},
    {title:"Tech Visa renovado por mais 2 anos", desc:"Programa de visto pra profissionais qualificados em tech ampliado atÃ© 2028.", src:"AICEP", time:"-2d"},
    {title:"Golden Visa lista atualizada", desc:"Apenas Madeira e AÃ§ores mantÃªm opÃ§Ãµes de investimento elegÃ­veis.", src:"AIMA", time:"-1w"}
  ]},
  { code:"es", name:"Espanha", coords:[40.46,-3.74], status:"stable", changes:1, authority:"ExtranjerÃ­a", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/SF_maig_2026.jpg/1200px-SF_maig_2026.jpg", summary:"Espanha amplia Arraigo Familiar com flexibilizaÃ§Ã£o de comprovaÃ§Ã£o digital. PolÃ­tica migratÃ³ria estÃ¡vel, com foco em reagrupamento familiar e regularizaÃ§Ã£o de longa data.", events:[
    {title:"Arraigo Familiar amplia critÃ©rios", desc:"Reagrupamento familiar agora aceita comprovaÃ§Ã£o por meios digitais. VigÃªncia imediata.", src:"Ministerio Interior", time:"-4d"}
  ]},
  { code:"uk", name:"Reino Unido", coords:[55.37,-3.43], status:"warn", changes:2, authority:"Home Office", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/1200px-Tower_Bridge_at_Dawn.jpg", summary:"Reino Unido mantÃ©m Graduate Visa de 2 anos apÃ³s pressÃ£o universitÃ¡ria. Skilled Worker salary threshold sob ajuste pra outubro/2026. PÃ³s-Brexit: ainda atrai talentos tech mas processos mais lentos.", events:[
    {title:"Graduate Visa â€” duraÃ§Ã£o de 2 anos mantida", desc:"Home Office reverte proposta de reduÃ§Ã£o pra 18 meses apÃ³s pressÃ£o de universidades. Acordo vale atÃ© 2028. PÃ³s-graduandos PhD mantÃªm 3 anos.", src:"Home Office Â· GOV.UK", time:"-3d"},
    {title:"Skilled Worker salary threshold revisado", desc:"SalÃ¡rio mÃ­nimo pra Skilled Worker Visa serÃ¡ ajustado pra inflaÃ§Ã£o em outubro.", src:"Home Office", time:"-5d"}
  ]},
  { code:"de", name:"Alemanha", coords:[51.16,10.45], status:"stable", changes:2, authority:"BAMF", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1200px-Schloss_Neuschwanstein_2013.jpg", summary:"Alemanha facilita Chancenkarte (pontuaÃ§Ã£o mÃ­nima cai pra 6) e baixa threshold da Blue Card EU pra â‚¬45.300/ano. TendÃªncia clara: atrair tech, saÃºde e engenharia pra suprir escassez de mÃ£o-de-obra qualificada.", events:[
    {title:"Chancenkarte â€” ampliaÃ§Ã£o 2026", desc:"PontuaÃ§Ã£o reduzida pra 6 pts mÃ­nimo. Idioma alemÃ£o perde peso no scoring, experiÃªncia profissional ganha mais relevÃ¢ncia. VigÃªncia imediata.", src:"BMI Â· Bundesregierung", time:"-2d"},
    {title:"Blue Card EU â€” salary threshold reduzido", desc:"Limite mÃ­nimo cai pra â‚¬45.300/ano (era â‚¬56.400). Impacta profissÃµes em escassez.", src:"BAMF", time:"-1w"}
  ]},
  { code:"fr", name:"FranÃ§a", coords:[46.22,2.21], status:"stable", changes:1, authority:"DGEF", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg", summary:"FranÃ§a simplifica Passeport Talent via portal Ãºnico online. Tempo mÃ©dio de anÃ¡lise cai pra 60 dias. CenÃ¡rio estÃ¡vel, com foco em atrair pesquisadores, empreendedores e profissionais de alto valor.", events:[
    {title:"Passeport Talent simplificado", desc:"Procedimento online consolidado em portal Ãºnico. Tempo mÃ©dio de anÃ¡lise cai pra 60 dias.", src:"DGEF Â· France Visas", time:"-3d"}
  ]},
  { code:"it", name:"ItÃ¡lia", coords:[41.87,12.56], status:"warn", changes:2, authority:"MAECI", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg", summary:"ItÃ¡lia anuncia Decreto Flussi 2026 com 165k vagas â€” distribuiÃ§Ã£o preferencial pra Brasil e Argentina. Visto Investidor sobe pra â‚¬2M em bonds. Janela de registro 22/jun: prepare-se pra alta demanda.", events:[
    {title:"Decreto Flussi 2026 â€” quotas anunciadas", desc:"Janela 22/jun pra registro. 165k vagas previstas, distribuiÃ§Ã£o preferencial pra Brasil e Argentina.", src:"MAECI", time:"agendado"},
    {title:"Visto Investidor â€” threshold atualizado", desc:"Investimento mÃ­nimo em bonds governamentais sobe pra â‚¬2M.", src:"MAE", time:"-4d"}
  ]},
  { code:"dk", name:"Dinamarca", coords:[56.26,9.50], status:"stable", changes:2, authority:"SIRI", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Nyhavn_Canal_3.jpg/1200px-The_Nyhavn_Canal_3.jpg", summary:"Dinamarca segue altamente seletiva mas eficiente. Positive List ampliada e Startup Denmark com limiar reduzido (â‚¬40k) â€” sinal claro de busca por talento qualificado em verticais estratÃ©gicas.", events:[
    {title:"Positive List 2026 atualizada â€” +37 profissÃµes", desc:"SIRI atualiza lista de ocupaÃ§Ãµes com escassez. Fast-track pra TI, engenharia e saÃºde mantido. Resposta em atÃ© 30 dias.", src:"SIRI Â· nyidanmark.dk", time:"-3d"},
    {title:"Startup Denmark â€” limiar reduzido pra â‚¬40k", desc:"Investimento mÃ­nimo cai. Foco em fundadores tech e green tech. Painel de avaliaÃ§Ã£o inclui scaleups internacionais.", src:"SIRI", time:"-1w"}
  ]},
  { code:"pl", name:"PolÃ´nia", coords:[51.92,19.13], status:"stable", changes:2, authority:"UDSC", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wawel_%284%29.jpg/1200px-Wawel_%284%29.jpg", summary:"PolÃ´nia se posiciona como porta de entrada UE de baixo custo. Blue Card threshold competitivo + Karta Polaka acelerada â€” atraindo IT da UcrÃ¢nia, Belarus e tech globais.", events:[
    {title:"Karta Polaka acelera caminho pra UE", desc:"Documento agora dÃ¡ direito a permanÃªncia imediata + naturalizaÃ§Ã£o em 1 ano. Foco em descendentes poloneses.", src:"UDSC Â· gov.pl", time:"-2d"},
    {title:"Blue Card PL â€” threshold de â‚¬27k mantido", desc:"UDSC confirma salÃ¡rio mÃ­nimo competitivo, atraindo IT da UcrÃ¢nia, Belarus e devs globais.", src:"UDSC", time:"-1w"}
  ]},
  { code:"ie", name:"Irlanda", coords:[53.41,-8.24], status:"stable", changes:2, authority:"Irish Immigration", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Cliffs-Of-Moher-OBriens-From-South.JPG/1200px-Cliffs-Of-Moher-OBriens-From-South.JPG", summary:"Irlanda mantÃ©m perfil de hub tech global. Critical Skills Permit expandido + Stamp 4 family reunification simplificado. Department of Justice processa 90% dos casos em 90 dias.", events:[
    {title:"Critical Skills Permit â€” lista revisada Â· 41 profissÃµes", desc:"Department of Justice adiciona AI engineers, climate scientists e especialistas em geriatria. SalÃ¡rio mÃ­nimo â‚¬38k.", src:"Irish Immigration Â· DoJ", time:"-2d"},
    {title:"Stamp 4 family reunification simplificado", desc:"ComprovaÃ§Ã£o digital aceita. Processamento mÃ©dio cai pra 90 dias.", src:"Irish Immigration", time:"-5d"}
  ]},
  { code:"ch", name:"SuÃ­Ã§a", coords:[46.82,8.23], status:"stable", changes:2, authority:"SEM", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/1200px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg", summary:"SuÃ­Ã§a expande quotas pra UE/EFTA (+12%) e non-EU (8.500 â†’ 12.000). SEM sinaliza priorizaÃ§Ã£o clara: fintech, farma, hightech. SalÃ¡rios lÃ­quidos seguem entre os mais altos da Europa.", events:[
    {title:"Permis B â€” quota UE/EFTA ampliada em 12%", desc:"Federal Council confirma quotas anuais expandidas. Foco em fintech, farma e healthtech. VigÃªncia 01/jul/2026.", src:"SEM Â· admin.ch", time:"-3d"},
    {title:"Highly skilled non-EU/EFTA â€” cap pra 12.000", desc:"SEM amplia cota anual de 8.500 pra 12.000 vistos. Brasil pode receber atÃ© 850 indicaÃ§Ãµes em 2026.", src:"SEM", time:"-1w"}
  ]},
  // ===== EUROPA â€” completando os 29 (UE + UK + SuÃ­Ã§a) =====
  { code:"at", name:"Ãustria", coords:[47.52,14.55], status:"stable", changes:2, authority:"BMI", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hallstatt_-_Zentrum_.JPG/1200px-Hallstatt_-_Zentrum_.JPG", summary:"Ãustria mantÃ©m Red-White-Red Card como porta principal pra qualificados. PontuaÃ§Ã£o por idade/experiÃªncia/idioma. Setor tech e saÃºde tÃªm via expressa via Skilled Workers in Shortage Occupations.", events:[
    {title:"Red-White-Red Card â€” pontuaÃ§Ã£o revisada", desc:"BMI baixa pontuaÃ§Ã£o mÃ­nima de 70 pra 65 pontos em ocupaÃ§Ãµes em escassez. Engenheiros de software e geriatria tÃªm path acelerado.", src:"BMI Â· migration.gv.at", time:"-3d"},
    {title:"Skilled Workers in Shortage Occupations â€” 47 profissÃµes", desc:"Lista de escassez atualizada. SalÃ¡rio mÃ­nimo â‚¬31.500/ano (era â‚¬34.000).", src:"BMI", time:"-1w"}
  ]},
  { code:"be", name:"BÃ©lgica", coords:[50.50,4.47], status:"stable", changes:1, authority:"Office des Ã‰trangers", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg/1200px-Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg", summary:"BÃ©lgica simplifica Single Permit pra estrangeiros nÃ£o-UE. Procedimento agora 100% digital via portal Ãºnico. Tempo mÃ©dio cai pra 4 meses.", events:[
    {title:"Single Permit â€” portal digital unificado", desc:"DOFI lanÃ§a plataforma Ãºnica online integrando todas as 3 regiÃµes (Flandres, ValÃ´nia, Bruxelas). Processamento mÃ©dio 4 meses.", src:"DOFI Â· ibz.be", time:"-4d"}
  ]},
  { code:"bg", name:"BulgÃ¡ria", coords:[42.73,25.49], status:"stable", changes:1, authority:"MVR", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Catedral_de_Alejandro_Nevski_--_2019_--_Sof%C3%ADa%2C_Bulgaria.jpg/1200px-Catedral_de_Alejandro_Nevski_--_2019_--_Sof%C3%ADa%2C_Bulgaria.jpg", summary:"BulgÃ¡ria amplia visto de longa permanÃªncia D pra remote workers. Schengen completo desde 2025 â€” atrai nÃ´mades digitais com custo de vida baixo.", events:[
    {title:"Visa D â€” categoria 'remote work' formalizada", desc:"MVR adiciona subcategoria pra trabalhadores remotos com renda comprovada de â‚¬3.500+/mÃªs. PermanÃªncia inicial 12 meses, renovÃ¡vel.", src:"MVR Â· gov.bg", time:"-5d"}
  ]},
  { code:"cy", name:"Chipre", coords:[35.13,33.43], status:"stable", changes:1, authority:"CRMD", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Roca_de_Afrodita%2C_Chipre%2C_2021-12-10%2C_DD_65.jpg/1200px-Roca_de_Afrodita%2C_Chipre%2C_2021-12-10%2C_DD_65.jpg", summary:"Chipre mantÃ©m regime de tax-friendly residency pra non-doms. Permanent Residency via investimento imobiliÃ¡rio â‚¬300k+ continua ativo. Hub atrativo pra finanÃ§as e tech.", events:[
    {title:"Digital Nomad Visa â€” extensÃ£o pra 3 anos", desc:"CRMD amplia duraÃ§Ã£o inicial do Digital Nomad Visa pra 36 meses. Renda mÃ­nima â‚¬3.500/mÃªs mantida.", src:"CRMD Â· moi.gov.cy", time:"-1w"}
  ]},
  { code:"hr", name:"CroÃ¡cia", coords:[45.10,15.20], status:"stable", changes:2, authority:"MUP", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/1200px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg", summary:"CroÃ¡cia consolidada no Schengen + zona Euro desde 2023. Digital Nomad Permit popular entre brasileiros. Custo de vida competitivo na UE.", events:[
    {title:"Digital Nomad Permit â€” extensÃ£o pra 18 meses", desc:"MUP estende permissÃ£o inicial de 12 pra 18 meses, com possibilidade de mais 18. Renda mÃ­nima â‚¬2.870/mÃªs.", src:"MUP Â· mup.gov.hr", time:"-3d"},
    {title:"Work Permit â€” quotas 2026 anunciadas", desc:"Governo croata aprovou 207.500 vagas pra trabalhadores estrangeiros em 2026 (era 178k em 2025).", src:"MUP", time:"-2w"}
  ]},
  { code:"sk", name:"EslovÃ¡quia", coords:[48.67,19.70], status:"stable", changes:1, authority:"MV SR", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bratislava_-_Burg_%28b%29.JPG/1200px-Bratislava_-_Burg_%28b%29.JPG", summary:"EslovÃ¡quia mantÃ©m Single Permit padrÃ£o UE. CenÃ¡rio estÃ¡vel, com leve abertura pra IT skilled workers via parceiros corporativos.", events:[
    {title:"Skilled Worker â€” fast-track pra IT corporativo", desc:"Ministerstvo VnÃºtra lanÃ§a canal expresso pra contrataÃ§Ãµes tech via empresas certificadas. DecisÃ£o em 30 dias.", src:"MV SR Â· minv.sk", time:"-5d"}
  ]},
  { code:"si", name:"EslovÃªnia", coords:[46.15,14.99], status:"stable", changes:1, authority:"Govt SI", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lake_Bled_from_the_Mountain.jpg/1200px-Lake_Bled_from_the_Mountain.jpg", summary:"EslovÃªnia abriu Digital Nomad Visa em jan/2025. Schengen + Euro + qualidade de vida alta. Cresce como destino discreto pra remote workers.", events:[
    {title:"Digital Nomad Visa â€” 1 ano renovÃ¡vel", desc:"Portal gov.si confirma vigÃªncia integral. Renda mÃ­nima â‚¬2.300/mÃªs. Sem direito a trabalhar pra empresa eslovena local.", src:"Govt SI Â· gov.si", time:"-4d"}
  ]},
  { code:"ee", name:"EstÃ´nia", coords:[58.60,25.01], status:"stable", changes:2, authority:"Politsei", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Raekoja_plats_at_night.jpg/1200px-Raekoja_plats_at_night.jpg", summary:"EstÃ´nia segue como pioneira em e-Residency e Digital Nomad Visa. Setor tech robusto, baixa burocracia. Visa decisions em atÃ© 30 dias.", events:[
    {title:"e-Residency atinge 130k membros", desc:"Programa cresceu 18% em 2025. Empreendedores podem abrir e operar empresa UE 100% remoto.", src:"Politsei Â· e-resident.gov.ee", time:"-1w"},
    {title:"Digital Nomad Visa â€” quota 2026 ampliada", desc:"Politsei confirma teto anual de 2.500 vistos (era 1.800). Renda mÃ­nima â‚¬4.500/mÃªs.", src:"Politsei", time:"-3d"}
  ]},
  { code:"fi", name:"FinlÃ¢ndia", coords:[61.92,25.75], status:"stable", changes:2, authority:"Migri", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kirkko3.png/1200px-Kirkko3.png", summary:"FinlÃ¢ndia lidera Europa em qualidade de vida + sistema de imigraÃ§Ã£o eficiente. Specialist Permit pra tech tem decisÃ£o em 14 dias. Migri amplia canais pra healthcare.", events:[
    {title:"Specialist Permit â€” decisÃ£o em 14 dias", desc:"Migri reduz prazo mÃ©dio de 30 pra 14 dias pra profissionais qualificados (tech, eng, healthcare).", src:"Migri Â· migri.fi", time:"-2d"},
    {title:"Job Seeker's Residence Permit â€” 6 meses pra qualificados", desc:"Novo permit pra graduados em ocupaÃ§Ãµes em escassez procurarem emprego direto na FinlÃ¢ndia.", src:"Migri", time:"-1w"}
  ]},
  { code:"gr", name:"GrÃ©cia", coords:[39.07,21.82], status:"stable", changes:2, authority:"Min Migration", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2011_Dimos_Thiras.png/1200px-2011_Dimos_Thiras.png", summary:"GrÃ©cia mantÃ©m Golden Visa atrativo (threshold â‚¬500k em zonas premium). Digital Nomad Visa popular. Renda + clima + Schengen atraem fluxo crescente.", events:[
    {title:"Golden Visa â€” threshold escalonado por regiÃ£o", desc:"Min Migration confirma â‚¬800k em Ãtica/TessalÃ´nica/ilhas premium, â‚¬400k no resto. VigÃªncia 2026.", src:"Min Migration Â· migration.gov.gr", time:"-3d"},
    {title:"Digital Nomad Visa â€” renda mÃ­nima ajustada", desc:"CritÃ©rio sobe de â‚¬3.500 pra â‚¬3.800/mÃªs. PermissÃ£o 12 meses + renovaÃ§Ã£o.", src:"Min Migration", time:"-1w"}
  ]},
  { code:"nl", name:"Holanda", coords:[52.13,5.29], status:"warn", changes:2, authority:"IND", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/KinderdijkMolens02.jpg/1200px-KinderdijkMolens02.jpg", summary:"Holanda em modo de aperto: Highly Skilled Migrant salary threshold sobe pra â‚¬5.688/mÃªs (era â‚¬5.331). DAFT (US-NL) mantido. PressÃ£o polÃ­tica contra imigraÃ§Ã£o lÃ­quida alta.", events:[
    {title:"Highly Skilled Migrant â€” salary threshold sobe", desc:"IND eleva critÃ©rio pra â‚¬5.688/mÃªs (era â‚¬5.331). RecÃ©m-graduados mantÃªm threshold reduzido â‚¬4.071/mÃªs.", src:"IND Â· ind.nl", time:"-2d"},
    {title:"DAFT (Dutch-American Friendship Treaty) â€” quota mantida", desc:"Acordo bilateral US-NL pra empreendedores americanos mantido apesar de revisÃ£o. Investimento mÃ­nimo â‚¬4.500.", src:"IND", time:"-1w"}
  ]},
  { code:"hu", name:"Hungria", coords:[47.16,19.50], status:"warn", changes:2, authority:"OIF", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg/1200px-Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg", summary:"Hungria endurece polÃ­tica migratÃ³ria sob governo OrbÃ¡n. Golden Visa relanÃ§ado em 2024 com threshold â‚¬250k. TensÃ£o constante UE Ã— Hungria sobre regras de fronteira.", events:[
    {title:"Guest Investor Program â€” Golden Visa relanÃ§ado", desc:"OIF reativa Golden Visa com investimento mÃ­nimo â‚¬250k em fundo imobiliÃ¡rio aprovado OU â‚¬500k em propriedade direta.", src:"OIF Â· oif.gov.hu", time:"-1w"},
    {title:"White Card â€” Digital Nomad estendida", desc:"Visa pra remote workers ampliada pra 2 anos. Renda mÃ­nima â‚¬3.000/mÃªs.", src:"OIF", time:"-3d"}
  ]},
  { code:"lv", name:"LetÃ´nia", coords:[56.88,24.60], status:"stable", changes:1, authority:"PMLP", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Riga_%2833844464828%29.jpg/1200px-Riga_%2833844464828%29.jpg", summary:"LetÃ´nia mantÃ©m Temporary Residence Permit via investimento imobiliÃ¡rio â‚¬250k+ ou business â‚¬50k+. Schengen + Euro + custo competitivo.", events:[
    {title:"Startup Visa â€” vigÃªncia ampliada pra 3 anos", desc:"PMLP estende Startup Visa inicial de 12 pra 36 meses. Programa atraiu 480 startups em 2025.", src:"PMLP Â· pmlp.gov.lv", time:"-1w"}
  ]},
  { code:"lt", name:"LituÃ¢nia", coords:[55.17,23.88], status:"stable", changes:1, authority:"Migration Dept", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Trakai_castle_2016.jpg/1200px-Trakai_castle_2016.jpg", summary:"LituÃ¢nia abre cada vez mais pra tech talents via Startup Visa. Programa atrai fundadores de toda Europa Oriental. Schengen + Euro + ecossistema fintech crescente.", events:[
    {title:"Startup Visa â€” extensÃ£o 3 anos pra Class-A", desc:"Migration Department amplia path pra residÃªncia permanente em 3 anos pra Class-A startups (com investimento ou traÃ§Ã£o validada).", src:"Migration Dept Â· migracija.lt", time:"-5d"}
  ]},
  { code:"lu", name:"Luxemburgo", coords:[49.82,6.13], status:"stable", changes:1, authority:"Guichet.lu", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Luxembourg_Grand_Ducal_Palace_01.jpg/1200px-Luxembourg_Grand_Ducal_Palace_01.jpg", summary:"Luxemburgo continua hub financeiro com regras prÃ³-talento qualificado. Highly Qualified Worker permit em 3 meses. Centro fiscal preferido pra fundos.", events:[
    {title:"Highly Qualified Worker â€” salary threshold revisado", desc:"Guichet.lu confirma critÃ©rio â‚¬87.780/ano pra Highly Qualified Worker (era â‚¬82.864). Setor financeiro mantÃ©m prioridade.", src:"Guichet.lu", time:"-1w"}
  ]},
  { code:"mt", name:"Malta", coords:[35.94,14.38], status:"stable", changes:2, authority:"IdentitÃ  Malta", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/St_Sebastian_Curtain_%28cropped%29.jpg/1200px-St_Sebastian_Curtain_%28cropped%29.jpg", summary:"Malta mantÃ©m Malta Permanent Residence Programme (MPRP) ativo. ApÃ³s reformas UE, requer combinaÃ§Ã£o investimento + propriedade. Hub fintech + iGaming.", events:[
    {title:"MPRP â€” investimento total mÃ­nimo â‚¬115k", desc:"IdentitÃ  Malta confirma estrutura combinada: contribuiÃ§Ã£o governamental â‚¬68k + investimento imobiliÃ¡rio â‚¬350k mÃ­nimo.", src:"IdentitÃ  Malta Â· identita.gov.mt", time:"-4d"},
    {title:"Nomad Residence Permit â€” renda mÃ­nima â‚¬3.500/mÃªs", desc:"Programa pra remote workers consolidado. PermissÃ£o 1 ano renovÃ¡vel atÃ© 4 anos.", src:"IdentitÃ  Malta", time:"-1w"}
  ]},
  { code:"ro", name:"RomÃªnia", coords:[45.94,24.97], status:"stable", changes:2, authority:"IGI", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Castelul_Bran2.jpg/1200px-Castelul_Bran2.jpg", summary:"RomÃªnia entrou Schengen em mar/2024 â€” fluxo migratÃ³rio cresceu. Digital Nomad Visa simples. Custo de vida competitivo + crescimento tech (cluster Bucareste/Cluj).", events:[
    {title:"Digital Nomad Visa â€” vigÃªncia 12 meses renovÃ¡vel", desc:"IGI confirma path estÃ¡vel. Renda mÃ­nima â‚¬3.700/mÃªs comprovada. IsenÃ§Ã£o fiscal sobre renda externa por 12 meses.", src:"IGI Â· igi.mai.gov.ro", time:"-3d"},
    {title:"Long-stay D Visa â€” categoria tech ampliada", desc:"Lista de ocupaÃ§Ãµes tech elegÃ­veis pra Single Permit ampliada em 28 profissÃµes.", src:"IGI", time:"-1w"}
  ]},
  { code:"se", name:"SuÃ©cia", coords:[60.13,18.64], status:"warn", changes:2, authority:"Migrationsverket", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gamla_stan_September_2014_01.jpg/1200px-Gamla_stan_September_2014_01.jpg", summary:"SuÃ©cia em modo restritivo desde governo Kristersson. Work Permit salary threshold subiu pra SEK 38.500/mÃªs. DiscussÃ£o sobre cortes mais profundos no parlamento.", events:[
    {title:"Work Permit â€” salary threshold SEK 38.500/mÃªs", desc:"Migrationsverket aplica novo critÃ©rio desde nov/2025. Reduzido pra ocupaÃ§Ãµes em escassez via lista oficial.", src:"Migrationsverket Â· migrationsverket.se", time:"-2d"},
    {title:"Family Reunification â€” comprovaÃ§Ã£o financeira reforÃ§ada", desc:"Patrocinador agora precisa comprovar SEK 415k/ano (era SEK 339k). Apertou recurso pra reunificaÃ§Ã£o.", src:"Migrationsverket", time:"-1w"}
  ]},
  { code:"cz", name:"TchÃ©quia", coords:[49.82,15.47], status:"stable", changes:1, authority:"MV ÄŒR", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg/1200px-Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg", summary:"TchÃ©quia mantÃ©m regime estÃ¡vel. Employee Card via empregador Ã© principal via. Programa Highly Qualified Employee pra tech tem decisÃ£o em 30 dias.", events:[
    {title:"Highly Qualified Employee â€” decisÃ£o em 30 dias", desc:"Ministerstvo Vnitra mantÃ©m prazo expresso pra tech + healthcare. Lista de ocupaÃ§Ãµes qualificadas inclui 89 profissÃµes.", src:"MV ÄŒR Â· mvcr.cz", time:"-5d"}
  ]},

  // ===== ÃSIA-PACÃFICO =====
  { code:"au", name:"AustrÃ¡lia", coords:[-25.27,133.77], status:"crit", changes:4, authority:"DHA", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/1200px-Sydney_Australia._%2821339175489%29.jpg", summary:"AustrÃ¡lia em modo restritivo: 189 Visa corta 18% das vagas, GTI processing time vai a 6 meses. Working Holiday Visa pra Brasil dobra (2.500 vagas) â€” Ãºnica boa notÃ­cia. Skilled Occupation List passa por revisÃ£o profunda.", events:[
    {title:"189 Visa â€” vagas reduzidas em 18%", desc:"Department of Home Affairs anuncia corte no skilled migration program. Quotas serÃ£o revistas em outubro. Categorias tech e saÃºde devem manter prioridade.", src:"DHA", time:"hÃ¡ 2h"},
    {title:"Subclass 482 nova lista de ocupaÃ§Ãµes", desc:"Skilled Occupation List atualizada. 76 profissÃµes adicionadas, 23 removidas.", src:"DHA", time:"-1d"},
    {title:"Working Holiday Visa quota Brasil dobra", desc:"2.500 vagas anuais (era 1.250). Programa amplia parceria bilateral.", src:"DHA", time:"-3d"},
    {title:"GTI processing time aumenta pra 6 meses", desc:"Global Talent Independent visa enfrenta backlog. Solicitantes Tech mantÃªm prioridade.", src:"DHA", time:"-5d"}
  ]},
  { code:"nz", name:"Nova ZelÃ¢ndia", coords:[-40.90,174.89], status:"stable", changes:2, authority:"INZ", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Milford_Sound_%28New_Zealand%29.JPG/1200px-Milford_Sound_%28New_Zealand%29.JPG", summary:"Nova ZelÃ¢ndia reduz Skilled Migrant Category pra 6 pts mÃ­nimo + lanÃ§a Active Investor Plus Green Stream (NZD 5M). CenÃ¡rio convidativo pra tech, healthcare e investidores verdes.", events:[
    {title:"Skilled Migrant Category â€” score reduzido pra 6 pts", desc:"Limiar mais acessÃ­vel pra atrair tech e healthcare. Categoria 'Green List' mantÃ©m fast-track em 6 semanas.", src:"INZ Â· immigration.govt.nz", time:"-3d"},
    {title:"Active Investor Plus â€” Green Stream NZD 5M", desc:"Nova categoria pra investimentos em sustentabilidade e infra verde. Path direto pra residÃªncia em 4 anos.", src:"INZ", time:"-1w"}
  ]},
  { code:"cn", name:"China", coords:[35.86,104.20], status:"stable", changes:2, authority:"NIA", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg", summary:"China abre porta pra elite global com Z Visa permanente e Hainan FTZ visa-free. NIA sinaliza receptividade tech sem precedente â€” embora exija nÃ­vel salarial alto e contribuiÃ§Ã£o estratÃ©gica.", events:[
    {title:"Z Visa permanente â€” abertura pra talentos globais", desc:"NIA anuncia path de residÃªncia permanente pra Class-A talents. SalÃ¡rio mÃ­nimo USD 240k/ano ou patente/publicaÃ§Ã£o relevante.", src:"NIA Â· nia.gov.cn", time:"-2d"},
    {title:"Hainan FTZ â€” visa-free expandido pra 54 paÃ­ses", desc:"144h transit visa-free expandido. Hainan ganha regime especial pra entrada de profissionais e investidores.", src:"NIA Â· State Council", time:"-1w"}
  ]},
  { code:"sg", name:"Singapura", coords:[1.35,103.81], status:"stable", changes:1, authority:"MOM", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Marina_Bay_Sands_%28I%29.jpg/1200px-Marina_Bay_Sands_%28I%29.jpg", summary:"Singapura eleva critÃ©rio do ONE Pass pra SGD 30k/mÃªs â€” visando elite global. Fast-track pra ciÃªncia aplicada mantido. PolÃ­tica seletiva e estÃ¡vel, foco em ultra-qualificados.", events:[
    {title:"ONE Pass â€” critÃ©rios revisados", desc:"SalÃ¡rio mÃ­nimo passa pra SGD 30k/mÃªs. Profissionais em ciÃªncia aplicada tÃªm fast-track.", src:"MOM", time:"-2d"}
  ]},
  { code:"jp", name:"JapÃ£o", coords:[36.20,138.25], status:"stable", changes:1, authority:"ISA", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1200px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg", summary:"JapÃ£o lanÃ§a track expresso pra Highly-Skilled Professional: PR em 1 ano se atingir 80 pts. Foco em pesquisadores e tech. Sinaliza abertura crescente do mercado tradicionalmente fechado.", events:[
    {title:"Highly-Skilled Professional ganha track expresso", desc:"PR em 1 ano de residÃªncia pra quem atingir 80 pts. Categoria atrai foco em pesquisadores e tech.", src:"ISA Â· moj.go.jp/isa", time:"-2d"}
  ]},

  // ===== ORIENTE MÃ‰DIO =====
  { code:"ae", name:"Emirados Ãrabes", coords:[23.42,53.84], status:"stable", changes:2, authority:"ICP", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/1200px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg", summary:"Emirados expandem Golden Visa pra engenheiros de IA, pesquisadores climÃ¡ticos e mÃ©dicos especialistas. Freelancer Visa Dubai 100% digital com taxa Ãºnica AED 7.500. Ambiente regulatÃ³rio altamente favorÃ¡vel a talentos e capital.", events:[
    {title:"Golden Visa amplia profissÃµes elegÃ­veis", desc:"Lista inclui engenheiros de IA, pesquisadores climÃ¡ticos e mÃ©dicos especialistas. VigÃªncia imediata.", src:"ICP", time:"-1d"},
    {title:"Freelancer Visa Dubai simplificado", desc:"Processo 100% digital, taxa Ãºnica AED 7.500.", src:"DET", time:"-1w"}
  ]}
];

export const INBOX_ACCOUNTS: InboxAccount[] = [
  {id:"gmail",   label:"hzfarah.wisehub@gmail.com", icon:"G", cls:"gmail", unread:12, last:"Stripe â€” Receipt #INV-2841"},
  {id:"adm",     label:"adm@wisehubnow.com",        icon:"A", unread:5,  last:"SolicitaÃ§Ã£o de fatura â€” Maria Silva"},
  {id:"support", label:"support@wisehubnow.com",    icon:"S", unread:8,  last:"Ticket #4421 â€” login issue"},
  {id:"sales",   label:"sales@wisehubnow.com",      icon:"$", unread:3,  last:"Lead enterprise â€” Lisboa"},
  {id:"team",    label:"team@wisehubnow.com",       icon:"T", unread:2,  last:"Sprint review â€” 13/mai 10h"},
  {id:"hzfarah", label:"hzfarah@wisehubnow.com",    icon:"H", unread:4,  last:"Contrato US LLC â€” assinatura"},
  {id:"suporte", label:"suporte@wisehubnow.com",    icon:"?", unread:6,  last:"UsuÃ¡rio BR nÃ£o consegue logar"},
  {id:"contact", label:"contact@wisehubnow.com",    icon:"@", unread:1,  last:"Parceria â€” Travel Tech LATAM"},
  {id:"info",    label:"info@wisehubnow.com",       icon:"i", unread:7,  last:"Imprensa â€” Globo News"}
];

export const DEFAULT_TASKS: Task[] = [
  {id:1, text:"Revisar PR Watch Tower #007", done:false},
  {id:2, text:"Confirmar webhook Stripe na Dashboard", done:false},
  {id:3, text:"Responder support@wisehubnow.com â€” Ticket #4421", done:false},
  {id:4, text:"Atualizar prompt da Mary com novo brand voice", done:true},
  {id:5, text:"Briefing semanal â€” preparar slides", done:false},
  {id:6, text:"Validar Stripe taxas com contador", done:false}
];

export const DEFAULT_AGENDA: AgendaItem[] = [
  {id:1, time:"09:00", title:"Call equipe WiseHub â€” semanal", where:"Google Meet"},
  {id:2, time:"10:30", title:"AnÃ¡lise sprint C â€” Stripe webhook", where:"Solo"},
  {id:3, time:"14:00", title:"Review imigraÃ§Ã£o â€” pendÃªncias D7", where:"WiseHub Watch Tower"},
  {id:4, time:"16:30", title:"1:1 com Fabiano â€” design system", where:"Zoom"},
  {id:5, time:"18:00", title:"Encerramento semana", where:"Wrap-up"}
];

export const DEFAULT_REMINDERS: Reminder[] = [
  {id:1, text:"Stripe webhook signing secret ainda pendente", when:"CrÃ­tico", crit:true},
  {id:2, text:"AtualizaÃ§Ã£o Cowork sai 14/mai â€” testar Live Artifacts", when:"Em 3 dias"},
  {id:3, text:"Renovar API key Manus dia 5/jun", when:"Em 25 dias"},
  {id:4, text:"Backup mensal WiseRank DB â€” Ãºltima 03/mai", when:"Esta semana"}
];

export const DEFAULT_SCHEDULED: ScheduledAction[] = [
  {id:1, icon:"ðŸŒŽ", title:"AtualizaÃ§Ã£o diÃ¡ria do panorama de imigraÃ§Ã£o", frequency:"DiÃ¡rio Â· 06:00", nextRun:"AmanhÃ£ 06:00", status:"active"},
  {id:2, icon:"âœ",  title:"CriaÃ§Ã£o de notÃ­cias para postagem", frequency:"DiÃ¡rio Â· 09:00", nextRun:"AmanhÃ£ 09:00", status:"active"},
  {id:3, icon:"âš–",  title:"VerificaÃ§Ã£o de novas leis, regras ou eventos", frequency:"3Ã— por dia Â· 08/14/20", nextRun:"Hoje 20:00", status:"active"},
  {id:4, icon:"ðŸ“Š", title:"Snapshot semanal â€” relatÃ³rio resumo", frequency:"Semanal Â· seg 07:00", nextRun:"Seg 07:00", status:"active"},
  {id:5, icon:"ðŸ”", title:"Scan de oportunidades â€” vistos abertos", frequency:"2Ã— por semana", nextRun:"Qua 10:00", status:"active"}
];
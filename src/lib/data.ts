import type { Country, InboxAccount, Task, AgendaItem, Reminder, ScheduledAction } from "./types";

// Imagens curadas via Unsplash CDN Ã¢â‚¬â€ landmarks reais de cada paÃƒÂ­s.
// URLs validadas via curl em 2026-05-21. Fallback no componente CountryBenchmark
// renderiza emoji bandeira gigante se algum 404 acontecer no futuro.
// Fallback estÃƒÂ¡vel: Picsum determinÃƒÂ­stico por seed (sempre carrega, sem 404).

export const COUNTRIES: Country[] = [
  // ===== AMÃƒâ€°RICA =====
  { code:"ca", name:"CanadÃƒÂ¡", coords:[56.13,-106.35], status:"crit", changes:5, authority:"IRCC", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc5%2FMoraine_Lake_17092005.jpg&w=1200&q=80&output=jpg", summary:"CanadÃƒÂ¡ lidera 2026 com Express Entry mais agressivo da dÃƒÂ©cada. CRS cutoff em 481 (+12 pts vs trimestre anterior), tech-PNP Ontario reabrindo com 2.500 vagas. TendÃƒÂªncia: priorizaÃƒÂ§ÃƒÂ£o tech + saÃƒÂºde, queda de oportunidades em ocupaÃƒÂ§ÃƒÂµes genÃƒÂ©ricas.", events:[
    {title:"Express Entry Ã¢â‚¬â€ CRS cutoff sobe pra 481 (+12 pts)", desc:"IRCC anunciou critÃƒÂ©rio revisado pra rota Q1. Programa Tech-PNP Ontario abre 03/jun com 2.500 vagas previstas. Especialistas projetam +15% de convites pra categoria tech.", src:"IRCC Ã‚Â· CIC News", time:"hÃƒÂ¡ 14h"},
    {title:"PNP Ontario Tech Ã¢â‚¬â€ stream aberto 03/jun", desc:"Ontario Provincial Nominee Program abre nova janela de aplicaÃƒÂ§ÃƒÂ£o. 2.500 vagas previstas. PontuaÃƒÂ§ÃƒÂ£o mÃƒÂ­nima estimada em 437.", src:"Ontario PNP", time:"hÃƒÂ¡ 18h"},
    {title:"Novo CRS Express em vigor 01/jul/2026", desc:"Cutoff revisado entra em vigor com regras de prioridade pra Tech e Healthcare.", src:"IRCC", time:"agendado"}
  ]},
  { code:"us", name:"Estados Unidos", coords:[37.09,-95.71], status:"warn", changes:3, authority:"USCIS", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F89%2FFront_view_of_Statue_of_Liberty_%2528cropped%2529.jpg&w=1200&q=80&output=jpg", summary:"EUA com cenÃƒÂ¡rio misto pra 2026: H1B mantÃƒÂ©m cap de 85k mas wage-based selection penaliza candidatos jovens. EB-5 sob revisÃƒÂ£o pode alterar threshold de investimento. OPT extension pra STEM em consulta pÃƒÂºblica.", events:[
    {title:"H1B Lottery 2026 Ã¢â‚¬â€ anÃƒÂºncio oficial 15/jun", desc:"USCIS confirma janela de registro e nova regra de wage-based selection. Cap de 85 mil mantido. Empresas tech dominam picks nos ÃƒÂºltimos ciclos.", src:"USCIS", time:"ontem"},
    {title:"OPT extension review", desc:"DHS revisa duraÃƒÂ§ÃƒÂ£o de Optional Practical Training pra STEM. DecisÃƒÂ£o prevista pra julho.", src:"DHS", time:"-3d"},
    {title:"EB-5 mudanÃƒÂ§as regulatÃƒÂ³rias", desc:"Investment threshold sob revisÃƒÂ£o. DecisÃƒÂ£o pode afetar candidatos atuais.", src:"USCIS", time:"-5d"}
  ]},
  { code:"br", name:"Brasil", coords:[-14.24,-51.92], status:"stable", changes:2, authority:"PolÃƒÂ­cia Federal", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4f%2FChrist_the_Redeemer_-_Cristo_Redentor.jpg&w=1200&q=80&output=jpg", summary:"Brasil ganha traÃƒÂ§ÃƒÂ£o como hub de tech latino. Visto Tech fast-track + naturalizaÃƒÂ§ÃƒÂ£o digital criam ambiente competitivo. PF moderniza fluxos via gov.br/pf. Foco em retenÃƒÂ§ÃƒÂ£o de talentos de IA e fintech.", events:[
    {title:"Visto Tech Brasil Ã¢â‚¬â€ fast-track pra IA e fintech", desc:"PolÃƒÂ­cia Federal lanÃƒÂ§a visto especial pra profissionais em IA e fintech. AnÃƒÂ¡lise em 30 dias ÃƒÂºteis, dispensa contrato CLT pra elegÃƒÂ­veis.", src:"PolÃƒÂ­cia Federal Ã‚Â· gov.br", time:"-2d"},
    {title:"NaturalizaÃƒÂ§ÃƒÂ£o digital pra residentes 4+ anos", desc:"Processo agora 100% online via gov.br/pf. Tempo mÃƒÂ©dio cai pra 6 meses (era 14).", src:"PolÃƒÂ­cia Federal", time:"-5d"}
  ]},

  // ===== EUROPA =====
  { code:"pt", name:"Portugal", coords:[39.39,-8.22], status:"stable", changes:3, authority:"AIMA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F65%2FTorre_Bel%25C3%25A9m_April_2009-4a.jpg&w=1200&q=80&output=jpg", summary:"Portugal segue como porta de entrada favorita do Brasil pra UE, mas taxas D7/D8 sobem pra Ã¢â€šÂ¬500 em jul/2026. Golden Visa restrito a Madeira/AÃƒÂ§ores. Tech Visa renovado atÃƒÂ© 2028 Ã¢â‚¬â€ caminho mais previsÃƒÂ­vel pra profissionais qualificados.", events:[
    {title:"D7 Visa Ã¢â‚¬â€ nova taxa Ã¢â€šÂ¬500 a partir de 15/jul", desc:"AIMA publica reajuste no DiÃƒÂ¡rio da RepÃƒÂºblica para vistos D7 e D8. AplicaÃƒÂ§ÃƒÂµes jÃƒÂ¡ em curso preservam a taxa anterior. Visto D8 (nÃƒÂ´mades digitais) tambÃƒÂ©m afetado.", src:"AIMA Ã‚Â· DRE", time:"hÃƒÂ¡ 10h"},
    {title:"Tech Visa renovado por mais 2 anos", desc:"Programa de visto pra profissionais qualificados em tech ampliado atÃƒÂ© 2028.", src:"AICEP", time:"-2d"},
    {title:"Golden Visa lista atualizada", desc:"Apenas Madeira e AÃƒÂ§ores mantÃƒÂªm opÃƒÂ§ÃƒÂµes de investimento elegÃƒÂ­veis.", src:"AIMA", time:"-1w"}
  ]},
  { code:"es", name:"Espanha", coords:[40.46,-3.74], status:"stable", changes:1, authority:"ExtranjerÃƒÂ­a", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F78%2FSF_maig_2026.jpg&w=1200&q=80&output=jpg", summary:"Espanha amplia Arraigo Familiar com flexibilizaÃƒÂ§ÃƒÂ£o de comprovaÃƒÂ§ÃƒÂ£o digital. PolÃƒÂ­tica migratÃƒÂ³ria estÃƒÂ¡vel, com foco em reagrupamento familiar e regularizaÃƒÂ§ÃƒÂ£o de longa data.", events:[
    {title:"Arraigo Familiar amplia critÃƒÂ©rios", desc:"Reagrupamento familiar agora aceita comprovaÃƒÂ§ÃƒÂ£o por meios digitais. VigÃƒÂªncia imediata.", src:"Ministerio Interior", time:"-4d"}
  ]},
  { code:"uk", name:"Reino Unido", coords:[55.37,-3.43], status:"warn", changes:2, authority:"Home Office", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F59%2FTower_Bridge_at_Dawn.jpg&w=1200&q=80&output=jpg", summary:"Reino Unido mantÃƒÂ©m Graduate Visa de 2 anos apÃƒÂ³s pressÃƒÂ£o universitÃƒÂ¡ria. Skilled Worker salary threshold sob ajuste pra outubro/2026. PÃƒÂ³s-Brexit: ainda atrai talentos tech mas processos mais lentos.", events:[
    {title:"Graduate Visa Ã¢â‚¬â€ duraÃƒÂ§ÃƒÂ£o de 2 anos mantida", desc:"Home Office reverte proposta de reduÃƒÂ§ÃƒÂ£o pra 18 meses apÃƒÂ³s pressÃƒÂ£o de universidades. Acordo vale atÃƒÂ© 2028. PÃƒÂ³s-graduandos PhD mantÃƒÂªm 3 anos.", src:"Home Office Ã‚Â· GOV.UK", time:"-3d"},
    {title:"Skilled Worker salary threshold revisado", desc:"SalÃƒÂ¡rio mÃƒÂ­nimo pra Skilled Worker Visa serÃƒÂ¡ ajustado pra inflaÃƒÂ§ÃƒÂ£o em outubro.", src:"Home Office", time:"-5d"}
  ]},
  { code:"de", name:"Alemanha", coords:[51.16,10.45], status:"stable", changes:2, authority:"BAMF", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff8%2FSchloss_Neuschwanstein_2013.jpg&w=1200&q=80&output=jpg", summary:"Alemanha facilita Chancenkarte (pontuaÃƒÂ§ÃƒÂ£o mÃƒÂ­nima cai pra 6) e baixa threshold da Blue Card EU pra Ã¢â€šÂ¬45.300/ano. TendÃƒÂªncia clara: atrair tech, saÃƒÂºde e engenharia pra suprir escassez de mÃƒÂ£o-de-obra qualificada.", events:[
    {title:"Chancenkarte Ã¢â‚¬â€ ampliaÃƒÂ§ÃƒÂ£o 2026", desc:"PontuaÃƒÂ§ÃƒÂ£o reduzida pra 6 pts mÃƒÂ­nimo. Idioma alemÃƒÂ£o perde peso no scoring, experiÃƒÂªncia profissional ganha mais relevÃƒÂ¢ncia. VigÃƒÂªncia imediata.", src:"BMI Ã‚Â· Bundesregierung", time:"-2d"},
    {title:"Blue Card EU Ã¢â‚¬â€ salary threshold reduzido", desc:"Limite mÃƒÂ­nimo cai pra Ã¢â€šÂ¬45.300/ano (era Ã¢â€šÂ¬56.400). Impacta profissÃƒÂµes em escassez.", src:"BAMF", time:"-1w"}
  ]},
  { code:"fr", name:"FranÃƒÂ§a", coords:[46.22,2.21], status:"stable", changes:1, authority:"DGEF", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F85%2FTour_Eiffel_Wikimedia_Commons_%2528cropped%2529.jpg&w=1200&q=80&output=jpg", summary:"FranÃƒÂ§a simplifica Passeport Talent via portal ÃƒÂºnico online. Tempo mÃƒÂ©dio de anÃƒÂ¡lise cai pra 60 dias. CenÃƒÂ¡rio estÃƒÂ¡vel, com foco em atrair pesquisadores, empreendedores e profissionais de alto valor.", events:[
    {title:"Passeport Talent simplificado", desc:"Procedimento online consolidado em portal ÃƒÂºnico. Tempo mÃƒÂ©dio de anÃƒÂ¡lise cai pra 60 dias.", src:"DGEF Ã‚Â· France Visas", time:"-3d"}
  ]},
  { code:"it", name:"ItÃƒÂ¡lia", coords:[41.87,12.56], status:"warn", changes:2, authority:"MAECI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fde%2FColosseo_2020.jpg&w=1200&q=80&output=jpg", summary:"ItÃƒÂ¡lia anuncia Decreto Flussi 2026 com 165k vagas Ã¢â‚¬â€ distribuiÃƒÂ§ÃƒÂ£o preferencial pra Brasil e Argentina. Visto Investidor sobe pra Ã¢â€šÂ¬2M em bonds. Janela de registro 22/jun: prepare-se pra alta demanda.", events:[
    {title:"Decreto Flussi 2026 Ã¢â‚¬â€ quotas anunciadas", desc:"Janela 22/jun pra registro. 165k vagas previstas, distribuiÃƒÂ§ÃƒÂ£o preferencial pra Brasil e Argentina.", src:"MAECI", time:"agendado"},
    {title:"Visto Investidor Ã¢â‚¬â€ threshold atualizado", desc:"Investimento mÃƒÂ­nimo em bonds governamentais sobe pra Ã¢â€šÂ¬2M.", src:"MAE", time:"-4d"}
  ]},
  { code:"dk", name:"Dinamarca", coords:[56.26,9.50], status:"stable", changes:2, authority:"SIRI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fad%2FThe_Nyhavn_Canal_3.jpg&w=1200&q=80&output=jpg", summary:"Dinamarca segue altamente seletiva mas eficiente. Positive List ampliada e Startup Denmark com limiar reduzido (Ã¢â€šÂ¬40k) Ã¢â‚¬â€ sinal claro de busca por talento qualificado em verticais estratÃƒÂ©gicas.", events:[
    {title:"Positive List 2026 atualizada Ã¢â‚¬â€ +37 profissÃƒÂµes", desc:"SIRI atualiza lista de ocupaÃƒÂ§ÃƒÂµes com escassez. Fast-track pra TI, engenharia e saÃƒÂºde mantido. Resposta em atÃƒÂ© 30 dias.", src:"SIRI Ã‚Â· nyidanmark.dk", time:"-3d"},
    {title:"Startup Denmark Ã¢â‚¬â€ limiar reduzido pra Ã¢â€šÂ¬40k", desc:"Investimento mÃƒÂ­nimo cai. Foco em fundadores tech e green tech. Painel de avaliaÃƒÂ§ÃƒÂ£o inclui scaleups internacionais.", src:"SIRI", time:"-1w"}
  ]},
  { code:"pl", name:"PolÃƒÂ´nia", coords:[51.92,19.13], status:"stable", changes:2, authority:"UDSC", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F87%2FWawel_%25284%2529.jpg&w=1200&q=80&output=jpg", summary:"PolÃƒÂ´nia se posiciona como porta de entrada UE de baixo custo. Blue Card threshold competitivo + Karta Polaka acelerada Ã¢â‚¬â€ atraindo IT da UcrÃƒÂ¢nia, Belarus e tech globais.", events:[
    {title:"Karta Polaka acelera caminho pra UE", desc:"Documento agora dÃƒÂ¡ direito a permanÃƒÂªncia imediata + naturalizaÃƒÂ§ÃƒÂ£o em 1 ano. Foco em descendentes poloneses.", src:"UDSC Ã‚Â· gov.pl", time:"-2d"},
    {title:"Blue Card PL Ã¢â‚¬â€ threshold de Ã¢â€šÂ¬27k mantido", desc:"UDSC confirma salÃƒÂ¡rio mÃƒÂ­nimo competitivo, atraindo IT da UcrÃƒÂ¢nia, Belarus e devs globais.", src:"UDSC", time:"-1w"}
  ]},
  { code:"ie", name:"Irlanda", coords:[53.41,-8.24], status:"stable", changes:2, authority:"Irish Immigration", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd1%2FCliffs-Of-Moher-OBriens-From-South.JPG&w=1200&q=80&output=jpg", summary:"Irlanda mantÃƒÂ©m perfil de hub tech global. Critical Skills Permit expandido + Stamp 4 family reunification simplificado. Department of Justice processa 90% dos casos em 90 dias.", events:[
    {title:"Critical Skills Permit Ã¢â‚¬â€ lista revisada Ã‚Â· 41 profissÃƒÂµes", desc:"Department of Justice adiciona AI engineers, climate scientists e especialistas em geriatria. SalÃƒÂ¡rio mÃƒÂ­nimo Ã¢â€šÂ¬38k.", src:"Irish Immigration Ã‚Â· DoJ", time:"-2d"},
    {title:"Stamp 4 family reunification simplificado", desc:"ComprovaÃƒÂ§ÃƒÂ£o digital aceita. Processamento mÃƒÂ©dio cai pra 90 dias.", src:"Irish Immigration", time:"-5d"}
  ]},
  { code:"ch", name:"SuÃƒÂ­ÃƒÂ§a", coords:[46.82,8.23], status:"stable", changes:2, authority:"SEM", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F60%2FMatterhorn_from_Domh%25C3%25BCtte_-_2.jpg&w=1200&q=80&output=jpg", summary:"SuÃƒÂ­ÃƒÂ§a expande quotas pra UE/EFTA (+12%) e non-EU (8.500 Ã¢â€ â€™ 12.000). SEM sinaliza priorizaÃƒÂ§ÃƒÂ£o clara: fintech, farma, hightech. SalÃƒÂ¡rios lÃƒÂ­quidos seguem entre os mais altos da Europa.", events:[
    {title:"Permis B Ã¢â‚¬â€ quota UE/EFTA ampliada em 12%", desc:"Federal Council confirma quotas anuais expandidas. Foco em fintech, farma e healthtech. VigÃƒÂªncia 01/jul/2026.", src:"SEM Ã‚Â· admin.ch", time:"-3d"},
    {title:"Highly skilled non-EU/EFTA Ã¢â‚¬â€ cap pra 12.000", desc:"SEM amplia cota anual de 8.500 pra 12.000 vistos. Brasil pode receber atÃƒÂ© 850 indicaÃƒÂ§ÃƒÂµes em 2026.", src:"SEM", time:"-1w"}
  ]},
  // ===== EUROPA Ã¢â‚¬â€ completando os 29 (UE + UK + SuÃƒÂ­ÃƒÂ§a) =====
  { code:"at", name:"ÃƒÂustria", coords:[47.52,14.55], status:"stable", changes:2, authority:"BMI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb0%2FHallstatt_-_Zentrum_.JPG&w=1200&q=80&output=jpg", summary:"ÃƒÂustria mantÃƒÂ©m Red-White-Red Card como porta principal pra qualificados. PontuaÃƒÂ§ÃƒÂ£o por idade/experiÃƒÂªncia/idioma. Setor tech e saÃƒÂºde tÃƒÂªm via expressa via Skilled Workers in Shortage Occupations.", events:[
    {title:"Red-White-Red Card Ã¢â‚¬â€ pontuaÃƒÂ§ÃƒÂ£o revisada", desc:"BMI baixa pontuaÃƒÂ§ÃƒÂ£o mÃƒÂ­nima de 70 pra 65 pontos em ocupaÃƒÂ§ÃƒÂµes em escassez. Engenheiros de software e geriatria tÃƒÂªm path acelerado.", src:"BMI Ã‚Â· migration.gv.at", time:"-3d"},
    {title:"Skilled Workers in Shortage Occupations Ã¢â‚¬â€ 47 profissÃƒÂµes", desc:"Lista de escassez atualizada. SalÃƒÂ¡rio mÃƒÂ­nimo Ã¢â€šÂ¬31.500/ano (era Ã¢â€šÂ¬34.000).", src:"BMI", time:"-1w"}
  ]},
  { code:"be", name:"BÃƒÂ©lgica", coords:[50.50,4.47], status:"stable", changes:1, authority:"Office des Ãƒâ€°trangers", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F26%2FGrand-Place%252C_Brussels_-_panorama%252C_June_2018.jpg&w=1200&q=80&output=jpg", summary:"BÃƒÂ©lgica simplifica Single Permit pra estrangeiros nÃƒÂ£o-UE. Procedimento agora 100% digital via portal ÃƒÂºnico. Tempo mÃƒÂ©dio cai pra 4 meses.", events:[
    {title:"Single Permit Ã¢â‚¬â€ portal digital unificado", desc:"DOFI lanÃƒÂ§a plataforma ÃƒÂºnica online integrando todas as 3 regiÃƒÂµes (Flandres, ValÃƒÂ´nia, Bruxelas). Processamento mÃƒÂ©dio 4 meses.", src:"DOFI Ã‚Â· ibz.be", time:"-4d"}
  ]},
  { code:"bg", name:"BulgÃƒÂ¡ria", coords:[42.73,25.49], status:"stable", changes:1, authority:"MVR", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc0%2FCatedral_de_Alejandro_Nevski_--_2019_--_Sof%25C3%25ADa%252C_Bulgaria.jpg&w=1200&q=80&output=jpg", summary:"BulgÃƒÂ¡ria amplia visto de longa permanÃƒÂªncia D pra remote workers. Schengen completo desde 2025 Ã¢â‚¬â€ atrai nÃƒÂ´mades digitais com custo de vida baixo.", events:[
    {title:"Visa D Ã¢â‚¬â€ categoria 'remote work' formalizada", desc:"MVR adiciona subcategoria pra trabalhadores remotos com renda comprovada de Ã¢â€šÂ¬3.500+/mÃƒÂªs. PermanÃƒÂªncia inicial 12 meses, renovÃƒÂ¡vel.", src:"MVR Ã‚Â· gov.bg", time:"-5d"}
  ]},
  { code:"cy", name:"Chipre", coords:[35.13,33.43], status:"stable", changes:1, authority:"CRMD", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9a%2FRoca_de_Afrodita%252C_Chipre%252C_2021-12-10%252C_DD_65.jpg&w=1200&q=80&output=jpg", summary:"Chipre mantÃƒÂ©m regime de tax-friendly residency pra non-doms. Permanent Residency via investimento imobiliÃƒÂ¡rio Ã¢â€šÂ¬300k+ continua ativo. Hub atrativo pra finanÃƒÂ§as e tech.", events:[
    {title:"Digital Nomad Visa Ã¢â‚¬â€ extensÃƒÂ£o pra 3 anos", desc:"CRMD amplia duraÃƒÂ§ÃƒÂ£o inicial do Digital Nomad Visa pra 36 meses. Renda mÃƒÂ­nima Ã¢â€šÂ¬3.500/mÃƒÂªs mantida.", src:"CRMD Ã‚Â· moi.gov.cy", time:"-1w"}
  ]},
  { code:"hr", name:"CroÃƒÂ¡cia", coords:[45.10,15.20], status:"stable", changes:2, authority:"MUP", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F67%2FThe_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg&w=1200&q=80&output=jpg", summary:"CroÃƒÂ¡cia consolidada no Schengen + zona Euro desde 2023. Digital Nomad Permit popular entre brasileiros. Custo de vida competitivo na UE.", events:[
    {title:"Digital Nomad Permit Ã¢â‚¬â€ extensÃƒÂ£o pra 18 meses", desc:"MUP estende permissÃƒÂ£o inicial de 12 pra 18 meses, com possibilidade de mais 18. Renda mÃƒÂ­nima Ã¢â€šÂ¬2.870/mÃƒÂªs.", src:"MUP Ã‚Â· mup.gov.hr", time:"-3d"},
    {title:"Work Permit Ã¢â‚¬â€ quotas 2026 anunciadas", desc:"Governo croata aprovou 207.500 vagas pra trabalhadores estrangeiros em 2026 (era 178k em 2025).", src:"MUP", time:"-2w"}
  ]},
  { code:"sk", name:"EslovÃƒÂ¡quia", coords:[48.67,19.70], status:"stable", changes:1, authority:"MV SR", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb4%2FBratislava_-_Burg_%2528b%2529.JPG&w=1200&q=80&output=jpg", summary:"EslovÃƒÂ¡quia mantÃƒÂ©m Single Permit padrÃƒÂ£o UE. CenÃƒÂ¡rio estÃƒÂ¡vel, com leve abertura pra IT skilled workers via parceiros corporativos.", events:[
    {title:"Skilled Worker Ã¢â‚¬â€ fast-track pra IT corporativo", desc:"Ministerstvo VnÃƒÂºtra lanÃƒÂ§a canal expresso pra contrataÃƒÂ§ÃƒÂµes tech via empresas certificadas. DecisÃƒÂ£o em 30 dias.", src:"MV SR Ã‚Â· minv.sk", time:"-5d"}
  ]},
  { code:"si", name:"EslovÃƒÂªnia", coords:[46.15,14.99], status:"stable", changes:1, authority:"Govt SI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F84%2FLake_Bled_from_the_Mountain.jpg&w=1200&q=80&output=jpg", summary:"EslovÃƒÂªnia abriu Digital Nomad Visa em jan/2025. Schengen + Euro + qualidade de vida alta. Cresce como destino discreto pra remote workers.", events:[
    {title:"Digital Nomad Visa Ã¢â‚¬â€ 1 ano renovÃƒÂ¡vel", desc:"Portal gov.si confirma vigÃƒÂªncia integral. Renda mÃƒÂ­nima Ã¢â€šÂ¬2.300/mÃƒÂªs. Sem direito a trabalhar pra empresa eslovena local.", src:"Govt SI Ã‚Â· gov.si", time:"-4d"}
  ]},
  { code:"ee", name:"EstÃƒÂ´nia", coords:[58.60,25.01], status:"stable", changes:2, authority:"Politsei", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F70%2FRaekoja_plats_at_night.jpg&w=1200&q=80&output=jpg", summary:"EstÃƒÂ´nia segue como pioneira em e-Residency e Digital Nomad Visa. Setor tech robusto, baixa burocracia. Visa decisions em atÃƒÂ© 30 dias.", events:[
    {title:"e-Residency atinge 130k membros", desc:"Programa cresceu 18% em 2025. Empreendedores podem abrir e operar empresa UE 100% remoto.", src:"Politsei Ã‚Â· e-resident.gov.ee", time:"-1w"},
    {title:"Digital Nomad Visa Ã¢â‚¬â€ quota 2026 ampliada", desc:"Politsei confirma teto anual de 2.500 vistos (era 1.800). Renda mÃƒÂ­nima Ã¢â€šÂ¬4.500/mÃƒÂªs.", src:"Politsei", time:"-3d"}
  ]},
  { code:"fi", name:"FinlÃƒÂ¢ndia", coords:[61.92,25.75], status:"stable", changes:2, authority:"Migri", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7d%2FKirkko3.png&w=1200&q=80&output=jpg", summary:"FinlÃƒÂ¢ndia lidera Europa em qualidade de vida + sistema de imigraÃƒÂ§ÃƒÂ£o eficiente. Specialist Permit pra tech tem decisÃƒÂ£o em 14 dias. Migri amplia canais pra healthcare.", events:[
    {title:"Specialist Permit Ã¢â‚¬â€ decisÃƒÂ£o em 14 dias", desc:"Migri reduz prazo mÃƒÂ©dio de 30 pra 14 dias pra profissionais qualificados (tech, eng, healthcare).", src:"Migri Ã‚Â· migri.fi", time:"-2d"},
    {title:"Job Seeker's Residence Permit Ã¢â‚¬â€ 6 meses pra qualificados", desc:"Novo permit pra graduados em ocupaÃƒÂ§ÃƒÂµes em escassez procurarem emprego direto na FinlÃƒÂ¢ndia.", src:"Migri", time:"-1w"}
  ]},
  { code:"gr", name:"GrÃƒÂ©cia", coords:[39.07,21.82], status:"stable", changes:2, authority:"Min Migration", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbf%2F2011_Dimos_Thiras.png&w=1200&q=80&output=jpg", summary:"GrÃƒÂ©cia mantÃƒÂ©m Golden Visa atrativo (threshold Ã¢â€šÂ¬500k em zonas premium). Digital Nomad Visa popular. Renda + clima + Schengen atraem fluxo crescente.", events:[
    {title:"Golden Visa Ã¢â‚¬â€ threshold escalonado por regiÃƒÂ£o", desc:"Min Migration confirma Ã¢â€šÂ¬800k em ÃƒÂtica/TessalÃƒÂ´nica/ilhas premium, Ã¢â€šÂ¬400k no resto. VigÃƒÂªncia 2026.", src:"Min Migration Ã‚Â· migration.gov.gr", time:"-3d"},
    {title:"Digital Nomad Visa Ã¢â‚¬â€ renda mÃƒÂ­nima ajustada", desc:"CritÃƒÂ©rio sobe de Ã¢â€šÂ¬3.500 pra Ã¢â€šÂ¬3.800/mÃƒÂªs. PermissÃƒÂ£o 12 meses + renovaÃƒÂ§ÃƒÂ£o.", src:"Min Migration", time:"-1w"}
  ]},
  { code:"nl", name:"Holanda", coords:[52.13,5.29], status:"warn", changes:2, authority:"IND", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Fff%2FKinderdijkMolens02.jpg&w=1200&q=80&output=jpg", summary:"Holanda em modo de aperto: Highly Skilled Migrant salary threshold sobe pra Ã¢â€šÂ¬5.688/mÃƒÂªs (era Ã¢â€šÂ¬5.331). DAFT (US-NL) mantido. PressÃƒÂ£o polÃƒÂ­tica contra imigraÃƒÂ§ÃƒÂ£o lÃƒÂ­quida alta.", events:[
    {title:"Highly Skilled Migrant Ã¢â‚¬â€ salary threshold sobe", desc:"IND eleva critÃƒÂ©rio pra Ã¢â€šÂ¬5.688/mÃƒÂªs (era Ã¢â€šÂ¬5.331). RecÃƒÂ©m-graduados mantÃƒÂªm threshold reduzido Ã¢â€šÂ¬4.071/mÃƒÂªs.", src:"IND Ã‚Â· ind.nl", time:"-2d"},
    {title:"DAFT (Dutch-American Friendship Treaty) Ã¢â‚¬â€ quota mantida", desc:"Acordo bilateral US-NL pra empreendedores americanos mantido apesar de revisÃƒÂ£o. Investimento mÃƒÂ­nimo Ã¢â€šÂ¬4.500.", src:"IND", time:"-1w"}
  ]},
  { code:"hu", name:"Hungria", coords:[47.16,19.50], status:"warn", changes:2, authority:"OIF", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F99%2FHungarian_Parliament_Building_from_across_the_Danube%252C_2025-01-11.jpg&w=1200&q=80&output=jpg", summary:"Hungria endurece polÃƒÂ­tica migratÃƒÂ³ria sob governo OrbÃƒÂ¡n. Golden Visa relanÃƒÂ§ado em 2024 com threshold Ã¢â€šÂ¬250k. TensÃƒÂ£o constante UE Ãƒâ€” Hungria sobre regras de fronteira.", events:[
    {title:"Guest Investor Program Ã¢â‚¬â€ Golden Visa relanÃƒÂ§ado", desc:"OIF reativa Golden Visa com investimento mÃƒÂ­nimo Ã¢â€šÂ¬250k em fundo imobiliÃƒÂ¡rio aprovado OU Ã¢â€šÂ¬500k em propriedade direta.", src:"OIF Ã‚Â· oif.gov.hu", time:"-1w"},
    {title:"White Card Ã¢â‚¬â€ Digital Nomad estendida", desc:"Visa pra remote workers ampliada pra 2 anos. Renda mÃƒÂ­nima Ã¢â€šÂ¬3.000/mÃƒÂªs.", src:"OIF", time:"-3d"}
  ]},
  { code:"lv", name:"LetÃƒÂ´nia", coords:[56.88,24.60], status:"stable", changes:1, authority:"PMLP", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FRiga_%252833844464828%2529.jpg&w=1200&q=80&output=jpg", summary:"LetÃƒÂ´nia mantÃƒÂ©m Temporary Residence Permit via investimento imobiliÃƒÂ¡rio Ã¢â€šÂ¬250k+ ou business Ã¢â€šÂ¬50k+. Schengen + Euro + custo competitivo.", events:[
    {title:"Startup Visa Ã¢â‚¬â€ vigÃƒÂªncia ampliada pra 3 anos", desc:"PMLP estende Startup Visa inicial de 12 pra 36 meses. Programa atraiu 480 startups em 2025.", src:"PMLP Ã‚Â· pmlp.gov.lv", time:"-1w"}
  ]},
  { code:"lt", name:"LituÃƒÂ¢nia", coords:[55.17,23.88], status:"stable", changes:1, authority:"Migration Dept", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa8%2FTrakai_castle_2016.jpg&w=1200&q=80&output=jpg", summary:"LituÃƒÂ¢nia abre cada vez mais pra tech talents via Startup Visa. Programa atrai fundadores de toda Europa Oriental. Schengen + Euro + ecossistema fintech crescente.", events:[
    {title:"Startup Visa Ã¢â‚¬â€ extensÃƒÂ£o 3 anos pra Class-A", desc:"Migration Department amplia path pra residÃƒÂªncia permanente em 3 anos pra Class-A startups (com investimento ou traÃƒÂ§ÃƒÂ£o validada).", src:"Migration Dept Ã‚Â· migracija.lt", time:"-5d"}
  ]},
  { code:"lu", name:"Luxemburgo", coords:[49.82,6.13], status:"stable", changes:1, authority:"Guichet.lu", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fdb%2FLuxembourg_Grand_Ducal_Palace_01.jpg&w=1200&q=80&output=jpg", summary:"Luxemburgo continua hub financeiro com regras prÃƒÂ³-talento qualificado. Highly Qualified Worker permit em 3 meses. Centro fiscal preferido pra fundos.", events:[
    {title:"Highly Qualified Worker Ã¢â‚¬â€ salary threshold revisado", desc:"Guichet.lu confirma critÃƒÂ©rio Ã¢â€šÂ¬87.780/ano pra Highly Qualified Worker (era Ã¢â€šÂ¬82.864). Setor financeiro mantÃƒÂ©m prioridade.", src:"Guichet.lu", time:"-1w"}
  ]},
  { code:"mt", name:"Malta", coords:[35.94,14.38], status:"stable", changes:2, authority:"IdentitÃƒÂ  Malta", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb7%2FSt_Sebastian_Curtain_%2528cropped%2529.jpg&w=1200&q=80&output=jpg", summary:"Malta mantÃƒÂ©m Malta Permanent Residence Programme (MPRP) ativo. ApÃƒÂ³s reformas UE, requer combinaÃƒÂ§ÃƒÂ£o investimento + propriedade. Hub fintech + iGaming.", events:[
    {title:"MPRP Ã¢â‚¬â€ investimento total mÃƒÂ­nimo Ã¢â€šÂ¬115k", desc:"IdentitÃƒÂ  Malta confirma estrutura combinada: contribuiÃƒÂ§ÃƒÂ£o governamental Ã¢â€šÂ¬68k + investimento imobiliÃƒÂ¡rio Ã¢â€šÂ¬350k mÃƒÂ­nimo.", src:"IdentitÃƒÂ  Malta Ã‚Â· identita.gov.mt", time:"-4d"},
    {title:"Nomad Residence Permit Ã¢â‚¬â€ renda mÃƒÂ­nima Ã¢â€šÂ¬3.500/mÃƒÂªs", desc:"Programa pra remote workers consolidado. PermissÃƒÂ£o 1 ano renovÃƒÂ¡vel atÃƒÂ© 4 anos.", src:"IdentitÃƒÂ  Malta", time:"-1w"}
  ]},
  { code:"ro", name:"RomÃƒÂªnia", coords:[45.94,24.97], status:"stable", changes:2, authority:"IGI", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F17%2FCastelul_Bran2.jpg&w=1200&q=80&output=jpg", summary:"RomÃƒÂªnia entrou Schengen em mar/2024 Ã¢â‚¬â€ fluxo migratÃƒÂ³rio cresceu. Digital Nomad Visa simples. Custo de vida competitivo + crescimento tech (cluster Bucareste/Cluj).", events:[
    {title:"Digital Nomad Visa Ã¢â‚¬â€ vigÃƒÂªncia 12 meses renovÃƒÂ¡vel", desc:"IGI confirma path estÃƒÂ¡vel. Renda mÃƒÂ­nima Ã¢â€šÂ¬3.700/mÃƒÂªs comprovada. IsenÃƒÂ§ÃƒÂ£o fiscal sobre renda externa por 12 meses.", src:"IGI Ã‚Â· igi.mai.gov.ro", time:"-3d"},
    {title:"Long-stay D Visa Ã¢â‚¬â€ categoria tech ampliada", desc:"Lista de ocupaÃƒÂ§ÃƒÂµes tech elegÃƒÂ­veis pra Single Permit ampliada em 28 profissÃƒÂµes.", src:"IGI", time:"-1w"}
  ]},
  { code:"se", name:"SuÃƒÂ©cia", coords:[60.13,18.64], status:"warn", changes:2, authority:"Migrationsverket", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8a%2FGamla_stan_September_2014_01.jpg&w=1200&q=80&output=jpg", summary:"SuÃƒÂ©cia em modo restritivo desde governo Kristersson. Work Permit salary threshold subiu pra SEK 38.500/mÃƒÂªs. DiscussÃƒÂ£o sobre cortes mais profundos no parlamento.", events:[
    {title:"Work Permit Ã¢â‚¬â€ salary threshold SEK 38.500/mÃƒÂªs", desc:"Migrationsverket aplica novo critÃƒÂ©rio desde nov/2025. Reduzido pra ocupaÃƒÂ§ÃƒÂµes em escassez via lista oficial.", src:"Migrationsverket Ã‚Â· migrationsverket.se", time:"-2d"},
    {title:"Family Reunification Ã¢â‚¬â€ comprovaÃƒÂ§ÃƒÂ£o financeira reforÃƒÂ§ada", desc:"Patrocinador agora precisa comprovar SEK 415k/ano (era SEK 339k). Apertou recurso pra reunificaÃƒÂ§ÃƒÂ£o.", src:"Migrationsverket", time:"-1w"}
  ]},
  { code:"cz", name:"TchÃƒÂ©quia", coords:[49.82,15.47], status:"stable", changes:1, authority:"MV Ã„Å’R", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F22%2FPrague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg&w=1200&q=80&output=jpg", summary:"TchÃƒÂ©quia mantÃƒÂ©m regime estÃƒÂ¡vel. Employee Card via empregador ÃƒÂ© principal via. Programa Highly Qualified Employee pra tech tem decisÃƒÂ£o em 30 dias.", events:[
    {title:"Highly Qualified Employee Ã¢â‚¬â€ decisÃƒÂ£o em 30 dias", desc:"Ministerstvo Vnitra mantÃƒÂ©m prazo expresso pra tech + healthcare. Lista de ocupaÃƒÂ§ÃƒÂµes qualificadas inclui 89 profissÃƒÂµes.", src:"MV Ã„Å’R Ã‚Â· mvcr.cz", time:"-5d"}
  ]},

  // ===== ÃƒÂSIA-PACÃƒÂFICO =====
  { code:"au", name:"AustrÃƒÂ¡lia", coords:[-25.27,133.77], status:"crit", changes:4, authority:"DHA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa0%2FSydney_Australia._%252821339175489%2529.jpg&w=1200&q=80&output=jpg", summary:"AustrÃƒÂ¡lia em modo restritivo: 189 Visa corta 18% das vagas, GTI processing time vai a 6 meses. Working Holiday Visa pra Brasil dobra (2.500 vagas) Ã¢â‚¬â€ ÃƒÂºnica boa notÃƒÂ­cia. Skilled Occupation List passa por revisÃƒÂ£o profunda.", events:[
    {title:"189 Visa Ã¢â‚¬â€ vagas reduzidas em 18%", desc:"Department of Home Affairs anuncia corte no skilled migration program. Quotas serÃƒÂ£o revistas em outubro. Categorias tech e saÃƒÂºde devem manter prioridade.", src:"DHA", time:"hÃƒÂ¡ 2h"},
    {title:"Subclass 482 nova lista de ocupaÃƒÂ§ÃƒÂµes", desc:"Skilled Occupation List atualizada. 76 profissÃƒÂµes adicionadas, 23 removidas.", src:"DHA", time:"-1d"},
    {title:"Working Holiday Visa quota Brasil dobra", desc:"2.500 vagas anuais (era 1.250). Programa amplia parceria bilateral.", src:"DHA", time:"-3d"},
    {title:"GTI processing time aumenta pra 6 meses", desc:"Global Talent Independent visa enfrenta backlog. Solicitantes Tech mantÃƒÂªm prioridade.", src:"DHA", time:"-5d"}
  ]},
  { code:"nz", name:"Nova ZelÃƒÂ¢ndia", coords:[-40.90,174.89], status:"stable", changes:2, authority:"INZ", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb6%2FMilford_Sound_%2528New_Zealand%2529.JPG&w=1200&q=80&output=jpg", summary:"Nova ZelÃƒÂ¢ndia reduz Skilled Migrant Category pra 6 pts mÃƒÂ­nimo + lanÃƒÂ§a Active Investor Plus Green Stream (NZD 5M). CenÃƒÂ¡rio convidativo pra tech, healthcare e investidores verdes.", events:[
    {title:"Skilled Migrant Category Ã¢â‚¬â€ score reduzido pra 6 pts", desc:"Limiar mais acessÃƒÂ­vel pra atrair tech e healthcare. Categoria 'Green List' mantÃƒÂ©m fast-track em 6 semanas.", src:"INZ Ã‚Â· immigration.govt.nz", time:"-3d"},
    {title:"Active Investor Plus Ã¢â‚¬â€ Green Stream NZD 5M", desc:"Nova categoria pra investimentos em sustentabilidade e infra verde. Path direto pra residÃƒÂªncia em 4 anos.", src:"INZ", time:"-1w"}
  ]},
  { code:"cn", name:"China", coords:[35.86,104.20], status:"stable", changes:2, authority:"NIA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F23%2FThe_Great_Wall_of_China_at_Jinshanling-edit.jpg&w=1200&q=80&output=jpg", summary:"China abre porta pra elite global com Z Visa permanente e Hainan FTZ visa-free. NIA sinaliza receptividade tech sem precedente Ã¢â‚¬â€ embora exija nÃƒÂ­vel salarial alto e contribuiÃƒÂ§ÃƒÂ£o estratÃƒÂ©gica.", events:[
    {title:"Z Visa permanente Ã¢â‚¬â€ abertura pra talentos globais", desc:"NIA anuncia path de residÃƒÂªncia permanente pra Class-A talents. SalÃƒÂ¡rio mÃƒÂ­nimo USD 240k/ano ou patente/publicaÃƒÂ§ÃƒÂ£o relevante.", src:"NIA Ã‚Â· nia.gov.cn", time:"-2d"},
    {title:"Hainan FTZ Ã¢â‚¬â€ visa-free expandido pra 54 paÃƒÂ­ses", desc:"144h transit visa-free expandido. Hainan ganha regime especial pra entrada de profissionais e investidores.", src:"NIA Ã‚Â· State Council", time:"-1w"}
  ]},
  { code:"sg", name:"Singapura", coords:[1.35,103.81], status:"stable", changes:1, authority:"MOM", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc7%2FMarina_Bay_Sands_%2528I%2529.jpg&w=1200&q=80&output=jpg", summary:"Singapura eleva critÃƒÂ©rio do ONE Pass pra SGD 30k/mÃƒÂªs Ã¢â‚¬â€ visando elite global. Fast-track pra ciÃƒÂªncia aplicada mantido. PolÃƒÂ­tica seletiva e estÃƒÂ¡vel, foco em ultra-qualificados.", events:[
    {title:"ONE Pass Ã¢â‚¬â€ critÃƒÂ©rios revisados", desc:"SalÃƒÂ¡rio mÃƒÂ­nimo passa pra SGD 30k/mÃƒÂªs. Profissionais em ciÃƒÂªncia aplicada tÃƒÂªm fast-track.", src:"MOM", time:"-2d"}
  ]},
  { code:"jp", name:"JapÃƒÂ£o", coords:[36.20,138.25], status:"stable", changes:1, authority:"ISA", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff8%2FView_of_Mount_Fuji_from_%25C5%258Cwakudani_20211202.jpg&w=1200&q=80&output=jpg", summary:"JapÃƒÂ£o lanÃƒÂ§a track expresso pra Highly-Skilled Professional: PR em 1 ano se atingir 80 pts. Foco em pesquisadores e tech. Sinaliza abertura crescente do mercado tradicionalmente fechado.", events:[
    {title:"Highly-Skilled Professional ganha track expresso", desc:"PR em 1 ano de residÃƒÂªncia pra quem atingir 80 pts. Categoria atrai foco em pesquisadores e tech.", src:"ISA Ã‚Â· moj.go.jp/isa", time:"-2d"}
  ]},

  // ===== ORIENTE MÃƒâ€°DIO =====
  { code:"ae", name:"Emirados ÃƒÂrabes", coords:[23.42,53.84], status:"stable", changes:2, authority:"ICP", imageUrl:"https://images.weserv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F90%2FBurj_Khalifa_%2528worlds_tallest_building%2529_and_the_Dubai_skyline_%252825781049892%2529.jpg&w=1200&q=80&output=jpg", summary:"Emirados expandem Golden Visa pra engenheiros de IA, pesquisadores climÃƒÂ¡ticos e mÃƒÂ©dicos especialistas. Freelancer Visa Dubai 100% digital com taxa ÃƒÂºnica AED 7.500. Ambiente regulatÃƒÂ³rio altamente favorÃƒÂ¡vel a talentos e capital.", events:[
    {title:"Golden Visa amplia profissÃƒÂµes elegÃƒÂ­veis", desc:"Lista inclui engenheiros de IA, pesquisadores climÃƒÂ¡ticos e mÃƒÂ©dicos especialistas. VigÃƒÂªncia imediata.", src:"ICP", time:"-1d"},
    {title:"Freelancer Visa Dubai simplificado", desc:"Processo 100% digital, taxa ÃƒÂºnica AED 7.500.", src:"DET", time:"-1w"}
  ]}
];

export const INBOX_ACCOUNTS: InboxAccount[] = [
  {id:"gmail",   label:"hzfarah.wisehub@gmail.com", icon:"G", cls:"gmail", unread:12, last:"Stripe Ã¢â‚¬â€ Receipt #INV-2841"},
  {id:"adm",     label:"adm@wisehubnow.com",        icon:"A", unread:5,  last:"SolicitaÃƒÂ§ÃƒÂ£o de fatura Ã¢â‚¬â€ Maria Silva"},
  {id:"support", label:"support@wisehubnow.com",    icon:"S", unread:8,  last:"Ticket #4421 Ã¢â‚¬â€ login issue"},
  {id:"sales",   label:"sales@wisehubnow.com",      icon:"$", unread:3,  last:"Lead enterprise Ã¢â‚¬â€ Lisboa"},
  {id:"team",    label:"team@wisehubnow.com",       icon:"T", unread:2,  last:"Sprint review Ã¢â‚¬â€ 13/mai 10h"},
  {id:"hzfarah", label:"hzfarah@wisehubnow.com",    icon:"H", unread:4,  last:"Contrato US LLC Ã¢â‚¬â€ assinatura"},
  {id:"suporte", label:"suporte@wisehubnow.com",    icon:"?", unread:6,  last:"UsuÃƒÂ¡rio BR nÃƒÂ£o consegue logar"},
  {id:"contact", label:"contact@wisehubnow.com",    icon:"@", unread:1,  last:"Parceria Ã¢â‚¬â€ Travel Tech LATAM"},
  {id:"info",    label:"info@wisehubnow.com",       icon:"i", unread:7,  last:"Imprensa Ã¢â‚¬â€ Globo News"}
];

export const DEFAULT_TASKS: Task[] = [
  {id:1, text:"Revisar PR Watch Tower #007", done:false},
  {id:2, text:"Confirmar webhook Stripe na Dashboard", done:false},
  {id:3, text:"Responder support@wisehubnow.com Ã¢â‚¬â€ Ticket #4421", done:false},
  {id:4, text:"Atualizar prompt da Mary com novo brand voice", done:true},
  {id:5, text:"Briefing semanal Ã¢â‚¬â€ preparar slides", done:false},
  {id:6, text:"Validar Stripe taxas com contador", done:false}
];

export const DEFAULT_AGENDA: AgendaItem[] = [
  {id:1, time:"09:00", title:"Call equipe WiseHub Ã¢â‚¬â€ semanal", where:"Google Meet"},
  {id:2, time:"10:30", title:"AnÃƒÂ¡lise sprint C Ã¢â‚¬â€ Stripe webhook", where:"Solo"},
  {id:3, time:"14:00", title:"Review imigraÃƒÂ§ÃƒÂ£o Ã¢â‚¬â€ pendÃƒÂªncias D7", where:"WiseHub Watch Tower"},
  {id:4, time:"16:30", title:"1:1 com Fabiano Ã¢â‚¬â€ design system", where:"Zoom"},
  {id:5, time:"18:00", title:"Encerramento semana", where:"Wrap-up"}
];

export const DEFAULT_REMINDERS: Reminder[] = [
  {id:1, text:"Stripe webhook signing secret ainda pendente", when:"CrÃƒÂ­tico", crit:true},
  {id:2, text:"AtualizaÃƒÂ§ÃƒÂ£o Cowork sai 14/mai Ã¢â‚¬â€ testar Live Artifacts", when:"Em 3 dias"},
  {id:3, text:"Renovar API key Manus dia 5/jun", when:"Em 25 dias"},
  {id:4, text:"Backup mensal WiseRank DB Ã¢â‚¬â€ ÃƒÂºltima 03/mai", when:"Esta semana"}
];

export const DEFAULT_SCHEDULED: ScheduledAction[] = [
  {id:1, icon:"Ã°Å¸Å’Å½", title:"AtualizaÃƒÂ§ÃƒÂ£o diÃƒÂ¡ria do panorama de imigraÃƒÂ§ÃƒÂ£o", frequency:"DiÃƒÂ¡rio Ã‚Â· 06:00", nextRun:"AmanhÃƒÂ£ 06:00", status:"active"},
  {id:2, icon:"Ã¢Å“Â",  title:"CriaÃƒÂ§ÃƒÂ£o de notÃƒÂ­cias para postagem", frequency:"DiÃƒÂ¡rio Ã‚Â· 09:00", nextRun:"AmanhÃƒÂ£ 09:00", status:"active"},
  {id:3, icon:"Ã¢Å¡â€“",  title:"VerificaÃƒÂ§ÃƒÂ£o de novas leis, regras ou eventos", frequency:"3Ãƒâ€” por dia Ã‚Â· 08/14/20", nextRun:"Hoje 20:00", status:"active"},
  {id:4, icon:"Ã°Å¸â€œÅ ", title:"Snapshot semanal Ã¢â‚¬â€ relatÃƒÂ³rio resumo", frequency:"Semanal Ã‚Â· seg 07:00", nextRun:"Seg 07:00", status:"active"},
  {id:5, icon:"Ã°Å¸â€Â", title:"Scan de oportunidades Ã¢â‚¬â€ vistos abertos", frequency:"2Ãƒâ€” por semana", nextRun:"Qua 10:00", status:"active"}
];
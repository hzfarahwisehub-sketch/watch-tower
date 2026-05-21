import type { Country, InboxAccount, Task, AgendaItem, Reminder, ScheduledAction } from "./types";

// Imagens curadas via Unsplash CDN — landmarks reais de cada país.
// URLs validadas via curl em 2026-05-21. Fallback no componente CountryBenchmark
// renderiza emoji bandeira gigante se algum 404 acontecer no futuro.
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&auto=format&fit=crop`;

export const COUNTRIES: Country[] = [
  // ===== AMÉRICA =====
  { code:"ca", name:"Canadá", coords:[56.13,-106.35], status:"crit", changes:5, authority:"IRCC", imageUrl:IMG("1517090504586-fde19ea6066f"), summary:"Canadá lidera 2026 com Express Entry mais agressivo da década. CRS cutoff em 481 (+12 pts vs trimestre anterior), tech-PNP Ontario reabrindo com 2.500 vagas. Tendência: priorização tech + saúde, queda de oportunidades em ocupações genéricas.", events:[
    {title:"Express Entry — CRS cutoff sobe pra 481 (+12 pts)", desc:"IRCC anunciou critério revisado pra rota Q1. Programa Tech-PNP Ontario abre 03/jun com 2.500 vagas previstas. Especialistas projetam +15% de convites pra categoria tech.", src:"IRCC · CIC News", time:"há 14h"},
    {title:"PNP Ontario Tech — stream aberto 03/jun", desc:"Ontario Provincial Nominee Program abre nova janela de aplicação. 2.500 vagas previstas. Pontuação mínima estimada em 437.", src:"Ontario PNP", time:"há 18h"},
    {title:"Novo CRS Express em vigor 01/jul/2026", desc:"Cutoff revisado entra em vigor com regras de prioridade pra Tech e Healthcare.", src:"IRCC", time:"agendado"}
  ]},
  { code:"us", name:"Estados Unidos", coords:[37.09,-95.71], status:"warn", changes:3, authority:"USCIS", imageUrl:IMG("1485871981521-5b1fd3805eee"), summary:"EUA com cenário misto pra 2026: H1B mantém cap de 85k mas wage-based selection penaliza candidatos jovens. EB-5 sob revisão pode alterar threshold de investimento. OPT extension pra STEM em consulta pública.", events:[
    {title:"H1B Lottery 2026 — anúncio oficial 15/jun", desc:"USCIS confirma janela de registro e nova regra de wage-based selection. Cap de 85 mil mantido. Empresas tech dominam picks nos últimos ciclos.", src:"USCIS", time:"ontem"},
    {title:"OPT extension review", desc:"DHS revisa duração de Optional Practical Training pra STEM. Decisão prevista pra julho.", src:"DHS", time:"-3d"},
    {title:"EB-5 mudanças regulatórias", desc:"Investment threshold sob revisão. Decisão pode afetar candidatos atuais.", src:"USCIS", time:"-5d"}
  ]},
  { code:"br", name:"Brasil", coords:[-14.24,-51.92], status:"stable", changes:2, authority:"Polícia Federal", imageUrl:IMG("1483729558449-99ef09a8c325"), summary:"Brasil ganha tração como hub de tech latino. Visto Tech fast-track + naturalização digital criam ambiente competitivo. PF moderniza fluxos via gov.br/pf. Foco em retenção de talentos de IA e fintech.", events:[
    {title:"Visto Tech Brasil — fast-track pra IA e fintech", desc:"Polícia Federal lança visto especial pra profissionais em IA e fintech. Análise em 30 dias úteis, dispensa contrato CLT pra elegíveis.", src:"Polícia Federal · gov.br", time:"-2d"},
    {title:"Naturalização digital pra residentes 4+ anos", desc:"Processo agora 100% online via gov.br/pf. Tempo médio cai pra 6 meses (era 14).", src:"Polícia Federal", time:"-5d"}
  ]},

  // ===== EUROPA =====
  { code:"pt", name:"Portugal", coords:[39.39,-8.22], status:"stable", changes:3, authority:"AIMA", imageUrl:IMG("1555881400-74d7acaacd8b"), summary:"Portugal segue como porta de entrada favorita do Brasil pra UE, mas taxas D7/D8 sobem pra €500 em jul/2026. Golden Visa restrito a Madeira/Açores. Tech Visa renovado até 2028 — caminho mais previsível pra profissionais qualificados.", events:[
    {title:"D7 Visa — nova taxa €500 a partir de 15/jul", desc:"AIMA publica reajuste no Diário da República para vistos D7 e D8. Aplicações já em curso preservam a taxa anterior. Visto D8 (nômades digitais) também afetado.", src:"AIMA · DRE", time:"há 10h"},
    {title:"Tech Visa renovado por mais 2 anos", desc:"Programa de visto pra profissionais qualificados em tech ampliado até 2028.", src:"AICEP", time:"-2d"},
    {title:"Golden Visa lista atualizada", desc:"Apenas Madeira e Açores mantêm opções de investimento elegíveis.", src:"AIMA", time:"-1w"}
  ]},
  { code:"es", name:"Espanha", coords:[40.46,-3.74], status:"stable", changes:1, authority:"Extranjería", imageUrl:IMG("1539037116277-4db20889f2d4"), summary:"Espanha amplia Arraigo Familiar com flexibilização de comprovação digital. Política migratória estável, com foco em reagrupamento familiar e regularização de longa data.", events:[
    {title:"Arraigo Familiar amplia critérios", desc:"Reagrupamento familiar agora aceita comprovação por meios digitais. Vigência imediata.", src:"Ministerio Interior", time:"-4d"}
  ]},
  { code:"uk", name:"Reino Unido", coords:[55.37,-3.43], status:"warn", changes:2, authority:"Home Office", imageUrl:IMG("1513635269975-59663e0ac1ad"), summary:"Reino Unido mantém Graduate Visa de 2 anos após pressão universitária. Skilled Worker salary threshold sob ajuste pra outubro/2026. Pós-Brexit: ainda atrai talentos tech mas processos mais lentos.", events:[
    {title:"Graduate Visa — duração de 2 anos mantida", desc:"Home Office reverte proposta de redução pra 18 meses após pressão de universidades. Acordo vale até 2028. Pós-graduandos PhD mantêm 3 anos.", src:"Home Office · GOV.UK", time:"-3d"},
    {title:"Skilled Worker salary threshold revisado", desc:"Salário mínimo pra Skilled Worker Visa será ajustado pra inflação em outubro.", src:"Home Office", time:"-5d"}
  ]},
  { code:"de", name:"Alemanha", coords:[51.16,10.45], status:"stable", changes:2, authority:"BAMF", imageUrl:IMG("1560969184-10fe8719e047"), summary:"Alemanha facilita Chancenkarte (pontuação mínima cai pra 6) e baixa threshold da Blue Card EU pra €45.300/ano. Tendência clara: atrair tech, saúde e engenharia pra suprir escassez de mão-de-obra qualificada.", events:[
    {title:"Chancenkarte — ampliação 2026", desc:"Pontuação reduzida pra 6 pts mínimo. Idioma alemão perde peso no scoring, experiência profissional ganha mais relevância. Vigência imediata.", src:"BMI · Bundesregierung", time:"-2d"},
    {title:"Blue Card EU — salary threshold reduzido", desc:"Limite mínimo cai pra €45.300/ano (era €56.400). Impacta profissões em escassez.", src:"BAMF", time:"-1w"}
  ]},
  { code:"fr", name:"França", coords:[46.22,2.21], status:"stable", changes:1, authority:"DGEF", imageUrl:IMG("1499856871958-5b9627545d1a"), summary:"França simplifica Passeport Talent via portal único online. Tempo médio de análise cai pra 60 dias. Cenário estável, com foco em atrair pesquisadores, empreendedores e profissionais de alto valor.", events:[
    {title:"Passeport Talent simplificado", desc:"Procedimento online consolidado em portal único. Tempo médio de análise cai pra 60 dias.", src:"DGEF · France Visas", time:"-3d"}
  ]},
  { code:"it", name:"Itália", coords:[41.87,12.56], status:"warn", changes:2, authority:"MAECI", imageUrl:IMG("1552832230-c0197dd311b5"), summary:"Itália anuncia Decreto Flussi 2026 com 165k vagas — distribuição preferencial pra Brasil e Argentina. Visto Investidor sobe pra €2M em bonds. Janela de registro 22/jun: prepare-se pra alta demanda.", events:[
    {title:"Decreto Flussi 2026 — quotas anunciadas", desc:"Janela 22/jun pra registro. 165k vagas previstas, distribuição preferencial pra Brasil e Argentina.", src:"MAECI", time:"agendado"},
    {title:"Visto Investidor — threshold atualizado", desc:"Investimento mínimo em bonds governamentais sobe pra €2M.", src:"MAE", time:"-4d"}
  ]},
  { code:"dk", name:"Dinamarca", coords:[56.26,9.50], status:"stable", changes:2, authority:"SIRI", imageUrl:IMG("1513622470522-26c3c8a854bc"), summary:"Dinamarca segue altamente seletiva mas eficiente. Positive List ampliada e Startup Denmark com limiar reduzido (€40k) — sinal claro de busca por talento qualificado em verticais estratégicas.", events:[
    {title:"Positive List 2026 atualizada — +37 profissões", desc:"SIRI atualiza lista de ocupações com escassez. Fast-track pra TI, engenharia e saúde mantido. Resposta em até 30 dias.", src:"SIRI · nyidanmark.dk", time:"-3d"},
    {title:"Startup Denmark — limiar reduzido pra €40k", desc:"Investimento mínimo cai. Foco em fundadores tech e green tech. Painel de avaliação inclui scaleups internacionais.", src:"SIRI", time:"-1w"}
  ]},
  { code:"pl", name:"Polônia", coords:[51.92,19.13], status:"stable", changes:2, authority:"UDSC", imageUrl:IMG("1607427293702-036933bbf746"), summary:"Polônia se posiciona como porta de entrada UE de baixo custo. Blue Card threshold competitivo + Karta Polaka acelerada — atraindo IT da Ucrânia, Belarus e tech globais.", events:[
    {title:"Karta Polaka acelera caminho pra UE", desc:"Documento agora dá direito a permanência imediata + naturalização em 1 ano. Foco em descendentes poloneses.", src:"UDSC · gov.pl", time:"-2d"},
    {title:"Blue Card PL — threshold de €27k mantido", desc:"UDSC confirma salário mínimo competitivo, atraindo IT da Ucrânia, Belarus e devs globais.", src:"UDSC", time:"-1w"}
  ]},
  { code:"ie", name:"Irlanda", coords:[53.41,-8.24], status:"stable", changes:2, authority:"Irish Immigration", imageUrl:IMG("1590089415225-401ed6f9db8e"), summary:"Irlanda mantém perfil de hub tech global. Critical Skills Permit expandido + Stamp 4 family reunification simplificado. Department of Justice processa 90% dos casos em 90 dias.", events:[
    {title:"Critical Skills Permit — lista revisada · 41 profissões", desc:"Department of Justice adiciona AI engineers, climate scientists e especialistas em geriatria. Salário mínimo €38k.", src:"Irish Immigration · DoJ", time:"-2d"},
    {title:"Stamp 4 family reunification simplificado", desc:"Comprovação digital aceita. Processamento médio cai pra 90 dias.", src:"Irish Immigration", time:"-5d"}
  ]},
  { code:"ch", name:"Suíça", coords:[46.82,8.23], status:"stable", changes:2, authority:"SEM", imageUrl:IMG("1530122037265-a5f1f91d3b99"), summary:"Suíça expande quotas pra UE/EFTA (+12%) e non-EU (8.500 → 12.000). SEM sinaliza priorização clara: fintech, farma, hightech. Salários líquidos seguem entre os mais altos da Europa.", events:[
    {title:"Permis B — quota UE/EFTA ampliada em 12%", desc:"Federal Council confirma quotas anuais expandidas. Foco em fintech, farma e healthtech. Vigência 01/jul/2026.", src:"SEM · admin.ch", time:"-3d"},
    {title:"Highly skilled non-EU/EFTA — cap pra 12.000", desc:"SEM amplia cota anual de 8.500 pra 12.000 vistos. Brasil pode receber até 850 indicações em 2026.", src:"SEM", time:"-1w"}
  ]},

  // ===== ÁSIA-PACÍFICO =====
  { code:"au", name:"Austrália", coords:[-25.27,133.77], status:"crit", changes:4, authority:"DHA", imageUrl:IMG("1506905925346-21bda4d32df4"), summary:"Austrália em modo restritivo: 189 Visa corta 18% das vagas, GTI processing time vai a 6 meses. Working Holiday Visa pra Brasil dobra (2.500 vagas) — única boa notícia. Skilled Occupation List passa por revisão profunda.", events:[
    {title:"189 Visa — vagas reduzidas em 18%", desc:"Department of Home Affairs anuncia corte no skilled migration program. Quotas serão revistas em outubro. Categorias tech e saúde devem manter prioridade.", src:"DHA", time:"há 2h"},
    {title:"Subclass 482 nova lista de ocupações", desc:"Skilled Occupation List atualizada. 76 profissões adicionadas, 23 removidas.", src:"DHA", time:"-1d"},
    {title:"Working Holiday Visa quota Brasil dobra", desc:"2.500 vagas anuais (era 1.250). Programa amplia parceria bilateral.", src:"DHA", time:"-3d"},
    {title:"GTI processing time aumenta pra 6 meses", desc:"Global Talent Independent visa enfrenta backlog. Solicitantes Tech mantêm prioridade.", src:"DHA", time:"-5d"}
  ]},
  { code:"nz", name:"Nova Zelândia", coords:[-40.90,174.89], status:"stable", changes:2, authority:"INZ", imageUrl:IMG("1530021232320-687d8e3dba54"), summary:"Nova Zelândia reduz Skilled Migrant Category pra 6 pts mínimo + lança Active Investor Plus Green Stream (NZD 5M). Cenário convidativo pra tech, healthcare e investidores verdes.", events:[
    {title:"Skilled Migrant Category — score reduzido pra 6 pts", desc:"Limiar mais acessível pra atrair tech e healthcare. Categoria 'Green List' mantém fast-track em 6 semanas.", src:"INZ · immigration.govt.nz", time:"-3d"},
    {title:"Active Investor Plus — Green Stream NZD 5M", desc:"Nova categoria pra investimentos em sustentabilidade e infra verde. Path direto pra residência em 4 anos.", src:"INZ", time:"-1w"}
  ]},
  { code:"cn", name:"China", coords:[35.86,104.20], status:"stable", changes:2, authority:"NIA", imageUrl:IMG("1508804185872-d7badad00f7d"), summary:"China abre porta pra elite global com Z Visa permanente e Hainan FTZ visa-free. NIA sinaliza receptividade tech sem precedente — embora exija nível salarial alto e contribuição estratégica.", events:[
    {title:"Z Visa permanente — abertura pra talentos globais", desc:"NIA anuncia path de residência permanente pra Class-A talents. Salário mínimo USD 240k/ano ou patente/publicação relevante.", src:"NIA · nia.gov.cn", time:"-2d"},
    {title:"Hainan FTZ — visa-free expandido pra 54 países", desc:"144h transit visa-free expandido. Hainan ganha regime especial pra entrada de profissionais e investidores.", src:"NIA · State Council", time:"-1w"}
  ]},
  { code:"sg", name:"Singapura", coords:[1.35,103.81], status:"stable", changes:1, authority:"MOM", imageUrl:IMG("1525625293386-3f8f99389edd"), summary:"Singapura eleva critério do ONE Pass pra SGD 30k/mês — visando elite global. Fast-track pra ciência aplicada mantido. Política seletiva e estável, foco em ultra-qualificados.", events:[
    {title:"ONE Pass — critérios revisados", desc:"Salário mínimo passa pra SGD 30k/mês. Profissionais em ciência aplicada têm fast-track.", src:"MOM", time:"-2d"}
  ]},
  { code:"jp", name:"Japão", coords:[36.20,138.25], status:"stable", changes:1, authority:"ISA", imageUrl:IMG("1493780474015-ba834fd0ce2f"), summary:"Japão lança track expresso pra Highly-Skilled Professional: PR em 1 ano se atingir 80 pts. Foco em pesquisadores e tech. Sinaliza abertura crescente do mercado tradicionalmente fechado.", events:[
    {title:"Highly-Skilled Professional ganha track expresso", desc:"PR em 1 ano de residência pra quem atingir 80 pts. Categoria atrai foco em pesquisadores e tech.", src:"ISA · moj.go.jp/isa", time:"-2d"}
  ]},

  // ===== ORIENTE MÉDIO =====
  { code:"ae", name:"Emirados Árabes", coords:[23.42,53.84], status:"stable", changes:2, authority:"ICP", imageUrl:IMG("1512453979798-5ea266f8880c"), summary:"Emirados expandem Golden Visa pra engenheiros de IA, pesquisadores climáticos e médicos especialistas. Freelancer Visa Dubai 100% digital com taxa única AED 7.500. Ambiente regulatório altamente favorável a talentos e capital.", events:[
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

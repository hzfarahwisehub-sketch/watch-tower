import type { Country, InboxAccount, Task, AgendaItem, Reminder } from "./types";

export const COUNTRIES: Country[] = [
  { code:"ca", name:"Canadá", coords:[56.13,-106.35], status:"crit", changes:5, authority:"IRCC", events:[
    {title:"Express Entry — CRS cutoff sobe pra 481 (+12 pts)", desc:"IRCC anunciou critério revisado pra rota Q1. Programa Tech-PNP Ontario abre 03/jun com 2.500 vagas previstas. Especialistas projetam +15% de convites pra categoria tech.", src:"IRCC · CIC News", time:"há 14h"},
    {title:"PNP Ontario Tech — stream aberto 03/jun", desc:"Ontario Provincial Nominee Program abre nova janela de aplicação. 2.500 vagas previstas. Pontuação mínima estimada em 437.", src:"Ontario PNP", time:"há 18h"},
    {title:"Novo CRS Express em vigor 01/jul/2026", desc:"Cutoff revisado entra em vigor com regras de prioridade pra Tech e Healthcare.", src:"IRCC", time:"agendado"}
  ]},
  { code:"us", name:"Estados Unidos", coords:[37.09,-95.71], status:"warn", changes:3, authority:"USCIS", events:[
    {title:"H1B Lottery 2026 — anúncio oficial 15/jun", desc:"USCIS confirma janela de registro e nova regra de wage-based selection. Cap de 85 mil mantido. Empresas tech dominam picks nos últimos ciclos.", src:"USCIS", time:"ontem"},
    {title:"OPT extension review", desc:"DHS revisa duração de Optional Practical Training pra STEM. Decisão prevista pra julho.", src:"DHS", time:"-3d"},
    {title:"EB-5 mudanças regulatórias", desc:"Investment threshold sob revisão. Decisão pode afetar candidatos atuais.", src:"USCIS", time:"-5d"}
  ]},
  { code:"pt", name:"Portugal", coords:[39.39,-8.22], status:"stable", changes:3, authority:"SEF", events:[
    {title:"D7 Visa — nova taxa €500 a partir de 15/jul", desc:"SEF publica reajuste no Diário da República para vistos D7 e D8. Aplicações já em curso preservam a taxa anterior. Visto D8 (nômades digitais) também afetado.", src:"SEF · DRE", time:"há 10h"},
    {title:"Tech Visa renovado por mais 2 anos", desc:"Programa de visto pra profissionais qualificados em tech ampliado até 2028.", src:"AICEP", time:"-2d"},
    {title:"Golden Visa lista atualizada", desc:"Apenas Madeira e Açores mantêm opções de investimento elegíveis.", src:"SEF", time:"-1w"}
  ]},
  { code:"es", name:"Espanha", coords:[40.46,-3.74], status:"stable", changes:1, authority:"Extranjería", events:[
    {title:"Arraigo Familiar amplia critérios", desc:"Reagrupamento familiar agora aceita comprovação por meios digitais. Vigência imediata.", src:"Ministerio Interior", time:"-4d"}
  ]},
  { code:"uk", name:"Reino Unido", coords:[55.37,-3.43], status:"warn", changes:2, authority:"Home Office", events:[
    {title:"Graduate Visa — duração de 2 anos mantida", desc:"Home Office reverte proposta de redução pra 18 meses após pressão de universidades. Acordo vale até 2028. Pós-graduandos PhD mantêm 3 anos.", src:"Home Office · GOV.UK", time:"-3d"},
    {title:"Skilled Worker salary threshold revisado", desc:"Salário mínimo pra Skilled Worker Visa será ajustado pra inflação em outubro.", src:"Home Office", time:"-5d"}
  ]},
  { code:"de", name:"Alemanha", coords:[51.16,10.45], status:"stable", changes:2, authority:"BMI", events:[
    {title:"Chancenkarte — ampliação 2026", desc:"Pontuação reduzida pra 6 pts mínimo. Idioma alemão perde peso no scoring, experiência profissional ganha mais relevância. Vigência imediata.", src:"BMI · Bundesregierung", time:"-2d"},
    {title:"Blue Card EU — salary threshold reduzido", desc:"Limite mínimo cai pra €45.300/ano (era €56.400). Impacta profissões em escassez.", src:"BAMF", time:"-1w"}
  ]},
  { code:"fr", name:"França", coords:[46.22,2.21], status:"stable", changes:1, authority:"OFII", events:[
    {title:"Passeport Talent simplificado", desc:"Procedimento online consolidado em portal único. Tempo médio de análise cai pra 60 dias.", src:"OFII · France Visas", time:"-3d"}
  ]},
  { code:"it", name:"Itália", coords:[41.87,12.56], status:"warn", changes:2, authority:"MAECI", events:[
    {title:"Decreto Flussi 2026 — quotas anunciadas", desc:"Janela 22/jun pra registro. 165k vagas previstas, distribuição preferencial pra Brasil e Argentina.", src:"MAECI", time:"agendado"},
    {title:"Visto Investidor — threshold atualizado", desc:"Investimento mínimo em bonds governamentais sobe pra €2M.", src:"MAE", time:"-4d"}
  ]},
  { code:"au", name:"Austrália", coords:[-25.27,133.77], status:"crit", changes:4, authority:"DHA", events:[
    {title:"189 Visa — vagas reduzidas em 18%", desc:"Department of Home Affairs anuncia corte no skilled migration program. Quotas serão revistas em outubro. Categorias tech e saúde devem manter prioridade.", src:"DHA", time:"há 2h"},
    {title:"Subclass 482 nova lista de ocupações", desc:"Skilled Occupation List atualizada. 76 profissões adicionadas, 23 removidas.", src:"DHA", time:"-1d"},
    {title:"Working Holiday Visa quota Brasil dobra", desc:"2.500 vagas anuais (era 1.250). Programa amplia parceria bilateral.", src:"DHA", time:"-3d"},
    {title:"GTI processing time aumenta pra 6 meses", desc:"Global Talent Independent visa enfrenta backlog. Solicitantes Tech mantêm prioridade.", src:"DHA", time:"-5d"}
  ]},
  { code:"ae", name:"Emirados Árabes", coords:[23.42,53.84], status:"stable", changes:2, authority:"ICA", events:[
    {title:"Golden Visa amplia profissões elegíveis", desc:"Lista inclui engenheiros de IA, pesquisadores climáticos e médicos especialistas. Vigência imediata.", src:"ICA", time:"-1d"},
    {title:"Freelancer Visa Dubai simplificado", desc:"Processo 100% digital, taxa única AED 7.500.", src:"DET", time:"-1w"}
  ]},
  { code:"sg", name:"Singapura", coords:[1.35,103.81], status:"stable", changes:1, authority:"MOM", events:[
    {title:"ONE Pass — critérios revisados", desc:"Salário mínimo passa pra SGD 30k/mês. Profissionais em ciência aplicada têm fast-track.", src:"MOM", time:"-2d"}
  ]},
  { code:"jp", name:"Japão", coords:[36.20,138.25], status:"stable", changes:1, authority:"MOJ", events:[
    {title:"Highly-Skilled Professional ganha track expresso", desc:"PR em 1 ano de residência pra quem atingir 80 pts. Categoria atrai foco em pesquisadores e tech.", src:"MOJ", time:"-2d"}
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

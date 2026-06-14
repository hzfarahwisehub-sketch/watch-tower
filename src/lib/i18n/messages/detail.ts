// Dicionário do componente CountryDetailSections (namespace "detail.").
// Só chrome da UI: títulos de seção, rótulos de categoria e estados vazios.
// O conteúdo editorial (manchetes, corpos, dicas, nomes de fontes/países) é
// DADO curado e fica fora do dicionário.

const dict = {
  pt: {
    // categorias de fontes (Centros de Informação)
    "detail.cat.news": "📰 Notícias gerais",
    "detail.cat.finance": "💰 Finanças & Mercados",
    "detail.cat.crypto": "🪙 Cripto & Derivativos",
    "detail.cat.legal": "⚖ Leis & Regulação",
    "detail.cat.official": "📌 Fontes oficiais",

    // títulos das seções
    "detail.tips.title": "💡 Dicas práticas",
    "detail.fullStory.title": "📰 Notícia completa",
    "detail.community.title": "📣 Posts pra comunidade",
    "detail.blog.title": "📝 Matéria do Blog WiseHub News",
    "detail.infoCenters.title": "🌐 Centros de Informação ({n})",

    // estados vazios
    "detail.empty.dimension": "Nada nesta dimensão ainda pra {country}. Em curadoria.",
    "detail.empty.noEditorial": "Conteúdo editorial deste país em curadoria pela Friday. Por enquanto, veja o panorama, a atividade ao vivo e as fontes.",
  },
  en: {
    // categorias de fontes (Centros de Informação)
    "detail.cat.news": "📰 General news",
    "detail.cat.finance": "💰 Finance & Markets",
    "detail.cat.crypto": "🪙 Crypto & Derivatives",
    "detail.cat.legal": "⚖ Law & Regulation",
    "detail.cat.official": "📌 Official sources",

    // títulos das seções
    "detail.tips.title": "💡 Practical tips",
    "detail.fullStory.title": "📰 Full story",
    "detail.community.title": "📣 Posts for the community",
    "detail.blog.title": "📝 WiseHub News Blog post",
    "detail.infoCenters.title": "🌐 Information Centers ({n})",

    // estados vazios
    "detail.empty.dimension": "Nothing in this dimension yet for {country}. Being curated.",
    "detail.empty.noEditorial": "Editorial content for this country is being curated by Friday. For now, see the overview, the live activity and the sources.",
  },
} as const;

export default dict;

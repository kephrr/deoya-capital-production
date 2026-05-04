import type { Locale } from "@/i18n/config"

export const pppContent = {
  hero: {
    tag: "DEOYA Capital - PPP",
    title: "Partenariats",
    titleAccent: "Public-Privé",
    introduction: [
      "Les partenariats public-privé ne sont pas uniquement des montages contractuels.",
      "Ils reposent sur des équilibres sensibles entre intérêts publics, logiques économiques et contraintes institutionnelles.",
      "Leur réussite dépend moins d'une approche technique que de la capacité à comprendre et à aligner des acteurs aux objectifs parfois divergents."
    ],
    highlight: ["DEOYA Capital intervient sur cette ", "zone critique", " : là où se rencontrent décision publique, logique d'investissement et réalité terrain."]
  },
  pillars: {
    title: "Nos axes d'intervention",
    items: [
      {
        number: "01",
        title: "Naviguer entre sphères publiques et privées",
        intro: "Les projets en PPP impliquent une multiplicité d'acteurs aux logiques propres :",
        actors: [
          "Institutions publiques",
          "Investisseurs",
          "Opérateurs privés",
          "Partenaires techniques"
        ],
        outcomes: [
          "Faciliter les échanges",
          "Anticiper les points de friction",
          "Structurer des dynamiques de collaboration durables"
        ],
        outcomesLabel: "Nous apportons une lecture claire de ces interactions afin de :"
      },
      {
        number: "02",
        title: "Intégrer les réalités locales dans des cadres internationaux",
        intro: "Dans de nombreux contextes, notamment en Afrique, les projets s'inscrivent dans des environnements hybrides :",
        actors: [
          "Cadres réglementaires en évolution",
          "Pratiques institutionnelles spécifiques",
          "Décalage entre normes théoriques et réalités opérationnelles"
        ],
        note: "Ces éléments ne sont pas des anomalies - ils font partie intégrante du projet.",
        outcomesLabel: "Notre rôle consiste à les intégrer dans la réflexion stratégique, afin d'éviter les décalages entre conception et mise en oeuvre."
      },
      {
        number: "03",
        title: "Une lecture transcontinentale des projets",
        intro: "Les PPP impliquent souvent des acteurs issus de différentes zones économiques. Cette diversité crée des écarts :",
        actors: [
          "Perception du risque",
          "Exigence réglementaire",
          "Temporalité décisionnelle"
        ],
        outcomesLabel: "Nous intervenons dans une logique transcontinentale, en apportant une lecture cohérente de ces différences et en facilitant leur articulation."
      },
      {
        number: "04",
        title: "Une approche ancrée dans la réalité des projets",
        intro: "Au-delà des cadres théoriques, les projets évoluent dans des environnements concrets, avec leurs contraintes et leurs imprévus. Nous intervenons aux côtés des décideurs pour :",
        actors: [
          "Ajuster les approches",
          "Sécuriser les arbitrages",
          "Maintenir la cohérence du projet dans le temps"
        ],
        outcomesLabel: "Cette proximité permet d'éviter les ruptures entre stratégie et réalité."
      }
    ]
  },
  discussProject: {
    title: "Pour aller plus loin",
    subtitle: "Si vous développez un projet impliquant des acteurs publics et privés, ou souhaitez mieux appréhender les dynamiques propres aux partenariats public-privé, nous serons ravis d'examiner les modalités d'un accompagnement adapté à vos enjeux.",
    buttonText: "Échanger avec nous",
    redirectUrl: "/contact",
    backgroundImage: "/business-people-video-call-meeting.jpg"
  }
}

export function getPppContent(locale: Locale) {
  switch (locale) {
    case "fr":
    case "en":
    case "es":
    case "ar":
    default:
      return pppContent
  }
}

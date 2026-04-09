import { Globe, Target, Zap, FileSearch, Compass, Users, Eye, BarChart3, Handshake, Rocket } from "lucide-react"

export const homeContent = {
  videoHero: {
    videoSrc: "/Video DEOYA.mp4",
    label: "Cabinet d'intelligence économique et de conseil stratégique",
    title: "Structurer et exécuter vos investissements internationaux avec une approche transcontinentale",
    subtitle: "Nous analysons les environnements politiques, sectoriels et géostratégiques afin d'accompagner les entreprises et les investisseurs dans leurs décisions d'expansion, d'implantation et de développement sur les marchés internationaux.",
    ctaText: "Découvrir nos expertises",
    ctaHref: "/expertises",
    showCta: true,
    showPreTitle: true,
    height: "min-h-screen",
    secondCta: {
      text: "Discuter de votre projet",
      href: "/contact"
    }
  },
  valueProposition: {
    title: "Notre approche",
    items: [
      {
        icon: Globe,
        title: "Europe, Afrique, Amérique & marchés internationaux",
        description: "Nous maîtrisons les dynamiques africaines et européennes et accompagnons le déploiement de projets d'investissement sur des marchés internationaux à fort potentiel.",
      },
      {
        icon: Target,
        title: "Approche opérationnelle",
        description: "DEOYA CAPITAL ne se limite pas à la production d'analyses. Nous structurons, pilotons et accompagnons la mise en œuvre des projets jusqu'à leur déploiement effectif.",
      },
      {
        icon: Zap,
        title: "Cabinet agile",
        description: "Une structure resserrée et stratégique, appuyée par un réseau international d'experts mobilisés sur mesure selon les enjeux de chaque mission. Cette organisation garantit réactivité, précision et efficacité.",
      },
    ],
    quote: {
      citation: "L'avenir de l'investissement transcontinental appartient à ceux qui savent naviguer entre les environnements, créer des ponts durables entre les économies, sans jamais perdre de vue l'humain.",
      subtext: "— La vision DEOYA CAPITAL"
    }
  },
  expertises: {
    label: "Ce qui nous anime",
    title: "Nos valeurs",
    items: [
      {
        icon: FileSearch,
        title: "Rigueur analytique",
        description: "Chaque analyse est étayée par des données terrain et vérifiées. Zéro approximation dans nos livrables.",
      },
      {
        icon: Compass,
        title: "Indépendance",
        description: "Nous n'avons pas d'intérêts dans les projets que nous accompagnons. Notre seul engagement : votre réussite.",
      },
      {
        icon: Users,
        title: "Discrétion totale",
        description: "Confidentialité absolue sur vos projets, vos partenaires et vos données stratégiques.",
      },
    ]
  },
  domainesIntervention: {
    leftContent: {
      preTitle: "Transformer la complexité des marchés internationaux en ",
      highlight: "décisions stratégiques",
      postTitle: "",
      highlightLine2: "",
      cta: {
        label: "Découvrir notre approche",
        href: "/expertises",
      },
    },
    items: [
      {
        id: "structuration-projets",
        title: "Structuration de projets",
        body: "Cadrage stratégique, modélisation financière, structuration organisationnelle dès la phase amont. Nous accompagnons la mise en place de projets complexes en assurant une fondation solide pour leur développement.",
      },
      {
        id: "analyse-faisabilite",
        title: "Analyse de faisabilité",
        body: "Étude de marché, évaluation des risques et contraintes réglementaires avant tout engagement. Notre expertise permet d'identifier les opportunités et les défis pour garantir la viabilité des projets.",
      },
      {
        id: "relations-institutionnelles",
        title: "Relations institutionnelles & réglementaires",
        body: "Cartographie acteurs publics, dossiers stratégiques, négociations administratives. Nous naviguons efficacement dans les environnements institutionnels complexes pour faciliter vos projets.",
      },
      {
        id: "accompagnement-implantation",
        title: "Accompagnement à l'implantation",
        body: "Coordination terrain, interface locale-internationale jusqu'à l'opérationnel. Nous assurons le lien entre les équipes locales et internationales pour garantir une exécution réussie.",
      },
      {
        id: "coordination-europe-afrique",
        title: "Coordination Europe ↔ Afrique ↔ Amérique du Nord ↔ Asie",
        body: "Alignement des équipes, traduction des standards, synchronisation décisionnelle. Nous facilitons la collaboration transcontinentale en assurant une communication fluide et efficace.",
      },
    ],
    backgroundImage: "/paper-job-office-teamwork-business-analyst.jpg"
  },
  differentiators: {
    label: "Notre différence",
    title: "Pourquoi DEOYA CAPITAL",
    items: [
      {
        icon: Eye,
        title: "Une compréhension approfondie des environnements africains",
        description: "Une connaissance terrain qui dépasse les études théoriques, fondée sur une immersion réelle dans les dynamiques économiques, institutionnelles et culturelles locales.",
      },
      {
        icon: BarChart3,
        title: "Une exigence européenne des standards et des processus",
        description: "Rigueur méthodologique, conformité réglementaire et transparence guident chacune de nos interventions, dans le respect des meilleures pratiques internationales.",
      },
      {
        icon: Handshake,
        title: "Une approche orientée exécution",
        description: "Nous ne produisons pas uniquement des recommandations. Chaque stratégie est conçue pour être opérationnelle, déployable et mesurable.",
      },
      {
        icon: Rocket,
        title: "Une structure agile et stratégique",
        description: "Un noyau de pilotage resserré, soutenu par un réseau international d'experts mobilisés sur mesure. Cette organisation garantit réactivité, précision et proximité avec nos clients.",
      },
    ]
  },
  discussProject: {
    backgroundImage: "/businesspeople-having-good-time-meeting.jpg",
    redirectUrl: "/contact",
    title: "Discutons de votre projet.",
    buttonText: "Contactez-nous",
    useModal: false,
    showSubtitle: false
  }
}

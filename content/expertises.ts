import type { Locale } from "@/i18n/config"

export const expertisesContent = {
  hero: {
    title: "Une expertise structurée au service des investissements internationaux",
    description: `DEOYA CAPITAL accompagne entreprises, investisseurs et institutions dans la
    conception, l'analyse et la mise en œuvre de projets d'investissement à l'échelle
    internationale.
    Nos expertises couvrent l'ensemble des dimensions stratégiques, opérationnelles et
    institutionnelles nécessaires à la réussite de projets complexes.`
  },
  expertises: [
    {
      number: "01",
      title: "structuration de projets",
      objectif: "Structurer des projets solides, cohérents et exécutables dans des environnements complexes",
      description: "Nous accompagnons la conception et l'organisation de projets d'investissement, de la phase de réflexion stratégique à leur mise en œuvre opérationnelle.",
      image: "structuration.png",
      icon: "Target",
      points: [
        {
          title: "Structuration stratégique des projets",
          description: "Définition du positionnement, des objectifs et des scénarios de développement, en cohérence avec les dynamiques du marché cible.",
          icon: "Target"
        },
        {
          title: "Modélisation économique et scénarios de développement",
          description: "Construction de modèles économiques, analyse des hypothèses et structuration de trajectoires de croissance.",
          icon: "TrendingUp"
        },
        {
          title: "Identification et structuration des partenariats",
          description: "Sélection d'acteurs clés (partenaires locaux, techniques ou financiers) et organisation des modalités de collaboration.",
          icon: "FileText"
        },
        {
          title: "Élaboration de feuilles de route opérationnelles",
          description: "Définition des étapes clés, des priorités et des ressources nécessaires au déploiement du projet.",
          icon: "Users"
        },
        {
          title: "Stratégie d'investissement & développement",
          description: "Définition de stratégies d'entrée sur les marchés, priorisation des opportunités et accompagnement des décisions d'investissement.",
          icon: "Users"
        }
      ]
    },
    {
      number: "02",
      title: "analyse de faisabilité",
      objectif: "Sécuriser les décisions et valider la pertinence des projets avant engagement",
      description: "Nous produisons des analyses stratégiques à forte valeur ajoutée permettant d'éclairer les décisions d'investissement et d'évaluer la pertinence des projets en amont.",
      image: "analysis.avif",
      icon: "Search",
      points: [
        {
          title: "Analyse des environnements économiques et sectoriels",
          description: "Étude des dynamiques de marché, des opportunités sectorielles et des conditions d'entrée.",
          icon: "Globe"
        },
        {
          title: "Analyse pays & intelligence économique",
          description: "Analyse des risques politiques, économiques et réglementaires, compréhension des dynamiques locales et cartographie des acteurs clés.",
          icon: "Shield"
        },
        {
          title: "Évaluation des risques réglementaires et opérationnels",
          description: "Identification des contraintes juridiques, administratives et opérationnelles susceptibles d'impacter le projet.",
          icon: "CheckCircle"
        },
        {
          title: "Études de faisabilité et validation des hypothèses",
          description: "Analyse de la viabilité globale du projet au regard du marché, des ressources et des contraintes identifiées.",
          icon: "ArrowRight"
        },
        {
          title: "Veille stratégique & intelligence sectorielle",
          description: "Suivi des évolutions réglementaires et économiques, analyses sectorielles et identification des tendances de marché.",
          icon: "ArrowRight"
        }
      ]
    },
    {
      number: "03",
      title: "relations institutionnelles & environnements réglementaires",
      objectif: "Sécuriser les interactions institutionnelles et faciliter l'implantation des projets",
      description: "Nous facilitons l'accès aux écosystèmes locaux et accompagnons les interactions avec les acteurs institutionnels. Nous intervenons à l'interface des acteurs publics, des cadres réglementaires et des dynamiques institutionnelles propres à chaque marché.",
      image: "relations.jpeg",
      icon: "Building",
      points: [
        {
          title: "Compréhension des cadres institutionnels",
          description: "Analyse des structures administratives, des acteurs publics et des processus décisionnels.",
          icon: "Users"
        },
        {
          title: "Accès aux marchés & mise en relation",
          description: "Identification de partenaires pertinents, mise en relation qualifiée et accompagnement dans les interactions locales.",
          icon: "Shield"
        },
        {
          title: "Accompagnement dans les démarches réglementaires",
          description: "Appui dans la compréhension et la structuration des démarches administratives et réglementaires.",
          icon: "FileText"
        },
        {
          title: "Analyse des dynamiques politiques et institutionnelles",
          description: "Lecture des environnements politiques et évaluation de leur impact sur les projets.",
          icon: "Handshake"
        }
      ]
    },
    {
      number: "04",
      title: "Contre-expertise & validation indépendante",
      objectif: "Identifier les risques, challenger les analyses existantes et renforcer la fiabilité des décisions stratégiques.",
      description: "DEOYA CAPITAL intervient en complément des dispositifs existants afin d’apporter une lecture indépendante, ancrée dans les réalités locales et opérationnelles. Nous analysons, confrontons et validons les orientations stratégiques dans des environnements d’investissement complexes.",
      image: "relations.jpeg",
      icon: "Building",
      points: [
        {
          title: "Relecture stratégique des analyses existantes",
          description: "Analyse critique des rapports, études ou recommandations déjà produits.",
          icon: "Users"
        },
        {
          title: "Validation terrain & réalités locales",
          description: "Confrontation des hypothèses aux réalités institutionnelles, économiques et opérationnelles.",
          icon: "Shield"
        },
        {
          title: "Identification des risques sous-estimés",
          description: "Détection des points de friction potentiels (réglementaires, politiques, partenaires, exécution).",
          icon: "FileText"
        },
        {
          title: "Analyse des acteurs & dynamiques locales",
          description: "Lecture fine des écosystèmes : acteurs clés, influences, rapports de force.",
          icon: "Handshake"
        },
        {
          title: "Recommandations ajustées",
          description: "Proposition d'ajustements concrets pour sécuriser et optimiser le projet.",
          icon: "Handshake"
        }
      ]
    }
  ],
  discussProject: {
    backgroundImage: "/co-workers-with-blue-file.jpg",
    redirectUrl: "/contact",
    title: "Expertises sur mesure pour votre ambition.",
    subtitle: "Notre savoir-faire à votre service. Des solutions adaptées à vos enjeux spécifiques.",
    buttonText: "Bénéficier de notre expertise",
    useModal: false
  }
}

export function getExpertisesContent(locale: Locale) {
  switch (locale) {
    case "fr":
    case "en":
    case "es":
    case "ar":
    default:
      return expertisesContent
  }
}

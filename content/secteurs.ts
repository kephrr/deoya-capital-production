import { Building, Factory, Zap, Droplets, Truck, Cpu, Laptop } from "lucide-react"

export const secteursContent = {
  hero: {
    label: "Nos Secteurs",
    title: "Une expertise multisectorielle pour vos projets ambitieux.",
    description: "De l'industrie lourde aux technologies digitales, nous accompagnons votre transformation dans tous les secteurs stratégiques avec une connaissance pointue des spécificités locales."
  },
  discussProject: {
    backgroundImage: "/discuss.jpg",
    redirectUrl: "/contact",
    title: "Votre secteur, notre expertise.",
    subtitle: "Chaque industrie a ses défis. Nous avons les solutions adaptées à votre domaine.",
    buttonText: "Discuter de votre secteur"
  },
  secteursCards: [
    {
      id: 1,
      title: "Industrie & Manufacturier",
      icon: Factory,
      description: "Optimisation des chaînes de production, implantation d'usines, modernisation industrielle.",
      expertise: ["Ingénierie de production", "Conformité normes ISO", "Gestion de la chaîne d'approvisionnement"]
    },
    {
      id: 2,
      title: "Énergie & Infrastructures",
      icon: Zap,
      description: "Projets d'énergie renouvelable, réseaux électriques, infrastructures critiques.",
      expertise: ["Énergies renouvelables", "Smart grids", "Grands projets d'infrastructure"]
    },
    {
      id: 3,
      title: "Eau & Assainissement",
      icon: Droplets,
      description: "Traitement des eaux, gestion des ressources hydriques, projets d'assainissement urbain.",
      expertise: ["Traitement des eaux", "Gestion intégrée", "Technologies durables"]
    },
    {
      id: 4,
      title: "Transport & Logistique",
      icon: Truck,
      description: "Optimisation des flux logistiques, plateformes multimodales, chaîne du froid.",
      expertise: ["Logistique intégrée", "Transport multimodal", "Supply chain optimisation"]
    },
    {
      id: 5,
      title: "Technologies & Numérique",
      icon: Cpu,
      description: "Transformation digitale, plateformes technologiques, solutions innovantes.",
      expertise: ["Digitalisation", "Plateformes SaaS", "Intelligence artificielle"]
    },
    {
      id: 6,
      title: "Construction & BTP",
      icon: Building,
      description: "Projets immobiliers, infrastructures urbaines, construction durable.",
      expertise: ["BIM & modélisation", "Construction durable", "Management de projet"]
    }
  ],
  intervention: {
    label: "Notre expertise",
    title: "Nos Secteurs d'Intervention",
    description: "Une compréhension fine des défis locaux, une maîtrise des standards internationaux, et un réseau opérationnel immédiatement activable.",
    sectors: [
      {
        icon: Building,
        title: "Infrastructure & BTP",
        challenges: [
          "Sécurité foncière et administrative",
          "Coordination public/privé sur grands projets",
          "Accès aux financements institutionnels (AFD, BEI, Banque Mondiale)",
          "Gestion des relations avec autorités locales"
        ],
        subsegments: ["Infrastructure routière", "Construction", "Smart Cities", "Eau & Assainissement"]
      },
      {
        icon: Zap,
        title: "Énergie & Ressources",
        challenges: [
          "Cartographie réglementaire du secteur énergétique par pays",
          "Structuration de projets en énergies renouvelables",
          "Accompagnement sur concessions et permis d'exploitation",
          "Interface avec ministères de l'énergie et régulateurs"
        ],
        subsegments: ["Solaire", "Hydraulique", "Pétrole & Gaz", "Mines & Ressources naturelles"]
      },
      {
        icon: Factory,
        title: "Industrie & Manufacturing",
        challenges: [
          "Études d'implantation industrielle (zones économiques spéciales)",
          "Accompagnement réglementaire douanier et fiscal",
          "Coordination avec agences de promotion des investissements",
          "Structuration RH et organisation locale"
        ],
        subsegments: ["Agroalimentaire", "Textile", "Transformation locale", "Logistique industrielle"]
      },
      {
        icon: Laptop,
        title: "BPO & Services Digitaux",
        challenges: [
          "Évaluation des hubs BPO africains (Maroc, Sénégal, Côte d'Ivoire...)",
          "Structuration de partenariats opérationnels",
          "Analyse des écosystèmes tech locaux",
          "Accompagnement mise en place centres de services partagés"
        ],
        subsegments: ["Business Process Outsourcing", "Tech & Startups", "Télécoms", "Services financiers digitaux"]
      }
    ],
    navigation: {
      previousSlide: "Slide précédent",
      nextSlide: "Slide suivant",
      goToSlide: "Aller au slide"
    }
  }
}
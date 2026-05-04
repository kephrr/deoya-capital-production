// Configuration des images utilisées dans l'application
// Séparées du contenu textuel pour un meilleur chargement

export const images = {
  // Navigation
  navigation: {
    logo: {
      scrolled: "/deoya-capital-vert-mini.png",
      transparent: "/deoya-capital-blanc-vert-mini.png"
    }
  },

  // Footer
  footer: {
    logo: "/deoya-capital-blanc-vert-mini.png"
  },

  // Social Media Icons
  social: {
    facebook: "/facebook-app-symbol.png",
    instagram: "/instagram.png",
    linkedin: "/linkedin.png",
    youtube: "/youtube.png"
  },

  // Home Page
  home: {
    hero: {
      video: "/Video DEOYA.mp4",
      backgroundImage: "/businesspeople-having-good-time-meeting.jpg"
    },
    domainesIntervention: {
      backgroundImage: "/paper-job-office-teamwork-business-analyst.jpg"
    }
  },

  // Cabinet Page
  cabinet: {
    discussProject: {
      backgroundImage: "/young-business-people-are-discussing-new-creative-ideas-together-meeting-office.jpg"
    },
    trustSection: {
      video: "/video/Deoya video.mp4",
      videoCover: "/video-cover.png"
    },
    notreVision: {
      backgroundPattern: "/light-pattern.jpg"
    },
    zonesGeographiques: {
      backgroundImage: "/1158187_1968.jpg"
    },
    architectureEtEquipe: {
      backgroundPattern: "/light-pattern.jpg"
    },
    expertises: {
      secteursCarousel: {
        energie: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
        infrastructure: "/roadconstructionmachinery.jpg",
        industrie: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
        finance: "/hands-working-with-office-items.jpg"
      }
    }
  }
}

// Fonction helper pour obtenir les chemins d'images
export function getImagePath(section: string, item?: string) {
  const path = section.split('.')
  let current: any = images
  
  for (const key of path) {
    current = current[key]
    if (!current) return null
  }
  
  return item ? current[item] : current
}

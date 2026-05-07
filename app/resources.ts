// Liens de naviguation 
export const navLinks = [
  { label: "Le cabinet", href: "/cabinet", key: "cabinet" },
  { label: "Services", href: "#", key: "services", dropdown: [
    { label: "Notre savoir-faire", href: "/expertises", key: "expertises" },
    { label: "Notre réseau d'experts", href: "/reseau", key: "reseau" },
    { label: "Partenariat(s) public-privé", href: "/partenariats-publics-prives", key: "ppp" }
  ]},
  { label: "Newsletter", href: "/newsletter", key: "newsletter" },
  { label: "Contact", href: "/contact", key: "contact" },
]

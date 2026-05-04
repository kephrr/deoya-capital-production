import type { Locale } from "@/i18n/config"

export const cgvContent = {
  hero: {
    title: "Conditions Générales de Vente",
    subtitle: "DEOYA CAPITAL",
    description: "Les présentes Conditions Générales de Vente (CGV) régissent les prestations de conseil, de structuration, de coordination et de mise en relation proposées par DEOYA CAPITAL."
  },
  sections: [
    {
      title: "1. Objet",
      content: "Les présentes Conditions Générales de Vente (CGV) régissent les prestations de conseil, de structuration, de coordination et de mise en relation proposées par DEOYA CAPITAL. Toute commande implique l'acceptation sans réserve des présentes CGV."
    },
    {
      title: "2. Nature des prestations",
      content: "DEOYA CAPITAL intervient en qualité de conseil et de coordinateur de projets. À ce titre, elle est tenue à une obligation de moyens et non de résultat. Les prestations sont définies précisément dans un devis ou un contrat."
    },
    {
      title: "3. Formation du contrat",
      content: "Toute prestation fait l'objet d'un devis préalable. La mission débute uniquement après signature du devis par le client et paiement de l'acompte correspondant. La signature du devis vaut acceptation des présentes CGV."
    },
    {
      title: "4. Modalités de paiement et pénalités de retard",
      content: "Un acompte de trente pour cent (30%) est exigé à la signature du devis. Le solde est payable de manière échelonnée, sur une base mensuelle, selon l'avancement de la mission, validé par DEOYA CAPITAL. Chaque échéance donne lieu à l'émission d'une facture par DEOYA CAPITAL, payable à réception. À défaut de paiement d'une échéance, DEOYA CAPITAL se réserve le droit de suspendre l'exécution de la mission jusqu'à régularisation. En cas de retard de paiement, des pénalités seront exigibles de plein droit, sans qu'un rappel soit nécessaire, calculées sur la base du taux légal en vigueur. Conformément à l'article L441-10 du Code de commerce, une indemnité forfaitaire pour frais de recouvrement d'un montant de quarante (40) euros sera également due. Lorsque les frais de recouvrement exposés sont supérieurs à ce montant, une indemnisation complémentaire pourra être demandée sur justification."
    },
    {
      title: "5. Responsabilité",
      content: "DEOYA CAPITAL est tenue à une obligation de moyens. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée dans l'exécution de ses obligations. Le client demeure seul responsable des décisions prises sur la base des recommandations formulées par DEOYA CAPITAL. En tout état de cause, la responsabilité de DEOYA CAPITAL, tous préjudices confondus, est limitée au montant des honoraires effectivement perçus au titre de la mission concernée. DEOYA CAPITAL ne saurait être tenue responsable des dommages indirects, notamment perte de chiffre d'affaires, perte d'opportunité ou préjudice commercial."
    },
    {
      title: "6. Intervention des experts",
      content: "DEOYA CAPITAL peut faire intervenir des experts partenaires dans le cadre des missions. Ces intervenants agissent sous leur propre responsabilité. DEOYA CAPITAL ne saurait être tenue responsable de leurs actions, omissions ou manquements."
    },
    {
      title: "7. Confidentialité",
      content: "Les parties s'engagent à conserver strictement confidentielles toutes les informations échangées dans le cadre de la mission. Cette obligation s'applique pendant toute la durée de la mission et pendant une période de cinq (5) ans à compter de sa cessation, quelle qu'en soit la cause."
    },
    {
      title: "8. Propriété intellectuelle",
      content: "Les livrables demeurent la propriété de DEOYA CAPITAL jusqu'au paiement complet des prestations. Après paiement, le client bénéficie d'un droit d'utilisation strictement limité à ses besoins internes. Toute reproduction, diffusion ou exploitation sans autorisation écrite préalable est interdite."
    },
    {
      title: "9. Résiliation",
      content: "En cas de résiliation anticipée : Les prestations réalisées restent dues et exigibles - Les sommes versées ne sont pas remboursables. DEOYA CAPITAL se réserve le droit de suspendre ou de résilier la mission en cas de manquement du client, notamment en cas de défaut de paiement."
    },
    {
      title: "10. Force majeure",
      content: "DEOYA CAPITAL ne pourra être tenue responsable en cas d'événement imprévisible, irrésistible et extérieur empêchant l'exécution de ses obligations."
    },
    {
      title: "11. Droit applicable et litiges",
      content: "Les présentes CGV sont régies par le droit français. En cas de différend, les parties s'engagent à rechercher une solution amiable. À défaut d'accord amiable, le litige sera soumis aux tribunaux français compétents."
    },
    {
      title: "12. Acceptation",
      content: "La signature du devis par le client emporte acceptation pleine et entière des présentes Conditions Générales de Vente."
    }
  ],
  footer: {
    contact: "Pour toute question concernant ces CGV, contactez-nous à :",
    email: "contact@deoya-capital.com",
    phone: "+33 6 12 34 56 78"
  }
}

export function getCgvContent(locale: Locale) {
  switch (locale) {
    case "fr":
    case "en":
    case "es":
    case "ar":
    default:
      return cgvContent
  }
}

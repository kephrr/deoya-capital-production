import emailjs from "@emailjs/browser";

// Structure simplifiée pour les deux formulaires de contact
export interface ContactFormData {
  nom_complet: string;       // contact.tsx: champ "name" | contact-modal: fusion nom+prenom
  email: string;            // les deux formulaires
  telephone?: string;       // contact-modal: champ "telephone" 
  message: string;          // contact.tsx: champ "message" | contact-modal: domaine d'expertise
  domaine_expertise?: string; // contact-modal: champ "fonction" (optionnel)
  entreprise?: string;      // contact-modal: champ "entreprise" (optionnel)
}

export const sendContactForm = async (data: ContactFormData) => {
  try {
    // Gestion du nom complet avec entreprise
    let nomCompletFinal = data.nom_complet;
    if (data.entreprise && data.entreprise.trim()) {
      nomCompletFinal = `${data.nom_complet} de l'entreprise ${data.entreprise.trim()}`;
    }

    // Gestion du message avec domaine d'expertise et entreprise
    let messageFinal = data.message;
    if (data.domaine_expertise && data.domaine_expertise.trim()) {
      messageFinal = `Profession : ${data.domaine_expertise.trim()}`;
    }
    else if (data.entreprise && data.entreprise.trim()) {
      messageFinal = `Entreprise : ${data.entreprise.trim()}\n${messageFinal}`;
    }

    // Gestion du type de formulaire
    let typeFormulaire = "Prise de contact";
    if (data.domaine_expertise && data.domaine_expertise.trim()) {
      typeFormulaire = "Candidature : Intégrer DEOYA";
    } else if (data.entreprise && data.entreprise.trim()) {
      typeFormulaire = "Prise de contact";
    }

    // Structure unifiée avec 5 paramètres maximum
    const emailData = {
      to_email: "contact@deoya-capital.com",
      nom_complet: nomCompletFinal,
      email: data.email,
      telephone: data.telephone || "Non spécifié",
      message: messageFinal,
      type_formulaire: typeFormulaire,
    };

    const response = await emailjs.send(
      "service_xhy3fwa",        // ton Service ID
      "template_9y22yhb",      // ton Template ID
      emailData,
      "n26ELgn8Po_c1rHcr"         // ta Public Key
    );

    return { success: true, response };
  } catch (error) {
    console.error("Erreur envoi contact :", error);
    return { success: false, error };
  }
};

export const sendNewsletterConfirmation = async (email: string) => {
  try {
    const response = await emailjs.send(
      "service_xhy3fwa",
      "template_fes71q9",
      {
        to_email: "contact@deoya-capital.com",  // Email de destination
        email: email,        // Nom par défaut
      },
      "n26ELgn8Po_c1rHcr"  // Même public key que sendContactForm
    );

    return { success: true, response };
  } catch (error) {
    console.error("Erreur envoi newsletter :", error);
    return { success: false, error };
  }
};

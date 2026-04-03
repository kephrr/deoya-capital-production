# Guide de gestion de contenu

## Structure des fichiers de contenu

Tous les textes du site sont maintenant centralisés dans le dossier `content/`. Chaque page a son propre fichier de contenu :

- `content/home.ts` - Contenu de la page d'accueil
- `content/expertises.ts` - Contenu de la page expertises
- `content/cabinet.ts` - Contenu de la page cabinet
- `content/contact.ts` - Contenu de la page contact
- `content/secteurs.ts` - Contenu de la page secteurs
- `content/reseau.ts` - Contenu de la page reseau

## Comment modifier le contenu

1. Ouvrez le fichier correspondant à la page que vous souhaitez modifier
2. Modifiez les textes directement dans le fichier
3. Sauvegardez le fichier
4. Les changements seront automatiquement reflétés sur le site

## Exemple

Pour modifier le titre de la page d'accueil :
```typescript
// Dans content/home.ts
export const homeContent = {
  discussProject: {
    title: "Nouveau titre pour la page d'accueil", // Modifiez cette ligne
    // ... autres propriétés
  }
}
```

## Avantages

- **Centralisation** : Tous les textes sont au même endroit
- **Facilité de mise à jour** : Pas besoin de chercher dans les composants
- **Maintenabilité** : Séparation claire entre le contenu et la présentation
- **Collaboration** : Les non-développeurs peuvent facilement modifier les textes
- **Versioning** : Les changements de contenu sont suivis par Git

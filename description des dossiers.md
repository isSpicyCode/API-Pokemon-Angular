# Pense-bête : Structure de mon projet Angular (qodo)

Ce document décrit la structure de mon projet Angular nommé "qodo", telle qu'elle apparaît dans l'image. Il détaille les dossiers et fichiers présents avec leur rôle.

## Structure principale

### `/.vscode`

- **Description** : Contient les configurations spécifiques à Visual Studio Code.
- **Contenu** :
  - `extensions.json` : Liste des extensions recommandées pour le projet.
  - `launch.json` : Configuration pour le débogage dans VS Code.
  - `tasks.json` : Tâches automatisées pour VS Code (ex. build, test).
- **Utilité** : Personnalise l'expérience dans VS Code pour le projet.

### `/node_modules`

- **Description** : Contient les dépendances installées via npm.
- **Utilité** : Fournit les bibliothèques nécessaires (ex. Angular, RxJS).
- **Note** : Ne pas modifier manuellement, géré par `package.json`.

### `/public`

- **Description** : Contient les fichiers statiques publics accessibles directement par le serveur.
- **Contenu** :
  - `favicon.ico` : Icône de l'application affichée dans l'onglet du navigateur.
- **Utilité** : Ressources accessibles directement à la racine de l'URL (ex. `/favicon.ico`).

### `/src`

- **Description** : Cœur du projet, contient le code source de l'application.
- **Sous-dossiers et fichiers** :

  #### `/src/app`

  - **Description** : Contient les composants et configurations de l'application.
  - **Contenu** :
    - `app.component.html` : Template HTML du composant racine.
    - `app.component.scss` : Styles SCSS spécifiques au composant racine.
    - `app.component.spec.ts` : Tests unitaires pour le composant racine.
    - `app.component.ts` : Logique TypeScript du composant racine.
    - `app.config.ts` : Configuration de l'application (ex. fournisseurs de services).
    - `app.routes.ts` : Définition des routes de l'application pour le routage.
  - **Utilité** : Structure modulaire pour organiser les composants et la logique.

  #### Fichiers à la racine de `/src`

  - `index.html` : Page HTML principale où l'application est injectée (contient `<app-root>`).
  - `main.ts` : Point d'entrée de l'application, bootstrap le module racine.
  - `styles.scss` : Fichier de styles globaux (SCSS) pour toute l'application.

### Fichiers de configuration à la racine

- **Description** : Fichiers de configuration pour le projet et Angular CLI.
- **Contenu** :
  - `.editorconfig` : Standardisation du formatage du code entre éditeurs.
  - `.gitignore` : Liste des fichiers/dossiers à ignorer par Git.
  - `angular.json` : Configuration principale d'Angular CLI (build, serve, test, etc.).
  - `Doc.txt` : Documentation personnalisée (peut-être des notes spécifiques au projet).
  - `package-lock.json` : Verrouille les versions des dépendances pour npm.
  - `package.json` : Liste des dépendances et scripts npm.
  - `README.md` : Documentation générale du projet.
  - `tsconfig.app.json` : Configuration TypeScript spécifique à l'application.
  - `tsconfig.json` : Configuration TypeScript générale pour le projet.
  - `tsconfig.spec.json` : Configuration TypeScript pour les tests.

## Observations

- **Manque de dossiers** :
  - Pas de dossier `/src/assets` (peut être ajouté pour les fichiers statiques comme des images).
  - Pas de dossier `/src/environments` (peut être ajouté pour gérer les variables d'environnement dev/prod).
- **Tests** : Présence de `app.component.spec.ts` pour les tests unitaires, mais pas de dossier `/e2e` pour les tests end-to-end.

## Commandes utiles

- `ng serve` : Lancer le serveur de développement.
- `ng build` : Compiler le projet (prod avec `--prod`).
- `ng test` : Lancer les tests unitaires.
- `ng generate component nom` : Générer un composant (ou service, etc.).

---

_Dernière mise à jour : 02 mai 2025_

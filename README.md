# Cabinet Talon

Site web professionnel pour Cabinet Talon, avec design et structure inspirés d’une vitrine architecturale moderne.

## Structure du dépôt

- `site-web/` : application Next.js 16.2.12 avec App Router et TypeScript
- `Dockerfile` : build multi-étage de l’application
- `docker-compose.yml` : environnement local pour l’application et PostgreSQL
- `.github/workflows/docker-publish.yml` : pipeline GitHub Actions pour build et publication de l’image Docker
- `start-container.sh` : script de démarrage local du conteneur

## Développement local

```bash
cd site-web
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build et exécution Docker local

```bash
docker build -t cabinettalon/web:local .
./start-container.sh
```

Le script `start-container.sh` démarre un conteneur `cabinettalon_web` et expose le site sur le port `3000`.

## Déploiement automatique

La workflow GitHub Actions suivante est configurée :

- `.github/workflows/docker-publish.yml`

Elle construit l’image Docker depuis la racine du dépôt et la publie vers GitHub Container Registry avec les tags :

- `ghcr.io/<owner>/<repo>:latest`
- `ghcr.io/<owner>/<repo>:<sha>`

### Pré-requis

- Activer GitHub Packages / GitHub Container Registry pour le dépôt
- Le workflow utilise `GITHUB_TOKEN`, donc aucune clé supplémentaire n’est nécessaire pour GHCR

## Notes

- La page d’accueil a été redesignée avec un parcours plus structuré : services, méthode, réalisations, chiffres clés et contact.
- Le header et le footer sont maintenant plus proches d’une présentation professionnelle architecturale.
- Pour une mise en production publique, ajoutez un second workflow de déploiement infra ou utilisez un provider cloud/serveur personnalisé.

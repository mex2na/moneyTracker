
FROM node:23-alpine3.19


# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock) dans le conteneur
COPY . .

# Installer les dépendances de l'application
RUN npm install



# Construire l'application NestJS
RUN npm run build



# Exposer le port utilisé par l'application
EXPOSE 3000

# Définir la commande de démarrage
CMD ["node", "dist/main"]


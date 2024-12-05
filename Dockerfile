
FROM node:23-alpine3.19

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock) dans le conteneur
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application
COPY . ./

# Construire l'application NestJS
RUN npm run build

# Copier les fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Exposer le port utilisé par l'application
EXPOSE 3000

# Définir la commande de démarrage
CMD ["node", "dist/main"]


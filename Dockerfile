# Usamos la imagen Alpine más ligera
FROM node:18-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiamos el resto de los archivos
COPY . .

# Configuración para producción
ENV NODE_ENV=production
ENV PUBLIC_URL=/

# Construimos la aplicación
RUN npm run build

# Instalamos serve globalmente
RUN npm install -g serve

# Puerto de la aplicación
EXPOSE 4000

# Comando para servir la aplicación
CMD ["serve", "-s", "build", "-l", "4000"]
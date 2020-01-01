FROM node:10

# Poner el dir de trabajo en /app
WORKDIR /app

# Copiamos package en el contenedor
COPY package.json package.json

# instalamos los modulos en el container
RUN npm install

# copiamos todo en el contenedor
COPY . .

# exponer el puerto 3000 para montarlo en otro puerto de la máquina local 
EXPOSE 3000

# instalar nodemon para cambios sobre la marcha
RUN npm install -g nodemon

# ejecutamos el servidor
CMD [ "nodemon", "index.js" ]
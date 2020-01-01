FROM node:13.5.0

# Poner el dir de trabajo en /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# instalar nodemon para cambios sobre la marcha
RUN npm install -g nodemon


EXPOSE 3000

# ejecutamos el servidor
CMD [ "nodemon", "index.js" ]
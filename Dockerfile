FROM node:14-alpine

LABEL maintainer="Antonio Garcia" version="1.0.1"

#Añadimos grupo y usuario sin privilegios, 
# cremoas node_modules y damos permiso
# a nuestro usuario
RUN  mkdir /node_modules \
    && chown -R node /node_modules  \
    && chown -R node /usr/local/bin \
    && apk add --update nodejs npm make 




# Establecemos nuestro directorio donde instalaremos
# nuestras dependencias
WORKDIR /

#Copiamos nuestras dependencias
COPY package*.json ./


# Cambiamos a usuario sin permisos
USER node

# Instalamos nuestras
RUN npm install

# Creamos volumen test
VOLUME /test
WORKDIR /test


# referenciamos el path hacia el node_modules
ENV PATH=/node_modules/.bin:$PATH 

# Ejecutamos los tests
CMD ["npm", "test"]
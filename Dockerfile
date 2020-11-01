FROM node:14-alpine

LABEL maintainer="Antonio Garcia" version="1.0.1"

#Añadimos grupo y usuario sin privilegios, 
# cremoas node_modules y damos permiso
# a nuestro usuario
RUN addgroup -S antonio && adduser -S antonio -G antonio \
    && mkdir /node_modules \
    && chown -R antonio /node_modules  \
    && chown -R antonio /usr/local/bin

# Establecemos nuestro directorio donde instalaremos
# nuestras dependencias
WORKDIR /


#Copiamos nuestras dependencias
COPY package*.json ./


# Instalamos nuestras
RUN npm install

# Borramos archivos innecesarios
RUN rm package*.json

# Cambiamos a usuario sin permisos
USER antonio

# Creamos volumen test
VOLUME /test
WORKDIR /test


# referenciamos el path hacia el node_modules
ENV PATH=/node_modules/.bin:$PATH 

# Ejecutamos los tests
CMD ["npm", "test"]
## Dockerfile y buenas prácticas
Nuestro [Dockerfile](/Dockerfile) es el encargado de construir nuestro imagen o entorno donde se ejecutarán los tests. A la hora de escribir un dockerfile se deben seguir una serie de buenas prácticas que hagan que se minimice el tamaño resultante de la imagen y el tiempo de compilación así como lograr que el dockerfile sea lo más legible posible tanto para nosotros como para el desarrollador que lo vaya a examinar.


Lo primero que se hace es establecer nuestra imagen base. Esta imagen ya trae nuestro task runner instalado, por lo que no tenemos que instalarlo aparte. 

    FROM node:14-alpine

Una buena práctica es realizar varíos comandos en una misma linea para reducir las capas y el uso de caché. En esta serie de comandos se crea un usuario sin privilegios y se le otorgan sobre /node_modules y /usr/loca/bin. Tuve que hacerlo por un error a la hora de constuir la imagen. 

    RUN addgroup -S antonio && adduser -S antonio -G node \
    && mkdir /node_modules \
    && chown -R antonio /node_modules  \
    && chown -R antonio /usr/local/bin


Debemos copiar solo los archivos que vamos a necesitar, para ello despues de copiar nuestro archivos de dependencias e instalarlas una buena práctica es borrarlos.

    COPY package*.json ./
    RUN npm install
    RUN rm package*.json

Para ejecutar los tests se hace desde nuestro usuario sin privilegios, para ello cambiamos a este justo antes de ejecutarlos.

    USER antonio


Como buena práctica se ha añadido la variable de entorno hacia node_modules.

    ENV PATH=/node_modules/.bin:$PATH 




Por último necesitamos establecer el comando a ejecutar cuando corramos nuestra imagen.

    CMD ["npm", "test"]
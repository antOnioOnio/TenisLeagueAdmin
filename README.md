# TenisLeagueAdmin

## Descripción del proyecto
El proyecto consiste en una API que gestionará la información necesaria para una liga de tenis amateur. La api será consultada por una aplicación móvil.

## ¿ Por qué ?
El objetivo principal del proyecto es tener una API que proporcione a todos los jugadores amateur de padel y tenis una fuente fiable de resultados pasados y partidos futuros que están por jugar para solventar el problema de la ausencia de esta en el mundo del tenis y padel. 


# Instalación

Clonamos el repositorio a nuestra máquina local:
    
    git clone https://github.com/antOnioOnio/TenisLeagueAdmin

Nos situamos en nuestra proyecto, para ello:
    
    cd TenisLeagueAdmin

Se asume que el lector tiene instalado node y el gestor npm instalado en su máquina. Si no es así, node puede ser descargado de [aquí](https://nodejs.org/es/). npm será automáticamente instalado junto con node.

Para instalar las dependencias necesarias para nuestro proyecto basta con ejecutar el siguiente comando:

    npm install 

Y para inicializar dicho proyecto:

    npm start 

## Desarrollo del proyecto
El desarrollo del proyecto esta estructurado por semanas, las cuáles podéis consultar [aquí](/docs/pasos.md) . 

## Historias de usuario
Los issues creados para reflejar las historias de usuario 

+  [HU01](https://github.com/antOnioOnio/TenisLeagueAdmin/issues/3) 
+  [HU02](https://github.com/antOnioOnio/TenisLeagueAdmin/issues/4) 


## Test del proyecto
Entre la amplia gama de librerías que nos podemos encontrar para el testeo de código (Jasmine, Expresso, Should, NodeUnit, jsUnit) en este proyecto se va a utilizar [mocha](https://mochajs.org/) junto con [chai](https://www.chaijs.com/). La razón principal es porque es la opción más recomendada por la comunidad, y ya que es la primera vez que uso una biblioteca de este tipo, que mejor que hacerlo con las herramientas más usadas.

+ Para saber como ejecutar los test y ver una salida correcta [aquí](/docs/correctoTesteo.md)
+ El primer archivo de test lo puedes consultar [aquí](/test/player_test.js). 
+ La clase testeada hasta la fecha la puedes consultar [aquí](/src/models/player.js) 

## Taskfile
Nuestro archivo vital del proyecto es [package.json](/package.json). Node guarda automáticamente un registro en este archivo la configuración y dependencias necesarías para su correcto funcionamiento (si instalamos con --save). En este archivo encontraremos entre otras cosas:

+  Nombre del proyecto
+  Versión
+  Dependencias
+  Repositorio 
+  Autor
+  Licencia

# Docker

## Elección de un contenedor base

A la hora de elegir una imagen base para un proyecto en node nos encontramos con una amplia variedad de [posibilidades](https://hub.docker.com/_/node). Como podemos comprobar la lista es extensa. El primer paso es elegir nuestra versión, en mi caso como en mi máquina local tengo la versión 14 instalada, esta ha sido la elegida. A continuación (si decidimos elegir una versión en concreto y no la de por defecto) podemos especificar que versión deseamos. 

+  [alpine](https://github.com/nodejs/docker-node/blob/7b11db1cab459beb96448e18ec421ec952fa0491/14/alpine3.12/Dockerfile) 
+  [buster](https://github.com/nodejs/docker-node/blob/7b11db1cab459beb96448e18ec421ec952fa0491/14/buster-slim/Dockerfile)
+  [strech](https://github.com/nodejs/docker-node/blob/7b11db1cab459beb96448e18ec421ec952fa0491/14/stretch/Dockerfile)

Para poder elegir la correcta para mi proyecto me he basado en 3 aspectos fundamentales. Peso de la imagen, sistema operativo basado y tiempo de creación de la imagen.

## Peso
El peso de las imagenes es el siguiente:
 + **14-strecth** -> 943MB
 + **Strecth-slim** -> 167MB
 + **14-buster** -> 912MB
 + **14-buster-slim** -> 180MB
 + **14-alpine** -> 117MB
 + **14** -> 943MB

Como podemos apreciar en este apartado la más ligera sería Alpine.
Observamos por el tamaño de las imagenes que tenemos la opción de elegir la versión Full o la versión Slim. Ambas versiónes están basadas en Debian Linux, salvo la versión Alpine que está basada en linux. La diferencia de tamaño se debe a que la versión full trae una serie de herramientas adicionales, tales como software de versión de control, librerías, APIs etc. La pregunta es 
¿ Necesitamos nosotros todas esas herramientas ?

## Tiempo de ejecución
Se han realizado distintas mediciones con las versiones por defecto, slim y alpine. El cálculo para ser lo más objetivo posible e independiente del peso de la versión se ha realizado solo al reconstruir la imagen, no en la primera ya que ya hemos tenido en cuenta el peso de cada versión. Sorprendentemente el tiempo de ejecución en las 3 versiones testeadas no varía demasiado.
* Node 14   ==> 0.18s
* Node 14-slim ==> 0.19s
* Node 14-Alpine ==> 0.16s

Aunque la diferencia no sea mucha, Alpine es la versión más rapida y la más ligera. Además provee de opciones para poder incluir librerías y herramientas si en el futuro hicieran falta. Aparte de estar basada en linux. 
La elección para este proyecto esta clara, Alpine, por las razones comentadas. 
Cabe destacar que la elección de esta versión no nos ata a esta versión para siempre ya que cambiar entre ellas es sencillo y rápido.

## Dockerfile
Nuestro [Dockerfile](/Dockerfile) es el encargado de construir nuestro imagen o entorno donde se ejecutarán los tests. A continuación se explican las líneas clave de este.

Lo primero que se hace es establecer nuestra imagen base. Esta imagen ya trae nuestro task runner instalado, por lo que no tenemos que instalarlo aparte.

    FROM node:14-stretch-slim


Establecemos nuestro directorio de trabajo donde se ejecutara nuestra app.
     
    WORKDIR /app
A continuación instalamos nuestras dependencias necesarías, las cuáles estan dentro de nuestro archivo package.json. Para ello entonces copiamos dicho archivo a nuestro directorio de trabajo y las ejecutamos.

    COPY package.json .
    RUN npm install

Ahora lo que necesitamos son nuestros archivos esenciales para poder correr nuestras pruebas, esto es nuestros ficheros de tests y nuestros ficheros testeados.

    COPY ./src ./src
    COPY ./test ./test

Por último necesitamos establecer el comando a ejecutar cuando corramos nuestra imagen.

    CMD ["npm", "test"]

## Integración continua
Se ha configurado la publicación de los contenederos en dos registros de imágenes. Se ha hecho de tal manera para que con cada push realizado al repositorio estas sean actualizadas automáticamente. 
+ [Dockerhub](https://hub.docker.com/r/antonioonio/tenisleagueadmin). Dockerhub dispone de una documentación muy buena, para poder conseguir la construcción automática de las imagenes se ha seguido [este](https://docs.docker.com/docker-hub/builds/) artículo donde se explica el procedimiento paso a paso.
+ [Github container registry](https://github.com/antOnioOnio/TenisLeagueAdmin/packages/472054). Para poder conseguir la automatización en este registro he tenido que configurar una github actions, puedes consultar el workflow [aqui](https://github.com/antOnioOnio/TenisLeagueAdmin/blob/master/.github/workflows/docker.yml). 

Si bien es cierto que se podría haber creado una github action para crear la imagen y subirla tanto a github container registry como a dockerhub, se ha realizado por separado por dos razones. La primera es para aprender ambos entornos y la segunda para poder comparar el tiempo de construcción y publicación en ambos. En este último aspecto, el tiempo de medio de github es de aproximadamente un minuto, mientras que para dockerhub el tiempo no ha bajado nunca de 2 minutos. 

### Descarga y testeo de la imagen
Para descargar la imagen use el siguiente comando:

     docker pull antonioonio/tenisleagueadmin

Para ejecutarla use el siguiente comando:

    docker run -t -v `pwd`:/test antonioonio/tenisleagueadmin
    
    
# Issues abiertos y milestones
+ [Aquí](https://github.com/antOnioOnio/TenisLeagueAdmin/issues) puedes encontrar los distintos issues abiertos y cerrados hasta la fecha.
+ [Aquí](https://github.com/antOnioOnio/TenisLeagueAdmin/milestones) puedes consultar los issues relaciondos con los milestone, los cuáles determinan los puntos claves en el desarrollo de este proyecto.

## Organización del proyecto y enlaces de interés

- [Documentación](https://github.com/antOnioOnio/TenisLeagueAdmin/tree/master/docs) del proyecto
- [Código desarrolado](/src/models/match.ts) hasta ahora.
- [Archivo yv.yaml](https://github.com/antOnioOnio/TenisLeagueAdmin/blob/master/iv.yaml)
- [Herramientas utlizadas](/docs/herramientas.md) para el desarrollo del proyecto.
- [Configuración inicial](/docs/usogit.md) de git siguiendo las buenas prácticas.
- [Github Autor](https://github.com/antOnioOnio)


## Principal fuente de conocimiento
Este proyecto forma parte del desarrollo de la asignatura Infraestructura Virtual, perteneciente al cuarto curso de Ingeniería Informática de la UGR. Toda la documentación puede ser consultada en su principal [repositorio](https://github.com/JJ/IV-20-21) 
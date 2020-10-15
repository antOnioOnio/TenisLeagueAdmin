# TenisLeagueAdmin

## Descripción del proyecto
El proyecto consiste en una API que gestionará la información necesaria para una liga de tenis amateur. La api será consultada por una aplicación móvil.

## ¿ Por qué ?
El objetivo principal del proyecto es tener una API que proporcione a todos los jugadores amateur de padel y tenis una fuente fiable de resultados pasados y partidos futuros que están por jugar para solventar el problema de la ausencia de esta en el mundo del tenis y padel. 


# Instalación

Clonamos el repositorio a nuestra máquina local:
    
    git clone https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-

Nos situamos en nuestra proyecto, para ello:
    
    cd antOnioOnio-TenisLeagueAdmin-

Se asume que el lector tiene instalado node y el gestor npm instalado en su máquina. Si no es así, node puede ser descargado de [aqui](https://nodejs.org/es/). npm será automáticamente instalado junto con node.

Para instalar las dependencias necesarias para nuestro proyecto basta con ejecutar el siguiente comando:

    npm install 

Y para inicializar dicho proyecto:

    npm start 

## Desarrollo del proyecto
El desarrollo del proyecto esta estructurado por semanas, las cuáles podéis consultar [aqui](/docs/pasos.md) . 

## Historias de usuario
Los issues creados para reflejar las historias de usuario 

+  [HU01](https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-/issues/3) 
+  [HU02](https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-/issues/4) 


## Test del proyecto
Entre la amplia gama de librerías que nos podemos encontrar para el testeo de código (Jasmine, Expresso, Should, NodeUnit, jsUnit) en este proyecto se va a utilizar [mocha](https://mochajs.org/) junto con [chai](https://www.chaijs.com/). La razón principal es porque es la opción más recomendada por la comunidad, y ya que es la primera vez que uso una biblioteca de este tipo, que mejor que hacerlo con las herramientas más usadas.

+ El primer archivo de test lo puedes consultar [aqui](/test/player_test.js). 
+ La clase testeada hasta la fecha la puedes consultar [aqui](/src/models/player.js) 

## Taskfile
Nuestro archivo vital de nuestro proyecto es [package.json](/package.json). Node guarda automáticamente un registro en este archivo la configuración y dependencias necesarías para su correcto funcionamiento (si instalamos con --save). En este archivo encontraremos entre otras cosas:

+  Nombre del proyecto
+  Versión
+  Dependencias
+  Repositorio 
+  Autor
+  Licencia

# Issues abiertos y milestones
+ [Aquí](https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-/issues) puedes encontrar los distintos issues abiertos y cerrados hasta la fecha.
+ [Aquí](https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-/milestones) puedes consultar los issues relaciondos con los milestone, los cuáles determinan los puntos claves en el desarrollo de este proyecto.

## Organización del proyecto y enlaces de interés

- [Documentación](https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-/tree/master/docs) del proyecto
- [Código desarrolado](/src/models/match.ts) hasta ahora.
- [Archivo yv.yaml](https://github.com/antOnioOnio/antOnioOnio-TenisLeagueAdmin-/blob/master/iv.yaml)
- [Herramientas utlizadas](/docs/herramientas.md) para el desarrollo del proyecto.
- [Configuración inicial](/docs/usogit.md) de git siguiendo las buenas prácticas.
- [Github Autor](https://github.com/antOnioOnio)


## Principal fuente de conocimiento
Este proyecto forma parte del desarrollo de la asignatura Infraestructura Virtual, perteneciente al cuarto curso de Ingeniería Informática de la UGR. Toda la documentación puede ser consultada en su principal [repositorio](https://github.com/JJ/IV-20-21) 
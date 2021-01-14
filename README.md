# TenisLeagueAdmin

## Descripción del proyecto
El proyecto consiste en una API que gestionará la información necesaria para una liga de tenis amateur. La api será consultada por una aplicación móvil.

## ¿ Por qué ?
El objetivo principal del proyecto es tener una API que proporcione a todos los jugadores amateur de padel y tenis una fuente fiable de resultados pasados y partidos futuros que están por jugar para solventar el problema de la ausencia de esta en el mundo del tenis y padel. 


# Documentación


## Instalación
Para la instalación de nuestro proyecto y siga las instrucciones que se explican [aquí](/docs/guiaInstalacion.md) .


## Desarrollo del proyecto
El desarrollo del proyecto esta estructurado por semanas, las cuáles podéis consultar [aquí](/docs/pasos.md). 


## Despliegue en PaaS

* [Justificación técnica](/docs/justificacionPaas.md) de heroku

* [Base de datos usada](/docs/baseDatosHeroku.md) 


## Microservicio

* [Justificación técnica](/docs/justificacionHapi.md) del framework elegido, [Hapi.js](https://hapi.dev/) 

* [Diseño de la API](/docs/diseñoApi.md), justificación, rutas, tipos devueltos y más.

* [Tests](/docs/testsApi.md) de integración.

* [HUs](/docs/HUApi6.md) avanzadas.


## Serverless

Esta sección se puede dividir en dos apartados principales:
* Despliegue de funciones en Vercel, la documentación propia se encuentra [aquí](/docs/vercel.md)

* Desarrollo de un bot de telegram en firebase haciendo uso de las funciones desplegadas en vercel, la documentación la puede encontrar [aquí](/docs/firebase.md)


## Integración continua
+  Configuración realizada en Travis puede consultarse [aquí](/docs/travis.md)

+  Configuración realizada en Circle CI  puede consultarse [aquí](/docs/circleci.md)


## Test del proyecto
Para saber como testear el proyecto y la justificación de las herramientas elegidas para ello pulse [aquí](/docs/correctoTesteo.md)


## Taskfile
En el siguiente [enlace](/docs/taskfile.md) encontrará una explicación de nuestro taskfile 

## Docker

* Elección del [contenedor base](/docs/contenedorBase.md)
* Archivo explicación de [dockerfile](/docs/expDockerfile.md) y buenas prácticas
* Archivo [Dockerfile](/Dockerfile)
* Configuración de los [registros de imágenes](/docs/dockerRegistry.md) automáticos
* Como testear las imágenes [aquí](/docs/correctoTesteo.md)

## Historias de usuario
Los issues creados para reflejar las historias de usuario 

+  [HU01](https://github.com/antOnioOnio/TenisLeagueAdmin/issues/3) 
+  [HU02](https://github.com/antOnioOnio/TenisLeagueAdmin/issues/4) 

## Issues abiertos y milestones
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


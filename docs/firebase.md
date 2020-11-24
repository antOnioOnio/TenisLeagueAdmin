# Despliegue de bot en Telegram con Firebase

Para empezar a trabajar con firebase obviamente lo que debemos hacer es registrarnos e instalar las dependencias necesarias, este proceso se explica en el [ejercicios de autoevaluacíon](https://github.com/antOnioOnio/IV-autoevaluacion/blob/master/serverles.md#firebase) realizado previamente.

## Configuración y pasos previos

El proceso es bastante simple, primero ejecutamos en la terminal el siguiente comando:

    firebase init functions

Seguimos los pasos indicados, linkeamos con nuestro proyecto creado en firebase y ya tendremos nuestra estructura principal creada. Nuestro fichero desde donde vamos a controlar nuestro bot es [/telegramBot/functions/index.js](../telegramBot/functions/index.js).

Para poder crear un bot, telegram nos lo pone muy facil. El primer paso es conseguir una Telegram API key, para ello debemos abrit telegram, buscar el BotFather e indicar mediante unos sencillos pasos que vamos a crear un bot. Este nos devolverá  nuestra API key, la cual debemos guardar. 

Para el desarrollo de nuestro bot vamos a hacer uso del framework diseñado para telegram y node telegraf. Nos facilita bastante la tarea, la documentación se encuentra [aquí](https://telegraf.js.org/#/?id=features)


### Variables de entorno

Como es obvio no podemos dejar nuestras variables importantes a la vista de todos, ya que cualquier podría apoderarse de ellas y controlar nuestro bot o coger datos sensibles. Firebase para ello nos proporciona el siguiente comando. 

    firebase functions:config set <key>="<Nuestra variable>"

Una vez seteada para recuperarla basta ejecutar 

    functions.config().key

He de decir que aunque el método me funciona bien al mostrar el contenido de forma local, a la hora de hacer pruebas me dio ciertos fallos, por lo que un workaround realizado fue el volcar la información en un archivo env.json para en caso de fallar asegurarme de que los datos se encuentren correctamente. Este archivo como es obvio se añadió al .gitignore. 


## Bot y funciones 

El bot en cuestión puede ser encontrado en Telegram y se llama @whoIsPlayingTodayBot. Por ahora se han implementado las siguientes funciones.

* **/All** Te muestra todos los partidos de la liga. Por ahora, y para ser que el resultado sea más claro, solo se muestra quien juega los partidos, más adelante se implementará el resultado de estos si han sido jugados.

![](../docs/images/allBot.png)

* **/Today** Muestra los partidos que se van a jugar en el día de hoy. Por ahora solo se muestra los nombres de los jugadores. La intención es que si se ha jugado muestre también el resultado.

![](../docs/images/todayBot.png)

* **/Players** Muestra los nombres de los jugadores que están inscritos en la liga actual. 

![](../docs/images/playersBot.png)


* **/help** Como otros muchos bots, te muestra las posibilidades que puedes realizar.

![](../docs/images/helpBot.png)

## Despliegue y pruebas

Para desplegar nuestro bot en firebase es bastante sencillo. Basta con ejecutar:

     firebase deploy --only functions

Para desplegar nuestro bot en local sin embargo ejecutamos:

    firebase serve

Una vez desplegado vamos a poner en marcha nuestro webhook, que es básicamente un enlace a una web que escucha cuando se produce un evento a nuestro bot y realiza una llamada a esta dirección web. De esta forma tenemos varías ventajas:

- Ahorramos CPU
- Mejoramos tiempo de respuesta
- Se evita necesidad de preguntar constantemente al bot.

Telegram pone a nuestra disposición una API y una [documentación](https://core.telegram.org/bots/api#setwebhook) bastante buena para realizar dicha tarea. Basta con conseguir nuestro token de firebase y nuestro token del bot y hacer una petición a dicha url. El resultado deberá ser:

![](../docs/images/webhook.png)



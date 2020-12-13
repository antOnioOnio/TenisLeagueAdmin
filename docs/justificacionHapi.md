# Justificación de la elección del Framework.

A la hora de elegir un framework para la realización de una API Rest con node nos encontramos con bastantes opciones: [koa2](https://koajs.com/), [adonis](https://adonisjs.com/), [express](https://expressjs.com/es/), [hapi](https://hapi.dev/), [sails](https://sailsjs.com/) y más. Entonces, ¿Cúal usar ? 


Para tomar la decisión vamos a centrarnos en los 3 más populares, Express, Koa2 y Hapi. Lo primero que he hecho ha sido experimentar un poco con cada uno. Para ello he creado un hello world en cada uno y medido los tiempos de respuesta . El código puede ser encontrado en  [este](https://github.com/antOnioOnio/testFramework) repositorio. 

## Hello world en cada uno

Express:
~~~
const express = require('express');
const app = express();
const port = 8000;

const {getDurationInMilliseconds} = require('./time.js');

app.get('/', (req, res) =>{
    res.send('Hello World!')
    res.on('finish', ()=> {
        const timeTaken  = getDurationInMilliseconds(process.hrtime())
        console.log(timeTaken); 
    } )
})

app.listen(port, ()=> {
    console.log('App listening at http://localhost:${port}')
})
~~~

Hapi:
~~~
const Hapi = require('@hapi/hapi');
const {getDurationInMilliseconds} = require('./time.js');

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
        app: {}
    });


    server.route({
        method:'GET', 
        path:'/',
        handler: (req, h) => {
            const timeTaken  = getDurationInMilliseconds(process.hrtime())
            console.log(timeTaken);
            return "hello world!";
        }
    })

    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();


~~~

Koa:

~~~
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});


app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

~~~
## Tiempos

| Express | Hapi | koa2 |
|--------|--------|---------|
| 0.041491|0.02699 |0.07 |

Observamos que hapi ofrece la respuesta más rápida de los 3. 

## Popularidad y comunidad sosteniendolo.

A la hora de escoger un framework, una buena consideración debe ser el soporte que esta tenga, esto hay que tenerlo en cuenta porque si o si vamos a enfrentarnos con problemas que vamos a tener que resolver, cuanto mayor sea el soporte que el frameworks tenga, es probable que encuentres la respuesta a tu problema más rapido. Para guiarme he realizado la siguiente tabla.

| | Express | Hapi | koa2 |
|--------|--------|--------|---------|
| Github Stars|51.2k|12.9k| 30.4k |
| Open Pull Request|55| 2 | 20|
| Daily downloads| 996,930 |  10,452 | 1 |
| Weekly downloads| 15,934,806	|  322,272	 | 16 |
| Monthly downloads|  64,523,70  | 1,328,620	  | 34 |
| Total versions| 264  | 20  | 8 |
| Last modified|  20 days ago  | a month ago  | 3 months ago |
| Created |  	2 years ago   | 10 years ago  | 3 years ago  |

Esta información ha sido obtenida de [npmcompare](https://npmcompare.com/) y de sus respectivos githubs y npms oficiales.


## Pros y contras de cada uno

### Express:
Ventajas:
* Es prácticamente el estandar para la mayoría de apss Node.
* Curva de aprendizaje baja.
* Se puede ejecutar en una amplia gama de servidores.
* Un rendimiento muy bueno.
* Se integra muy bien con cualquier servicio y middleware

Desventajas:
* No hay mucha modularización, si el código crece refactorizar y mantener una estructura limpia se complica.
* Hay que hacer muchas tareas manuales, si comparamos por ejemplo con loopback que te lo deja en bandeja, aquí tenemos que escribir nosotros mucho método
* Endpoints hay que crearlos manualmente, y testearlos manualmente
* El mayor contra para mi personalmente es que al ser el más conocido, probablemente sea el que la mayoría de compañeros usen con lo que distanciarme sería complicado.

### Koa2

Ventajas:
* Es un fraemwork muy pequeño, menos de mil lineas de código.
* Muy fácil escribir middleware
* Buena experiencia de usuario
* Se consigue un código muy limpio y escalable.

Desventajas:
* En rendimiento es el que peor resultados me ha dado.
* Usa generadores que no son compatibles con otros frameworks de node.
* La comunidad es la más pequeña
* En 3 años ha avanzado menos que el resto en un período de tiempo similar

### Hapi

Ventajas:
* La mayor de todas a mi criterio son los plugins, te permiten añadir y quitar funcionalidades a tu aplicación con total faciliad y flexibiliadd, lo que se traduce en una total modularización.
* Es la que mejor rendimiento me ha dado.
* Provee de una validación super fácil de usar.
* La comunidad que tiene es muy activa.

 Desventajas :
 * Los endpoints se crean manualmente y se testean manualmente.
 * Distintas versiones en poco tiempo puede resultar en problemas de compatibiliad.
 * La estructura de código hay que hacerla manualmente.


 ## Conclusión

 La elección de Hapi se ha debido principalmente a tres causas:
 * La primera razón ha sido por performance, ha sido la más rápida de las tres. Si bien es cierto que en esta práctica el rendimiento no es un factor clave debido al tamaño del proyecto, en futuros proyectos personales puede serlo y más vale aprender una tecnología que vaya a servirte en futuros proyectos. 

 * La segunda razón han sido principalmente que me llama mucho la atención la posible modularización que se puede obtener por medio de los plugins. 

 * La tercera razón y puede que sea la que no me ha hecho ver esta elecciṕon de la manera más objetiva posible es por distanciamiento de la elección más "mainstream". Si bien es cierto que no es una razón válida para elegir un framework, distanciarme de la elección más obvia y probar otra tenoclogía emergente ayuda así a distanciarme de mis compañeros.
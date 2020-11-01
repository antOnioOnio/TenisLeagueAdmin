# Elección justificada de nuestro contenedor base

A la hora de elegir una imagen base para un proyecto en node nos encontramos con una amplia variedad de [posibilidades](https://hub.docker.com/_/node). Como podemos comprobar la lista es extensa.

## Sistema operativo
Nos tenemos entonces que preguntar en que SO queremos que este basada nuestra imagen, entre las distintas opciones nos encontramos con Ubuntu, alpine,debian, centos, etc. Me he decantado por basar la imagen en Alpine ya que el tamaño que ofrece hace que la imagen resultante se construya rápidamente, lo he comparado con ubuntu y el tiempo de creación de la imagen prácticamente doblaba a la de alpine.

## Peso
Basandonos en las imagenes que hay en dockerhub para node, nos encontramos con distintas versiones de esta propias del lenguaje.

| Imagen |  Peso |
| -- | -- |
| Node 15 | 941MB | 
| Node 14 |  943MB |
| Node 14-Slim | 167MB |
| Node 14-Alpine | 117MB |
| Node 14-stretch | 943MB | 
| Node 14-stretch-slim | 167MB | 

En este apartado volvemos a decantarnos por alpine.

Observamos que tenemos la opción por defecto

    node:<Versión>

Esta versión se diferencia de las otras en que trae una serie de herramientas adicionales tales como software de versión de control, librerías, APIs etc. La pregunta es 
¿ Necesitamos nosotros todas esas herramientas ?

## Tiempo de construcción y peso juntos
Se han realizado distintas mediciones con las versiones por defecto, slim y alpine. El cálculo para ser lo más objetivo posible e independiente del peso de la versión se ha realizado solo al reconstruir la imagen, no en la primera ya que ya hemos tenido en cuenta el peso de cada versión. Sorprendentemente el tiempo de ejecución en las 3 versiones testeadas no varía demasiado.


| Imagen | Tiempo construcción | Peso |
| -- | -- | -- |
| Node 15 | 0.23s | 941MB | 
| Node 14 | 0.19s | 943MB |
| Node 14-Slim | 0.14s | 167MB |
| Node 14-Alpine | 0.18s |  117MB |
| Node 14-stretch | 0.19s | 943MB | 
| Node 14-stretch-slim | 0.17s | 167MB | 


Aunque la diferencia no sea mucha, Alpine es la versión más ligera y casi la más ligera. Además provee de opciones para poder incluir librerías y herramientas si en el futuro hicieran falta. Aparte de estar basada en linux. 

## Elección
La elección para este proyecto esta clara, Alpine, por las razones comentadas. 
Cabe destacar que la elección de esta versión no nos ata a esta versión para siempre ya que cambiar entre ellas es sencillo y rápido.

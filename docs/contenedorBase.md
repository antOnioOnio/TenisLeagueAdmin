# Elección justificada de nuestro contenedor base

A la hora de elegir una imagen base para un proyecto en node nos encontramos con una amplia variedad de [posibilidades](https://hub.docker.com/_/node). Como podemos comprobar la lista es extensa.

## Sistema operativo
Nos tenemos entonces que preguntar en que SO queremos que este basada nuestra imagen, entre las distintas opciones nos encontramos con Ubuntu, alpine,debian, centos, etc. Me he decantado por basar la imagen en Alpine ya que el tamaño que ofrece hace que la imagen resultante se construya rápidamente, lo he comparado con ubuntu y el tiempo de creación de la imagen prácticamente doblaba a la de alpine.

## Peso
Basandonos en las imagenes que hay en dockerhub para node, nos encontramos con distintas versiones de esta propias del lenguaje. He comparado los pesos de esta:

 + **14-strecth** -> 943MB
 + **Strecth-slim** -> 167MB
 + **14-buster** -> 912MB
 + **14-buster-slim** -> 180MB
 + **14-alpine** -> 117MB
 + **14** -> 943MB

En este apartado volvemos a decantarnos por alpine.

Observamos que tenemos la opción por defecto

    node:14 

Esta versión se diferencia de las otras en que trae una serie de herramientas adicionales tales como software de versión de control, librerías, APIs etc. La pregunta es 
¿ Necesitamos nosotros todas esas herramientas ?

## Tiempo de ejecución
Se han realizado distintas mediciones con las versiones por defecto, slim y alpine. El cálculo para ser lo más objetivo posible e independiente del peso de la versión se ha realizado solo al reconstruir la imagen, no en la primera ya que ya hemos tenido en cuenta el peso de cada versión. Sorprendentemente el tiempo de ejecución en las 3 versiones testeadas no varía demasiado.

* Node 14   ==> 0.18s
* Node 14-slim ==> 0.19s
* Node 14-Alpine ==> 0.16s

Aunque la diferencia no sea mucha, Alpine es la versión más rapida y la más ligera. Además provee de opciones para poder incluir librerías y herramientas si en el futuro hicieran falta. Aparte de estar basada en linux. 

## Elección
La elección para este proyecto esta clara, Alpine, por las razones comentadas. 
Cabe destacar que la elección de esta versión no nos ata a esta versión para siempre ya que cambiar entre ellas es sencillo y rápido.

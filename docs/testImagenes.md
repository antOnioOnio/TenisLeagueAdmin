### Descarga y testeo de la imagen
Para descargar la imagen de dockerhub use el siguiente comando:

     docker pull antonioonio/tenisleagueadmin

Para descargar la imagen de dockerhub use el siguiente comando:

     docker pull docker.pkg.github.com/antonioonio/tenisleagueadmin/tenisdockerimagefortest:latest


Para ejecutarla use el siguiente comando:

    docker run -t -v `pwd`:/test antonioonio/tenisleagueadmin

# /GetPlayers/{year}

* Tipo: Get
* Parámetros: Año de la liga en formato int de 4 cifras.
* Respuesta: Array de objetos Player en formato json. 
* Formato respuesta:
    ~~~
    [{
        "id": "8c710459-559d-494f-9724-1321c5112d3b",
        "name": "Antonio Garcia",
        "email": "antonio@gmail.com",
        "tlf": "669080808",
        "level": "PRO",
        "age": "33"
    },
    {
        "id": "f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7",
        "name": "Paquito Perez",
        "email": "paquito@gmail.com",
        "tlf": "669080810",
        "level": "PRO",
        "age": "33"
    }]
    ~~~
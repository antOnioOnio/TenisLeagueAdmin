# GetLeague/{year}

* Tipo: Get
* Parámetros: Año de la liga en formato int de 4 cifras.
* Respuesta: Objeto League en formato json. 
* Formato respuesta:
    ~~~
    {
        "id": "24d4e12s-3ca0-11eb-adc1-0242ac120002",
        "level": "PRO",
        "year": 2021,
        "matches":[
            {
                "id":"2f5353d0-2cbd-11eb-adc1-0242ac120002",
                "date":"20/1/2020",
                "played":true,
                "result":"6/4, 6/1",
                "player1":"8c710459-559d-494f-9724-1321c5112d3b",
                "player2":"f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7"
            },
            {
                "id":"2f5353d4-2cbd-11eb-adc1-0242ac120002",
                "date":"30/1/2020",
                "played":true,
                "result":"6/3, 6/3",
                "player1":"8c710459-559d-494f-9724-1321c5112d3b",
                "player2":"f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7"
            }
            ],
         "players":[
            {
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
            },
            ]
        }
    ~~~
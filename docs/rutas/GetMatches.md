# /GetMatches/{year}
* Tipo: Get
* Parámetros: Año de la liga en formato int de 4 cifras.
* Respuesta: Array de objetos Matches en formato json. 
* Formato respuesta:
    ~~~
    [
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
    ]
    ~~~
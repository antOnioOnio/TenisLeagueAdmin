# Tests de integración API Rest

Los tests se han realizado en [este](../test/api_tests.js).  Lo primero que se debe hacer si no quieres perder una hora en stackoverflow, es asegurarte de que una vez realizados los tests se cierra el servidor. Para ello podemos indicarlo con *after* de la siguiente manera:

~~~
after((done) => {
    server.events.on('stop', ()=> {
        done();
    });
    server.stop();

})
~~~

Me he centrado en testear tanto los estados como el tipo de respuesta. Para ello podemos mostrar tres ejemplos testeando los posibles escenarios.

En este primer ejemplo observamos como realizamos la petición, el código de respuesta debe ser 200, además testeo que sea un json la payload y que además el resultado sea un array.
~~~
it('Get leagues should returns 200 and be an array of objects', async () => {
    const res = await server.inject({
        method: 'get',
        url: '/GetLeagues'
    });

    expect(res.statusCode).to.equal(200);
    expect(res.result).to.be.an.array();
    expect(res.payload).to.be.json;

});
~~~

En este segundo ejemplo vamos a testear que el código de respuesta ante una petición que no tiene respuesta sea el adecuado, 404.

~~~
it('2025 league should returns 404 ', async () => {
    const res = await server.inject({
        method: 'get',
        url: '/GetLeagues/2025'
    });

    expect(res.statusCode).to.equal(404);
});
~~~

En este último vamos a testear que cuando posteamos un partido con la payload correcta, el código de respuesta sea el correcto y que nos devuelva un string, que en nuestro caso sería el identificador único del partido creado.

~~~
describe('Testing Post methods', () => {

    it('Add match response should be 201. ', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/AddMatch',
            payload: {
                date:"10/02/2020",
                played:true,
                result:"6/2, 6/2",
                player1:"8c710459-559d-494f-9724-1321c5112d3b",
                player2:"f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7",
                leagueId: "24d4e12s-3caPF-11eb-adc1-0242ac120002"
            },

        });

        expect(res.statusCode).to.equal(201);
        expect(res.result).to.be.a.string();
     
    });

~~~

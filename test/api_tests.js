//const { expect } = require('chai');
const { expect } = require('@hapi/code');

const server  = require('../src/app.js')
const request = require('http');

// https://niralar.com/testing-hapi-js-with-jest/

describe('Testing Get methods', () => {
    
    after((done) => {
        server.events.on('stop', ()=> {
            done();
        });
        server.stop();
    
    })

    it('Get leagues should returns 200 and be an array of objects', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/GetLeagues'
        });

        expect(res.statusCode).to.equal(200);
        expect(res.result).to.be.an.array();
        expect(res.payload).to.be.json;
    
    });

    it('2020 league should returns 200 and be an array of objects', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/GetLeagues/2020'
        });

        expect(res.statusCode).to.equal(200);
        expect(res.payload).to.be.json;
    });

    it('2025 league should returns 404 ', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/GetLeagues/2025'
        });

        expect(res.statusCode).to.equal(404);
    });

    it('Get players from 2020 should responds with status 200 and be an array of objects', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/GetPlayers/2020'
        });

        expect(res.statusCode).to.equal(200);
        expect(res.result).to.be.an.array();
        expect(res.payload).to.be.json;

    });

    it('Get player individually should return 200 and contains an array ', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/GetPlayer/8c710459-559d-494f-9724-1321c5112d3b'
        });

        expect(res.statusCode).to.equal(200);
        expect(res.payload).to.be.json;
       
    });


});

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




});


  



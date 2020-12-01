const { expect } = require('chai');
var request = require('supertest')
const League = require("../src/models/league");
const Match = require("../src/models/match");
const url= 'https://tenis-league-admin.vercel.app';

var request = request(url);



describe('matches', function() {
    describe('GET', function(){
        it('Debe devolver JSON como forma, status 200 y ser un array', function(done){
            request.get('/api/matches')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(function (response) {
                    // Do something with response
                    expect(response.body).to.be.an('array');

                  })
                
                  .end(done);

        });
    });

});


describe('players', function() {
    describe('GET', function(){
        it('Debe devolver JSON como forma, status 200 y ser un array', function(done){
            request.get('/api/players')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(function (response) {
                    // Do something with response
                    expect(response.body).to.be.an('array');
                  })
                  .end(done);

        });
    });

});
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
var url = "https://tenisleagueadmin.herokuapp.com";

describe('Testing Get methods', () => {
    
    describe('Get all leagues ',()=>{
        it('Should returns status 200', (done) => {
            chai.request(url)
            .get('/League')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
        });
    });
    describe('Get league for one year',()=>{
        it('Should returns status 200', (done) => {
            chai.request(url)
            .get('/League/2020')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
        });
    });
    describe('Get players for one year',()=>{
        it('Should returns status 200', (done) => {
            chai.request(url)
            .get('/Players/2020')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
        });
    });

    describe('Get player by id',()=>{
        it('Should returns status 200', (done) => {
            chai.request(url)
            .get('/Player/e994ac8a-2ac8-4b4a-8a86-f5bdcd5883f1')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
        });
    });

    describe('Get matches for one year ',()=>{
        it('Should returns status 200', (done) => {
            chai.request(url)
            .get('/Matches/2020')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
        });
    });

    describe('Get match by id ',()=>{
        it('Should returns status 200', (done) => {
            chai.request(url)
            .get('/Match/20f5353d0-2cbd-11eb-adc1-0242ac120002')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
        });
    });



});

// describe('Testing Put  methods', () => {

//     describe('update the days of country with id 1: ',()=>{
//         it('should update the number of days', (done) => {
//         chai.request(url)
//         .put('/Match')
//         .send({
//             date:"10/02/2020",
//             played:true,
//             result:"6/2, 6/2",
//             player1:"8c710459-559d-494f-9724-1321c5112d3b",
//             player2:"f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7",
//             leagueId: "24d4e12s-3caPF-11eb-adc1-0242ac120002"
//         })
//         .end( function(err,res){
//         expect(res).to.have.status(201);
//         done();
//         });
//         });
//        });
    
// });

  



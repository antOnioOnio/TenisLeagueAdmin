"use strict";

const { LeagueController } = require("./controller/LeagueController.js");

var controlador = new LeagueController();

module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {


      server.route(
        [
            {
                method: 'GET',
                path: '/GetLeagues',
                handler: async (req, res) => {
                    
                    var data = controlador.getLeagues();

                    var code;
                    if (data.length == 0){
                        code = 204;
                    }else {
                        code = 200;
                    }
                    
                    return res.response(data).code(code);
                }
            },

            {
                method: 'GET',
                path: '/GetLeagues/{year}',
                handler: (req, res) => {          
                                 
                    var data = controlador.getLeague(req.params.year);

                    var code;
                    if (data.length == 0){
                        code = 404;
                        data = "no content for that year";
                    }else {
                        code = 200;
                    }
                    
                    return res.response(data).code(code);
                }
            },
            
            {
                method: 'GET',
                path: '/GetPlayers/{year}',
                handler: (req, res) => {      
                    
                    var data = controlador.getPlayers(req.params.year);

                    var code;
                    if (data.length == 0){
                        code = 404;
                        data = "no content for that year";
                    }else {
                        code = 200;
                    }
                
                    return res.response(data).code(code);
                }
            },

            {
                method: 'GET',
                path: '/GetPlayer/{id}',
                handler: (req, res) => {          
                    var data = controlador.getPlayer(req.params.id);

                    var code;
                    if ( data != null) {
                        code = 200;
                    }else {
                        code = 404;
                        data = "No player with that id"
                    }

                    return res.response(data).code(code);
                }
            },
            {
                method: 'POST',
                path: '/AddPlayer',
               
                handler: (req, res) => {       
        
                    const payload = req.payload;

                    var data = controlador.addPlayer(
                        payload.name, payload.email,payload.tlf,
                        payload.level,payload.age,payload.leagueId);

                    var code ;
                    if ( data != null) {
                        code = 200;
                    }else {
                        code = 404;
                        data = "Wrong information, try with another league id"
                    }

                    
                    return res.response(data).code(code);
                }
            },

            {
                method: 'GET',
                path: '/GetMatches/{year}',
                handler: (req, res) => {        
                    
                    var data = controlador.getMatches(req.params.year);
                    
                    var code ;
                    if ( data != null) {
                        code = 200;
                    }else {
                        code = 404;
                        data = "No content for tha year"
                    }

                    return res.response(data).code(code);
                }
            },

            {
                method: 'GET',
                path: '/GetMatch/{id}',
                handler: (req, res) => {   

                    var data = controlador.getMatch(req.params.id);
                    var code ;
                    if ( data != null) {
                        code = 200;
                    }else {
                        code = 404;
                        data = "No content for that id";
                    }


                   return res.response(data).code(code);
                }
            },
            
            {

                method: 'POST',
                path: '/AddMatch',
               
                handler: (req, res) => {       
        
                    const payload = req.payload;

                    var data = controlador.addMatch(
                        payload.date, payload.played,payload.result,
                        payload.player1,payload.player2,payload.leagueId);

                        var code ;
                        if ( data != null) {
                            code = 200;
                        }else {
                            code = 404;
                            data = "Wrong info, try with another league Id or check the players"
                        }
    
                        return res.response(data).code(code);
                }
            },

        ],
      );
    }


  }
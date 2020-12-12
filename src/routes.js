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
                    
                    return controlador.getLeagues();
                }
            },

            {
                method: 'GET',
                path: '/GetLeagues/{year}',
                handler: (req, res) => {                    
                    return controlador.getLeague(req.params.year);
                }
            },
            
            {
                method: 'GET',
                path: '/GetPlayers/{year}',
                handler: (req, res) => {                    
                    return controlador.getPlayers(req.params.year);
                }
            },

            {
                method: 'GET',
                path: '/GetPlayer/{id}',
                handler: (req, res) => {                    
                    return controlador.getPlayer(req.params.id);
                }
            },
            {

                method: 'POST',
                path: '/AddPlayer',
               
                handler: (req, res) => {       
        
                    const payload = req.payload;

                       
                    return controlador.addPlayer(
                        payload.name, payload.email,payload.tlf,
                        payload.level,payload.age,payload.leagueId);
                }
            },

            {
                method: 'GET',
                path: '/GetMatches/{year}',
                handler: (req, res) => {                    
                    return controlador.getMatches(req.params.year);
                }
            },

            {
                method: 'GET',
                path: '/GetMatch/{id}',
                handler: (req, res) => {                    
                    return controlador.getMatch(req.params.id);
                }
            },
            
            {

                method: 'POST',
                path: '/AddMatch',
               
                handler: (req, res) => {       
        
                    const payload = req.payload;

                       
                    return controlador.addMatch(
                        payload.date, payload.played,payload.result,
                        payload.player1,payload.player2,payload.leagueId);
                }
            },

        ],
      );
    }


  }
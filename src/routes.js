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
            }
        ],
      );
    }


  }
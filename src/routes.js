"use strict";

const { LeagueController } = require("./controller/LeagueController.js");
const Joi = require('@hapi/joi');

var controlador = new LeagueController();
const uriApp = "https://tenisleagueadmin.herokuapp.com";

module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
    
      server.route(
        [
        {
            method: 'GET',
            path: '/',
            handler: async (req, res) => {
                
                return {status : "ok"}
            }
        },
            {
                method: 'GET',
                path: '/League',
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
                path: '/status',
                handler: async (req, res) => {
                    
            
                    return { status: "OK" };
                }
            },

            {
                method: 'GET',
                path: '/League/{year}',
                options:{

                    validate: {
                        query:Joi.object({
                            year: Joi.number()
                            .integer()
                            .min(1900)
                            .max(2023),
                        }),  
                        options:{
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        },
                    }
                },
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
                }, 
      

            },
            
            {
                method: 'GET',
                path: '/Players/{year}',
                options:{
                    validate: {
                        query:Joi.object({
                            year: Joi.number()
                            .integer()
                            .min(1900)
                            .max(2023),
                        }),  
                        options:{
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        },
                    }
                },
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
                path: '/Player/{id}',
                config:{
                    validate: {
                        params:Joi.object({
                            id: Joi.string().min(5).required()
                        }),  
                        options:{
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        },
                    }
                },
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
                },
            },
            {
                method: 'POST',
                path: '/Player',
                config:{
                    validate: {
                        payload:Joi.object({
                            name: Joi.string().min(2).max(30).required(),
                            email: Joi.string().email().required(),
                            tlf: Joi.number().min(9).required(),
                            level: Joi.string().required(),
                            age: Joi.number().required(),
                            leagueId: Joi.string().min(5).max(50).required()
                        }),  
                        options:{
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        },
                    }
                },  
              
               
                handler: (req, res) => {       
        
                    const payload = req.payload;

                    var data = controlador.addPlayer(
                        payload.name, payload.email,payload.tlf,
                        payload.level,payload.age,payload.leagueId);

                    var code ;
                    if ( data != null) {
                        code = 201;
                    }else {
                        code = 404;
                        data = "Wrong information, try with another league id or check the payload"
                    }

                    var uriLocation =  uriApp + "/Player/" + data;
                  
                    return res.response(data).code(code).location(uriLocation);
                }
            },

            {
                method: 'GET',
                path: '/Matches/{year}',
                options:{
                    validate: {
                        query:Joi.object({
                            year: Joi.number()
                            .integer()
                            .min(1900)
                            .max(2023)
                        }),  
                        options:{
                            collect: true,
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        },
                    }
                },
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
                path: '/Match/{id}',
                config:{
                    validate: {
                        params:Joi.object({
                            id: Joi.string().min(5).required()
                        }),  
                        options:{
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        },
                    }
                },
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
                path: '/Match',
                options:{
                    validate: {
                        payload:Joi.object({
                            date: Joi.string().required(),
                            played: Joi.boolean().required(),
                            result: Joi.string().required(),
                            player1: Joi.string().min(5).max(50).required(),
                            player2: Joi.string().min(5).max(50).required(),
                            leagueId: Joi.string().min(5).max(50).required()
                        }),
                        options:{
                            allowUnknown: true,
                            abortEarly: false
                        },
                        failAction: async (request, h, err) => {
                            console.log(err);
                            throw err;
                        }
                    }
                },
               
                handler: (req, res) => {       
        
                    const payload = req.payload;

                    var data = controlador.addMatch(
                        payload.date, payload.played,payload.result,
                        payload.player1,payload.player2,payload.leagueId);

                        var code ;
                        if ( data != null) {
                            code = 201;
                        }else {
                            code = 404;
                            data = "Wrong info, try with another league Id or check the players"
                        }
                        var uriLocation =  uriApp + "/Match/" + data;

                        return res.response(data).code(code).location(uriLocation);
                }
            },

        ],
      );
    }

  }
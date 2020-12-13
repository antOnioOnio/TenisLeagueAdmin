'use strict';

const Hapi = require('@hapi/hapi');

const routes = require("./routes");

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        app: {}
    });


    await server.register(routes); 

    server.events.on('response', function (request) {
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
    });

    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();




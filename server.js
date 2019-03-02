'use strict';

const Hapi=require('hapi');
//const mongoose = require('mongoose');
//const schema = require('./models/wolves.js/index.js');


// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
const db = require('./database.js').db;
const routes = require('./route.js');

server.route(routes);

server.route({
	method: 'GET',
	path: '/',
	handler(request, reply) {
		reply('Hello, world!');
	}
});

server.route({
	method: 'GET',
	path: '/api/{name}',
	handler(request, h) {
        ///h('Hello, '+request.params.name);
        return `Hello ${encodeURIComponent(request.params.name)}!`
	}
});

server.route({
    method: 'GET',
    path: '/hello/{user*2}',
    handler: function (request, h) {

        const userParts = request.params.user.split('/');
        return `Hello ${encodeURIComponent(userParts[0])} ${encodeURIComponent(userParts[1])}!`;
    }
});

// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();


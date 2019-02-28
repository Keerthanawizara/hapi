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
	path: '/api',
	handler(request, reply) {
		reply('Hello, API!');
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


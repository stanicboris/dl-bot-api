// hello-server-attach.js
var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development';
process.env['DEBUG'] = '*';

// setup http + express + socket.io
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {'log level': 0});
const Nick = require("nickjs");
const nick = new Nick();
const request = require('request');

// setup deployd
require('deployd').attach(server, {
    socketIo: io,  // if not provided, attach will create one for you.
    env: ENV,
    db: {host:'localhost', port:27017, name:'test-dl-bot'}
});

app.get('/', (req, res) => res.send('Hello World!'));
// After attach, express can use server.handleRequest as middleware
app.use(server.handleRequest);


// start server
server.listen(PORT);
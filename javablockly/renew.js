'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let led = null;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/index.html')
});

five.Board().on('ready', function() {
  console.log('Arduino is ready.');

  // Listen to the web socket connection
  io.on('connection', function(client) {
    client.on('runCode', function(data){
      console.log(data.code);
      eval(data.code);
    });
  });
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
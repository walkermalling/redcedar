'use strict';
var http = require('http');
var express = require('express');
// var bodyparser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/build'));

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'),function(){
  console.log('Sever has started on ' + app.get('port'));
});
#!/usr/bin/env node

var http = require('http');

var server = http.createServer(function(req, res) {
    var l_string = "";

    l_string += '<h1> Hello World ! </h1>';
    l_string += '<p>' + req.toString() + '</p>';

    res.writeHead(200);
    res.end(l_string);
});

server.listen(8080);
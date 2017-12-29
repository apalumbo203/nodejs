#!/usr/bin/env node

var g_http = require('http');
var g_url = require('url');
var g_query = require('querystring');

var g_http_mime = {"Content-Type": "text/html"};

var g_html_index = '<!DOCTYPE html>'+
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8" />'+
    '        <title>Ma page Node.js !</title>'+
    '    </head>'+
    '    <body>'+
    '     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
    '    </body>'+
    '</html>';

var server_client_handler = function(req, res) {
    var l_page_path = g_url.parse(req.url).pathname;
    var l_query = g_url.parse(req.url).query;

    console.log(l_page_path);

    if (l_query != null)
    {
        var l_hq = g_query.parse(l_query);

        console.log("\t" + l_hq['username']);
    }


    res.writeHead(200, g_http_mime);
    res.end(g_html_index);
};

var server_main = function()
{
    var l_server = g_http.createServer(server_client_handler);

    l_server.listen(8080);
};

server_main();
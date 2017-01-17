var HttpDispatcher = require('httpdispatcher');
var http           = require('http');
var url            = require('url');
var dispatcher     = new HttpDispatcher();

const punManager = require('./punManager')
 
dispatcher.setStatic('/resources');
dispatcher.setStaticDirname('static');

dispatcher.onGet("/all", function(req, res) {
    var query = url.parse(req.url,true).query
    console.log(query) 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var pun = punManager.get("animal")
    res.end(JSON.stringify(pun));
}); 
 
dispatcher.onGet("/animal", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var pun = punManager.get("animal")
    res.end(JSON.stringify(pun));
}); 

dispatcher.onGet("/battery", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var pun = punManager.get("battery")
    res.end(JSON.stringify(pun))
}); 

dispatcher.onGet("/computer", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var pun = punManager.get("computer")
    res.end(JSON.stringify(pun))
}); 

dispatcher.onGet("/elevator", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var pun = punManager.get("elevator")
    res.end(JSON.stringify(pun))
}); 

dispatcher.onGet("/food", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var pun = punManager.get("food")
    res.end(JSON.stringify(pun))
}); 

dispatcher.onGet("/space", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var pun = punManager.get("space")
    res.end(JSON.stringify(pun))
}); 
 
 
http.createServer(function (req, res) {
    dispatcher.dispatch(req, res);
}).listen(8080, '127.0.0.1');
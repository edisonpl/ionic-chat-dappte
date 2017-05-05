/**
 * Created by imac on 12/29/15.
 */
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



//Connect to the MongoDB Server


/**** Bootup the Server ****/

var port = process.env.PORT || 1227;
server.listen(port, function(err){
    if(err) throw err;
    console.log("Server now running at port: "+port);
});








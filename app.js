// node.js requirments for my app.
var express = require('express');
var app = express(); 

var http = require('http').Server(app);
// var redis = require ('redis');

// might not need?
app.use(express.static(__dirname + '/public'));

// Render my html page.
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/auth/soundcloud/callback', function(req,res){
  res.sendFile(__dirname + '/public/callback.html');
});


 












// Start my server 
app.listen(3000, function () {
  console.log("Server is running...");
});
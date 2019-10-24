// Require/import the HTTP module
var http = require("http");
var express = require("express");
var app = express();

// Define a port to listen for incoming requests
var PORT = 8080;


//Routes
app.get("/", function(req, res) {
  res.sendfile("index.html");
 });

 app.get("/makenote", function(req, res) {
  res.sendfile("notes.html");
 });

 /*
 app.get("/viewnote", function(req, res) {
  res.send("view notes Page");
 });
 */

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

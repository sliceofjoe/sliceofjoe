var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbyte!"
app.get("/bye", function(req,res){
    res.send("Goodbye!");
});
// "/dog" => "Meow!"
app.get("/dog", function(req,res){
    console.log("Someone made a request to /dog!");
    res.send("Meow!");
});

// Tell Express to listen for requests (start server)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
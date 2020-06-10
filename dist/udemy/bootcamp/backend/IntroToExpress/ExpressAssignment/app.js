var express = require("express");
var app = express();

//root page
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//speak/animal
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    var message = "The " + animal + " says '" + sound + "'!";
    res.send(message);
});

//repeat word/num times
app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word + " ";
    var times = parseInt(req.params.num);
    var str = "";

    for(var i = 0; i < times; i++){
        str += word + " ";
    }
    res.send(str);
});

//Fallback page
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});


// Tell Express to listen for requests (start server)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
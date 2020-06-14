var express = require("express")
var app = express();

app.get("/", function(req,res){
    res.render("home.ejs");
});

// Tell Express to listen for requests (start server)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
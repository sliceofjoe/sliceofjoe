var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Mountain Goat's Creek", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Mountain Goat's Creek", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Mountain Goat's Creek", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"},
  {name: "Mountain Goat's Creek", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440772e79d69f4fc3_340.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

// Tell Express to listen for requests (start server)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The YelpCamp Server Has Started!");
});
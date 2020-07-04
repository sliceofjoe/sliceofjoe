const campground = require("./models/campground");

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");


mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/yelp_camp_v6");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

//PASSPORT CONFIGURATION*********************************
app.use(require("express-session")({
  secret: "J3T coming for you",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});


app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - shows all campgrounds
app.get("/campgrounds", function(req, res){
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
    }
  });
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}
  //create new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      //redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  })
  
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("campgrounds/new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
  //find campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      console.log(foundCampground);
      //render show template with that campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

//====================
// COMMENTS ROUTE
//====================
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
  //find campground by id
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
    } else {
      res.render("comments/new", {campground: campground});
    }
  })
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
  //lookup campground by ID
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
        //create new comment
        Comment.create(req.body.comment, function(err, comment){
          if(err){
            console.log(err);
          } else {
              //connect new comment to campground
              campground.comments.push(comment);
              campground.save();
              //redirect back to campground show page
              res.redirect("/campgrounds/" + campground._id);
          }
        }); 
      }
  });
});

//===========================
//AUTH ROUTES
//===========================

//Show register form
app.get("/register", function(req, res){
  res.render("register");
});

//handle signup logic
app.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function( err, user){
    if(err){
      console.log(err);
      return res.render("register");
    } 
    passport.authenticate("local")(req, res, function(){
      res.redirect("/campgrounds");
    });
  });
});

//Show LOGIN form
app.get("/login", function(req, res){
  res.render("login");
});

//Handling LOGIN logic
app.post("/login", passport.authenticate("local", 
  {
    successRedirect: "/campgrounds", 
    failureRedirect: "/login"
  }), function(req, res){
});

//LOGOUT route
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

// Tell Express to listen for requests (start server)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The YelpCamp Server Has Started!");
});
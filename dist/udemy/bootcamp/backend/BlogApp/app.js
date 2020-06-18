var express             = require("express"),
    app                 = express(),
    expressSanitizer    = require("express-sanitizer"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    methodOverride      = require("method-override");

//**********APP CONFIG**********
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost:27017/blog_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//**********MONGOOSE/MODEL CONFIG**********
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);

//**********RESTFUL ROUTES**********
app.get("/", function(req, res){
    res.redirect("/blogs");
})

//INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("Error!")
        } else {
            res.render("index", {blogs: blogs});
        }
    })
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitizer(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/");
        } else {
            res.render("show", {blog: foundBlog})
        }
    });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog})
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitizer(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
});

//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/");
        }
    });
});

// **********Tell Express to listen for requests (start server)**********
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The BlogApp Server Has Started!");
});
var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
const e = require("express");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "A campground you won't forget"
    },
    {
        name: "Iron Hill", 
        image: "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
        description: "A campground you won't forget"
    },
    {
        name: "Salmon Creek", 
        image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "A campground you won't forget"
    }
]
function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log("error found");
        } else {
            console.log("removed campgrounds!");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            });
                    }
                });
            });
        }
    });
    
    
    //add a few comments
}

module.exports = seedDB;
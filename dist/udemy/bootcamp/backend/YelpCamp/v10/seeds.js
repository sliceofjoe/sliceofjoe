var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
const e = require("express");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus mattis ex eget bibendum. Aliquam ac elementum leo. Nunc at posuere tellus. Duis a luctus erat. Praesent commodo arcu sit amet nisl posuere mattis. Integer mattis quis neque id semper. Suspendisse nec condimentum lectus, bibendum tempor est. Phasellus faucibus cursus massa, non aliquam nunc euismod et. Suspendisse potenti."
    },
    {
        name: "Iron Hill", 
        image: "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus mattis ex eget bibendum. Aliquam ac elementum leo. Nunc at posuere tellus. Duis a luctus erat. Praesent commodo arcu sit amet nisl posuere mattis. Integer mattis quis neque id semper. Suspendisse nec condimentum lectus, bibendum tempor est. Phasellus faucibus cursus massa, non aliquam nunc euismod et. Suspendisse potenti."
    },
    {
        name: "Salmon Creek", 
        image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus mattis ex eget bibendum. Aliquam ac elementum leo. Nunc at posuere tellus. Duis a luctus erat. Praesent commodo arcu sit amet nisl posuere mattis. Integer mattis quis neque id semper. Suspendisse nec condimentum lectus, bibendum tempor est. Phasellus faucibus cursus massa, non aliquam nunc euismod et. Suspendisse potenti."
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
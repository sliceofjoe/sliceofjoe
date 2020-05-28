var movies = [
  {
    title: "The Intouchables",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 3,
    hasWatched: false
  },
  {
    title: "The Accountant",
    rating: 5,
    hasWatched: true
  },
  {
    title: "The Lighthouse",
    rating: 4,
    hasWatched: false
  }
];

console.log("Movies to review:");
for(var i = 0; i < movies.length; i++){
  console.log("Movie " + (i+1) + ": " + movies[i].title)
}

for(var i = 0; i < movies.length; i++){
  if(movies[i].hasWatched === true){
    console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
  }
  if(movies[i].hasWatched === false){
    console.log("You have not watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars")
  }
};

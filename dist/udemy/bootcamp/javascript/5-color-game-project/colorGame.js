//**********VARIABLES**********
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

//**********LOGIC**********
//Change colors of squares and sets game
for(i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;

    //compare clicked color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

//**********DIFFICULTY BUTTONS**********
easyBtn.addEventListener("click", function(){
  alert("easy button clicked");
});

hardBtn.addEventListener("click", function(){
  alert("hard button clicked");
});

//**********Reset Button**********
resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
})

//**********FUNCTIONS**********
//Once game is won, change colors of square to match
function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//Selecting the winning color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//Creating the array of random colors
function generateRandomColors(num){
  //make an empty array
  arr = []
  //repeat NUM times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

//Generate RGB colors for array
function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

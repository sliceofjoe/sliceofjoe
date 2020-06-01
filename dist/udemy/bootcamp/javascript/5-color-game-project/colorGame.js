//**********VARIABLES**********
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

//**********Reset Button**********
resetButton.addEventListener("click", function(){
  reset();
})

//**********FUNCTIONS**********
//Initial function to run at page load
function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  //MODE Button click listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //Another way of writing an IF statement
      reset();
    });
  }
}

function setUpSquares(){
  //**********LOGIC**********
  //Change colors of squares and sets game
  for(i = 0; i < squares.length; i++){
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
}

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

//Resets game
function reset(){
  //removes span text
  messageDisplay.textContent = "";
  //changes text for reset button
  resetButton.textContent = "New Colors";
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(i = 0; i < squares.length; i++){
    if(colors[i]){
      //display all six squares
      squares[i].style.display = "block";
      //add initial colors to squares
      squares[i].style.backgroundColor = colors[i];
    } else {
      //hide last 3 squares
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

//**********OLD EVENT LISTENERS**********
// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   h1.style.backgroundColor = "steelblue";
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   h1.style.backgroundColor = "steelblue";
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//   }
// });

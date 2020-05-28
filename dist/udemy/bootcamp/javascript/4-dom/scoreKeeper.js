//***SELECTORS***
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset")
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span")

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//***ADDING SCORES***
p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score ++; //Add score if game is not over
    if(p1Score === winningScore){
      p1Display.classList.add("winner"); //Add .winner class
      gameOver = true; //Set gameOver to true so that score cannot be added
    }
    p1Display.textContent = p1Score; //Update HTML
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score ++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

//***RESET BUTTON***
resetButton.addEventListener("click", reset);

function reset(){
  p1Score = 0; //Reset scores to -
  p2Score = 0;
  p1Display.textContent = 0; //Reset HTML to 0
  p2Display.textContent = 0;
  p1Display.classList.remove("winner"); //Remove .winner class
  p2Display.classList.remove("winner");
  gameOver = false; //Set gameOver back to false
}

//***CHANGE PLAYING TO: ***
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value); //Changes the type of numInput.value from a string to a number
  reset(); //Resets the score if Playing to: is changed
})

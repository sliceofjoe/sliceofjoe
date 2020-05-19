//create secretNumber
var secretNumber = 4;

//ask user for guessing
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is correct
if(guess === secretNumber) {
  alert("You got it right!");
}

//otherwise, check if higher
else if(guess > secretNumber){
  alert("Too high. Guess again!");
}

//otherwise, check if lower
else {
  alert("Too low. Guess again!");
}

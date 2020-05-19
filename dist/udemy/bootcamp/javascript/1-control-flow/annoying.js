// var question = "Are we there yet?"
// var answer = prompt(question);
//
// while(answer !== "yes" && answer !== "yeah") {
//   var answer = prompt(question + "?");
//   question = question + "?";
// }
//
// alert("Yay, we made it!!");


//Version 2
var question = "Are we there yet?"
var answer = prompt(question);

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
  var answer = prompt(question + "?");
  question = question + "?";
}

alert("Yay, we made it!!");

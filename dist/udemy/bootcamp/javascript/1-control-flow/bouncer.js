// Get age and convert it to an number
var age = Number(prompt("How old are you?"));
console.log("You are " + age + " years old.");

//If age is negative
if(age < 0){
  console.log("Error: does not compute");
}

if(age == 21){
  console.log("Happy 21st birthday!!");
}

if(age%2 !== 0){
  console.log("Your age is odd!");
}

if(Math.sqrt(age) % 1 === 0){
  console.log("perfect square!");
}

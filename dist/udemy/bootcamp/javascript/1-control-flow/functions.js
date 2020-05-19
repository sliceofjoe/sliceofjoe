//isEven()
// function isEven(number) {
//   if(number % 2 === 0){
//     return true;
//   }
//   else(number % 2 === 1){
//     return false;
//   }
// }

function isEven(num){
  return num % 2 === 0;
}

//factorial()
function factorial(num){
  //define a result variable (where you want to stop)
  var  result = 1;
  //calculate factorial and store value in result
  for(var i = 1; i <= num; i++){
    result *= i;
  }
  //return the result variable
  return result;
}

// function factorial(num){
//   if(num === 0){
//     return = 1;
//   }
//   //define a result variable (where you want to stop)
//   var  result = num;
//   //calculate factorial and store value in result
//   for(var i = num-1; i >= 1; i--){
//     result *= i;
//   }
//   //return the result variable
//   return result ;
// }

//kebabToSnake
function kebabToSnake(str) {
  //replace all dashes with
  var myString = str.replace(/-/g, "_");
  //return str
  return myString;
  //try with: "this - is -a - ---test";
}

//printReverse() - Write a function that takes an array as an ARGUMENT and prints out the elements in the array in reverse order(don't actually reverse the array itself)
console.log("printReverse - Write a function that takes an array as an ARGUMENT and prints out the elements in the array in reverse order(don't actually reverse the array itself)");
function printReverse(arr){
  for(i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}


printReverse([1,2,3,4]);

//isUniform() - write a function which takes an array as an ARGUMENT and returns true if all elements in the array are identical
console.log("isUniform - write a function which takes an array as an ARGUMENT and returns true if all elements in the array are identical");

function isUniform(arr){
  var initial = arr[0];

  for(i = 1; i < arr.length; i++){
    if(initial !== arr[i]){
      return false;
    }
  } return true;
}

//sumArray() - Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the Arrays
console.log("sumArray - Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the Arrays");

// function sumArray(arr){
//   var result = 0;
//
//   for(i = 0; i < arr.length; i++){
//     result = result + arr[i];
//   } return result;
// }

function sumArray(arr){
  var result = 0;

  arr.forEach(function(element){
    total += element;
  });
  return total;


//max() - Write a function max() that accepts an array of numbers and returns the maximum number in the array
console.log("max - Write a function max() that accepts an array of numbers and returns the maximum number in the array");

function max(arr){
  var max = arr[0];

  for(i = 1; i < array.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  } return max;
}

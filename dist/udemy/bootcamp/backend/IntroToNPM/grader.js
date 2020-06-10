console.log("connected");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));


function average(arr){
    //Create a var for the first number
    var total = arr[0];
    //Loop and add each number to var
    for(var i = 1; i < arr.length; i++){
        total = total + arr[i];
    }
    //Divide var by length of array
    return Math.round(total / arr.length)
}


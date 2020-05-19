console.log("Print all numbers between -10 and 19");
// var count_1 = -10;
//
// while(count_1 <= 19){
//   console.log(count_1);
//   count_1++;
// }

for(var j = -10; j <=19; j++){
  console.log(j);
}

console.log("Print all even numbers between 10 and 40");
for(var j = 10; j <= 40; j++){
  if(j % 2 === 0){
    console.log(j);
  }
}

console.log("Print all odd numbers between 300 and 333");

for(j = 300; j <= 333; j++){
  if(j % 2 === 1){
    console.log(j);
  }
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(var j = 5; j <= 50; j++){
  if(j % 5 === 0 && j % 3 === 0){
    console.log(j);
  }
}

console.log("Print all numbers between -10 and 19");
var count_1 = -10;

while(count_1 <= 19){
  console.log(count_1);
  count_1++;
}

console.log("Print all even numbers between 10 and 40");
var count_2 = 10;

while(count_2 <= 40){
  console.log(count_2);
  count_2+=2;
}
console.log("Print all odd numbers between 300 and 333");
var count_3 = 300;

while(count_3 <=333){
  if(count_3 % 2 === 1){
    console.log(count_3);
  }
  count_3++;
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var count_4 = 5;

while(count_4 <= 50){
  if(count_4 % 5 === 0 && count_4 % 3 === 0){
    console.log(count_4);
  }
  count_4++;
}

/* 6. Write a program to find sum of an array */

// Approach -1 Using for..Of loop

function sumOfArray(array) {
  let sum = 0;

  for(const i of array){
      sum += i;
  }
  console.log(sum);
}

let array = [2,4,5,8,2];
sumOfArray(array);

// Approach -2 Using reduce

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 

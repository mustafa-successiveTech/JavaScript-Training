/* 11. Write a program to sort an array (bubble sort) */

const input = [5, 1, 4, 2, 8];

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 0; j < input.length - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
          let temp = input[j];
          input[j] = input[j + 1];
          input[j + 1] = temp;
      }
  }
}

console.log("Final result input : " , input); 

// Slightly optimized version

const input1 = [5, 3, 6, 1, 9, 4];

for (let i = 0; i < input1.length - 1; i++){
  let swap = false;
  for (let j = 0; j < input1.length - 1 -i; j++) {
      if (input1[j] > input1[j + 1]) {
          let temp = input1[j];
          input1[j] = input1[j + 1];
          input1[j + 1] = temp;
          swap = true;
      }
  }
  if(!swap) break;
}

console.log("Final result input1 : " , input1);

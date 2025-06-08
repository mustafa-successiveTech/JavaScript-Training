/* 10. Write a program to concatenate an input of array of arrays */

// Approach -1  Using flat()

const input = [[1,2], [3,4], [5,6]];
const result = input.flat();
console.log("Input : " , result);

// Approach -2 Using reduce() and concate()

const input1 = [[1, 2], [3, 4], [5, 6]];
const result1 = input1.reduce((acc, curr) => acc.concat(curr), []);
console.log("Input1 : " , result1); 

// Approach -3 Using spread() operator

const input2 = [[1, 2], [3, 4], [5, 6]];
const result2 = [].concat(...input2);
console.log("Input2 : ",result2);

// Appraoch -4 Using for loop

const input3 = [[1, 2], [3, 4], [5, 6]];
let result3 = [];

for(let arr of input3) {
  result3 = result3.concat(arr);
}
console.log("Input3 : " , result3);

// Approach -5 Using forEach

const input4 = [[1, 2], [3, 4], [5, 6]];
let result4 = [];

input4.forEach(subArr => result4.push(...subArr));
console.log("Input4 : " , result4);


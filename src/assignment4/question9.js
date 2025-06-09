/* 9. Write a program to find the last duplicate index in an array */

let arr = [1, 2, 3, 2, 4, 1, 5];
let seen = new Set();
let lastDuplicateIndex = -1;

for (let i = 0; i <= arr.length-1; i++) {
  if (seen.has(arr[i])) {
    lastDuplicateIndex = i;
  } else {
    seen.add(arr[i]);
  }
}

console.log(lastDuplicateIndex); 

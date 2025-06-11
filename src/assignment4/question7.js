/* 7. Write a program to find index of duplicate elements in an array */

let arr = [1, 2, 3, 2, 4, 1, 5, 3, 1];
let seen = new Map();
let duplicateIndices = [];

arr.forEach((val, index) => {
if (seen.has(val)) {
  duplicateIndices.push(index);
} else {
  seen.set(val, index);
}
});

console.log(arr);
console.log(duplicateIndices); 

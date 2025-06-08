/* 12. Write a program to display intersection of two array */

const arr1 = [1, 3, 4, 2, 8];
const arr2 = [3, 1, 9, 0, 7, 4];

// Approach - 1 Using filter and includes

let intersection = arr1.filter(item => arr2.includes(item));
console.log("Intersection using filter and includes : ", intersection);

// Approach - 2 Using Set

let set2 = new Set(arr2);
let intersection1 = arr1.filter(item => set2.has(item));
console.log("Intersection using Set : " , intersection1);

// Approach - 3 Using loop

const intersection2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
      intersection2.push(arr1[i]);
  }
}

console.log("Intersection using loop : " , intersection2); 



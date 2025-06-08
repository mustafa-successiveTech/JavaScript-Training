/* 14. Write a program to reverse an array */

// Approach 1 : Using loop

function reverseArrayUsingLoop(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
  }
  return reversed;
}

console.log("Reverse using loop : ", reverseArrayUsingLoop([1, 2, 3, 4, 5, 6])); 

// Approach 2 : Using in place swapping

function reverseUsingSwap(arr) {
  let start = 0, end = arr.length - 1;
  while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
  }
  return arr;
}

console.log("Reverse using inplaceSwap : ", reverseUsingSwap([1, 2, 3, 4, 5]));

// Approach 3 : Using reverse() method

let arr = [1, 2, 3, 4];
arr.reverse();
console.log("Reverse (built-in):", arr);


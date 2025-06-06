/* 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw") */

// Approach 1 - Using Set

function removeDuplicate(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicate("Hello World"));
console.log(removeDuplicate("My name is naman"));

// Approach 2 - Using indexOf

let result = "";

function removeDuplicateUsingIndex(str) {
  for(let i=0; i < str.length; i++) {
      if(result.indexOf(str[i]) === -1) {
          result += str[i];
      }
  }
  console.log(result);
}

removeDuplicateUsingIndex("Hello World");





/* 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw") */


function removeDuplicatesUsingSet(str) {
    return [...new Set(str)].join('');
  }
  
console.log(removeDuplicatesUsingSet("Hello World")); // Helo Wrd
console.log(removeDuplicatesUsingSet("Hello Kanak")); // Helo Kank
console.log(removeDuplicatesUsingSet("Hello kanak")); // Helo kan
console.log(removeDuplicatesUsingSet("My name is naman")); // My nameis


function removeDuplicatesUsingLoop(str) {
    let result = "";
    let seen = {};
  
    for (let char of str) {
      if (!seen[char]) {
        seen[char] = true;
        result += char;
      }
    }
  
    return result;
}

console.log(removeDuplicatesUsingLoop("Hello World")); // Helo Wrd
console.log(removeDuplicatesUsingLoop("Hello Kanak")); // Helo Kank
console.log(removeDuplicatesUsingLoop("Hello kanak")); // Helo kan
console.log(removeDuplicatesUsingLoop("My name is naman")); // My nameis

function removeDuplicatesUsingIndexOf(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) === -1) {
        result += str[i];
      }
    }
  
    return result;
  }
  
console.log(removeDuplicatesUsingIndexOf("Hello Yellow")); // Helo Yw
console.log(removeDuplicatesUsingIndexOf("Hello Kanak")); // Helo Kank
console.log(removeDuplicatesUsingIndexOf("Hello kanak")); // Helo kan
console.log(removeDuplicatesUsingIndexOf("My name is naman")); // My nameis 

 



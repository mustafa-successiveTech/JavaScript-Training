/* 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ") */

// Approach -1 Using for loop

let str = "Hello John";
let words = str.split(" ");
let result = "";

for (let word of words) {
  let rev = "";
  for (let i = word.length - 1; i >= 0; i--) {
    rev += word[i];
  }
  result += rev + " ";
}
console.log(result.trim()); // 'olleH nhoJ'

// Approach -2 Using split , map and reverse

let str1 = "Hello John";
let reversed = str1
    .split(" ")
    .map(word => word.split("")
    .reverse()
    .join(""))
     .join(" ");                 

console.log(reversed);
console.log(str1);

// Approach -3 Using recursion

function reverseWord(word) {
    if (word.length <= 1) return word;
    return reverseWord(word.slice(1)) + word[0];
}
  
let str2 = "Hello John";
let result1 = str2
    .split(" ")
    .map(reverseWord)
    .join(" ");
  
console.log(result1); // 'olleH nhoJ'



  


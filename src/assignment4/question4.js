/* 4. Write a program to convert given string to upperCase OR lowerCase */

// Approach - 1 Using in_built methods

let str1 = "Hello World";

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

// Approach - 2 Manual conversion using ASCII value

let str = "Hello World";
let upper = "", lower = "";

for (let ch of str) {
  let code = ch.charCodeAt(0);

  if (code >= 97 && code <= 122) {
    upper += String.fromCharCode(code - 32);
  } else {
    upper += ch;
  }

  if (code >= 65 && code <= 90) {
    lower += String.fromCharCode(code + 32);
  } else {
    lower += ch;
  }
}

console.log(upper); // "HELLO WORLD"
console.log(lower); // "hello world"

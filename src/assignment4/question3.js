/* 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1") */

// Using approach - 1

let str = "abcabcdabbcc";
let freq = {};

for(let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

let result = "";

for(let ch in freq) {
  result += ch + freq[ch];
}

console.log(result);
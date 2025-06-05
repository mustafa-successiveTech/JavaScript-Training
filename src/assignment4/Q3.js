// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

// Approach: Using a Map/Object

let str = "abcabcdabbcc";
let freq = {};

for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

let result = "";
for (let char in freq) {
  result += char + freq[char];
}

console.log(result); // "a3b4c4d1"

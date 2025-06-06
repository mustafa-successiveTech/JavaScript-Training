/* 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ") */

//  1. Using split(), map(), and join()

let str = "Hello World";

let result = str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");

console.log(result);

// Using for loop

let words = "Hello World";
let word = words.split(" ");
let final = "";

for(let ch of word) {
    let rev = "";
    for(let i = ch.length-1; i >= 0 ;i--) {
        rev += ch[i];
    }
    final += rev + " ";
}

console.log(final.trim());

// Using recursion

function reversedRecursion(str) {
    if(str.length <= 1) {
        return str;
    }
    return reversedRecursion(str.slice(1)) + str[0];
}

console.log(reversedRecursion("Reverse word Using Recursion"));
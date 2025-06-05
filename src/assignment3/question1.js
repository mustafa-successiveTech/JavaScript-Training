/* 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide) */

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2){
  return num1 - num2;
}

function multi(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

console.log(" Sum of two numbers : ", add(10, 5));
console.log(" SUbtract of two numbers : ", sub(10, 5));
console.log(" Multiply of two numbers : ", multi(10, 5));
console.log(" Division of two numbers : ", divide(10, 5));
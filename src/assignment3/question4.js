/* 4. Write a program to print all even number first and then all odd numbers */

const number = 10;

let even = "";
let odd = "";

for(let i=1; i <= number; i++) {
  if(i%2 === 0) {
      even += i + " ";
  }else {
      odd += i + " ";
  }
}
console.log(`All even numbers are : ${even}` );
console.log(`All odd numbers are : ${odd}`);
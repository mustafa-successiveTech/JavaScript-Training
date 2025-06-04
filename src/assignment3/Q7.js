/* 7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096) */


let num=2;
let res="";

while(num<=4096){
    res+=num+" ";
    num=2*num;
}

console.log(res);
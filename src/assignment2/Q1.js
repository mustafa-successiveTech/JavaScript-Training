/* 1. Write a program to give a random output between 1 to 10 
(AC: 2 simultaneous answers could not be same)  */

function getTwoRandomNumbers() {
    let first = Math.floor(Math.random() * 10) + 1;
    let second;
    do {
      second = Math.floor(Math.random() * 10) + 1;
    } while (second === first);
  
    console.log("Random numbers:", first, second);
  }
  
  getTwoRandomNumbers();

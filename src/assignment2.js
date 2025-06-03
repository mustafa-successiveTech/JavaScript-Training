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




/*2. Write a function to take input(age, name, phone no.) from user and display it */

function getUserInput() {
    const age = prompt("Enter your age:");
    const name = prompt("Enter your name:");
    const phone = prompt("Enter your phone number:");
  
    console.log("Age:", age);
    console.log("Name:", name);
    console.log("Phone Number:", phone);
  }
  
getUserInput();


/*3. Write a function expression that takes in another function as an argument */

const firstFunction = function(func) {
    func();
  };
  
firstFunction(() => console.log("Function passed as argument!"));
  

/*4. Write a function expression that takes in a number and returns its square.  */


function getSquare(number){
    return number*number;
}

console.log(getSquare(6));

/* 5. Write a function expression that takes in two numbers and returns their sum.  */

function getSum(a,b){
    return a+b;
}

console.log(getSum(2,3));

/*6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.  */

function isEven(num){
    
    return num % 2 == 0;
    
}

console.log(isEven(5));

/*7. All of the above questions from 3-6 needs to be done with arrow functions also  */


const firstFunction1 = (func) => {
    func();
  };
  
firstFunction1(() => console.log("Function passed as argument in arrow function!"));

const getSquare1 = (number)=>{
    return number*number;
}

console.log("Function taking input as argument and returning square : " , getSquare1(7));

const getSum1=(a,b)=>{
    return a+b;
}

console.log("Arrow function returning sum : " , getSum1(2,3));

const isEven1 = (num) => {
    
    return num % 2 == 0;
    
}

console.log("Arrow function returning even or not : "  , isEven1(5));
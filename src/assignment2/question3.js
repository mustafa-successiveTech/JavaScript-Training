/*3. Write a function expression that takes in another function as an argument */

// This concept is known as Higher Order Function

// Approach - 1 Using named function

function sayHello(){
  console.log("Hello from sayHello");
}

const firstFunction = function(func) {
  func();
}

// Approach -2 Using arrow function as an argument

const firstFunction1 = (func) => {
  func();
};

firstFunction1(sayHello);
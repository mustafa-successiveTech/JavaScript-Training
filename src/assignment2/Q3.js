/*3. Write a function expression that takes in another function as an argument */

const firstFunction = function(func) {
    func();
  };
  
firstFunction(() => console.log("Function passed as argument!"));
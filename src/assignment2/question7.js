/*7. All of the above questions from 3-6 needs to be done with arrow functions also  */


const firstFunction1 = (func) => {
  func();
};
  
firstFunction1(() => console.log("Function passed as argument in arrow function!"));

const getSquare1 = (number) => {
  return number * number;
}

console.log("Function taking input as argument and returning square : " , getSquare1(7));

const getSum1 = (a, b) => {
  return a + b;
}

console.log("Arrow function returning sum : " , getSum1(2,3));

const isEven1 = (num) => {
  return num % 2 === 0;
}

console.log("Arrow function returning even or not : "  , isEven1(5));
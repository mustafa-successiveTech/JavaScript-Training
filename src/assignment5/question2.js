/* 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26}) */

const arr = [
  { name : "John", age : 23},
  { name : "Doe", age : 26},
  { name : "Ibrahim", age : 25},
  { name : "Abraham", age : 30}
];

arr.sort((a, b) => a.age - b.age);

for (let obj of arr) {
  for (let key in obj) {
      console.log(key + " : " + obj[key]);
  }
}

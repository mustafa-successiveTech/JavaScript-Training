/* 1. Write a program to iterate over object. */

const obj = {
  name : "John",
  age : 23,
  course : 'mca',
  isActive : true
};

// Using for..in loop

console.log("Iteration using for..in loop : ");
for (let key in obj) {
  console.log(key + ":" + obj[key]);
}

// Using object.keys

console.log("Iteration using Object.keys loop : ");
Object.keys(obj).forEach(key => {
  console.log(key + ":" + obj[key]);
})

// Using Object.entries

console.log("Iteration using Object.entries : ");
Object.entries(obj).forEach(([key,val]) => {
  console.log(`${key} : ${val}`);
})

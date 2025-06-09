/* 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays. */

const obj = { 
  name: "John", 
  arr : [[1, 2], 3],
  address: { 
      city: "Delhi" 
  } 
};

const shallow = { ...obj };
console.log(obj.address.city); // Refer to line 6 Delhi changes to Mumbai
shallow.address.city = "Mumbai";
console.log(obj.address.city); // Refer to line 6 Delhi changes to Mumbai

console.log(obj.name); // Refer to line 3 , Line 7 doesn't changes it 
shallow.name = "Doe";
console.log(obj.name); // Refer to line 3 , Line 7 doesn't changes it 

console.log(obj.arr[0][0]); // Refer to 14 
shallow.arr[0][0] = 10;
console.log(obj.arr[0][0]); // Refer to 14 

// Solution using deepClone

console.log("After deepClone : ");

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: "John",
  age: 30,
  address: { city: "Delhi" },
  skills: ["JS", "React"]
};

const clone = deepClone(original);

clone.address.city = "Mumbai";
clone.name = "Doe";
clone.skills[0] = 10;

console.log(clone.address.city); 
console.log(clone.name); 
console.log(clone.skills[0]); 








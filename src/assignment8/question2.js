/*  

2 . let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject.property);
}

Reason : myObject.property will look for property is looking for literal key property

*/
   
let myObject = { 
    name : 'John', 
    age: 30 
};

for (let property in myObject) {
    console.log(property + ': ' + myObject[property]);
}


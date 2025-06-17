// Question
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let myNumber = myArray[5]; 
if (myNumber) {
  console.log('The number is: ' + myNumber);
} else {
  console.log('The number is undefined');
}

// Here in line 7 trying to acces array that is beyond the number of elements declared in the array
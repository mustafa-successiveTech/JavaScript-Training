/* Find Error in below questions and rectify them

1. let myArray = [1, 2, 3, 4];
for (let i = 0; i <= myArray.length; i++) {
   console.log(myArray[i]);
}

* /

/*for loop iteration required to be run till myArray.length - 1 as i is initialized to 0 in the beginning */

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
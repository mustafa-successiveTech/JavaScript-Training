/* 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1}) */

const arr = [
    { name : "John", age : 23, id : 1},
    { name : "Doe", age : 26, id : 2},
    { name : "Ibrahim", age : 25, id : 3},
    { name : "Abraham", age : 30, id : 4}
];

for (let obj of arr) {
    delete obj.id;
}

for (let obj of arr) {
    for (let key in obj) {
        console.log(key + ":" + obj[key]);
    }
}
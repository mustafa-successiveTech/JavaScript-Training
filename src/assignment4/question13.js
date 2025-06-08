/* 13. Write a program to return inverse of an array */

// Approach 1: Using a Loop

function inverseArray(arr) {
    let n = arr.length;
    let inv = new Array(n,0);
    for (let i = 0; i < n; i++) {
        inv[arr[i]] = i;
    }
    return inv;
}

let arr = [3, 0, 4, 1, 2];
console.log("Array before inverse : ", arr);
console.log("Inverse:", inverseArray(arr));

// Approach 2: Using reduce()

function inverseArrayWithReduce(arr) {
    return arr.reduce((inv, val, idx) => {
        inv[val] = idx;
        return inv;
    }, []);
}

let arr1 = [3, 0, 4, 1, 2];
console.log("Inverse (reduce):", inverseArrayWithReduce(arr1));





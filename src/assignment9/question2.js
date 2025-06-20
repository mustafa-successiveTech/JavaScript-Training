/* 2.Install the lodash package using npm install lodash. and use any of its function */

const lodash = require('lodash');

const arr = [1, 2, 3, 4, 5, 6];
const chunked = lodash.chunk(arr, 2);

console.log(chunked);
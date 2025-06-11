/* 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 } */

function flattenObject(obj, parent = '', res = {}) {
  for (let key in obj) {
    let prop = parent ? `${parent}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], prop, res); 
    } else {
      res[prop] = obj[key]; 
    }
  }
  return res;
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

const flat = flattenObject(obj);
console.log(flat);


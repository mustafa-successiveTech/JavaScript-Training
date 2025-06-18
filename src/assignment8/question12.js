// async function getData() {
//     setTimeout(function() { 
//         return [1, 2, 3, 4, 5]; 
//     }, 1000); 
// }

// getData().then(function(data) {
//     console.log(data);
// });

/* Answer -> 

  Error corrected below 

*/

async function getData() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve([1, 2, 3, 4, 5]);
      }, 5000);
  })
}

getData().then(function(data) {
  console.log(data);  
})
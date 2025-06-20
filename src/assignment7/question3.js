/* 3. Convert a callback-based API to a Promise-based API 

(function fetchData(callback) { 
    setTimeout(() => { 
        callback(null, "Data fetched successfully"); 
    }, 1000); 
}) 
    
*/

function fetchData() {
  return new Promise((resolve, reject) => {
      try {
          setTimeout(() => {
              resolve("Data fetched successfully");
          }, 1000);
          console.log("SetTimeout is executing");       
      } catch {
          reject("Data fetched failed");
      }        
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error));
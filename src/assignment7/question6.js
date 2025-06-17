/* 
6. Implement a function that returns a resolved Promise after a specified delay using async/await. */

const delay = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${ms}ms`);
      }, ms);
    });
};
  
(async () => {
    console.log("Waiting...");
    const result = await delay(1000); 
    console.log(result); 
})();
  
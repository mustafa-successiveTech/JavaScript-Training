/* 7. Create a function that performs multiple asynchronous operations in parallel 
using async/await and waits for all of them to complete before returning the results. */

const asyncOperation = (id, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Result from Task ${id} after ${delay}ms`);
    }, delay);
  });
};
  
const runParallelTasks = async () => {
  const tasks = [
    asyncOperation(1, 1000),
    asyncOperation(2, 500),
    asyncOperation(3, 800),
  ];
  
  const results = await Promise.all(tasks);
  return results;
};
  
runParallelTasks().then(console.log);
  
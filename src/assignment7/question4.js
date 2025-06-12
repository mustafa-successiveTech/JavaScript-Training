/* 4. Write a program to implement a Promise-based rate limiter, 
that limits the number of concurrent requests to a certain number */

class RateLimiter {
  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.activeCount = 0;
    this.queue = [];
  }

  enqueue(taskFn) {
    return new Promise((resolve, reject) => {
      const runTask = () => {
        this.activeCount++;
        taskFn()
          .then((res)=>console.log(res)
          )
          .catch(reject)
          .finally(() => {
            this.activeCount--;
            if (this.queue.length > 0) {
              const nextTask = this.queue.shift();
              nextTask();
            }
          });
      };

      if (this.activeCount < this.maxConcurrent) {
        runTask();
      } else {
        this.queue.push(runTask);
      }
    });
  }
}

// Simulate an async task
function createTask(id, delay) {
  return () => new Promise((resolve) => {
    console.log(`Task ${id} started`);
    setTimeout(() => {
      console.log(`Task ${id} finished`);
      resolve("resolved");
    }, delay);
  });
}

// Use the RateLimiter
const limiter = new RateLimiter(2); // Only 2 tasks can run at once

for (let i = 1; i <= 5; i++) {
  limiter.enqueue(createTask(i, 5000));
}

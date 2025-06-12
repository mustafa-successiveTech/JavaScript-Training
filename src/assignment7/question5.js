/* 5.  Write a program to implement a Promise-based task queue, 
that processes tasks in a specified order, with a specified concurrency limit */

class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(() => task().then(resolve).catch(reject));
      this.runNext(); 
    });
  }

  runNext() {
    if (this.running >= this.concurrency || this.queue.length === 0) return;

    const nextTask = this.queue.shift();
    this.running++;

    nextTask().finally(() => {
      this.running--;
      this.runNext(); 
    });
  }
}

const queue = new TaskQueue(2); 

const createTask = (id, delay) => () => new Promise((res) => {
  console.log(`Start Task ${id}`);
  setTimeout(() => {
    console.log(`End Task ${id}`);
    res();
  }, delay);
});

queue.add(createTask(1, 1000));
queue.add(createTask(2, 500));
queue.add(createTask(3, 300));
queue.add(createTask(4, 700));

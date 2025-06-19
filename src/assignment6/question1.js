/* 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance(). */

class BankAccount {
  constructor (owner, balance) {
      this.balance = balance;
      this.owner = owner;
  }

  deposit (balance) {
      this.balance += balance;
  }

  withdraw() {
      this.balance -= balance;
  }

  display() {
      console.log("Balance : ", this.balance);
  }
};

const person1 = new BankAccount('John', 10000);
person1.display();
person1.deposit(10000);
person1.display();
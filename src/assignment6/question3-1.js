/* 3.1 Create a class Person with properties name, age, gender, and interests. 
Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person. */

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greetings() {
    return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}. I like ${this.interests.join(", ")}.`;
  }

  farewell() {
    return `Goodbye ${this.name}!`;
  }
};

const person1 = new Person("John", 25, "male", ["reading", "coding"]);
console.log(person1.greetings());
console.log(person1.farewell());

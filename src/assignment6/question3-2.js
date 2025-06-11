/* 3.2 Create a class Student that inherits from the Person class and has a property studies. 
Override the greeting() method to include information about what the student is studying. */

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

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }

  greetings() {
    return `Hi, I'm ${this.name} and I study ${this.studies}.`;
  }
}

const stud1 = new Student("John", 22, "female", ["music", "math"], "Computer Science");
console.log(stud1.greetings());
/* 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
Override the farewell() method to include information about what the teacher teaches. */

class Person {
  constructor(name, age, gender, interest) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interest = interest;
  }

  greetings() {
      return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}. I like ${this.interests.join(", ")}.`;
    }
  
  farewell() {
      return `Goodbye ${this.name}!`;
  }

};

class Teacher extends Person {
  constructor(name, age, gender, interest, subjectsTaught) {
      super(name, age, gender, interest);
      this.subjectsTaught = subjectsTaught;
  }

  farewell() {
      return `Hi, I'm ${this.name} loves to teach ${this.subjectsTaught}`
  };
};

const teach = new Teacher("John", 56, "male", ["Teaching", "Playing"], "Computer Science");
console.log(teach.farewell());

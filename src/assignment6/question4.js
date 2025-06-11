/* 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array. */

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    fullName(){
        return `He is ${this.firstname} ${this.lastname},`;
    }

    static averageAge(peoples ) {
        const totalAge = peoples.reduce((sum, people) => {
            return sum + people.age;
        }, 0);

        return totalAge / peoples.length;
    }
};

const Peoples = [
    new Person("John", "Doe", 25),
    new Person("Alice", "King", 35),
    new Person("Morgan", "Doe", 20),
    new Person("Gayle", "Krish", 40),
];

// const avg = Person.averageAge(Peoples
console.log("Average Age:", Person.averageAge(Peoples));





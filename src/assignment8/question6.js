// var person = { 
//   name: "John Doe", 
//   age: 30, 
//   getDetails: function() { 
//       console.log(this.name + " is " + this.age + " years old"); 
//   } 
// };

// var getPersonDetails = person.getDetails;
// getPersonDetails();


/* Error corrected and describe below */

var person = { 
  name: "John Doe", 
  age: 30, 
  getDetails: function() { 
      console.log(this.name + " is " + this.age + " years old"); 
  } 
};

person.getDetails(); 
//this is the correction needed to done instead of upper two 
// line as getPersonDetails is not a function
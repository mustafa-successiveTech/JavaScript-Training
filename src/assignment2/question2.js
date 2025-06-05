/*2. Write a function to take input(age, name, phone no.) from user and display it */

function getUserInput() {
  const age = prompt("Enter your age:");
  const name = prompt("Enter your name:");
  const phone = prompt("Enter your phone number:");

  console.log("Age:", age);
  console.log("Name:", name);
  console.log("Phone Number:", phone);
}
  
getUserInput();

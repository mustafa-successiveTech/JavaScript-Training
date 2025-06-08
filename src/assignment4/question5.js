/* 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe) */

let str = "hello john deo";

let camelCase = str
  .split(" ")
  .map((word, index) =>
      index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )
  .join("");

console.log(camelCase);
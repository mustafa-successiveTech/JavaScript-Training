/* 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript 
(Use any open api to make a call) */

function fetchUsersWithCallback(callback) {
  fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
}

fetchUsersWithCallback(function (err, users) {
  if (err) {
      console.error("Error:", err);
  } else {
      console.log("Users (Callback):", users);
  }
});



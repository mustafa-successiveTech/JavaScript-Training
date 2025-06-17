// for (var i = 0; i < 10; i++) {
//   setTimeout(function() { 
//       process.stdout.write(i + ' '); 
//   }, 1000); 
// }

/* In this as the i is defined with var so when setTimeout get delayed and 
concurrently i is getting incremented and it reaches i = 10 so when settimeout get 
solved for each one then that time it console i = 10 for all the remaining iteration */

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
      process.stdout.write(i + ' ');
  }, 1000);
}

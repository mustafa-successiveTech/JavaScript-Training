/* 6. Write a program to display prime numbers from 1 to 50 */

function isPrime(num ) {
  if( num <= 1) {
      return false;
  }

  for(let i=2; i <= Math.sqrt(num); i++) {
      if(num%i === 0) {
          return false;
      }
  }
  return true;
}

function primeInRange() { 
  let ans = [];
  for(let i=1; i<=50; i++) {
      if(isPrime(i)){
          ans.push(i);
      }
  }
  console.log(ans);
}

primeInRange();
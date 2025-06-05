/* 
3. Write a program to display Diamond Pattern

        *
      *  *
    *  *  *
  *  *  *  *
*  *  *  *  *
  *  *  *  *
    *  *  *
     *  *
       *
*/

const r = 7;

for(let i=1; i<=2*r-1; i++){
  let pattern = "";
  
  for(let j=1; j<=Math.abs(r-i); j++){
      pattern += " ";
  }
  
  if(i <= r) {
      for(let k=1; k<=i; k++){
          pattern += "*" + " ";
      }
  }else {
      for(let k=1; k<=2*r-i; k++) {
          pattern += "*" + " ";
      }
  }  
  console.log(pattern);
}
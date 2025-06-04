/* 9. Write a program to print fibonaaci series */

function fibonaaci(n){
    if(n<=1){
        return n;    
    }
    return fibonaaci(n-1)+fibonaaci(n-2);
}

for(let i=0;i<10;i++){
    console.log(fibonaaci(i))
}

/* 2. Write a program to display following output as shown in figure

1
2 3
4 5 6
7 8 9 10

1
2 2
3 3 3
4 4 4 4

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 

*/

let cnt = 1;

for(let i=1;i<=4;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern+= cnt++ + " ";
    }
    console.log(pattern);
}


for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern+= i + " ";
    }
    console.log(pattern);
}

for(let i=1;i<=2*5+1;i++){
    if(i==5||i==6)continue;
    let pattern="";
    for(let j=1;j<=Math.abs(5-i+1);j++){
        pattern += j + " ";
    }
    console.log(pattern);
}


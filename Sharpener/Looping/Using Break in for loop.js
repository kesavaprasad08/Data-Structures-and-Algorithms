// Write a program to print all the numbers from 1 to n .If m is present in between the sequence then stop printing any other number and break out of the loop.
// Input :-
// n = 10 m = 4
// Output :-
// 1
// 2
// 3

let n=10;

let m=8;

for(let i=1;i<=n;i++){
    if(i==m)
    break;
    console.log(i)
}
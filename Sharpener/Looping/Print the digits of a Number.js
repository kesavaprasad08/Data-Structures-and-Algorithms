// Write a program to print the digits of a number .
// Input:-
// N - 153 .
// output:-
// 3
// 5
// 1

let n=153;
while(n>0){
    console.log(n%10)
    n=Math.floor(n/10);
}
// By using while loop and continue statement
// Print all number from 1 to n but then it should not be divisible by 5
// Example:-
// Input:-
// n=7
// output:-
// 1
// 2
// 3
// 4
// 6
// 7

let n=7;
let i=1;
while(i<=n){
    if(i%5==0){
    i++;
        continue;
    }
    console.log(i)
    i++;
}
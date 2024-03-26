// Write a program to print whether a given number is an Armstrong number or not..
// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number
// Example:-
// Input
// n=153
// Output
// true
// Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )
// Input
// 123
// Output
// false
// Logic - 123 is not an Armstrong number because 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 which is not equal to the original number )

let n=1634;
let temp =n;
let res=0;
let digits = n.toString().length;
while(n>0){
    res+= Math.pow(n%10,digits)
    n=Math.floor(n/10);
}
console.log(res===temp)
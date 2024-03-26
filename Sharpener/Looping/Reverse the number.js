// Write a program to return the reverse of a number
// Input
// n=123
// output
// 321

let n = 5321;
let res = 0;
while (n > 0) {
  res = res * 10 + (n % 10);
  n = Math.floor(n / 10);
}
console.log(res);

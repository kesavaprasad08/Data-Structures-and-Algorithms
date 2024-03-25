function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log("a = ", a);
  console.log("b = ", b);
}
let a = 5;
let b = 6;
swap(a, b);

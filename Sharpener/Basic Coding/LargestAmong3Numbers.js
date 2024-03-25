function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
  return a;
}

let a = 26;
let b = 26;
let c = 9;

console.log(findMax(a, b, c));

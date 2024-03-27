// Write a program to declare an array of size n and store the numbers 1,2,3,4 ...n in the array and return the array.

function storeInArray(n) {
  let arr = new Array(n);
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
  }

  return arr;
}

console.log(storeInArray(10));

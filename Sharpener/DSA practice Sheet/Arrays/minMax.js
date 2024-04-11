function minMax(arr) {
  let res = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(minMax([4, 6, 8, 7, 6, 3, 2, 4]));

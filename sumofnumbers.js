function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i++];
  }
  return sum;
}
function sumRecursion(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const foo = [];
  for (let i = 0; i < arr.length - 1; i++) {
    foo[i] = arr[i];
  }
  return sumRecursion(foo) + arr[arr.length - 1];
}
function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor([1, 2, 3, 4, 5]));
console.log(sumWhile([1, 2, 3, 4, 5]));
console.log(sumRecursion([1, 2, 3, 4, 5]));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));

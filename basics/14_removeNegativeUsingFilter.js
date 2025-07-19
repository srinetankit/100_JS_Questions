// 14. Use .filter() to remove all negative numbers from an array.
const arr = [1, -4, 8, 9, 28, -43, 23, -28, -27, 10, 38, -91, -54, 51, 50, -74,];
const newArr  = arr.filter((num) => num > 0 );
console.log(arr);

console.log(newArr);
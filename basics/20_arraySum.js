// // 20. Write a program to find the sum of all elements in an array.

// let sum = 0;
// const arrSum = arr.map((x) => sum += x);

// console.log(sum);


// 20. Write a program to find the sum of all elements in an array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i=0; i < arr.length; i++){
	sum += arr[i];
};

console.log(sum);
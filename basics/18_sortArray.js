// 18. Sort an array of numbers in ascending and descending order.

const arr = [5, 9, 4, 1, 7, 2, 5, 10, 3, 19, 13, 15, 23, 21, 25, 29, 32, 30];

for(let i=0; i < arr.length; i++){
	for(let j = i+1; j < arr.length; j++){
		if(arr[i] > arr[j]){
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);
// console.log(arr.reverse());


for(let i=0; i < arr.length; i++){
	for(let j = i+1; j < arr.length; j++){
		if(arr[i] < arr[j]){
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);
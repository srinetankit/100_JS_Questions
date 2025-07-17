// 10. Write a function that reverses a string.

function reverseString(str){
	let reverse = "";
	for(let i = str.length-1; i>=0; i--){
		reverse += str[i];
	}

	return reverse;
}

console.log(reverseString("hello world!"));
console.log(reverseString("lucknow"));


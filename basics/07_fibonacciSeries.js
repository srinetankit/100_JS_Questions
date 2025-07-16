//7. Write a program that prints the Fibonacci series up to a certain number.
let num = 10;
let count = 1;
let a = 0; 
let b = 1;
while(num >= count){
	console.log(a);
	let c = a + b;
	a = b; 
	b = c;
	count++;
}

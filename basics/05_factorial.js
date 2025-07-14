//  5. Write a program to calculate the factorial of a number.

// method 1

function factorial(num){
	let fact = 1;
	if(num === 0 || num === 1){
		fact = 1;
	}

	for(let i=1; i<= num; i++){
		fact *= i;
	}

	console.log(fact);
};


// // method 2
// function factorial(num){
// 	let fact = 1;
// 	if(num == 0 || num == 1){
// 		fact = 1;
// 	}

// 	for(let i=num; i >= 1; i--){
// 		fact *= i; 
// 	}	
// 	console.log(fact);
// };



factorial(0);
factorial(1);
factorial(5);
factorial(6);
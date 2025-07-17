// 11. Create a simple calculator that can add, subtract, multiply, and divide.

function calculator(a, operator, b){
	if(operator == '+'){
		return a + b;
	}else if(operator == '-'){
		return a-b; 
	}else if(operator == '*'){
		return a*b;
	}else if(operator == '/'){
        if(b == 0) return 'Division by zero is not possible';
		else return a/b;
	}else {
        return 'Invalid operator, Please provide any of them +, -, *, /';
    }

}

console.log(calculator(4, '+', 5));
console.log(calculator(1736, '/', 5));
console.log(calculator(1736, '/', 0));
console.log(calculator(1736, '%', 5));
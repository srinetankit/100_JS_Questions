// 9. Create a function that checks if a string is a palindrome.

function isPalindrome(str){
    let reverse = '';
    
    for(let i = str.length -1; i >= 0; i--){
        let currVal = str[i];
        reverse += currVal
    }

    if(str === reverse) console.log('Palindrome');
    else console.log("Not a Palindrome");
    
}

// function isPalindrome(str){
// 	let reverse = '';
// 	for(let i=str.length -1; i>=0; i--){
// 		reverse += str[i];
// 	}

// 	if(str === reverse) console.log('Palindrome');
// 	else console.log('Not a Palindrome');
// };

isPalindrome('hello');
isPalindrome('abcdcba');
isPalindrome('abcddcba');

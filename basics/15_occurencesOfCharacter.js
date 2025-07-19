// 15. Create a function that counts the occurrences of a character in a string.
function countOccurrence(str, character){
	let charCount = 0;
	for(let i=0; i < str.length; i++){
		if(str[i] == character){
			charCount++;
		}
	}
	console.log(`${character} occures ${charCount} times`);
}

countOccurrence("ahmedabadlucknowdelhigorakhpurayodhyadeoriao", "o");
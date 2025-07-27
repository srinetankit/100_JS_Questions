// 19. Create an object and use Object.keys() to list all the keys.

const obj = {
	firstName : "rahul",
	lastName : "singh",
	city : "deoria",
	state : "UP",
	pincode : 274001,
	age : 20,
	email : "rahul@example.com",
	"mob no." : 9876543221	
};

console.log(Object.keys(obj));
console.log(obj["mob no."]);

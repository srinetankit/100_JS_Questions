// 17. Write a function to check if an object is empty.

const obj = {
    name : "jatin",
    age : 20,
    job : "Manager"
};

const obj2 = {
    
};

function isObjEmpty(obj){
    if(Object.keys(obj).length === 0) console.log("Object is empty");
    else console.log("Object is not empty");
};

isObjEmpty(obj);
isObjEmpty(obj2);
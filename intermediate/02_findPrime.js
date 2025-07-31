// Create a program to find prime numbers up to a given limit.

// let len = 10;
let len = prompt('Enter lenght');
let primeArr = [];
let currIteration = 1

function primeNum(currVal){
    let isPrime = false;
    if(currVal <= 1){
        return false;
        
    }
    
    for(let i=2; i*i  <= currVal; i++){
        if(currVal % i == 0){
            return false;
        }
    }

    return true;
    
}


while(primeArr.length < len ){
    if (primeNum(currIteration)) {
        primeArr.push(currIteration);
    }
    currIteration++;
}



console.log(primeArr);









// const useImperativeHandle(
//   first,
//   () => {
//     second
//   },
//   [third],
// )
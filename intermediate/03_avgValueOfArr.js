const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(len);


function avgOfArr(arr){
    let len = arr.length
    let sum = 0;

    arr.forEach((ele) => {
        sum += ele;
    })

    // console.log(sum);
    
    return sum / len;
}

console.log(avgOfArr(arr))
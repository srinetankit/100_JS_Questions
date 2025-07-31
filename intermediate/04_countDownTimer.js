let start = 10;
let end = 0;

// while(start >= end){

//     setTimeout(function(){
//         console.log(start);
//         start--;
        
//     }, 1000)
// }

const interval = setInterval(function(){
    console.log(start);
    start--;
    if (start < 0) {
        clearInterval(interval)
    }
}, 1000)

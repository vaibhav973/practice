// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

// let count = 0;

// function counter(){
//     count++;
//     console.log('count: ',count);
// }

// function callback(){
//     setTimeout(()=>{
//         counter();
//     },1000)
// }

// for(var i = 0 ; i<1000 ; i++){
//     setTimeout(()=>{
//         callback();
//     },1000);
// }

let count = 0;

function counter(){
    count++;
    console.log("count: ",count);
    setTimeout(counter,1000);
}

counter();
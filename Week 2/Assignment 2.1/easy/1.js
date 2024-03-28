// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// function counter(){
//     let count = 0;
//     setTimeout(()=>{
//         count++;
//     },1000)
//     return count;
// }


// console.log(counter());


let count = 0;

function timer(){
    count = count + 1;
    console.log('count:', count);

}

setInterval(()=>{
    timer();
},1000);
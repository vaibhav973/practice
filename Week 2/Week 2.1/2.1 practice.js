//Q-1

// var a = 1;
// function b() {
//     a = 10;
//     console.log(a);
//     function a() {}
// }
// b();


// function createFunctions() {
//     var result = [];
//     for (var i = 0; i < 5; i++) {
//         result.push(function() { return i; });
//     }
//     return result;
// }

// var functions = createFunctions();
// console.log(functions[0]());


// Let's play with let var and const

// let a = 10;

// function x(){
//     let a = 20;
//     console.log(a);
// }
// x();
// console.log(a);

function myOwnFunction(callback,duration){
    setTimeout(callback,duration);
}

function promisedFunction(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;   
}


console.log(a);
let a=1;

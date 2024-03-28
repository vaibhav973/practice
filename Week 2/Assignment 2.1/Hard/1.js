/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("path");



function doBig(n){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(),n*1000)
    });
}

doBig(3).then(()=>{
    console.log("Promises Resolved");
})
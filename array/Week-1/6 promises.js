// callback function 

// const fs = require('fs');

// function vaibhavFile(cb){
//     fs.readFile('callback2.txt','utf-8',function(err,data){
//         cb(data);
//     });
// }
// function Calling(data){
//     console.log(data);
// }

// vaibhavFile(Calling);
// const fs = require('fs');
// function VaibhavReadFile(cb){
//     return new promise(function(resolve){
//         fs.readFile("callback2.txt",'utf-8',function(err,data){
//             resolve(data);
//         });
//     })
// }
// var d = new Promise();

// console.log(d);

// pending , resolved and rejected

// PROMISES --> Vaibhav Make it done

//  P should be capital in promise

// const vaibhav = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("promise resolved")
//     },1000);
// })
// function callback(){
//     console.log(vaibhav);
// }
// vaibhav.then(callback);
// new promise syntax using -> async and await

function letscallasync(){
    let ans = new Promise(function(resolve){
        setTimeout(() => {
            resolve("Hello World");
        }, 1000);   
    })
    return ans;
}
h
async function calling(){
    let val = await letscallasync()
    console.log(val);
}

calling();


// callback function 

const fs = require('fs');

function vaibhavFile(cb){
    fs.readFile('callback2.txt','utf-8',function(err,data){
        cb(data);
    });
}

function Calling(data){
    console.log(data);
}

vaibhavFile(Calling);
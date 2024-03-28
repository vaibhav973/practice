const fs = require('fs');

let data = "I have written the data in the file";

fs.writeFile('4.txt',data,(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("file written successfully!");
    }
})




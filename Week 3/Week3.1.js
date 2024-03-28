const express = require ('express');
const path = require ('path');
const app = express();
const bodyparser = require ('body-parser');

app.use(express.json());

function usingMiddleware(req,res,next){
    const userName = req.header.userName;
    const password = req.header.password;
    const userId = req.body.userId;

    if(userName !== 'vaibhav' && password !== 'googleguy'){
        res.status(500).send('user not found');
    }
    else{
        res.status(200).send("hey! working fine");
        next();
    }
}

function usingKidney(req,res,next){
    
    const id = req.body.id;
    if(id !==1 || id!==2 ){
        res.status(500).send("user have invalid id");
    }
    else{
        res.send("user is fine");
        next();
    }
}

// using next middleware building a api here 

app.get('/health-checkup',usingMiddleware,usingKidney,function(req,res){
    res.send("why worrying everything is working fine!");
})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})

//git config --global user.email "vaibhavwadhwa06@gmail.com"



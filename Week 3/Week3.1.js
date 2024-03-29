// const express = require ('express');
// const path = require ('path');
// const app = express();
// const bodyparser = require ('body-parser');
// const zod = require("zod");

// app.use(express.json()); 

// /*
//     app.use(express.json()) ---> is used here because input can be various fields

// */

// function usingMiddleware(req,res,next){
//     const userName = req.header.userName;
//     const password = req.header.password;
//     const userId = req.body.userId;

//     if(userName !== 'vaibhav' && password !== 'googleguy'){
//         res.status(500).send('user not found');
//     }
//     else{
//         res.status(200).send("hey! working fine");
//         next();
//     }
// }

// function usingKidney(req,res,next){
//     const id = req.body.id;
//     if(id !==1 || id!==2 ){
//         res.status(500).send("user have invalid id");
//     }
//     else{
//         res.send("user is fine");
//         next();
//     }
// }

// // using next middleware building a api here 

// app.post('/',(req,res)=>{

// })



// /*  
//     MIDDLEWARES
//     global catches --->>> we uses global catches to send the error message
//     we got some ugly messages in backend but we can use global catches to avoid that
// */

// //glocal catches
// app.use((err,req,res,next)=>{
//     res.json({
//         "msg": "There is something with our system"
//     })
// })




// app.listen(4000,()=>{
//     console.log("server is running on port 4000");
// })
// // remember I thing -> silence is the biggest reply and smiling in tough situation make you more powerfull 



// Part-2

const express = require('express');
const z = require('zod');
const path = require('path');
const app = express();

const schema = z.array(z.number());     

app.use(express.json());


/*
    --->>> ZOD 

*/


// using z as a number
// const age = z.number({
//     required_error: "Age is required",
//     invalid_type_error: "Age must be a number",
//   });

// post request 



app.post('/health-checkup',(req,res)=>{
    const kidney = req.body.kidney;
    const totalKidney = kidney.length;
    const response = schema.safeParse(kidney);
    res.send(response);
})

// global catches 
app.use((err,req,res,next)=>{
    res.json(
            {
                "msg":"something is wrong with our servers",
            }
        )
})


app.listen(4000,()=>{
    console.log("server is listening on port 4000");
})


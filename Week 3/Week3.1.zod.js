
const express = require('express');
const zod = require('zod');
const path = require('path');
const app = express();

app.use(express.json());

// zod for authentication

function authenticate(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}


app.listen(4000,()=>{
    console.log("server is listening on port 4000");
})


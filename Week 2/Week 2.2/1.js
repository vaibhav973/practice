const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello');
})

app.post('/api/dev',(req,res)=>{
    res.send('my first post request');
})

app.listen(port);
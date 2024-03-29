const express = require('express');
const app = express();
const z = require('zod');


// All about fucking zod
const schema = z.string();

schema.parse("vaibhav");
schema.parse(12);  // gives error because z can only parse string as above declared
schema.safeParse(12); // doesn't give error because of the safeparse


/*
    ZOD PRIMITIVE

    z.string();
    z.number();
    z.bigint();
    z.boolean();

*/

/*
    ZOD COERCION



*/
const schema2 = z.coerce.string();
schema2.safeParse(12);







app.listen(4000,()=>{
    console.log('fuck server!')
})
//JSON objects

// const users  =  '{ "name":"vaibhav","class":"X", "Roll No":"834904"}'

// const user  = JSON.parse(users);
// // parse will convert the users string to the Json object

// console.log(user["name"]);

//JSON parsing

const users = {
    "name":"vaibhav",
    "class":"X",
    "Roll NO":"839",
}

const user = JSON.stringify(users);

console.log(user);
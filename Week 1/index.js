const allUsers = [
    {
        firstName: "vaibhav",
        gender: "male",
    },
    {
        firstName: "raman",
        gender: "female",
        metaData: {
            age:21,
            address:"",
        }
    },
    {
        firstName:"sumya",
        gender:"female",
    }
]

for(var i=0; i<allUsers.length ; i++){
    if(allUsers[i]["metaData"]["age"]=="21"){
        console.log(allUsers[i]["firstName"]);
    }
}



// const personArray = ['vaibhav','shreya','sumit'];
// const genderArray = ['male','female','male'];

// for(let i=0; i<personArray.length;i++){
//     if(genderArray[i]=='male'){
//         console.log(personArray[i]);
//     }
// }


// const user1 = {
//     firstName: "vaibhav",
//     lastName: "Wadhwa",
//     gender: "male"
// }

// console.log(user1["firstName"]);

// console.log(user1["gender"]);


// ARRAY OF OBJECTS

// const allUsers = [
//     {
//         firstName:"vaibhav",
//         gender:"male",
//     },
//     {
//         firstName:"vinay",
//         gender:"female",
//     },
//     {
//         firstName:"sumit",
//         gender:"male",
//     }
// ]

// for(var i=0 ; i<allUsers.length;i++){
//     if(allUsers[i]["gender"]=="male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }


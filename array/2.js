const employeeInformation = [
    {
        name:"vaibhav",
        empCode:"TP393",
        salary:"1.2CR",
        hometown:"karnal",
    },
    {
        name:"vinay",
        empCode:"TP393",
        salary:"1.6CR",
        hometown:"rewari",
    },
    {
        name:"aman",
        empCode:"TP393",
        salary:"1.2CR",
        hometown:"bhiwani",
    },
]

employeeInformation.forEach((employee)=>{
 let sentence = `I am ${employee.name} and i belong to ${employee.hometown} `;
 console.log(sentence);
})


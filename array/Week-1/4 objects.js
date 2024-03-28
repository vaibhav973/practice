const obj = {
    name:"vinay",
    val:"122",
    homeTown:"karnal",
};

//O should be bigger if we have to assign or add the new object

const newObj = Object.assign({},obj,{
    class:"10"
});


console.log(newObj);
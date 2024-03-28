//setTimeout function 
function ourOwnSettimeoutfn(fn,duration){
    setTimeout(fn,duration);
}

ourOwnSettimeoutfn(function(){
    console.log("This is my first male");
    ourOwnSettimeoutfn(function(){
        console.log("This is my second callback");
    },2000);
},1000);


function mySettimeoutfunction(){
    setTimeout(()=>{
        console.log('log');
    },2000)
}

function allTime(){
    const date = new Date();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Second = date.getSeconds();
    console.log(`Hours:${Hours} , Minutes:${Minutes} , Seconds:${Second}`);
}

// function getTimefn(){
//     console.log(time);
// }

setInterval(allTime,1000);


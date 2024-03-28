// function square(a){
//     return a*a;
// }

// function cube(a){
//     return a*a*a;
// }

// function sumOfSquare(a,b){
//     let x = square(a);
//     let y = square(b);

//     return x+y;
// }

// function sumOfCubes(a,b){
//     let x = cube(a);
//     let y = cube(b);

//     return x+y;
// }

// console.log(sumOfCubes(2,3));
// console.log(sumOfSquare(2,3));

//callback function is to be used   

function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function sumofanything(x,y,fn){
    let val1 = fn(x);
    let val2 = fn(y);
    return val1 + val2;
}
console.log(sumofanything(2,3,square));
console.log(sumofanything(2,7,cube));
// function sum(num1,num2){
//     let result = num1+num2;
//     return result;
// }

// function displayResult(data){
//     console.log("Result of the sum is" + data);
// }

// function displayResultPassive(data){
//     console.log("sum of result is :" + data);
// }

// const ans = sum(1,2);
// console.log(ans);

// function sum(a,b){
//     const val = a+b;
//     console.log(val);
// }


// console.log(sum(3,4));


function findSum(n){
    let ans = 0;
    for(let i = 0 ; i<n ;i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100,1000)

console.log("hello world");
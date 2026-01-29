// Types of function

//1. regular function

function sample(){
    return "sample";
}
console.log(sample())

//2. arrow function
//It doesnt need return statement and it follows asynchronous operation.

const sample=(a,b)=> a+b;
console.log(sample(2,3))

const sample=(a,b)=>{
    return a+b;
}
console.log(sample(2,3))

//3. callback function
//if we pass a function as an argument to another function then it is called callback function.
//calback demo
function sample(callback){
    console.log("sample");
    callback();
}
function demo() {
    console.log("demo");
}
sample(demo);





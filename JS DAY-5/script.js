let sentence="I am a comma separated sentence";
let words=sentence.split(" ");
console.log(words);// ['I', 'am', 'a', 'comma', 'separated', 'sentence']

let words2=sentence.split("a");
console.log(words2);//['I ', 'm ', ' comm', ' sep', 'r', 'ted sentence']

//find out the occurence of r in the given text
let str="tu meri mai tera tu meri mais tera";
let r=str.split("r");
console.log(r);
let count=r.length-1;
console.log("Occurence of r in str:",count);

//1)Callback function
function sample(callback){
    console.log("sample")
    callback()
}

function demo(){
    console.log("demo")
}
sample(demo)  

//2)Arrow function
const demo2=()=>"demo2";
console.log(demo2())

//3)First class function
// 1. we can trat a variable as a function
// 2. we can pass a function as an argument inside another function
// 3. we can return a function from a function 

function test(){
    return function test2(){
        console.log("test2")
        return function test3(){
            console.log("test3")
        }
    }

}
let value=test()
let value2=value()
value2()
//easy method:
test()()()

//4)Higher order function
//Map,filter,reduce

//5)Anonoumous function- the function which doesn't have any name
//6) self invoking function-to obtain data privacy and to call a function imidiately after the function scope.
let (function(){

})
let fruits = ["apple", "banana"]
let newlength = fruits.push("orange", "mango");
console.log(fruits); // ["apple", "banana", "orange", "mango"]
console.log(newlength); // 4


let veggies = ["carrot", "potato", "spinach"];
let removedItem = veggies.pop();
console.log(veggies); // ["carrot", "potato"]

// //Q1. reverse the array using push and pop method
let arr = [1, 2, 3, 4, 5];
let reversedArr = [];
while (arr.length > 0) {
    let item = arr.pop();
    reversedArr.push(item);
}

// Q2. remove all negative nukmbers from an array.
let numbers = [12, -7, 5, -3, 9, -1, 0, 4];
let positiveNumbers = [];
while (numbers.length > 0) {
    let num = numbers.pop();
    if (num >= 0) {
        positiveNumbers.push(num);
    }
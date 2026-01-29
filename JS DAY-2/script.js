//map method
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//filter method
let marks = [45, 67, 89, 23, 78];
let passedMarks = marks.filter((mark) => mark >= 50);
console.log(passedMarks); // [67, 89, 78]

//Q1. Take an array with 10 different marks and print all the marks and message of pass and fail. e.g. 30 "pass", 12 "fail"
let studentMarks = [34, 67, 45, 89, 23, 78, 90, 12, 56, 43];
let result = studentMarks.filter((mark) => {
    if (mark >= 50) {
        console.log(mark, "pass");
    } else {
        console.log(mark, "fail");
    }
});

//Q2. Find out the sum of all the elements inside an array using for loop.
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum:", sum); // Sum: 15 

// same que using reduce method
let arr = [1, 2, 3, 4, 5];
let res = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(res); // 15

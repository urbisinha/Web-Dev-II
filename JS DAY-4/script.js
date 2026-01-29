
//Q2. Remove the negative integer and print the positive integers.
let arr = [1, 2, 3, 4, 5];
let res = [];
while (arr.length > 0) {
    let val = arr.shift();
    if (val>0) {
        res.push(val);
    }   
}
console.log(res);

//Q3. Check if array is palindrome or not.

let arr2 = [1, 2, 3, 2, 1];
let original = [];
let reverse = [];

for (let i = 0; i < arr2.length; i++) {
    original.push(arr2[i]);
}

for (let i = arr2.length - 1; i >= 0; i--) {
    reverse.push(arr2[i]);
}

let isPalindrome = true;
for (let i = 0; i < original.length; i++) {
    if (original[i] !== reverse[i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "The array is a palindrome." : "The array is not a palindrome.");


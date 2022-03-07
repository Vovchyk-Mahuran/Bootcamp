//////////// TASK 1  Print all even numbers from 0 – 10
for (let i = 0; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("");
/////////// TASK 2 Print a table containing multiplication tables
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++) {
        console.log(i * j);
    }
}
console.log("");
//////////TASK 3 Create a length converter function
const converter = (km) => km * 1.6;
console.log(converter(5));
console.log('');

//////// TASK 4 Calculate the sum of numbers within an array

function sumOfArray(arr) {
    sum = 0;
    arr.forEach((el) => {
        sum += el;
    })
    console.log(sum);
}

let positiveNumbers = [1, 5, 6, 13, 90];
let negativeNumbers = [-5, -8, -12, -67];
let anyNumbers = [0.5, 7, -13, 3.2, 0];

sumOfArray(positiveNumbers);
sumOfArray(negativeNumbers);
sumOfArray(anyNumbers);

//////// TASK 5 Create a function that reverses an array

function reverseArray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray[i] = arr[arr.length - 1 - i];
    }
    return newArray
}
console.log(reverseArray([2, 8, 'cool', true]));

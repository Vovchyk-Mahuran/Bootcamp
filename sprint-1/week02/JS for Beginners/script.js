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

/////// TASK 6 Sort an array from lowest to highest

function sortArray(arr) {
    for (let i = 0; i < arr.length -1; i++){
        for (let j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([2, 0, -5, 17, -1]));

/////// TASK 7  Create a function that filters out negative numbers

const negativeOut = (arr) => {
    let positiveArr = arr.filter(function (el) {
        return el >= 0;
    });
    return positiveArr;
}
console.log(negativeOut([-5, 2, -8, 0, 7, -8, -1]));

/////// TASK 8 Remove the spaces found in a string

const removeSpaces = (str) => {

    let newString = '';
    for (let i = 0; i < str.length; i++){
         if (str[i] !== " ") {
                newString+=str[i]
            }
    }
    return newString;
}
const testString = 'zzz cccc ij     ii l';
console.log(removeSpaces(testString));

/////// TASK 9 Return a Boolean if a number is divisible by 10

function isDivisibleBy10(num) {
    if (num % 10 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isDivisibleBy10(110));
console.log(isDivisibleBy10(213));

////////// TASK 10 Return the number of vowels in a string

function numberOFVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let count = 0;
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < str.length; j++){
            if (str[i] === vowels[j]) {
               count++;
            }
        }
    }
    return count;
}
console.log(numberOFVowels('hohoho Merry Christmas'));


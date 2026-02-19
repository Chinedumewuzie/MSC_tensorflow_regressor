console.log("Hello, world!, welcome to js Reuiew");
alert ("welcome to js review")
// Variable Declaration
const firstname = "Afam";
const lastName = "Okonkwo"
const val = 34;
let isMale = true;
const fullName = firstname + " " +lastName;
console.log("My full name is "+fullName); 


const arr = [
    "AfamO",
34,
true,
null
]
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log("Explicit type: "+typeof explicit);
console.log("Implicit type: "+typeof implicit);

// We can also compare two values using the comparison operator
const a = 42
const b = 22;
console.log(a ==b);
console.log(a <= b);
let test = (a === '42');
console.log(test); 

const A = 42;
const B = 23;

let testA= (0 <=42);
let testB = (b === '42')
console.log(testA && testB);
console.log(testA || test0);
console.log(testA);

let age = 42;
let canDrive = age >= 16 ? "Yes, you can drive" : "No, you cannot drive";
console.log(canDrive);


let minimumAge = 18;

let myAge = 42;

if (myAge < minimumAge) {
    console.log("You are not eligible to vote");
} else {
    console.log("You are eligible to vote");
}
// Switch Statement
let quartile = 25;

switch (quartile) {
    case 25:
        console.log("You are in the first quartile");
        break;

    case 50:
        console.log("You are in the second quartile");
        break;

    case 75:
        console.log("You are in the third quartile");
        break;

    default:
        console.log("You are in the fourth quartile");
        break;
}

function addTwoNumbers(a, b) {
    return a + b;
}

const addMyTwoNumbers = function(a, b) {
    return a + b;
}

console.log(addTwoNumbers(2, 3));

const sum = (a, b) => a + b;

const log = (output) => console.log(output);

let result = sum(2, 5); // gives 7

log("My sum function result is: " + result); 
// My sum function result is: 7

const courseTopic = "ES 6 Review";
const courseCode = "PAD ISM 210";

console.log(`Hi, welcome to ${courseTopic}, you enrolled for ${courseCode}`);


// Declare array of numbers
const nums = [1,2,3,4,5,6,7,8,9];

/*
 * Map helps transform each element in the array and return a new array,
 * while Filter helps filter elements in the array based on a condition and return a new array.
 */

// Map – Transform each element in the array and return a new array
const squared = nums.map((val) => val * 2);
console.log(`Squared === ${squared}`);

// Filter – Filter elements in the array based on a condition and return a new array
// I want to filter out the even numbers from the nums array
const evenNums = nums.filter((val) => val % 2 == 0);
console.log("Even nums::: " + evenNums);



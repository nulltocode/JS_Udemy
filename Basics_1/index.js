//--> alert("Hello World!");  //-- Alert window function
let myFirstName = 'Harsh';
console.log(typeof myFirstName); //-- Here typeof operator is used to check data type of myFirstName;

let car;
console.log(typeof car); //-- Undefined data type

console.log(typeof null); //-- This is an bug

//--> Concatenate two strings
let fName = 'Harsh';
let lName = 'Mehra';
console.log('Harsh' + ' ' + 'Mehra');

//--> Template Litreals
const firstName = 'Harsh';
const lastName = 'Mehra';
const birthYear = 1992;

const aboutMe = `I'am ${firstName} ${lastName} and I was born in ${birthYear}`;
console.log(aboutMe);

//--> Type Conversion

const inputYear = '1992';
// console.log(inputYear);
console.log(typeof inputYear);
console.log(Number(inputYear), inputYear); //- The first one is number and the second one is string
console.log(inputYear + 10);
// console.log(typeof Number(inputYear));

let n = '1' + 1;
n = n - 1;
console.log(n);

'use strict';
let driverLicense = false;
let passTest = true;

if (passTest) driverLicense = true;
if (driverLicense) console.log('I can drive');

//--> FUNCTIONS

//--> Non-Parameter function
function logger() {
  console.log('I am Harsh Mehra');
}
logger(); //-- Invoking the function

//--> Parameter function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apple and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);

//--> Function declaration
function age(birthYear) {
  return 2023 - birthYear;
}
const calAge_1 = age(1992);

//--> Anonymous Function / Function Expression
let age_1 = function (currentYear, birthYear) {
  return currentYear - birthYear;
};
const calAge_2 = age_1(2023, 1992);

console.log(calAge_1, calAge_2);

//--> ARROW FUNCTION
const age_3 = (currentYear, birthYear) => currentYear - birthYear;
console.log(age_3(2024, 1994));

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  // return retirement;
  return `${firstName} will retires in ${retirement} years.`;
};
console.log(yearUntilRetirement(1992, 'Harsh'));

'use strict';

//--> ARRAYS

//-- First Method
const friends = ['Harsh', 'Mukul', 'Jungle', 'Manna'];
console.log(friends);

//-- Second Method
const years = new Array(1992, 1994, 1998, 2000);
console.log(years);

console.log(years.length); //--> Used to find the size of an array

//--> In JS we can put Array into Array
const month = new Array('Jan', 'Feb', 'March', 'April', years);
console.log(month);

/* Exercise --> Calculate age using years Array */
const calcAge = Birthyear => 2023 - Birthyear; //--> Function
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1, age2, age3, age4);

//-- Creating new Array
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];
console.log(ages);

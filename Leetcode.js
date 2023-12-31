// calcAge(2004);

// function calcAge(birthYear) {
//   console.log(2023 - birthYear);
// }

// console.log(firstName);

// var firstName = "Ritesh";

// console.log(lastName);
// let lastName = "Narwade";

// 12:54 PM 28-12-23
//function Declaration
// const age1 = calcAge(2004);
// newFunction();

// function newFunction() {
//   console.log(age1);
// }

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }
// //function Expression
// const age2 = calcAge2(2004);

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// output is referrence error can't access before initializaion / HOISING

//35 Arrow function

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(2004);
// console.log(age3);

// const yearsUntilRetirnment = (birthYear, name) => {
//   const age = 2023 - birthYear;
//   const retirementYears = 60 - age;
//   return `${name} you have ${retirementYears} years until retirement`;
// };

// console.log(yearsUntilRetirnment(2004, "Ritesh"));
// console.log(yearsUntilRetirnment(1999, "Mangesh"));

// const names = [];

// function nameDefine(firstName, middleName, lastName) {
//   const fullName = {
//     firstName,
//     middleName,
//     lastName,
//   };
//   names.push(fullName);
//   console.log(fullName);
//   console.log(names);
// }

// nameDefine("Ritesh", undefined, "Narwade");

// function name() {}

// const name2 = () => {
//   const a = 10;
// };

// console.log(a);

// const a = 10;
// const b = 20;

// if (a > b) {
//   console.log(`${a} is greater than b`);
// } else {
//   console.log(`${b} is greater than a`);
// }

// const numbers = Array(10).fill(1);
// console.log(numbers);
// numbers.forEach((num) => {});

// const numbers = Array.from({ length: 10 }, (cur, i) => i + 1);
// console.log(numbers);

// const greaterThan5 = numbers.filter((cur, i) => cur > 5);
// console.log(greaterThan5);

// const sumOfNums = numbers.reduce((accu, cur, i) => accu + cur, 0);
// console.log(sumOfNums);

// (function () {
//   console.log(`it's a IIFE `);
// })();
// "use strict";
// x = 10;
// console.log(typeof x);

// function x() {
//   var a = 10;
// }

// console.log(a);

// function a(lastName) {
//   let name = "ritesh";
//   return function () {
//     return `${name} ${lastName}`;
//   };
// }

// const fname = a("narwade");

// console.log(fname());

// const numbers = Array.from({ length: 10 }, (cur, i) => i + 1);
// console.log(numbers);

// for (let num of numbers) {
//   console.log(num + 1);
// }

// add(2, 3);
// const add = (val1, val2) => {
//   const total = val1 + val2;
//   return total;
// };
// alert("It's working");

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

console.log(reverseString("ritesh"));

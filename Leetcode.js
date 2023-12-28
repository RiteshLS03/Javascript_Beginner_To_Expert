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

const z = Array.from({ length: 100 }, (cur, i) => 1 + i);
console.log(z);

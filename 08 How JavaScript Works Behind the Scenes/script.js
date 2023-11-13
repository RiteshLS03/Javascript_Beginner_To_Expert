"use strict";
// const y = 1;

// function first() {
//   const a = 1;
//   const b = second(1, 2);
//   const x = a + b;
//   return x;
// }

// function second(a, b) {
//   const c = a + b;
//   return c;
// }

// const x = 1;

// console.log(x, first(), second());

/** 92 Scope And Scope Chain  */

// function calcAge(birthYear) {
//   const now = 2023;
//   const age = now - birthYear;
//   return age;
// }

// console.log(now);

/** 93 Scoping in Practice */

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You Are ${age} born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1995 && birthYear <= 2005) {
//       //creating a variable with same name as outer scope's variable
//       const str = `You are a GenZ , ${firstName} `;
//       console.log(str);
//     }
//     console.log(str);
//   }

//   const str = `New str updated`;
//   console.log(str);

//   printAge();
//   return age;
// }

// // console.log(str);

// const firstName = "Ritesh";
// calcAge(2004);

// var is function scoped function(){var}
// let & const is block scoped {let & const}

/** Practice */

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function nameLog() {
//     console.log(age);
//     console.log(typeof birthYear);
//   }
//   nameLog();
// }

// calcAge();

/** 94 Variable Environment_ Hoisting and The TDZ */

// // function declaration
// console.log(calcAge(2004));

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }

// // var variable
// console.log(firstName);

// var firstName = "Ritesh";

// // let & const variables
// console.log(lastName);
// var lastName = "Narwade";

/** 95 Hoisting and TDZ in Practice */

/** variables */
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Ritesh";
// let job = "Front End Developer";
// const year = 2004;

/** Functions */

console.log(addDecl(1, 2));
console.log(addExpre(1, 2));
console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpre = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

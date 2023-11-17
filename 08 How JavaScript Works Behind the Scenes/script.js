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

// console.log(addDecl(1, 2));
// console.log(addExpre(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpre = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

// if (!numProducts) deleteShoppingCart();
// console.log(numProducts);

// let numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// Example  2

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(y === window.z);

/** 97 The this Keyword in Practice */

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(2004); // It will show the undefined it's because a call in regular function is undefined , and it's because of strict mode

// this keyword on  Arrow function

// const calcAgeArrow = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1999); // In case of arrow function now the this keyword is pointing to it's parent object because the this keyword don't own it's this keyword instead the arrow function uses lexical this keyword

// this keyword inside a object method

// const Ritesh = {
//   birthYear: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);
//   },
// };

// Ritesh.calcAge(); // when we have a method call the this keyword inside method that will call to an object in which the this method is present

// const Mangesh = {
//   birthYear: 1999,
// };

// Mangesh.calcAge = Ritesh.calcAge; // This is called as Method Borrowing . from one obj to other obj

// Mangesh.calcAge(); // the this keyword is always points to object that is calling to method

// const f = Ritesh.calcAge;

// console.log(f());

//
// let x = 10;
// x = true;
// x = "John";
// console.log(typeof x); // string

// const closeModal = () => {
//   modal.classlist.add("hidden");
//   overlay.classlist.add("hidden");
// };

// overlay.addEventListner(click, closeModal);

// const logHello = () => {
//   const HW = "Hello World";
//   return HW;
// };

// console.log(logHello);

// const Ritesh = {
//   firstName: "Ritesh",
//   year: 2004,

//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// Ritesh.calcAge();
// Ritesh.greet();

// age(2004);

// function age(birthYear) {
//   console.log(2023 - birthYear);
// }

// console.log(year);

// const year = 2004;

// console.log(firstName);

// let firstName = "Ritesh";
// console.log(lastName);

// var lastName = "Narwade";

// calcAge(2004);

// function calcAge(birthYear) {
//   console.log(2023 - birthYear);
// }

// firstName();

// const firstName = () => console.log("Ritesh");

// console.log(lastName);
// var lastName = "Narwade";

/** 98 Regular Functions vs. Arrow Functions */

// const Ritesh = {
//   firstName: "Ritesh",
//   lastName: "Narwade",
//   birthYear: 2004,
//   calcAge: function () {
//     // console.log(this);
//     // console.log(2023 - this.birthYear);
//     // const self = this;
//     // const isGenZ = function () {
//     //   console.log(self);
//     //   console.log(self.birthYear >= 1997 && 2015 >= self.birthYear);
//     //   //   console.log(this.birthYear >= 1997 && 2015 >= this.birthYear);
//     // };
//     // isGenZ();

//     const isGenZ = () => {
//       console.log(this);
//       console.log(this.birthYear >= 1997 && 2015 >= this.birthYear);
//       //   console.log(this.birthYear >= 1997 && 2015 >= this.birthYear);
//     };
//     isGenZ();
//   },
// };

// Ritesh.calcAge();

// // arguemennts keyword

// //Regular function
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5, 8, 10);

// //Arrow function

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8, 10);

/** 99 Primitives vs. Objects (Primitive vs. Reference Types) */

// let age = 19;
// let oldAge = age;
// age = 21;
// console.log(age); // 21
// console.log(oldAge); // 19

// const me = {
//   firstName: "Ritesh",
//   age: 19,
// };

// const friend = me;
// friend.age = 24;

// console.log("Friend", friend);
// console.log("Me", me);

// let lastName = "Williams";
// let oldLasName = lastName;

// lastName = "Davis";
// console.log(lastName, oldLasName);

// const jessica = {
//   firstName: "Jessica",
//   lastName: "William",
//   age: 27,
// };

// const marriedJessica = jessica;

// marriedJessica.lastName = "Davis";
// console.log("Before Marriage", jessica);
// console.log("After Marriage", marriedJessica);

// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const jessica2AfterMarrige = Object.assign({}, jessica2);
// jessica2AfterMarrige.lastName = "Davis";

// console.log("Before Marriage", jessica2);
// console.log("After Marriage", jessica2AfterMarrige);

// it will only work on first level it will not copy entire object. in case of object inside object it work as same  as before. It will refer to parent's address in callstack

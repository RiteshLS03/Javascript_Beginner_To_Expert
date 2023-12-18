"use strict";

// 126. Default Parameters

// const bookings = [];
// const createBooking = function (flightName, numPassengers, price) {
//   numPassengers = numPassengers || 1
//   price = price || 199
//   const booking = {
//     flightName,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123"); // except bookings[0] rest of them are undefined

// Let's try to set default values on them if we have to set them manually

//Before ES6 way

// const bookings = [];
// const createBooking = function (flightName, numPassengers, price) {
//   numPassengers = numPassengers || 1; // //Before ES6 way
//   price = price || 199; // //Before ES6 way
//   const booking = {
//     flightName,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// After ES6

// const bookings = [];
// const createBooking = function (
//   flightName,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightName,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH234", 5);
// createBooking("LH234", undefined, 1000);

// 127 How Passing Arguements Works Value VS Refference

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = `Mr` + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert("Checked In");
//   } else {
//     alert("Wrong Passport!");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// 128 First-Class And Higher-Order Functions

// First class functions allows us to write Higher Order Function. It's just an concept that we can't use in practice

// For example :-

//1 store functions in variable's as properties
// const add = (a, b) => a + b;
// const counter = {
//   value: 23,
//   inc: function () {
//     this.value++;
//   },
// };
// console.log(counter.value);
// counter.inc();
// console.log(counter.value);
// counter.inc();
// console.log(counter.value);
// counter.inc();
// console.log(counter.value);
// counter.inc();
// console.log(counter.value);

//2 function's as arguements to OTHER functions
// const greet = () => console.log(`Hey Jonas`);
// btnClose.addEventListner("click", greet);

//3 Return function's as FROM a function
//counter.inc.bind(SomeOtherObjects);
// //Original Function

// HIGHER-ORDER FUNCTION
// A function that receives in function as an arguement or A function that return's a new funtion is called as Higher Order Function (HOF)
// It is possible because of first class function
// We can use HOF in practice

//HOF 1

// const greet = () => console.log(`Hey Jonas`);
// btnClose.addEventListner("click", greet);
// //       ---------------          -----
// //              |                   |
// //       It's a HOFun          Callback Fun

//HOF 2

// function count() {  // |-- It's an HOF
//   let counter = 0;
//   return function () { // _____ Returned function
//     counter++;         //
//   };
// }

//129 Fucntion's Accepting Callback Function's
//Before starting by an example let's understand some method's

//1) string replace() method //replace's a string with a sub-string
// syntax //let str = str.replace(subStr, newSubstr)
//For ex
// let str = "JS will , JS will rock you!";
// let newStr = str.replace(/JS/g, "Javascript");
// console.log(newStr);

//2) split() method // used to split an string to an array of substrings
//For ex

// let str = "Javascript string split()";
// let subStrings = str.split(" ");
// console.log(subStrings);

//3) join() method // used to accepts a optional arguement separator is when is string that separates each pair adjacent elements of the array in the result string
//For ex

// const cssClasses = ["btn", "btn-primary", "btn-active"];
// const btnClass = cssClasses.join(" ");
// console.log(btnClass);

// HIGHER-ORDER FUNCTION
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // HIGHER ORDER FUNCTION
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);

// //CALL BACK Function // A function which not called us which called by javascript itself is known as Callback function
// //In above example the upperWord and oneWord are call back function's

// const high5 = function () {
//   console.log("👋");
// };

// document.body.addEventListener("click", high5);
// // so now whenver we click on the screen it will log the high5 function and it's a callback function

// //130 Functions Returning Functions
// //HOF 2

// //For ex

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");
// //NEW WAY OF DOING IT
// greet("HELLO")("RITESH");

// // // 130 CHALLENGE
// // const greet = (greeting) => (name) => {
// //   console.log(`${greeting} ${name}`);
// // };

// // greet("Hi")("Ritesh");

// // 131 The Call and Apply Methods

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   //book:function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.bookings} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book("239", "Jonas Schedtamann");
// lufthansa.book(635, "John Smith");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// //Does not work
// // book(23, "Sarah Williams");
// //Output ERROR

// // Call Method

// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 585, "Mary Cooper");

// // Apply Method
// // The only diff between call and apply is apply doesn't recieve a list of arguements after "this" keyword
// //1st Way
// const flightdata = [588, "George Cooperrr"];

// book.apply(swiss, flightdata);
// console.log(swiss);

// //2nd Way

// book.call(swiss, ...flightdata);

// // 132 The Bind Method
// // It binds the this keyword's object with the function
// //For ex

// const bookEw = book.bind(eurowings);
// bookEw(23, "Steven Williams");

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Jonas Schedtmann");
// bookEW("Martha Cooper");

// // 132 CHALLENGE
// // const addTax = (value) => console.log(value + value * 0.23);
// // addTax(100);

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT = addTax(0.23);

// console.log(addVAT(100));
// console.log(addVAT(200));

// const addTax3 = (rate) => (value) => {
//   value + value * rate;
// };

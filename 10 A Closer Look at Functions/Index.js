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

// 131 The Call and Apply Methods

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

// // With event handlers

// // Object's together event listner's
// // For ex

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log();
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane("Pass success");

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// 132 CODING CHALLENGE

/**
 * 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
 */

const poll = {
  question: "What is your favourite programming language ?",
  options: ["0: Javascript", "1, Python", "2: Rust", "3: C++"],
  //this generates [0, 0, 0, 0] more in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );
    console.log(answer);
    //Answer array update
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;
    console.log(this.answers);
    // if (typeof answer === "number" < this.options.length) {
    //   this.answers[answer]++;
    // }
    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

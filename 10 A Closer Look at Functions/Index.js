"use strict";
// CHALLENGE
const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

greet("Hi")("Ritesh");

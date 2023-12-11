"use strict";

// const arr = [1, 2, 4, 8, 16];

// const [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e);

const reastaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deliciouse pasta with ${ing1},  ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// // 103 Destructring Arrays
// let [main, secondary] = reastaurant.categories;
// console.log(main, secondary);
// //By a technique

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// // switching values using destructuring

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const [starter, mainCourse] = reastaurant.order(0, 1);
// console.log(starter, mainCourse);

// // Nested destructuring

// const nested = [2, 4, [5, 6]];

// const [i, , [k, l]] = nested;

// console.log(i, k, l);

// // Default Values

// const [p = 1, q = 1, r = 1] = [8]; // <--- Suppose this is an API data
// console.log(p, q, r);

// 104 Destructuring Objects

//
// const { name, categories, openingHours } = reastaurant;
// console.log(name, categories, openingHours);

// Creating var and using obj property as want
// const {
//   name: reastaurantName,
//   openingHours: hours,
//   categories: tags,
// } = reastaurant;

// console.log(reastaurantName, hours, tags);

// Mutating Variables
// let x = 111;
// let y = 999;
// const obj = { x: 23, y: 7, z: 14 };
// ({ x, y } = obj);

// console.log(x, y);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = reastaurant.openingHours;

// console.log(o, c);

// // On the way objects

// reastaurant.orderDelivery({
//   time: "14:50",
//   address: "Sakharkherda",
//   mainIndex: 2,
//   starterIndex: 1,
// });

// 105 The Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// //Copy whole array

// const mainMenuCopy = [...reastaurant.mainMenu];
// console.log(mainMenuCopy);

// // join 2 arrays

// const menu = [...reastaurant.mainMenu, ...reastaurant.starterMenu];
// console.log(menu);

// // Iterabals : array, string, maps sets. NOT objects

// const str = "Jonas";
// const letters = [...str, "", "S."];
// console.log(letters);
// console.log(...str);

// // function for orderpasta

// const ingredieants = [
//   prompt("Let's make a pasta ! Ingredient 1 ?"),
//   prompt("Let's make a pasta ! Ingredient 2 ?"),
//   prompt("Let's make a pasta ! Ingredient 3 ?"),
// ];

// console.log(ingredieants);

// reastaurant.orderPasta(ingredieants[0], ingredieants[1], ingredieants[2]);
// reastaurant.orderPasta(...ingredieants);

// //Objects

// const newRestaurant = { ...reastaurant, foundingYear: 2004, founder: "Ritesh" };
// const reastaurantCopy = { ...reastaurant };
// reastaurantCopy.name = "Dhaba";

// console.log(reastaurantCopy.name);
// console.log(reastaurant.name);

// console.log(newRestaurant);

/** 106 Rest Pattern and Parameteres */

// Spread Operator on the RIGHT Hand Side of the =

// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [25, 50, 75, 150];
// add(...x);

// reastaurant.orderPizza("Cheeze", "Kanda", "Lassoon", "Adrak");

// 107 Short Circuiting (&& AND ||)

// console.log("--- || OR Operator---");
// // OR operator returns the first value which is true without looking at the second or other next elements

// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// const guest1 = reastaurant.numGuests ? reastaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = reastaurant.numGuests || 19;
// console.log(guest2);

// console.log("--- && AND Operator ---");
// // AND operator returns the first value which is false without looking at the second or other next elements

// console.log(0 && "Jonas");
// console.log(7 && "Jonas");

// console.log("Hello" && 23 && null && "Jonas");

// if (reastaurant.orderPizza) {
//   reastaurant.orderPizza("Mushrooms", "Spinach");
// }

// reastaurant.orderPizza && reastaurant.orderPizza("Mushroom", "Spinach");

// CODING CHALLENGE

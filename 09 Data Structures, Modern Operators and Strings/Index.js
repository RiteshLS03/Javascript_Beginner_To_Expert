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
let x = 111;
let y = 999;
const obj = { x: 23, y: 7, z: 14 };
({ x, y } = obj);

console.log(x, y);

// Nested Objects
const {
  fri: { open: o, close: c },
} = reastaurant.openingHours;

console.log(o, c);

// On the way objects

reastaurant.orderDelivery({
  time: "14:50",
  address: "Sakharkherda",
  mainIndex: 2,
  starterIndex: 1,
});

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

// 109 CODING CHALLENGE

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// let [players1, players2] = game.players;
// console.log(players1, players2);
// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4
// const players1Final = [...players1, "Thiago", "Coutiinho", "Perisic"];
// console.log(players1);
// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //6
// const printGoals = (...players) => {
//   console.log(`${players.length} Goals were scored`);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller", "Lewandowski");
// printGoals("Davies", "Muller");

// //7

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

// 110 Looping Arrays_ The for-of Loop

// const menu = [...reastaurant.starterMenu, ...reastaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log(menu.entries());

// 111

// 113 Looping Objects_ Object Keys, Values, and Entries

// const properties = Object.keys(reastaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days :`;

// for (const day of properties) {
//   openStr = `${openStr} ${day}`;
// }

// console.log(openStr);

// 114 CODING CHALLENGE

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const scored = Object.entries(game.scored);
// console.log(scored);

// const scored2 = game.scored.entries();
// console.log(scored2);

// console.log(game.scored.entries());
// //1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`GOAL ${i + 1}: ${player}`);
// }
// //2
// let avgOdds = 0;
// for (const odd of Object.values(game.odds)) {
//   avgOdds += odd;
// }
// console.log(avgOdds / Object.values(game.odds).length);
// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : game[team];
//   console.log(`odd of ${teamStr} : ${odd}`);
// }

// 115 Sets

const ordersSet = new Set([
  "Pizza",
  "Pasta",
  "Risotto",
  "Pizza",
  "Risotto",
  "Pizza",
]);

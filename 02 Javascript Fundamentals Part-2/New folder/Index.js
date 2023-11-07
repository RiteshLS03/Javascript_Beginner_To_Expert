"use strict";
/** 32 Lecture Of Strict Mode */

// 'use strict';
// let hasDriversLicence = false;
// const passTest = true;
// if(passTest) hasDriverLicence=true;
// if(hasDriversLicence) console.log('I can drive');

/** 33 Functions */

// function logger() {
//   console.log("Hello my name is Ritesh");
// }

// logger();
// logger();

// function fruitProcessor(numOfApples, numOfOranges) {
//   console.log(numOfApples, numOfOranges);
//   const juice = `The apples are ${numOfApples} and oranges are ${numOfOranges}`;
//   return juice;
// }

// const numb = fruitProcessor(5,0);
// console.log(numb);

/** 34 Function Declaration vs. Expressions */

// //Function Declaration
// const age1 = calcAge1(2004);
// console.log(age1);

// function calcAge1(birthyear){
//     return 2023-birthyear;
// }

// //Expression

// const age2 = calcAge2(2004)
// console.log(age2);

// const calcAge2 = function (birthyear) {
//     return 2023-birthyear;
// }

/** 35 Arrow Functions */

// const calcAge3 = birthYear => 2023-birthYear
// const age3 = calcAge3(2007);
// console.log(age3);

// const yearsUntilRetirement = (birthYear,name) => {
//     const age = 2023-birthYear;
//     const years = 60-age;
//     return`${name} you have ${years} years to retirement`
// }

// console.log(yearsUntilRetirement(2004,"Ritesh"));
// console.log(yearsUntilRetirement(1999,"Mangesh"));

/** 36 Functions Calling Other Functions */

// function cutFruitPiece(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(numOfApples, numOfOranges) {
//   const applePiece = cutFruitPiece(numOfApples);
//   const orangePiece = cutFruitPiece(numOfOranges);

//   const juice = `The apples are ${numOfApples} and it's pieces are ${applePiece} and oranges are ${numOfOranges} and it's pieces are ${orangePiece}`;
//   return juice;
// }

// console.log(fruitProcessor(4,2));
// console.log(fruitProcessor(3,4));

/** 37 Reviewing Functions */
// function a(){
//     return false;
//     console.log("hello");
// }

// a()

/** 38 Coding Challenge */ //COMPLETED

// const calcAvarage = (num1, num2, num3) => (num1,num2,num3)/3;

// function checkWinner(avgDolphins,avgKoalas) {
//   console.log(avgDolphins,avgKoalas);
//  if(avgKoalas >= (avgDolphins*2)){
//     console.log`Koalas Win 🏆("${avgKoalas}Vs${avgDolphins})`;
//   }
//   else if(avgDolphins >= (avgKoalas*2) ){
//     console.log(`Dolphis Win 🏆(${avgDolphins} vs ${avgKoalas})`)
//   }
//   else {console.log("No one Wins");}
// }

// const avgKoalas = Math.round(calcAvarage(2,4,6))
// const avgDolphins = Math.round(calcAvarage(4,8,13))
// checkWinner(avgDolphins,avgKoalas)

// console.log(calcAvarage(4, 5, 6));
// console.log(calcAvarage(8, 9, 100));

/** 39 Introduction to Arrays */

// const friends = ['Micheal', 'Steven', 'Peter'];

// console.log(friends);
// console.log(friends[0],friends[1])
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// const years = new Array(1997,1999,2004);

// Exercise

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const years = new Array(1975,1978,1997,1999,2004);

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age4 = calcAge(years[3])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1,age2,age4,age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[3]),calcAge(years[years.length - 1])]
// console.log(ages);

/** 40 Basic Array Operations (Mathods) */

// const friends = ["Micheal", "Steven", "Peter"];

// //To add element to end of the array
// friends.push("Jay")
// console.log(friends);

// //and it will return an length of that array
// const len = friends.push("Chris")
// console.log(len);
// console.log(friends);

// // To add element to start of array

// friends.unshift("John")
// console.log(friends);

// // To delete/remove last element of array and also return removed element

// const rmEle = friends.pop()
// console.log(friends);
// console.log(rmEle);

// // To delete/remove first element of array

// friends.shift()
// console.log(friends);

// // To know the index of element and is available in array or not

// console.log(friends.indexOf("Micheal"));

// //and if element is not in array it will log/return -1

// console.log(friends.indexOf("Bob"));

// // There is moderm method to know in ES6 which return a boolean value

// console.log(friends.includes("Bob"));

/** 41 Coding Challenge */

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill*0.20;
// }

// const bills = [125,555,44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

// console.log(bills,tips);

// //Bonus

// const total = [bills[0]+tips[0]+bills[1]+tips[1]+bills[2]+tips[2]]
// console.log(total);

/** 42 Introduction to Objects */

// const riteshArray = [
//     "Ritesh",
//     "Narwade",
//     2023-2004,
//     "Front-End Developer",
//     ["No-One"]
// ];

// const RiteshOBJ = {
//     firstName:"Ritesh",
//     lastName:"Narwade",
//     age:2023-2004,
//     job:"Front-End Developer",
//     friends:["No-One"]
// }

// const intrestedIn = prompt("What do you want to know about Ritesh ? choose between firstName, lastname , age, job, friends")
// console.log(RiteshOBJ[intrestedIn]);

// console.log(RiteshOBJ.firstName + " has " + RiteshOBJ.friends.length + " friends " + "and his best friend is " + RiteshOBJ.friends[0]);

/** 44 Object Methods */

// const RiteshOBJ = {
//   firstName: "Ritesh",
//   lastName: "Narwade",
//   birthyear:2004,
//   job: "Front-End Developer",
//   friends: ["No-One"],
//   calcAge:function(){
//     return 2023-this.birthyear;
//   }
// };

// console.log(RiteshOBJ.calcAge());

// we also can do somethinkg like this for return it directly

// const RiteshOBJ = {
//   firstName: "Ritesh",
//   lastName: "Narwade",
//   birthyear: 2004,
//   job: "Front-End Developer",
//   friends: ["No-One"],
//   hasDriversLicence : false,
//   calcAge: function () {
//     this.age = 2023 - this.birthyear;
//     return this.age;
//   },
//   getSummary:function(){
//     return `${this.firstName} is ${this.calcAge()} years old, and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence`;
//   }
// };

// // console.log(RiteshOBJ.calcAge());
// // console.log(RiteshOBJ.age);
// console.log(RiteshOBJ.getSummary());

/** 45 Coding Challenge */

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: "78",
//   massUnit: "Kg",
//   height: "1.69",
//   heightUnit: "M",
//   calcBMI:function(){
//     this.bmi = this.mass / (this.height * this.height)
//     return this.bmi;
//   }
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: "55",
//   massUnit: "Kg",
//   height: "1.45",
//   heightUnit: "M",
//   calcBMI:function (){
//     this.bmi = this.mass / (this.height * this.height)
//     return this.bmi;
//   }
// };

// if(mark.calcBMI() > john.calcBMI()){
//     console.log(`Marks's BMI ${Math.round(mark.calcBMI())} is higher than John's ${Math.round(john.calcBMI())} `);
// }

// else if (john.calcBMI() > mark.calcBMI()){
//     console.log(`John's BMI ${Math.round(john.calcBMI())} is higher than Mark's ${Math.round(mark.calcBMI())} `);

// }

/** 46 Iteration The for Loop */

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// };

/** 47 Looping Arrays, Breaking and Continuing */

// let riteshArray = [
//   "Ritesh",
//   "Narwade",
//   2023 - 2004,
//   "Front-End Developer",
//   ["No-One", "No-Two"],
// ];

// for (let i = 0; i < riteshArray.length; i++) {
//   console.log(riteshArray[i], typeof riteshArray[i]);
// }

// const types = [];
// const typess = [];
// for (var i = 0; i < riteshArray.length; i++) {
//   typess[i] = typeof riteshArray[i];
//   types.push(typeof i);
// }

// console.log(typess);
// console.log(types);

// let years = [1975, 1978, 1997, 1999, 2004];
// const age = [];
// for (let i = 0; i < years.length; ++i) {
//   age.push(2023 - years[i]);
// }

// console.log(age);

// console.log("---ONLY STRINGS ---");

// for (let i = 0; riteshArray.length > i ; i++) {
//   if (typeof riteshArray[i] !== "string") continue;
//   console.log(riteshArray[i] , typeof riteshArray[i]);
// }

// console.log("--- BREAK ---");

// for (let i = 0; riteshArray.length > i ; i++) {
//   if (typeof riteshArray[i] === "number") break;
//   console.log(riteshArray[i] , typeof riteshArray[i]);
// }

/** 48 Looping Backwards and loops  */

// let riteshArray = [
//   "Ritesh",
//   "Narwade",
//   2023 - 2004,
//   "Front-End Developer",
//   ["No-One", "No-Two"],
// ];

// for (let i = riteshArray.length - 1; i >= 0; i--) {
//  console.log(i,riteshArray[i]);
// }

// for (let i = 1; i <= 3; i++){
//   console.log(`---Exercise set${i}---`);
//   for(let rep = 1; rep <=3 ;rep++){
//     console.log(`Weight repition ${rep}`);
//   }
// }

// 49 The while loop

// let rep = 1;

// while (rep <= 10){
// console.log(rep);
// rep++
// }

// let dice = Math.trunc(Math.random() * 6 +1)
// console.log(dice);

// let dice1 = Math.trunc(Math.random() * 6 +1)
// console.log(dice1);

// let dice2 = Math.trunc(Math.random() * 6 +1)
// console.log(dice2);

/** 50 Coding Challenge */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i <= bills.length - 1; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + calcTip(bills[i]));
// }
// console.log(bills,tips,totals);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// const calcAvarage = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   const avg = (sum/arr.length)
//   return avg
// };

// console.log(calcAvarage(totals));

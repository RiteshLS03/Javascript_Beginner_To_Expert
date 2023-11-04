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

const friends = ['Micheal', 'Steven', 'Peter'];

console.log(friends);
console.log(friends[0],friends[1])
console.log(friends.length);
console.log(friends[friends.length - 1]);

const years = new Array(1997,1999,2004);
'use strict';

// // 140 Simple Array Methods

// // 1) Slice() Method
// // Slice cut down an slice of an array. It return new array without changing original array

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));

// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));

// // 2) Splice() Method

//It's just like the slice method but it's CHANGES/MUTATE'S  on original array

// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.splice(2);
// console.log(arr);

// arr.splice(1, 2);
// console.log(arr);

// // 3) Reverese() Method
// Used to reverse a array and It changes's/Mutate's the original array

// const arr2 = ['j', 'h', 'i', 'g', 'f'];
// console.log(arr2.reverse(arr2));

// // 4) Concat() Method
// It's used to concat/joined two arrays and it return's a new array and doesn't change the original

// const letters = [arr.concat(arr2)];
// console.log(letters);

// // 141 Looping Array forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //forOf Loop
// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   // destructuring with current array
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${movement}`);
//   }
// }

// //forEach Loop
// console.log(`---- forEach ----`);
// movements.forEach(function (movement, i, array) {
//   // callfunction's parameter's set default
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${movement}`);
//   }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index, movements) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${movement}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  labelBalance.innerHTML = '';
  acc.balance = acc.movements.reduce((accu, mov) => accu + mov, 0);
  // acc.balance = balance;
  labelBalance.innerHTML = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accu, mov) => accu + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((accu, mov) => accu + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((accu, int) => accu + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);
// displayMovements(account1.movements);
// calcDisplayBalance(account1.movements);

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// 142 forEach with Maps and Sets

// forEach is also available on maps and sets
// The first paramater of forEach method is a call back function and that callback function has 3 parameter that are as below
// 1) The current element/value current iteration
// 2) The second parameter is key/index
// 3) The Third parameter is entire Map D.S

//Map Data Structure
// For ex :-

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// //Set Data Structure
// // For ex :-
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value} : ${value}`);
// });

// The key and value are same why ?
// because Set doesn't have keys/index . the devs doesn't want's make it confusing

// 145 CODING CHALLENGE

// Coding Challenge #1

/**
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

*/

// function checkDogs(dogJulia, dogKate) {
//   const dataOfJulia = dogJulia;
//   const shallowOfJulia = dataOfJulia.slice(1, -2);
//   // console.log(dataOfJulia, shallowOfJulia);
//   const bothOfData = shallowOfJulia.concat(dogKate);
//   console.log(bothOfData);

//   bothOfData.forEach(function (value, index) {
//     value >= 3
//       ? console.log(
//           `Dog number ${index + 1} is an adult, and is ${value} years old`
//         )
//       : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//   });
// }

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// 146 Data Transformations Map, Filter and Reduce
// we can use any of Map, Filter and Reduce to perform data transformation on array

//Map() Method
// we can also loop over on similar to forEach but it creates  new array based on original
// A map method takes array llops over that array and in each iteration specify on our code the current array element. Map method return a new array containing the result of applying on operation on all original array elements

//Filter() Method
//The filter method is used to filter for elemetns in the original array which satisfy a certain  condition
//Filter Method return a new array containing the array elements that passed a specified test condition. In simple words when a condition is "true" will be included in new array. If it "false/fails" it will be NOT in included

//Reduce() Method
//We use reduce method to boils ("reduces") all the elements to the original array to a single value

//For ex

// 3 1 2 4 3 2
//   Reduce
// Accumulator + Current
//      |
//      13

// 147 The Map Method
// Map() Method
// For ex

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementUSD);

//forOf() Loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSDfor = [];

// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }

// console.log(movementsUSDfor); // exact same as before

//Arrow function

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsDescriptions = movements.map(
//   (mov, index) =>
//     `Movement ${index + 1} : You ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

// Coding Challenge
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD);

// 148 Computing usernames

// const user = 'Steven Thomas Williams';

// const createUserNames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');

//   return username;
// };

// console.log(createUserNames('Ritesh Ramprasad Narwade'));

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
// console.log(accounts);

// 149 The Filter Method

//It basically add an element if the certain condion is true otherwise it will ignore the element and goes to next one
//For ex

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

//forEach Loop
// const depositsForOf = [];
// for (const mov of movements) {
//   if (mov > 0) depositsForOf.push(mov);
// }

// console.log(depositsForOf);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

// 150 The Reduce Method
// We use reduce method to essentially boil down all the elements in an array to single value
// The redece method is lit bit DIFFERENT from before two method. It just return a single value which is accumulator

// Parameters of reduce method
//1st parameter is callback function
//                 - The callback function's first parameter is accumulator which is stores the value of previous elements sum/total value. we need to return this value from the callback. so this how the new accumulator can then be used in the next iteration of the loop
//                 - The callback function's second parameter is current element
//                 - ------------------------ third parameter is index
//                 - ------------------------ fourth parameter is entire array
//2nd parameter is initial value of the accumulator. we can set it dynamically.It's like a SNOWBALL falling from mountain

//For ex
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const balance = movements.reduce(function (accu, cur, i, arr) {
//   console.log(`Iteration ${i} : ${accu}`);
//   return accu + cur;
// }, 0);

//Let's change accumulator initail value from 0 to 100
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const balance = movements.reduce(function (accu, cur, i, arr) {
//   console.log(`Iteration ${i} : ${accu}`);
//   return accu + cur;
// }, 100);

//ForOf loop

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let balance2 = 0;

// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2  );

// Arrow function
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce((accu, cur) => accu + cur, 0);
// console.log(balance);
// // Until we keep track of sum but now it will keep track of maximum number

// const max = movements.reduce((accu, mov) => {
//   if (accu > mov) {
//     return accu;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

// 151 CODING CHALLENGE #02

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const dogHumanAge = [];
//   for (let i = 0; i < ages.length; i++) {
//     if (ages[i] <= 2) {
//       const humanAge = ages[i] * 2;
//       dogHumanAge.push(humanAge);
//     } else if (ages[i] > 2) {
//       const humanAge = 16 + ages[i] * 4;
//       dogHumanAge.push(humanAge);
//     }
//   }
//   return dogHumanAge;
// };

// const dogHumanAge = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const above18 = dogHumanAge.filter(dog => dog >= 18);
// console.log(above18);

// const avgHumanAgeOfAdultDogs = above18.reduce(function (acc, age, i, arr) {
//   const total = acc + age / arr.length;
//   return total;
// }, above18[0]);

// console.log(avgHumanAgeOfAdultDogs);

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });
//   // console.log(humanAges);

//   const above18HumanAge = humanAges.filter(age => age >= 18);
//   // console.log(above18HumanAge);

//   const avgAge =
//     above18HumanAge.reduce((accu, cur, index, arr) => accu + cur, 0) /
//     above18HumanAge.length;

//   console.log(avgAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// 153 CODING CHALLENGE #3

// const calcAverageHumanAge = function (ages) {
//   const humanAgeOfDog = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18);

//   const avg =
//     humanAgeOfDog.reduce((accu, age) => accu + age, 0) / humanAgeOfDog.length;

//   return avg;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// 154 The find method
// Basically the find method returns only one element that satisfies condition
// For ex

// const firstWithdrawl = movements.find(mov => mov > 0);
// console.log(movements);
// console.log(firstWithdrawl);

// //Ex 2

// const accoun = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(accoun);

// 155 Implementing Login

//Event Handlers

const updateUI = function (acc) {
  //Displey movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

let currentAccount;
// console.log(accounts);
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    console.log('LOGIN');
    inputLoginPin.blur();

    //Input
    inputLoginUsername.value = inputLoginPin.value = '';
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});

// 158 some and every

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// 157 The findIndex Method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');
  // const user = inputCloseUsername.value;
  // const pin = inputClosePin.value;

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const indexOfAcc = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    console.log(indexOfAcc);

    //Delete account
    accounts.splice(indexOfAcc, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// 160 Sorting Arrays
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// 161 More Ways of Creating and Filling Arrays

// CODING CHALLENGE

const randomOf100 = Array.from(
  { length: 100 },
  (cur, i) => Math.floor(Math.random() * 6) + 1
);

// console.log(randomOf100);

// Array from method()

labelBalance.addEventListener('click', e => {
  e.preventDefault();

  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );

  const numbers = movementsUI.map(ele =>
    Number(ele.textContent.replace('€', ''))
  );
  console.log(numbers);
});

// 163 CODING CHALLENGE

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28) / 1000));
console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

const tooMuchOrLittle = () => {
  if (sarahDog.curFood > sarahDog.recFood) {
    console.log('Eating Too Much');
  } else if (sarahDog.curFood < sarahDog.recFood) {
    console.log('Eating Too Less');
  }
};

tooMuchOrLittle(sarahDog.curFood);

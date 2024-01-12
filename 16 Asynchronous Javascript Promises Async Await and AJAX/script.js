'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = (data, className = '') => {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} Million </p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(Object.values(data.currencies)[0])[0]
    }</p>
  </div>
</article>
`;

  countriesContainer.style.opacity = 1;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

////////////////////////////////////////////////////

function getCountry(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //   console.log(Object.values(data.languages)[0]);
    //   console.log(Object.values(Object.values(data.currencies)[0])[0]);
  });
  // new XMLHttpRequest();
}

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     //render country 1
//     renderCountry(data);

//     // get neighbour conutry 2

//     const [neighbour] = data.borders;
//     // console.log(neighbour);

//     if (!neighbour) return;

//     // AJAX second call
//     // AJAX call country 1
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       // console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('Portugal');

// 246

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('usa');

// 247

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//       console.log(data);
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// 248

// const renderError = msg => {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//       console.log(data);
//     })
//     .catch(err => {
//       console.error(`${err} `);
//       renderError(`Something went wrong 🪲🪲 ${err.message} Try again!`);
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// 249

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getJSON = function (url, errorMsg = 'Somthing went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// // const getCountryData = country => {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(response => {
// //       console.log(response);
// //       if (!response.ok) {
// //         throw new Error(`Country not found (${response.status})`);
// //       }
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];
// //       if (!neighbour) return;

// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(`Country not found (${response.status})`);
// //       }
// //       response.json();
// //     })
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} `);
// //       renderError(`Something went wrong 🪲🪲 ${err.message} Try again!`);
// //     });
// // };

// const getCountryData = country => {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     // fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //   .then(response => {
//     //     console.log(response);
//     //     if (!response.ok) {
//     //       throw new Error(`Country not found (${response.status})`);
//     //     }
//     //     return response.json();
//     //   })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (neighbour == '0') throw new Error('No neighbour found!');

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     // .then(response => {
//     //   if (!response.ok) {
//     //     throw new Error(`Country not found (${response.status})`);
//     //   }
//     //   response.json();
//     // })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong 🪲 ${err.message} Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');

// NULL5
// NULL6
// NULL7

// 253

// Asynchronuous Way Promise

// const lotteryPromise = new Promise(function (resolved, rejected) {
//   console.log('Lottery is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolved(console.log('You WON 💰'));
//     } else {
//       rejected(new Error('you lose money'));
//     }
//   }, 1000);
// });

// Immediately Reject or Resolve

// Promise.resolve('Resolved').then(res => console.log(res));
// Promise.reject(new Error('Rejected')).catch(err => console.error(err));

// const logging = () => console.log('Printed');
// setInterval(logging, 1000);

// 256

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
// };

// whereAmI('usa');
// console.log('First');

// NULL 8

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// 181 Selecting, Creating, and Deleting Elements

/** SELECTING ELEMENTS */

// this selects entire html document
console.log(document.documentElement);

// selects  header part of html doc
console.log(document.head);

// selects  body
console.log(document.body);

// to select only first element contains  that specific query
const header = document.querySelector('.header');

// to select all/multiple elements with that query
const allSection = document.querySelectorAll('.section');
console.log(allSection);

// to select element by that specific id
document.getElementById('section-1');

// to select all HTML elements. This method returns 'HTML collection' it's also called as life collection. so when the DOM changes it also immediately updated automatically. if delete a element inside html collection it will immediately update DOM
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//  to select element by className. It also return a html collection
console.log(document.getElementsByClassName('btn'));

/** CREATING AND INSERTING ELEMENTS */
// we can create HTML elements by using the insert adjacent HTML function
// .insertAdjacentHTML

// this will create element or just and object that represents DOM element and return a DOM element
const message = document.createElement('div');
// added a className to our div
message.classList.add('cookie-message');

// Adding the content
// message.textContent =
// ('We use cookies for improve functionality and analytics. ');

message.innerHTML =
  'We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Now, created element we need to insert in DOM. Let's insert it in our Header
//  this prepend method adds the element as the first child element
// header.prepend(message);

// to add element as last child we have append
header.append(message);

// as we can see the element is removed from the top and it's in last of div. but why it's only one ? because this element is now life element living in the DOM. and that's why it can't be in multiple places at the same time
// first we prepended and then appended
// we can add them also move them

// what if we need multiple copies of same element ?
// header.append(message.cloneNode(true));
// Now it have both the copies in first and last of div

// this will insert element before div element as a sibling
// header.before(message);
// this will insert element after div element as a sibling
// header.after(message);

// document.addEventListener('click', function () {
//   // this remove method removes the node from the dom. it's new method before we need to select parent node and then select and delete child node
//   message.remove();
//   // let's see before method
//   message.parentElement.removeChild(message);
// });

// // 184 Types of Events and Event Handlers

// document.querySelector('h1').addEventListener('mouseenter', function () {
//   alert(`Add Event Listner : Great! You are reading the heading :D`);
// });

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

console.log(randomColor(0, 255));

// rgb(0,100,120)

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
  console.log('LINK', e.target);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(0, 255);
});

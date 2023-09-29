// View https://www.youtube.com/watch?v=lkIFF4maKMU from Fireship youtube channel to get a quick oversight of javascript.
// Note arrow functions are the equivilant of lambda functions

console.log('hello guys'); // returns undefined. different from null

let x = 2;
let obj;
obj = new Object();
const pi = '3.1415926535';

function sum(a, b) {
    return a + b;
}
// Primitives are passed by value and objects passed by reference.

const list = [true, false, false, true];
let uniq = new Set(list) // Set holds unique items
const dict = new Map([
    ['key', 'value'],
    ['key2', 'value2']
]);

// There is an ability to write async functions using promises, await and async.
// npm is a package manager for javascript

// Document Object Model (DOM)
window.document; // The most important object
window.document.querySelector('.myclass'); // Returns an object that represents a Tag. This has methods such as .innerHTML
window.document.querySelectorAll('.button');
window.document.getElementsByTagName('a');

// Event listeners
const btn = document.querySelector('.button');
btn.addEventListener('click', () => {console.log('button clicked')}); // One argument is an arrow function - same as a lambda function.

document.body.style.backgroundColor = 'red'; // Vanilla javascript results in imperative code (UI is mutated directly)
// Many devs use front end frameworks to produce declarative code. UI = f(state)
// Libraries (such as react) encapsulate javascript, html, and css into components, which form a component tree that represent the UI

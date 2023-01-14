// Function Declaration
// ordinary
function square(num) {
  return num * num;
}

// Function Expression
const square2 = function (num) {
  return num * num;
};

// Anonymous Function

// First Class Functions
// A programming language is said to have First-class functions
// when functions in that language are treated like any other variable.
// languages with First class functions
// Perl, Python, PHP, Lua, Tcl/Tk, JavaScript and Io,
// Erlang, Scheme, ML, Haskell, F#, and Scala,

// What is IIFE?
// Immediately Invoked Function Expressions

(function iife(num) {
  console.log(num * 3);
})(3);

// IIFE - Interview Question

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
// happens because of closure
// clg(x) looks inside fy first and then moves out to find x

// Closures
// the ability of a function to access variable and functions
// lexically out of its scope, are called closures

// Function Scopes
// Function Scope - Interview Question

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// Good for comparing var vs let
function test() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log('Outside i = ', i);
}

test();
console.log(i);

// Hoisting in Functions
// Different than variables
// Unlike variables, function can be called before or after declaring it
// function scope works just like global scope

console.log(a);
var a = 5;

functionName();
function functionName() {
  console.log(b);
  var b = 4;
}

// Hoisting - Interview Question
var x = 21;
var fun = () => {
  console.log(x);
  var x = 20;
};
fun();
// when a variable is present in local scope, will not check global scope

// Params vs Arguments

// Spread vs Rest Operators
function multiply(...nums) {
  // rest operator
  console.log(nums);
  console.log(nums[0] * nums[1]);
}
var arr = [5, 6];
multiply(...arr); // spread operator

// Interview Question on params, args, spread, rest
const fn = (a, x, y, ...numbers) => {
  console.log(x, y);
};
fn(5, 6, 3, 7, 8, 9);
// rest param must be at end

// Callback Function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Callback Function - Interview Questions
// Example of callback
// document.addEventListener('click', function (params) {});

// Arrow Functions
const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};
console.log(add(3, 5));

const func = (x, y) => x * y;
console.log(func(3, 4));

const add2 = (x, y) => x + y;
console.log(add(3, 5));

// // with block body, explicit "return" needed

// Arrow function vs Normal Function
// Differences
// syntax bit cleaner for arrow fn
// arrow has implicit return if it's one line
// if args are being passed to arrow, it must have corresponding params, unlike normal fn body
// this: inside an arrow, this refers to global object,
// also construtor defnied differently

// Do this for Goodluck

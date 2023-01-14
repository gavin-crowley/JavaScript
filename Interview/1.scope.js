var a = 5;

console.log(a);

// Block Scoping

{
  var b = 5;
}

console.log(b);

// var is not block scoped

{
  let c = 5;
}

// console.log(c); // not defined

{
  const d = 5;
}

// console.log(d); // not defined

// let and const are block scoped because their scope is within a block

// Function Scoping

function scope1() {
  var e = 5;
}

// console.log(e) // not defined

function scope2() {
  let f = 5;
}

// console.log(f) // not defined

function scope3() {
  const g = 5;
}

// console.log(g) // not defined

// Therefore var is function scoped and let and const are block scoped
// and a function contains a block and are by definition function scoped as well

// /========== Shadowing

function test() {
  let a = 'Hello';

  if (true) {
    let a = 'Bye';
    console.log(a);
  }

  console.log(a);
}

test();

// ============ Declarations

// can redeclare with var in the same scope
var h;
var h;

// can't redeclare with let in the same scope
let i;
// let i; // error already decalred

// can't redeclare with const in the same scope
const j = 0;
// const j = 1;

// but can redeclare in another scope i.e. shadowing, outer variable shadowed by inner
{
  let i;
  const j = 0;
}

// ================ Declaration without initialization

// var, let don't need initialization, const does


// ================ Re-Initialization 

var aa = 5;
aa = 6;

let bb = 5;
bb = 6;

const cc = 5;
// cc = 6; // can't

//var, let can be updated - const cannot 


// ================ JavaScript Execution Context

// see interview prep notes


// ================ Hoisting

// undefined because of hoisting
console.log(count) // undefined
var count = 4;

// cannot access sum before initalization, also hoisted
// console.log(sum)
let sum = 4;

// same as let
// console.log(avg)
let avg = 4;

function abc() {
    console.log(a, b,c)

    const c = 30;
    let b = 20;
    var a = 10;
}

abc();





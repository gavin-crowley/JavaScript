// 5. Hositing - declaration of variable will bubble to top of file

// Q1
// console.log(foo);
// foo = 1

// Q2
// console.log(foo);
// var foo = 2
// console.log(foo);

// Q3
// foo = 3
// console.log(foo);
// var foo 

// same for function definition
foo()
function foo() {
}


// const / let don't bubble

console.log(foo);
let foo = 2

// use const / let to prevent problem with bubbling of variable or hositing


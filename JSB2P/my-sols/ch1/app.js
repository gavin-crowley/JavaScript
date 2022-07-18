// console.log("from js file");
let a = 10; // a is set to 10
// console.log(a);
// this will output 10 to the console

/*
this is a
multi-line
comment
*/

// const promptInput = prompt('Hey, how are you?')
// console.log(promptInput);



// Ex 4.2

const userAge = Number(prompt("Enter your age:"));

let message;

if (userAge >= 21) {
  message = "can enter and buy alcohol";
} else if (userAge >= 19) {
  message = "can enter and not buy alcohol";
} else {
  message = "can't enter";
}

console.log(message);

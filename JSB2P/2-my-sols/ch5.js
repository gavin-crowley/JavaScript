// 5.1
const MAX_VALUE = 5;
const randNum = Math.floor(Math.random() * MAX_VALUE) + 1;
console.log(randNum);
let correct = false;

// while (!correct) {
//   let guessNum = 1;
//   // let guessNum = Number(prompt('Enter number between 1 and 5'))
//   if (guessNum === randNum) {
//     console.log('Your guess is correct');
//     correct = !correct;
//   } else {
//     console.log('Guess incorrect, try again');
//   }
// }

// 5.2
// let counter = 0;
// let step = 1;
// do {
//   // console.log(counter)
//   counter += step;
// } while (counter < 10);

// 5.3
const myWork = [];

for (let i = 1; i <= 10; i++) {
  myWork.push({ name: `Lesson ${i}`, status: i % 2 !== 0 });
}

console.log(myWork);

// 5.4


























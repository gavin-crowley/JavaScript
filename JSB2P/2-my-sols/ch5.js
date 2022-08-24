// 5.1
const MAX_VALUE = 5;
const randNum = Math.floor(Math.random() * MAX_VALUE) + 1;
// console.log(randNum);
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

// console.log(myWork);

// 5.4

// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//   let tempTable = [];
//   for (let x = 0; x < cols; x++) {
//     counter++;
//     tempTable.push(counter);
//   }
//   myTable.push(tempTable);
// }
// console.table(myTable);

// 5.5
// const gridArray = 64
// let counter = 0
// let rows = 4

// 5.6

const arr = [];
let value = 1

for (let i = 0; i < 10; i++) {
  arr[i] = value;
  value++
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

for (const val of arr) {
  console.log(arr[val-1]);
}

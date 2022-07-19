// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// let number
// do {
//     number = prompt("Please enter a number between 0 and 100: ")
// } while (!(number >= 0 && number < 100));

// let counter = 0
// let step = 2

// do {
//     console.log(`Counter value: ${counter}`);
//     counter += step;
// } while ((counter >= 0 && counter < 10));

// let array = [];
// for (let i = 0; i <= 10; i++) {
//   array.push({ name: `Lesson ${i}`, status: i % 2 ? true : false });
// }
// console.log(array);
//-------------------------
// const arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i + 1);
// }

// console.log(arr);

// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }

// for (const iterator of arr) {
//     console.log(iterator);
// }
//-----------------------------
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};
for (let prop in car) {
  console.log(prop);
}

const obj = {
  name: "John",
  age: 30,
  gender: "male",
};

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

const arr = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const key in arr) {
  console.log(arr[key]);
}
// -------------------------

const str = 'here is a string'
const num = 4

for (let i = 0; i < 10; i++) {
  if (i === num) {
    continue
  }
  console.log(str[i]);  
}






































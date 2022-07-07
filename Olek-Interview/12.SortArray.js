const arr = [2, 4, 7, 1, 7, 3, 9];

// console.log(arr.sort((a, b) => (a < b ? -1 : 1)))
// console.log(arr.sort((a, b) => (a - b)))
console.log(arr.sort((a, b) => b - a));

// sort() mutates array
// only user sort() with primitive types

const books = [
  { name: "HP", author: "JK R" },
  { name: "WC", author: "M L" },
  { name: "ZG", author: "S C" },
];

// console.log(books.sort((a, b) => a.name - b.name));
console.log(books.sort((a, b) => {
  const aLastName = a.author.split('')[1]
  const bLastName = b.author.split('')[1]
   return bLastName < aLastName ? 1 : -1
}));


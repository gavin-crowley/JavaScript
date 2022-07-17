// get character from ASCII Value
// console.log(String.fromCharCode(65));

// seats in theater
// const nCols = 16, nRows = 11, col = 5, row = 3;
// console.log((nCols - col + 1) * (nRows-row));

// total amount of points

// const games = ["3:1", "2:2", "0:1"]
// const games = ["3:1", "2:2", "0:1", "1:0", "2:1", "3:1", "3:2", "4:1"]

// const total = games.reduce(function (acc, game) {
//     const [x, y] = game.split(':')
//     const points = x > y ? 3 : x === y ? 1 : 0
//     acc += points
//     return acc
// }, 0)

// console.log(total);

const arr = ["hay", undefined, 2, true, false, "needle", "randomJunk"];

// const needle = "needle";

const index = arr.findIndex(function (item) {
  return item === "needle";
});

console.log('found the needle at position ' + (index + 1));
console.error('found the needle at position ')

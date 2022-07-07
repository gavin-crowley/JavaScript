arr = [1, 2, 1, 3, 4];

// Soln 1
// const uniqueArr = (arr) => {
//   return [...new Set(arr)]
// }

// Soln 2
// const uniqueArr = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// };

// Soln 3
const uniqueArr = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el]
  }, []);
}

console.log(uniqueArr(arr));
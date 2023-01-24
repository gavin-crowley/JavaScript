// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// // My Solution
// function maxChar(str) {
//     const charMap = {};
//     for (const char of str) {
//       if (!charMap[char]) {
//         charMap[char] = 1;
//       } else {
//         charMap[char]++;
//       }
//     }
//     let sortable = [];
//     for (const key in charMap) {
//       sortable.push([key, charMap[key]]);
//     }

//     sortable.sort(function (a, b) {
//       return b[1] - a[1];
//     });

//     return sortable[0][0]

//   }

// Grider solution
// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';
  
//     for (const char of str) {
//       if (!charMap[char]) {
//         charMap[char] = 1;
//       } else {
//         charMap[char]++;
//       }
//     }
  
//     for (let char in charMap) {
//       if (charMap[char] > max) {
//         max = charMap[char];
//         maxChar = char;
//       }
//     }
  
//     return maxChar;
//   }
  
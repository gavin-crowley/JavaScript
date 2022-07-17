// Part 01
// https://youtu.be/N65RvNkZFGE

// Exercise 1
// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100

// const num1 = 100;
// const num2 = 10;

// if (num1 == 100 || num2 == 100) {
//     console.log(true);
// } else if (num1 + num2 == 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// sol

// const isEqualTo100 = (a, b) => {
//     return a === 100 || b === 100 || (a + b === 100);
// }

// const isEqualTo100 = (a, b) =>  a === 100 || b === 100 || (a + b === 100);

// console.log(isEqualTo100(100, 0));


// Exercise 2:
// Write a JavaScript exercise to get the extension of a filename.
// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))
// console.log(getFileExtension('index.html'));
// console.log(getFileExtension('webpack.config.js'));


// Exercise 3:
// Write a JavaScript program to replace every character in a given string with the character
// following it in the alphabet
// const moveCharsForward = (str) =>
//     str
//     .split('')
//     .map(char => String.fromCharCode(char.charCodeAt(0) +1))
//     .join('')


// console.log(moveCharsForward('HAL'));

// char.charCodeAt(0) : returns char ASCII code
// String.fromCharCode(65) : returns letter from given ASCII number



// Exercise 4:
// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// const formatDate = (date = new Date()) => {
//     const days = date.getDate()
//     const months = date.getMonth() + 1
//     const years = date.getFullYear()
//     return `${days}/${months}/${years}`
//  }
// console.log(formatDate())




// Exercise 5:
// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string.
 
// // my sol
// const newString = (str) => 
//     str
//     .split(' ')[0] === 'New!' ? str :'New!'.concat(" ", str)

// console.log(newString('New! Hey'));

// // sol
// const addNew = (str) =>
//     str.indexOf('New!') === 0 ? str : `New! ${str}`

// console.log(addNew('New! Offers'));




// Part 02
// https://youtu.be/U0Ce27lA7R4
// Exercise 1:
// Write a JavaScript program to create a new string from a given string taking the last 3
// characters and added at both the front and back. The string length must be 3 or more, if
// not, the original string is returned.

const str = 'test'

// Exercise 2:
// Write a JavaScript program to extract the first half of a string of even length.


// Exercise 3:
// Write a JavaScript program to concatenate two strings except their first character.


// Exercise 4:
// Given two values, write a JavaScript program to find out which one is nearest to 100


// Exercise 5:
// Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified
// character.


// Part 03
// https://youtu.be/0_sbUwVU32k
// Exercise 1:
// Write a JavaScript program to find the number of even digits in a an array of integers
// Exercise 2:
// Write a JavaScript program to find the number of even values up to a given number
// Exercise 3:
// Write a JavaScript program to check whether a given array of integers is sorted in ascending
// order
// Exercise 4:
// Write a JavaScript program to get the largest even number from an array of integers.
// Exercise 5:
// Write a JavaScript program to replace the first digit in a string (should contain at least one
// digit) with a $ character.



// Part 04
// https://youtu.be/FGklOjedW7E
// Exercise 1:
// Given a year, report if it is a leap year.
// Exercise 2:
// Write a JavaScript program to compare two objects to determine if the first one contains
// the same properties as the second one (which may also have additional properties). For
// example, objA and objB are equal (but not equal to objC).
// const objA = { a: 1, b: 1, c: 1 };
// const objB = { a: 1, b: 1, c: 1 };
// const objC = { a: 1, b: 1, d: 1 };
// Exercise 3:
// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array.
// A new line indicates a new row in the array. Example input:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza
// Exercise 4:
// Write a JavaScript program to generate a random hexadecimal color code.
// Exercise 5:
// Write a JavaScript function that returns true if the provided predicate function returns true
// for all elements in a collection, false otherwise.



// Part 05
// https://youtu.be/Alo1giKd3s8
// Exercise 1:
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Exercise 2:
// Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Exercise 3:
// Write a JavaScript function to convert an amount to coins.
// Example input: 46 and possible coins 25, 10, 5, 2, 1
// Output: 25, 10, 10, 1
// Exercise 4:
// Write a JavaScript function to extract unique characters from a string.
// Exercise 5:
// Write a JavaScript function to find the first not repeated character
// Example string: 'abacddbec'
// Expected output: 'e'
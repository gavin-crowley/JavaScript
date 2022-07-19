// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);

// Convert string to integer
let str;
parseInt(str);

// convert string to float
let flt;
parseFloat(flt);

// ARRAY METHODS

// forEach() - doesn't return anything
// filter() - returns a new array, does not mutate original array
// every()
// copywithin()
// map() - returns a new array, does not mutate original array
// indexOf() - finds occurances in arrays and strings
// lastIndexOf() - finds last occurrence in arrays and strings
// concat() - returns a new array, does not mutate original array
// split() - returns a new array, does not mutate original array
// join() - returns a string
// search() - finds occurances in strings, can use regex unlike indexOf(), indexOf() is faster
// slice() - create substrings in arrays and strings
// replace(old, new)
// replaceAll(old, new)
// str.toUpperCase()
// str.toLowerCase()
// str.startsWith('substring')
// str.endsWith('substring')

//Ex 8.2
//Remove array duplicates
const arr = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

const arr2 = arr.filter((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr2);

//Ex 8.3
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr4 = arr3.map((item) => item * 2);
console.log(arr4);

// convert a string to an array
let str2;
// str2.split(' ')

// convert an array to a string
let letters;
// letters.join()

// substrings
// 1. str.indexOf('substring'), can also use str.search('substring)

// find character at certain index
// str.charAt(7)

// create substring
// str.slice(start, end)
// arr.slice(start, end)

// Ex 8.4

const str5 = "thIs will be capiTalized for each word";
// console.log(str5);
// const lowerCase = str5.toLowerCase();
// let arr5 = [];
// arr5 = lowerCase.split(" ");
// console.log(arr5);
// const capitalizedWords = [];
// arr5.forEach((word) => {
//   let firstLetter = word.slice(0, 1).toUpperCase();
//   let restWord = word.slice(1);
//   capitalizedWords.push(firstLetter.concat(restWord));
// });
// console.log(capitalizedWords);
// console.log(capitalizedWords.join(" "));

const capitalize = (str) => {
  const lowerCase = str5.toLowerCase();
  let arr = [];
  arr = lowerCase.split(" ");
  const capitalizedWords = [];

  arr.forEach((word) => {
    const firstLetter = word.slice(0, 1).toUpperCase();
    const restWord = word.slice(1);
    capitalizedWords.push(firstLetter.concat(restWord));
  });

  return capitalizedWords.join(" ");
};

console.log(capitalize(str5));


// NUMBER METHODS


































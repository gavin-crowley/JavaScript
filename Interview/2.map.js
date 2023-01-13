// MAP
// map creates a new array from an existing array by applying
// a function to each of the elements of the array

const nums = [1, 2, 3, 4];
const result = nums.map((num, i, arr) => num ** 2);
console.log(nums);
console.log(result);

const result2 = nums.map((num, i, arr) => num ** 2 + i);
console.log(result2);

const result3 = nums.map((num, i, arr) => arr);
console.log(result3);

const result1 = nums.map((num) => {
  return num ** 2;
});
console.log(result1);

// FILTER
// applies a conditional statement to each element in an array
// if the conditional returns true, the element gets pushed to the output array

const moreThanTwo = nums.filter((num, i, arr) => num > 2);
console.log(moreThanTwo);

const test_i = nums.filter((num, i, arr) => num - i > i);
console.log(test_i);

const test_arr = nums.filter((num, i, arr) => arr);
console.log(test_arr);

// REDUCE
//
// accumulator: result of previous computation
// if no initial value, it takes the first element as value for accumulator

const sum = nums.reduce((accumulator, currentValue, i, arr) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// =============== POLYFILLS

// Polyfill for map()
// prototype adds the myMap method to Array for this file

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// Test myMap
const arr1 = [2, 3, 4];
const sum1 = arr1.myMap((num, i, arr) => {
  return num * 2;
});
console.log(sum1);

// Polyfill for filter()

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// Test myFilter
const arr2 = [2, 3, 4];
const filter2 = arr2.myFilter((num, i, arr) => {
  return num > 2;
});
console.log(filter2);

// Polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

// Test myReduce

const arr3 = [4, 5, 6];
const sum2 = arr3.myReduce((accumulator, currentValue, i, arr) => {
  return accumulator + currentValue;
}, 0);

console.log(sum2);

// =============== Map vs ForEach
// both are array methods that loop thru the array items
// differences:
// map returns an array, forEach returns undefined
// forEach mutates the original array, map creates a new array -> immutable
// map() is chainable but forEach() isn't
// map doesn't execute for elements without values, forEach does for all elements

const arr4 = [1, 2, 3, 4, 5];

const mapResult = arr4.map((ar) => {
  return ar + 2;
});

console.log(mapResult);

const forEachResult = arr4.forEach((ar, i, arr) => {
  return ar + 2;
});

console.log(forEachResult);

// ================ PRACTICE Qs

let students = [
  { name: 'Piyush', rollNumber: 31, marks: 80 },
  { name: 'Jenny', rollNumber: 15, marks: 69 },
  { name: 'Kaushal', rollNumber: 16, marks: 35 },
  { name: 'Dilpreet', rollNumber: 7, marks: 55 },
];

// Q1 Make student names uppercase

const names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

// using map
const mapNames = students.map((student) => student.name.toUpperCase());
console.log(mapNames);

// Q2 Return only details of those who scored more than 60
const returnFilter = students.filter((student) => {
  return student.marks > 60;
});
console.log(returnFilter);

// Q3 Return details of those who scored more than 60 and rollNumber > 15
const returnFilter2 = students.filter((student) => {
  return student.marks > 60 && student.rollNumber > 15;
});
console.log(returnFilter2);

// Q4 Sum of marks of all students
const studentMarksSum = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
console.log(studentMarksSum);

// Q5 Return only names of students who scored more than 60
const mapFilter = students
  .filter((students) => students.marks > 60)
  .map((student) => student.name);
console.log(mapFilter);

// Q6 See vid:
// https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=3
const MFR = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);
console.log(MFR);

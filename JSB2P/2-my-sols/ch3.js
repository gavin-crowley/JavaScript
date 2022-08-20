// 3.1
const shopList = ['milk', 'bread', 'apples'];
console.log(shopList.length);
console.log(shopList);

// 3.2
let list = [];
list.push('milk', 'bread', 'apples');
list['bread'] = ['bananas', 'eggs'];
list = [].concat(...list);
console.log(list.pop());
list.sort();
console.log(list.indexOf('milk'));
const newList = list.concat('carrots', 'lettuce');
console.log(newList);
const newNewList = ['juice', 'pop'];
const combined = list.concat(newNewList, newNewList);

console.log(combined);
console.log(combined.lastIndexOf('pop'));

// 3.3
const arr = [1, 2, 3];
const arr2 = [arr, arr, arr];
console.log(arr2[2][1]);

// 3.4
const myCar = {};
myCar.make = 'Ford';
myCar.model = 'Mondeo';

let propColor = 'color';
myCar[propColor] = 'red';
myCar.color = 'blue';

console.log(myCar);

// 3.5
const people = { friends: [] };
const a = { firstName: 'Ann', lastName: 'Roberts', id: '1'}
const b = { firstName: 'Barry', lastName: 'Roberts', id: '2'}
const c = { firstName: 'Pat', lastName: 'Roberts', id: '3'}

const newObj = people.friends.concat(a,b,c)
console.log(newObj)

/////
const arr3 = [1]
arr3.push(3)
console.log(arr3)

// yes length null 6 myArr[1]=4, [], undefined, null

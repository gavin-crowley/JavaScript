const shopList = ["Milk", "Bread", "Apples"];
console.log(shopList.length);
// shopList[1] = "Bananas"
// shopList.splice(2,0,'Eggs')
shopList.splice(1, 1, "Bananas", "Eggs");
console.log(shopList);
console.log(shopList.pop());
shopList.sort();
console.log(shopList.indexOf("Milk"));
shopList.splice(1, 0, "Carrots", "Juice");
const newList = ["Juice", "Pop"];
const combo = shopList.concat(newList, newList);

console.log(combo.lastIndexOf("Pop"));

console.log(shopList);
console.log(combo);

//===============

const arr = [1, 2, 3];
const newArr = [arr, arr, arr];
console.log(newArr[1][1]);

// /===============

const myCar = {
  make: "Nissan",
  model: "Skyline",
  price: 34000,
  color: "blue",
  secondHand: true,
};

let color;
// const color = ''
color = myCar["color"];
console.log(color);

myCar.forSale = false;
console.log(myCar);
myCar["forSale"] = true;
console.log(myCar);

console.log(myCar.make);
console.log(myCar.model);

// ================

const people = {
  friends: [],
};

const friend1 = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
};

const friend2 = {
  id: 2,
  firstName: "Jane",
  lastName: "Doe",
};

const friend3 = {
  id: 3,
  firstName: "Dick",
  lastName: "Doe",
};

// people.friends[0] = friend1;
// people.friends[1] = friend2;
// people.friends[2] = friend3;

people.friends.push(friend1, friend2, friend3);

console.log(people);

const myArr2 = [];
myArr2[10] = "test";
console.log(myArr2);
console.log(myArr2[2]);

// ================

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList.shift();
theList.unshift();
theList.splice(0, 0, "FIRST");
theList[3] = "hello world";
theList[4] = "MIDDLE";
console.log();
theList[theList.lastIndexOf()] = "LAST";
theList.pop();
theList.pop();
console.log(theList);

// =========================

const inventory = [];

const item1 = { name: "a", model: "w", cost: "100", quantity: "23" };
const item2 = { name: "b", model: "y", cost: "102", quantity: "223" };
const item3 = { name: "c", model: "z", cost: "107", quantity: "123" };

inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].quantity)
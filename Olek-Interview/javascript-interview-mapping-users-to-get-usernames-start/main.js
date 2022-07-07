// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// 1.
const arr_users = users.map((user) => user.name);

console.log(arr_users);

// 2.
const active_users = users
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(active_users);

// 3.

const age_desc = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(age_desc);

// 4. null & undefined
let var1
console.log(var1);
console.log(typeof var1);

let var2 = null
console.log(var2);
console.log(typeof var2);


// Arrow Function Experiments

// returns: undefined
// explanation: an empty block with an implicit return
// ((name) => {})();
// const arr1 = (num) => { num + 2}
// arr1()

// ((name) => {
//   return 'Hi ' + name;
// })('Jess');

const arr2 = (name) => {
  return 'Hi ' + name;
};
console.log(arr2('Jess'));

function func3(name) {
  return 'Hi ' + name;
}
console.log(func3('Jess'))

const numbers = [1,2]
const append = (arr, el) => {
  return [...arr, el]
  // arr.push(el)
  // return arr
}

const newNumbers = append(numbers, 3)
console.log(newNumbers);
console.log(numbers);


// push modifies / mutates the old array, outside the scope of the function 
// push doesn't create a new array
// push is not safe
// use spread operator instead to create a new array


// append is now pure as it always returns the same value with the same inputs
// and it doesn't have side-effects - modifying the array outside the scope of the function
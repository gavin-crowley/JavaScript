let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

// let totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount    
// }

// let totalAmount = orders.reduce(function(sum, order) {
//     return sum + order.amount
// }, 0)

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount);

// MDN Example

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);

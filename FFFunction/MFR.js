// Array squared

// const input = [ 1, 2, 3, 4, 5 ];

// let result = input.map(function (i) {
//     return Math.pow(i,2)
// })

// console.log(result);



// Sum of every positive element

const input = [ 1, -4, 12, 0, -3, 29, -150];

let positive = input.filter(function (num) {
    return num > 0
})

let result = positive.reduce(function (total, i) {
    return total + i
}, 0)

console.log(result);

// A “higher-order function” is a function that accepts functions 
// as parameters and/or returns a function.

// In functional programming Functions are values
let triple = function(x) {
    return x * 3
}

let waffle = triple
waffle(30)

// Composition

// Functions inside other functions are callback functions

// Filter example
let animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

// let dogs = []
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog') 
//         dogs.push(animals[i])   
// }

let dogs = animals.filter(function(animal) {
    return animal.species === 'dog'
})

// Can decouple 
let isDog = function(animal) {
    return animal.species === 'dogs'
}

let dogss = animals.filter(isDog)

// makes isDog reusable to find inverse
let otherAnimals = animals.reject(isDog)

console.log(dogs);


// find() does same as filter(), but only returns first item
// 1. Get Length of Object

var obj = {a: 1, b: 2, c: 3};

console.log(Object.keys(obj).length);


// 2. Iterate Over an Object

var username = {
    first: 'John',
    last: 'Doe'
}

// for in loop 
for (let u in username) {
    if (username.hasOwnProperty(u)) {
        console.log(u, username[u])
    }
}

// for of loop
for (let u of Object.keys(username)) {
    console.log(u, username[u])
}

// Object.entries - ES7
Object.entries(username).forEach(([key, value]) => console.log(key, value));






// 3. Convert Object to Array 

var person = { name: 'Amy', age: 40 }

var arr = []

// one way 
Object.keys(person).forEach(key => arr.push([key, person[key]]))

// another way 
Object.keys(person).map(key => [key, person[key]])

// easiest way 
Object.entries(person)






// 4. Check if Property is in Object

var user = {
    name: 'John',
    address: {
        street: 'Main',
        city: 'New York'
    }
}

console.log('name' in user)
console.log('address' in user)
console.log('street' in user.address) - this will also return true
for all methods on the object prototype so use
console.log(user.hasOwnProperty('address'))
console.log(user.address.hasOwnProperty('city'))

// 5. Prevent Object Properties from Being Added

var user = {
    name: 'jeff',
    email: 'jeff@gmail.com'
}

Object.getOwnPropertyDescriptor(user)

Object.preventExtensions(user)


// 6. Prevent Object Properties from Being Added / Deleted

var user = {
    name: 'john',
    email: 'john@gmail.com'
}

Object.getOwnPropertyDescriptor(user)

Object.seal(user)




// 7. Prevent Object Properties from Being Changed at All

var user = {
    name: 'greg',
    email: 'greg@gmail.com'
}


Object.getOwnPropertyDescriptor(user)

Object.freeze(user)




// 8. Merge Multiple Objects into One Object

var defaultUser = {
    name: '',
    email: '',
    subscribed: true
}


var actualUser = {
    name: 'Don',
    email: 'don@gmail.com',
}

var userData = Object.assign(defaultUser, actualUser);

console.log(userData)

// another way
userData = {...defaultUser, ...actualUser}




// 9. Computed Object Properties

var key = window.prompt('Set property name')

var obj = {
    [key]: 1,
}

// 10. Delete or Filter Property of Object

var name = { first: 'John', last: 'Doe'}

delete name.first

// filter the object prop instead of delete 
Object.keys(name)
        .filter(k = k !== 'first')
        .map(key => filteredObj[key] = name[key])


function filteredObj(obj, prop) {
    var filteredObj = {}
    Object.keys(obj)
        .filter(k = k !== prop)
        .map(key => filteredObj[key] = obj[key])

        return filteredObj
}


// 11. Get All Values in Object


var name = {
    first: 'John',
    last: 'Doe',
    age: '40'
}

Object.keys(name).map(key => name[key])

// another way 
Object.values(name)




// 12. Shallow Copy / Clone Array

var fruits = ['apple', 'banana']

fruits.push('cherry')

// - create copy of Array
fruits.slice().push('cherry')


// another way to creat copy 
[].concat(fruits)

// best way 
newFruits = [...fruits, 'cherry']
newFruits = ['cherry', ...fruits]


// 12. Get Random Element from Array

var ages = [12, 32, 98, 45, 76]

Math.round(Math.random() * ages.length)
ages[Math.round(Math.random() * ages.length)]
















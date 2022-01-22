// console.log("hello")

//##############    LET & CONST  ############################

'use strict'
var firstName = 'Felipe'
console.log(firstName)

let firstName = 'Felipe'
let lastName = 'Galivan'
lastName = 'Marrero'

let age = 999
let birthDate = new Date()

let person = {
    firstName: 'Eduardo',
    lastName: 'Williams'
}

let duplicate = function (value) {
    return value * 2
}

const person2 = {
    firstName: 'Scott',
    lastName: 'Brown'
}

// with const, cannot reassign the variable but can change the property of the object



//##############    ARROW FUNCTIONS  ############################

let duplicate = function (value) {
    return value * 2
}

let duplicate_arrow = (value) => value * 2

let duplicate_arrow2 = value => {
    return value * 2
} // has brackets, must be explicit about return

let printSomething = () => console.log('something');

let addition = (value1, value2) => value1 + value2 // must use () here for parameters

let complexFunction = () => {
    // line 1
    // line 2
    //...
}

// console.log(duplicate_arrow(3));


// big difference between es5 and es6 in functions is this keyword

const obj = {
    traditionalFunction: function () {
        console.log('traditional function', this); // value of this is obj
    },
    arrowFunction: () => {
        console.log('arrow function', this); // value of this is the environment where the function was defined
    },
    lastName: 'Gavilan'
}

console.log('this environment', this); // value of this is the environment where the function was defined
obj.traditionalFunction() // value of this is obj
obj.arrowFunction() // value of this is the environment where the function was defined



//##############    TEMPLATE STRINGS  ############################

const myName = 'Felipe Galivan'
const country = "Dominican Republic"

const greeting = "Hello, " + myName + ", how are you?"
const greeting2 = `Hello, ${myName}, how are you?`

console.log(greeting);
console.log(greeting2);

const add = (a, b) => a+b 

const message = `Hello, ${myName}
This is a message for you.

The sum of 2 and 2 is ${add(2,2)}

Bye bye
`

console.log(message );


//##############    TERNARY OPERATOR  ############################

const age = 17
// let message

// if (age >= 18){
//     message = 'You shall pass'
// } else {
//     message = 'You shall not pass'
// }


let message = (age >=18) ? 'You shall pass' : 'You shall not pass'

console.log(message);

//##############    ENHANCED OBJECT LITERALS  ############################
let lastName = 'Gavilan'
lastName = 'Marrero'
let age = 999
let date = new Date()

let propertyName = 'country'
let propertyValue = 'Mexico'

let person = {
    [propertyName]: propertyValue,
    // country: 'Dominican Republic', 
    lastName,
    age,
    date: new Date(),
    normalFunction(){
        console.log('hey');
    },
    arrowFunction: () => {
        console.log('ho');
    }

}

console.log(person.age);
person.normalFunction()
person.arrowFunction()
console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop]

console.log(returnValueFromPerson('lastName'));



//##############    DESTRUCTURING  ############################

// # FROM AN OBJECT
let person = {
    firstName: 'Felipe',
    lastName: 'Gavilan',
    age: 999,
    currentDate: new Date()

}

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age

const {firstName, lastName, age} = person

console.log(firstName, lastName, age);



// # FROM A FUNCTION

getAddress = () => {
    return {
        street: 'street1',
        country: 'country1',
        state: 'state1',
    }
}
console.log(getAddress().street);
const {street, country} = getAddress()
console.log(street);




printName = (person) => {
    console.log(person.firstName);
}

printName2 = ({firstName}) => {
    console.log(firstName);
}

printName(person)
printName2(person)




//  FROM AN ARRAY

const arr = [1,2,3,4]

const [first, second,,fourth] = arr

console.log(second);





//##############   SPREAD OPERATOR  ############################

// ARRAYS

// ex1
const sum = (a, b) => a + b
const numbers = [2, 3] 
console.log(sum(numbers[0], numbers[1]));
console.log(sum(...numbers)); // spreads the contents of numbers, one value at a time

//ex2 concatenate arrays
const moreNumbers = [1, ...numbers]
const moreNumbers2 = [1, numbers]
const moreNumbers3 = [1, ...numbers, 4, 5]
console.log(moreNumbers);
console.log(moreNumbers2);
console.log(moreNumbers3);

// ex3
const otherNumbers = [4, 5]
const concatenatedArrays = [...numbers, ...otherNumbers]
console.log(concatenatedArrays);

// ex4
const [first, ...theRemainingValues] = concatenatedArrays
console.log(first);
console.log(theRemainingValues);

//ex5 
const concatenatedArraysCloned = [...concatenatedArrays]
console.log(concatenatedArraysCloned);


// OBJECTS

//ex6
const person = {
    name: 'Felipe',
    lastName: 'Gavilan'
}
const person2 = {
    name: person,
    age: 999
}
const person2_1 = {
    ...person,
    age: 999
}

console.log(person2);
console.log(person2_1);

// ex7
//clone - change in person2 will not be in person3
const person3 = {...person2_1}
console.log(person3);


// ex8
const {age, ...person4} = person2_1
console.log(age);
console.log(person4); 




//##############   CLASSES  ############################

class Rectangle {
    constructor(height, width){
        this.height = height,
        this.width = width
    }

    area(){
        console.log(`The area of the rectangle is ${this.height * this.width}`);
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side, side) // super accesses the Rectangle class from the square class
    }
}



const rectangle1 = new Rectangle(7, 2)
const rectangle2 = new Rectangle(5, 3)
console.log(rectangle1);
console.log(rectangle1.height);
rectangle1.area()
rectangle2.area()
rectangle2.area = function(){console.log('new implmentation');}
rectangle2.area()

const square1 = new Square(5)
square1.area()


//##############   MAP FUNCTION  ############################
// ex1
const numbers = [1,2,3,4,5]
const squares = numbers.map(value => value*value)
console.log(squares);

// ex2
const people = [
    {id: 'A', name: 'Felipe', country: 'DR'},
    {id: 'B', name: 'Scott', country: 'USA'},
    {id: 'C', name: 'Jen', country: 'Canada'},
]

const ids = people.map(person => person.id)
console.log(ids);


// ex3
const divs = numbers.map(number => `<div>${number}</div>`)
console.log(divs);



//##############   PROMISES / ASYNC  ############################
{/* <script> */}
function consumableWebService(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json()) // async function that converts to json
    .catch(error => alert('error!:)'))
    .then(json => console.log(json))
}

// Alt method
async function consumableWebServiceAsync() {
    try{
        const response = await fetch("https ://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json()
        console.log(json)
    }
    catch(ex){
        alert('something bad just happened :(')
    }

  }
  // consumableWebService()
  consumableWebServiceAsync()
{/* </script> */}























































































































































































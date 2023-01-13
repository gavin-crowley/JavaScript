// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: function() {
//       console.log('hello, my name is ' + this.name)
//     },
//     doAddition: function(a, b) {
//         console.log(a+b);
//     }
//   }

const person = require('./anancarv-sol/part3/phonebook/models/person');

//   arto.doAddition(1, 4)        // 5 is printed

//   const referenceToAddition = arto.doAddition
//   referenceToAddition(10, 15)

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

// persons.forEach(person => JSON.stringify(person.name).includes(JSON.stringify(body.name)))

// console.log(persons)
console.log('hey')

// persons.forEach((person) => {
//   return console.log(person.name)
// });

// persons.map(person => console.log(person.name))
const bool = false
console.log(bool)
if (bool) {
    console.log("variable is true")
} else if (!bool) {
    console.log("variable is false")

}


//==========

const id = true
const message = id ? "valid" : "invalid"
console.log(message)

// ========

const rand = Math.floor(Math.random() * 5)
console.log(rand);

const val = 3

switch (val) {
    case 1: rand;
        break;
    case 2: rand;
        break;
    case 3: rand;
        break;
    case 4: rand;
        break;
    case 5: rand;
        break;
    case 6: rand;
        break;
    default: console.log("Error");
        break;
}

console.log(Number(0) === true);

console.log(0 ? 'odd' : 'even');
console.log(1 ? 'odd' : 'even');







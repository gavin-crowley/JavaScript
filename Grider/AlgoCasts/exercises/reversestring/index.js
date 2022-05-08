// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse1(str) {
    // turn str into an array
    const arr = str.split('')
    // call reverse method on the array
    arr.reverse()
    // join the array back into a string
    // return the result
    return arr.join('')

    // return str
    //     .split('')
    //     .reverse()
    //     .join('')
}



function reverse2(str) {
    // Create and empty string called reversed
    let reversed = ''
    // add each character to the start of reversed
    for (const character of str) {
        reversed = character + reversed
    }
    // return reversed 
    return reversed
}

function reverse3(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')
}

console.log(reverse('apple'));
module.exports = reverse;

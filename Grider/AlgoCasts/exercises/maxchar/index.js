// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common string questions
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

// const string = "Hello There!"
// const chars = {}

// for (let char of string) {
//     if (!chars[char]) {
//         chars[char] = 1
//     } else {
//         chars[char]++
//     }

//     // chars[char] = chars[char] + 1 || 1
// }

// console.log(chars);

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    // frequency mapping of string characters
    for (const char of str) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }

    // find highest frequency value and key
    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}


console.log(maxChar("abcccccccd"));

module.exports = maxChar;

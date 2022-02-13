const str = 'My name is Simon';
// const words = str.split('');// console.log(words[3]);// expected output: "fox"
const morseCode = { "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--.."}
const chars = str.toUpperCase().split('')
;console.log(chars[8])
;console.log(chars)
// expected output: "k"
const newMap = chars.map(i => { return morseCode[i]})
// expecting all of the letters to be converted into morse as indiviaul arrays console.log(newMap)
const newJoin = newMap.join(" ").replace(/\s+/g, ' ')
console.log(newJoin)
// Expecting a new array with the morse translation. // trim has removede any empty space
// I now need to get this into the webpage 
const input = document.querySelector(".input")
const output = document.querySelector(".output")
const chars2 = input.value.toUpperCase().split('')
newMap2 = chars2.map(i => { return morseCode[i]})
newJoin2 = newMap.join(" ").replace(/\s+/g, ' ')

console.log(output.textContent)
/* You’re tasked with creating a morse code translator using OOP. As an extension it should be
able to translate based on user input from the DOM.*/

/* Requirements
1. Should be built using HTML, SCSS/CSS, and JavaScript. Vanilla, no libraries
2. There should be a Github repository with regular commits
3. Should be able to translate English to Morse code and back again
4. ** extension – Should receive inputs from the HTML
*/

// Create a class for the translator 
// create a class to link the dom ? 
// 

// Need to link the text area boxes from the html input and output

// Possible object / array to hold all the morese and alphabet. 

// Could you use a switch case to work out the translation 
// POtentially the switch case could hold both the morse and aplhabet together. 

/* STARTING THE MORSE CODE TRANSLATER */



class MorseCodeTranslator {
    constructor (character) {
        this.character = character
    }

    translateEnglishToMorseCode() {
        if (this.character === "A") 
        return '.-'
        if (this.character === "B") 
        return '-...'
    }

}

const translation1 = new MorseCodeTranslator("A")
const translation2 = new MorseCodeTranslator("B")

console.log(translation1.translateEnglishToMorseCode())
console.log(translation2.translateEnglishToMorseCode())

class Test1 extends MorseCodeTranslator {
    constructor(character, string) {
    super(character)
    this.string = ""
    }

    translateEnglishToMorseCode2() {
        const encode = (text) => {
            let reference = {
                'a': '.-',
                'b': '-...',
                'c': '-.-.',
                'd': '-..',
                'e': '.>',
                'f': '..-.',
                'g': '--.',
                'h': '....',
                'i': '..',
                'j': '.---',
                'k': '-.-',
                'l': '.-..',
                'm': '--',
                'n': '-.',
                'o': '---',
                'p': '.--.',
                'q': '--.-',
                'r': '.-.',
                's': '...',
                't': '-',
                'u': '..-',
                'v': '...-',
                'w': '.--',
                'x': '-..-',
                'y': '-.--',
                'z': '--..',
                '1': '.----',
                '2': '..---',
                '3': '...--',
                '4': '....-',
                '5': '.....',
                '6': '-....',
                '7': '--...',
                '8': '---..',
                '9': '----.',
                '0': '-----',
                ' ': "&nsp"
            }
        
            // console.log(reference["e"])
            let encodeTxt = text
            .toLowerCase()
            .split("")
            .map(a => reference[a])
            .join(" ")
        
            return encodeTxt
        }
    }

}

const translation3 = new Test1("b")

console.log(translation3.translateEnglishToMorseCode2())

/*

// LINK THE INPUT FIELD AND OUTPUT FIELD TO THE DOCUMENT
const inputCharacters = document.querySelector(".input")
// input.value = "Test"
const outputCharacters = document.querySelector(".output")
// output.innerHTML = "Test"

// OBJECTs CONTAINING THE TRANSLATIONS FOR ENGLISH TO MORSE AND MORSE CODE TO ENGLISH
const englishToMorseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }

const morseCodeToEnglish = { 
    '.-':     'A',
    '-...':   'B',
    '-.-.':   'C',
    '-..':    'D',
    '.':      'E',
    '..-.':   'F',
    '--.':    'G',
    '....':   'H',
    '..':     'I',
    '.---':   'J',
    '-.-':    'K',
    '.-..':   'L',
    '--':     'M',
    '-.':     'N',
    '---':    'O',
    '.--.':   'P',
    '--.-':   'Q',
    '.-.':    'R',
    '...':    'S',
    '-':      'T',
    '..-':    'U',
    '...-':   'V',
    '.--':    'W',
    '-..-':   'X',
    '-.--':   'Y',
    '--..':   'Z',
    
  }




// CREATE A CLASS TO TRANSLATE THE MORSE CODE

class EnglishToMorseCode {
    constructor(english, morse) {

    this.englishInput = english
    this.morseCodeOutput = morse
    
    }

    // Need to add a method for the translation

    

}


    
    
    
    /*

    document.getElementById("translate").addEventListener("click", () => {

    const inputCharacters = document.querySelector(".input")
    const outputCharacters = document.querySelector(".output")

    input = inputCharacters.value;
    outputCharacters.value = "";
    output = "";

       for(let i = 0; i < input.length; i++){
		switch(input[i]) {
			case "a":
			output += ".- ";
			break;
			case "b":
			output += "-... ";
			break;
			case "c":
			output += ".-.- ";
			break;
			case "d":
			output += "-.. ";
			break;
			case "e":
			output += ". ";
			break;
			case "f":
			output += "..-. ";
			break;
			case "g":
			output += "--. ";
			break;
			case "h":
			output += ".... ";
			break;
			case "i":
			output += ".. ";
			break;
			case "j":
			output += ".--- ";
			break;
			case "k":
			output += "-.- ";
			break;
			case "l":
			output += ".-.. ";
			break;
			case "m":
			output += "-- ";
			break;
			case "n":
			output += "-. ";
			break;
			case "o":
			output += "--- ";
			break;
			case "p":
			output += ".--. ";
			break;
			case "q":
			output += "--.- ";
			break;
			case "r":
			output += ".-. ";
			break;
			case "s":
			output += "... ";
			break;
			case "t":
			output += "- ";
			break;
			case "u":
			output += "..- ";
			break;
			case "v":
			output += "...- ";
			break;
			case "w":
			output += ".-- ";
			break;
			case "x":
			output += "-..- ";
			break;
			case "y":
			output += "-.-- ";
			break;
			case "z":
			output += "--.. ";
			break;
			case "0":
			output += "----- ";
			break;
			case "1":
			output += ".---- ";
			break;
			case "2":
			output += "..--- ";
			break;
			case "3":
			output += "...-- ";
			break;
			case "4":
			output += "....- ";
			break;
			case "5":
			output += "..... ";
			break;
			case "6":
			output += "-.... ";
			break;
			case "7":
			output += "--... ";
			break;
			case "8":
			output += "---.. ";
			break;
			case "9":
			output += "----. ";
			break;
			case ",":
			output += "--..-- ";
			break;
			case ".":
			output += ".-.-.- ";
			break;
			case "?":
			output += "..--.. ";
			break;
			case "\'":
			output += ".----. ";
			break;
			case "/":
			output += "-..-. ";
			break;
			case "\"":
			output += ".-..-. ";
			break;
			case "(":
			output += "-.--.- ";
			break;
			case ")":
			output += "-.--.- ";
			break;
			case "=":
			output += "-...- ";
			break;
			case ":":
			output += "---... ";
			break;
		}
		outputCharacters.value = output;
	}

    })
    
}
}

    */

const input = document.querySelector(".input")
const output = document.querySelector(".output")
const button = document.querySelector(".translate")

const morseCode = { "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--.."}

button.addEventListener("click", () => {
    chars = input.value.toUpperCase().split("")
    charsArr = chars.map(i => {
        return morseCode[i]
    })
    // console.log(charsArr)
    morseArr = charsArr.join(" ").replace(/\s+/g, ' ')
    output.textContent = morseArr
})




class MorseCodeTranlator {
    constructor(string, output) {
        this.string = string
        this.morseCode = { "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--.."} 
        this.output = output
    }

    translationEngishToMorse() {
        console.log(this.string.toUpperCase().split("")
        .map(i => {return morseCode[i]})
        .join(" ")
        .replace(/\s+/g, ' '))

        this.string.toUpperCase().split("")
        .map(i => {return morseCode[i]})
        .join(" ")
        .replace(/\s+/g, ' ')
       
    }

   

}



const translation1 = new MorseCodeTranlator("My Name is Simon")
const translation2 = new MorseCodeTranlator("Becky")
// expected output "-- -.-- -. .- -- . .. ... ... .. -- --- -."

translation1.translationEngishToMorse()
// expected output "-- -.-- -. .- -- . .. ... ... .. -- --- -."
translation2.translationEngishToMorse()
// expected output "-... . -.-. -.- -.--."



class MorseCodeTranlator {
    constructor(string, output) {
        this.string = string
        this.morseCode = { "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--.."} 
        this.output = output
    }

    translationEngishToMorse() {
        console.log(this.string.toUpperCase().split("")
        .map(i => {return morseCode[i]})
        .join(" ")
        .replace(/\s+/g, ' '))

        this.string.toUpperCase().split("")
        .map(i => {return morseCode[i]})
        .join(" ")
        .replace(/\s+/g, ' ')
       
    }

   

}


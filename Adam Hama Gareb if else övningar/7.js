var ps = require("prompt-sync")
var prompt = ps()

let konsonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

let vokal = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö']

let storKonsonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

let storVokal = ['A', 'E', 'I', 'O', 'U', 'Y', 'Å', 'Ä', 'Ö']

let specialtecken = ['!', '"', '#', '¤', '%', '&', '/', '(', ')', '=', '?', '`', '^', '*', '¨', "'", ',', '.', '-', ';', ':', '_', '<', '>', '@', '£', '$', '€', '{', '[', ']', '}', '§', '½', '|']

function autoConvert(input) {
    var isNumber = parseInt(input)
    if (isNaN(isNumber)) {
        return input
    } else {
        return isNumber
    }
}

let input = autoConvert(prompt("Skriv något: "))

if (konsonant.includes(input)){
    console.log("Detta är en konsonant, som också är en liten bokstav")
}
else if (vokal.includes(input)){
    console.log("Detta är en vokal, som också är en liten bokstav")
}
else if (isNaN(input) === false){
    console.log("\nDetta är ett nummer")

    if (input < 0) {
        console.log("Som är negativt")
    }
    else{
        console.log("Som är heltal")
    }

    inputCheck = input / 2

    if(Number.isInteger(inputCheck)){
        console.log("och är jämnt tal")
    }
    else if(!(Number.isInteger(inputCheck))){
        console.log("och är udda tal")
    }
}
else if (storKonsonant.includes(input)) {
    console.log("Detta är en konsonant, som är stor bokstav")
}
else if (storVokal.includes(input)){
    console.log("Detta är en vokal, som är stor bokstav")
}
else if (specialtecken.includes(input)){
    console.log("Detta är specialtecken")
}
else {
    console.log("Ogiltig input")
}
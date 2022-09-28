var ps = require("prompt-sync");
var prompt = ps()

let number1 = parseInt(prompt("Skriv ett nummer: "))

let number2 = parseInt(prompt("Skriv ett annat nummer: "))

let number3 = parseInt(prompt("Skriv en sista nummer: "))

if (number1 > number2 && number1 > number3){
    console.log(number1 + " är största talet")
}
else if (number1 < number2 && number3 < number2){
    console.log(number2 + " är största talet")
}
else{
    console.log(number3 + " är största talet")
}
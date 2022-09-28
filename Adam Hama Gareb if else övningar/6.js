var ps = require("prompt-sync")
var prompt = ps()

let number1 = parseInt(prompt("Skriv ett nummer: "))

let number2 = parseInt(prompt("Skriv ett annat nummer: "))

let number3 = parseInt(prompt("Skriv ett sista nummer: "))

if (number1 < number3 && number2 < number3 && number1 < number2){
    console.log("Numren ökar")
}
else if (number3 < number1 && number2 < number1 && number3 < number2){
    console.log("Numren minskar")
}
else{
    console.log("inget av dem")
}
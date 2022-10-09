var ps = require("prompt-sync")
var prompt = ps()

let input = parseInt(prompt("Skriv in hur mycket kW som förbrukats: "));

//Berkäningarna
let first50 = input * 0.5

let first150 = input * 0.77

let first250 = input * 1.3

let tjugoProcent = input * 0.2

let moreThan250_1 = input * 1.7

let moreThan250_20Procent = moreThan250_1 * 0.2

let moreThan250_2 = moreThan250_1 + moreThan250_20Procent

if(input >= 1 && input <= 50){
    console.log("Priset är 0.5kr/kW, vilket blir " + first50 + "kr")
}
else if(input >= 51 && input <= 150){
    console.log("Priset är 0.77kr/kW, vilket blir " + first150 + "kr")
}
else if(input >= 151 && input <= 250){
    console.log("Priset är 1.3kr/kW, vilket blir " + first250 + "kr")
}
else if(input > 250){
    console.log("Priset är 1.7kr/kW och 20% av hela priset, vilket blir " + moreThan250_2 + "kr")
}
else{
    console.log("Verkar ej vara ett nummer. Skriv igen")
}
var ps = require("prompt-sync");
var prompt = ps();

let number1 = parseInt(prompt("Skriv ett nummer: "));

let number2 = parseInt(prompt("Skriv ett annat nummer: "));

let number3 = parseInt(prompt("Skriv en sista nummer: "));



//ordning 2 1 3
if (number2 < number3 && number1 < number3 && number2 < number1){
    console.log("\nOrdningen på numren är:\n" + number2 + " " + number1 + " " + number3)
}
//ordning 1 2 3
else if (number2 < number3 && number1 < number3 && number2 < number3){
    console.log("\nOrdningen på numren är:\n" + number1 + " " + number2 + " " + number3)
}
//ordning 1 3 2
else if (number1 < number2 && number3 < number2 && number1 < number3){
    console.log("\nOrdningen på numren är:\n" + number1 + " " + number3 + " " + number2)
}
//ordning 3 1 2
else if (number3 < number2 && number1 < number2 && number3 < number1) {
    console.log("\nOrdningen på numren är:\n" + number3 + " " + number1 + " " + number2)
}
//ordning 3 2 1
else if (number3 < number1 && number2 < number1 && number3 < number2){
    console.log("\nOrdningen på numren är:\n" + number3 + " " + number2 + " " + number1)
}
//ordning 2 3 1
else if (number2 < number1 && number3 < number1 && number2 < number3){
    console.log("\nOrdningen på numren är:\n" + number2 + " " + number3 + " " + number1)
}
else{
    console.log("Nu blev något fel. Försök igen")
}
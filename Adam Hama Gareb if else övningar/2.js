var ps = require("prompt-sync");
var prompt = ps();

let ar = parseInt(prompt("Skriv ett år för att se om det är ett skottår: "))

testSkottar = ar / 4

if (Number.isInteger(testSkottar)){
    console.log("Det är ett skottår!")
}
else {
    console.log("Det är inte ett skottår")
}
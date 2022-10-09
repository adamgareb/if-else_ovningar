var ps = require("prompt-sync")
var prompt = ps()

console.log("Skriv tre sidors längd av en triangel, och programmet kommer att se ifall det är giltigt eller inte")

let a = prompt("Skriv första sidans längd: ")

let b = prompt("Skriv andra sidans längd: ")

let c = prompt("Skriv tredje sidans längd: ")

if(a < b + c){
    console.log("Giltig")
}
else if(b < a + c){
    console.log("Giltig")
}
else if(c < b + a){
    console.log("Giltig")
}
else{
    console.log("Ogiltig")
}
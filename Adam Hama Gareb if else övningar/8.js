//Denna koden utgår från en 2022 kalender

var ps = require("prompt-sync")
var prompt = ps()

let dagar = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11 ,12, 13]

let dag = prompt("Skriv ett nummer på datum: ")

let manad = prompt("Nu skriv månaden för datumet: ")

//januari / februari
if(dag >= 3 && dag <= 9 && manad == "januari"){
    console.log("Det är vecka 1")
}
else if(dag >= 10 && dag <= 16 && manad == "januari"){
    console.log("Det är vecka 2")
}
else if(dag >= 17 && dag <= 23 && manad == "januari"){
    console.log("Det är vecka 3")
}
else if(dag >= 24 && dag <= 30 && manad == "januari"){
    console.log("Det är vecka 4")
}
else if((dag == 31 && manad == "januari") || (dag >= 1 && dag <= 6 && manad == "februari")){
    console.log("Det är vecka 5")
}
//februari / mars
else if(dag >= 7 && dag <= 13 && manad == "februari"){
    console.log("Det är vecka 6")
}
else if(dag >= 14 && dag <= 20 && manad == "februari"){
    console.log("Det är vecka 7")
}
else if(dag >= 21 && dag <= 27 && manad == "februari"){
    console.log("Det är vecka 8")
}
else if((dag == 28 && manad == "februari") || (dag >= 1 && dag <= 6 && manad == "mars")){
    console.log("Det är vecka 9")
}
//mars / april
else if(dag >= 7 && dag <= 13 && manad == "mars"){
    console.log("Det är vecka 10")
}
else if(dag >= 14 && dag <= 20 && manad == "mars"){
    console.log("Det är vecka 11")
}
else if(dag >= 21 && dag <= 27 && manad == "mars"){
    console.log("Det är vecka 12")
}
else if((dag >= 28 && dag <= 31 && manad == "mars") || (dag >= 1 && dag <= 3 && manad == "april")){
    console.log("Det är vecka 13")
}
//april / maj
else if(dag >= 4 && dag <= 10 && manad == "april"){
    console.log("Det är vecka 14")
}
else if(dag >= 4 && dag <= 10 && manad == "april"){
    console.log("Det är vecka 14")
}
else if(dag >= 11 && dag <= 17 && manad == "april"){
    console.log("Det är vecka 15")
}
else if(dag >= 18 && dag <= 24 && manad == "april"){
    console.log("Det är vecka 16")
}
else if((dag >= 25 && dag <= 30 && manad == "april") || (dag == 1 && manad == "maj")){
    console.log("Det är vecka 17")
}
//maj / juni
else if(dag >= 2 && dag <= 8 && manad == "maj"){
    console.log("Det är vecka 18")
}
else if(dag >= 9 && dag <= 15 && manad == "maj"){
    console.log("Det är vecka 19")
}
else if(dag >= 16 && dag <= 22 && manad == "maj"){
    console.log("Det är vecka 20")
}
else if(dag >= 23 && dag <= 29 && manad == "maj"){
    console.log("Det är vecka 21")
}
else if((dag >= 30 && dag <= 31 && manad == "maj") || (dag >= 1 && dag <= 5 && manad == "juni")){
    console.log("Det är vecka 22")
}
//juni / juli
else if(dag >= 6 && dag <= 12 && manad == "juni"){
    console.log("Det är vecka 23")
}
else if(dag >= 13 && dag <= 19 && manad == "juni"){
    console.log("Det är vecka 24")
}
else if(dag >= 20 && dag <= 26 && manad == "juni"){
    console.log("Det är vecka 25")
}
else if((dag >= 27 && dag <= 30 && manad == "juni") || (dag >= 1 && dag <= 3 && manad == "juli")){
    console.log("Det är vecka 26")
}
//juli / augusti
else if(dag >= 4 && dag <= 10 && manad == "juli"){
    console.log("Det är vecka 27")
}
else if(dag >= 11 && dag <= 17 && manad == "juli"){
    console.log("Det är vecka 28")
}
else if(dag >= 18 && dag <= 24 && manad == "juli"){
    console.log("Det är vecka 29")
}
else if(dag >= 25 && dag <= 31 && manad == "juli"){
    console.log("Det är vecka 30")
}
//augusti / september
else if(dag >= 1 && dag <= 7 && manad == "augusti"){
    console.log("Det är vecka 31")
}
else if(dag >= 8 && dag <= 14 && manad == "augusti"){
    console.log("Det är vecka 32")
}
else if(dag >= 15 && dag <= 21 && manad == "augusti"){
    console.log("Det är vecka 33")
}
else if(dag >= 22 && dag <= 28 && manad == "augusti"){
    console.log("Det är vecka 34")
}
else if((dag >= 29 && dag <= 31 && manad == "augusti") || (dag >= 1 && dag <= 4 && manad == "september")){
    console.log("Det är vecka 35")
}
//september / oktober
else if(dag >= 5 && dag <= 11 && manad == "september"){
    console.log("Det är vecka 36")
}
else if(dag >= 12 && dag <= 18 && manad == "september"){
    console.log("Det är vecka 37")
}
else if(dag >= 19 && dag <= 25 && manad == "september"){
    console.log("Det är vecka 38")
}
else if((dag >= 26 && dag <= 30 && manad == "september") || (dag >= 1 && dag <= 2 && manad == "oktober")){
    console.log("Det är vecka 39")
}
//oktober / november
else if(dag >= 3 && dag <= 9 && manad == "oktober"){
    console.log("Det är vecka 40")
}
else if(dag >= 10 && dag <= 16 && manad == "oktober"){
    console.log("Det är vecka 41")
}
else if(dag >= 17 && dag <= 23 && manad == "oktober"){
    console.log("Det är vecka 42")
}
else if(dag >= 24 && dag <= 30 && manad == "oktober"){
    console.log("Det är vecka 43")
}
else if((dag == 31 && manad == "oktober") || (dag >= 1 && dag <= 6 && manad == "november")){
    console.log("Det är vecka 44")
}
//november / december
else if(dag >= 7 && dag <= 13 && manad == "november"){
    console.log("Det är vecka 45")
}
else if(dag >= 14 && dag <= 20 && manad == "november"){
    console.log("Det är vecka 46")
}
else if(dag >= 21 && dag <= 27 && manad == "november"){
    console.log("Det är vecka 47")
}
else if((dag >= 28 && dag <= 30 && manad == "november") || (dag >= 1 && dag <= 4 && manad == "december")){
    console.log("Det är vecka 48")
}
//december / januari
else if(dag >= 5 && dag <= 11 && manad == "december"){
    console.log("Det är vecka 49")
}
else if(dag >= 12 && dag <= 18 && manad == "december"){
    console.log("Det är vecka 50")
}
else if(dag >= 19 && dag <= 25 && manad == "december"){
    console.log("Det är vecka 51")
}
else if((dag >= 26 && dag <= 31 && manad == "december") || (dag >= 1 && dag <= 2 && manad == "januari")){
    console.log("Det är vecka 52")
}

else{
    console.log("Verkar inte vara giltig datum eller månad")
}
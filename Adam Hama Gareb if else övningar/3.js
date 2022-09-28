var ps = require("prompt-sync")
let prompt = ps()

let thirtyonedays = ['januari', 'mars', 'maj', 'juli', 'augusti', 'oktober', 'december'];
let thirtydays = ['april', 'juni', 'september', 'november'];

let manad = prompt("Skriv in en månad för att se hur många dagar det finns den månaden: ");

let ar = prompt("Skriv in år på den månaden: ");

new_ar = ar / 4

if (thirtyonedays.includes(manad)){
    console.log("Det är 31 dagar i den månaden")
}
else if (thirtydays.includes(manad)){
    console.log("Det är 30 dagar i den månaden")
}
else if (manad == 'februari' && Number.isInteger(new_ar)){
    console.log("Det är 29 dagar den månaden")
}
else if (manad == 'februari' && !(Number.isInteger(new_ar))){
    console.log("Det är 28 dagar i den månaden") 
}
else {
    console.log("Det verkar inte vara en månad eller år du skrev i början. Testa igen")
}
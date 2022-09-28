var ps = require("prompt-sync");
var prompt = ps();

let interval_start = parseInt(prompt("Give starting number interval: "));
let interval_end = parseInt(prompt("Give the ending number of interval: "));
let interval_number = parseInt(prompt("Now just give a number: "));

if (interval_number <= interval_end && interval_number >= interval_start) {
    console.log("Inom intervall");
}
else {
    console.log("Utanför intervall");
}


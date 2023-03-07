var prompt = require('prompt-sync')();

let min = prompt('Enter the minutes: ');

let seconds = prompt('Enter the seconds: ');

setInterval(function() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        min--;
    }

    if (10 > seconds) {
        seconds = '0' + seconds;
    }
    console.log(min + ':' + seconds);
} , 1000);

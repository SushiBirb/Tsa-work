const prompt = require("prompt-sync")({
    sigint: true
});

var input = prompt("Enter a number: ");

//determine if input is a prime number
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

//outptut if input is a prime number
if (isPrime(input)) {
    console.log(input + " is a prime number.");
} else {
    console.log( input + " is not a prime number.");
}
const prompt = require("prompt-sync")({
    sigint: true
});
//get input from user
var input = prompt("what is your panagram? ");

//display input
console.log("Your panagram is " + input + ".");

//remove spaces from input
var noSpaces = input.replace(/\s/g, '');

//convert input to lowercase
var lowerCase = noSpaces.toLowerCase();

//remove punctuation from input
var noPunc = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

//list of every letter in alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//convert input to array
var inputArray = noPunc.split("");

//convert alphabet to array
var alphabetArray = alphabet.split("");

//create empty array to hold letters not in input
var missingLetters = [];

//loop through alphabet array
for (var i = 0; i < alphabetArray.length; i++) {
    //if letter is not in input array
    if (inputArray.indexOf(alphabetArray[i]) == -1) {
        //add letter to missingLetters array
        missingLetters.push(alphabetArray[i]);
    }
}

//convert missingLetters array to string
var missingLettersString = missingLetters.join("");



//if there are no missing letters
if (missingLettersString == "") {
    //display message
    console.log("This is a panagram!");
} else {
    //display message
    console.log("This is not a panagram. The missing letters are " + missingLettersString + ".");
}

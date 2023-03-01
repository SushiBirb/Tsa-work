const prompt = require("prompt-sync")({
    sigint: true
});
//get current time
var d = new Date();
var n = d.getTime();
//get time in hours and minutes
var hours = d.getHours();
var minutes = d.getMinutes();

//determine if time is AM or PM
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;

//prompt user for input on how many hours to add or subtract

var input = prompt("Enter number of hours to add or subtract from current time.");

//convert input to number
var num = Number(input);
//add or subtract input from current time
var newTime = n + (num * 3600000);
//convert new time to date
var newDate = new Date(newTime);
//get new time in hours and minutes
var newHours = newDate.getHours();
var newMinutes = newDate.getMinutes();
//determine if new time is AM or PM
var newAmpm = newHours >= 12 ? 'PM' : 'AM';
newHours = newHours % 12;
newHours = newHours ? newHours : 12; // the hour '0' should be '12'
newMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes;
var newStrTime = newHours + ':' + newMinutes + ' ' + newAmpm;

//display current time and new time
console.log("Current time is " + strTime + ". New time is " + newStrTime + ".");

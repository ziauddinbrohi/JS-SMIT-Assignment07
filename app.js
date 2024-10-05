// // WITH METHODS

var string = prompt("Enter a string to check if it is a palindrome:");
var lower = string.toLowerCase();
var reversedString = lower.split('').reverse().join('');
if (lower === reversedString) {
    alert(string + " is a palindrome.");
} else {
    alert(string + " is not a palindrome.");
}


// WITHOUT METHOD
var string = prompt("Enter a string to check if it is a palindrome:");
var lower = string.toLowerCase();
var reversedString = "";

for (var i = lower.length - 1; i >= 0; i--) {
    reversedString += lower[i];
}

if (lower === reversedString) {
    alert(string + " is a palindrome.");
} else {
    alert(string + " is not a palindrome.");
}


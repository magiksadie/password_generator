// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

//Vars - character types
var lowerCaseCharacter = "abcdefgijklmnopqrstuvwxyz";
var upperCaseCharacter = String.fromCharCode(65-90);
var numberCharacter = String.fromCharCode(48-57);
var specialCharacter = String.fromCharCode((33-47) + (58-91));
var allChars = "";
var password = "";
var passwordLength = 0;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var special = false;
var nonNumericCharacters = [];

//generate password function
function generatePassword() {
  console.log("Button has been clicked."); 
//1: Prompt user for password criteria
alert("Welcome! Let's create a randomly generated password for you!");
//  a. password length 8-128
passwordLength = parseInt(
  prompt("How long would you like your password? Type a value between 8 - 128.")
);
while (!passwordLength) {
  passwordLength = parseInt(prompt("Please enter a numeric value between 8-128!"))
};
if (passwordLength < 8 || passwordLength > 128 || !passwordLength || isNaN(passwordLength)) {
  alert("Invalid entry!");
  console.log("Invalid numeric entry.");
}
else {
  console.log("Valid numeric entry.");
}
//  b. character types
//  b. 1. lowercase
var lowerCasePrompt = prompt("Would you like to include lowercase? Type 'yes' or 'no'.");
if (lowerCasePrompt.trim().toLowerCase() === "yes") {
  lowerCase = true;
  nonNumericCharacters.push(lowerCaseCharacter.split(""));
}

//  b. 2. uppercase
var upperCasePrompt = prompt("Would you like to include uppercase? Type 'yes' or 'no'.");
if (upperCasePrompt.trim().toLowerCase() === "yes") {
  upperCase = true;
}

//  b. 3. numeric
var numberCharacterPrompt = prompt("Would you like to include numeric values? Type 'yes' or 'no'.");
if (numberCharacterPrompt.trim().toLowerCase() === "yes") {
  numbers = true;
}
//  b. 4. special characters
var specialCharacterPrompt = prompt("How about special characters? '!@#$' Type 'yes' or 'no'.");
if (specialCharacterPrompt.trim().toLowerCase() === "yes") {
  special = true;
}
//2: Validate user input. at least one character type should be selected
if (!lowerCase && !upperCase && !numbers && !special) {
  alert("Must select at least one input!");
}
//3: Generate password


// for loop
for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * allChars.length);
  var char = allChars.charAt(index);
  password += char;
}

//4: Display generated password on page
  return "Generated password will go here."; //PLACEHOLDER RETURN VALUE!!!
}
 
// Write password to the #password input displays on password card
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

//generate password function
function generatePassword() {
  console.log("Button has been clicked."); 
//1: Prompt user for password criteria
alert("Welcome! Let's create a randomly generated password for you!");
//  a. password length 8-128
var passwordLength = parseInt(
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
prompt("Would you like to include lowercase? Type 'yes' or 'no'.");
//  b. 2. uppercase
prompt("Would you like to include uppercase? Type 'yes' or 'no'.");
//  b. 3. numeric
prompt("Would you like to include numeric values? Type 'yes' or 'no'.");
//  b. 4. special characters
prompt("How about special characters? '!@#$' Type 'yes' or 'no'.");
//2: Validate user input. at least one character type should be selected

//3: Generate password

//Vars - character types
var lowerCase = String.fromCharCode(97-122);
var upperCase = String.fromCharCode(65-90);
var numberCharacter = String.fromCharCode(48-57);
var specialCharacter = String.fromCharCode((33-47) + (58-91));

console.log(lowerCase, upperCase, numberCharacter, specialCharacter);

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

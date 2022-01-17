// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

//generate password function
function generatePassword() {
  console.log("Button has been clicked."); 
//1: Prompt user for password criteria
//  a. password length 8-128
prompt("How long would you like your password? Type a value between 8 - 128.");
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

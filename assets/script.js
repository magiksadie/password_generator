// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

//Vars - character types
var baseCharacters = "";
var numberCharacter = "0123456789";
var lowerCaseCharacter = "abcdefgijklmnopqrstuvwxyz";
var upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*()-=+/?.,><";
var password = "";
var passwordLength = 0;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var special = false;

//generate password function
function generatePassword() {
  //1: Prompt user for password criteria
  alert("Welcome! Let's create a randomly generated password for you!");
  //  a. password length 8-128
  passwordLength = parseInt(
    prompt("How long would you like your password? Type a value between 8 - 128.")
  );
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength || isNaN(passwordLength)) {
    alert("Invalid entry!");
  }
  while (passwordLength < 8 || passwordLength > 128 || !passwordLength || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("Please enter a numeric value between 8-128!"));
  };
  //  b. character types
  //  b. 1. lowercase
  var lowerCasePrompt = prompt("Would you like to include lowercase? Type 'yes' or 'no'.");
  if (lowerCasePrompt.trim().toLowerCase() === "yes") {
    lowerCase = true;
    baseCharacters = baseCharacters.concat(lowerCaseCharacter);
  }

  //  b. 2. uppercase
  var upperCasePrompt = prompt("Would you like to include uppercase? Type 'yes' or 'no'.");
  if (upperCasePrompt.trim().toLowerCase() === "yes") {
    upperCase = true;
    baseCharacters = baseCharacters.concat(upperCaseCharacter);
  }

  //  b. 3. numeric
  var numberCharacterPrompt = prompt("Would you like to include numeric values? Type 'yes' or 'no'.");
  if (numberCharacterPrompt.trim().toLowerCase() === "yes") {
    numbers = true;
    baseCharacters = baseCharacters.concat(numberCharacter);
  }
  //  b. 4. special characters
  var specialCharacterPrompt = prompt("How about special characters? '!@#$' Type 'yes' or 'no'.");
  if (specialCharacterPrompt.trim().toLowerCase() === "yes") {
    special = true;
    baseCharacters = baseCharacters.concat(specialCharacter);
  }
  //2: Validate user input. at least one character type should be selected
  if (!lowerCase && !upperCase && !numbers && !special) {
    alert("Must select at least one input!");
    return null;
  }
  //3: Generate password
  // for loop
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * baseCharacters.length);
    var char = baseCharacters.charAt(index);
    password += char;
  }

  //4: Display generated password on page
    return password; //return value
}
// Write password to the #password input displays on password card
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
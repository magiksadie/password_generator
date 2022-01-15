
//generate password function
function generatePassword() {
  console.log("Button has been clicked.")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

// Write password to the #password input displays on password card
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

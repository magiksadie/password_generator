// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

//generate password function
function generatePassword() {
  console.log("Button has been clicked."); 
//1: Prompt user for password criteria
//  a. password length 8-128
//  b. lowercase, uppercase, special characters

//2: Validate user input

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

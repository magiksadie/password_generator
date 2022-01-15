//generate password function


// random # generator
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
};

function setLength() {
//randNumber window prompt
  var input = window.prompt("What length would you like your password? Select between 8-128 characters");
  var inputLength = parseInt(input);
  //set min, max
  if (inputLength >= 8 && inputLength <= 128) {
    var length = inputLength;
  } else {
    //else user doesn't input correct value
    window.alert(
      "Incorrect Length! You entered: " + //user input
        inputLength +
        ". Please enter a number between 8 and 128."
    );
    var length = setLength();
  }
  return length;
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generte id = red button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

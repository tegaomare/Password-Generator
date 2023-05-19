// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//DATA
var uppercaseCharCodes = pushToArray(65, 90);
var lowercaseCharCodes = pushToArray(97, 122);
var numCharCodes = pushToArray(48, 57);
var symbolCharCodes = pushToArray(33,47).concat(pushToArray(58,64));

var uppercaseLetters = uppercaseCharCodes.map(code => String.fromCharCode(code));
var lowercaseLetters = lowercaseCharCodes.map(code => String.fromCharCode(code));
var numbers = numCharCodes.map(code => String.fromCharCode(code));
var symbols = symbolCharCodes.map(code => String.fromCharCode(code));

// FUNCTIONS
function pushToArray(lowNum, highNum) {
  var array = []
  for (var i = lowNum; i <= highNum; i++) {
    array.push(i)
  }
  return array
};


function generatePassword() {

  var password = ""
  var charAmount = Number(prompt("Select a character count between 8 and 128: "));
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeNum = confirm("Do you want to include number characters?");
  var includeSymbol = confirm("Do you want to include symbol characters?");

  passwordCharacters = [];
  if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters)
  };
  if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters)
  };
  if (includeNum) {
    passwordCharacters = passwordCharacters.concat(numbers)
  };
  if (includeSymbol) {
    passwordCharacters = passwordCharacters.concat(symbols)
  };

  for (i = 0; i < charAmount; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password = password + passwordCharacters[randomIndex]
  }
  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// EVENT LISTENER
generateBtn.addEventListener("click", writePassword);
// Assignment code here

function generatePassword() {
    // Make this an object maybe? Nah for now
    //var passparams = {
    var passwordLength = prompt("Please input a password length (at least 8 characters but no more than 128 characters).");
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?");
    // };
    // var generatedPass = "JustTesting";
  
    //just logging to confirm if result of confirm is bool....
    // console.log(includeLowercase);
  
      //check inputs
    // the password needs to be a valid length 
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Password length invalid. Please enter number between 8 and 128.");
    }
  
    // make function to make the actual password and call it only if tests check out
    var generatedPass = [];
    var eligiblevalues = [];
    var specialCharsString = "!@#$%^&*(){}[]=<>/,.";
    //var specialChars = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //how to use ALL special chars in string since everything you would need to escape them is in the string? Evil! ;/
    var lowercaseCharsString = "abcdefghijklmnopqrstuvwxyz";
    var numbersString = "0123456789";
    var uppercaseCharsString = lowercaseCharsString.toUpperCase();
  
    //convert all of the strings of stuff into arrays
    var specialCharArray = specialCharsString.split('');
    var lowercaseArray = lowercaseCharsString.split('');
    var numbersArray = numbersString.split('');
    var uppercaseArray = uppercaseCharsString.split('');
  
    //&& includeUppercase && includeNumeric  & includeSpecial)
  
    //lowercase
    if (includeLowercase)  {
      eligiblevalues.push(...lowercaseArray);
    }
  
    //uppercase
    if (includeUppercase) {
      eligiblevalues.push(...uppercaseArray);
    }
  
    //numbers
    if (includeNumeric) {
      eligiblevalues.push(...numbersArray);
    }
  
    //specialchars
    if (includeSpecial) {
      eligiblevalues.push(...specialCharArray);
    }
  
    // Just confirming that our new array has what it needs
    // console.log(eligiblevalues);
  
    //Now we make a password from the magic sauce we made
  
    for(var i = 0; i < passwordLength; i++) {
      //use a random number to select from arrays/strings up to the length
      generatedPass.push((eligiblevalues[Math.floor(Math.random() * eligiblevalues.length)]));
    }
  
    //return the pretty password
    return(generatedPass.join(''));
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
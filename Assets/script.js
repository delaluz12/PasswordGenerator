// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var userChoices = {
        lengthOfPassword: 0,
        lowercase: false,
        uppercase: false,
        numbers: false,
        specialChars: false
    };
    //prompt user for length of password  
    var length = prompt("How many characters in your password? The length of your password must be between 8 and 128");
    userChoices.lengthOfPassword = Number(length);
    // Confirm that password length meets requirements 
    while (userChoices.lengthOfPassword > 128 || userChoices.lengthOfPassword < 8) {
        alert("Password length invalid. Please try again.");
        var length = prompt("How many characters in your password? The length of your password must be between 8 and 128");
        userChoices.lengthOfPassword = Number(length);
    };
    //prompt user to pick which characters to include in password
    userChoices.lowercase = confirm("Would you like to include lowercase letters?");
    userChoices.uppercase = confirm("Would you like to include uppercase letters?");
    userChoices.numbers = confirm("Would you like to include numebrs?");
    userChoices.specialChars = confirm("Would you like to include special characters?");

    var password = generatePassword(userChoices);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};
function generatePassword(userChoices) {
    //Character type variables
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var numbers = '0123456789'
    var specialChars = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'

    // build password from user choices
    let password = '';
    let passwordOptions = '';

    if (userChoices.lowercase); {
        passwordOptions += lowerCase;
    };
    if (userChoices.upperCase); {
        passwordOptions += upperCase;
    };
    if (userChoices.numbers); {
        passwordOptions += numbers;
    };
    if (userChoices.specialChars); {
        passwordOptions += specialChars;
    };
    
    for (let i = 0; i < userChoices.lengthOfPassword; i++) {
      password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
    }
    return password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
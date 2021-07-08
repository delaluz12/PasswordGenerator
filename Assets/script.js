// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //create object of user choices
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
    userChoices.numbers = confirm("Would you like to include numbers?");
    userChoices.specialChars = confirm("Would you like to include special characters?");

    //pass in User selections of which characters to include
    var password = generatePassword(userChoices);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};
function generatePassword(userChoices) {
    //Character type variables
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var numbers = '0123456789'
    var specialChars = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

    // build random password from user choices plus adding guarenteed chars selected by User
    var password = '';
    var passwordOptions = '';
    var guarenteed = [];

    if (userChoices.lowercase); {
        passwordOptions += lowerCase;
        guarenteedChars(lowerCase);
    };
    if (userChoices.upperCase); {
        passwordOptions += upperCase;
        guarenteedChars(upperCase);
    };
    if (userChoices.numbers); {
        passwordOptions += numbers;
        guarenteedChars(numbers);
    };
    if (userChoices.specialChars); {
        passwordOptions += specialChars;
        guarenteedChars(specialChars);
    };

    for (let i = 0; i < userChoices.lengthOfPassword; i++) {
        password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
    };
    password = password.split("");

    //for-loop to loop through password and add char types selected by user
    for (let i = 0; i < guarenteed.length; i++) {
        password[i] = guarenteed[i];

    };
    return password.join("");
    
    function guarenteedChars(x) {
        guarenteed.push(x[Math.floor(Math.random() * x.length)]);
    };
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
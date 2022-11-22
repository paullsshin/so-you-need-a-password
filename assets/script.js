
// Assignment code here
// creating list of variables for password options
function generatePassword () {
    var numbers = [1,2,3,4,5,6,7,8,9,0];
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var special = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","|",";",":","'",",","<",".",".",">","/","?"];
    var long = [];

    // after list has been made then I need to set parameters for the password
    // this first one will determine ther length of the password
    characterLength = prompt("How many characters would you like to have in your password? Please choose a number between 8 and 128 characters.");
    if (characterLength < 8 || characterLength > 128) {
        prompt("Please choose a valid number between 8 and 128!");
    } else if (isNaN(characterLength)) {
         prompt ("Please enter a valid number digit.");
        //  added another parameter for if the user decides to "type" the number
    }
    // adding confirms to each option to gather info on what kind of password the user wants
    digits = confirm ("Would you like to have numbers in your password?");
    small = confirm ("Would you like to have lower case letters in your password?");
    big = confirm ("Would you like to have upper case letters in your password?");
    characters = confirm ("Would you like to have special characters in your password?");


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

// Assignment code here
// creating list of variables for password options
function generatePassword () {
    var numbers = [1,2,3,4,5,6,7,8,9,0];
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var special = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","|",";",":","'",",","<",".",".",">","/","?"];
    var long = [];

    // after list has been made then I need to set parameters for the password

    
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
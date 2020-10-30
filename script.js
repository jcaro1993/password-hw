// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var num = "0123456789";

var result = []
upperCase = upperCase.split("")
lowerCase = lowerCase.split("")
specialChar = specialChar.split("")
num = num.split("")

alert("Welcome! Please click 'Generate password' to start!");

function generatePassword() {

    var pwlength = prompt("How long do you want your password to be");
    var newPass = ""
    var letterChoice = confirm("do you want ypur password to have letters?")
    var numChoice = confirm("do you want your password to have numbers?")
    var symbolChoice = confirm("do you want your password to have special letters")
    if (pwlength < 8 && pwlength > 128) {
        alert("Password should be between 8 and 128 Characters")

    } else {
        if (letterChoice == true) {
            for (var i = 0; i < upperCase.length; i++) {
                result.push(upperCase[i])
            }
            for (var i = 0; i < lowerCase.length; i++) {
                result.push(lowerCase[i])
            }
        }
        if (numChoice == true) {
            for (var i = 0; i < num.length; i++) {
                result.push(num[i])
            }
        }
        if (symbolChoice == true) {
            for (var i = 0; i < specialChar.length; i++) {
                result.push(specialChar[i])
            }
        }

        // create a loop that loops pwlength * and gets a random char from my results array and uses that to creat final PW
        for (var i = 0; i < pwlength; i++) {
            newPass += result[Math.floor(Math.random() * result.length)]
        }
    }
    return newPass
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
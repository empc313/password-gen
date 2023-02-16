// Assignment code here
var passwordLength;
var password = "";
var confirmLower;
var confirmUpper;
var confirmSpecial;
var confirmNumber;

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

var password = document.getElementById("password");
//function to determine the length of the pssword
function generatePassword() {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var password = ""
  passwordLength = prompt("How many characters would you like to use?");
for ( var i=0; i <=passwordLength; i++);
var randomNumber = Math.floor(Math.random()* chars.length)
document.getElementById("password").value = password;
//function used to choose special characters
function determineSpecial(){
confirmSpecial = prompt ("Would you like to use special characters?");
//defining string varibles
if (confirmSpecial === null || confirmSpecial === ""){
  alert("yes or no");
  determineSpecial();
} else if (confirmSpecial === "yes" || confirmSpecial ==="y");
};
  }
//Variables
var charBank = "";
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

//confirm if password should include the following
var includeNumbers = confirm("Would you like to use numbers?");
var includeLower = confirm("Would you like to use lower-case letter?");
var includeUpper = confirm("Would you like to use upper-case letters?");
var includeSpecial = confirm("Would you like to include special charcters?");


//function to generate the type of password you want to create
function generatePassword() {
  if (includeNumbers) {
    includeNumbers = charBank.concat(charBank.numbers);
  }
  if (includeLower) {
    includeLower = charBank.concat(charBank.lowerCase);
  }
  if (includeUpper) {
    upperCase = charBank.concat(charBank.upperCase);
  }
  if (includeSpecial) {
    speechSynthesis = charBank.concat(charBank.special);
  }
  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 charcters"
    );
    
    if (passwordLength < 7 || passwordLength > 129) {
      alert("Please choose a password length between 8 and 128 charcters");
      return "Invalid";
    }
  }
  
  function writePassword() {
        var randomChar = Math.floor(Math.random()* charBank.length);
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // function generatePassword(){
    //   var generate = "";
//   for(i = 0; password; i++){
//     generate += randomPass;
//   }}

//generate password on click
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

console.log(generate);

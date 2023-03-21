
//Variables
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
var newPassword =[];
var charBank = number.concat(lowerCase).concat(upperCase).concat(special);


//function to generate the type of password you want to create
function generatePassword() { 
  var includeNumbers = confirm("Would you like to use numbers?");
  if (includeNumbers === true) {
    
  }
  var includeLower = confirm("Would you like to use lower-case letter?");
  if (includeLower === true) {
    
  }
  var includeUpper = confirm("Would you like to use upper-case letters?");
  if (includeUpper === true) {
    true;
  }
  var includeSpecial = confirm("Would you like to include special charcters?");
  if (includeSpecial) {
    true;
  }
  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 charcters"
    );
    if (passwordLength < 7 || passwordLength > 129) {
      alert("Please choose a password length between 8 and 128 charcters");
      return "Invalid";
    } 
     
    return  charBank[Math.floor(Math.random() * charBank.length)];
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

//generate password on click
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

console.log(generate);

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
var charBank = [];

//function to generate the type of password you want to create
function generatePassword() {
  var password = "";
  var includeNumbers = confirm("Would you like to use numbers?");
  var includeLower = confirm("Would you like to use lower-case letter?");
  var includeUpper = confirm("Would you like to use upper-case letters?");
  var includeSpecial = confirm("Would you like to include special charcters?");
  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 charcters"
  );
  passwordLength = parseInt(passwordLength);
  if (includeNumbers === true) {
    charBank = charBank.concat(number);
  }
  if (includeLower === true) {
    charBank = charBank.concat(lowerCase);
  }
  if (includeUpper === true) {
    charBank = charBank.concat(upperCase);
  }
  if (includeSpecial === true) {
    charBank = charBank.concat(special);
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 charcters");
    return "Invalid";
  }

  for (let i = 0; i < passwordLength; i++) {
    password += charBank[Math.floor(Math.random() * charBank.length)];
  }
  return password;
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

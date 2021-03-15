// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var length = prompt("How many characters would you like your password to be? Please enter between 8 to 128 characters.")

  if (length < 8 || plength > 128){
      alert("The length of your password must be between 8 to 128 characters.")
  }
  
  if (length >= 8 && plength <= 128){
  var cuppercase = confirm("Would you like letters in UPPER CAPS?")
  var clowercase = confirm("Would you like letters in LOWER CAPS?")
  var cnumbers = confirm("Do you need numbers in your password?")
  var csymbols = confirm("Do you need special characters?")
  }    
  
  if (cuppercase != true && clowercase != true && cnumbers != true && csymbols != true){
      alert("You must select at least one character type!")
  }
  
 /* DOM */

 const resultEl = document.getElementById('password');
  
 document.getElementById('generate').addEventListener('click', () => { 
   const hasLower = clowercase.true;
   const hasUpper = cuppercase.true;
   const hasNumber = cnumbers.true;
   const hasSymbol = csymbols.true;
   resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
 });
 
 
 const randomFunc = {
   lower: getRandomLower,
   upper: getRandomUpper,
   number: getRandomNumber,
   symbol: getRandomSymbol
 }
 
 
 function generatePassword(lower, upper, number, symbol, length) {
   let generatedPassword = '';
     const typesCount = lower + upper + number + symbol;
   const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
 
   // create a loop
      for(let i=0; i<length; i+=typesCount) {
     typesArr.forEach(type => {
       const funcName = Object.keys(type)[0];
       generatedPassword += randomFunc[funcName]();
     });
   }
   
   const finalPassword = generatedPassword.slice(0, length);
   
   return finalPassword;
 }
 
 


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get the generate button element
const generateBtn = document.querySelector("#generate");

// Defining the funtion to generate a random password
function generatePassword() {
  // Defining characters that will  be used in password  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+";

 // These are the prompts that will be displayed to the user, will provide perameters for password
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumeric = confirm("Include numbers?");
  const includeSpecial = confirm("Include special characters?");

// Based on user responses, theses will fulfill the user requests for parameters in password
  let charset = "";
  if (includeLowercase) {
    charset += lowercaseChars;
  }
  if (includeUppercase) {
    charset += uppercaseChars;
  }
  if (includeNumeric) {
    charset += numericChars;
  }
  if (includeSpecial) {
    charset += specialChars;
  }

// Generating a random password using the built in character set
  let password = "";
  while (password.length < 8) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Defining the writePassword() function so that it can display the generated password
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adding event listener to generate button to trigger the password 
generateBtn.addEventListener("click", writePassword);

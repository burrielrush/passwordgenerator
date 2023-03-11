// Get the generate button element
const generateBtn = document.querySelector("#generate");

// Define the generatePassword() function
function generatePassword() {
  // Define the character sets to be used
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+";

  // Prompt the user for which character sets to include
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumeric = confirm("Include numbers?");
  const includeSpecial = confirm("Include special characters?");

  // Build the character set for the password
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

  // Generate the password
  let password = "";
  while (password.length < 8) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Define the writePassword() function
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

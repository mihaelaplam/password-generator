// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return null;
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return null;
  }

  // Store user options in an object
  var passwordOptions = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  
  // Exit function if user cancels or provides invalid input
  if (!options) {
    return "";
  }

  // Combine selected character sets based on user options
  var allChars = '';
  if (options.includeLowercase) allChars += lowerCasedCharacters.join('');
  if (options.includeUppercase) allChars += upperCasedCharacters.join('');
  if (options.includeNumeric) allChars += numericCharacters.join('');
  if (options.includeSpecial) allChars += specialCharacters.join('');

  // Generate the password
  var password = '';
  for (var i = 0; i < options.length; i++) {
    password += getRandom(allChars);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.createElement('button');
generateBtn.textContent = 'Generate Password';

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
  var password = generatePassword();
  alert("Your generated password is:\n" + password);
});

// Append button to the body
document.body.appendChild(generateBtn);

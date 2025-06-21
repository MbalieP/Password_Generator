

/**
 * Generates a random password based on specified criteria.
 * 
 * @param {number} length - The desired length of the password.
 * @param {boolean} includeLowercase - Whether to include lowercase letters.
 * @param {boolean} includeUppercase - Whether to include uppercase letters.
 * @param {boolean} includeNumbers - Whether to include numbers.
 * @param {boolean} includeSymbols - Whether to include special symbols.
 * @returns {string} - The generated password or an error message.
 */
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    // Character sets for password generation
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
    const numberChars = "0123456789"; // Numeric characters
    const symbolChars = "!@#$%^&*()_+-="; // Special symbols

    let allowedChars = ""; // String to hold allowed characters for password
    let password = ""; // String to hold the generated password

    // Build the allowed characters string based on user preferences
    allowedChars += includeLowercase ? lowercaseChars : ""; // Add lowercase if selected
    allowedChars += includeUppercase ? uppercaseChars : ""; // Add uppercase if selected
    allowedChars += includeNumbers ? numberChars : ""; // Add numbers if selected
    allowedChars += includeSymbols ? symbolChars : ""; // Add symbols if selected

    // Check if the specified length is valid
    if (length <= 0) {
        return "(Password length must be at least 1)"; // Error message for invalid length
    }
    
    // Check if at least one character set has been selected
    if (allowedChars.length === 0) {
        return "(At least 1 set of characters needs to be selected)"; // Error message for no character sets
    }

    // Generate the password by selecting random characters from allowedChars
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length); // Get a random index
        password += allowedChars[randomIndex]; // Append the character at the random index to the password
    }

    return password; // Return the generated password
}

// Configuration for password generation
const passwordLength = 10; // Set desired password length
const includeLowercase = true; // Include lowercase letters
const includeUppercase = true; // Include uppercase letters
const includeNumbers = true; // Include numbers
const includeSymbols = true; // Include symbols

// Generate the password using the specified configuration
const password = generatePassword(passwordLength, 
                                   includeLowercase, 
                                   includeUppercase, 
                                   includeNumbers, 
                                   includeSymbols);

// Output the generated password to the console
console.log(`Generated password: ${password}`);

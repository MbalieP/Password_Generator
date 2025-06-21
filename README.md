# 🔐 Random Password Generator (JavaScript)

This is a simple JavaScript program that generates a random password based on your chosen preferences:

- Include lowercase letters ✅  
- Include uppercase letters ✅  
- Include numbers ✅  
- Include symbols ✅  

## 📌 Features
- Specify password length
- Choose what types of characters to include
- Generates a secure, random password

## 💻 How It Works

```javascript
generatePassword(length, lower, upper, numbers, symbols)
Example
javascript
Copy
Edit
generatePassword(10, true, true, true, true);
This will generate a 10-character password including all character types.

🚀 Usage
You can run this in the browser's developer console or include it in a web project.

📂 File
passwordGenerator.js — Main JavaScript file containing the password generation logic

✅ Example Output
nginx
Copy
Edit
Generated password: aR8!mB#5Wp
🧠 Author
Mbali's Coding Journey 💻

yaml
Copy
Edit

---

### 📁 Folder & File Structure
random-password-generator-js/
├── README.md
└── passwordGenerator.js

yaml
Copy
Edit

---

### 📌 How to Upload to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Name it `random-password-generator-js`
3. On your local machine:
   ```bash
   mkdir random-password-generator-js
   cd random-password-generator-js
   echo "// your JS code here" > passwordGenerator.js
   # Paste the simplified version into passwordGenerator.js

   # Add the README.md
   # Paste the content from above into README.md

   git init
   git add .
   git commit -m "Initial commit: Add password generator"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/random-password-generator-js.git
   git push -u origin main

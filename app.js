// app.js

document.getElementById('generate').addEventListener('click', function () {
    const length = parseInt(document.getElementById('length').value);
    const useLowercase = document.getElementById('lowercase').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols);
    document.getElementById('password').value = password;
});

// Функція для генерації пароля
function generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characters = '';
    if (useLowercase) characters += lowercase;
    if (useUppercase) characters += uppercase;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

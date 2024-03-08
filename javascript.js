const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordErrorsDiv = document.querySelector('.password-errors-div')
const passwordMatchErrors = document.querySelector('.password-match-errors');

const capitalLetterRule = document.querySelector('.capital-letter-rule');
const smallLetterRule = document.querySelector('.small-letter-rule');
const numberRule = document.querySelector('.number-rule');
const specialCharacterRule = document.querySelector('.special-character-rule');
const lengthRule = document.querySelector('.length-rule');

password.addEventListener('focus', checkPassword);
password.addEventListener('input', checkPassword);
password.addEventListener('change', checkPasswordMatch);
confirmPassword.addEventListener('change', checkPasswordMatch);

function checkPasswordMatch() {
    if (password.value.length > 0 && confirmPassword.value.length > 0 && password.value != confirmPassword.value) {
       passwordMatchErrors.textContent = 'Passwords do not match';
    } else {
        passwordMatchErrors.textContent = '';
    }
}

function checkPassword() {
    passwordErrorsDiv.setAttribute('style', 'visibility: visible;');
    if (/[A-Z]/.test(password.value)) {
        capitalLetterRule.setAttribute('style', 'color: green; font-weight: bold;');
    } else {
        capitalLetterRule.setAttribute('style', 'color: black;')
    }
    if (/[a-z]/.test(password.value)) {
        smallLetterRule.setAttribute('style', 'color: green; font-weight: bold;');
    } else {
        smallLetterRule.setAttribute('style', 'color: black;');
    }
    if (/\d/.test(password.value)) {
        numberRule.setAttribute('style', 'color: green; font-weight: bold;');
    } else {
        numberRule.setAttribute('style', 'color: black;');
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        specialCharacterRule.setAttribute('style', 'color: green; font-weight: bold;');
    } else {
        specialCharacterRule.setAttribute('style', 'color: black;');
    }
    if (password.value.length >= 8 && password.value.length <= 15) {
        lengthRule.setAttribute('style', 'color: green; font-weight: bold;');
    } else {
        lengthRule.setAttribute('style', 'color: black;');
    } 
}
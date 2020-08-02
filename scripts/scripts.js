// when document is ready
$(document).ready(function(){

    const passGenApp = {};

    passGenApp.getRadioBtnValue = () => {
        const useUpperBtn = document.querySelector('#useUpper');
        const useNumberBtn = document.querySelector('#useNumbers');
        const useSpecialCharBtn = document.querySelector('#useSpecialChar');
        const checkedButtons = [];
        for (let button of [useUpperBtn, useNumberBtn, useSpecialCharBtn]) {
            if (button.checked) {
                checkedButtons.push(button.value);
            }
        }
        return checkedButtons;
    }

    passGenApp.createPasswordArray = (arr) => {
        const passwordLibrary = {
            upperAlphaLibrary: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numberLibrary: '1234567890',
            specialLibrary: '~!@#$%^&*()_+=-',
        }
        let fullstringLibrary = 'abcdefghijklmnopqrstuvwxyz';
        const keysOfPasswordLibrary = Object.keys(passwordLibrary);
        const values = Object.values(arr);
        for (const key of keysOfPasswordLibrary) {
            for (const value of values) {
                if (key === value) {
                    fullstringLibrary = fullstringLibrary + passwordLibrary[key];
                }
            }
        }
        return fullstringLibrary;
    }

    passGenApp.randInt = (number = 12) => {
        return Math.floor((Math.random() * number))
    }

    passGenApp.createPassword = (passwordLength) => {
        const finalPassword = [];
        const arrayLibrary = passGenApp.createPasswordArray(passGenApp.getRadioBtnValue());
        for (i = 0; i < passwordLength; i++) {
            let randomNumber = passGenApp.randInt(arrayLibrary.length);
            finalPassword.push(arrayLibrary[randomNumber]);
        }
        return finalPassword.join('');
    }; 

    $('.submitButton').on("click", function(event){
        event.preventDefault();

        let returnPassword;
        let requestedPasswordLength = $('#numberInput').val();
        if (requestedPasswordLength > 12) {
            returnPassword = passGenApp.createPassword(requestedPasswordLength);
            $('.returnPassage').text(returnPassword);
        } else {
            alert('For your own sake, please enter a number greater than 12.');
        }
        
    })
});
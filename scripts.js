// when document is ready
$(document).ready(function(){

    // Get value of the radio buttons

    const getRadioBtnValue = () => {
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

    // Create string of all characters for password & pass into array

    const createPasswordArray = (arr) => {
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
        // for (let item of arr) {
        //     for (let book of passwordLibrary) {
        //         if (item == book.key);
        //             console.log(item, key);
        //     }
            
        // }
        // const arrayLibrary = fullstringLibrary.split('');
        // return arrayLibrary;
    }

    // const lowerAlphaLibrary = 'abcdefghijklmnopqrstuvwxyz';
    // const upperAlphaLibrary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const numberLibrary = '1234567890';
    // const specialLibrary = '~!@#$%^&*()_+=-';
    // const fullstringLibrary = lowerAlphaLibrary + upperAlphaLibrary + numberLibrary + specialLibrary;
    // const arrayLibrary = fullstringLibrary.split('');

    // Create a random integer function
    const randInt = (number = 10) => {
        return Math.floor((Math.random() * number))
    }

    // Function to create the password, return as string
    const createPassword = (passwordLength) => {
        const finalPassword = [];
        const arrayLibrary = createPasswordArray(getRadioBtnValue());
        for (i = 0; i < passwordLength; i++) {
            let randomNumber = randInt(arrayLibrary.length);
            finalPassword.push(arrayLibrary[randomNumber]);
        }
        return finalPassword.join('');
    }; 

    // Add event listener and functionality in button
    $('.submitButton').on("click", function(event){
        event.preventDefault();

        // Use create password array function to create array to use

        let returnPassword;
        let requestedPasswordLength = $('#numberInput').val();
        if (requestedPasswordLength > 6) {
            returnPassword = createPassword(requestedPasswordLength);
            $('.returnPassage').text(returnPassword);
        } else {
            alert('For your own sake, please enter a number greater than 12.');
        }
        
    })
});
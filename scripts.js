// when document is ready
$(document).ready(function(){

    // Create string of all characters for password & pass into array

    const createPasswordArray = () => {
        const lowerAlphaLibrary = 'abcdefghijklmnopqrstuvwxyz';
        const upperAlphaLibrary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberLibrary = '1234567890';
        const specialLibrary = '~!@#$%^&*()_+=-';
        const fullstringLibrary = lowerAlphaLibrary + upperAlphaLibrary + numberLibrary + specialLibrary;
        const arrayLibrary = fullstringLibrary.split('');
        return arrayLibrary;
    }

    const lowerAlphaLibrary = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphaLibrary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberLibrary = '1234567890';
    const specialLibrary = '~!@#$%^&*()_+=-';
    const fullstringLibrary = lowerAlphaLibrary + upperAlphaLibrary + numberLibrary + specialLibrary;
    const arrayLibrary = fullstringLibrary.split('');

    // Create a random integer function
    const randInt = (number = 10) => {
        return Math.floor((Math.random() * number))
    }

    // Function to create the password, return as string
    const createPassword = (passwordLength) => {
        const finalPassword = [];
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
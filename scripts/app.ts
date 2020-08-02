const passGenApp:Object = {};

passGenApp.getRadioBtnValue = ():Array<Element> => {
    const useUpperBtn:Element = document.querySelector('#useUpper');
    const useNumberBtn:Element = document.querySelector('#useNumbers');
    const useSpecialCharBtn:Element = document.querySelector('#useSpecialChar');
    const checkedButtons:Array<Element> = [];
    for (let button of [useUpperBtn, useNumberBtn, useSpecialCharBtn]) {
        if (button.checked) {
            checkedButtons.push(button.value);
        }
    }
    return checkedButtons;
}

passGenApp.createPasswordArray = (arr) => {
    interface Library { upperAlphaLibrary: string; numberLibrary: string; specialLibrary: string }
    const passwordLibrary = {} as Library;
    passwordLibrary.upperAlphaLibrary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    passwordLibrary.numberLibrary = '1234567890';
    passwordLibrary.specialLibrary = '~!@#$%^&*()_+=-';
    let fullstringLibrary:String = 'abcdefghijklmnopqrstuvwxyz';
    const keysOfPasswordLibrary:Array<string> = Object.keys(passwordLibrary);
    const values:Array<string> = Object.values(arr);
    for (const key of keysOfPasswordLibrary) {
        for (const value of values) {
            if (key === value) {
                fullstringLibrary = fullstringLibrary + passwordLibrary[key];
            }
        }
    }
    return fullstringLibrary;
}

passGenApp.randInt = (num:number = 12):number => {
    return Math.floor((Math.random() * num))
}

passGenApp.createPassword = (passwordLength:number):string => {
    const finalPassword:Array<string> = [];
    const arrayLibrary = passGenApp.createPasswordArray(passGenApp.getRadioBtnValue());
    for (let i:number = 0; i < passwordLength; i++) {
        let randomNumber:number = passGenApp.randInt(arrayLibrary.length);
        finalPassword.push(arrayLibrary[randomNumber]);
    }
    return finalPassword.join('');
}; 

const submitButton:Element = document.querySelector('.submitButton');
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let returnPassword:String = null;
    let requestedPasswordLength:number = parseInt(document.querySelector('#numberInput').value);
    if (typeof(requestedPasswordLength) === 'number'){
        if (requestedPasswordLength > 12) {
            returnPassword = passGenApp.createPassword(requestedPasswordLength);
            const response:Element = document.querySelector('.returnPassage');
            response.innerHTML = returnPassword;
        } else {
            alert('For your own sake, please enter a number greater than 12.');
        }
    } else {
        alert('Please enter a number.');
    }
})
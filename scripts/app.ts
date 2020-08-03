let getRadioBtnValue = ():Array<Element> => {
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

let createPasswordArray = (arr:Element[]) => {
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

let randInt = (num:number = 12):number => {
    return Math.floor((Math.random() * num))
}

let createPassword = (passwordLength:number):string => {
    const finalPassword:Array<string> = [];
    const arrayLibrary:any[] = createPasswordArray(getRadioBtnValue());
    for (let i:number = 0; i < passwordLength; i++) {
        let randomNumber:number = randInt(arrayLibrary.length);
        finalPassword.push(arrayLibrary[randomNumber]);
    }
    return finalPassword.join('');
}; 

let submitButton:Element = document.querySelector('form');
console.log(submitButton);
submitButton.addEventListener('submit', (event) => {
    event.preventDefault();
    let returnPassword:String = null;
    let requestedPasswordLength:number = parseInt(document.querySelector('#numberInput').value);
    if (requestedPasswordLength > 12) {
        returnPassword = createPassword(requestedPasswordLength);
        const response:Element = document.querySelector('.returnPassage');
        response.innerHTML = returnPassword;
    } else {
        alert('For your own sake, please enter a number greater than 12.');
    }
})
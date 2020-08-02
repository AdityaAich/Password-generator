var passGenApp = {};
passGenApp.getRadioBtnValue = function () {
    var useUpperBtn = document.querySelector('#useUpper');
    var useNumberBtn = document.querySelector('#useNumbers');
    var useSpecialCharBtn = document.querySelector('#useSpecialChar');
    var checkedButtons = [];
    for (var _i = 0, _a = [useUpperBtn, useNumberBtn, useSpecialCharBtn]; _i < _a.length; _i++) {
        var button = _a[_i];
        if (button.checked) {
            checkedButtons.push(button.value);
        }
    }
    return checkedButtons;
};
passGenApp.createPasswordArray = function (arr) {
    var passwordLibrary = {};
    passwordLibrary.upperAlphaLibrary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    passwordLibrary.numberLibrary = '1234567890';
    passwordLibrary.specialLibrary = '~!@#$%^&*()_+=-';
    var fullstringLibrary = 'abcdefghijklmnopqrstuvwxyz';
    var keysOfPasswordLibrary = Object.keys(passwordLibrary);
    var values = Object.values(arr);
    for (var _i = 0, keysOfPasswordLibrary_1 = keysOfPasswordLibrary; _i < keysOfPasswordLibrary_1.length; _i++) {
        var key = keysOfPasswordLibrary_1[_i];
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            if (key === value) {
                fullstringLibrary = fullstringLibrary + passwordLibrary[key];
            }
        }
    }
    return fullstringLibrary;
};
passGenApp.randInt = function (num) {
    if (num === void 0) { num = 12; }
    return Math.floor((Math.random() * num));
};
passGenApp.createPassword = function (passwordLength) {
    var finalPassword = [];
    var arrayLibrary = passGenApp.createPasswordArray(passGenApp.getRadioBtnValue());
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = passGenApp.randInt(arrayLibrary.length);
        finalPassword.push(arrayLibrary[randomNumber]);
    }
    return finalPassword.join('');
};
var submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var returnPassword = null;
    var requestedPasswordLength = parseInt(document.querySelector('#numberInput').value);
    if (typeof (requestedPasswordLength) === 'number') {
        if (requestedPasswordLength > 12) {
            returnPassword = passGenApp.createPassword(requestedPasswordLength);
            var response = document.querySelector('.returnPassage');
            response.innerHTML = returnPassword;
        }
        else {
            alert('For your own sake, please enter a number greater than 12.');
        }
    }
    else {
        alert('Please enter a number.');
    }
});

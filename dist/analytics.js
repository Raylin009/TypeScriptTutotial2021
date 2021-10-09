"use strict";
console.log('analytics online...');
var button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!!' + message);
}
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
        console.log('Clicked!', clickHandler.bind(null));
    });
}

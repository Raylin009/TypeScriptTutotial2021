"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "maps";
if (typeof userInput === 'string') {
    userName = userInput;
}
;
//unknow if better than "any" 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An eror occured', 500);
//this is a utility funciton that is pretty common 
//this function returns "never"
//becuase throw error "crashed" the code so the function nver returns anything
//we can see this when we codole.log and it didn't return "undefined"

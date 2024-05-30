//simple password validator:-

//write a  function called simplepasswordvalidator that takes  single parameter:-

//?password:- a string representing the password to be validated.
//?the function should validate the pasword based on following critiria:-

//>the password must contain at least one lowerCase letter,one Uppercase letter,and one digit.
//?the length of password must be at 8 characters.
//?the fnction return true if the password meets all the cetiria,otherwise it should return false.

const simplePasswordValidation = (password) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;

    for (let char of password) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasUpperCase = true;
        } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;
        } else if (!isNaN(parseInt(char))) {
            hasNumber = true;
        }
    }

    if (hasUpperCase && hasLowerCase && hasNumber && password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

//input:-
//?password:-A non-empty String representing the password to be validated.
//output:-
//?true if the password meets all the cetiria,otherwise it should return false.
//?constraints:- the input string password willcontain only alphanumaric character and punctuvation marks.

console.log(simplePasswordValidation("abdjs2A"))//false
console.log(simplePasswordValidation("abdshjs2A"))//false
console.log(simplePasswordValidation("abdshjs2Aa"))//false


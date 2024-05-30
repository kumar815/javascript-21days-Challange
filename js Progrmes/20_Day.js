//write a functions to check if a character is upperCase or lowerCase


const isupperCase = (char) => {
    // if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    //     return true;
    // }
    // return false;
    return char === char.toUpperCase();//short way
};

// Example usage:
console.log(isupperCase('A')); // true
console.log(isupperCase('a')); // false
console.log(isupperCase('Z')); // true
console.log(isupperCase('z')); // false

//constraints:-
//the input character will be a single character
//the character can be any printable ASCII Character
//you can asume that the input will always be string of length 1
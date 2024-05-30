//?write function to determine whether a given string is a palindrome or not.a palindrome is a 
//word,phrasse,number,or other sequence of characters that reads the same forword and backward
//ignoring spaces,punctuation,and capitalization.
const isPalindrome = (str) =>{
    str = str.toLowerCase().replace(/\W/g,"");
    let r_str = str.split("").reverse().join("");
    console.log(r_str);
    return str === r_str ? true : false;}
console.log(isPalindrome("A man, a plan, a canal,panama"));//true
console.log(isPalindrome("racecar"));//true
console.log(isPalindrome("hello"));//false
//short code

// const isPalindrome = str => str.toLowerCase().replace(/[^a-z0-9]/g, "") === str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").reverse().join("");

// // Test the function
// console.log(isPalindrome("samas")); // true
// console.log(isPalindrome("lol")); // true
// console.log(isPalindrome("12521")); // true


//constraints:-
//The Input nstring my contain letters,digits,space,punctions,and specail character
//the functionsholud be case-insensitive meening "Racecar" and "racecar" should consider same(return true).
//ignore spaces,punctuations,and special characters when determaing if a string is palindrome.
//the function should return true if the input stringis a palindromeansd false otherwise.


//Noite:-
//?.replace(/\W/g,"") :  use the replace() method with regular expression
// /\/W/g to remove all non-word character from the string here : here
//?  /W matches any non-word charater (equalent to[^a-zA-Z0-9_]).
//?so replace (/\W/g,"")The flag perofrms aglobal search,meaning it replaces all accerances of non-word characters in the string
//? replace all non-word characters with an emptystring , effectively removing them from the string.
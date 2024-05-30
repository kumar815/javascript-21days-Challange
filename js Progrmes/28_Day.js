//write a functions called repeatstring that takes twomparameters
//?str:a string that needs to be repeted
//?num: An integer represnting the number of time the string sholud be repeated/
//the function should repeat the input string str the specified number of times num and return
//the resukting string.

const repeatString = (str,num) => {
    return num > 0 ? str.repeat(num):str;
}
console.log(repeatString("Anand",5));

//constraints:-
//?The input string str  will contain only alphanumaric characters and punctuations marks.
//?the input nuber num will be non-nagative integers
//?the output string length should not exceed the length of string multiple by num

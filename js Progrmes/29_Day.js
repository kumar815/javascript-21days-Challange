//write a function called truncatestring that takes two parameters:-
//?str:- A string that needs to be truncated.
//?maxlength;-An integer represnting the maxLength of the string allowed.
//?the function should truncate the input string str if its length exceeds the specified maxLength.
//if truncation accres,the functionshould addv'...' to the end of the truncate string.

const truncateString = (str,count) =>{
    // if(count <= 0){
    //     return str;
    // }
    // else if (str.length > count){
    //     return str.slice(0,count).concat('...')
    // }
    //short progrme
    return str.length > count ? str.slice(0,count).concat('...') : str;
}



console.log(truncateString("A-tisket a-tasket a-green and yellow basket",5));

//constraints:-
//?the input string str will contain only alphanumaric charecters and puncutions marks.
//?the maxium lenth maxlength will be positive integer.
//?the output string length should not exceed maxium lenth + 3 charecters due to the addition of '...'.


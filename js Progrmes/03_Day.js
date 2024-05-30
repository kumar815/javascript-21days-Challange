/**Count Occurence of character or(countChar in the input)*/
//?write a function called countChar that takes two parameters: a string and a character to count._
//The function should return the number of times specified character appears in the string.
const countChar =(word,char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split("").reduce((accum,curChar)=>{
        //reduce used for  transforming an array into a single value.
        if(curChar===char){
            accum++;
        }
        return accum;
    },0);
    return totalCount;
    //console.log(totalCount);
}
console.log(countChar("Missingppissppis","s",))//output : 5
//constraints:-
//?The function should be case sensitive.
//?a function shold be handlle both lowerCase and upperCase characters.
//?the charaacter parameter can be any printable ASCII character(the function shoulb be_
//accepted any character that is part of the ASCii charater set and is printable)
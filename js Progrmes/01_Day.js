//longest word in a string
//notes:=
//if the input string is empty or contains only whitespaces,the function should be return an false.
//the function should ignore leading and trailing white space when detarmaining the longest word.
const findLongestWord =(str)=>{
    if (str.trim().length === 0) { // check both for null and whitespace === compire to data  type as well as value 
        return false;
    }
    word = str.split(" ");//split  the string into array of words by whitespace
    // word = word.sort((a,b) => a.length - b.length);//sort the  array by the length of each element
    // console.log(word);    // return word[0];//index  zero will contain the longest word
    return word.reduce(
        (previosword, currentword)=>(currentword.length > previosword.length ? currentword: previosword),'')
}

console.log(
    findLongestWord("Watch Whenevar@Talks on Youtube Channal")
);
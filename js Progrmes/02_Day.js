/*HOW TO JS "HASH TAG GANARATOR" PROGRME?*/
//?Your implemented ganarate function ganaratehash taht tag from a given input string
//the hash tag shoulb be constuctored as fallow.
//?the input string should be converted to be hash tag format.show each word is capitalized and
//concatenated together without space
//?if the length of the input string greterthen 280 characters or if the input string is empty or
//contains only white spaces,the function should be return false.
//?other wise,the function should return the ganarator hash tag prefised with #.
const ganarateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) { // Corrected 'lenght' to 'length'
        return false;
    }
    str = str.split(" ");
    str = str.map(
        (curElm) => curElm.charAt(0).toUpperCase() + curElm.slice(1)
    );
    str = str.join("");
    //console.log(str);
    return str;
};
console.log(ganarateHash("my name is anandkumar reddy"));
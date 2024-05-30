//?write a function called CaluclateMean that takes an  array of number of input and returns 
//the mean (avarage) of those number.
//todo math the,the mean is the avarage of the set of number or numeric value that represnts the center of a collation of number

const calculateMean = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let sum = arr.reduce((accum, currElm) => accum + currElm, 0);
    return sum / arr.length;
}

//constraints:-
//the input array may comntaine positive and nagative integers
//the input array mayh be empty,if it's the empty,the function should return 0

console.log(calculateMean([1,2,3,4,5]));
console.log(calculateMean([10,20,30]));
console.log(calculateMean([-2,1,2]));
console.log(calculateMean([]));
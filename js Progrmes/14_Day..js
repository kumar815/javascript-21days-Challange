//?write a  function thats takes an array integers as input and remove an duplicate Elements
//returning new array with the only unique elemnts.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)];
    //console.log(newArr);
    return newArr;
}


console.log(removeDuplicates([1, 2, 4, 5, 1, 5, 7, 8]));//[ 1, 2, 4, 5, 7, 8 ]
console.log(removeDuplicates([3, 6, 5, 7, 2, 3, 7, 7]));//[ 3, 6, 5, 7, 2 ]
console.log(removeDuplicates([9, 8, 3, 3, 67, 9, 55, 67]));//[9, 8, 3, 67, 55]
console.log(removeDuplicates([]));
//The new set() methos in javascript create a new set object. a set object is a collations
//of unique value.it can storen any type of value,whether primitive value or object refernces

//constraints:-
//?the input array may contain both passitive and nagative integers
//?the array will not be empty
//?the array will not contain any duplicate elements
//?the element in the input array are not gurented to be sorted
//?the output array should retain the original order or elements from the input
//?the array will not contain any object references
//?the array will not contain any object references
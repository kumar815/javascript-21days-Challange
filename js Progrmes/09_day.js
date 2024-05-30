//calciuulate the avarage\

//write a function called calculateAvarage hat takes an array of
//number as input  and returns the average of those numbers.

//your  function should:

//accept an array of numbers as input.
//Calculate the sum of all the numbers n the array
//Divide the sum by the total number of eleents in the array to fng the avarage
//Return to find the average.

//Example usage:
const calculateAverage = (arr) => {
    let total = arr.reduce((accum, curElem) => accum + curElem, 0)
   //console.log(total);
    return total / arr.length;
}
console.log(calculateAverage([5, 10, 2, 8]));//Output: 6.25

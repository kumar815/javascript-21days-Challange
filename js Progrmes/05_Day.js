//sort an array (not using sort method)
//?write a function sort an array of number in an ascending order.
const sortAscending = (arr) => {
    //return arr.sort();           //this logic  will work for string but not for numbers 
    return arr.sort((a,b) => a-b);//this logic  is used to compare two numbers and based on that

}
console.log(sortAscending([9,5,8,3,2,1]));//1,2,3,5,8,9
console.log(sortAscending([10,15,8,9,4,3]));//3,4,8,9,10,15

//?the function should take an array of number as input
//?it should return a nwe array with the number of sorted in ascending order.
//?The original array should remain unchanged.
//?your not allowed to used the bulit-in sort() method.
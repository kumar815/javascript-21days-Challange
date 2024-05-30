//?write a function arraysAreequel that takes two arrys arr1 arr2 as input and returns true
// if the arrays are equal(i.e.,contain the same elements inthe sa,e order)and false otherwise.
const arraysAreEqual = (arr1,arr2)=>{
    if(arr1.length !== arr2.length){
    return false;
    }
    return arr1.every((curVal, index)=> curVal === arr2 [index]);
}
//example usage:
console.log(arraysAreEqual([1,2,3],[1,2,3]));//output: true
console.log(arraysAreEqual([1,2,3],[1,2,4]));//output: false
console.log(arraysAreEqual([], []));//output: true

//note:-


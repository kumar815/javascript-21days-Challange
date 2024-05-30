//?Write a function FindMax  that takes an arrayof number as input and returns
//the maximam num in the array


// const findMax = () =>{
//     return Math.max(8,90,8,7,3);
// }
// console.log(findMax());

const findMax = (arr) =>{
    console.log(...arr);
        return Math.max(...arr);
}


//examples usages
console.log(findMax([4,8,0,2,9]));//should return 9
console.log(findMax([-4, -8, -5, -2, -9]));
console.log(findMax([5]));
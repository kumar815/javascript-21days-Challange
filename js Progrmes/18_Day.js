//?find thwe min value in the array
//?write a function that takes an array of numbers as input and returns the minium value found in the array

// const findMin = (arr) =>{
//     arr = arr.sort((a,b)=>{
//         if(b>a) return-1;
//     })
//     return arr[0];
// }
const findMin = (arr) =>{
    if(arr.length ===0) return "array is empty"
    return Math.min(...arr);
}
console.log(findMin([2,7,6,8,9,3]));//2
console.log(findMin([-2,-6,-7,-3,2]));//-7
console.log(findMin([]));//undwfined



//constraints:-
//?the input array may contain both positive and nagative integer
//?the input array may be empty
//?the input array may contain duplicate values.


//notes:-
//?ensure the function handles edgs cases greacefully,such as an empty input array
//?consider using ES6 futures like the spread syntax(...) for a consince implementations
//?Todo in javascripts,spreed the syntax(...) is
//used to expand an arrAY into individule elements,in this functions,... array used to spread the element of the input array arr
//?for example, if array is [5,2,8,1,3],...array will be [5,2,8,1,3]
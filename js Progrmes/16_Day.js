//?write a functio called is powerOfTwo that takes an integer num as input and returns true if num 
//is a power of two,and false otherwise.


const isPowerOfTwo = (num) =>{
    let  op = false;
    for(let i=1;i<num;i++){
        if(2**i===num){
            op = true;
        }
    }
    return op;
}

console.log(isPowerOfTwo(8))//true
console.log(isPowerOfTwo(13))//false


// function power(b){
//     return function(a){
//         return a**b;
//     };
// }
// const pow = power(3);
// console.log(pow(4));

//notes:

//the input num will be a positive integer.
//Zero(0) and nagative integers are not considered powers of two.
//The function should return true if the given number is a 
//power OffscreenCanvasRenderingContext2D,and false otherwise
//Homework:-
//we can slove it using bitwise operator too but its your chance to fo it and let me know in the comment sections

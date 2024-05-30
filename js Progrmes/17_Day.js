//write a functiona caluclate the sum of squares of all elements in an array.
//for example givrn array [1,2,3] the funtion shoul;d return in because 1*1 + 2*2 + 3*3 =1+4+9=14

const sumOfSquares = (arr) =>{

    return arr.reduce((accum,curelm)=>accum+curelm*curelm,0);//short way

    // let sum = 0;
    // for (let elem of arr){
    //     sum = sum + elem*elem;
    // }
    // return sum;
}
console.log(sumOfSquares([1,2,3]));//14
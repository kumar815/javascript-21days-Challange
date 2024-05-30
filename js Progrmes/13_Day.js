//write a function that takes a number as input and return the sum of the its digits


// function sumOfDigits(num) {
//     let sum = 0;
//     let numStr = String(num);
//     for (let i = 0; i < numStr.length; i++) {
//         sum += parseInt(numStr[i]);
//     }
//     return sum;
// }

// console.log(sumOfDigits(12345));

    const sumOfDigits = (num) => {
        let arr = Array.from(String(num),Number);
        console.log(arr);
        return arr.reduce((accum,curElm) => accum += curElm,0 )
    }

console.log(sumOfDigits(12345));//1+2+3+4+5 =15
console.log(sumOfDigits(97854));//9+7+8+5+4 =33
console.log(sumOfDigits(16923545));//1+6+9+2+3+5+4+5 =30
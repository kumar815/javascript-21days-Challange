//?write a function called findmode that takes an areay of numbers as input and return the
//mode of the array(the number appier most frequntly)
function findMode(arr) {
    let counts = {};
    let maxFrequency = 0;
    let mode;
    for (let element of arr) {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxFrequency) {
            maxFrequency = counts[element];
            mode = element;
        }
    }
    return mode;
}
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output should be 2


//constraints:-


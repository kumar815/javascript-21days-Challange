//recursive number range ganarate
//?write a recursive function calledS numberRangerecursive that ganarates An array containing
//consecutive number from a and b
//input:-
//?a:-An integer represting the staring number of the range.
//?b:-an integer represnting the ending number of the range.
//?array;-an optional parameter represnting the array  two store the number in the range.
//it default in an empty array.

const numberRangerecursive = (a,b,arr=[]) => {
    if (a <= b){
        arr.push(a);
        return numberRangerecursive(a+1,b,arr);
    }
    return arr;
}


console.log(numberRangerecursive(0,2));
console.log(numberRangerecursive(-2, 2));
console.log(numberRangerecursive(2, 8));


//output:-
//?an array of all the numbers in the range a to b

//constraints:-
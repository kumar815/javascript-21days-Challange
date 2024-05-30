//write a function called  numberRange that ganarete an array containing consecutive number from a to b
//?inputs:-
//?a:-An integer represting the staring number of the range.
//?b:-an integer represnting the ending number of the range.
//?array;-an optional parameter represnting the array  two store the number in the range.
//it default in an empty array.
 const numberRange = (a,b) =>{
    while(a <= b){
        console.log(a);
        a++;
    }

 }

//?output:-An array containing consective number from the range a to b.
console.log(numberRange(0,2));
console.log(numberRange(-2,2));
console.log(numberRange(3,8));
//constraints:-
//?a and b wll be integer
//?a will be  less than or equal to b

//?a and b will be positive

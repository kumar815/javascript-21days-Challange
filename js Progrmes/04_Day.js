//?Write a function call checkTraiangleType that takes three parameters represting the length
//at the side of  traiangle,the function should return a string indicating the type of Traiangle:
//"equilateral","isosceles",s"scalene"
const checkTraiangleType = (a, b, c)=>{
    if (a === b &&  b === c) return "equilateral";
    if (a === b || b === c || a === c) return "isosceles";
    return "scalene";
}

console.log(checkTraiangleType(3, 3, 3));//"equilateral"
console.log(checkTraiangleType(3, 4, 3));//"isosceles"
console.log(checkTraiangleType(6, 8, 5));//"scalene"

//following rules:-
//?if all three side or equal length,return "equilateral".or (traingle60,60,60)
//?if you two sides or one side are equal and other is zero then return "isosceles".(traingle 30,40,30)
//?if all three sides have diffarent  lengths ,then it's a "scalene" (triangle,70,60,50,)
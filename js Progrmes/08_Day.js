//factorial challange

//write a function factorial that takes non-nagative integer num as input and return its facctorial.
//the factorial of a non-nagative integer n, denoted as a n!, is the product all positive interger
//less then or equal to n. the factorial 0 is defined as 1,

const factorial = (num) =>{
    let fact =1;
    for(let i=1 ; i<=num; i++){
        //console.log(i);
        fact = fact*i;
    }
    return fact;
}
//here are some examples of factorial calculations;-
console.log(factorial(7));//=>1
console.log(factorial(1));//=>1 
console.log(factorial(2));//=>2 
console.log(factorial(3));//=>6 
console.log(factorial(4));//=>24 
console.log(factorial(5));//=>120 5*4*3*2*1=120
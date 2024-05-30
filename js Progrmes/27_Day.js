//write a function to find the nth fibonacci number
//?the fibonacci series is sequence of number in each is number(fibonacci number)is the sum of
//two preciding ones it start with 0 and 1,and the subsequent numbers are calcluated by adding the last two
//number,so the fibonacci series looks like this:-0,1,1,2,3,5,8,13,21,34,55,89,144,233,377

//todo fibonacci  number isa calcluting using the formula :-
//? fib(n)=fib(n-1)+fib(n-2)
const fibonacci = (num) =>{
    if(num <=1){
    return num;
    }
    else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));

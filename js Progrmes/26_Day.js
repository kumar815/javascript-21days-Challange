//write a function to cvalcluate the factorial of a number.(using recursion)

//Recursion:_
//?recursion is a programming techniq where a function calls it self in order to solve a problem.
//in essence it function that call itself with simillar or simplear input until it reches a base case
//basecase:-
//? the base case in the condtion in a recursive function that stop the recursion it's the point
//at which the functon stop calling itself and return the value withhout further recursive.
//with out basecase th erecursive function would continue calling itself indefinetly leading,
//leading to what's knows as infinity recursion.

//recursivecase:-
//?the recursive case is the condition in a recursive functions that determines when the function
//shiuld call itself again.it's typically an expreesion or condiction that evaloute the  true for
//cetain inputs,indicatinfg that further recursion is neccesory to slove the problme.esch recursive call
//should move closer to the base case,eventullyh landing to termination of the recursion

console.log(factorial(5));

function factorial(num){
    if(num === 1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

//?factorial of 5 is 5*4*3*2*1
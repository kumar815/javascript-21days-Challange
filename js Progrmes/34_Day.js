//randon Hex color Ganaratte_________________
//?write a function randomHexColor that ganaratea a random hexadecimal colors code each item it
//is called.the function shou;d return a string reprensting the random color code in the format
//'#RRGGBB' where RR,GG and  por two digit hexadecimal member represnting the red,green,blue
//component of the colors respectevly.

//?your challange is to importent the random hexcolor function using js and ensure that it produces
//a valid Hexadecimal color code with a length of 7 characters (including the # symbol).

//constraints:-
//?the output color code should always start with # followed by six hexadecimal characters(RRGGBB).
//?the function should not takes any parameters.
//?the ganarate color code should be unique and evenly distributed acoress the entire range of
//possible hexadecimal color codes:-

const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    //{
//     return `#${Math.random().toString(16).slice(2,8).padEnd(6, 0)}`;
    
// }
console.log(randomHexColor());




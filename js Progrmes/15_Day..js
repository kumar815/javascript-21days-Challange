//?write a  function thayt takes a input and return the count of vowels in the string.
//consider a,e,i,o and u as vowels. (both upperCase and lowerCase)

const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
// const countVowels = (str) =>{
//     let Vowels = ['a','e','i','o','u'];
//     let arr = str.split('');
//     console.log(arr);
//     let count = 0 ;
//     for(let char of arr){
//         if(Vowels.includes(char.toLowerCase()))
//         {
//             count++;
//         }
//     }
//     return count;
// }

console.log(countVowels("Hello"));//e,o=2
console.log(countVowels("Meta Use X Use Y"));//e,a,u,e,u,e=6
console.log(countVowels("The Cick the brOwse Fox"));//e,i,e,o,e,o=6
//constraints:-
//the input string may contain letters in both upperCase and LowerCase.
//the output shiuld be non nagative integer reprresenting the count or vowels in the input string.
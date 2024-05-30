//?write a javascript functipon to count the occerences of each element of array and store the 
//counts in an object. the keys of the object should represent the elements of the array and the value,
//should reprent the number of times each element appear in the array.

//here what the functuon should do :-
//?accept an array number of input
//?create empty object called,count of store the counts of each element.
//?iterate through each element in the array
//?for each nummber, increment the count in the counts obeject.
//?if the count for the number, doesn't exist yet,initailize it to 1.
//?return the count of object containing the counts of each element.

//input examples:-
const number = [1, 2, 2, 3, 1, 4, 2];
let counts = {};
for (let element of number) {
    counts[element] = (counts[element] || 0) + 1;
}
console.log(counts);

//output:-
//{'1':2,'2':3,'3':1,'4':1}

//constraints:-
//the input array may contain positive integers only.
//you can assum that the input arrat is not empty

//help:-
// const obj = {};
// //setting a property using squre brackets
// obj["name"]="anand";
// //console.log(obj);//{key:'value'}
// //accesing the  using squre bracket
// console.log(obj["name"]);//output:-annad

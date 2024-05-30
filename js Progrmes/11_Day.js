
//js datatypes
//1)primitive => undifined,Boolean,int,number,string,bigint,symbol
//2)structural or non primitive =>obeject:-new object,array,map,set,wakemap,date:-function

//// Shallow copy
const Obj = {
    "first": 44,
    "second": 12,
    "third": { a: 1, b: 2 }
};
const copyObj = Object.assign({}, Obj); // Shallow copy of Obj

copyObj.third.a = 42; // Modify a property in the shallow copy

console.log(Obj);   // Original object remains unchanged
console.log(copyObj);  // Shallow copied object

/*Certainly!

Interviewer: "Can you explain what a shallow copy is?"

Candidate: "A shallow copy duplicates an object's properties, but if the object contains 
nested objects, it only copies references to those objects, not the objects themselves."

Interviewer: "When might you use a shallow copy?"

Candidate: "You'd use a shallow copy when you want to duplicate an object's properties but
 not its nested data, maybe because it's large or for reflecting changes across copies."




Interviewer: "What's the difference between shallow copy and deep copy?"    

Candidate: "A shallow copy only copies references to nested objects, while a
 deep copy creates independent copies of all nested objects, ensuring changes to 
 copies don't affectthe original.
 */

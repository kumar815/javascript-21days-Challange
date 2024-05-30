//Deep Copy

//?A deep copy is a duplication of an object and all of its nested objects, creating an entirely independent replica.Modifications to the copy do not affect the original, and vice versa.
//It ensures data integrity by isolating changes between different instances of an object
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Example usage
const originalObj = {
    a: 1,
    b: { c: 2 }
};

const copiedObj = deepCopy(originalObj);

// Modify the copied object
copiedObj.b.c = 10;

console.log(originalObj); // { a: 1, b: { c: 2 } }
console.log(copiedObj);   // { a: 1, b: { c: 10 } }

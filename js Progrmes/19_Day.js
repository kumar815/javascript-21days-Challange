//write a functions convert to string to camelCase & snakeCase
const toCamelCase = (str) => {
    return str.split(' ').map((word, index) => {
        // Capitalize first letter of each word after the first word
        if (index !== 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word.toLowerCase();
    }).join('');
};

console.log(toCamelCase("hello World to thaPa")); // Output: helloWorldToThaPa


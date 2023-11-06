let string1: string = 'apple';
let string2: string = 'orange';
let number1: number = 7;
let number2: number = 10;
let fruits: string[] = ['apple', 'banana', 'grape', 'kiwi'];

// Tests for equality and inequality with strings
console.log("Equality test for strings (True):");
console.log(string1 == 'apple');

console.log("Inequality test for strings (False):");
console.log(string1 != string1);

// Tests using the lower case function
console.log("Lowercase test (True):");
console.log(string1.toLowerCase() == 'apple');

console.log("Lowercase test (False):");
console.log(string2.toLowerCase() == 'apple');

// Numerical tests
console.log("Numerical equality test (True):");
console.log(number1 == 7);

console.log("Numerical inequality test (False):");
console.log(number2 != 10);

console.log("Greater than test (True):");
console.log(number2 > number1);

console.log("Less than test (False):");
console.log(number1 < number1);

console.log("Greater than or equal to test (True):");
console.log(number1 >= 7);

console.log("Less than or equal to test (False):");
console.log(number2 <= 5);

// Tests using "and" and "or" operators
console.log("Logical AND test (True):");
console.log(number1 > 5 && string1 == 'apple');

console.log("Logical OR test (False):");
console.log(number2 < 10 || string2 == 'apple');

// Test whether an item is in an array
console.log("Item in array test (True):");
console.log(fruits.includes('kiwi'));

// Test whether an item is not in an array
console.log("Item not in array test (False):");
console.log(!fruits.includes('orange'));

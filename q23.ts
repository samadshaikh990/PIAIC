let number1: number = 5;
let number2: number = 10;
let string1: string = 'hello';
let string2: string = 'world';

// Test 1: Equality test (True)
console.log("Is 5 equal to 5? I predict True.");
console.log(number1 == 5);

// Test 2: Equality test (False)
console.log("Is 5 equal to 10? I predict False.");
console.log(number1 == 10);

// Test 3: Inequality test (True)
console.log("Is 'hello' not equal to 'world'? I predict True.");
console.log(string1 != string2);

// Test 4: Inequality test (False)
console.log("Is 'hello' not equal to 'hello'? I predict False.");
console.log(string1 != 'hello');

// Test 5: Greater than test (True)
console.log("Is 10 greater than 5? I predict True.");
console.log(number2 > number1);

// Test 6: Greater than test (False)
console.log("Is 5 greater than 10? I predict False.");
console.log(number1 > number2);

// Test 7: Less than or equal to test (True)
console.log("Is 5 less than or equal to 10? I predict True.");
console.log(number1 <= number2);

// Test 8: Less than or equal to test (False)
console.log("Is 10 less than or equal to 5? I predict False.");
console.log(number2 <= number1);

// Test 9: Logical AND test (True)
console.log("Is 5 less than 10 and 'hello' equal to 'hello'? I predict True.");
console.log(number1 < number2 && string1 == 'hello');

// Test 10: Logical AND test (False)
console.log("Is 5 less than 10 and 'hello' not equal to 'hello'? I predict False.");
console.log(number1 < number2 && string1 != 'hello');

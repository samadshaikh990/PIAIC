// Array of numbers 1 through 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    // Determine the ordinal ending based on the number
    let ordinalEnding: string;

    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    // Print the result
    console.log(`${number}${ordinalEnding}`);
}

// Array of places to visit
let placesToVisit: string[] = ['Tokyo', 'Paris', 'New York', 'Machu Picchu', 'Sydney'];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order (without modifying the list):");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nArray in Original Order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order (without modifying the list):");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nArray in Original Order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit = placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit = placesToVisit.reverse();
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);

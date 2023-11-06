// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }

    return greatMagicians;
}

// Array of magician's names
let magicianNames: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Penn & Teller'];

// Call make_great function with a copy of the array to modify
let greatMagicians = make_great([...magicianNames]); // Using the spread operator to create a copy

// Call show_magicians function with each array to show the results
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

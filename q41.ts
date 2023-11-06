// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Array of magician's names
let magicianNames: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Penn & Teller'];

// Call the show_magicians function with the array
show_magicians(magicianNames);

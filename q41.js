// Define the show_magicians function
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
var magicianNames = ['Merlin', 'David Copperfield', 'Houdini', 'Penn & Teller'];
// Call the show_magicians function with the array
show_magicians(magicianNames);

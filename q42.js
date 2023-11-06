// Define the show_magicians function
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Define the make_great function
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames = ['Merlin', 'David Copperfield', 'Houdini', 'Penn & Teller'];
// Call make_great function to modify the array
var greatMagicians = make_great(magicianNames);
// Call show_magicians function to see the modified list
show_magicians(greatMagicians);

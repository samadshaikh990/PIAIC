var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Call make_great function with a copy of the array to modify
var greatMagicians = make_great(__spreadArray([], magicianNames, true)); // Using the spread operator to create a copy
// Call show_magicians function with each array to show the results
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

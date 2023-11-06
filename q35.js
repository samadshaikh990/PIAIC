// List of animals with a common characteristic
var animals = ['Dog', 'Cat', 'Rabbit'];
// Print the name of each animal using a for loop
console.log("Animal names:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i].toLowerCase(), " would make a great pet."));
}
// Print a line stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");

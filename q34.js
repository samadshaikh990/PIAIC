// Array of favorite pizza names
var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print the name of each pizza using a for loop
console.log("Pizza names:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Print a sentence for each pizza using the name
console.log("\nSentences about favorite pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
// Print a line expressing overall love for pizza
console.log("\nI really love pizza!");

// Array of friend names
var nammes = ['Alice', 'Bob', 'Charlie', 'David'];
// Print personalized messages to each person
console.log("Personalized Messages:");
for (var i = 0; i < nammes.length; i++) {
    var message = "Hello, ".concat(nammes[i], "! Have a great day.");
    console.log(message);
}

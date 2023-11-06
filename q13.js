// Array of favorite modes of transportation
var favoriteTransportation = ['Tesla Model S', 'BMW M3', 'Honda Civic', 'Ford Mustang'];
// Print statements about each mode of transportation
console.log("Favorite Modes of Transportation:");
for (var i = 0; i < favoriteTransportation.length; i++) {
    var statement = "I would like to own a ".concat(favoriteTransportation[i], ".");
    console.log(statement);
}

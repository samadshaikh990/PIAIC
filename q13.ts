// Array of favorite modes of transportation
const favoriteTransportation: string[] = ['Tesla Model S', 'BMW M3', 'Honda Civic', 'Ford Mustang'];

// Print statements about each mode of transportation
console.log("Favorite Modes of Transportation:");
for (let i = 0; i < favoriteTransportation.length; i++) {
    const statement: string = `I would like to own a ${favoriteTransportation[i]}.`;
    console.log(statement);
}

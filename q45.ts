// Define the carInfo function with a rest parameter for keyword arguments
function carInfo(manufacturer: string, modelName: string, ...options: any[]): object {
    let car: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add other name-value pairs to the car object
    for (let i = 0; i < options.length; i += 2) {
        if (i + 1 < options.length) {
            car[options[i]] = options[i + 1];
        }
    }

    return car;
}

// Call the function with required information and two other name-value pairs
let carDetails = carInfo('Toyota', 'Camry', 'color', 'Blue', 'optionalFeature', 'Navigation');

// Print the returned object to ensure all information was stored correctly
console.log(carDetails);
